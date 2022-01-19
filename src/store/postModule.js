export const postModule = {
    state: () => ({
        posts: [],
        isPostsLoading: false,
        searchQuery: "",
        page: 1,
        limit: 10,
        totalPages: 0,
        selectedSort: "",
        sortOptions: [
            {
                value: "title",
                name: "Name",
            },
            {
                value: "body",
                name: "Description",
            },
        ],
        isAuth: false
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((a, b) => {
                return a[state.selectedSort]?.localeCompare(b[state.selectedSort]);
            });
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter((post) =>
                post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
            );
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        setLoading(state, bool) {
            state.isPostsLoading = bool
        },
        setPage(state, page) {
            state.page = page
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        }
    },
    actions: {
        async fetchPosts({ state, commit, }) {
            try {
                commit('setLoading', true)
                setTimeout(async () => {
                    const url = new URL("https://jsonplaceholder.typicode.com/posts");
                    url.search = new URLSearchParams({
                        _limit: state.limit,
                        _page: state.page,
                    }).toString();
                    const res = await fetch(url)
                    commit('setTotalPages', Math.ceil(
                        res.headers.get("x-total-count") / state.limit
                    ))
                    const posts = await res.json();
                    commit('setPosts', posts)
                }, 1000);
            } catch (error) {
                alert(error);
            } finally {
                commit('setLoading', false)
            }
        },
        async loadMorePosts({ state, commit }) {
            try {
                commit('setPage', state.page + 1)
                setTimeout(async () => {
                    const url = new URL("https://jsonplaceholder.typicode.com/posts");
                    url.search = new URLSearchParams({
                        _limit: state.limit,
                        _page: state.page,
                    }).toString();
                    const res = await fetch(url)
                    commit('setTotalPages', Math.ceil(
                        res.headers.get("x-total-count") / state.limit
                    ))
                    const posts = await res.json();
                    commit('setPosts', [...state.posts, ...posts])
                }, 1000);
            } catch (error) {
                alert(error);
            }
        },
        createPosts({ state, commit }, post) {

        },
        removePost({state, commit}, post) {
            
        }
    },
    namespaced: true
}
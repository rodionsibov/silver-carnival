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
    }),
    getters: {

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
        setTotalPages(state,totalPages) {
            
        }
    },
    actions: {

    }
}
import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state: {
            fetchedPosts : [],
            singlePost: []
        },
        mutations: {
            setPosts(state, posts){
                state.fetchedPosts = posts
            },
            addPost(state, post){
                state.fetchedPosts.push(post)
            },
            addSinglePost(state, post){
                state.singlePost = post;
            },
            updatePost(state, post){
                state.fetchedPosts.forEach(item => {
                    if (item.id === post.id) {
                        item = Object.assign(item, post)
                    }
                })
            },
            deletePost(state, id) {
                state.fetchedPosts.forEach((item, index) => {
                    if (item.id === id) {
                        state.fetchedPosts.splice(index, 1)
                    }
                })
            }
        },
        actions: {
            async nuxtServerInit(vuexContext, context){
                if (!process.client) {
                    console.log("Server üzerinde")
                }
                const {data: posts, error} = await this.$supabase
                    .from('yazilar')
                    .select('*')
                vuexContext.commit("setPosts", posts)
            },
            setPosts(vuexContext, posts){
                vuexContext.commit("setPosts", posts)
            },
            async getSinglePost(vuexContext, postId) {
                const {data: post, error} = await this.$supabase
                    .from('yazilar')
                    .select('*')
                    .eq('id', postId)
                vuexContext.commit("addSinglePost", ...post)
            },
            async deleteSinglePost(vuexContext, postId) {
                const {data: post, error} = await this.$supabase
                    .from('yazilar')
                    .delete()
                    .match({ id: postId })
                vuexContext.commit("deletePost", postId)
            }
        },
        getters: {
            getPost: (state) => (id) => {
                return state.fetchedPosts.find(fetchedPosts => fetchedPosts.id === id)
            },
            getPosts: (state) => {
                return state.fetchedPosts
            },
            getSinglePost: (state) => {
                return state.singlePost
            }
        },
    })
}

export default createStore
import Vuex from "vuex"

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                title: "First post",
                previewText: "aaaab",
                thumbnail: "aaaa"
              },
                {
                  id: "2",
                  title: "Second post",
                  previewText: "aaaa",
                  thumbnail: "aaaa"
                },
                {
                  id: "3",
                  title: "Third post",
                  previewText: "aaaa",
                  thumbnail: "aaaa"
                },
                {
                  id: "4",
                  title: "Fourth post",
                  previewText: "aaaa",
                  thumbnail: "aaaa"
                },
              ]);
            resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    },

  })
};

export default createStore

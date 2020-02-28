import Vuex from "vuex";
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
        state.loadedPosts[postIndex] = editedPost;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://my-nuxt-blog-691f1.firebaseio.com/posts.json')
          .then(res => {
            const postsArray = [];
            for (const key in res.data) {
              postsArray.push({...res.data[key], id: key})
            }
            vuexContext.commit('setPosts', postsArray);
          })
          .catch(e => console.log(e));
      },
      addPost(vuexContext, post) {
        return axios.post('https://my-nuxt-blog-691f1.firebaseio.com/posts.json',
          {...post, updatedDate: new Date() })
          .then(result => {
            vuexContext.commit('addPost', {...post, id: result.data.id});
          })
          .catch(e => console.log(e));
      },
      editPost(vuexContext, editedPost) {
        return axios.put('https://my-nuxt-blog-691f1.firebaseio.com/posts/' +
          editedPost.id +
          '.json', editedPost)
          .then(res => vuexContext.commit('editPost', editedPost))
          .catch(e => console.log(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
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

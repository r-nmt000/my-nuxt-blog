<template>
    <div class="single-post-page">
      <section class="post">
        <h1>{{loadedPost.title}}</h1>
        <div class="post-details">
          <div class="post-detail">Last updated on {{loadedPost.updatedDate}}</div>
          <div class="post-detail">Written by {{loadedPost.author}}</div>
        </div>
        <p></p>
      </section>

    </div>
</template>

<script>
  import axios 'axios';
  export default {
    name: "index",
    asyncData() {
      return axios.get('https://my-nuxt-blog-691f1.firebaseio.com/posts/' + context.params.id + '.json')
        .then(res => {
          return {
            loadedPost: res.data
          };
        })
        .catch(e => context.error(e));
    }
  }
</script>

<style scoped>
  .single-post-page {

  }

</style>

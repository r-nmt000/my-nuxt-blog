<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
  import axios from 'axios';
  import AdminPostForm from "@/components/admin/AdminPostForm";

  export default {
    name: "index",
    layout: "admin",
    components: {AdminPostForm},
    asyncData(context) {
      return axios.get('https://my-nuxt-blog-691f1.firebaseio.com/posts/' + context.params.postId + '.json')
        .then(res => {
          console.log('get post data');
          return {
            loadedPost: res.data
          };
        })
        .catch(e => context.error(e));
    },
    methods: {
      onSubmitted(editedPost) {
        this.$store.dispatch('editPost', {...editedPost, id:this.$route.params.postId})
        .then(() => {
          this.$router.push('/admin')
        });
      }
    }
  }
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>

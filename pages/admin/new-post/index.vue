<template>
  <div class="admin-new-post-page">
    <AdminPostForm @submit="onSubmitted"/>
  </div>

</template>

<script>
  import axios from 'axios';
  import AdminPostForm from "@/components/admin/AdminPostForm";
    export default {
      name: "index",
      layout: "admin",
      components: {AdminPostForm},
      methods: {
        onSubmitted(postData) {
          axios.post('https://my-nuxt-blog-691f1.firebaseio.com/posts.json', postData)
          .then(result => console.log(result))
          .catch(e => console.log(e));
        }
      }

    }
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>

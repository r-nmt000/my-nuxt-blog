<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>

    </section>
  </div>

</template>

<script>
  import AdminPostForm from "@/components/admin/AdminPostForm";

  export default {
    name: "index",
    components: {AdminPostForm},
    data() {
      return {
        loadedPost: {
          author: 'Maximilian',
          title: 'test',
          content: 'aaaaaa',
          thumbnailLink: 'aaa'
        }
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

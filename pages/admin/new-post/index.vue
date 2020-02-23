<template>
  <div class="admin-new-post-page">
    <AdminPostForm/>
  </div>

</template>

<script>
  import AdminPostForm from "@/components/admin/AdminPostForm";
    export default {
      name: "index",
      components: {AdminPostForm},

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

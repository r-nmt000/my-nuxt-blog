<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <form @submit.prevent="onSave">
        <AppInputControl v-model="editedPost.author">Author Name</AppInputControl>
        <AppInputControl v-model="editedPost.title">Title</AppInputControl>
        <AppInputControl v-model="editedPost.thumbnailLink">Title</AppInputControl>
        <AppInputControl
          control-type="textarea"
          v-model="editedPost.content">Content</AppInputControl>

        <AppButton type="submit">Save</AppButton>
        <AppButton
          type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onCancel">Cancel</AppButton>


      </form>
    </section>
  </div>

</template>

<script>
    import AppInputControl from "../../../components/ui/AppControlInput";
    import AppButton from "../../../components/ui/AppButton";
    export default {
      name: "index",
      components: {AppButton, AppInputControl},
      data() {
          return {
            editedPost: {
              author: '',
              title: '',
              thumbnailLink: '',
              content: ''
            }
          }
      },
      methods: {
        onSave() {
          console.log(this.editedPost);
        },
        onCancel() {
          this.$router.push('/');
        }
      }

    }
</script>

<style scoped>

</style>

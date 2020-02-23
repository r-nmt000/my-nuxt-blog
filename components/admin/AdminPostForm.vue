<template>
  <section class="new-post-form">
    <form @submit.prevent="onSave">
      <AppInputControl v-model="editedPost.author">Author Name</AppInputControl>
      <AppInputControl v-model="editedPost.title">Title</AppInputControl>
      <AppInputControl v-model="editedPost.thumbnailLink">Title</AppInputControl>
      <AppInputControl
        control-type="textarea"
        v-model="editedPost.content">
        Content
      </AppInputControl>
      <AppButton type="submit">Save</AppButton>
      <AppButton
        type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onCancel">Cancel</AppButton>
    </form>
  </section>
</template>

<script>
  import AppInputControl from "@/components/ui/AppControlInput";
  import AppButton from "@/components/ui/AppButton";
  export default {
    name: "AdminPostForm",
    components: {AppButton, AppInputControl},
    props: {
      post: {
        type: Object,
        required: false
      }
    },
    data() {
      return {
        editedPost: this.post
          ? {...this.post}
          : {
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

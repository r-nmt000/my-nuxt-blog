<template>
  <div class="post-page">
    <PostList :posts="loadedPosts"/>
  </div>

</template>

<script>
  import PostList from "@/components/posts/PostList";
  export default {
    name: "index",
    components: {
      PostList,
    },
    asyncData(context, callback) {

      setTimeout(() => {
        callback(null, {
          loadedPosts: [
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
          ]
        });
      }, 1000);
    },
    // data() {
    //   return {
    //     loadedPosts: []
    //   }
    // },
  }
</script>

<style scoped>
  .post-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

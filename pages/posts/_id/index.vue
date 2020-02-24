<template>
    <div class="single-post-page">
      <section class="post">
        <h1>{{loadedPost.title}}</h1>
        <div class="post-details">
          <div class="post-detail">Last updated on {{loadedPost.updated}}</div>
          <div class="post-detail">Written by {{loadedPost.author}}</div>
        </div>
        <p></p>
      </section>

    </div>
</template>

<script>
  export default {
    name: "index",
    asyncData(context, callback) {
      setTimeout(() => {
        callback(null, {
          loadedPost: {
            id: "1",
            title: "First post ID: (" + context.params.id + ")",
            previewText: "aaaab",
            thumbnail: "aaaa",
            author: "nomoto",
            content: "aaaaaaaaaaaaa",
            updated: "2020/02/22"
          },
        })
      }, 1000)
    }
  }
</script>

<style scoped>
  .single-post-page {

  }

</style>

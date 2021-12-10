<template>
  <div>
    <PostList
        :posts="fetchedPosts"
        :is-admin="false">></PostList>
  </div>
</template>
<script>
import PostList from "~/components/post/PostList";

export default {
  components: {
    PostList,
  },
  data() {
    return {
      fetchedPosts: []
    }
  },
  created() {
    this.fetchedPosts = this.$store.getters.getPosts
  }
}
</script>

<style scoped>

</style>

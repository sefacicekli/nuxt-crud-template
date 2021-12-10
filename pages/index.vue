<template>
  <div>
    <PostList :posts="fetchedPosts"></PostList>
    <About></About>
  </div>
</template>
<script>
import PostList from "~/components/post/PostList";
import About from "~/components/homepage/About";

export default {
  components: {
    PostList,
    About
  },
  created() {
    this.$store.dispatch("setPosts", this.fetchedPosts)
    console.log({...this.fetchedPosts}[3])
  },
  computed: {
    fetchedPosts(){
      console.log(this.$store.getters.getPosts)
      return this.$store.getters.getPosts
    }
  },
}
</script>

<style scoped>

</style>

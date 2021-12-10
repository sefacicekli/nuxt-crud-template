<template>
  <PostDetail :post="post"></PostDetail>
</template>

<script>
import PostDetail from "@/components/post/PostDetail";

export default {
  name: "index",
  components: {
    PostDetail
  },
  async asyncData({route, params, $http, store }) {
    await store.dispatch("getSinglePost", params.postId);
  },
  created() {
      this.post = this.$store.getters.getSinglePost
      console.log(this.post)
  },
  data(){
    return {
      post : null
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <div class="container d-flex justify-content-center align-items-center">
      <button @click="$router.push('/admin/new-post')" class="btn btn-dark">Yeni Bir Yazı Ekle</button>
    </div>
    <PostList
        :posts="fetchedPosts"
        :is-admin="true"></PostList>
  </div>
</template>
<script>
import PostList from "~/components/post/PostList";

export default {
  layout: "admin",
  data() {
    return {
      fetchedPosts: []
    }
  },
  components: {
    PostList,
  },
  created() {
    console.log("index created");
    this.fetchedPosts = this.$store.getters.getPosts
  }
}
</script>

<style scoped>

</style>

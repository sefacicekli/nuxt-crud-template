<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <Post @delete="deletePost($event)" :post="post" v-for="post in posts" :is-admin="isAdmin" :key="post.id"></Post>
  </div>
</template>

<script>
import Post from "@/components/post/Post"
export default {
  name: "PostList",
  components: {
    Post
  },
  props : {
    isAdmin : {
      type : Boolean,
      required : false,
      default : false
    },
    posts: {
      required: true,
      type: Array
    }
  },
  methods: {
    async deletePost(id) {
      await this.$store.dispatch("deleteSinglePost", id)
    }
  }
}
</script>

<template>
  <post-form @submit="updatePost($event)" :is-update="true" :post="loadedPost"></post-form>
</template>

<script>
import PostForm from "@/components/admin/PostForm";

export default {
  name: "new-post",
  components: {
    PostForm
  },
  async asyncData({params, $http, store}) {
    await store.dispatch("getSinglePost", params.postId);
  },
  async created() {
    this.loadedPost = await this.$store.getters.getSinglePost
  },
  data() {
    return {
      loadedPost: null
    }
  },
  methods: {
    async updatePost(post){
      const { data, error } = await this.$supabase
          .from('yazilar')
          .update(post)
          .match({ id: post.id })
      await this.$store.commit("updatePost", post)
      this.$router.push('/admin')
    }
  }
}
</script>

<style scoped>

</style>
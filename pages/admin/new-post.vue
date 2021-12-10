<template>
  <post-form @submit="createPost($event)"></post-form>
</template>

<script>
import PostForm from "@/components/admin/PostForm";
import axios from "axios";
export default {
  name: "new-post",
  components: {
    PostForm
  },
  methods: {
    // savePost(post){
    //   axios.post("https://nuxt-example-deneme-default-rtdb.europe-west1.firebasedatabase.app/yazilar.json", post)
    //   .then(res => {
    //     console.log(res)
    //     this.$router.push("/admin")
    //   })
    //   this.createPost(post)
    // },
    async createPost(post){
      const { data } = await this.$supabase
          .from('yazilar')
          .insert([
            { title: post.title, subtitle: post.subtitle, text: post.text, author: post.author }
          ])
          .single()
      await this.$store.commit("addPost", data);
      await this.$router.push("/admin")
    }
  },
  data(){
    return {
      posts: [],
      loaded: false,
    }
  }
}
</script>

<style scoped>

</style>
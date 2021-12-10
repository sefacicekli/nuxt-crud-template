<template>
  <div class="container mt-5 d-flex flex-column justify-content-center align-items-center">
    <blockquote class="blockquote">
      <h3>{{ post.title }}</h3>
      <p>{{ post.subtitle }}</p>
      <p class="mb-0">{{ post.text }}</p>
      <footer class="blockquote-footer">Asasdsdsdsdsd<cite title="Source Title">{{ post.author }}</cite></footer>
    </blockquote>
    <a href="#" @click.prevent="$router.push('/post')" class="btn btn-outline-info btn-sm">Tüm yazılar</a>
  </div>
</template>

<script>
export default {
  name: "PostDetail",
  props : {
    post : {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      // from: ''
    }
  }
}
</script>

<style scoped>

</style>
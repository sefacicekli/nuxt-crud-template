<template>
  <div class="card mr-3 mb-3 card-success" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ post.subtitle }}</h6>
      <p class="card-text">{{ post.text }}</p>
      <div class="admin-button-container" v-if="isAdmin">
        <a href="#"  @click.prevent="$router.push('/admin/' + post.id)" class="btn btn-outline-warning btn-sm">Düzenle</a>
        <a href="#" @click="onDelete"  class="btn btn-outline-danger btn-sm">Sil</a>
      </div>
      <a v-else href="#" @click.prevent="$router.push('/post/' + post.id)" class="btn btn-outline-info btn-sm">Görüntüle</a>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    isAdmin: {
      required : true,
      type : Boolean,
    },
    post: {
      required: true,
      type: Object
    }
  },
  methods: {
    onDelete(){
      this.$emit("delete", this.post.id)
    }
  }
}
</script>
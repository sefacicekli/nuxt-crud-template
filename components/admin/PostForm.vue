<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <form style="width: 500px" @submit.prevent="onSubmit">
      <fieldset>
        <legend v-if="isUpdate">Köşe Yazısı Düzenle</legend>
        <legend v-else>Yeni Köse Yazısı</legend>
        <div class="form-group">
          <label>Yazar Adı</label>
          <input v-model="post.author" type="text" class="form-control" placeholder="Yazarın adını giriniz..">
        </div>
        <div class="form-group">
          <label>Baslık</label>
          <input v-model="post.title" type="text" class="form-control" placeholder="Yazının baslıgını giriniz..">
        </div>
        <div class="form-group">
          <label>Alt Baslık</label>
          <input v-model="post.subtitle" type="text" class="form-control" placeholder="Yazının alt baslıgını giriniz..">
        </div>
        <div class="form-group">
          <label>Köse Yazısı</label>
          <textarea  v-model="post.text" class="form-control" rows="5"></textarea>
        </div>
        <button @click="$router.push('/admin')" class="btn btn-danger">İptal</button>
        <button  type="submit" class="btn btn-primary">Kaydet</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: "PostForm",
  data(){
    return {
      post : {
        title : null,
        subtitle: null,
        author: null,
        text : null
      }
    }
  },
  methods: {
    onSubmit(){
      this.$emit("submit", this.post)
    }
  },
  props: {
    isUpdate : {
      type : Boolean,
      required : false,
      default : false
    },
    post: {
      type: Object,
      required: false,
      default: false
    }
  },
  created() {
    this.post = this.post ? this.post : {
      id: null,
      title : null,
      subtitle: null,
      author: null,
      text : null
    }
  }
}
</script>

<style scoped>

</style>
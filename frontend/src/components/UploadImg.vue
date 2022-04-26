<template>
  <div>
    <div v-if="!image">
      <h2>Select an image</h2>
      <input type="file" @change="onFileChange" />
    </div>
    <div v-else>
      <img :src="image" />
      <button @click="upload">upload</button>
      <button @click="removeImage">Remove image</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UploadImg",
  data() {
    return {
      image: "",
    };
  },
  methods: {
    upload() {
      axios
        .post("http://localhost:3000/api/products/addproduct", {
          image: this.image,
          title: "req.body.title",
          description: "req.body.description",
          quantite: 40,
          user_id: "req.body.user_id",
        })
        .then((result) => {
          console.log(result.data, "upload function");
        })
        .catch((err) => console.log(err));
    },

    onFileChange(e) {
      var files = e.target.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function () {
      this.image = "";
    },
  },
};
</script>

<style>
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
  border-radius: 50%;
  width: 2cm;
  height: 2cm;
}
input{
    border: 2px solid #eee;
}
</style>

<template>
  <div>
    <div >
      <h2>Select an image</h2>
      <input type="file" @change="onFileChange" />
      <button @click="upload()">upload</button>
    </div>
    <!-- <div v-else>
      <img :src="imageUrl" />
      
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "UploadImg",
  data() {
    return {
      imageUrl: null,
    };
  },
  methods: {
    async upload() {
      
      const form = new FormData();
      form.append("image_url", this.imageUrl);
  
      try {
        await axios.post(
          "http://localhost:3000/api/products/addImage",
          form
        );
      } catch (err) {
        console.log(err);
      }
    },
    onFileChange(e) {
    console.log(e)
    this.imageUrl = e.target.files[0]
    console.log(this.imageUrl,'ffrom on chage')
        
    },
   
  },
};
</script>

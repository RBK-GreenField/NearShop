<template>
  <div class="cl-upload">
    <h2>Please select your image :</h2>
  </div>
  <form v-on:submit.prevent="upload">
    <label for="file-input">Upload:</label>
    <input
      id="file-input"
      type="file"
      accept="image/png, image/jpeg"
      @change="files($event)"
    />
    <button type="submit" :disabled="filesSelected < 1">Upload</button>
  </form>
  <section v-if="results && results.secure_url">
    <img :src="results.secure_url" :alt="results.public_id" />
  </section>
</template>

<script>
// import axios from "axios";
export default {
  name: "UploadA",
  data() {
    return {
      file: null,
      filesSelected: 0,
      cloudName: "dqoni9psy",
      preset: "mourad",
      tags: "browser-upload",
      fileContents: null,
      formData: null,
    };
  },
  methods: {
    files: function (event) {
      console.log("handlefilechange", event.target.files);
      this.file = event.target.files;
      console.log(this.file[0]);
      this.filesSelected = event.target.files.length;
    },
    async upload() {
      const fileee = this.file[0];
      const data = new FormData();
      data.append("file", fileee);
      data.append("upload_preset", "mourad");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dqoni9psy/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const filess = res.json();
      console.log(filess);
    },
    // Data: function () {
    //   this.formData = new FormData();
    //   this.formData.append("upload_preset", "mourad");
    //   this.formData.append("tags", this.tags); // Optional - add tag for image admin in Cloudinary
    //   this.formData.append("file", this.fileContents);
    // },
    // upload: async function () {
    //   // let URL = "https://api.cloudinary.com/v1_1/dqoni9psy/upload";
    //   await axios.post(
    //     "https://api.cloudinary.com/v1_1/dqoni9psy/upload",
    //     this.formData
    //   );
    // },
    // upload: function () {
    //   console.log("upload", this.file.name);

    //   let reader = new FileReader();
    //   reader.addEventListener(
    //     "load",
    //     function () {
    //       this.fileContents = reader.result;
    //       this.prepareFormData();
    //       let cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/dqoni9psy/upload`;
    //       let requestObj = {
    //         url: cloudinaryUploadURL,
    //         method: "POST",
    //         data: this.formData,
    //         onUploadProgress: function (progressEvent) {
    //           console.log("progress", progressEvent);
    //           this.progress = Math.round(
    //             (progressEvent.loaded * 100.0) / progressEvent.total
    //           );
    //           console.log(this.progress);
    //         }.bind(this),
    //       };
    //       this.showProgress = true;
    //       axios(requestObj)
    //         .then((response) => {
    //           this.results = response.data;
    //           console.log(this.results);
    //           console.log("public_id", this.results.public_id);
    //         })
    //         .catch((error) => {
    //           this.errors.push(error);
    //           console.log(this.error);
    //         })
    //         .finally(() => {
    //           setTimeout(
    //             function () {
    //               this.showProgress = false;
    //             }.bind(this),
    //             1000
    //           );
    //         });
    //     }.bind(this),
    //     false
    //   );
    //   if (this.file && this.file.name) {
    //     reader.readAsDataURL(this.file);
    //   }
    // },
  },
};
</script>
<style scoped>
form {
  display: grid;
  padding: 1em;
  background: #f9f9f9;
  border: 1px solid #c1c1c1;
  margin: 2rem auto 0 auto;
  max-width: 500px;
  padding: 1em;
}
form input {
  background: #fff;
  border: 1px solid #9c9c9c;
}
form button {
  background-color: blue;
  color: white;
  font-size: 1em;
  font-weight: bold;
  padding: 0.7em;
  width: 100%;
  border: 0;
}
form button:hover {
  background: gold;
  color: black;
}

label {
  padding: 0.5em 0.5em 0.5em 0;
}

input {
  padding: 0.7em;
  margin-bottom: 0.5rem;
}
input:focus {
  outline: 3px solid gold;
}

@media (min-width: 400px) {
  form {
    grid-template-columns: 150px 1fr;
    grid-gap: 16px;
  }

  label {
    text-align: right;
    grid-column: 1 / 2;
  }

  input,
  button {
    grid-column: 2 / 3;
  }
}

button {
  background-color: blue;
  color: white;
  font-weight: bold;
  border-radius: 10px;
}
button:focus {
  outline: none;
}
form button:disabled,
form button[disabled] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
section {
  margin: 10px 0;
}
img {
  max-width: 300px;
  height: auto;
}
</style>

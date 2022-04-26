<template>
  <div class="home">
    <h1>My Product</h1>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h3 class="pt-3">Add your Product</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <form>
            <div class="fields">
              <label>Title</label>
              <span>
              <input
                type="text"
                placeholder="name of your product"
                class="form-control"
                v-model="title"
              /></span>
            </div>
            <div class="fields">
              <label>Description</label>
              <span>
              <textarea
                type="text"
                placeholder="description"
                class="form-control"
                v-model="description"
              /></span>
            </div>
            <div class="fields">
              <label>quantite</label>
              <span>
              <input
                type="number"
                placeholder="quantite"
                class="form-control"
                v-model="quantite"
              /></span>
            </div>
             <div class="form-group">
              <label>price</label>
              <input
                type="number"
                placeholder="quantite"
                class="form-control"
                v-model="price"
              />
            </div>
            <div>
   <div v-if="!image">
      <h2>Select an image</h2>
      <input type="file" @change="onFileChange" />
    </div>
    <div v-else >
      <img :src="image" />
      
      <button @click="removeImage">Remove image</button>
    </div>
  </div>
            <button
              type="button"
              @click="AddProduct"
              class="btn btn-primary"
              id="save"
            >
              Save
            </button>
            <button
              type="button"
              @click="getProductById"
              class="btn btn-primary"
              id="get"
            >
              get product
            </button>
          </form>
        </div>
        <div class="col-3">
          <li>
            {{ data }}

            >
          </li>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div class="pos">
    {{ data}}
    <!-- <UploadImg  /> -->
    <AddComment />
    </div>
  </div>
</template>

<script>
import AddComment from "./AddComment";
import axios from "axios";
// import UploadImg from "@/components/UploadImg.vue";
export default {
  name: "Add-Product",
  components: {
    AddComment,
    // UploadImg,
  },
  data() {
    return {
      title: "",
      description: "",
      quantite: "",
      price:'',
      user_id: "",
      data: [],
      image: ""
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/users/user", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        // to get information of the user
        this.user_id = res.data.user.id;
      })
      .then((res) => {
        console.log(res.user_id, "heee");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    /// add new product///////
    AddProduct() {
      let newProduct = {
        title: this.title,
        price:this.price,
        description: this.description,
        quantite: this.quantite,
        user_id: this.user_id,
        image:this.image
      };
      axios
        .post("http://localhost:3000/api/products/addproduct", newProduct)
        .then((res) => {
          this.$router.push("All-Products");
          console.log (res)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProductById() {
       this.$router.push("MyProducts");
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
h1 {
  text-align: center;
}
.container1 {
  margin-left: 30%;
  margin-right: -40%;
  width: 2000px;
}
#save {
  margin-left: 20%;
}

#get{
  margin-left: 40%;
}


 h1 {
     text-align: center;
     color: #333333
 }

 .pos{
margin-left:40%
 }


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


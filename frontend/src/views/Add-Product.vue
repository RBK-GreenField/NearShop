<template>
  <div class="home">
    zid produit fisa3
    <AddComment />
    <UploadImg/>
  </div>
  {{ id }}
</template>

<script>
import AddComment from "./AddComment";
import axios from "axios";
import UploadImg from "@/components/UploadImg.vue";
export default {
  name: "Add-Product",
  components: {
    AddComment,
    UploadImg
},
  data() {
    return {
      title: "",
      description: "",
      quantitie: "",
      user_id: "",
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/users/user", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);
        // to get id of user
        this.user_id = res.data.user.id;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    AddProduct() {
      let newProduct = {
        title: this.title,
        description: this.description,
        quantite: this.quantite,
        user_id: this.user_id,
      };
      axios
        .post("http://localhost:3000/api/products/add", newProduct)
        .then((res) => {
          this.$router.push("All-Products");
          console.log(res.data.user.id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <section class="vh-100" style="background-color: #9a916b">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-5">
          <div class="card" style="border-radius: 5%; margin-top: 0">
            <div class="row g-0">
              <div class="col-md-6 col-lg- d-none d-md-block">
                <div v-if="!image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrOHq5b-DCyl9R6lCn5Xpi2glZMZilUYrqB0cx6GiGhHSowO3jGQn1Zqfvf4KR0Ax8gvk&usqp=CAU"
                  />
                </div>
                <div v-else>
                  <img
                    :src="image"
                    alt="login form"
                    class="img-fluid"
                    style="border-radius: 5% 0 0 1rem"
                  />
                </div>
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form>
                    <div class="d-flex align-items-center mb-3 pb-1">
                      <i
                        class="fas fa-cubes fa-2x me-3"
                        style="color: #ff6219"
                      ></i>
                      <span class="h1 fw-bold mb-0">Logo</span>
                    </div>

                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                      create your account
                    </h5>

                    <div class="form-outline mb-2">
                      <label class="form-label" for="form2Example27">username</label>
                      <input
                        type="text"
                        id="form2Example07"
                        class="form-control form-control-lg"
                        v-model="username"
                      />
                      
                    </div>

                    <div class="form-outline mb-2">
                       <label class="form-label" for="form2Example17">Email address</label>
                      <input
                        type="email"
                        id="form2Example17"
                        class="form-control form-control-lg"
                        v-model="email"
                      />
                     
                    </div>

                    <div class="form-outline mb-2">
                      <label class="form-label" for="form2Example27">Password</label>
                      <input
                        type="password"
                        id="form2Example27"
                        class="form-control form-control-lg"
                        v-model="password"
                      />
                      
                    </div>

                    <div class="form-outline mb-2">
                      <label class="form-label" for="form2Example27">address</label>
                      <input
                        type="text"
                        id="form2Example47"
                        class="form-control form-control-lg"
                        v-model="address"
                      />
                      
                    </div>

                    <div class="form-outline mb-2">
                      <label class="form-label" for="form2Example27">phone number</label>
                      <input
                        type="text"
                        id="form2Example57"
                        class="form-control form-control-lg"
                        v-model="phone"
                      />
                      <div v-if="!image" style="display: flex">
                        <h6>Select profile image</h6>
                        <input type="file" @change="onFileChange" />
                      </div>
                      <div v-else>
                        <!-- <img :src="image" /> -->

                        <button @click="removeImage">change photo</button>
                      </div>
                    </div>
                    <div class="pt-1 mb-4">
                      <button
                        @click="signup"
                        class="btn btn-dark btn-lg btn-block"
                        type="button"
                      >
                        SigNup
                      </button>
                      {{ error }}
                    </div>

                    <a class="small text-muted" href="#!">Forgot password?</a>
                    <a href="#!" class="small text-muted">Terms of use.</a>
                    <a href="#!" class="small text-muted">Privacy policy</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
;

<script>
import axios from "axios";

export default {
  name: "SigNup",
  data() {
    return {
      email: "",
      username: "",
      address: "",
      phone: "",
      password: "",
      image: "",
      error: "",
    };
  },
  methods: {
    signup() {
      let newUser = {
        username: this.username,
        email: this.email,
        password: this.password,
        image: this.image,
        phone: this.phone,
        address: this.address,
      };
      axios
        .post("http://localhost:3000/api/users/signup", newUser)
        .then((res) => {
          this.$router.push("/login");
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
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
  width: 50%;
  height: 50%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
  border-radius: 50%;
}
</style>

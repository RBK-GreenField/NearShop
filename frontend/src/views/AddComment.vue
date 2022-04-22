<template>
  <div>
    <div>
      <div>
        <div class="field">
          <label class="label">comment here</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="write ..."
              v-model="productName"
            />
          </div>
        </div>
        <div class="control">
          <button class="button is-success" @click="saveProduct">SEND</button>
        </div>
      </div>
      <div>
        <p>list</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AddComment",
  data() {
    return {
      description: "",
    };
  },
  methods: {
    async saveComment() {
      try {
        await axios.post("", {
          description: this.description,
        });
        this.comment = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style></style>

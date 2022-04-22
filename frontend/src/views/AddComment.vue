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
              v-model="description"
            />
          </div>
        </div>
        <div class="control">
          <button class="button is-success" @click="saveComment">SEND</button>
        </div>
      </div>
      <div>
        <p>list</p>
        <!-- <div v-for="comment in comments" :key="comment._id"> -->
        <!-- <p>{{ comments.length }}</p> -->
        <li v-for="comment in comments" v-bind:key="comment._id">
          {{ comment.description }}
        </li>
        <!-- <a
            class="button is-danger is-small"
            @click="deleteComment()"
            >Delete</a
          > -->
        <!-- </div> -->
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
      comments: [],
      description: "",
    };
  },
  mounted() {
    this.getCommentsbyProductId();
  },
  methods: {
    async saveComment() {
      try {
        await axios.post("http://localhost:3000/api/comments/addComment", {
          description: this.description,
          product_id: "12",
          user_id: "5",
        });
        this.description = "";
        this.getCommentsbyProductId()
        // this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    async getCommentsbyProductId() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/comments/12"
        );
        console.log(response.data);
        this.comments = response.data;
        this.description = "";
        // this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    // async deleteComment() {
    //   // try {
    //   //   const response = await axios.post(
    //   //     "http://localhost:3000/api/comments/12",
    //   //     {
    //   //       description: this.description,
    //   //     }
    //   //   );
    //   //   this.comments = response.data;
    //   //   this.comment = "";
    //   //   this.$router.push("/");
    //   // } catch (err) {
    //   //   console.log(err);
    //   // }
    // },
  },
};
</script>
<style></style>

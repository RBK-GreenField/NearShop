<template>
  <div>
    <div>
      <div>
        <div class="field">
          <div> 
            <div style="height: 5px;background-color:black ; margin-top: 20px;"></div>
            <p>comments</p>
            <div class="comment" v-for="comment in comments" v-bind:key="comment._id">
              <span style="border:1px solid;width:100%;" >
              <p>{{comment.user_id}}</p>
                {{ comment.description }}

                <a
                  class="button is-danger is-small"
                  @click="deleteComment(comment._id)"
                  >Delete</a
                >
              </span>
            </div>
          </div>
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
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AddComment",
  props:["product_id"],
  data() {
    return {
      comments: [],
      description: "",
      data: [],
      
    };
  },
  mounted() {
    this.getCommentsbyProductId();
    axios
      .get("http://localhost:3000/api/users/user", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        // console.log(res.data.user)
        this.data = res.data.user;
        console.log(this.data);
      })
      .then((res) => {
        console.log(res.user_id, "heee");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    async saveComment() {
      try {
        await axios.post("http://localhost:3000/api/comments/addComment", {
          description: this.description,
          product_id: this.product_id,
          user_id: this.data.id,
        });
        this.description = "";
        this.getCommentsbyProductId();
        // this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    async getCommentsbyProductId() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/comments/${this.product_id}`
        );
        console.log(response.data);
        this.comments = response.data;
        this.description = "";
        // this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    async deleteComment(_id) {
      try {
        await axios.delete(
          `http://localhost:3000/api/comments/deleteComment/${_id}`
        );
        this.getCommentsbyProductId();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style>
.comment{
  display: flex;
  background:#93b3e0 ;
}
</style>

<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-6 offset">
        <div class="card">
          <comment-form-vue @addComment="createCommit" />
          <comments-list-vue :comments="comments" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import CommentFormVue from "./components/CommentForm.vue";
import CommentsListVue from "./components/CommentsList";

export default {
  components: {
    CommentFormVue,
    CommentsListVue,
  },
  data() {
    return {
      comments: [
        {
          id: Date.now(),
          name: "Hasan",
          email: "hasan@luli.ru",
        },
        {
          id: Date.now(),
          name: "Husan",
          email: "husan@luli.ru",
        },
        {
          id: Date.now(),
          name: "Eshmat",
          email: "ehsmat@luli.ru",
        },
      ],

    };
  },
  methods: {
    createCommit(comment) {
      this.comments.push(comment);
    },
  },
};
</script>

<style scoped></style>

<template>
  <div class="card-header">
    <div @submit.prevent>
      <my-input
        v-model="comment.name"
        type="text"
        class="form-control"
        placeholder="Enter a name"
      />
      <my-input
        v-model="comment.email"
        type="passwd"
        class="form-control my-3"
        placeholder="Enter a email"
      />
      <my-input
        v-model="comment.body"
        type="passwd"
        class="form-control my-3"
        placeholder="Enter a body"
      />
      <my-btn @click="createComment" class="btn btn-success float-right">
        Add comments
      </my-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comment: {
        name: "",
        passwd: "",
      },
    };
  },
  methods: {
    createComment() {
      this.comment.id = Date.now();
      this.$emit("add", this.comment);
      this.comment = {
        name: "",
        passwd: "",
      };
    },
  },
};
</script>

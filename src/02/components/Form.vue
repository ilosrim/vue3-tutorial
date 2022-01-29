<template>
  <div class="card-header">
    <form @submit.prevent>
      <input v-model="comment.name" type="text" class="form-control" />
      <input v-model="comment.passwd" type="passwd" class="form-control my-3" />
      <button @click="createComment" class="btn btn-success">Add</button>
    </form>
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

<template>
  <div class="card-header d-flex justify-content-between">
    <form @submit.prevent class="d-flex justify-content-between w-100">
      <div>
        <input
          v-model="comment.name"
          type="text"
          placeholder="Enter a name"
          class="form-control"
        />
        <input
          v-model="comment.email"
          type="email"
          placeholder="Enter a email"
          class="form-control"
        />
      </div>
      <button @click="createCommit" class="btn btn-success ml-3">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    createCommit() {
      this.comment.id = Date.now();
      this.$emit("addComment", this.comment);
      this.comment = {
        name: "",
        email: "",
      };
    },
  },
};
</script>

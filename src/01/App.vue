<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-6 offset">
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            <form @submit.prevent class="d-flex justify-content-between w-100">
              <div>
                <input
                  @input="name = $event.target.value"
                  :value="name"
                  type="text"
                  placeholder="Enter a name"
                  class="form-control"
                />
                <input
                  @input="email = $event.target.value"
                  :value="email"
                  type="email"
                  placeholder="Enter a email"
                  class="form-control"
                />
              </div>
              <button @click="createCommit" class="btn btn-success ml-3">
                Add
              </button>
            </form>
          </div>
          <div
            class="card-body"
            v-for="comment in comments"
            v-bind:key="comment.id"
          >
            <p><b>Name:</b> {{ comment.name }}</p>
            <p><b>Email:</b> {{ comment.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      name: "",
      email: "",
    };
  },
  methods: {
    createCommit() {
      const newCommit = {
        id: Date.now(),
        name: this.name,
        email: this.email,
      };
      this.comments.push(newCommit);
      this.name = "";
      this.email = "";
    },
  },
};
</script>

<style scoped></style>

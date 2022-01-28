<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-5">
        <h3>Add comments</h3>
        <form @submit.prevent class="bg-slate-500">
          <input
            @input="name = $event.target.value"
            :value="name"
            type="text"
            class="form-control"
            placeholder="Enter Your Name"
          />
          <input
            @input="email = $event.target.value"
            :value="email"
            type="email"
            class="form-control my-3"
            placeholder="Enter Your Email"
          />
          <input
            @input="about = $event.target.value"
            :value="about"
            type="text"
            class="form-control"
            placeholder="Enter Your Comment"
          />
          <div class="d-flex flex-row-reverse">
            <button @click="createComment" class="btn btn-primary mt-3">
              Add comment
            </button>
          </div>
        </form>
      </div>
      <hr class="my-5" />
      <div class="col-md-12 mt-5">
        <div
          class="comment mt-3"
          v-for="comment in comments"
          v-bind:key="comment.id"
        >
          <p><b>Name:</b>{{ comment.name }}</p>
          <p><b>Email:</b>{{ comment.email }}</p>
          <p><b>About:</b>{{ comment.about }}</p>
        </div>
      </div>
      <hr class="my-5" />

      <!-- incremet & decement -->
      <div class="col-md-6 offset-3">
        <div class="card mt-5">
          <div class="card-body text-center">
            <h3>{{ count }}</h3>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <div @click="decrement" class="btn btn btn-primary">Decrement</div>
            <!-- v-on:click="decrement" -->
            <div @click="increment" class="btn btn btn-success">Increment</div>
            <!-- v-on:click="increment" -->
          </div>
        </div>
      </div>
      <hr class="my-5" />
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
          name: "Mirsoli",
          email: "mirsoli@gmail.com",
          about:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus explicabo quia, soluta suscipit iste qui officia.",
        },
        {
          id: Date.now(),
          name: "Ilosrim",
          email: "ilosrim@gmail.com",
          about:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus explicabo quia, soluta suscipit iste qui officia.",
        },
        {
          id: Date.now(),
          name: "Hasan",
          email: "hasan@gmail.com",
          about:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus explicabo quia, soluta suscipit iste qui officia.",
        },
        {
          id: Date.now(),
          name: "Husan",
          email: "husan@gmail.com",
          about:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus explicabo quia, soluta suscipit iste qui officia.",
        },
      ],
      name: "",
      email: "",
      about: "",
      count: 0,
    };
  },
  methods: {
    createComment() {
      const newComment = {
        id: Date.now(),
        name: this.name,
        email: this.email,
        about: this.about,
      };
      this.comments.push(newComment);
      this.name = "";
      this.email = "";
      this.about = "";
    },
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>

<style scoped>
.comment {
  border-radius: 10px;
  border: 3px solid #777777;
  padding: 8px;
}
</style>

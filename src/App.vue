<template>
  <div class="container">
    <div class="row">
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
      msg: "Hello Vue!",
      arr: [1, 2, 3, 4, 5],
      count: 0,
    };
  },
  methods: {
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

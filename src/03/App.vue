<template>
  <div class="container-full bg-gray-500 py-3 px-28">
    <navbar-vue />
  </div>
  <div class="container flex flex-col items-center justify-center pt-5 mt-5">
    <my-form-item-vue @add="createComment" />
    <hr class="w-full bg-green-400 my-4" />
    <my-list-vue :comments="comments" @remove:="removeComment" />
  </div>
</template>

<script>
import NavbarVue from "./components/Navbar";
import MyListVue from "./components/MyList";
import MyFormItemVue from "./components/MyFormItem";
export default {
  components: {
    NavbarVue,
    MyListVue,
    MyFormItemVue,
  },
  data() {
    return {
      comments: [
        { id: Date.now(), name: "Hasan", email: "hasan@gmail.com" },
        { id: Date.now(), name: "Husan", email: "husan@gmail.com" },
        { id: Date.now(), name: "Zokir", email: "zokir@gmail.com" },
      ],
    };
  },
  methods: {
    createComment(comment) {
      this.comments.push(comment);
    },
    removeComment(comment) {
      this.comments = this.comments.filter((c) => c.id !== comment.id);
    },
  },
};
</script>
<style scoped></style>

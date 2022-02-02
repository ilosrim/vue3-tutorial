<template>
  <navbar-vue :showModal="showModal" />
  <div class="container w-full">
    <div class="row mt-5">
      <div class="col-md-6 offset-3">
        <div class="card">
          <my-modal v-model:show="modalVissable">
            <my-form-vue @add="createComment" />
          </my-modal>
          <div v-if="!isLoading">
            <list-vue :comments="comments" @remove="removeComment" />
          </div>
          <div v-else class="text-center">
            <div class="spinner-border text-primary m-5" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyFormVue from "./components/MyForm";
import ListVue from "./components/List";
import NavbarVue from "./components/Navbar";
import MyModal from "./components/UI/MyModal";
import axios from "axios";

export default {
  components: {
    MyFormVue,
    ListVue,
    NavbarVue,
    MyModal,
  },
  data() {
    return {
      comments: [],
      modalVissable: false,
      isLoading: false,
    };
  },
  methods: {
    createComment(comment) {
      this.comments.push(comment);
      this.modalVissable = false;
    },
    removeComment(comment) {
      this.comments = this.comments.filter((c) => c.id !== comment.id);
    },
    showModal() {
      this.modalVissable = true;
    },
    async fetchComment() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments?_limit=10"
        );
        setTimeout(() => {
          console.log(response.data);
          this.comments = response.data;
          this.isLoading = false;
        }, 2000);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchComment();
  },
};
</script>

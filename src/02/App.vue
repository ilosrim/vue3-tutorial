<template>
  <navbar-vue :showModal="showModal" />
  <div class="container w-full">
    <div class="row mt-5">
      <div class="col-md-6 offset-3">
        <div class="card">
          <my-modal v-model:show="modalVissable">
            <my-form-vue @add="createComment" />
          </my-modal>
          <list-vue :comments="comments" @remove="removeComment" />
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

export default {
  components: {
    MyFormVue,
    ListVue,
    NavbarVue,
    MyModal,
  },
  data() {
    return {
      comments: [
        { id: 1, name: "Tolib", passwd: "1234" },
        { id: 2, name: "G'olib", passwd: "4321" },
      ],
      modalVissable: false,
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
  },
};
</script>

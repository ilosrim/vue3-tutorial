<template>
  <div class="container w-full">
    <div class="row mt-5">
      <div class="col-md-6 offset-3">
        <div class="card">
          <form-vue @add="createComment" />
          <list-vue :comments="comments" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormVue from "./components/Form";
import ListVue from "./components/List";

export default {
  components: {
    FormVue,
    ListVue,
  },
  data() {
    return {
      comments: [
        { id: Date.now(), name: "Tolib", passwd: "1234" },
        { id: Date.now(), name: "G'olib", passwd: "4321" },
      ],
    };
  },
  methods: {
    createComment(comment) {
      this.comments.push(comment);
    },
  },
};
</script>

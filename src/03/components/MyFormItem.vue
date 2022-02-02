<template>
  <div class="w-50 flex flex-col items-center justify-center">
    <div @submit.prevent>
      <my-input
        v-model="comment.name"
        class="form-control"
        type="text"
        placeholder="Enter a name.."
      />
      <my-input
        v-model="comment.email"
        class="form-control my-3"
        type="email"
        placeholder=" Enter a email.."
      />
      <my-btn @click="createComment" class="btn btn-success"
        >Add comment</my-btn
      >
    </div>
  </div>
</template>
<script>
import MyBtn from "../../02/components/UI/MyBtn.vue";
import MyInput from "../../02/components/UI/MyInput.vue";
export default {
  components: { MyInput, MyBtn },
  data() {
    return {
      comment: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    createComment() {
      this.comment.id = Date.now();
      this.$emit("add", this.comment);
      this.comment = {
        name: "",
        email: "",
      };
    },
  },
};
</script>

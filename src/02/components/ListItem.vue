<template>
  <div class="flex justify-between items-center">
    <div>
      <h3><b>Name: </b>{{ comment.name }}</h3>
      <h3><b>Email: </b>{{ comment.email }}</h3>
      <h4><b>Body:</b> {{ comment.body }}</h4>
    </div>
    <div>
      <my-btn @click="$emit('remove', comment)" class="btn btn-danger"
        >Delete</my-btn
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    comment: {
      typa: Object,
      required: true,
    },
  },
};
</script>

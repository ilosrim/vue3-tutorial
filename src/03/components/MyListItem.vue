<template>
  <div class="flex items-center justify-between">
    <div class="my-2">
      <h4><b>Name:</b> {{ comment.name }}</h4>
      <h4><b>Email:</b> {{ comment.email }}</h4>
    </div>
    <div>
      <my-btn @click="$emit('remove', comment)" class="btn btn-danger">
        Remove
      </my-btn>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>

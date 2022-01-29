<template>
  <div class="card-body" v-for="comment in comments" v-bind:key="comment.id">
    <p><b>Name:</b> {{ comment.name }}</p>
    <p><b>Email:</b> {{ comment.email }}</p>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>

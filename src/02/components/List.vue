<template>
  <div class="card-body" v-for="comment in comments" v-bind:key="comment.id">
    <h3>
      <b>Name:</b>
      {{ comment.name }}
    </h3>
    <h3>
      <b>Password</b>
      {{ comment.passwd }}
    </h3>
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

<template>
  <div v-if="comments.length > 0">
    <list-item-vue
      class="card-body"
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
      @remove="$emit('remove', comment)"
    />
  </div>
  <div v-else>
    <h3 class="text-center">This is comment section</h3>
  </div>
</template>

<script>
import ListItemVue from "./ListItem.vue";

export default {
  components: {
    ListItemVue,
  },
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="w-50" v-if="comments.length > 0">
    <my-list-item-vue
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
      @remove="$emit('remove', comment)"
    />
  </div>
  <div v-else>
    <h3>Not Comments</h3>
  </div>
</template>
<script>
import MyListItemVue from "./MyListItem";
export default {
  components: {
    MyListItemVue,
  },
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>

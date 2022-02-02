<template>
  <div class="container-full bg-gray-500 d-flex align-items-center px-52 py-3">
    <h1 class="d-flex align-items-center fs-4 text-white mb-0">Cheatsheet</h1>
    <my-btn
      href="/docs/5.0/examples/cheatsheet-rtl/"
      class="ms-auto btn btn-primary"
      hreflang="ar"
      @click="showModal"
      >Add New Comments
    </my-btn>
    <my-select
      class="w-1/6 ml-3"
      v-model="selectedSort"
      :options="selectOptions"
    />
  </div>
</template>
<script>
export default {
  props: {
    showModal: {
      type: Function,
    },
  },
  data() {
    return {
      selectedSort: "",
      selectOptions: [
        { value: "name", name: "Filter by name" },
        { value: "email", name: "Filter by email" },
      ],
    };
  },
};
</script>

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
  </div>
</template>
<script>
export default {
  props: {
    showModal: {
      type: Function,
    },
  },
};
</script>

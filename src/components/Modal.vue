<template>
    <div v-if="erÅbent" class="modal">
      <a href="#" @click.prevent="lukModul">Luk</a>
      <h1>{{ modalTitle }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      erÅbent: Boolean,
      modalTitle: String
    },
    methods: {
      lukModul() {
        this.$emit('luk-modul');
      }
    }
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>
  
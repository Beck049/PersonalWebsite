<template>
    <div class="tag-container">{{name}}
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .tag-container {
    border-radius: 10px;
    padding: 0px 8px;
    background: var(--accent-1);
    opacity: 0.6;
    font-weight: bold;
    font-size: 0.8rem;
    color: var(--gray-text);
  }
  </style>
  
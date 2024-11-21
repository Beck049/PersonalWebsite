<template>
    <a :href="url" target="_blank" rel="noopener noreferrer" class="icon-link">
      <div class="icon-container">
        <img :src="`./src/components/icons/${fileName}`" :alt="`${fileName} icon`" class="icon" />
      </div>
    </a>
  </template>
  
  <script>
  export default {
    props: {
      fileName: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .icon-link {
    text-decoration: none;
  }
  
  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border: 2px solid #00c4cc; /* Optional border styling */
    border-radius: 50%;
    transition: transform 0.2s ease-in-out;
  }
  
  .icon-container:hover {
    transform: scale(1.2); /* Zoom effect on hover */
  }
  
  .icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
  </style>
  
<template>
    <button class="download-btn" @click="downloadCV">
      <p>Download CV</p>
      <img src="/icons/Download.png" alt="Download Icon" class="icon" />
    </button>
  </template>
  
  <script lang="ts">
  export default {
    methods: {
      downloadCV() {
        // Replace this URL with the actual path to the CV file you want to download
        const fileUrl = "/Resume.pdf";
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Resume.pdf"; // Specify the default download filename
        link.click();
      },
    },
  };
  </script>
  
  <style scoped>
  .download-btn {
    display: flex;
    align-items: center;
    padding: 12px 12px;
    font-size: 20px;
    color: var(--accent-1);
    background: #DCDCDC30;
    border: 2px solid var(--accent-1);
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 30px;
  }

  .download-btn:hover {
    background-color: var(--secondary);
    color: var(--gray-text);
    transform: scale(1.1);
  }

  .download-btn p{
    font-weight: bolder;
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    justify-content: flex-end;
  }
  </style>
  
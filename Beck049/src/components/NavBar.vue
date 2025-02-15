<template>
    <nav :class="['navbar', { hidden: isHidden }]">
      <div class="container">
        <RouterLink to="/"><div class="logo">Beck049.</div></RouterLink>
        <ul class="nav-links">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
          <li><RouterLink to="/project">Projects</RouterLink></li>
          <li><RouterLink to="/service">Services</RouterLink></li>
        </ul>
        <button class="contact-button">Contact Me</button>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavBar",
    data() {
      return {
        isHidden: false,
        lastScrollPosition: 0,
      };
    },
    methods: {
      handleScroll() {
        const currentScrollPosition = window.scrollY;
        this.isHidden =
          currentScrollPosition > this.lastScrollPosition && currentScrollPosition > 50;
        this.lastScrollPosition = currentScrollPosition;
      },
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%; /* Full width of the screen */
    background-color: var(--primary);
    transition: 0.3s ease-in-out;
    z-index: 1000;
  }
  
  .navbar.hidden {
    transform: translateY(-100%);                                                   
  }
  
  .container {
    max-width: 1800px; /* Set max content width */
    margin: 0; /* Center content horizontally */
    display: flex;
    justify-content: space-between; /* Space between logo and right side (contact + links) */
    align-items: center;
    padding: 10px 20px;
  }
  
  .logo {
    font-weight: bold;
    font-size: 1.6rem;
    color: var(--gray-text);
    text-align: left; /* Ensure it aligns to the left within container */
  }

  .logo:hover {
    cursor: pointer;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 30px;
    margin: 0;
    padding-right: 20px;
    justify-content: flex-end; /* Align nav-links to the right within its container space */
    flex-grow: 1;
  }
  
  .nav-links li a {
    text-decoration: none;
    color: var(--gray-text);
    font-size: 1.2rem;
  }
  
  .contact-button {
    background-color: var(--accent-1);
    border: none;
    padding: 6px 10px;
    color: var(--black-text);
    opacity: 0.8;
    border-radius: 20px;
    font-size: 1.2rem;
    cursor: pointer;
    margin-left: 10px; /* Add space between nav-links and button */
  }
  
  .contact-button:hover {
    background-color: var(--accent-1);
    opacity: 1;
  }
  </style>
  
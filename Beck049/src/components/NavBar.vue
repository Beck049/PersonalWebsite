<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

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
      <button class="menu-button" @click="toggleMenu"></button>
    </div>
    <ul class="nav-links-mobile" v-show="isMenuOpen">
      <li><RouterLink to="/" @click="toggleMenu">Home</RouterLink></li>
      <li><RouterLink to="/portfolio" @click="toggleMenu">Portfolio</RouterLink></li>
      <li><RouterLink to="/project" @click="toggleMenu">Projects</RouterLink></li>
    </ul>
  </nav>
</template>
  
<script lang=ts>
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

.nav-links-mobile {
  list-style: none;
  display: flex;
  gap: 0px;
  margin: 0;
  padding-right: 20px;
  justify-content: flex-end;
  flex-direction: column;
}
.nav-links-mobile li {
  text-align: center;
  width: 100%;
  height: 3rem;
}
.nav-links-mobile li a {
  text-decoration: none;
  color: var(--gray-text);
  font-size: 1.2rem;
}

.menu-button{
  display:none;
}

@media (max-width: 760px) {
  .menu-button{
    width: 32px;
    height: 32px;
    background: url('./icons/menu.png') no-repeat center center;
    background-size: contain;
    border: none;
    cursor: pointer;
    outline: none;

    list-style: none;
    display: flex;
    justify-content: flex-end;
  }
  .nav-links{
    display:none;
  }
  .contact-button{
    display:none;
  }
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
  
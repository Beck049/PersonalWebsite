<template>
<div class="what-i-do" ref="sectionRef">
    <h2>What I Do</h2>
    <div class="what-i-do-list">
        <div class="what-i-do-card" v-bind:ref="setRefs">
            <div class="what-i-do-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M10.75 42.15C9.62217 42.15 8.50688 41.9583 7.40415 41.575C6.30138 41.1917 5.33333 40.5667 4.5 39.7C5.66667 39.3 6.5 38.7167 7 37.95C7.5 37.1833 7.75 36.15 7.75 34.85C7.75 33.3917 8.26127 32.1521 9.2838 31.1313C10.3064 30.1104 11.548 29.6 13.0088 29.6C14.4696 29.6 15.7083 30.1104 16.725 31.1313C17.7417 32.1521 18.25 33.3917 18.25 34.85C18.25 36.9833 17.525 38.7333 16.075 40.1C14.625 41.4667 12.85 42.15 10.75 42.15ZM10.75 39.15C11.9167 39.15 12.9583 38.7333 13.875 37.9C14.7917 37.0667 15.25 36.05 15.25 34.85C15.25 34.1833 15.0417 33.6417 14.625 33.225C14.2083 32.8083 13.6667 32.6 13 32.6C12.3333 32.6 11.7917 32.8083 11.375 33.225C10.9583 33.6417 10.75 34.1833 10.75 34.85C10.75 36.15 10.6083 37.1083 10.325 37.725C10.0417 38.3417 9.51667 38.7167 8.75 38.85C8.95 38.8833 9.28333 38.9417 9.75 39.025C10.2167 39.1083 10.55 39.15 10.75 39.15ZM22.25 30.3L17.75 25.55L36.55 6.75001C37.0167 6.28334 37.5333 6.04167 38.1 6.02501C38.6667 6.00834 39.2 6.25001 39.7 6.75001L41.15 8.20001C41.65 8.70001 41.8917 9.24167 41.875 9.82501C41.8583 10.4083 41.6167 10.9333 41.15 11.4L22.25 30.3Z" fill="#00BAD5"></path></svg>
                <h1 style="color: rgb(0, 186, 213);">UI &amp; UX</h1>
                <p>Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
            </div>
        </div>
        <div class="what-i-do-card" v-bind:ref="setRefs">
            <div class="what-i-do-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M4 40V35.5H8V11C8 10.175 8.29375 9.46875 8.88125 8.88125C9.46875 8.29375 10.175 8 11 8H42V11H11V35.5H23V40H4ZM27.5 40C27.075 40 26.7188 39.8563 26.4312 39.5688C26.1438 39.2812 26 38.925 26 38.5V15.5C26 15.075 26.1438 14.7188 26.4312 14.4313C26.7188 14.1438 27.075 14 27.5 14H42.5C42.925 14 43.2812 14.1438 43.5688 14.4313C43.8563 14.7188 44 15.075 44 15.5V38.5C44 38.925 43.8563 39.2812 43.5688 39.5688C43.2812 39.8563 42.925 40 42.5 40H27.5ZM29 35.5H41V17H29V35.5Z" fill="#9D95FF"></path></svg>
                <h1 style="color: rgb(157, 149, 255);">Web &amp; Mobile App</h1>
                <p>Transforming ideas into exceptional web and mobile app experiences.</p>
            </div>
        </div>
        <div class="what-i-do-card" v-bind:ref="setRefs">
            <div class="what-i-do-content"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M24 44C21.2667 44 18.6833 43.475 16.25 42.425C13.8167 41.375 11.6917 39.9417 9.875 38.125C8.05833 36.3083 6.625 34.1833 5.575 31.75C4.525 29.3167 4 26.7333 4 24C4 21.1667 4.53333 18.5333 5.6 16.1C6.66667 13.6667 8.125 11.55 9.975 9.75C11.825 7.95 13.9917 6.54167 16.475 5.525C18.9583 4.50833 21.6167 4 24.45 4C27.0833 4 29.5833 4.44167 31.95 5.325C34.3167 6.20833 36.3917 7.43333 38.175 9C39.9583 10.5667 41.375 12.425 42.425 14.575C43.475 16.725 44 19.0833 44 21.65C44 25.25 42.95 28.0917 40.85 30.175C38.75 32.2583 35.9667 33.3 32.5 33.3H28.75C28.15 33.3 27.6333 33.5333 27.2 34C26.7667 34.4667 26.55 34.9833 26.55 35.55C26.55 36.45 26.7917 37.2167 27.275 37.85C27.7583 38.4833 28 39.2167 28 40.05C28 41.3167 27.65 42.2917 26.95 42.975C26.25 43.6583 25.2667 44 24 44ZM12.35 25.3C13.0167 25.3 13.6 25.05 14.1 24.55C14.6 24.05 14.85 23.4667 14.85 22.8C14.85 22.1333 14.6 21.55 14.1 21.05C13.6 20.55 13.0167 20.3 12.35 20.3C11.6833 20.3 11.1 20.55 10.6 21.05C10.1 21.55 9.85 22.1333 9.85 22.8C9.85 23.4667 10.1 24.05 10.6 24.55C11.1 25.05 11.6833 25.3 12.35 25.3ZM18.65 16.8C19.3167 16.8 19.9 16.55 20.4 16.05C20.9 15.55 21.15 14.9667 21.15 14.3C21.15 13.6333 20.9 13.05 20.4 12.55C19.9 12.05 19.3167 11.8 18.65 11.8C17.9833 11.8 17.4 12.05 16.9 12.55C16.4 13.05 16.15 13.6333 16.15 14.3C16.15 14.9667 16.4 15.55 16.9 16.05C17.4 16.55 17.9833 16.8 18.65 16.8ZM29.35 16.8C30.0167 16.8 30.6 16.55 31.1 16.05C31.6 15.55 31.85 14.9667 31.85 14.3C31.85 13.6333 31.6 13.05 31.1 12.55C30.6 12.05 30.0167 11.8 29.35 11.8C28.6833 11.8 28.1 12.05 27.6 12.55C27.1 13.05 26.85 13.6333 26.85 14.3C26.85 14.9667 27.1 15.55 27.6 16.05C28.1 16.55 28.6833 16.8 29.35 16.8ZM35.9 25.3C36.5667 25.3 37.15 25.05 37.65 24.55C38.15 24.05 38.4 23.4667 38.4 22.8C38.4 22.1333 38.15 21.55 37.65 21.05C37.15 20.55 36.5667 20.3 35.9 20.3C35.2333 20.3 34.65 20.55 34.15 21.05C33.65 21.55 33.4 22.1333 33.4 22.8C33.4 23.4667 33.65 24.05 34.15 24.55C34.65 25.05 35.2333 25.3 35.9 25.3ZM24 41C24.3667 41 24.625 40.925 24.775 40.775C24.925 40.625 25 40.3833 25 40.05C25 39.5833 24.7583 39.15 24.275 38.75C23.7917 38.35 23.55 37.4667 23.55 36.1C23.55 34.5667 24.05 33.2167 25.05 32.05C26.05 30.8833 27.3167 30.3 28.85 30.3H32.5C35.0333 30.3 37.0833 29.5583 38.65 28.075C40.2167 26.5917 41 24.45 41 21.65C41 17.25 39.3333 13.7083 36 11.025C32.6667 8.34167 28.8167 7 24.45 7C19.5833 7 15.4583 8.64167 12.075 11.925C8.69167 15.2083 7 19.2333 7 24C7 28.7 8.65833 32.7083 11.975 36.025C15.2917 39.3417 19.3 41 24 41Z" fill="#FEC5FB"></path></svg>
                <h1 style="color: rgb(254, 197, 251);">Design &amp; Creative</h1>
                <p>Crafting visually stunning design that connects deeply with your audience.</p>
            </div>
        </div>
        <div class="what-i-do-card" v-bind:ref="setRefs">
            <div class="what-i-do-content"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M14.3 44.05L22.85 28.7L6 26.7L30.75 3.95H33.7L25.15 19.3L42 21.3L17.25 44.05H14.3ZM22.65 34.7L35.25 23.55L20.4 21.75L25.35 13.3L12.7 24.5L27.55 26.25L22.65 34.7Z" fill="#FF8709"></path></svg>
                <h1 style="color: rgb(255, 135, 9);">Development</h1>
                <p>Bringing your vision to life with the latest technology and design trends.</p>
            </div>
        </div>
</div>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import type { ComponentPublicInstance } from "vue";
// @ts-ignore
import { SeqAnimate } from "./utils/SeqAnimate.js";

const divRefs = ref<HTMLElement[]>([]);
const { observeElements, stopObserving, handleVisibilityChange } = SeqAnimate(divRefs);

const setRefs = (el: Element | ComponentPublicInstance | null) => {
  if (el instanceof HTMLElement && !divRefs.value.includes(el)) {
    divRefs.value.push(el);
  }
};

onMounted(() => {
  observeElements();
  document.addEventListener("visibilitychange", handleVisibilityChange);
});

onUnmounted(() => {
  stopObserving();
  document.removeEventListener("visibilitychange", handleVisibilityChange);
});
</script>

<style scoped>

.what-i-do {
  display: flex;
  width: 100%;
  background-color: var(--bg-color-1);
  padding: 6rem 2.5rem;

  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.what-i-do h2 {
  font-size: 3rem;
  color: var(--accent-1);
  font-weight: bolder;
}
.what-i-do-list {
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
}
.what-i-do-card {
  flex: 1 1 calc(10% - 20px); /* 每個卡片佔 1/3，減去 gap */
  font-size: 18px;
  height: 100%;
  padding-top: 0rem;
  padding-bottom: 2.5rem;
  padding-left: 1.5rem;
  padding-right: 2.5rem;

  /* fade-in animation */
  opacity: 0;
  transform: translateX(-30px);
}
.what-i-do-content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 5rem;
}
.what-i-do-content h1{
  font-size: 1.125rem;
  font-weight: 600;
}
.what-i-do-content p {
  font-size: 0.875rem;
  color: var(--gray-text);
}
</style>




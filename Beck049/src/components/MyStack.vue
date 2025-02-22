<template>
    <div class="my-stack column">
        <div class="row">
            <div class="person border">
                <h3>Beck Xiao</h3>
                <p><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" 
                    stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-accent" 
                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
                    <polyline points="3,6 12,13 21,6"></polyline></svg>                
                    beckxiao2001323@gmail.com</p>
                <p><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-accent" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Taipei, Taiwan</p>
                <p><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-accent" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    1+ year working experience</p>
                <p><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" 
                    stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-accent" 
                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M4.5 9h15"></path>
                    <path d="M4.5 15h15"></path>
                    <path d="M12 3a12 12 0 0 1 0 18"></path>
                    <path d="M12 3a12 12 0 0 0 0 18"></path></svg>
                Chinese, English</p>                
            </div>
            <div class="column">
                <div class="row">
                    <div class="exp-level border"><p>professional level</p><h2>Junior</h2></div>
                    <div class="exp-level border"><p>project completed</p><h2>5+</h2></div>
                </div>
                <div class="services border">
                    <h4>Service</h4>
                    <p><span class="text-accent"> → </span>Full Stack Development</p>
                    <p><span class="text-accent"> → </span>Web Design & Development</p>
                    <p><span class="text-accent"> → </span>Cybersecurity Related</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="tech-stack-list border">
                <div class="tech-stack-box" :class="{ floatUp: index === floatId }"
                    v-for="(_, index) in technologies" :key="index"/>
            </div>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  
  const technologies = ["a", "b", "c", "b", "c", "b", "c", "b", "c", "a", "b", "c"];
  const floatId = ref(0);
  
  const setFloat = () => {
    setTimeout(() => {
      floatId.value = (floatId.value + 1) % technologies.length;
      setFloat();
    }, 2000);
  };
  
  onMounted(() => {
    setFloat();
  });
  </script>
  
  <style scoped>
  .my-stack {
    align-items: center;
    background-color: var(--bg-color-1);
    padding: 10rem 0px;
  }
  .my-stack div{
    max-width: 800px;
  }
  h2 {
    color: var(--primary);
    font-size: 3rem;
  }
  h3 {
    color: var(--primary);
    font-size: 4rem;
  }
  h4 {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }
  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .border {
    border: var(--gray-text) solid 1px;
    border-radius: 15px;
    padding: 10px 25px;
  }
  .person{
    flex: 1;
  }
  .services{
    flex: 1;
  }
  .person p {
    padding-top: 5px;
  }
  .exp-level h2{
    text-align: center;
    margin-top: -1rem;    
  }
  .exp-level {
    flex-grow: 1; /* 让 .exp-level 平均填充 */
    display: flex;
    flex-direction: column;
    justify-content: center; /* 确保内容居中 */
    align-items: center;
    text-align: center;
}

.services {
    flex-grow: 1; /* 确保它与 exp-level 一样伸展 */
}
  .tech-stack-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 30px;
    padding: 1rem;
    justify-content: center;
    align-items: center;
  }
  .tech-stack-box {
    width: 64px;
    height: 64px;
    border: 2px solid var(--gray-text);
    border-radius: 8px;
    box-shadow: 5px 5px 18px var(--primary);
    transition: transform 1s ease-in-out;
  }
  .floatUp {
    transform: translateY(-10px);
  }
  </style>
  
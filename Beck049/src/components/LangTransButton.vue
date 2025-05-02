<template>
<div class="lang-container">
    <div class="lang-button" @click="toggleText">
        <img src="/icons/Lang.png" alt="Language Icon" />
    </div>
    <div class="lang-text" v-if="showText">
        <div class="dropdown-button" @click="toggleDropdown(0)" v-if="isOpen|(lang==0)">
            中文 ▽
        </div>
        <div class="dropdown-button" @click="toggleDropdown(1)" v-if="isOpen|(lang==1)">
            English ▽
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue'

// 定義回傳 Parent Node 事件
const emit = defineEmits(['updateLang'])

const showText = ref(false)
const isOpen = ref(false)

const lang = ref(0)
const langList = ['Chinese', 'English']

const toggleText = () => {
    showText.value = !showText.value
    isOpen.value = false
}

const toggleDropdown = (input) => {
    isOpen.value = !isOpen.value
    lang.value = input
    if (!isOpen.value) { 
        console.log(langList[lang.value])
        showText.value = 0
    }
    emit('updateLang', lang.value) // 這裡發送事件，把 lang.value 傳出去
}
</script>

<style scoped>
.lang-container {
    position: fixed;
    bottom: 15px;
    right: 15px;
    display: flex;
    align-items: center;
    background-color: #dddddd;
    border-radius: 25px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 999;
}
.lang-container:hover {
    background-color: #d0d0d0;
}

.lang-button {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
.lang-button img {
    width: 30px;
    height: 30px;
}

.lang-text {
    padding: 10px 15px;
    font-size: 16px;
    color: #333;
}
</style>

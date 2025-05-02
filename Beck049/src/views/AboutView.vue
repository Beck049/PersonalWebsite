<script setup lang="ts">
import WelcomeHead from '../components/WelcomeHead.vue'
import LanguageButton from '../components/LangTransButton.vue'

import { ref } from 'vue'

const lang = ref(0)
const langList = ['Chinese', 'English']

const receiveLang = (value: number) => {
  lang.value = value
}
</script>

<template>
  <LanguageButton @updateLang="receiveLang" />
  <div class="about">
    <h1>This is an about page</h1>
    <p>and the language is {{ langList[lang] }}</p>
  </div>
  <WelcomeHead />
  <WelcomeHead />
  <WelcomeHead />
  <WelcomeHead />
</template>

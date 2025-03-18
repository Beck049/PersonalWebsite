<template>
    <div class="card" ref="card" :class="{flipped: isFlipped}" @click="toggleFlip">
        <div class="card-front">
            <div class="bg-img"></div>
            <div class="head-group">
                <div class="head-group__img"></div>
                <div class="head-group__name">Beck Xiao</div>
                <div class="social-icons">
                    <i> <SocialMediaLink fileName="Github.png" url="https://github.com" /> </i>
                    <i> <SocialMediaLink fileName="Linkedin.png" url="https://linkedin.com" /> </i>
                    <i> <SocialMediaLink fileName="Youtube.png" url="https://youtube.com" /> </i>
                </div>
            </div>
            <ul class="data-group__title">
                <li>叡揚資訊股份有限公司｜助理程式設計師</li>
                <li>國立台灣師範大學｜資訊工程學系 大學畢業</li>
            </ul>
            <div class="data-group__descript">
                我是一名對資訊技術充滿熱情的學生，專注於軟體開發、機器學習與資安研究。擁有豐富的專案經驗，如「師大資工線上申請系統」、醫療影像分析與遊戲開發，並具備專案管理與團隊協作能力，樂於迎接技術挑戰並持續精進。
            </div>
            <div class="tag-group">
                <Tag name="Python"/>
                <Tag name="Vue.js"/>
                <Tag name="MySQL"/>
            </div>
        </div>
        <div class="card-back">
            Back
        </div>
    </div>
</template>

<script setup lang="ts">
import SocialMediaLink from '../components/SocialMediaLink.vue'
import Tag from '../components/Tag.vue'
import { ref, onMounted, onUnmounted } from "vue";

// Card Animation
const card = ref<HTMLElement | null>(null);
const isFlipped = ref(false);

const toggleFlip = () => {
    isFlipped.value = !isFlipped.value;
    if(card.value){
        card.value.style.transform="";
    }
}

const handleMouseMove = (event: MouseEvent) => {
    if (!card.value || isFlipped.value) return;

    const { left, top, width, height } = card.value.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    const rotateX = ((y / height) * 45 - 20).toFixed(2);
    const rotateY = ((x / width) * 45 - 15).toFixed(2);

    card.value.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

const resetCard = () => {
    if (card.value && !isFlipped.value) {
        card.value.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
};

onMounted(() => {
    if (card.value) {
        card.value.addEventListener("mousemove", handleMouseMove);
        card.value.addEventListener("mouseleave", resetCard);
        console.log(card.value);
    }
});

onUnmounted(() => {
    if (card.value) {
        card.value.removeEventListener("mousemove", handleMouseMove);
        card.value.removeEventListener("mouseleave", resetCard);
    }
});

</script>

<style scoped>
/* Card Animation */
.card {
    width: 340px;
    height: 600px;
    border: 1px solid var(--gray-text);
    border-radius: 20px;
    transition: transform 0.1s linear;
    transform-style: preserve-3d;
}

.card.flipped {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    backface-visibility: hidden;
}

.card-back {
    background: var(--gray-text);
    transform: rotateY(180deg);
}

/* Head Group */
.head-group {
    display: grid;
    place-items: center;
    padding: 15px;
}

.head-group__img {
    width: 160px;
    height: 160px;
    background: #CDCDCD;
    border-radius: 100px;
}

.head-group__name {
    font-size: 24px;
    font-weight:bolder;
    color: var(--gray-text);
}

/* Data Group */
.data-group {
    height: 30%;
    display: grid;
    place-items: center;
    align-items: start;
}
.data-group__title {
    font-weight: bold;
    color: var(--gray-text);
    padding: 0px;
}

.data-group__descript{
    padding: 15px 0px;
}

ul {
    list-style-type: none;
    padding: 0px;
}

/* Social Icons */
.social-icons {
    display: flex;
    gap: 10px;
}

.social-icons i {
    font-size: 1.5rem;
    margin-right: 0.5rem;
    cursor: pointer;
}

.tag-group {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    padding: 10px;
}
</style>

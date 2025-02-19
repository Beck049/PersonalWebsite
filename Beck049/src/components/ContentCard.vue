<template>
<div class="card">
    <div class="head">
        <div class="icon"></div>
        <h3 class="title">Product Design</h3>
    </div>
    <p class="description">
    This is a template Figma file, turned into code.<br>
    This is a template Figma file, turned into code.<br>
    This is a template Figma file, turned into code.<br>
    </p>
</div>
</template>

<style scoped>
.card {
    width: 200px;
    background-color: #7317a8;
    border-radius: 16px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
    font-family: Arial, sans-serif;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    text-align: left;
}

.head {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    border-bottom: 1px solid var(--gray-text);
    padding-bottom: 10px;
    margin-bottom: 16px;
}

.icon {
    width: 32px;
    height: 32px;
    background-color: #d8b6ff;
    border-radius: 50%;
    margin-bottom: 8px;
}

.title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 8px;
}

.description {
    font-size: 1rem;
    opacity: 0.8;
    line-height: 1.4;
    padding: 8px;
}
</style>

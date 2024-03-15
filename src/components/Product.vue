<script setup lang="ts">
    const props = defineProps<{
        img: string
        name: number
        description: string
        price: number
        isAvailable: boolean
    }>()
</script>

<template>
    <div>
        <img :src="img"  :alt="name">
        <h5>{{ name }}</h5>
        <p>{{ description }}</p>
        <p>{{ price }}</p>
        <span>{{ isAvailable }}</span>
    </div>
</template>


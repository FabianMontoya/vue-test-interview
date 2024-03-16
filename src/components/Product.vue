<script setup lang="ts">
    defineProps<{
        img: string
        name: string
        description: string
        price: number
        isAvailable: boolean
        isHighlight?: boolean
    }>()
</script>

<template>
    <div class="border border-gray shadow bg-white p-4 rounded text-black relative" :class="isHighlight ? '!border-yellow-500 !border-4' : ''">
        <img class="max-h-[200px] w-full object-contain" :src="img"  :alt="name">
        <h5 class="font-bold my-3">{{ name }}</h5>
        <p class="text-sm mb-3">{{ description }}</p>
        <p class="font-semibold text-right text-lg">${{ price }}</p>
        <span 
            class="absolute right-4 top-4 rounded-full px-2 py-1 text-black"   
            :class="isAvailable ? 'bg-lime-900 text-white' : 'bg-rose-900 text-white'"
        >
            {{ isAvailable ? 'Available' : 'No Available' }}
        </span>
    </div>
</template>


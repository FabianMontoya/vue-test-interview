<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <button @click="count++">count is {{ count }}</button>
    </div>
  </div>
</template>

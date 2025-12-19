<script setup lang="ts">
import LadderTable from '@/components/LadderTable.vue'
import { useLadderStore } from '@/stores/ladder-store.ts'
import { onMounted, ref } from 'vue'

const store = useLadderStore()
const showClub = ref(false)

onMounted(() => {
  store.getLadder()
})
</script>

<template>
  <h1>vue-afl</h1>
  <LadderTable v-if="showClub === false" />
</template>

<style scoped></style>

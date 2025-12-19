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
  <h1><span translate="no">vue-afl</span></h1>
  <LadderTable v-if="showClub === false" />
</template>

<style scoped>
h1 span {
  color: var(--clr-accent-primary);
  font-weight: var(--fw-bold);
  letter-spacing: -0.1rem;
  padding: 24px;
  text-align: center;
}
</style>

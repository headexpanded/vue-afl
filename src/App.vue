<script setup lang="ts">
import LadderTable from '@/components/LadderTable.vue'
import { useTeamStore } from '@/stores/team-store.ts'
import { useLadderStore } from '@/stores/ladder-store.ts'
import { onMounted, ref } from 'vue'

const ladderStore = useLadderStore()
const teamStore = useTeamStore()
const showClub = ref(false)

onMounted(() => {
  ladderStore.getLadder()
  teamStore.getTeams()
})
</script>

<template>
  <h1><span translate="no">AFL Ladder: No Ads!</span></h1>
  <LadderTable v-if="showClub === false" />
  <div v-for="team in teamStore.teams" :key="team.id">
    <div>{{ team }}</div>
  </div>
</template>

<style scoped>
h1 {
  margin: 16px 0;

  span {
    color: var(--clr-accent-primary);
    font-weight: var(--fw-bold);
    letter-spacing: -0.1rem;
    text-align: center;
  }
}
</style>

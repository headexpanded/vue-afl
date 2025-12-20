<script setup lang="ts">
import LadderTable from '@/components/LadderTable.vue'
import TeamTable from '@/components/TeamTable.vue'
import { useLadderStore } from '@/stores/ladder-store.ts'
import { useTeamStore } from '@/stores/team-store.ts'
import { onMounted, ref } from 'vue'

/* ============= REFS ============ */
const ladderStore = useLadderStore()
const teamStore = useTeamStore()
const showTeam = ref(false)
const selectedTeamId = ref<number>(0)

/* ============ HOOKS ============ */

onMounted(() => {
  ladderStore.getLadder()
  teamStore.getTeams()
})

/* =========== METHODS =========== */

const setSelectedId = (teamId: number) => {
  showTeam.value = !showTeam.value
  selectedTeamId.value = teamId
}
</script>

<template>
  <h1><span translate="no">AFL Ladder: No Ads!</span></h1>
  <LadderTable v-if="showTeam === false" @show-team="setSelectedId" />
  <TeamTable v-else :team-id="selectedTeamId" />
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

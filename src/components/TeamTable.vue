<template>
  <template v-if="team">
    <h1>{{ team.name }}</h1>
    <table>
      <thead>
        <tr>
          <th>Round</th>
          <th>Opposition</th>
          <th>Venue</th>
          <th>Result</th>
          <th>For</th>
          <th>Against</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  </template>
</template>
<script setup lang="ts">
import { useTeamStore } from '@/stores/team-store.ts'
import { computed } from 'vue'
/* ============ PROPS ============ */

const props = defineProps<{
  teamId: number
}>()

/* ============ EMITS ============ */

/* ========= LOCAL SCOPE ========= */

const teamStore = useTeamStore()

/* ============= REFS ============ */

const team = computed(() => {
  return teamStore.getTeam(props.teamId)
})

/* ============ HOOKS ============ */

/* =========== METHODS =========== */
</script>

<style scoped></style>

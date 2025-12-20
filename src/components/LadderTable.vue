<template>
  <table class="center">
    <thead>
      <tr>
        <th class="team-rank">#</th>
        <th class="team-rank">#</th>
        <th class="team-name">Club</th>
        <th class="team-points">Pts</th>
        <th class="team-played">P</th>
        <th class="team-wins">W</th>
        <th class="team-losses">L</th>
        <th class="team-draws">D</th>
        <th class="team-percentage">%</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="team in ladderStore.ladder" :key="team.id" class="team-row" @click="showTeam">
        <td class="team-rank">{{ team.rank }}</td>
        <td class="team-rank">{{ logo }}</td>
        <td class="team-name">{{ team.name }}</td>
        <td class="team-points">{{ team.pts }}</td>
        <td class="team-played">{{ team.played }}</td>
        <td class="team-wins">{{ team.wins }}</td>
        <td class="team-losses">{{ team.losses }}</td>
        <td class="team-draws">{{ team.draws }}</td>
        <td class="team-percentage">{{ team.percentage }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { useLadderStore } from '@/stores/ladder-store.ts'
import { computed, onMounted } from 'vue'

/* ============ PROPS ============ */

/* ============ EMITS ============ */

/* ========= LOCAL SCOPE ========= */

const ladderStore = useLadderStore()

/* ============= REFS ============ */

const logo = computed(() => {
  return 'logo'
})

/* ============ HOOKS ============ */

onMounted(() => {
  ladderStore.getLadder()
})

/* =========== METHODS =========== */

const showTeam = () => {
  console.log('Click')
}
</script>

<style scoped>
table {
  margin-left: auto;
  margin-right: auto;
  width: 90vw;

  thead {
    background-color: #1d18bc;
    color: white;
    height: 40px;
  }

  tr {
    font-size: clamp(0.75rem, 2vw, 1.5rem);
    height: 1.5rem;
  }

  td {
    text-align: center;
  }

  .team-rank {
    width: clamp(4vw, 10px, 24px);
  }

  .team-name {
    padding: 0 12px 0 12px;
    text-align: left;
    width: clamp(22vw, 100px, 240px);
  }

  .team-points {
    width: var(--DataSpanWidth);
    padding-right: 12px;
  }

  .team-played {
    width: var(--DataSpanWidth);
    padding-right: 12px;
  }

  .team-wins {
    width: var(--DataSpanWidth);
    padding-right: 12px;
  }

  .team-draws {
    width: var(--DataSpanWidth);
    padding-right: 12px;
  }

  .team-losses {
    width: var(--DataSpanWidth);
    padding-right: 12px;
  }

  .team-percentage {
    width: var(--DataSpanWidth);
    text-align: left;
    padding-left: 16px;
  }

  .team-row:hover {
    cursor: pointer;
    background-color: var(--clr-accent-secondary);
  }

  .team-ladder-header {
    align-items: center;
    background-color: var(--clr-accent-primary);
    display: flex;
    flex-direction: row;
    font-size: clamp(0.75rem, 2vw, 1.5rem);
    font-weight: var(--fw-bold);
    height: 50px;
    justify-content: space-evenly;
    padding: 0 8px;
    text-align: center;
  }
}
</style>

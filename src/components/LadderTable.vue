<template>
  <table class="center">
    <thead>
      <tr>
        <th class="team-rank">#</th>
        <th class="team-logo-header"></th>
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
        <td class="team-logo">
          <img v-if="getLogo(team.id)" :src="getLogo(team.id)" alt="Team logo" class="team-logo" />
        </td>
        <td class="team-name">{{ team.name }}</td>
        <td class="team-data">{{ team.pts }}</td>
        <td class="team-data">{{ team.played }}</td>
        <td class="team-data">{{ team.wins }}</td>
        <td class="team-data">{{ team.losses }}</td>
        <td class="team-data">{{ team.draws }}</td>
        <td class="team-data">{{ team.percentage }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { useLadderStore } from '@/stores/ladder-store.ts'
import { onMounted } from 'vue'

/* ============ PROPS ============ */

/* ============ EMITS ============ */

/* ========= LOCAL SCOPE ========= */

const ladderStore = useLadderStore()

/* ============= REFS ============ */

/* ============ HOOKS ============ */

onMounted(() => {
  ladderStore.getLadder()
})

/* =========== METHODS =========== */

const getLogo = (id: number): string => {
  return new URL(`../logos/${id}.png`, import.meta.url).href
}

const showTeam = () => {
  console.log('Click')
}
</script>

<style scoped>
table {
  font-size: clamp(0.75rem, 2vw, 1.5rem);
  margin-left: auto;
  margin-right: auto;
  width: 90vw;

  thead {
    background-color: var(--clr-accent-primary);
    color: white;
    height: 40px;
  }

  tr {
    height: 1.5rem;
  }

  td {
    text-align: center;
  }

  .team-logo-header {
    width: clamp(3vw, 10px, 24px);
  }

  .team-rank {
    width: clamp(4vw, 10px, 24px);
  }

  .team-logo {
    align-items: center;
    display: flex;
    height: 36px;
    justify-content: center;
    width: clamp(4vw, 10px, 24px);
  }

  img.team-logo {
    display: block;
    height: 36px;
    width: 36px;
  }

  .team-name {
    padding: 0 12px 0 12px;
    text-align: left;
    width: clamp(22vw, 100px, 240px);
  }

  .team-data {
    width: var(--DataSpanWidth);
  }

  .team-points {
    width: var(--DataSpanWidth);
  }

  .team-played {
    width: var(--DataSpanWidth);
  }

  .team-wins {
    width: var(--DataSpanWidth);
  }

  .team-draws {
    width: var(--DataSpanWidth);
  }

  .team-losses {
    width: var(--DataSpanWidth);
  }

  .team-percentage {
    width: var(--DataSpanWidth);
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

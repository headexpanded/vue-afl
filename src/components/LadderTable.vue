<template>
  <table class="center">
    <thead>
      <tr>
        <th class="club-rank">#</th>
        <th class="club-name">Club</th>
        <th class="club-points">Pts</th>
        <th class="club-played">P</th>
        <th class="club-wins">W</th>
        <th class="club-losses">L</th>
        <th class="club-draws">D</th>
        <th class="club-percentage">%</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="club in store.ladder" :key="club.id" @click="showClub">
        <td class="club-rank">{{ club.rank }}</td>
        <td class="club-name">{{ club.name }}</td>
        <td class="club-points">{{ club.pts }}</td>
        <td class="club-played">{{ club.played }}</td>
        <td class="club-wins">{{ club.wins }}</td>
        <td class="club-losses">{{ club.losses }}</td>
        <td class="club-draws">{{ club.draws }}</td>
        <td class="club-percentage">{{ club.percentage }}</td>
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

const store = useLadderStore()

/* ============= REFS ============ */

/* ============ HOOKS ============ */

onMounted(() => {
  store.getLadder()
})

/* =========== METHODS =========== */

const showClub = () => {
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
    height: 32px;
  }

  td {
    text-align: center;
  }

  .club-rank {
    width: clamp(4vw, 10px, 24px);
  }

  .club-name {
    padding: 0 12px 0 12px;
    text-align: left;
    width: clamp(22vw, 100px, 240px);
  }

  .club-points {
    width: var(--DataSpanWidth);
    padding-right: 12px;
  }

  .club-played {
    width: var(--DataSpanWidth);
    padding-right: 12px;
  }

  .club-wins {
    width: var(--DataSpanWidth);
    padding-right: 12px;
  }

  .club-draws {
    width: var(--DataSpanWidth);
    padding-right: 12px;
  }

  .club-losses {
    width: var(--DataSpanWidth);
    padding-right: 12px;
  }

  .club-percentage {
    width: var(--DataSpanWidth);
    text-align: left;
    padding-left: 16px;
  }

  .club-ladder-header {
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

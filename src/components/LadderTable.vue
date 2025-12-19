<template>
  <table>
    <thead>
      <tr class="table-header">
        <th>#</th>
        <th>Club</th>
        <th>P</th>
        <th>W</th>
        <th>L</th>
        <th>D</th>
        <th>%</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="club in store.ladder" :key="club.id" @click="showClub">
        <td>{{ club.rank }}</td>
        <td class="club-name">{{ club.name }}</td>
        <td>{{ club.played }}</td>
        <td>{{ club.wins }}</td>
        <td>{{ club.losses }}</td>
        <td>{{ club.draws }}</td>
        <td>{{ club.percentage }}</td>
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
  width: 90vw;
}
thead {
  background-color: #1d18bc;
  color: white;
  height: 40px;
}

td {
  text-align: center;
}

.club-name {
  padding-left: 8px;
  text-align: left;
}
</style>

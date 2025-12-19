import type { Standings } from '@/types/Standings.ts'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLadderStore = defineStore('ladder-store', () => {

  const URL = import.meta.env.VITE_LADDER_API_URL

  const ladder = ref<Standings>([])
  const getLadder = async () => {
    try {
      const response = await fetch(URL)
      if (!response.ok) {
        console.error(`Response status: ${response.status}`)
        return
      }

      ladder.value = await response.json()
      console.log('Ladder: ', ladder.value)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message)
      } else {
        console.error('Unknown error', error)
      }
    }
  }

  return {
    getLadder
  }
})

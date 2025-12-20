import type { Standing } from '@/types/Standing.ts'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface LadderApiResponse {
  standings: Standing[]
}

export const useLadderStore = defineStore('ladder-store', () => {
  const URL = import.meta.env.VITE_LADDER_API_URL

  const ladder = ref<Standing[]>([])
  const getLadder = async () => {
    try {
      const response = await fetch(URL)
      if (!response.ok) {
        console.error(`Response status: ${response.status}`)
        return
      }

      const data: LadderApiResponse = await response.json()
      ladder.value = data.standings.sort((a, b) => b.rank - a.rank)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message)
      } else {
        console.error('Unknown error', error)
      }
    }
  }

  return {
    getLadder,
    ladder,
  }
})

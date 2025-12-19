import type { Club } from '@/types/Club.ts'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface ClubsApiResponse {
  clubs: Club[]
}

export const useClubStore = defineStore('club-store', () => {
  const URL = import.meta.env.VITE_CLUB_API_URL
  const clubs = ref<Club[]>([])

  const getClubs = async () => {
    try {
      const response = await fetch(URL)
      if (!response.ok) {
        console.error(`Response status: ${response.status}`)
        return
      }

      const data: ClubsApiResponse = await response.json()
      clubs.value = data.clubs
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message)
      } else {
        console.error('Unknown error', error)
      }
    }
  }

  return {
    getClubs,
    clubs,
  }
})

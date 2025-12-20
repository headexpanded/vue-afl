import type { Team } from '@/types/Team.ts'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface TeamsApiResponse {
  teams: Team[]
}

export const useTeamStore = defineStore('team-store', () => {
  const URL = import.meta.env.VITE_CLUB_API_URL
  const teams = ref<Team[]>([])

  const getTeams = async () => {
    try {
      const response = await fetch(URL)
      if (!response.ok) {
        console.error(`Response status: ${response.status}`)
        return
      }

      const data: TeamsApiResponse = await response.json()
      console.log("Data: ", data)
      teams.value = data.teams
      console.log('Teams: ', teams.value)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message)
      } else {
        console.error('Unknown error', error)
      }
    }
  }

  return {
    getTeams,
    teams,
  }
})

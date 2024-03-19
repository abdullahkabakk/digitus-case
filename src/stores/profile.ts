import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import { mockProfileData } from '@/utils/mockProfile'
import { mockNotifications } from '@/utils/mockNotifications'
import type { Notification } from '@/types/notification'
import { mockSuggestedPeople } from '@/utils/suggestedPeople'

type ProfileState = {
  user: User
  notifications: Notification[]
  suggestedPeople: User[]
}

export const useProfileStore = defineStore('profile', {
  state: (): ProfileState => ({
    user: {} as User,
    notifications: [],
    suggestedPeople: []
  }),

  getters: {
    getUser(): User {
      return this.user
    },
    getNotifications(): Notification[] {
      return this.notifications
    },
    getSuggestedPeople(): User[] {
      return this.suggestedPeople
    }
  },

  actions: {
    async fetchProfile() {
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // Return the mock user data
      this.user = mockProfileData

      return this.user
    },
    async fetchNotifications() {
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // Return an empty array
      this.notifications = mockNotifications

      return this.notifications
    },
    async fetchSuggestedPeople() {
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // Return the mock user data
      this.suggestedPeople = mockSuggestedPeople

      return this.suggestedPeople
    }
  }
})

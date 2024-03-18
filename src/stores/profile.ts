import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import { mockProfileData } from '@/utils/mockProfile'
import { mockNotifications } from '@/utils/mockNotifications'
import type { Notification } from '@/types/notification'

type ProfileState = {
  user: User
  notifications: Notification[]
}

export const useProfileStore = defineStore('profile', {
  state: (): ProfileState => ({
    user: {} as User,
    notifications: []
  }),

  getters: {
    getUser(): User {
      return this.user
    },
    getNotifications(): Notification[] {
      return this.notifications
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
    }
  }
})

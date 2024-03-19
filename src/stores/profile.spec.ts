import { createPinia, setActivePinia } from 'pinia'
import { useProfileStore } from '@/stores/profile'
import { describe, beforeEach, it, expect } from 'vitest'
import type { User } from '@/types/user'
import { mockProfileData } from '@/utils/mockProfile'
import { mockNotifications } from '@/utils/mockNotifications'
import { mockSuggestedPeople } from '@/utils/suggestedPeople'

describe('useProfileStore', () => {
  beforeEach(() => {
    // Initialize Pinia and set it as the active store
    const pinia = createPinia()
    setActivePinia(pinia)
  })

  it('fetches profile data', async () => {
    // Access the store
    const profileStore = useProfileStore()

    // Call fetchProfile action
    await profileStore.fetchProfile()

    // Check if user data is correctly set
    expect(profileStore.getUser).toEqual(mockProfileData)
  })

  it('fetches notifications', async () => {
    // Access the store
    const profileStore = useProfileStore()

    // Call fetchNotifications action
    await profileStore.fetchNotifications()

    // Check if notifications data is correctly set
    expect(profileStore.getNotifications).toEqual(mockNotifications)
  })

  it('has initial state', () => {
    // Access the store
    const profileStore = useProfileStore()

    // Check if initial state is correct
    expect(profileStore.getUser).toEqual({} as User)
    expect(profileStore.getNotifications).toEqual([])
    expect(profileStore.getSuggestedPeople).toEqual([])
  })

  it('fetches suggested people', async () => {
    // Access the store
    const profileStore = useProfileStore()

    // Call fetchSuggestedPeople action
    await profileStore.fetchSuggestedPeople()

    // Check if suggested people data is correctly set
    expect(profileStore.getSuggestedPeople).toEqual(mockSuggestedPeople)
  })
})

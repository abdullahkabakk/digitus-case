import { createPinia, setActivePinia } from 'pinia'
import { describe, beforeEach, it, expect } from 'vitest'
import { usePostStore } from '@/stores/post'
import { mockPosts } from '@/utils/mockPosts'
import { mockAsidePosts } from '@/utils/mockAsidePost'

describe('usePostStore', () => {
  beforeEach(() => {
    // Initialize Pinia and set it as the active store
    const pinia = createPinia()
    setActivePinia(pinia)
  })

  it('fetches posts', async () => {
    // Access the store
    const postStore = usePostStore()

    // Call fetchPosts action
    await postStore.fetchPosts()

    // Check if posts data is correctly set
    expect(postStore.getPosts).toEqual(mockPosts)
  })

  it('fetches suggested posts', async () => {
    // Access the store
    const postStore = usePostStore()

    // Call fetchSuggestedPosts action
    await postStore.fetchSuggestedPosts()

    // Check if suggested posts data is correctly set
    expect(postStore.getSuggestedPosts).toEqual(mockAsidePosts)
  })

  it('has initial state', () => {
    // Access the store
    const postStore = usePostStore()

    // Check if initial state is correct
    expect(postStore.getPosts).toEqual([])
    expect(postStore.getSuggestedPosts).toEqual([])
  })
})

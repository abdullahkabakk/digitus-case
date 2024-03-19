import { defineStore } from 'pinia'
import type { Post } from '@/types/posts'
import { mockPosts } from '@/utils/mockPosts'
import { mockAsidePosts } from '@/utils/mockAsidePost'

type PostState = {
  posts: Post[]
  suggestedPosts: Post[]
}

export const usePostStore = defineStore('post', {
  state: (): PostState => ({
    posts: [],
    suggestedPosts: []
  }),

  getters: {
    getPosts(): Post[] {
      return this.posts
    },
    getSuggestedPosts(): Post[] {
      return this.suggestedPosts
    }
  },

  actions: {
    async fetchPosts() {
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // Return the mock user data
      this.posts = mockPosts

      return this.posts
    },
    async fetchSuggestedPosts() {
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // Return the mock user data
      this.suggestedPosts = mockAsidePosts

      return this.suggestedPosts
    }
  }
})

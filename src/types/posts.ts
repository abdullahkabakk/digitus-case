import type { User } from '@/types/user'

export type Post = {
  id: string
  profile: User
  likes: number
  shares: number
  comments: number
  views: number
  length: number
  post_content: PostContent
  is_sponsored: boolean
  is_liked?: boolean
  is_saved?: boolean
}

export type PostContent = {
  text: string
  hashtags: string[]
  images: string[]
  videos: string[]
}

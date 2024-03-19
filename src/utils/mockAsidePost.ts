import type { Post } from '@/types/posts'

export const mockAsidePosts: Post[] = [
  {
    id: '1',
    profile: {
      name: 'Ayşe Palandöken',
      profession: 'Medical Doctor',
      picture: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    likes: 2,
    shares: 1,
    comments: 324,
    views: 10,
    length: 2,
    post_content: {
      text: 'Hiking in mountains with my baby :)',
      hashtags: ['child', 'doctor', 'hospital', 'fever'],
      images: [
        'https://picsum.photos/seed/picsum/200/300',
        'https://picsum.photos/seed/picsum/200/300',
        'https://picsum.photos/seed/picsum/200/300'
      ],
      videos: ['https://www.youtube.com/watch?v=5PG9NnvcM38']
    },
    is_sponsored: false
  },
  {
    id: '2',
    profile: {
      name: 'Merve Yılmaz',
      picture: 'https://randomuser.me/api/portraits/men/4.jpg',
      is_doctor: true
    },
    likes: 12,
    shares: 0,
    comments: 324,
    views: 4,
    length: 2,
    post_content: {
      text: 'Yoga programs for early pregnants',
      hashtags: ['child', 'doctor', 'hospital', 'fever'],
      images: ['https://picsum.photos/seed/picsum/300/300'],
      videos: []
    },
    is_sponsored: false
  }
]

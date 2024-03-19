import type { Post } from '@/types/posts'

export const mockPosts: Post[] = [
  {
    id: '3',
    profile: {
      name: 'Ahmet Yıldız Kenter',
      profession: 'Medical Doctor',
      picture: 'https://randomuser.me/api/portraits/women/2.jpg',
      is_doctor: true
    },
    likes: 3,
    shares: 1,
    comments: 5,
    views: 10,
    length: 2,
    post_content: {
      text: 'Normal healthy 21 y/o patient came in presenting odd symptoms. Patient described a new set of symptoms they all get well…',
      hashtags: ['child', 'doctor', 'hospital', 'fever'],
      images: [
        'https://picsum.photos/seed/picsum/200/300',
        'https://picsum.photos/seed/picsum/200/300',
        'https://picsum.photos/seed/picsum/200/300'
      ],
      videos: []
    },
    is_sponsored: false
  },
  {
    id: '4',
    profile: {
      name: 'Derya Deniz',
      picture: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    likes: 24,
    shares: 0,
    comments: 5,
    views: 4,
    length: 2,
    post_content: {
      text: 'The mom said she struggled with fertility issues and had an ectopic pregnancy after giving birth to her daughter.',
      hashtags: ['child', 'doctor', 'hospital', 'fever'],
      images: ['https://picsum.photos/seed/picsum/200/300'],
      videos: []
    },
    is_sponsored: false,
    is_liked: true,
    is_saved: true
  },
  {
    id: '5',
    profile: {
      name: 'Dr. Ahmet Yıldız Kenter',
      profession: 'Medical Doctor',
      picture: 'https://randomuser.me/api/portraits/men/3.jpg',
      is_doctor: true
    },
    likes: 1,
    shares: 0,
    comments: 5,
    views: 4,
    length: 2,
    post_content: {
      text: 'The mom said she struggled with fertility issues and had an ectopic pregnancy after giving birth to her daughter.',
      hashtags: ['child', 'doctor', 'hospital', 'fever'],
      images: [],
      videos: []
    },
    is_sponsored: false
  },
  {
    id: '6',
    profile: {
      name: 'Dr. Ahmet Yıldız Kenter',
      profession: 'Medical Doctor',
      picture: 'https://randomuser.me/api/portraits/women/9.jpg',
      is_doctor: true
    },
    likes: 3,
    shares: 1,
    comments: 5,
    views: 4,
    length: 2,
    post_content: {
      text: 'Normal healthy 21 y/o patient came in presenting odd symptoms. Patient described a new set of symptoms they all get well…',
      hashtags: ['child', 'doctor', 'hospital', 'fever'],
      images: [
        'https://picsum.photos/seed/picsum/200/300',
        'https://picsum.photos/seed/picsum/200/300'
      ],
      videos: []
    },
    is_sponsored: false
  },
  {
    id: '7',
    profile: {
      name: 'Milupa',
      picture: 'https://randomuser.me/api/portraits/women/8.jpg'
    },
    likes: 3,
    shares: 1,
    comments: 5,
    views: 4,
    length: 2,
    post_content: {
      text: 'Normal healthy 21 y/o patient came in presenting odd symptoms. Patient described a new set of symptoms they all get well…',
      hashtags: ['child', 'doctor', 'hospital', 'fever'],
      images: [
        'https://picsum.photos/seed/picsum/200/300',
        'https://picsum.photos/seed/picsum/200/300'
      ],
      videos: []
    },
    is_sponsored: true
  },
  {
    id: '8',
    profile: {
      name: 'Dr. Ahmet Yıldız Kenter',
      profession: 'Medical Doctor',
      picture: 'https://randomuser.me/api/portraits/men/12.jpg',
      is_doctor: true
    },
    likes: 3,
    shares: 1,
    comments: 5,
    views: 4,
    length: 2,
    post_content: {
      text: 'Maecenas pulvinar nulla eu nibh imperdiet, et ullamcorper metus interdum. Duis vehicula quam non tempor viverra. Quisque sit amet commodo sem. Quisque eu cursus libero. Suspendisse cursus magna dui, id condimentum mi rutrum ac. Sed eget orci at tortor iaculis pretium. Duis in feugiat odio, a faucibus nisi. Maecenas et sollicitudin ipsum, porta accumsan dui. Maecenas malesuada suscipit ligula vitae dignissim. Curabitur eu lacinia enim. Fusce lectus lorem, ultrices ut arcu sed, gravida elementum lectus. Ut lobortis ullamcorper neque, et faucibus sem pellentesque ac.',
      hashtags: ['child', 'doctor', 'hospital', 'fever'],
      images: ['https://picsum.photos/seed/picsum/200/300'],
      videos: []
    },
    is_sponsored: false
  }
]

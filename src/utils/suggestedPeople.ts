import type { User } from '@/types/user'

// Define a mock user data
export const mockSuggestedPeople: User[] = [
  {
    name: 'Ahmet Yılmaz',
    profession: 'Medical Doctor',
    location: 'İzmir',
    is_doctor: true,
    picture: 'https://randomuser.me/api/portraits/men/14.jpg'
  },
  {
    name: 'Melike Kadıoğlu',
    location: 'İstanbul',
    picture: 'https://randomuser.me/api/portraits/women/17.jpg'
  },
  {
    name: 'Ayşe Yıldırım',
    location: 'Isparta',
    picture: 'https://randomuser.me/api/portraits/women/21.jpg'
  },
  {
    name: 'John Doe',
    location: 'Bayburt',
    picture: 'https://randomuser.me/api/portraits/men/34.jpg'
  }
]

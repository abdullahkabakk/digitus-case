// Import the necessary dependencies for testing
import { mount } from '@vue/test-utils'
import UserProfile from '@/components/navbar/UserProfile.vue'
import { describe, it, expect } from 'vitest'
import { type User } from '../../types/user'

// Define a mock user object for testing
const mockUser: User = {
  name: 'John Doe',
  title: 'Software Engineer',
  picture: 'https://example.com/profile.jpg'
}

describe('UserProfile', () => {
  it('renders user profile correctly', () => {
    // Mount the component with mock props
    const wrapper = mount(UserProfile, {
      props: {
        user: mockUser
      }
    })

    // Find the profile picture element and assert its 'src' attribute
    const profilePicture = wrapper.find('img')
    expect(profilePicture.exists()).toBe(true)
    expect(profilePicture.attributes('src')).toBe(mockUser.picture)
  })
})

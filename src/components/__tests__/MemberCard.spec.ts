import { mount } from '@vue/test-utils'
import MemberCard from '@/components/suggestedPeople/MemberCard.vue'
import { describe, it, expect } from 'vitest'

describe('MemberCard', () => {
  it('renders user profile image, name, profession, location, and follow button', () => {
    // Mock user data
    const person = {
      name: 'John Doe',
      profession: 'Doctor',
      location: 'New York',
      picture: 'https://example.com/profile.jpg',
      is_doctor: true // You might need to adjust this based on your User type definition
    }

    // Mount the component with mocked props
    const wrapper = mount(MemberCard, {
      props: {
        person
      }
    })

    // Assert profile image is rendered with correct source
    const profileImage = wrapper.find('img')
    expect(profileImage.exists()).toBe(true)
    expect(profileImage.attributes('src')).toBe(person.picture)

    // Assert name and profession are rendered
    const name = wrapper.find('.text-gray-800')
    expect(name.text()).toBe(person.name)

    const profession = wrapper.find('.text-yellow-500')
    expect(profession.text()).toBe(person.profession)

    // Assert location is rendered
    const location = wrapper.find('.text-gray-600')
    expect(location.text()).toBe(person.location)

    // Assert follow button is rendered
    const followButton = wrapper.find('button')
    expect(followButton.exists()).toBe(true)
    expect(followButton.text()).toBe('Follow')
  })
})

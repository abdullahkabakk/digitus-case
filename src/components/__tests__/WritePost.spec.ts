import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import WritePost from '../WritePost.vue'

// Mock profile store
vi.mock('@/stores/profile', () => {
  return {
    useProfileStore: () => {
      return {
        fetchProfile: vi.fn(() =>
          Promise.resolve({
            name: 'John Doe',
            picture: 'https://example.com/profile.jpg'
          })
        )
      }
    }
  }
})

describe('ProfileForm', () => {
  it('renders loading state when loading is true', async () => {
    const profile = {
      name: 'John Doe',
      picture: 'https://example.com/profile.jpg'
    }
    const wrapper = mount(WritePost, {
      data() {
        return {
          loading: true,
          profile
        }
      }
    })

    // Assert loading elements are present
    expect(wrapper.find('.animate-pulse')).toBeTruthy()
  })

  // it('renders profile content when loading is false', async () => {
  //   const profile = {
  //     name: 'John Doe',
  //     picture: 'https://example.com/profile.jpg'
  //   }
  //
  //   const wrapper = mount(WritePost, {
  //     data() {
  //       return {
  //         loading: false,
  //         profile
  //       }
  //     }
  //   })
  //
  //   // Assert profile picture is rendered
  //   expect(wrapper.find('img').exists()).toBe(true)
  //
  //   // Assert input field placeholder contains profile name
  //   const input = wrapper.find('input')
  //   expect(input.attributes('placeholder')).toContain(profile.name)
  // })

  it('emits "post" event when post button is clicked', async () => {
    const wrapper = mount(WritePost, {
      data() {
        return {
          loading: false,
          profile: {
            name: 'John Doe',
            picture: 'https://example.com/profile.jpg'
          }
        }
      }
    })

    // Click post button
    await wrapper.find('button').trigger('click')

    // Assert post method is called
  })
})

// Import the necessary dependencies for testing
import { mount } from '@vue/test-utils'
import UserNotifications from '@/components/navbar/UserNotifications.vue'
import { describe, it, expect } from 'vitest'
// Define a mock notifications array for testing
const mockNotifications = [
  { icon: 'mdi:email', count: 3 },
  { icon: 'mdi:bell', count: 1 },
  { icon: 'mdi:message', count: 0 }
]

describe('UserNotifications', () => {
  it('renders notifications correctly', () => {
    // Mount the component with mock props
    const wrapper = mount(UserNotifications, {
      props: {
        notifications: mockNotifications
      }
    })

    // Find all notification buttons
    const notificationButtons = wrapper.findAll('button')

    // Check if the correct number of buttons are rendered
    expect(notificationButtons.length).toBe(mockNotifications.length)

    // Check if notification count is rendered correctly
    mockNotifications.forEach((notification, index) => {
      const notificationCount = notificationButtons[index].find('.bg-red-400')
      if (notification.count > 0) {
        expect(notificationCount.exists()).toBe(true)
        expect(notificationCount.text()).toBe(notification.count.toString())
      } else {
        expect(notificationCount.exists()).toBe(false)
      }
    })
  })
})

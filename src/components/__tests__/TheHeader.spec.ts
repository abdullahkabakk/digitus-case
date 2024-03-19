import { mount } from '@vue/test-utils'
import TheHeader from '@/components/suggestedPeople/TheHeader.vue'
import { describe, it, expect } from 'vitest'

describe('TheHeader', () => {
  it('renders header with correct text and "See all" button', () => {
    // Mount the component
    const wrapper = mount(TheHeader)

    // Assert header text is rendered
    const headerText = wrapper.find('span')
    expect(headerText.exists()).toBe(true)
    expect(headerText.text()).toBe('Members You May Know')

    // Assert "See all" button is rendered
    const seeAllButton = wrapper.find('button')
    expect(seeAllButton.exists()).toBe(true)
    expect(seeAllButton.text()).toBe('See all')
  })
})

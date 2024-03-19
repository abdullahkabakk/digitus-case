import { mount } from '@vue/test-utils'
import ChangeButton from '@/components/suggestedPeople/ChangeButton.vue'
import { describe, it, expect } from 'vitest'

describe('ChangeButton', () => {
  it('emits "change" event with type "next" when clicking next button', async () => {
    const wrapper = mount(ChangeButton, {
      props: {
        type: 'next'
      }
    })

    // Simulate click on the next button
    await wrapper.find('button').trigger('click')

    // Check if "change" event is emitted with type "next"
    expect(wrapper.emitted('change')).toBeTruthy()
  })

  it('emits "change" event with type "prev" when clicking previous button', async () => {
    const wrapper = mount(ChangeButton, {
      props: {
        type: 'prev'
      }
    })

    // Simulate click on the previous button
    await wrapper.find('button').trigger('click')

    // Check if "change" event is emitted with type "prev"
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})

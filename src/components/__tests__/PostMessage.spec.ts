import { mount } from '@vue/test-utils'
import PostMessage from '../postCard/PostMessage.vue'

import { describe, it, expect } from 'vitest'

describe('CommentInput.vue', () => {
  it('emits input event when typing in the input field', async () => {
    const wrapper = mount(PostMessage)
    const input = wrapper.find('input[type="text"]')

    await input.setValue('Test comment')

    expect(wrapper.emitted('input')).toBeTruthy()
  })
})

import { shallowMount } from '@vue/test-utils'
import HashTags from '../postCard/HashTags.vue'
import { describe, it, expect } from 'vitest'

describe('HashTags.vue', () => {
  it('renders hashtags correctly', () => {
    const hashtags = ['travel', 'adventure', 'explore']
    const wrapper = shallowMount(HashTags, {
      props: { hashtags }
    })

    const tags = wrapper.findAll('.hash-tag')
    expect(tags).toHaveLength(hashtags.length)

    tags.forEach((tag, index) => {
      expect(tag.text()).toBe(`#${hashtags[index]}`)
    })
  })
})

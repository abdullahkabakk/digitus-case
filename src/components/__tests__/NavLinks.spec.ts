import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import NavLinks from '@/components/navbar/NavLinks.vue'

describe('NavLinks', () => {
  it('renders navigation links correctly', () => {
    const navbarRoutes = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' }
    ]

    const wrapper = mount(NavLinks, {
      props: {
        routes: navbarRoutes
      }
    })

    const links = wrapper.findAll('router-link')
    expect(links.length).toBe(navbarRoutes.length)

    navbarRoutes.forEach((route, index) => {
      expect(links[index].text()).toBe(route.name)
      expect(links[index].attributes('to')).toBe(route.path)
    })
  })
})

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FakeIDE from '../FakeIDE.vue'

describe('FakeIDE', () => {
  it('renders properly', () => {
    const wrapper = mount(FakeIDE, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

import { shallowMount } from '@vue/test-utils'
import BCheckboxTag from '@components/checkbox/CheckboxTag'

let wrapper

describe('BCheckboxTag', () => {
    beforeEach(() => {
        wrapper = shallowMount(BCheckboxTag)
    })

    it('is called', () => {
        expect(wrapper.name()).toBe('BCheckboxTag')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('render correctly', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('has an input checkbox', () => {
        expect(wrapper.contains('label input[type=checkbox]')).toBeTruthy()
    })

    it('emit input event with value when value change', () => {
        wrapper.setProps({ value: true })
        expect(wrapper.vm.computedValue).toBeTruthy()
        wrapper.vm.computedValue = false
        const valueEmitted = wrapper.emitted()['input'][0]
        expect(valueEmitted).toContainEqual(false)
    })

    it('method focus() gives focus to the input element', (done) => {
        wrapper.vm.$refs.input.focus = jest.fn()
        wrapper.vm.focus()
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$refs.input.focus).toHaveBeenCalled()
            done()
        })
    })
})
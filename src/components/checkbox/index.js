import Checkbox from './Checkbox'
import CheckboxButton from './CheckboxButton'
import CheckboxTag from './CheckboxTag'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, Checkbox)
        registerComponent(Vue, CheckboxButton)
        registerComponent(Vue, CheckboxTag)
    }
}

use(Plugin)

export default Plugin

export {
    Checkbox,
    CheckboxButton,
    CheckboxTag
}

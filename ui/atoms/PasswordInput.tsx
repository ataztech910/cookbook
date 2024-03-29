import { useState } from "react"
import { Placeholders } from "../../pages/core/configs"
import { isLetter } from "../../pages/core/utils"

const PasswordInput = ({ onPasswordEnter, id }: any) => {
    const input = {
        placeholder: Placeholders.PASSWORD_INPUT
    }
    const maxValueLength = 50
    const [value, setValue] = useState('')

    const onChangeHandler = (event: Partial<any>) => {
        const value = event.target.value
        if(isLetter(value) && value.length <= maxValueLength) {
            setValue(value)
        }
        onPasswordEnter(value)
    }

    return (
        <input id={id} type="password" onChange={onChangeHandler} placeholder={input.placeholder} value={value} />
    )
}

export default PasswordInput

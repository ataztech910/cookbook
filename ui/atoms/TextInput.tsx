import { useState } from "react";
import { Placeholders } from "../../pages/core/configs"
import { isLetter } from "../../pages/core/utils";

const TextInput = ({ onLoginEnter } : any) => {
    const input = {
        placeholder: Placeholders.TEXT_INPUT
    }
    const maxValueLength = 100

    const [value, setValue] = useState('')

    const onChangeHandler = (event: Partial<any>) => {
        const value = event.target.value
        if(isLetter(value) && value.length <= maxValueLength) {
            setValue(value)
        }
        onLoginEnter(value)
    }

    return (
        <input type="text" onChange={onChangeHandler} placeholder={input.placeholder} value={value} />
    )
}

export default TextInput

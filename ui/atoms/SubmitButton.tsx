import { Labels } from "../../pages/core/configs"

const SubmitButton = ({id}: any) => {
    const input = {
        label: Labels.SUBMIT
    }
    return (
        <button id={id} type="submit">{input.label}</button>
    )
}

export default SubmitButton

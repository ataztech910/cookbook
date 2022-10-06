import { Labels } from "../../pages/core/configs"

const SubmitButton = () => {
    const input = {
        label: Labels.SUBMIT
    }
    return (
        <button type="submit">{input.label}</button>
    )
}

export default SubmitButton

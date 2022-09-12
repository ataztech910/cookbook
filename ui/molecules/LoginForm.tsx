import TextInput from '../atoms/TextInput'
import PasswordInput from '../atoms/PasswordInput'
import SubmitButton from '../atoms/SubmitButton'
import { TestIDs } from '../../pages/core/configs'
import styles from '../../styles/LoginForm.module.scss'

const LoginForm = () => {
    const errorTestID = TestIDs.ERROR

    const login = () => {
        console.log('login')
    }

    return (
        <section className={styles.LoginForm}>
            <form onSubmit={login}>
                <div>
                    <TextInput />
                </div>
                <div>
                    <PasswordInput />
                </div>
                <div>
                    <SubmitButton />
                </div>
                <div data-testid={errorTestID}></div>
            </form>
        </section>
    )
}

export default LoginForm

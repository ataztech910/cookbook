import TextInput from '../atoms/TextInput'
import PasswordInput from '../atoms/PasswordInput'
import SubmitButton from '../atoms/SubmitButton'
import { TestIDs } from '../../pages/core/configs'
import styles from '../../styles/LoginForm.module.scss'
import { LoginService } from '../../pages/api/core/login.service'
import { useState } from 'react'

const LoginForm = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const errorTestID = TestIDs.ERROR
    const loginService = LoginService.getInstance()
    const loginAction = (event: any) => {
        console.log('login')
        event.preventDefault()
        loginService.login(login, password)
    }

    const loginEnter = (value: string ) => {
        setLogin(value)
    }

    const passwordEnter = (value: string ) => {
        setPassword(value)
    }

    return (
        <section className={styles.LoginForm}>
            <form onSubmit={loginAction}>
                <div>
                    <TextInput onLoginEnter={loginEnter} />
                </div>
                <div>
                    <PasswordInput onPasswordEnter={passwordEnter} />
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

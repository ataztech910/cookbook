import TextInput from '../atoms/TextInput'
import PasswordInput from '../atoms/PasswordInput'
import SubmitButton from '../atoms/SubmitButton'
import { TestIDs } from '../../pages/core/configs'
import styles from '../../styles/LoginForm.module.scss'
import { LoginService } from '../../pages/api/core/login.service'
import { useState } from 'react'
import { useAppDispatch } from '../../pages/hooks'
import { changeAuthState } from "../../pages/store/authSlice";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router'

const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    
    const dispatch = useAppDispatch();

    const errorTestID = TestIDs.ERROR
    const loginService = LoginService.getInstance()
    const loginAction = async (event: any) => {
        console.log('login');
        event.preventDefault();
        const loginState = await loginService.login(login, password);
        console.log('loginState', loginState);
        dispatch(changeAuthState(loginState));
        if (loginState.isLoggedIn) {
            router.push('/articles');
        }
        console.log('loginState', loginState);
    }

    const loginEnter = (value: string ) => {
        setLogin(value);
    }

    const passwordEnter = (value: string ) => {
        setPassword(value);
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

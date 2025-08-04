import { useNavigate } from "react-router-dom";
import { pswSchema, usernameSchema } from "../schema";
import { Button } from "../../../shared/UI/Button";
import { useForm } from "react-hook-form";
import type { IUserdataAuth } from "../../../shared/types/types";
import { RegisterAPI } from "../api";
import { modalStore } from "../../../app/store/modalStore";
import { Modal } from "../../../components/modal/modal";
import { observer } from "mobx-react-lite";



 function RegisterPage(){

    const n = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<IUserdataAuth>({'mode': 'onChange'})

    const submit = (data:IUserdataAuth) => {
        RegisterAPI(data, n)
    }
     
    const handleLogin = () => {
        n('/login')
    }


    return (
        <div className='mc'>
            {modalStore.isOpenModal && <Modal />}
            
            <form onSubmit={handleSubmit(submit)} className='form fn'>
                <h2>Регистрация</h2>

                <div>
                    <input 
                    placeholder='Введите имя пользователя'
                    className='Input' 
                    {...register('username', usernameSchema)}
                    />

                    {errors.username?.message && <p className='validate-text'>{errors.username.message}</p>}
                </div>

                <div>
                    <input 
                    placeholder='Введите пароль..'
                    className='Input' 
                    {...register('password', pswSchema)}
                />

                {errors.password?.message && <p className='validate-text'>{errors.password.message}</p>}
                </div>

                <Button  
                type='submit'  
                label='регистрация'
                />

                <p>или</p>

                <Button 
                label='Вход'
                bg='bgNone'
                onClick={handleLogin}
                />

             </form>
        </div>
    )
}

export default observer(RegisterPage)
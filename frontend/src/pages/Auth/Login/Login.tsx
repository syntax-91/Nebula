import { useForm } from 'react-hook-form'
import '../styles.scss'
import '../../../shared/UI/Styles.scss'
import { pswSchema, usernameSchema } from '../schema'
import { Button } from '../../../shared/UI/Button'
import { useNavigate } from 'react-router-dom'
import type { IUserdataAuth } from '../../../shared/types/types'
import { LoginAPI } from '../api'
import { modalStore } from '../../../app/store/modalStore'
import { Modal } from '../../../components/modal/modal'
import { observer } from 'mobx-react-lite'

 function LoginPage(){

    const n = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<IUserdataAuth>({'mode': 'onChange'})

    const submit = (data:IUserdataAuth) => {
        LoginAPI(data, n)
    }
    
    const handleReg = () => {
        n('/register')
    }


    return (
        <div className='mc'>
            {modalStore.isOpenModal && <Modal />}
            
            <form onSubmit={handleSubmit(submit)} className='form fn'>
                <h2>Вход</h2>

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
                label='вход'
                />

                <p>или</p>

                <Button 
                label='Регистрация'
                bg='bgNone'
                onClick={handleReg}
                />

             </form>
        </div>
    )
}

export default observer(LoginPage)
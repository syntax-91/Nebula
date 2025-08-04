import { modalStore } from '../../app/store/modalStore'
import './styles.scss'

export function Modal(){

    const handleClose = () => {
        modalStore.close()
    }
 
    return (
        <div className='modal up'>
            <div>{modalStore.msg}</div>
            
            <div 
            onClick={handleClose}
            className="close cp">
                <p>закрыть</p>
            </div>

        </div>
    )
}
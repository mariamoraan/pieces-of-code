import { useNavigate } from 'react-router-dom'
import { bind } from '../../bind'
import styles from './new-task.module.css'
import { Urls } from '../../routing/urls'
const cx = bind(styles)

export const NewTaskPage = () => {
    const navigate = useNavigate()
    const close = () => {
        navigate(Urls.HOME)
    }
    return (
        <div className={cx('wrapper')} onClick={close}>
            <div className={cx('modal')} onClick={(e: React.SyntheticEvent) => e.stopPropagation()}>
                    <form className={cx('form')} onSubmit={close}>
                        <h3>Nueva nota</h3>
                        <input type='text' placeholder='Hacer la compra' />
                        <button type='submit'>Crear</button>
                    </form>
            </div>
        </div>
    )
}

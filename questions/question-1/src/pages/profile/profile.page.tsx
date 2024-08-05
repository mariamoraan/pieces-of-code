import { bind } from '../../bind'
import styles from './profile.module.css'
const cx = bind(styles)

export const ProfilePage = () => {
    return (
        <div className={cx('wrapper')}>
            <h3>Jane Mongomeri</h3>
            <p className={cx('email')}>janemongomeri@gmail.com</p>
        </div>
    )
}

import { bind } from '../../bind'
import styles from './header.module.css'
const cx = bind(styles)

export const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <p className={cx('greeting')}>Hello, <strong>Jane</strong></p>
        </header>
    )
}

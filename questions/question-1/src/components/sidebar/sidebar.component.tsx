import { bind } from "../../bind"
import { Urls } from "../../routing/urls"
import { SiGoogletasks } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { CiStickyNote } from "react-icons/ci";
import styles from './sidebar.module.css'
const cx = bind(styles)

export const Sidebar = () => {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('header')}>
                <CiStickyNote />
                <p>KeepNotes</p>
            </div>
            <nav className={cx('navbar')}>
                <ul className={cx('links')}>
                    <li className={cx('links__li')}>
                        <a className={cx('link')} href={Urls.TASKS}>
                            <SiGoogletasks />
                            Tareas
                        </a>
                    </li>
                    <li className={cx('links__li')}>
                        <a className={cx('link')} href={Urls.PROFILE}>
                            <FaRegUser />
                            Perfil
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={cx('footer')}>
            <a className={cx('button-link')} href={Urls.NEW_TASK}><IoMdAdd />Nueva tarea</a>
            </div>
        </div>
    )
}

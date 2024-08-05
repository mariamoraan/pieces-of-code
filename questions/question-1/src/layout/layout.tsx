import { Outlet } from "react-router-dom"
import { Sidebar } from "../components/sidebar/sidebar.component"
import { Header } from "../components/header/header.component"
import  styles from './layout.module.css'
import { bind } from "../bind"
const cx = bind(styles)

export const Layout = () => {
    return (
        <div className={cx('layout')}>
            <Header />
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

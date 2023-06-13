import { Link, Outlet } from "react-router-dom"
import "./index.css"

export const Home = () => { return (<h1>Home is Home and will always be Home</h1>) }

export const Layout = () => {
    return (
        <>
            <header>
                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/sizeselector">SizedSelector</Link>
                    <Link to="/colorchanger">ColorChanger</Link>
                    <Link to="/users">Users</Link>
                </nav>
            </header>
            <section>
                <Outlet />
            </section>
        </>
    )
}
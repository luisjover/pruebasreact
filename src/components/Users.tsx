import { getAllUsers } from "../assets/db/users";
import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import './App.css'

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const users = getAllUsers();
    const filter = searchParams.get("filter") ?? "";

    const handleFilter = (event: any) => {
        const element: HTMLInputElement | null = event.target;
        if (element === null) return;
        setSearchParams({ filter: element.value })
    };


    return (
        <div>
            <h1>Users</h1>
            <input
                value={filter}
                onChange={handleFilter}
                type="text"
                placeholder="filter by name..."
            />
            <div className="users-grid">
                <ul>
                    {users.filter((user) => {
                        if (!filter) return true;
                        const name = user.name.toLowerCase();
                        return name.includes(filter.toLowerCase());
                    }).map((user) => (
                        <li key={user.id}>
                            <h2>
                                <NavLink
                                    className={({ isActive }) => isActive ? "link-active" : ""}
                                    to={user.id.toString() + location.search}>{user.name}
                                </NavLink>
                            </h2>
                        </li>
                    ))}
                </ul>
                <article>
                    <Outlet />
                </article>
            </div>
        </div>
    )
}
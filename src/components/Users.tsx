import { getAllUsers } from "../assets/db/users";
import { Link } from "react-router-dom";

export const Users = () => {

    const users = getAllUsers();

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <h2>
                            <Link to={user.id.toString()}>{user.name}</Link>
                        </h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}
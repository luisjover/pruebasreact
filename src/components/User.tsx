import {useNavigate, useParams, } from "react-router-dom"
import { deleteUser, getUser } from "../assets/db/users";

export const User = () => {
    const params = useParams();
    const navigate = useNavigate();

    const userId: string | undefined = params.userId;
    if (userId === undefined) return;
    const user = getUser(parseInt(userId))
    if (user === undefined) return <div>User not found</div>;

    const handleDelete = () =>{
        deleteUser(parseInt(userId));
        navigate("/users");
                
    }

    return (
        <>
            <div>
                <h2>{user.name}</h2>
            </div>
            <div>
                <a href={"https://" + user.website} target="_blank" rel="noopener noreferrer">
                    <p>{user.website}</p>
                </a>
            </div>
            <div>
                <p>{user.phone}</p>
            </div>
            <button className="delte-button" onClick={handleDelete}>Delete</button>
        </>
    )
}
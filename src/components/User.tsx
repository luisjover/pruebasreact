import { useParams, Navigate, Link } from "react-router-dom"
import { getUser } from "../assets/db/users";


export const User = () => {
    const params = useParams();



    const userId: string | undefined = params.userId;
    if (userId === undefined) return;
    const user = getUser(parseInt(userId))
    if (user === undefined) return;


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
        </>



    )
}
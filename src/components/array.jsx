import { useState } from "react";

export default function Users() {
    const [users, setUsers] = useState(["Alice", "Bob"]);

    function addUser() {
        const newUser = `User${users.length + 1}`;
        setUsers([...users, newUser]);
    }

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}

            </ul>
            <button onClick={addUser}>Add User</button>
        </div>
    );
}
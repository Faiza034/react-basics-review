import { useState, useEffect } from "react"
import React from 'react'

const Api = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }
                const data = await response.json()
                setUsers(data)
            }
            catch (error) {
                setError(error.message)
            }
            finally {
                setLoading(false)
            }

        };
        fetchUsers()
    }, []);
    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>Error: {error}</h2>
    }
    return (
        <div>
            <table border="2" cellPadding="10" cellSpacing="0" width={"100%"} style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Api
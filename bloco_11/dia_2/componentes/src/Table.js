import React, { Component } from "react"
import UserName from "./Username"
import UserOtherInfo from './UserOtherInfo'

class Table extends Component {
    render() {
        const users =[
            {
                id: 102,
                name: "João",
                email: "joao@gmail.com",
            },
            {
                id: 77,
                name: "Amélia",
                email: "amelia@gmail.com",
            },
            {
                id: 42,
                name: "Lucas Ferraz",
                email: "lucas@gmail.com",
            },
        ]
        return (
            users.map(user => (
                <div>
                    <UserName name={user.name}/>
                    <UserOtherInfo email={user.email} id={user}/>
                </div>
            ) )
        )
    }
}
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
    const { cancelToken } = useContext(AuthContext)
    const navigate = useNavigate()
    return (
        <>
        <h1>Dashboardddddd</h1>
        <button onClick={() => [cancelToken(), navigate('/')]}>logout</button>
        </>
    )
}
import React from "react";
import * as S from './styles'
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { useNavigate } from 'react-router-dom'
import { Header } from "../../components/header";
import { Resume } from "../../components/resume";

export const Dashboard = () => {
    const { cancelToken } = useContext(AuthContext)
    const navigate = useNavigate()
    return (
        <>
        <button onClick={() => [cancelToken(), navigate('/')]}>logout</button>
        <Header />
        <Resume />
        </>
    )
}
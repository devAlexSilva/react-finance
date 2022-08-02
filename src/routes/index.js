import { Fragment, useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Dashboard } from "../pages/dashboard"
import { AuthContext } from "../contexts/auth";


export const RoutesApp = () => {
    const context = useContext(AuthContext)
    const { user } = context

    return (
        <>
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route  path="/" element={<Login />}/>
                    <Route  path="/register" element={<Register />}/>
                    <Route path="/dashboard" element={
                        user ? (
                            <Dashboard />
                            ) : (
                                <Login />
                        )
                    } />
                    <Route  path="*" element={<Login />}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
        </>
    )
}
import { Fragment, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Dashboard } from "../pages/dashboard"
import { AuthContext } from "../contexts/auth";
import { LandingPage } from "../pages/landing_page";


export const RoutesApp = () => {
    const context = useContext(AuthContext)
    const { user } = context

    return (
        <>
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route  path="/" element={<LandingPage />}/>
                    <Route  path="/login" element={<Login />}/>
                    <Route  path="/register" element={<Register />}/>
                    <Route path="/dashboard" element={
                        user ? (
                            <Dashboard />
                            ) : (
                                <Login />
                        )
                    } />
                    <Route  path="*" element={<LandingPage />}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
        </>
    )
}
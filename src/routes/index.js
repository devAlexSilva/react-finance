import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Dashboard } from "../pages/dashboard"


const Private = ({ Item }) => {
    const isLogged = false

    return isLogged? <Item /> : <Login /> 
}

export const RoutesApp = () => {
    return (
        <>
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route  path="/" element={<Login />}/>
                    <Route  path="/register" element={<Register />}/>
                    <Route path="/dashboard" element={<Private Item={Dashboard} />} />
                    <Route  path="*" element={<Login />}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
        </>
    )
}
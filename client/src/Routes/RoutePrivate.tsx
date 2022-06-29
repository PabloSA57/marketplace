import * as React from "react";

import {Navigate} from "react-router-dom";
//import { TodoContext } from "../Context/Context";
//import {useAuth} from "../Hooks/useAuth";

interface Prop {
    children: JSX.Element,
}

function RoutePrivate({ children}: Prop) {
    //const {todoState}= React.useContext(TodoContext);
    //const {jwtToken, currentType} = todoState;

    if (!Boolean(jwtToken) || currentType === null) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default RoutePrivate;
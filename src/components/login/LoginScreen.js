import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {
        //history.push("/"); //Te envia a la Dirección que le pongas
        //history.replace("/"); //Te envia a la Dirección que le pongas y borra la Dirección anterior

        const lastPath = localStorage.getItem("lastPath") || "/";

        const action = {
            type: types.login,
            payload: { name: "Fernando" }
        }

        dispatch( action );

        history.replace(lastPath);
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1><hr />

            <button className="btn btn-primary" onClick={ handleLogin }>Ingresar</button>
        </div>
    )
}

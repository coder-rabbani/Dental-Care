import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth"

export default function PrivateRoute({ children, ...rest }) {
    let {user} = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
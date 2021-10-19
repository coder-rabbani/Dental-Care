import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth"

export default function PrivateRoute({ children, ...rest }) {
    let {user, isLoading} = useAuth();
    if(isLoading){
      return   <div className="container text-center py-5">
        <Spinner animation="border" variant="success" />
      </div>
    }
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
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Dashboard from "./views/Dashboard";
import Account from "./views/Account";
import RouteWithLayout from "./components/RouteWithLayout";
import MainLayout from "./components/MainLayout";
import PureLayout from "./components/PureLayout";
import {AUTH_TOKEN} from "./constants"

function PrivateRoute({children, ...rest}) {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
        <Route
            {...rest}
            render={({location}) =>
                authToken ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/sign-in",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}

function App() {
    return (
        <Router>
            <Switch>

                <RouteWithLayout exact path="/sign-in" component={SignIn} layout={PureLayout}/>
                <RouteWithLayout exact path="/sign-up" component={SignUp} layout={PureLayout}/>
                {/*<RouteWithLayout exact path="/dashboard" component={Dashboard} layout={MainLayout}/>*/}
                {/*<RouteWithLayout exact path="/account" component={Account} layout={MainLayout}/>*/}
                <PrivateRoute path="/">
                    <Redirect exact from="/" to="/dashboard"/>
                    <RouteWithLayout exact path="/account" component={Account} layout={MainLayout}/>
                    <RouteWithLayout exact path="/dashboard" component={Dashboard} layout={MainLayout}/>
                </PrivateRoute>
                {/*<RouteWithLayout exact path="/$/user/:userId" component={SignIn} layout={Main} />*/}
            </Switch>
        </Router>
    );
}


export default App;

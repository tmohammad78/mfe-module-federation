import React from "react"
import { Switch, Router, Route} from "react-router-dom" 
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles"
import Signin from "./components/Signin"
import Signup from "./components/Signup"


export default ({ history, onSignIn }) => {
    const generateClassName = createGenerateClassName({
        productionPrefix: 'au'
    })
    return (
        <div>
            <StylesProvider generateClassName={generateClassName }>
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signup">
                            <Signup onSignIn={onSignIn} />
                        </Route>
                        <Route path="/auth/signin" >
                            <Signin onSignIn={onSignIn} />
                        </Route>
                    </Switch> 
                </Router>
            </StylesProvider>
        </div>
    )
}
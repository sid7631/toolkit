import React from 'react';
import { Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Overview from './Overview';

function Components(props) {

    const { path } = props.match
    return (
        <div className="wrapper">
            <div id="content">
                <div id="sub-content">
                    <Switch>
                        <Route 
                            exact
                            path={`${path}/overview`}
                            component={Overview}
                        />
                        <Redirect 
                            exact
                            from={`${path}/`} to={`${path}/overview`}
                        />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Components);

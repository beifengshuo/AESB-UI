import React from 'react' ;
import {HashRouter, Route, Switch,Redirect, useRouteMatch,useParams} from 'react-router-dom';
import Login from '@/containers/LoginContainer';
import MainLayout from '@/containers/MianLayoutContainer';
//一级路由
const RootRouter = (props) => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route  path="/mainLayout" component={MainLayout} />
                <Redirect exact from="/*" to="/login"/>
            </Switch>
        </HashRouter>
    )
}
export default RootRouter;




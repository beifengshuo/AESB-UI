import React from 'react' ;
import {HashRouter, Route, Switch,Redirect, useRouteMatch,useParams} from 'react-router-dom';

import Login from '@/containers/LoginContainer';
import MainLayout from '@/containers/MianLayoutContainer';
// import ServerInfo from '@/containers/ServerInfoContainer';

// import Home from '@/component/Home';
// import Realm from '@/component/Realm';//域设置
// import Security from '@/component/Security';//安全中心
// import Application from '@/component/Application';//应用管理

// import Roles from '@/component/UserManager/Roles';//用户管理-角色
// import EditRole from '@/component/UserManager/Roles/Role/EditRole';//用户管理-编辑角色
// import AddRole from '@/component/UserManager/Roles/Role/AddRole';//用户管理-新增角色

// import Groups from '@/component/UserManager/Groups';//用户管理-组
// import EditGroup from '@/component/UserManager/Groups/Group/EditGroup';//用户管理-编辑组
// import AddGroup from '@/component/UserManager/Groups/Group/AddGroup';//用户管理-新增组

// import Users from '@/component/UserManager/Users';//用户管理-用户
// import EditUser from '@/component/UserManager/Users/EditUser';//用户管理-编辑用户
// import AddUser from '@/component/UserManager/Users/AddUser';//用户管理-新增用户

// import Audition from '@/component/Audition';//日志审计


const Default = ()=>{
    let { path, url } = useRouteMatch();
}
//二级路由
export const ContentRouter = (props) => {
    let { path, url } = useRouteMatch();
    return (
        <Switch>

            
            <Redirect exact from={path} to={`${path}/home`}/>
            <Route exact path={`${path}/home`} render={()=><Home {...props}/>}/>

            {/* <Route exact path={`${path}/log`}  />
            <Route exact path={`${path}/to-doing`}  component={}/>
            <Route exact path={`${path}/doing`}  component={}/>
            <Route exact path={`${path}/done`}  component={}/> */}

            {/* <Route exact path={`${path}/client`} render={()=><Application.Clients {...props}/>}/>
            <Route exact path={`${path}/client/:clientId`} render={()=><Application.EditClients {...props}/>}/>
            <Route exact path={`${path}/client/policie/:clientId`} render={()=><Application.Policies {...props}/>}/>
            
            <Route exact path={`${path}/role`} render={()=><Roles.Role {...props}/>}/>
            <Route exact path={`${path}/defaultRole`} render={()=><Roles.DefaultRole {...props}/>}/>
            <Route exact path={`${path}/role/:roleId`}  render={()=><EditRole {...props}/>} />
            <Route exact path={`${path}/role/add/:roleId`}  render={()=><AddRole {...props}/>} />

            <Route exact path={`${path}/security-session`}  component={Security.ClientSession}/>
            <Route exact path={`${path}/security-flowbings`}  component={Security.FlowBings}/>
            <Route exact path={`${path}/security-otp`}  component={Security.OTP}/>
            <Route exact path={`${path}/security-defense`}  component={Security.Defense}/>
            <Route exact path={`${path}/security-tokens`}  component={Security.Tokens}/>
            <Route exact path={`${path}/security-requiredactions`}  component={Security.RequiredActions}/>
            <Route exact path={`${path}/security-email`}  component={Security.Email}/>
        
            <Route exact path={`${path}/user`} render={()=><Users {...props}/>} />
            <Route exact path={`${path}/user/:userId`} component={EditUser} />
            <Route exact path={`${path}/user/add/:userId`} render={()=><AddUser {...props}/>} />
            
         
           

            <Route exact path={`${path}/group`} render={()=><Groups.Group {...props}/>} />
            <Route exact path={`${path}/defaultGroup`} render={()=><Groups.DefaultGroup {...props}/>} />
            <Route exact path={`${path}/group/:groupId`} render={()=><EditGroup {...props}/>} />
            <Route exact path={`${path}/group/add/:groupId`} render={()=><AddGroup {...props}/>}/>

            <Route exact path={`${path}/general`} render={()=><Realm.General {...props}/>}/>
            <Route exact path={`${path}/cache-settings`}  component={Realm.Cache} />
            <Route exact path={`${path}/login`}  component={Realm.Login} /> */}

            {/*日志审计*/}
            {/* <Route exact path={`${path}/audition/loginEvents`}  component={Audition.LoginEvents} />
            <Route exact path={`${path}/audition/adminEvents`}  component={Audition.AdminEvents} /> */}
           
        </Switch>
    )
}
//一级路由
const RootRouter = (props) => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route path="/realm/:realmName" component={MainLayout} />
                {/* <Route exact path="/serverInfo" component={ServerInfo} /> */}
                <Redirect from="/*" to="/login"/>
            </Switch>
        </HashRouter>
       
    )
}
export default RootRouter;




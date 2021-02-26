import React ,{useEffect, useState}from 'react';
import { Form, Input, Button, Checkbox ,message,Spin,Row,Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { LoginIn , getLoginUrl } from '../api/login';
import {createUUID,get_Code_challenge} from '../util';
import {MessageComp} from '@/baseComponent/PromptComp';
import {createFromIconfontCN} from '@ant-design/icons';
import './index.scss';
const IconFont = createFromIconfontCN({
    scriptUrl: 'ali_font_icon.js',//只需引入js,路径在public下，从阿里图标symbol中js,不是下载之后的，图标可在assets中查看，此方式正在试用中，如不方便使用，可更换其他方式
});


const Login = (props) => {
    const{
      getLoginConfigRequest ,
      setRedirectUri ,
      setAuthServerUrl ,
      setCode,
      setRealm,
      getWhoAmI,
    }  = props;
    const [loginState,setLoginState]=useState({
      loginUrl:"",
    });
    const [loading,setLoading]=useState(false);
    const [pageLoading,setPageLoading]=useState(true);
    const [resInfo,setResInfo]=useState({});

    const onFinish = values => {
      if (!loginState.loginUrl) {
        alert('loginUrl 失效，请刷新页面，再次请求');
        return; 
    }
      setLoading(true);
      LoginIn({
        url: loginState.loginUrl,
        data: {
          ...values,
          // username: 'admin',
          // password: 'admin',
          credentialId:"", 
        },
      }).then((res)=>{
          setLoading(false);
          function GetRequest(url) {
            var theRequest = new Object();
            let startIndex = url.indexOf("#")
            if (startIndex != -1) {
                var str = url.substr(startIndex+1);
                var strs = str.split("&");
                for(var i = 0; i < strs.length; i ++) {
                    theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
                }
            }
            return theRequest;
          }

          if(res.Msg && res.Code == 1){//登录失败
            // MessageComp.error(res.Msg);
              setResInfo(res);
            refreshLoginConfigAndSessionCode();//获取登录url的准备参数
          }else if(res.Code == 0){

            let location = res['Location'];
            let authState =  GetRequest(location);
            if(authState.code){
              setResInfo({});
              setCode(authState.code);
              props.history.push({pathname: `/realm/master`,pre:'/login'});
            }else{
              setResInfo({Code:101,Msg:"该用户没有code权限"});
              // MessageComp.error("该用户没有code权限");
              refreshLoginConfigAndSessionCode();//获取登录url的准备参数
              // alert("该用户没有code权限")
              // setCode(authState.code);
              // props.history.push({pathname: `/realm/master`,pre:'/login'});
            }  
          }
      
      }).catch(err=>{
        MessageComp.error(err);
      })
    };

    const refreshLoginConfigAndSessionCode = ()=>{
     
      getLoginConfigRequest().then((config_res)=>{
        createUrl(config_res);
      }).catch(err=>{
        setPageLoading(false);
      })

      const createUrl = (config_res)=>{
        let redirectUri = config_res['auth-server-url']+"admin/master/console/";
        setRedirectUri(redirectUri);//存入store
        setAuthServerUrl(config_res['auth-server-url']);//存入store
        setRealm(config_res['realm']);//存入store
    
        getLoginUrl({
          client_id : encodeURIComponent(config_res.resource),
          redirect_uri:encodeURIComponent(config_res['auth-server-url']+"admin/master/console/"),
          state : encodeURIComponent(createUUID()),
          response_mode : encodeURIComponent("fragment"),
          response_type : encodeURIComponent("code"),
          scope : encodeURIComponent("openid"),
          nonce : encodeURIComponent(createUUID()),
          code_challenge : get_Code_challenge("S256"),
          code_challenge_method : "S256"
        }).then((login_res)=>{
          if(login_res.loginAction){
            let loginAction =  login_res.loginAction;
            let start = loginAction.indexOf('/auth/');
            let str = login_res.loginAction.substring(start,loginAction.length);
           
            setLoginState({ loginUrl : str  });

          }else if(login_res.authServerUrl){
            props.history.push({pathname: `/realm/${login_res.masterRealm}`});
          }
          setPageLoading(false);
        }).catch(err=>{
          setPageLoading(false);  
        });

      }

    }
    const resetLoginData = ()=>{
        //清除cookie
        function clearAllCookie() {
          var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
          if(keys) {
              for(var i = keys.length; i--;)
              document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
          }
        }  
        //清除浏览器里的缓存localStorage, sessionStorage,cookie 等
        props.clearToken();
        props.resetLayoutData();
        // localStorage.clear();
        // sessionStorage.clear();
        clearAllCookie();//删除所有cookie变量 
    }
  
   useEffect(()=>{ 
    resetLoginData();
    refreshLoginConfigAndSessionCode();//获取登录url的准备参数
    // handelClick1();//获取登录前的信息
   },[]);

   let myDate = new Date();       
  let thisYear = myDate.getFullYear(); 

   if(pageLoading){
    return(
      <Row style={{height:'100%' , justifyContent: 'center', alignItems: 'center'}}>
        <Spin loading="true"></Spin>
      </Row>
      
    )
   }

    return (
      <Row className="login-wrap">
        <Col span={19} className="login-bg" >
            <div className="login-bg-logo"></div>
            <div className="login-bg-img"></div>
            <div className="foot-mark"> ©{thisYear} 金蝶天燕云计算版权所有 </div> 
          </Col>
          <Col span={5} className="login-form-wrap">
            <div className="login-form">
              <Form
                  initialValues={{ 
                      // username: 'admin',
                      // password: 'admin',
                  }}
                  onFinish={onFinish}
                  className="apusic-form apusic-form-login"
              >
                <div className="login-form-title">统一身份管理平台</div>

                    <div style={{display:!resInfo.Code || resInfo.Code===0?'none':'block'}}>
                        <div className="alert alert-error">
                            <IconFont className="alert-icon" type="iconerror" />
                            <span>{resInfo.Msg}</span>
                        </div>
                    </div>

                {/*<Form.Item style={{display:!resInfo.Code || resInfo.Code===0?'none':'block',padding: '0 20px'}}>
                    <div className="alert alert-error" >
                        <IconFont className="alert-icon" type="iconerror" />
                        <span>{resInfo.Msg}</span>
                    </div>
                </Form.Item>*/}
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your Username!'}]}
                >
                  <Input 
                    allowClear 
                    prefix={<UserOutlined className="site-form-item-icon" />} 
                    placeholder="Username" 
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    allowClear
                  />
                </Form.Item>
                <Form.Item>
                  <Button  type="apusic" block htmlType="submit" className="login-form-button" loading={loading}>  登录 </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
       </Row>
        
    )
}
export default Login;

// export default connect((state)=>state.loginState,{getLoginConfigRequest})(Login);
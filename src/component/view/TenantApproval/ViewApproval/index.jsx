
import React ,{useState,useEffect}from 'react';
import { Form,   Row, Col,Button, Space, Collapse,Radio} from 'antd';
import { useParams ,useRouteMatch} from "react-router-dom";
import AiCard from '@/baseComponent/AiCard';
import AiCardButton from '@/baseComponent/AiCardButton';
import ShowApprovalInfo from '../ShowApprovalInfo';
import { getTenantInfo, getTenantApplyInfo} from '@/api/operate/tenantApproval';
const ViewApproval = (props) => {
    const {
        handleClickBreadcrumb,
        breadcrumb,
        setBreadcrumb,
    }=props;
    const {id ,loginId}=useParams();
    const { url } = useRouteMatch();
    console.log("useRouteMatch()",useRouteMatch())
    const [tenantInfo , setTenantInfo] = useState({});
    const [approveStatus , setApproveStatus] = useState({}); 

    const goback = ()=>{
        //此处的面包屑，不会随路由的改变而改变，所有先用这种面包屑的方法代替，如有时间,待优化
        handleClickBreadcrumb(breadcrumb[0])
    }
    const goApproval = ()=>{
        //此处的面包屑，不会随路由的改变而改变，所有先用这种面包屑的方法代替，如有时间,待优化
        const url = `/${loginId}/mainLayout/operate/tenantApproval/approval/${id}`;

        const new_breadcrumb = [...breadcrumb]
        new_breadcrumb.pop();
        new_breadcrumb.push({
            name:"审批",       
            key:"approval",
            level:1,
            url, 
        });
        console.log("new_breadcrumb",new_breadcrumb)
        setBreadcrumb(new_breadcrumb)
        props.history.push(url); 
    }


    const showTenantInfo = {
        "租户code":"code",
        "租户名称":"name",
        "申请人联系电话":"linkPhone",
        "申请人电子邮箱":"linkEmail",
        "申请人姓名":"linkMan",
        "申请说明":"description",
    }

    useEffect(()=>{
        getTenantInfo(id).then(res=>{
            let obj ={}
            for(let key in showTenantInfo){
                // console.log(key,showTenantInfo[key],res[showTenantInfo[key]])
                obj[key] = res[showTenantInfo[key]]
            }
          
            setTenantInfo(obj);
            setApproveStatus(res['approveStatus']);
        })
    },[])
   
    return(
        <>
        <AiCardButton title={"查看"}>
            {
                approveStatus == 1 && <Button type="primary" onClick={ goApproval } >审批</Button>
            }
            <Button type="primary" onClick={goback}>返回</Button>
        </AiCardButton>


        <AiCard style={{width:'calc(100% - 20px)',marginLeft:'10px'}} >
            <ShowApprovalInfo tenantInfo={tenantInfo}/>
        </AiCard>
        <AiCard title={"审批信息"} className="box-flex-grow-1">
            <div style={{padding:20}}>
                {
                    approveStatus == 1
                    ?
                    <div style={{color:'#666'}}>审批状态：尚未审批 </div>
                    :
                    approveStatus == 2
                    ?
                    <>
                    <Row gutter={24}>
                        <Col span={4}>我的审批</Col>
                        <Col span={20}>同意</Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={4}>功能套餐</Col>
                        <Col span={20}>....</Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={4}>账号套餐</Col>
                        <Col span={20}>....</Col>
                    </Row>
                    </>
                    :
                    <>无效的状态</>
                }
            </div>
        </AiCard>
        </>
    )
};
export default ViewApproval;
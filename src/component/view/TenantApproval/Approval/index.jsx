import React ,{useState,useEffect}from 'react';
import { Form,   Row, Col,Button, Space, Collapse,Radio} from 'antd';
import { useParams } from "react-router-dom";
import AiCardButton from '@/baseComponent/AiCardButton';
import AiCard from '@/baseComponent/AiCard';
import ShowApprovalInfo from '../ShowApprovalInfo';
import { getTenantInfo, getTenantApplyInfo} from '@/api/operate/tenantApproval';
const Approval = (props) => {
    const {
        handleClickBreadcrumb,
        breadcrumb,
    }=props;
    const {id }=useParams();
    const [tenantInfo , setTenantInfo] = useState({}); 

    const goback = ()=>{
        //此处的面包屑，不会随路由的改变而改变，所有先用这种面包屑的方法代替，如有时间,待优化
        handleClickBreadcrumb(breadcrumb[0])
    }
//     approveStatus: 1
// code: "taobao"
// crtId: "21a52601864c42a896c956621e9a1a62"
// crtTime: "2020-12-24 18:01:39"
// description: "申请租户"
// id: "722f815784ee487cb83a919e7fc9fd7d"
// isDel: "0"
// linkEmail: "wizdark1230@126.com"
// linkMan: "LSH"
// linkPhone: "15901234567"
// name: "淘宝"
// updId: "21a52601864c42a896c956621e9a1a62"
// updTime: "2020-12-24 18:01:39"
    
    const getFields =(obj)=>{
        const children = [];
        for(let key in obj){
            children.push(
                <Col span={8} key={key}>
                    <Row>
                        <Col span={6} style={{textAlign:"right",color:'#999',paddingBottom: '10px'}}>{key}：</Col>
                        <Col span={18}>{obj[key]}</Col>
                    </Row>
                {/* <FormItem key={i} item = {item_list[i]} style={{width:'70%'}}/> */}
                </Col>,
            )
        }
        return children;
    }

    const showTenantInfo = {
        "租户code":"code",
        "租户名称":"name",
        "申请人联系电话":"linkPhone",
        "申请人电子邮箱":"linkEmail",
        "申请人姓名":"linkMan",
        "申请说明":"description",
    }

// const showTenantInfo = [
//     { label:'租户code',  name:'code'},
//     { label:'租户名称',  name:'name'},
//     { label:'申请人联系电话',  name:'linkPhone'},
//     { label:'申请人电子邮箱',  name:'linkEmail'},
//     { label:'申请人姓名',  name:'linkMan'},
//     { label:'申请说明',  name:'description'},
// ]
    useEffect(()=>{
        getTenantInfo(id).then(res=>{
            let obj ={}
            for(let key in showTenantInfo){
                // console.log(key,showTenantInfo[key],res[showTenantInfo[key]])
                obj[key] = res[showTenantInfo[key]]
            }
            // console.log("obj",obj)
            // showTenantInfo
            setTenantInfo(obj)
        })
        // getTenantApplyInfo(id).then(res=>{

        // })
    },[])
   
    return(
        <>
        <AiCardButton title={"租户审批"}>
            <Button type="primary" disabled={true}>保存</Button>
            <Button type="primary" disabled={true}>重置</Button>
            <Button type="primary" onClick={goback}>返回</Button>
        </AiCardButton>
        <AiCard style={{width:'calc(100% - 20px)',marginLeft:'10px'}} >
            <ShowApprovalInfo tenantInfo={tenantInfo}/>
        
            {/* <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIconPosition={'right'}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                // {...restProps}
            >

            <Panel header="申请人信息" key="1" >
                <Row gutter={24}>{getFields(tenantInfo)}</Row>
            </Panel>
            </Collapse> */}
        </AiCard>
        <AiCard title={"审批信息"} className="box-flex-grow-1">
            <div style={{padding:20}}>
                <Row gutter={24}>
                    <Col span={4}>我的审批</Col>
                    <Col span={20}>
                        <Radio.Group >
                            <Radio value={1}>同意</Radio>
                            <Radio value={2}>驳回</Radio>
                        </Radio.Group>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={4}>功能套餐</Col>
                    <Col span={20}>....</Col>
                </Row>
                <Row gutter={24}>
                    <Col span={4}>账号套餐</Col>
                    <Col span={20}>....</Col>
                </Row>
            </div>
        </AiCard>
        </>
    )
};
export default Approval;
import React, { useState } from 'react';
import { Button } from 'antd';
import { useRouteMatch } from "react-router-dom";
import {MessageComp , ModalComp} from '@/baseComponent/PromptComp';

const DefaultButton = (props) => {
    const { 
        gettable,
        selectedkeys,
        selectedrows,
        //以上参数 均从TableTemplate中传入，如需更多参数请修改TableTemplate.jsx

        //以下参数 均从自身组件外部传入
        name,
        typeId,
        addBreadcrumb,//新增面包屑,跳转
        deletefun,//删除函数
    }=props;
    const { url } = useRouteMatch();

    const addBreadcrumbFun = ()=>{
        if(addBreadcrumb){
             addBreadcrumb({
                 name,
                 key:typeId,
                 level:3,
                 url:`${url}/${typeId}`,
             })
        }
    }

    const handleDelete = ()=>{
        ModalComp.confirm(
        ()=>{
            deletefun(selectedkeys).then(res=>{
                MessageComp.success("删除成功");
                if(gettable){gettable()} 
            }).catch(err=>{
    
            })
        },
        ()=>{},
        { content:"删除租户后，租户下帐号、任务均为删除" }
        )  
    }

    const isExistSelectKeyLen = (title)=>{
        if(selectedkeys.length ==0 ){
            MessageComp.warning(`至少选择一项${title}`);
            return false;
        }else{
            return true;
        }
    }
    const isOnlyOneSelectKeyLen = (title)=>{
        if(selectedkeys.length >1 ){
            MessageComp.warning(`只能选择一项${title}`);
            return false;
        }else{
            return true;
        }
    }

    const handleClick = ()=>{
        switch(typeId){
            case "add":
                addBreadcrumbFun()
                break;
            case "delete":
                if(isExistSelectKeyLen(name)){
                    handleDelete()
                }
                break;
            // case "frozen":
            //     MessageComp.warning(`暂时不知道什么逻辑`);
            //     break;
            // case "view":
            //     if(isExistSelectKeyLen(name) && isOnlyOneSelectKeyLen(name)){
            //         addBreadcrumbFun()
            //     }
            //     break;
            default:
                if(isExistSelectKeyLen(name) && isOnlyOneSelectKeyLen(name)){
                    addBreadcrumbFun()
                }
                break;   
        }
       
    }

    


    if(typeId=="edit"){

    }

    return (
        <Button type="primary" onClick={handleClick} >{name}</Button>
    );
};
export default DefaultButton;
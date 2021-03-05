import React,{useState} from "react";
import ThemeList from './ThemeList';
import AddTheme from './AddTheme';
import EditTheme from './EditTheme';

const comp_data ={
    ThemeList,
    AddTheme,
    EditTheme,
}



const Theme = ()=>{

    const [page,setPage]=useState({
        title: '主题', 
        comp:"ThemeList",
    })
      
    const changePage=(action)=>{
        if(action==="add"){
            setPage({
                title: '新增主题', 
                comp:"AddTheme",
            })
        }else if(action==="edit"){
            setPage({
                title: '编辑主题',
                comp:"EditTheme",
            })
        }else if(action==="list"){
            setPage({
                title: '主题', 
                comp:"ThemeList",
            })
        }
    }


    let CompPage = ()=>(<>无此页面</>)
    let compName = page["comp"]; 

    if(compName && comp_data[compName]){
        CompPage = comp_data[compName]
    }
    return (
        <>
            <CompPage changePage={changePage}/>
        </>
    )
}
export default Theme;
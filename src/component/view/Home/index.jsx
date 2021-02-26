import React from "react";
import AiCard from '@/baseComponent/AiCard';
const Home = ()=>{
    return (
        <>
            {/* <AiCard title="首页">
                <div style={{padding:20}}>操作区域</div>
            </AiCard> */}
            
            <AiCard className="box-flex-grow-1">
                <div style={{padding:10}}>首页</div>
            </AiCard>
        </>
    )
}
export default Home;
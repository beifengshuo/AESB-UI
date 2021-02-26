import React from 'react';
import { Pagination } from 'antd';
export const handlePagination =({current,pageSize})=>{//->fn
    return ({
        first:(current - 1) * pageSize,//起始条数
        max : pageSize,//每页显示条数
    })
}
const AiPagination = (props) => {

    const {
        data={
            first : 0,  
            max :10
        } ,  
        ...restProps
    } = props;
    const onAiTableChange=(current, pageSize)=>{
        const pagination_data = handlePagination({current,pageSize}); //分页器
        props.onChange(pagination_data)
    }

    return(
        <Pagination  
            size="small"
            total={100} 
            {...restProps}
            onChange={onAiTableChange}
            current = {data.first/data.max + 1}
            pageSize={data.max}
        />
    )
}
export default AiPagination;
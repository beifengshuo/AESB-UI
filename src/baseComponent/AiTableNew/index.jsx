import React from 'react';
import { Table } from 'antd';
const AiTable = (props)=>{
    const {paginationData,...restProps}=props;
    let pagination = false
    if(paginationData){

        pagination = {
            position: ['topRight'] ,
            showSizeChanger:true,
            pageSizeOptions:[5, 10, 20, 50],
            pageSize : paginationData.pageSize,
            current:paginationData.current,
            total : paginationData.total,
            showTotal:(total)=>{return `共 ${total} 条`;}
        }
    }

    return(
        <Table
            pagination={pagination}
            size="small"
            scroll={{ y: 500 }}
            {...restProps}
        />
        
    )
}
export default AiTable;


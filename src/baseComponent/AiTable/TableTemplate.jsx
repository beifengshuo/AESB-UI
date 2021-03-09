//基础列表页的模板
import React,{useEffect , useState , useRef} from 'react';
import {Space,Button ,Form,Row,Col,Input} from 'antd';
import AiCard from '@/baseComponent/AiCard';
import AiTable from '@/baseComponent/AiTable';
import QureyFilter from './QureyFilter';
import './index.css';
const TableTemplate = (props)=>{
    const {
        title,
        columns,
        buttons,//按钮
        // buttonComponents,
        searchs,//搜索条件

        getTableData,//获取表格列表
        children,
        searchParams={},//默认的搜索参数

        tableScrollX,//表格宽度

        dataTable,//测试
        rowKey="id",
        
    } = props;
    // console.log("rowKey",rowKey);
    const initQueryInfo = {
        page:1,
        limit:10,
        params:searchParams,
    }//descs:["upd_time"] ,ascs:["upd_time"]
    
    const [loading,setLoading] = useState(false);
    const [dataSource,setDataSource] = useState({
        data:[],
        total:0,
    });

    const [selectedRowKeys,setSelectedRowKeys] = useState([]);
    const [selectedRows,setSelectedRows] = useState([]);
    const [queryInfo,setQueryInfo] = useState(initQueryInfo);

    

    // ascs descs
    //选择框的样式和事件
    const rowSelection = {
        // type:'checkbox',
        // selectedRowKeys,
        fixed:true,
        onChange: (selectedRowKeys,selectedRows)=>{
            // console.log("selectedRowKeys",selectedRowKeys)
            // console.log("selectedRows",selectedRows)
            setSelectedRowKeys(selectedRowKeys);
            setSelectedRows(selectedRows)
            // setSelectedRowNames(getNameByIdFormDataSource(v[0]))
        },
        // getCheckboxProps:(record)=>{//有副作用，待查验
        //     return record;
        // }
    };

    //处理排序的参数
    const handleSort = (sorter,queryInfo)=>{
        const {ascs,descs,...rest}=queryInfo;
        const { field, order }=sorter; //column ,columnKey , field,order:"ascend"||"descend"||"undefined"
        // 驼峰转换下划线,排序时字段需要转换
        function toLine(name) {
            return name.replace(/([A-Z])/g,"_$1").toLowerCase();
        }
        //sorter=>new_data
        let new_data = order=="ascend" ? { ascs: [ toLine(field) ] } : order=="descend" ?  { descs: [ toLine(field) ] }: undefined;
        let new_query = (new_data==undefined) ? {...rest} : { ...rest , ...new_data };
        return new_query;
    }

    //分页、排序、筛选变化时触发function(pagination, filters, sorter, extra: { currentDataSource: [], action: paginate | sort | filter })
    const handleTableChange = (pagination,filters,sorter,extra)=>{
        const {action}=extra;
        if(action=="paginate"){
            const { current , pageSize }=pagination;
            const new_query_info = {...queryInfo,page:current,limit:pageSize};
            setQueryInfo(new_query_info);//
            getTableDataLocal(new_query_info);//获取表格数据
        }else if(action=="sort"){
            const new_query_info = handleSort(sorter,queryInfo);
            setQueryInfo(new_query_info);//
            getTableDataLocal(new_query_info);//获取表格数据
        }else if(action=="filter"){
            console.log("filters",filters);
        }else{

        }   
    }

    //获取表格数据本组件
    const getTableDataLocal = (params=queryInfo)=>{
        if(getTableData){
            setLoading(true);
            getTableData(params).then((res)=>{
                console.log('params',params);
                console.log('getTableData',res);
                setDataSource({
                    data:res.list,
                    total:res.total,
                })
                setLoading(false);
            }).catch(()=>{
                setLoading(false);
            })
        }else if(dataTable){//测试
            console.log("dataTable",dataTable)
            setDataSource({
                data:dataTable.list,
                total:dataTable.total,
            })
        }
    }
    //clone按钮组件
    const renderButtonChildren = () =>{
        return React.Children.map(children,(child, index)=>{
            return React.cloneElement(child, {
                gettable:getTableDataLocal,
                selectedkeys:selectedRowKeys,
                selectedrows:selectedRows
            })
        })     
    }

    useEffect(()=>{
        getTableDataLocal()   
    },[]);

    const RefQureyFilterForm = useRef();

    return (
        <>
            <AiCard title={title}>
            {
                    Array.isArray(buttons) && buttons.length==0
                    ?
                    <div style={{ padding:'10px 20px'}}>按钮区域</div>
                    :
                    Array.isArray(buttons) && buttons.length>0
                    ?
                    <div style={{ padding:'10px 20px'}}>
                        <Space align="center">
                            {
                                renderButtonChildren()
                            }
                            {
                                buttons.map((button)=>{
                                    return<Button type="primary" key={button.key} disabled={true}>{button.title}</Button>
                                })
                            }
                            {
                                Array.isArray(searchs) &&
                                    <>
                                        <Button type="primary" onClick={()=>{ RefQureyFilterForm.current.submit(); }}>查询</Button>
                                        <Button type="primary" onClick={()=>{ 
                                            const { params , ...rest }=queryInfo;
                                            const new_query_info = {...rest,params:{}};
                                            setQueryInfo(new_query_info);
                                            RefQureyFilterForm.current.reset(); 
                                        }}>重置</Button>
                                    </>   
                            }
                        </Space>
                        
                    </div>
                    :
                    null 
                }
            </AiCard>
            <AiCard style={{width:'calc(100% - 20px)',marginLeft:'10px'}}>
                {
                    Array.isArray(searchs) && searchs.length==0
                    ?
                    <div className="table-search">搜索区域</div>
                    :
                    Array.isArray(searchs) && searchs.length>0
                    ?
                    <div className="table-search">


                        <QureyFilter searchs={searchs} cRef={RefQureyFilterForm} 
                            initFormData={searchParams}
                            onFinishFun={(v)=>{
                                const { params , ...rest }=queryInfo;
                                const new_query_info = {...rest,params:v};
                                setQueryInfo(new_query_info);//
                                getTableDataLocal(new_query_info);//获取表格数据
                            }}
                        /> 
                    </div>
                    :
                    null 
                }
            </AiCard>
            <AiCard className="box-flex-grow-1">
                <AiTable
                    rowSelection={rowSelection}
                    loading={loading}
                    dataSource={dataSource.data}
                    columns={columns}
                    rowKey={rowKey}
                    onChange={handleTableChange}
                    paginationData={
                        {
                            total:dataSource.total,
                            current:queryInfo.page,
                            pageSize:queryInfo.limit,
                        } 
                    }
                    tableScrollX={tableScrollX}
                    // query={query}
                />
                {/* <div style={{padding:10}}>列表区域</div> */}
            </AiCard>
        </>
    )
}
export default TableTemplate;
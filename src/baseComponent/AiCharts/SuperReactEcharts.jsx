import React from 'react' ;
import ReactEcharts from 'echarts-for-react' ;
import _ from 'lodash' ;
import noData from '@/assets/images/no-data.png';

 const EmptyChart = (props)=>{
    return(
        <div className="ant-empty ant-empty-normal">
            <div className="ant-empty-image"></div>
            <p className="ant-empty-description">暂无数据</p>
        </div>
    )
}

{/* <div style={{ textAlign:'center', fontSize:'12px',marginTop:'10px'}}>
<div style={{width:'60px',display: 'inline-block'}}>
    <img src={noData} alt="暂无数据" style={{width: 'inherit'}}/>
    <span>暂无数据</span>
</div>

</div> */}

class SuperReactEcharts extends React.Component {
    nontoxicSetOption = (option) => {
        const notMerge = {notMerge: this.props.notMerge};
        //无副作用的更新echarts图表实例的option(限制组件的re-render)
        this.chartInstance.getEchartsInstance().setOption(option, notMerge) ;
    }
    isJustOptionUpdated = ({current_props , next_props}) => {
        //是否只有props.option更新
        const {
            option: current_option ,
            onEvents: current_ignorable_props ,   //排除函数类型
            ...rest_current_props
        } = current_props ;
        const {
            option: next_option ,
            onEvents: next_ignorable_props ,  //排除函数类型
            ...rest_next_props
        } = next_props ;

        if (
            (!_.isEqual(current_option , next_option))
            &&
            _.isEqual(rest_current_props , rest_next_props)
        ) {
            return true ;   //只有props.option更新了
        } else {
            return false ;  //不只有option更新
        }
    }
    render () {
        return (
            <ReactEcharts
                ref={(e) => { this.chartInstance = e; }}
                {...this.props}
            />
        ) ;
    }
    shouldComponentUpdate(next_props , next_state) {
        const {
            option: next_option
        } = next_props ;
        const {
            option: current_option
        } = this.props ;
        if(this.isJustOptionUpdated({current_props:this.props , next_props})){
            //只由option变化引起的更新,不调用React的刷新机制,而调用echarts实例暴露出来的setOption方法
            this.nontoxicSetOption(next_option) ;
            return false ;
        } else {
            return true ;
        }
        // if (_.isEqual(current_option , next_option)) {
        //     // 不是由option引起的更新,可重渲染
        //     return true ;
        // } else {
        //     //由option变化引起的更新,不调用React的刷新机制,而调用echarts实例暴露出来的setOption方法
        //     this.nontoxicSetOption(next_option) ;
        //     return false ;
        // }
    }
}
 SuperReactEcharts.EmptyChart =  EmptyChart;
export default SuperReactEcharts ;
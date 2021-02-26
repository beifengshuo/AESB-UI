// 条形图
import React from 'react' ;
import SuperReactEcharts from "../SuperReactEcharts";
import _ from 'lodash';
import {
    axisLine,
    axisTick,
    colors,
    lineStyle,
    textStyle,
    tooltip,
    grid,
    hexToRgba,
    LinearColor,
} from "../chart_tool";


class BarVerticalChart extends React.Component{
    getLegendData = (series_data)=>{
        let n_legend = []
        series_data.forEach((data,index)=>{
            n_legend.push(data.name)
        })
        return n_legend;
    }

    getSeriesData = (series_data,color,dataIndex)=>{
        const{
            chart_style,
            isHighlightByClick
        }=this.props
        let n_series = [];
        //console.log('series_data',series_data)
        series_data = getDifferData(series_data);
        series_data.forEach((data,index)=>{
            let obj= {
                name:data.name,
                type:'bar',
                z:9-index,
                xAxisIndex: data.xAxisIndex || 0,
                barWidth: data.barWidth||'14',
                barGap: data.barGap||'30%',//默认30%
                stack:data.stack || null,
                itemStyle: {
                    normal: {
                        color: function (p) {
                            if (dataIndex!==undefined && p.dataIndex == dataIndex) {
                                return '#42A0FE'
                            }
                            //isHighlightByClick为true时，默认取第一个柱子高亮
                            else if(dataIndex==undefined && isHighlightByClick && p.dataIndex==(data.data.length-1)){
                                return '#42A0FE'
                            }
                            else {
                                const myColor = chart_style.differentColorOfEachDataIndex;
                                return (myColor ? myColor[p.dataIndex]
                                    :LinearColor(data.color? data.color:color[index]).color);
                            }
                        }
                    },
                },
                label: {
                    normal: {
                        show: data.label_show || false,
                        position: data.label_position || 'right',
                        formatter: function (val) {
                            let value = val.value + (data.unit || '');
                            if(data.label_formatter_prefix){
                                value = data.label_formatter_prefix+"：" + value;
                            }
                            return value;
                        },
                        fontSize:12,
                        color: '#666',
                    },
                },
                data:data.data,

            }

            if(data.type==='line'){
                obj = {
                    name:data.name,
                    type:'line',
                    z:10,
                    lineStyle:{
                        type:data.lineStyle_type || 'solid'
                    },
                    smooth: false, //平滑曲线显示
                    showSymbol:(data.showSymbol===false)?data.showSymbol:true,
                    symbol: "circle", //标记的图形为实心圆
                    symbolSize: 8, //标记的大小
                    itemStyle: {
                        normal: {
                            color:(data.color) ? hexToRgba(data.color[0],1): hexToRgba(color[index][0],1) ,
                            borderColor:(data.color) ?hexToRgba(data.color[0],0.5): hexToRgba(color[index][0],0.5),
                            borderWidth: 5
                        }
                    },
                    areaStyle: data.areaStyle || null,
                    data:data.data,
                }
            }

            n_series.push(obj)
        })
        return n_series
    }

    //取最大值
    getMax = (series_data=[])=>{
        let n_maxArr = [];
        series_data.forEach(data=>{
            n_maxArr.push(Math.max(...data.data))
        });
        if(JSON.stringify(n_maxArr) === '[]'){
            return null;
        }else{
            return Math.ceil(Math.max(...n_maxArr)*1.3);
        }
    }

    getOption = (dataIndex) => {
        const{
            chart_style,
            chart_data:{
                y_data=[],
                series_data=[],
                title,
                xAxis_0_name,
                yAxis_1_name,
                y_right_data,
            }=[],
            isHighlightByClick
        }=this.props
        const option = {
            title:{
                text: title||'',
                x:'left',
                textStyle:{
                    color: "#333",
                    fontSize : 14,
                    fontWeight:'normal'
                }
            },
            legend: {
                data:this.getLegendData(series_data),
                x:'right',
                show:chart_style.hasOwnProperty('legend_show')?chart_style.legend_show:true,
                ...chart_style.legend,
            },
            tooltip :{
                ...tooltip,
                formatter: function (params) {
                    // console.log("params",params)
                    let tip = params[0].axisValue +'<br>';
                    for(let i=0;i<params.length;i++) {
                        let v = ( params[i].value == "undefined" )?"-" : params[i].value ;
                        let color = params[i].color.colorStops[0].color;
                        let marker = '<span style="display:inline-block; margin-right:5px; border-radius:10px; width:10px; height:10px;background-color:'+color+';"></span>';
                        tip += marker + v + series_data[params[i].axisIndex].unit + '<br>'; 
                    }
                    return tip ;
                },
            }, 
            grid:{
                ...grid,
                ...chart_style.grid,
            },
            xAxis : [
                {
                    name:xAxis_0_name||'',
                    nameTextStyle: {
                        color: textStyle.color,
                        align:'left',
                    },
                    nameLocation:'middle',
                    nameGap: 25,
                    //max:getMax(series_data),
                    type : 'value',
                    axisTick : axisTick,
                    axisLabel : {//x轴底下的文字
                        textStyle : textStyle,
                        formatter: function (val) {
                            return val + (chart_style.xAxis_0_unit || '');
                        }
                    },
                    scale:(chart_style.xAxis_0_scale === false)?false:true,

                    splitLine : {//x轴的每条竖线
                        ...lineStyle,
                        show : false
                    },
                    axisLine: {//x轴底下的横线
                        ...axisLine,
                        show: false
                    },
                    minInterval:1,

                },
                {
                    name:chart_style.xAxis_1_name||'',
                    nameTextStyle: {
                        color: textStyle.color,
                        align:'left',
                    },
                    nameLocation:'middle',
                    nameGap: 25,
                    //max:getMax(series_data),
                    type : 'value',
                    axisTick : axisTick,
                    axisLabel : {//x轴顶部的文字
                        show:false,
                        textStyle : textStyle,
                        formatter: function (val) {
                            return val + (chart_style.xAxis_1_unit || '');
                        }
                    },
                    scale:true,

                    splitLine : {//x轴的每条竖线
                        ...lineStyle,
                        show : false
                    },
                    axisLine: {//x轴顶部的横线
                        ...axisLine,
                        show: false
                    },

                },

            ],
            yAxis :[
                {
                    type : 'category',
                    //axisLine : axisLine,
                    boundaryGap: true,
                    axisTick : axisTick,
                    position: 'left',
                    axisLabel : {
                        interval:0,
                        rotate:chart_style.yAxis_0_axisLabel_rotate||0 ,//旋转
                        textStyle : {
                            ...textStyle,
                            // fontSize : 14
                            color:function(p1,index) {
                                if(dataIndex!==undefined && index == dataIndex){
                                    return '#2F9115'
                                }
                                //isHighlightByClick为true时，默认取第一个文字高亮
                                else if(dataIndex==undefined && isHighlightByClick
                                    && index == (y_data.length-1)){
                                    return '#2F9115'
                                }
                                else{
                                    return '#666';
                                }

                            }

                        }
                    },
                    splitLine : {
                        show : true,
                        lineStyle:lineStyle,
                    },
                    // splitLine : {//y轴的每条横线
                    //     show : true
                    // },
                    axisLine: {//y轴的最左边竖线
                        ...axisLine,
                        show: true
                    },

                    data: y_data
                },

                {
                    name:yAxis_1_name||'',
                    nameTextStyle: {
                        color: textStyle.color,
                        //align:'left',
                    },
                    nameGap: 5,
                    type : 'category',
                    axisTick : axisTick,
                    axisLabel : {//Y轴右侧文字
                        textStyle : textStyle,
                        formatter: function (val) {
                            return val + (chart_style.yAxis_1_unit || '');
                        }
                    },
                    splitLine: {//y轴的每条横线
                        show: false
                    },
                    axisLine: {//y轴的最右侧竖线
                        ...axisLine,
                        show:true,
                    },
                    scale:true,
                    data: y_right_data!=undefined?series_data[y_right_data].data:[],//series_data[0].data
                },

            ],
            series:this.getSeriesData(series_data,colors,dataIndex)
        };
        return option
    }
    render(){
        const{
            height,
            chart_data:{
                series_data=[],
            }=[],
            onChartClick,
            comp_key,
            notMerge,
            isHighlightByClick,
        }=this.props;

        if(series_data.length == 0){
            return(
                <SuperReactEcharts.EmptyChart/>
            )
        }

        return(
            <SuperReactEcharts
                notMerge={series_data.length==0?true:notMerge}
                option={this.getOption()}
                ref={(e) => { this.child = e; }}
                style={{
                    height: "100%",
                }}
                showLoading={false}
                onEvents = {{"click": (params)=>{
                    if(onChartClick){
                        if(isHighlightByClick){
                            let option= this.getOption(params.dataIndex);
                            this.child.nontoxicSetOption(option);
                        }
                        onChartClick(params,comp_key)
                    }
                 }}}
            />
        )
    }

}
export default BarVerticalChart

//排序
export const getSort=(value)=>{
    // console.log(value)
    return value.sort(function(a,b){
        return  a-b;
    });
}

//求差额，预算-决算=预决算差额
export const getDifferData=(params)=>{
    //过滤不需要计算的数组
    let notReplenishList =params.filter(item=>!item.replenish);
    //排序
    notReplenishList = notReplenishList.map(item=>{
        return {...item,data:getSort(item.data)}
    })
    //过滤出需要计算的数组
    const replenishList=params.filter(item=>item.replenish);

    const new_replenishList = replenishList.map(item=>{
        let result = [];
        const first =_.filter(notReplenishList, ['name',item.replenish[0]]);
        const secend = _.filter(notReplenishList, ['name',item.replenish[1]]);

        first[0] && first[0].data.forEach((item,i)=>{
            result.push(item-secend[0].data[i]);
        })
        return {...item,data:result}
    });
    return [...notReplenishList,...new_replenishList];
}
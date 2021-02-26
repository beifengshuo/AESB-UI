// 最普通的折线图

import React from 'react' ;
import SuperReactEcharts from "../SuperReactEcharts";
import {
    axisLine,
    axisTick,
    colors,
    lineStyle,
    textStyle,
    tooltip,
    grid,
    BarColor,
    hexToRgba,
} from "../chart_tool";



const BarChart =(props)=>{
    const{
        height,
        chart_style,
        onChartClick,
        comp_key,
        notMerge,
        chart_data={},
        dataIndex = null
    }=props
    const {
        x_data,
        series_data=[],
        title,
        yAxis_0_name,
        yAxis_1_name,
        series_data_max,
    }=chart_data

    const getLegendData = (series_data)=>{
        let n_legend = []
        series_data.forEach((data,index)=>{
            n_legend.push(data.name)
        })
    }
    const getSeriesData = (series_data,color)=>{
        let n_series = []
        let sort_data = [];
        series_data.forEach((data,index)=>{
            sort_data = [...data.data];
            //排序
            data.sort &&
            sort_data.sort(function(a,b){
                    return  b-a;//降序
                });

            let obj= {
                name:data.name,
                type:'bar',
                barWidth: data.barWidth||'14',
                stack:data.stack || null,
                itemStyle: {
                    normal: {
                        color:(p)=>(dataIndex !==null && p.dataIndex == dataIndex ?'#42A0FE': BarColor(data.color? data.color:color[index]).color),
                    },
                },
                data:sort_data,
            }
            if(data.type==='line'){
                obj = {
                    name:data.name,
                    type:'line',
                    yAxisIndex: 1,
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
                    data:sort_data,
                }
            }
            n_series.push(obj)
        })
        return n_series
    }

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
            data:getLegendData(series_data),
            right:'0',
            top:'-5px',
            ...chart_style.legend,

        },
        tooltip : {
            ...tooltip,
            axisPointer : {
                type : onChartClick?'none':tooltip.axisPointer.type
            },
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
            ...chart_style.grid
        },
        xAxis : [
            {
                type : 'category',
                axisLine : axisLine,
                axisTick : axisTick,
                axisLabel : {
                    // interval:0,
                    rotate:chart_style.xAxis_0_axisLabel_rotate||0 ,//旋转
                    textStyle : textStyle
                },
                splitLine : {
                    show : false
                },
                data: x_data
            }
        ],
        yAxis :[
            {
                name:yAxis_0_name||'',
                nameTextStyle: {
                    color: textStyle.color,
                    align:'left',
                },
                nameGap: 5,
                type : 'value',
                axisLine : axisLine,
                axisTick : axisTick,
                axisLabel : {
                    textStyle : textStyle,
                    formatter: function (val) {
                        return val + (chart_style.yAxis_0_unit || '');
                    }
                },
                splitLine : {
                    lineStyle:lineStyle,
                },
                // scale:true,
                max: series_data_max==0 ? 5:((5-series_data_max%5) +series_data_max ),
                minInterval:1,
                splitNumber:5,

                // ...props.chart_data.yAxis[0]
            },
            {
                name:yAxis_1_name||'',
                nameTextStyle: {
                    color: textStyle.color,
                    align:'right',
                },
                nameGap: 5,
                type : 'value',
                axisLine : axisLine,
                axisTick : axisTick,
                axisLabel : {
                    textStyle : textStyle,
                    formatter: function (val) {
                        return val + (chart_style.yAxis_1_unit || '');
                    }
                },
                splitLine : {
                    show:false,
                },
                scale:true,
            },
        ],
        series:getSeriesData(series_data,colors)
    };
    if( series_data && series_data.length > 0){
        return(
            <SuperReactEcharts
                notMerge={series_data.length>0?true:notMerge}
                option={option}
                style={{
                    height: height || '100%' ,
                }}
                showLoading={false}
                onEvents = {{"click": (params)=>{
                    onChartClick && onChartClick(params,comp_key);
                }}}
            />
        )
    }

    return(
        <SuperReactEcharts.EmptyChart height={height}/>
    )
}
export default BarChart
// 最普通的折线图

import React from 'react' ;
import echarts from 'echarts' ;
import SuperReactEcharts from "../SuperReactEcharts";
import {
    axisLine,
    axisTick,
    colors,
    lineStyle,
    textStyle,
    tooltip,
    grid,
    hexToRgba,
} from "../chart_tool";

var markLineOpt = {

    // label: {
    //     normal: {
    //         formatter: 'y = 0.5 * x + 3',
    //         textStyle: {
    //             align: 'right'
    //         }
    //     }
    // },
    lineStyle: {
        normal: {
            type: 'solid'
        }
    },
    tooltip: {
        // formatter: 'y = 0.5 * x + 3'
    },
    data: [[{
        coord: [0, 3],
        symbol: 'none'
    }, {
        coord: [20, 13],
        symbol: 'none'
    }]]
};
const LineChart =(props)=>{
    const{
        height,
        chart_style={
            // boundaryGap:true
        },
        chart_data={}
    }=props
    const {
        x_data,
        series_data_max,
        series_data=[],
        title,
        yAxis_0_name,
        yAxis_1_name,
        yAxis_0_nameGap,
        yAxis_1_nameGap,
    }=chart_data;

   

    const getLegendData = (series_data)=>{
        let n_legend = []
        series_data.forEach((data,index)=>{
            n_legend.push(data.name)
        })
    }
    const getSeriesData = (series_data,color)=>{
        let n_series = []
        series_data.forEach((data,index)=>{
            const obj= {
                name:data.name,
                type:'line',
                lineStyle:{
                    type:data.lineStyle_type || 'solid'
                },
                yAxisIndex:data.yAxisIndex || '0',
                /*+++*/
                smooth:true,
                showSymbol:false,
                /*+++*/
                /*---*/
                // smooth: false, //平滑曲线显示
                // showSymbol:(data.showSymbol===false)?data.showSymbol:true,
                /*---*/
                symbol: "circle", //标记的图形为实心圆
                symbolSize: 8, //标记的大小
                itemStyle: {
                    normal: {
                        color:(data.color) ? hexToRgba(data.color[0],1): hexToRgba(color[index][0],1) ,
                        borderColor:(data.color) ?hexToRgba(data.color[0],0.5): hexToRgba(color[index][0],0.5),
                        borderWidth: 5
                    }
                },
                /*+++*/
                areaStyle:(data.areaStyle) //{}或null
                ?
                {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color:(data.color) ? hexToRgba(data.color[0],0.3): hexToRgba(color[index][0],0.3),
                    },
                    {
                        offset: 1,
                        color:(data.color) ? hexToRgba(data.color[0],1): hexToRgba(color[index][0],1),
                    }
                    ], false),
                }
                : null,
                /*+++*/
                /*---*/
                // areaStyle: data.areaStyle || null,
                /*---*/
                data:data.data,
                
            }
            n_series.push(obj)
        })
        return n_series
    }
    // console.log("yAxis", props.chart_data.yAxis[0])

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
            x:'right',
            ...chart_style.legend,
            // show:paramObj.hasOwnProperty('legendShow')?paramObj.legendShow:true,
            // data: paramObj.legend,
            // textStyle: textStyle
        },
        tooltip : {
            ...tooltip,
            formatter: function (params) {
                // console.log("params",params)
                let tip = params[0].axisValue +'<br>';
                for(let i=0;i<params.length;i++) {
                    let v = ( params[i].value == "undefined" )?"-" : params[i].value ;
                    tip+=params[i].marker + v + series_data[params[i].axisIndex].unit + '<br>';
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
                    //rotate:40,//旋转
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
                nameGap: yAxis_0_nameGap || 5,
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
                    show:true,
                },
                max: series_data_max==0 ? 5:((5-series_data_max%5) +series_data_max ),
                minInterval:1,
                splitNumber:5,
                
                // ...props.chart_data.yAxis[0]
            },
            {
                name:yAxis_1_name||'',
                nameGap: yAxis_1_nameGap || 5,
                nameTextStyle: {
                    color: textStyle.color,
                    align:'right',
                },

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
                scale:true,

                // ...props.chart_data.yAxis[0]
            },
        ],
        series:getSeriesData(series_data,colors)
    };
  
    return(
        <SuperReactEcharts
            notMerge={series_data.length>0?true:false}
            option={option}
            style={{
               height: height || "100%" ,
            }}
            showLoading={false}
            onEvents = {{"click": (params)=>{}}}
        />
    )

    
}
export default LineChart
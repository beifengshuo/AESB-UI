/*仪表盘*/
//后来新写的仪表盘，目前仅使用于 、财政收支概览、页面，慎用
import React from 'react' ;
import SuperReactEcharts from "../SuperReactEcharts";
import ReactEcharts from 'echarts-for-react' ;
import {
    gauge_axislineColor,
    gaugeColor,
    colors,
    textStyle,
    LinearColor,
    apusic_color
} from "../chart_tool";

const GaugeChart =(props)=>{
    const {
        chart_data:{
            series_data,
        },
        height,
    } = props;

    const getOption = (data)=>{//data:{name:'',value:''}
        let pointerPosition = data.value //
        let backgroundPosition =  (data.value/data.allValue).toFixed(2)*100; //背景属性：100位为显示全部圆圈背景，否则显示data.value的数据值来当背景
        // if(data.allValue){//data.allValue表示占比，默认为进度
        //     let sumValue = data.allValue*1;
        //     pointerPosition = data.value;
        //     backgroundPosition = (data.value*1/sumValue).toFixed(2)*100

        //     // console.log("pointerPosition",pointerPosition)
        //     // console.log("backgroundPosition",backgroundPosition)
        // }
       
        const {
            center=['50%','50%']
        } = data
        const option = {
            title:{
                text:data.name,
                textStyle:{
                    ...textStyle,
                    fontWeight:'normal',
                },
                x:'center',
                ...data.title
            },
            series: [
                {
                    name: '外层盘',
                    type: 'gauge',
                    min: 0, //最小刻度
                    splitNumber: 1, //刻度数量
                    max:data.allValue,
                    radius: data.radius || '74%',
                    center,
                    data: [{value: pointerPosition, name: ''}],
                    detail: {
                        formatter: data.detail_formatter || `{a|${backgroundPosition}}{b|%}\n{c|${data.value}}{d|${data.unit}}`,
                        rich: {
                            a: {
                                color: apusic_color,
                                fontSize: 12,
                                fontWeight: 550,
                                lineHeight: 40,
                                fontFamily:'DIN Condensed Bold',
                                // padding: [10, 0, 10, 0]
                            },
                            b: {
                                fontSize: 12,
                                color: apusic_color
                            },
                            c:{
                                color: apusic_color,
                                fontWeight: 550,
                                fontSize: 12,
                                fontFamily:'DIN Condensed Bold',
                            },
                            d:{
                                color: '#666',
                                fontSize: 12,
                                padding: [0,0,0,3]
                            },
                            f:{
                                color: '#666',
                                fontSize: 12,
                                lineHeight: 35,
                                fontFamily:'DIN Condensed Bold',
                            },
                            ...data.detail_rich,
                        },
                        offsetCenter: data.detail_offsetCenter || [0, "70%"],
                        textStyle: {
                            fontSize: 12,//数字大小
                            fontWeight: '500',
                            color: gaugeColor.value || '#687284'
                        }
                    },
                    axisLine: {
                        lineStyle: { // 属性lineStyle控制线条样式//控制外圈位置
                            color: [
                                [backgroundPosition/100, LinearColor(colors[0]).color ],
                                [1, "#f7f9fc"],
                            ],
                            width: 14,
                            //color: [[0.5, '#B19BFF'], [1, 'rgba(0, 0, 0, 0.2)']], width: 20, opacity: 0.9,//控制外圈位置，颜色，宽度，透明度
                        }
                    },
                    axisTick: {show: false,...data.axisTick},
                    splitLine: {show: false,...data.splitLine},
                    axisLabel: {
                        show: true,
                        distance: '-50',
                        textStyle: {
                            color: colors[0][0],
                            fontSize: 10
                        },
                        ...data.axisLabel
                    },
                    pointer: {//指针
                        show: true,
                        length: '70%',
                        width: 3, //指针粗细
                    },
                    itemStyle: { //指针颜色
                        show: false,
                        normal: {
                            color: "#7097F9",
                        },
                    },
                },
                {
                    name: '小小圆',
                    clockWise:false,
                    hoverAnimation: false,
                    legendHoverLink: false,
                    type: 'pie',
                    radius:['6%','0%'],
                    center,
                    data:[{  "value": 1 }],
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        borderColor: 'rgba(113,151,250,1)',
                        color: 'rgba(113,151,250,1)',
                        borderWidth: 2,
                    }
                }
            ]
        }
        return option
    }
    return(
        Array.isArray(series_data)&&series_data.map((data,index)=>{
            return(
                <div className="box_style" style={{ width: data.width||"100%", height: "100%",}} key={index}>
                    <SuperReactEcharts
                        style={{
                            height: "100%"  ,
                        }}
                        option={ getOption(data) }
                        showLoading={false}
                    />
                </div>
            )
        })
    )
}
export default GaugeChart;

export const gauge_formatter = function(value) {
    if (value != 0) {
        var num = Math.round(value * 10) / 10;
        return parseFloat(num).toFixed(2);
    } else {
        return 0;
    }
}

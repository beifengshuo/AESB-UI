// 多圆环图
import React from 'react' ;
import SuperReactEcharts from "../SuperReactEcharts";
import {colors} from "../chart_tool";


const MultiDonutChart = props=>{
    const {
        height,
        chart_data:{
            series_data
        },
        chart_style:{
            center=["25%", "50%"],
            radius_bar=[68,12,3],
            donut_type='concentric',//'concentric':同心环,'average':平均分布
        },
    }=props
    //donut_type:'concentric'的option
    const getOption =(data)=>{
        let sumValue = 0;
        data.forEach(t => sumValue += t.value);
        const getSeriesData = (series_data,color)=>{
            let n_series = []
            series_data.forEach((data,index)=>{

                const obj= {
                    type: 'pie',
                    clockWise: false,
                    hoverAnimation: false,
                    label: { show: false  },
                    labelLine: {  show: false  },
                    center,
                    radius: [ (radius_bar[0] - (radius_bar[1]+radius_bar[2])*index) + "%", (radius_bar[0] - (radius_bar[1]+radius_bar[2])*(index+1)) + radius_bar[2] + '%'],
                    data: [
                        {
                            value: data.value,
                            name: data.name,
                            itemStyle:{
                                color:color[index][0]
                            }
                        },
                        {
                            value: sumValue - data.value,
                            name: '背景区',
                            itemStyle: {
                                color: "#e8e8e8",
                            }
                        },
                    ],
                    markLine: {
                        data: [[{
                            name: data.name + data.value + data.unit + '占比'+(data.value / sumValue * 100).toFixed(2) + '%',
                            x: parseInt(center[0]) - 1 +'%',
                            y: (100-radius_bar[0])/2 + radius_bar[1]/4 +  (radius_bar[1]+radius_bar[2])*index/2 + '%'
                        },
                            {
                                x: parseInt(center[0]) + 30 + '%',
                                y: (100-radius_bar[0])/2 +radius_bar[1]/4 +  (radius_bar[1]+radius_bar[2])*index/2 + '%'
                            }
                        ]],
                        label: {
                            color: '#333'
                        },
                        itemStyle:{
                            color:color[index][0]
                        }
                    }

                }
                n_series.push(obj)
            })
            return n_series
        }
        const option = {
            series:getSeriesData(data,colors)
        };
        return option
    }
    return(
        <SuperReactEcharts
            option={getOption(series_data)}
            // option={option}
            style={{
                height: height || "100%" ,
            }}
            showLoading={false}
            onEvents = {{"click": (params)=>{}}}

        />
    )
}
export default MultiDonutChart
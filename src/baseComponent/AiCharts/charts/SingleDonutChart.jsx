// 单圆环图
import React from 'react' ;
import SuperReactEcharts from "../SuperReactEcharts";
import {colors,pieItemStyle,LinearColor,apusic_color} from "../chart_tool";
const array2obj =(array,key)=> {
    var resObj = {};
    for(var i=0;i<array.length;i++){
        resObj[array[i][key]] = array[i];
    }
    return resObj;
}
const SingleDonutChart = props=>{
    const {
        notMerge,
        height,
        width,
        chart_data:{
            series_data
        }={},
        onChartClick,
        comp_key,
        chart_style:{
            center=["25%", "50%"],
            radius=['56%', '68%'],
            roseType=false,
            clockwise= true,
            startAngle= 90,
            labelLine={
                show:false,
            },
            label={
                show:false,
            },

            legend={
                textStyle:{}
            },
            title,
            isShowLegendName,
        },
    }=props

    const legend_textStyle_fontSize = (legend.textStyle && legend.textStyle.fontSize)?legend.textStyle.fontSize:'12'

    let data =  series_data || []
    //综和
    let sumValue = 0;
    data.forEach(t => sumValue += t.value*1);
    const objData = array2obj(data, "name");
    const getPieData = (chart_data,color)=>{
        let n_data = []
        chart_data.forEach((data,index)=>{
            const obj={
                name: data.name,
                value:data.value,
                clockWise: false,
                hoverAnimation: false,
                itemStyle : {
                    normal:{
                        color:Array.isArray(data.color)?LinearColor(data.color).color : data.color ||  LinearColor(color[index]).color
                    }
                },
                labelLine:{...labelLine,...data.labelLine},
                label:{...label,...data.label,formatter: '{b}\n{d}%',},
            }
            n_data.push(obj)
        })
        return n_data
    }

    const option = {
        tooltip: {
            show:false,
            // trigger: 'item',
            // formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        title:[{
            show:true,
            text: data[0]?sumValue.toFixed(2)+ (data[0].unit || ''):'',
            textAlign:"center",
            x:center[0],
            y:(parseInt(center[1]) - 5) + "%",
            textStyle:{fontSize:20},
            subtext:'总额',
            subtextStyle:{fontSize:16},
            ...title,
        }],
        legend: {
            x: '50%',
            y:'center',
            orient: 'vertical',//horizontal
            ...legend,
            icon:"circle",
            itemHeight:10,
            itemWidth: 10,
            formatter: function(name) {
                let commonText = "{title|"+name+"：}{value|"+objData[name].value+"}{title|"+objData[name].unit+"}\n" +
                    "{title|占比：}{blueValue|"+(objData[name].value*100/sumValue).toFixed(2)+"%}"

                if(isShowLegendName === true ){//
                    commonText = "{title|"+name+"}"
                }

                if(objData[name].weightedAverageRate){//加权平均率
                    let  stateText = objData[name].weightedAverageRateState
                    let weightedAverageRateText = (stateText && stateText ==="up")
                        ?"{Proportion|加权平均率：}{blueValue|"+objData[name].weightedAverageRate+"%↑}"
                        :(stateText && stateText ==="down")
                        ?"{Proportion|加权平均率：}{redValue|"+objData[name].weightedAverageRate+"%↓}"
                        :""
                    return commonText +"\n"+ weightedAverageRateText
                }else if(objData[name].increase){//增幅
                    let  stateText = objData[name].increaseState
                    let increaseStateText = (stateText && stateText ==="up")
                        ?"{Proportion|增幅：}{blueValue|"+objData[name].increase+"%↑}"
                        :(stateText && stateText ==="down")
                        ?"{Proportion|增幅：}{redValue|"+objData[name].increase+"%↓}"
                        :""
                    return commonText +"\n"+ increaseStateText
                }
                else{
                    return commonText
                }
            },
            textStyle: {
                lineHeight:(legend.textStyle && legend.textStyle.lineHeight)?legend.textStyle.lineHeight:'18',

                ...legend.textStyle || {},
                rich: {
                    title: {
                        fontSize:12,
                    },
                    value:{
                        fontSize:'14',//总值
                        color: apusic_color
                    },
                    blueValue:{//加权平均率
                        fontSize:legend_textStyle_fontSize,
                        color: apusic_color
                    },
                    redValue:{//加权平均率
                        fontSize:legend_textStyle_fontSize,
                        color: "#FF736C"
                    },
                }
            }
        },
        series:[
            {
                type:'pie',
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                radius,
                center,
                clockwise,
                startAngle,
                roseType,
                data:getPieData(data,colors)

            }
        ]
    };
  

    if( series_data && series_data.length > 0){
        return(
            <SuperReactEcharts
                notMerge={notMerge}
                option={option}
                style={{
                    height: "100%" ,
                }}
                showLoading={false}
                onEvents = {{"click": (params)=>{
                        onChartClick && onChartClick(params,comp_key);
                    }}}
            />
        )
    }
    //空chart
    return(
        <SuperReactEcharts.EmptyChart height={height}/>
    )
}
export default SingleDonutChart
import echarts from "echarts";
//公用颜色值,2个色值渐变色目前8个，如果单色，可以在写一个
export const apusic_color = "#00B1B9";
export const colors = [
    ['#B19BFF','#7097F9'],['#75E9D9 ','#52C7FF'], ['#95FFBD ','#4BE6C7'],['#CCFF84 ','#83EF9E'],
    ['#FFCD57 ','#F7F191'], ['#FE9687 ','#EE4F5A'],['#FF9FD0 ','#C078FB'],['#A0C0FF ','#C3CCFF'],

    ['#9ce1cc','#9ce1cc'],['#8baafb ','#8baafb'], ['#9d8dff ','#9d8dff'],['#e4a1fb ','#e4a1fb'],
    ['#ff91a4 ','#ff91a4'], ['#ffa34f ','#ffa34f'],['#fff483 ','#fff483'],['#A0C0FF ','#C3CCFF'],
]
//颜色格式转换
//hex -> rgb
export const hexToRgb =(hex)=> {
    return 'rgb(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5))
        + ',' + parseInt('0x' + hex.slice(5, 7)) + ')';
}

//hex -> rgba
export const hexToRgba=(hex, opacity)=> {
    return 'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5)) + ','
        + parseInt('0x' + hex.slice(5, 7)) + ',' + opacity + ')';
}
export const lineStyle={//分割线
    color : '#e8e8e8',
    width : 1,
}
export const grid={//图标grid
    top:'40',
    left: '0',
    right: '0',
    bottom: '0',
    containLabel: true
}
export const axisLine={//轴线
    lineStyle : {
        color : '#e8e8e8',
        width : 1,
    }
}

export const axisTick={//刻度
    show : false
}
export const textStyle={////文字
    color: "#666",
    fontSize : 12
}
export const legend={//图例
    right: '40',
    top: '7',
}
export const tooltip={//图例
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
}
export const LinearColor=(colors)=>{//colors=['#B19BFF','#7097F9']，渐变色样式
    let newColor;
    const type= Object.prototype.toString.call(colors);
    if(type === "[object Array]" ){
        newColor = colors;
    }else if(type === "[object String]"){
        newColor = [colors,colors];
    }
    else{
        newColor = ['#7097F9','#B19BFF'];
    }
    return({
        color: new echarts.graphic.LinearGradient(
            0, 0, 1, 0, [{
                offset: 0,
                color: newColor[0]
            },
                {
                    offset: 1,
                    color: newColor[1]
                }
            ]),
    })
}
export const BarColor=(colors)=>{//colors=['#B19BFF','#7097F9']，渐变色样式
    return({
        color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1, [{
                offset: 0,
                color: colors[0]
            },
                {
                    offset: 1,
                    color: colors[1]
                }
            ]),
    })
}

export const gaugeColor= {
    pieMini: 'rgba(113,151,250,0.6)', //小圆形颜色
    pieMiniMini: 'rgba(113,151,250,1)', //小小圆形颜色
    piePlus: ['#B19BFF','#7097F9'], //大圆形颜色
    value: '#687284', //底部数值颜色
};

//参数：[0,'green'],[0.6,'yellow'],[1,'red']...
export const gauge_axislineColor=(...params)=>{
    const color = params.map(item=>{
        if(item){
            if(item.length==2){
                return {offset: (typeof item[0] !== 'number'?1:item[0]),color: item[1]}
            }else{
                return {offset: 1,color: item}
            }
        }

    })
    return new echarts.graphic.LinearGradient(0, 0, 1, 0, color || [])
}


//饼图的基本样式
export const pieItemStyle=(colors)=>{//colors=['#B19BFF','#7097F9']，渐变色样式
    return({
        normal: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: colors[0]},
                    {offset: 1, color: colors[1]}
                ]
            )
        }
    })
}
export const getPieTitle=(obj)=>{
    const {
        name,
        sum,
        unit,
        x,
        y
    } = obj
    return({
        text: sum+(unit || '万元'),
        subtext: name || '总和' ,
        textStyle:{
            fontSize:24,
            color:"#2F9115"
        },
        subtextStyle: {
            fontSize: 16,
            fontWeight: 'normal',
        },
        textAlign:"center",
        x: x||'50%',
        y: y||'40%',
    })
}
//散点图基本样式

//漏斗图
export const funnelStyle={
    color:['#7097F9','#3BCFEE','#60E9E6','#89F0BC','#C4F483'],
    seriesStyle:{
        type:'funnel',
        left: '5%',
        right:'35%',
        top: '10%',
        bottom: '10%',
        minSize: '0%',
        maxSize: '70%',
        sort: 'ascending',
        labelLine: {
            normal: {
                show: false
            }
        },
    }

}

import React from 'react' ;
import LineChart from './charts/Line'
import BarChart from './charts/Bar'
import BarVerticalChart from './charts/BarVertical';//条形图
import MultiDonutChart from './charts/MultiDonutChart'//多圆环图
import SingleDonutChart from './charts/SingleDonutChart'//单圆环图
// import ProgressDonutChart from './charts/ProgressDonutChart'//圆环进度条
// import ScatterChart from './charts/Scatter'//散点图
// import ScatterBubble from './charts/ScatterBubble'//散点气泡图
// import PunchCardScatter from './charts/PunchCardScatter'//打卡记录图-散点图，目前仅用于-财政数据观察/收支趋势分析/历年按月支出次数分析
// import ProgressChart from './charts/ProgressChart'//横向-进度条
import GaugeChart from './charts/GaugeChart'//仪表盘

export const LINE_CHART = 'LINE_CHART'
export const BAR_CHART = 'BAR_CHART'
export const MULTI_DONUT_CHART = 'MULTI_DONUT_CHART'
export const SINGLE_DONUT_CHART = 'SINGLE_DONUT_CHART'
// export const PROGRESS_DONUT_CHART = 'PROGRESS_DONUT_CHART'
// export const SCATTER_CHART = 'SCATTER_CHART'
// export const SCATTER_BUBBLE = 'SCATTER_BUBBLE'
// export const PUNCH_CARD_SCATTER = 'PUNCH_CARD_SCATTER'
export const BAR_VERTICAL_CHART = 'BAR_VERTICAL_CHART'
// export const PROGRESS_CHART = 'PROGRESS_CHART'
export const GAUGE_CHART = 'GAUGE_CHART'

export const getChartComponent = (chart_type) => {
    switch (chart_type) {
        case LINE_CHART :
            return LineChart ;
        case MULTI_DONUT_CHART :
            return MultiDonutChart;
        case BAR_CHART :
            return BarChart ;
        case SINGLE_DONUT_CHART :
            return SingleDonutChart ;
        // case SCATTER_CHART :
        //     return ScatterChart ;
        // case SCATTER_BUBBLE :
        //     return ScatterBubble ;
        // case PUNCH_CARD_SCATTER :
        //     return PunchCardScatter ;
        // case PROGRESS_DONUT_CHART :
        //     return ProgressDonutChart ;
        // case PROGRESS_CHART :
        //     return ProgressChart ;
        case GAUGE_CHART :
            return GaugeChart ;
        case BAR_VERTICAL_CHART :
            return BarVerticalChart ;
        default :
            return () => (
                <React.Fragment>
                    无此组件
                </React.Fragment>
            ) ;
    }
}

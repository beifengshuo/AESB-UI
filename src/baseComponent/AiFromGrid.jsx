import React, {useState,useEffect} from 'react';
import {Col, Row, Slider} from 'antd';
import classNames from "classnames";
import {Form} from "antd/lib/form";
const AiFromGrid = (props) => {
    const {
        children = [],
        // style,
        // title,
        // extra,
    }=props;
    const [newChildren, setNewChildren] = useState(children);
    const [newChildrenHidden, setNewChildrenHidden] = useState([]);
    const [gutterKey, setGutterKey] = useState(1);
    const [vgutterKey, setVgutterKey] = useState(1);
    const [colCountKey, setColCountKey] = useState(0);

    const gutters = {};
    const vgutters = {};
    const colCounts = {};

    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
        gutters[i] = value;
    });
    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
        vgutters[i] = value;
    });
    [2, 3, 4, 6, 8, 12].forEach((value, i) => {
        colCounts[i] = value;
    });

    useEffect(()=>{
        let childrenArr = [];
        if(!Array.isArray(children)){
            childrenArr = [children];
        }else{
            childrenArr = children;
        };
        setNewChildren(
            childrenArr.filter(item=>{
                if(Array.isArray (item.props.children)){
                    return item;
                }else{
                    return !(item.props.className && item.props.className.includes("hide"));
                }

            })
        );
        setNewChildrenHidden(
            childrenArr.filter(item=>{
                if(Array.isArray (item.props.children)){
                    return item;
                }else{
                    return (item.props.className && item.props.className.includes("hide"));
                }

            })
        );
    },[children]);

    const onGutterChange = gutterKey => {
        setGutterKey(gutterKey)

    };

    const onVGutterChange = vgutterKey => {
        setVgutterKey(vgutterKey)
    };

    const onColCountChange = colCountKey => {
        setColCountKey(colCountKey)
    };


    const colCount = colCounts[colCountKey];

    const getNodes = (datas,isHidden)=>{
        const recodeRows = [];
        const rows = Math.ceil(datas.length/colCount);// Math.ceil向上取整,有小数就整数部分加1
        let cols = [];
        for (let i = 0; i < rows; i++) {
            cols = [];
            for (let j = 0; j < colCount; j++) {
                cols.push(
                    <Col key={i.toString()} span={24 / colCount} key={`col_${i}_${j}`}>
                        <div style={{backgroundColor:"#fff"}}>
                            {datas[i*colCount+j]}
                        </div>
                    </Col>

                );
            }

            recodeRows.push(
                <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]} key={`row_${i}`}  className={classNames({hide: isHidden})}>
                    {cols}
                </Row>
            )
        }

        return recodeRows;
    }

    const show_recodeRows = getNodes(newChildren);
    const hidden_recodeRows = getNodes(newChildrenHidden,true);

    return(
        <div style={{ width: '100%' }}>
            {/*注释部分勿删，有用*/}
            {/*
                <span>Horizontal Gutter (px): </span>
                <div style={{ width: '100%' }}>
                    <Slider
                        min={0}
                        max={Object.keys(gutters).length - 1}
                        value={gutterKey}
                        onChange={onGutterChange}
                        marks={gutters}
                        step={null}
                        tipFormatter={value => gutters[value]}
                    />
                </div>
                <span>Vertical Gutter (px): </span>
                <div style={{ width: '100%' }}>
                    <Slider
                        min={0}
                        max={Object.keys(vgutters).length - 1}
                        value={vgutterKey}
                        onChange={onVGutterChange}
                        marks={vgutters}
                        step={null}
                        tipFormatter={value => vgutters[value]}
                    />
                </div>
                <span>Column Count:</span>
                <div style={{ width: '100%', marginBottom: 48 }}>
                    <Slider
                        min={0}
                        max={Object.keys(colCounts).length - 1}
                        value={colCountKey}
                        onChange={onColCountChange}
                        marks={colCounts}
                        step={null}
                        tipFormatter={value => colCounts[value]}
                    />
                </div>
*/}
            {show_recodeRows}
            {/*{hidden_recodeRows}*/}
        </div>

    )
}
export default AiFromGrid;
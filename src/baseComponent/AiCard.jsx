import React from 'react';
import { Col , Row} from 'antd';
const AiCard = (props) => {
    const {
        children,
        style,
        title,
        extra,
        className
    }=props;
    // {className?`apusic-card ${className}`:'apusic-card'}
    return(
        <>
        
            <div className={`apusic-card ${className || ''}`} style={style}>
                {
                    title &&  
                    <Row className="apusic-card-headline" >
                        <Col span={12}> {props.title} </Col>
                        <Col span={12} style={{ textAlign: 'right'}} > {extra} </Col>
                    </Row>
                }
               
                {children} 
            </div> 
        </>
       
    )
}
export default AiCard;
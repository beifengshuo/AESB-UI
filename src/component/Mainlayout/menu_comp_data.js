import Home from '../view/Home';
//服务管理
import SystemRegistry from '../view/serviceManagement/SystemRegistry';
import ServiceRegistry from '../view/serviceManagement/ServiceRegistry';
import FieldMapping from '../view/serviceManagement/FieldMapping';
import BlackAndWhite from '../view/serviceManagement/BlackAndWhite';
import WS from '../view/serviceManagement/WS';
import FlowControl from '../view/serviceManagement/FlowControl';
import ServiceAgent from '../view/serviceManagement/ServiceAgent';

//系统资源
import Trigger from '../view/systemResource/Trigger';//触发器和CDC和闪回页面相似
import CDC from '../view/systemResource/CDC';
import Flashback from '../view/systemResource/Flashback';
import DataSource from '../view/systemResource/DataSource';
import LocalPool from '../view/systemResource/filepool/LocalPool';//文件池
import RemotePool from '../view/systemResource/filepool/RemotePool';//远程池的添加跳页面

import DeadLetterQueue from '../view/systemResource/queue/DeadLetterQueue';//队列 有tab
import LocalQueue from '../view/systemResource/queue/LocalQueue';
import RemoteQueue from '../view/systemResource/queue/RemoteQueue';
import TemplateQueue from '../view/systemResource/queue/TemplateQueue';
import TransmissionQueue from '../view/systemResource/queue/TransmissionQueue';

import Theme from '../view/systemResource/Theme';
import ActiveChannel from '../view/systemResource/transmissionChannel/ActiveChannel';
import PassiveChannel from '../view/systemResource/transmissionChannel/PassiveChannel';
import Schedule from '../view/systemResource/Schedule';
import SystemVar from '../view/systemResource/SystemVar';




import ClusterServer from '../view/systemManagement/ClusterServer';//
import LicenseInfo from '../view/systemManagement/LicenseInfo';

export const menu_comp_data={
    Home,

    SystemRegistry,
    ServiceRegistry,
    FieldMapping,
    BlackAndWhite,
    WS,
    FlowControl,
    ServiceAgent,

    Trigger,
    CDC,
    Flashback,
    DataSource,
    LocalPool,
    RemotePool,

    DeadLetterQueue,
    LocalQueue,
    RemoteQueue,
    TemplateQueue,
    TransmissionQueue,
    Theme,
    ActiveChannel,
    PassiveChannel,
    Schedule,
    SystemVar,
    
    ClusterServer,
    LicenseInfo, 
}
import Home from '../view/Home';

import SystemRegistry from '../view/serviceManagement/SystemRegistry';
import ServiceRegistry from '../view/serviceManagement/ServiceRegistry';
import FieldMapping from '../view/serviceManagement/FieldMapping';

import LocalPool from '../view/systemResource/filepool/LocalPool';
import RemotePool from '../view/systemResource/filepool/RemotePool';
import Trigger from '../view/systemResource/Trigger';

import ClusterServer from '../view/systemManagement/ClusterServer';//
import LicenseInfo from '../view/systemManagement/LicenseInfo';

export const menu_comp_data={
    Home,

    SystemRegistry,
    ServiceRegistry,
    FieldMapping,

    LocalPool,
    RemotePool,
    Trigger,

    ClusterServer,
    LicenseInfo, 
}
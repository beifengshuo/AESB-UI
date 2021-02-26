//寻找菜单默认选中的key,用户获取完成menu_data，对页面的默认参数的梳理。
export const FindMenuDefaultSelected = (treeArr)=>{
    let active_menu = [];//菜单选中
    let breadcrumb = [];//生成面包屑
    let level = 0;
    const AAA = (tree)=>{
        for (const data of tree) {
            if( data.children ){
                //面包屑
                const {icon , children , ...rest} = data;
                breadcrumb.push({...rest,level});
                level++;

                AAA(data.children);
            }else{
                active_menu = [data.key];
                breadcrumb.push({...data, level});
                return;
            }
        }
    }
    AAA(treeArr);
    return  ({
        active_menu,
        breadcrumb,
    });
}

//时间转成时间戳 UTCTime
export const getUTCTime = (now) =>{
    let year = now.getUTCFullYear();
    let month = now.getUTCMonth();
    let date = now.getUTCDate();
    let hours = now.getUTCHours();
    let minutes = now.getMinutes();
    let seconds = now.getUTCSeconds();
    let ms = now.getUTCMilliseconds(); 
    return Date.UTC(year, month, date, hours, minutes, seconds, ms);
}
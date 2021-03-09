import React, { useState , useEffect} from 'react';
import { Tree } from 'antd';
const localTreeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        // disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            // disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            // title: (
            //   <span
            //     style={{
            //       color: '#1890ff',
            //     }}
            //   >
            //     sss
            //   </span>
            // ),
            title: 'sss',
            key: '0-0-1-0',
          },
        ],
      },
    ],
  },
];

const AiTree = ({treeData:tree_data}) => {
   
    const mapTree =(org)=> {
        let haveChildren = Array.isArray(org.children) && org.children.length > 0;
        // console.log('org' , org);
        return {
    　　　　 //分别将我们查询出来的值做出改变他的key
            title: org.text,
            key: org.id,
            data: {...org},
            //判断它是否存在子集，若果存在就进行再次进行遍历操作，知道不存在子集便对其他的元素进行操作
            children: haveChildren ? org.children.map(i =>mapTree(i)) : []
        };
    }
    
   const treeData = tree_data.map(org => mapTree(org));
//    console.log("treeData",treeData);

 
    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    const onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };

  return (
    <Tree
      checkable
      defaultExpandAll
    //   defaultExpandedKeys={['1']}
    //   defaultSelectedKeys={['0-0-0', '0-0-1']}
    //   defaultCheckedKeys={['0-0-0', '0-0-1']}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
    />
  );
};

export default AiTree;
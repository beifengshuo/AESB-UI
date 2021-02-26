import {useEffect, useState, useRef} from "react";
import {notification} from 'antd';
// import { sha256, sha224 } from 'js-sha256';
import Base64 from 'base64-js';
import store from './store'	// store引用

export const http = 'http://192.168.2.113:8180/auth/';


function generateRandomString(len, alphabet){
  var randomData = generateRandomData(len);
  var chars = new Array(len);
  for (var i = 0; i < len; i++) {
      chars[i] = alphabet.charCodeAt(randomData[i] % alphabet.length);
  }
  return String.fromCharCode.apply(null, chars);
}

function generateRandomData(len) {
  // use web crypto APIs if possible
  var array = null;
  var crypto = window.crypto || window.msCrypto;
  if (crypto && crypto.getRandomValues && window.Uint8Array) {
      array = new Uint8Array(len);
      crypto.getRandomValues(array);
      return array;
  }

  // fallback to Math random
  array = new Array(len);
  for (var j = 0; j < array.length; j++) {
      array[j] = Math.floor(256 * Math.random());
  }
  return array;
}

// function generateCodeVerifier(len) {
//   return generateRandomString(len, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
// }
// function generatePkceChallenge(pkceMethod, codeVerifier) {
//   switch (pkceMethod) {
//       // The use of the "plain" method is considered insecure and therefore not supported.
//       case "S256":
//           // hash codeVerifier, then encode as url-safe base64 without padding
//           var hashBytes = new Uint8Array(sha256.arrayBuffer(codeVerifier));
//           var encodedHash = Base64.fromByteArray(hashBytes)
//               .replace(/\+/g, '-')
//               .replace(/\//g, '_')
//               .replace(/\=/g, '');
//           return encodedHash;
//       default:
//           throw 'Invalid value for pkceMethod';
//   }
// }

// export const createUUID =()=> {
//   var hexDigits = '0123456789abcdef';
//   var s = generateRandomString(36, hexDigits).split("");
//   s[14] = '4';
//   s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
//   s[8] = s[13] = s[18] = s[23] = '-';
//   var uuid = s.join('');
//   return uuid;
// }

// export const get_Code_challenge=(pkceMethod)=>{
//   var codeVerifier = generateCodeVerifier(96);
  
//   store.dispatch({type:'SET_CODE_VERIFIER',payload:codeVerifier});
  

//   var pkceChallenge = generatePkceChallenge(pkceMethod, codeVerifier);
//   return pkceChallenge;
// }

export const uuid=()=> {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}


//拼接接口参数
export const setQueryConfig =(queryConfig)=> { 
　　var _str = ""; 
    for(var o in queryConfig){ 
        if(queryConfig[o] != -1){ 
            _str += o + "=" + queryConfig[o] + "&"; 
        } 
    } 
    var _str = _str.substring(0, _str.length-1); 
    return _str; 
};
//对象多层合并成一层
export const objToOne = (obj)=>{
    let tmpObj = new Object();
    for(let index in obj){
      if(Object.prototype.toString.call(obj[index]) == '[object Object]'){
        let  resObj = objToOne(obj[index]);
        Object.assign(tmpObj,resObj);//这里使用对象合并
      }else{
        tmpObj[index] = obj[index];
      }
    }

    return tmpObj;
}

// 获取UTC时间
export const getUTCTime =(now)=> {
  let year = now.getUTCFullYear();
  let month = now.getUTCMonth();
  let date = now.getUTCDate();
  let hours = now.getUTCHours();
  let minutes = now.getMinutes();
  let seconds = now.getUTCSeconds();
  let ms = now.getUTCMilliseconds();
  return Date.UTC(year, month, date, hours, minutes, seconds, ms);
}

// useState 添加回调函数
function useCallbackState (od) {
    const cbRef = useRef();
    const [data, setData] = useState(od);
 
    useEffect(() => {
        cbRef.current && cbRef.current(data);
    }, [data]);
 
    return [data, function (d, callback) {
        cbRef.current = callback;
        setData(d);
    }];
}
export {useCallbackState};

export const TimeUnit2 = () => {
    var t = {};

    t.asUnit = function(time) {

        var unit = 'Minutes';

        if (time) {
            if (time == -1) {
                time = -1;
            } else {
                if (time < 60) {
                    time = 60;
                }

                if (time % 60 == 0) {
                    unit = 'Minutes';
                    time = time / 60;
                }
                if (time % 60 == 0) {
                    unit = 'Hours';
                    time = time / 60;
                }
                if (time % 24 == 0) {
                    unit = 'Days'
                    time = time / 24;
                }
            }
        }

        var v = {
            unit: unit,
            time: time,
            toSeconds: function() {
                switch (v.unit) {
                    case 'Minutes':
                        return v.time * 60;
                    case 'Hours':
                        return v.time * 3600;
                    case 'Days':
                        return v.time * 86400;
                }
            }
        }

        return v;
    }

    return t;
};

//防抖debounce代码：
export const  debounce =(fn)=> {
  let timeout = null; // 创建一个标记用来存放定时器的返回值
  return function () {
      // 每当用户输入的时候把前一个 setTimeout clear 掉
      clearTimeout(timeout); 
      // 然后又创建一个新的 setTimeout, 这样就能保证interval 间隔内如果时间持续触发，就不会执行 fn 函数
      timeout = setTimeout(() => {
          fn.apply(this, arguments);
      }, 1000);
  };
}

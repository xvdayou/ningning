(function(t){function e(e){for(var i,r,s=e[0],o=e[1],l=e[2],d=0,h=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&h.push(c[r][0]),c[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var o=n[s];0!==c[o]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},c={app:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("f2bf"),c={key:0,class:"intro"},a=Object(i["d"])(" 横向卡片最大平铺排数 "),r=Object(i["d"])(" 纵向卡片最大平铺排数 "),s=Object(i["d"])(" 卡片最大堆叠层数 "),o=Object(i["d"])(" 卡片密度 "),l=Object(i["d"])(" 最大卡片种类 "),u=Object(i["e"])("br",null,null,-1),d={key:1,class:"intro"},h={key:2,class:"box"},f={class:"card-tips"},p={class:"tools"},b=Object(i["d"])(" 道具： ");function y(t,e,n,y,v,O){return 0===v.step?(Object(i["f"])(),Object(i["c"])("div",c,[Object(i["e"])("div",null,[a,Object(i["j"])(Object(i["e"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return v.option.x=t}),min:"2",max:"10",type:"range"},null,512),[[i["i"],v.option.x]]),Object(i["d"])(" "+Object(i["h"])(v.option.x),1)]),Object(i["e"])("div",null,[r,Object(i["j"])(Object(i["e"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return v.option.y=t}),min:"2",max:"10",type:"range"},null,512),[[i["i"],v.option.y]]),Object(i["d"])(" "+Object(i["h"])(v.option.y),1)]),Object(i["e"])("div",null,[s,Object(i["j"])(Object(i["e"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return v.option.z=t}),min:"2",max:"10",type:"range"},null,512),[[i["i"],v.option.z]]),Object(i["d"])(" "+Object(i["h"])(v.option.z),1)]),Object(i["e"])("div",null,[o,Object(i["j"])(Object(i["e"])("input",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return v.option.cardRandom=t}),min:"0",max:"1",step:"0.1",type:"range"},null,512),[[i["i"],v.option.cardRandom]]),Object(i["d"])(" "+Object(i["h"])(v.option.cardRandom),1)]),Object(i["e"])("div",null,[l,Object(i["j"])(Object(i["e"])("input",{"onUpdate:modelValue":e[5]||(e[5]=function(t){return v.option.maxCardType=t}),min:"3",max:"14",step:"1",type:"range"},null,512),[[i["i"],v.option.maxCardType]]),Object(i["d"])(" "+Object(i["h"])(v.option.maxCardType),1)]),u,Object(i["e"])("button",{onClick:e[6]||(e[6]=function(){return O.startGame.apply(O,arguments)})},"开始游戏")])):2===v.step?(Object(i["f"])(),Object(i["c"])("div",d,[Object(i["e"])("h1",null,Object(i["h"])(t.result?"You Win！🎉":"You Lose!😢"),1),Object(i["e"])("button",{onClick:e[7]||(e[7]=function(){return O.rePlay.apply(O,arguments)})},"再来一轮"),Object(i["e"])("button",{onClick:e[8]||(e[8]=function(){return O.setGame.apply(O,arguments)})},"难度调节")])):(Object(i["f"])(),Object(i["c"])("div",h,[Object(i["e"])("div",{class:"card-wrap",style:O.cardWrapStyle},[(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["g"])(v.cardItemList,(function(t){return Object(i["f"])(),Object(i["c"])("div",{key:t.key,class:[{"item-cover":t.cover},"card-item"],style:t.style,onClick:function(e){return O.clickCard(t)}},Object(i["h"])(t.content),15,["onClick"])})),128)),(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["g"])(v.penddingList,(function(t){return Object(i["f"])(),Object(i["c"])("div",{key:t.key,class:"card-item",style:t.style},Object(i["h"])(t.content),5)})),128)),(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["g"])(v.clearList,(function(t){return Object(i["f"])(),Object(i["c"])("div",{key:t.key,class:"card-item clear-item",style:t.style},Object(i["h"])(t.content),5)})),128)),(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["g"])(v.saveList,(function(t){return Object(i["f"])(),Object(i["c"])("div",{key:t.key,class:"card-item",style:t.style,onClick:function(e){return O.clickSaveCard(t)}},Object(i["h"])(t.content),13,["onClick"])})),128)),Object(i["e"])("p",f," 剩余空位:"+Object(i["h"])(7-v.penddingList.length)+"/7；已消除:"+Object(i["h"])(v.clearList.length)+"/"+Object(i["h"])(v.cardItemList.length+v.penddingList.length+v.saveList.length+v.clearList.length),1)],4),Object(i["e"])("div",p,[b,Object(i["e"])("button",{disabled:!v.tools.save,onClick:e[9]||(e[9]=function(){return O.saveCard.apply(O,arguments)})},"取出3个卡片",8,["disabled"]),Object(i["e"])("button",{disabled:!v.tools.rand,onClick:e[10]||(e[10]=function(){return O.randCard.apply(O,arguments)})},"随机",8,["disabled"]),Object(i["e"])("button",{onClick:e[11]||(e[11]=function(){return O.rePlay.apply(O,arguments)})},"再来一轮")])]))}n("99af"),n("cb29"),n("4de4"),n("4160"),n("c975"),n("fb6a"),n("45fc"),n("a9e3"),n("159b");var v=n("d4ec"),O=n("bee2"),j=n("ade3"),m=function(){function t(e){var n=e.x,i=e.y,c=e.z,a=e.key;Object(v["a"])(this,t),this.x=n,this.y=i,this.z=c,this.key=a;var r=0*c;this.val=a,this.style={top:i*t.y+r+"px",left:n*t.x+r+"px",width:2*t.x-2+"px",height:2*t.y-8+"px"}}return Object(O["a"])(t,[{key:"setValue",value:function(e){this.val=e,this.content=t.contentType[e],Object.assign(this.style,t.colorType[e])}}]),t}();Object(j["a"])(m,"x",20),Object(j["a"])(m,"y",21),Object(j["a"])(m,"colorType",{1:{background:"#FFB7DD"},2:{background:"#FFCCCC"},3:{background:"#FFC8B4"},4:{background:"#FFDDAA"},5:{background:"#FFEE99"},6:{background:"#FFFFBB"},7:{background:"#EEFFBB"},8:{background:"#CCFF99"},9:{background:"#99FF99"},10:{background:"#BBFFEE"},11:{background:"#AAFFEE"},12:{background:"#99FFFF"},13:{background:"#CCEEFF"},14:{background:"#CCDDFF"}}),Object(j["a"])(m,"contentType",{1:"🥕",2:"✂️",3:"🥦",4:"🥛",5:"🌊",6:"🧤",7:"🧵",8:"🌱",9:"🔨",10:"🌽",11:"🌾",12:"🐑",13:"🪵",14:"🔥"});var g={data:function(){return{option:{x:7,y:4,z:8,cardRandom:.2,maxCardType:10},step:0,win:!1,cardMap:[],cardItemList:[],penddingList:[],clearList:[],saveList:[],calcValueList:[],maxWidth:0,maxHeight:0,tools:{save:!0,rand:!0},timer:0}},computed:{cardWrapStyle:function(){return{width:(this.maxWidth+2)*m.x+"px",height:(this.maxHeight+1)*m.y+"px"}},leftOffset:function(){var t=(this.maxWidth+2)*m.x;return(t-7*m.x*2)/2}},methods:{randCard:function(){var t=this;if(this.tools.rand){this.tools.rand=!1;var e=this.cardItemList.length;this.cardItemList.forEach((function(n){var i,c=Math.floor(e*Math.random()),a=t.cardItemList[c];i=n.style.left,n.style.left=a.style.left,a.style.left=i,i=n.style.top,n.style.top=a.style.top,a.style.top=i,i=n.x,n.x=a.x,a.x=i,i=n.y,n.y=a.y,a.y=i,i=n.z,n.z=a.z,a.z=i})),this.cardItemList.sort((function(t,e){return t.z-e.z})),this.calcCover()}},saveCard:function(){var t=this;if(!this.tools.save)return!1;this.tools.save=!1,this.saveList=this.penddingList.slice(0,3),setTimeout((function(){t.saveList.forEach((function(e,n){e.style.top="110%",e.style.left=t.leftOffset+n*m.x*2+"px",t.calcValueList[e.val]--}))}),0),this.penddingList=this.penddingList.slice(3),this.penddingList.forEach((function(e,n){e.style.top="160%",e.style.left=t.leftOffset+n*m.x*2+"px"}))},initGame:function(){this.step=1,this.getMap(this.option),this.penddingList=[],this.clearList=[],this.saveList=[],this.tools.save=!0,this.tools.rand=!0,this.setCardValue({maxCardType:Number(this.option.maxCardType)}),this.calcCover()},getMap:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.x,n=t.y,i=t.z,c=t.cardRandom;this.maxWidth=2*(e-1),this.maxHeight=2*(n-1)+1;for(var a=new Array(i),r=[],s=0,o=0;o<i;o++){a[o]=new Array(this.maxHeight);for(var l=0;l<=this.maxHeight;l++)a[o][l]=new Array(this.maxWidth).fill(0)}for(var u=0;u<i;u++)for(var d=Math.floor((i-u)/3),h=d;h<this.maxHeight-d;h++)for(var f=Math.ceil((this.maxWidth-d)/2),p=d;p<=f;p++){var b=!0;if((p>0&&a[u][h][p-1]||h>0&&a[u][h-1][p]||h>0&&p>0&&a[u][h-1][p-1]||h>0&&a[u][h-1][p+1]||u>0&&a[u-1][h][p]||Math.random()>=c)&&(b=!1),b){s++;var y=new m({x:p,y:h,z:u,key:s});if(a[u][h][p]=y,r.push(y),p<f){s++;var v=new m({x:this.maxWidth-p,y:h,z:u,key:s});a[u][h][p]=v,r.push(v)}}}r.reverse();for(var O=1;O<=s%3;O++){var j=r.pop();a[j.z][j.y][j.x]=0}r.reverse(),this.cardMap=a,this.cardItemList=r},setCardValue:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.maxCardType,n=new Array(e);this.calcValueList=new Array(e+1).fill(0),this.cardItemList.forEach((function(t){var i=Math.ceil(Math.random()*e);n[i]?(n[i].push(t),3===n[i].length&&(n[i].forEach((function(t){t.setValue(i)})),n[i]=null)):n[i]=[t]}));var i=2;n.forEach((function(t){t&&t.forEach((function(t){i++,t.setValue(Math.floor(i/3))}))}))},calcCover:function(){for(var t=new Array(this.maxHeight),e=0;e<=this.maxHeight;e++)t[e]=new Array(this.maxWidth).fill(!1);for(var n=this.cardItemList.length-1;n>=0;n--){var i=this.cardItemList[n],c=i.x,a=i.y;i.z;t[a][c]||t[a][c+1]||t[a+1][c]||t[a+1][c+1]?i.cover=!0:i.cover=!1,t[a][c]=!0,t[a+1][c]=!0,t[a][c+1]=!0,t[a+1][c+1]=!0}},clickSaveCard:function(t){this.cardItemList.push(t);var e=this.saveList.indexOf(t);this.saveList=this.saveList.slice(0,e).concat(this.saveList.slice(e+1)),this.clickCard(t)},removeThree:function(){var t=this;this.penddingList.some((function(e){3===t.calcValueList[e.val]&&(t.penddingList.forEach((function(n){n.val===e.val&&t.clearList.push(n)})),setTimeout((function(){t.clearList.forEach((function(e,n){e.style.left=t.leftOffset-60+"px"}))}),300),t.penddingList=t.penddingList.filter((function(t){return t.val!==e.val})),t.penddingList.forEach((function(e,n){e.style.top="160%",e.style.left=t.leftOffset+n*m.x*2+"px"})),t.calcValueList[e.val]=0,0===t.cardItemList.length&&(t.step=2,t.result=!0))})),this.penddingList.length>=7&&(this.step=2,this.result=!1)},clickCard:function(t){var e=this;clearTimeout(this.timer),this.removeThree(),this.penddingList.push(t);var n=this.cardItemList.indexOf(t);this.cardItemList=this.cardItemList.slice(0,n).concat(this.cardItemList.slice(n+1)),this.calcCover(),this.calcValueList[t.val]++,setTimeout((function(){t.style.top="160%",t.style.left=e.leftOffset+(e.penddingList.length-1)*m.x*2+"px"}),0),this.timer=setTimeout((function(){e.removeThree()}),500)},startGame:function(){this.initGame()},setGame:function(){this.step=0},rePlay:function(){this.initGame()}}};n("64be");g.render=y;var x=g;Object(i["b"])(x).mount("#app")},"64be":function(t,e,n){"use strict";n("c894")},c894:function(t,e,n){}});
//# sourceMappingURL=app.1f2e9477.js.map
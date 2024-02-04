"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[9299],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,g=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905));const i={id:"withTiming",title:"withTiming",sidebar_label:"withTiming"},l=void 0,o={unversionedId:"api/withTiming",id:"version-2.1.x/api/withTiming",title:"withTiming",description:"Starts a time based animation.",source:"@site/versioned_docs/version-2.1.x/api/withTiming.md",sourceDirName:"api",slug:"/api/withTiming",permalink:"/react-native-reanimated/docs/2.1.x/api/withTiming",draft:!1,tags:[],version:"2.1.x",frontMatter:{id:"withTiming",title:"withTiming",sidebar_label:"withTiming"},sidebar:"version-2.1.x/docs",previous:{title:"withSpring",permalink:"/react-native-reanimated/docs/2.1.x/api/withSpring"},next:{title:"useAnimatedGestureHandler",permalink:"/react-native-reanimated/docs/2.1.x/api/useAnimatedGestureHandler"}},u={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>toValue</code> number | string",id:"tovalue-number--string",level:4},{value:"<code>options</code> object",id:"options-object",level:4},{value:"<code>callback</code> function(optional)",id:"callback-functionoptional",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Starts a time based animation."),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"tovalue-number--string"},(0,r.kt)("inlineCode",{parentName:"h4"},"toValue")," ","[number | string]"),(0,r.kt)("p",null,"The target value at which the animation should conclude.\nIt can be specified as a color value by providing string like: ",(0,r.kt)("inlineCode",{parentName:"p"},"rgba(255, 105, 180, 0)"),"."),(0,r.kt)("p",null,"Currently supported formats are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"rgb(r, g, b)"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"rgba(r, g, b, a)"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"hsl(h, s, l)"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"hsla(h, s, l, a)"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"#rgb"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"#rgba"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"#rrggbb"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"#rrggbbaa"'))),(0,r.kt)("h4",{id:"options-object"},(0,r.kt)("inlineCode",{parentName:"h4"},"options")," ","[object]"),(0,r.kt)("p",null,"Object containing animation configuration.\nAllowed parameters are listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duration"),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},"How long the animation should last")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"easing"),(0,r.kt)("td",{parentName:"tr",align:null},"in-out quad easing"),(0,r.kt)("td",{parentName:"tr",align:null},"Worklet that drives the easing curve for the animation")))),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"easing")," parameter we recommend using one of the pre-configured worklets defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Easing")," module."),(0,r.kt)("h4",{id:"callback-functionoptional"},(0,r.kt)("inlineCode",{parentName:"h4"},"callback")," ","[function]","(","optional",")"),(0,r.kt)("p",null,"The provided function will be called when the animation is complete.\nIn case the animation is cancelled, the callback will receive ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," as the argument, otherwise it will receive ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",(0,r.kt)("a",{parentName:"p",href:"useAnimatedStyle"},(0,r.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Button } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n  withTiming,\n  Easing,\n} from 'react-native-reanimated';\n\nfunction App() {\n  const width = useSharedValue(50);\n\n  const style = useAnimatedStyle(() => {\n    return {\n      width: withTiming(width.value, {\n        duration: 500,\n        easing: Easing.bezier(0.25, 0.1, 0.25, 1),\n      }),\n    };\n  });\n\n  return (\n    <View>\n      <Animated.View style={[styles.box, style]} />\n      <Button onPress={() => (width.value = Math.random() * 300)} title=\"Hey\" />\n    </View>\n  );\n}\n")))}m.isMDXComponent=!0}}]);
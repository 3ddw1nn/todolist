(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(537),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"body{\n    display: flex;\n}\ninput{\n    border: none;\n    padding: 0.2rem;\n    border-radius: 0.5rem;\n}\nbutton{\n    border: none;\n    padding: 0.2rem 0.5rem;\n    border-radius: 0.5rem;\n    background-color: rgb(183, 237, 171);\n}\n.delete-button{\n    background-color: rgb(239, 136, 134);\n}\n.task-delete-button{\n\n    margin-top: 0.7rem;\n    background-color: rgb(239, 136, 134);\n}\n.task-item-complete{\n    margin-top: 0.7rem;\n    background-color: rgb(239, 136, 134);\n}\n\n.library-container{\n    background-color: rgb(50, 50, 50);\n    padding: 1rem;\n    height: 50.5rem ;\n\n    width: 13.5rem;\n}\n\n.task-container{\n    background-color: rgb(210, 224, 224);\n    padding: 2rem;\n\n    width: 100%;\n}\n.task-list-group{\n    display: flex;\n    column-gap: 3rem;\n}\n.project-item{\n    font-size: 0.9rem;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: rgb(211, 191, 191);\n}\n.task-item{\n    display: flex;\n    flex-direction: column;\n    font-size: 0.8rem;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n.selectedProject{\n    color: rgb(255, 255, 255);\n    font-weight: bold;\n    font-size: 1rem;\n}\n.selectedTask{\n    font-weight: bold;\n    font-size: 1rem;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,aAAa;AACjB;AACA;IACI,YAAY;IACZ,eAAe;IACf,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,sBAAsB;IACtB,qBAAqB;IACrB,oCAAoC;AACxC;AACA;IACI,oCAAoC;AACxC;AACA;;IAEI,kBAAkB;IAClB,oCAAoC;AACxC;AACA;IACI,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,iCAAiC;IACjC,aAAa;IACb,gBAAgB;;IAEhB,cAAc;AAClB;;AAEA;IACI,oCAAoC;IACpC,aAAa;;IAEb,WAAW;AACf;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,sHAAsH;IACtH,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,sHAAsH;AAC1H;AACA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,eAAe;AACnB",sourcesContent:["body{\n    display: flex;\n}\ninput{\n    border: none;\n    padding: 0.2rem;\n    border-radius: 0.5rem;\n}\nbutton{\n    border: none;\n    padding: 0.2rem 0.5rem;\n    border-radius: 0.5rem;\n    background-color: rgb(183, 237, 171);\n}\n.delete-button{\n    background-color: rgb(239, 136, 134);\n}\n.task-delete-button{\n\n    margin-top: 0.7rem;\n    background-color: rgb(239, 136, 134);\n}\n.task-item-complete{\n    margin-top: 0.7rem;\n    background-color: rgb(239, 136, 134);\n}\n\n.library-container{\n    background-color: rgb(50, 50, 50);\n    padding: 1rem;\n    height: 50.5rem ;\n\n    width: 13.5rem;\n}\n\n.task-container{\n    background-color: rgb(210, 224, 224);\n    padding: 2rem;\n\n    width: 100%;\n}\n.task-list-group{\n    display: flex;\n    column-gap: 3rem;\n}\n.project-item{\n    font-size: 0.9rem;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: rgb(211, 191, 191);\n}\n.task-item{\n    display: flex;\n    flex-direction: column;\n    font-size: 0.8rem;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n.selectedProject{\n    color: rgb(255, 255, 255);\n    font-weight: bold;\n    font-size: 1rem;\n}\n.selectedTask{\n    font-weight: bold;\n    font-size: 1rem;\n}"],sourceRoot:""}]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(i[u]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */"),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var u=e[s],c=r.base?u[0]+r.base:u[0],d=o[c]||0,l="".concat(c," ").concat(d);o[c]=d+1;var m=n(l),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==m)t[m].references++,t[m].updater(f);else{var h=a(f,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var u=r(e,a),c=0;c<o.length;c++){var d=n(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=u}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};(()=>{function e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function t(t){return e(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function a(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(n){if(e(1,arguments),!t(n)&&"number"!=typeof n)return!1;var r=a(n);return!isNaN(Number(r))}n.d(r,{o9:()=>ze,Wy:()=>He});var i={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function s(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}const u={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function d(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=a.width?String(a.width):o;r=e.formattingValues[i]||e.formattingValues[o]}else{var s=e.defaultWidth,u=a.width?String(a.width):e.defaultWidth;r=e.values[u]||e.values[s]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const l={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:d({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:d({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:d({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:d({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:d({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function m(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,s=o[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(u)?h(u,(function(e){return e.test(s)})):f(u,(function(e){return e.test(s)}));i=e.valueCallback?e.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var d=t.slice(s.length);return{value:i,rest:d}}}function f(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function h(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}var g,p={ordinalNumber:(g={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(g.matchPattern);if(!n)return null;var r=n[0],a=e.match(g.parsePattern);if(!a)return null;var o=g.valueCallback?g.valueCallback(a[0]):a[0];o=t.valueCallback?t.valueCallback(o):o;var i=e.slice(r.length);return{value:o,rest:i}}),era:m({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:m({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:m({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:m({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:m({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const v={code:"en-US",formatDistance:function(e,t,n){var r,a=i[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:u,formatRelative:function(e,t,n,r){return c[e]},localize:l,match:p,options:{weekStartsOn:0,firstWeekContainsDate:1}};function b(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function w(t,n){e(2,arguments);var r=a(t).getTime(),o=b(n);return new Date(r+o)}function y(t,n){e(2,arguments);var r=b(n);return w(t,-r)}var C=864e5;function A(t){e(1,arguments);var n=1,r=a(t),o=r.getUTCDay(),i=(o<n?7:0)+o-n;return r.setUTCDate(r.getUTCDate()-i),r.setUTCHours(0,0,0,0),r}function k(t){e(1,arguments);var n=a(t),r=n.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(r+1,0,4),o.setUTCHours(0,0,0,0);var i=A(o),s=new Date(0);s.setUTCFullYear(r,0,4),s.setUTCHours(0,0,0,0);var u=A(s);return n.getTime()>=i.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function x(t){e(1,arguments);var n=k(t),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=A(r);return a}var T=6048e5;function I(t,n){e(1,arguments);var r=n||{},o=r.locale,i=o&&o.options&&o.options.weekStartsOn,s=null==i?0:b(i),u=null==r.weekStartsOn?s:b(r.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=a(t),d=c.getUTCDay(),l=(d<u?7:0)+d-u;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function S(t,n){e(1,arguments);var r=a(t),o=r.getUTCFullYear(),i=n||{},s=i.locale,u=s&&s.options&&s.options.firstWeekContainsDate,c=null==u?1:b(u),d=null==i.firstWeekContainsDate?c:b(i.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(o+1,0,d),l.setUTCHours(0,0,0,0);var m=I(l,n),f=new Date(0);f.setUTCFullYear(o,0,d),f.setUTCHours(0,0,0,0);var h=I(f,n);return r.getTime()>=m.getTime()?o+1:r.getTime()>=h.getTime()?o:o-1}function M(t,n){e(1,arguments);var r=n||{},a=r.locale,o=a&&a.options&&a.options.firstWeekContainsDate,i=null==o?1:b(o),s=null==r.firstWeekContainsDate?i:b(r.firstWeekContainsDate),u=S(t,n),c=new Date(0);c.setUTCFullYear(u,0,s),c.setUTCHours(0,0,0,0);var d=I(c,n);return d}var D=6048e5;function E(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const B=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return E("yy"===t?r%100:r,t.length)},P=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):E(n+1,2)},U=function(e,t){return E(e.getUTCDate(),t.length)},L=function(e,t){return E(e.getUTCHours()%12||12,t.length)},j=function(e,t){return E(e.getUTCHours(),t.length)},W=function(e,t){return E(e.getUTCMinutes(),t.length)},Y=function(e,t){return E(e.getUTCSeconds(),t.length)},q=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return E(Math.floor(r*Math.pow(10,n-3)),t.length)};var N={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return B(e,t)},Y:function(e,t,n,r){var a=S(e,r),o=a>0?a:1-a;return"YY"===t?E(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):E(o,t.length)},R:function(e,t){return E(k(e),t.length)},u:function(e,t){return E(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return E(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return E(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return P(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return E(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,n,r,o){var i=function(t,n){e(1,arguments);var r=a(t),o=I(r,n).getTime()-M(r,n).getTime();return Math.round(o/D)+1}(t,o);return"wo"===n?r.ordinalNumber(i,{unit:"week"}):E(i,n.length)},I:function(t,n,r){var o=function(t){e(1,arguments);var n=a(t),r=A(n).getTime()-x(n).getTime();return Math.round(r/T)+1}(t);return"Io"===n?r.ordinalNumber(o,{unit:"week"}):E(o,n.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):U(e,t)},D:function(t,n,r){var o=function(t){e(1,arguments);var n=a(t),r=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var o=n.getTime(),i=r-o;return Math.floor(i/C)+1}(t);return"Do"===n?r.ordinalNumber(o,{unit:"dayOfYear"}):E(o,n.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return E(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return E(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return E(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return L(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):j(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):E(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):E(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):W(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):Y(e,t)},S:function(e,t){return q(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return z(a);case"XXXX":case"XX":return H(a);default:return H(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return z(a);case"xxxx":case"xx":return H(a);default:return H(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+O(a,":");default:return"GMT"+H(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+O(a,":");default:return"GMT"+H(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return E(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return E((r._originalDate||e).getTime(),t.length)}};function O(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+E(o,2)}function z(e,t){return e%60==0?(e>0?"-":"+")+E(Math.abs(e)/60,2):H(e,t)}function H(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+E(Math.floor(a/60),2)+n+E(a%60,2)}const F=N;function R(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}}function G(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}}const Q={p:G,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return R(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",R(a,t)).replace("{{time}}",G(o,t))}};function X(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var J=["D","DD"],Z=["YY","YYYY"];function _(e){return-1!==J.indexOf(e)}function V(e){return-1!==Z.indexOf(e)}function K(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var $=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ee=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,te=/^'([^]*?)'?$/,ne=/''/g,re=/[a-zA-Z]/;function ae(e){return e.match(te)[1].replace(ne,"'")}class oe{constructor(t,n=function(t,n,r){e(2,arguments);var i=String(n),s=r||{},u=s.locale||v,c=u.options&&u.options.firstWeekContainsDate,d=null==c?1:b(c),l=null==s.firstWeekContainsDate?d:b(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=u.options&&u.options.weekStartsOn,f=null==m?0:b(m),h=null==s.weekStartsOn?f:b(s.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var g=a(t);if(!o(g))throw new RangeError("Invalid time value");var p=X(g),w=y(g,p),C={firstWeekContainsDate:l,weekStartsOn:h,locale:u,_originalDate:g};return i.match(ee).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,Q[t])(e,u.formatLong,C):e})).join("").match($).map((function(e){if("''"===e)return"'";var r=e[0];if("'"===r)return ae(e);var a=F[r];if(a)return!s.useAdditionalWeekYearTokens&&V(e)&&K(e,n,t),!s.useAdditionalDayOfYearTokens&&_(e)&&K(e,n,t),a(w,e,u.localize,C);if(r.match(re))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return e})).join("")}(new Date,"MM-dd-yyyy"),r="Priority : Low",i="Incomplete",s="Delete"){this.ID=Ie(),this.description=t,this.dueDate=n,this.priority=r,this.complete=i,this.deleteTask=s}}class ie{constructor(e){this.ID=Ie(),this.title=e,this.tasks=[]}setComplete(){}}const se=new ie("default"),ue=document.querySelector(".project-list-group"),ce=document.querySelector(".delete-button"),de=document.querySelector(".task-list-group"),le="projectslist",me="selectedproject",fe="selectedtask";let he="",ge="",pe="";function ve(){document.querySelectorAll(".task-item").forEach((e=>{e.addEventListener("click",(t=>{e.dataset.taskId===ge?(e.classList.remove("selectedTask"),localStorage.removeItem(fe),xe(de),Ae.renderTasks(),Te()):(localStorage.removeItem(fe),ge=e.dataset.taskId,localStorage.setItem(fe,ge),Te(),xe(de),Ae.renderTasks(),pe=he.tasks.find((e=>(console.log(pe),e.ID===ge))))}))}))}let be=localStorage.getItem(me),we=[];we=localStorage.getItem(le)?JSON.parse(localStorage.getItem(le)):[se],he=we.find((e=>e.ID===be)),console.log(he);const ye=function(){xe(ue);for(let e=0;e<we.length;e++){let t=document.createElement("li");ue.appendChild(t),t.classList.add("project-item"),t.dataset.projectId=we[e].ID,t.textContent=we[e].title,we[e].ID==be?t.classList.add("selectedProject"):t.classList.remove("selectedProject")}},Ce=(document.querySelectorAll(".task-item"),document.querySelector(".task-container")),Ae={renderTasks:function(){if(he)for(let e=0;e<[he.tasks].length;e++)he.tasks.forEach((e=>{let t=document.createElement("li");de.appendChild(t),t.classList.add("task-item"),t.dataset.taskId=e.ID;let n=document.createElement("li");t.appendChild(n),n.classList.add("task-description"),n.textContent=e.description;let r=document.createElement("li");t.appendChild(r),r.classList.add("task-dueDate"),r.textContent=e.dueDate;let a=document.createElement("li");t.appendChild(a),a.classList.add("task-priority"),a.textContent=e.priority;let o=document.createElement("button");t.appendChild(o),o.classList.add("task-complete"),o.textContent=e.complete;let i=document.createElement("button");t.appendChild(i),i.classList.add("task-delete-button"),i.textContent="Delete Task";let s=document.createElement("button");t.appendChild(s),s.classList.add("edit-task-button"),s.textContent="Edit",ve(),s.addEventListener("click",(n=>{if(t.dataset.taskId==ge){let t=document.createElement("form");Ce.appendChild(t);let n=document.createElement("input");n.type="text",t.appendChild(n);let r=document.createElement("input");r.type="date",t.appendChild(r);let a=document.createElement("input");a.type="text",t.appendChild(a),console.log("its the same"),console.log(e.description),t.addEventListener("submit",(t=>{e.description=n.value,e.dueDate=r.value,e.priority=a.value}))}})),document.querySelectorAll(".task-complete").forEach((n=>{n.addEventListener("click",(n=>{t.dataset.taskId==ge&&("Complete"==e.complete?e.complete="Incomplete":(e.complete="Complete",Te()))}))})),document.querySelectorAll(".task-delete-button").forEach((t=>{e.ID===ge||(i.style.display="none",s.style.display="none"),t.addEventListener("click",(t=>{e.ID===ge&&(console.log("each task being recognized"),ke(),localStorage.removeItem(fe,ge))}))})),t.dataset.taskId==ge?t.classList.add("selectedTask"):t.classList.remove("selectedTask"),ge||t.classList.remove("selectedTask")}));else null!==be&&""!==be||(console.log("selectedProjectID does not exist"),Ce.style.display="none")}};function ke(){let e=he.tasks.find((e=>e.ID===ge));if(e.ID===localStorage.getItem(fe)){localStorage.removeItem(fe);let t=he.tasks.indexOf(e);console.log(t),console.log(e),he.tasks.splice(t,1),Te()}}function xe(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function Te(){localStorage.setItem(le,JSON.stringify(we)),localStorage.setItem(me,be),localStorage.setItem(fe,ge)}function Ie(){let e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){let n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}))}var Se=n(379),Me=n.n(Se),De=n(795),Ee=n.n(De),Be=n(569),Pe=n.n(Be),Ue=n(565),Le=n.n(Ue),je=n(216),We=n.n(je),Ye=n(589),qe=n.n(Ye),Ne=n(426),Oe={};Oe.styleTagTransform=qe(),Oe.setAttributes=Le(),Oe.insert=Pe().bind(null,"head"),Oe.domAPI=Ee(),Oe.insertStyleElement=We(),Me()(Ne.Z,Oe),Ne.Z&&Ne.Z.locals&&Ne.Z.locals;const ze=document.getElementById("form-input"),He=(document.getElementById("task-form-title-input"),document.getElementById("task-form-description-input"));document.getElementById("task-form-dueDate-input"),document.getElementById("task-form-priority-input"),document.getElementById("task-form-notes-input"),document.getElementById("task-form-complete-input"),ye(),he?Ae.renderTasks():console.log("did not select a project"),document.querySelectorAll(".project-item"),document.getElementById("project-form").addEventListener("submit",(e=>{e.preventDefault(),function(){xe(ue);let e=new ie(ze.value);we.push(e)}(),ze.value="",Te(),ye()})),ue.addEventListener("click",(e=>{"li"===e.target.tagName.toLowerCase()&&(be=e.target.dataset.projectId,he=we.find((e=>e.ID===be)),localStorage.setItem(me,be),ye(),xe(de),Ae.renderTasks(),Te()),console.log(be),console.log(localStorage)})),ve(),document.getElementById("task-form").addEventListener("submit",(e=>{e.preventDefault(),he=we.find((e=>e.ID===be)),function(){xe(de);let e=new oe(He.value);he.tasks.push(e),Te()}(),Ae.renderTasks(),He.value=""})),ce.addEventListener("click",(e=>{let t=document.querySelector(".selectedProject");be&&""!==be&&null!==be?(console.log("delete"),function(){let e=we.find((e=>e.ID===be));if(e.ID===localStorage.getItem(me)){localStorage.removeItem(me);let t=we.indexOf(e);console.log(t),console.log(e),we.splice(t,1),Te(),xe(de)}}(),t.parentElement.removeChild(t),localStorage.removeItem(me,be)):alert("You did not select a project to delete")}))})()})();
//# sourceMappingURL=main.js.map
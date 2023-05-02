/*! For license information please see bundle.a8638a84541aca44a136.js.LICENSE.txt */
(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",l="week",o="month",u="quarter",c="year",d="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},_={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+m(i,2,"0")+":"+m(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,o),r=n-s<0,a=t.clone().add(i+(r?-1:1),o);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:c,w:l,d:a,D:d,h:r,m:s,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",g={};g[y]=v;var $=function(e){return e instanceof w},b=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();g[r]&&(s=r),n&&(g[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var l=t.name;g[l]=t,s=l}return!i&&s&&(y=s),s||!i&&y},M=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},D=_;D.l=b,D.i=$,D.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function v(e){this.$L=b(e.locale,null,!0),this.parse(e)}var m=v.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return D},m.isValid=function(){return!(this.$d.toString()===h)},m.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return M(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<M(e)},m.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,u=!!D.u(t)||t,h=D.p(e),f=function(e,t){var i=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return u?i:i.endOf(a)},p=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},v=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case c:return u?f(1,0):f(31,11);case o:return u?f(1,m):f(0,m+1);case l:var g=this.$locale().weekStart||0,$=(v<g?v+7:v)-g;return f(u?_-$:_+(6-$),m);case a:case d:return p(y+"Hours",0);case r:return p(y+"Minutes",1);case s:return p(y+"Seconds",2);case i:return p(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var l,u=D.p(e),h="set"+(this.$u?"UTC":""),f=(l={},l[a]=h+"Date",l[d]=h+"Date",l[o]=h+"Month",l[c]=h+"FullYear",l[r]=h+"Hours",l[s]=h+"Minutes",l[i]=h+"Seconds",l[n]=h+"Milliseconds",l)[u],p=u===a?this.$D+(t-this.$W):t;if(u===o||u===c){var v=this.clone().set(d,1);v.$d[f](p),v.init(),this.$d=v.set(d,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[D.p(e)]()},m.add=function(n,u){var d,h=this;n=Number(n);var f=D.p(u),p=function(e){var t=M(h);return D.w(t.date(t.date()+Math.round(e*n)),h)};if(f===o)return this.set(o,this.$M+n);if(f===c)return this.set(c,this.$y+n);if(f===a)return p(1);if(f===l)return p(7);var v=(d={},d[s]=e,d[r]=t,d[i]=1e3,d)[f]||1,m=this.$d.getTime()+n*v;return D.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),r=this.$H,a=this.$m,l=this.$M,o=n.weekdays,u=n.months,c=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},d=function(e){return D.s(r%12||12,e,"0")},f=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:D.s(l+1,2,"0"),MMM:c(n.monthsShort,l,u,3),MMMM:c(u,l),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,o,2),ddd:c(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:D.s(r,2,"0"),h:d(1),hh:d(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:s};return i.replace(p,(function(e,t){return t||v[e]||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,h){var f,p=D.p(d),v=M(n),m=(v.utcOffset()-this.utcOffset())*e,_=this-v,y=D.m(this,v);return y=(f={},f[c]=y/12,f[o]=y,f[u]=y/3,f[l]=(_-m)/6048e5,f[a]=(_-m)/864e5,f[r]=_/t,f[s]=_/e,f[i]=_/1e3,f)[p]||_,h?y:D.a(y)},m.daysInMonth=function(){return this.endOf(o).$D},m.$locale=function(){return g[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=b(e,t,!0);return i&&(n.$L=i),n},m.clone=function(){return D.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),S=w.prototype;return M.prototype=S,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",o],["$y",c],["$D",d]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,w,M),e.$i=!0),M},M.locale=b,M.isDayjs=$,M.unix=function(e){return M(1e3*e)},M.en=g[y],M.Ls=g,M.p={},M}()},285:function(e){e.exports=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,r={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},o=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=r[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var n,i=r.meridiem;if(i){for(var s=1;s<=24;s+=1)if(e.indexOf(i(s,0,t))>-1){n=s>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[s,function(e){this.afternoon=c(e,!1)}],a:[s,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[i,l("seconds")],ss:[i,l("seconds")],m:[i,l("minutes")],mm:[i,l("minutes")],H:[i,l("hours")],h:[i,l("hours")],HH:[i,l("hours")],hh:[i,l("hours")],D:[i,l("day")],DD:[n,l("day")],Do:[s,function(e){var t=r.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var i=1;i<=31;i+=1)t(i).replace(/\[|\]/g,"")===e&&(this.day=i)}],M:[i,l("month")],MM:[n,l("month")],MMM:[s,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[s,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:o,ZZ:o};function h(n){var i,s;i=n,s=r&&r.formats;for(var a=(n=i.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,i){var r=i&&i.toUpperCase();return n||s[i]||e[i]||s[r].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=a.length,o=0;o<l;o+=1){var u=a[o],c=d[u],h=c&&c[0],f=c&&c[1];a[o]=f?{regex:h,parser:f}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,i=0;n<l;n+=1){var s=a[n];if("string"==typeof s)i+=s.length;else{var r=s.regex,o=s.parser,u=e.slice(i),c=r.exec(u)[0];o.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var i=t.prototype,s=i.parse;i.parse=function(e){var t=e.date,i=e.utc,a=e.args;this.$u=i;var l=a[1];if("string"==typeof l){var o=!0===a[2],u=!0===a[3],c=o||u,d=a[2];u&&(d=a[2]),r=this.$locale(),!o&&d&&(r=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var i=h(t)(e),s=i.year,r=i.month,a=i.day,l=i.hours,o=i.minutes,u=i.seconds,c=i.milliseconds,d=i.zone,f=new Date,p=a||(s||r?1:f.getDate()),v=s||f.getFullYear(),m=0;s&&!r||(m=r>0?r-1:f.getMonth());var _=l||0,y=o||0,g=u||0,$=c||0;return d?new Date(Date.UTC(v,m,p,_,y,g,$+60*d.offset*1e3)):n?new Date(Date.UTC(v,m,p,_,y,g,$)):new Date(v,m,p,_,y,g,$)}catch(e){return new Date("")}}(t,l,i),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(l)&&(this.$d=new Date("")),r={}}else if(l instanceof Array)for(var f=l.length,p=1;p<=f;p+=1){a[1]=l[p-1];var v=n.apply(this,a);if(v.isValid()){this.$d=v.$d,this.$L=v.$L,this.init();break}p===f&&(this.$d=new Date(""))}else s.call(this,e)}}}()},646:function(e){e.exports=function(){"use strict";var e,t,n=1e3,i=6e4,s=36e5,r=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=31536e6,o=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:l,months:o,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},d=function(e){return e instanceof y},h=function(e,t,n){return new y(e,n,t.$l)},f=function(e){return t.p(e)+"s"},p=function(e){return e<0},v=function(e){return p(e)?Math.ceil(e):Math.floor(e)},m=function(e){return Math.abs(e)},_=function(e,t){return e?p(e)?{negative:!0,format:""+m(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},y=function(){function p(e,t,n){var i=this;if(this.$d={},this.$l=n,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return h(e*c[f(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){i.$d[f(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var s=e.match(u);if(s){var r=s.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var m=p.prototype;return m.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,n){return t+(e.$d[n]||0)*c[n]}),0)},m.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=v(e/l),e%=l,this.$d.months=v(e/o),e%=o,this.$d.days=v(e/r),e%=r,this.$d.hours=v(e/s),e%=s,this.$d.minutes=v(e/i),e%=i,this.$d.seconds=v(e/n),e%=n,this.$d.milliseconds=e},m.toISOString=function(){var e=_(this.$d.years,"Y"),t=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=_(n,"D"),s=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3);var l=_(a,"S"),o=e.negative||t.negative||i.negative||s.negative||r.negative||l.negative,u=s.format||r.format||l.format?"T":"",c=(o?"-":"")+"P"+e.format+t.format+i.format+u+s.format+r.format+l.format;return"P"===c||"-P"===c?"P0D":c},m.toJSON=function(){return this.toISOString()},m.format=function(e){var n=e||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return n.replace(a,(function(e,t){return t||String(i[e])}))},m.as=function(e){return this.$ms/c[f(e)]},m.get=function(e){var t=this.$ms,n=f(e);return"milliseconds"===n?t%=1e3:t="weeks"===n?v(t/c[n]):this.$d[n],0===t?0:t},m.add=function(e,t,n){var i;return i=t?e*c[f(t)]:d(e)?e.$ms:h(e,this).$ms,h(this.$ms+i*(n?-1:1),this)},m.subtract=function(e,t){return this.add(e,t,!0)},m.locale=function(e){var t=this.clone();return t.$l=e,t},m.clone=function(){return h(this.$ms,this)},m.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},p}();return function(n,i,s){e=s,t=s().$utils(),s.duration=function(e,t){var n=s.locale();return h(e,{$l:n},t)},s.isDuration=d;var r=i.prototype.add,a=i.prototype.subtract;i.prototype.add=function(e,t){return d(e)&&(e=e.asMilliseconds()),r.bind(this)(e,t)},i.prototype.subtract=function(e,t){return d(e)&&(e=e.asMilliseconds()),a.bind(this)(e,t)}}}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=e=>e[Math.floor(Math.random()*e.length)],t=(e,t)=>Math.floor(Math.random()*(t-e+1)+e);let i=0,s=0,r=0,a=0,l=0;const o=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.","Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.","Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.","Sed sed nisi sed augue convallis suscipit in sed felis.","Aliquam erat volutpat.","Nunc fermentum tortor ac porta dapibus.","In rutrum ac purus sit amet tempus."],u=["Moscow","Paris","London","Pskov","Omsk"],c=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],d=n=>{const i=Array.from({length:t(1,5)},(()=>e(n)));return[...new Set(i)].join(" ")},h=()=>({src:`https://loremflickr.com/248/152?random=${t(1,9)}`,description:"Some picture description #"+ ++s}),f=()=>(s=0,{id:++i,description:d(o),name:u[i-1],pictures:Array.from({length:t(0,5)},h)}),p=()=>({id:++a,title:`Some offer #${a}`,price:t(200,2e3)}),v=()=>(a=0,{type:c[r++],offers:Array.from({length:t(0,8)},p)}),m=(e,n)=>{const i=((e,t)=>t[c.findIndex((t=>t===e))].offers.length)(e,n),s=Array.from({length:t(0,i)},(()=>t(1,i)));return[...new Set(s)]},_=(e,n)=>String(t(e,n)).padStart(2,"0"),y=e=>{const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild},g=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"beforeend";t.insertAdjacentElement(n,e.getElement())};class ${getTemplate(){return'\n    <section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n        <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n      </div>\n\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>'}getElement(){return this.element||(this.element=y(this.getTemplate())),this.element}removeElement(){this.element=null}}class b{getTemplate(){return'\n    <form class="trip-filters" action="#" method="get">\n      <div class="trip-filters__filter">\n        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n        <label class="trip-filters__filter-label" for="filter-future">Future</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n        <label class="trip-filters__filter-label" for="filter-present">Present</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n        <label class="trip-filters__filter-label" for="filter-past">Past</label>\n      </div>\n\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>'}getElement(){return this.element||(this.element=y(this.getTemplate())),this.element}removeElement(){this.element=null}}const M=document.querySelector(".trip-main"),D=document.querySelector(".trip-controls__filters");class w{getTemplate(){return'\n    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n        <label class="trip-sort__btn" for="sort-day">Day</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--event">\n        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n        <label class="trip-sort__btn" for="sort-event">Event</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--time">\n        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n        <label class="trip-sort__btn" for="sort-time">Time</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--price">\n        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n        <label class="trip-sort__btn" for="sort-price">Price</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--offer">\n        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n        <label class="trip-sort__btn" for="sort-offer">Offers</label>\n      </div>\n    </form>'}getElement(){return this.element||(this.element=y(this.getTemplate())),this.element}removeElement(){this.element=null}}class S{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=y(this.getTemplate())),this.element}removeElement(){this.element=null}}var Y=n(484),T=n.n(Y),x=n(285),O=n.n(x),L=n(646),k=n.n(L);T().extend(O()),T().extend(k());const H="HH:mm",E=(e,t)=>T()(e).format(t),A=(e,t,n)=>{const i=e.find((e=>e.type===n)),[s]=i.offers.filter((e=>e.id===t));return s};class P{constructor(e){let{data:t,number:n}=e;this.data=t,this.number=n}getTemplate(){return((e,t)=>{const{type:n,destination:i,dateFrom:s,dateTo:r,basePrice:a,isFavorite:l}=e.events[t];return`\n    <li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${s}">${E(s,"MMM D")}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${n}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${o=n,o[0].toUpperCase()+o.slice(1)} ${e.destinations[i-1].name}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${s}">${E(s,H)}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${r}">${E(r,H)}</time>\n          </p>\n          <p class="event__duration">${((e,t)=>{const n=T()(e),i=T()(t),s=T().duration(i.diff(n));return s.get("day")?s.format("DD[D] HH[H] mm[M]"):!s.get("day")&&s.get("hour")?s.format("HH[H] mm[M]"):s.format("mm[M]")})(s,r)}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${((e,t,n)=>{let{offers:i,events:s}=t;if(!s[n].offers.length)return e;const r=s[n].type,a=i.find((e=>e.type===r)),l=s[n].offers;let o=0;for(const e of l){const[t]=a.offers.filter((t=>t.id===e));o+=t.price}return e+o})(a,e,t)}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        ${((e,t)=>{let{offers:n,events:i}=e;const s=i[t].type,r=i[t].offers;return"\n    "+(r.length?`\n    <ul class="event__selected-offers">\n    ${r.map((e=>`\n      <li class="event__offer">\n        <span class="event__offer-title">${A(n,e,s).title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${A(n,e,s).price}</span>\n      </li>`)).join("")}\n    </ul>`:"")})(e,t)}\n        <button class="event__favorite-btn ${(e=>e?"event__favorite-btn--active":"")(l)}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`;var o})(this.data,this.number)}getElement(){return this.element||(this.element=y(this.getTemplate())),this.element}removeElement(){this.element=null}}class C{constructor(e){let{data:t,number:n}=e;this.data=t,this.number=n}getTemplate(){return((e,t)=>{const{selectedOffers:n,offerItem:i}=((e,t)=>{let{offers:n,events:i}=e;const s=i[t].type;return{selectedOffers:i[t].offers,offerItem:n.find((e=>e.type===s))}})(e,t);return"\n  "+(i.offers.length?`\n    <section class="event__section  event__section--offers">\n      <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n      ${((e,t)=>`\n    <div class="event__available-offers">\n      ${e.map((e=>`\n        <div class="event__offer-selector">\n          <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${((e,t)=>t.includes(e)?"checked":"")(e.id,t)}>\n          <label class="event__offer-label" for="event-offer-luggage-1">\n            <span class="event__offer-title">${e.title}</span>\n            &plus;&euro;&nbsp;\n            <span class="event__offer-price">${e.price}</span>\n          </label>\n        </div>`)).join("")}\n    </div>`)(i.offers,n)}\n    </section>`:"")})(this.data,this.number)}getElement(){return this.element||(this.element=y(this.getTemplate())),this.element}removeElement(){this.element=null}}class F{constructor(e){let{data:t,number:n}=e;this.data=t,this.number=n}getTemplate(){return((e,t)=>{const n=((e,t)=>{let{destinations:n,events:i}=e;const{destination:s}=i[t],r=n.find((e=>e.id===s));return{name:r.name,description:r.description,pictures:r.pictures}})(this.data,this.number);return`\n    <section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      <p class="event__destination-description">${n.description}</p>\n      ${i=n.pictures,`\n  <div class="event__photos-container">\n    <div class="event__photos-tape">\n      ${i.length?`${i.map((e=>`<img class="event__photo" src="${e.src}" alt="Event photo">`)).join("")}`:""}\n    </div>\n  </div>`}\n    </section>`;var i})()}getElement(){return this.element||(this.element=y(this.getTemplate())),this.element}removeElement(){this.element=null}}class j{constructor(e){let{data:t,number:n}=e;this.data=t,this.number=n}getTemplate(){return((e,t)=>{const n=new C({data:e,number:t}),i=new F({data:e,number:t});return`\n    <li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n\n                <div class="event__type-item">\n                  <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n                  <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n                  <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                  <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                  <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                  <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n                  <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                  <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                  <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                  <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              Flight\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="" list="destination-list-1">\n            ${(e=>{let{destinations:t}=e;return`<datalist id="destination-list-1">\n    ${t.map((e=>`<option value="${e.name}"></option>`)).join("")}\n  </datalist>`})(e)}\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Cancel</button>\n        </header>\n        <section class="event__details">\n          ${n.getTemplate()}\n          ${i.getTemplate()}\n        </section>\n      </form>\n    </li>`})(this.data,this.number)}getElement(){return this.element||(this.element=y(this.getTemplate())),this.element}removeElement(){this.element=null}}const Z=document.querySelector(".trip-events"),I=new class{destinations=(()=>Array.from({length:u.length},f))();offers=(()=>Array.from({length:c.length},v))();events=((n,i)=>Array.from({length:n},(()=>(n=>{const i=e(c);return{id:++l,basePrice:t(1e3,5e3),dateFrom:`2019-07-${_(1,14)}T${_(0,23)}:${_(0,59)}:${_(0,59)}.845Z`,dateTo:`2019-07-${_(15,30)}T${_(0,23)}:${_(0,59)}:${_(0,59)}.375Z`,destination:t(1,u.length),isFavorite:Boolean(t(0,1)),offers:m(i,n),type:i}})(i))))(4,this.offers);getDestinations(){return this.destinations}getOffers(){return this.offers}getEvents(){return this.events}},W=new class{init(){g(new $,M,"afterbegin"),g(new b,D)}},N=new class{eventsListView=new S;constructor(e){let{eventsModel:t}=e;this.eventsModel=t}init(){this.data={destinations:this.eventsModel.getDestinations().slice(),offers:this.eventsModel.getOffers().slice(),events:this.eventsModel.getEvents().slice()},console.log(this.data),g(new w,Z),g(this.eventsListView,Z),g(new j({data:this.data,number:0}),this.eventsListView.getElement());for(let e=1;e<this.data.events.length;e++)g(new P({data:this.data,number:e}),this.eventsListView.getElement())}}({eventsModel:I});W.init(),N.init()})()})();
//# sourceMappingURL=bundle.a8638a84541aca44a136.js.map
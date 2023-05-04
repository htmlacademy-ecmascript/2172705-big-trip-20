/*! For license information please see bundle.6d7eaaa1ffba64880559.js.LICENSE.txt */
(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",s="second",i="minute",r="hour",a="day",o="week",l="month",u="quarter",d="year",c="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},_={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(s,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(s,l),r=n-i<0,a=e.clone().add(s+(r?-1:1),l);return+(-(s+(n-i)/(r?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:d,w:o,d:a,D:c,h:r,m:i,s,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=v;var g=function(t){return t instanceof D},b=function t(e,n,s){var i;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();$[r]&&(i=r),n&&($[r]=n,i=r);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;$[o]=e,i=o}return!s&&i&&(y=i),i||!s&&y},M=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},w=_;w.l=b,w.i=g,w.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function v(t){this.$L=b(t.locale,null,!0),this.parse(t)}var m=v.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(f);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return w},m.isValid=function(){return!(this.$d.toString()===h)},m.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return M(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<M(t)},m.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,u=!!w.u(e)||e,h=w.p(t),f=function(t,e){var s=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?s:s.endOf(a)},p=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case d:return u?f(1,0):f(31,11);case l:return u?f(1,m):f(0,m+1);case o:var $=this.$locale().weekStart||0,g=(v<$?v+7:v)-$;return f(u?_-g:_+(6-g),m);case a:case c:return p(y+"Hours",0);case r:return p(y+"Minutes",1);case i:return p(y+"Seconds",2);case s:return p(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var o,u=w.p(t),h="set"+(this.$u?"UTC":""),f=(o={},o[a]=h+"Date",o[c]=h+"Date",o[l]=h+"Month",o[d]=h+"FullYear",o[r]=h+"Hours",o[i]=h+"Minutes",o[s]=h+"Seconds",o[n]=h+"Milliseconds",o)[u],p=u===a?this.$D+(e-this.$W):e;if(u===l||u===d){var v=this.clone().set(c,1);v.$d[f](p),v.init(),this.$d=v.set(c,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[w.p(t)]()},m.add=function(n,u){var c,h=this;n=Number(n);var f=w.p(u),p=function(t){var e=M(h);return w.w(e.date(e.date()+Math.round(t*n)),h)};if(f===l)return this.set(l,this.$M+n);if(f===d)return this.set(d,this.$y+n);if(f===a)return p(1);if(f===o)return p(7);var v=(c={},c[i]=t,c[r]=e,c[s]=1e3,c)[f]||1,m=this.$d.getTime()+n*v;return w.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,u=n.months,d=function(t,n,i,r){return t&&(t[n]||t(e,s))||i[n].slice(0,r)},c=function(t){return w.s(r%12||12,t,"0")},f=n.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:d(n.monthsShort,o,u,3),MMMM:d(u,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,l,2),ddd:d(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:w.s(r,2,"0"),h:c(1),hh:c(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return s.replace(p,(function(t,e){return e||v[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,c,h){var f,p=w.p(c),v=M(n),m=(v.utcOffset()-this.utcOffset())*t,_=this-v,y=w.m(this,v);return y=(f={},f[d]=y/12,f[l]=y,f[u]=y/3,f[o]=(_-m)/6048e5,f[a]=(_-m)/864e5,f[r]=_/e,f[i]=_/t,f[s]=_/1e3,f)[p]||_,h?y:w.a(y)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return $[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=b(t,e,!0);return s&&(n.$L=s),n},m.clone=function(){return w.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),S=D.prototype;return M.prototype=S,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",a],["$M",l],["$y",d],["$D",c]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,D,M),t.$i=!0),M},M.locale=b,M.isDayjs=g,M.unix=function(t){return M(1e3*t)},M.en=$[y],M.Ls=$,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,s=6e4,i=36e5,r=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o=31536e6,l=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:o,months:l,days:r,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},c=function(t){return t instanceof y},h=function(t,e,n){return new y(t,n,e.$l)},f=function(t){return e.p(t)+"s"},p=function(t){return t<0},v=function(t){return p(t)?Math.ceil(t):Math.floor(t)},m=function(t){return Math.abs(t)},_=function(t,e){return t?p(t)?{negative:!0,format:""+m(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function p(t,e,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return h(t*d[f(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){s.$d[f(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var i=t.match(u);if(i){var r=i.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var m=p.prototype;return m.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*d[n]}),0)},m.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=v(t/o),t%=o,this.$d.months=v(t/l),t%=l,this.$d.days=v(t/r),t%=r,this.$d.hours=v(t/i),t%=i,this.$d.minutes=v(t/s),t%=s,this.$d.seconds=v(t/n),t%=n,this.$d.milliseconds=t},m.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=_(n,"D"),i=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3);var o=_(a,"S"),l=t.negative||e.negative||s.negative||i.negative||r.negative||o.negative,u=i.format||r.format||o.format?"T":"",d=(l?"-":"")+"P"+t.format+e.format+s.format+u+i.format+r.format+o.format;return"P"===d||"-P"===d?"P0D":d},m.toJSON=function(){return this.toISOString()},m.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(a,(function(t,e){return e||String(s[t])}))},m.as=function(t){return this.$ms/d[f(t)]},m.get=function(t){var e=this.$ms,n=f(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?v(e/d[n]):this.$d[n],0===e?0:e},m.add=function(t,e,n){var s;return s=e?t*d[f(e)]:c(t)?t.$ms:h(t,this).$ms,h(this.$ms+s*(n?-1:1),this)},m.subtract=function(t,e){return this.add(t,e,!0)},m.locale=function(t){var e=this.clone();return e.$l=t,e},m.clone=function(){return h(this.$ms,this)},m.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},p}();return function(n,s,i){t=i,e=i().$utils(),i.duration=function(t,e){var n=i.locale();return h(t,{$l:n},e)},i.isDuration=c;var r=s.prototype.add,a=s.prototype.subtract;s.prototype.add=function(t,e){return c(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},s.prototype.subtract=function(t,e){return c(t)&&(t=t.asMilliseconds()),a.bind(this)(t,e)}}}()}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(484),e=n.n(t);const s=t=>t[Math.floor(Math.random()*t.length)],i=(t,e)=>Math.floor(Math.random()*(e-t+1)+t),r=t=>t[0].toUpperCase()+t.slice(1),a=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.","Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.","Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.","Sed sed nisi sed augue convallis suscipit in sed felis.","Aliquam erat volutpat.","Nunc fermentum tortor ac porta dapibus.","In rutrum ac purus sit amet tempus."],o=["Moscow","Paris","London","Pskov","Omsk"],l=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],u=t=>{const e=Array.from({length:i(1,5)},(()=>s(t)));return[...new Set(e)].join(" ")},d=(t,e)=>{const n=((t,e)=>e[l.findIndex((e=>e===t))].offers.length)(t,e),s=Array.from({length:i(0,n)},(()=>i(1,n)));return[...new Set(s)]},c=t=>t?e()().subtract(i(1,5),"d").subtract(i(1,23),"h").subtract(i(1,59),"m").subtract(i(1,59),"s"):e()().add(i(1,5),"d").add(i(1,23),"h").add(i(1,59),"m").add(i(1,59),"s"),h=t=>{const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild},f=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"beforeend";e.insertAdjacentElement(n,t.getElement())};class p{getTemplate(){return'\n    <section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n        <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n      </div>\n\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>'}getElement(){return this.element||(this.element=h(this.getTemplate())),this.element}removeElement(){this.element=null}}class v{getTemplate(){return'\n    <form class="trip-filters" action="#" method="get">\n      <div class="trip-filters__filter">\n        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n        <label class="trip-filters__filter-label" for="filter-future">Future</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n        <label class="trip-filters__filter-label" for="filter-present">Present</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n        <label class="trip-filters__filter-label" for="filter-past">Past</label>\n      </div>\n\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>'}getElement(){return this.element||(this.element=h(this.getTemplate())),this.element}removeElement(){this.element=null}}const m=document.querySelector(".trip-main"),_=document.querySelector(".trip-controls__filters");class y{getTemplate(){return'\n    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n        <label class="trip-sort__btn" for="sort-day">Day</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--event">\n        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n        <label class="trip-sort__btn" for="sort-event">Event</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--time">\n        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n        <label class="trip-sort__btn" for="sort-time">Time</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--price">\n        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n        <label class="trip-sort__btn" for="sort-price">Price</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--offer">\n        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n        <label class="trip-sort__btn" for="sort-offer">Offers</label>\n      </div>\n    </form>'}getElement(){return this.element||(this.element=h(this.getTemplate())),this.element}removeElement(){this.element=null}}class ${getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=h(this.getTemplate())),this.element}removeElement(){this.element=null}}var g=n(646),b=n.n(g);e().extend(b());const M="DD/MM/YY HH:mm",w="HH:mm",D=(t,n)=>e()(t).format(n);class S{constructor(t){let{destinations:e,types:n,event:s}=t;this.data={destinations:e,types:n,event:s}}getTemplate(){return(t=>{let{destinations:n,types:s,event:i}=t;const{type:a,destination:o,offers:l,dateFrom:u,dateTo:d,basePrice:c,isFavorite:h}=i,f=n.find((t=>t.id===o)),p=s.find((t=>t.type===a));return`\n    <li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${u}">${D(u,"MMM D")}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${a}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${r(a)} ${f.name}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${u}">${D(u,w)}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${d}">${D(d,w)}</time>\n          </p>\n          <p class="event__duration">${((t,n)=>{const s=e()(t),i=e()(n),r=e().duration(i.diff(s));return r.get("day")?r.format("DD[D] HH[H] mm[M]"):!r.get("day")&&r.get("hour")?r.format("HH[H] mm[M]"):r.format("mm[M]")})(u,d)}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${c}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        ${((t,e)=>t.length?`\n    <ul class="event__selected-offers">\n      ${t.map((t=>{const n=e.offers.find((e=>e.id===t));return`\n        <li class="event__offer">\n          <span class="event__offer-title">${n.title}</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${n.price}</span>\n        </li>`})).join("")}\n    </ul>`:"")(l,p)}\n        <button class="event__favorite-btn ${(t=>t?"event__favorite-btn--active":"")(h)}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`})(this.data)}getElement(){return this.element||(this.element=h(this.getTemplate())),this.element}removeElement(){this.element=null}}class T{constructor(t){let{destinations:e,types:n,event:s}=t;this.data={destinations:e,types:n,event:s}}getTemplate(){return(t=>{let{destinations:e,types:n,event:s}=t;const{type:i,destination:a,offers:o,basePrice:l,dateFrom:u,dateTo:d}=s,c=e.find((t=>t.id===a)),h=n.find((t=>t.type===i));return`\n    <li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${i}.png" alt="Event type icon.">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n            ${((t,e)=>{let{types:n}=t;return`\n    <div class="event__type-list">\n      <fieldset class="event__type-group">\n        <legend class="visually-hidden">Event type</legend>\n        ${n.map((t=>`\n          <div class="event__type-item">\n            <input id="event-type-${t.type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t.type}" ${((t,e)=>t===e?"checked":"")(e,t.type)}>\n            <label class="event__type-label  event__type-label--${t.type}" for="event-type-${t.type}-1">${r(t.type)}</label>\n          </div>`)).join("")}\n      </fieldset>\n    </div>`})({types:n},i)}\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${r(i)}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${c.name}" list="destination-list-1">\n            ${(t=>{let{destinations:e}=t;return`\n  <datalist id="destination-list-1">\n    ${e.map((t=>`<option value="${t.name}"></option>`)).join("")}\n  </datalist>`})({destinations:e})}\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${D(u,M)}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${D(d,M)}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${l}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Cancel</button>\n        </header>\n        <section class="event__details">\n          ${((t,e)=>t.offers.length?`\n    <section class="event__section  event__section--offers">\n      <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n      ${((t,e)=>`\n    <div class="event__available-offers">\n      ${t.map((t=>`\n        <div class="event__offer-selector">\n          <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${((t,e)=>e.includes(t)?"checked":"")(t.id,e)}>\n          <label class="event__offer-label" for="event-offer-luggage-1">\n            <span class="event__offer-title">${t.title}</span>\n            &plus;&euro;&nbsp;\n            <span class="event__offer-price">${t.price}</span>\n          </label>\n        </div>`)).join("")}\n    </div>`)(t.offers,e)}\n    </section>`:"")(h,o)}\n          ${(t=>{return`\n    <section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      <p class="event__destination-description">${t.description}</p>\n      ${e=t.pictures,e.length?`\n    <div class="event__photos-container">\n      <div class="event__photos-tape">\n        ${e.map((t=>`<img class="event__photo" src="${t.src}" alt="Event photo.">`)).join("")}\n      </div>\n    </div>`:""}\n    </section>`;var e})(c)}\n        </section>\n      </form>\n    </li>`})(this.data)}getElement(){return this.element||(this.element=h(this.getTemplate())),this.element}removeElement(){this.element=null}}const O=document.querySelector(".trip-events"),H=new class{destinations=(()=>Array.from({length:o.length},((t,e)=>{return{id:(n=e)+1,description:u(a),name:o[n],pictures:Array.from({length:i(0,5)},((t,e)=>{return n=e,{src:`https://loremflickr.com/248/152?random=${i(1,9)}`,description:`Some picture description #${n+1}`};var n}))};var n})))();types=(()=>Array.from({length:l.length},((t,e)=>({type:l[e],offers:Array.from({length:i(0,8)},((t,e)=>{return{id:(n=e)+1,title:`Some offer #${n+1}`,price:i(200,2e3)};var n}))}))))();events=((t,e)=>Array.from({length:t},((t,n)=>((t,e)=>{const n=s(l);return{id:t+1,basePrice:i(1e3,5e3),dateFrom:c(!0),dateTo:c(!1),destination:i(1,o.length),isFavorite:Boolean(i(0,1)),offers:d(n,e),type:n}})(n,e))))(4,this.types);getDestinations(){return this.destinations}getTypes(){return this.types}getEvents(){return this.events}},Y=new class{init(){f(new p,m,"afterbegin"),f(new v,_)}},k=new class{eventsListView=new $;constructor(t){let{eventsModel:e}=t;this.eventsModel=e}init(){this.destinations=this.eventsModel.getDestinations().slice(),this.types=this.eventsModel.getTypes().slice(),this.events=this.eventsModel.getEvents().slice(),console.log(this.destinations,this.types,this.events),f(new y,O),f(this.eventsListView,O),f(new T({destinations:this.destinations,types:this.types,event:this.events[0]}),this.eventsListView.getElement());for(let t=1;t<this.events.length;t++)f(new S({destinations:this.destinations,types:this.types,event:this.events[t]}),this.eventsListView.getElement())}}({eventsModel:H});Y.init(),k.init()})()})();
//# sourceMappingURL=bundle.6d7eaaa1ffba64880559.js.map
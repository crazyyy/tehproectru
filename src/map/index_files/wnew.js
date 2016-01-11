leadiaCloud = {}; // TODO

(function(lc){
    
    /*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});
    lc.jQuery = $.noConflict(true);
    
    (function($, jQuery) {
    
        //     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r=Array.prototype,e=Object.prototype,u=Function.prototype,i=r.push,a=r.slice,o=r.concat,l=e.toString,c=e.hasOwnProperty,f=Array.isArray,s=Object.keys,p=u.bind,h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):n._=h,h.VERSION="1.7.0";var g=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}};h.iteratee=function(n,t,r){return null==n?h.identity:h.isFunction(n)?g(n,t,r):h.isObject(n)?h.matches(n):h.property(n)},h.each=h.forEach=function(n,t,r){if(null==n)return n;t=g(t,r);var e,u=n.length;if(u===+u)for(e=0;u>e;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){if(null==n)return[];t=h.iteratee(t,r);for(var e,u=n.length!==+n.length&&h.keys(n),i=(u||n).length,a=Array(i),o=0;i>o;o++)e=u?u[o]:o,a[o]=t(n[e],e,n);return a};var v="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length,o=0;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[o++]:o++]}for(;a>o;o++)u=i?i[o]:o,r=t(r,n[u],u,n);return r},h.reduceRight=h.foldr=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[--a]:--a]}for(;a--;)u=i?i[a]:a,r=t(r,n[u],u,n);return r},h.find=h.detect=function(n,t,r){var e;return t=h.iteratee(t,r),h.some(n,function(n,r,u){return t(n,r,u)?(e=n,!0):void 0}),e},h.filter=h.select=function(n,t,r){var e=[];return null==n?e:(t=h.iteratee(t,r),h.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e)},h.reject=function(n,t,r){return h.filter(n,h.negate(h.iteratee(t)),r)},h.every=h.all=function(n,t,r){if(null==n)return!0;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,!t(n[u],u,n))return!1;return!0},h.some=h.any=function(n,t,r){if(null==n)return!1;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,t(n[u],u,n))return!0;return!1},h.contains=h.include=function(n,t){return null==n?!1:(n.length!==+n.length&&(n=h.values(n)),h.indexOf(n,t)>=0)},h.invoke=function(n,t){var r=a.call(arguments,2),e=h.isFunction(t);return h.map(n,function(n){return(e?t:n[t]).apply(n,r)})},h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matches(t))},h.findWhere=function(n,t){return h.find(n,h.matches(t))},h.max=function(n,t,r){var e,u,i=-1/0,a=-1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],e>i&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(u>a||u===-1/0&&i===-1/0)&&(i=n,a=u)});return i},h.min=function(n,t,r){var e,u,i=1/0,a=1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],i>e&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(a>u||1/0===u&&1/0===i)&&(i=n,a=u)});return i},h.shuffle=function(n){for(var t,r=n&&n.length===+n.length?n:h.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=h.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},h.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))},h.sortBy=function(n,t,r){return t=h.iteratee(t,r),h.pluck(h.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var m=function(n){return function(t,r,e){var u={};return r=h.iteratee(r,e),h.each(t,function(e,i){var a=r(e,i,t);n(u,e,a)}),u}};h.groupBy=m(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=m(function(n,t,r){n[r]=t}),h.countBy=m(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1}),h.sortedIndex=function(n,t,r,e){r=h.iteratee(r,e,1);for(var u=r(t),i=0,a=n.length;a>i;){var o=i+a>>>1;r(n[o])<u?i=o+1:a=o}return i},h.toArray=function(n){return n?h.isArray(n)?a.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:n.length===+n.length?n.length:h.keys(n).length},h.partition=function(n,t,r){t=h.iteratee(t,r);var e=[],u=[];return h.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},h.first=h.head=h.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:a.call(n,0,t)},h.initial=function(n,t,r){return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))},h.rest=h.tail=h.drop=function(n,t,r){return a.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,h.identity)};var y=function(n,t,r,e){if(t&&h.every(n,h.isArray))return o.apply(e,n);for(var u=0,a=n.length;a>u;u++){var l=n[u];h.isArray(l)||h.isArguments(l)?t?i.apply(e,l):y(l,t,r,e):r||e.push(l)}return e};h.flatten=function(n,t){return y(n,t,!1,[])},h.without=function(n){return h.difference(n,a.call(arguments,1))},h.uniq=h.unique=function(n,t,r,e){if(null==n)return[];h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=h.iteratee(r,e));for(var u=[],i=[],a=0,o=n.length;o>a;a++){var l=n[a];if(t)a&&i===l||u.push(l),i=l;else if(r){var c=r(l,a,n);h.indexOf(i,c)<0&&(i.push(c),u.push(l))}else h.indexOf(u,l)<0&&u.push(l)}return u},h.union=function(){return h.uniq(y(arguments,!0,!0,[]))},h.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!h.contains(t,i)){for(var a=1;r>a&&h.contains(arguments[a],i);a++);a===r&&t.push(i)}}return t},h.difference=function(n){var t=y(a.call(arguments,1),!0,!0,[]);return h.filter(n,function(n){return!h.contains(t,n)})},h.zip=function(n){if(null==n)return[];for(var t=h.max(arguments,"length").length,r=Array(t),e=0;t>e;e++)r[e]=h.pluck(arguments,e);return r},h.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},h.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=h.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}for(;u>e;e++)if(n[e]===t)return e;return-1},h.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=n.length;for("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1));--e>=0;)if(n[e]===t)return e;return-1},h.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var d=function(){};h.bind=function(n,t){var r,e;if(p&&n.bind===p)return p.apply(n,a.call(arguments,1));if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");return r=a.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(a.call(arguments)));d.prototype=n.prototype;var u=new d;d.prototype=null;var i=n.apply(u,r.concat(a.call(arguments)));return h.isObject(i)?i:u}},h.partial=function(n){var t=a.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===h&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},h.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=h.bind(n[r],n);return n},h.memoize=function(n,t){var r=function(e){var u=r.cache,i=t?t.apply(this,arguments):e;return h.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},h.delay=function(n,t){var r=a.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},h.defer=function(n){return h.delay.apply(h,[n,1].concat(a.call(arguments,1)))},h.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var l=function(){o=r.leading===!1?0:h.now(),a=null,i=n.apply(e,u),a||(e=u=null)};return function(){var c=h.now();o||r.leading!==!1||(o=c);var f=t-(c-o);return e=this,u=arguments,0>=f||f>t?(clearTimeout(a),a=null,o=c,i=n.apply(e,u),a||(e=u=null)):a||r.trailing===!1||(a=setTimeout(l,f)),i}},h.debounce=function(n,t,r){var e,u,i,a,o,l=function(){var c=h.now()-a;t>c&&c>0?e=setTimeout(l,t-c):(e=null,r||(o=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,a=h.now();var c=r&&!e;return e||(e=setTimeout(l,t)),c&&(o=n.apply(i,u),i=u=null),o}},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},h.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},h.before=function(n,t){var r;return function(){return--n>0?r=t.apply(this,arguments):t=null,r}},h.once=h.partial(h.before,2),h.keys=function(n){if(!h.isObject(n))return[];if(s)return s(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()},h.extend=function(n){if(!h.isObject(n))return n;for(var t,r,e=1,u=arguments.length;u>e;e++){t=arguments[e];for(r in t)c.call(t,r)&&(n[r]=t[r])}return n},h.pick=function(n,t,r){var e,u={};if(null==n)return u;if(h.isFunction(t)){t=g(t,r);for(e in n){var i=n[e];t(i,e,n)&&(u[e]=i)}}else{var l=o.apply([],a.call(arguments,1));n=new Object(n);for(var c=0,f=l.length;f>c;c++)e=l[c],e in n&&(u[e]=n[e])}return u},h.omit=function(n,t,r){if(h.isFunction(t))t=h.negate(t);else{var e=h.map(o.apply([],a.call(arguments,1)),String);t=function(n,t){return!h.contains(e,t)}}return h.pick(n,t,r)},h.defaults=function(n){if(!h.isObject(n))return n;for(var t=1,r=arguments.length;r>t;t++){var e=arguments[t];for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n};var b=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);var u=l.call(n);if(u!==l.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]===n)return e[i]===t;var a=n.constructor,o=t.constructor;if(a!==o&&"constructor"in n&&"constructor"in t&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c,f;if("[object Array]"===u){if(c=n.length,f=c===t.length)for(;c--&&(f=b(n[c],t[c],r,e)););}else{var s,p=h.keys(n);if(c=p.length,f=h.keys(t).length===c)for(;c--&&(s=p[c],f=h.has(t,s)&&b(n[s],t[s],r,e)););}return r.pop(),e.pop(),f};h.isEqual=function(n,t){return b(n,t,[],[])},h.isEmpty=function(n){if(null==n)return!0;if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;for(var t in n)if(h.has(n,t))return!1;return!0},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=f||function(n){return"[object Array]"===l.call(n)},h.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(n){h["is"+n]=function(t){return l.call(t)==="[object "+n+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===l.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return n===void 0},h.has=function(n,t){return null!=n&&c.call(n,t)},h.noConflict=function(){return n._=t,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(n){return function(t){return t[n]}},h.matches=function(n){var t=h.pairs(n),r=t.length;return function(n){if(null==n)return!r;n=new Object(n);for(var e=0;r>e;e++){var u=t[e],i=u[0];if(u[1]!==n[i]||!(i in n))return!1}return!0}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=g(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=h.invert(_),j=function(n){var t=function(t){return n[t]},r="(?:"+h.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=j(_),h.unescape=j(w),h.result=function(n,t){if(null==n)return void 0;var r=n[t];return h.isFunction(r)?n[t]():r};var x=0;h.uniqueId=function(n){var t=++x+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\u2028|\u2029/g,F=function(n){return"\\"+k[n]};h.template=function(n,t,r){!t&&r&&(t=r),t=h.defaults({},t,h.templateSettings);var e=RegExp([(t.escape||A).source,(t.interpolate||A).source,(t.evaluate||A).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(O,F),u=o+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(o){throw o.source=i,o}var l=function(n){return a.call(this,n,h)},c=t.variable||"obj";return l.source="function("+c+"){\n"+i+"}",l},h.chain=function(n){var t=h(n);return t._chain=!0,t};var E=function(n){return this._chain?h(n).chain():n};h.mixin=function(n){h.each(h.functions(n),function(t){var r=h[t]=n[t];h.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),E.call(this,r.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];h.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],E.call(this,r)}}),h.each(["concat","join","slice"],function(n){var t=r[n];h.prototype[n]=function(){return E.call(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}).call(this);
/*//# sourceMappingURL=underscore-min.map*/
        lc.underscore = _.noConflict(true);
    
        (function(_) {
    
            
                lc.serverEnv = {
                    params: {"call": null, "config": null, "consultant_jobTitle": null, "consultant_name": null, "consultant_photo": null, "contactform_text": null, "cookiefirstvisit": "1", "custom_color": "blue", "custom_photo": null, "custom_position": "right", "debug_mode": null, "delaytype": null, "display": "full", "entertextlimit": null, "flipconfig_json": null, "flipisactive": 0, "form": "default", "form-step": null, "form-template": "fabricform", "form_acceptsms": null, "form_field_json": null, "form_phone": null, "form_subtittle": null, "form_title": null, "ga_id": null, "geohead": 0, "greeting_text": null, "hide-regions": null, "host": "api.leadiacloud.com", "language": "ru", "lead_to_email": "ON", "localhost": "http://api.leadiacloud.com", "margin": "0", "metrics_id": null, "mobile-form": "mobile-rob", "mobile-template": "mobilenew", "mobile_widget": 0, "msgsound": 0, "no_cookie": 0, "position": "right", "preview_mode": false, "preview_mode_step": 1, "product": "lawyer", "protocol": "http", "question": "", "referer": "", "region": "ru", "region-filter": null, "robotrandom": 1, "show-regions": null, "start": null, "style": "default", "subaccount": "", "template": "default", "template_full": "master.paydayru.newform_lawyer-default-default_default", "thankpage_photo": null, "thankpage_text": null, "timeoutscroll": 0, "user_filter": null, "user_filter_status": null, "userid": 7197, "usetitle": 0, "widget-class": "leadia/default/science", "widget_id": null, "widget_json_settings": null, "widget_version": null},
                    static: "http://api.leadiacloud.com/static/widget/lawyer/default/default",
                    userid: 7197,
                    subaccount: ""
                };
            

            

lc.utils = {};

lc.utils.waitFor = function(predicate, success){

    var intervalSecs = 50;
    var maxWaitSecs = 5000;
    var waited = 0;
    /*console.log('Start waiting');*/

    var evaluated = predicate();
    if(evaluated){
        /*console.log('Evaluated ' + evaluated);*/
        success(evaluated);
        return;
    }

    var interval = setInterval(function(){
        var evaluated = predicate();
        if(evaluated){
            /*console.log('Evaluated ' + evaluated);*/
            clearInterval(interval);
            success(evaluated);
            return;
        }
        waited += intervalSecs;
        /*console.log('Waited ' + waited);*/
        if(waited >= maxWaitSecs){
            clearInterval(interval);
            return;
        }
    }, intervalSecs);
    return interval;
}

lc.utils.css = function (styleElements, a, convertToNumbers) {
    if(convertToNumbers === undefined){
        convertToNumbers = true;
    }
    var o = lc.utils.css2json(a.attr('style'));
    var styleSheetDoms = [];
    styleElements.each(function(){
        styleSheetDoms.push(this);
    });

    var sheets = document.styleSheets;
    for(var i=0;i<sheets.length;i++){
        var sheet = sheets[i];
        if($.inArray(sheet.ownerNode, styleSheetDoms)<0){
            continue;
        }
        try {
            var rules = sheet.rules || sheet.cssRules;
        }catch(e){
            continue;
        }
        for (var r in rules) {
            try{
                if (a.is(rules[r].selectorText)) {
                    o = $.extend(o, lc.utils.css2json(rules[r].style), lc.utils.css2json(a.attr('style')));
                }
            }catch(e){
            }
        }
    };
    if(convertToNumbers) {
        for (var i in o) {
            try {
                var m = o[i].match(/^(\d+)px/);
                if (m) {
                    o[i] = m[1];
                }
            }catch(e){

            }
        }
    }
    /*console.log(o);*/
    return o;
};

lc.utils.css2json = function (css) {
    var s = {};
    if (!css) return s;
    if (css instanceof CSSStyleDeclaration) {
        for (var i in css) {
            if ((css[i]).toLowerCase) {
                s[(css[i]).toLowerCase()] = (css[css[i]]);
            }
        }
    } else if (typeof css == "string") {
        css = css.split("; ");
        for (var i in css) {
            var l = css[i].toString().split(": ");
            s[l[0].toLowerCase()] = (l[1]);
        }
    }
    return s;
};


lc.utils.defineClass = function(parentClassDef, initializer){

    if(initializer === undefined){
        initializer = parentClassDef;
        parentClassDef = undefined;
    }

    var classDef = null;

    classDef = {
        methods: {},
        mixins: {},
        initializer: initializer,
        modalConstructor: function () {
            classDef.initializer.call(classDef.methods);
            classDef.initializer.call(this);
            this.mixins = classDef.mixins;
        }
    };

    if(parentClassDef === undefined) {
        classDef.create = function(){
            return new classDef.modalConstructor();
        };
    }else{
        classDef.create = function(){
            return $.extend(true, parentClassDef.create(), new classDef.modalConstructor());
        };
    }

    return classDef;

};

lc.utils.createMixed = function(classDef1, classDef2){
    return $.extend(true, classDef1.create(), classDef2.create());
}

lc.utils.loadScript = function(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);


};

lc.utils.setCookie = function(e,t,n){n=n||{};var r=n.expires;if(typeof r=="number"&&r)
{var i=new Date;i.setTime(i.getTime()+r*1e3);r=n.expires=i}if(r&&r.toUTCString){n.expires=r.toUTCString()}
    t=encodeURIComponent(t);var s=e+"="+t;for(var o in n){s+="; "+o;var u=n[o];if(u!==true){s+="="+u}}document.cookie=s};

lc.utils.getCookie = function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+
e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):undefined};

lc.utils.deleteCookie = function(e){setCookie(e,"",{expires:-1})};


lc.utils.randomInt = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

lc.utils.getRandomItem = function(ar){
    return ar[lc.utils.randomInt(0, ar.length-1)];
};

lc.utils.getRandomItemIndex = function(ar){
    return lc.utils.randomInt(0, ar.length-1);
}

lc.utils.generateUUID = function(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid;
};


lc.utils.isMsie = function () {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer, return version number
        return true;

    return false;
};


lc.utils.getField = function(o, path) {

    var fields = path.split(".");
    for(var i=0;i<fields.length;i++){
        o = o[fields[i]];
    }
    return o;

};

lc.utils.setField = function(o, path, value) {

    var fields = path.split(".");
    for(var i=0;i<fields.length-1;i++){
        o = o[fields[i]];
    }
    return o[fields[fields.length-1]] = value;

};

lc.utils.getServerUrl = function(path){
    return lc.serverEnv.params.protocol + "://" + lc.serverEnv.params.host + (path ? path : '');
};

lc.utils.checkIsJson = function(text){
    try{
        JSON.parse(text);
        return true;
    }catch(e){
        return false;
    }
};


lc.utils.jsonMergeRecursive = function(obj1, obj2) {

    for (var p in obj2) {
        try {
            //     Property in destination object set; update its value.
            if ( obj2[p].constructor==Object ) {
                obj1[p] = lc.utils.jsonMergeRecursive(obj1[p], obj2[p]);
            } else {
                obj1[p] = obj2[p];
            }
        } catch(e) {
          // Property in destination object not set; create it and set its value.
          obj1[p] = obj2[p];
        }
    }

    return obj1;
};

lc.utils.docReferrer = function(){
    var docref = encodeURI(document.referrer);
    if (docref.length > 110) {
        docref = docref.match(/:\/\/(.[^/]+)/)[1];
    }
    return docref;
};

lc.utils.setupMessagesListener = function(callback) {
    if (window.addEventListener) {
        window.addEventListener("message", callback, false);
    } else {
        window.attachEvent("onmessage", callback);
    }
};

lc.utils.validateEmail = function(email){
    //var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
};

lc.utils.validatePhone = function(phone){
    var re = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
    return re.test(phone);
};

lc.utils.amountDaysBetweenTwoDates = function(date1, date2){
    return Math.floor((Math.abs(date2.getTime() - date1.getTime())) / (1000 * 3600 * 24));
};

/*  localStorage  */
/* записываем сообщение в localStorage */
lc.utils.storeToLocalStorage = function(obj){
    try{
        if(Object.keys(obj).length > 0) {
            if (typeof(Storage) !== "undefined") {
                for(var item in obj){
                    localStorage.setItem(item, obj[item]);
                }
            }
        }
    }catch (e){}
};
/* удалить из localStorage */
lc.utils.removeFromLocalStorage = function(obj){
    try{
        if(typeof obj === "object"){
            if(Object.keys(obj).length > 0) {
                if (typeof(Storage) !== "undefined") {
                    for (var item in obj) {
                        localStorage.removeItem(obj[item]);
                    }
                }
            }
        }else if(typeof obj === "string"){
            if (localStorage.getItem(obj) != null){
                localStorage.removeItem(obj);
            }
        }
    }catch (e){}
};

lc.utils.gaTriggerGoal = function(goal){
    try {
        if (typeof(ga) !== 'undefined') {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Venyoo',
                eventAction: goal
            });
        } /*else {
            console.log('GA goal ' + goal + ' was not triggered');
        }*/
    }catch(e){
        console.log(e);
    }
};

lc.utils.metricsTriggerGoal = function(goal){
    try {
        var triggered = false;
        for (var prop in window) {
            if (window.hasOwnProperty(prop)) {
                if (prop.indexOf('yaCounter') != -1) {
                    var yacounter = window[prop];
                    yacounter.reachGoal(goal);
                    triggered = true;
                }
            }
        }
        /*
        if (!triggered) {
            console.log('Metrics goal ' + goal + ' was not triggered');
        }*/
    }catch(e){
        console.log(e);
    }
};

// Find param in url

lc.utils.getParam = function(a,b){b||(b=location.href),a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var c="[\\?&]"+a+"=([^&#]*)",d=new RegExp(c),e=d.exec(b);return null==e?null:e[1]}

lc.utils.placeCaretAtEnd = function(el) {
    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        try {
            sel.removeAllRanges();
        }catch(e){}
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
};

lc.utils.isIE = function(){
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

lc.utils.JSONSstringify = function(obj){
    if(window.Prototype){
        var _oldToJSON = Array.prototype.toJSON,
            obj_stringify;
        delete Array.prototype.toJSON;
        obj_stringify = JSON.stringify(obj);
        Array.prototype.toJSON = _oldToJSON;
        return obj_stringify;
    }else{
        return JSON.stringify(obj);
    }
};

            
    
    
    "object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(t){return 10>t?"0"+t:t}function quote(t){return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,f,u,p=gap,a=e[t];switch(a&&"object"==typeof a&&"function"==typeof a.toJSON&&(a=a.toJSON(t)),"function"==typeof rep&&(a=rep.call(e,t,a)),typeof a){case"string":return quote(a);case"number":return isFinite(a)?a+"":"null";case"boolean":case"null":return a+"";case"object":if(!a)return"null";if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(a)){for(f=a.length,r=0;f>r;r+=1)u[r]=str(r,a)||"null";return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+p+"]":"["+u.join(",")+"]",gap=p,o}if(rep&&"object"==typeof rep)for(f=rep.length,r=0;f>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],o=str(n,a),o&&u.push(quote(n)+(gap?": ":":")+o));else for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(o=str(n,a),o&&u.push(quote(n)+(gap?": ":":")+o));return o=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+p+"}":"{"+u.join(",")+"}",gap=p,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx,escapable,gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b"," ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(text,reviver){function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),void 0!==n?o[r]=n:delete o[r]);return reviver.call(t,e,o)}var j;if(text+="",cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(); 
    /**
 * Created by pasha on 21.01.2015.
 */
    /**
     * custom scrollbar
     * */
     /* == jquery mousewheel plugin == Version: 3.1.11, License: MIT License (MIT) */
    !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.11",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b)["offsetParent"in a.fn?"offsetParent":"parent"]();return c.length||(c=a("body")),parseInt(c.css("fontSize"),10)},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
    /* == malihu jquery custom scrollbar plugin == Version: 3.0.3, License: MIT License (MIT) */
    (function(b,a,c){(function(d){d(jQuery)}(function(j){var g="mCustomScrollbar",d="mCS",m=".mCustomScrollbar",h={setWidth:false,setHeight:false,setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:true,autoHideScrollbar:false,autoExpandScrollbar:false,alwaysShowScrollbar:0,snapAmount:null,snapOffset:0,mouseWheel:{enable:true,scrollAmount:"auto",axis:"y",preventDefault:false,deltaFactor:"auto",normalizeDelta:false,invert:false,disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{enable:false,scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:true,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,advanced:{autoExpandHorizontalScroll:false,autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:true,updateOnImageLoad:true,updateOnSelectorChange:false},theme:"light",callbacks:{onScrollStart:false,onScroll:false,onTotalScroll:false,onTotalScrollBack:false,whileScrolling:false,onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:true},live:false,liveSelector:null},l=9999,o={},f=function(p){if(o[p]){clearTimeout(o[p]);i._delete.call(null,o[p])}},k=(b.attachEvent&&!b.addEventListener)?1:0,n=false,e={init:function(q){var q=j.extend(true,{},h,q),p=i._selector.call(this);if(q.live){var s=q.liveSelector||this.selector||m,r=j(s);if(q.live==="off"){f(s);return}o[s]=setTimeout(function(){r.mCustomScrollbar(q);if(q.live==="once"&&r.length){f(s)}},500)}else{f(s)}q.setWidth=(q.set_width)?q.set_width:q.setWidth;q.setHeight=(q.set_height)?q.set_height:q.setHeight;q.axis=(q.horizontalScroll)?"x":i._findAxis.call(null,q.axis);q.scrollInertia=q.scrollInertia<17?17:q.scrollInertia;if(typeof q.mouseWheel!=="object"&&q.mouseWheel==true){q.mouseWheel={enable:true,scrollAmount:"auto",axis:"y",preventDefault:false,deltaFactor:"auto",normalizeDelta:false,invert:false}}q.mouseWheel.scrollAmount=!q.mouseWheelPixels?q.mouseWheel.scrollAmount:q.mouseWheelPixels;q.mouseWheel.normalizeDelta=!q.advanced.normalizeMouseWheelDelta?q.mouseWheel.normalizeDelta:q.advanced.normalizeMouseWheelDelta;q.scrollButtons.scrollType=i._findScrollButtonsType.call(null,q.scrollButtons.scrollType);i._theme.call(null,q);return j(p).each(function(){var u=j(this);if(!u.data(d)){u.data(d,{idx:++l,opt:q,scrollRatio:{y:null,x:null},overflowed:null,bindEvents:false,tweenRunning:false,sequential:{},langDir:u.css("direction"),cbOffsets:null,trigger:null});var w=u.data(d).opt,v=u.data("mcs-axis"),t=u.data("mcs-scrollbar-position"),x=u.data("mcs-theme");if(v){w.axis=v}if(t){w.scrollbarPosition=t}if(x){w.theme=x;i._theme.call(null,w)}i._pluginMarkup.call(this);e.update.call(null,u)}})},update:function(q){var p=q||i._selector.call(this);return j(p).each(function(){var t=j(this);if(t.data(d)){var v=t.data(d),u=v.opt,r=j("#mCSB_"+v.idx+"_container"),s=[j("#mCSB_"+v.idx+"_dragger_vertical"),j("#mCSB_"+v.idx+"_dragger_horizontal")];if(!r.length){return}if(v.tweenRunning){i._stop.call(null,t)}if(t.hasClass("mCS_disabled")){t.removeClass("mCS_disabled")}if(t.hasClass("mCS_destroyed")){t.removeClass("mCS_destroyed")}i._maxHeight.call(this);i._expandContentHorizontally.call(this);if(u.axis!=="y"&&!u.advanced.autoExpandHorizontalScroll){r.css("width",i._contentWidth(r.children()))}v.overflowed=i._overflowed.call(this);i._scrollbarVisibility.call(this);if(u.autoDraggerLength){i._setDraggerLength.call(this)}i._scrollRatio.call(this);i._bindEvents.call(this);var w=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];if(u.axis!=="x"){if(!v.overflowed[0]){i._resetContentPosition.call(this);if(u.axis==="y"){i._unbindEvents.call(this)}else{if(u.axis==="yx"&&v.overflowed[1]){i._scrollTo.call(this,t,w[1].toString(),{dir:"x",dur:0,overwrite:"none"})}}}else{if(s[0].height()>s[0].parent().height()){i._resetContentPosition.call(this)}else{i._scrollTo.call(this,t,w[0].toString(),{dir:"y",dur:0,overwrite:"none"})}}}if(u.axis!=="y"){if(!v.overflowed[1]){i._resetContentPosition.call(this);if(u.axis==="x"){i._unbindEvents.call(this)}else{if(u.axis==="yx"&&v.overflowed[0]){i._scrollTo.call(this,t,w[0].toString(),{dir:"y",dur:0,overwrite:"none"})}}}else{if(s[1].width()>s[1].parent().width()){i._resetContentPosition.call(this)}else{i._scrollTo.call(this,t,w[1].toString(),{dir:"x",dur:0,overwrite:"none"})}}}i._autoUpdate.call(this)}})},scrollTo:function(r,q){if(typeof r=="undefined"||r==null){return}var p=i._selector.call(this);return j(p).each(function(){var u=j(this);if(u.data(d)){var x=u.data(d),w=x.opt,v={trigger:"external",scrollInertia:w.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:false,callbacks:true,onStart:true,onUpdate:true,onComplete:true},s=j.extend(true,{},v,q),y=i._arr.call(this,r),t=s.scrollInertia<17?17:s.scrollInertia;y[0]=i._to.call(this,y[0],"y");y[1]=i._to.call(this,y[1],"x");if(s.moveDragger){y[0]*=x.scrollRatio.y;y[1]*=x.scrollRatio.x}s.dur=t;setTimeout(function(){if(y[0]!==null&&typeof y[0]!=="undefined"&&w.axis!=="x"&&x.overflowed[0]){s.dir="y";s.overwrite="all";i._scrollTo.call(this,u,y[0].toString(),s)}if(y[1]!==null&&typeof y[1]!=="undefined"&&w.axis!=="y"&&x.overflowed[1]){s.dir="x";s.overwrite="none";i._scrollTo.call(this,u,y[1].toString(),s)}},60)}})},stop:function(){var p=i._selector.call(this);return j(p).each(function(){var q=j(this);if(q.data(d)){i._stop.call(null,q)}})},disable:function(q){var p=i._selector.call(this);return j(p).each(function(){var r=j(this);if(r.data(d)){var t=r.data(d),s=t.opt;i._autoUpdate.call(this,"remove");i._unbindEvents.call(this);if(q){i._resetContentPosition.call(this)}i._scrollbarVisibility.call(this,true);r.addClass("mCS_disabled")}})},destroy:function(){var p=i._selector.call(this);return j(p).each(function(){var s=j(this);if(s.data(d)){var u=s.data(d),t=u.opt,q=j("#mCSB_"+u.idx),r=j("#mCSB_"+u.idx+"_container"),v=j(".mCSB_"+u.idx+"_scrollbar");if(t.live){f(p)}i._autoUpdate.call(this,"remove");i._unbindEvents.call(this);i._resetContentPosition.call(this);s.removeData(d);i._delete.call(null,this.mcs);v.remove();q.replaceWith(r.contents());s.removeClass(g+" _"+d+"_"+u.idx+" mCS-autoHide mCS-dir-rtl mCS_no_scrollbar mCS_disabled").addClass("mCS_destroyed")}})}},i={_selector:function(){return(typeof j(this)!=="object"||j(this).length<1)?m:this},_theme:function(s){var r=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],q=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],p=["minimal","minimal-dark"],u=["minimal","minimal-dark"],t=["minimal","minimal-dark"];s.autoDraggerLength=j.inArray(s.theme,r)>-1?false:s.autoDraggerLength;s.autoExpandScrollbar=j.inArray(s.theme,q)>-1?false:s.autoExpandScrollbar;s.scrollButtons.enable=j.inArray(s.theme,p)>-1?false:s.scrollButtons.enable;s.autoHideScrollbar=j.inArray(s.theme,u)>-1?true:s.autoHideScrollbar;s.scrollbarPosition=j.inArray(s.theme,t)>-1?"outside":s.scrollbarPosition},_findAxis:function(p){return(p==="yx"||p==="xy"||p==="auto")?"yx":(p==="x"||p==="horizontal")?"x":"y"},_findScrollButtonsType:function(p){return(p==="stepped"||p==="pixels"||p==="step"||p==="click")?"stepped":"stepless"},_pluginMarkup:function(){var y=j(this),x=y.data(d),r=x.opt,t=r.autoExpandScrollbar?" mCSB_scrollTools_onDrag_expand":"",B=["<div id='mCSB_"+x.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+x.idx+"_scrollbar mCS-"+r.theme+" mCSB_scrollTools_vertical"+t+"'><div class='mCSB_draggerContainer'><div id='mCSB_"+x.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+x.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+x.idx+"_scrollbar mCS-"+r.theme+" mCSB_scrollTools_horizontal"+t+"'><div class='mCSB_draggerContainer'><div id='mCSB_"+x.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],u=r.axis==="yx"?"mCSB_vertical_horizontal":r.axis==="x"?"mCSB_horizontal":"mCSB_vertical",w=r.axis==="yx"?B[0]+B[1]:r.axis==="x"?B[1]:B[0],v=r.axis==="yx"?"<div id='mCSB_"+x.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",s=r.autoHideScrollbar?" mCS-autoHide":"",p=(r.axis!=="x"&&x.langDir==="rtl")?" mCS-dir-rtl":"";if(r.setWidth){y.css("width",r.setWidth)}if(r.setHeight){y.css("height",r.setHeight)}r.setLeft=(r.axis!=="y"&&x.langDir==="rtl")?"989999px":r.setLeft;y.addClass(g+" _"+d+"_"+x.idx+s+p).wrapInner("<div id='mCSB_"+x.idx+"' class='mCustomScrollBox mCS-"+r.theme+" "+u+"'><div id='mCSB_"+x.idx+"_container' class='mCSB_container' style='position:relative; top:"+r.setTop+"; left:"+r.setLeft+";' dir="+x.langDir+" /></div>");var q=j("#mCSB_"+x.idx),z=j("#mCSB_"+x.idx+"_container");if(r.axis!=="y"&&!r.advanced.autoExpandHorizontalScroll){z.css("width",i._contentWidth(z.children()))}if(r.scrollbarPosition==="outside"){if(y.css("position")==="static"){y.css("position","relative")}y.css("overflow","visible");q.addClass("mCSB_outside").after(w)}else{q.addClass("mCSB_inside").append(w);z.wrap(v)}i._scrollButtons.call(this);var A=[j("#mCSB_"+x.idx+"_dragger_vertical"),j("#mCSB_"+x.idx+"_dragger_horizontal")];A[0].css("min-height",A[0].height());A[1].css("min-width",A[1].width())},_contentWidth:function(p){return Math.max.apply(Math,p.map(function(){return j(this).outerWidth(true)}).get())},_expandContentHorizontally:function(){var q=j(this),s=q.data(d),r=s.opt,p=j("#mCSB_"+s.idx+"_container");if(r.advanced.autoExpandHorizontalScroll&&r.axis!=="y"){p.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:(Math.ceil(p[0].getBoundingClientRect().right+0.4)-Math.floor(p[0].getBoundingClientRect().left)),position:"relative"}).unwrap()}},_scrollButtons:function(){var s=j(this),u=s.data(d),t=u.opt,q=j(".mCSB_"+u.idx+"_scrollbar:first"),r=["<a href='#' class='mCSB_buttonUp' oncontextmenu='return false;' />","<a href='#' class='mCSB_buttonDown' oncontextmenu='return false;' />","<a href='#' class='mCSB_buttonLeft' oncontextmenu='return false;' />","<a href='#' class='mCSB_buttonRight' oncontextmenu='return false;' />"],p=[(t.axis==="x"?r[2]:r[0]),(t.axis==="x"?r[3]:r[1]),r[2],r[3]];if(t.scrollButtons.enable){q.prepend(p[0]).append(p[1]).next(".mCSB_scrollTools").prepend(p[2]).append(p[3])}},_maxHeight:function(){var t=j(this),w=t.data(d),v=w.opt,r=j("#mCSB_"+w.idx),q=t.css("max-height"),s=q.indexOf("%")!==-1,p=t.css("box-sizing");if(q!=="none"){var u=s?t.parent().height()*parseInt(q)/100:parseInt(q);if(p==="border-box"){u-=((t.innerHeight()-t.height())+(t.outerHeight()-t.innerHeight()))}r.css("max-height",Math.round(u))}},_setDraggerLength:function(){var u=j(this),s=u.data(d),p=j("#mCSB_"+s.idx),v=j("#mCSB_"+s.idx+"_container"),y=[j("#mCSB_"+s.idx+"_dragger_vertical"),j("#mCSB_"+s.idx+"_dragger_horizontal")],t=[p.height()/v.outerHeight(false),p.width()/v.outerWidth(false)],q=[parseInt(y[0].css("min-height")),Math.round(t[0]*y[0].parent().height()),parseInt(y[1].css("min-width")),Math.round(t[1]*y[1].parent().width())],r=k&&(q[1]<q[0])?q[0]:q[1],x=k&&(q[3]<q[2])?q[2]:q[3];y[0].css({height:r,"max-height":(y[0].parent().height()-10)}).find(".mCSB_dragger_bar").css({"line-height":q[0]+"px"});y[1].css({width:x,"max-width":(y[1].parent().width()-10)})},_scrollRatio:function(){var t=j(this),v=t.data(d),q=j("#mCSB_"+v.idx),r=j("#mCSB_"+v.idx+"_container"),s=[j("#mCSB_"+v.idx+"_dragger_vertical"),j("#mCSB_"+v.idx+"_dragger_horizontal")],u=[r.outerHeight(false)-q.height(),r.outerWidth(false)-q.width()],p=[u[0]/(s[0].parent().height()-s[0].height()),u[1]/(s[1].parent().width()-s[1].width())];v.scrollRatio={y:p[0],x:p[1]}},_onDragClasses:function(r,t,q){var s=q?"mCSB_dragger_onDrag_expanded":"",p=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag"],u=r.closest(".mCSB_scrollTools");if(t==="active"){r.toggleClass(p[0]+" "+s);u.toggleClass(p[1]);r[0]._draggable=r[0]._draggable?0:1}else{if(!r[0]._draggable){if(t==="hide"){r.removeClass(p[0]);u.removeClass(p[1])}else{r.addClass(p[0]);u.addClass(p[1])}}}},_overflowed:function(){var t=j(this),u=t.data(d),q=j("#mCSB_"+u.idx),s=j("#mCSB_"+u.idx+"_container"),r=u.overflowed==null?s.height():s.outerHeight(false),p=u.overflowed==null?s.width():s.outerWidth(false);return[r>q.height(),p>q.width()]},_resetContentPosition:function(){var t=j(this),v=t.data(d),u=v.opt,q=j("#mCSB_"+v.idx),r=j("#mCSB_"+v.idx+"_container"),s=[j("#mCSB_"+v.idx+"_dragger_vertical"),j("#mCSB_"+v.idx+"_dragger_horizontal")];i._stop(t);if((u.axis!=="x"&&!v.overflowed[0])||(u.axis==="y"&&v.overflowed[0])){s[0].add(r).css("top",0)}if((u.axis!=="y"&&!v.overflowed[1])||(u.axis==="x"&&v.overflowed[1])){var p=dx=0;if(v.langDir==="rtl"){p=q.width()-r.outerWidth(false);dx=Math.abs(p/v.scrollRatio.x)}r.css("left",p);s[1].css("left",dx)}},_bindEvents:function(){var r=j(this),t=r.data(d),s=t.opt;if(!t.bindEvents){i._draggable.call(this);if(s.contentTouchScroll){i._contentDraggable.call(this)}if(s.mouseWheel.enable){function q(){p=setTimeout(function(){if(!j.event.special.mousewheel){q()}else{clearTimeout(p);i._mousewheel.call(r[0])}},1000)}var p;q()}i._draggerRail.call(this);i._wrapperScroll.call(this);if(s.advanced.autoScrollOnFocus){i._focus.call(this)}if(s.scrollButtons.enable){i._buttons.call(this)}if(s.keyboard.enable){i._keyboard.call(this)}t.bindEvents=true}},_unbindEvents:function(){var s=j(this),t=s.data(d),p=d+"_"+t.idx,u=".mCSB_"+t.idx+"_scrollbar",r=j("#mCSB_"+t.idx+",#mCSB_"+t.idx+"_container,#mCSB_"+t.idx+"_container_wrapper,"+u+" .mCSB_draggerContainer,#mCSB_"+t.idx+"_dragger_vertical,#mCSB_"+t.idx+"_dragger_horizontal,"+u+">a"),q=j("#mCSB_"+t.idx+"_container");if(t.bindEvents){j(a).unbind("."+p);r.each(function(){j(this).unbind("."+p)});clearTimeout(s[0]._focusTimeout);i._delete.call(null,s[0]._focusTimeout);clearTimeout(t.sequential.step);i._delete.call(null,t.sequential.step);clearTimeout(q[0].onCompleteTimeout);i._delete.call(null,q[0].onCompleteTimeout);t.bindEvents=false}},_scrollbarVisibility:function(q){var t=j(this),v=t.data(d),u=v.opt,p=j("#mCSB_"+v.idx+"_container_wrapper"),r=p.length?p:j("#mCSB_"+v.idx+"_container"),w=[j("#mCSB_"+v.idx+"_scrollbar_vertical"),j("#mCSB_"+v.idx+"_scrollbar_horizontal")],s=[w[0].find(".mCSB_dragger"),w[1].find(".mCSB_dragger")];if(u.axis!=="x"){if(v.overflowed[0]&&!q){w[0].add(s[0]).add(w[0].children("a")).css("display","block");r.removeClass("mCS_no_scrollbar_y mCS_y_hidden")}else{if(u.alwaysShowScrollbar){if(u.alwaysShowScrollbar!==2){s[0].add(w[0].children("a")).css("display","none")}r.removeClass("mCS_y_hidden")}else{w[0].css("display","none");r.addClass("mCS_y_hidden")}r.addClass("mCS_no_scrollbar_y")}}if(u.axis!=="y"){if(v.overflowed[1]&&!q){w[1].add(s[1]).add(w[1].children("a")).css("display","block");r.removeClass("mCS_no_scrollbar_x mCS_x_hidden")}else{if(u.alwaysShowScrollbar){if(u.alwaysShowScrollbar!==2){s[1].add(w[1].children("a")).css("display","none")}r.removeClass("mCS_x_hidden")}else{w[1].css("display","none");r.addClass("mCS_x_hidden")}r.addClass("mCS_no_scrollbar_x")}}if(!v.overflowed[0]&&!v.overflowed[1]){t.addClass("mCS_no_scrollbar")}else{t.removeClass("mCS_no_scrollbar")}},_coordinates:function(q){var p=q.type;switch(p){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return[q.originalEvent.pageY,q.originalEvent.pageX];break;case"touchstart":case"touchmove":case"touchend":var r=q.originalEvent.touches[0]||q.originalEvent.changedTouches[0];return[r.pageY,r.pageX];break;default:return[q.pageY,q.pageX]}},_draggable:function(){var u=j(this),s=u.data(d),p=s.opt,r=d+"_"+s.idx,t=["mCSB_"+s.idx+"_dragger_vertical","mCSB_"+s.idx+"_dragger_horizontal"],v=j("#mCSB_"+s.idx+"_container"),w=j("#"+t[0]+",#"+t[1]),A,y,z;w.bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r,function(E){E.stopImmediatePropagation();E.preventDefault();if(!i._mouseBtnLeft(E)){return}n=true;if(k){a.onselectstart=function(){return false}}x(false);i._stop(u);A=j(this);var F=A.offset(),G=i._coordinates(E)[0]-F.top,B=i._coordinates(E)[1]-F.left,D=A.height()+F.top,C=A.width()+F.left;if(G<D&&G>0&&B<C&&B>0){y=G;z=B}i._onDragClasses(A,"active",p.autoExpandScrollbar)}).bind("touchmove."+r,function(C){C.stopImmediatePropagation();C.preventDefault();var D=A.offset(),E=i._coordinates(C)[0]-D.top,B=i._coordinates(C)[1]-D.left;q(y,z,E,B)});j(a).bind("mousemove."+r+" pointermove."+r+" MSPointerMove."+r,function(C){if(A){var D=A.offset(),E=i._coordinates(C)[0]-D.top,B=i._coordinates(C)[1]-D.left;if(y===E){return}q(y,z,E,B)}}).add(w).bind("mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r,function(B){if(A){i._onDragClasses(A,"active",p.autoExpandScrollbar);A=null}n=false;if(k){a.onselectstart=null}x(true)});function x(B){var C=v.find("iframe");if(!C.length){return}var D=!B?"none":"auto";C.css("pointer-events",D)}function q(D,E,G,B){v[0].idleTimer=p.scrollInertia<233?250:0;if(A.attr("id")===t[1]){var C="x",F=((A[0].offsetLeft-E)+B)*s.scrollRatio.x}else{var C="y",F=((A[0].offsetTop-D)+G)*s.scrollRatio.y}i._scrollTo(u,F.toString(),{dir:C,drag:true})}},_contentDraggable:function(){var y=j(this),K=y.data(d),I=K.opt,F=d+"_"+K.idx,v=j("#mCSB_"+K.idx),z=j("#mCSB_"+K.idx+"_container"),w=[j("#mCSB_"+K.idx+"_dragger_vertical"),j("#mCSB_"+K.idx+"_dragger_horizontal")],E,G,L,M,C=[],D=[],H,A,u,t,J,x,r=0,q,s=I.axis==="yx"?"none":"all";z.bind("touchstart."+F+" pointerdown."+F+" MSPointerDown."+F,function(N){if(!i._pointerTouch(N)||n){return}var O=z.offset();E=i._coordinates(N)[0]-O.top;G=i._coordinates(N)[1]-O.left}).bind("touchmove."+F+" pointermove."+F+" MSPointerMove."+F,function(Q){if(!i._pointerTouch(Q)||n){return}Q.stopImmediatePropagation();A=i._getTime();var P=v.offset(),S=i._coordinates(Q)[0]-P.top,U=i._coordinates(Q)[1]-P.left,R="mcsLinearOut";C.push(S);D.push(U);if(K.overflowed[0]){var O=w[0].parent().height()-w[0].height(),T=((E-S)>0&&(S-E)>-(O*K.scrollRatio.y))}if(K.overflowed[1]){var N=w[1].parent().width()-w[1].width(),V=((G-U)>0&&(U-G)>-(N*K.scrollRatio.x))}if(T||V){Q.preventDefault()}x=I.axis==="yx"?[(E-S),(G-U)]:I.axis==="x"?[null,(G-U)]:[(E-S),null];z[0].idleTimer=250;if(K.overflowed[0]){B(x[0],r,R,"y","all",true)}if(K.overflowed[1]){B(x[1],r,R,"x",s,true)}});v.bind("touchstart."+F+" pointerdown."+F+" MSPointerDown."+F,function(N){if(!i._pointerTouch(N)||n){return}N.stopImmediatePropagation();i._stop(y);H=i._getTime();var O=v.offset();L=i._coordinates(N)[0]-O.top;M=i._coordinates(N)[1]-O.left;C=[];D=[]}).bind("touchend."+F+" pointerup."+F+" MSPointerUp."+F,function(P){if(!i._pointerTouch(P)||n){return}P.stopImmediatePropagation();u=i._getTime();var N=v.offset(),T=i._coordinates(P)[0]-N.top,V=i._coordinates(P)[1]-N.left;if((u-A)>30){return}J=1000/(u-H);var Q="mcsEaseOut",R=J<2.5,W=R?[C[C.length-2],D[D.length-2]]:[0,0];t=R?[(T-W[0]),(V-W[1])]:[T-L,V-M];var O=[Math.abs(t[0]),Math.abs(t[1])];J=R?[Math.abs(t[0]/4),Math.abs(t[1]/4)]:[J,J];var U=[Math.abs(z[0].offsetTop)-(t[0]*p((O[0]/J[0]),J[0])),Math.abs(z[0].offsetLeft)-(t[1]*p((O[1]/J[1]),J[1]))];x=I.axis==="yx"?[U[0],U[1]]:I.axis==="x"?[null,U[1]]:[U[0],null];q=[(O[0]*4)+I.scrollInertia,(O[1]*4)+I.scrollInertia];var S=parseInt(I.contentTouchScroll)||0;x[0]=O[0]>S?x[0]:0;x[1]=O[1]>S?x[1]:0;if(K.overflowed[0]){B(x[0],q[0],Q,"y",s,false)}if(K.overflowed[1]){B(x[1],q[1],Q,"x",s,false)}});function p(P,N){var O=[N*1.5,N*2,N/1.5,N/2];if(P>90){return N>4?O[0]:O[3]}else{if(P>60){return N>3?O[3]:O[2]}else{if(P>30){return N>8?O[1]:N>6?O[0]:N>4?N:O[2]}else{return N>8?N:O[3]}}}}function B(P,R,S,O,N,Q){if(!P){return}i._scrollTo(y,P.toString(),{dur:R,scrollEasing:S,dir:O,overwrite:N,drag:Q})}},_mousewheel:function(){var s=j(this),u=s.data(d);if(u){var t=u.opt,q=d+"_"+u.idx,p=j("#mCSB_"+u.idx),r=[j("#mCSB_"+u.idx+"_dragger_vertical"),j("#mCSB_"+u.idx+"_dragger_horizontal")];p.bind("mousewheel."+q,function(z,D){i._stop(s);if(i._disableMousewheel(s,z.target)){return}var B=t.mouseWheel.deltaFactor!=="auto"?parseInt(t.mouseWheel.deltaFactor):(k&&z.deltaFactor<100)?100:z.deltaFactor<40?40:z.deltaFactor||100;if(t.axis==="x"||t.mouseWheel.axis==="x"){var w="x",C=[Math.round(B*u.scrollRatio.x),parseInt(t.mouseWheel.scrollAmount)],y=t.mouseWheel.scrollAmount!=="auto"?C[1]:C[0]>=p.width()?p.width()*0.9:C[0],E=Math.abs(j("#mCSB_"+u.idx+"_container")[0].offsetLeft),A=r[1][0].offsetLeft,x=r[1].parent().width()-r[1].width(),v=z.deltaX||z.deltaY||D}else{var w="y",C=[Math.round(B*u.scrollRatio.y),parseInt(t.mouseWheel.scrollAmount)],y=t.mouseWheel.scrollAmount!=="auto"?C[1]:C[0]>=p.height()?p.height()*0.9:C[0],E=Math.abs(j("#mCSB_"+u.idx+"_container")[0].offsetTop),A=r[0][0].offsetTop,x=r[0].parent().height()-r[0].height(),v=z.deltaY||D}if((w==="y"&&!u.overflowed[0])||(w==="x"&&!u.overflowed[1])){return}if(t.mouseWheel.invert){v=-v}if(t.mouseWheel.normalizeDelta){v=v<0?-1:1}if((v>0&&A!==0)||(v<0&&A!==x)||t.mouseWheel.preventDefault){z.stopImmediatePropagation();z.preventDefault()}i._scrollTo(s,(E-(v*y)).toString(),{dir:w})})}},_disableMousewheel:function(r,t){var p=t.nodeName.toLowerCase(),q=r.data(d).opt.mouseWheel.disableOver,s=["select","textarea"];return j.inArray(p,q)>-1&&!(j.inArray(p,s)>-1&&!j(t).is(":focus"))},_draggerRail:function(){var s=j(this),t=s.data(d),q=d+"_"+t.idx,r=j("#mCSB_"+t.idx+"_container"),u=r.parent(),p=j(".mCSB_"+t.idx+"_scrollbar .mCSB_draggerContainer");p.bind("touchstart."+q+" pointerdown."+q+" MSPointerDown."+q,function(v){n=true}).bind("touchend."+q+" pointerup."+q+" MSPointerUp."+q,function(v){n=false}).bind("click."+q,function(z){if(j(z.target).hasClass("mCSB_draggerContainer")||j(z.target).hasClass("mCSB_draggerRail")){i._stop(s);var w=j(this),y=w.find(".mCSB_dragger");if(w.parent(".mCSB_scrollTools_horizontal").length>0){if(!t.overflowed[1]){return}var v="x",x=z.pageX>y.offset().left?-1:1,A=Math.abs(r[0].offsetLeft)-(x*(u.width()*0.9))}else{if(!t.overflowed[0]){return}var v="y",x=z.pageY>y.offset().top?-1:1,A=Math.abs(r[0].offsetTop)-(x*(u.height()*0.9))}i._scrollTo(s,A.toString(),{dir:v,scrollEasing:"mcsEaseInOut"})}})},_focus:function(){var r=j(this),t=r.data(d),s=t.opt,p=d+"_"+t.idx,q=j("#mCSB_"+t.idx+"_container"),u=q.parent();q.bind("focusin."+p,function(x){var w=j(a.activeElement),y=q.find(".mCustomScrollBox").length,v=0;if(!w.is(s.advanced.autoScrollOnFocus)){return}i._stop(r);clearTimeout(r[0]._focusTimeout);r[0]._focusTimer=y?(v+17)*y:0;r[0]._focusTimeout=setTimeout(function(){var C=[w.offset().top-q.offset().top,w.offset().left-q.offset().left],B=[q[0].offsetTop,q[0].offsetLeft],z=[(B[0]+C[0]>=0&&B[0]+C[0]<u.height()-w.outerHeight(false)),(B[1]+C[1]>=0&&B[0]+C[1]<u.width()-w.outerWidth(false))],A=(s.axis==="yx"&&!z[0]&&!z[1])?"none":"all";if(s.axis!=="x"&&!z[0]){i._scrollTo(r,C[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:A,dur:v})}if(s.axis!=="y"&&!z[1]){i._scrollTo(r,C[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:A,dur:v})}},r[0]._focusTimer)})},_wrapperScroll:function(){var q=j(this),r=q.data(d),p=d+"_"+r.idx,s=j("#mCSB_"+r.idx+"_container").parent();s.bind("scroll."+p,function(t){s.scrollTop(0).scrollLeft(0)})},_buttons:function(){var u=j(this),w=u.data(d),v=w.opt,p=w.sequential,r=d+"_"+w.idx,t=j("#mCSB_"+w.idx+"_container"),s=".mCSB_"+w.idx+"_scrollbar",q=j(s+">a");q.bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(z){z.preventDefault();if(!i._mouseBtnLeft(z)){return}var y=j(this).attr("class");p.type=v.scrollButtons.scrollType;switch(z.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if(p.type==="stepped"){return}n=true;w.tweenRunning=false;x("on",y);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if(p.type==="stepped"){return}n=false;if(p.dir){x("off",y)}break;case"click":if(p.type!=="stepped"||w.tweenRunning){return}x("on",y);break}function x(A,B){p.scrollAmount=v.snapAmount||v.scrollButtons.scrollAmount;i._sequentialScroll.call(this,u,A,B)}})},_keyboard:function(){var u=j(this),t=u.data(d),q=t.opt,x=t.sequential,s=d+"_"+t.idx,r=j("#mCSB_"+t.idx),w=j("#mCSB_"+t.idx+"_container"),p=w.parent(),v="input,textarea,select,datalist,keygen,[contenteditable='true']";r.attr("tabindex","0").bind("blur."+s+" keydown."+s+" keyup."+s,function(D){switch(D.type){case"blur":if(t.tweenRunning&&x.dir){y("off",null)}break;case"keydown":case"keyup":var A=D.keyCode?D.keyCode:D.which,B="on";if((q.axis!=="x"&&(A===38||A===40))||(q.axis!=="y"&&(A===37||A===39))){if(((A===38||A===40)&&!t.overflowed[0])||((A===37||A===39)&&!t.overflowed[1])){return}if(D.type==="keyup"){B="off"}if(!j(a.activeElement).is(v)){D.preventDefault();D.stopImmediatePropagation();y(B,A)}}else{if(A===33||A===34){if(t.overflowed[0]||t.overflowed[1]){D.preventDefault();D.stopImmediatePropagation()}if(D.type==="keyup"){i._stop(u);var C=A===34?-1:1;if(q.axis==="x"||(q.axis==="yx"&&t.overflowed[1]&&!t.overflowed[0])){var z="x",E=Math.abs(w[0].offsetLeft)-(C*(p.width()*0.9))}else{var z="y",E=Math.abs(w[0].offsetTop)-(C*(p.height()*0.9))}i._scrollTo(u,E.toString(),{dir:z,scrollEasing:"mcsEaseInOut"})}}else{if(A===35||A===36){if(!j(a.activeElement).is(v)){if(t.overflowed[0]||t.overflowed[1]){D.preventDefault();D.stopImmediatePropagation()}if(D.type==="keyup"){if(q.axis==="x"||(q.axis==="yx"&&t.overflowed[1]&&!t.overflowed[0])){var z="x",E=A===35?Math.abs(p.width()-w.outerWidth(false)):0}else{var z="y",E=A===35?Math.abs(p.height()-w.outerHeight(false)):0}i._scrollTo(u,E.toString(),{dir:z,scrollEasing:"mcsEaseInOut"})}}}}}break}function y(F,G){x.type=q.keyboard.scrollType;x.scrollAmount=q.snapAmount||q.keyboard.scrollAmount;if(x.type==="stepped"&&t.tweenRunning){return}i._sequentialScroll.call(this,u,F,G)}})},_sequentialScroll:function(r,u,s){var w=r.data(d),q=w.opt,y=w.sequential,x=j("#mCSB_"+w.idx+"_container"),p=y.type==="stepped"?true:false;switch(u){case"on":y.dir=[(s==="mCSB_buttonRight"||s==="mCSB_buttonLeft"||s===39||s===37?"x":"y"),(s==="mCSB_buttonUp"||s==="mCSB_buttonLeft"||s===38||s===37?-1:1)];i._stop(r);if(i._isNumeric(s)&&y.type==="stepped"){return}t(p);break;case"off":v();if(p||(w.tweenRunning&&y.dir)){t(true)}break}function t(z){var F=y.type!=="stepped",J=!z?1000/60:F?q.scrollInertia/1.5:q.scrollInertia,B=!z?2.5:F?7.5:40,I=[Math.abs(x[0].offsetTop),Math.abs(x[0].offsetLeft)],E=[w.scrollRatio.y>10?10:w.scrollRatio.y,w.scrollRatio.x>10?10:w.scrollRatio.x],C=y.dir[0]==="x"?I[1]+(y.dir[1]*(E[1]*B)):I[0]+(y.dir[1]*(E[0]*B)),H=y.dir[0]==="x"?I[1]+(y.dir[1]*parseInt(y.scrollAmount)):I[0]+(y.dir[1]*parseInt(y.scrollAmount)),G=y.scrollAmount!=="auto"?H:C,D=!z?"mcsLinear":F?"mcsLinearOut":"mcsEaseInOut",A=!z?false:true;if(z&&J<17){G=y.dir[0]==="x"?I[1]:I[0]}i._scrollTo(r,G.toString(),{dir:y.dir[0],scrollEasing:D,dur:J,onComplete:A});if(z){y.dir=false;return}clearTimeout(y.step);y.step=setTimeout(function(){t()},J)}function v(){clearTimeout(y.step);i._stop(r)}},_arr:function(r){var q=j(this).data(d).opt,p=[];if(typeof r==="function"){r=r()}if(!(r instanceof Array)){p[0]=r.y?r.y:r.x||q.axis==="x"?null:r;p[1]=r.x?r.x:r.y||q.axis==="y"?null:r}else{p=r.length>1?[r[0],r[1]]:q.axis==="x"?[null,r[0]]:[r[0],null]}if(typeof p[0]==="function"){p[0]=p[0]()}if(typeof p[1]==="function"){p[1]=p[1]()}return p},_to:function(v,w){if(v==null||typeof v=="undefined"){return}var C=j(this),B=C.data(d),u=B.opt,D=j("#mCSB_"+B.idx+"_container"),r=D.parent(),F=typeof v;if(!w){w=u.axis==="x"?"x":"y"}var q=w==="x"?D.outerWidth(false):D.outerHeight(false),x=w==="x"?D.offset().left:D.offset().top,E=w==="x"?D[0].offsetLeft:D[0].offsetTop,z=w==="x"?"left":"top";switch(F){case"function":return v();break;case"object":if(v.nodeType){var A=w==="x"?j(v).offset().left:j(v).offset().top}else{if(v.jquery){if(!v.length){return}var A=w==="x"?v.offset().left:v.offset().top}}return A-x;break;case"string":case"number":if(i._isNumeric.call(null,v)){return Math.abs(v)}else{if(v.indexOf("%")!==-1){return Math.abs(q*parseInt(v)/100)}else{if(v.indexOf("-=")!==-1){return Math.abs(E-parseInt(v.split("-=")[1]))}else{if(v.indexOf("+=")!==-1){var s=(E+parseInt(v.split("+=")[1]));return s>=0?0:Math.abs(s)}else{if(v.indexOf("px")!==-1&&i._isNumeric.call(null,v.split("px")[0])){return Math.abs(v.split("px")[0])}else{if(v==="top"||v==="left"){return 0}else{if(v==="bottom"){return Math.abs(r.height()-D.outerHeight(false))}else{if(v==="right"){return Math.abs(r.width()-D.outerWidth(false))}else{if(v==="first"||v==="last"){var y=D.find(":"+v),A=w==="x"?j(y).offset().left:j(y).offset().top;return A-x}else{if(j(v).length){var A=w==="x"?j(v).offset().left:j(v).offset().top;return A-x}else{D.css(z,v);e.update.call(null,C[0]);return}}}}}}}}}}break}},_autoUpdate:function(q){var t=j(this),F=t.data(d),z=F.opt,v=j("#mCSB_"+F.idx+"_container");if(q){clearTimeout(v[0].autoUpdate);i._delete.call(null,v[0].autoUpdate);return}var s=v.parent(),p=[j("#mCSB_"+F.idx+"_scrollbar_vertical"),j("#mCSB_"+F.idx+"_scrollbar_horizontal")],D=function(){return[p[0].is(":visible")?p[0].outerHeight(true):0,p[1].is(":visible")?p[1].outerWidth(true):0]},E=y(),x,u=[v.outerHeight(false),v.outerWidth(false),s.height(),s.width(),D()[0],D()[1]],H,B=G(),w;C();function C(){clearTimeout(v[0].autoUpdate);v[0].autoUpdate=setTimeout(function(){if(z.advanced.updateOnSelectorChange){x=y();if(x!==E){r();E=x;return}}if(z.advanced.updateOnContentResize){H=[v.outerHeight(false),v.outerWidth(false),s.height(),s.width(),D()[0],D()[1]];if(H[0]!==u[0]||H[1]!==u[1]||H[2]!==u[2]||H[3]!==u[3]||H[4]!==u[4]||H[5]!==u[5]){r();u=H}}if(z.advanced.updateOnImageLoad){w=G();if(w!==B){v.find("img").each(function(){A(this.src)});B=w}}if(z.advanced.updateOnSelectorChange||z.advanced.updateOnContentResize||z.advanced.updateOnImageLoad){C()}},60)}function G(){var I=0;if(z.advanced.updateOnImageLoad){I=v.find("img").length}return I}function A(L){var I=new Image();function K(M,N){return function(){return N.apply(M,arguments)}}function J(){this.onload=null;r()}I.onload=K(I,J);I.src=L}function y(){if(z.advanced.updateOnSelectorChange===true){z.advanced.updateOnSelectorChange="*"}var I=0,J=v.find(z.advanced.updateOnSelectorChange);if(z.advanced.updateOnSelectorChange&&J.length>0){J.each(function(){I+=j(this).height()+j(this).width()})}return I}function r(){clearTimeout(v[0].autoUpdate);e.update.call(null,t[0])}},_snapAmount:function(r,p,q){return(Math.round(r/p)*p-q)},_stop:function(p){var r=p.data(d),q=j("#mCSB_"+r.idx+"_container,#mCSB_"+r.idx+"_container_wrapper,#mCSB_"+r.idx+"_dragger_vertical,#mCSB_"+r.idx+"_dragger_horizontal");q.each(function(){i._stopTween.call(this)})},_scrollTo:function(q,s,u){var I=q.data(d),E=I.opt,D={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:false,dur:E.scrollInertia,overwrite:"all",callbacks:true,onStart:true,onUpdate:true,onComplete:true},u=j.extend(D,u),G=[u.dur,(u.drag?0:u.dur)],v=j("#mCSB_"+I.idx),B=j("#mCSB_"+I.idx+"_container"),K=E.callbacks.onTotalScrollOffset?i._arr.call(q,E.callbacks.onTotalScrollOffset):[0,0],p=E.callbacks.onTotalScrollBackOffset?i._arr.call(q,E.callbacks.onTotalScrollBackOffset):[0,0];I.trigger=u.trigger;if(E.snapAmount){s=i._snapAmount(s,E.snapAmount,E.snapOffset)}switch(u.dir){case"x":var x=j("#mCSB_"+I.idx+"_dragger_horizontal"),z="left",C=B[0].offsetLeft,H=[v.width()-B.outerWidth(false),x.parent().width()-x.width()],r=[s,(s/I.scrollRatio.x)],L=K[1],J=p[1],A=L>0?L/I.scrollRatio.x:0,w=J>0?J/I.scrollRatio.x:0;break;case"y":var x=j("#mCSB_"+I.idx+"_dragger_vertical"),z="top",C=B[0].offsetTop,H=[v.height()-B.outerHeight(false),x.parent().height()-x.height()],r=[s,(s/I.scrollRatio.y)],L=K[0],J=p[0],A=L>0?L/I.scrollRatio.y:0,w=J>0?J/I.scrollRatio.y:0;break}if(r[1]<0){r=[0,0]}else{if(r[1]>=H[1]){r=[H[0],H[1]]}else{r[0]=-r[0]}}clearTimeout(B[0].onCompleteTimeout);if(!I.tweenRunning&&((C===0&&r[0]>=0)||(C===H[0]&&r[0]<=H[0]))){return}i._tweenTo.call(null,x[0],z,Math.round(r[1]),G[1],u.scrollEasing);i._tweenTo.call(null,B[0],z,Math.round(r[0]),G[0],u.scrollEasing,u.overwrite,{onStart:function(){if(u.callbacks&&u.onStart&&!I.tweenRunning){if(t("onScrollStart")){F();E.callbacks.onScrollStart.call(q[0])}I.tweenRunning=true;i._onDragClasses(x);I.cbOffsets=y()}},onUpdate:function(){if(u.callbacks&&u.onUpdate){if(t("whileScrolling")){F();E.callbacks.whileScrolling.call(q[0])}}},onComplete:function(){if(u.callbacks&&u.onComplete){if(E.axis==="yx"){clearTimeout(B[0].onCompleteTimeout)}var M=B[0].idleTimer||0;B[0].onCompleteTimeout=setTimeout(function(){if(t("onScroll")){F();E.callbacks.onScroll.call(q[0])}if(t("onTotalScroll")&&r[1]>=H[1]-A&&I.cbOffsets[0]){F();E.callbacks.onTotalScroll.call(q[0])}if(t("onTotalScrollBack")&&r[1]<=w&&I.cbOffsets[1]){F();E.callbacks.onTotalScrollBack.call(q[0])}I.tweenRunning=false;B[0].idleTimer=0;i._onDragClasses(x,"hide")},M)}}});function t(M){return I&&E.callbacks[M]&&typeof E.callbacks[M]==="function"}function y(){return[E.callbacks.alwaysTriggerOffsets||C>=H[0]+L,E.callbacks.alwaysTriggerOffsets||C<=-J]}function F(){var O=[B[0].offsetTop,B[0].offsetLeft],P=[x[0].offsetTop,x[0].offsetLeft],M=[B.outerHeight(false),B.outerWidth(false)],N=[v.height(),v.width()];q[0].mcs={content:B,top:O[0],left:O[1],draggerTop:P[0],draggerLeft:P[1],topPct:Math.round((100*Math.abs(O[0]))/(Math.abs(M[0])-N[0])),leftPct:Math.round((100*Math.abs(O[1]))/(Math.abs(M[1])-N[1])),direction:u.dir}}},_tweenTo:function(r,u,s,q,A,t,J){var J=J||{},G=J.onStart||function(){},B=J.onUpdate||function(){},H=J.onComplete||function(){},z=i._getTime(),x,v=0,D=r.offsetTop,E=r.style;if(u==="left"){D=r.offsetLeft}var y=s-D;r._mcsstop=0;if(t!=="none"){C()}p();function I(){if(r._mcsstop){return}if(!v){G.call()}v=i._getTime()-z;F();if(v>=r._mcstime){r._mcstime=(v>r._mcstime)?v+x-(v-r._mcstime):v+x-1;if(r._mcstime<v+1){r._mcstime=v+1}}if(r._mcstime<q){r._mcsid=_request(I)}else{H.call()}}function F(){if(q>0){r._mcscurrVal=w(r._mcstime,D,y,q,A);E[u]=Math.round(r._mcscurrVal)+"px"}else{E[u]=s+"px"}B.call()}function p(){x=1000/60;r._mcstime=v+x;_request=(!b.requestAnimationFrame)?function(K){F();return setTimeout(K,0.01)}:b.requestAnimationFrame;r._mcsid=_request(I)}function C(){if(r._mcsid==null){return}if(!b.requestAnimationFrame){clearTimeout(r._mcsid)}else{b.cancelAnimationFrame(r._mcsid)}r._mcsid=null}function w(M,L,Q,P,N){switch(N){case"linear":case"mcsLinear":return Q*M/P+L;break;case"mcsLinearOut":M/=P;M--;return Q*Math.sqrt(1-M*M)+L;break;case"easeInOutSmooth":M/=P/2;if(M<1){return Q/2*M*M+L}M--;return -Q/2*(M*(M-2)-1)+L;break;case"easeInOutStrong":M/=P/2;if(M<1){return Q/2*Math.pow(2,10*(M-1))+L}M--;return Q/2*(-Math.pow(2,-10*M)+2)+L;break;case"easeInOut":case"mcsEaseInOut":M/=P/2;if(M<1){return Q/2*M*M*M+L}M-=2;return Q/2*(M*M*M+2)+L;break;case"easeOutSmooth":M/=P;M--;return -Q*(M*M*M*M-1)+L;break;case"easeOutStrong":return Q*(-Math.pow(2,-10*M/P)+1)+L;break;case"easeOut":case"mcsEaseOut":default:var O=(M/=P)*M,K=O*M;return L+Q*(0.499999999999997*K*O+-2.5*O*O+5.5*K+-6.5*O+4*M)}}},_getTime:function(){if(b.performance&&b.performance.now){return b.performance.now()}else{if(b.performance&&b.performance.webkitNow){return b.performance.webkitNow()}else{if(Date.now){return Date.now()}else{return new Date().getTime()}}}},_stopTween:function(){var p=this;if(p._mcsid==null){return}if(!b.requestAnimationFrame){clearTimeout(p._mcsid)}else{b.cancelAnimationFrame(p._mcsid)}p._mcsid=null;p._mcsstop=1},_delete:function(r){try{delete r}catch(q){r=null}},_mouseBtnLeft:function(p){return !(p.which&&p.which!==1)},_pointerTouch:function(q){var p=q.originalEvent.pointerType;return !(p&&p!=="touch"&&p!==2)},_isNumeric:function(p){return !isNaN(parseFloat(p))&&isFinite(p)}};j.fn[g]=function(p){if(e[p]){return e[p].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof p==="object"||!p){return e.init.apply(this,arguments)}else{j.error("Method "+p+" does not exist")}}};j[g]=function(p){if(e[p]){return e[p].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof p==="object"||!p){return e.init.apply(this,arguments)}else{j.error("Method "+p+" does not exist")}}};j[g].defaults=h;b[g]=true;j(b).load(function(){j(m)[g]()})}))}(window,document));
    

lc.DefaultWidget = lc.utils.defineClass(function() {

    /**
     * Метод, проводящий инициализацию. Логически выполняет роль конструктора.
     * Значения, присваиваемые полям, работают в следующем порядке (от наименее приоритетного к наиболее):
     * 1) Значения по умолчанию (setupDefaultValues)
     * 2) Mixins (applyMixins)
     * 3) Значения из серверного окружения (applyServerEnv)
     * 4) Значения, специфические для данного продукта (getProductSettings)
     * @returns {*}
     */
    this.init = function () {

        /******* Initialization **************/

        // На данный момент this.mixins уже определен, но не применен

        /*** Поля, которые следует переопределять в inline-styles (mixins) ***/
        this.inlineStyles = {};
        this.inlinePresetStyles = {};
        this.productInlineStyles = {};
        /**************************************/


        this.userQuestion = null;
        this.main = null;
        this.leadFormPopupShown = false;

        this.setupDefaultValues();
        this.applyMixins();

        this.previewMode.started = false;
        this.greeting.alreadyWritten = false;
        this.consultant.generateTitleFromTag = false;
        this.consultant.randomGenerated = false;


        this.applyServerEnv();

        /* подумать как оптимизировать */
        this.applyCustomParamInScript();
        this.applyProductSettings();
        this.applyCustomParamInScript();

        this.initState();

        /*************************************/

        this.initialized = true;

        return this;

    };


    /**
     * Различные константы
     */
    this.consts = {
        minimized: 'minimized',
        maximized: 'maximized',
        //stateCookie: 'leadia_widget_state',
        iframeformtemplate: '',
        mobileState: 'widget-display',
        scenarioActive: false,
        msgtextLength: 20,
        popupURL: '',
        timeoutTimer: '',
        placeMesTimeout: ''
    };

    /**
     * Префикс для полей состояния при сохранении в кукисы
     */
    this.stateCookie = function(){
        return this.widgetClass + '_' + this.webmaster.product + '_' + this.widgetStyle.style + (this.widget_version != null ? ('_' + this.widget_version) : '');
    };

    /**
     * Поля состояния. Эти поля будут сохраняться в куки и загружаться из них.
     * @type {string[]}
     */
    this.statefulFields = function(){
        return [
            'greeting.alreadyWritten',
            'sizeState',
            'consultant.randomGenerated',
            'consultant.name',
            'consultant.photo',
            'referer',
            'greeting.randomText',
            'revelation.sizeState'
        ];
    };

    /**
     * Список имен консультанта
     * @returns {*}
     */
    this.listConsultantNames = function(){
        return [
            'Роман Беляков',
            'Филипп Андреев',
            'Элла Самойлова',
            'Борис Савин',
            'Елена Беспалова',
            'Любовь Воронова',
            'Станислав Соболев',
            'Никита Воробьев',
            'Дмитрий Панов'
        ];
    }
    /**
     * Список названия фото
     * @returns {*}
     */
    this.listConsultantPhoto = function(){
        return [1, 2, 'j3', 4, 'j5', 'j6', 7, 8, 9];
    }

    this.element_widget = function () {
        return this.main.find('.leadia-widget');
    };

    this.element_styles = function(){
        return this.main.find('.leadia-widget-style');
    };

    this.element_widgetBody = function () {
        return this.main.find('.leadia_widget_body');
    };

    this.element_header = function () {
        return this.main.find('.leadia-widget-header');
    };
    this.element_headerImg = function () {
        return this.main.find('.leadia-widget-header-img');
    };
    this.element_workerName = function () {
        return this.main.find('.leadia-widget-worker-name');
    };
    this.element_jobTitle = function () {
        return this.main.find('.leadia-widget-job-title');
    };
    this.element_typemessage = function () {
        return this.main.find('.leadia_msg_typemessage');
    };
    this.element_textarea = function () {
        return this.main.find('.leadia-widget-textarea');
    };
    this.element_button = function () {
        return this.main.find('.leadia_widget_btn');
    };

    this.element_chatwrapcontent = function () {
        return this.main.find('#leadia_content_custom_scroll');
    };
    this.element_chat = function () {
        return this.main.find('.leadia_widget_list');
    };

    this.element_message = function (o) {
        return o.find('.leadia-widget-message-block');
    };
    this.element_messageWrap = function (o) {
        return o.find('.leadia-widget-message-block .msg_wrap');
    };
    this.element_messageText = function (o) {
        return o.find('.leadia-widget-message-block .leadia-widget-message-text');
    };
    this.element_messageCorner = function (o) {
        return o.find('.leadia-widget-message-block .msg_wrap_corner');
    };
    this.element_messageTimeLabel = function (o) {
        return o.find('.leadia-widget-message-block .leadia_msg_time');
    };

    this.element_allMessages = function () {
        return this.element_message(this.element_chat())
    };
    this.element_allMessageTimeLabels = function () {
        return this.element_messageTimeLabel(this.element_chat())
    };

    this.element_animatedWriting = function () {
        return this.main.find('.leadia-widget-writetext')
    };
    this.element_animatedWritingAnim = function () {
        return this.main.find('.leadia-widget-msg-anim')
    };
    this.element_animatedWritingPencil = function () {
        return this.main.find('.leadia-widget-type_msg_pencil')
    };
    this.element_animatedWritingCorner = function () {
        return this.main.find('.leadia-widget-msg_wrap_corner')
    };

    this.element_leadFormPopup = function () {
        return this.main.find('.leadia-widget-popup')
    };
    this.element_leadFormPopupIframe = function () {
        return this.main.find('.leadia-widget-popup-iframe')
    };
    this.element_leadFormPopupDarkScreen = function () {
        return this.main.find('.leadia-widget-popup-dark-screen')
    };
    this.element_leadFormPopupClose = function () {
        return this.main.find('.leadia-widget-popup-close')
    };

    this.element_previewModeHorMarg = function () {
        return this.main.find('.leadia-widget-pm-hor-marg')
    };
    this.element_previewModePadLeft = function () {
        return this.main.find('.leadia-widget-pad-left')
    };
    this.element_previewModePadLeftVal = function () {
        return this.main.find('.leadia-widget-pad-left-val')
    };
    this.element_previewModePadRight = function () {
        return this.main.find('.leadia-widget-pad-right')
    };
    this.element_previewModePadRightVal = function () {
        return this.main.find('.leadia-widget-pad-right-val')
    };

    this.style_leadFormPopupShown = function () {
        return {
            'bottom': '50%',
            'margin-bottom': '-242px',
            'width': this.leadFormPopupStyle.width,
            'height': this.leadFormPopupStyle.height,
            'border-top-width': '112px'
        };
    };

    this.style_leadFormPopupShownFromLeft = function () {
        return _.extend(
            this.style_leadFormPopupShown(),
            {
                'left': '50%',
                'margin-left': '-263px'
            }
        );
    };

    this.style_leadFormPopupShownFromRight = function () {
        return _.extend(
            this.style_leadFormPopupShown(),
            {
                'right': '50%',
                'margin-right': '-263px'
            }
        );
    };

    this.style_leadFormPopupHidden = function () {
        return {
            'bottom': '0',
            'margin-bottom': '0',
            'width': '326px',
            'height': '357px',
            'border-top-width': '60px'
        };
    };

    this.style_leadFormPopupHiddenToLeft = function () {
        return _.extend(
            this.style_leadFormPopupHidden(),
            {
                'left': this.widgetStyle.horizontalMargin,
                'margin-left': '0'
            }
        );
    };

    this.style_leadFormPopupHiddenToRight = function () {
        return _.extend(
            this.style_leadFormPopupHidden(),
            {
                'right': this.widgetStyle.horizontalMargin,
                'margin-right': '0'
            }
        );
    };

    this.style_leadFormPopupShowAnimation = function(){
        if (this.widgetStyle.position == 'left') {
            return this.style_leadFormPopupShownFromLeft();
        } else {
            return this.style_leadFormPopupShownFromRight();
        }
    };

    this.style_leadFormPopupHideAnimation = function(){
        if (this.widgetStyle.position == 'left') {
            return this.style_leadFormPopupHiddenToLeft();
        } else {
            return this.style_leadFormPopupHiddenToRight();
        }
    };


    /**
     * Функция хелпер
     * @param f
     * @returns {*}
     */
    this.p = function (f) {
        return $.proxy(f, this);
    };

    this.setTimeout = function (f, d) {
        return setTimeout(this.p(f), d);
    };

    this.setInterval = function (f, d) {
        return setInterval(this.p(f), d);
    };

    this.setCookie = function (name, value) {
        return lc.utils.setCookie(name, value, {expires: 86400, path: '/'});
    };

    this.getCookie = function (name) {
        return lc.utils.getCookie(name);
    };

    this._setValue = function(name, value){
        this[name] = value;
    };

    this._getValue = function(name){
        return this[name];
    };

    /**
     * Функция, получающая конфигурационные данные для создающегося объекта из lc.serverEnv
     */
    this.getConfigFromServerEnv = function () {
        return (function (o) {

            var result = {
                staticFilesUrl: o.static,
                webmaster: {
                    product: o.params.product,
                    userId: o.userid,
                    subaccount: o.subaccount
                },
                widget_id: o.params['widget_id'],
                server: {
                    protocol: o.params.protocol,
                    host: o.params.host
                },
                geohead: o.params.geohead,
                generateRandomConsultant: o.params.robotrandom,
                widgetStyle: {
                    style: o.params['style'] ? o.params['style'] : 'default',
                    position: o.params['position'] ? o.params['position'] : undefined,
                    horizontalMargin: o.params['margin'] ? o.params['margin'] : undefined,
                    showCallBtn: false,
                    delaytype: o.params['delaytype'] ? o.params['delaytype'] : undefined
                },
                presetStyle: o.params['custom_color'] ? o.params['custom_color'] : undefined,
                previewMode: {
                    on: o.params['preview_mode'] ? o.params['preview_mode'] : undefined,
                    step: o.params['preview_mode_step']
                },
                nocookie: o.params['no_cookie'] ? o.params['no_cookie'] : undefined,
                form: {
                    template: o.params['form-template'] ? o.params['form-template'] : 'fabricform',
                    mobileForm: o.params['mobile-form']
                },
                widgetClass: o.params['widget-class'] ? o.params['widget-class'].replace(/\//gi, '_') : 'leadia_default',
                jsonModelConfig: o.params['widget_json_settings'],
                client: {
                    ip: "",
                    widgetTemplate: o.params['template_full']
                },
                lead_to_email: o.params['lead_to_email'] ? o.params['lead_to_email'] : 'ON',
                mobile_widget: o.params['mobile_widget'] ? o.params['mobile_widget'] : 1,
                settings: {
                    msgsound: o.params['msgsound'] ? o.params['msgsound'] : 0,
                    flipisactive: o.params['flipisactive'] ? o.params['flipisactive'] : 0
                },
                widget_version: o.params['widget_version'] ? o.params['widget_version'] : '1.0',
                analytics: {
                    ga_id: o.params['ga_id'],
                    metrics_id: o.params['metrics_id']
                },
                entertextlimit: o.params['entertextlimit'] ? o.params['entertextlimit'] : 5,
                user_filter: (o.params['user_filter'] != null ?
                                    o.params['user_filter']['data'] ? o.params['user_filter']['data'] : '' : ''
                             )

            };

            if(o.params['consultant_name']){
                result['consultant'] = {};
                result['consultant']['name'] = o.params['consultant_name'];
            }
            if(o.params['consultant_jobTitle']){
                if(!result.hasOwnProperty('consultant'))
                    result['consultant'] = {};
                result['consultant']['jobTitle'] = o.params['consultant_jobTitle'];
            }
            if(o.params['consultant_photo']){
                if(!result.hasOwnProperty('consultant'))
                    result['consultant'] = {};
                result['consultant']['photo'] = o.params['consultant_photo'];
            }
            if(o.params['greeting_text']){
                result['greeting'] = {};
                result['greeting']['text'] = o.params['greeting_text'];
            }
            if(o.params['thankpage_text']){
                result['thankpage_text'] = o.params['thankpage_text'];
            }
            if(o.params['thankpage_photo']){
                result['thankpage_photo'] = o.params['thankpage_photo'];
            }
            if(o.params['form_field_json']){
                result['form_field_json'] = o.params['form_field_json'];
            }
            if(o.params['flipconfig_json']){
                result['flipconfig_json'] = o.params['flipconfig_json'];
            }

            return result;
        })(lc.serverEnv);
    };

    /**
     * Конфигурация по умолчанию
     */
    this.setupDefaultValues = function () {

        this.showPopupOnEachMessage = false;
        this.previewMode = {
            on: false,
			showHorizontalMargins: false
        };
        this.referer = document.referrer;

        this.webmaster = {
            userId: null,
            subaccount: null,
            product: null
        };

        this.widgetStyle = {
            position: "right",
            horizontalMargin: "0"
        };

        this.presetStyle = 'blue';

        this.server = {
            protocol: 'http',
            host: 'cloud.leadia.ru'
        };

        this.leadFormPopupStyle = {
            width: 525,
            height: 525
        };

        this.placeholders = {
            textarea: 'Введите ваше сообщение ...'
        };

        this.greeting = {
            text: 'Здравствуйте! Я могу бесплатно вас проконсультировать. Введите ваш вопрос.',
            delaySeconds: 7,
            randomText: 0
        };


        this.consultant = {
            jobTitle: 'юрист-консультант',
            generateRandom: true,
            name: 'Михаил Лаврентьев',
            photo: '9',
            generateTitleFromTag: false,
            typeMessage: 'Юрист печатает вам сообщение!'
        };
        this.sizeState = this.consts.minimized;

        this.revelation = {
            sizeState: ''
        };

        this.thankpage_photo = '//s3-eu-west-1.amazonaws.com/static.leadia.ru/widget/img/gala_72.png';
        this.contactform_text = "Оставьте свои контактные данные, и мы ответим на ваш вопрос.";
        this.flipconfig_json = {
            texts: {
                title: "Закажите звонок!",
                subtitle: "Мы перезвоним в удобное время.",
                textbeforeform: "Выберите время и оставьте номер телефона, мы вам перезвоним.",
                buttontext: "Жду звонка"
            },
            flip_timeout: 10
        };

    };

    this.getProductSettings = function(){
        return {};
    };

    this.applyProductSettings = function(){

        var productSettings = this.getProductSettings();
        if(productSettings[this.webmaster.product] != undefined){
            $.extend(true, this, productSettings[this.webmaster.product]);
        }

    };

    this.applyMixins = function(){
        if(this.mixins !== undefined)
            $.extend(true, this, this.mixins);
    };

    /**
     * Функция, которая загружает конфигурационные данные из lc.serverEnv в объект
     */
    this.applyServerEnv = function () {
        $.extend(true, this, this.getConfigFromServerEnv());
    };

    /**
     * функция которая обновляет конфигурационные данные описанные у клиента
     * */
    this.applyCustomParamInScript = function(){
        if(typeof leadia_custom_param !== "undefined"){
            $.extend(true, this, leadia_custom_param);
        }
    };

    /**
     * Инициализирует состояние - функционал для сохранения и загрузки данных объекта из cookie
     */
    this.initState = function () {
        var stateStr;

        if(parseInt(this.nocookie) != 1)
            stateStr = this.getCookie(this.stateCookie());
        //stateStr = this.getCookie(this.consts.stateCookie);

        if (stateStr) {
            /*console.log('Loading state from cookies');*/
            var newState = {};
            _.each(this.statefulFields(), this.p(function (k) {
                var newValue = this.getCookie(this.getStateCookieName(k));
                if (newValue !== undefined) {
                    try {
                        lc.utils.setField(this, k, JSON.parse(newValue));
                    }catch(e){}
                }
            }));
            /*console.log('State loaded');*/
            /*console.log(this.getState());*/
        } else {
            /*console.log('State wasn\'t found in cookies. Generating a new one.');*/
            this.saveState();
        }

    };

    /**
     * Получает данные состояния
     */
    this.getState = function () {
        var state = {};
        _.each(this.statefulFields(), this.p(function (k) {
            state[k] = lc.utils.getField(this, k);
        }));
        return state;
    };

    /**
     * Хелпер
     * @param k
     * @returns {string}
     */
    this.getStateCookieName = function (k) {
        return this.stateCookie() + "_" + k
        //return this.consts.stateCookie + "_" + k
    }

    /**
     * Сохраняет состояние
     */
    this.saveState = function () {
        /*console.log('Saving state:');*/
        var state = this.getState();
        /*console.log(state);*/
        _.each(state, this.p(function (v, k) {
            this.setCookie(this.getStateCookieName(k), lc.utils.JSONSstringify(v));
        }));
        this.setCookie(this.stateCookie(), '1');
    };

    /**
     * Устанавливает sizeState (minimize или maximize)
     * @param value
     */
    this.setSizeState = function (value) {
        this.sizeState = value;
        this.saveState();
        this.updateView();
    };

    /**
     * Хелпер
     */
    this.minimize = function () {
        this.setSizeState(this.consts.minimized);
    };


    /**
     * Хелпер
     */
    this.maximize = function () {
        this.setSizeState(this.consts.maximized);
    };


    /**
     * Хелпер
     */
    this.toggleSizeState = function () {
        if (this.sizeState == this.consts.minimized)
            this.maximize();
        else
            this.minimize();
    };


    /**
     * Получает случайного консультанта
     */
    this.getRandomConsultant = function () {

        var i = lc.utils.getRandomItemIndex(this.listConsultantPhoto());

        var name = this.listConsultantNames()[i];
        var photoName = this.listConsultantPhoto()[i];
        /*if (i == 3 || i == 5 || i == 6) {
            photoName = 'j' + i;
        } else {
            photoName = i;
        }*/

        return {
            name: name,
            photoName: photoName
        };

    };

    /**
     * Устанавливает случайного консультанта и сохраняет состояние, если это ещё не сделано
     */
    this.setupRandomConsultant = function () {

        if (!this.consultant.randomGenerated) {
            var d = this.getRandomConsultant();
            this.consultant.name = d.name;
            this.consultant.photo = d.photoName;
            this.consultant.randomGenerated = true;
            this.saveState();
        }

    };


    /**
     * Генерирует и устанавливает consultant.jobTitle в значение из html тега title
     */
    this.generateTitleFromTag = function () {

        var words = {
            'алимент': 'алиментов',
            'договор': 'договора',
            'документ': 'документов',
            'квартир': 'квартиры',
            'хищени': 'хищения',
            'налог': 'налогов',
            'наследств': 'наследства',
            'долг': 'долгов',
            'мошенничеств': 'мошенничества',
            'недвижимост': 'недвижимости',
            'пенси': 'пенсии',
            'брак': 'брака',
            'развод': 'развода',
            'льгот': 'льгот',
            'штраф': 'штрафов',
            'дтп': 'ДТП',
            'суд': 'суда',
            'жалоб': 'жалобы',
            'спор': 'споров',
            'увольнени': 'увольнения',
            'взятк': 'взятки',
            'шантаж': 'шантажа',
            'арест': 'ареста',
            'затоплени': 'затопления',
            'арбитраж': 'арбитража',
            'апелляци': 'апелляции',
            'взыскани': 'взыскания',
            'ооо': 'ООО',
            'зао': 'ЗАО',
            'кредит': 'кредита',
            'банк': 'банков',
            'ребенок': 'детей',
            'преступлен': 'преступлений',
            'возврат': 'возврата',
            'страховани': 'страхования'
        };

        var documentTitle = document.title.toLowerCase();
        var generatedTitle;
        for (var key in words) {
            if (documentTile.indexOf(key) !== -1) {
                generatedTitle = 'Здравствуйте! Я могу вас проконсультировать по поводу ' + words[key] + '. Введите ваш вопрос.';
                break;
            }
        }

        if (generatedTitle)
            this.consultant.jobTitle = generatedTitle;

    };

    this.__setupInlineStyles = function (styles, container) {
        _.each(styles, this.p(function (v, k) {
            container.find(k).css(v);
        }));
    }

    /**
     * Применяет inline стили. this.inlineStyles - это свойство прототипа
     */
    this.setupInlineStyles = function (container) {

        this.__setupInlineStyles(this.inlineStyles, container);

        if(this.productInlineStyles[this.webmaster.product] !== undefined)
            this.__setupInlineStyles(this.productInlineStyles[this.webmaster.product], container);

        if(this.inlinePresetStyles[this.presetStyle] !== undefined)
            this.__setupInlineStyles(this.inlinePresetStyles[this.presetStyle], container);

    }

    /**
     * Используется при инициализации объекта. Создает на странице главный блок с контентом
     * Также выполнает инициализационные действия, которые могут быть выполнены только при наличии главного блока
     * @returns {*|jQuery|HTMLElement}
     */
    this.createMainBlock = function () {

        this.main = $('<div/>');
        this.main.append($('<style/>').addClass('leadia-widget-style').html(this.inclusionStyles));
        this.main.append(this.widgetHtml);

        if(!this.previewMode.on) {

            if (this.consultant.generateRandom)
                this.setupRandomConsultant();

            if (this.consultant.generateTitleFromTag)
                this.generateTitleFromTag();

            if (this.geohead)
                this.setupRegionSpecHeader();

        }

        this.resetView();

        this.applyInteractionHandlers();

        return this.main;

    };

    this.setMessageBlockContent = function(messageContainer, text, time, isHtml, params){
        if(typeof text === "object"){
           for (text in obj) {
                var currentMessage = obj[text].msgText;
                this.setMessageBlockContent(this.main, currentMessage, time, isHtml, params);
                countText += 1;
            }
        }else {
            if (text !== undefined) {
                if(typeof isHtml !== undefined && isHtml){
                    if (typeof params === "object" && typeof params.elPos === "number"){
                        this.element_messageText(messageContainer).eq(params.elPos).html(text);
                    }else
                        this.element_messageText(messageContainer).html(text);
                }else
                    this.element_messageText(messageContainer).text(text);
            }
            if (time !== undefined) {
                this.element_messageTimeLabel(messageContainer).attr('data-time', time);
                this.updateSendTime();
            }
        }
    };

    /**
     * Создает блок сообщения в памяти. Никуда его не добавляет.
     * @param options
     * @returns {*|jQuery|HTMLElement}
     */
    this.createDetachedMessageBlock = function (options) {

        /*console.log("createDetachedMessageBlock:");*/
        /*console.log(options);*/

        var messageContainer = $('<div/>');
        var messageBlock = $(this.messageHtml);
        messageContainer.append(messageBlock);

        this.setMessageBlockContent(messageContainer, options.msgText, options.msgTime ? options.msgTime : new Date($.now()));

        if (options.isMe) {
            messageBlock.addClass('leadia-widget-message-me');
        } else {
            messageBlock.addClass('leadia-widget-message-he');
        }

        this.setupInlineStyles(messageContainer);

        return messageBlock;

    };


    /**
     * Устанавливает обработчики событий на элементы. Используется при инициализации объекта.
     */
    this.applyInteractionHandlers = function () {

        if(!this.previewMode.on) {

            this.element_header().click(this.p(function () {
                this.toggleSizeState();
            }));

            this.element_textarea().focus(this.p(function () {
                this.element_textarea().css({
                    'height': '80px',
                    'outline': '0 none'
                });
            }));

            this.element_textarea().blur(this.p(function () {
                if (this.element_textarea().val().length == 0) {
                    this.element_textarea().css({
                        'height': '37px'
                    });
                }
            }));

            this.element_textarea().keypress(this.p(function (e) {
                var code = (e.keyCode ? e.keyCode : e.which);
                if (code == 13) {
                    this.placeEnteredMessage();
                    return false;
                }
            }));

            this.element_button().click(this.p(function () {
                this.placeEnteredMessage();
            }));


            this.element_leadFormPopupClose().click(this.p(this.hideLeadFormPopup));

        }

    };

    /**
     * Обновляет стили виджета и сообщений в соответствии с данными полей. Используется в режиме визарда.
     * В режиме визарда передается параметр который потом будет использоваться в initializeView (для изменения сообщения)
     */
    this.resetView = function (venyoo) {
        venyoo = typeof venyoo !== "undefined" ? venyoo : "";
        this.setupInlineStyles(this.main);
        this.initializeView(venyoo);
    };

    /**
     * Обновляет стили в соответствии с данными полей. Используется для "динамических изменений" - то, что происходит
     * при использовании виджета, а не только при его инициализации. Например - свертывание/развертывание
     */
    this.updateView = function () {

        /*console.log('Updating view. Current state is:');*/
        /*console.log(this.getState());*/

        if (!this.leadFormPopupShown){
            if (this.sizeState == this.consts.minimized) {
                var bottom = this.element_widget().height() - this.element_header().height();
                this.element_widget().css('bottom', '-' + bottom + 'px');
            } else {
                this.element_widget().css('bottom', 0);
            }
        }

    };

    this.initializeView = function (venyoo) {
        venyoo = typeof venyoo !== "undefined" && venyoo.length > 0 ? venyoo : "";

        if (this.widgetStyle.position == 'left') {
            this.element_widget().css({
                'left': this.widgetStyle.horizontalMargin
            });
        } else {
            this.element_widget().css({
                'right': this.widgetStyle.horizontalMargin
            });
        }

        /*this.element_chatwrapcontent().mCustomScrollbar({
            axis: "y", // vertical and horizontal scrollbar
            theme: "dark-2"
        });*/


        this.element_leadFormPopup().attr('style', function (i, s) {
            return s + 'overflow: visible !important;'
        });

        /*console.log('width: ' + this.leadFormPopupStyle.width);*/
        /*console.log('height: ' + this.leadFormPopupStyle.height);*/


        this.element_leadFormPopupIframe().width(this.leadFormPopupStyle.width);
        this.element_leadFormPopupIframe().height(this.leadFormPopupStyle.height);


        this.element_headerImg().attr('src', this.getConsultantPhotoUrl(this.consultant.photo));
        this.element_workerName().text(this.consultant.name);
        this.element_jobTitle().text(this.consultant.jobTitle);
        this.element_typemessage().text((this.consultant.name).split(' ')[0] + ' печатает вам сообщение!'); //this.consultant.typeMessage
        this.element_textarea().attr('placeholder', this.placeholders.textarea);

        if(this.previewMode.on){

            lc.utils.waitFor(

                this.p(function(){
                    return lc.utils.css(this.element_styles(), this.element_widget()).width;
                }),

                this.p(function(width) {

                    if (this.previewMode.showHorizontalMargins) {

                        this.element_previewModeHorMarg().show();

                        if (this.widgetStyle.position == 'left') {
                            this.element_previewModePadRight().hide();
                            this.element_previewModePadLeft().show();
                            this.element_previewModePadLeft().css({
                                'right': '50%', // that's right, right and right-margin when position is left
                                'margin-right': +(this.element_widget().width() / 2 + 5),
                                'margin-left': 0
                            });
                            this.element_previewModePadLeftVal().text(this.widgetStyle.horizontalMargin);
                        } else {
                            this.element_previewModePadLeft().hide();
                            this.element_previewModePadRight().show();
                            this.element_previewModePadRight().css({
                                'left': '50%', // that's right, left and left-margin when position is right
                                'margin-left': +(this.element_widget().width() / 2 + 25),
                                'margin-right': 0
                            });
                            this.element_previewModePadRightVal().text(this.widgetStyle.horizontalMargin);
                        }

                    } else {
                        this.element_previewModeHorMarg().hide();
                    }

                    this.element_widget().css({
                        'left': '50%',
                        'margin-left': -this.element_widget().width() / 2,
                        'bottom': 0
                    });

                })
            );

            if(venyoo == "venyoo") {
                if(lc.utils.checkIsJson(this.greeting.text)) {

                    try {
                        countText = 0;
                        obj = JSON.parse(this.greeting.text);

                        for (text in obj) {
                            var options = {
                                msgText: obj[text].msgText,
                                isMe: true,
                                scrollFast: true,
                                writing: 0,
                                msgTime: ''
                            };
                            var messageBlock = this.createDetachedMessageBlock(options);
                            !countText++ ? this.element_chat().html(messageBlock) : this.element_chat().append(messageBlock);
                            countText += 1;
                        }
                        this.updateSendTime();
                    }catch(e){
                        this.setMessageBlockContent(this.main, this.greeting.text);
                    }

                }else{
                    this.setMessageBlockContent(this.main, this.greeting.text);
                }

            }

        }else{

            this.element_previewModeHorMarg().hide();

            if (this.widgetStyle.position == 'left') {
                this.element_widget().css({
                    'left': this.widgetStyle.horizontalMargin + "px",
                    'bottom': 0
                });
            } else {
                this.element_widget().css({
                    'right': this.widgetStyle.horizontalMargin + "px",
                    'bottom': 0
                });
            }

            this.element_textarea();//.focus().blur();

        }

        this.updateView();

    };

    this.setGreetingAlreadyWrittenTrue = function () {
        this.greeting.alreadyWritten = '1';
        this.saveState();
    };

    this.placeGreetingMessageNow = function(){
        this.placeMessage({
            'msgText': this.greeting.text,
            'isMe': true,
            'writing': 0,
            'scrollFast': true
        }, true);
        this.updateView();
    };

    this.startScenario = function () {

        this.setTimeout(function () {

            this.placeMessageFromRobot({
                'msgText': this.greeting.text,
                'writing': 7
            });

            this.maximize();

            this.setGreetingAlreadyWrittenTrue();

        }, this.greeting.delaySeconds * 1000);

    };

    this.doJsonStartScenario = function(obj, counter){
        if(typeof Object.keys(obj)[counter] !== "undefined"){
            this.setTimeout(function () {
                if(counter == 0) this.maximize();
                this.placeMessageFromRobot({
                    'msgText': obj[Object.keys(obj)[counter]].msgText,
                    'writing': obj[Object.keys(obj)[counter]].writing
                });
                counter += 1;
                this.doJsonStartScenario(obj, counter);
            }, obj[Object.keys(obj)[counter]].waiting * 1000);
        }else{
            this.setGreetingAlreadyWrittenTrue();
        }
    };

    this.updateSendTime = function () {

        this.element_allMessageTimeLabels().each(function () {

            var t1 = new Date($(this).data('time')),
                t2 = new Date(),
                dif = t1.getTime() - t2.getTime(),
                Seconds_from_T1_to_T2 = Math.ceil(Math.abs(dif / 1000));

            if (Seconds_from_T1_to_T2 < 30) {
                $(this).text("Только что");
            } else if (Seconds_from_T1_to_T2 < 60) {
                $(this).text("30 секунд назад");
            } else if (Seconds_from_T1_to_T2 <= 300) {
                var minutes = Math.floor(Seconds_from_T1_to_T2 / 60);
                var text = '';
                switch (minutes) {
                    case 1:
                        text = 'минуту назад';
                        break;
                    case 2:
                        text = '2 минуты назад';
                        break;
                    case 3:
                        text = '3 минуты назад';
                        break;
                    case 4:
                        text = '4 минуты назад';
                        break;
                    case 5:
                        text = '5 минут назад';
                        break;
                }
                $(this).text(text);
            } else {
                $(this).text("Отправлено в " + ('0' + t1.getHours()).slice(-2) + ":" + ('0' + t1.getMinutes()).slice(-2));
            }

        });

    };


    this.scrollToBottom = function (scrollFast) {

        var scrollParam = scrollFast ? {scrollInertia: 0} : undefined;

        this.setTimeout(function () {
            this.element_chatwrapcontent().mCustomScrollbar("scrollTo","bottom", scrollParam);
        }, 50);

    };


    this.showAnimatedWriting = function () {
        this.element_chat().append(this.element_animatedWriting());
        this.element_animatedWriting().show();
    };

    this.hideAnimatedWriting = function () {
        this.element_animatedWriting().hide();
    };


    this.placeMessageFromRobot = function (options, silent, callback) {
        options.isMe = typeof options.isMe === "undefined" ? true : options.isMe;
        this.showAnimatedWriting();
        this.scrollToBottom(Boolean(options.scrollFast));
        this.consts.placeMesTimeout = this.setTimeout(function () {
            this.hideAnimatedWriting();
            this.placeMessage(options, silent, callback);
        }, options.writing * 1000);
    };

    this.placeMessage = function (options, silent, callback) {
        if (silent === undefined)
            silent = false;

        var messageBlock = this.createDetachedMessageBlock(options);
        messageBlock.hide();
        this.element_chat().append(messageBlock);
        var lastEl = this.element_chat().find(".leadia_widget_msg").last();
        if(options.fadeEvent){
            lastEl.fadeIn(400, this.p(function(){
                if(typeof callback === 'function')
                    callback();
            }));
        }else {
            lastEl.show();
            if(typeof callback === 'function')
                callback();
        }

        try{
            if(options.isMe && this.settings.msgsound == 1 && options.writing > 0){
                if(this.main.find('#leadia_widget_sound').size() > 0){
                    this.main.find('#leadia_widget_sound')[0].play();
                }else{
                    var sound2 = $('<audio/>', {
                        id: 'leadia_widget_sound',
                        src: 'http://static.venyoo.ru/widget/audio/pop2.mp3',
                        preload: 'auto',
                        autoplay: 'true'
                    });

                    this.main.append(sound2);
                }
            }
        }catch(e){}

        this.updateSendTime();

        if (!silent)
            this.maximize();

        this.scrollToBottom(Boolean(options.scrollFast));
    };

    this.place = function () {

        if (!this.initialized)
            this.init();

        this.createMainBlock();

        $(this.p(function() {

            $('body').append(this.main);

            /*******************************************************/
            this.element_widget().hide();
            lc.utils.waitFor(
                this.p(function () {
                    return !$.isEmptyObject(lc.utils.css(this.element_styles(), this.element_widget()));
                }),
                this.p(function () {

                    this.element_widget().show();

                    if (this.previewMode.on) {
                        this.processPreviewMode();
                    } else {
                        if (this.greeting.alreadyWritten)
                            this.placeGreetingMessageNow();
                        else
                            this.startScenario();
                        this.setInterval(this.updateSendTime, 30000);
                    }

                    // init mCustomScrollBar
                    setTimeout(this.p(function(){
                        this.element_chatwrapcontent().mCustomScrollbar({
                            axis: "y", // vertical and horizontal scrollbar
                            theme: "dark-2"
                        });
                    }), 1500);


                    this.resetView();

                })
            );
            /*******************************************************/

        }));

        return this;

    };

    this.processPreviewMode = function(){
        this.maximize();
        this.placeGreetingMessageNow();
    };

    this.getServerUrl = function (path, params) {
        return this.server.protocol + "://" +
            this.server.host +
            (path ? path : '') +
            (params ? '?' + $.param(params) : '');
    }

    this.getServerOrigin = function(){
        return this.getServerUrl('');
    };

    this.getStaticFileUrl = function (path) {
        return this.staticFilesUrl + path;
    };

    this.getConsultantPhotoUrl = function (photoName) {
        if(/^j?\d+$/.test(photoName))
            return this.getStaticFileUrl('/img/40/' + photoName + '.png');
        else
            return photoName;
    };

    this.placeEnteredMessage = function () {

        var text = this.element_textarea().val();

        if ($.trim(text).length == 0)
            return;

        this.element_textarea().val('');

        this.placeMessage({
            msgText: text,
            isMe: false
        });

        this.element_textarea().focus();

        this.triggerRobotReplyScenario(text);

    };

    this.sendRef = function () {

        if (this.referer) {
            $.ajax({
                url: this.getServerUrl('/widget/ref'),
                type: 'post',
                dataType: 'jsonp',
                data: {referer: this.referer}
            })
        }

    };

    this.getLeadFormPopupUrl = function (msgText) {

        var docref = encodeURI(document.referrer);
        if (docref.length > 110) {
            docref = docref.match(/:\/\/(.[^/]+)/)[1];
        }

        this.consts.popupURL = this.getServerUrl("/", {
            't': "widget",
            'ft': 'robot',
            'p': this.webmaster.product,
            'q': msgText ? msgText.substring(0, 301) : '',
            'w': this.webmaster.userId,
            'sub': this.webmaster.subaccount,
            'referer': docref,
            'po': location.origin,  // parentOrigin, for posting messages from iframe
            'color': this.element_widget().css('background-color').replace(/#/g, ""),
            'h': this.getCookie('leadia_hash'),
            's': this.iframeformtemplate,
            'widget_id': this.widget_id,
            'custom_photo': this.consultant.randomGenerated ? this.consultant.photo : ''

        });

        /*console.log('Popup Url: ' + this.consts.popupURL);*/

        /*var url = this.getServerUrl("/?p=" + this.webmaster.product + "&t=widget") + '&q=' + encodeURI(msgText.substring(0, 301))
            + '&w=' + this.webmaster.userId
            + '&sub=' + this.webmaster.subaccount
            + '&referer=' + docref
            + '&pr=' + location.origin // parentOrigin, for posting messages from iframe
            + '&ft=robot'
                //+ (this.widgetStyle.widgetRandom == '1' ? '&custom_photo=' + this.consultant.photo : '')
            + '&color=' +
                //+ '&s=' + this.widgetStyle.iframeForm
            + '&h=' +
            + '&s=' + this.iframeformtemplate;
            //(typeof formtemplate !== "undefined" ? formtemplate : this.form.template);*/

        return this.consts.popupURL;

    };

    this.getPopupURL = function(){
        return this.consts.popupURL;
    };

    this.setPopupURL = function(){
        return this.getPopupURL();
    };

    this.animateShowLeadFormPopup = function () {
        this.element_leadFormPopup().css({'z-index': '99999998'}).show();
        this.element_leadFormPopupDarkScreen().show();

        this.element_leadFormPopup().animate(this.style_leadFormPopupShowAnimation(), 700, this.p(function () {

            var loadCallback = this.p(function () {

                this.element_leadFormPopupClose().show();

                this.element_leadFormPopup().css({
                    'border-width': 0,
                    'border-top-width': 0
                });
                this.element_leadFormPopupIframe().show();

                this.element_leadFormPopupIframe().off('load', loadCallback);

            });
            this.element_leadFormPopupIframe().load(loadCallback);
            this.setupLeadFormPopupIframeSrc();

        }));

        this.element_widget().hide(100);
        this.element_textarea().blur();
    };


    this.animateHideLeadFormPopup = function(finishCallback){

        this.element_leadFormPopupDarkScreen().hide();
        this.element_leadFormPopup().css({'border-width': '8px', 'border-top-width': '112px'});

        this.element_leadFormPopup().animate(this.style_leadFormPopupHideAnimation(), 700, finishCallback);

        this.element_leadFormPopupIframe().hide();
        this.element_leadFormPopupClose().hide();

        this.setTimeout(function () {
            this.element_widget().show();
            this.scrollToBottom(true);
            this.element_leadFormPopup().fadeOut();
        }, 500);

    };


    this.setupLeadFormPopupIframeSrc = function(){
        this.getLeadFormPopupUrl(this.userQuestion);
        var url = this.setPopupURL();
        this.element_leadFormPopupIframe().attr('src', url);
    };

    this.showLeadFormPopup = function (msgText, formtemplate, showPopupOnEachMessage) {

        this.iframeformtemplate = (typeof formtemplate !== "undefined" && formtemplate != null ? formtemplate : this.form.template);

        this.userQuestion = msgText;
        this.sendRef();

        this.animateShowLeadFormPopup();

        this.showPopupOnEachMessage = (typeof showPopupOnEachMessage !== "undefined" ? showPopupOnEachMessage : true);
        this.leadFormPopupShown = true;

    };

    this.hideLeadFormPopup = function () {

        this.animateHideLeadFormPopup(this.p(function(){
            this.leadFormPopupShown = false;
            this.scrollToBottom(true);
        }));

    };

    this.textScenarionRobotReplay = {
        't1': {
            'msgText': "Давайте я отвечу Вам по телефону. Это существенно ускорит процесс.",
            'writing': 7,
            'waiting': 5
        },
        't2': {
            'msgText': "Сейчас всплывет окно. Оставьте в нем свои контактные данные.",
            'writing': 6,
            'waiting': 9
        }
    };

    this.doSetTimeout = function(msgText, obj, counter){
        if(typeof Object.keys(obj)[counter] !== "undefined"){
            this.setTimeout(function () {
                this.placeMessageFromRobot({
                    'msgText': obj[Object.keys(obj)[counter]].msgText,
                    'writing': obj[Object.keys(obj)[counter]].writing
                });
                counter += 1;
                this.doSetTimeout(msgText, obj, counter);
            }, obj[Object.keys(obj)[counter]].waiting * 1000);
        }else{
            this.setTimeout(function () {
                this.showLeadFormPopup(msgText);
            }, (obj[Object.keys(obj)[counter-1]].writing + 7) * 1000);
        }
    };

    this.triggerRobotReplyScenario = function (msgText) {

        if (!this.showPopupOnEachMessage) {

            if (msgText.length > this.consts.msgtextLength) {

                if(!this.consts.scenarioActive) {

                    this.consts.scenarioActive = true;

                    if(Object.keys(this.textScenarionRobotReplay).length > 0){

                        if(this.consts.timeoutTimer){
                            clearTimeout(this.consts.timeoutTimer);
                        }

                        this.doSetTimeout(msgText, this.textScenarionRobotReplay, 0);

                    }

                    /*this.setTimeout(function () {
                        this.placeMessageFromRobot({
                            'msgText': "Давайте я отвечу Вам по телефону. Это существенно ускорит процесс.",
                            'writing': 7
                        });
                        this.setTimeout(function () {
                            this.placeMessageFromRobot({
                                'msgText': "Сейчас всплывет окно. Оставьте в нем свои контактные данные.",
                                'writing': 6
                            })
                            this.setTimeout(function () {
                                this.showLeadFormPopup(msgText);
                            }, 10000);
                        }, 9000);
                    }, 5000);*/

                }
            }
        } else {
            this.showLeadFormPopup(this.userQuestion ? this.userQuestion : msgText);
        }

    };


    this.sendStat = function () {
        try {
            var url = document.URL,
                domain = document.location.host,
                title = document.title,
                hash = md5(url + "" + domain + "" + title);
            $.ajax({
                type: "post",
                data: {url: url, domain: domain, title: title, hash: hash},
                url: this.getServerUrl("/statTitleDomain")
            });
            var d = new Date();
            d.setTime(d.getTime() + (315360000000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = "leadia_hash=" + hash + "; expires=" + d.toUTCString();
        } catch (e) {
        }
    };

    this.setupRegionSpecHeader = function () {

        $.ajax({
            url: this.getServerUrl('/geo'),
            success: this.p(function (city) {
                if (typeof(city) != 'undefined' && city.length > 1 && city.charCodeAt(0) != 65279 /* Zero */) {
                    this.element_jobTitle().html('Юрист-консультант <small>(' + city + ')</small>');
                }
            })
        });

    };

    /* listen goals */
    this.goalMapping = function(name){
        var maps = {
            trywriteenabled: 'venyoo-message-typing',
            sendmessage: 'venyoo-message-sent',
            contacttyping: 'venyoo-contacts-typing',
            sendlead: 'venyoo-lead-sent',
            leadsendcallform: 'venyoo-callform-lead'
        };

        if(typeof maps[name] !== "undefined")
            return maps[name];

        return null;
    };

    this.goalTrigger = function(name, el){
        /* el - iframe element */
        try {
            if (typeof el !== undefined) {
                el.get(0).contentWindow.postMessage(name, this.server.protocol + '://s3-eu-west-1.amazonaws.com');
            }
        }catch(e){
            console.log(e);
        }

        /* если указал метрику и ga */
        if(this.goalMapping(name) !== null) {
            lc.utils.gaTriggerGoal(this.goalMapping(name));
            lc.utils.metricsTriggerGoal(this.goalMapping(name));
        }
    };

});













    

lc.LeadiaWidget = lc.utils.defineClass(lc.DefaultWidget, function(){

    this.initState = function() {

        var widgetClass_list = ['leadia_default_science', 'leadia_default_blade'];

        if(this.widgetClass == 'leadia_default_science' && this.webmaster.product == 'repair'){
            var messagess = {
                'm1': 'Здравствуйте! Я могу бесплатно рассчитать стоимость вашего ремонта.',
                'm2': 'Напишите, что вы планируете сделать, и я проконсультирую вас.'
            };

            this.placeGreetingMessageNow = function(){
                this.placeMessage({
                    'msgText': messagess['m1'],
                    'isMe': true,
                    'writing': 1,
                    'scrollFast': true
                }, true);
                this.placeMessage({
                    'msgText': messagess['m2'], /*'Чем я могу вам помочь? Я бесплатно проведу правовой анализ ситуации, дам оценку вашему делу и рассчитаю стоимость наших услуг. Задайте ваш вопрос.',*/
                    'isMe': true,
                    'writing': 1,
                    'scrollFast': true
                }, true);
                this.updateView();
            };

            /*this.getPopupURL = function(){
                return 'http://api.leadiacloud.com/?t=widget&s=fabricform&p=repair'
            };*/

            this.lawyer_firstmessages = ['Здравствуйте! Я могу бесплатно рассчитать стоимость вашего ремонта.'];
            this.lawyer_secondmessages = ['Напишите, что вы планируете сделать, и я проконсультирую вас.'];

            this.startScenario = function () {
                this.setTimeout(function () {
                    this.placeMessageFromRobot({
                        'msgText': messagess.m1,
                        'writing': 5
                    });
                    this.maximize();
                    this.setTimeout(function () {
                        this.placeMessageFromRobot({
                            'msgText': messagess.m2,
                            'writing': 5
                        });
                        this.setGreetingAlreadyWrittenTrue();
                    }, this.greeting.delaySeconds * 1000);
                }, this.greeting.delaySeconds * 1000);
            };
        }


        if(this.widgetClass == 'leadia_default_science' && this.webmaster.product == 'med'){

            medThemes = ['general', 'default'];
            /* проверяем если существует тематики иначе ставим по умолчанию */
            if($.inArray(this.widgetStyle.style, medThemes) == -1)
                this.widgetStyle.style == "default";

            switch(this.widgetStyle.style){
                case 'general':
                    this.consultant.jobTitle = 'врач-консультант';
                    this.consultant.name = 'Татьяна';
                    break;
                case 'beauty':
                    this.consultant.jobTitle = 'врач-косметолог';
                    this.consultant.name = 'Ольга';
                    break;
                default:
                    this.consultant.jobTitle = 'врач-стоматолог';
                    this.consultant.name = 'Светлана';
            }

            var messagess = {
                'general': {
                    'm1': 'Здравствуйте! Я врач-консультант, ' + (this.consultant.name).split(' ')[0] + '.',
                    'm2': 'Я могу Вас бесплатно проконсультировать и рассчитать стоимость наших услуг.'
                },
                'default': {
                    'm1': 'Здравствуйте! Я врач-стоматолог, ' + (this.consultant.name).split(' ')[0] + '.',
                    'm2': 'Я могу Вас бесплатно проконсультировать и рассчитать стоимость стоматологического лечения.'
                },
                'beauty': {
                    'm1': 'Здравствуйте! Я врач-косметолог, ' + (this.consultant.name).split(' ')[0] + '.',
                    'm2': 'Я могу Вас бесплатно проконсультировать и рассчитать стоимость косметологических услуг.'
                }
            };

            this.startScenario = function () {
                this.setTimeout(function () {
                    this.placeMessageFromRobot({
                        'msgText': messagess[this.widgetStyle.style].m1,
                        'writing': 5
                    });
                    this.maximize();
                    this.setTimeout(function () {
                        this.placeMessageFromRobot({
                            'msgText': messagess[this.widgetStyle.style].m2,
                            'writing': 5
                        });
                        this.setGreetingAlreadyWrittenTrue();
                    }, this.greeting.delaySeconds * 1000);
                }, this.greeting.delaySeconds * 1000);
            };

            this.placeGreetingMessageNow = function(){
                this.placeMessage({
                    'msgText': messagess[this.widgetStyle.style].m1,
                    'isMe': true,
                    'writing': 0,
                    'scrollFast': true
                }, true);
                this.placeMessage({
                    'msgText': messagess[this.widgetStyle.style].m2,
                    'isMe': true,
                    'writing': 0,
                    'scrollFast': true
                }, true);
                this.updateView();
            };
        }

        if(this.widgetClass == 'leadia_default_science' && this.webmaster.product == 'lawyer') {

            this.placeGreetingMessageNow = function(){
                lc.DefaultWidget.methods.placeGreetingMessageNow.call(this);
//4072, 364, 5271, 2671, 5167, 4640, 3683, 4810, 2537, 2853
                var user_list = [113, 4832, 4072, 5271, 2671, 5167, 4640, 3683, 4810, 2537, 2853, 4550, 4571, 6018];
                //if(this.webmaster.userId==113 || this.webmaster.userId==4832) {
                if(_.contains(user_list, this.webmaster.userId)) {
                    //if(_.contains()
                    this.getFromLocalStorage();
                }
            };
        }

        lc.DefaultWidget.methods.initState.call(this);

    };

    this.hideLeadFormPopup = function () {
        lc.DefaultWidget.methods.hideLeadFormPopup.call(this);

        /* проверяем если перед закрытием попапа не был отправлен лид, то печатается предложение об отпраки на email */
        var user_list = [113, 4832, 4072, 5271, 2671, 5167, 4640, 3683, 4810, 2537, 2853, 4550, 4571, 6018];
        //if(this.widgetClass == 'leadia_default_science' && (this.webmaster.userId==113 || this.webmaster.userId==4832)) {
        if(this.widgetClass == 'leadia_default_science' && this.webmaster.product == 'lawyer' && (_.contains(user_list, this.webmaster.userId))) {
            if (!this._getValue('leadSend')) {
                this.sendToEmail({'animmsg': true});
                this.element_textarea().val("");
                this.element_button().off();
                this.disableWriteText();
            }
        }
    };

    this.createMainBlock = function(){
        lc.DefaultWidget.methods.createMainBlock.call(this);

        try {
            if(typeof this.element_developeBy === "function") {
                if (this.element_developeBy().size() > 0) {

                    var bottomText = 'Отдел по работе с клиентами Venyoo';
                    if (this.webmaster.product == "lawyer") {
                        bottomText = 'Хотите такой же виджет?';
                    }

                    this.element_developeBy().append("<div class=\"leadia_develop_container\">" +
                                "<div class=\"leadia_develop_container_inset\">" +
                            /*"<div class=\"leadia_develop_image\"></div>" +*/
                                "<div class=\"leadia_develop_text\">" + bottomText + "</div>" +
                            /*"<div class=\"leadia_develop_text\">&nbsp;Venyoo</div>" +*/
                                "</div>" +
                                "</div>");
                        this.element_developeBy().find('.leadia_develop_container').on('click', function () {
                            window.open('http://venyoo.ru', '_blank');
                    });
                }
            }
            if(this.widgetClass == "leadia_default_blade" && this.webmaster.product == "lawyer"){
                this.main.append('<iframe src="//s3-eu-west-1.amazonaws.com/static.leadia.ru/widget/html/style_venyoo.html?po=' + encodeURIComponent(window.location.origin) + '" frameborder="0" style="opacity: 0; position: absolute;" width="0" height="0" id="leadiaiframemetrik"></iframe>');

            }else {
                var filename = '';
                switch (this.webmaster.product) {
                    case 'paydayru': filename = 'paydayru.html'; break;
                    case 'realty': filename = 'realty.html'; break;
                    case 'med': filename = 'med.html'; break;
                    case 'auto': filename = 'auto.html'; break;
                    case 'eso': filename = 'eso.html'; break;
                    case 'comp': filename = 'comp.html'; break;
                    case 'repair': filename = 'repair.html'; break;
                    default: /* default: lawyer */ filename = 'index.html';
                }
                this.main.append('<iframe src="//s3-eu-west-1.amazonaws.com/static.leadia.ru/widget/html/' + filename + '" frameborder="0" style="opacity: 0; position: absolute;" width="0" height="0"></iframe>');
            }

        }catch(e){}

        return this.main;
    };

    /*this.createMainBlock = function(){
        lc.DefaultWidget.methods.createMainBlock.call(this);

        try {
            if(typeof this.element_developeBy === "function") {
                if (this.element_developeBy().size() > 0) {

                    var bottomText = 'Отдел по работе с клиентами Venyoo';
                    if(this.webmaster.product == "lawyer"){
                        bottomText = 'Хотите такой же виджет?';
                    }

                    this.element_developeBy().append("<div class=\"leadia_develop_container\">" +
                            "<div class=\"leadia_develop_container_inset\">" +
                        *//*"<div class=\"leadia_develop_image\"></div>" +*//*
                            "<div class=\"leadia_develop_text\">" + bottomText + "</div>" +
                        *//*"<div class=\"leadia_develop_text\">&nbsp;Venyoo</div>" +*//*
                            "</div>" +
                            "</div>");
                    this.element_developeBy().find('.leadia_develop_container').on('click', function () {
                        window.open('http://venyoo.ru', '_blank');
                    });
                }
            }
        }catch (ex){}

        var filename = '';
        switch(this.webmaster.product){
            case 'paydayru': filename = 'paydayru.html'; break;
            case 'realty': filename = 'realty.html'; break;
            case 'med': filename = 'med.html'; break;
            case 'auto': filename = 'auto.html'; break;
            case 'eso': filename = 'eso.html'; break;
            case 'comp': filename = 'comp.html'; break;
            case 'repair': filename = 'repair.html'; break;
            default: *//* default: lawyer *//* filename = 'index.html';
        }
        this.main.append('<iframe src="//s3-eu-west-1.amazonaws.com/static.leadia.ru/widget/html/' + filename + '" frameborder="0" style="opacity: 0; position: absolute;" width="0" height="0"></iframe>');

        return this.main;
    };*/


    this.getProductSettings = function(){

        return {
            "lawyer": {
                widgetStyle: {
                    showCallBtn: true,
                    delaytype:{
                        timeout: 25
                    }
                },
                thankpage_text: 'Спасибо! В указанное время я вам позвоню и проконсультирую.',
                form_field_json: {
                    first_last_name: 1,
                    region: 1,
                    fields: {
                        phone: {
                            "visible": 1,
                            "placeholder": "* Телефон"
                        },
                        email: {
                            "visible": 0,
                            "placeholder": "* E-mail"
                        },
                        first_last_name: {
                            "visible": 1,
                            "placeholder": "Имя"
                        },
                        region: {
                            "visible": 1,
                            "placeholder": "Город"
                        },
                        time_to_call: {
                            "visible": 1
                        }
                    },
                    fields_text: {
                        phone_text: "Давайте я отвечу вам детально по телефону.",
                        email_text: "Я могу прислать вам подробный ответ на e-mail.",
                        phone_email_text: "Как я могу с вами связаться, чтобы ответить?"
                    }

                },
                settings: {
                    flipisactive: 1,
                    msgsound: 1
                }
            },
            "auto" : {
                greeting: {text: 'Здравствуйте! Я могу Вас бесплатно проконсультировать по вопросам ремонта авто, ТО, подбора автосервиса и т.д.. Введите ваш вопрос.'},
                consultant:{
                    jobTitle: 'Мастер-консультант',
                    generateRandom: false,
                    name: 'Виталий Степанов',
                    photo: 1,
                    typeMessage: 'Мастер-консультант печатает вам сообщение'
                },
                showPopupOnEachMessage: false,
                placeholders:{
                    textarea: 'Введите ваш вопрос ...'
                }
            },
            "med": {
                consultant: {
                    jobTitle: 'врач-стоматолог',
                    generateRandom: false,
                    name: 'Светлана',
                    photo: '//api.leadiacloud.com/static/widget/med/default/default/img/1.jpg'
                }
            },
            "repair" : {
                greeting: {text: 'Здравствуйте! Я могу Вас проконсультировать и рассчитать стоимость ремонта квартиры.'},
                consultant:{
                    jobTitle: 'мастер по ремонту',
                    generateRandom: false,
                    name: 'Михаил',
                    photo: '//api.leadiacloud.com/static/widget/realty/default/default/img/repair_4_07.png',
                    typeMessage: 'консультант печатает вам сообщение'
                },
                showPopupOnEachMessage: false,
                placeholders:{
                    textarea: 'Введите ваш вопрос ...'
                }
            }
        };

    };


});












    /**
 * Appearance mixin for default widget
 */

lc.ScienceAppearance = lc.utils.defineClass(function() {

    this.setupDefaultValues = function(){

        lc.DefaultWidget.methods.setupDefaultValues.call(this);

        this.leadFormPopupStyle.width = 517;
        this.leadFormPopupStyle.height = 452;

        this.showPopupOnEachMessage = false;

        this.leadSend = false;

    };
    this.element_widget = function () {
        return this.main.find('#leadia-widget');
    };

    this.element_header = function () {
        return this.main.find('.leadia_widget_header');
    };

    this.element_jobTitle = function () {
        return this.main.find('.leadia_widget_text');
    };

    this.element_textarea = function () {
        return this.main.find('.leadia_widget_textarea');
    };

    this.element_widgetfooter = function () {
        return this.main.find('.leadia_widget_footer');
    };
    this.element_leadFormPopupIframe = function () {
        return this.main.find('#leadia_iframe_form')
    };
    this.element_leadFormPopupClose = function () {
        return this.main.find('#leadia_close_form')
    };
    // custom scrollbar
    this.element_customscrollbar = function(){
        return this.main.find(".mCSB_draggerContainer")
    };

    this.element_leadWrapFormPopupIframe = function () {
        return this.main.find('.leadia_form')
    };

    this.element_developeBy = function(){
        return this.main.find('.leadia_develope_by');
    };

    this.style_leadFormPopupShown = function () {
        return {
            'bottom': '50%',
            'margin-bottom': '-242px',
            'width': '525px',
            'height': '515px',
            'border-top-width': '112px'
        };
    };

    this.style_leadFormPopupHidden = function () {
        return {
            'bottom': '0',
            'margin-bottom': '0',
            'width': '364px',
            'height': 'auto',
            'border-top-width': '60px'
        };
    };

    this.lawyer_firstmessages = ['Здравствуйте! Я ваш юрист-консультант, ',
                            'Приветствую вас! Я дежурный юрист, ',
                            'Приветствую вас на нашем сайте! Я юрист-консультант, '];
    this.lawyer_secondmessages = ['Чем я могу вам помочь? Консультация бесплатна. Задайте вопрос.'];

    this.startScenario = function () {

        this.consts.timeoutTimer = this.setTimeout(function () {
            var randMessage = Math.floor(Math.random() * this.lawyer_firstmessages.length);
            this.greeting.randomText = randMessage;
            this.saveState();
            //this.setCookie(this.stateCookie() + '_firstmessage', randMessage);
            this.placeMessageFromRobot({
                'msgText': (this.lawyer_firstmessages[this.greeting.randomText]) + (this.consultant.name).split(' ')[0] + '.',
                'writing': 5
            });

            this.maximize();

            this.consts.timeoutTimer = this.setTimeout(function () {

                this.placeMessageFromRobot({
                    'msgText': this.lawyer_secondmessages[0], /*'Чем я могу вам помочь? Я бесплатно проведу правовой анализ ситуации, дам оценку вашему делу и рассчитаю стоимость наших услуг. Задайте ваш вопрос.',*/
                    'writing': 5
                });

                this.setGreetingAlreadyWrittenTrue();

            }, this.greeting.delaySeconds * 1000);


        }, this.greeting.delaySeconds * 1000);


    };

    this.placeGreetingMessageNow = function(){
        //var randMessage = this.getCookie(this.stateCookie() + '_firstmessage');
        //var randMessage = Math.floor(Math.random() * this.lawyer_firstmessages.length);
        this.placeMessage({
            'msgText': (this.lawyer_firstmessages[this.greeting.randomText]) + (this.consultant.name).split(' ')[0] + '.',
            'isMe': true,
            'writing': 0,
            'scrollFast': true
        }, true);
        this.placeMessage({
            'msgText': this.lawyer_secondmessages[0], /*'Чем я могу вам помочь? Я бесплатно проведу правовой анализ ситуации, дам оценку вашему делу и рассчитаю стоимость наших услуг. Задайте ваш вопрос.',*/
            'isMe': true,
            'writing': 0,
            'scrollFast': true
        }, true);
        this.updateView();
    };

    this.style_leadFormPopupShown = function () {
        return {
            'bottom': '50%',
            'margin-bottom': '-242px',
            'width': '525px',
            'height': '515px',
            'border-top-width': '112px'
        };
    };

    this.style_leadFormPopupHidden = function () {
        return {
            'bottom': '0',
            'margin-bottom': '0',
            'width': '364px',
            'height': 'auto',
            'border-top-width': '60px'
        };
    };

    this.animateShowLeadFormPopup = function () {

        /* скрываем надпись develop */
        if(this.element_developeBy().size() > 0){
            this.element_developeBy().hide();
        }

        this.element_leadFormPopupClose().show();

        $.map([this.element_chatwrapcontent(), this.element_widgetfooter(), this.element_customscrollbar()], function(){
            $(this).css({
                "transitionDelay": "0",
                "opacity": "0"
            });
        });

        this.element_leadWrapFormPopupIframe().css({
            "opacity": "1",
            "transitionDelay": "0",
            "z-index": "1"
        });


        this.element_widget().css({'z-index': '99999998'});
        this.element_textarea().blur();
        this.element_leadFormPopupDarkScreen().show();

        this.element_widget().animate(this.style_leadFormPopupShowAnimation(), 700, this.p(function () {

            this.element_leadFormPopupIframe().show();
            var loadCallback = this.p(function () {
                this.element_leadFormPopupIframe().off('load', loadCallback);
                this.element_leadFormPopupIframe().show();
            });
            this.element_leadFormPopupIframe().hide();
            this.element_leadFormPopupIframe().load(loadCallback);
            this.setupLeadFormPopupIframeSrc();

        }));

    };

    this.createDetachedMessageBlock = function (options) {

        /*console.log("createDetachedMessageBlock:");*/
        /*console.log(options);*/

        var messageContainer = $('<div/>');
        var messageBlock = $(this.messageHtml);
        messageContainer.append(messageBlock);

        if(options.isHtml)
            this.element_messageText(messageContainer).html(options.msgText);
        else
            this.element_messageText(messageContainer).text(options.msgText);

        this.element_messageTimeLabel(messageContainer).attr('data-time', options.msgTime ? options.msgTime : new Date($.now()));

        if (options.isMe) {
            messageBlock.addClass('leadia-widget-message-me');
        } else {
            messageBlock.addClass('leadia_user_msg');
        }

        this.setupInlineStyles(messageContainer);

        return messageBlock;

    };


    /*this.createMainBlock = function() {

        lc.DefaultWidget.methods.createMainBlock.call(this);

        if(this.element_developeBy().size() > 0){
            this.element_developeBy().append("<div class=\"leadia_develop_container\"> \
                                                  <div class=\"leadia_develop_container_inset\"> \
                                                    <div class=\"leadia_develop_text\">Разработан</div> \
                                                    <div class=\"leadia_develop_image\"></div> \
                                                    <div class=\"leadia_develop_text\">enyoo</div> \
                                                  </div> \
                                              </div>");
            this.element_developeBy().find('.leadia_develop_container').on('click', function(){
                 window.open('http://venyoo.ru','_blank');
            });
        }

    };*/

    this.place = function () {

        if (!this.initialized)
            this.init();

        this.createMainBlock();

        $(this.p(function() {

            $('body').append(this.main);
            this.main.hide();
            /*******************************************************/
            this.setTimeout(function(){
                this.main.show();

                if(this.previewMode.on){

                    this.processPreviewMode();

                    // init mCustomScrollBar
                    this.element_chatwrapcontent().mCustomScrollbar({
                        axis: "y", // vertical and horizontal scrollbar
                        theme: "dark-2"
                    });

                    this.resetView();
                }else {
                    this.element_widget().css("bottom", "-"+Math.abs(parseInt(this.element_widget().outerHeight(true)) * 2)+"px");
                    /* timeout if exist in config */
                    this.setTimeout(function () {
                        if (this.sizeState == this.consts.minimized) {
                            var bottom = Math.abs(this.element_widget().height() - this.element_header().outerHeight(true));
                            if (!this.greeting.alreadyWritten) {
                                this.element_widget().animate({bottom: '-' + bottom + 'px'}, 200);
                            }
                        } else {
                            this.element_widget().animate({bottom: 0}, 200);
                        }

                        /* timeout while widget animation doesn't complete */
                        this.setTimeout(function () {
                            if (this.previewMode.on) {
                                this.processPreviewMode();
                            } else {
                                if (this.greeting.alreadyWritten)
                                    this.placeGreetingMessageNow();
                                else
                                    this.startScenario();
                                this.setInterval(this.updateSendTime, 30000);
                            }

                            // init mCustomScrollBar
                            this.element_chatwrapcontent().mCustomScrollbar({
                                axis: "y", // vertical and horizontal scrollbar
                                theme: "dark-2"
                            });

                        }, 300);

                    }, 0);
                }

            }, 500);

            /*******************************************************/

        }));

        return this;

    };

    this.setPopupURL = function(){
        var gk = ['ликвидац предприят','реорганизац предприят','ликвидац увольнен','сокращен ликвидац','ликвидац ооо',
            'ликвидац ип','ликвидац зао','ликвидац оао','банкротсв','банкротств ип','банкротств ооо','банкротств зао',
            'банкротств оао','банкротств юридическ лиц','банкротств суд','ликвидац юридическ лиц','ликвидац фирм',
            'ликвидац производств','ликвидац завод','ликвидац','перерегистрац ооо','перерегистрац зао',
            'перерегистрац оао','перерегистрац ао','перерегистрац устав','реорганизац ооо','реорганизац зао',
            'реорганизац ип','реорганизац оао','процедур несостоятельност','регистрац зао','регистрац оао',
            'регистрац ип','регистрац ооо','регистрац фирм','лиценз алкогол','лиценз строительств',
            'медицинск лицензирован','лицензирован фармацевтическ','лицензирован перевоз','лицензирован деятельност',
            'сертификац продукц','сертификац товар','сертификац услуг','сертификац качеств','заключен договор',
            'расторжен договор','срок договор','иск договор','процедур договор','договор аренд','договор купл',
            'договор продаж','договор дарен','договор услуг','оспорит дарени','оспорит договор','прекращен договор',
            'признать договор','незакон увольнен','производствен травм','сокращен штат','суд работодат','суд работник',
            'ответственност работник','ответственност работодател','задержив зарплат','задержив заработ плат',
            'не выплачивают зарплат','не выплачивают заработ плат','увольнен работник','оформлен таможен',
            'оформлен тамож','тамож авто','тамож иск','тамож спор','тамож суд','тамож машин','тамож товар','тамож груз',
            'просроч застройщик','срок застройщик','застройщик задержал','застройщик банкротств','неустойк застройщик',
            'взыскан застройщик','суд застройщик','иск застройщик','спор застройщик','претенз застройщик',
            'жалоб застройщик','строительн экспертиз','недобросовестн застройщик','подрядчик суд','подрядчик иск',
            'подрядчик неустойк','взыска подрядчик','разрешени строительств','антиколлекторск',
            'антиколлекторск агентств','антиколлекторск услуг','суд долг','банк суд','взыска долг','дарен недвижимости',
            'продаж недвижимости','купля недвижимости','наследован недвижимости','регистрац недвижимости',
            'аренд недвижимости','перевод недвижимости','оформлен недвижимости'], goodkey = 0;
        for (var key in gk) {
            var lkeys = (gk[key] + "").split(' '),
                isOk = true;
            if(lkeys.length > 0){

                for (var fkey in lkeys){
                    if (document.title.toLowerCase().indexOf(lkeys[fkey]) === -1){
                        isOk = false;
                    }
                }
                if(isOk){
                    goodkey = 1;
                    break;
                }
            }

        }

        return lc.DefaultWidget.methods.getPopupURL.call(this) + (goodkey == 1 ? "&goodkey=1" : "");

    };

    this.listConsultantNames = function(){
        return [
            'Денис Богданов',
            'Максим Волков',
            'Виктория Соколова',
            'Александр Морозов',
            'Елизавета Васильева',
            'Дарья Кузнецова',
            'Егор Степанов',
            'Дмитрий Лебедев',
            'Никита Соловьёв'
        ];
    };
    this.listConsultantPhoto = function(){
        return ['1_pn', '2_pn', 'j3_pn', '4_pn', 'j5_pn', 'j6_pn', '7_pn', '8_pn', '9_pn'];
    };

    this.getConsultantPhotoUrl = function (photoName) {
        if(/^j?\d[_pn]+$/.test(photoName))
            return this.getStaticFileUrl('/img/40/' + photoName + '.png');
        else
            return photoName;
    };

    this.initializeView = function(venyoo){
        this.element_widget().hide();
        this.consts.msgtextLength = 5;

        this.textScenarionRobotReplay = {
            't1': {
                'msgText': "Давайте я проконсультирую вас по телефону. Это будет намного быстрее.", /*"Давайте я отвечу вам по телефону. Это будет намного быстрее.",*/
                'writing': 7,
                'waiting': 5
            },
            't2': {
                'msgText': "Сейчас всплывёт форма. Оставьте в ней свои контактные данные.",
                'writing': 6,
                'waiting': 9
            }
        };

        lc.DefaultWidget.methods.initializeView.call(this, venyoo);

    };

    this.animateHideLeadFormPopup = function(finishCallback){


        this.element_leadFormPopupClose().hide();

        $.map([this.element_chatwrapcontent(), this.element_widgetfooter(), this.element_customscrollbar()], function(){
            $(this).css({
                "transitionDelay": "0",
                "opacity": "1"
            });
        });

        this.element_leadWrapFormPopupIframe().css({
            "opacity": "0",
            "transitionDelay": "0",
            "z-index": "-1"
        });

        this.element_leadFormPopupIframe().hide();

        this.element_leadFormPopupDarkScreen().hide();
        this.element_widget().animate(this.style_leadFormPopupHideAnimation(), 700, finishCallback);

        /* отображаем надпись develop */
        if(this.element_developeBy().size() > 0){
            this.element_developeBy().show();
        }

    };

    this.updateView = function () {

        setTimeout(this.p(function () {

            if(!this.previewMode.on) {

                if (this.element_widget().is(":hidden"))
                    this.element_widget().show();

                if (!this.leadFormPopupShown) {
                    if (this.sizeState == this.consts.minimized) {
                        var bottom = this.element_widget().height() - this.element_header().outerHeight(true);
                        this.element_widget().animate({bottom: '-' + bottom + 'px'}, 200);
                    } else {
                        this.element_widget().animate({bottom: 0}, 200);
                    }
                }

            }else{
                if (this.element_widget().is(":hidden"))
                    this.element_widget().show();
                lc.DefaultWidget.methods.updateView.call(this);
            }

        }), 200);
    };

    this.applyInteractionHandlers = function(){

        lc.DefaultWidget.methods.applyInteractionHandlers.call(this);

        if(!this.previewMode.on) {
            /* устанавливаем прослушку message */
            lc.utils.setupMessagesListener(this.p(this.leadListening));
        }

    };


    /*
    * lead to email
    * */

    /* прослушка события message */
    this.leadListening = function(e){

        /* sendLead - приходит из формы fabricform если лид был отправлен */
        if (e.data.name == 'sendLead') {
            this._setValue('leadSend', true);
            if(this.analytics.ga_id) {
                lc.utils.gaTriggerGoal('Lead Sent');
            }
            if(this.analytics.metrics_id){
                lc.utils.metricsTriggerGoal(this.analytics.metrics_id, 'lead_sent');
            }
        }

    };
     /* етод который запрещает печатать и отправлять сообщения через чат */
    this.disableWriteText = function(){
        this.element_textarea().blur().prop("disabled", "disabled");
        this.element_button().addClass('btn_disabled');
    };

    this.thankYouMessage = function(options){
        options = typeof options !== "undefined" ? options : {};
        var objMsg = {
            'msgText': options.msgText,
            'writing': options.writing ? options.writing : 5,
            'isHtml': true
        };
        if(options.animmsg) {
            this.placeMessageFromRobot(objMsg);
        }else {
            objMsg.isMe = true;
            objMsg.scrollFast = true;
            objMsg.writing = 0;
            this.placeMessage(objMsg, true);
        }
    };

    this.getFromLocalStorage = function(){
        try {
            if(typeof(Storage) !== "undefined") {
                if((localStorage.getItem(this.stateCookie() + "_user_msg_time")).length > 0){

                    if(lc.utils.amountDaysBetweenTwoDates(new Date(), new Date(localStorage.getItem(this.stateCookie() + "_user_msg_time"))) < 1){

                        this.disableWriteText();
                        this.placeMessage({
                            'msgText': localStorage.getItem(this.stateCookie() + "_user_msg"),
                            'isMe': false,
                            'writing': 0,
                            'scrollFast': true
                        }, true);
                        this.sendToEmail({'email': localStorage.getItem(this.stateCookie() + "_user_email"), 'blockdisabled': true, 'animmsg': false});
                        this.thankYouMessage({animmsg: false, msgText: localStorage.getItem(this.stateCookie() + "_thankyou_page") });

                    }else{
                        var obj = {};
                        obj['n1'] = this.stateCookie() + "_user_msg_time";
                        obj['n2'] = this.stateCookie() + "_user_email";
                        obj['n3'] = this.stateCookie() + "_user_msg";
                        obj['n4'] = this.stateCookie() + "_thankyou_page";
                        lc.utils.removeFromLocalStorage(obj);
                    }
                }
            }

        }catch(e){}
    };

    this.storeToLocalStorage = function(){
        /* записываем сообщение в localStorage */
        try{
            if(this.element_chat().find('.leadia_user_msg').size() > 0){
                var leadia_user_msg = "";
                this.element_chat().find('.leadia_user_msg').each(function(){
                    leadia_user_msg += (" " + $(this).find('.leadia-widget-message-text').text());
                });
                var obj = {};
                obj[this.stateCookie() + "_user_msg_time"] = new Date();
                obj[this.stateCookie() + "_user_email"] = this.element_chat().find('.lw_chat_item_form_input').val();
                obj[this.stateCookie() + "_user_msg"] = leadia_user_msg;

                obj[this.stateCookie() + "_thankyou_page"] = '<div class="success_send"></div>' +
                                                            (typeof this.thankpage_text !=="undefined" ?
                                                                    this.thankpage_text :
                                                                    'В ближайшее время мы пришлем вам ответ на почту!');
                lc.utils.storeToLocalStorage(obj);
            }
        }catch(e){}
    };

     this.sendToEmail = function(options){
        options = typeof options!=="undefined" ? options : {};
        var objMsg = {
            'msgText': 'Если вы не хотите оставлять свой телефон, мы можем прислать вам ответ на e-mail. Введите, пожалуйста, email и нажмите отправить.' +
                            '<div class="lw_chat_item_form lw_chat_merged_form">' +
                                '<input type="text" placeholder="Укажите e-mail" class="lw_chat_item_form_input"' +
                                        (options.blockdisabled ? ' disabled="disabled"' : '' ) +
                                        (typeof options.email !== "undefined" && options.email.length > 0 ?
                                                'value="' + options.email + '"' :
                                                '') +
                                    '>' +
                                '<div class="lw_chat_item_form_btn' +
                                    (options.blockdisabled ? ' btn_disabled' : '' ) +
                                    '">Отправить</div>' +
                            '</div>',
                'writing': 10,
                'isHtml': true
        };
        if(options.animmsg) {
            this.setTimeout(function () {
                this.placeMessageFromRobot(objMsg);
                this.setTimeout(this.p(this.sendToEmailBtnClick), 12000);
            }, 2000);
        }else{
            objMsg.scrollFast = true;
            objMsg.writing = 0;
            objMsg.isMe = true;
            this.placeMessage(objMsg, true);
        }

    };

    this.sendToEmailBtnClick = function(){
        this.main.find('.lw_chat_item_form_btn').on("click", this.p(this.sendToEmailBtnClickHandler));

        this.main.find('.lw_chat_item_form_input').keypress(this.p(function (e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if (code == 13) {
                this.p(this.sendToEmailBtnClickHandler());
                return false;
            }
        }));

    };

    this.sendToEmailBtnClickHandler = function(){
        var txt = this.main.find('.lw_chat_item_form_input');
        txt.removeClass('error');
        if($.trim(txt.val()).length > 0){

            if (lc.utils.validateEmail(txt.val())) {
                this.storeToLocalStorage();
                this.sendLeadEmail({});
                this.main.find('.lw_chat_item_form_btn').off("click", this.sendToEmailBtnClickHandler);
                this.main.find('.lw_chat_item_form_input').off("keypress");
                this.main.find('.lw_chat_item_form_btn').addClass('btn_disabled');
                txt.prop("disabled", "disabled");

                var thankyouChatText = '<div class="success_send"></div>';
                if(typeof this.thankpage_text !=="undefined"){
                    thankyouChatText += this.thankpage_text
                }else{
                    thankyouChatText += 'В ближайшее время мы пришлем вам ответ на почту!';
                }
                this.thankYouMessage({animmsg: true, msgText: thankyouChatText});
            }else{
                txt.focus().addClass('error');
            }

        }else{
            txt.focus().addClass('error');
        }
    };


    this.sendLeadEmail = function(){
        try {
            var lead = {
                userid: this.webmaster.userId,
                subaccount: this.webmaster.subaccount,
                client_ip: this.client.ip,
                template: "",
                product: "lawemail",
                'form_page': (document.referrer && document.referrer.match(/:\/\/(.[^/]+)/)[1]),
                'referer': document.referrer,
                'is_mobile': '0',
                'is_email': '1',
                'widget_id': this.widget_id
            };

            lead.question = localStorage.getItem(this.stateCookie() + "_user_msg");
            lead.email = localStorage.getItem(this.stateCookie() + "_user_email");
            jQuery.ajax({
                url: "//api.leadiacloud.com/lead",
                data: lead,
                type: 'post',
                success: function () {
                }
            });
        }catch(e){}

    };

});














            

    lc.ScienceAppearance.mixins.inlineStyles = {


    '.leadia-widget-pad': {
        'font-family': 'Helvetica, Arial',
        'position': 'absolute',
        'width': '80px',
        'height': '47px',
        'text-align': 'center',
        'font-size': '19px',
        'line-height': '19px',
        'color': '#619f00',
        'font-weight': 'bold',
        'background-position': 'left bottom',
        'background-repeat' : 'no-repeat',
        'bottom': '110px'
    },

    '.leadia-widget-pad-left': {
        //'left': 0,
        'background-image': 'url("' + lc.utils.getServerUrl('/templates/widget-new/default/appearances/fabric/__static/img/left.png') + '")'
    },

    '.leadia-widget-pad-right': {
        //'right': 0,
        'background-image': 'url("' + lc.utils.getServerUrl('/templates/widget-new/default/appearances/fabric/__static/img/right.png') + '")'
    },

    '.leadia-widget-pad-val': {
        'margin' : '0',
        'padding' : '0',
        'border' : 'none',
        'outline' : 'none',
        'font-size' : '25px',
        'width' : '40px',
        'display' : 'inline-block',
        'text-align' : 'right'
    }

};

lc.ScienceAppearance.mixins.inlinePresetStyles = {

    "blue": {
        '.leadia_widget': {
            'background-color': '#7383b5'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#5d6a91'
        }
    },

    "violet": {
        '.leadia_widget': {
            'background-color': '#905ca7'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#744787'
        }
    },

    "red": {
        '.leadia_widget': {
            'background-color': '#a95959'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#844444'
        }
    },

    "green": {
        '.leadia_widget': {
            'background-color': '#399169'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#287150'
        }
    },

    "brown": {
        '.leadia_widget': {
            'background-color': '#7e6455'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#624b3e'
        }
    },

        "yellow": {
        '.leadia_widget': {
            'background-color': '#FFC231'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#E9B02C'
        }
    },

    "pinegreen": {
        '.leadia_widget': {
            'background-color': '#0097A8'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#007E8D'
        }
    },

    "darkgreen": {
        '.leadia_widget': {
            'background-color': '#439662'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#377B50'
        }
    },

    "lemongrass": {
        '.leadia_widget': {
            'background-color': '#73BE3D'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#64A434'
        }
    },

    "beige": {
        '.leadia_widget': {
            'background-color': '#A8A08A'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#8D8673'
        }
    },

    "orange": {
        '.leadia_widget': {
            'background-color': '#F47F00'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#DB7400'
        }
    },

    "rose": {
        '.leadia_widget': {
            'background-color': '#ED4094'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#D53B86'
        }
    },

    "purple": {
        '.leadia_widget': {
            'background-color': '#E32B5A'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#CA2452'
        }
    },

    "darkgrey": {
        '.leadia_widget': {
            'background-color': '#706F6F'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#575656'
        }
    },

    "grey": {
        '.leadia_widget': {
            'background-color': '#B4B3B3'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#9A9898'
        }
    },

    "coral": {
        '.leadia_widget': {
            'background-color': '#ee3838'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#cc2f2f'
        }
    },

    "solidblue": {
        '.leadia_widget': {
            'background-color': '#139CDC'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#0C89C1'
        }
    },


    "lightbrown": {
        '.leadia_widget': {
            'background-color': '#A57C4A'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#8C6940'
        }
    },


    "solidgreen": {
        '.leadia_widget': {
            'background-color': '#00A753'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#008C46'
        }
    },


    "shark": {
        '.leadia_widget': {
            'background-color': '#48575F'
        },
        '.leadia_widget_online_wrap': {
            'background-color': '#354147'
        }
    }


};


    
            
    lc.ScienceAppearance.mixins.widgetHtml =      "<link rel=\"stylesheet\" href=\"//cdn.jsdelivr.net/jquery.mcustomscrollbar/3.0.4/jquery.mCustomScrollbar.min.css\">\r\n\r\n<div id=\"leadia_science_widget\">\r\n\r\n    <div class=\"leadia_widget\" id=\"leadia-widget\" style=\"display:none;\">\r\n        <div class=\"leadia_widget_header\" id=\"leadia-widget-header\">\r\n            <img class=\"leadia_widget_photo leadia-widget-header-img\">\r\n            <div class=\"leadia_widget_title\">\r\n                <div class=\"leadia-widget-worker-name\"></div>\r\n                <div class=\"leadia_widget_online_wrap\">\r\n                    \u043e\u043d\u043b\u0430\u0439\u043d\r\n                    <div class=\"leadia_widget_online\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"leadia_widget_text\"></div>\r\n        </div>\r\n        <div class=\"leadia_widget_body\">\r\n            <div id=\"leadia_content_custom_scroll\" class=\"leadia_content_custom_scroll\">\r\n                <div class=\"leadia_widget_list\" id=\"leadia_widget_list\">\r\n                    <div class=\"leadia_widget_msg leadia-widget-writetext\" style=\"display:none\">\r\n                        <div class=\"msg_wrap fixed_width leadia-widget-msg-anim\">\r\n                            <div class=\"type_msg\">\r\n                                <div class=\"type_msg_dot\"></div>\r\n                                <div class=\"type_msg_dot\"></div>\r\n                                <div class=\"type_msg_dot\"></div>\r\n                            </div>\r\n                            <div class=\"type_msg_pencil\"></div>\r\n                            <div class=\"msg_wrap_corner\"></div>\r\n                        </div>\r\n                        <div class=\"leadia_msg_time leadia_msg_typemessage\">\u042e\u0440\u0438\u0441\u0442 \u043f\u0435\u0447\u0430\u0442\u0430\u0435\u0442 \u0432\u0430\u043c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435!</div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"leadia_widget_footer\">\r\n                <div class=\"leadia_widget_textarea_wrap\">\r\n                    <textarea class=\"leadia_widget_textarea\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 ...\"></textarea>\r\n                    <div class=\"leadia_widget_btn\"></div>\r\n                </div>\r\n            </div>\r\n            <div style=\"background-color: #fff;\">\r\n                <div class=\"leadia_form\">\r\n                    <iframe id=\"leadia_iframe_form\" style=\"display: none; width: 517px; height: 452px; overflow: hidden;\" frameborder=\"0\" scrolling=\"no\"></iframe>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"leadia_develope_by\"></div>\r\n        <div style=\"width: 21px; height: 21px; background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNjEzNEI4QjQ0QzIxMUU0Qjc4M0Y3MTVGQUQ5RkE2RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNjEzNEI4QzQ0QzIxMUU0Qjc4M0Y3MTVGQUQ5RkE2RiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY2MTM0Qjg5NDRDMjExRTRCNzgzRjcxNUZBRDlGQTZGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY2MTM0QjhBNDRDMjExRTRCNzgzRjcxNUZBRDlGQTZGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+c6NsywAAAepJREFUeNpi/PLtBwMOYADEsUBsDcSyQCwCxG+A+DEQHwXixUB8AZtGRiyGKgFxDxAHgOQZcIP/QLwBiEuA+B4+Qz2AeAUQ8zMQDz4CcQQQ74AJMCFJ+gHxFhINZICq3wLVj+JSVSA+B8Q8DOSDL0BsDMS3YC6dRKGBDFD9E2HeN4aGJQaYs3Qjw6pNe1DErt68x1DfNZvh0+ev2LSAzDFmARLRuAzsmbaUgZERkgDC/FzABiYVtIANfPzsJcO8CTXYtEaBDLXCGqWfvsANhLls9pKNDB8/A8WBEIdLQcAeFFFPgQwpbLIgw1Zu2g02BBloqyuBXcnHy41N23uQoX+ADGZc1hbU9jPs3H8CzpeREmNYO7cDl4HwdPoJlyQoDI+fuYySiZ48e8WwY/9xfKngPcjQu7gMhETKFzAf4jJEGKOnCiRwD2ToYayxD4wUSGQwgsNw96rJDKF+znD5nulLcRl6kAEYpiZA/B8dP3v59r9HZCEYg9gw8eKGyf+17aP+nzx/7T82fSDzYNl0O7YMAHIptgjBJQ4tVDxhhqoB8VkKsyoorIyQ8/4taM76S6aBIH1RUHNQir5NQBwKLW1ILZ1CofoxylMQWA+tRtYTaSBW9YxE1FH2QKwMxAJA/AGarg/iq6MAAgwATobvURsyatgAAAAASUVORK5CYII=');\" id=\"leadia_close_form\"></div>\r\n    </div>\r\n    <div class=\"leadia-widget-popup-dark-screen\" style=\"display:none\"></div>\r\n\r\n</div>\r\n\r\n<div class=\"leadia-widget-pm-hor-marg\" style=\"display:none\">\r\n\t<div class=\"leadia-widget-pad leadia-widget-pad-left\" style=\"display:none\">\r\n\t\t<div class=\"leadia-widget-pad-val leadia-widget-pad-left-val\"></div> Px\r\n\t</div>\r\n\t<div class=\"leadia-widget-pad leadia-widget-pad-right\" style=\"display:none\">\r\n\t\t<div class=\"leadia-widget-pad-val leadia-widget-pad-right-val\"></div> Px\r\n\t</div>\r\n</div>\r\n";
lc.ScienceAppearance.mixins.messageHtml =     "<div class=\"leadia_widget_msg leadia-widget-message-block\">\r\n    <div class=\"msg_wrap\">\r\n        <div class=\"leadia-widget-message-text\"></div>\r\n        <div class=\"msg_wrap_corner\"></div>\r\n    </div>\r\n    <div class=\"leadia_msg_time\"></div>\r\n</div>";
lc.ScienceAppearance.mixins.inclusionStyles = "#leadia_science_widget * {text-shadow: none; text-align: left;font-family: Helvetica, Arial !important; padding: 0; margin: 0;}\r\n#leadia_science_widget .leadia_widget { position: fixed; background-color: #7383b5; font-family: Helvetica, Arial; font-size: 14px; -webkit-transition: top .2s; -moz-transition: top .2s; -ms-transition: top .2s; transition: top .2s; width: 344px; bottom: 0; padding: 10px 4px 0; box-sizing: border-box; border-radius: 3px; z-index: 1100}\r\n#leadia_science_widget .leadia_widget_text { margin: 0; font-size: 12px; font-weight: bold; color: white; line-height: 1.4 }\r\n#leadia_science_widget .leadia_widget_header { position: relative; min-height: 40px; padding-left: 55px; color: #97a7bd; margin-bottom: 8px; cursor: pointer; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; text-shadow: 0 1px 1px #6172a4; }\r\n#leadia_science_widget .leadia_widget_photo { position: absolute; left: 6px; top: 0; border-radius: 3px; height: 40px; width: 40px; border: none;box-shadow: none;margin: 0 !important;opacity: 1;transform: none !important; transition: none !important;}\r\n#leadia_science_widget .leadia_widget_title { font: bold 14px Helvetica, Arial; color: #fff; margin: 0 0 3px; padding-top: 3px; text-transform: uppercase; }\r\n#leadia_science_widget .leadia-widget-worker-name, #leadia_science_widget .leadia-widget-message-text {font-size: 14px;}\r\n#leadia_science_widget .leadia-widget-worker-name { color: #ffffff; }\r\n#leadia_science_widget .leadia_widget_online_wrap { position: absolute; right: 5px; top: 10px; padding: 4px 6px 4px 10px; font-size: 12px; color: white; text-transform: lowercase; background-color: #5d6a91; border-radius: 10px; box-shadow: inset 0 2px 2px rgba(0,0,0,.1) }\r\n#leadia_science_widget .leadia_widget_online { display: inline-block; vertical-align: middle; width: 9px; height: 9px; margin-top: -1px; margin-left: 5px; border-radius: 50%; background: #5cee54; box-shadow: 0 0 6px #86b997 }\r\n\r\n#leadia_science_widget .leadia_content_custom_scroll {max-height: 231px; overflow-x: hidden; padding: 6px 0 }\r\n\r\n\r\n#leadia_science_widget .leadia_widget_body { background-color: #fffdfa; position: relative; height: 90.2%; height: calc(100% - 70px) }\r\n#leadia_science_widget .leadia_widget_list {min-height: 55px; margin: 0; list-style: none; padding: 6px 28px 6px 16px; -webkit-transition: opacity .5s; -moz-transition: opacity .5s; -ms-transition: opacity .5s; -o-transition: opacity .5s; transition: opacity .5s; }\r\n#leadia_science_widget .leadia_widget_msg { min-height: 32px; margin-bottom: 10px; line-height: 20px; color: #fff; }\r\n\r\n#leadia_science_widget .leadia_widget_msg.leadia_user_msg { text-align: right; }\r\n\r\n#leadia_science_widget .leadia_widget_msg.leadia_user_msg .msg_wrap { color: #2e4059; background: #e8e6e3; box-shadow: none; border: 1px solid #dedcd6; text-align: left; }\r\n\r\n#leadia_science_widget .leadia_widget_msg.leadia_user_msg .msg_wrap_corner { left: inherit; right: -5px; background-color: #e8e6e3; border-color: #dedcd6; -webkit-transform: rotate(135deg); -moz-transform: rotate(135deg); -ms-transform: rotate(135deg); -o-transform: rotate(135deg); transform: rotate(135deg); }\r\n#leadia_science_widget .msg_wrap { max-width: 83%; position: relative; display: inline-block; padding: 9px 15px; font-size: 14px; line-height: 18px; background-color: white; border: 1px solid #dedcd6; box-shadow: 0 4px 8px -4px rgba(0,0,0,.2); color: #000; border-radius: 3px; word-wrap: break-word;}\r\n\r\n#leadia_science_widget .msg_wrap_corner { position: absolute; left: -5px; top: 50%; width: 6px; height: 6px; margin-top: -3px; background-color: white; border-left: 1px solid #dedcd6; border-top: 1px solid #dedcd6; -webkit-transform: rotate(-45deg); -moz-transform: rotate(-45deg); -ms-transform: rotate(-45deg); -o-transform: rotate(-45deg); transform: rotate(-45deg); }\r\n\r\n#leadia_science_widget .leadia_widget_footer { padding: 10px; border-top: 1px solid #dedcd6; background: #fffdfa; -moz-transition: opacity .5s; -ms-transition: opacity .5s; -o-transition: opacity .5s; transition: opacity .5s; }\r\n#leadia_science_widget .fixed_width { width: 42px; box-sizing: content-box;}\r\n#leadia_science_widget .leadia_msg_time { display: block; padding-top: 3px; font-weight: bold; font-size: 11px; color: #b9bcc0; /*text-transform: lowercase;*/ }\r\n#leadia_science_widget .leadia_user_msg .leadia_msg_time{text-align: right;}\r\n#leadia_science_widget .leadia_widget_textarea_wrap { position: relative; }\r\n#leadia_science_widget .leadia_widget_textarea { width: 100%; height: 37px; min-height: inherit; padding: 9px 45px 9px 9px !important; vertical-align: bottom; border: 1px solid #dedcd6; font: 14px Helvetica, Arial; color: #787878 !important; border-radius: 3px; overflow: hidden; resize: none; -webkit-transition: height .2s; -moz-transition: height .2s; -ms-transition: height .2s; transition: height .2s; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; background: #fff; margin:0; border-radius: 0 !important;}\r\n\r\n#leadia_science_widget .leadia_widget_textarea.textarea_opened { height: 80px; }\r\n#leadia_science_widget .leadia_widget_textarea:focus { height: 80px; outline: 0; }\r\n#leadia_science_widget .leadia_widget_btn {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 40px;\r\n    height: 100%;\r\n    border: 0;\r\n    cursor: pointer;\r\n    outline: 0;\r\n    background: #c95843;\r\n    background-image: url(\"//api.leadiacloud.com/templates/widget-new/default/appearances/science/__static/img/arrow.png\"), -moz-linear-gradient(top,  #45e86e 0%, #4eb668 100%);\r\n    background-image: url(\"//api.leadiacloud.com/templates/widget-new/default/appearances/science/__static/img/arrow.png\"), -webkit-gradient(linear, left top, left bottom, color-stop(0%,#45e86e), color-stop(100%,#4eb668));\r\n    background-image: url(\"//api.leadiacloud.com/templates/widget-new/default/appearances/science/__static/img/arrow.png\"), -webkit-linear-gradient(top,  #45e86e 0%,#4eb668 100%);\r\n    background-image: url(\"//api.leadiacloud.com/templates/widget-new/default/appearances/science/__static/img/arrow.png\"), -o-linear-gradient(top,  #45e86e 0%,#4eb668 100%);\r\n    background-image: url(\"//api.leadiacloud.com/templates/widget-new/default/appearances/science/__static/img/arrow.png\"), -ms-linear-gradient(top,  #45e86e 0%,#4eb668 100%);\r\n    background-image: url(\"//api.leadiacloud.com/templates/widget-new/default/appearances/science/__static/img/arrow.png\"), linear-gradient(to bottom,  #45e86e 0%,#4eb668 100%);\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    border: 1px solid #57c472;\r\n    box-shadow: inset 0 1px #7fee9b;\r\n}\r\n#leadia_science_widget .type_msg_dot { display: inline-block; vertical-align: middle; width: 4px; height: 4px; background-color: #c1c1c1; -webkit-border-radius: 50%; border-radius: 50%; visibility: visible; }\r\n#leadia_science_widget .type_msg_pencil { display: inline-block; vertical-align: top; margin: 1px 0 0 2px; width: 12px; height: 12px; background: url(\"//api.leadiacloud.com/templates/widget-new/default/appearances/science/__static/img/carik.png\") 0 0 no-repeat; }\r\n#leadia_science_widget .type_msg { display: inline-block; vertical-align: bottom; width: 0; white-space: nowrap; overflow: hidden; -webkit-animation: dot_show 1.7s infinite; -moz-animation: dot_show 1.7s infinite; animation: dot_show 1.7s infinit; }\r\n\r\n#leadia_science_widget .leadia_develop_container * {font-size: 10px;}\r\n#leadia_science_widget .leadia_develop_container {font-size: 10px;vertical-align: middle;cursor: pointer;text-align: center;padding: 2px 0 6px; opacity: 1; line-height: 1; font-size: 12px;}\r\n#leadia_science_widget .leadia_develop_container_inset {display: inline-block;}\r\n#leadia_science_widget .leadia_develop_text {vertical-align: baseline;display: inline-block;margin-right: 0px;color: #FFFFFF;}\r\n#leadia_science_widget .leadia_develop_image {display: inline-block;vertical-align: baseline;width: 13px;height: 13px;background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozODg1M0E0QkZFRDkxMUU0QUEzMDkyNDg4QkU0NTdENyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozODg1M0E0Q0ZFRDkxMUU0QUEzMDkyNDg4QkU0NTdENyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM4ODUzQTQ5RkVEOTExRTRBQTMwOTI0ODhCRTQ1N0Q3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM4ODUzQTRBRkVEOTExRTRBQTMwOTI0ODhCRTQ1N0Q3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iawvzgAAAN5JREFUeNpi/P//vycDA8NcIJZkwA7eA3EnlM0DxPsZgJqeAfE3ID4LxFeB+Nd/VLAEiBmguAGIHzBAJXYjScSgaQpFkrvxH8oAgT9ALA3lcwPxV6j4DyDmg4obw0xhQDKxDMnElVCxnUhivdg0XUNSEAgVy4LymYD4CTZNIGAOFWMH4g9ALAfl2yMrQtc0Dcm2CiT2THya3gExB5KTQDQbEL/FpwkEwpBsAGFfdAXYNG1D07QUXQEjKEWgJaH/QLwCiD8DMTsQRwIxG5L8C5BJXkD8/D9xABTsXgABBgBSqRS8acQ59wAAAABJRU5ErkJggg==');top: 3px;position: relative}\r\n#leadia_science_widget .leadia_develop_container:hover {opacity: .8}\r\n/*#leadia_science_widget .leadia_develop_container:hover .leadia_develop_text {color: #333}\r\n#leadia_science_widget .leadia_develop_container:hover .leadia_develop_image {filter: none; -webkit-filter: grayscale(0); opacity: 1;}*/\r\n\r\n/*\u0431\u043b\u043e\u043a \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u043d\u0430 \u043f\u043e\u0447\u0442\u0443 \u043b\u0438\u0434\u0430*/\r\n#leadia_science_widget .lw_chat_item_form{ box-sizing: border-box; border-radius: 3px; overflow: hidden; }\r\n#leadia_science_widget .lw_chat_item_form.lw_chat_merged_form { display: table; width: 100%; padding: 15px 0 10px 0; }\r\n#leadia_science_widget .lw_chat_item_form.lw_chat_merged_form .lw_chat_item_form_input { display: table-cell; margin-bottom: 0; width: 87%; outline: none; }\r\n#leadia_science_widget .lw_chat_item_form.lw_chat_merged_form .lw_chat_item_form_btn { display: table-cell; width: 35%; }\r\n#leadia_science_widget .lw_chat_item_form_input { background-color: #fff; border: 1px solid #e6eaed; font-size: 14px; margin-bottom: 10px; padding: 0 10px; width: 100%; }\r\n#leadia_science_widget .lw_chat_item_form_input.error {\r\n    border: 1px solid red;\r\n}\r\n#leadia_science_widget .lw_chat_item_form_btn {\r\n    background: #c95843;\r\n    background: -moz-linear-gradient(top,  #45e86e 0%, #4eb668 100%);\r\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#45e86e), color-stop(100%,#4eb668));\r\n    background: -webkit-linear-gradient(top,  #45e86e 0%,#4eb668 100%);\r\n    background: -o-linear-gradient(top,  #45e86e 0%,#4eb668 100%);\r\n    background: -ms-linear-gradient(top,  #45e86e 0%,#4eb668 100%);\r\n    background: linear-gradient(to bottom,  #45e86e 0%,#4eb668 100%);\r\n    border: 0 none;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    display: table-cell;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n#leadia_science_widget .lw_chat_item_form_input, #leadia_science_widget .lw_chat_item_form_btn { height: 34px; vertical-align: middle; }\r\n\r\n#leadia_science_widget .success_send {\r\n    background: url('http://api.leadiacloud.com/static/form/lawyer/widget/fabricform/img/gala1.png') no-repeat;\r\n    background-size: 100% 100%;\r\n    margin: 8px auto;\r\n    height: 60px;\r\n    width: 60px;\r\n}\r\n#leadia_science_widget .leadia_widget_btn.btn_disabled{\r\n    background-image: url(\"http://api.leadiacloud.com/templates/widget-new/default/appearances/science/__static/img/arrow.png\");\r\n    background-color: #D9DAD9;\r\n    border: 1px solid #C9CAC9;\r\n    box-shadow: inset 0 1px #c9cac9;\r\n    cursor: default;\r\n}\r\n#leadia_science_widget .lw_chat_item_form_btn.btn_disabled {\r\n    background: #D9DAD9;\r\n    border: 1px solid #C9CAC9;\r\n    box-shadow: inset 0 1px #c9cac9;\r\n    cursor: default;\r\n}\r\n\r\n\r\n/* FORM STYLE */\r\n#leadia_science_widget .leadia_alignV {display: table; width: 100%; height: 100%; }\r\n#leadia_science_widget .leadia_alignV_inset {display: table-cell; vertical-align: middle; text-align: center; }\r\n\r\n#leadia_science_widget .leadia_form {position: absolute; left: 0; top: 0; z-index: -1; width: 100%; height: 100%; opacity: 0; background-color: #f5f7fa; -webkit-transition: opacity .5s; -moz-transition: opacity .5s; -ms-transition: opacity .5s; -o-transition: opacity .5s; transition: opacity .5s; }\r\n#leadia_science_widget .leadia_form_title {font-size: 23px; line-height: 1.6 }\r\n#leadia_science_widget .leadia_form_subtitle {font-size: 16px; }\r\n#leadia_science_widget .leadia_form_phone {display: inline-block; padding: 0 40px; font-size: 35px; color: #172232; background: url({{ static }}/img/trubka2.png) left center no-repeat; }\r\n#leadia_science_widget .leadia_form_text {font-size: 18px; line-height: 1.4; margin-bottom: 10px }\r\n#leadia_science_widget .leadia_form_area1 {height: 30.2%; color: #26303f; background-color: white; box-shadow: 0 1px 4px rgba(0,0,0,.2) }\r\n#leadia_science_widget .leadia_form_area2 {height: 53% }\r\n#leadia_science_widget .leadia_form_area3 {height: 17.2%; border-top: 1px solid #d0d5db; background: #f5f7fa; background: -moz-linear-gradient(top,  #f5f7fa 0%, #e1e3e5 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f5f7fa), color-stop(100%,#e1e3e5)); background: -webkit-linear-gradient(top,  #f5f7fa 0%,#e1e3e5 100%); background: -o-linear-gradient(top,  #f5f7fa 0%,#e1e3e5 100%); background: -ms-linear-gradient(top,  #f5f7fa 0%,#e1e3e5 100%); background: linear-gradient(to bottom,  #f5f7fa 0%,#e1e3e5 100%);}\r\n#leadia_science_widget .leadia_form_area4 {height: 83% }\r\n#leadia_science_widget .leadia_form_row {display: table; width: 100%; padding: 5px 16%; font-size: 0; box-sizing: border-box; }\r\n#leadia_science_widget .leadia_form_cell {display: table-cell; vertical-align: middle; width: 50%; font-size: 14px; color: #26303f; text-align: left; }\r\n#leadia_science_widget .leadia_form_control {width: 188px; height: 34px; padding: 0 10px; border: 1px solid #d0d5db; background-color: white; font-size: 14px; color: #172232; box-sizing: border-box; box-shadow: inset 0 3px 5px -3px rgba(0,0,0,.2); }\r\n#leadia_science_widget .leadia_form_control:focus {outline: none; box-shadow: 0 3px 5px -3px rgba(0,0,0,.2); }\r\n#leadia_science_widget .leadia_form_btn {border: 1px solid #97361d; padding: 10px 30px; color: white; font-size: 16px; font-weight: bold; background: #c95843; background: -moz-linear-gradient(top,  #c95843 0%, #b93e23 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#c95843), color-stop(100%,#b93e23)); background: -webkit-linear-gradient(top,  #c95843 0%,#b93e23 100%); background: -o-linear-gradient(top,  #c95843 0%,#b93e23 100%); background: -ms-linear-gradient(top,  #c95843 0%,#b93e23 100%); background: linear-gradient(to bottom,  #c95843 0%,#b93e23 100%); cursor: pointer; box-shadow: inset 0 1px #da8c7e; text-shadow: 1px 1px rgba(0,0,0,.5); }\r\n\r\n#leadia_science_widget .leadia_form_btn:hover {box-shadow: 0 0 10px rgba(0,0,0,.5) }\r\n#leadia_science_widget .leadia_form_btn:focus {outline: none }\r\n#leadia_science_widget .leadia_form_btn:active {box-shadow: inset 0 4px 7px -2px rgba(0,0,0,.3) }\r\n\r\n /*THANK YOU PAGE STYLE*/\r\n#leadia_science_widget .leadia_thanks {position: absolute; left: 0; top: 0; z-index: -1; width: 100%; height: 100%; opacity: 0; background-color: #f5f7fa; -webkit-transition: opacity .5s .5s; -moz-transition: opacity .5s .5s; -ms-transition: opacity .5s .5s; -o-transition: opacity .5s .5s; transition: opacity .5s .5s; }\r\n#leadia_science_widget .leadia_thanks_title {font-size: 30px; font-weight: bold; color: #172232; text-transform: uppercase; margin-bottom: 5px }\r\n#leadia_science_widget .leadia_thanks_text {line-height: 1.7 }\r\n\r\n#leadia_science_widget #leadia_close_form{right: -10px;top: 0;position: absolute;margin-left: -10px;margin-top: -9px;cursor: pointer;z-index: 99999;display: none;}\r\n#leadia_science_widget .leadia-widget-popup-dark-screen{z-index: 99998;position: fixed;background: rgba(0,0,0,.5);width: 100%;height: 100%;top: 0;left: 0;display: none;}\r\n\r\n@-webkit-keyframes color { 30% { background: #0f1; } }\r\n\r\n@-webkit-keyframes dot_show{0{width:0} 30%{width:8px} 60%{width:16px} 90%{width:22px} }@-moz-keyframes dot_show{0{width:0} 30%{width:8px} 60%{width:16px} 90%{width:22px} }@-moz-keyframes color{30%{background:#0f1} }@-webkit-keyframes color{30%{background:#0f1} }@-o-keyframes color{30%{background:#0f1} }@-ms-keyframes color{30%{background:#0f1} }@keyframes color{30%{background:#0f1} }@-moz-keyframes dot_show{0{width:0} 30%{width:8px} 60%{width:16px} 90%{width:22px} }@-webkit-keyframes dot_show{0{width:0}\r\n30%{width:8px}\r\n60%{width:16px}\r\n90%{width:22px}\r\n}@-o-keyframes dot_show{0{width:0}\r\n30%{width:8px}\r\n60%{width:16px}\r\n90%{width:22px}\r\n}@-ms-keyframes dot_show{0{width:0}\r\n30%{width:8px}\r\n60%{width:16px}\r\n90%{width:22px}\r\n}@keyframes dot_show{0{width:0}\r\n30%{width:8px}\r\n60%{width:16px}\r\n90%{width:22px}\r\n";




            
    lc.widget = lc.utils.createMixed(lc.LeadiaWidget, lc.ScienceAppearance).place();


        })(lc.underscore);
    
    })(lc.jQuery, lc.jQuery);
    

}(leadiaCloud));





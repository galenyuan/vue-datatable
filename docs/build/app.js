/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueDatatable = __webpack_require__(3);

	var _vueDatatable2 = _interopRequireDefault(_vueDatatable);

	var _chance = __webpack_require__(47);

	var _chance2 = _interopRequireDefault(_chance);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	    new _vue2.default({
	        el: 'body',

	        data: {
	            tableData: {
	                options: {
	                    sortable: true,
	                    editable: true,
	                    pageCount: 10
	                },

	                columns: [{
	                    value: 'id',
	                    text: 'ID',
	                    sortable: true,
	                    editable: false
	                }, {
	                    value: 'name',
	                    text: 'Name',
	                    sortable: true,
	                    editable: true
	                }, {
	                    value: 'age',
	                    text: 'Age',
	                    sortable: true,
	                    editable: true
	                }, {
	                    value: 'sex',
	                    text: 'Sex',
	                    sortable: true,
	                    editable: true
	                }],

	                rows: [],

	                onPageChanged: function onPageChanged(page) {
	                    console.log('Current page is ' + page);
	                }
	            }
	        },

	        ready: function ready() {
	            var chance = new _chance2.default();
	            var length = chance.integer({ min: 0, max: 1000 });

	            for (var i = 0; i < length; i++) {
	                var obj = {
	                    id: {
	                        value: i + 1
	                    },

	                    name: {
	                        value: chance.name(),
	                        editable: chance.bool()
	                    },

	                    age: {
	                        value: chance.age(),
	                        editable: chance.bool()
	                    },

	                    sex: {
	                        value: chance.gender(),
	                        editable: chance.bool
	                    }
	                };

	                this.tableData.rows.push(obj);
	            }
	        },


	        components: {
	            DataTable: _vueDatatable2.default
	        }
	    });
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.26
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};function set(obj,key,val){if(hasOwn(obj,key)){obj[key]=val;return;}if(obj._isVue){set(obj._data,key,val);return;}var ob=obj.__ob__;if(!ob){obj[key]=val;return;}ob.convert(key,val);ob.dep.notify();if(ob.vms){var i=ob.vms.length;while(i--){var vm=ob.vms[i];vm._proxy(key);vm._digest();}}return val;}/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */function del(obj,key){if(!hasOwn(obj,key)){return;}delete obj[key];var ob=obj.__ob__;if(!ob){if(obj._isVue){delete obj._data[key];obj._digest();}return;}ob.dep.notify();if(ob.vms){var i=ob.vms.length;while(i--){var vm=ob.vms[i];vm._unproxy(key);vm._digest();}}}var hasOwnProperty=Object.prototype.hasOwnProperty;/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */function hasOwn(obj,key){return hasOwnProperty.call(obj,key);}/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */var literalValueRE=/^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;function isLiteral(exp){return literalValueRE.test(exp);}/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */function isReserved(str){var c=(str+'').charCodeAt(0);return c===0x24||c===0x5F;}/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */function _toString(value){return value==null?'':value.toString();}/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */function toNumber(value){if(typeof value!=='string'){return value;}else{var parsed=Number(value);return isNaN(parsed)?value:parsed;}}/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */function toBoolean(value){return value==='true'?true:value==='false'?false:value;}/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */function stripQuotes(str){var a=str.charCodeAt(0);var b=str.charCodeAt(str.length-1);return a===b&&(a===0x22||a===0x27)?str.slice(1,-1):str;}/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */var camelizeRE=/-(\w)/g;function camelize(str){return str.replace(camelizeRE,toUpper);}function toUpper(_,c){return c?c.toUpperCase():'';}/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */var hyphenateRE=/([a-z\d])([A-Z])/g;function hyphenate(str){return str.replace(hyphenateRE,'$1-$2').toLowerCase();}/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */var classifyRE=/(?:^|[-_\/])(\w)/g;function classify(str){return str.replace(classifyRE,toUpper);}/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */function bind(fn,ctx){return function(a){var l=arguments.length;return l?l>1?fn.apply(ctx,arguments):fn.call(ctx,a):fn.call(ctx);};}/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */function toArray(list,start){start=start||0;var i=list.length-start;var ret=new Array(i);while(i--){ret[i]=list[i+start];}return ret;}/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */function extend(to,from){var keys=Object.keys(from);var i=keys.length;while(i--){to[keys[i]]=from[keys[i]];}return to;}/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */function isObject(obj){return obj!==null&&(typeof obj==='undefined'?'undefined':_typeof(obj))==='object';}/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */var toString=Object.prototype.toString;var OBJECT_STRING='[object Object]';function isPlainObject(obj){return toString.call(obj)===OBJECT_STRING;}/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */var isArray=Array.isArray;/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */function def(obj,key,val,enumerable){Object.defineProperty(obj,key,{value:val,enumerable:!!enumerable,writable:true,configurable:true});}/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */function _debounce(func,wait){var timeout,args,context,timestamp,result;var later=function later(){var last=Date.now()-timestamp;if(last<wait&&last>=0){timeout=setTimeout(later,wait-last);}else{timeout=null;result=func.apply(context,args);if(!timeout)context=args=null;}};return function(){context=this;args=arguments;timestamp=Date.now();if(!timeout){timeout=setTimeout(later,wait);}return result;};}/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */function indexOf(arr,obj){var i=arr.length;while(i--){if(arr[i]===obj)return i;}return-1;}/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */function cancellable(fn){var cb=function cb(){if(!cb.cancelled){return fn.apply(this,arguments);}};cb.cancel=function(){cb.cancelled=true;};return cb;}/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */function looseEqual(a,b){/* eslint-disable eqeqeq */return a==b||(isObject(a)&&isObject(b)?JSON.stringify(a)===JSON.stringify(b):false);/* eslint-enable eqeqeq */}var hasProto='__proto__'in{};// Browser environment sniffing
	var inBrowser=typeof window!=='undefined'&&Object.prototype.toString.call(window)!=='[object Object]';// detect devtools
	var devtools=inBrowser&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;// UA sniffing for working around browser-specific quirks
	var UA=inBrowser&&window.navigator.userAgent.toLowerCase();var isIE=UA&&UA.indexOf('trident')>0;var isIE9=UA&&UA.indexOf('msie 9.0')>0;var isAndroid=UA&&UA.indexOf('android')>0;var isIos=UA&&/(iphone|ipad|ipod|ios)/i.test(UA);var iosVersionMatch=isIos&&UA.match(/os ([\d_]+)/);var iosVersion=iosVersionMatch&&iosVersionMatch[1].split('_');// detecting iOS UIWebView by indexedDB
	var hasMutationObserverBug=iosVersion&&Number(iosVersion[0])>=9&&Number(iosVersion[1])>=3&&!window.indexedDB;var transitionProp=undefined;var transitionEndEvent=undefined;var animationProp=undefined;var animationEndEvent=undefined;// Transition property/event sniffing
	if(inBrowser&&!isIE9){var isWebkitTrans=window.ontransitionend===undefined&&window.onwebkittransitionend!==undefined;var isWebkitAnim=window.onanimationend===undefined&&window.onwebkitanimationend!==undefined;transitionProp=isWebkitTrans?'WebkitTransition':'transition';transitionEndEvent=isWebkitTrans?'webkitTransitionEnd':'transitionend';animationProp=isWebkitAnim?'WebkitAnimation':'animation';animationEndEvent=isWebkitAnim?'webkitAnimationEnd':'animationend';}/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */var nextTick=function(){var callbacks=[];var pending=false;var timerFunc;function nextTickHandler(){pending=false;var copies=callbacks.slice(0);callbacks=[];for(var i=0;i<copies.length;i++){copies[i]();}}/* istanbul ignore if */if(typeof MutationObserver!=='undefined'&&!hasMutationObserverBug){var counter=1;var observer=new MutationObserver(nextTickHandler);var textNode=document.createTextNode(counter);observer.observe(textNode,{characterData:true});timerFunc=function timerFunc(){counter=(counter+1)%2;textNode.data=counter;};}else{// webpack attempts to inject a shim for setImmediate
	// if it is used as a global, so we have to work around that to
	// avoid bundling unnecessary code.
	var context=inBrowser?window:typeof global!=='undefined'?global:{};timerFunc=context.setImmediate||setTimeout;}return function(cb,ctx){var func=ctx?function(){cb.call(ctx);}:cb;callbacks.push(func);if(pending)return;pending=true;timerFunc(nextTickHandler,0);};}();var _Set=undefined;/* istanbul ignore if */if(typeof Set!=='undefined'&&Set.toString().match(/native code/)){// use native Set when available.
	_Set=Set;}else{// a non-standard Set polyfill that only works with primitive keys.
	_Set=function _Set(){this.set=Object.create(null);};_Set.prototype.has=function(key){return this.set[key]!==undefined;};_Set.prototype.add=function(key){this.set[key]=1;};_Set.prototype.clear=function(){this.set=Object.create(null);};}function Cache(limit){this.size=0;this.limit=limit;this.head=this.tail=undefined;this._keymap=Object.create(null);}var p=Cache.prototype;/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */p.put=function(key,value){var removed;var entry=this.get(key,true);if(!entry){if(this.size===this.limit){removed=this.shift();}entry={key:key};this._keymap[key]=entry;if(this.tail){this.tail.newer=entry;entry.older=this.tail;}else{this.head=entry;}this.tail=entry;this.size++;}entry.value=value;return removed;};/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */p.shift=function(){var entry=this.head;if(entry){this.head=this.head.newer;this.head.older=undefined;entry.newer=entry.older=undefined;this._keymap[entry.key]=undefined;this.size--;}return entry;};/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */p.get=function(key,returnEntry){var entry=this._keymap[key];if(entry===undefined)return;if(entry===this.tail){return returnEntry?entry:entry.value;}// HEAD--------------TAIL
	//   <.older   .newer>
	//  <--- add direction --
	//   A  B  C  <D>  E
	if(entry.newer){if(entry===this.head){this.head=entry.newer;}entry.newer.older=entry.older;// C <-- E.
	}if(entry.older){entry.older.newer=entry.newer;// C. --> E
	}entry.newer=undefined;// D --x
	entry.older=this.tail;// D. --> E
	if(this.tail){this.tail.newer=entry;// E. <-- D
	}this.tail=entry;return returnEntry?entry:entry.value;};var cache$1=new Cache(1000);var filterTokenRE=/[^\s'"]+|'[^']*'|"[^"]*"/g;var reservedArgRE=/^in$|^-?\d+/;/**
	 * Parser state
	 */var str;var dir;var c;var prev;var i;var l;var lastFilterIndex;var inSingle;var inDouble;var curly;var square;var paren;/**
	 * Push a filter to the current directive object
	 */function pushFilter(){var exp=str.slice(lastFilterIndex,i).trim();var filter;if(exp){filter={};var tokens=exp.match(filterTokenRE);filter.name=tokens[0];if(tokens.length>1){filter.args=tokens.slice(1).map(processFilterArg);}}if(filter){(dir.filters=dir.filters||[]).push(filter);}lastFilterIndex=i+1;}/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */function processFilterArg(arg){if(reservedArgRE.test(arg)){return{value:toNumber(arg),dynamic:false};}else{var stripped=stripQuotes(arg);var dynamic=stripped===arg;return{value:dynamic?arg:stripped,dynamic:dynamic};}}/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */function parseDirective(s){var hit=cache$1.get(s);if(hit){return hit;}// reset parser state
	str=s;inSingle=inDouble=false;curly=square=paren=0;lastFilterIndex=0;dir={};for(i=0,l=str.length;i<l;i++){prev=c;c=str.charCodeAt(i);if(inSingle){// check single quote
	if(c===0x27&&prev!==0x5C)inSingle=!inSingle;}else if(inDouble){// check double quote
	if(c===0x22&&prev!==0x5C)inDouble=!inDouble;}else if(c===0x7C&&// pipe
	str.charCodeAt(i+1)!==0x7C&&str.charCodeAt(i-1)!==0x7C){if(dir.expression==null){// first filter, end of expression
	lastFilterIndex=i+1;dir.expression=str.slice(0,i).trim();}else{// already has filter
	pushFilter();}}else{switch(c){case 0x22:inDouble=true;break;// "
	case 0x27:inSingle=true;break;// '
	case 0x28:paren++;break;// (
	case 0x29:paren--;break;// )
	case 0x5B:square++;break;// [
	case 0x5D:square--;break;// ]
	case 0x7B:curly++;break;// {
	case 0x7D:curly--;break;// }
	}}}if(dir.expression==null){dir.expression=str.slice(0,i).trim();}else if(lastFilterIndex!==0){pushFilter();}cache$1.put(s,dir);return dir;}var directive=Object.freeze({parseDirective:parseDirective});var regexEscapeRE=/[-.*+?^${}()|[\]\/\\]/g;var cache=undefined;var tagRE=undefined;var htmlRE=undefined;/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */function escapeRegex(str){return str.replace(regexEscapeRE,'\\$&');}function compileRegex(){var open=escapeRegex(config.delimiters[0]);var close=escapeRegex(config.delimiters[1]);var unsafeOpen=escapeRegex(config.unsafeDelimiters[0]);var unsafeClose=escapeRegex(config.unsafeDelimiters[1]);tagRE=new RegExp(unsafeOpen+'((?:.|\\n)+?)'+unsafeClose+'|'+open+'((?:.|\\n)+?)'+close,'g');htmlRE=new RegExp('^'+unsafeOpen+'((?:.|\\n)+?)'+unsafeClose+'$');// reset cache
	cache=new Cache(1000);}/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */function parseText(text){if(!cache){compileRegex();}var hit=cache.get(text);if(hit){return hit;}if(!tagRE.test(text)){return null;}var tokens=[];var lastIndex=tagRE.lastIndex=0;var match,index,html,value,first,oneTime;/* eslint-disable no-cond-assign */while(match=tagRE.exec(text)){/* eslint-enable no-cond-assign */index=match.index;// push text token
	if(index>lastIndex){tokens.push({value:text.slice(lastIndex,index)});}// tag token
	html=htmlRE.test(match[0]);value=html?match[1]:match[2];first=value.charCodeAt(0);oneTime=first===42;// *
	value=oneTime?value.slice(1):value;tokens.push({tag:true,value:value.trim(),html:html,oneTime:oneTime});lastIndex=index+match[0].length;}if(lastIndex<text.length){tokens.push({value:text.slice(lastIndex)});}cache.put(text,tokens);return tokens;}/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */function tokensToExp(tokens,vm){if(tokens.length>1){return tokens.map(function(token){return formatToken(token,vm);}).join('+');}else{return formatToken(tokens[0],vm,true);}}/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */function formatToken(token,vm,single){return token.tag?token.oneTime&&vm?'"'+vm.$eval(token.value)+'"':inlineFilters(token.value,single):'"'+token.value+'"';}/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */var filterRE=/[^|]\|[^|]/;function inlineFilters(exp,single){if(!filterRE.test(exp)){return single?exp:'('+exp+')';}else{var dir=parseDirective(exp);if(!dir.filters){return'('+exp+')';}else{return'this._applyFilters('+dir.expression+// value
	',null,'+// oldValue (null for read)
	JSON.stringify(dir.filters)+// filter descriptors
	',false)';// write?
	}}}var text=Object.freeze({compileRegex:compileRegex,parseText:parseText,tokensToExp:tokensToExp});var delimiters=['{{','}}'];var unsafeDelimiters=['{{{','}}}'];var config=Object.defineProperties({/**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */debug:false,/**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */silent:false,/**
	   * Whether to use async rendering.
	   */async:true,/**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */warnExpressionErrors:true,/**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */devtools:process.env.NODE_ENV!=='production',/**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */_delimitersChanged:true,/**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */_assetTypes:['component','directive','elementDirective','filter','transition','partial'],/**
	   * prop binding modes
	   */_propBindingModes:{ONE_WAY:0,TWO_WAY:1,ONE_TIME:2},/**
	   * Max circular updates allowed in a batcher flush cycle.
	   */_maxUpdateCount:100},{delimiters:{/**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */get:function get(){return delimiters;},set:function set(val){delimiters=val;compileRegex();},configurable:true,enumerable:true},unsafeDelimiters:{get:function get(){return unsafeDelimiters;},set:function set(val){unsafeDelimiters=val;compileRegex();},configurable:true,enumerable:true}});var warn=undefined;var formatComponentName=undefined;if(process.env.NODE_ENV!=='production'){(function(){var hasConsole=typeof console!=='undefined';warn=function warn(msg,vm){if(hasConsole&&!config.silent){console.error('[Vue warn]: '+msg+(vm?formatComponentName(vm):''));}};formatComponentName=function formatComponentName(vm){var name=vm._isVue?vm.$options.name:vm.name;return name?' (found in component: <'+hyphenate(name)+'>)':'';};})();}/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function appendWithTransition(el,target,vm,cb){applyTransition(el,1,function(){target.appendChild(el);},vm,cb);}/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function beforeWithTransition(el,target,vm,cb){applyTransition(el,1,function(){before(el,target);},vm,cb);}/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function removeWithTransition(el,vm,cb){applyTransition(el,-1,function(){remove(el);},vm,cb);}/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function applyTransition(el,direction,op,vm,cb){var transition=el.__v_trans;if(!transition||// skip if there are no js hooks and CSS transition is
	// not supported
	!transition.hooks&&!transitionEndEvent||// skip transitions for initial compile
	!vm._isCompiled||// if the vm is being manipulated by a parent directive
	// during the parent's compilation phase, skip the
	// animation.
	vm.$parent&&!vm.$parent._isCompiled){op();if(cb)cb();return;}var action=direction>0?'enter':'leave';transition[action](op,cb);}var transition=Object.freeze({appendWithTransition:appendWithTransition,beforeWithTransition:beforeWithTransition,removeWithTransition:removeWithTransition,applyTransition:applyTransition});/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */function query(el){if(typeof el==='string'){var selector=el;el=document.querySelector(el);if(!el){process.env.NODE_ENV!=='production'&&warn('Cannot find element: '+selector);}}return el;}/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */function inDoc(node){if(!node)return false;var doc=node.ownerDocument.documentElement;var parent=node.parentNode;return doc===node||doc===parent||!!(parent&&parent.nodeType===1&&doc.contains(parent));}/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */function getAttr(node,_attr){var val=node.getAttribute(_attr);if(val!==null){node.removeAttribute(_attr);}return val;}/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */function getBindAttr(node,name){var val=getAttr(node,':'+name);if(val===null){val=getAttr(node,'v-bind:'+name);}return val;}/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */function hasBindAttr(node,name){return node.hasAttribute(name)||node.hasAttribute(':'+name)||node.hasAttribute('v-bind:'+name);}/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */function before(el,target){target.parentNode.insertBefore(el,target);}/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */function after(el,target){if(target.nextSibling){before(el,target.nextSibling);}else{target.parentNode.appendChild(el);}}/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */function remove(el){el.parentNode.removeChild(el);}/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */function prepend(el,target){if(target.firstChild){before(el,target.firstChild);}else{target.appendChild(el);}}/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */function replace(target,el){var parent=target.parentNode;if(parent){parent.replaceChild(el,target);}}/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */function on(el,event,cb,useCapture){el.addEventListener(event,cb,useCapture);}/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */function off(el,event,cb){el.removeEventListener(event,cb);}/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */function getClass(el){var classname=el.className;if((typeof classname==='undefined'?'undefined':_typeof(classname))==='object'){classname=classname.baseVal||'';}return classname;}/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */function setClass(el,cls){/* istanbul ignore if */if(isIE9&&!/svg$/.test(el.namespaceURI)){el.className=cls;}else{el.setAttribute('class',cls);}}/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */function addClass(el,cls){if(el.classList){el.classList.add(cls);}else{var cur=' '+getClass(el)+' ';if(cur.indexOf(' '+cls+' ')<0){setClass(el,(cur+cls).trim());}}}/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */function removeClass(el,cls){if(el.classList){el.classList.remove(cls);}else{var cur=' '+getClass(el)+' ';var tar=' '+cls+' ';while(cur.indexOf(tar)>=0){cur=cur.replace(tar,' ');}setClass(el,cur.trim());}if(!el.className){el.removeAttribute('class');}}/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */function extractContent(el,asFragment){var child;var rawContent;/* istanbul ignore if */if(isTemplate(el)&&isFragment(el.content)){el=el.content;}if(el.hasChildNodes()){trimNode(el);rawContent=asFragment?document.createDocumentFragment():document.createElement('div');/* eslint-disable no-cond-assign */while(child=el.firstChild){/* eslint-enable no-cond-assign */rawContent.appendChild(child);}}return rawContent;}/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */function trimNode(node){var child;/* eslint-disable no-sequences */while(child=node.firstChild,isTrimmable(child)){node.removeChild(child);}while(child=node.lastChild,isTrimmable(child)){node.removeChild(child);}/* eslint-enable no-sequences */}function isTrimmable(node){return node&&(node.nodeType===3&&!node.data.trim()||node.nodeType===8);}/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */function isTemplate(el){return el.tagName&&el.tagName.toLowerCase()==='template';}/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */function createAnchor(content,persist){var anchor=config.debug?document.createComment(content):document.createTextNode(persist?' ':'');anchor.__v_anchor=true;return anchor;}/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */var refRE=/^v-ref:/;function findRef(node){if(node.hasAttributes()){var attrs=node.attributes;for(var i=0,l=attrs.length;i<l;i++){var name=attrs[i].name;if(refRE.test(name)){return camelize(name.replace(refRE,''));}}}}/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */function mapNodeRange(node,end,op){var next;while(node!==end){next=node.nextSibling;op(node);node=next;}op(end);}/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */function removeNodeRange(start,end,vm,frag,cb){var done=false;var removed=0;var nodes=[];mapNodeRange(start,end,function(node){if(node===end)done=true;nodes.push(node);removeWithTransition(node,vm,onRemoved);});function onRemoved(){removed++;if(done&&removed>=nodes.length){for(var i=0;i<nodes.length;i++){frag.appendChild(nodes[i]);}cb&&cb();}}}/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */function isFragment(node){return node&&node.nodeType===11;}/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */function getOuterHTML(el){if(el.outerHTML){return el.outerHTML;}else{var container=document.createElement('div');container.appendChild(el.cloneNode(true));return container.innerHTML;}}var commonTagRE=/^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;var reservedTagRE=/^(slot|partial|component)$/i;var isUnknownElement=undefined;if(process.env.NODE_ENV!=='production'){isUnknownElement=function isUnknownElement(el,tag){if(tag.indexOf('-')>-1){// http://stackoverflow.com/a/28210364/1070244
	return el.constructor===window.HTMLUnknownElement||el.constructor===window.HTMLElement;}else{return /HTMLUnknownElement/.test(el.toString())&&// Chrome returns unknown for several HTML5 elements.
	// https://code.google.com/p/chromium/issues/detail?id=540526
	// Firefox returns unknown for some "Interactive elements."
	!/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag);}};}/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */function checkComponentAttr(el,options){var tag=el.tagName.toLowerCase();var hasAttrs=el.hasAttributes();if(!commonTagRE.test(tag)&&!reservedTagRE.test(tag)){if(resolveAsset(options,'components',tag)){return{id:tag};}else{var is=hasAttrs&&getIsBinding(el,options);if(is){return is;}else if(process.env.NODE_ENV!=='production'){var expectedTag=options._componentNameMap&&options._componentNameMap[tag];if(expectedTag){warn('Unknown custom element: <'+tag+'> - '+'did you mean <'+expectedTag+'>? '+'HTML is case-insensitive, remember to use kebab-case in templates.');}else if(isUnknownElement(el,tag)){warn('Unknown custom element: <'+tag+'> - did you '+'register the component correctly? For recursive components, '+'make sure to provide the "name" option.');}}}}else if(hasAttrs){return getIsBinding(el,options);}}/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */function getIsBinding(el,options){// dynamic syntax
	var exp=el.getAttribute('is');if(exp!=null){if(resolveAsset(options,'components',exp)){el.removeAttribute('is');return{id:exp};}}else{exp=getBindAttr(el,'is');if(exp!=null){return{id:exp,dynamic:true};}}}/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */var strats=config.optionMergeStrategies=Object.create(null);/**
	 * Helper that recursively merges two data objects together.
	 */function mergeData(to,from){var key,toVal,fromVal;for(key in from){toVal=to[key];fromVal=from[key];if(!hasOwn(to,key)){set(to,key,fromVal);}else if(isObject(toVal)&&isObject(fromVal)){mergeData(toVal,fromVal);}}return to;}/**
	 * Data
	 */strats.data=function(parentVal,childVal,vm){if(!vm){// in a Vue.extend merge, both should be functions
	if(!childVal){return parentVal;}if(typeof childVal!=='function'){process.env.NODE_ENV!=='production'&&warn('The "data" option should be a function '+'that returns a per-instance value in component '+'definitions.',vm);return parentVal;}if(!parentVal){return childVal;}// when parentVal & childVal are both present,
	// we need to return a function that returns the
	// merged result of both functions... no need to
	// check if parentVal is a function here because
	// it has to be a function to pass previous merges.
	return function mergedDataFn(){return mergeData(childVal.call(this),parentVal.call(this));};}else if(parentVal||childVal){return function mergedInstanceDataFn(){// instance merge
	var instanceData=typeof childVal==='function'?childVal.call(vm):childVal;var defaultData=typeof parentVal==='function'?parentVal.call(vm):undefined;if(instanceData){return mergeData(instanceData,defaultData);}else{return defaultData;}};}};/**
	 * El
	 */strats.el=function(parentVal,childVal,vm){if(!vm&&childVal&&typeof childVal!=='function'){process.env.NODE_ENV!=='production'&&warn('The "el" option should be a function '+'that returns a per-instance value in component '+'definitions.',vm);return;}var ret=childVal||parentVal;// invoke the element factory if this is instance merge
	return vm&&typeof ret==='function'?ret.call(vm):ret;};/**
	 * Hooks and param attributes are merged as arrays.
	 */strats.init=strats.created=strats.ready=strats.attached=strats.detached=strats.beforeCompile=strats.compiled=strats.beforeDestroy=strats.destroyed=strats.activate=function(parentVal,childVal){return childVal?parentVal?parentVal.concat(childVal):isArray(childVal)?childVal:[childVal]:parentVal;};/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */function mergeAssets(parentVal,childVal){var res=Object.create(parentVal||null);return childVal?extend(res,guardArrayAssets(childVal)):res;}config._assetTypes.forEach(function(type){strats[type+'s']=mergeAssets;});/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */strats.watch=strats.events=function(parentVal,childVal){if(!childVal)return parentVal;if(!parentVal)return childVal;var ret={};extend(ret,parentVal);for(var key in childVal){var parent=ret[key];var child=childVal[key];if(parent&&!isArray(parent)){parent=[parent];}ret[key]=parent?parent.concat(child):[child];}return ret;};/**
	 * Other object hashes.
	 */strats.props=strats.methods=strats.computed=function(parentVal,childVal){if(!childVal)return parentVal;if(!parentVal)return childVal;var ret=Object.create(null);extend(ret,parentVal);extend(ret,childVal);return ret;};/**
	 * Default strategy.
	 */var defaultStrat=function defaultStrat(parentVal,childVal){return childVal===undefined?parentVal:childVal;};/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */function guardComponents(options){if(options.components){var components=options.components=guardArrayAssets(options.components);var ids=Object.keys(components);var def;if(process.env.NODE_ENV!=='production'){var map=options._componentNameMap={};}for(var i=0,l=ids.length;i<l;i++){var key=ids[i];if(commonTagRE.test(key)||reservedTagRE.test(key)){process.env.NODE_ENV!=='production'&&warn('Do not use built-in or reserved HTML elements as component '+'id: '+key);continue;}// record a all lowercase <-> kebab-case mapping for
	// possible custom element case error warning
	if(process.env.NODE_ENV!=='production'){map[key.replace(/-/g,'').toLowerCase()]=hyphenate(key);}def=components[key];if(isPlainObject(def)){components[key]=Vue.extend(def);}}}}/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */function guardProps(options){var props=options.props;var i,val;if(isArray(props)){options.props={};i=props.length;while(i--){val=props[i];if(typeof val==='string'){options.props[val]=null;}else if(val.name){options.props[val.name]=val;}}}else if(isPlainObject(props)){var keys=Object.keys(props);i=keys.length;while(i--){val=props[keys[i]];if(typeof val==='function'){props[keys[i]]={type:val};}}}}/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */function guardArrayAssets(assets){if(isArray(assets)){var res={};var i=assets.length;var asset;while(i--){asset=assets[i];var id=typeof asset==='function'?asset.options&&asset.options.name||asset.id:asset.name||asset.id;if(!id){process.env.NODE_ENV!=='production'&&warn('Array-syntax assets must provide a "name" or "id" field.');}else{res[id]=asset;}}return res;}return assets;}/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */function mergeOptions(parent,child,vm){guardComponents(child);guardProps(child);if(process.env.NODE_ENV!=='production'){if(child.propsData&&!vm){warn('propsData can only be used as an instantiation option.');}}var options={};var key;if(child['extends']){parent=typeof child['extends']==='function'?mergeOptions(parent,child['extends'].options,vm):mergeOptions(parent,child['extends'],vm);}if(child.mixins){for(var i=0,l=child.mixins.length;i<l;i++){var mixin=child.mixins[i];var mixinOptions=mixin.prototype instanceof Vue?mixin.options:mixin;parent=mergeOptions(parent,mixinOptions,vm);}}for(key in parent){mergeField(key);}for(key in child){if(!hasOwn(parent,key)){mergeField(key);}}function mergeField(key){var strat=strats[key]||defaultStrat;options[key]=strat(parent[key],child[key],vm,key);}return options;}/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */function resolveAsset(options,type,id,warnMissing){/* istanbul ignore if */if(typeof id!=='string'){return;}var assets=options[type];var camelizedId;var res=assets[id]||// camelCase ID
	assets[camelizedId=camelize(id)]||// Pascal Case ID
	assets[camelizedId.charAt(0).toUpperCase()+camelizedId.slice(1)];if(process.env.NODE_ENV!=='production'&&warnMissing&&!res){warn('Failed to resolve '+type.slice(0,-1)+': '+id,options);}return res;}var uid$1=0;/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */function Dep(){this.id=uid$1++;this.subs=[];}// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target=null;/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */Dep.prototype.addSub=function(sub){this.subs.push(sub);};/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */Dep.prototype.removeSub=function(sub){this.subs.$remove(sub);};/**
	 * Add self as a dependency to the target watcher.
	 */Dep.prototype.depend=function(){Dep.target.addDep(this);};/**
	 * Notify all subscribers of a new value.
	 */Dep.prototype.notify=function(){// stablize the subscriber list first
	var subs=toArray(this.subs);for(var i=0,l=subs.length;i<l;i++){subs[i].update();}};var arrayProto=Array.prototype;var arrayMethods=Object.create(arrayProto)/**
	 * Intercept mutating methods and emit events
	 */;['push','pop','shift','unshift','splice','sort','reverse'].forEach(function(method){// cache original method
	var original=arrayProto[method];def(arrayMethods,method,function mutator(){// avoid leaking arguments:
	// http://jsperf.com/closure-with-arguments
	var i=arguments.length;var args=new Array(i);while(i--){args[i]=arguments[i];}var result=original.apply(this,args);var ob=this.__ob__;var inserted;switch(method){case'push':inserted=args;break;case'unshift':inserted=args;break;case'splice':inserted=args.slice(2);break;}if(inserted)ob.observeArray(inserted);// notify change
	ob.dep.notify();return result;});});/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */def(arrayProto,'$set',function $set(index,val){if(index>=this.length){this.length=Number(index)+1;}return this.splice(index,1,val)[0];});/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */def(arrayProto,'$remove',function $remove(item){/* istanbul ignore if */if(!this.length)return;var index=indexOf(this,item);if(index>-1){return this.splice(index,1);}});var arrayKeys=Object.getOwnPropertyNames(arrayMethods);/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */var shouldConvert=true;function withoutConversion(fn){shouldConvert=false;fn();shouldConvert=true;}/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */function Observer(value){this.value=value;this.dep=new Dep();def(value,'__ob__',this);if(isArray(value)){var augment=hasProto?protoAugment:copyAugment;augment(value,arrayMethods,arrayKeys);this.observeArray(value);}else{this.walk(value);}}// Instance methods
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */Observer.prototype.walk=function(obj){var keys=Object.keys(obj);for(var i=0,l=keys.length;i<l;i++){this.convert(keys[i],obj[keys[i]]);}};/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */Observer.prototype.observeArray=function(items){for(var i=0,l=items.length;i<l;i++){observe(items[i]);}};/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */Observer.prototype.convert=function(key,val){defineReactive(this.value,key,val);};/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */Observer.prototype.addVm=function(vm){(this.vms||(this.vms=[])).push(vm);};/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */Observer.prototype.removeVm=function(vm){this.vms.$remove(vm);};// helpers
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */function protoAugment(target,src){/* eslint-disable no-proto */target.__proto__=src;/* eslint-enable no-proto */}/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */function copyAugment(target,src,keys){for(var i=0,l=keys.length;i<l;i++){var key=keys[i];def(target,key,src[key]);}}/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */function observe(value,vm){if(!value||(typeof value==='undefined'?'undefined':_typeof(value))!=='object'){return;}var ob;if(hasOwn(value,'__ob__')&&value.__ob__ instanceof Observer){ob=value.__ob__;}else if(shouldConvert&&(isArray(value)||isPlainObject(value))&&Object.isExtensible(value)&&!value._isVue){ob=new Observer(value);}if(ob&&vm){ob.addVm(vm);}return ob;}/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */function defineReactive(obj,key,val){var dep=new Dep();var property=Object.getOwnPropertyDescriptor(obj,key);if(property&&property.configurable===false){return;}// cater for pre-defined getter/setters
	var getter=property&&property.get;var setter=property&&property.set;var childOb=observe(val);Object.defineProperty(obj,key,{enumerable:true,configurable:true,get:function reactiveGetter(){var value=getter?getter.call(obj):val;if(Dep.target){dep.depend();if(childOb){childOb.dep.depend();}if(isArray(value)){for(var e,i=0,l=value.length;i<l;i++){e=value[i];e&&e.__ob__&&e.__ob__.dep.depend();}}}return value;},set:function reactiveSetter(newVal){var value=getter?getter.call(obj):val;if(newVal===value){return;}if(setter){setter.call(obj,newVal);}else{val=newVal;}childOb=observe(newVal);dep.notify();}});}var util=Object.freeze({defineReactive:defineReactive,set:set,del:del,hasOwn:hasOwn,isLiteral:isLiteral,isReserved:isReserved,_toString:_toString,toNumber:toNumber,toBoolean:toBoolean,stripQuotes:stripQuotes,camelize:camelize,hyphenate:hyphenate,classify:classify,bind:bind,toArray:toArray,extend:extend,isObject:isObject,isPlainObject:isPlainObject,def:def,debounce:_debounce,indexOf:indexOf,cancellable:cancellable,looseEqual:looseEqual,isArray:isArray,hasProto:hasProto,inBrowser:inBrowser,devtools:devtools,isIE:isIE,isIE9:isIE9,isAndroid:isAndroid,isIos:isIos,iosVersionMatch:iosVersionMatch,iosVersion:iosVersion,hasMutationObserverBug:hasMutationObserverBug,get transitionProp(){return transitionProp;},get transitionEndEvent(){return transitionEndEvent;},get animationProp(){return animationProp;},get animationEndEvent(){return animationEndEvent;},nextTick:nextTick,get _Set(){return _Set;},query:query,inDoc:inDoc,getAttr:getAttr,getBindAttr:getBindAttr,hasBindAttr:hasBindAttr,before:before,after:after,remove:remove,prepend:prepend,replace:replace,on:on,off:off,setClass:setClass,addClass:addClass,removeClass:removeClass,extractContent:extractContent,trimNode:trimNode,isTemplate:isTemplate,createAnchor:createAnchor,findRef:findRef,mapNodeRange:mapNodeRange,removeNodeRange:removeNodeRange,isFragment:isFragment,getOuterHTML:getOuterHTML,mergeOptions:mergeOptions,resolveAsset:resolveAsset,checkComponentAttr:checkComponentAttr,commonTagRE:commonTagRE,reservedTagRE:reservedTagRE,get warn(){return warn;}});var uid=0;function initMixin(Vue){/**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */Vue.prototype._init=function(options){options=options||{};this.$el=null;this.$parent=options.parent;this.$root=this.$parent?this.$parent.$root:this;this.$children=[];this.$refs={};// child vm references
	this.$els={};// element references
	this._watchers=[];// all watchers as an array
	this._directives=[];// all directives
	// a uid
	this._uid=uid++;// a flag to avoid this being observed
	this._isVue=true;// events bookkeeping
	this._events={};// registered callbacks
	this._eventsCount={};// for $broadcast optimization
	// fragment instance properties
	this._isFragment=false;this._fragment=// @type {DocumentFragment}
	this._fragmentStart=// @type {Text|Comment}
	this._fragmentEnd=null;// @type {Text|Comment}
	// lifecycle state
	this._isCompiled=this._isDestroyed=this._isReady=this._isAttached=this._isBeingDestroyed=this._vForRemoving=false;this._unlinkFn=null;// context:
	// if this is a transcluded component, context
	// will be the common parent vm of this instance
	// and its host.
	this._context=options._context||this.$parent;// scope:
	// if this is inside an inline v-for, the scope
	// will be the intermediate scope created for this
	// repeat fragment. this is used for linking props
	// and container directives.
	this._scope=options._scope;// fragment:
	// if this instance is compiled inside a Fragment, it
	// needs to reigster itself as a child of that fragment
	// for attach/detach to work properly.
	this._frag=options._frag;if(this._frag){this._frag.children.push(this);}// push self into parent / transclusion host
	if(this.$parent){this.$parent.$children.push(this);}// merge options.
	options=this.$options=mergeOptions(this.constructor.options,options,this);// set ref
	this._updateRef();// initialize data as empty object.
	// it will be filled up in _initData().
	this._data={};// call init hook
	this._callHook('init');// initialize data observation and scope inheritance.
	this._initState();// setup event system and option events.
	this._initEvents();// call created hook
	this._callHook('created');// if `el` option is passed, start compilation.
	if(options.el){this.$mount(options.el);}};}var pathCache=new Cache(1000);// actions
	var APPEND=0;var PUSH=1;var INC_SUB_PATH_DEPTH=2;var PUSH_SUB_PATH=3;// states
	var BEFORE_PATH=0;var IN_PATH=1;var BEFORE_IDENT=2;var IN_IDENT=3;var IN_SUB_PATH=4;var IN_SINGLE_QUOTE=5;var IN_DOUBLE_QUOTE=6;var AFTER_PATH=7;var ERROR=8;var pathStateMachine=[];pathStateMachine[BEFORE_PATH]={'ws':[BEFORE_PATH],'ident':[IN_IDENT,APPEND],'[':[IN_SUB_PATH],'eof':[AFTER_PATH]};pathStateMachine[IN_PATH]={'ws':[IN_PATH],'.':[BEFORE_IDENT],'[':[IN_SUB_PATH],'eof':[AFTER_PATH]};pathStateMachine[BEFORE_IDENT]={'ws':[BEFORE_IDENT],'ident':[IN_IDENT,APPEND]};pathStateMachine[IN_IDENT]={'ident':[IN_IDENT,APPEND],'0':[IN_IDENT,APPEND],'number':[IN_IDENT,APPEND],'ws':[IN_PATH,PUSH],'.':[BEFORE_IDENT,PUSH],'[':[IN_SUB_PATH,PUSH],'eof':[AFTER_PATH,PUSH]};pathStateMachine[IN_SUB_PATH]={"'":[IN_SINGLE_QUOTE,APPEND],'"':[IN_DOUBLE_QUOTE,APPEND],'[':[IN_SUB_PATH,INC_SUB_PATH_DEPTH],']':[IN_PATH,PUSH_SUB_PATH],'eof':ERROR,'else':[IN_SUB_PATH,APPEND]};pathStateMachine[IN_SINGLE_QUOTE]={"'":[IN_SUB_PATH,APPEND],'eof':ERROR,'else':[IN_SINGLE_QUOTE,APPEND]};pathStateMachine[IN_DOUBLE_QUOTE]={'"':[IN_SUB_PATH,APPEND],'eof':ERROR,'else':[IN_DOUBLE_QUOTE,APPEND]};/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */function getPathCharType(ch){if(ch===undefined){return'eof';}var code=ch.charCodeAt(0);switch(code){case 0x5B:// [
	case 0x5D:// ]
	case 0x2E:// .
	case 0x22:// "
	case 0x27:// '
	case 0x30:// 0
	return ch;case 0x5F:// _
	case 0x24:// $
	return'ident';case 0x20:// Space
	case 0x09:// Tab
	case 0x0A:// Newline
	case 0x0D:// Return
	case 0xA0:// No-break space
	case 0xFEFF:// Byte Order Mark
	case 0x2028:// Line Separator
	case 0x2029:// Paragraph Separator
	return'ws';}// a-z, A-Z
	if(code>=0x61&&code<=0x7A||code>=0x41&&code<=0x5A){return'ident';}// 1-9
	if(code>=0x31&&code<=0x39){return'number';}return'else';}/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */function formatSubPath(path){var trimmed=path.trim();// invalid leading 0
	if(path.charAt(0)==='0'&&isNaN(path)){return false;}return isLiteral(trimmed)?stripQuotes(trimmed):'*'+trimmed;}/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */function parse(path){var keys=[];var index=-1;var mode=BEFORE_PATH;var subPathDepth=0;var c,newChar,key,type,transition,action,typeMap;var actions=[];actions[PUSH]=function(){if(key!==undefined){keys.push(key);key=undefined;}};actions[APPEND]=function(){if(key===undefined){key=newChar;}else{key+=newChar;}};actions[INC_SUB_PATH_DEPTH]=function(){actions[APPEND]();subPathDepth++;};actions[PUSH_SUB_PATH]=function(){if(subPathDepth>0){subPathDepth--;mode=IN_SUB_PATH;actions[APPEND]();}else{subPathDepth=0;key=formatSubPath(key);if(key===false){return false;}else{actions[PUSH]();}}};function maybeUnescapeQuote(){var nextChar=path[index+1];if(mode===IN_SINGLE_QUOTE&&nextChar==="'"||mode===IN_DOUBLE_QUOTE&&nextChar==='"'){index++;newChar='\\'+nextChar;actions[APPEND]();return true;}}while(mode!=null){index++;c=path[index];if(c==='\\'&&maybeUnescapeQuote()){continue;}type=getPathCharType(c);typeMap=pathStateMachine[mode];transition=typeMap[type]||typeMap['else']||ERROR;if(transition===ERROR){return;// parse error
	}mode=transition[0];action=actions[transition[1]];if(action){newChar=transition[2];newChar=newChar===undefined?c:newChar;if(action()===false){return;}}if(mode===AFTER_PATH){keys.raw=path;return keys;}}}/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */function parsePath(path){var hit=pathCache.get(path);if(!hit){hit=parse(path);if(hit){pathCache.put(path,hit);}}return hit;}/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */function getPath(obj,path){return parseExpression(path).get(obj);}/**
	 * Warn against setting non-existent root path on a vm.
	 */var warnNonExistent;if(process.env.NODE_ENV!=='production'){warnNonExistent=function warnNonExistent(path,vm){warn('You are setting a non-existent path "'+path.raw+'" '+'on a vm instance. Consider pre-initializing the property '+'with the "data" option for more reliable reactivity '+'and better performance.',vm);};}/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */function setPath(obj,path,val){var original=obj;if(typeof path==='string'){path=parse(path);}if(!path||!isObject(obj)){return false;}var last,key;for(var i=0,l=path.length;i<l;i++){last=obj;key=path[i];if(key.charAt(0)==='*'){key=parseExpression(key.slice(1)).get.call(original,original);}if(i<l-1){obj=obj[key];if(!isObject(obj)){obj={};if(process.env.NODE_ENV!=='production'&&last._isVue){warnNonExistent(path,last);}set(last,key,obj);}}else{if(isArray(obj)){obj.$set(key,val);}else if(key in obj){obj[key]=val;}else{if(process.env.NODE_ENV!=='production'&&obj._isVue){warnNonExistent(path,obj);}set(obj,key,val);}}}return true;}var path=Object.freeze({parsePath:parsePath,getPath:getPath,setPath:setPath});var expressionCache=new Cache(1000);var allowedKeywords='Math,Date,this,true,false,null,undefined,Infinity,NaN,'+'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,'+'encodeURIComponent,parseInt,parseFloat';var allowedKeywordsRE=new RegExp('^('+allowedKeywords.replace(/,/g,'\\b|')+'\\b)');// keywords that don't make sense inside expressions
	var improperKeywords='break,case,class,catch,const,continue,debugger,default,'+'delete,do,else,export,extends,finally,for,function,if,'+'import,in,instanceof,let,return,super,switch,throw,try,'+'var,while,with,yield,enum,await,implements,package,'+'protected,static,interface,private,public';var improperKeywordsRE=new RegExp('^('+improperKeywords.replace(/,/g,'\\b|')+'\\b)');var wsRE=/\s/g;var newlineRE=/\n/g;var saveRE=/[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;var restoreRE=/"(\d+)"/g;var pathTestRE=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;var identRE=/[^\w$\.](?:[A-Za-z_$][\w$]*)/g;var literalValueRE$1=/^(?:true|false|null|undefined|Infinity|NaN)$/;function noop(){}/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */var saved=[];/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */function save(str,isString){var i=saved.length;saved[i]=isString?str.replace(newlineRE,'\\n'):str;return'"'+i+'"';}/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */function rewrite(raw){var c=raw.charAt(0);var path=raw.slice(1);if(allowedKeywordsRE.test(path)){return raw;}else{path=path.indexOf('"')>-1?path.replace(restoreRE,restore):path;return c+'scope.'+path;}}/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */function restore(str,i){return saved[i];}/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */function compileGetter(exp){if(improperKeywordsRE.test(exp)){process.env.NODE_ENV!=='production'&&warn('Avoid using reserved keywords in expression: '+exp);}// reset state
	saved.length=0;// save strings and object literal keys
	var body=exp.replace(saveRE,save).replace(wsRE,'');// rewrite all paths
	// pad 1 space here because the regex matches 1 extra char
	body=(' '+body).replace(identRE,rewrite).replace(restoreRE,restore);return makeGetterFn(body);}/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */function makeGetterFn(body){try{/* eslint-disable no-new-func */return new Function('scope','return '+body+';');/* eslint-enable no-new-func */}catch(e){if(process.env.NODE_ENV!=='production'){/* istanbul ignore if */if(e.toString().match(/unsafe-eval|CSP/)){warn('It seems you are using the default build of Vue.js in an environment '+'with Content Security Policy that prohibits unsafe-eval. '+'Use the CSP-compliant build instead: '+'http://vuejs.org/guide/installation.html#CSP-compliant-build');}else{warn('Invalid expression. '+'Generated function body: '+body);}}return noop;}}/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */function compileSetter(exp){var path=parsePath(exp);if(path){return function(scope,val){setPath(scope,path,val);};}else{process.env.NODE_ENV!=='production'&&warn('Invalid setter expression: '+exp);}}/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */function parseExpression(exp,needSet){exp=exp.trim();// try cache
	var hit=expressionCache.get(exp);if(hit){if(needSet&&!hit.set){hit.set=compileSetter(hit.exp);}return hit;}var res={exp:exp};res.get=isSimplePath(exp)&&exp.indexOf('[')<0// optimized super simple getter
	?makeGetterFn('scope.'+exp)// dynamic getter
	:compileGetter(exp);if(needSet){res.set=compileSetter(exp);}expressionCache.put(exp,res);return res;}/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */function isSimplePath(exp){return pathTestRE.test(exp)&&// don't treat literal values as paths
	!literalValueRE$1.test(exp)&&// Math constants e.g. Math.PI, Math.E etc.
	exp.slice(0,5)!=='Math.';}var expression=Object.freeze({parseExpression:parseExpression,isSimplePath:isSimplePath});// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue=[];var userQueue=[];var has={};var circular={};var waiting=false;/**
	 * Reset the batcher's state.
	 */function resetBatcherState(){queue.length=0;userQueue.length=0;has={};circular={};waiting=false;}/**
	 * Flush both queues and run the watchers.
	 */function flushBatcherQueue(){var _again=true;_function:while(_again){_again=false;runBatcherQueue(queue);runBatcherQueue(userQueue);// user watchers triggered more watchers,
	// keep flushing until it depletes
	if(queue.length){_again=true;continue _function;}// dev tool hook
	/* istanbul ignore if */if(devtools&&config.devtools){devtools.emit('flush');}resetBatcherState();}}/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */function runBatcherQueue(queue){// do not cache length because more watchers might be pushed
	// as we run existing watchers
	for(var i=0;i<queue.length;i++){var watcher=queue[i];var id=watcher.id;has[id]=null;watcher.run();// in dev build, check and stop circular updates.
	if(process.env.NODE_ENV!=='production'&&has[id]!=null){circular[id]=(circular[id]||0)+1;if(circular[id]>config._maxUpdateCount){warn('You may have an infinite update loop for watcher '+'with expression "'+watcher.expression+'"',watcher.vm);break;}}}queue.length=0;}/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */function pushWatcher(watcher){var id=watcher.id;if(has[id]==null){// push watcher into appropriate queue
	var q=watcher.user?userQueue:queue;has[id]=q.length;q.push(watcher);// queue the flush
	if(!waiting){waiting=true;nextTick(flushBatcherQueue);}}}var uid$2=0;/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */function Watcher(vm,expOrFn,cb,options){// mix in options
	if(options){extend(this,options);}var isFn=typeof expOrFn==='function';this.vm=vm;vm._watchers.push(this);this.expression=expOrFn;this.cb=cb;this.id=++uid$2;// uid for batching
	this.active=true;this.dirty=this.lazy;// for lazy watchers
	this.deps=[];this.newDeps=[];this.depIds=new _Set();this.newDepIds=new _Set();this.prevError=null;// for async error stacks
	// parse expression for getter/setter
	if(isFn){this.getter=expOrFn;this.setter=undefined;}else{var res=parseExpression(expOrFn,this.twoWay);this.getter=res.get;this.setter=res.set;}this.value=this.lazy?undefined:this.get();// state for avoiding false triggers for deep and Array
	// watchers during vm._digest()
	this.queued=this.shallow=false;}/**
	 * Evaluate the getter, and re-collect dependencies.
	 */Watcher.prototype.get=function(){this.beforeGet();var scope=this.scope||this.vm;var value;try{value=this.getter.call(scope,scope);}catch(e){if(process.env.NODE_ENV!=='production'&&config.warnExpressionErrors){warn('Error when evaluating expression '+'"'+this.expression+'": '+e.toString(),this.vm);}}// "touch" every property so they are all tracked as
	// dependencies for deep watching
	if(this.deep){traverse(value);}if(this.preProcess){value=this.preProcess(value);}if(this.filters){value=scope._applyFilters(value,null,this.filters,false);}if(this.postProcess){value=this.postProcess(value);}this.afterGet();return value;};/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */Watcher.prototype.set=function(value){var scope=this.scope||this.vm;if(this.filters){value=scope._applyFilters(value,this.value,this.filters,true);}try{this.setter.call(scope,scope,value);}catch(e){if(process.env.NODE_ENV!=='production'&&config.warnExpressionErrors){warn('Error when evaluating setter '+'"'+this.expression+'": '+e.toString(),this.vm);}}// two-way sync for v-for alias
	var forContext=scope.$forContext;if(forContext&&forContext.alias===this.expression){if(forContext.filters){process.env.NODE_ENV!=='production'&&warn('It seems you are using two-way binding on '+'a v-for alias ('+this.expression+'), and the '+'v-for has filters. This will not work properly. '+'Either remove the filters or use an array of '+'objects and bind to object properties instead.',this.vm);return;}forContext._withLock(function(){if(scope.$key){// original is an object
	forContext.rawValue[scope.$key]=value;}else{forContext.rawValue.$set(scope.$index,value);}});}};/**
	 * Prepare for dependency collection.
	 */Watcher.prototype.beforeGet=function(){Dep.target=this;};/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */Watcher.prototype.addDep=function(dep){var id=dep.id;if(!this.newDepIds.has(id)){this.newDepIds.add(id);this.newDeps.push(dep);if(!this.depIds.has(id)){dep.addSub(this);}}};/**
	 * Clean up for dependency collection.
	 */Watcher.prototype.afterGet=function(){Dep.target=null;var i=this.deps.length;while(i--){var dep=this.deps[i];if(!this.newDepIds.has(dep.id)){dep.removeSub(this);}}var tmp=this.depIds;this.depIds=this.newDepIds;this.newDepIds=tmp;this.newDepIds.clear();tmp=this.deps;this.deps=this.newDeps;this.newDeps=tmp;this.newDeps.length=0;};/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */Watcher.prototype.update=function(shallow){if(this.lazy){this.dirty=true;}else if(this.sync||!config.async){this.run();}else{// if queued, only overwrite shallow with non-shallow,
	// but not the other way around.
	this.shallow=this.queued?shallow?this.shallow:false:!!shallow;this.queued=true;// record before-push error stack in debug mode
	/* istanbul ignore if */if(process.env.NODE_ENV!=='production'&&config.debug){this.prevError=new Error('[vue] async stack trace');}pushWatcher(this);}};/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */Watcher.prototype.run=function(){if(this.active){var value=this.get();if(value!==this.value||// Deep watchers and watchers on Object/Arrays should fire even
	// when the value is the same, because the value may
	// have mutated; but only do so if this is a
	// non-shallow update (caused by a vm digest).
	(isObject(value)||this.deep)&&!this.shallow){// set new value
	var oldValue=this.value;this.value=value;// in debug + async mode, when a watcher callbacks
	// throws, we also throw the saved before-push error
	// so the full cross-tick stack trace is available.
	var prevError=this.prevError;/* istanbul ignore if */if(process.env.NODE_ENV!=='production'&&config.debug&&prevError){this.prevError=null;try{this.cb.call(this.vm,value,oldValue);}catch(e){nextTick(function(){throw prevError;},0);throw e;}}else{this.cb.call(this.vm,value,oldValue);}}this.queued=this.shallow=false;}};/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */Watcher.prototype.evaluate=function(){// avoid overwriting another watcher that is being
	// collected.
	var current=Dep.target;this.value=this.get();this.dirty=false;Dep.target=current;};/**
	 * Depend on all deps collected by this watcher.
	 */Watcher.prototype.depend=function(){var i=this.deps.length;while(i--){this.deps[i].depend();}};/**
	 * Remove self from all dependencies' subcriber list.
	 */Watcher.prototype.teardown=function(){if(this.active){// remove self from vm's watcher list
	// this is a somewhat expensive operation so we skip it
	// if the vm is being destroyed or is performing a v-for
	// re-render (the watcher list is then filtered by v-for).
	if(!this.vm._isBeingDestroyed&&!this.vm._vForRemoving){this.vm._watchers.$remove(this);}var i=this.deps.length;while(i--){this.deps[i].removeSub(this);}this.active=false;this.vm=this.cb=this.value=null;}};/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */var seenObjects=new _Set();function traverse(val,seen){var i=undefined,keys=undefined;if(!seen){seen=seenObjects;seen.clear();}var isA=isArray(val);var isO=isObject(val);if((isA||isO)&&Object.isExtensible(val)){if(val.__ob__){var depId=val.__ob__.dep.id;if(seen.has(depId)){return;}else{seen.add(depId);}}if(isA){i=val.length;while(i--){traverse(val[i],seen);}}else if(isO){keys=Object.keys(val);i=keys.length;while(i--){traverse(val[keys[i]],seen);}}}}var text$1={bind:function bind(){this.attr=this.el.nodeType===3?'data':'textContent';},update:function update(value){this.el[this.attr]=_toString(value);}};var templateCache=new Cache(1000);var idSelectorCache=new Cache(1000);var map={efault:[0,'',''],legend:[1,'<fieldset>','</fieldset>'],tr:[2,'<table><tbody>','</tbody></table>'],col:[2,'<table><tbody></tbody><colgroup>','</colgroup></table>']};map.td=map.th=[3,'<table><tbody><tr>','</tr></tbody></table>'];map.option=map.optgroup=[1,'<select multiple="multiple">','</select>'];map.thead=map.tbody=map.colgroup=map.caption=map.tfoot=[1,'<table>','</table>'];map.g=map.defs=map.symbol=map.use=map.image=map.text=map.circle=map.ellipse=map.line=map.path=map.polygon=map.polyline=map.rect=[1,'<svg '+'xmlns="http://www.w3.org/2000/svg" '+'xmlns:xlink="http://www.w3.org/1999/xlink" '+'xmlns:ev="http://www.w3.org/2001/xml-events"'+'version="1.1">','</svg>'];/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */function isRealTemplate(node){return isTemplate(node)&&isFragment(node.content);}var tagRE$1=/<([\w:-]+)/;var entityRE=/&#?\w+?;/;var commentRE=/<!--/;/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */function stringToFragment(templateString,raw){// try a cache hit first
	var cacheKey=raw?templateString:templateString.trim();var hit=templateCache.get(cacheKey);if(hit){return hit;}var frag=document.createDocumentFragment();var tagMatch=templateString.match(tagRE$1);var entityMatch=entityRE.test(templateString);var commentMatch=commentRE.test(templateString);if(!tagMatch&&!entityMatch&&!commentMatch){// text only, return a single text node.
	frag.appendChild(document.createTextNode(templateString));}else{var tag=tagMatch&&tagMatch[1];var wrap=map[tag]||map.efault;var depth=wrap[0];var prefix=wrap[1];var suffix=wrap[2];var node=document.createElement('div');node.innerHTML=prefix+templateString+suffix;while(depth--){node=node.lastChild;}var child;/* eslint-disable no-cond-assign */while(child=node.firstChild){/* eslint-enable no-cond-assign */frag.appendChild(child);}}if(!raw){trimNode(frag);}templateCache.put(cacheKey,frag);return frag;}/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */function nodeToFragment(node){// if its a template tag and the browser supports it,
	// its content is already a document fragment. However, iOS Safari has
	// bug when using directly cloned template content with touch
	// events and can cause crashes when the nodes are removed from DOM, so we
	// have to treat template elements as string templates. (#2805)
	/* istanbul ignore if */if(isRealTemplate(node)){return stringToFragment(node.innerHTML);}// script template
	if(node.tagName==='SCRIPT'){return stringToFragment(node.textContent);}// normal node, clone it to avoid mutating the original
	var clonedNode=cloneNode(node);var frag=document.createDocumentFragment();var child;/* eslint-disable no-cond-assign */while(child=clonedNode.firstChild){/* eslint-enable no-cond-assign */frag.appendChild(child);}trimNode(frag);return frag;}// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate=function(){/* istanbul ignore else */if(inBrowser){var a=document.createElement('div');a.innerHTML='<template>1</template>';return!a.cloneNode(true).firstChild.innerHTML;}else{return false;}}();// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug=function(){/* istanbul ignore else */if(inBrowser){var t=document.createElement('textarea');t.placeholder='t';return t.cloneNode(true).value==='t';}else{return false;}}();/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */function cloneNode(node){/* istanbul ignore if */if(!node.querySelectorAll){return node.cloneNode();}var res=node.cloneNode(true);var i,original,cloned;/* istanbul ignore if */if(hasBrokenTemplate){var tempClone=res;if(isRealTemplate(node)){node=node.content;tempClone=res.content;}original=node.querySelectorAll('template');if(original.length){cloned=tempClone.querySelectorAll('template');i=cloned.length;while(i--){cloned[i].parentNode.replaceChild(cloneNode(original[i]),cloned[i]);}}}/* istanbul ignore if */if(hasTextareaCloneBug){if(node.tagName==='TEXTAREA'){res.value=node.value;}else{original=node.querySelectorAll('textarea');if(original.length){cloned=res.querySelectorAll('textarea');i=cloned.length;while(i--){cloned[i].value=original[i].value;}}}}return res;}/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */function parseTemplate(template,shouldClone,raw){var node,frag;// if the template is already a document fragment,
	// do nothing
	if(isFragment(template)){trimNode(template);return shouldClone?cloneNode(template):template;}if(typeof template==='string'){// id selector
	if(!raw&&template.charAt(0)==='#'){// id selector can be cached too
	frag=idSelectorCache.get(template);if(!frag){node=document.getElementById(template.slice(1));if(node){frag=nodeToFragment(node);// save selector to cache
	idSelectorCache.put(template,frag);}}}else{// normal string template
	frag=stringToFragment(template,raw);}}else if(template.nodeType){// a direct node
	frag=nodeToFragment(template);}return frag&&shouldClone?cloneNode(frag):frag;}var template=Object.freeze({cloneNode:cloneNode,parseTemplate:parseTemplate});var html={bind:function bind(){// a comment node means this is a binding for
	// {{{ inline unescaped html }}}
	if(this.el.nodeType===8){// hold nodes
	this.nodes=[];// replace the placeholder with proper anchor
	this.anchor=createAnchor('v-html');replace(this.el,this.anchor);}},update:function update(value){value=_toString(value);if(this.nodes){this.swap(value);}else{this.el.innerHTML=value;}},swap:function swap(value){// remove old nodes
	var i=this.nodes.length;while(i--){remove(this.nodes[i]);}// convert new value to a fragment
	// do not attempt to retrieve from id selector
	var frag=parseTemplate(value,true,true);// save a reference to these nodes so we can remove later
	this.nodes=toArray(frag.childNodes);before(frag,this.anchor);}};/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */function Fragment(linker,vm,frag,host,scope,parentFrag){this.children=[];this.childFrags=[];this.vm=vm;this.scope=scope;this.inserted=false;this.parentFrag=parentFrag;if(parentFrag){parentFrag.childFrags.push(this);}this.unlink=linker(vm,frag,host,scope,this);var single=this.single=frag.childNodes.length===1&&// do not go single mode if the only node is an anchor
	!frag.childNodes[0].__v_anchor;if(single){this.node=frag.childNodes[0];this.before=singleBefore;this.remove=singleRemove;}else{this.node=createAnchor('fragment-start');this.end=createAnchor('fragment-end');this.frag=frag;prepend(this.node,frag);frag.appendChild(this.end);this.before=multiBefore;this.remove=multiRemove;}this.node.__v_frag=this;}/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */Fragment.prototype.callHook=function(hook){var i,l;for(i=0,l=this.childFrags.length;i<l;i++){this.childFrags[i].callHook(hook);}for(i=0,l=this.children.length;i<l;i++){hook(this.children[i]);}};/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */function singleBefore(target,withTransition){this.inserted=true;var method=withTransition!==false?beforeWithTransition:before;method(this.node,target,this.vm);if(inDoc(this.node)){this.callHook(attach);}}/**
	 * Remove fragment, single node version
	 */function singleRemove(){this.inserted=false;var shouldCallRemove=inDoc(this.node);var self=this;this.beforeRemove();removeWithTransition(this.node,this.vm,function(){if(shouldCallRemove){self.callHook(detach);}self.destroy();});}/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */function multiBefore(target,withTransition){this.inserted=true;var vm=this.vm;var method=withTransition!==false?beforeWithTransition:before;mapNodeRange(this.node,this.end,function(node){method(node,target,vm);});if(inDoc(this.node)){this.callHook(attach);}}/**
	 * Remove fragment, multi-nodes version
	 */function multiRemove(){this.inserted=false;var self=this;var shouldCallRemove=inDoc(this.node);this.beforeRemove();removeNodeRange(this.node,this.end,this.vm,this.frag,function(){if(shouldCallRemove){self.callHook(detach);}self.destroy();});}/**
	 * Prepare the fragment for removal.
	 */Fragment.prototype.beforeRemove=function(){var i,l;for(i=0,l=this.childFrags.length;i<l;i++){// call the same method recursively on child
	// fragments, depth-first
	this.childFrags[i].beforeRemove(false);}for(i=0,l=this.children.length;i<l;i++){// Call destroy for all contained instances,
	// with remove:false and defer:true.
	// Defer is necessary because we need to
	// keep the children to call detach hooks
	// on them.
	this.children[i].$destroy(false,true);}var dirs=this.unlink.dirs;for(i=0,l=dirs.length;i<l;i++){// disable the watchers on all the directives
	// so that the rendered content stays the same
	// during removal.
	dirs[i]._watcher&&dirs[i]._watcher.teardown();}};/**
	 * Destroy the fragment.
	 */Fragment.prototype.destroy=function(){if(this.parentFrag){this.parentFrag.childFrags.$remove(this);}this.node.__v_frag=null;this.unlink();};/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */function attach(child){if(!child._isAttached&&inDoc(child.$el)){child._callHook('attached');}}/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */function detach(child){if(child._isAttached&&!inDoc(child.$el)){child._callHook('detached');}}var linkerCache=new Cache(5000);/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */function FragmentFactory(vm,el){this.vm=vm;var template;var isString=typeof el==='string';if(isString||isTemplate(el)&&!el.hasAttribute('v-if')){template=parseTemplate(el,true);}else{template=document.createDocumentFragment();template.appendChild(el);}this.template=template;// linker can be cached, but only for components
	var linker;var cid=vm.constructor.cid;if(cid>0){var cacheId=cid+(isString?el:getOuterHTML(el));linker=linkerCache.get(cacheId);if(!linker){linker=compile(template,vm.$options,true);linkerCache.put(cacheId,linker);}}else{linker=compile(template,vm.$options,true);}this.linker=linker;}/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */FragmentFactory.prototype.create=function(host,scope,parentFrag){var frag=cloneNode(this.template);return new Fragment(this.linker,this.vm,frag,host,scope,parentFrag);};var ON=700;var MODEL=800;var BIND=850;var TRANSITION=1100;var EL=1500;var COMPONENT=1500;var PARTIAL=1750;var IF=2100;var FOR=2200;var SLOT=2300;var uid$3=0;var vFor={priority:FOR,terminal:true,params:['track-by','stagger','enter-stagger','leave-stagger'],bind:function bind(){// support "item in/of items" syntax
	var inMatch=this.expression.match(/(.*) (?:in|of) (.*)/);if(inMatch){var itMatch=inMatch[1].match(/\((.*),(.*)\)/);if(itMatch){this.iterator=itMatch[1].trim();this.alias=itMatch[2].trim();}else{this.alias=inMatch[1].trim();}this.expression=inMatch[2];}if(!this.alias){process.env.NODE_ENV!=='production'&&warn('Invalid v-for expression "'+this.descriptor.raw+'": '+'alias is required.',this.vm);return;}// uid as a cache identifier
	this.id='__v-for__'+ ++uid$3;// check if this is an option list,
	// so that we know if we need to update the <select>'s
	// v-model when the option list has changed.
	// because v-model has a lower priority than v-for,
	// the v-model is not bound here yet, so we have to
	// retrive it in the actual updateModel() function.
	var tag=this.el.tagName;this.isOption=(tag==='OPTION'||tag==='OPTGROUP')&&this.el.parentNode.tagName==='SELECT';// setup anchor nodes
	this.start=createAnchor('v-for-start');this.end=createAnchor('v-for-end');replace(this.el,this.end);before(this.start,this.end);// cache
	this.cache=Object.create(null);// fragment factory
	this.factory=new FragmentFactory(this.vm,this.el);},update:function update(data){this.diff(data);this.updateRef();this.updateModel();},/**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */diff:function diff(data){// check if the Array was converted from an Object
	var item=data[0];var convertedFromObject=this.fromObject=isObject(item)&&hasOwn(item,'$key')&&hasOwn(item,'$value');var trackByKey=this.params.trackBy;var oldFrags=this.frags;var frags=this.frags=new Array(data.length);var alias=this.alias;var iterator=this.iterator;var start=this.start;var end=this.end;var inDocument=inDoc(start);var init=!oldFrags;var i,l,frag,key,value,primitive;// First pass, go through the new Array and fill up
	// the new frags array. If a piece of data has a cached
	// instance for it, we reuse it. Otherwise build a new
	// instance.
	for(i=0,l=data.length;i<l;i++){item=data[i];key=convertedFromObject?item.$key:null;value=convertedFromObject?item.$value:item;primitive=!isObject(value);frag=!init&&this.getCachedFrag(value,i,key);if(frag){// reusable fragment
	frag.reused=true;// update $index
	frag.scope.$index=i;// update $key
	if(key){frag.scope.$key=key;}// update iterator
	if(iterator){frag.scope[iterator]=key!==null?key:i;}// update data for track-by, object repeat &
	// primitive values.
	if(trackByKey||convertedFromObject||primitive){withoutConversion(function(){frag.scope[alias]=value;});}}else{// new isntance
	frag=this.create(value,alias,i,key);frag.fresh=!init;}frags[i]=frag;if(init){frag.before(end);}}// we're done for the initial render.
	if(init){return;}// Second pass, go through the old fragments and
	// destroy those who are not reused (and remove them
	// from cache)
	var removalIndex=0;var totalRemoved=oldFrags.length-frags.length;// when removing a large number of fragments, watcher removal
	// turns out to be a perf bottleneck, so we batch the watcher
	// removals into a single filter call!
	this.vm._vForRemoving=true;for(i=0,l=oldFrags.length;i<l;i++){frag=oldFrags[i];if(!frag.reused){this.deleteCachedFrag(frag);this.remove(frag,removalIndex++,totalRemoved,inDocument);}}this.vm._vForRemoving=false;if(removalIndex){this.vm._watchers=this.vm._watchers.filter(function(w){return w.active;});}// Final pass, move/insert new fragments into the
	// right place.
	var targetPrev,prevEl,currentPrev;var insertionIndex=0;for(i=0,l=frags.length;i<l;i++){frag=frags[i];// this is the frag that we should be after
	targetPrev=frags[i-1];prevEl=targetPrev?targetPrev.staggerCb?targetPrev.staggerAnchor:targetPrev.end||targetPrev.node:start;if(frag.reused&&!frag.staggerCb){currentPrev=findPrevFrag(frag,start,this.id);if(currentPrev!==targetPrev&&(!currentPrev||// optimization for moving a single item.
	// thanks to suggestions by @livoras in #1807
	findPrevFrag(currentPrev,start,this.id)!==targetPrev)){this.move(frag,prevEl);}}else{// new instance, or still in stagger.
	// insert with updated stagger index.
	this.insert(frag,insertionIndex++,prevEl,inDocument);}frag.reused=frag.fresh=false;}},/**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */create:function create(value,alias,index,key){var host=this._host;// create iteration scope
	var parentScope=this._scope||this.vm;var scope=Object.create(parentScope);// ref holder for the scope
	scope.$refs=Object.create(parentScope.$refs);scope.$els=Object.create(parentScope.$els);// make sure point $parent to parent scope
	scope.$parent=parentScope;// for two-way binding on alias
	scope.$forContext=this;// define scope properties
	// important: define the scope alias without forced conversion
	// so that frozen data structures remain non-reactive.
	withoutConversion(function(){defineReactive(scope,alias,value);});defineReactive(scope,'$index',index);if(key){defineReactive(scope,'$key',key);}else if(scope.$key){// avoid accidental fallback
	def(scope,'$key',null);}if(this.iterator){defineReactive(scope,this.iterator,key!==null?key:index);}var frag=this.factory.create(host,scope,this._frag);frag.forId=this.id;this.cacheFrag(value,frag,index,key);return frag;},/**
	   * Update the v-ref on owner vm.
	   */updateRef:function updateRef(){var ref=this.descriptor.ref;if(!ref)return;var hash=(this._scope||this.vm).$refs;var refs;if(!this.fromObject){refs=this.frags.map(findVmFromFrag);}else{refs={};this.frags.forEach(function(frag){refs[frag.scope.$key]=findVmFromFrag(frag);});}hash[ref]=refs;},/**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */updateModel:function updateModel(){if(this.isOption){var parent=this.start.parentNode;var model=parent&&parent.__v_model;if(model){model.forceUpdate();}}},/**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */insert:function insert(frag,index,prevEl,inDocument){if(frag.staggerCb){frag.staggerCb.cancel();frag.staggerCb=null;}var staggerAmount=this.getStagger(frag,index,null,'enter');if(inDocument&&staggerAmount){// create an anchor and insert it synchronously,
	// so that we can resolve the correct order without
	// worrying about some elements not inserted yet
	var anchor=frag.staggerAnchor;if(!anchor){anchor=frag.staggerAnchor=createAnchor('stagger-anchor');anchor.__v_frag=frag;}after(anchor,prevEl);var op=frag.staggerCb=cancellable(function(){frag.staggerCb=null;frag.before(anchor);remove(anchor);});setTimeout(op,staggerAmount);}else{var target=prevEl.nextSibling;/* istanbul ignore if */if(!target){// reset end anchor position in case the position was messed up
	// by an external drag-n-drop library.
	after(this.end,prevEl);target=this.end;}frag.before(target);}},/**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */remove:function remove(frag,index,total,inDocument){if(frag.staggerCb){frag.staggerCb.cancel();frag.staggerCb=null;// it's not possible for the same frag to be removed
	// twice, so if we have a pending stagger callback,
	// it means this frag is queued for enter but removed
	// before its transition started. Since it is already
	// destroyed, we can just leave it in detached state.
	return;}var staggerAmount=this.getStagger(frag,index,total,'leave');if(inDocument&&staggerAmount){var op=frag.staggerCb=cancellable(function(){frag.staggerCb=null;frag.remove();});setTimeout(op,staggerAmount);}else{frag.remove();}},/**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */move:function move(frag,prevEl){// fix a common issue with Sortable:
	// if prevEl doesn't have nextSibling, this means it's
	// been dragged after the end anchor. Just re-position
	// the end anchor to the end of the container.
	/* istanbul ignore if */if(!prevEl.nextSibling){this.end.parentNode.appendChild(this.end);}frag.before(prevEl.nextSibling,false);},/**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */cacheFrag:function cacheFrag(value,frag,index,key){var trackByKey=this.params.trackBy;var cache=this.cache;var primitive=!isObject(value);var id;if(key||trackByKey||primitive){id=getTrackByKey(index,key,value,trackByKey);if(!cache[id]){cache[id]=frag;}else if(trackByKey!=='$index'){process.env.NODE_ENV!=='production'&&this.warnDuplicate(value);}}else{id=this.id;if(hasOwn(value,id)){if(value[id]===null){value[id]=frag;}else{process.env.NODE_ENV!=='production'&&this.warnDuplicate(value);}}else if(Object.isExtensible(value)){def(value,id,frag);}else if(process.env.NODE_ENV!=='production'){warn('Frozen v-for objects cannot be automatically tracked, make sure to '+'provide a track-by key.');}}frag.raw=value;},/**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */getCachedFrag:function getCachedFrag(value,index,key){var trackByKey=this.params.trackBy;var primitive=!isObject(value);var frag;if(key||trackByKey||primitive){var id=getTrackByKey(index,key,value,trackByKey);frag=this.cache[id];}else{frag=value[this.id];}if(frag&&(frag.reused||frag.fresh)){process.env.NODE_ENV!=='production'&&this.warnDuplicate(value);}return frag;},/**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */deleteCachedFrag:function deleteCachedFrag(frag){var value=frag.raw;var trackByKey=this.params.trackBy;var scope=frag.scope;var index=scope.$index;// fix #948: avoid accidentally fall through to
	// a parent repeater which happens to have $key.
	var key=hasOwn(scope,'$key')&&scope.$key;var primitive=!isObject(value);if(trackByKey||key||primitive){var id=getTrackByKey(index,key,value,trackByKey);this.cache[id]=null;}else{value[this.id]=null;frag.raw=null;}},/**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */getStagger:function getStagger(frag,index,total,type){type=type+'Stagger';var trans=frag.node.__v_trans;var hooks=trans&&trans.hooks;var hook=hooks&&(hooks[type]||hooks.stagger);return hook?hook.call(frag,index,total):index*parseInt(this.params[type]||this.params.stagger,10);},/**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */_preProcess:function _preProcess(value){// regardless of type, store the un-filtered raw value.
	this.rawValue=value;return value;},/**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */_postProcess:function _postProcess(value){if(isArray(value)){return value;}else if(isPlainObject(value)){// convert plain object to array.
	var keys=Object.keys(value);var i=keys.length;var res=new Array(i);var key;while(i--){key=keys[i];res[i]={$key:key,$value:value[key]};}return res;}else{if(typeof value==='number'&&!isNaN(value)){value=range(value);}return value||[];}},unbind:function unbind(){if(this.descriptor.ref){(this._scope||this.vm).$refs[this.descriptor.ref]=null;}if(this.frags){var i=this.frags.length;var frag;while(i--){frag=this.frags[i];this.deleteCachedFrag(frag);frag.destroy();}}}};/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */function findPrevFrag(frag,anchor,id){var el=frag.node.previousSibling;/* istanbul ignore if */if(!el)return;frag=el.__v_frag;while((!frag||frag.forId!==id||!frag.inserted)&&el!==anchor){el=el.previousSibling;/* istanbul ignore if */if(!el)return;frag=el.__v_frag;}return frag;}/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */function findVmFromFrag(frag){var node=frag.node;// handle multi-node frag
	if(frag.end){while(!node.__vue__&&node!==frag.end&&node.nextSibling){node=node.nextSibling;}}return node.__vue__;}/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */function range(n){var i=-1;var ret=new Array(Math.floor(n));while(++i<n){ret[i]=i;}return ret;}/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */function getTrackByKey(index,key,value,trackByKey){return trackByKey?trackByKey==='$index'?index:trackByKey.charAt(0).match(/\w/)?getPath(value,trackByKey):value[trackByKey]:key||value;}if(process.env.NODE_ENV!=='production'){vFor.warnDuplicate=function(value){warn('Duplicate value found in v-for="'+this.descriptor.raw+'": '+JSON.stringify(value)+'. Use track-by="$index" if '+'you are expecting duplicate values.',this.vm);};}var vIf={priority:IF,terminal:true,bind:function bind(){var el=this.el;if(!el.__vue__){// check else block
	var next=el.nextElementSibling;if(next&&getAttr(next,'v-else')!==null){remove(next);this.elseEl=next;}// check main block
	this.anchor=createAnchor('v-if');replace(el,this.anchor);}else{process.env.NODE_ENV!=='production'&&warn('v-if="'+this.expression+'" cannot be '+'used on an instance root element.',this.vm);this.invalid=true;}},update:function update(value){if(this.invalid)return;if(value){if(!this.frag){this.insert();}}else{this.remove();}},insert:function insert(){if(this.elseFrag){this.elseFrag.remove();this.elseFrag=null;}// lazy init factory
	if(!this.factory){this.factory=new FragmentFactory(this.vm,this.el);}this.frag=this.factory.create(this._host,this._scope,this._frag);this.frag.before(this.anchor);},remove:function remove(){if(this.frag){this.frag.remove();this.frag=null;}if(this.elseEl&&!this.elseFrag){if(!this.elseFactory){this.elseFactory=new FragmentFactory(this.elseEl._context||this.vm,this.elseEl);}this.elseFrag=this.elseFactory.create(this._host,this._scope,this._frag);this.elseFrag.before(this.anchor);}},unbind:function unbind(){if(this.frag){this.frag.destroy();}if(this.elseFrag){this.elseFrag.destroy();}}};var show={bind:function bind(){// check else block
	var next=this.el.nextElementSibling;if(next&&getAttr(next,'v-else')!==null){this.elseEl=next;}},update:function update(value){this.apply(this.el,value);if(this.elseEl){this.apply(this.elseEl,!value);}},apply:function apply(el,value){if(inDoc(el)){applyTransition(el,value?1:-1,toggle,this.vm);}else{toggle();}function toggle(){el.style.display=value?'':'none';}}};var text$2={bind:function bind(){var self=this;var el=this.el;var isRange=el.type==='range';var lazy=this.params.lazy;var number=this.params.number;var debounce=this.params.debounce;// handle composition events.
	//   http://blog.evanyou.me/2014/01/03/composition-event/
	// skip this for Android because it handles composition
	// events quite differently. Android doesn't trigger
	// composition events for language input methods e.g.
	// Chinese, but instead triggers them for spelling
	// suggestions... (see Discussion/#162)
	var composing=false;if(!isAndroid&&!isRange){this.on('compositionstart',function(){composing=true;});this.on('compositionend',function(){composing=false;// in IE11 the "compositionend" event fires AFTER
	// the "input" event, so the input handler is blocked
	// at the end... have to call it here.
	//
	// #1327: in lazy mode this is unecessary.
	if(!lazy){self.listener();}});}// prevent messing with the input when user is typing,
	// and force update on blur.
	this.focused=false;if(!isRange&&!lazy){this.on('focus',function(){self.focused=true;});this.on('blur',function(){self.focused=false;// do not sync value after fragment removal (#2017)
	if(!self._frag||self._frag.inserted){self.rawListener();}});}// Now attach the main listener
	this.listener=this.rawListener=function(){if(composing||!self._bound){return;}var val=number||isRange?toNumber(el.value):el.value;self.set(val);// force update on next tick to avoid lock & same value
	// also only update when user is not typing
	nextTick(function(){if(self._bound&&!self.focused){self.update(self._watcher.value);}});};// apply debounce
	if(debounce){this.listener=_debounce(this.listener,debounce);}// Support jQuery events, since jQuery.trigger() doesn't
	// trigger native events in some cases and some plugins
	// rely on $.trigger()
	//
	// We want to make sure if a listener is attached using
	// jQuery, it is also removed with jQuery, that's why
	// we do the check for each directive instance and
	// store that check result on itself. This also allows
	// easier test coverage control by unsetting the global
	// jQuery variable in tests.
	this.hasjQuery=typeof jQuery==='function';if(this.hasjQuery){var method=jQuery.fn.on?'on':'bind';jQuery(el)[method]('change',this.rawListener);if(!lazy){jQuery(el)[method]('input',this.listener);}}else{this.on('change',this.rawListener);if(!lazy){this.on('input',this.listener);}}// IE9 doesn't fire input event on backspace/del/cut
	if(!lazy&&isIE9){this.on('cut',function(){nextTick(self.listener);});this.on('keyup',function(e){if(e.keyCode===46||e.keyCode===8){self.listener();}});}// set initial value if present
	if(el.hasAttribute('value')||el.tagName==='TEXTAREA'&&el.value.trim()){this.afterBind=this.listener;}},update:function update(value){// #3029 only update when the value changes. This prevent
	// browsers from overwriting values like selectionStart
	value=_toString(value);if(value!==this.el.value)this.el.value=value;},unbind:function unbind(){var el=this.el;if(this.hasjQuery){var method=jQuery.fn.off?'off':'unbind';jQuery(el)[method]('change',this.listener);jQuery(el)[method]('input',this.listener);}}};var radio={bind:function bind(){var self=this;var el=this.el;this.getValue=function(){// value overwrite via v-bind:value
	if(el.hasOwnProperty('_value')){return el._value;}var val=el.value;if(self.params.number){val=toNumber(val);}return val;};this.listener=function(){self.set(self.getValue());};this.on('change',this.listener);if(el.hasAttribute('checked')){this.afterBind=this.listener;}},update:function update(value){this.el.checked=looseEqual(value,this.getValue());}};var select={bind:function bind(){var _this=this;var self=this;var el=this.el;// method to force update DOM using latest value.
	this.forceUpdate=function(){if(self._watcher){self.update(self._watcher.get());}};// check if this is a multiple select
	var multiple=this.multiple=el.hasAttribute('multiple');// attach listener
	this.listener=function(){var value=getValue(el,multiple);value=self.params.number?isArray(value)?value.map(toNumber):toNumber(value):value;self.set(value);};this.on('change',this.listener);// if has initial value, set afterBind
	var initValue=getValue(el,multiple,true);if(multiple&&initValue.length||!multiple&&initValue!==null){this.afterBind=this.listener;}// All major browsers except Firefox resets
	// selectedIndex with value -1 to 0 when the element
	// is appended to a new parent, therefore we have to
	// force a DOM update whenever that happens...
	this.vm.$on('hook:attached',function(){nextTick(_this.forceUpdate);});if(!inDoc(el)){nextTick(this.forceUpdate);}},update:function update(value){var el=this.el;el.selectedIndex=-1;var multi=this.multiple&&isArray(value);var options=el.options;var i=options.length;var op,val;while(i--){op=options[i];val=op.hasOwnProperty('_value')?op._value:op.value;/* eslint-disable eqeqeq */op.selected=multi?indexOf$1(value,val)>-1:looseEqual(value,val);/* eslint-enable eqeqeq */}},unbind:function unbind(){/* istanbul ignore next */this.vm.$off('hook:attached',this.forceUpdate);}};/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */function getValue(el,multi,init){var res=multi?[]:null;var op,val,selected;for(var i=0,l=el.options.length;i<l;i++){op=el.options[i];selected=init?op.hasAttribute('selected'):op.selected;if(selected){val=op.hasOwnProperty('_value')?op._value:op.value;if(multi){res.push(val);}else{return val;}}}return res;}/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */function indexOf$1(arr,val){var i=arr.length;while(i--){if(looseEqual(arr[i],val)){return i;}}return-1;}var checkbox={bind:function bind(){var self=this;var el=this.el;this.getValue=function(){return el.hasOwnProperty('_value')?el._value:self.params.number?toNumber(el.value):el.value;};function getBooleanValue(){var val=el.checked;if(val&&el.hasOwnProperty('_trueValue')){return el._trueValue;}if(!val&&el.hasOwnProperty('_falseValue')){return el._falseValue;}return val;}this.listener=function(){var model=self._watcher.value;if(isArray(model)){var val=self.getValue();if(el.checked){if(indexOf(model,val)<0){model.push(val);}}else{model.$remove(val);}}else{self.set(getBooleanValue());}};this.on('change',this.listener);if(el.hasAttribute('checked')){this.afterBind=this.listener;}},update:function update(value){var el=this.el;if(isArray(value)){el.checked=indexOf(value,this.getValue())>-1;}else{if(el.hasOwnProperty('_trueValue')){el.checked=looseEqual(value,el._trueValue);}else{el.checked=!!value;}}}};var handlers={text:text$2,radio:radio,select:select,checkbox:checkbox};var model={priority:MODEL,twoWay:true,handlers:handlers,params:['lazy','number','debounce'],/**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */bind:function bind(){// friendly warning...
	this.checkFilters();if(this.hasRead&&!this.hasWrite){process.env.NODE_ENV!=='production'&&warn('It seems you are using a read-only filter with '+'v-model="'+this.descriptor.raw+'". '+'You might want to use a two-way filter to ensure correct behavior.',this.vm);}var el=this.el;var tag=el.tagName;var handler;if(tag==='INPUT'){handler=handlers[el.type]||handlers.text;}else if(tag==='SELECT'){handler=handlers.select;}else if(tag==='TEXTAREA'){handler=handlers.text;}else{process.env.NODE_ENV!=='production'&&warn('v-model does not support element type: '+tag,this.vm);return;}el.__v_model=this;handler.bind.call(this);this.update=handler.update;this._unbind=handler.unbind;},/**
	   * Check read/write filter stats.
	   */checkFilters:function checkFilters(){var filters=this.filters;if(!filters)return;var i=filters.length;while(i--){var filter=resolveAsset(this.vm.$options,'filters',filters[i].name);if(typeof filter==='function'||filter.read){this.hasRead=true;}if(filter.write){this.hasWrite=true;}}},unbind:function unbind(){this.el.__v_model=null;this._unbind&&this._unbind();}};// keyCode aliases
	var keyCodes={esc:27,tab:9,enter:13,space:32,'delete':[8,46],up:38,left:37,right:39,down:40};function keyFilter(handler,keys){var codes=keys.map(function(key){var charCode=key.charCodeAt(0);if(charCode>47&&charCode<58){return parseInt(key,10);}if(key.length===1){charCode=key.toUpperCase().charCodeAt(0);if(charCode>64&&charCode<91){return charCode;}}return keyCodes[key];});codes=[].concat.apply([],codes);return function keyHandler(e){if(codes.indexOf(e.keyCode)>-1){return handler.call(this,e);}};}function stopFilter(handler){return function stopHandler(e){e.stopPropagation();return handler.call(this,e);};}function preventFilter(handler){return function preventHandler(e){e.preventDefault();return handler.call(this,e);};}function selfFilter(handler){return function selfHandler(e){if(e.target===e.currentTarget){return handler.call(this,e);}};}var on$1={priority:ON,acceptStatement:true,keyCodes:keyCodes,bind:function bind(){// deal with iframes
	if(this.el.tagName==='IFRAME'&&this.arg!=='load'){var self=this;this.iframeBind=function(){on(self.el.contentWindow,self.arg,self.handler,self.modifiers.capture);};this.on('load',this.iframeBind);}},update:function update(handler){// stub a noop for v-on with no value,
	// e.g. @mousedown.prevent
	if(!this.descriptor.raw){handler=function handler(){};}if(typeof handler!=='function'){process.env.NODE_ENV!=='production'&&warn('v-on:'+this.arg+'="'+this.expression+'" expects a function value, '+'got '+handler,this.vm);return;}// apply modifiers
	if(this.modifiers.stop){handler=stopFilter(handler);}if(this.modifiers.prevent){handler=preventFilter(handler);}if(this.modifiers.self){handler=selfFilter(handler);}// key filter
	var keys=Object.keys(this.modifiers).filter(function(key){return key!=='stop'&&key!=='prevent'&&key!=='self'&&key!=='capture';});if(keys.length){handler=keyFilter(handler,keys);}this.reset();this.handler=handler;if(this.iframeBind){this.iframeBind();}else{on(this.el,this.arg,this.handler,this.modifiers.capture);}},reset:function reset(){var el=this.iframeBind?this.el.contentWindow:this.el;if(this.handler){off(el,this.arg,this.handler);}},unbind:function unbind(){this.reset();}};var prefixes=['-webkit-','-moz-','-ms-'];var camelPrefixes=['Webkit','Moz','ms'];var importantRE=/!important;?$/;var propCache=Object.create(null);var testEl=null;var style={deep:true,update:function update(value){if(typeof value==='string'){this.el.style.cssText=value;}else if(isArray(value)){this.handleObject(value.reduce(extend,{}));}else{this.handleObject(value||{});}},handleObject:function handleObject(value){// cache object styles so that only changed props
	// are actually updated.
	var cache=this.cache||(this.cache={});var name,val;for(name in cache){if(!(name in value)){this.handleSingle(name,null);delete cache[name];}}for(name in value){val=value[name];if(val!==cache[name]){cache[name]=val;this.handleSingle(name,val);}}},handleSingle:function handleSingle(prop,value){prop=normalize(prop);if(!prop)return;// unsupported prop
	// cast possible numbers/booleans into strings
	if(value!=null)value+='';if(value){var isImportant=importantRE.test(value)?'important':'';if(isImportant){/* istanbul ignore if */if(process.env.NODE_ENV!=='production'){warn('It\'s probably a bad idea to use !important with inline rules. '+'This feature will be deprecated in a future version of Vue.');}value=value.replace(importantRE,'').trim();this.el.style.setProperty(prop.kebab,value,isImportant);}else{this.el.style[prop.camel]=value;}}else{this.el.style[prop.camel]='';}}};/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */function normalize(prop){if(propCache[prop]){return propCache[prop];}var res=prefix(prop);propCache[prop]=propCache[res]=res;return res;}/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */function prefix(prop){prop=hyphenate(prop);var camel=camelize(prop);var upper=camel.charAt(0).toUpperCase()+camel.slice(1);if(!testEl){testEl=document.createElement('div');}var i=prefixes.length;var prefixed;if(camel!=='filter'&&camel in testEl.style){return{kebab:prop,camel:camel};}while(i--){prefixed=camelPrefixes[i]+upper;if(prefixed in testEl.style){return{kebab:prefixes[i]+prop,camel:prefixed};}}}// xlink
	var xlinkNS='http://www.w3.org/1999/xlink';var xlinkRE=/^xlink:/;// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE=/^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE=/^(?:value|checked|selected|muted)$/;// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE=/^(?:draggable|contenteditable|spellcheck)$/;// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps={value:'_value','true-value':'_trueValue','false-value':'_falseValue'};var bind$1={priority:BIND,bind:function bind(){var attr=this.arg;var tag=this.el.tagName;// should be deep watch on object mode
	if(!attr){this.deep=true;}// handle interpolation bindings
	var descriptor=this.descriptor;var tokens=descriptor.interp;if(tokens){// handle interpolations with one-time tokens
	if(descriptor.hasOneTime){this.expression=tokensToExp(tokens,this._scope||this.vm);}// only allow binding on native attributes
	if(disallowedInterpAttrRE.test(attr)||attr==='name'&&(tag==='PARTIAL'||tag==='SLOT')){process.env.NODE_ENV!=='production'&&warn(attr+'="'+descriptor.raw+'": '+'attribute interpolation is not allowed in Vue.js '+'directives and special attributes.',this.vm);this.el.removeAttribute(attr);this.invalid=true;}/* istanbul ignore if */if(process.env.NODE_ENV!=='production'){var raw=attr+'="'+descriptor.raw+'": ';// warn src
	if(attr==='src'){warn(raw+'interpolation in "src" attribute will cause '+'a 404 request. Use v-bind:src instead.',this.vm);}// warn style
	if(attr==='style'){warn(raw+'interpolation in "style" attribute will cause '+'the attribute to be discarded in Internet Explorer. '+'Use v-bind:style instead.',this.vm);}}}},update:function update(value){if(this.invalid){return;}var attr=this.arg;if(this.arg){this.handleSingle(attr,value);}else{this.handleObject(value||{});}},// share object handler with v-bind:class
	handleObject:style.handleObject,handleSingle:function handleSingle(attr,value){var el=this.el;var interp=this.descriptor.interp;if(this.modifiers.camel){attr=camelize(attr);}if(!interp&&attrWithPropsRE.test(attr)&&attr in el){var attrValue=attr==='value'?value==null// IE9 will set input.value to "null" for null...
	?'':value:value;if(el[attr]!==attrValue){el[attr]=attrValue;}}// set model props
	var modelProp=modelProps[attr];if(!interp&&modelProp){el[modelProp]=value;// update v-model if present
	var model=el.__v_model;if(model){model.listener();}}// do not set value attribute for textarea
	if(attr==='value'&&el.tagName==='TEXTAREA'){el.removeAttribute(attr);return;}// update attribute
	if(enumeratedAttrRE.test(attr)){el.setAttribute(attr,value?'true':'false');}else if(value!=null&&value!==false){if(attr==='class'){// handle edge case #1960:
	// class interpolation should not overwrite Vue transition class
	if(el.__v_trans){value+=' '+el.__v_trans.id+'-transition';}setClass(el,value);}else if(xlinkRE.test(attr)){el.setAttributeNS(xlinkNS,attr,value===true?'':value);}else{el.setAttribute(attr,value===true?'':value);}}else{el.removeAttribute(attr);}}};var el={priority:EL,bind:function bind(){/* istanbul ignore if */if(!this.arg){return;}var id=this.id=camelize(this.arg);var refs=(this._scope||this.vm).$els;if(hasOwn(refs,id)){refs[id]=this.el;}else{defineReactive(refs,id,this.el);}},unbind:function unbind(){var refs=(this._scope||this.vm).$els;if(refs[this.id]===this.el){refs[this.id]=null;}}};var ref={bind:function bind(){process.env.NODE_ENV!=='production'&&warn('v-ref:'+this.arg+' must be used on a child '+'component. Found on <'+this.el.tagName.toLowerCase()+'>.',this.vm);}};var cloak={bind:function bind(){var el=this.el;this.vm.$once('pre-hook:compiled',function(){el.removeAttribute('v-cloak');});}};// must export plain object
	var directives={text:text$1,html:html,'for':vFor,'if':vIf,show:show,model:model,on:on$1,bind:bind$1,el:el,ref:ref,cloak:cloak};var vClass={deep:true,update:function update(value){if(!value){this.cleanup();}else if(typeof value==='string'){this.setClass(value.trim().split(/\s+/));}else{this.setClass(normalize$1(value));}},setClass:function setClass(value){this.cleanup(value);for(var i=0,l=value.length;i<l;i++){var val=value[i];if(val){apply(this.el,val,addClass);}}this.prevKeys=value;},cleanup:function cleanup(value){var prevKeys=this.prevKeys;if(!prevKeys)return;var i=prevKeys.length;while(i--){var key=prevKeys[i];if(!value||value.indexOf(key)<0){apply(this.el,key,removeClass);}}}};/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */function normalize$1(value){var res=[];if(isArray(value)){for(var i=0,l=value.length;i<l;i++){var _key=value[i];if(_key){if(typeof _key==='string'){res.push(_key);}else{for(var k in _key){if(_key[k])res.push(k);}}}}}else if(isObject(value)){for(var key in value){if(value[key])res.push(key);}}return res;}/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */function apply(el,key,fn){key=key.trim();if(key.indexOf(' ')===-1){fn(el,key);return;}// The key contains one or more space characters.
	// Since a class name doesn't accept such characters, we
	// treat it as multiple classes.
	var keys=key.split(/\s+/);for(var i=0,l=keys.length;i<l;i++){fn(el,keys[i]);}}var component={priority:COMPONENT,params:['keep-alive','transition-mode','inline-template'],/**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */bind:function bind(){if(!this.el.__vue__){// keep-alive cache
	this.keepAlive=this.params.keepAlive;if(this.keepAlive){this.cache={};}// check inline-template
	if(this.params.inlineTemplate){// extract inline template as a DocumentFragment
	this.inlineTemplate=extractContent(this.el,true);}// component resolution related state
	this.pendingComponentCb=this.Component=null;// transition related state
	this.pendingRemovals=0;this.pendingRemovalCb=null;// create a ref anchor
	this.anchor=createAnchor('v-component');replace(this.el,this.anchor);// remove is attribute.
	// this is removed during compilation, but because compilation is
	// cached, when the component is used elsewhere this attribute
	// will remain at link time.
	this.el.removeAttribute('is');this.el.removeAttribute(':is');// remove ref, same as above
	if(this.descriptor.ref){this.el.removeAttribute('v-ref:'+hyphenate(this.descriptor.ref));}// if static, build right now.
	if(this.literal){this.setComponent(this.expression);}}else{process.env.NODE_ENV!=='production'&&warn('cannot mount component "'+this.expression+'" '+'on already mounted element: '+this.el);}},/**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */update:function update(value){if(!this.literal){this.setComponent(value);}},/**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */setComponent:function setComponent(value,cb){this.invalidatePending();if(!value){// just remove current
	this.unbuild(true);this.remove(this.childVM,cb);this.childVM=null;}else{var self=this;this.resolveComponent(value,function(){self.mountComponent(cb);});}},/**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */resolveComponent:function resolveComponent(value,cb){var self=this;this.pendingComponentCb=cancellable(function(Component){self.ComponentName=Component.options.name||(typeof value==='string'?value:null);self.Component=Component;cb();});this.vm._resolveComponent(value,this.pendingComponentCb);},/**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */mountComponent:function mountComponent(cb){// actual mount
	this.unbuild(true);var self=this;var activateHooks=this.Component.options.activate;var cached=this.getCached();var newComponent=this.build();if(activateHooks&&!cached){this.waitingFor=newComponent;callActivateHooks(activateHooks,newComponent,function(){if(self.waitingFor!==newComponent){return;}self.waitingFor=null;self.transition(newComponent,cb);});}else{// update ref for kept-alive component
	if(cached){newComponent._updateRef();}this.transition(newComponent,cb);}},/**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */invalidatePending:function invalidatePending(){if(this.pendingComponentCb){this.pendingComponentCb.cancel();this.pendingComponentCb=null;}},/**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */build:function build(extraOptions){var cached=this.getCached();if(cached){return cached;}if(this.Component){// default options
	var options={name:this.ComponentName,el:cloneNode(this.el),template:this.inlineTemplate,// make sure to add the child with correct parent
	// if this is a transcluded component, its parent
	// should be the transclusion host.
	parent:this._host||this.vm,// if no inline-template, then the compiled
	// linker can be cached for better performance.
	_linkerCachable:!this.inlineTemplate,_ref:this.descriptor.ref,_asComponent:true,_isRouterView:this._isRouterView,// if this is a transcluded component, context
	// will be the common parent vm of this instance
	// and its host.
	_context:this.vm,// if this is inside an inline v-for, the scope
	// will be the intermediate scope created for this
	// repeat fragment. this is used for linking props
	// and container directives.
	_scope:this._scope,// pass in the owner fragment of this component.
	// this is necessary so that the fragment can keep
	// track of its contained components in order to
	// call attach/detach hooks for them.
	_frag:this._frag};// extra options
	// in 1.0.0 this is used by vue-router only
	/* istanbul ignore if */if(extraOptions){extend(options,extraOptions);}var child=new this.Component(options);if(this.keepAlive){this.cache[this.Component.cid]=child;}/* istanbul ignore if */if(process.env.NODE_ENV!=='production'&&this.el.hasAttribute('transition')&&child._isFragment){warn('Transitions will not work on a fragment instance. '+'Template: '+child.$options.template,child);}return child;}},/**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */getCached:function getCached(){return this.keepAlive&&this.cache[this.Component.cid];},/**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */unbuild:function unbuild(defer){if(this.waitingFor){if(!this.keepAlive){this.waitingFor.$destroy();}this.waitingFor=null;}var child=this.childVM;if(!child||this.keepAlive){if(child){// remove ref
	child._inactive=true;child._updateRef(true);}return;}// the sole purpose of `deferCleanup` is so that we can
	// "deactivate" the vm right now and perform DOM removal
	// later.
	child.$destroy(false,defer);},/**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */remove:function remove(child,cb){var keepAlive=this.keepAlive;if(child){// we may have a component switch when a previous
	// component is still being transitioned out.
	// we want to trigger only one lastest insertion cb
	// when the existing transition finishes. (#1119)
	this.pendingRemovals++;this.pendingRemovalCb=cb;var self=this;child.$remove(function(){self.pendingRemovals--;if(!keepAlive)child._cleanup();if(!self.pendingRemovals&&self.pendingRemovalCb){self.pendingRemovalCb();self.pendingRemovalCb=null;}});}else if(cb){cb();}},/**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */transition:function transition(target,cb){var self=this;var current=this.childVM;// for devtool inspection
	if(current)current._inactive=true;target._inactive=false;this.childVM=target;switch(self.params.transitionMode){case'in-out':target.$before(self.anchor,function(){self.remove(current,cb);});break;case'out-in':self.remove(current,function(){target.$before(self.anchor,cb);});break;default:self.remove(current);target.$before(self.anchor,cb);}},/**
	   * Unbind.
	   */unbind:function unbind(){this.invalidatePending();// Do not defer cleanup when unbinding
	this.unbuild();// destroy all keep-alive cached instances
	if(this.cache){for(var key in this.cache){this.cache[key].$destroy();}this.cache=null;}}};/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */function callActivateHooks(hooks,vm,cb){var total=hooks.length;var called=0;hooks[0].call(vm,next);function next(){if(++called>=total){cb();}else{hooks[called].call(vm,next);}}}var propBindingModes=config._propBindingModes;var empty={};// regexes
	var identRE$1=/^[$_a-zA-Z]+[\w$]*$/;var settablePathRE=/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */function compileProps(el,propOptions,vm){var props=[];var names=Object.keys(propOptions);var i=names.length;var options,name,attr,value,path,parsed,prop;while(i--){name=names[i];options=propOptions[name]||empty;if(process.env.NODE_ENV!=='production'&&name==='$data'){warn('Do not use $data as prop.',vm);continue;}// props could contain dashes, which will be
	// interpreted as minus calculations by the parser
	// so we need to camelize the path here
	path=camelize(name);if(!identRE$1.test(path)){process.env.NODE_ENV!=='production'&&warn('Invalid prop key: "'+name+'". Prop keys '+'must be valid identifiers.',vm);continue;}prop={name:name,path:path,options:options,mode:propBindingModes.ONE_WAY,raw:null};attr=hyphenate(name);// first check dynamic version
	if((value=getBindAttr(el,attr))===null){if((value=getBindAttr(el,attr+'.sync'))!==null){prop.mode=propBindingModes.TWO_WAY;}else if((value=getBindAttr(el,attr+'.once'))!==null){prop.mode=propBindingModes.ONE_TIME;}}if(value!==null){// has dynamic binding!
	prop.raw=value;parsed=parseDirective(value);value=parsed.expression;prop.filters=parsed.filters;// check binding type
	if(isLiteral(value)&&!parsed.filters){// for expressions containing literal numbers and
	// booleans, there's no need to setup a prop binding,
	// so we can optimize them as a one-time set.
	prop.optimizedLiteral=true;}else{prop.dynamic=true;// check non-settable path for two-way bindings
	if(process.env.NODE_ENV!=='production'&&prop.mode===propBindingModes.TWO_WAY&&!settablePathRE.test(value)){prop.mode=propBindingModes.ONE_WAY;warn('Cannot bind two-way prop with non-settable '+'parent path: '+value,vm);}}prop.parentPath=value;// warn required two-way
	if(process.env.NODE_ENV!=='production'&&options.twoWay&&prop.mode!==propBindingModes.TWO_WAY){warn('Prop "'+name+'" expects a two-way binding type.',vm);}}else if((value=getAttr(el,attr))!==null){// has literal binding!
	prop.raw=value;}else if(process.env.NODE_ENV!=='production'){// check possible camelCase prop usage
	var lowerCaseName=path.toLowerCase();value=/[A-Z\-]/.test(name)&&(el.getAttribute(lowerCaseName)||el.getAttribute(':'+lowerCaseName)||el.getAttribute('v-bind:'+lowerCaseName)||el.getAttribute(':'+lowerCaseName+'.once')||el.getAttribute('v-bind:'+lowerCaseName+'.once')||el.getAttribute(':'+lowerCaseName+'.sync')||el.getAttribute('v-bind:'+lowerCaseName+'.sync'));if(value){warn('Possible usage error for prop `'+lowerCaseName+'` - '+'did you mean `'+attr+'`? HTML is case-insensitive, remember to use '+'kebab-case for props in templates.',vm);}else if(options.required){// warn missing required
	warn('Missing required prop: '+name,vm);}}// push prop
	props.push(prop);}return makePropsLinkFn(props);}/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */function makePropsLinkFn(props){return function propsLinkFn(vm,scope){// store resolved props info
	vm._props={};var inlineProps=vm.$options.propsData;var i=props.length;var prop,path,options,value,raw;while(i--){prop=props[i];raw=prop.raw;path=prop.path;options=prop.options;vm._props[path]=prop;if(inlineProps&&hasOwn(inlineProps,path)){initProp(vm,prop,inlineProps[path]);}if(raw===null){// initialize absent prop
	initProp(vm,prop,undefined);}else if(prop.dynamic){// dynamic prop
	if(prop.mode===propBindingModes.ONE_TIME){// one time binding
	value=(scope||vm._context||vm).$get(prop.parentPath);initProp(vm,prop,value);}else{if(vm._context){// dynamic binding
	vm._bindDir({name:'prop',def:propDef,prop:prop},null,null,scope);// el, host, scope
	}else{// root instance
	initProp(vm,prop,vm.$get(prop.parentPath));}}}else if(prop.optimizedLiteral){// optimized literal, cast it and just set once
	var stripped=stripQuotes(raw);value=stripped===raw?toBoolean(toNumber(raw)):stripped;initProp(vm,prop,value);}else{// string literal, but we need to cater for
	// Boolean props with no value, or with same
	// literal value (e.g. disabled="disabled")
	// see https://github.com/vuejs/vue-loader/issues/182
	value=options.type===Boolean&&(raw===''||raw===hyphenate(prop.name))?true:raw;initProp(vm,prop,value);}}};}/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */function processPropValue(vm,prop,rawValue,fn){var isSimple=prop.dynamic&&isSimplePath(prop.parentPath);var value=rawValue;if(value===undefined){value=getPropDefaultValue(vm,prop);}value=coerceProp(prop,value,vm);var coerced=value!==rawValue;if(!assertProp(prop,value,vm)){value=undefined;}if(isSimple&&!coerced){withoutConversion(function(){fn(value);});}else{fn(value);}}/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */function initProp(vm,prop,value){processPropValue(vm,prop,value,function(value){defineReactive(vm,prop.path,value);});}/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */function updateProp(vm,prop,value){processPropValue(vm,prop,value,function(value){vm[prop.path]=value;});}/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */function getPropDefaultValue(vm,prop){// no default, return undefined
	var options=prop.options;if(!hasOwn(options,'default')){// absent boolean value defaults to false
	return options.type===Boolean?false:undefined;}var def=options['default'];// warn against non-factory defaults for Object & Array
	if(isObject(def)){process.env.NODE_ENV!=='production'&&warn('Invalid default value for prop "'+prop.name+'": '+'Props with type Object/Array must use a factory function '+'to return the default value.',vm);}// call factory function for non-Function types
	return typeof def==='function'&&options.type!==Function?def.call(vm):def;}/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */function assertProp(prop,value,vm){if(!prop.options.required&&(// non-required
	prop.raw===null||// abscent
	value==null)// null or undefined
	){return true;}var options=prop.options;var type=options.type;var valid=!type;var expectedTypes=[];if(type){if(!isArray(type)){type=[type];}for(var i=0;i<type.length&&!valid;i++){var assertedType=assertType(value,type[i]);expectedTypes.push(assertedType.expectedType);valid=assertedType.valid;}}if(!valid){if(process.env.NODE_ENV!=='production'){warn('Invalid prop: type check failed for prop "'+prop.name+'".'+' Expected '+expectedTypes.map(formatType).join(', ')+', got '+formatValue(value)+'.',vm);}return false;}var validator=options.validator;if(validator){if(!validator(value)){process.env.NODE_ENV!=='production'&&warn('Invalid prop: custom validator check failed for prop "'+prop.name+'".',vm);return false;}}return true;}/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */function coerceProp(prop,value,vm){var coerce=prop.options.coerce;if(!coerce){return value;}if(typeof coerce==='function'){return coerce(value);}else{process.env.NODE_ENV!=='production'&&warn('Invalid coerce for prop "'+prop.name+'": expected function, got '+(typeof coerce==='undefined'?'undefined':_typeof(coerce))+'.',vm);return value;}}/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */function assertType(value,type){var valid;var expectedType;if(type===String){expectedType='string';valid=(typeof value==='undefined'?'undefined':_typeof(value))===expectedType;}else if(type===Number){expectedType='number';valid=(typeof value==='undefined'?'undefined':_typeof(value))===expectedType;}else if(type===Boolean){expectedType='boolean';valid=(typeof value==='undefined'?'undefined':_typeof(value))===expectedType;}else if(type===Function){expectedType='function';valid=(typeof value==='undefined'?'undefined':_typeof(value))===expectedType;}else if(type===Object){expectedType='object';valid=isPlainObject(value);}else if(type===Array){expectedType='array';valid=isArray(value);}else{valid=value instanceof type;}return{valid:valid,expectedType:expectedType};}/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */function formatType(type){return type?type.charAt(0).toUpperCase()+type.slice(1):'custom type';}/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */function formatValue(val){return Object.prototype.toString.call(val).slice(8,-1);}var bindingModes=config._propBindingModes;var propDef={bind:function bind(){var child=this.vm;var parent=child._context;// passed in from compiler directly
	var prop=this.descriptor.prop;var childKey=prop.path;var parentKey=prop.parentPath;var twoWay=prop.mode===bindingModes.TWO_WAY;var parentWatcher=this.parentWatcher=new Watcher(parent,parentKey,function(val){updateProp(child,prop,val);},{twoWay:twoWay,filters:prop.filters,// important: props need to be observed on the
	// v-for scope if present
	scope:this._scope});// set the child initial value.
	initProp(child,prop,parentWatcher.value);// setup two-way binding
	if(twoWay){// important: defer the child watcher creation until
	// the created hook (after data observation)
	var self=this;child.$once('pre-hook:created',function(){self.childWatcher=new Watcher(child,childKey,function(val){parentWatcher.set(val);},{// ensure sync upward before parent sync down.
	// this is necessary in cases e.g. the child
	// mutates a prop array, then replaces it. (#1683)
	sync:true});});}},unbind:function unbind(){this.parentWatcher.teardown();if(this.childWatcher){this.childWatcher.teardown();}}};var queue$1=[];var queued=false;/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */function pushJob(job){queue$1.push(job);if(!queued){queued=true;nextTick(flush);}}/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */function flush(){// Force layout
	var f=document.documentElement.offsetHeight;for(var i=0;i<queue$1.length;i++){queue$1[i]();}queue$1=[];queued=false;// dummy return, so js linters don't complain about
	// unused variable f
	return f;}var TYPE_TRANSITION='transition';var TYPE_ANIMATION='animation';var transDurationProp=transitionProp+'Duration';var animDurationProp=animationProp+'Duration';/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */var raf=inBrowser&&window.requestAnimationFrame;var waitForTransitionStart=raf/* istanbul ignore next */?function(fn){raf(function(){raf(fn);});}:function(fn){setTimeout(fn,50);};/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */function Transition(el,id,hooks,vm){this.id=id;this.el=el;this.enterClass=hooks&&hooks.enterClass||id+'-enter';this.leaveClass=hooks&&hooks.leaveClass||id+'-leave';this.hooks=hooks;this.vm=vm;// async state
	this.pendingCssEvent=this.pendingCssCb=this.cancel=this.pendingJsCb=this.op=this.cb=null;this.justEntered=false;this.entered=this.left=false;this.typeCache={};// check css transition type
	this.type=hooks&&hooks.type;/* istanbul ignore if */if(process.env.NODE_ENV!=='production'){if(this.type&&this.type!==TYPE_TRANSITION&&this.type!==TYPE_ANIMATION){warn('invalid CSS transition type for transition="'+this.id+'": '+this.type,vm);}}// bind
	var self=this;['enterNextTick','enterDone','leaveNextTick','leaveDone'].forEach(function(m){self[m]=bind(self[m],self);});}var p$1=Transition.prototype;/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */p$1.enter=function(op,cb){this.cancelPending();this.callHook('beforeEnter');this.cb=cb;addClass(this.el,this.enterClass);op();this.entered=false;this.callHookWithCb('enter');if(this.entered){return;// user called done synchronously.
	}this.cancel=this.hooks&&this.hooks.enterCancelled;pushJob(this.enterNextTick);};/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */p$1.enterNextTick=function(){var _this=this;// prevent transition skipping
	this.justEntered=true;waitForTransitionStart(function(){_this.justEntered=false;});var enterDone=this.enterDone;var type=this.getCssTransitionType(this.enterClass);if(!this.pendingJsCb){if(type===TYPE_TRANSITION){// trigger transition by removing enter class now
	removeClass(this.el,this.enterClass);this.setupCssCb(transitionEndEvent,enterDone);}else if(type===TYPE_ANIMATION){this.setupCssCb(animationEndEvent,enterDone);}else{enterDone();}}else if(type===TYPE_TRANSITION){removeClass(this.el,this.enterClass);}};/**
	 * The "cleanup" phase of an entering transition.
	 */p$1.enterDone=function(){this.entered=true;this.cancel=this.pendingJsCb=null;removeClass(this.el,this.enterClass);this.callHook('afterEnter');if(this.cb)this.cb();};/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */p$1.leave=function(op,cb){this.cancelPending();this.callHook('beforeLeave');this.op=op;this.cb=cb;addClass(this.el,this.leaveClass);this.left=false;this.callHookWithCb('leave');if(this.left){return;// user called done synchronously.
	}this.cancel=this.hooks&&this.hooks.leaveCancelled;// only need to handle leaveDone if
	// 1. the transition is already done (synchronously called
	//    by the user, which causes this.op set to null)
	// 2. there's no explicit js callback
	if(this.op&&!this.pendingJsCb){// if a CSS transition leaves immediately after enter,
	// the transitionend event never fires. therefore we
	// detect such cases and end the leave immediately.
	if(this.justEntered){this.leaveDone();}else{pushJob(this.leaveNextTick);}}};/**
	 * The "nextTick" phase of a leaving transition.
	 */p$1.leaveNextTick=function(){var type=this.getCssTransitionType(this.leaveClass);if(type){var event=type===TYPE_TRANSITION?transitionEndEvent:animationEndEvent;this.setupCssCb(event,this.leaveDone);}else{this.leaveDone();}};/**
	 * The "cleanup" phase of a leaving transition.
	 */p$1.leaveDone=function(){this.left=true;this.cancel=this.pendingJsCb=null;this.op();removeClass(this.el,this.leaveClass);this.callHook('afterLeave');if(this.cb)this.cb();this.op=null;};/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */p$1.cancelPending=function(){this.op=this.cb=null;var hasPending=false;if(this.pendingCssCb){hasPending=true;off(this.el,this.pendingCssEvent,this.pendingCssCb);this.pendingCssEvent=this.pendingCssCb=null;}if(this.pendingJsCb){hasPending=true;this.pendingJsCb.cancel();this.pendingJsCb=null;}if(hasPending){removeClass(this.el,this.enterClass);removeClass(this.el,this.leaveClass);}if(this.cancel){this.cancel.call(this.vm,this.el);this.cancel=null;}};/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */p$1.callHook=function(type){if(this.hooks&&this.hooks[type]){this.hooks[type].call(this.vm,this.el);}};/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */p$1.callHookWithCb=function(type){var hook=this.hooks&&this.hooks[type];if(hook){if(hook.length>1){this.pendingJsCb=cancellable(this[type+'Done']);}hook.call(this.vm,this.el,this.pendingJsCb);}};/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */p$1.getCssTransitionType=function(className){/* istanbul ignore if */if(!transitionEndEvent||// skip CSS transitions if page is not visible -
	// this solves the issue of transitionend events not
	// firing until the page is visible again.
	// pageVisibility API is supported in IE10+, same as
	// CSS transitions.
	document.hidden||// explicit js-only transition
	this.hooks&&this.hooks.css===false||// element is hidden
	isHidden(this.el)){return;}var type=this.type||this.typeCache[className];if(type)return type;var inlineStyles=this.el.style;var computedStyles=window.getComputedStyle(this.el);var transDuration=inlineStyles[transDurationProp]||computedStyles[transDurationProp];if(transDuration&&transDuration!=='0s'){type=TYPE_TRANSITION;}else{var animDuration=inlineStyles[animDurationProp]||computedStyles[animDurationProp];if(animDuration&&animDuration!=='0s'){type=TYPE_ANIMATION;}}if(type){this.typeCache[className]=type;}return type;};/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */p$1.setupCssCb=function(event,cb){this.pendingCssEvent=event;var self=this;var el=this.el;var onEnd=this.pendingCssCb=function(e){if(e.target===el){off(el,event,onEnd);self.pendingCssEvent=self.pendingCssCb=null;if(!self.pendingJsCb&&cb){cb();}}};on(el,event,onEnd);};/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */function isHidden(el){if(/svg$/.test(el.namespaceURI)){// SVG elements do not have offset(Width|Height)
	// so we need to check the client rect
	var rect=el.getBoundingClientRect();return!(rect.width||rect.height);}else{return!(el.offsetWidth||el.offsetHeight||el.getClientRects().length);}}var transition$1={priority:TRANSITION,update:function update(id,oldId){var el=this.el;// resolve on owner vm
	var hooks=resolveAsset(this.vm.$options,'transitions',id);id=id||'v';oldId=oldId||'v';el.__v_trans=new Transition(el,id,hooks,this.vm);removeClass(el,oldId+'-transition');addClass(el,id+'-transition');}};var internalDirectives={style:style,'class':vClass,component:component,prop:propDef,transition:transition$1};// special binding prefixes
	var bindRE=/^v-bind:|^:/;var onRE=/^v-on:|^@/;var dirAttrRE=/^v-([^:]+)(?:$|:(.*)$)/;var modifierRE=/\.[^\.]+/g;var transitionRE=/^(v-bind:|:)?transition$/;// default directive priority
	var DEFAULT_PRIORITY=1000;var DEFAULT_TERMINAL_PRIORITY=2000;/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */function compile(el,options,partial){// link function for the node itself.
	var nodeLinkFn=partial||!options._asComponent?compileNode(el,options):null;// link function for the childNodes
	var childLinkFn=!(nodeLinkFn&&nodeLinkFn.terminal)&&!isScript(el)&&el.hasChildNodes()?compileNodeList(el.childNodes,options):null;/**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */return function compositeLinkFn(vm,el,host,scope,frag){// cache childNodes before linking parent, fix #657
	var childNodes=toArray(el.childNodes);// link
	var dirs=linkAndCapture(function compositeLinkCapturer(){if(nodeLinkFn)nodeLinkFn(vm,el,host,scope,frag);if(childLinkFn)childLinkFn(vm,childNodes,host,scope,frag);},vm);return makeUnlinkFn(vm,dirs);};}/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */function linkAndCapture(linker,vm){/* istanbul ignore if */if(process.env.NODE_ENV==='production'){// reset directives before every capture in production
	// mode, so that when unlinking we don't need to splice
	// them out (which turns out to be a perf hit).
	// they are kept in development mode because they are
	// useful for Vue's own tests.
	vm._directives=[];}var originalDirCount=vm._directives.length;linker();var dirs=vm._directives.slice(originalDirCount);dirs.sort(directiveComparator);for(var i=0,l=dirs.length;i<l;i++){dirs[i]._bind();}return dirs;}/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */function directiveComparator(a,b){a=a.descriptor.def.priority||DEFAULT_PRIORITY;b=b.descriptor.def.priority||DEFAULT_PRIORITY;return a>b?-1:a===b?0:1;}/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */function makeUnlinkFn(vm,dirs,context,contextDirs){function unlink(destroying){teardownDirs(vm,dirs,destroying);if(context&&contextDirs){teardownDirs(context,contextDirs);}}// expose linked directives
	unlink.dirs=dirs;return unlink;}/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */function teardownDirs(vm,dirs,destroying){var i=dirs.length;while(i--){dirs[i]._teardown();if(process.env.NODE_ENV!=='production'&&!destroying){vm._directives.$remove(dirs[i]);}}}/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */function compileAndLinkProps(vm,el,props,scope){var propsLinkFn=compileProps(el,props,vm);var propDirs=linkAndCapture(function(){propsLinkFn(vm,scope);},vm);return makeUnlinkFn(vm,propDirs);}/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */function compileRoot(el,options,contextOptions){var containerAttrs=options._containerAttrs;var replacerAttrs=options._replacerAttrs;var contextLinkFn,replacerLinkFn;// only need to compile other attributes for
	// non-fragment instances
	if(el.nodeType!==11){// for components, container and replacer need to be
	// compiled separately and linked in different scopes.
	if(options._asComponent){// 2. container attributes
	if(containerAttrs&&contextOptions){contextLinkFn=compileDirectives(containerAttrs,contextOptions);}if(replacerAttrs){// 3. replacer attributes
	replacerLinkFn=compileDirectives(replacerAttrs,options);}}else{// non-component, just compile as a normal element.
	replacerLinkFn=compileDirectives(el.attributes,options);}}else if(process.env.NODE_ENV!=='production'&&containerAttrs){// warn container directives for fragment instances
	var names=containerAttrs.filter(function(attr){// allow vue-loader/vueify scoped css attributes
	return attr.name.indexOf('_v-')<0&&// allow event listeners
	!onRE.test(attr.name)&&// allow slots
	attr.name!=='slot';}).map(function(attr){return'"'+attr.name+'"';});if(names.length){var plural=names.length>1;warn('Attribute'+(plural?'s ':' ')+names.join(', ')+(plural?' are':' is')+' ignored on component '+'<'+options.el.tagName.toLowerCase()+'> because '+'the component is a fragment instance: '+'http://vuejs.org/guide/components.html#Fragment-Instance');}}options._containerAttrs=options._replacerAttrs=null;return function rootLinkFn(vm,el,scope){// link context scope dirs
	var context=vm._context;var contextDirs;if(context&&contextLinkFn){contextDirs=linkAndCapture(function(){contextLinkFn(context,el,null,scope);},context);}// link self
	var selfDirs=linkAndCapture(function(){if(replacerLinkFn)replacerLinkFn(vm,el);},vm);// return the unlink function that tearsdown context
	// container directives.
	return makeUnlinkFn(vm,selfDirs,context,contextDirs);};}/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */function compileNode(node,options){var type=node.nodeType;if(type===1&&!isScript(node)){return compileElement(node,options);}else if(type===3&&node.data.trim()){return compileTextNode(node,options);}else{return null;}}/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */function compileElement(el,options){// preprocess textareas.
	// textarea treats its text content as the initial value.
	// just bind it as an attr directive for value.
	if(el.tagName==='TEXTAREA'){var tokens=parseText(el.value);if(tokens){el.setAttribute(':value',tokensToExp(tokens));el.value='';}}var linkFn;var hasAttrs=el.hasAttributes();var attrs=hasAttrs&&toArray(el.attributes);// check terminal directives (for & if)
	if(hasAttrs){linkFn=checkTerminalDirectives(el,attrs,options);}// check element directives
	if(!linkFn){linkFn=checkElementDirectives(el,options);}// check component
	if(!linkFn){linkFn=checkComponent(el,options);}// normal directives
	if(!linkFn&&hasAttrs){linkFn=compileDirectives(attrs,options);}return linkFn;}/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */function compileTextNode(node,options){// skip marked text nodes
	if(node._skip){return removeText;}var tokens=parseText(node.wholeText);if(!tokens){return null;}// mark adjacent text nodes as skipped,
	// because we are using node.wholeText to compile
	// all adjacent text nodes together. This fixes
	// issues in IE where sometimes it splits up a single
	// text node into multiple ones.
	var next=node.nextSibling;while(next&&next.nodeType===3){next._skip=true;next=next.nextSibling;}var frag=document.createDocumentFragment();var el,token;for(var i=0,l=tokens.length;i<l;i++){token=tokens[i];el=token.tag?processTextToken(token,options):document.createTextNode(token.value);frag.appendChild(el);}return makeTextNodeLinkFn(tokens,frag,options);}/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */function removeText(vm,node){remove(node);}/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */function processTextToken(token,options){var el;if(token.oneTime){el=document.createTextNode(token.value);}else{if(token.html){el=document.createComment('v-html');setTokenType('html');}else{// IE will clean up empty textNodes during
	// frag.cloneNode(true), so we have to give it
	// something here...
	el=document.createTextNode(' ');setTokenType('text');}}function setTokenType(type){if(token.descriptor)return;var parsed=parseDirective(token.value);token.descriptor={name:type,def:directives[type],expression:parsed.expression,filters:parsed.filters};}return el;}/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */function makeTextNodeLinkFn(tokens,frag){return function textNodeLinkFn(vm,el,host,scope){var fragClone=frag.cloneNode(true);var childNodes=toArray(fragClone.childNodes);var token,value,node;for(var i=0,l=tokens.length;i<l;i++){token=tokens[i];value=token.value;if(token.tag){node=childNodes[i];if(token.oneTime){value=(scope||vm).$eval(value);if(token.html){replace(node,parseTemplate(value,true));}else{node.data=_toString(value);}}else{vm._bindDir(token.descriptor,node,host,scope);}}}replace(el,fragClone);};}/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */function compileNodeList(nodeList,options){var linkFns=[];var nodeLinkFn,childLinkFn,node;for(var i=0,l=nodeList.length;i<l;i++){node=nodeList[i];nodeLinkFn=compileNode(node,options);childLinkFn=!(nodeLinkFn&&nodeLinkFn.terminal)&&node.tagName!=='SCRIPT'&&node.hasChildNodes()?compileNodeList(node.childNodes,options):null;linkFns.push(nodeLinkFn,childLinkFn);}return linkFns.length?makeChildLinkFn(linkFns):null;}/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */function makeChildLinkFn(linkFns){return function childLinkFn(vm,nodes,host,scope,frag){var node,nodeLinkFn,childrenLinkFn;for(var i=0,n=0,l=linkFns.length;i<l;n++){node=nodes[n];nodeLinkFn=linkFns[i++];childrenLinkFn=linkFns[i++];// cache childNodes before linking parent, fix #657
	var childNodes=toArray(node.childNodes);if(nodeLinkFn){nodeLinkFn(vm,node,host,scope,frag);}if(childrenLinkFn){childrenLinkFn(vm,childNodes,host,scope,frag);}}};}/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */function checkElementDirectives(el,options){var tag=el.tagName.toLowerCase();if(commonTagRE.test(tag)){return;}var def=resolveAsset(options,'elementDirectives',tag);if(def){return makeTerminalNodeLinkFn(el,tag,'',options,def);}}/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */function checkComponent(el,options){var component=checkComponentAttr(el,options);if(component){var ref=findRef(el);var descriptor={name:'component',ref:ref,expression:component.id,def:internalDirectives.component,modifiers:{literal:!component.dynamic}};var componentLinkFn=function componentLinkFn(vm,el,host,scope,frag){if(ref){defineReactive((scope||vm).$refs,ref,null);}vm._bindDir(descriptor,el,host,scope,frag);};componentLinkFn.terminal=true;return componentLinkFn;}}/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */function checkTerminalDirectives(el,attrs,options){// skip v-pre
	if(getAttr(el,'v-pre')!==null){return skip;}// skip v-else block, but only if following v-if
	if(el.hasAttribute('v-else')){var prev=el.previousElementSibling;if(prev&&prev.hasAttribute('v-if')){return skip;}}var attr,name,value,modifiers,matched,dirName,rawName,arg,def,termDef;for(var i=0,j=attrs.length;i<j;i++){attr=attrs[i];name=attr.name.replace(modifierRE,'');if(matched=name.match(dirAttrRE)){def=resolveAsset(options,'directives',matched[1]);if(def&&def.terminal){if(!termDef||(def.priority||DEFAULT_TERMINAL_PRIORITY)>termDef.priority){termDef=def;rawName=attr.name;modifiers=parseModifiers(attr.name);value=attr.value;dirName=matched[1];arg=matched[2];}}}}if(termDef){return makeTerminalNodeLinkFn(el,dirName,value,options,termDef,rawName,arg,modifiers);}}function skip(){}skip.terminal=true;/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */function makeTerminalNodeLinkFn(el,dirName,value,options,def,rawName,arg,modifiers){var parsed=parseDirective(value);var descriptor={name:dirName,arg:arg,expression:parsed.expression,filters:parsed.filters,raw:value,attr:rawName,modifiers:modifiers,def:def};// check ref for v-for and router-view
	if(dirName==='for'||dirName==='router-view'){descriptor.ref=findRef(el);}var fn=function terminalNodeLinkFn(vm,el,host,scope,frag){if(descriptor.ref){defineReactive((scope||vm).$refs,descriptor.ref,null);}vm._bindDir(descriptor,el,host,scope,frag);};fn.terminal=true;return fn;}/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */function compileDirectives(attrs,options){var i=attrs.length;var dirs=[];var attr,name,value,rawName,rawValue,dirName,arg,modifiers,dirDef,tokens,matched;while(i--){attr=attrs[i];name=rawName=attr.name;value=rawValue=attr.value;tokens=parseText(value);// reset arg
	arg=null;// check modifiers
	modifiers=parseModifiers(name);name=name.replace(modifierRE,'');// attribute interpolations
	if(tokens){value=tokensToExp(tokens);arg=name;pushDir('bind',directives.bind,tokens);// warn against mixing mustaches with v-bind
	if(process.env.NODE_ENV!=='production'){if(name==='class'&&Array.prototype.some.call(attrs,function(attr){return attr.name===':class'||attr.name==='v-bind:class';})){warn('class="'+rawValue+'": Do not mix mustache interpolation '+'and v-bind for "class" on the same element. Use one or the other.',options);}}}else// special attribute: transition
	if(transitionRE.test(name)){modifiers.literal=!bindRE.test(name);pushDir('transition',internalDirectives.transition);}else// event handlers
	if(onRE.test(name)){arg=name.replace(onRE,'');pushDir('on',directives.on);}else// attribute bindings
	if(bindRE.test(name)){dirName=name.replace(bindRE,'');if(dirName==='style'||dirName==='class'){pushDir(dirName,internalDirectives[dirName]);}else{arg=dirName;pushDir('bind',directives.bind);}}else// normal directives
	if(matched=name.match(dirAttrRE)){dirName=matched[1];arg=matched[2];// skip v-else (when used with v-show)
	if(dirName==='else'){continue;}dirDef=resolveAsset(options,'directives',dirName,true);if(dirDef){pushDir(dirName,dirDef);}}}/**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */function pushDir(dirName,def,interpTokens){var hasOneTimeToken=interpTokens&&hasOneTime(interpTokens);var parsed=!hasOneTimeToken&&parseDirective(value);dirs.push({name:dirName,attr:rawName,raw:rawValue,def:def,arg:arg,modifiers:modifiers,// conversion from interpolation strings with one-time token
	// to expression is differed until directive bind time so that we
	// have access to the actual vm context for one-time bindings.
	expression:parsed&&parsed.expression,filters:parsed&&parsed.filters,interp:interpTokens,hasOneTime:hasOneTimeToken});}if(dirs.length){return makeNodeLinkFn(dirs);}}/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */function parseModifiers(name){var res=Object.create(null);var match=name.match(modifierRE);if(match){var i=match.length;while(i--){res[match[i].slice(1)]=true;}}return res;}/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */function makeNodeLinkFn(directives){return function nodeLinkFn(vm,el,host,scope,frag){// reverse apply because it's sorted low to high
	var i=directives.length;while(i--){vm._bindDir(directives[i],el,host,scope,frag);}};}/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */function hasOneTime(tokens){var i=tokens.length;while(i--){if(tokens[i].oneTime)return true;}}function isScript(el){return el.tagName==='SCRIPT'&&(!el.hasAttribute('type')||el.getAttribute('type')==='text/javascript');}var specialCharRE=/[^\w\-:\.]/;/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */function transclude(el,options){// extract container attributes to pass them down
	// to compiler, because they need to be compiled in
	// parent scope. we are mutating the options object here
	// assuming the same object will be used for compile
	// right after this.
	if(options){options._containerAttrs=extractAttrs(el);}// for template tags, what we want is its content as
	// a documentFragment (for fragment instances)
	if(isTemplate(el)){el=parseTemplate(el);}if(options){if(options._asComponent&&!options.template){options.template='<slot></slot>';}if(options.template){options._content=extractContent(el);el=transcludeTemplate(el,options);}}if(isFragment(el)){// anchors for fragment instance
	// passing in `persist: true` to avoid them being
	// discarded by IE during template cloning
	prepend(createAnchor('v-start',true),el);el.appendChild(createAnchor('v-end',true));}return el;}/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */function transcludeTemplate(el,options){var template=options.template;var frag=parseTemplate(template,true);if(frag){var replacer=frag.firstChild;var tag=replacer.tagName&&replacer.tagName.toLowerCase();if(options.replace){/* istanbul ignore if */if(el===document.body){process.env.NODE_ENV!=='production'&&warn('You are mounting an instance with a template to '+'<body>. This will replace <body> entirely. You '+'should probably use `replace: false` here.');}// there are many cases where the instance must
	// become a fragment instance: basically anything that
	// can create more than 1 root nodes.
	if(// multi-children template
	frag.childNodes.length>1||// non-element template
	replacer.nodeType!==1||// single nested component
	tag==='component'||resolveAsset(options,'components',tag)||hasBindAttr(replacer,'is')||// element directive
	resolveAsset(options,'elementDirectives',tag)||// for block
	replacer.hasAttribute('v-for')||// if block
	replacer.hasAttribute('v-if')){return frag;}else{options._replacerAttrs=extractAttrs(replacer);mergeAttrs(el,replacer);return replacer;}}else{el.appendChild(frag);return el;}}else{process.env.NODE_ENV!=='production'&&warn('Invalid template option: '+template);}}/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */function extractAttrs(el){if(el.nodeType===1&&el.hasAttributes()){return toArray(el.attributes);}}/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */function mergeAttrs(from,to){var attrs=from.attributes;var i=attrs.length;var name,value;while(i--){name=attrs[i].name;value=attrs[i].value;if(!to.hasAttribute(name)&&!specialCharRE.test(name)){to.setAttribute(name,value);}else if(name==='class'&&!parseText(value)&&(value=value.trim())){value.split(/\s+/).forEach(function(cls){addClass(to,cls);});}}}/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */function resolveSlots(vm,content){if(!content){return;}var contents=vm._slotContents=Object.create(null);var el,name;for(var i=0,l=content.children.length;i<l;i++){el=content.children[i];/* eslint-disable no-cond-assign */if(name=el.getAttribute('slot')){(contents[name]||(contents[name]=[])).push(el);}/* eslint-enable no-cond-assign */if(process.env.NODE_ENV!=='production'&&getBindAttr(el,'slot')){warn('The "slot" attribute must be static.',vm.$parent);}}for(name in contents){contents[name]=extractFragment(contents[name],content);}if(content.hasChildNodes()){var nodes=content.childNodes;if(nodes.length===1&&nodes[0].nodeType===3&&!nodes[0].data.trim()){return;}contents['default']=extractFragment(content.childNodes,content);}}/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */function extractFragment(nodes,parent){var frag=document.createDocumentFragment();nodes=toArray(nodes);for(var i=0,l=nodes.length;i<l;i++){var node=nodes[i];if(isTemplate(node)&&!node.hasAttribute('v-if')&&!node.hasAttribute('v-for')){parent.removeChild(node);node=parseTemplate(node,true);}frag.appendChild(node);}return frag;}var compiler=Object.freeze({compile:compile,compileAndLinkProps:compileAndLinkProps,compileRoot:compileRoot,transclude:transclude,resolveSlots:resolveSlots});function stateMixin(Vue){/**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */Object.defineProperty(Vue.prototype,'$data',{get:function get(){return this._data;},set:function set(newData){if(newData!==this._data){this._setData(newData);}}});/**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */Vue.prototype._initState=function(){this._initProps();this._initMeta();this._initMethods();this._initData();this._initComputed();};/**
	   * Initialize props.
	   */Vue.prototype._initProps=function(){var options=this.$options;var el=options.el;var props=options.props;if(props&&!el){process.env.NODE_ENV!=='production'&&warn('Props will not be compiled if no `el` option is '+'provided at instantiation.',this);}// make sure to convert string selectors into element now
	el=options.el=query(el);this._propsUnlinkFn=el&&el.nodeType===1&&props// props must be linked in proper scope if inside v-for
	?compileAndLinkProps(this,el,props,this._scope):null;};/**
	   * Initialize the data.
	   */Vue.prototype._initData=function(){var dataFn=this.$options.data;var data=this._data=dataFn?dataFn():{};if(!isPlainObject(data)){data={};process.env.NODE_ENV!=='production'&&warn('data functions should return an object.',this);}var props=this._props;// proxy data on instance
	var keys=Object.keys(data);var i,key;i=keys.length;while(i--){key=keys[i];// there are two scenarios where we can proxy a data key:
	// 1. it's not already defined as a prop
	// 2. it's provided via a instantiation option AND there are no
	//    template prop present
	if(!props||!hasOwn(props,key)){this._proxy(key);}else if(process.env.NODE_ENV!=='production'){warn('Data field "'+key+'" is already defined '+'as a prop. To provide default value for a prop, use the "default" '+'prop option; if you want to pass prop values to an instantiation '+'call, use the "propsData" option.',this);}}// observe data
	observe(data,this);};/**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */Vue.prototype._setData=function(newData){newData=newData||{};var oldData=this._data;this._data=newData;var keys,key,i;// unproxy keys not present in new data
	keys=Object.keys(oldData);i=keys.length;while(i--){key=keys[i];if(!(key in newData)){this._unproxy(key);}}// proxy keys not already proxied,
	// and trigger change for changed values
	keys=Object.keys(newData);i=keys.length;while(i--){key=keys[i];if(!hasOwn(this,key)){// new property
	this._proxy(key);}}oldData.__ob__.removeVm(this);observe(newData,this);this._digest();};/**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */Vue.prototype._proxy=function(key){if(!isReserved(key)){// need to store ref to self here
	// because these getter/setters might
	// be called by child scopes via
	// prototype inheritance.
	var self=this;Object.defineProperty(self,key,{configurable:true,enumerable:true,get:function proxyGetter(){return self._data[key];},set:function proxySetter(val){self._data[key]=val;}});}};/**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */Vue.prototype._unproxy=function(key){if(!isReserved(key)){delete this[key];}};/**
	   * Force update on every watcher in scope.
	   */Vue.prototype._digest=function(){for(var i=0,l=this._watchers.length;i<l;i++){this._watchers[i].update(true);// shallow updates
	}};/**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */function noop(){}Vue.prototype._initComputed=function(){var computed=this.$options.computed;if(computed){for(var key in computed){var userDef=computed[key];var def={enumerable:true,configurable:true};if(typeof userDef==='function'){def.get=makeComputedGetter(userDef,this);def.set=noop;}else{def.get=userDef.get?userDef.cache!==false?makeComputedGetter(userDef.get,this):bind(userDef.get,this):noop;def.set=userDef.set?bind(userDef.set,this):noop;}Object.defineProperty(this,key,def);}}};function makeComputedGetter(getter,owner){var watcher=new Watcher(owner,getter,null,{lazy:true});return function computedGetter(){if(watcher.dirty){watcher.evaluate();}if(Dep.target){watcher.depend();}return watcher.value;};}/**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */Vue.prototype._initMethods=function(){var methods=this.$options.methods;if(methods){for(var key in methods){this[key]=bind(methods[key],this);}}};/**
	   * Initialize meta information like $index, $key & $value.
	   */Vue.prototype._initMeta=function(){var metas=this.$options._meta;if(metas){for(var key in metas){defineReactive(this,key,metas[key]);}}};}var eventRE=/^v-on:|^@/;function eventsMixin(Vue){/**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */Vue.prototype._initEvents=function(){var options=this.$options;if(options._asComponent){registerComponentEvents(this,options.el);}registerCallbacks(this,'$on',options.events);registerCallbacks(this,'$watch',options.watch);};/**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */function registerComponentEvents(vm,el){var attrs=el.attributes;var name,value,handler;for(var i=0,l=attrs.length;i<l;i++){name=attrs[i].name;if(eventRE.test(name)){name=name.replace(eventRE,'');// force the expression into a statement so that
	// it always dynamically resolves the method to call (#2670)
	// kinda ugly hack, but does the job.
	value=attrs[i].value;if(isSimplePath(value)){value+='.apply(this, $arguments)';}handler=(vm._scope||vm._context).$eval(value,true);handler._fromParent=true;vm.$on(name.replace(eventRE),handler);}}}/**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */function registerCallbacks(vm,action,hash){if(!hash)return;var handlers,key,i,j;for(key in hash){handlers=hash[key];if(isArray(handlers)){for(i=0,j=handlers.length;i<j;i++){register(vm,action,key,handlers[i]);}}else{register(vm,action,key,handlers);}}}/**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */function register(vm,action,key,handler,options){var type=typeof handler==='undefined'?'undefined':_typeof(handler);if(type==='function'){vm[action](key,handler,options);}else if(type==='string'){var methods=vm.$options.methods;var method=methods&&methods[handler];if(method){vm[action](key,method,options);}else{process.env.NODE_ENV!=='production'&&warn('Unknown method: "'+handler+'" when '+'registering callback for '+action+': "'+key+'".',vm);}}else if(handler&&type==='object'){register(vm,action,key,handler.handler,handler);}}/**
	   * Setup recursive attached/detached calls
	   */Vue.prototype._initDOMHooks=function(){this.$on('hook:attached',onAttached);this.$on('hook:detached',onDetached);};/**
	   * Callback to recursively call attached hook on children
	   */function onAttached(){if(!this._isAttached){this._isAttached=true;this.$children.forEach(callAttach);}}/**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */function callAttach(child){if(!child._isAttached&&inDoc(child.$el)){child._callHook('attached');}}/**
	   * Callback to recursively call detached hook on children
	   */function onDetached(){if(this._isAttached){this._isAttached=false;this.$children.forEach(callDetach);}}/**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */function callDetach(child){if(child._isAttached&&!inDoc(child.$el)){child._callHook('detached');}}/**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */Vue.prototype._callHook=function(hook){this.$emit('pre-hook:'+hook);var handlers=this.$options[hook];if(handlers){for(var i=0,j=handlers.length;i<j;i++){handlers[i].call(this);}}this.$emit('hook:'+hook);};}function noop$1(){}/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */function Directive(descriptor,vm,el,host,scope,frag){this.vm=vm;this.el=el;// copy descriptor properties
	this.descriptor=descriptor;this.name=descriptor.name;this.expression=descriptor.expression;this.arg=descriptor.arg;this.modifiers=descriptor.modifiers;this.filters=descriptor.filters;this.literal=this.modifiers&&this.modifiers.literal;// private
	this._locked=false;this._bound=false;this._listeners=null;// link context
	this._host=host;this._scope=scope;this._frag=frag;// store directives on node in dev mode
	if(process.env.NODE_ENV!=='production'&&this.el){this.el._vue_directives=this.el._vue_directives||[];this.el._vue_directives.push(this);}}/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */Directive.prototype._bind=function(){var name=this.name;var descriptor=this.descriptor;// remove attribute
	if((name!=='cloak'||this.vm._isCompiled)&&this.el&&this.el.removeAttribute){var attr=descriptor.attr||'v-'+name;this.el.removeAttribute(attr);}// copy def properties
	var def=descriptor.def;if(typeof def==='function'){this.update=def;}else{extend(this,def);}// setup directive params
	this._setupParams();// initial bind
	if(this.bind){this.bind();}this._bound=true;if(this.literal){this.update&&this.update(descriptor.raw);}else if((this.expression||this.modifiers)&&(this.update||this.twoWay)&&!this._checkStatement()){// wrapped updater for context
	var dir=this;if(this.update){this._update=function(val,oldVal){if(!dir._locked){dir.update(val,oldVal);}};}else{this._update=noop$1;}var preProcess=this._preProcess?bind(this._preProcess,this):null;var postProcess=this._postProcess?bind(this._postProcess,this):null;var watcher=this._watcher=new Watcher(this.vm,this.expression,this._update,// callback
	{filters:this.filters,twoWay:this.twoWay,deep:this.deep,preProcess:preProcess,postProcess:postProcess,scope:this._scope});// v-model with inital inline value need to sync back to
	// model instead of update to DOM on init. They would
	// set the afterBind hook to indicate that.
	if(this.afterBind){this.afterBind();}else if(this.update){this.update(watcher.value);}}};/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */Directive.prototype._setupParams=function(){if(!this.params){return;}var params=this.params;// swap the params array with a fresh object.
	this.params=Object.create(null);var i=params.length;var key,val,mappedKey;while(i--){key=hyphenate(params[i]);mappedKey=camelize(key);val=getBindAttr(this.el,key);if(val!=null){// dynamic
	this._setupParamWatcher(mappedKey,val);}else{// static
	val=getAttr(this.el,key);if(val!=null){this.params[mappedKey]=val===''?true:val;}}}};/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */Directive.prototype._setupParamWatcher=function(key,expression){var self=this;var called=false;var unwatch=(this._scope||this.vm).$watch(expression,function(val,oldVal){self.params[key]=val;// since we are in immediate mode,
	// only call the param change callbacks if this is not the first update.
	if(called){var cb=self.paramWatchers&&self.paramWatchers[key];if(cb){cb.call(self,val,oldVal);}}else{called=true;}},{immediate:true,user:false});(this._paramUnwatchFns||(this._paramUnwatchFns=[])).push(unwatch);};/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */Directive.prototype._checkStatement=function(){var expression=this.expression;if(expression&&this.acceptStatement&&!isSimplePath(expression)){var fn=parseExpression(expression).get;var scope=this._scope||this.vm;var handler=function handler(e){scope.$event=e;fn.call(scope,scope);scope.$event=null;};if(this.filters){handler=scope._applyFilters(handler,null,this.filters);}this.update(handler);return true;}};/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */Directive.prototype.set=function(value){/* istanbul ignore else */if(this.twoWay){this._withLock(function(){this._watcher.set(value);});}else if(process.env.NODE_ENV!=='production'){warn('Directive.set() can only be used inside twoWay'+'directives.');}};/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */Directive.prototype._withLock=function(fn){var self=this;self._locked=true;fn.call(self);nextTick(function(){self._locked=false;});};/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */Directive.prototype.on=function(event,handler,useCapture){on(this.el,event,handler,useCapture);(this._listeners||(this._listeners=[])).push([event,handler]);};/**
	 * Teardown the watcher and call unbind.
	 */Directive.prototype._teardown=function(){if(this._bound){this._bound=false;if(this.unbind){this.unbind();}if(this._watcher){this._watcher.teardown();}var listeners=this._listeners;var i;if(listeners){i=listeners.length;while(i--){off(this.el,listeners[i][0],listeners[i][1]);}}var unwatchFns=this._paramUnwatchFns;if(unwatchFns){i=unwatchFns.length;while(i--){unwatchFns[i]();}}if(process.env.NODE_ENV!=='production'&&this.el){this.el._vue_directives.$remove(this);}this.vm=this.el=this._watcher=this._listeners=null;}};function lifecycleMixin(Vue){/**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */Vue.prototype._updateRef=function(remove){var ref=this.$options._ref;if(ref){var refs=(this._scope||this._context).$refs;if(remove){if(refs[ref]===this){refs[ref]=null;}}else{refs[ref]=this;}}};/**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */Vue.prototype._compile=function(el){var options=this.$options;// transclude and init element
	// transclude can potentially replace original
	// so we need to keep reference; this step also injects
	// the template and caches the original attributes
	// on the container node and replacer node.
	var original=el;el=transclude(el,options);this._initElement(el);// handle v-pre on root node (#2026)
	if(el.nodeType===1&&getAttr(el,'v-pre')!==null){return;}// root is always compiled per-instance, because
	// container attrs and props can be different every time.
	var contextOptions=this._context&&this._context.$options;var rootLinker=compileRoot(el,options,contextOptions);// resolve slot distribution
	resolveSlots(this,options._content);// compile and link the rest
	var contentLinkFn;var ctor=this.constructor;// component compilation can be cached
	// as long as it's not using inline-template
	if(options._linkerCachable){contentLinkFn=ctor.linker;if(!contentLinkFn){contentLinkFn=ctor.linker=compile(el,options);}}// link phase
	// make sure to link root with prop scope!
	var rootUnlinkFn=rootLinker(this,el,this._scope);var contentUnlinkFn=contentLinkFn?contentLinkFn(this,el):compile(el,options)(this,el);// register composite unlink function
	// to be called during instance destruction
	this._unlinkFn=function(){rootUnlinkFn();// passing destroying: true to avoid searching and
	// splicing the directives
	contentUnlinkFn(true);};// finally replace original
	if(options.replace){replace(original,el);}this._isCompiled=true;this._callHook('compiled');};/**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */Vue.prototype._initElement=function(el){if(isFragment(el)){this._isFragment=true;this.$el=this._fragmentStart=el.firstChild;this._fragmentEnd=el.lastChild;// set persisted text anchors to empty
	if(this._fragmentStart.nodeType===3){this._fragmentStart.data=this._fragmentEnd.data='';}this._fragment=el;}else{this.$el=el;}this.$el.__vue__=this;this._callHook('beforeCompile');};/**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */Vue.prototype._bindDir=function(descriptor,node,host,scope,frag){this._directives.push(new Directive(descriptor,this,node,host,scope,frag));};/**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */Vue.prototype._destroy=function(remove,deferCleanup){if(this._isBeingDestroyed){if(!deferCleanup){this._cleanup();}return;}var destroyReady;var pendingRemoval;var self=this;// Cleanup should be called either synchronously or asynchronoysly as
	// callback of this.$remove(), or if remove and deferCleanup are false.
	// In any case it should be called after all other removing, unbinding and
	// turning of is done
	var cleanupIfPossible=function cleanupIfPossible(){if(destroyReady&&!pendingRemoval&&!deferCleanup){self._cleanup();}};// remove DOM element
	if(remove&&this.$el){pendingRemoval=true;this.$remove(function(){pendingRemoval=false;cleanupIfPossible();});}this._callHook('beforeDestroy');this._isBeingDestroyed=true;var i;// remove self from parent. only necessary
	// if parent is not being destroyed as well.
	var parent=this.$parent;if(parent&&!parent._isBeingDestroyed){parent.$children.$remove(this);// unregister ref (remove: true)
	this._updateRef(true);}// destroy all children.
	i=this.$children.length;while(i--){this.$children[i].$destroy();}// teardown props
	if(this._propsUnlinkFn){this._propsUnlinkFn();}// teardown all directives. this also tearsdown all
	// directive-owned watchers.
	if(this._unlinkFn){this._unlinkFn();}i=this._watchers.length;while(i--){this._watchers[i].teardown();}// remove reference to self on $el
	if(this.$el){this.$el.__vue__=null;}destroyReady=true;cleanupIfPossible();};/**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */Vue.prototype._cleanup=function(){if(this._isDestroyed){return;}// remove self from owner fragment
	// do it in cleanup so that we can call $destroy with
	// defer right when a fragment is about to be removed.
	if(this._frag){this._frag.children.$remove(this);}// remove reference from data ob
	// frozen object may not have observer.
	if(this._data&&this._data.__ob__){this._data.__ob__.removeVm(this);}// Clean up references to private properties and other
	// instances. preserve reference to _data so that proxy
	// accessors still work. The only potential side effect
	// here is that mutating the instance after it's destroyed
	// may affect the state of other components that are still
	// observing the same object, but that seems to be a
	// reasonable responsibility for the user rather than
	// always throwing an error on them.
	this.$el=this.$parent=this.$root=this.$children=this._watchers=this._context=this._scope=this._directives=null;// call the last hook...
	this._isDestroyed=true;this._callHook('destroyed');// turn off all instance listeners.
	this.$off();};}function miscMixin(Vue){/**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */Vue.prototype._applyFilters=function(value,oldValue,filters,write){var filter,fn,args,arg,offset,i,l,j,k;for(i=0,l=filters.length;i<l;i++){filter=filters[write?l-i-1:i];fn=resolveAsset(this.$options,'filters',filter.name,true);if(!fn)continue;fn=write?fn.write:fn.read||fn;if(typeof fn!=='function')continue;args=write?[value,oldValue]:[value];offset=write?2:1;if(filter.args){for(j=0,k=filter.args.length;j<k;j++){arg=filter.args[j];args[j+offset]=arg.dynamic?this.$get(arg.value):arg.value;}}value=fn.apply(this,args);}return value;};/**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */Vue.prototype._resolveComponent=function(value,cb){var factory;if(typeof value==='function'){factory=value;}else{factory=resolveAsset(this.$options,'components',value,true);}/* istanbul ignore if */if(!factory){return;}// async component factory
	if(!factory.options){if(factory.resolved){// cached
	cb(factory.resolved);}else if(factory.requested){// pool callbacks
	factory.pendingCallbacks.push(cb);}else{factory.requested=true;var cbs=factory.pendingCallbacks=[cb];factory.call(this,function resolve(res){if(isPlainObject(res)){res=Vue.extend(res);}// cache resolved
	factory.resolved=res;// invoke callbacks
	for(var i=0,l=cbs.length;i<l;i++){cbs[i](res);}},function reject(reason){process.env.NODE_ENV!=='production'&&warn('Failed to resolve async component'+(typeof value==='string'?': '+value:'')+'. '+(reason?'\nReason: '+reason:''));});}}else{// normal component
	cb(factory);}};}var filterRE$1=/[^|]\|[^|]/;function dataAPI(Vue){/**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */Vue.prototype.$get=function(exp,asStatement){var res=parseExpression(exp);if(res){if(asStatement){var self=this;return function statementHandler(){self.$arguments=toArray(arguments);var result=res.get.call(self,self);self.$arguments=null;return result;};}else{try{return res.get.call(this,this);}catch(e){}}}};/**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */Vue.prototype.$set=function(exp,val){var res=parseExpression(exp,true);if(res&&res.set){res.set.call(this,this,val);}};/**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */Vue.prototype.$delete=function(key){del(this._data,key);};/**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */Vue.prototype.$watch=function(expOrFn,cb,options){var vm=this;var parsed;if(typeof expOrFn==='string'){parsed=parseDirective(expOrFn);expOrFn=parsed.expression;}var watcher=new Watcher(vm,expOrFn,cb,{deep:options&&options.deep,sync:options&&options.sync,filters:parsed&&parsed.filters,user:!options||options.user!==false});if(options&&options.immediate){cb.call(vm,watcher.value);}return function unwatchFn(){watcher.teardown();};};/**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */Vue.prototype.$eval=function(text,asStatement){// check for filters.
	if(filterRE$1.test(text)){var dir=parseDirective(text);// the filter regex check might give false positive
	// for pipes inside strings, so it's possible that
	// we don't get any filters here
	var val=this.$get(dir.expression,asStatement);return dir.filters?this._applyFilters(val,null,dir.filters):val;}else{// no filter
	return this.$get(text,asStatement);}};/**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */Vue.prototype.$interpolate=function(text){var tokens=parseText(text);var vm=this;if(tokens){if(tokens.length===1){return vm.$eval(tokens[0].value)+'';}else{return tokens.map(function(token){return token.tag?vm.$eval(token.value):token.value;}).join('');}}else{return text;}};/**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */Vue.prototype.$log=function(path){var data=path?getPath(this._data,path):this._data;if(data){data=clean(data);}// include computed fields
	if(!path){var key;for(key in this.$options.computed){data[key]=clean(this[key]);}if(this._props){for(key in this._props){data[key]=clean(this[key]);}}}console.log(data);};/**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */function clean(obj){return JSON.parse(JSON.stringify(obj));}}function domAPI(Vue){/**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */Vue.prototype.$nextTick=function(fn){nextTick(fn,this);};/**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$appendTo=function(target,cb,withTransition){return insert(this,target,cb,withTransition,append,appendWithTransition);};/**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$prependTo=function(target,cb,withTransition){target=query(target);if(target.hasChildNodes()){this.$before(target.firstChild,cb,withTransition);}else{this.$appendTo(target,cb,withTransition);}return this;};/**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$before=function(target,cb,withTransition){return insert(this,target,cb,withTransition,beforeWithCb,beforeWithTransition);};/**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$after=function(target,cb,withTransition){target=query(target);if(target.nextSibling){this.$before(target.nextSibling,cb,withTransition);}else{this.$appendTo(target.parentNode,cb,withTransition);}return this;};/**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$remove=function(cb,withTransition){if(!this.$el.parentNode){return cb&&cb();}var inDocument=this._isAttached&&inDoc(this.$el);// if we are not in document, no need to check
	// for transitions
	if(!inDocument)withTransition=false;var self=this;var realCb=function realCb(){if(inDocument)self._callHook('detached');if(cb)cb();};if(this._isFragment){removeNodeRange(this._fragmentStart,this._fragmentEnd,this,this._fragment,realCb);}else{var op=withTransition===false?removeWithCb:removeWithTransition;op(this.$el,this,realCb);}return this;};/**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */function insert(vm,target,cb,withTransition,op1,op2){target=query(target);var targetIsDetached=!inDoc(target);var op=withTransition===false||targetIsDetached?op1:op2;var shouldCallHook=!targetIsDetached&&!vm._isAttached&&!inDoc(vm.$el);if(vm._isFragment){mapNodeRange(vm._fragmentStart,vm._fragmentEnd,function(node){op(node,target,vm);});cb&&cb();}else{op(vm.$el,target,vm,cb);}if(shouldCallHook){vm._callHook('attached');}return vm;}/**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */function query(el){return typeof el==='string'?document.querySelector(el):el;}/**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */function append(el,target,vm,cb){target.appendChild(el);if(cb)cb();}/**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */function beforeWithCb(el,target,vm,cb){before(el,target);if(cb)cb();}/**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */function removeWithCb(el,vm,cb){remove(el);if(cb)cb();}}function eventsAPI(Vue){/**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */Vue.prototype.$on=function(event,fn){(this._events[event]||(this._events[event]=[])).push(fn);modifyListenerCount(this,event,1);return this;};/**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */Vue.prototype.$once=function(event,fn){var self=this;function on(){self.$off(event,on);fn.apply(this,arguments);}on.fn=fn;this.$on(event,on);return this;};/**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */Vue.prototype.$off=function(event,fn){var cbs;// all
	if(!arguments.length){if(this.$parent){for(event in this._events){cbs=this._events[event];if(cbs){modifyListenerCount(this,event,-cbs.length);}}}this._events={};return this;}// specific event
	cbs=this._events[event];if(!cbs){return this;}if(arguments.length===1){modifyListenerCount(this,event,-cbs.length);this._events[event]=null;return this;}// specific handler
	var cb;var i=cbs.length;while(i--){cb=cbs[i];if(cb===fn||cb.fn===fn){modifyListenerCount(this,event,-1);cbs.splice(i,1);break;}}return this;};/**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */Vue.prototype.$emit=function(event){var isSource=typeof event==='string';event=isSource?event:event.name;var cbs=this._events[event];var shouldPropagate=isSource||!cbs;if(cbs){cbs=cbs.length>1?toArray(cbs):cbs;// this is a somewhat hacky solution to the question raised
	// in #2102: for an inline component listener like <comp @test="doThis">,
	// the propagation handling is somewhat broken. Therefore we
	// need to treat these inline callbacks differently.
	var hasParentCbs=isSource&&cbs.some(function(cb){return cb._fromParent;});if(hasParentCbs){shouldPropagate=false;}var args=toArray(arguments,1);for(var i=0,l=cbs.length;i<l;i++){var cb=cbs[i];var res=cb.apply(this,args);if(res===true&&(!hasParentCbs||cb._fromParent)){shouldPropagate=true;}}}return shouldPropagate;};/**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */Vue.prototype.$broadcast=function(event){var isSource=typeof event==='string';event=isSource?event:event.name;// if no child has registered for this event,
	// then there's no need to broadcast.
	if(!this._eventsCount[event])return;var children=this.$children;var args=toArray(arguments);if(isSource){// use object event to indicate non-source emit
	// on children
	args[0]={name:event,source:this};}for(var i=0,l=children.length;i<l;i++){var child=children[i];var shouldPropagate=child.$emit.apply(child,args);if(shouldPropagate){child.$broadcast.apply(child,args);}}return this;};/**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */Vue.prototype.$dispatch=function(event){var shouldPropagate=this.$emit.apply(this,arguments);if(!shouldPropagate)return;var parent=this.$parent;var args=toArray(arguments);// use object event to indicate non-source emit
	// on parents
	args[0]={name:event,source:this};while(parent){shouldPropagate=parent.$emit.apply(parent,args);parent=shouldPropagate?parent.$parent:null;}return this;};/**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */var hookRE=/^hook:/;function modifyListenerCount(vm,event,count){var parent=vm.$parent;// hooks do not get broadcasted so no need
	// to do bookkeeping for them
	if(!parent||!count||hookRE.test(event))return;while(parent){parent._eventsCount[event]=(parent._eventsCount[event]||0)+count;parent=parent.$parent;}}}function lifecycleAPI(Vue){/**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */Vue.prototype.$mount=function(el){if(this._isCompiled){process.env.NODE_ENV!=='production'&&warn('$mount() should be called only once.',this);return;}el=query(el);if(!el){el=document.createElement('div');}this._compile(el);this._initDOMHooks();if(inDoc(this.$el)){this._callHook('attached');ready.call(this);}else{this.$once('hook:attached',ready);}return this;};/**
	   * Mark an instance as ready.
	   */function ready(){this._isAttached=true;this._isReady=true;this._callHook('ready');}/**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */Vue.prototype.$destroy=function(remove,deferCleanup){this._destroy(remove,deferCleanup);};/**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */Vue.prototype.$compile=function(el,host,scope,frag){return compile(el,this.$options,true)(this,el,host,scope,frag);};}/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */function Vue(options){this._init(options);}// install internals
	initMixin(Vue);stateMixin(Vue);eventsMixin(Vue);lifecycleMixin(Vue);miscMixin(Vue);// install instance APIs
	dataAPI(Vue);domAPI(Vue);eventsAPI(Vue);lifecycleAPI(Vue);var slot={priority:SLOT,params:['name'],bind:function bind(){// this was resolved during component transclusion
	var name=this.params.name||'default';var content=this.vm._slotContents&&this.vm._slotContents[name];if(!content||!content.hasChildNodes()){this.fallback();}else{this.compile(content.cloneNode(true),this.vm._context,this.vm);}},compile:function compile(content,context,host){if(content&&context){if(this.el.hasChildNodes()&&content.childNodes.length===1&&content.childNodes[0].nodeType===1&&content.childNodes[0].hasAttribute('v-if')){// if the inserted slot has v-if
	// inject fallback content as the v-else
	var elseBlock=document.createElement('template');elseBlock.setAttribute('v-else','');elseBlock.innerHTML=this.el.innerHTML;// the else block should be compiled in child scope
	elseBlock._context=this.vm;content.appendChild(elseBlock);}var scope=host?host._scope:this._scope;this.unlink=context.$compile(content,host,scope,this._frag);}if(content){replace(this.el,content);}else{remove(this.el);}},fallback:function fallback(){this.compile(extractContent(this.el,true),this.vm);},unbind:function unbind(){if(this.unlink){this.unlink();}}};var partial={priority:PARTIAL,params:['name'],// watch changes to name for dynamic partials
	paramWatchers:{name:function name(value){vIf.remove.call(this);if(value){this.insert(value);}}},bind:function bind(){this.anchor=createAnchor('v-partial');replace(this.el,this.anchor);this.insert(this.params.name);},insert:function insert(id){var partial=resolveAsset(this.vm.$options,'partials',id,true);if(partial){this.factory=new FragmentFactory(this.vm,partial);vIf.insert.call(this);}},unbind:function unbind(){if(this.frag){this.frag.destroy();}}};var elementDirectives={slot:slot,partial:partial};var convertArray=vFor._postProcess;/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */function limitBy(arr,n,offset){offset=offset?parseInt(offset,10):0;n=toNumber(n);return typeof n==='number'?arr.slice(offset,offset+n):arr;}/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */function filterBy(arr,search,delimiter){arr=convertArray(arr);if(search==null){return arr;}if(typeof search==='function'){return arr.filter(search);}// cast to lowercase string
	search=(''+search).toLowerCase();// allow optional `in` delimiter
	// because why not
	var n=delimiter==='in'?3:2;// extract and flatten keys
	var keys=Array.prototype.concat.apply([],toArray(arguments,n));var res=[];var item,key,val,j;for(var i=0,l=arr.length;i<l;i++){item=arr[i];val=item&&item.$value||item;j=keys.length;if(j){while(j--){key=keys[j];if(key==='$key'&&contains(item.$key,search)||contains(getPath(val,key),search)){res.push(item);break;}}}else if(contains(item,search)){res.push(item);}}return res;}/**
	 * Filter filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */function orderBy(arr){var _comparator=null;var sortKeys=undefined;arr=convertArray(arr);// determine order (last argument)
	var args=toArray(arguments,1);var order=args[args.length-1];if(typeof order==='number'){order=order<0?-1:1;args=args.length>1?args.slice(0,-1):args;}else{order=1;}// determine sortKeys & comparator
	var firstArg=args[0];if(!firstArg){return arr;}else if(typeof firstArg==='function'){// custom comparator
	_comparator=function comparator(a,b){return firstArg(a,b)*order;};}else{// string keys. flatten first
	sortKeys=Array.prototype.concat.apply([],args);_comparator=function comparator(a,b,i){i=i||0;return i>=sortKeys.length-1?baseCompare(a,b,i):baseCompare(a,b,i)||_comparator(a,b,i+1);};}function baseCompare(a,b,sortKeyIndex){var sortKey=sortKeys[sortKeyIndex];if(sortKey){if(sortKey!=='$key'){if(isObject(a)&&'$value'in a)a=a.$value;if(isObject(b)&&'$value'in b)b=b.$value;}a=isObject(a)?getPath(a,sortKey):a;b=isObject(b)?getPath(b,sortKey):b;}return a===b?0:a>b?order:-order;}// sort on a copy to avoid mutating original array
	return arr.slice().sort(_comparator);}/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */function contains(val,search){var i;if(isPlainObject(val)){var keys=Object.keys(val);i=keys.length;while(i--){if(contains(val[keys[i]],search)){return true;}}}else if(isArray(val)){i=val.length;while(i--){if(contains(val[i],search)){return true;}}}else if(val!=null){return val.toString().toLowerCase().indexOf(search)>-1;}}var digitsRE=/(\d{3})(?=\d)/g;// asset collections must be a plain object.
	var filters={orderBy:orderBy,filterBy:filterBy,limitBy:limitBy,/**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */json:{read:function read(value,indent){return typeof value==='string'?value:JSON.stringify(value,null,arguments.length>1?indent:2);},write:function write(value){try{return JSON.parse(value);}catch(e){return value;}}},/**
	   * 'abc' => 'Abc'
	   */capitalize:function capitalize(value){if(!value&&value!==0)return'';value=value.toString();return value.charAt(0).toUpperCase()+value.slice(1);},/**
	   * 'abc' => 'ABC'
	   */uppercase:function uppercase(value){return value||value===0?value.toString().toUpperCase():'';},/**
	   * 'AbC' => 'abc'
	   */lowercase:function lowercase(value){return value||value===0?value.toString().toLowerCase():'';},/**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */currency:function currency(value,_currency,decimals){value=parseFloat(value);if(!isFinite(value)||!value&&value!==0)return'';_currency=_currency!=null?_currency:'$';decimals=decimals!=null?decimals:2;var stringified=Math.abs(value).toFixed(decimals);var _int=decimals?stringified.slice(0,-1-decimals):stringified;var i=_int.length%3;var head=i>0?_int.slice(0,i)+(_int.length>3?',':''):'';var _float=decimals?stringified.slice(-1-decimals):'';var sign=value<0?'-':'';return sign+_currency+head+_int.slice(i).replace(digitsRE,'$1,')+_float;},/**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */pluralize:function pluralize(value){var args=toArray(arguments,1);var length=args.length;if(length>1){var index=value%10-1;return index in args?args[index]:args[length-1];}else{return args[0]+(value===1?'':'s');}},/**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */debounce:function debounce(handler,delay){if(!handler)return;if(!delay){delay=300;}return _debounce(handler,delay);}};function installGlobalAPI(Vue){/**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */Vue.options={directives:directives,elementDirectives:elementDirectives,filters:filters,transitions:{},components:{},partials:{},replace:true};/**
	   * Expose useful internals
	   */Vue.util=util;Vue.config=config;Vue.set=set;Vue['delete']=del;Vue.nextTick=nextTick;/**
	   * The following are exposed for advanced usage / plugins
	   */Vue.compiler=compiler;Vue.FragmentFactory=FragmentFactory;Vue.internalDirectives=internalDirectives;Vue.parsers={path:path,text:text,template:template,directive:directive,expression:expression};/**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */Vue.cid=0;var cid=1;/**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */Vue.extend=function(extendOptions){extendOptions=extendOptions||{};var Super=this;var isFirstExtend=Super.cid===0;if(isFirstExtend&&extendOptions._Ctor){return extendOptions._Ctor;}var name=extendOptions.name||Super.options.name;if(process.env.NODE_ENV!=='production'){if(!/^[a-zA-Z][\w-]*$/.test(name)){warn('Invalid component name: "'+name+'". Component names '+'can only contain alphanumeric characaters and the hyphen.');name=null;}}var Sub=createClass(name||'VueComponent');Sub.prototype=Object.create(Super.prototype);Sub.prototype.constructor=Sub;Sub.cid=cid++;Sub.options=mergeOptions(Super.options,extendOptions);Sub['super']=Super;// allow further extension
	Sub.extend=Super.extend;// create asset registers, so extended classes
	// can have their private assets too.
	config._assetTypes.forEach(function(type){Sub[type]=Super[type];});// enable recursive self-lookup
	if(name){Sub.options.components[name]=Sub;}// cache constructor
	if(isFirstExtend){extendOptions._Ctor=Sub;}return Sub;};/**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */function createClass(name){/* eslint-disable no-new-func */return new Function('return function '+classify(name)+' (options) { this._init(options) }')();/* eslint-enable no-new-func */}/**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */Vue.use=function(plugin){/* istanbul ignore if */if(plugin.installed){return;}// additional parameters
	var args=toArray(arguments,1);args.unshift(this);if(typeof plugin.install==='function'){plugin.install.apply(plugin,args);}else{plugin.apply(null,args);}plugin.installed=true;return this;};/**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */Vue.mixin=function(mixin){Vue.options=mergeOptions(Vue.options,mixin);};/**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */config._assetTypes.forEach(function(type){Vue[type]=function(id,definition){if(!definition){return this.options[type+'s'][id];}else{/* istanbul ignore if */if(process.env.NODE_ENV!=='production'){if(type==='component'&&(commonTagRE.test(id)||reservedTagRE.test(id))){warn('Do not use built-in or reserved HTML elements as component '+'id: '+id);}}if(type==='component'&&isPlainObject(definition)){if(!definition.name){definition.name=id;}definition=Vue.extend(definition);}this.options[type+'s'][id]=definition;return definition;}};});// expose internal transition API
	extend(Vue.transition,transition);}installGlobalAPI(Vue);Vue.version='1.0.26';// devtools global hook
	/* istanbul ignore next */setTimeout(function(){if(config.devtools){if(devtools){devtools.emit('init',Vue);}else if(process.env.NODE_ENV!=='production'&&inBrowser&&/Chrome\/\d+/.test(window.navigator.userAgent)){console.log('Download the Vue Devtools for a better development experience:\n'+'https://github.com/vuejs/vue-devtools');}}},0);module.exports=Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(4)
	__vue_script__ = __webpack_require__(8)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-datatable/src/DataTable.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(46)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./DataTable.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../vue-loader/lib/style-rewriter.js?id=_v-bfef3f54&scoped=true!./../../sass-loader/index.js!./../../vue-loader/lib/selector.js?type=style&index=0!./DataTable.vue", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../vue-loader/lib/style-rewriter.js?id=_v-bfef3f54&scoped=true!./../../sass-loader/index.js!./../../vue-loader/lib/selector.js?type=style&index=0!./DataTable.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".v-table table[_v-bfef3f54] {\n  width: 100%;\n  border-collapse: collapse; }\n  .v-table table thead[_v-bfef3f54] {\n    border-bottom: 1px solid #111111; }\n    .v-table table thead th[_v-bfef3f54] {\n      position: relative;\n      padding: 10px 18px;\n      text-align: left;\n      background-color: #CBCCCD;\n      font-weight: bold; }\n      .v-table table thead th.sort[_v-bfef3f54] {\n        cursor: pointer; }\n        .v-table table thead th.sort[_v-bfef3f54]::after {\n          content: \"\";\n          position: absolute;\n          border-left: 5px solid transparent;\n          border-right: 5px solid transparent;\n          border-bottom: 10px solid #FAFAFA;\n          right: 5px;\n          top: 50%;\n          margin-top: -10px; }\n        .v-table table thead th.sort[_v-bfef3f54]::before {\n          content: \"\";\n          position: absolute;\n          border-left: 5px solid transparent;\n          border-right: 5px solid transparent;\n          border-bottom: 10px solid #FAFAFA;\n          right: 5px;\n          top: 50%;\n          margin-top: 3px;\n          -webkit-transform: rotate(180deg);\n                  transform: rotate(180deg); }\n        .v-table table thead th.sort.desc[_v-bfef3f54]::after {\n          display: none; }\n        .v-table table thead th.sort.desc[_v-bfef3f54]::before {\n          content: \"\";\n          position: absolute;\n          border-left: 5px solid transparent;\n          border-right: 5px solid transparent;\n          border-bottom: 10px solid #333;\n          right: 5px;\n          top: 50%;\n          margin-top: -5px; }\n        .v-table table thead th.sort.asc[_v-bfef3f54]::before {\n          display: none; }\n        .v-table table thead th.sort.asc[_v-bfef3f54]::after {\n          content: \"\";\n          position: absolute;\n          border-left: 5px solid transparent;\n          border-right: 5px solid transparent;\n          border-bottom: 10px solid #333;\n          right: 5px;\n          top: 50%;\n          margin-top: -5px; }\n  .v-table table tbody[_v-bfef3f54] {\n    border-bottom: 1px solid #111111; }\n    .v-table table tbody tr[_v-bfef3f54] {\n      background-color: #fff; }\n      .v-table table tbody tr td[_v-bfef3f54] {\n        text-align: left;\n        padding: 10px 8px; }\n      .v-table table tbody tr[_v-bfef3f54]:nth-child(odd) {\n        background-color: #f9f9f9; }\n        .v-table table tbody tr:nth-child(odd) td[_v-bfef3f54]:nth-child(1) {\n          background-color: #F1F1F2; }\n      .v-table table tbody tr:nth-child(even) td[_v-bfef3f54]:nth-child(1) {\n        background-color: #fafafa; }\n\n.v-table .v-table-header[_v-bfef3f54], .v-table .v-table-footer[_v-bfef3f54] {\n  display: table;\n  height: 40px;\n  width: 100%;\n  line-height: 40px; }\n  .v-table .v-table-header[_v-bfef3f54]::after, .v-table .v-table-footer[_v-bfef3f54]::after {\n    content: '';\n    clear: both; }\n\n.v-table .v-table-header-count[_v-bfef3f54] {\n  float: left; }\n\n.v-table .v-table-header-search[_v-bfef3f54] {\n  float: right; }\n\n.v-table .v-table-footer[_v-bfef3f54] {\n  margin-top: 10px; }\n  .v-table .v-table-footer-info[_v-bfef3f54] {\n    float: left; }\n  .v-table .v-table-footer-page[_v-bfef3f54] {\n    font-size: 0;\n    float: right; }\n    .v-table .v-table-footer-page span[_v-bfef3f54] {\n      display: inline-block;\n      font-size: 1rem;\n      padding: 10px 15px; }\n    .v-table .v-table-footer-page-btn[_v-bfef3f54] {\n      display: inline-block;\n      height: 40px;\n      box-sizing: border-box;\n      padding: 0px 15px;\n      line-height: 40px;\n      text-decoration: none;\n      color: #000;\n      border-radius: 2px;\n      font-size: 1rem; }\n      .v-table .v-table-footer-page-btn[_v-bfef3f54]:hover {\n        color: #fff;\n        border-top: 1px solid #333;\n        border-bottom: 1px solid #333;\n        background-color: #333; }\n      .v-table .v-table-footer-page-btn[_v-bfef3f54]:nth-last-child(1) {\n        margin-right: 0; }\n      .v-table .v-table-footer-page-btn.disabled[_v-bfef3f54] {\n        cursor: default;\n        color: #666; }\n        .v-table .v-table-footer-page-btn.disabled[_v-bfef3f54]:hover {\n          color: #666;\n          background-color: transparent;\n          border: none; }\n      .v-table .v-table-footer-page-btn.current[_v-bfef3f54] {\n        color: #000;\n        border: 1px solid #979797;\n        background-color: #fff;\n        background: -webkit-linear-gradient(top, #fff 0%, #dcdcdc 100%);\n        background: linear-gradient(to bottom, #fff 0%, #dcdcdc 100%); }\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(9);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: ['dataTable'],

	  data: function data() {
	    return {
	      currentPage: 1,
	      searchBy: '',
	      rows: [],
	      sort: {
	        sortBy: '',
	        desc: true
	      }
	    };
	  },


	  computed: {
	    filteredRows: function filteredRows() {
	      return this.filterRows(this.dataTable.rows, this.dataTable.options, this.currentPage);
	    },
	    lastPage: function lastPage() {
	      return Math.ceil(this.filteredRows.length / this.dataTable.options.pageCount);
	    },
	    centerPartPage: function centerPartPage() {
	      if (this.lastPage > 10 && this.currentPage >= 5) {
	        if (this.lastPage - this.currentPage > 5) {
	          return this.currentPage === this.lastPage ? [this.currentPage - 3, this.currentPage - 2, this.currentPage - 1] : [this.currentPage - 2, this.currentPage - 1, this.currentPage];
	        } else {
	          var r = [];

	          for (var i = this.lastPage - 6; i < this.lastPage; i++) {
	            r.push(i);
	          }
	          return r;
	        }
	      } else if (this.lastPage > 10) {
	        var _r = [];

	        for (var _i = 1; _i < 5; _i++) {
	          _r.push(_i);
	        }
	        return _r;
	      } else {
	        var _r2 = [];

	        for (var _i2 = 1; _i2 < this.lastPage; _i2++) {
	          _r2.push(_i2);
	        }
	        return _r2;
	      }
	    },
	    lastPartPage: function lastPartPage() {
	      if (this.lastPage > 10 && this.lastPage - this.currentPage > 5) {
	        return [this.lastPage - 1];
	      } else {
	        return [];
	      }
	    },
	    firstRow: function firstRow() {
	      return this.currentPage === 1 ? 0 : this.dataTable.options.pageCount * (this.currentPage - 1);
	    },
	    lastRow: function lastRow() {
	      return this.dataTable.options.pageCount * this.currentPage > this.filteredRows.length ? this.filteredRows.length : this.dataTable.options.pageCount * this.currentPage;
	    }
	  },

	  watch: {
	    'dataTable.rows': function dataTableRows(rows) {
	      var _this = this;

	      rows.forEach(function (row, index) {
	        var _loop = function _loop(key) {
	          var column = _this.dataTable.columns.filter(function (column) {
	            return column.value === key;
	          })[0];

	          row[key] = (0, _assign2.default)({
	            editable: column.editable,
	            editing: false,
	            tmpValue: ''
	          }, row[key]);
	        };

	        for (var key in row) {
	          _loop(key);
	        }

	        _this.dataTable.rows[index] = row;
	      });
	    },
	    'dataTable.columns': function dataTableColumns(columns) {
	      var _this2 = this;

	      columns.forEach(function (column, index) {
	        column = (0, _assign2.default)({
	          editable: false,
	          sortable: false
	        }, column);

	        _this2.dataTable.columns[index] = column;
	      });
	    },
	    'searchBy': function searchBy(val) {
	      if (val) {
	        this.currentPage = 1;
	      }
	    }
	  },

	  filters: {
	    pagination: function pagination(rows, currentPage, pageCount) {
	      return this.getPageRows(rows, currentPage, pageCount);
	    }
	  },

	  methods: {
	    onChangePageCount: function onChangePageCount() {
	      this.currentPage = 1;
	    },
	    filterRows: function filterRows(rows, options, currentPage) {
	      var _this3 = this;

	      rows = this.sort.sortBy ? this.sortRows(rows, this.sort.sortBy) : rows;

	      if (this.searchBy !== '') {
	        rows = rows.filter(function (row) {
	          var r = false;

	          for (var key in row) {
	            if (row[key].value.toString().toLowerCase().indexOf(_this3.searchBy.toLowerCase()) !== -1) {
	              r = true;
	            }
	          }

	          return r;
	        });
	      }

	      return rows;
	    },
	    getPageRows: function getPageRows(rows) {
	      return rows.slice(this.firstRow, this.lastRow);
	    },
	    togglePage: function togglePage(page) {
	      switch (page) {
	        case 'prev':
	          if (this.currentPage <= 1) return;
	          this.currentPage--;
	          break;
	        case 'next':
	          if (this.currentPage >= this.lastPage) return;
	          this.currentPage++;
	          break;
	        default:
	          if (this.currentPage == page) return;
	          this.currentPage = page;
	      }
	      if (this.dataTable.onPageChanged) {
	        this.dataTable.onPageChanged(this.currentPage);
	      }
	    },
	    sortBy: function sortBy(column) {
	      if (!column.sortable || !this.dataTable.options.sortable) return;

	      if (column.value === this.sort.sortBy) {
	        this.sort.desc = !this.sort.desc;
	      } else {
	        this.sort.sortBy = column.value;
	        this.sort.desc = true;
	      }
	    },
	    editField: function editField(field, key) {
	      if (!this.isEditable(field, key, true)) return;

	      field.tmpValue = field.value;
	      field.editing = true;
	    },
	    saveEdit: function saveEdit(field) {
	      field.value = field.tmpValue;
	      field.editing = false;
	      field.tmpValue = '';
	    },
	    cancelEdit: function cancelEdit(field) {
	      field.editing = false;
	      field.tmpValue = '';
	    },
	    sortRows: function sortRows(rows, sortBy) {
	      var _this4 = this;

	      var arr = rows.slice(0);

	      return arr.sort(function (a, b) {
	        var r = _this4.sort.desc ? a[sortBy].value < b[sortBy].value : a[sortBy].value > b[sortBy].value;

	        return r ? 1 : -1;
	      });
	    },
	    isSortable: function isSortable(column) {
	      return column.sortable && this.dataTable.options.sortable;
	    },
	    isEditable: function isEditable(field, key, beforeEditing) {
	      var column = this.dataTable.columns.filter(function (column) {
	        return column.value === key;
	      })[0];
	      if (beforeEditing) {
	        return field.editable && this.dataTable.options.editable && column.editable;
	      } else {
	        return field.editable && this.dataTable.options.editable && field.editing && column.editable;
	      }
	    }
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(10), __esModule: true };

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(11);
	module.exports = __webpack_require__(14).Object.assign;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(12);

	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(27) });

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(13),
	    core = __webpack_require__(14),
	    ctx = __webpack_require__(15),
	    hide = __webpack_require__(17),
	    PROTOTYPE = 'prototype';

	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      IS_WRAP = type & $export.W,
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      expProto = exports[PROTOTYPE],
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
	      key,
	      own,
	      out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? function (C) {
	      var F = function F(a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0:
	              return new C();
	            case 1:
	              return new C(a);
	            case 2:
	              return new C(a, b);
	          }return new C(a, b, c);
	        }return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	      // make static versions for prototype methods
	    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// optional / simple context binding
	var aFunction = __webpack_require__(16);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dP = __webpack_require__(18),
	    createDesc = __webpack_require__(26);
	module.exports = __webpack_require__(22) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var anObject = __webpack_require__(19),
	    IE8_DOM_DEFINE = __webpack_require__(21),
	    toPrimitive = __webpack_require__(25),
	    dP = Object.defineProperty;

	exports.f = __webpack_require__(22) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(20);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = !__webpack_require__(22) && !__webpack_require__(23)(function () {
	  return Object.defineProperty(__webpack_require__(24)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(23)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(20),
	    document = __webpack_require__(13).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(20);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)

	var getKeys = __webpack_require__(28),
	    gOPS = __webpack_require__(43),
	    pIE = __webpack_require__(44),
	    toObject = __webpack_require__(45),
	    IObject = __webpack_require__(32),
	    $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(23)(function () {
	  var A = {},
	      B = {},
	      S = Symbol(),
	      K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) {
	    B[k] = k;
	  });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject(target),
	      aLen = arguments.length,
	      index = 1,
	      getSymbols = gOPS.f,
	      isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]),
	        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
	        length = keys.length,
	        j = 0,
	        key;
	    while (length > j) {
	      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	    }
	  }return T;
	} : $assign;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(29),
	    enumBugKeys = __webpack_require__(42);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var has = __webpack_require__(30),
	    toIObject = __webpack_require__(31),
	    arrayIndexOf = __webpack_require__(35)(false),
	    IE_PROTO = __webpack_require__(39)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object),
	      i = 0,
	      result = [],
	      key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(32),
	    defined = __webpack_require__(34);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(33);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(31),
	    toLength = __webpack_require__(36),
	    toIndex = __webpack_require__(38);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this),
	        length = toLength(O.length),
	        index = toIndex(fromIndex, length),
	        value;
	    // Array#includes uses SameValueZero equality algorithm
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	      // Array#toIndex ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }
	    }return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(37),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";

	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toInteger = __webpack_require__(37),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var shared = __webpack_require__(40)('keys'),
	    uid = __webpack_require__(41);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(13),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(34);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"v-table\" _v-bfef3f54=\"\">\n  <div class=\"v-table-header\" _v-bfef3f54=\"\">\n    <div class=\"v-table-header-count\" _v-bfef3f54=\"\">\n      Show\n      <select v-model=\"dataTable.options.pageCount\" @change=\"onChangePageCount()\" _v-bfef3f54=\"\">\n        <option _v-bfef3f54=\"\">5</option>\n        <option _v-bfef3f54=\"\">10</option>\n        <option _v-bfef3f54=\"\">15</option>\n        <option _v-bfef3f54=\"\">20</option>\n      </select>\n      items each page\n    </div>\n\n    <div class=\"v-table-header-search\" _v-bfef3f54=\"\">\n      Search <input type=\"text\" v-model=\"searchBy\" _v-bfef3f54=\"\">\n    </div>\n  </div>\n  <table _v-bfef3f54=\"\">\n    <thead _v-bfef3f54=\"\">\n      <tr _v-bfef3f54=\"\">\n        <th v-for=\"column in dataTable.columns\" @click=\"sortBy(column)\" :class=\"{sort: isSortable(column), \n                     desc: sort.sortBy === column.value &amp;&amp; sort.desc,\n                     asc: sort.sortBy === column.value &amp;&amp; !sort.desc}\" _v-bfef3f54=\"\">{{column.text}}</th>\n      </tr>\n    </thead>\n\n    <tbody _v-bfef3f54=\"\">\n      <tr v-for=\"row in filteredRows | pagination currentPage dataTable.optionts.pageCount\" track-by=\"$index\" _v-bfef3f54=\"\">\n        <td v-for=\"(key, item) in row\" @click=\"editField(item, key)\" _v-bfef3f54=\"\">\n          <span v-if=\"!item.editing\" _v-bfef3f54=\"\">{{item.value}}</span>\n          <template v-if=\"isEditable(item, key)\">\n            <input type=\"text\" v-model=\"item.tmpValue\" _v-bfef3f54=\"\">\n            <button type=\"button\" @click.stop=\"saveEdit(item)\" _v-bfef3f54=\"\">Save</button>\n            <button type=\"button\" @click.stop=\"cancelEdit(item)\" _v-bfef3f54=\"\">Cancel</button>\n          </template>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div class=\"v-table-footer\" _v-bfef3f54=\"\">\n    <div class=\"v-table-footer-info\" _v-bfef3f54=\"\">\n      Showing {{firstRow + 1}} to {{lastRow}} of {{filteredRows.length}} items\n    </div>\n\n    <div class=\"v-table-footer-page\" v-if=\"lastPage !== 1\" _v-bfef3f54=\"\">\n      <a class=\"v-table-footer-page-btn\" href=\"javascript:;\" @click=\"togglePage('prev')\" :class=\"{disabled: currentPage == 1}\" _v-bfef3f54=\"\">Prev</a>\n      <a class=\"v-table-footer-page-btn\" href=\"javascript:;\" :class=\"{current: currentPage == 1}\" @click=\"togglePage(1)\" _v-bfef3f54=\"\">1</a>\n      <span v-if=\"currentPage >= 5 &amp;&amp; lastPage > 10\" _v-bfef3f54=\"\">...</span>\n      <a class=\"v-table-footer-page-btn\" href=\"javascript:;\" :class=\"{current: currentPage == page + 1}\" @click=\"togglePage(page + 1)\" v-for=\"page in centerPartPage\" _v-bfef3f54=\"\">{{page + 1}}</a>\n      <span v-if=\"lastPage > 10 &amp;&amp; lastPage - currentPage > 5\" _v-bfef3f54=\"\">...</span>\n      <a class=\"v-table-footer-page-btn\" href=\"javascript:;\" :class=\"{current: currentPage == page + 1}\" @click=\"togglePage(page + 1)\" v-for=\"page in lastPartPage\" _v-bfef3f54=\"\">{{page + 1}}</a>\n      <a class=\"v-table-footer-page-btn\" href=\"javascript:;\" @click=\"togglePage('next')\" :class=\"{disabled: currentPage == lastPage}\" _v-bfef3f54=\"\">Next</a>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};//  Chance.js 1.0.4
	//  http://chancejs.com
	//  (c) 2013 Victor Quinn
	//  Chance may be freely distributed or modified under the MIT license.
	(function(){// Constants
	var MAX_INT=9007199254740992;var MIN_INT=-MAX_INT;var NUMBERS='0123456789';var CHARS_LOWER='abcdefghijklmnopqrstuvwxyz';var CHARS_UPPER=CHARS_LOWER.toUpperCase();var HEX_POOL=NUMBERS+"abcdef";// Cached array helpers
	var slice=Array.prototype.slice;// Constructor
	function Chance(seed){if(!(this instanceof Chance)){return seed==null?new Chance():new Chance(seed);}// if user has provided a function, use that as the generator
	if(typeof seed==='function'){this.random=seed;return this;}if(arguments.length){// set a starting value of zero so we can add to it
	this.seed=0;}// otherwise, leave this.seed blank so that MT will receive a blank
	for(var i=0;i<arguments.length;i++){var seedling=0;if(Object.prototype.toString.call(arguments[i])==='[object String]'){for(var j=0;j<arguments[i].length;j++){// create a numeric hash for each argument, add to seedling
	var hash=0;for(var k=0;k<arguments[i].length;k++){hash=arguments[i].charCodeAt(k)+(hash<<6)+(hash<<16)-hash;}seedling+=hash;}}else{seedling=arguments[i];}this.seed+=(arguments.length-i)*seedling;}// If no generator function was provided, use our MT
	this.mt=this.mersenne_twister(this.seed);this.bimd5=this.blueimp_md5();this.random=function(){return this.mt.random(this.seed);};return this;}Chance.prototype.VERSION="1.0.4";// Random helper functions
	function initOptions(options,defaults){options||(options={});if(defaults){for(var i in defaults){if(typeof options[i]==='undefined'){options[i]=defaults[i];}}}return options;}function testRange(test,errorMessage){if(test){throw new RangeError(errorMessage);}}/**
	     * Encode the input string with Base64.
	     */var base64=function base64(){throw new Error('No Base64 encoder available.');};// Select proper Base64 encoder.
	(function determineBase64Encoder(){if(typeof btoa==='function'){base64=btoa;}else if(typeof Buffer==='function'){base64=function base64(input){return new Buffer(input).toString('base64');};}})();// -- Basics --
	/**
	     *  Return a random bool, either true or false
	     *
	     *  @param {Object} [options={ likelihood: 50 }] alter the likelihood of
	     *    receiving a true or false value back.
	     *  @throws {RangeError} if the likelihood is out of bounds
	     *  @returns {Bool} either true or false
	     */Chance.prototype.bool=function(options){// likelihood of success (true)
	options=initOptions(options,{likelihood:50});// Note, we could get some minor perf optimizations by checking range
	// prior to initializing defaults, but that makes code a bit messier
	// and the check more complicated as we have to check existence of
	// the object then existence of the key before checking constraints.
	// Since the options initialization should be minor computationally,
	// decision made for code cleanliness intentionally. This is mentioned
	// here as it's the first occurrence, will not be mentioned again.
	testRange(options.likelihood<0||options.likelihood>100,"Chance: Likelihood accepts values from 0 to 100.");return this.random()*100<options.likelihood;};/**
	     *  Return a random character.
	     *
	     *  @param {Object} [options={}] can specify a character pool, only alpha,
	     *    only symbols, and casing (lower or upper)
	     *  @returns {String} a single random character
	     *  @throws {RangeError} Can only specify alpha or symbols, not both
	     */Chance.prototype.character=function(options){options=initOptions(options);testRange(options.alpha&&options.symbols,"Chance: Cannot specify both alpha and symbols.");var symbols="!@#$%^&*()[]",letters,pool;if(options.casing==='lower'){letters=CHARS_LOWER;}else if(options.casing==='upper'){letters=CHARS_UPPER;}else{letters=CHARS_LOWER+CHARS_UPPER;}if(options.pool){pool=options.pool;}else if(options.alpha){pool=letters;}else if(options.symbols){pool=symbols;}else{pool=letters+NUMBERS+symbols;}return pool.charAt(this.natural({max:pool.length-1}));};// Note, wanted to use "float" or "double" but those are both JS reserved words.
	// Note, fixed means N OR LESS digits after the decimal. This because
	// It could be 14.9000 but in JavaScript, when this is cast as a number,
	// the trailing zeroes are dropped. Left to the consumer if trailing zeroes are
	// needed
	/**
	     *  Return a random floating point number
	     *
	     *  @param {Object} [options={}] can specify a fixed precision, min, max
	     *  @returns {Number} a single floating point number
	     *  @throws {RangeError} Can only specify fixed or precision, not both. Also
	     *    min cannot be greater than max
	     */Chance.prototype.floating=function(options){options=initOptions(options,{fixed:4});testRange(options.fixed&&options.precision,"Chance: Cannot specify both fixed and precision.");var num;var fixed=Math.pow(10,options.fixed);var max=MAX_INT/fixed;var min=-max;testRange(options.min&&options.fixed&&options.min<min,"Chance: Min specified is out of range with fixed. Min should be, at least, "+min);testRange(options.max&&options.fixed&&options.max>max,"Chance: Max specified is out of range with fixed. Max should be, at most, "+max);options=initOptions(options,{min:min,max:max});// Todo - Make this work!
	// options.precision = (typeof options.precision !== "undefined") ? options.precision : false;
	num=this.integer({min:options.min*fixed,max:options.max*fixed});var num_fixed=(num/fixed).toFixed(options.fixed);return parseFloat(num_fixed);};/**
	     *  Return a random integer
	     *
	     *  NOTE the max and min are INCLUDED in the range. So:
	     *  chance.integer({min: 1, max: 3});
	     *  would return either 1, 2, or 3.
	     *
	     *  @param {Object} [options={}] can specify a min and/or max
	     *  @returns {Number} a single random integer number
	     *  @throws {RangeError} min cannot be greater than max
	     */Chance.prototype.integer=function(options){// 9007199254740992 (2^53) is the max integer number in JavaScript
	// See: http://vq.io/132sa2j
	options=initOptions(options,{min:MIN_INT,max:MAX_INT});testRange(options.min>options.max,"Chance: Min cannot be greater than Max.");return Math.floor(this.random()*(options.max-options.min+1)+options.min);};/**
	     *  Return a random natural
	     *
	     *  NOTE the max and min are INCLUDED in the range. So:
	     *  chance.natural({min: 1, max: 3});
	     *  would return either 1, 2, or 3.
	     *
	     *  @param {Object} [options={}] can specify a min and/or max
	     *  @returns {Number} a single random integer number
	     *  @throws {RangeError} min cannot be greater than max
	     */Chance.prototype.natural=function(options){options=initOptions(options,{min:0,max:MAX_INT});testRange(options.min<0,"Chance: Min cannot be less than zero.");return this.integer(options);};/**
	     *  Return a random string
	     *
	     *  @param {Object} [options={}] can specify a length
	     *  @returns {String} a string of random length
	     *  @throws {RangeError} length cannot be less than zero
	     */Chance.prototype.string=function(options){options=initOptions(options,{length:this.natural({min:5,max:20})});testRange(options.length<0,"Chance: Length cannot be less than zero.");var length=options.length,text=this.n(this.character,length,options);return text.join("");};// -- End Basics --
	// -- Helpers --
	Chance.prototype.capitalize=function(word){return word.charAt(0).toUpperCase()+word.substr(1);};Chance.prototype.mixin=function(obj){for(var func_name in obj){Chance.prototype[func_name]=obj[func_name];}return this;};/**
	     *  Given a function that generates something random and a number of items to generate,
	     *    return an array of items where none repeat.
	     *
	     *  @param {Function} fn the function that generates something random
	     *  @param {Number} num number of terms to generate
	     *  @param {Object} options any options to pass on to the generator function
	     *  @returns {Array} an array of length `num` with every item generated by `fn` and unique
	     *
	     *  There can be more parameters after these. All additional parameters are provided to the given function
	     */Chance.prototype.unique=function(fn,num,options){testRange(typeof fn!=="function","Chance: The first argument must be a function.");var comparator=function comparator(arr,val){return arr.indexOf(val)!==-1;};if(options){comparator=options.comparator||comparator;}var arr=[],count=0,result,MAX_DUPLICATES=num*50,params=slice.call(arguments,2);while(arr.length<num){var clonedParams=JSON.parse(JSON.stringify(params));result=fn.apply(this,clonedParams);if(!comparator(arr,result)){arr.push(result);// reset count when unique found
	count=0;}if(++count>MAX_DUPLICATES){throw new RangeError("Chance: num is likely too large for sample set");}}return arr;};/**
	     *  Gives an array of n random terms
	     *
	     *  @param {Function} fn the function that generates something random
	     *  @param {Number} n number of terms to generate
	     *  @returns {Array} an array of length `n` with items generated by `fn`
	     *
	     *  There can be more parameters after these. All additional parameters are provided to the given function
	     */Chance.prototype.n=function(fn,n){testRange(typeof fn!=="function","Chance: The first argument must be a function.");if(typeof n==='undefined'){n=1;}var i=n,arr=[],params=slice.call(arguments,2);// Providing a negative count should result in a noop.
	i=Math.max(0,i);for(null;i--;null){arr.push(fn.apply(this,params));}return arr;};// H/T to SO for this one: http://vq.io/OtUrZ5
	Chance.prototype.pad=function(number,width,pad){// Default pad to 0 if none provided
	pad=pad||'0';// Convert number to a string
	number=number+'';return number.length>=width?number:new Array(width-number.length+1).join(pad)+number;};// DEPRECATED on 2015-10-01
	Chance.prototype.pick=function(arr,count){if(arr.length===0){throw new RangeError("Chance: Cannot pick() from an empty array");}if(!count||count===1){return arr[this.natural({max:arr.length-1})];}else{return this.shuffle(arr).slice(0,count);}};// Given an array, returns a single random element
	Chance.prototype.pickone=function(arr){if(arr.length===0){throw new RangeError("Chance: Cannot pickone() from an empty array");}return arr[this.natural({max:arr.length-1})];};// Given an array, returns a random set with 'count' elements
	Chance.prototype.pickset=function(arr,count){if(count===0){return[];}if(arr.length===0){throw new RangeError("Chance: Cannot pickset() from an empty array");}if(count<0){throw new RangeError("Chance: count must be positive number");}if(!count||count===1){return[this.pickone(arr)];}else{return this.shuffle(arr).slice(0,count);}};Chance.prototype.shuffle=function(arr){var old_array=arr.slice(0),new_array=[],j=0,length=Number(old_array.length);for(var i=0;i<length;i++){// Pick a random index from the array
	j=this.natural({max:old_array.length-1});// Add it to the new array
	new_array[i]=old_array[j];// Remove that element from the original array
	old_array.splice(j,1);}return new_array;};// Returns a single item from an array with relative weighting of odds
	Chance.prototype.weighted=function(arr,weights,trim){if(arr.length!==weights.length){throw new RangeError("Chance: length of array and weights must match");}// scan weights array and sum valid entries
	var sum=0;var val;for(var weightIndex=0;weightIndex<weights.length;++weightIndex){val=weights[weightIndex];if(val>0){sum+=val;}}if(sum===0){throw new RangeError("Chance: no valid entries in array weights");}// select a value within range
	var selected=this.random()*sum;// find array entry corresponding to selected value
	var total=0;var lastGoodIdx=-1;var chosenIdx;for(weightIndex=0;weightIndex<weights.length;++weightIndex){val=weights[weightIndex];total+=val;if(val>0){if(selected<=total){chosenIdx=weightIndex;break;}lastGoodIdx=weightIndex;}// handle any possible rounding error comparison to ensure something is picked
	if(weightIndex===weights.length-1){chosenIdx=lastGoodIdx;}}var chosen=arr[chosenIdx];trim=typeof trim==='undefined'?false:trim;if(trim){arr.splice(chosenIdx,1);weights.splice(chosenIdx,1);}return chosen;};// -- End Helpers --
	// -- Text --
	Chance.prototype.paragraph=function(options){options=initOptions(options);var sentences=options.sentences||this.natural({min:3,max:7}),sentence_array=this.n(this.sentence,sentences);return sentence_array.join(' ');};// Could get smarter about this than generating random words and
	// chaining them together. Such as: http://vq.io/1a5ceOh
	Chance.prototype.sentence=function(options){options=initOptions(options);var words=options.words||this.natural({min:12,max:18}),punctuation=options.punctuation,text,word_array=this.n(this.word,words);text=word_array.join(' ');// Capitalize first letter of sentence
	text=this.capitalize(text);// Make sure punctuation has a usable value
	if(punctuation!==false&&!/^[\.\?;!:]$/.test(punctuation)){punctuation='.';}// Add punctuation mark
	if(punctuation){text+=punctuation;}return text;};Chance.prototype.syllable=function(options){options=initOptions(options);var length=options.length||this.natural({min:2,max:3}),consonants='bcdfghjklmnprstvwz',// consonants except hard to speak ones
	vowels='aeiou',// vowels
	all=consonants+vowels,// all
	text='',chr;// I'm sure there's a more elegant way to do this, but this works
	// decently well.
	for(var i=0;i<length;i++){if(i===0){// First character can be anything
	chr=this.character({pool:all});}else if(consonants.indexOf(chr)===-1){// Last character was a vowel, now we want a consonant
	chr=this.character({pool:consonants});}else{// Last character was a consonant, now we want a vowel
	chr=this.character({pool:vowels});}text+=chr;}if(options.capitalize){text=this.capitalize(text);}return text;};Chance.prototype.word=function(options){options=initOptions(options);testRange(options.syllables&&options.length,"Chance: Cannot specify both syllables AND length.");var syllables=options.syllables||this.natural({min:1,max:3}),text='';if(options.length){// Either bound word by length
	do{text+=this.syllable();}while(text.length<options.length);text=text.substring(0,options.length);}else{// Or by number of syllables
	for(var i=0;i<syllables;i++){text+=this.syllable();}}if(options.capitalize){text=this.capitalize(text);}return text;};// -- End Text --
	// -- Person --
	Chance.prototype.age=function(options){options=initOptions(options);var ageRange;switch(options.type){case'child':ageRange={min:0,max:12};break;case'teen':ageRange={min:13,max:19};break;case'adult':ageRange={min:18,max:65};break;case'senior':ageRange={min:65,max:100};break;case'all':ageRange={min:0,max:100};break;default:ageRange={min:18,max:65};break;}return this.natural(ageRange);};Chance.prototype.birthday=function(options){var age=this.age(options);var currentYear=new Date().getFullYear();if(options&&options.type){var min=new Date();var max=new Date();min.setFullYear(currentYear-age-1);max.setFullYear(currentYear-age);options=initOptions(options,{min:min,max:max});}else{options=initOptions(options,{year:currentYear-age});}return this.date(options);};// CPF; ID to identify taxpayers in Brazil
	Chance.prototype.cpf=function(options){options=initOptions(options,{formatted:true});var n=this.n(this.natural,9,{max:9});var d1=n[8]*2+n[7]*3+n[6]*4+n[5]*5+n[4]*6+n[3]*7+n[2]*8+n[1]*9+n[0]*10;d1=11-d1%11;if(d1>=10){d1=0;}var d2=d1*2+n[8]*3+n[7]*4+n[6]*5+n[5]*6+n[4]*7+n[3]*8+n[2]*9+n[1]*10+n[0]*11;d2=11-d2%11;if(d2>=10){d2=0;}var cpf=''+n[0]+n[1]+n[2]+'.'+n[3]+n[4]+n[5]+'.'+n[6]+n[7]+n[8]+'-'+d1+d2;return options.formatted?cpf:cpf.replace(/\D/g,'');};// CNPJ: ID to identify companies in Brazil
	Chance.prototype.cnpj=function(options){options=initOptions(options,{formatted:true});var n=this.n(this.natural,12,{max:12});var d1=n[11]*2+n[10]*3+n[9]*4+n[8]*5+n[7]*6+n[6]*7+n[5]*8+n[4]*9+n[3]*2+n[2]*3+n[1]*4+n[0]*5;d1=11-d1%11;if(d1<2){d1=0;}var d2=d1*2+n[11]*3+n[10]*4+n[9]*5+n[8]*6+n[7]*7+n[6]*8+n[5]*9+n[4]*2+n[3]*3+n[2]*4+n[1]*5+n[0]*6;d2=11-d2%11;if(d2<2){d2=0;}var cnpj=''+n[0]+n[1]+'.'+n[2]+n[3]+n[4]+'.'+n[5]+n[6]+n[7]+'/'+n[8]+n[9]+n[10]+n[11]+'-'+d1+d2;return options.formatted?cnpj:cnpj.replace(/\D/g,'');};Chance.prototype.first=function(options){options=initOptions(options,{gender:this.gender(),nationality:'en'});return this.pick(this.get("firstNames")[options.gender.toLowerCase()][options.nationality.toLowerCase()]);};Chance.prototype.gender=function(options){options=initOptions(options,{extraGenders:[]});return this.pick(['Male','Female'].concat(options.extraGenders));};Chance.prototype.last=function(options){options=initOptions(options,{nationality:'en'});return this.pick(this.get("lastNames")[options.nationality.toLowerCase()]);};Chance.prototype.israelId=function(){var x=this.string({pool:'0123456789',length:8});var y=0;for(var i=0;i<x.length;i++){var thisDigit=x[i]*(i/2===parseInt(i/2)?1:2);thisDigit=this.pad(thisDigit,2).toString();thisDigit=parseInt(thisDigit[0])+parseInt(thisDigit[1]);y=y+thisDigit;}x=x+(10-parseInt(y.toString().slice(-1))).toString().slice(-1);return x;};Chance.prototype.mrz=function(options){var checkDigit=function checkDigit(input){var alpha="<ABCDEFGHIJKLMNOPQRSTUVWXYXZ".split(''),multipliers=[7,3,1],runningTotal=0;if(typeof input!=='string'){input=input.toString();}input.split('').forEach(function(character,idx){var pos=alpha.indexOf(character);if(pos!==-1){character=pos===0?0:pos+9;}else{character=parseInt(character,10);}character*=multipliers[idx%multipliers.length];runningTotal+=character;});return runningTotal%10;};var generate=function generate(opts){var pad=function pad(length){return new Array(length+1).join('<');};var number=['P<',opts.issuer,opts.last.toUpperCase(),'<<',opts.first.toUpperCase(),pad(39-(opts.last.length+opts.first.length+2)),opts.passportNumber,checkDigit(opts.passportNumber),opts.nationality,opts.dob,checkDigit(opts.dob),opts.gender,opts.expiry,checkDigit(opts.expiry),pad(14),checkDigit(pad(14))].join('');return number+checkDigit(number.substr(44,10)+number.substr(57,7)+number.substr(65,7));};var that=this;options=initOptions(options,{first:this.first(),last:this.last(),passportNumber:this.integer({min:100000000,max:999999999}),dob:function(){var date=that.birthday({type:'adult'});return[date.getFullYear().toString().substr(2),that.pad(date.getMonth()+1,2),that.pad(date.getDate(),2)].join('');}(),expiry:function(){var date=new Date();return[(date.getFullYear()+5).toString().substr(2),that.pad(date.getMonth()+1,2),that.pad(date.getDate(),2)].join('');}(),gender:this.gender()==='Female'?'F':'M',issuer:'GBR',nationality:'GBR'});return generate(options);};Chance.prototype.name=function(options){options=initOptions(options);var first=this.first(options),last=this.last(options),name;if(options.middle){name=first+' '+this.first(options)+' '+last;}else if(options.middle_initial){name=first+' '+this.character({alpha:true,casing:'upper'})+'. '+last;}else{name=first+' '+last;}if(options.prefix){name=this.prefix(options)+' '+name;}if(options.suffix){name=name+' '+this.suffix(options);}return name;};// Return the list of available name prefixes based on supplied gender.
	// @todo introduce internationalization
	Chance.prototype.name_prefixes=function(gender){gender=gender||"all";gender=gender.toLowerCase();var prefixes=[{name:'Doctor',abbreviation:'Dr.'}];if(gender==="male"||gender==="all"){prefixes.push({name:'Mister',abbreviation:'Mr.'});}if(gender==="female"||gender==="all"){prefixes.push({name:'Miss',abbreviation:'Miss'});prefixes.push({name:'Misses',abbreviation:'Mrs.'});}return prefixes;};// Alias for name_prefix
	Chance.prototype.prefix=function(options){return this.name_prefix(options);};Chance.prototype.name_prefix=function(options){options=initOptions(options,{gender:"all"});return options.full?this.pick(this.name_prefixes(options.gender)).name:this.pick(this.name_prefixes(options.gender)).abbreviation;};//Hungarian ID number
	Chance.prototype.HIDN=function(){//Hungarian ID nuber structure: XXXXXXYY (X=number,Y=Capital Latin letter)
	var idn_pool="0123456789";var idn_chrs="ABCDEFGHIJKLMNOPQRSTUVWXYXZ";var idn="";idn+=this.string({pool:idn_pool,length:6});idn+=this.string({pool:idn_chrs,length:2});return idn;};Chance.prototype.ssn=function(options){options=initOptions(options,{ssnFour:false,dashes:true});var ssn_pool="1234567890",ssn,dash=options.dashes?'-':'';if(!options.ssnFour){ssn=this.string({pool:ssn_pool,length:3})+dash+this.string({pool:ssn_pool,length:2})+dash+this.string({pool:ssn_pool,length:4});}else{ssn=this.string({pool:ssn_pool,length:4});}return ssn;};// Return the list of available name suffixes
	// @todo introduce internationalization
	Chance.prototype.name_suffixes=function(){var suffixes=[{name:'Doctor of Osteopathic Medicine',abbreviation:'D.O.'},{name:'Doctor of Philosophy',abbreviation:'Ph.D.'},{name:'Esquire',abbreviation:'Esq.'},{name:'Junior',abbreviation:'Jr.'},{name:'Juris Doctor',abbreviation:'J.D.'},{name:'Master of Arts',abbreviation:'M.A.'},{name:'Master of Business Administration',abbreviation:'M.B.A.'},{name:'Master of Science',abbreviation:'M.S.'},{name:'Medical Doctor',abbreviation:'M.D.'},{name:'Senior',abbreviation:'Sr.'},{name:'The Third',abbreviation:'III'},{name:'The Fourth',abbreviation:'IV'},{name:'Bachelor of Engineering',abbreviation:'B.E'},{name:'Bachelor of Technology',abbreviation:'B.TECH'}];return suffixes;};// Alias for name_suffix
	Chance.prototype.suffix=function(options){return this.name_suffix(options);};Chance.prototype.name_suffix=function(options){options=initOptions(options);return options.full?this.pick(this.name_suffixes()).name:this.pick(this.name_suffixes()).abbreviation;};Chance.prototype.nationalities=function(){return this.get("nationalities");};// Generate random nationality based on json list
	Chance.prototype.nationality=function(){var nationality=this.pick(this.nationalities());return nationality.name;};// -- End Person --
	// -- Mobile --
	// Android GCM Registration ID
	Chance.prototype.android_id=function(){return"APA91"+this.string({pool:"0123456789abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_",length:178});};// Apple Push Token
	Chance.prototype.apple_token=function(){return this.string({pool:"abcdef1234567890",length:64});};// Windows Phone 8 ANID2
	Chance.prototype.wp8_anid2=function(){return base64(this.hash({length:32}));};// Windows Phone 7 ANID
	Chance.prototype.wp7_anid=function(){return'A='+this.guid().replace(/-/g,'').toUpperCase()+'&E='+this.hash({length:3})+'&W='+this.integer({min:0,max:9});};// BlackBerry Device PIN
	Chance.prototype.bb_pin=function(){return this.hash({length:8});};// -- End Mobile --
	// -- Web --
	Chance.prototype.avatar=function(options){var url=null;var URL_BASE='//www.gravatar.com/avatar/';var PROTOCOLS={http:'http',https:'https'};var FILE_TYPES={bmp:'bmp',gif:'gif',jpg:'jpg',png:'png'};var FALLBACKS={'404':'404',// Return 404 if not found
	mm:'mm',// Mystery man
	identicon:'identicon',// Geometric pattern based on hash
	monsterid:'monsterid',// A generated monster icon
	wavatar:'wavatar',// A generated face
	retro:'retro',// 8-bit icon
	blank:'blank'// A transparent png
	};var RATINGS={g:'g',pg:'pg',r:'r',x:'x'};var opts={protocol:null,email:null,fileExtension:null,size:null,fallback:null,rating:null};if(!options){// Set to a random email
	opts.email=this.email();options={};}else if(typeof options==='string'){opts.email=options;options={};}else if((typeof options==='undefined'?'undefined':_typeof(options))!=='object'){return null;}else if(options.constructor==='Array'){return null;}opts=initOptions(options,opts);if(!opts.email){// Set to a random email
	opts.email=this.email();}// Safe checking for params
	opts.protocol=PROTOCOLS[opts.protocol]?opts.protocol+':':'';opts.size=parseInt(opts.size,0)?opts.size:'';opts.rating=RATINGS[opts.rating]?opts.rating:'';opts.fallback=FALLBACKS[opts.fallback]?opts.fallback:'';opts.fileExtension=FILE_TYPES[opts.fileExtension]?opts.fileExtension:'';url=opts.protocol+URL_BASE+this.bimd5.md5(opts.email)+(opts.fileExtension?'.'+opts.fileExtension:'')+(opts.size||opts.rating||opts.fallback?'?':'')+(opts.size?'&s='+opts.size.toString():'')+(opts.rating?'&r='+opts.rating:'')+(opts.fallback?'&d='+opts.fallback:'');return url;};/**
	     * #Description:
	     * ===============================================
	     * Generate random color value base on color type:
	     * -> hex
	     * -> rgb
	     * -> rgba
	     * -> 0x
	     * -> named color
	     *
	     * #Examples:
	     * ===============================================
	     * * Geerate random hex color
	     * chance.color() => '#79c157' / 'rgb(110,52,164)' / '0x67ae0b' / '#e2e2e2' / '#29CFA7'
	     *
	     * * Generate Hex based color value
	     * chance.color({format: 'hex'})    => '#d67118'
	     *
	     * * Generate simple rgb value
	     * chance.color({format: 'rgb'})    => 'rgb(110,52,164)'
	     *
	     * * Generate Ox based color value
	     * chance.color({format: '0x'})     => '0x67ae0b'
	     *
	     * * Generate graiscale based value
	     * chance.color({grayscale: true})  => '#e2e2e2'
	     *
	     * * Return valide color name
	     * chance.color({format: 'name'})   => 'red'
	     *
	     * * Make color uppercase
	     * chance.color({casing: 'upper'})  => '#29CFA7'
	     *
	     * @param  [object] options
	     * @return [string] color value
	     */Chance.prototype.color=function(options){function gray(value,delimiter){return[value,value,value].join(delimiter||'');}function rgb(hasAlpha){var rgbValue=hasAlpha?'rgba':'rgb';var alphaChanal=hasAlpha?','+this.floating({min:0,max:1}):"";var colorValue=isGrayscale?gray(this.natural({max:255}),','):this.natural({max:255})+','+this.natural({max:255})+','+this.natural({max:255});return rgbValue+'('+colorValue+alphaChanal+')';}function hex(start,end,withHash){var simbol=withHash?"#":"";var expression=isGrayscale?gray(this.hash({length:start})):this.hash({length:end});return simbol+expression;}options=initOptions(options,{format:this.pick(['hex','shorthex','rgb','rgba','0x','name']),grayscale:false,casing:'lower'});var isGrayscale=options.grayscale;var colorValue;if(options.format==='hex'){colorValue=hex.call(this,2,6,true);}else if(options.format==='shorthex'){colorValue=hex.call(this,1,3,true);}else if(options.format==='rgb'){colorValue=rgb.call(this,false);}else if(options.format==='rgba'){colorValue=rgb.call(this,true);}else if(options.format==='0x'){colorValue='0x'+hex.call(this,2,6);}else if(options.format==='name'){return this.pick(this.get("colorNames"));}else{throw new RangeError('Invalid format provided. Please provide one of "hex", "shorthex", "rgb", "rgba", "0x" or "name".');}if(options.casing==='upper'){colorValue=colorValue.toUpperCase();}return colorValue;};Chance.prototype.domain=function(options){options=initOptions(options);return this.word()+'.'+(options.tld||this.tld());};Chance.prototype.email=function(options){options=initOptions(options);return this.word({length:options.length})+'@'+(options.domain||this.domain());};Chance.prototype.fbid=function(){return parseInt('10000'+this.natural({max:100000000000}),10);};Chance.prototype.google_analytics=function(){var account=this.pad(this.natural({max:999999}),6);var property=this.pad(this.natural({max:99}),2);return'UA-'+account+'-'+property;};Chance.prototype.hashtag=function(){return'#'+this.word();};Chance.prototype.ip=function(){// Todo: This could return some reserved IPs. See http://vq.io/137dgYy
	// this should probably be updated to account for that rare as it may be
	return this.natural({min:1,max:254})+'.'+this.natural({max:255})+'.'+this.natural({max:255})+'.'+this.natural({min:1,max:254});};Chance.prototype.ipv6=function(){var ip_addr=this.n(this.hash,8,{length:4});return ip_addr.join(":");};Chance.prototype.klout=function(){return this.natural({min:1,max:99});};Chance.prototype.semver=function(options){options=initOptions(options,{include_prerelease:true});var range=this.pickone(["^","~","<",">","<=",">=","="]);if(options.range){range=options.range;}var prerelease="";if(options.include_prerelease){prerelease=this.weighted(["","-dev","-beta","-alpha"],[50,10,5,1]);}return range+this.rpg('3d10').join('.')+prerelease;};Chance.prototype.tlds=function(){return['com','org','edu','gov','co.uk','net','io','ac','ad','ae','af','ag','ai','al','am','an','ao','aq','ar','as','at','au','aw','ax','az','ba','bb','bd','be','bf','bg','bh','bi','bj','bm','bn','bo','bq','br','bs','bt','bv','bw','by','bz','ca','cc','cd','cf','cg','ch','ci','ck','cl','cm','cn','co','cr','cu','cv','cw','cx','cy','cz','de','dj','dk','dm','do','dz','ec','ee','eg','eh','er','es','et','eu','fi','fj','fk','fm','fo','fr','ga','gb','gd','ge','gf','gg','gh','gi','gl','gm','gn','gp','gq','gr','gs','gt','gu','gw','gy','hk','hm','hn','hr','ht','hu','id','ie','il','im','in','io','iq','ir','is','it','je','jm','jo','jp','ke','kg','kh','ki','km','kn','kp','kr','kw','ky','kz','la','lb','lc','li','lk','lr','ls','lt','lu','lv','ly','ma','mc','md','me','mg','mh','mk','ml','mm','mn','mo','mp','mq','mr','ms','mt','mu','mv','mw','mx','my','mz','na','nc','ne','nf','ng','ni','nl','no','np','nr','nu','nz','om','pa','pe','pf','pg','ph','pk','pl','pm','pn','pr','ps','pt','pw','py','qa','re','ro','rs','ru','rw','sa','sb','sc','sd','se','sg','sh','si','sj','sk','sl','sm','sn','so','sr','ss','st','su','sv','sx','sy','sz','tc','td','tf','tg','th','tj','tk','tl','tm','tn','to','tp','tr','tt','tv','tw','tz','ua','ug','uk','us','uy','uz','va','vc','ve','vg','vi','vn','vu','wf','ws','ye','yt','za','zm','zw'];};Chance.prototype.tld=function(){return this.pick(this.tlds());};Chance.prototype.twitter=function(){return'@'+this.word();};Chance.prototype.url=function(options){options=initOptions(options,{protocol:"http",domain:this.domain(options),domain_prefix:"",path:this.word(),extensions:[]});var extension=options.extensions.length>0?"."+this.pick(options.extensions):"";var domain=options.domain_prefix?options.domain_prefix+"."+options.domain:options.domain;return options.protocol+"://"+domain+"/"+options.path+extension;};// -- End Web --
	// -- Location --
	Chance.prototype.address=function(options){options=initOptions(options);return this.natural({min:5,max:2000})+' '+this.street(options);};Chance.prototype.altitude=function(options){options=initOptions(options,{fixed:5,min:0,max:8848});return this.floating({min:options.min,max:options.max,fixed:options.fixed});};Chance.prototype.areacode=function(options){options=initOptions(options,{parens:true});// Don't want area codes to start with 1, or have a 9 as the second digit
	var areacode=this.natural({min:2,max:9}).toString()+this.natural({min:0,max:8}).toString()+this.natural({min:0,max:9}).toString();return options.parens?'('+areacode+')':areacode;};Chance.prototype.city=function(){return this.capitalize(this.word({syllables:3}));};Chance.prototype.coordinates=function(options){return this.latitude(options)+', '+this.longitude(options);};Chance.prototype.countries=function(){return this.get("countries");};Chance.prototype.country=function(options){options=initOptions(options);var country=this.pick(this.countries());return options.full?country.name:country.abbreviation;};Chance.prototype.depth=function(options){options=initOptions(options,{fixed:5,min:-10994,max:0});return this.floating({min:options.min,max:options.max,fixed:options.fixed});};Chance.prototype.geohash=function(options){options=initOptions(options,{length:7});return this.string({length:options.length,pool:'0123456789bcdefghjkmnpqrstuvwxyz'});};Chance.prototype.geojson=function(options){return this.latitude(options)+', '+this.longitude(options)+', '+this.altitude(options);};Chance.prototype.latitude=function(options){options=initOptions(options,{fixed:5,min:-90,max:90});return this.floating({min:options.min,max:options.max,fixed:options.fixed});};Chance.prototype.longitude=function(options){options=initOptions(options,{fixed:5,min:-180,max:180});return this.floating({min:options.min,max:options.max,fixed:options.fixed});};Chance.prototype.phone=function(options){var self=this,numPick,ukNum=function ukNum(parts){var section=[];//fills the section part of the phone number with random numbers.
	parts.sections.forEach(function(n){section.push(self.string({pool:'0123456789',length:n}));});return parts.area+section.join(' ');};options=initOptions(options,{formatted:true,country:'us',mobile:false});if(!options.formatted){options.parens=false;}var phone;switch(options.country){case'fr':if(!options.mobile){numPick=this.pick([// Valid zone and département codes.
	'01'+this.pick(['30','34','39','40','41','42','43','44','45','46','47','48','49','53','55','56','58','60','64','69','70','72','73','74','75','76','77','78','79','80','81','82','83'])+self.string({pool:'0123456789',length:6}),'02'+this.pick(['14','18','22','23','28','29','30','31','32','33','34','35','36','37','38','40','41','43','44','45','46','47','48','49','50','51','52','53','54','56','57','61','62','69','72','76','77','78','85','90','96','97','98','99'])+self.string({pool:'0123456789',length:6}),'03'+this.pick(['10','20','21','22','23','24','25','26','27','28','29','39','44','45','51','52','54','55','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','80','81','82','83','84','85','86','87','88','89','90'])+self.string({pool:'0123456789',length:6}),'04'+this.pick(['11','13','15','20','22','26','27','30','32','34','37','42','43','44','50','56','57','63','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','88','89','90','91','92','93','94','95','97','98'])+self.string({pool:'0123456789',length:6}),'05'+this.pick(['08','16','17','19','24','31','32','33','34','35','40','45','46','47','49','53','55','56','57','58','59','61','62','63','64','65','67','79','81','82','86','87','90','94'])+self.string({pool:'0123456789',length:6}),'09'+self.string({pool:'0123456789',length:8})]);phone=options.formatted?numPick.match(/../g).join(' '):numPick;}else{numPick=this.pick(['06','07'])+self.string({pool:'0123456789',length:8});phone=options.formatted?numPick.match(/../g).join(' '):numPick;}break;case'uk':if(!options.mobile){numPick=this.pick([//valid area codes of major cities/counties followed by random numbers in required format.
	{area:'01'+this.character({pool:'234569'})+'1 ',sections:[3,4]},{area:'020 '+this.character({pool:'378'}),sections:[3,4]},{area:'023 '+this.character({pool:'89'}),sections:[3,4]},{area:'024 7',sections:[3,4]},{area:'028 '+this.pick(['25','28','37','71','82','90','92','95']),sections:[2,4]},{area:'012'+this.pick(['04','08','54','76','97','98'])+' ',sections:[6]},{area:'013'+this.pick(['63','64','84','86'])+' ',sections:[6]},{area:'014'+this.pick(['04','20','60','61','80','88'])+' ',sections:[6]},{area:'015'+this.pick(['24','27','62','66'])+' ',sections:[6]},{area:'016'+this.pick(['06','29','35','47','59','95'])+' ',sections:[6]},{area:'017'+this.pick(['26','44','50','68'])+' ',sections:[6]},{area:'018'+this.pick(['27','37','84','97'])+' ',sections:[6]},{area:'019'+this.pick(['00','05','35','46','49','63','95'])+' ',sections:[6]}]);phone=options.formatted?ukNum(numPick):ukNum(numPick).replace(' ','','g');}else{numPick=this.pick([{area:'07'+this.pick(['4','5','7','8','9']),sections:[2,6]},{area:'07624 ',sections:[6]}]);phone=options.formatted?ukNum(numPick):ukNum(numPick).replace(' ','');}break;case'us':var areacode=this.areacode(options).toString();var exchange=this.natural({min:2,max:9}).toString()+this.natural({min:0,max:9}).toString()+this.natural({min:0,max:9}).toString();var subscriber=this.natural({min:1000,max:9999}).toString();// this could be random [0-9]{4}
	phone=options.formatted?areacode+' '+exchange+'-'+subscriber:areacode+exchange+subscriber;}return phone;};Chance.prototype.postal=function(){// Postal District
	var pd=this.character({pool:"XVTSRPNKLMHJGECBA"});// Forward Sortation Area (FSA)
	var fsa=pd+this.natural({max:9})+this.character({alpha:true,casing:"upper"});// Local Delivery Unut (LDU)
	var ldu=this.natural({max:9})+this.character({alpha:true,casing:"upper"})+this.natural({max:9});return fsa+" "+ldu;};Chance.prototype.counties=function(options){options=initOptions(options,{country:'uk'});return this.get("counties")[options.country.toLowerCase()];};Chance.prototype.county=function(options){return this.pick(this.counties(options)).name;};Chance.prototype.provinces=function(options){options=initOptions(options,{country:'ca'});return this.get("provinces")[options.country.toLowerCase()];};Chance.prototype.province=function(options){return options&&options.full?this.pick(this.provinces(options)).name:this.pick(this.provinces(options)).abbreviation;};Chance.prototype.state=function(options){return options&&options.full?this.pick(this.states(options)).name:this.pick(this.states(options)).abbreviation;};Chance.prototype.states=function(options){options=initOptions(options,{country:'us',us_states_and_dc:true});var states;switch(options.country.toLowerCase()){case'us':var us_states_and_dc=this.get("us_states_and_dc"),territories=this.get("territories"),armed_forces=this.get("armed_forces");states=[];if(options.us_states_and_dc){states=states.concat(us_states_and_dc);}if(options.territories){states=states.concat(territories);}if(options.armed_forces){states=states.concat(armed_forces);}break;case'it':states=this.get("country_regions")[options.country.toLowerCase()];break;case'uk':states=this.get("counties")[options.country.toLowerCase()];break;}return states;};Chance.prototype.street=function(options){options=initOptions(options,{country:'us',syllables:2});var street;switch(options.country.toLowerCase()){case'us':street=this.word({syllables:options.syllables});street=this.capitalize(street);street+=' ';street+=options.short_suffix?this.street_suffix(options).abbreviation:this.street_suffix(options).name;break;case'it':street=this.word({syllables:options.syllables});street=this.capitalize(street);street=(options.short_suffix?this.street_suffix(options).abbreviation:this.street_suffix(options).name)+" "+street;break;}return street;};Chance.prototype.street_suffix=function(options){options=initOptions(options,{country:'us'});return this.pick(this.street_suffixes(options));};Chance.prototype.street_suffixes=function(options){options=initOptions(options,{country:'us'});// These are the most common suffixes.
	return this.get("street_suffixes")[options.country.toLowerCase()];};// Note: only returning US zip codes, internationalization will be a whole
	// other beast to tackle at some point.
	Chance.prototype.zip=function(options){var zip=this.n(this.natural,5,{max:9});if(options&&options.plusfour===true){zip.push('-');zip=zip.concat(this.n(this.natural,4,{max:9}));}return zip.join("");};// -- End Location --
	// -- Time
	Chance.prototype.ampm=function(){return this.bool()?'am':'pm';};Chance.prototype.date=function(options){var date_string,date;// If interval is specified we ignore preset
	if(options&&(options.min||options.max)){options=initOptions(options,{american:true,string:false});var min=typeof options.min!=="undefined"?options.min.getTime():1;// 100,000,000 days measured relative to midnight at the beginning of 01 January, 1970 UTC. http://es5.github.io/#x15.9.1.1
	var max=typeof options.max!=="undefined"?options.max.getTime():8640000000000000;date=new Date(this.integer({min:min,max:max}));}else{var m=this.month({raw:true});var daysInMonth=m.days;if(options&&options.month){// Mod 12 to allow months outside range of 0-11 (not encouraged, but also not prevented).
	daysInMonth=this.get('months')[(options.month%12+12)%12].days;}options=initOptions(options,{year:parseInt(this.year(),10),// Necessary to subtract 1 because Date() 0-indexes month but not day or year
	// for some reason.
	month:m.numeric-1,day:this.natural({min:1,max:daysInMonth}),hour:this.hour({twentyfour:true}),minute:this.minute(),second:this.second(),millisecond:this.millisecond(),american:true,string:false});date=new Date(options.year,options.month,options.day,options.hour,options.minute,options.second,options.millisecond);}if(options.american){// Adding 1 to the month is necessary because Date() 0-indexes
	// months but not day for some odd reason.
	date_string=date.getMonth()+1+'/'+date.getDate()+'/'+date.getFullYear();}else{date_string=date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();}return options.string?date_string:date;};Chance.prototype.hammertime=function(options){return this.date(options).getTime();};Chance.prototype.hour=function(options){options=initOptions(options,{min:options&&options.twentyfour?0:1,max:options&&options.twentyfour?23:12});testRange(options.min<0,"Chance: Min cannot be less than 0.");testRange(options.twentyfour&&options.max>23,"Chance: Max cannot be greater than 23 for twentyfour option.");testRange(!options.twentyfour&&options.max>12,"Chance: Max cannot be greater than 12.");testRange(options.min>options.max,"Chance: Min cannot be greater than Max.");return this.natural({min:options.min,max:options.max});};Chance.prototype.millisecond=function(){return this.natural({max:999});};Chance.prototype.minute=Chance.prototype.second=function(options){options=initOptions(options,{min:0,max:59});testRange(options.min<0,"Chance: Min cannot be less than 0.");testRange(options.max>59,"Chance: Max cannot be greater than 59.");testRange(options.min>options.max,"Chance: Min cannot be greater than Max.");return this.natural({min:options.min,max:options.max});};Chance.prototype.month=function(options){options=initOptions(options,{min:1,max:12});testRange(options.min<1,"Chance: Min cannot be less than 1.");testRange(options.max>12,"Chance: Max cannot be greater than 12.");testRange(options.min>options.max,"Chance: Min cannot be greater than Max.");var month=this.pick(this.months().slice(options.min-1,options.max));return options.raw?month:month.name;};Chance.prototype.months=function(){return this.get("months");};Chance.prototype.second=function(){return this.natural({max:59});};Chance.prototype.timestamp=function(){return this.natural({min:1,max:parseInt(new Date().getTime()/1000,10)});};Chance.prototype.weekday=function(options){options=initOptions(options,{weekday_only:false});var weekdays=["Monday","Tuesday","Wednesday","Thursday","Friday"];if(!options.weekday_only){weekdays.push("Saturday");weekdays.push("Sunday");}return this.pickone(weekdays);};Chance.prototype.year=function(options){// Default to current year as min if none specified
	options=initOptions(options,{min:new Date().getFullYear()});// Default to one century after current year as max if none specified
	options.max=typeof options.max!=="undefined"?options.max:options.min+100;return this.natural(options).toString();};// -- End Time
	// -- Finance --
	Chance.prototype.cc=function(options){options=initOptions(options);var type,number,to_generate;type=options.type?this.cc_type({name:options.type,raw:true}):this.cc_type({raw:true});number=type.prefix.split("");to_generate=type.length-type.prefix.length-1;// Generates n - 1 digits
	number=number.concat(this.n(this.integer,to_generate,{min:0,max:9}));// Generates the last digit according to Luhn algorithm
	number.push(this.luhn_calculate(number.join("")));return number.join("");};Chance.prototype.cc_types=function(){// http://en.wikipedia.org/wiki/Bank_card_number#Issuer_identification_number_.28IIN.29
	return this.get("cc_types");};Chance.prototype.cc_type=function(options){options=initOptions(options);var types=this.cc_types(),type=null;if(options.name){for(var i=0;i<types.length;i++){// Accept either name or short_name to specify card type
	if(types[i].name===options.name||types[i].short_name===options.name){type=types[i];break;}}if(type===null){throw new RangeError("Credit card type '"+options.name+"'' is not supported");}}else{type=this.pick(types);}return options.raw?type:type.name;};//return all world currency by ISO 4217
	Chance.prototype.currency_types=function(){return this.get("currency_types");};//return random world currency by ISO 4217
	Chance.prototype.currency=function(){return this.pick(this.currency_types());};//return all timezones availabel
	Chance.prototype.timezones=function(){return this.get("timezones");};//return random timezone
	Chance.prototype.timezone=function(){return this.pick(this.timezones());};//Return random correct currency exchange pair (e.g. EUR/USD) or array of currency code
	Chance.prototype.currency_pair=function(returnAsString){var currencies=this.unique(this.currency,2,{comparator:function comparator(arr,val){return arr.reduce(function(acc,item){// If a match has been found, short circuit check and just return
	return acc||item.code===val.code;},false);}});if(returnAsString){return currencies[0].code+'/'+currencies[1].code;}else{return currencies;}};Chance.prototype.dollar=function(options){// By default, a somewhat more sane max for dollar than all available numbers
	options=initOptions(options,{max:10000,min:0});var dollar=this.floating({min:options.min,max:options.max,fixed:2}).toString(),cents=dollar.split('.')[1];if(cents===undefined){dollar+='.00';}else if(cents.length<2){dollar=dollar+'0';}if(dollar<0){return'-$'+dollar.replace('-','');}else{return'$'+dollar;}};Chance.prototype.euro=function(options){return Number(this.dollar(options).replace("$","")).toLocaleString()+"€";};Chance.prototype.exp=function(options){options=initOptions(options);var exp={};exp.year=this.exp_year();// If the year is this year, need to ensure month is greater than the
	// current month or this expiration will not be valid
	if(exp.year===new Date().getFullYear().toString()){exp.month=this.exp_month({future:true});}else{exp.month=this.exp_month();}return options.raw?exp:exp.month+'/'+exp.year;};Chance.prototype.exp_month=function(options){options=initOptions(options);var month,month_int,// Date object months are 0 indexed
	curMonth=new Date().getMonth()+1;if(options.future&&curMonth!==12){do{month=this.month({raw:true}).numeric;month_int=parseInt(month,10);}while(month_int<=curMonth);}else{month=this.month({raw:true}).numeric;}return month;};Chance.prototype.exp_year=function(){var curMonth=new Date().getMonth()+1,curYear=new Date().getFullYear();return this.year({min:curMonth===12?curYear+1:curYear,max:curYear+10});};Chance.prototype.vat=function(options){options=initOptions(options,{country:'it'});switch(options.country.toLowerCase()){case'it':return this.it_vat();}};// -- End Finance
	// -- Regional
	Chance.prototype.it_vat=function(){var it_vat=this.natural({min:1,max:1800000});it_vat=this.pad(it_vat,7)+this.pad(this.pick(this.provinces({country:'it'})).code,3);return it_vat+this.luhn_calculate(it_vat);};/*
	     * this generator is written following the official algorithm
	     * all data can be passed explicitely or randomized by calling chance.cf() without options
	     * the code does not check that the input data is valid (it goes beyond the scope of the generator)
	     *
	     * @param  [Object] options = { first: first name,
	     *                              last: last name,
	     *                              gender: female|male,
	                                    birthday: JavaScript date object,
	                                    city: string(4), 1 letter + 3 numbers
	                                   }
	     * @return [string] codice fiscale
	     *
	    */Chance.prototype.cf=function(options){options=options||{};var gender=!!options.gender?options.gender:this.gender(),first=!!options.first?options.first:this.first({gender:gender,nationality:'it'}),last=!!options.last?options.last:this.last({nationality:'it'}),birthday=!!options.birthday?options.birthday:this.birthday(),city=!!options.city?options.city:this.pickone(['A','B','C','D','E','F','G','H','I','L','M','Z'])+this.pad(this.natural({max:999}),3),cf=[],name_generator=function name_generator(name,isLast){var temp,return_value=[];if(name.length<3){return_value=name.split("").concat("XXX".split("")).splice(0,3);}else{temp=name.toUpperCase().split('').map(function(c){return"BCDFGHJKLMNPRSTVWZ".indexOf(c)!==-1?c:undefined;}).join('');if(temp.length>3){if(isLast){temp=temp.substr(0,3);}else{temp=temp[0]+temp.substr(2,2);}}if(temp.length<3){return_value=temp;temp=name.toUpperCase().split('').map(function(c){return"AEIOU".indexOf(c)!==-1?c:undefined;}).join('').substr(0,3-return_value.length);}return_value=return_value+temp;}return return_value;},date_generator=function date_generator(birthday,gender,that){var lettermonths=['A','B','C','D','E','H','L','M','P','R','S','T'];return birthday.getFullYear().toString().substr(2)+lettermonths[birthday.getMonth()]+that.pad(birthday.getDate()+(gender.toLowerCase()==="female"?40:0),2);},checkdigit_generator=function checkdigit_generator(cf){var range1="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",range2="ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ",evens="ABCDEFGHIJKLMNOPQRSTUVWXYZ",odds="BAKPLCQDREVOSFTGUHMINJWZYX",digit=0;for(var i=0;i<15;i++){if(i%2!==0){digit+=evens.indexOf(range2[range1.indexOf(cf[i])]);}else{digit+=odds.indexOf(range2[range1.indexOf(cf[i])]);}}return evens[digit%26];};cf=cf.concat(name_generator(last,true),name_generator(first),date_generator(birthday,gender,this),city.toUpperCase().split("")).join("");cf+=checkdigit_generator(cf.toUpperCase(),this);return cf.toUpperCase();};Chance.prototype.pl_pesel=function(){var number=this.natural({min:1,max:9999999999});var arr=this.pad(number,10).split('');for(var i=0;i<arr.length;i++){arr[i]=parseInt(arr[i]);}var controlNumber=(1*arr[0]+3*arr[1]+7*arr[2]+9*arr[3]+1*arr[4]+3*arr[5]+7*arr[6]+9*arr[7]+1*arr[8]+3*arr[9])%10;if(controlNumber!==0){controlNumber=10-controlNumber;}return arr.join('')+controlNumber;};Chance.prototype.pl_nip=function(){var number=this.natural({min:1,max:999999999});var arr=this.pad(number,9).split('');for(var i=0;i<arr.length;i++){arr[i]=parseInt(arr[i]);}var controlNumber=(6*arr[0]+5*arr[1]+7*arr[2]+2*arr[3]+3*arr[4]+4*arr[5]+5*arr[6]+6*arr[7]+7*arr[8])%11;if(controlNumber===10){return this.pl_nip();}return arr.join('')+controlNumber;};Chance.prototype.pl_regon=function(){var number=this.natural({min:1,max:99999999});var arr=this.pad(number,8).split('');for(var i=0;i<arr.length;i++){arr[i]=parseInt(arr[i]);}var controlNumber=(8*arr[0]+9*arr[1]+2*arr[2]+3*arr[3]+4*arr[4]+5*arr[5]+6*arr[6]+7*arr[7])%11;if(controlNumber===10){controlNumber=0;}return arr.join('')+controlNumber;};// -- End Regional
	// -- Miscellaneous --
	// Dice - For all the board game geeks out there, myself included ;)
	function diceFn(range){return function(){return this.natural(range);};}Chance.prototype.d4=diceFn({min:1,max:4});Chance.prototype.d6=diceFn({min:1,max:6});Chance.prototype.d8=diceFn({min:1,max:8});Chance.prototype.d10=diceFn({min:1,max:10});Chance.prototype.d12=diceFn({min:1,max:12});Chance.prototype.d20=diceFn({min:1,max:20});Chance.prototype.d30=diceFn({min:1,max:30});Chance.prototype.d100=diceFn({min:1,max:100});Chance.prototype.rpg=function(thrown,options){options=initOptions(options);if(!thrown){throw new RangeError("A type of die roll must be included");}else{var bits=thrown.toLowerCase().split("d"),rolls=[];if(bits.length!==2||!parseInt(bits[0],10)||!parseInt(bits[1],10)){throw new Error("Invalid format provided. Please provide #d# where the first # is the number of dice to roll, the second # is the max of each die");}for(var i=bits[0];i>0;i--){rolls[i-1]=this.natural({min:1,max:bits[1]});}return typeof options.sum!=='undefined'&&options.sum?rolls.reduce(function(p,c){return p+c;}):rolls;}};// Guid
	Chance.prototype.guid=function(options){options=initOptions(options,{version:5});var guid_pool="abcdef1234567890",variant_pool="ab89",guid=this.string({pool:guid_pool,length:8})+'-'+this.string({pool:guid_pool,length:4})+'-'+// The Version
	options.version+this.string({pool:guid_pool,length:3})+'-'+// The Variant
	this.string({pool:variant_pool,length:1})+this.string({pool:guid_pool,length:3})+'-'+this.string({pool:guid_pool,length:12});return guid;};// Hash
	Chance.prototype.hash=function(options){options=initOptions(options,{length:40,casing:'lower'});var pool=options.casing==='upper'?HEX_POOL.toUpperCase():HEX_POOL;return this.string({pool:pool,length:options.length});};Chance.prototype.luhn_check=function(num){var str=num.toString();var checkDigit=+str.substring(str.length-1);return checkDigit===this.luhn_calculate(+str.substring(0,str.length-1));};Chance.prototype.luhn_calculate=function(num){var digits=num.toString().split("").reverse();var sum=0;var digit;for(var i=0,l=digits.length;l>i;++i){digit=+digits[i];if(i%2===0){digit*=2;if(digit>9){digit-=9;}}sum+=digit;}return sum*9%10;};// MD5 Hash
	Chance.prototype.md5=function(options){var opts={str:'',key:null,raw:false};if(!options){opts.str=this.string();options={};}else if(typeof options==='string'){opts.str=options;options={};}else if((typeof options==='undefined'?'undefined':_typeof(options))!=='object'){return null;}else if(options.constructor==='Array'){return null;}opts=initOptions(options,opts);if(!opts.str){throw new Error('A parameter is required to return an md5 hash.');}return this.bimd5.md5(opts.str,opts.key,opts.raw);};/**
	     * #Description:
	     * =====================================================
	     * Generate random file name with extention
	     *
	     * The argument provide extention type
	     * -> raster
	     * -> vector
	     * -> 3d
	     * -> document
	     *
	     * If noting is provided the function return random file name with random
	     * extention type of any kind
	     *
	     * The user can validate the file name length range
	     * If noting provided the generated file name is radom
	     *
	     * #Extention Pool :
	     * * Currently the supported extentions are
	     *  -> some of the most popular raster image extentions
	     *  -> some of the most popular vector image extentions
	     *  -> some of the most popular 3d image extentions
	     *  -> some of the most popular document extentions
	     *
	     * #Examples :
	     * =====================================================
	     *
	     * Return random file name with random extention. The file extention
	     * is provided by a predifined collection of extentions. More abouth the extention
	     * pool can be fond in #Extention Pool section
	     *
	     * chance.file()
	     * => dsfsdhjf.xml
	     *
	     * In order to generate a file name with sspecific length, specify the
	     * length property and integer value. The extention is going to be random
	     *
	     * chance.file({length : 10})
	     * => asrtineqos.pdf
	     *
	     * In order to geerate file with extention form some of the predifined groups
	     * of the extention pool just specify the extenton pool category in fileType property
	     *
	     * chance.file({fileType : 'raster'})
	     * => dshgssds.psd
	     *
	     * You can provide specific extention for your files
	     * chance.file({extention : 'html'})
	     * => djfsd.html
	     *
	     * Or you could pass custom collection of extentons bt array or by object
	     * chance.file({extentions : [...]})
	     * => dhgsdsd.psd
	     *
	     * chance.file({extentions : { key : [...], key : [...]}})
	     * => djsfksdjsd.xml
	     *
	     * @param  [collection] options
	     * @return [string]
	     *
	     */Chance.prototype.file=function(options){var fileOptions=options||{};var poolCollectionKey="fileExtension";var typeRange=Object.keys(this.get("fileExtension"));//['raster', 'vector', '3d', 'document'];
	var fileName;var fileExtention;// Generate random file name
	fileName=this.word({length:fileOptions.length});// Generate file by specific extention provided by the user
	if(fileOptions.extention){fileExtention=fileOptions.extention;return fileName+'.'+fileExtention;}// Generate file by specific axtention collection
	if(fileOptions.extentions){if(Array.isArray(fileOptions.extentions)){fileExtention=this.pickone(fileOptions.extentions);return fileName+'.'+fileExtention;}else if(fileOptions.extentions.constructor===Object){var extentionObjectCollection=fileOptions.extentions;var keys=Object.keys(extentionObjectCollection);fileExtention=this.pickone(extentionObjectCollection[this.pickone(keys)]);return fileName+'.'+fileExtention;}throw new Error("Expect collection of type Array or Object to be passed as an argument ");}// Generate file extention based on specific file type
	if(fileOptions.fileType){var fileType=fileOptions.fileType;if(typeRange.indexOf(fileType)!==-1){fileExtention=this.pickone(this.get(poolCollectionKey)[fileType]);return fileName+'.'+fileExtention;}throw new Error("Expect file type value to be 'raster', 'vector', '3d' or 'document' ");}// Generate random file name if no extenton options are passed
	fileExtention=this.pickone(this.get(poolCollectionKey)[this.pickone(typeRange)]);return fileName+'.'+fileExtention;};var data={firstNames:{"male":{"en":["James","John","Robert","Michael","William","David","Richard","Joseph","Charles","Thomas","Christopher","Daniel","Matthew","George","Donald","Anthony","Paul","Mark","Edward","Steven","Kenneth","Andrew","Brian","Joshua","Kevin","Ronald","Timothy","Jason","Jeffrey","Frank","Gary","Ryan","Nicholas","Eric","Stephen","Jacob","Larry","Jonathan","Scott","Raymond","Justin","Brandon","Gregory","Samuel","Benjamin","Patrick","Jack","Henry","Walter","Dennis","Jerry","Alexander","Peter","Tyler","Douglas","Harold","Aaron","Jose","Adam","Arthur","Zachary","Carl","Nathan","Albert","Kyle","Lawrence","Joe","Willie","Gerald","Roger","Keith","Jeremy","Terry","Harry","Ralph","Sean","Jesse","Roy","Louis","Billy","Austin","Bruce","Eugene","Christian","Bryan","Wayne","Russell","Howard","Fred","Ethan","Jordan","Philip","Alan","Juan","Randy","Vincent","Bobby","Dylan","Johnny","Phillip","Victor","Clarence","Ernest","Martin","Craig","Stanley","Shawn","Travis","Bradley","Leonard","Earl","Gabriel","Jimmy","Francis","Todd","Noah","Danny","Dale","Cody","Carlos","Allen","Frederick","Logan","Curtis","Alex","Joel","Luis","Norman","Marvin","Glenn","Tony","Nathaniel","Rodney","Melvin","Alfred","Steve","Cameron","Chad","Edwin","Caleb","Evan","Antonio","Lee","Herbert","Jeffery","Isaac","Derek","Ricky","Marcus","Theodore","Elijah","Luke","Jesus","Eddie","Troy","Mike","Dustin","Ray","Adrian","Bernard","Leroy","Angel","Randall","Wesley","Ian","Jared","Mason","Hunter","Calvin","Oscar","Clifford","Jay","Shane","Ronnie","Barry","Lucas","Corey","Manuel","Leo","Tommy","Warren","Jackson","Isaiah","Connor","Don","Dean","Jon","Julian","Miguel","Bill","Lloyd","Charlie","Mitchell","Leon","Jerome","Darrell","Jeremiah","Alvin","Brett","Seth","Floyd","Jim","Blake","Micheal","Gordon","Trevor","Lewis","Erik","Edgar","Vernon","Devin","Gavin","Jayden","Chris","Clyde","Tom","Derrick","Mario","Brent","Marc","Herman","Chase","Dominic","Ricardo","Franklin","Maurice","Max","Aiden","Owen","Lester","Gilbert","Elmer","Gene","Francisco","Glen","Cory","Garrett","Clayton","Sam","Jorge","Chester","Alejandro","Jeff","Harvey","Milton","Cole","Ivan","Andre","Duane","Landon"],// Data taken from http://www.dati.gov.it/dataset/comune-di-firenze_0163
	"it":["Adolfo","Alberto","Aldo","Alessandro","Alessio","Alfredo","Alvaro","Andrea","Angelo","Angiolo","Antonino","Antonio","Attilio","Benito","Bernardo","Bruno","Carlo","Cesare","Christian","Claudio","Corrado","Cosimo","Cristian","Cristiano","Daniele","Dario","David","Davide","Diego","Dino","Domenico","Duccio","Edoardo","Elia","Elio","Emanuele","Emiliano","Emilio","Enrico","Enzo","Ettore","Fabio","Fabrizio","Federico","Ferdinando","Fernando","Filippo","Francesco","Franco","Gabriele","Giacomo","Giampaolo","Giampiero","Giancarlo","Gianfranco","Gianluca","Gianmarco","Gianni","Gino","Giorgio","Giovanni","Giuliano","Giulio","Giuseppe","Graziano","Gregorio","Guido","Iacopo","Jacopo","Lapo","Leonardo","Lorenzo","Luca","Luciano","Luigi","Manuel","Marcello","Marco","Marino","Mario","Massimiliano","Massimo","Matteo","Mattia","Maurizio","Mauro","Michele","Mirko","Mohamed","Nello","Neri","Niccolò","Nicola","Osvaldo","Otello","Paolo","Pier Luigi","Piero","Pietro","Raffaele","Remo","Renato","Renzo","Riccardo","Roberto","Rolando","Romano","Salvatore","Samuele","Sandro","Sergio","Silvano","Simone","Stefano","Thomas","Tommaso","Ubaldo","Ugo","Umberto","Valerio","Valter","Vasco","Vincenzo","Vittorio"]},"female":{"en":["Mary","Emma","Elizabeth","Minnie","Margaret","Ida","Alice","Bertha","Sarah","Annie","Clara","Ella","Florence","Cora","Martha","Laura","Nellie","Grace","Carrie","Maude","Mabel","Bessie","Jennie","Gertrude","Julia","Hattie","Edith","Mattie","Rose","Catherine","Lillian","Ada","Lillie","Helen","Jessie","Louise","Ethel","Lula","Myrtle","Eva","Frances","Lena","Lucy","Edna","Maggie","Pearl","Daisy","Fannie","Josephine","Dora","Rosa","Katherine","Agnes","Marie","Nora","May","Mamie","Blanche","Stella","Ellen","Nancy","Effie","Sallie","Nettie","Della","Lizzie","Flora","Susie","Maud","Mae","Etta","Harriet","Sadie","Caroline","Katie","Lydia","Elsie","Kate","Susan","Mollie","Alma","Addie","Georgia","Eliza","Lulu","Nannie","Lottie","Amanda","Belle","Charlotte","Rebecca","Ruth","Viola","Olive","Amelia","Hannah","Jane","Virginia","Emily","Matilda","Irene","Kathryn","Esther","Willie","Henrietta","Ollie","Amy","Rachel","Sara","Estella","Theresa","Augusta","Ora","Pauline","Josie","Lola","Sophia","Leona","Anne","Mildred","Ann","Beulah","Callie","Lou","Delia","Eleanor","Barbara","Iva","Louisa","Maria","Mayme","Evelyn","Estelle","Nina","Betty","Marion","Bettie","Dorothy","Luella","Inez","Lela","Rosie","Allie","Millie","Janie","Cornelia","Victoria","Ruby","Winifred","Alta","Celia","Christine","Beatrice","Birdie","Harriett","Mable","Myra","Sophie","Tillie","Isabel","Sylvia","Carolyn","Isabelle","Leila","Sally","Ina","Essie","Bertie","Nell","Alberta","Katharine","Lora","Rena","Mina","Rhoda","Mathilda","Abbie","Eula","Dollie","Hettie","Eunice","Fanny","Ola","Lenora","Adelaide","Christina","Lelia","Nelle","Sue","Johanna","Lilly","Lucinda","Minerva","Lettie","Roxie","Cynthia","Helena","Hilda","Hulda","Bernice","Genevieve","Jean","Cordelia","Marian","Francis","Jeanette","Adeline","Gussie","Leah","Lois","Lura","Mittie","Hallie","Isabella","Olga","Phoebe","Teresa","Hester","Lida","Lina","Winnie","Claudia","Marguerite","Vera","Cecelia","Bess","Emilie","John","Rosetta","Verna","Myrtie","Cecilia","Elva","Olivia","Ophelia","Georgie","Elnora","Violet","Adele","Lily","Linnie","Loretta","Madge","Polly","Virgie","Eugenia","Lucile","Lucille","Mabelle","Rosalie"],// Data taken from http://www.dati.gov.it/dataset/comune-di-firenze_0162
	"it":["Ada","Adriana","Alessandra","Alessia","Alice","Angela","Anna","Anna Maria","Annalisa","Annita","Annunziata","Antonella","Arianna","Asia","Assunta","Aurora","Barbara","Beatrice","Benedetta","Bianca","Bruna","Camilla","Carla","Carlotta","Carmela","Carolina","Caterina","Catia","Cecilia","Chiara","Cinzia","Clara","Claudia","Costanza","Cristina","Daniela","Debora","Diletta","Dina","Donatella","Elena","Eleonora","Elisa","Elisabetta","Emanuela","Emma","Eva","Federica","Fernanda","Fiorella","Fiorenza","Flora","Franca","Francesca","Gabriella","Gaia","Gemma","Giada","Gianna","Gina","Ginevra","Giorgia","Giovanna","Giulia","Giuliana","Giuseppa","Giuseppina","Grazia","Graziella","Greta","Ida","Ilaria","Ines","Iolanda","Irene","Irma","Isabella","Jessica","Laura","Leda","Letizia","Licia","Lidia","Liliana","Lina","Linda","Lisa","Livia","Loretta","Luana","Lucia","Luciana","Lucrezia","Luisa","Manuela","Mara","Marcella","Margherita","Maria","Maria Cristina","Maria Grazia","Maria Luisa","Maria Pia","Maria Teresa","Marina","Marisa","Marta","Martina","Marzia","Matilde","Melissa","Michela","Milena","Mirella","Monica","Natalina","Nella","Nicoletta","Noemi","Olga","Paola","Patrizia","Piera","Pierina","Raffaella","Rebecca","Renata","Rina","Rita","Roberta","Rosa","Rosanna","Rossana","Rossella","Sabrina","Sandra","Sara","Serena","Silvana","Silvia","Simona","Simonetta","Sofia","Sonia","Stefania","Susanna","Teresa","Tina","Tiziana","Tosca","Valentina","Valeria","Vanda","Vanessa","Vanna","Vera","Veronica","Vilma","Viola","Virginia","Vittoria"]}},lastNames:{"en":['Smith','Johnson','Williams','Jones','Brown','Davis','Miller','Wilson','Moore','Taylor','Anderson','Thomas','Jackson','White','Harris','Martin','Thompson','Garcia','Martinez','Robinson','Clark','Rodriguez','Lewis','Lee','Walker','Hall','Allen','Young','Hernandez','King','Wright','Lopez','Hill','Scott','Green','Adams','Baker','Gonzalez','Nelson','Carter','Mitchell','Perez','Roberts','Turner','Phillips','Campbell','Parker','Evans','Edwards','Collins','Stewart','Sanchez','Morris','Rogers','Reed','Cook','Morgan','Bell','Murphy','Bailey','Rivera','Cooper','Richardson','Cox','Howard','Ward','Torres','Peterson','Gray','Ramirez','James','Watson','Brooks','Kelly','Sanders','Price','Bennett','Wood','Barnes','Ross','Henderson','Coleman','Jenkins','Perry','Powell','Long','Patterson','Hughes','Flores','Washington','Butler','Simmons','Foster','Gonzales','Bryant','Alexander','Russell','Griffin','Diaz','Hayes','Myers','Ford','Hamilton','Graham','Sullivan','Wallace','Woods','Cole','West','Jordan','Owens','Reynolds','Fisher','Ellis','Harrison','Gibson','McDonald','Cruz','Marshall','Ortiz','Gomez','Murray','Freeman','Wells','Webb','Simpson','Stevens','Tucker','Porter','Hunter','Hicks','Crawford','Henry','Boyd','Mason','Morales','Kennedy','Warren','Dixon','Ramos','Reyes','Burns','Gordon','Shaw','Holmes','Rice','Robertson','Hunt','Black','Daniels','Palmer','Mills','Nichols','Grant','Knight','Ferguson','Rose','Stone','Hawkins','Dunn','Perkins','Hudson','Spencer','Gardner','Stephens','Payne','Pierce','Berry','Matthews','Arnold','Wagner','Willis','Ray','Watkins','Olson','Carroll','Duncan','Snyder','Hart','Cunningham','Bradley','Lane','Andrews','Ruiz','Harper','Fox','Riley','Armstrong','Carpenter','Weaver','Greene','Lawrence','Elliott','Chavez','Sims','Austin','Peters','Kelley','Franklin','Lawson','Fields','Gutierrez','Ryan','Schmidt','Carr','Vasquez','Castillo','Wheeler','Chapman','Oliver','Montgomery','Richards','Williamson','Johnston','Banks','Meyer','Bishop','McCoy','Howell','Alvarez','Morrison','Hansen','Fernandez','Garza','Harvey','Little','Burton','Stanley','Nguyen','George','Jacobs','Reid','Kim','Fuller','Lynch','Dean','Gilbert','Garrett','Romero','Welch','Larson','Frazier','Burke','Hanson','Day','Mendoza','Moreno','Bowman','Medina','Fowler','Brewer','Hoffman','Carlson','Silva','Pearson','Holland','Douglas','Fleming','Jensen','Vargas','Byrd','Davidson','Hopkins','May','Terry','Herrera','Wade','Soto','Walters','Curtis','Neal','Caldwell','Lowe','Jennings','Barnett','Graves','Jimenez','Horton','Shelton','Barrett','Obrien','Castro','Sutton','Gregory','McKinney','Lucas','Miles','Craig','Rodriquez','Chambers','Holt','Lambert','Fletcher','Watts','Bates','Hale','Rhodes','Pena','Beck','Newman','Haynes','McDaniel','Mendez','Bush','Vaughn','Parks','Dawson','Santiago','Norris','Hardy','Love','Steele','Curry','Powers','Schultz','Barker','Guzman','Page','Munoz','Ball','Keller','Chandler','Weber','Leonard','Walsh','Lyons','Ramsey','Wolfe','Schneider','Mullins','Benson','Sharp','Bowen','Daniel','Barber','Cummings','Hines','Baldwin','Griffith','Valdez','Hubbard','Salazar','Reeves','Warner','Stevenson','Burgess','Santos','Tate','Cross','Garner','Mann','Mack','Moss','Thornton','Dennis','McGee','Farmer','Delgado','Aguilar','Vega','Glover','Manning','Cohen','Harmon','Rodgers','Robbins','Newton','Todd','Blair','Higgins','Ingram','Reese','Cannon','Strickland','Townsend','Potter','Goodwin','Walton','Rowe','Hampton','Ortega','Patton','Swanson','Joseph','Francis','Goodman','Maldonado','Yates','Becker','Erickson','Hodges','Rios','Conner','Adkins','Webster','Norman','Malone','Hammond','Flowers','Cobb','Moody','Quinn','Blake','Maxwell','Pope','Floyd','Osborne','Paul','McCarthy','Guerrero','Lindsey','Estrada','Sandoval','Gibbs','Tyler','Gross','Fitzgerald','Stokes','Doyle','Sherman','Saunders','Wise','Colon','Gill','Alvarado','Greer','Padilla','Simon','Waters','Nunez','Ballard','Schwartz','McBride','Houston','Christensen','Klein','Pratt','Briggs','Parsons','McLaughlin','Zimmerman','French','Buchanan','Moran','Copeland','Roy','Pittman','Brady','McCormick','Holloway','Brock','Poole','Frank','Logan','Owen','Bass','Marsh','Drake','Wong','Jefferson','Park','Morton','Abbott','Sparks','Patrick','Norton','Huff','Clayton','Massey','Lloyd','Figueroa','Carson','Bowers','Roberson','Barton','Tran','Lamb','Harrington','Casey','Boone','Cortez','Clarke','Mathis','Singleton','Wilkins','Cain','Bryan','Underwood','Hogan','McKenzie','Collier','Luna','Phelps','McGuire','Allison','Bridges','Wilkerson','Nash','Summers','Atkins'],// Data taken from http://www.dati.gov.it/dataset/comune-di-firenze_0164 (first 1000)
	"it":["Acciai","Aglietti","Agostini","Agresti","Ahmed","Aiazzi","Albanese","Alberti","Alessi","Alfani","Alinari","Alterini","Amato","Ammannati","Ancillotti","Andrei","Andreini","Andreoni","Angeli","Anichini","Antonelli","Antonini","Arena","Ariani","Arnetoli","Arrighi","Baccani","Baccetti","Bacci","Bacherini","Badii","Baggiani","Baglioni","Bagni","Bagnoli","Baldassini","Baldi","Baldini","Ballerini","Balli","Ballini","Balloni","Bambi","Banchi","Bandinelli","Bandini","Bani","Barbetti","Barbieri","Barchielli","Bardazzi","Bardelli","Bardi","Barducci","Bargellini","Bargiacchi","Barni","Baroncelli","Baroncini","Barone","Baroni","Baronti","Bartalesi","Bartoletti","Bartoli","Bartolini","Bartoloni","Bartolozzi","Basagni","Basile","Bassi","Batacchi","Battaglia","Battaglini","Bausi","Becagli","Becattini","Becchi","Becucci","Bellandi","Bellesi","Belli","Bellini","Bellucci","Bencini","Benedetti","Benelli","Beni","Benini","Bensi","Benucci","Benvenuti","Berlincioni","Bernacchioni","Bernardi","Bernardini","Berni","Bernini","Bertelli","Berti","Bertini","Bessi","Betti","Bettini","Biagi","Biagini","Biagioni","Biagiotti","Biancalani","Bianchi","Bianchini","Bianco","Biffoli","Bigazzi","Bigi","Biliotti","Billi","Binazzi","Bindi","Bini","Biondi","Bizzarri","Bocci","Bogani","Bolognesi","Bonaiuti","Bonanni","Bonciani","Boncinelli","Bondi","Bonechi","Bongini","Boni","Bonini","Borchi","Boretti","Borghi","Borghini","Borgioli","Borri","Borselli","Boschi","Bottai","Bracci","Braccini","Brandi","Braschi","Bravi","Brazzini","Breschi","Brilli","Brizzi","Brogelli","Brogi","Brogioni","Brunelli","Brunetti","Bruni","Bruno","Brunori","Bruschi","Bucci","Bucciarelli","Buccioni","Bucelli","Bulli","Burberi","Burchi","Burgassi","Burroni","Bussotti","Buti","Caciolli","Caiani","Calabrese","Calamai","Calamandrei","Caldini","Calo'","Calonaci","Calosi","Calvelli","Cambi","Camiciottoli","Cammelli","Cammilli","Campolmi","Cantini","Capanni","Capecchi","Caponi","Cappelletti","Cappelli","Cappellini","Cappugi","Capretti","Caputo","Carbone","Carboni","Cardini","Carlesi","Carletti","Carli","Caroti","Carotti","Carrai","Carraresi","Carta","Caruso","Casalini","Casati","Caselli","Casini","Castagnoli","Castellani","Castelli","Castellucci","Catalano","Catarzi","Catelani","Cavaciocchi","Cavallaro","Cavallini","Cavicchi","Cavini","Ceccarelli","Ceccatelli","Ceccherelli","Ceccherini","Cecchi","Cecchini","Cecconi","Cei","Cellai","Celli","Cellini","Cencetti","Ceni","Cenni","Cerbai","Cesari","Ceseri","Checcacci","Checchi","Checcucci","Cheli","Chellini","Chen","Cheng","Cherici","Cherubini","Chiaramonti","Chiarantini","Chiarelli","Chiari","Chiarini","Chiarugi","Chiavacci","Chiesi","Chimenti","Chini","Chirici","Chiti","Ciabatti","Ciampi","Cianchi","Cianfanelli","Cianferoni","Ciani","Ciapetti","Ciappi","Ciardi","Ciatti","Cicali","Ciccone","Cinelli","Cini","Ciobanu","Ciolli","Cioni","Cipriani","Cirillo","Cirri","Ciucchi","Ciuffi","Ciulli","Ciullini","Clemente","Cocchi","Cognome","Coli","Collini","Colombo","Colzi","Comparini","Conforti","Consigli","Conte","Conti","Contini","Coppini","Coppola","Corsi","Corsini","Corti","Cortini","Cosi","Costa","Costantini","Costantino","Cozzi","Cresci","Crescioli","Cresti","Crini","Curradi","D'Agostino","D'Alessandro","D'Amico","D'Angelo","Daddi","Dainelli","Dallai","Danti","Davitti","De Angelis","De Luca","De Marco","De Rosa","De Santis","De Simone","De Vita","Degl'Innocenti","Degli Innocenti","Dei","Del Lungo","Del Re","Di Marco","Di Stefano","Dini","Diop","Dobre","Dolfi","Donati","Dondoli","Dong","Donnini","Ducci","Dumitru","Ermini","Esposito","Evangelisti","Fabbri","Fabbrini","Fabbrizzi","Fabbroni","Fabbrucci","Fabiani","Facchini","Faggi","Fagioli","Failli","Faini","Falciani","Falcini","Falcone","Fallani","Falorni","Falsini","Falugiani","Fancelli","Fanelli","Fanetti","Fanfani","Fani","Fantappie'","Fantechi","Fanti","Fantini","Fantoni","Farina","Fattori","Favilli","Fedi","Fei","Ferrante","Ferrara","Ferrari","Ferraro","Ferretti","Ferri","Ferrini","Ferroni","Fiaschi","Fibbi","Fiesoli","Filippi","Filippini","Fini","Fioravanti","Fiore","Fiorentini","Fiorini","Fissi","Focardi","Foggi","Fontana","Fontanelli","Fontani","Forconi","Formigli","Forte","Forti","Fortini","Fossati","Fossi","Francalanci","Franceschi","Franceschini","Franchi","Franchini","Franci","Francini","Francioni","Franco","Frassineti","Frati","Fratini","Frilli","Frizzi","Frosali","Frosini","Frullini","Fusco","Fusi","Gabbrielli","Gabellini","Gagliardi","Galanti","Galardi","Galeotti","Galletti","Galli","Gallo","Gallori","Gambacciani","Gargani","Garofalo","Garuglieri","Gashi","Gasperini","Gatti","Gelli","Gensini","Gentile","Gentili","Geri","Gerini","Gheri","Ghini","Giachetti","Giachi","Giacomelli","Gianassi","Giani","Giannelli","Giannetti","Gianni","Giannini","Giannoni","Giannotti","Giannozzi","Gigli","Giordano","Giorgetti","Giorgi","Giovacchini","Giovannelli","Giovannetti","Giovannini","Giovannoni","Giuliani","Giunti","Giuntini","Giusti","Gonnelli","Goretti","Gori","Gradi","Gramigni","Grassi","Grasso","Graziani","Grazzini","Greco","Grifoni","Grillo","Grimaldi","Grossi","Gualtieri","Guarducci","Guarino","Guarnieri","Guasti","Guerra","Guerri","Guerrini","Guidi","Guidotti","He","Hoxha","Hu","Huang","Iandelli","Ignesti","Innocenti","Jin","La Rosa","Lai","Landi","Landini","Lanini","Lapi","Lapini","Lari","Lascialfari","Lastrucci","Latini","Lazzeri","Lazzerini","Lelli","Lenzi","Leonardi","Leoncini","Leone","Leoni","Lepri","Li","Liao","Lin","Linari","Lippi","Lisi","Livi","Lombardi","Lombardini","Lombardo","Longo","Lopez","Lorenzi","Lorenzini","Lorini","Lotti","Lu","Lucchesi","Lucherini","Lunghi","Lupi","Madiai","Maestrini","Maffei","Maggi","Maggini","Magherini","Magini","Magnani","Magnelli","Magni","Magnolfi","Magrini","Malavolti","Malevolti","Manca","Mancini","Manetti","Manfredi","Mangani","Mannelli","Manni","Mannini","Mannucci","Manuelli","Manzini","Marcelli","Marchese","Marchetti","Marchi","Marchiani","Marchionni","Marconi","Marcucci","Margheri","Mari","Mariani","Marilli","Marinai","Marinari","Marinelli","Marini","Marino","Mariotti","Marsili","Martelli","Martinelli","Martini","Martino","Marzi","Masi","Masini","Masoni","Massai","Materassi","Mattei","Matteini","Matteucci","Matteuzzi","Mattioli","Mattolini","Matucci","Mauro","Mazzanti","Mazzei","Mazzetti","Mazzi","Mazzini","Mazzocchi","Mazzoli","Mazzoni","Mazzuoli","Meacci","Mecocci","Meini","Melani","Mele","Meli","Mengoni","Menichetti","Meoni","Merlini","Messeri","Messina","Meucci","Miccinesi","Miceli","Micheli","Michelini","Michelozzi","Migliori","Migliorini","Milani","Miniati","Misuri","Monaco","Montagnani","Montagni","Montanari","Montelatici","Monti","Montigiani","Montini","Morandi","Morandini","Morelli","Moretti","Morganti","Mori","Morini","Moroni","Morozzi","Mugnai","Mugnaini","Mustafa","Naldi","Naldini","Nannelli","Nanni","Nannini","Nannucci","Nardi","Nardini","Nardoni","Natali","Ndiaye","Nencetti","Nencini","Nencioni","Neri","Nesi","Nesti","Niccolai","Niccoli","Niccolini","Nigi","Nistri","Nocentini","Noferini","Novelli","Nucci","Nuti","Nutini","Oliva","Olivieri","Olmi","Orlandi","Orlandini","Orlando","Orsini","Ortolani","Ottanelli","Pacciani","Pace","Paci","Pacini","Pagani","Pagano","Paggetti","Pagliai","Pagni","Pagnini","Paladini","Palagi","Palchetti","Palloni","Palmieri","Palumbo","Pampaloni","Pancani","Pandolfi","Pandolfini","Panerai","Panichi","Paoletti","Paoli","Paolini","Papi","Papini","Papucci","Parenti","Parigi","Parisi","Parri","Parrini","Pasquini","Passeri","Pecchioli","Pecorini","Pellegrini","Pepi","Perini","Perrone","Peruzzi","Pesci","Pestelli","Petri","Petrini","Petrucci","Pettini","Pezzati","Pezzatini","Piani","Piazza","Piazzesi","Piazzini","Piccardi","Picchi","Piccini","Piccioli","Pieraccini","Pieraccioni","Pieralli","Pierattini","Pieri","Pierini","Pieroni","Pietrini","Pini","Pinna","Pinto","Pinzani","Pinzauti","Piras","Pisani","Pistolesi","Poggesi","Poggi","Poggiali","Poggiolini","Poli","Pollastri","Porciani","Pozzi","Pratellesi","Pratesi","Prosperi","Pruneti","Pucci","Puccini","Puccioni","Pugi","Pugliese","Puliti","Querci","Quercioli","Raddi","Radu","Raffaelli","Ragazzini","Ranfagni","Ranieri","Rastrelli","Raugei","Raveggi","Renai","Renzi","Rettori","Ricci","Ricciardi","Ridi","Ridolfi","Rigacci","Righi","Righini","Rinaldi","Risaliti","Ristori","Rizzo","Rocchi","Rocchini","Rogai","Romagnoli","Romanelli","Romani","Romano","Romei","Romeo","Romiti","Romoli","Romolini","Rontini","Rosati","Roselli","Rosi","Rossetti","Rossi","Rossini","Rovai","Ruggeri","Ruggiero","Russo","Sabatini","Saccardi","Sacchetti","Sacchi","Sacco","Salerno","Salimbeni","Salucci","Salvadori","Salvestrini","Salvi","Salvini","Sanesi","Sani","Sanna","Santi","Santini","Santoni","Santoro","Santucci","Sardi","Sarri","Sarti","Sassi","Sbolci","Scali","Scarpelli","Scarselli","Scopetani","Secci","Selvi","Senatori","Senesi","Serafini","Sereni","Serra","Sestini","Sguanci","Sieni","Signorini","Silvestri","Simoncini","Simonetti","Simoni","Singh","Sodi","Soldi","Somigli","Sorbi","Sorelli","Sorrentino","Sottili","Spina","Spinelli","Staccioli","Staderini","Stefanelli","Stefani","Stefanini","Stella","Susini","Tacchi","Tacconi","Taddei","Tagliaferri","Tamburini","Tanganelli","Tani","Tanini","Tapinassi","Tarchi","Tarchiani","Targioni","Tassi","Tassini","Tempesti","Terzani","Tesi","Testa","Testi","Tilli","Tinti","Tirinnanzi","Toccafondi","Tofanari","Tofani","Tognaccini","Tonelli","Tonini","Torelli","Torrini","Tosi","Toti","Tozzi","Trambusti","Trapani","Tucci","Turchi","Ugolini","Ulivi","Valente","Valenti","Valentini","Vangelisti","Vanni","Vannini","Vannoni","Vannozzi","Vannucchi","Vannucci","Ventura","Venturi","Venturini","Vestri","Vettori","Vichi","Viciani","Vieri","Vigiani","Vignoli","Vignolini","Vignozzi","Villani","Vinci","Visani","Vitale","Vitali","Viti","Viviani","Vivoli","Volpe","Volpi","Wang","Wu","Xu","Yang","Ye","Zagli","Zani","Zanieri","Zanobini","Zecchi","Zetti","Zhang","Zheng","Zhou","Zhu","Zingoni","Zini","Zoppi"]},// Data taken from https://github.com/umpirsky/country-list/blob/master/data/en_US/country.json
	countries:[{"name":"Afghanistan","abbreviation":"AF"},{"name":"Åland Islands","abbreviation":"AX"},{"name":"Albania","abbreviation":"AL"},{"name":"Algeria","abbreviation":"DZ"},{"name":"American Samoa","abbreviation":"AS"},{"name":"Andorra","abbreviation":"AD"},{"name":"Angola","abbreviation":"AO"},{"name":"Anguilla","abbreviation":"AI"},{"name":"Antarctica","abbreviation":"AQ"},{"name":"Antigua & Barbuda","abbreviation":"AG"},{"name":"Argentina","abbreviation":"AR"},{"name":"Armenia","abbreviation":"AM"},{"name":"Aruba","abbreviation":"AW"},{"name":"Ascension Island","abbreviation":"AC"},{"name":"Australia","abbreviation":"AU"},{"name":"Austria","abbreviation":"AT"},{"name":"Azerbaijan","abbreviation":"AZ"},{"name":"Bahamas","abbreviation":"BS"},{"name":"Bahrain","abbreviation":"BH"},{"name":"Bangladesh","abbreviation":"BD"},{"name":"Barbados","abbreviation":"BB"},{"name":"Belarus","abbreviation":"BY"},{"name":"Belgium","abbreviation":"BE"},{"name":"Belize","abbreviation":"BZ"},{"name":"Benin","abbreviation":"BJ"},{"name":"Bermuda","abbreviation":"BM"},{"name":"Bhutan","abbreviation":"BT"},{"name":"Bolivia","abbreviation":"BO"},{"name":"Bosnia & Herzegovina","abbreviation":"BA"},{"name":"Botswana","abbreviation":"BW"},{"name":"Brazil","abbreviation":"BR"},{"name":"British Indian Ocean Territory","abbreviation":"IO"},{"name":"British Virgin Islands","abbreviation":"VG"},{"name":"Brunei","abbreviation":"BN"},{"name":"Bulgaria","abbreviation":"BG"},{"name":"Burkina Faso","abbreviation":"BF"},{"name":"Burundi","abbreviation":"BI"},{"name":"Cambodia","abbreviation":"KH"},{"name":"Cameroon","abbreviation":"CM"},{"name":"Canada","abbreviation":"CA"},{"name":"Canary Islands","abbreviation":"IC"},{"name":"Cape Verde","abbreviation":"CV"},{"name":"Caribbean Netherlands","abbreviation":"BQ"},{"name":"Cayman Islands","abbreviation":"KY"},{"name":"Central African Republic","abbreviation":"CF"},{"name":"Ceuta & Melilla","abbreviation":"EA"},{"name":"Chad","abbreviation":"TD"},{"name":"Chile","abbreviation":"CL"},{"name":"China","abbreviation":"CN"},{"name":"Christmas Island","abbreviation":"CX"},{"name":"Cocos (Keeling) Islands","abbreviation":"CC"},{"name":"Colombia","abbreviation":"CO"},{"name":"Comoros","abbreviation":"KM"},{"name":"Congo - Brazzaville","abbreviation":"CG"},{"name":"Congo - Kinshasa","abbreviation":"CD"},{"name":"Cook Islands","abbreviation":"CK"},{"name":"Costa Rica","abbreviation":"CR"},{"name":"Côte d'Ivoire","abbreviation":"CI"},{"name":"Croatia","abbreviation":"HR"},{"name":"Cuba","abbreviation":"CU"},{"name":"Curaçao","abbreviation":"CW"},{"name":"Cyprus","abbreviation":"CY"},{"name":"Czech Republic","abbreviation":"CZ"},{"name":"Denmark","abbreviation":"DK"},{"name":"Diego Garcia","abbreviation":"DG"},{"name":"Djibouti","abbreviation":"DJ"},{"name":"Dominica","abbreviation":"DM"},{"name":"Dominican Republic","abbreviation":"DO"},{"name":"Ecuador","abbreviation":"EC"},{"name":"Egypt","abbreviation":"EG"},{"name":"El Salvador","abbreviation":"SV"},{"name":"Equatorial Guinea","abbreviation":"GQ"},{"name":"Eritrea","abbreviation":"ER"},{"name":"Estonia","abbreviation":"EE"},{"name":"Ethiopia","abbreviation":"ET"},{"name":"Falkland Islands","abbreviation":"FK"},{"name":"Faroe Islands","abbreviation":"FO"},{"name":"Fiji","abbreviation":"FJ"},{"name":"Finland","abbreviation":"FI"},{"name":"France","abbreviation":"FR"},{"name":"French Guiana","abbreviation":"GF"},{"name":"French Polynesia","abbreviation":"PF"},{"name":"French Southern Territories","abbreviation":"TF"},{"name":"Gabon","abbreviation":"GA"},{"name":"Gambia","abbreviation":"GM"},{"name":"Georgia","abbreviation":"GE"},{"name":"Germany","abbreviation":"DE"},{"name":"Ghana","abbreviation":"GH"},{"name":"Gibraltar","abbreviation":"GI"},{"name":"Greece","abbreviation":"GR"},{"name":"Greenland","abbreviation":"GL"},{"name":"Grenada","abbreviation":"GD"},{"name":"Guadeloupe","abbreviation":"GP"},{"name":"Guam","abbreviation":"GU"},{"name":"Guatemala","abbreviation":"GT"},{"name":"Guernsey","abbreviation":"GG"},{"name":"Guinea","abbreviation":"GN"},{"name":"Guinea-Bissau","abbreviation":"GW"},{"name":"Guyana","abbreviation":"GY"},{"name":"Haiti","abbreviation":"HT"},{"name":"Honduras","abbreviation":"HN"},{"name":"Hong Kong SAR China","abbreviation":"HK"},{"name":"Hungary","abbreviation":"HU"},{"name":"Iceland","abbreviation":"IS"},{"name":"India","abbreviation":"IN"},{"name":"Indonesia","abbreviation":"ID"},{"name":"Iran","abbreviation":"IR"},{"name":"Iraq","abbreviation":"IQ"},{"name":"Ireland","abbreviation":"IE"},{"name":"Isle of Man","abbreviation":"IM"},{"name":"Israel","abbreviation":"IL"},{"name":"Italy","abbreviation":"IT"},{"name":"Jamaica","abbreviation":"JM"},{"name":"Japan","abbreviation":"JP"},{"name":"Jersey","abbreviation":"JE"},{"name":"Jordan","abbreviation":"JO"},{"name":"Kazakhstan","abbreviation":"KZ"},{"name":"Kenya","abbreviation":"KE"},{"name":"Kiribati","abbreviation":"KI"},{"name":"Kosovo","abbreviation":"XK"},{"name":"Kuwait","abbreviation":"KW"},{"name":"Kyrgyzstan","abbreviation":"KG"},{"name":"Laos","abbreviation":"LA"},{"name":"Latvia","abbreviation":"LV"},{"name":"Lebanon","abbreviation":"LB"},{"name":"Lesotho","abbreviation":"LS"},{"name":"Liberia","abbreviation":"LR"},{"name":"Libya","abbreviation":"LY"},{"name":"Liechtenstein","abbreviation":"LI"},{"name":"Lithuania","abbreviation":"LT"},{"name":"Luxembourg","abbreviation":"LU"},{"name":"Macau SAR China","abbreviation":"MO"},{"name":"Macedonia","abbreviation":"MK"},{"name":"Madagascar","abbreviation":"MG"},{"name":"Malawi","abbreviation":"MW"},{"name":"Malaysia","abbreviation":"MY"},{"name":"Maldives","abbreviation":"MV"},{"name":"Mali","abbreviation":"ML"},{"name":"Malta","abbreviation":"MT"},{"name":"Marshall Islands","abbreviation":"MH"},{"name":"Martinique","abbreviation":"MQ"},{"name":"Mauritania","abbreviation":"MR"},{"name":"Mauritius","abbreviation":"MU"},{"name":"Mayotte","abbreviation":"YT"},{"name":"Mexico","abbreviation":"MX"},{"name":"Micronesia","abbreviation":"FM"},{"name":"Moldova","abbreviation":"MD"},{"name":"Monaco","abbreviation":"MC"},{"name":"Mongolia","abbreviation":"MN"},{"name":"Montenegro","abbreviation":"ME"},{"name":"Montserrat","abbreviation":"MS"},{"name":"Morocco","abbreviation":"MA"},{"name":"Mozambique","abbreviation":"MZ"},{"name":"Myanmar (Burma)","abbreviation":"MM"},{"name":"Namibia","abbreviation":"NA"},{"name":"Nauru","abbreviation":"NR"},{"name":"Nepal","abbreviation":"NP"},{"name":"Netherlands","abbreviation":"NL"},{"name":"New Caledonia","abbreviation":"NC"},{"name":"New Zealand","abbreviation":"NZ"},{"name":"Nicaragua","abbreviation":"NI"},{"name":"Niger","abbreviation":"NE"},{"name":"Nigeria","abbreviation":"NG"},{"name":"Niue","abbreviation":"NU"},{"name":"Norfolk Island","abbreviation":"NF"},{"name":"North Korea","abbreviation":"KP"},{"name":"Northern Mariana Islands","abbreviation":"MP"},{"name":"Norway","abbreviation":"NO"},{"name":"Oman","abbreviation":"OM"},{"name":"Pakistan","abbreviation":"PK"},{"name":"Palau","abbreviation":"PW"},{"name":"Palestinian Territories","abbreviation":"PS"},{"name":"Panama","abbreviation":"PA"},{"name":"Papua New Guinea","abbreviation":"PG"},{"name":"Paraguay","abbreviation":"PY"},{"name":"Peru","abbreviation":"PE"},{"name":"Philippines","abbreviation":"PH"},{"name":"Pitcairn Islands","abbreviation":"PN"},{"name":"Poland","abbreviation":"PL"},{"name":"Portugal","abbreviation":"PT"},{"name":"Puerto Rico","abbreviation":"PR"},{"name":"Qatar","abbreviation":"QA"},{"name":"Réunion","abbreviation":"RE"},{"name":"Romania","abbreviation":"RO"},{"name":"Russia","abbreviation":"RU"},{"name":"Rwanda","abbreviation":"RW"},{"name":"Samoa","abbreviation":"WS"},{"name":"San Marino","abbreviation":"SM"},{"name":"São Tomé and Príncipe","abbreviation":"ST"},{"name":"Saudi Arabia","abbreviation":"SA"},{"name":"Senegal","abbreviation":"SN"},{"name":"Serbia","abbreviation":"RS"},{"name":"Seychelles","abbreviation":"SC"},{"name":"Sierra Leone","abbreviation":"SL"},{"name":"Singapore","abbreviation":"SG"},{"name":"Sint Maarten","abbreviation":"SX"},{"name":"Slovakia","abbreviation":"SK"},{"name":"Slovenia","abbreviation":"SI"},{"name":"Solomon Islands","abbreviation":"SB"},{"name":"Somalia","abbreviation":"SO"},{"name":"South Africa","abbreviation":"ZA"},{"name":"South Georgia & South Sandwich Islands","abbreviation":"GS"},{"name":"South Korea","abbreviation":"KR"},{"name":"South Sudan","abbreviation":"SS"},{"name":"Spain","abbreviation":"ES"},{"name":"Sri Lanka","abbreviation":"LK"},{"name":"St. Barthélemy","abbreviation":"BL"},{"name":"St. Helena","abbreviation":"SH"},{"name":"St. Kitts & Nevis","abbreviation":"KN"},{"name":"St. Lucia","abbreviation":"LC"},{"name":"St. Martin","abbreviation":"MF"},{"name":"St. Pierre & Miquelon","abbreviation":"PM"},{"name":"St. Vincent & Grenadines","abbreviation":"VC"},{"name":"Sudan","abbreviation":"SD"},{"name":"Suriname","abbreviation":"SR"},{"name":"Svalbard & Jan Mayen","abbreviation":"SJ"},{"name":"Swaziland","abbreviation":"SZ"},{"name":"Sweden","abbreviation":"SE"},{"name":"Switzerland","abbreviation":"CH"},{"name":"Syria","abbreviation":"SY"},{"name":"Taiwan","abbreviation":"TW"},{"name":"Tajikistan","abbreviation":"TJ"},{"name":"Tanzania","abbreviation":"TZ"},{"name":"Thailand","abbreviation":"TH"},{"name":"Timor-Leste","abbreviation":"TL"},{"name":"Togo","abbreviation":"TG"},{"name":"Tokelau","abbreviation":"TK"},{"name":"Tonga","abbreviation":"TO"},{"name":"Trinidad & Tobago","abbreviation":"TT"},{"name":"Tristan da Cunha","abbreviation":"TA"},{"name":"Tunisia","abbreviation":"TN"},{"name":"Turkey","abbreviation":"TR"},{"name":"Turkmenistan","abbreviation":"TM"},{"name":"Turks & Caicos Islands","abbreviation":"TC"},{"name":"Tuvalu","abbreviation":"TV"},{"name":"U.S. Outlying Islands","abbreviation":"UM"},{"name":"U.S. Virgin Islands","abbreviation":"VI"},{"name":"Uganda","abbreviation":"UG"},{"name":"Ukraine","abbreviation":"UA"},{"name":"United Arab Emirates","abbreviation":"AE"},{"name":"United Kingdom","abbreviation":"GB"},{"name":"United States","abbreviation":"US"},{"name":"Uruguay","abbreviation":"UY"},{"name":"Uzbekistan","abbreviation":"UZ"},{"name":"Vanuatu","abbreviation":"VU"},{"name":"Vatican City","abbreviation":"VA"},{"name":"Venezuela","abbreviation":"VE"},{"name":"Vietnam","abbreviation":"VN"},{"name":"Wallis & Futuna","abbreviation":"WF"},{"name":"Western Sahara","abbreviation":"EH"},{"name":"Yemen","abbreviation":"YE"},{"name":"Zambia","abbreviation":"ZM"},{"name":"Zimbabwe","abbreviation":"ZW"}],counties:{// Data taken from http://www.downloadexcelfiles.com/gb_en/download-excel-file-list-counties-uk
	"uk":[{name:'Bath and North East Somerset'},{name:'Bedford'},{name:'Blackburn with Darwen'},{name:'Blackpool'},{name:'Bournemouth'},{name:'Bracknell Forest'},{name:'Brighton & Hove'},{name:'Bristol'},{name:'Buckinghamshire'},{name:'Cambridgeshire'},{name:'Central Bedfordshire'},{name:'Cheshire East'},{name:'Cheshire West and Chester'},{name:'Cornwall'},{name:'County Durham'},{name:'Cumbria'},{name:'Darlington'},{name:'Derby'},{name:'Derbyshire'},{name:'Devon'},{name:'Dorset'},{name:'East Riding of Yorkshire'},{name:'East Sussex'},{name:'Essex'},{name:'Gloucestershire'},{name:'Greater London'},{name:'Greater Manchester'},{name:'Halton'},{name:'Hampshire'},{name:'Hartlepool'},{name:'Herefordshire'},{name:'Hertfordshire'},{name:'Hull'},{name:'Isle of Wight'},{name:'Isles of Scilly'},{name:'Kent'},{name:'Lancashire'},{name:'Leicester'},{name:'Leicestershire'},{name:'Lincolnshire'},{name:'Luton'},{name:'Medway'},{name:'Merseyside'},{name:'Middlesbrough'},{name:'Milton Keynes'},{name:'Norfolk'},{name:'North East Lincolnshire'},{name:'North Lincolnshire'},{name:'North Somerset'},{name:'North Yorkshire'},{name:'Northamptonshire'},{name:'Northumberland'},{name:'Nottingham'},{name:'Nottinghamshire'},{name:'Oxfordshire'},{name:'Peterborough'},{name:'Plymouth'},{name:'Poole'},{name:'Portsmouth'},{name:'Reading'},{name:'Redcar and Cleveland'},{name:'Rutland'},{name:'Shropshire'},{name:'Slough'},{name:'Somerset'},{name:'South Gloucestershire'},{name:'South Yorkshire'},{name:'Southampton'},{name:'Southend-on-Sea'},{name:'Staffordshire'},{name:'Stockton-on-Tees'},{name:'Stoke-on-Trent'},{name:'Suffolk'},{name:'Surrey'},{name:'Swindon'},{name:'Telford and Wrekin'},{name:'Thurrock'},{name:'Torbay'},{name:'Tyne and Wear'},{name:'Warrington'},{name:'Warwickshire'},{name:'West Berkshire'},{name:'West Midlands'},{name:'West Sussex'},{name:'West Yorkshire'},{name:'Wiltshire'},{name:'Windsor and Maidenhead'},{name:'Wokingham'},{name:'Worcestershire'},{name:'York'}]},provinces:{"ca":[{name:'Alberta',abbreviation:'AB'},{name:'British Columbia',abbreviation:'BC'},{name:'Manitoba',abbreviation:'MB'},{name:'New Brunswick',abbreviation:'NB'},{name:'Newfoundland and Labrador',abbreviation:'NL'},{name:'Nova Scotia',abbreviation:'NS'},{name:'Ontario',abbreviation:'ON'},{name:'Prince Edward Island',abbreviation:'PE'},{name:'Quebec',abbreviation:'QC'},{name:'Saskatchewan',abbreviation:'SK'},// The case could be made that the following are not actually provinces
	// since they are technically considered "territories" however they all
	// look the same on an envelope!
	{name:'Northwest Territories',abbreviation:'NT'},{name:'Nunavut',abbreviation:'NU'},{name:'Yukon',abbreviation:'YT'}],"it":[{name:"Agrigento",abbreviation:"AG",code:84},{name:"Alessandria",abbreviation:"AL",code:6},{name:"Ancona",abbreviation:"AN",code:42},{name:"Aosta",abbreviation:"AO",code:7},{name:"L'Aquila",abbreviation:"AQ",code:66},{name:"Arezzo",abbreviation:"AR",code:51},{name:"Ascoli-Piceno",abbreviation:"AP",code:44},{name:"Asti",abbreviation:"AT",code:5},{name:"Avellino",abbreviation:"AV",code:64},{name:"Bari",abbreviation:"BA",code:72},{name:"Barletta-Andria-Trani",abbreviation:"BT",code:72},{name:"Belluno",abbreviation:"BL",code:25},{name:"Benevento",abbreviation:"BN",code:62},{name:"Bergamo",abbreviation:"BG",code:16},{name:"Biella",abbreviation:"BI",code:96},{name:"Bologna",abbreviation:"BO",code:37},{name:"Bolzano",abbreviation:"BZ",code:21},{name:"Brescia",abbreviation:"BS",code:17},{name:"Brindisi",abbreviation:"BR",code:74},{name:"Cagliari",abbreviation:"CA",code:92},{name:"Caltanissetta",abbreviation:"CL",code:85},{name:"Campobasso",abbreviation:"CB",code:70},{name:"Carbonia Iglesias",abbreviation:"CI",code:70},{name:"Caserta",abbreviation:"CE",code:61},{name:"Catania",abbreviation:"CT",code:87},{name:"Catanzaro",abbreviation:"CZ",code:79},{name:"Chieti",abbreviation:"CH",code:69},{name:"Como",abbreviation:"CO",code:13},{name:"Cosenza",abbreviation:"CS",code:78},{name:"Cremona",abbreviation:"CR",code:19},{name:"Crotone",abbreviation:"KR",code:101},{name:"Cuneo",abbreviation:"CN",code:4},{name:"Enna",abbreviation:"EN",code:86},{name:"Fermo",abbreviation:"FM",code:86},{name:"Ferrara",abbreviation:"FE",code:38},{name:"Firenze",abbreviation:"FI",code:48},{name:"Foggia",abbreviation:"FG",code:71},{name:"Forli-Cesena",abbreviation:"FC",code:71},{name:"Frosinone",abbreviation:"FR",code:60},{name:"Genova",abbreviation:"GE",code:10},{name:"Gorizia",abbreviation:"GO",code:31},{name:"Grosseto",abbreviation:"GR",code:53},{name:"Imperia",abbreviation:"IM",code:8},{name:"Isernia",abbreviation:"IS",code:94},{name:"La-Spezia",abbreviation:"SP",code:66},{name:"Latina",abbreviation:"LT",code:59},{name:"Lecce",abbreviation:"LE",code:75},{name:"Lecco",abbreviation:"LC",code:97},{name:"Livorno",abbreviation:"LI",code:49},{name:"Lodi",abbreviation:"LO",code:98},{name:"Lucca",abbreviation:"LU",code:46},{name:"Macerata",abbreviation:"MC",code:43},{name:"Mantova",abbreviation:"MN",code:20},{name:"Massa-Carrara",abbreviation:"MS",code:45},{name:"Matera",abbreviation:"MT",code:77},{name:"Medio Campidano",abbreviation:"VS",code:77},{name:"Messina",abbreviation:"ME",code:83},{name:"Milano",abbreviation:"MI",code:15},{name:"Modena",abbreviation:"MO",code:36},{name:"Monza-Brianza",abbreviation:"MB",code:36},{name:"Napoli",abbreviation:"NA",code:63},{name:"Novara",abbreviation:"NO",code:3},{name:"Nuoro",abbreviation:"NU",code:91},{name:"Ogliastra",abbreviation:"OG",code:91},{name:"Olbia Tempio",abbreviation:"OT",code:91},{name:"Oristano",abbreviation:"OR",code:95},{name:"Padova",abbreviation:"PD",code:28},{name:"Palermo",abbreviation:"PA",code:82},{name:"Parma",abbreviation:"PR",code:34},{name:"Pavia",abbreviation:"PV",code:18},{name:"Perugia",abbreviation:"PG",code:54},{name:"Pesaro-Urbino",abbreviation:"PU",code:41},{name:"Pescara",abbreviation:"PE",code:68},{name:"Piacenza",abbreviation:"PC",code:33},{name:"Pisa",abbreviation:"PI",code:50},{name:"Pistoia",abbreviation:"PT",code:47},{name:"Pordenone",abbreviation:"PN",code:93},{name:"Potenza",abbreviation:"PZ",code:76},{name:"Prato",abbreviation:"PO",code:100},{name:"Ragusa",abbreviation:"RG",code:88},{name:"Ravenna",abbreviation:"RA",code:39},{name:"Reggio-Calabria",abbreviation:"RC",code:35},{name:"Reggio-Emilia",abbreviation:"RE",code:35},{name:"Rieti",abbreviation:"RI",code:57},{name:"Rimini",abbreviation:"RN",code:99},{name:"Roma",abbreviation:"Roma",code:58},{name:"Rovigo",abbreviation:"RO",code:29},{name:"Salerno",abbreviation:"SA",code:65},{name:"Sassari",abbreviation:"SS",code:90},{name:"Savona",abbreviation:"SV",code:9},{name:"Siena",abbreviation:"SI",code:52},{name:"Siracusa",abbreviation:"SR",code:89},{name:"Sondrio",abbreviation:"SO",code:14},{name:"Taranto",abbreviation:"TA",code:73},{name:"Teramo",abbreviation:"TE",code:67},{name:"Terni",abbreviation:"TR",code:55},{name:"Torino",abbreviation:"TO",code:1},{name:"Trapani",abbreviation:"TP",code:81},{name:"Trento",abbreviation:"TN",code:22},{name:"Treviso",abbreviation:"TV",code:26},{name:"Trieste",abbreviation:"TS",code:32},{name:"Udine",abbreviation:"UD",code:30},{name:"Varese",abbreviation:"VA",code:12},{name:"Venezia",abbreviation:"VE",code:27},{name:"Verbania",abbreviation:"VB",code:27},{name:"Vercelli",abbreviation:"VC",code:2},{name:"Verona",abbreviation:"VR",code:23},{name:"Vibo-Valentia",abbreviation:"VV",code:102},{name:"Vicenza",abbreviation:"VI",code:24},{name:"Viterbo",abbreviation:"VT",code:56}]},// from: https://github.com/samsargent/Useful-Autocomplete-Data/blob/master/data/nationalities.json
	nationalities:[{name:'Afghan'},{name:'Albanian'},{name:'Algerian'},{name:'American'},{name:'Andorran'},{name:'Angolan'},{name:'Antiguans'},{name:'Argentinean'},{name:'Armenian'},{name:'Australian'},{name:'Austrian'},{name:'Azerbaijani'},{name:'Bahami'},{name:'Bahraini'},{name:'Bangladeshi'},{name:'Barbadian'},{name:'Barbudans'},{name:'Batswana'},{name:'Belarusian'},{name:'Belgian'},{name:'Belizean'},{name:'Beninese'},{name:'Bhutanese'},{name:'Bolivian'},{name:'Bosnian'},{name:'Brazilian'},{name:'British'},{name:'Bruneian'},{name:'Bulgarian'},{name:'Burkinabe'},{name:'Burmese'},{name:'Burundian'},{name:'Cambodian'},{name:'Cameroonian'},{name:'Canadian'},{name:'Cape Verdean'},{name:'Central African'},{name:'Chadian'},{name:'Chilean'},{name:'Chinese'},{name:'Colombian'},{name:'Comoran'},{name:'Congolese'},{name:'Costa Rican'},{name:'Croatian'},{name:'Cuban'},{name:'Cypriot'},{name:'Czech'},{name:'Danish'},{name:'Djibouti'},{name:'Dominican'},{name:'Dutch'},{name:'East Timorese'},{name:'Ecuadorean'},{name:'Egyptian'},{name:'Emirian'},{name:'Equatorial Guinean'},{name:'Eritrean'},{name:'Estonian'},{name:'Ethiopian'},{name:'Fijian'},{name:'Filipino'},{name:'Finnish'},{name:'French'},{name:'Gabonese'},{name:'Gambian'},{name:'Georgian'},{name:'German'},{name:'Ghanaian'},{name:'Greek'},{name:'Grenadian'},{name:'Guatemalan'},{name:'Guinea-Bissauan'},{name:'Guinean'},{name:'Guyanese'},{name:'Haitian'},{name:'Herzegovinian'},{name:'Honduran'},{name:'Hungarian'},{name:'I-Kiribati'},{name:'Icelander'},{name:'Indian'},{name:'Indonesian'},{name:'Iranian'},{name:'Iraqi'},{name:'Irish'},{name:'Israeli'},{name:'Italian'},{name:'Ivorian'},{name:'Jamaican'},{name:'Japanese'},{name:'Jordanian'},{name:'Kazakhstani'},{name:'Kenyan'},{name:'Kittian and Nevisian'},{name:'Kuwaiti'},{name:'Kyrgyz'},{name:'Laotian'},{name:'Latvian'},{name:'Lebanese'},{name:'Liberian'},{name:'Libyan'},{name:'Liechtensteiner'},{name:'Lithuanian'},{name:'Luxembourger'},{name:'Macedonian'},{name:'Malagasy'},{name:'Malawian'},{name:'Malaysian'},{name:'Maldivan'},{name:'Malian'},{name:'Maltese'},{name:'Marshallese'},{name:'Mauritanian'},{name:'Mauritian'},{name:'Mexican'},{name:'Micronesian'},{name:'Moldovan'},{name:'Monacan'},{name:'Mongolian'},{name:'Moroccan'},{name:'Mosotho'},{name:'Motswana'},{name:'Mozambican'},{name:'Namibian'},{name:'Nauruan'},{name:'Nepalese'},{name:'New Zealander'},{name:'Nicaraguan'},{name:'Nigerian'},{name:'Nigerien'},{name:'North Korean'},{name:'Northern Irish'},{name:'Norwegian'},{name:'Omani'},{name:'Pakistani'},{name:'Palauan'},{name:'Panamanian'},{name:'Papua New Guinean'},{name:'Paraguayan'},{name:'Peruvian'},{name:'Polish'},{name:'Portuguese'},{name:'Qatari'},{name:'Romani'},{name:'Russian'},{name:'Rwandan'},{name:'Saint Lucian'},{name:'Salvadoran'},{name:'Samoan'},{name:'San Marinese'},{name:'Sao Tomean'},{name:'Saudi'},{name:'Scottish'},{name:'Senegalese'},{name:'Serbian'},{name:'Seychellois'},{name:'Sierra Leonean'},{name:'Singaporean'},{name:'Slovakian'},{name:'Slovenian'},{name:'Solomon Islander'},{name:'Somali'},{name:'South African'},{name:'South Korean'},{name:'Spanish'},{name:'Sri Lankan'},{name:'Sudanese'},{name:'Surinamer'},{name:'Swazi'},{name:'Swedish'},{name:'Swiss'},{name:'Syrian'},{name:'Taiwanese'},{name:'Tajik'},{name:'Tanzanian'},{name:'Thai'},{name:'Togolese'},{name:'Tongan'},{name:'Trinidadian or Tobagonian'},{name:'Tunisian'},{name:'Turkish'},{name:'Tuvaluan'},{name:'Ugandan'},{name:'Ukrainian'},{name:'Uruguaya'},{name:'Uzbekistani'},{name:'Venezuela'},{name:'Vietnamese'},{name:'Wels'},{name:'Yemenit'},{name:'Zambia'},{name:'Zimbabwe'}],us_states_and_dc:[{name:'Alabama',abbreviation:'AL'},{name:'Alaska',abbreviation:'AK'},{name:'Arizona',abbreviation:'AZ'},{name:'Arkansas',abbreviation:'AR'},{name:'California',abbreviation:'CA'},{name:'Colorado',abbreviation:'CO'},{name:'Connecticut',abbreviation:'CT'},{name:'Delaware',abbreviation:'DE'},{name:'District of Columbia',abbreviation:'DC'},{name:'Florida',abbreviation:'FL'},{name:'Georgia',abbreviation:'GA'},{name:'Hawaii',abbreviation:'HI'},{name:'Idaho',abbreviation:'ID'},{name:'Illinois',abbreviation:'IL'},{name:'Indiana',abbreviation:'IN'},{name:'Iowa',abbreviation:'IA'},{name:'Kansas',abbreviation:'KS'},{name:'Kentucky',abbreviation:'KY'},{name:'Louisiana',abbreviation:'LA'},{name:'Maine',abbreviation:'ME'},{name:'Maryland',abbreviation:'MD'},{name:'Massachusetts',abbreviation:'MA'},{name:'Michigan',abbreviation:'MI'},{name:'Minnesota',abbreviation:'MN'},{name:'Mississippi',abbreviation:'MS'},{name:'Missouri',abbreviation:'MO'},{name:'Montana',abbreviation:'MT'},{name:'Nebraska',abbreviation:'NE'},{name:'Nevada',abbreviation:'NV'},{name:'New Hampshire',abbreviation:'NH'},{name:'New Jersey',abbreviation:'NJ'},{name:'New Mexico',abbreviation:'NM'},{name:'New York',abbreviation:'NY'},{name:'North Carolina',abbreviation:'NC'},{name:'North Dakota',abbreviation:'ND'},{name:'Ohio',abbreviation:'OH'},{name:'Oklahoma',abbreviation:'OK'},{name:'Oregon',abbreviation:'OR'},{name:'Pennsylvania',abbreviation:'PA'},{name:'Rhode Island',abbreviation:'RI'},{name:'South Carolina',abbreviation:'SC'},{name:'South Dakota',abbreviation:'SD'},{name:'Tennessee',abbreviation:'TN'},{name:'Texas',abbreviation:'TX'},{name:'Utah',abbreviation:'UT'},{name:'Vermont',abbreviation:'VT'},{name:'Virginia',abbreviation:'VA'},{name:'Washington',abbreviation:'WA'},{name:'West Virginia',abbreviation:'WV'},{name:'Wisconsin',abbreviation:'WI'},{name:'Wyoming',abbreviation:'WY'}],territories:[{name:'American Samoa',abbreviation:'AS'},{name:'Federated States of Micronesia',abbreviation:'FM'},{name:'Guam',abbreviation:'GU'},{name:'Marshall Islands',abbreviation:'MH'},{name:'Northern Mariana Islands',abbreviation:'MP'},{name:'Puerto Rico',abbreviation:'PR'},{name:'Virgin Islands, U.S.',abbreviation:'VI'}],armed_forces:[{name:'Armed Forces Europe',abbreviation:'AE'},{name:'Armed Forces Pacific',abbreviation:'AP'},{name:'Armed Forces the Americas',abbreviation:'AA'}],country_regions:{it:[{name:"Valle d'Aosta",abbreviation:"VDA"},{name:"Piemonte",abbreviation:"PIE"},{name:"Lombardia",abbreviation:"LOM"},{name:"Veneto",abbreviation:"VEN"},{name:"Trentino Alto Adige",abbreviation:"TAA"},{name:"Friuli Venezia Giulia",abbreviation:"FVG"},{name:"Liguria",abbreviation:"LIG"},{name:"Emilia Romagna",abbreviation:"EMR"},{name:"Toscana",abbreviation:"TOS"},{name:"Umbria",abbreviation:"UMB"},{name:"Marche",abbreviation:"MAR"},{name:"Abruzzo",abbreviation:"ABR"},{name:"Lazio",abbreviation:"LAZ"},{name:"Campania",abbreviation:"CAM"},{name:"Puglia",abbreviation:"PUG"},{name:"Basilicata",abbreviation:"BAS"},{name:"Molise",abbreviation:"MOL"},{name:"Calabria",abbreviation:"CAL"},{name:"Sicilia",abbreviation:"SIC"},{name:"Sardegna",abbreviation:"SAR"}]},street_suffixes:{'us':[{name:'Avenue',abbreviation:'Ave'},{name:'Boulevard',abbreviation:'Blvd'},{name:'Center',abbreviation:'Ctr'},{name:'Circle',abbreviation:'Cir'},{name:'Court',abbreviation:'Ct'},{name:'Drive',abbreviation:'Dr'},{name:'Extension',abbreviation:'Ext'},{name:'Glen',abbreviation:'Gln'},{name:'Grove',abbreviation:'Grv'},{name:'Heights',abbreviation:'Hts'},{name:'Highway',abbreviation:'Hwy'},{name:'Junction',abbreviation:'Jct'},{name:'Key',abbreviation:'Key'},{name:'Lane',abbreviation:'Ln'},{name:'Loop',abbreviation:'Loop'},{name:'Manor',abbreviation:'Mnr'},{name:'Mill',abbreviation:'Mill'},{name:'Park',abbreviation:'Park'},{name:'Parkway',abbreviation:'Pkwy'},{name:'Pass',abbreviation:'Pass'},{name:'Path',abbreviation:'Path'},{name:'Pike',abbreviation:'Pike'},{name:'Place',abbreviation:'Pl'},{name:'Plaza',abbreviation:'Plz'},{name:'Point',abbreviation:'Pt'},{name:'Ridge',abbreviation:'Rdg'},{name:'River',abbreviation:'Riv'},{name:'Road',abbreviation:'Rd'},{name:'Square',abbreviation:'Sq'},{name:'Street',abbreviation:'St'},{name:'Terrace',abbreviation:'Ter'},{name:'Trail',abbreviation:'Trl'},{name:'Turnpike',abbreviation:'Tpke'},{name:'View',abbreviation:'Vw'},{name:'Way',abbreviation:'Way'}],'it':[{name:'Accesso',abbreviation:'Acc.'},{name:'Alzaia',abbreviation:'Alz.'},{name:'Arco',abbreviation:'Arco'},{name:'Archivolto',abbreviation:'Acv.'},{name:'Arena',abbreviation:'Arena'},{name:'Argine',abbreviation:'Argine'},{name:'Bacino',abbreviation:'Bacino'},{name:'Banchi',abbreviation:'Banchi'},{name:'Banchina',abbreviation:'Ban.'},{name:'Bastioni',abbreviation:'Bas.'},{name:'Belvedere',abbreviation:'Belv.'},{name:'Borgata',abbreviation:'B.ta'},{name:'Borgo',abbreviation:'B.go'},{name:'Calata',abbreviation:'Cal.'},{name:'Calle',abbreviation:'Calle'},{name:'Campiello',abbreviation:'Cam.'},{name:'Campo',abbreviation:'Cam.'},{name:'Canale',abbreviation:'Can.'},{name:'Carraia',abbreviation:'Carr.'},{name:'Cascina',abbreviation:'Cascina'},{name:'Case sparse',abbreviation:'c.s.'},{name:'Cavalcavia',abbreviation:'Cv.'},{name:'Circonvallazione',abbreviation:'Cv.'},{name:'Complanare',abbreviation:'C.re'},{name:'Contrada',abbreviation:'C.da'},{name:'Corso',abbreviation:'C.so'},{name:'Corte',abbreviation:'C.te'},{name:'Cortile',abbreviation:'C.le'},{name:'Diramazione',abbreviation:'Dir.'},{name:'Fondaco',abbreviation:'F.co'},{name:'Fondamenta',abbreviation:'F.ta'},{name:'Fondo',abbreviation:'F.do'},{name:'Frazione',abbreviation:'Fr.'},{name:'Isola',abbreviation:'Is.'},{name:'Largo',abbreviation:'L.go'},{name:'Litoranea',abbreviation:'Lit.'},{name:'Lungolago',abbreviation:'L.go lago'},{name:'Lungo Po',abbreviation:'l.go Po'},{name:'Molo',abbreviation:'Molo'},{name:'Mura',abbreviation:'Mura'},{name:'Passaggio privato',abbreviation:'pass. priv.'},{name:'Passeggiata',abbreviation:'Pass.'},{name:'Piazza',abbreviation:'P.zza'},{name:'Piazzale',abbreviation:'P.le'},{name:'Ponte',abbreviation:'P.te'},{name:'Portico',abbreviation:'P.co'},{name:'Rampa',abbreviation:'Rampa'},{name:'Regione',abbreviation:'Reg.'},{name:'Rione',abbreviation:'R.ne'},{name:'Rio',abbreviation:'Rio'},{name:'Ripa',abbreviation:'Ripa'},{name:'Riva',abbreviation:'Riva'},{name:'Rondò',abbreviation:'Rondò'},{name:'Rotonda',abbreviation:'Rot.'},{name:'Sagrato',abbreviation:'Sagr.'},{name:'Salita',abbreviation:'Sal.'},{name:'Scalinata',abbreviation:'Scal.'},{name:'Scalone',abbreviation:'Scal.'},{name:'Slargo',abbreviation:'Sl.'},{name:'Sottoportico',abbreviation:'Sott.'},{name:'Strada',abbreviation:'Str.'},{name:'Stradale',abbreviation:'Str.le'},{name:'Strettoia',abbreviation:'Strett.'},{name:'Traversa',abbreviation:'Trav.'},{name:'Via',abbreviation:'V.'},{name:'Viale',abbreviation:'V.le'},{name:'Vicinale',abbreviation:'Vic.le'},{name:'Vicolo',abbreviation:'Vic.'}]},months:[{name:'January',short_name:'Jan',numeric:'01',days:31},// Not messing with leap years...
	{name:'February',short_name:'Feb',numeric:'02',days:28},{name:'March',short_name:'Mar',numeric:'03',days:31},{name:'April',short_name:'Apr',numeric:'04',days:30},{name:'May',short_name:'May',numeric:'05',days:31},{name:'June',short_name:'Jun',numeric:'06',days:30},{name:'July',short_name:'Jul',numeric:'07',days:31},{name:'August',short_name:'Aug',numeric:'08',days:31},{name:'September',short_name:'Sep',numeric:'09',days:30},{name:'October',short_name:'Oct',numeric:'10',days:31},{name:'November',short_name:'Nov',numeric:'11',days:30},{name:'December',short_name:'Dec',numeric:'12',days:31}],// http://en.wikipedia.org/wiki/Bank_card_number#Issuer_identification_number_.28IIN.29
	cc_types:[{name:"American Express",short_name:'amex',prefix:'34',length:15},{name:"Bankcard",short_name:'bankcard',prefix:'5610',length:16},{name:"China UnionPay",short_name:'chinaunion',prefix:'62',length:16},{name:"Diners Club Carte Blanche",short_name:'dccarte',prefix:'300',length:14},{name:"Diners Club enRoute",short_name:'dcenroute',prefix:'2014',length:15},{name:"Diners Club International",short_name:'dcintl',prefix:'36',length:14},{name:"Diners Club United States & Canada",short_name:'dcusc',prefix:'54',length:16},{name:"Discover Card",short_name:'discover',prefix:'6011',length:16},{name:"InstaPayment",short_name:'instapay',prefix:'637',length:16},{name:"JCB",short_name:'jcb',prefix:'3528',length:16},{name:"Laser",short_name:'laser',prefix:'6304',length:16},{name:"Maestro",short_name:'maestro',prefix:'5018',length:16},{name:"Mastercard",short_name:'mc',prefix:'51',length:16},{name:"Solo",short_name:'solo',prefix:'6334',length:16},{name:"Switch",short_name:'switch',prefix:'4903',length:16},{name:"Visa",short_name:'visa',prefix:'4',length:16},{name:"Visa Electron",short_name:'electron',prefix:'4026',length:16}],//return all world currency by ISO 4217
	currency_types:[{'code':'AED','name':'United Arab Emirates Dirham'},{'code':'AFN','name':'Afghanistan Afghani'},{'code':'ALL','name':'Albania Lek'},{'code':'AMD','name':'Armenia Dram'},{'code':'ANG','name':'Netherlands Antilles Guilder'},{'code':'AOA','name':'Angola Kwanza'},{'code':'ARS','name':'Argentina Peso'},{'code':'AUD','name':'Australia Dollar'},{'code':'AWG','name':'Aruba Guilder'},{'code':'AZN','name':'Azerbaijan New Manat'},{'code':'BAM','name':'Bosnia and Herzegovina Convertible Marka'},{'code':'BBD','name':'Barbados Dollar'},{'code':'BDT','name':'Bangladesh Taka'},{'code':'BGN','name':'Bulgaria Lev'},{'code':'BHD','name':'Bahrain Dinar'},{'code':'BIF','name':'Burundi Franc'},{'code':'BMD','name':'Bermuda Dollar'},{'code':'BND','name':'Brunei Darussalam Dollar'},{'code':'BOB','name':'Bolivia Boliviano'},{'code':'BRL','name':'Brazil Real'},{'code':'BSD','name':'Bahamas Dollar'},{'code':'BTN','name':'Bhutan Ngultrum'},{'code':'BWP','name':'Botswana Pula'},{'code':'BYR','name':'Belarus Ruble'},{'code':'BZD','name':'Belize Dollar'},{'code':'CAD','name':'Canada Dollar'},{'code':'CDF','name':'Congo/Kinshasa Franc'},{'code':'CHF','name':'Switzerland Franc'},{'code':'CLP','name':'Chile Peso'},{'code':'CNY','name':'China Yuan Renminbi'},{'code':'COP','name':'Colombia Peso'},{'code':'CRC','name':'Costa Rica Colon'},{'code':'CUC','name':'Cuba Convertible Peso'},{'code':'CUP','name':'Cuba Peso'},{'code':'CVE','name':'Cape Verde Escudo'},{'code':'CZK','name':'Czech Republic Koruna'},{'code':'DJF','name':'Djibouti Franc'},{'code':'DKK','name':'Denmark Krone'},{'code':'DOP','name':'Dominican Republic Peso'},{'code':'DZD','name':'Algeria Dinar'},{'code':'EGP','name':'Egypt Pound'},{'code':'ERN','name':'Eritrea Nakfa'},{'code':'ETB','name':'Ethiopia Birr'},{'code':'EUR','name':'Euro Member Countries'},{'code':'FJD','name':'Fiji Dollar'},{'code':'FKP','name':'Falkland Islands (Malvinas) Pound'},{'code':'GBP','name':'United Kingdom Pound'},{'code':'GEL','name':'Georgia Lari'},{'code':'GGP','name':'Guernsey Pound'},{'code':'GHS','name':'Ghana Cedi'},{'code':'GIP','name':'Gibraltar Pound'},{'code':'GMD','name':'Gambia Dalasi'},{'code':'GNF','name':'Guinea Franc'},{'code':'GTQ','name':'Guatemala Quetzal'},{'code':'GYD','name':'Guyana Dollar'},{'code':'HKD','name':'Hong Kong Dollar'},{'code':'HNL','name':'Honduras Lempira'},{'code':'HRK','name':'Croatia Kuna'},{'code':'HTG','name':'Haiti Gourde'},{'code':'HUF','name':'Hungary Forint'},{'code':'IDR','name':'Indonesia Rupiah'},{'code':'ILS','name':'Israel Shekel'},{'code':'IMP','name':'Isle of Man Pound'},{'code':'INR','name':'India Rupee'},{'code':'IQD','name':'Iraq Dinar'},{'code':'IRR','name':'Iran Rial'},{'code':'ISK','name':'Iceland Krona'},{'code':'JEP','name':'Jersey Pound'},{'code':'JMD','name':'Jamaica Dollar'},{'code':'JOD','name':'Jordan Dinar'},{'code':'JPY','name':'Japan Yen'},{'code':'KES','name':'Kenya Shilling'},{'code':'KGS','name':'Kyrgyzstan Som'},{'code':'KHR','name':'Cambodia Riel'},{'code':'KMF','name':'Comoros Franc'},{'code':'KPW','name':'Korea (North) Won'},{'code':'KRW','name':'Korea (South) Won'},{'code':'KWD','name':'Kuwait Dinar'},{'code':'KYD','name':'Cayman Islands Dollar'},{'code':'KZT','name':'Kazakhstan Tenge'},{'code':'LAK','name':'Laos Kip'},{'code':'LBP','name':'Lebanon Pound'},{'code':'LKR','name':'Sri Lanka Rupee'},{'code':'LRD','name':'Liberia Dollar'},{'code':'LSL','name':'Lesotho Loti'},{'code':'LTL','name':'Lithuania Litas'},{'code':'LYD','name':'Libya Dinar'},{'code':'MAD','name':'Morocco Dirham'},{'code':'MDL','name':'Moldova Leu'},{'code':'MGA','name':'Madagascar Ariary'},{'code':'MKD','name':'Macedonia Denar'},{'code':'MMK','name':'Myanmar (Burma) Kyat'},{'code':'MNT','name':'Mongolia Tughrik'},{'code':'MOP','name':'Macau Pataca'},{'code':'MRO','name':'Mauritania Ouguiya'},{'code':'MUR','name':'Mauritius Rupee'},{'code':'MVR','name':'Maldives (Maldive Islands) Rufiyaa'},{'code':'MWK','name':'Malawi Kwacha'},{'code':'MXN','name':'Mexico Peso'},{'code':'MYR','name':'Malaysia Ringgit'},{'code':'MZN','name':'Mozambique Metical'},{'code':'NAD','name':'Namibia Dollar'},{'code':'NGN','name':'Nigeria Naira'},{'code':'NIO','name':'Nicaragua Cordoba'},{'code':'NOK','name':'Norway Krone'},{'code':'NPR','name':'Nepal Rupee'},{'code':'NZD','name':'New Zealand Dollar'},{'code':'OMR','name':'Oman Rial'},{'code':'PAB','name':'Panama Balboa'},{'code':'PEN','name':'Peru Nuevo Sol'},{'code':'PGK','name':'Papua New Guinea Kina'},{'code':'PHP','name':'Philippines Peso'},{'code':'PKR','name':'Pakistan Rupee'},{'code':'PLN','name':'Poland Zloty'},{'code':'PYG','name':'Paraguay Guarani'},{'code':'QAR','name':'Qatar Riyal'},{'code':'RON','name':'Romania New Leu'},{'code':'RSD','name':'Serbia Dinar'},{'code':'RUB','name':'Russia Ruble'},{'code':'RWF','name':'Rwanda Franc'},{'code':'SAR','name':'Saudi Arabia Riyal'},{'code':'SBD','name':'Solomon Islands Dollar'},{'code':'SCR','name':'Seychelles Rupee'},{'code':'SDG','name':'Sudan Pound'},{'code':'SEK','name':'Sweden Krona'},{'code':'SGD','name':'Singapore Dollar'},{'code':'SHP','name':'Saint Helena Pound'},{'code':'SLL','name':'Sierra Leone Leone'},{'code':'SOS','name':'Somalia Shilling'},{'code':'SPL','name':'Seborga Luigino'},{'code':'SRD','name':'Suriname Dollar'},{'code':'STD','name':'São Tomé and Príncipe Dobra'},{'code':'SVC','name':'El Salvador Colon'},{'code':'SYP','name':'Syria Pound'},{'code':'SZL','name':'Swaziland Lilangeni'},{'code':'THB','name':'Thailand Baht'},{'code':'TJS','name':'Tajikistan Somoni'},{'code':'TMT','name':'Turkmenistan Manat'},{'code':'TND','name':'Tunisia Dinar'},{'code':'TOP','name':'Tonga Pa\'anga'},{'code':'TRY','name':'Turkey Lira'},{'code':'TTD','name':'Trinidad and Tobago Dollar'},{'code':'TVD','name':'Tuvalu Dollar'},{'code':'TWD','name':'Taiwan New Dollar'},{'code':'TZS','name':'Tanzania Shilling'},{'code':'UAH','name':'Ukraine Hryvnia'},{'code':'UGX','name':'Uganda Shilling'},{'code':'USD','name':'United States Dollar'},{'code':'UYU','name':'Uruguay Peso'},{'code':'UZS','name':'Uzbekistan Som'},{'code':'VEF','name':'Venezuela Bolivar'},{'code':'VND','name':'Viet Nam Dong'},{'code':'VUV','name':'Vanuatu Vatu'},{'code':'WST','name':'Samoa Tala'},{'code':'XAF','name':'Communauté Financière Africaine (BEAC) CFA Franc BEAC'},{'code':'XCD','name':'East Caribbean Dollar'},{'code':'XDR','name':'International Monetary Fund (IMF) Special Drawing Rights'},{'code':'XOF','name':'Communauté Financière Africaine (BCEAO) Franc'},{'code':'XPF','name':'Comptoirs Français du Pacifique (CFP) Franc'},{'code':'YER','name':'Yemen Rial'},{'code':'ZAR','name':'South Africa Rand'},{'code':'ZMW','name':'Zambia Kwacha'},{'code':'ZWD','name':'Zimbabwe Dollar'}],// return the names of all valide colors
	colorNames:["AliceBlue","Black","Navy","DarkBlue","MediumBlue","Blue","DarkGreen","Green","Teal","DarkCyan","DeepSkyBlue","DarkTurquoise","MediumSpringGreen","Lime","SpringGreen","Aqua","Cyan","MidnightBlue","DodgerBlue","LightSeaGreen","ForestGreen","SeaGreen","DarkSlateGray","LimeGreen","MediumSeaGreen","Turquoise","RoyalBlue","SteelBlue","DarkSlateBlue","MediumTurquoise","Indigo","DarkOliveGreen","CadetBlue","CornflowerBlue","RebeccaPurple","MediumAquaMarine","DimGray","SlateBlue","OliveDrab","SlateGray","LightSlateGray","MediumSlateBlue","LawnGreen","Chartreuse","Aquamarine","Maroon","Purple","Olive","Gray","SkyBlue","LightSkyBlue","BlueViolet","DarkRed","DarkMagenta","SaddleBrown","Ivory","White","DarkSeaGreen","LightGreen","MediumPurple","DarkViolet","PaleGreen","DarkOrchid","YellowGreen","Sienna","Brown","DarkGray","LightBlue","GreenYellow","PaleTurquoise","LightSteelBlue","PowderBlue","FireBrick","DarkGoldenRod","MediumOrchid","RosyBrown","DarkKhaki","Silver","MediumVioletRed","IndianRed","Peru","Chocolate","Tan","LightGray","Thistle","Orchid","GoldenRod","PaleVioletRed","Crimson","Gainsboro","Plum","BurlyWood","LightCyan","Lavender","DarkSalmon","Violet","PaleGoldenRod","LightCoral","Khaki","AliceBlue","HoneyDew","Azure","SandyBrown","Wheat","Beige","WhiteSmoke","MintCream","GhostWhite","Salmon","AntiqueWhite","Linen","LightGoldenRodYellow","OldLace","Red","Fuchsia","Magenta","DeepPink","OrangeRed","Tomato","HotPink","Coral","DarkOrange","LightSalmon","Orange","LightPink","Pink","Gold","PeachPuff","NavajoWhite","Moccasin","Bisque","MistyRose","BlanchedAlmond","PapayaWhip","LavenderBlush","SeaShell","Cornsilk","LemonChiffon","FloralWhite","Snow","Yellow","LightYellow"],fileExtension:{"raster":["bmp","gif","gpl","ico","jpeg","psd","png","psp","raw","tiff"],"vector":["3dv","amf","awg","ai","cgm","cdr","cmx","dxf","e2d","egt","eps","fs","odg","svg","xar"],"3d":["3dmf","3dm","3mf","3ds","an8","aoi","blend","cal3d","cob","ctm","iob","jas","max","mb","mdx","obj","x","x3d"],"document":["doc","docx","dot","html","xml","odt","odm","ott","csv","rtf","tex","xhtml","xps"]},// Data taken from https://github.com/dmfilipenko/timezones.json/blob/master/timezones.json
	timezones:[{"name":"Dateline Standard Time","abbr":"DST","offset":-12,"isdst":false,"text":"(UTC-12:00) International Date Line West","utc":["Etc/GMT+12"]},{"name":"UTC-11","abbr":"U","offset":-11,"isdst":false,"text":"(UTC-11:00) Coordinated Universal Time-11","utc":["Etc/GMT+11","Pacific/Midway","Pacific/Niue","Pacific/Pago_Pago"]},{"name":"Hawaiian Standard Time","abbr":"HST","offset":-10,"isdst":false,"text":"(UTC-10:00) Hawaii","utc":["Etc/GMT+10","Pacific/Honolulu","Pacific/Johnston","Pacific/Rarotonga","Pacific/Tahiti"]},{"name":"Alaskan Standard Time","abbr":"AKDT","offset":-8,"isdst":true,"text":"(UTC-09:00) Alaska","utc":["America/Anchorage","America/Juneau","America/Nome","America/Sitka","America/Yakutat"]},{"name":"Pacific Standard Time (Mexico)","abbr":"PDT","offset":-7,"isdst":true,"text":"(UTC-08:00) Baja California","utc":["America/Santa_Isabel"]},{"name":"Pacific Standard Time","abbr":"PDT","offset":-7,"isdst":true,"text":"(UTC-08:00) Pacific Time (US & Canada)","utc":["America/Dawson","America/Los_Angeles","America/Tijuana","America/Vancouver","America/Whitehorse","PST8PDT"]},{"name":"US Mountain Standard Time","abbr":"UMST","offset":-7,"isdst":false,"text":"(UTC-07:00) Arizona","utc":["America/Creston","America/Dawson_Creek","America/Hermosillo","America/Phoenix","Etc/GMT+7"]},{"name":"Mountain Standard Time (Mexico)","abbr":"MDT","offset":-6,"isdst":true,"text":"(UTC-07:00) Chihuahua, La Paz, Mazatlan","utc":["America/Chihuahua","America/Mazatlan"]},{"name":"Mountain Standard Time","abbr":"MDT","offset":-6,"isdst":true,"text":"(UTC-07:00) Mountain Time (US & Canada)","utc":["America/Boise","America/Cambridge_Bay","America/Denver","America/Edmonton","America/Inuvik","America/Ojinaga","America/Yellowknife","MST7MDT"]},{"name":"Central America Standard Time","abbr":"CAST","offset":-6,"isdst":false,"text":"(UTC-06:00) Central America","utc":["America/Belize","America/Costa_Rica","America/El_Salvador","America/Guatemala","America/Managua","America/Tegucigalpa","Etc/GMT+6","Pacific/Galapagos"]},{"name":"Central Standard Time","abbr":"CDT","offset":-5,"isdst":true,"text":"(UTC-06:00) Central Time (US & Canada)","utc":["America/Chicago","America/Indiana/Knox","America/Indiana/Tell_City","America/Matamoros","America/Menominee","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Rainy_River","America/Rankin_Inlet","America/Resolute","America/Winnipeg","CST6CDT"]},{"name":"Central Standard Time (Mexico)","abbr":"CDT","offset":-5,"isdst":true,"text":"(UTC-06:00) Guadalajara, Mexico City, Monterrey","utc":["America/Bahia_Banderas","America/Cancun","America/Merida","America/Mexico_City","America/Monterrey"]},{"name":"Canada Central Standard Time","abbr":"CCST","offset":-6,"isdst":false,"text":"(UTC-06:00) Saskatchewan","utc":["America/Regina","America/Swift_Current"]},{"name":"SA Pacific Standard Time","abbr":"SPST","offset":-5,"isdst":false,"text":"(UTC-05:00) Bogota, Lima, Quito","utc":["America/Bogota","America/Cayman","America/Coral_Harbour","America/Eirunepe","America/Guayaquil","America/Jamaica","America/Lima","America/Panama","America/Rio_Branco","Etc/GMT+5"]},{"name":"Eastern Standard Time","abbr":"EDT","offset":-4,"isdst":true,"text":"(UTC-05:00) Eastern Time (US & Canada)","utc":["America/Detroit","America/Havana","America/Indiana/Petersburg","America/Indiana/Vincennes","America/Indiana/Winamac","America/Iqaluit","America/Kentucky/Monticello","America/Louisville","America/Montreal","America/Nassau","America/New_York","America/Nipigon","America/Pangnirtung","America/Port-au-Prince","America/Thunder_Bay","America/Toronto","EST5EDT"]},{"name":"US Eastern Standard Time","abbr":"UEDT","offset":-4,"isdst":true,"text":"(UTC-05:00) Indiana (East)","utc":["America/Indiana/Marengo","America/Indiana/Vevay","America/Indianapolis"]},{"name":"Venezuela Standard Time","abbr":"VST","offset":-4.5,"isdst":false,"text":"(UTC-04:30) Caracas","utc":["America/Caracas"]},{"name":"Paraguay Standard Time","abbr":"PST","offset":-4,"isdst":false,"text":"(UTC-04:00) Asuncion","utc":["America/Asuncion"]},{"name":"Atlantic Standard Time","abbr":"ADT","offset":-3,"isdst":true,"text":"(UTC-04:00) Atlantic Time (Canada)","utc":["America/Glace_Bay","America/Goose_Bay","America/Halifax","America/Moncton","America/Thule","Atlantic/Bermuda"]},{"name":"Central Brazilian Standard Time","abbr":"CBST","offset":-4,"isdst":false,"text":"(UTC-04:00) Cuiaba","utc":["America/Campo_Grande","America/Cuiaba"]},{"name":"SA Western Standard Time","abbr":"SWST","offset":-4,"isdst":false,"text":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan","utc":["America/Anguilla","America/Antigua","America/Aruba","America/Barbados","America/Blanc-Sablon","America/Boa_Vista","America/Curacao","America/Dominica","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guyana","America/Kralendijk","America/La_Paz","America/Lower_Princes","America/Manaus","America/Marigot","America/Martinique","America/Montserrat","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Santo_Domingo","America/St_Barthelemy","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Tortola","Etc/GMT+4"]},{"name":"Pacific SA Standard Time","abbr":"PSST","offset":-4,"isdst":false,"text":"(UTC-04:00) Santiago","utc":["America/Santiago","Antarctica/Palmer"]},{"name":"Newfoundland Standard Time","abbr":"NDT","offset":-2.5,"isdst":true,"text":"(UTC-03:30) Newfoundland","utc":["America/St_Johns"]},{"name":"E. South America Standard Time","abbr":"ESAST","offset":-3,"isdst":false,"text":"(UTC-03:00) Brasilia","utc":["America/Sao_Paulo"]},{"name":"Argentina Standard Time","abbr":"AST","offset":-3,"isdst":false,"text":"(UTC-03:00) Buenos Aires","utc":["America/Argentina/La_Rioja","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Buenos_Aires","America/Catamarca","America/Cordoba","America/Jujuy","America/Mendoza"]},{"name":"SA Eastern Standard Time","abbr":"SEST","offset":-3,"isdst":false,"text":"(UTC-03:00) Cayenne, Fortaleza","utc":["America/Araguaina","America/Belem","America/Cayenne","America/Fortaleza","America/Maceio","America/Paramaribo","America/Recife","America/Santarem","Antarctica/Rothera","Atlantic/Stanley","Etc/GMT+3"]},{"name":"Greenland Standard Time","abbr":"GDT","offset":-2,"isdst":true,"text":"(UTC-03:00) Greenland","utc":["America/Godthab"]},{"name":"Montevideo Standard Time","abbr":"MST","offset":-3,"isdst":false,"text":"(UTC-03:00) Montevideo","utc":["America/Montevideo"]},{"name":"Bahia Standard Time","abbr":"BST","offset":-3,"isdst":false,"text":"(UTC-03:00) Salvador","utc":["America/Bahia"]},{"name":"UTC-02","abbr":"U","offset":-2,"isdst":false,"text":"(UTC-02:00) Coordinated Universal Time-02","utc":["America/Noronha","Atlantic/South_Georgia","Etc/GMT+2"]},{"name":"Mid-Atlantic Standard Time","abbr":"MDT","offset":-1,"isdst":true,"text":"(UTC-02:00) Mid-Atlantic - Old"},{"name":"Azores Standard Time","abbr":"ADT","offset":0,"isdst":true,"text":"(UTC-01:00) Azores","utc":["America/Scoresbysund","Atlantic/Azores"]},{"name":"Cape Verde Standard Time","abbr":"CVST","offset":-1,"isdst":false,"text":"(UTC-01:00) Cape Verde Is.","utc":["Atlantic/Cape_Verde","Etc/GMT+1"]},{"name":"Morocco Standard Time","abbr":"MDT","offset":1,"isdst":true,"text":"(UTC) Casablanca","utc":["Africa/Casablanca","Africa/El_Aaiun"]},{"name":"UTC","abbr":"CUT","offset":0,"isdst":false,"text":"(UTC) Coordinated Universal Time","utc":["America/Danmarkshavn","Etc/GMT"]},{"name":"GMT Standard Time","abbr":"GDT","offset":1,"isdst":true,"text":"(UTC) Dublin, Edinburgh, Lisbon, London","utc":["Atlantic/Canary","Atlantic/Faeroe","Atlantic/Madeira","Europe/Dublin","Europe/Guernsey","Europe/Isle_of_Man","Europe/Jersey","Europe/Lisbon","Europe/London"]},{"name":"Greenwich Standard Time","abbr":"GST","offset":0,"isdst":false,"text":"(UTC) Monrovia, Reykjavik","utc":["Africa/Abidjan","Africa/Accra","Africa/Bamako","Africa/Banjul","Africa/Bissau","Africa/Conakry","Africa/Dakar","Africa/Freetown","Africa/Lome","Africa/Monrovia","Africa/Nouakchott","Africa/Ouagadougou","Africa/Sao_Tome","Atlantic/Reykjavik","Atlantic/St_Helena"]},{"name":"W. Europe Standard Time","abbr":"WEDT","offset":2,"isdst":true,"text":"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna","utc":["Arctic/Longyearbyen","Europe/Amsterdam","Europe/Andorra","Europe/Berlin","Europe/Busingen","Europe/Gibraltar","Europe/Luxembourg","Europe/Malta","Europe/Monaco","Europe/Oslo","Europe/Rome","Europe/San_Marino","Europe/Stockholm","Europe/Vaduz","Europe/Vatican","Europe/Vienna","Europe/Zurich"]},{"name":"Central Europe Standard Time","abbr":"CEDT","offset":2,"isdst":true,"text":"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague","utc":["Europe/Belgrade","Europe/Bratislava","Europe/Budapest","Europe/Ljubljana","Europe/Podgorica","Europe/Prague","Europe/Tirane"]},{"name":"Romance Standard Time","abbr":"RDT","offset":2,"isdst":true,"text":"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris","utc":["Africa/Ceuta","Europe/Brussels","Europe/Copenhagen","Europe/Madrid","Europe/Paris"]},{"name":"Central European Standard Time","abbr":"CEDT","offset":2,"isdst":true,"text":"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb","utc":["Europe/Sarajevo","Europe/Skopje","Europe/Warsaw","Europe/Zagreb"]},{"name":"W. Central Africa Standard Time","abbr":"WCAST","offset":1,"isdst":false,"text":"(UTC+01:00) West Central Africa","utc":["Africa/Algiers","Africa/Bangui","Africa/Brazzaville","Africa/Douala","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Luanda","Africa/Malabo","Africa/Ndjamena","Africa/Niamey","Africa/Porto-Novo","Africa/Tunis","Etc/GMT-1"]},{"name":"Namibia Standard Time","abbr":"NST","offset":1,"isdst":false,"text":"(UTC+01:00) Windhoek","utc":["Africa/Windhoek"]},{"name":"GTB Standard Time","abbr":"GDT","offset":3,"isdst":true,"text":"(UTC+02:00) Athens, Bucharest","utc":["Asia/Nicosia","Europe/Athens","Europe/Bucharest","Europe/Chisinau"]},{"name":"Middle East Standard Time","abbr":"MEDT","offset":3,"isdst":true,"text":"(UTC+02:00) Beirut","utc":["Asia/Beirut"]},{"name":"Egypt Standard Time","abbr":"EST","offset":2,"isdst":false,"text":"(UTC+02:00) Cairo","utc":["Africa/Cairo"]},{"name":"Syria Standard Time","abbr":"SDT","offset":3,"isdst":true,"text":"(UTC+02:00) Damascus","utc":["Asia/Damascus"]},{"name":"E. Europe Standard Time","abbr":"EEDT","offset":3,"isdst":true,"text":"(UTC+02:00) E. Europe"},{"name":"South Africa Standard Time","abbr":"SAST","offset":2,"isdst":false,"text":"(UTC+02:00) Harare, Pretoria","utc":["Africa/Blantyre","Africa/Bujumbura","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Kigali","Africa/Lubumbashi","Africa/Lusaka","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Etc/GMT-2"]},{"name":"FLE Standard Time","abbr":"FDT","offset":3,"isdst":true,"text":"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius","utc":["Europe/Helsinki","Europe/Kiev","Europe/Mariehamn","Europe/Riga","Europe/Sofia","Europe/Tallinn","Europe/Uzhgorod","Europe/Vilnius","Europe/Zaporozhye"]},{"name":"Turkey Standard Time","abbr":"TDT","offset":3,"isdst":true,"text":"(UTC+02:00) Istanbul","utc":["Europe/Istanbul"]},{"name":"Israel Standard Time","abbr":"JDT","offset":3,"isdst":true,"text":"(UTC+02:00) Jerusalem","utc":["Asia/Jerusalem"]},{"name":"Libya Standard Time","abbr":"LST","offset":2,"isdst":false,"text":"(UTC+02:00) Tripoli","utc":["Africa/Tripoli"]},{"name":"Jordan Standard Time","abbr":"JST","offset":3,"isdst":false,"text":"(UTC+03:00) Amman","utc":["Asia/Amman"]},{"name":"Arabic Standard Time","abbr":"AST","offset":3,"isdst":false,"text":"(UTC+03:00) Baghdad","utc":["Asia/Baghdad"]},{"name":"Kaliningrad Standard Time","abbr":"KST","offset":3,"isdst":false,"text":"(UTC+03:00) Kaliningrad, Minsk","utc":["Europe/Kaliningrad","Europe/Minsk"]},{"name":"Arab Standard Time","abbr":"AST","offset":3,"isdst":false,"text":"(UTC+03:00) Kuwait, Riyadh","utc":["Asia/Aden","Asia/Bahrain","Asia/Kuwait","Asia/Qatar","Asia/Riyadh"]},{"name":"E. Africa Standard Time","abbr":"EAST","offset":3,"isdst":false,"text":"(UTC+03:00) Nairobi","utc":["Africa/Addis_Ababa","Africa/Asmera","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Mogadishu","Africa/Nairobi","Antarctica/Syowa","Etc/GMT-3","Indian/Antananarivo","Indian/Comoro","Indian/Mayotte"]},{"name":"Iran Standard Time","abbr":"IDT","offset":4.5,"isdst":true,"text":"(UTC+03:30) Tehran","utc":["Asia/Tehran"]},{"name":"Arabian Standard Time","abbr":"AST","offset":4,"isdst":false,"text":"(UTC+04:00) Abu Dhabi, Muscat","utc":["Asia/Dubai","Asia/Muscat","Etc/GMT-4"]},{"name":"Azerbaijan Standard Time","abbr":"ADT","offset":5,"isdst":true,"text":"(UTC+04:00) Baku","utc":["Asia/Baku"]},{"name":"Russian Standard Time","abbr":"RST","offset":4,"isdst":false,"text":"(UTC+04:00) Moscow, St. Petersburg, Volgograd","utc":["Europe/Moscow","Europe/Samara","Europe/Simferopol","Europe/Volgograd"]},{"name":"Mauritius Standard Time","abbr":"MST","offset":4,"isdst":false,"text":"(UTC+04:00) Port Louis","utc":["Indian/Mahe","Indian/Mauritius","Indian/Reunion"]},{"name":"Georgian Standard Time","abbr":"GST","offset":4,"isdst":false,"text":"(UTC+04:00) Tbilisi","utc":["Asia/Tbilisi"]},{"name":"Caucasus Standard Time","abbr":"CST","offset":4,"isdst":false,"text":"(UTC+04:00) Yerevan","utc":["Asia/Yerevan"]},{"name":"Afghanistan Standard Time","abbr":"AST","offset":4.5,"isdst":false,"text":"(UTC+04:30) Kabul","utc":["Asia/Kabul"]},{"name":"West Asia Standard Time","abbr":"WAST","offset":5,"isdst":false,"text":"(UTC+05:00) Ashgabat, Tashkent","utc":["Antarctica/Mawson","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Dushanbe","Asia/Oral","Asia/Samarkand","Asia/Tashkent","Etc/GMT-5","Indian/Kerguelen","Indian/Maldives"]},{"name":"Pakistan Standard Time","abbr":"PST","offset":5,"isdst":false,"text":"(UTC+05:00) Islamabad, Karachi","utc":["Asia/Karachi"]},{"name":"India Standard Time","abbr":"IST","offset":5.5,"isdst":false,"text":"(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi","utc":["Asia/Calcutta"]},{"name":"Sri Lanka Standard Time","abbr":"SLST","offset":5.5,"isdst":false,"text":"(UTC+05:30) Sri Jayawardenepura","utc":["Asia/Colombo"]},{"name":"Nepal Standard Time","abbr":"NST","offset":5.75,"isdst":false,"text":"(UTC+05:45) Kathmandu","utc":["Asia/Katmandu"]},{"name":"Central Asia Standard Time","abbr":"CAST","offset":6,"isdst":false,"text":"(UTC+06:00) Astana","utc":["Antarctica/Vostok","Asia/Almaty","Asia/Bishkek","Asia/Qyzylorda","Asia/Urumqi","Etc/GMT-6","Indian/Chagos"]},{"name":"Bangladesh Standard Time","abbr":"BST","offset":6,"isdst":false,"text":"(UTC+06:00) Dhaka","utc":["Asia/Dhaka","Asia/Thimphu"]},{"name":"Ekaterinburg Standard Time","abbr":"EST","offset":6,"isdst":false,"text":"(UTC+06:00) Ekaterinburg","utc":["Asia/Yekaterinburg"]},{"name":"Myanmar Standard Time","abbr":"MST","offset":6.5,"isdst":false,"text":"(UTC+06:30) Yangon (Rangoon)","utc":["Asia/Rangoon","Indian/Cocos"]},{"name":"SE Asia Standard Time","abbr":"SAST","offset":7,"isdst":false,"text":"(UTC+07:00) Bangkok, Hanoi, Jakarta","utc":["Antarctica/Davis","Asia/Bangkok","Asia/Hovd","Asia/Jakarta","Asia/Phnom_Penh","Asia/Pontianak","Asia/Saigon","Asia/Vientiane","Etc/GMT-7","Indian/Christmas"]},{"name":"N. Central Asia Standard Time","abbr":"NCAST","offset":7,"isdst":false,"text":"(UTC+07:00) Novosibirsk","utc":["Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk"]},{"name":"China Standard Time","abbr":"CST","offset":8,"isdst":false,"text":"(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi","utc":["Asia/Hong_Kong","Asia/Macau","Asia/Shanghai"]},{"name":"North Asia Standard Time","abbr":"NAST","offset":8,"isdst":false,"text":"(UTC+08:00) Krasnoyarsk","utc":["Asia/Krasnoyarsk"]},{"name":"Singapore Standard Time","abbr":"MPST","offset":8,"isdst":false,"text":"(UTC+08:00) Kuala Lumpur, Singapore","utc":["Asia/Brunei","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Makassar","Asia/Manila","Asia/Singapore","Etc/GMT-8"]},{"name":"W. Australia Standard Time","abbr":"WAST","offset":8,"isdst":false,"text":"(UTC+08:00) Perth","utc":["Antarctica/Casey","Australia/Perth"]},{"name":"Taipei Standard Time","abbr":"TST","offset":8,"isdst":false,"text":"(UTC+08:00) Taipei","utc":["Asia/Taipei"]},{"name":"Ulaanbaatar Standard Time","abbr":"UST","offset":8,"isdst":false,"text":"(UTC+08:00) Ulaanbaatar","utc":["Asia/Choibalsan","Asia/Ulaanbaatar"]},{"name":"North Asia East Standard Time","abbr":"NAEST","offset":9,"isdst":false,"text":"(UTC+09:00) Irkutsk","utc":["Asia/Irkutsk"]},{"name":"Tokyo Standard Time","abbr":"TST","offset":9,"isdst":false,"text":"(UTC+09:00) Osaka, Sapporo, Tokyo","utc":["Asia/Dili","Asia/Jayapura","Asia/Tokyo","Etc/GMT-9","Pacific/Palau"]},{"name":"Korea Standard Time","abbr":"KST","offset":9,"isdst":false,"text":"(UTC+09:00) Seoul","utc":["Asia/Pyongyang","Asia/Seoul"]},{"name":"Cen. Australia Standard Time","abbr":"CAST","offset":9.5,"isdst":false,"text":"(UTC+09:30) Adelaide","utc":["Australia/Adelaide","Australia/Broken_Hill"]},{"name":"AUS Central Standard Time","abbr":"ACST","offset":9.5,"isdst":false,"text":"(UTC+09:30) Darwin","utc":["Australia/Darwin"]},{"name":"E. Australia Standard Time","abbr":"EAST","offset":10,"isdst":false,"text":"(UTC+10:00) Brisbane","utc":["Australia/Brisbane","Australia/Lindeman"]},{"name":"AUS Eastern Standard Time","abbr":"AEST","offset":10,"isdst":false,"text":"(UTC+10:00) Canberra, Melbourne, Sydney","utc":["Australia/Melbourne","Australia/Sydney"]},{"name":"West Pacific Standard Time","abbr":"WPST","offset":10,"isdst":false,"text":"(UTC+10:00) Guam, Port Moresby","utc":["Antarctica/DumontDUrville","Etc/GMT-10","Pacific/Guam","Pacific/Port_Moresby","Pacific/Saipan","Pacific/Truk"]},{"name":"Tasmania Standard Time","abbr":"TST","offset":10,"isdst":false,"text":"(UTC+10:00) Hobart","utc":["Australia/Currie","Australia/Hobart"]},{"name":"Yakutsk Standard Time","abbr":"YST","offset":10,"isdst":false,"text":"(UTC+10:00) Yakutsk","utc":["Asia/Chita","Asia/Khandyga","Asia/Yakutsk"]},{"name":"Central Pacific Standard Time","abbr":"CPST","offset":11,"isdst":false,"text":"(UTC+11:00) Solomon Is., New Caledonia","utc":["Antarctica/Macquarie","Etc/GMT-11","Pacific/Efate","Pacific/Guadalcanal","Pacific/Kosrae","Pacific/Noumea","Pacific/Ponape"]},{"name":"Vladivostok Standard Time","abbr":"VST","offset":11,"isdst":false,"text":"(UTC+11:00) Vladivostok","utc":["Asia/Sakhalin","Asia/Ust-Nera","Asia/Vladivostok"]},{"name":"New Zealand Standard Time","abbr":"NZST","offset":12,"isdst":false,"text":"(UTC+12:00) Auckland, Wellington","utc":["Antarctica/McMurdo","Pacific/Auckland"]},{"name":"UTC+12","abbr":"U","offset":12,"isdst":false,"text":"(UTC+12:00) Coordinated Universal Time+12","utc":["Etc/GMT-12","Pacific/Funafuti","Pacific/Kwajalein","Pacific/Majuro","Pacific/Nauru","Pacific/Tarawa","Pacific/Wake","Pacific/Wallis"]},{"name":"Fiji Standard Time","abbr":"FST","offset":12,"isdst":false,"text":"(UTC+12:00) Fiji","utc":["Pacific/Fiji"]},{"name":"Magadan Standard Time","abbr":"MST","offset":12,"isdst":false,"text":"(UTC+12:00) Magadan","utc":["Asia/Anadyr","Asia/Kamchatka","Asia/Magadan","Asia/Srednekolymsk"]},{"name":"Kamchatka Standard Time","abbr":"KDT","offset":13,"isdst":true,"text":"(UTC+12:00) Petropavlovsk-Kamchatsky - Old"},{"name":"Tonga Standard Time","abbr":"TST","offset":13,"isdst":false,"text":"(UTC+13:00) Nuku'alofa","utc":["Etc/GMT-13","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Tongatapu"]},{"name":"Samoa Standard Time","abbr":"SST","offset":13,"isdst":false,"text":"(UTC+13:00) Samoa","utc":["Pacific/Apia"]}]};var o_hasOwnProperty=Object.prototype.hasOwnProperty;var o_keys=Object.keys||function(obj){var result=[];for(var key in obj){if(o_hasOwnProperty.call(obj,key)){result.push(key);}}return result;};function _copyObject(source,target){var keys=o_keys(source);var key;for(var i=0,l=keys.length;i<l;i++){key=keys[i];target[key]=source[key]||target[key];}}function _copyArray(source,target){for(var i=0,l=source.length;i<l;i++){target[i]=source[i];}}function copyObject(source,_target){var isArray=Array.isArray(source);var target=_target||(isArray?new Array(source.length):{});if(isArray){_copyArray(source,target);}else{_copyObject(source,target);}return target;}/** Get the data based on key**/Chance.prototype.get=function(name){return copyObject(data[name]);};// Mac Address
	Chance.prototype.mac_address=function(options){// typically mac addresses are separated by ":"
	// however they can also be separated by "-"
	// the network variant uses a dot every fourth byte
	options=initOptions(options);if(!options.separator){options.separator=options.networkVersion?".":":";}var mac_pool="ABCDEF1234567890",mac="";if(!options.networkVersion){mac=this.n(this.string,6,{pool:mac_pool,length:2}).join(options.separator);}else{mac=this.n(this.string,3,{pool:mac_pool,length:4}).join(options.separator);}return mac;};Chance.prototype.normal=function(options){options=initOptions(options,{mean:0,dev:1,pool:[]});testRange(options.pool.constructor!==Array,"Chance: The pool option must be a valid array.");// If a pool has been passed, then we are returning an item from that pool,
	// using the normal distribution settings that were passed in
	if(options.pool.length>0){return this.normal_pool(options);}// The Marsaglia Polar method
	var s,u,v,norm,mean=options.mean,dev=options.dev;do{// U and V are from the uniform distribution on (-1, 1)
	u=this.random()*2-1;v=this.random()*2-1;s=u*u+v*v;}while(s>=1);// Compute the standard normal variate
	norm=u*Math.sqrt(-2*Math.log(s)/s);// Shape and scale
	return dev*norm+mean;};Chance.prototype.normal_pool=function(options){var performanceCounter=0;do{var idx=Math.round(this.normal({mean:options.mean,dev:options.dev}));if(idx<options.pool.length&&idx>=0){return options.pool[idx];}else{performanceCounter++;}}while(performanceCounter<100);throw new RangeError("Chance: Your pool is too small for the given mean and standard deviation. Please adjust.");};Chance.prototype.radio=function(options){// Initial Letter (Typically Designated by Side of Mississippi River)
	options=initOptions(options,{side:"?"});var fl="";switch(options.side.toLowerCase()){case"east":case"e":fl="W";break;case"west":case"w":fl="K";break;default:fl=this.character({pool:"KW"});break;}return fl+this.character({alpha:true,casing:"upper"})+this.character({alpha:true,casing:"upper"})+this.character({alpha:true,casing:"upper"});};// Set the data as key and data or the data map
	Chance.prototype.set=function(name,values){if(typeof name==="string"){data[name]=values;}else{data=copyObject(name,data);}};Chance.prototype.tv=function(options){return this.radio(options);};// ID number for Brazil companies
	Chance.prototype.cnpj=function(){var n=this.n(this.natural,8,{max:9});var d1=2+n[7]*6+n[6]*7+n[5]*8+n[4]*9+n[3]*2+n[2]*3+n[1]*4+n[0]*5;d1=11-d1%11;if(d1>=10){d1=0;}var d2=d1*2+3+n[7]*7+n[6]*8+n[5]*9+n[4]*2+n[3]*3+n[2]*4+n[1]*5+n[0]*6;d2=11-d2%11;if(d2>=10){d2=0;}return''+n[0]+n[1]+'.'+n[2]+n[3]+n[4]+'.'+n[5]+n[6]+n[7]+'/0001-'+d1+d2;};// -- End Miscellaneous --
	Chance.prototype.mersenne_twister=function(seed){return new MersenneTwister(seed);};Chance.prototype.blueimp_md5=function(){return new BlueImpMD5();};// Mersenne Twister from https://gist.github.com/banksean/300494
	var MersenneTwister=function MersenneTwister(seed){if(seed===undefined){// kept random number same size as time used previously to ensure no unexpected results downstream
	seed=Math.floor(Math.random()*Math.pow(10,13));}/* Period parameters */this.N=624;this.M=397;this.MATRIX_A=0x9908b0df;/* constant vector a */this.UPPER_MASK=0x80000000;/* most significant w-r bits */this.LOWER_MASK=0x7fffffff;/* least significant r bits */this.mt=new Array(this.N);/* the array for the state vector */this.mti=this.N+1;/* mti==N + 1 means mt[N] is not initialized */this.init_genrand(seed);};/* initializes mt[N] with a seed */MersenneTwister.prototype.init_genrand=function(s){this.mt[0]=s>>>0;for(this.mti=1;this.mti<this.N;this.mti++){s=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(((s&0xffff0000)>>>16)*1812433253<<16)+(s&0x0000ffff)*1812433253+this.mti;/* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. *//* In the previous versions, MSBs of the seed affect   *//* only MSBs of the array mt[].                        *//* 2002/01/09 modified by Makoto Matsumoto             */this.mt[this.mti]>>>=0;/* for >32 bit machines */}};/* initialize by an array with array-length *//* init_key is the array for initializing keys *//* key_length is its length *//* slight change for C++, 2004/2/26 */MersenneTwister.prototype.init_by_array=function(init_key,key_length){var i=1,j=0,k,s;this.init_genrand(19650218);k=this.N>key_length?this.N:key_length;for(;k;k--){s=this.mt[i-1]^this.mt[i-1]>>>30;this.mt[i]=(this.mt[i]^(((s&0xffff0000)>>>16)*1664525<<16)+(s&0x0000ffff)*1664525)+init_key[j]+j;/* non linear */this.mt[i]>>>=0;/* for WORDSIZE > 32 machines */i++;j++;if(i>=this.N){this.mt[0]=this.mt[this.N-1];i=1;}if(j>=key_length){j=0;}}for(k=this.N-1;k;k--){s=this.mt[i-1]^this.mt[i-1]>>>30;this.mt[i]=(this.mt[i]^(((s&0xffff0000)>>>16)*1566083941<<16)+(s&0x0000ffff)*1566083941)-i;/* non linear */this.mt[i]>>>=0;/* for WORDSIZE > 32 machines */i++;if(i>=this.N){this.mt[0]=this.mt[this.N-1];i=1;}}this.mt[0]=0x80000000;/* MSB is 1; assuring non-zero initial array */};/* generates a random number on [0,0xffffffff]-interval */MersenneTwister.prototype.genrand_int32=function(){var y;var mag01=new Array(0x0,this.MATRIX_A);/* mag01[x] = x * MATRIX_A  for x=0,1 */if(this.mti>=this.N){/* generate N words at one time */var kk;if(this.mti===this.N+1){/* if init_genrand() has not been called, */this.init_genrand(5489);/* a default initial seed is used */}for(kk=0;kk<this.N-this.M;kk++){y=this.mt[kk]&this.UPPER_MASK|this.mt[kk+1]&this.LOWER_MASK;this.mt[kk]=this.mt[kk+this.M]^y>>>1^mag01[y&0x1];}for(;kk<this.N-1;kk++){y=this.mt[kk]&this.UPPER_MASK|this.mt[kk+1]&this.LOWER_MASK;this.mt[kk]=this.mt[kk+(this.M-this.N)]^y>>>1^mag01[y&0x1];}y=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK;this.mt[this.N-1]=this.mt[this.M-1]^y>>>1^mag01[y&0x1];this.mti=0;}y=this.mt[this.mti++];/* Tempering */y^=y>>>11;y^=y<<7&0x9d2c5680;y^=y<<15&0xefc60000;y^=y>>>18;return y>>>0;};/* generates a random number on [0,0x7fffffff]-interval */MersenneTwister.prototype.genrand_int31=function(){return this.genrand_int32()>>>1;};/* generates a random number on [0,1]-real-interval */MersenneTwister.prototype.genrand_real1=function(){return this.genrand_int32()*(1.0/4294967295.0);/* divided by 2^32-1 */};/* generates a random number on [0,1)-real-interval */MersenneTwister.prototype.random=function(){return this.genrand_int32()*(1.0/4294967296.0);/* divided by 2^32 */};/* generates a random number on (0,1)-real-interval */MersenneTwister.prototype.genrand_real3=function(){return(this.genrand_int32()+0.5)*(1.0/4294967296.0);/* divided by 2^32 */};/* generates a random number on [0,1) with 53-bit resolution*/MersenneTwister.prototype.genrand_res53=function(){var a=this.genrand_int32()>>>5,b=this.genrand_int32()>>>6;return(a*67108864.0+b)*(1.0/9007199254740992.0);};// BlueImp MD5 hashing algorithm from https://github.com/blueimp/JavaScript-MD5
	var BlueImpMD5=function BlueImpMD5(){};BlueImpMD5.prototype.VERSION='1.0.1';/*
	    * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	    * to work around bugs in some JS interpreters.
	    */BlueImpMD5.prototype.safe_add=function safe_add(x,y){var lsw=(x&0xFFFF)+(y&0xFFFF),msw=(x>>16)+(y>>16)+(lsw>>16);return msw<<16|lsw&0xFFFF;};/*
	    * Bitwise rotate a 32-bit number to the left.
	    */BlueImpMD5.prototype.bit_roll=function(num,cnt){return num<<cnt|num>>>32-cnt;};/*
	    * These functions implement the five basic operations the algorithm uses.
	    */BlueImpMD5.prototype.md5_cmn=function(q,a,b,x,s,t){return this.safe_add(this.bit_roll(this.safe_add(this.safe_add(a,q),this.safe_add(x,t)),s),b);};BlueImpMD5.prototype.md5_ff=function(a,b,c,d,x,s,t){return this.md5_cmn(b&c|~b&d,a,b,x,s,t);};BlueImpMD5.prototype.md5_gg=function(a,b,c,d,x,s,t){return this.md5_cmn(b&d|c&~d,a,b,x,s,t);};BlueImpMD5.prototype.md5_hh=function(a,b,c,d,x,s,t){return this.md5_cmn(b^c^d,a,b,x,s,t);};BlueImpMD5.prototype.md5_ii=function(a,b,c,d,x,s,t){return this.md5_cmn(c^(b|~d),a,b,x,s,t);};/*
	    * Calculate the MD5 of an array of little-endian words, and a bit length.
	    */BlueImpMD5.prototype.binl_md5=function(x,len){/* append padding */x[len>>5]|=0x80<<len%32;x[(len+64>>>9<<4)+14]=len;var i,olda,oldb,oldc,oldd,a=1732584193,b=-271733879,c=-1732584194,d=271733878;for(i=0;i<x.length;i+=16){olda=a;oldb=b;oldc=c;oldd=d;a=this.md5_ff(a,b,c,d,x[i],7,-680876936);d=this.md5_ff(d,a,b,c,x[i+1],12,-389564586);c=this.md5_ff(c,d,a,b,x[i+2],17,606105819);b=this.md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=this.md5_ff(a,b,c,d,x[i+4],7,-176418897);d=this.md5_ff(d,a,b,c,x[i+5],12,1200080426);c=this.md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=this.md5_ff(b,c,d,a,x[i+7],22,-45705983);a=this.md5_ff(a,b,c,d,x[i+8],7,1770035416);d=this.md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=this.md5_ff(c,d,a,b,x[i+10],17,-42063);b=this.md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=this.md5_ff(a,b,c,d,x[i+12],7,1804603682);d=this.md5_ff(d,a,b,c,x[i+13],12,-40341101);c=this.md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=this.md5_ff(b,c,d,a,x[i+15],22,1236535329);a=this.md5_gg(a,b,c,d,x[i+1],5,-165796510);d=this.md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=this.md5_gg(c,d,a,b,x[i+11],14,643717713);b=this.md5_gg(b,c,d,a,x[i],20,-373897302);a=this.md5_gg(a,b,c,d,x[i+5],5,-701558691);d=this.md5_gg(d,a,b,c,x[i+10],9,38016083);c=this.md5_gg(c,d,a,b,x[i+15],14,-660478335);b=this.md5_gg(b,c,d,a,x[i+4],20,-405537848);a=this.md5_gg(a,b,c,d,x[i+9],5,568446438);d=this.md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=this.md5_gg(c,d,a,b,x[i+3],14,-187363961);b=this.md5_gg(b,c,d,a,x[i+8],20,1163531501);a=this.md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=this.md5_gg(d,a,b,c,x[i+2],9,-51403784);c=this.md5_gg(c,d,a,b,x[i+7],14,1735328473);b=this.md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=this.md5_hh(a,b,c,d,x[i+5],4,-378558);d=this.md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=this.md5_hh(c,d,a,b,x[i+11],16,1839030562);b=this.md5_hh(b,c,d,a,x[i+14],23,-35309556);a=this.md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=this.md5_hh(d,a,b,c,x[i+4],11,1272893353);c=this.md5_hh(c,d,a,b,x[i+7],16,-155497632);b=this.md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=this.md5_hh(a,b,c,d,x[i+13],4,681279174);d=this.md5_hh(d,a,b,c,x[i],11,-358537222);c=this.md5_hh(c,d,a,b,x[i+3],16,-722521979);b=this.md5_hh(b,c,d,a,x[i+6],23,76029189);a=this.md5_hh(a,b,c,d,x[i+9],4,-640364487);d=this.md5_hh(d,a,b,c,x[i+12],11,-421815835);c=this.md5_hh(c,d,a,b,x[i+15],16,530742520);b=this.md5_hh(b,c,d,a,x[i+2],23,-995338651);a=this.md5_ii(a,b,c,d,x[i],6,-198630844);d=this.md5_ii(d,a,b,c,x[i+7],10,1126891415);c=this.md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=this.md5_ii(b,c,d,a,x[i+5],21,-57434055);a=this.md5_ii(a,b,c,d,x[i+12],6,1700485571);d=this.md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=this.md5_ii(c,d,a,b,x[i+10],15,-1051523);b=this.md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=this.md5_ii(a,b,c,d,x[i+8],6,1873313359);d=this.md5_ii(d,a,b,c,x[i+15],10,-30611744);c=this.md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=this.md5_ii(b,c,d,a,x[i+13],21,1309151649);a=this.md5_ii(a,b,c,d,x[i+4],6,-145523070);d=this.md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=this.md5_ii(c,d,a,b,x[i+2],15,718787259);b=this.md5_ii(b,c,d,a,x[i+9],21,-343485551);a=this.safe_add(a,olda);b=this.safe_add(b,oldb);c=this.safe_add(c,oldc);d=this.safe_add(d,oldd);}return[a,b,c,d];};/*
	    * Convert an array of little-endian words to a string
	    */BlueImpMD5.prototype.binl2rstr=function(input){var i,output='';for(i=0;i<input.length*32;i+=8){output+=String.fromCharCode(input[i>>5]>>>i%32&0xFF);}return output;};/*
	    * Convert a raw string to an array of little-endian words
	    * Characters >255 have their high-byte silently ignored.
	    */BlueImpMD5.prototype.rstr2binl=function(input){var i,output=[];output[(input.length>>2)-1]=undefined;for(i=0;i<output.length;i+=1){output[i]=0;}for(i=0;i<input.length*8;i+=8){output[i>>5]|=(input.charCodeAt(i/8)&0xFF)<<i%32;}return output;};/*
	    * Calculate the MD5 of a raw string
	    */BlueImpMD5.prototype.rstr_md5=function(s){return this.binl2rstr(this.binl_md5(this.rstr2binl(s),s.length*8));};/*
	    * Calculate the HMAC-MD5, of a key and some data (raw strings)
	    */BlueImpMD5.prototype.rstr_hmac_md5=function(key,data){var i,bkey=this.rstr2binl(key),ipad=[],opad=[],hash;ipad[15]=opad[15]=undefined;if(bkey.length>16){bkey=this.binl_md5(bkey,key.length*8);}for(i=0;i<16;i+=1){ipad[i]=bkey[i]^0x36363636;opad[i]=bkey[i]^0x5C5C5C5C;}hash=this.binl_md5(ipad.concat(this.rstr2binl(data)),512+data.length*8);return this.binl2rstr(this.binl_md5(opad.concat(hash),512+128));};/*
	    * Convert a raw string to a hex string
	    */BlueImpMD5.prototype.rstr2hex=function(input){var hex_tab='0123456789abcdef',output='',x,i;for(i=0;i<input.length;i+=1){x=input.charCodeAt(i);output+=hex_tab.charAt(x>>>4&0x0F)+hex_tab.charAt(x&0x0F);}return output;};/*
	    * Encode a string as utf-8
	    */BlueImpMD5.prototype.str2rstr_utf8=function(input){return unescape(encodeURIComponent(input));};/*
	    * Take string arguments and return either raw or hex encoded strings
	    */BlueImpMD5.prototype.raw_md5=function(s){return this.rstr_md5(this.str2rstr_utf8(s));};BlueImpMD5.prototype.hex_md5=function(s){return this.rstr2hex(this.raw_md5(s));};BlueImpMD5.prototype.raw_hmac_md5=function(k,d){return this.rstr_hmac_md5(this.str2rstr_utf8(k),this.str2rstr_utf8(d));};BlueImpMD5.prototype.hex_hmac_md5=function(k,d){return this.rstr2hex(this.raw_hmac_md5(k,d));};BlueImpMD5.prototype.md5=function(string,key,raw){if(!key){if(!raw){return this.hex_md5(string);}return this.raw_md5(string);}if(!raw){return this.hex_hmac_md5(key,string);}return this.raw_hmac_md5(key,string);};// CommonJS module
	if(true){if(typeof module!=='undefined'&&module.exports){exports=module.exports=Chance;}exports.Chance=Chance;}// Register as an anonymous AMD module
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return Chance;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}// if there is a importsScrips object define chance for worker
	if(typeof importScripts!=='undefined'){chance=new Chance();}// If there is a window object, that at least has a document property,
	// instantiate and define chance on the window
	if((typeof window==='undefined'?'undefined':_typeof(window))==="object"&&_typeof(window.document)==="object"){window.Chance=Chance;window.chance=new Chance();}})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48).Buffer))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict';

	var base64 = __webpack_require__(49);
	var ieee754 = __webpack_require__(50);
	var isArray = __webpack_require__(51);

	exports.Buffer = Buffer;
	exports.SlowBuffer = SlowBuffer;
	exports.INSPECT_MAX_BYTES = 50;

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength();

	function typedArraySupport() {
	  try {
	    var arr = new Uint8Array(1);
	    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
	        return 42;
	      } };
	    return arr.foo() === 42 && // typed array instances can be augmented
	    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
	  } catch (e) {
	    return false;
	  }
	}

	function kMaxLength() {
	  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
	}

	function createBuffer(that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length');
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length);
	    }
	    that.length = length;
	  }

	  return that;
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer(arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length);
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error('If encoding is specified then the first argument must be a string');
	    }
	    return allocUnsafe(this, arg);
	  }
	  return from(this, arg, encodingOrOffset, length);
	}

	Buffer.poolSize = 8192; // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype;
	  return arr;
	};

	function from(that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number');
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length);
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset);
	  }

	  return fromObject(that, value);
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length);
	};

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype;
	  Buffer.__proto__ = Uint8Array;
	  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    });
	  }
	}

	function assertSize(size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number');
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative');
	  }
	}

	function alloc(that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size);
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
	  }
	  return createBuffer(that, size);
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding);
	};

	function allocUnsafe(that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that;
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size);
	};
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size);
	};

	function fromString(that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding');
	  }

	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);

	  var actual = that.write(string, encoding);

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual);
	  }

	  return that;
	}

	function fromArrayLike(that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that;
	}

	function fromArrayBuffer(that, array, byteOffset, length) {
	  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds');
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds');
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array;
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array);
	  }
	  return that;
	}

	function fromObject(that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);

	    if (that.length === 0) {
	      return that;
	    }

	    obj.copy(that, 0, 0, len);
	    return that;
	  }

	  if (obj) {
	    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0);
	      }
	      return fromArrayLike(that, obj);
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data);
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
	}

	function checked(length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
	  }
	  return length | 0;
	}

	function SlowBuffer(length) {
	  if (+length != length) {
	    // eslint-disable-line eqeqeq
	    length = 0;
	  }
	  return Buffer.alloc(+length);
	}

	Buffer.isBuffer = function isBuffer(b) {
	  return !!(b != null && b._isBuffer);
	};

	Buffer.compare = function compare(a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers');
	  }

	  if (a === b) return 0;

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }

	  if (x < y) return -1;
	  if (y < x) return 1;
	  return 0;
	};

	Buffer.isEncoding = function isEncoding(encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true;
	    default:
	      return false;
	  }
	};

	Buffer.concat = function concat(list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers');
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0);
	  }

	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers');
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer;
	};

	function byteLength(string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length;
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength;
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }

	  var len = string.length;
	  if (len === 0) return 0;

	  // Use a for loop to avoid recursion
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len;
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length;
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2;
	      case 'hex':
	        return len >>> 1;
	      case 'base64':
	        return base64ToBytes(string).length;
	      default:
	        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer.byteLength = byteLength;

	function slowToString(encoding, start, end) {
	  var loweredCase = false;

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return '';
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }

	  if (end <= 0) {
	    return '';
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0;
	  start >>>= 0;

	  if (end <= start) {
	    return '';
	  }

	  if (!encoding) encoding = 'utf8';

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end);

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end);

	      case 'ascii':
	        return asciiSlice(this, start, end);

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end);

	      case 'base64':
	        return base64Slice(this, start, end);

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end);

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true;

	function swap(b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}

	Buffer.prototype.swap16 = function swap16() {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits');
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this;
	};

	Buffer.prototype.swap32 = function swap32() {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits');
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this;
	};

	Buffer.prototype.swap64 = function swap64() {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits');
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this;
	};

	Buffer.prototype.toString = function toString() {
	  var length = this.length | 0;
	  if (length === 0) return '';
	  if (arguments.length === 0) return utf8Slice(this, 0, length);
	  return slowToString.apply(this, arguments);
	};

	Buffer.prototype.equals = function equals(b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
	  if (this === b) return true;
	  return Buffer.compare(this, b) === 0;
	};

	Buffer.prototype.inspect = function inspect() {
	  var str = '';
	  var max = exports.INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>';
	};

	Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer');
	  }

	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index');
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0;
	  }
	  if (thisStart >= thisEnd) {
	    return -1;
	  }
	  if (start >= end) {
	    return 1;
	  }

	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;

	  if (this === target) return 0;

	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);

	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break;
	    }
	  }

	  if (x < y) return -1;
	  if (y < x) return 1;
	  return 0;
	};

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1;

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset; // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : buffer.length - 1;
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1;else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;else return -1;
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding);
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1;
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
	  } else if (typeof val === 'number') {
	    val = val & 0xFF; // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
	      }
	    }
	    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
	  }

	  throw new TypeError('val must be string, number or Buffer');
	}

	function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1;
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }

	  function read(buf, i) {
	    if (indexSize === 1) {
	      return buf[i];
	    } else {
	      return buf.readUInt16BE(i * indexSize);
	    }
	  }

	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false;
	          break;
	        }
	      }
	      if (found) return i;
	    }
	  }

	  return -1;
	}

	Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1;
	};

	Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
	};

	Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
	};

	function hexWrite(buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i;
	    buf[offset + i] = parsed;
	  }
	  return i;
	}

	function utf8Write(buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
	}

	function asciiWrite(buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length);
	}

	function latin1Write(buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length);
	}

	function base64Write(buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length);
	}

	function ucs2Write(buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
	}

	Buffer.prototype.write = function write(string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	    // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	    // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	    // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
	  }

	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;

	  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds');
	  }

	  if (!encoding) encoding = 'utf8';

	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length);

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length);

	      case 'ascii':
	        return asciiWrite(this, string, offset, length);

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length);

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length);

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length);

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};

	Buffer.prototype.toJSON = function toJSON() {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  };
	};

	function base64Slice(buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf);
	  } else {
	    return base64.fromByteArray(buf.slice(start, end));
	  }
	}

	function utf8Slice(buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];

	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break;
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break;
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break;
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }

	    res.push(codePoint);
	    i += bytesPerSequence;
	  }

	  return decodeCodePointsArray(res);
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000;

	function decodeCodePointsArray(codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
	  }
	  return res;
	}

	function asciiSlice(buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret;
	}

	function latin1Slice(buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret;
	}

	function hexSlice(buf, start, end) {
	  var len = buf.length;

	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;

	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out;
	}

	function utf16leSlice(buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res;
	}

	Buffer.prototype.slice = function slice(start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;

	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }

	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }

	  if (end < start) end = start;

	  var newBuf;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }

	  return newBuf;
	};

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset(offset, ext, length) {
	  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
	}

	Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }

	  return val;
	};

	Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }

	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }

	  return val;
	};

	Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset];
	};

	Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | this[offset + 1] << 8;
	};

	Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] << 8 | this[offset + 1];
	};

	Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
	};

	Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
	};

	Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val;
	};

	Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val;
	};

	Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return this[offset];
	  return (0xff - this[offset] + 1) * -1;
	};

	Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | this[offset + 1] << 8;
	  return val & 0x8000 ? val | 0xFFFF0000 : val;
	};

	Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | this[offset] << 8;
	  return val & 0x8000 ? val | 0xFFFF0000 : val;
	};

	Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
	};

	Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
	};

	Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754.read(this, offset, true, 23, 4);
	};

	Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754.read(this, offset, false, 23, 4);
	};

	Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754.read(this, offset, true, 52, 8);
	};

	Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754.read(this, offset, false, 52, 8);
	};

	function checkInt(buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
	  if (offset + ext > buf.length) throw new RangeError('Index out of range');
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = value / mul & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = value / mul & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = value & 0xff;
	  return offset + 1;
	};

	function objectWriteUInt16(buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2;
	};

	Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 8;
	    this[offset + 1] = value & 0xff;
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2;
	};

	function objectWriteUInt32(buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = value >>> 24;
	    this[offset + 2] = value >>> 16;
	    this[offset + 1] = value >>> 8;
	    this[offset] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4;
	};

	Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 24;
	    this[offset + 1] = value >>> 16;
	    this[offset + 2] = value >>> 8;
	    this[offset + 3] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4;
	};

	Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = value & 0xff;
	  return offset + 1;
	};

	Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2;
	};

	Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 8;
	    this[offset + 1] = value & 0xff;
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2;
	};

	Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	    this[offset + 2] = value >>> 16;
	    this[offset + 3] = value >>> 24;
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4;
	};

	Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 24;
	    this[offset + 1] = value >>> 16;
	    this[offset + 2] = value >>> 8;
	    this[offset + 3] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4;
	};

	function checkIEEE754(buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range');
	  if (offset < 0) throw new RangeError('Index out of range');
	}

	function writeFloat(buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4;
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert);
	};

	Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert);
	};

	function writeDouble(buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8;
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert);
	};

	Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert);
	};

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy(target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;

	  // Copy 0 bytes; we're done
	  if (end === start) return 0;
	  if (target.length === 0 || this.length === 0) return 0;

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds');
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
	  if (end < 0) throw new RangeError('sourceEnd out of bounds');

	  // Are we oob?
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }

	  var len = end - start;
	  var i;

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
	  }

	  return len;
	};

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill(val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string');
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding);
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index');
	  }

	  if (end <= start) {
	    return this;
	  }

	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;

	  if (!val) val = 0;

	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }

	  return this;
	};

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

	function base64clean(str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return '';
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str;
	}

	function stringtrim(str) {
	  if (str.trim) return str.trim();
	  return str.replace(/^\s+|\s+$/g, '');
	}

	function toHex(n) {
	  if (n < 16) return '0' + n.toString(16);
	  return n.toString(16);
	}

	function utf8ToBytes(string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue;
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue;
	        }

	        // valid lead
	        leadSurrogate = codePoint;

	        continue;
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue;
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }

	    leadSurrogate = null;

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break;
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break;
	      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break;
	      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break;
	      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
	    } else {
	      throw new Error('Invalid code point');
	    }
	  }

	  return bytes;
	}

	function asciiToBytes(str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray;
	}

	function utf16leToBytes(str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break;

	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }

	  return byteArray;
	}

	function base64ToBytes(str) {
	  return base64.toByteArray(base64clean(str));
	}

	function blitBuffer(src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if (i + offset >= dst.length || i >= src.length) break;
	    dst[i + offset] = src[i];
	  }
	  return i;
	}

	function isnan(val) {
	  return val !== val; // eslint-disable-line no-self-compare
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48).Buffer, (function() { return this; }())))

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	exports.toByteArray = toByteArray;
	exports.fromByteArray = fromByteArray;

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

	function init() {
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i];
	    revLookup[code.charCodeAt(i)] = i;
	  }

	  revLookup['-'.charCodeAt(0)] = 62;
	  revLookup['_'.charCodeAt(0)] = 63;
	}

	init();

	function toByteArray(b64) {
	  var i, j, l, tmp, placeHolders, arr;
	  var len = b64.length;

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4');
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

	  // base64 is 4/3 + up to two characters of the original data
	  arr = new Arr(len * 3 / 4 - placeHolders);

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len;

	  var L = 0;

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = tmp >> 16 & 0xFF;
	    arr[L++] = tmp >> 8 & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  if (placeHolders === 2) {
	    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
	    arr[L++] = tmp >> 8 & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  return arr;
	}

	function tripletToBase64(num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
	}

	function encodeChunk(uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('');
	}

	function fromByteArray(uint8) {
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[tmp << 4 & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
	    output += lookup[tmp >> 10];
	    output += lookup[tmp >> 4 & 0x3F];
	    output += lookup[tmp << 2 & 0x3F];
	    output += '=';
	  }

	  parts.push(output);

	  return parts.join('');
	}

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? nBytes - 1 : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];

	  i += d;

	  e = s & (1 << -nBits) - 1;
	  s >>= -nBits;
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : (s ? -1 : 1) * Infinity;
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	};

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
	  var i = isLE ? 0 : nBytes - 1;
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128;
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

/***/ }
/******/ ]);
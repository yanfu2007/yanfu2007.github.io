var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(d,c,b){if(b.get||b.set)throw new TypeError("ES3 does not support getters and setters.");d!=Array.prototype&&d!=Object.prototype&&(d[c]=b.value)};$jscomp.getGlobal=function(d){return"undefined"!=typeof window&&window===d?d:"undefined"!=typeof global&&null!=global?global:d};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(d){return $jscomp.SYMBOL_PREFIX+(d||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var d=$jscomp.global.Symbol.iterator;d||(d=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[d]&&$jscomp.defineProperty(Array.prototype,d,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(d){var c=0;return $jscomp.iteratorPrototype(function(){return c<d.length?{done:!1,value:d[c++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(d){$jscomp.initSymbolIterator();d={next:d};d[$jscomp.global.Symbol.iterator]=function(){return this};return d};$jscomp.polyfill=function(d,c,b,f){if(c){b=$jscomp.global;d=d.split(".");for(f=0;f<d.length-1;f++){var e=d[f];e in b||(b[e]={});b=b[e]}d=d[d.length-1];f=b[d];c=c(f);c!=f&&null!=c&&$jscomp.defineProperty(b,d,{configurable:!0,writable:!0,value:c})}};
$jscomp.polyfill("Array.from",function(d){return d?d:function(c,b,d){$jscomp.initSymbolIterator();b=null!=b?b:function(g){return g};var e=[],a=c[Symbol.iterator];if("function"==typeof a)for(c=a.call(c);!(a=c.next()).done;)e.push(b.call(d,a.value));else for(var a=c.length,f=0;f<a;f++)e.push(b.call(d,c[f]));return e}},"es6-impl","es3");$jscomp.makeIterator=function(d){$jscomp.initSymbolIterator();var c=d[Symbol.iterator];return c?c.call(d):$jscomp.arrayIterator(d)};
$jscomp.owns=function(d,c){return Object.prototype.hasOwnProperty.call(d,c)};
$jscomp.polyfill("WeakMap",function(d){function c(a){$jscomp.owns(a,f)||$jscomp.defineProperty(a,f,{value:{}})}function b(a){var g=Object[a];g&&(Object[a]=function(a){c(a);return g(a)})}if(function(){if(!d||!Object.seal)return!1;try{var a=Object.seal({}),g=Object.seal({}),l=new d([[a,2],[g,3]]);if(2!=l.get(a)||3!=l.get(g))return!1;l["delete"](a);l.set(g,4);return!l.has(a)&&4==l.get(g)}catch(m){return!1}}())return d;var f="$jscomp_hidden_"+Math.random().toString().substring(2);b("freeze");b("preventExtensions");
b("seal");var e=0,a=function(a){this.id_=(e+=Math.random()+1).toString();if(a){$jscomp.initSymbol();$jscomp.initSymbolIterator();a=$jscomp.makeIterator(a);for(var g;!(g=a.next()).done;)g=g.value,this.set(g[0],g[1])}};a.prototype.set=function(a,g){c(a);if(!$jscomp.owns(a,f))throw Error("WeakMap key fail: "+a);a[f][this.id_]=g;return this};a.prototype.get=function(a){return $jscomp.owns(a,f)?a[f][this.id_]:void 0};a.prototype.has=function(a){return $jscomp.owns(a,f)&&$jscomp.owns(a[f],this.id_)};a.prototype["delete"]=
function(a){return $jscomp.owns(a,f)&&$jscomp.owns(a[f],this.id_)?delete a[f][this.id_]:!1};return a},"es6-impl","es3");$jscomp.ASSUME_NO_NATIVE_MAP=!1;
$jscomp.polyfill("Map",function(d){if(!$jscomp.ASSUME_NO_NATIVE_MAP&&function(){if(!d||!d.prototype.entries||"function"!=typeof Object.seal)return!1;try{var a=Object.seal({x:4}),l=new d($jscomp.makeIterator([[a,"s"]]));if("s"!=l.get(a)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var b=l.entries(),h=b.next();if(h.done||h.value[0]!=a||"s"!=h.value[1])return!1;h=b.next();return h.done||4!=h.value[0].x||"t"!=h.value[1]||!b.next().done?!1:!0}catch(n){return!1}}())return d;$jscomp.initSymbol();
$jscomp.initSymbolIterator();var c=new WeakMap,b=function(g){this.data_={};this.head_=a();this.size=0;if(g){g=$jscomp.makeIterator(g);for(var b;!(b=g.next()).done;)b=b.value,this.set(b[0],b[1])}};b.prototype.set=function(a,b){var g=f(this,a);g.list||(g.list=this.data_[g.id]=[]);g.entry?g.entry.value=b:(g.entry={next:this.head_,previous:this.head_.previous,head:this.head_,key:a,value:b},g.list.push(g.entry),this.head_.previous.next=g.entry,this.head_.previous=g.entry,this.size++);return this};b.prototype["delete"]=
function(a){a=f(this,a);return a.entry&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.data_[a.id],a.entry.previous.next=a.entry.next,a.entry.next.previous=a.entry.previous,a.entry.head=null,this.size--,!0):!1};b.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=a();this.size=0};b.prototype.has=function(a){return!!f(this,a).entry};b.prototype.get=function(a){return(a=f(this,a).entry)&&a.value};b.prototype.entries=function(){return e(this,function(a){return[a.key,
a.value]})};b.prototype.keys=function(){return e(this,function(a){return a.key})};b.prototype.values=function(){return e(this,function(a){return a.value})};b.prototype.forEach=function(a,b){for(var e=this.entries(),h;!(h=e.next()).done;)h=h.value,a.call(b,h[1],h[0],this)};b.prototype[Symbol.iterator]=b.prototype.entries;var f=function(a,b){var e;e=b&&typeof b;"object"==e||"function"==e?c.has(b)?e=c.get(b):(e=""+ ++k,c.set(b,e)):e="p_"+b;var h=a.data_[e];if(h&&$jscomp.owns(a.data_,e))for(var g=0;g<
h.length;g++){var d=h[g];if(b!==b&&d.key!==d.key||b===d.key)return{id:e,list:h,index:g,entry:d}}return{id:e,list:h,index:-1,entry:void 0}},e=function(a,b){var e=a.head_;return $jscomp.iteratorPrototype(function(){if(e){for(;e.head!=a.head_;)e=e.previous;for(;e.next!=e.head;)return e=e.next,{done:!1,value:b(e)};e=null}return{done:!0,value:void 0}})},a=function(){var a={};return a.previous=a.next=a.head=a},k=0;return b},"es6-impl","es3");$jscomp.ASSUME_NO_NATIVE_SET=!1;
$jscomp.polyfill("Set",function(d){if(!$jscomp.ASSUME_NO_NATIVE_SET&&function(){if(!d||!d.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new d($jscomp.makeIterator([b]));if(!c.has(b)||1!=c.size||c.add(b)!=c||1!=c.size||c.add({x:4})!=c||2!=c.size)return!1;var e=c.entries(),a=e.next();if(a.done||a.value[0]!=b||a.value[1]!=b)return!1;a=e.next();return a.done||a.value[0]==b||4!=a.value[0].x||a.value[1]!=a.value[0]?!1:e.next().done}catch(k){return!1}}())return d;
$jscomp.initSymbol();$jscomp.initSymbolIterator();var c=function(b){this.map_=new Map;if(b){b=$jscomp.makeIterator(b);for(var c;!(c=b.next()).done;)this.add(c.value)}this.size=this.map_.size};c.prototype.add=function(b){this.map_.set(b,b);this.size=this.map_.size;return this};c.prototype["delete"]=function(b){b=this.map_["delete"](b);this.size=this.map_.size;return b};c.prototype.clear=function(){this.map_.clear();this.size=0};c.prototype.has=function(b){return this.map_.has(b)};c.prototype.entries=
function(){return this.map_.entries()};c.prototype.values=function(){return this.map_.values()};c.prototype[Symbol.iterator]=c.prototype.values;c.prototype.forEach=function(b,c){var e=this;this.map_.forEach(function(a){return b.call(c,a,a,e)})};return c},"es6-impl","es3");$jscomp.array=$jscomp.array||{};
$jscomp.iteratorFromArray=function(d,c){$jscomp.initSymbolIterator();d instanceof String&&(d+="");var b=0,f={next:function(){if(b<d.length){var e=b++;return{value:c(e,d[e]),done:!1}}f.next=function(){return{done:!0,value:void 0}};return f.next()}};f[Symbol.iterator]=function(){return f};return f};$jscomp.polyfill("Array.prototype.keys",function(d){return d?d:function(){return $jscomp.iteratorFromArray(this,function(c){return c})}},"es6-impl","es3");
var AboutPage=function(){return{initialize:function(d){document.querySelector("body > div#container > div#controls > div.control#ok").addEventListener("click",function(){Header.handlePlay()})},draw:function(){},getPath:function(){return"/about.html"}}}(),AJAX=function(){return{GET:function(d,c,b){c=void 0===c?null:c;b=void 0===b?null:b;var f=new XMLHttpRequest;f.onreadystatechange=function(){4==this.readyState&&(200==this.status?null!==c&&c(this.responseText):null!==b&&b(this.status))};f.open("GET",
d,!0);f.send()}}}(),CatalogPage=function(){function d(){AJAX.GET(App.getPiecesPath()+"indexes.json",function(b){b=JSON.parse(b);var c=b.scales;1==a.length?b.hasOwnProperty(a[0])&&(c=b[a[0]]):1<a.length&&"scales"==a[0]&&b.scales.hasOwnProperty(a[1])&&(c=b.scales[a[1]]);e={query:a,tiles:[]};b=[];for(h in c)c.hasOwnProperty(h)&&"_"!==h.substring(0,1)&&b.push(h);b.sort(function(a,b){var e=Locale.getTranslation(c[a]._desc,"en"),h=Locale.getTranslation(c[b]._desc,"en");return e<h?-1:e>h?1:0});for(var d=
0;d<b.length;d++){var h=b[d],g=c[h];if("_"!==h.substring(0,1)){var h={id:h,description:g._desc},p=0;for(keyInNextLevel in g)g.hasOwnProperty(keyInNextLevel)&&"_"!==keyInNextLevel.substring(0,1)&&(p+=1);0>=p?h.type="piece":(h.type="folder",h.total=p);e.tiles.push(h)}}f()})}function c(a){a=a.target.getAttribute("data");window.location=App.getPagePath(CatalogPage)+"?q="+encodeURIComponent("scales,"+a)}function b(a){window.location=App.getPagePath(IndexPage)+"?p="+encodeURIComponent(a.target.getAttribute("data"))}
function f(){for(var a=0;a<e.tiles.length;a++){var d=e.tiles[a];if("folder"==d.type){var f=document.createElement("div");f.classList.add("tile");f.classList.add("folder");f.setAttribute("data",d.id);f.innerHTML=Locale.getTranslation(d.description);f.addEventListener("click",c);k.append(f)}else f=document.createElement("div"),f.classList.add("tile"),f.classList.add("piece"),f.setAttribute("data",d.id),f.innerHTML=Locale.getTranslation(d.description),f.addEventListener("click",b),k.append(f),d.hasOwnProperty("data")}}
var e={},a="",k=null;return{initialize:function(b){k=document.querySelector("div#tiles");window.hasOwnProperty("catalogSnapshot")&&(e=window.catalogSnapshot);parseInt(b.p);a=Array.from(new Set((b.q||"").split(",")));d()},draw:function(){},getPath:function(){return"/catalog.html"}}}(),Header=function(){function d(){var a=App.getParams(),b="default";a.hasOwnProperty("p")?b=a.p:"lastPieceId"in sessionStorage&&(b=sessionStorage.lastPieceId);return b}function c(){var a=d();window.location=App.getPagePath(IndexPage)+
"?p="+encodeURIComponent(a)+"&v=0"}function b(){var a=d();window.location=App.getPagePath(ViewerPage)+"?p="+encodeURIComponent(a)+"&b=0"}function f(){window.location=App.getPagePath(CatalogPage)}function e(){window.location=App.getPagePath(AboutPage)}var a=null,k=null,g=null;return{initialize:function(){a=document.querySelector("div#header > div#controls > div.control#play");k=document.querySelector("div#header > div#controls > div.control#view");g=document.querySelector("div#header > div#controls > div.control#open");
a.addEventListener("click",c);k.addEventListener("click",b);g.addEventListener("click",f);document.querySelector("div#header > div#title  > div#text").addEventListener("click",e);document.querySelector("div#header > div#title  > div#icon").addEventListener("click",e);document.querySelector("div#header > div#title  > div#text").innerHTML=Locale.getApplicationTitle()},handlePlay:c,highlight:function(b){a.classList.remove("highlighted");k.classList.remove("highlighted");g.classList.remove("highlighted");
b===IndexPage?a.classList.add("highlighted"):b===ViewerPage?k.classList.add("highlighted"):b===CatalogPage&&g.classList.add("highlighted")}}}(),IndexPage=function(){function d(a){var e=a.clientX,c=a.clientY;"ontouchstart"in window&&(e=a.touches[0].clientX,c=a.touches[0].clientY);b(e,c)}function c(a){a=null;for(var b=document.querySelectorAll("body > div#container > div#notes > div.note"),e=0;e<b.length;e++)if(b[e].classList.contains("selected")){a=b[e];break}if(null!==a){a.classList.remove("selected");
ViolinSimulator.stop();var b=m.getBar(h),e=h-b.first,c=b.verticals[e],c=Array.from(c.notes.keys());"playAllNotesAndMoveNext"!==a.id?(c=[parseInt(a.getAttribute("value"))],l.changeNotesColor(e,c,"green"),l.changeNotesSize(e,c,1)):(l.changeNotesColor(e,c,"black"),l.changeNotesSize(e,c,1),h+=1,a=!1,h>=b.first+b.verticals.length&&(a=!0),h>=m.getTotalVerticals()&&(h=0),a?window.location=window.location.pathname+"?p="+m.getData().id+"&v="+h:(e+=1,c=b.verticals[e],c=Array.from(c.notes.keys()),l.changeNotesColor(e,
c,"green"),l.changeNotesSize(e,c,1),f()))}}function b(a,b){for(var e=null,c=document.querySelectorAll("body > div#container > div#notes > div.note"),d=0;d<c.length;d++){var f=c[d].getBoundingClientRect();if(a>=f.left&&a<=f.right&&b>=f.top&&b<=f.bottom){e=c[d];break}}if(null!==e)if(e.classList.contains("note")||(e=e.parentNode),e.classList.add("selected"),null===m)n={x:a,y:b};else{var d=m.getBar(h),c=h-d.first,f=d.verticals[c],g=[],p=[];if("playAllNotesAndMoveNext"===e.id)for(d=0;d<f.notes.length;d++)g.push(Note.getNoteFrequency(f.notes[d])),
p.push(d);else e=parseInt(e.getAttribute("value")),g.push(Note.getNoteFrequency(f.notes[e])),p.push(e);"r"===f.duration.substr(-1)?ViolinSimulator.play([0]):ViolinSimulator.play(g);l.changeNotesColor(c,p,"red");l.changeNotesSize(c,p,1.3)}}function f(){for(var a=document.querySelectorAll("body > div#container > div#notes > div.note"),b=0;b<a.length;b++)"playAllNotesAndMoveNext"!==a[b].id&&a[b].parentNode.removeChild(a[b]);var a=document.querySelector("body > div#container > div#notes"),b=m.getBar(h),
e=b.verticals[h-b.first];if("r"!==e.duration.substr(-1))for(b=e.notes.length-1;0<=b;b--){var c=document.createElement("div");c.classList.add("note");c.setAttribute("value",""+b);var d=c,f;f=Note.getNoteDetail(e.notes[b]);var g=""===f.accidental?"":"withAccidental";f=('<div class="natural YYY">'+f.natural+'</div><div class="accidental XXX"></div><div class="octave ZZZ">'+f.octave+"</div>").replace("XXX",""===f.accidental?"hidden":f.accidental).replace("YYY",g).replace("ZZZ",g);d.innerHTML=f;a.appendChild(c)}}
function e(){null!==m&&(l.setPiece(m),l.setFocus(h),l.display(),f())}function a(){h>=m.getTotalVerticals()&&(h=0);e();var a=m.getBar(h),c=h-a.first;l.changeNotesColor(c,Array.from(a.verticals[c].notes.keys()),"green");null!==n&&b(n.x,n.y);m.getData();document.querySelector("body > div#container > div#musicTitle").innerHTML=Locale.getTranslation(m.getData().descriptions);sessionStorage.lastPieceId=m.getData().id;a=m.getNextBar(h);c=0;null!==a&&(c=a.first);AJAX.GET(window.location.pathname+"?p="+m.getData().id+
"&v="+c)}function k(){var a="mousedown",b="mouseup";"ontouchstart"in window&&(a="touchstart",b="touchend");window.addEventListener(a,d);window.addEventListener(b,c);l=new MusicPlayer(document.querySelector("body > div#container > div#music"))}function g(){return"/index.html"}var l=null,m=null,h=0,n=null;return{initialize:function(b){k();var e=b.p||"default";h=parseInt(b.v)||0;n="unhandledEvent"in b&&b.lastPage===g()?b.unhandledEvent:null;m=MusicStorageManager.getPiece(e);null!==m?a():(LoadingIconManager.show(),
AJAX.GET(App.getPiecesPath()+e+".json",function(b){m=Piece.createFromString(b);MusicStorageManager.setPiece(m);a();LoadingIconManager.hide()},function(a){alert(Locale.getPieceLoadingFailureNotice(e));window.location=App.getPagePath(CatalogPage)}))},draw:e,getPath:g}}(),LoadingIconManager=function(){var d=0,c=document.querySelector("body > div#loading");return{show:function(){setTimeout(function(){100<(new Date).getTime()-d&&c.classList.remove("hidden")},100)},hide:function(){c.classList.add("hidden");
d=(new Date).getTime()}}}(),Locale=function(){function d(){if("language"in localStorage&&0<=b.indexOf(localStorage.language))f=localStorage.language;else{var a=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage,a=a.toLowerCase();f=0<=b.indexOf(a)?a:"en"}}function c(a,b){b=void 0===b?"":b;""===b&&(b=f);return b in a?a[b]:a.en}var b=["en","zh-cn"],f="en",e={en:"Check more from $1","zh-cn":"\u66f4\u591a\u8d44\u6e90\u5728 $1"},a={en:"Cannot load piece $piece from $address. Please choose a new one.",
"zh-cn":"\u65e0\u6cd5\u4ece$address\u4e0b\u8f7d\u66f2\u76ee$piece\u3002\u8bf7\u9009\u62e9\u65b0\u66f2\u76ee\u3002"},k={en:"ViolinEscort","zh-cn":"\u5c0f\u63d0\u7434\u4f34\u4fa3"};d();return{checkLanguage:d,getApplicationTitle:function(){return c(k)},getPrintFooter:function(){return f in e?e[f].replace("$1",window.location.hostname+App.getRootPath()):e.en.replace("$1",window.location.hostname+App.getRootPath())},getTranslation:c,getPieceLoadingFailureNotice:function(b){return f in a?a[f].replace("$piece",
b).replace("$address",window.location.hostname+App.getRootPath()):a.en.replace("$piece",b).replace("$address",window.location.hostname+App.getRootPath())}}}();
function MusicPlayer(d){function c(a){for(var b=a.first,e=[],c=0;c<a.verticals.length;c++){for(var d=[],h=0;h<a.verticals[c].notes.length;h++)d.push({color:"black",size:"1.0"});e.push(d)}return{isOnBar:function(a){return b===a.first},changeNotesSize:function(a,b,c){for(var d=0;d<b.length;d++)e[a][b[d]].size=c},changeNotesColor:function(a,b,c){for(var d=0;d<b.length;d++)e[a][b[d]].color=c},drawAllOrnaments:function(){for(var a=0;a<e.length;a++)for(var b=0;b<e[a].length;b++){if("1.0"!==e[a][b].size){var c=
f(a,[b]);c[0].style.transform="scale("+e[a][b].size+")";c[0].style.transformOrigin="50% 50%"}"black"!==e[a][b].color&&(c=f(a,[b]),c[0].setAttribute("fill",e[a][b].color))}}}}function b(){a.innerHTML="";var b=new Vex.Flow.Renderer(a,Vex.Flow.Renderer.Backends.SVG);context=b.getContext();b.resize(a.clientWidth,a.clientHeight);context.setFont("Arial",10,"").setBackgroundFillStyle("#ffffff");return context}function f(a,b){for(var e=document.querySelectorAll("#vf-"+g[a].attrs.id+" g.vf-notehead path"),
c=[],d=0;d<b.length;d++)c.push(e[b[d]]);return c}function e(a){var b=k.getBar(a);return a-b.first}var a=d,k=null,g=[],l=0,m=null;return{setPiece:function(a){k=a;l=0},setFocus:function(a){l=a},display:function(){var a=b(),e=new Vex.Flow.Stave(4,40,a.width-8),d=k.getBar(l);e.addClef("treble").addTimeSignature(d.time).addKeySignature(VFUtility.toVFKeySignature(d.key));e.setMeasure(k.getData().bars.indexOf(d)+1);e.setContext(a).draw();g=[];for(var f={},z=0;z<d.verticals.length;z++)g.push(VFUtility.prepareStaveNote(d.key,
d.verticals[z],f));f=Vex.Flow.Beam.generateBeams(g);Vex.Flow.Formatter.FormatAndDraw(a,e,g);f.forEach(function(b){b.setContext(a).draw()});null!==m&&m.isOnBar(d)?m.drawAllOrnaments():m=new c(d)},changeNotesSize:function(a,b,c){c=void 0===c?"1.0":c;a=e(a);for(var d=f(a,b),h=0;h<d.length;h++)d[h].style.transform="scale("+c+")",d[h].style.transformOrigin="50% 50%";m.changeNotesSize(a,b,c)},changeNotesColor:function(a,b,c){c=void 0===c?"black":c;a=e(a);for(var d=f(a,b),h=0;h<d.length;h++)d[h].setAttribute("fill",
c);m.changeNotesColor(a,b,c)}}}var MusicStorageManager=function(){return{getPiece:function(d){d=localStorage.getItem("_piece_"+d);return null===d?null:Piece.createFromString(d)},setPiece:function(d){localStorage.setItem("_piece_"+d.id,JSON.stringify(d))}}}();
function MusicViewer(d){function c(){e.innerHTML="";var a=Vex.Flow.Renderer.Backends.SVG;"CANVAS"===e.tagName.toUpperCase()&&(a=Vex.Flow.Renderer.Backends.CANVAS);a=new Vex.Flow.Renderer(e,a);l=a.getContext();a.resize(e.clientWidth,e.clientHeight);l.setFont("Arial",10,"").setBackgroundFillStyle("#ffffff");return l}function b(b,c,d){c=void 0===c?0:c;d=void 0===d?0:d;var f={"C\u266f":7,"b\u266d":5,"E\u266d":3,"c\u266f":4,d:1,c:3,"a\u266f":7,F:1,B:5,D:2,"G\u266d":6,"B\u266d":2,"g\u266f":5,e:1,"C\u266d":7,
"F\u266f":6,b:2,G:1,"a\u266d":7,E:4,a:0,C:0,"A\u266d":4,"f\u266f":3,"d\u266f":6,g:2,A:3,f:4,"D\u266d":5,"e\u266d":6};c=(0===c?e.clientWidth:c)-8;var h=0===d?e.clientHeight:d;d=Math.floor(h/160);for(var h=40+.33*(h-160*d),l=a.getData(),k=[],m=0;m<d;m++)k.push({height:160,staves:[]});for(m=0;m<d&&b<l.bars.length;m++){for(var r=[],n="",p="",x="",q=b;q<l.bars.length;q++){var w=l.bars[q],t={clef:"",key:"",time:"",verticals:w.verticals.length,size:0};w.clef!==n&&(n=t.clef=w.clef,t.size+=25);w.key!==p&&
(p=t.key=w.key,t.size+=8*f[w.key]);w.time!==x&&(x=t.time=w.time,t.size+=14);t.size+=50*t.verticals;r.push(t)}p=0;n=l.bars.length-b;for(q=b;q<l.bars.length;q++)if(p+=r[q-b].size,p>c){n=q>b?q-b:1;break}for(q=p=0;q<n;q++)p+=r[q].size;for(q=x=0;q<n;q++)g=w=q+b,t=r[q].size/p*c,k[m].staves.push({barIndex:w,left:x+4,width:t}),x+=t;b+=n}return{rows:k,staveOffsetTop:h}}function f(c){var e=a.getData();c=0==c?e.bars.length-1:c-1;for(var d=0,f=0;f<e.bars.length;f++){for(var h=d,g=b(d),l=0;l<g.rows.length;l++)for(var k=
0;k<g.rows[l].length;k++){if(c===g.rows[l][k].barIndex)return 0==l+k?h:d;d=g.rows[l][k].barIndex}d+=1}}var e=d,a=null,k=0,g=0,l=null,m=null;c();return{setPiece:function(b){a=b},setFirstBar:function(a){k=a},display:function(){c();var e=a.getData(),d=b(k),f=d.staveOffsetTop;m=d;for(var g=0;g<d.rows.length;g++){for(var z="",C="",v="",u=0;u<d.rows[g].staves.length;u++){var r=e.bars[d.rows[g].staves[u].barIndex],A=new Vex.Flow.Stave(d.rows[g].staves[u].left,f,d.rows[g].staves[u].width);0==u&&A.setMeasure(d.rows[g].staves[u].barIndex+
1);r.clef!==z&&(z=r.clef,A.addClef(r.clef));r.key!==C&&(C=r.key,A.addKeySignature(VFUtility.toVFKeySignature(r.key)));r.time!==v&&(v=r.time,A.addTimeSignature(r.time));A.setContext(l).draw();for(var B=[],x={},q=0;q<r.verticals.length;q++)B.push(VFUtility.prepareStaveNote(r.key,r.verticals[q],x));r=Vex.Flow.Beam.generateBeams(B);Vex.Flow.Formatter.FormatAndDraw(l,A,B);r.forEach(function(a){a.setContext(l).draw()})}f+=d.rows[g].height}},getLastBar:function(){return g},getCurrentLayout:function(){return m},
getFirstBarInPreviousPage:f,getFirstBarInLastPage:function(){return f(0)}}}
var Note=function(){function d(b){var a={A:[0,1],"B\ud834\udd2b":[0,1],"G\ud834\udd2a":[0,1],"A\u266f":[0,2],"B\u266d":[0,2],B:[0,3],"A\ud834\udd2a":[0,3],"C\u266d":[1,3],C:[1,4],"D\ud834\udd2b":[1,4],"B\u266f":[0,4],"C\u266f":[1,5],"D\u266d":[1,5],D:[1,6],"E\ud834\udd2b":[1,6],"C\ud834\udd2a":[1,6],"D\u266f":[1,7],"E\u266d":[1,7],"F\ud834\udd2b":[1,7],E:[1,8],"F\u266d":[1,8],"D\ud834\udd2a":[1,8],F:[1,9],"G\ud834\udd2b":[1,9],"E\u266f":[1,9],"F\u266f":[1,10],"G\u266d":[1,10],G:[1,11],"A\ud834\udd2b":[1,
11],"F\ud834\udd2a":[1,11],"G\u266f":[1,12],"A\u266d":[1,12]};b=c(b);var e=b.natural+b.accidental;return a.hasOwnProperty(e)?(a=a[e],a[1]+12*(b.octave-a[0])):-1}function c(b){var a={natural:"",octave:-1,accidental:""};if(0>=b.length)return a;a.natural=b[0];a.octave=parseInt(b.substring(b.length-1,b.length));a.accidental="";a.accidentalASCII="";2<b.length&&(1==b.indexOf("\u266d")?(a.accidental="\u266d",a.accidentalASCII="b"):1==b.indexOf("\u266f")?(a.accidental="\u266f",a.accidentalASCII="#"):1==b.indexOf("\ud834\udd2b")?
(a.accidental="\ud834\udd2b",a.accidentalASCII="bb"):1==b.indexOf("\ud834\udd2a")&&(a.accidental="\ud834\udd2a",a.accidentalASCII="##"));return a}function b(b,a){var c=f[b],d="";"\u266d"==c.sharpflat&&"BEADGCF".indexOf(a)<c.amount?d="\u266d":"\u266f"==c.sharpflat&&"FCGDAEB".indexOf(a)<c.amount&&(d="\u266f");return d}var f={"D\u266d":{index:0,sharpflat:"\u266d",amount:5},"G\u266f":{index:1,sharpflat:"\u266f",amount:8},"b\u266d":{index:2,sharpflat:"\u266d",amount:5},"C\u266d":{index:3,sharpflat:"\u266d",
amount:7},e:{index:4,sharpflat:"\u266f",amount:1},"C\u266f":{index:5,sharpflat:"\u266f",amount:7},B:{index:6,sharpflat:"\u266f",amount:5},g:{index:7,sharpflat:"\u266d",amount:2},f:{index:8,sharpflat:"\u266d",amount:4},"F\u266d":{index:9,sharpflat:"\u266d",amount:8},a:{index:10,sharpflat:"\u266f",amount:0},G:{index:11,sharpflat:"\u266f",amount:1},"B\u266d":{index:12,sharpflat:"\u266d",amount:2},"e\u266f":{index:13,sharpflat:"\u266f",amount:8},"a\u266f":{index:14,sharpflat:"\u266f",amount:7},"d\u266d":{index:15,
sharpflat:"\u266d",amount:8},d:{index:16,sharpflat:"\u266d",amount:1},"F\u266f":{index:17,sharpflat:"\u266f",amount:6},"g\u266f":{index:18,sharpflat:"\u266f",amount:5},C:{index:19,sharpflat:"\u266f",amount:0},D:{index:20,sharpflat:"\u266f",amount:2},"A\u266d":{index:21,sharpflat:"\u266d",amount:4},A:{index:22,sharpflat:"\u266f",amount:3},"E\u266d":{index:23,sharpflat:"\u266d",amount:3},"f\u266f":{index:24,sharpflat:"\u266f",amount:3},c:{index:25,sharpflat:"\u266d",amount:3},b:{index:26,sharpflat:"\u266f",
amount:2},F:{index:27,sharpflat:"\u266d",amount:1},E:{index:28,sharpflat:"\u266f",amount:4},"G\u266d":{index:29,sharpflat:"\u266d",amount:6},"c\u266f":{index:30,sharpflat:"\u266f",amount:4},"e\u266d":{index:31,sharpflat:"\u266d",amount:6},"a\u266d":{index:32,sharpflat:"\u266d",amount:7},"d\u266f":{index:33,sharpflat:"\u266f",amount:6}};return{flat:"\u266d",sharp:"\u266f",flatflat:"\ud834\udd2b",sharpsharp:"\ud834\udd2a",getNoteOrder:d,getNoteFrequency:function(b){b=d(b);return 0>b?0:440*Math.pow(Math.pow(2,
1/12),b-49)},getNoteDetail:c,getDefaultAccidental:b,getDefaultAccidentalASCII:function(c,a){return b(c,a).replace("\u266f","#").replace("\u266d","b")},getFirstNoteInKey:function(b){b=b.substring(0,1);return 0<="GAB".indexOf(b)?b+"3":b+"4"}}}(),PDFConverter=function(d,c){function b(){var c=f.querySelectorAll("div.page");k+=1;k>=c.length?e(a.output("datauristring")):(a.addPage(),a.addHTML(c[k],b))}var f=d,e=c,a=null,k=0;return{convert:function(){var c=f.querySelectorAll("div.page");0>=c.length?e(null):
(a=new jsPDF("p","pt","a4"),k=0,a.addHTML(c[0],b))}}},PDFRenderer=function(d){return{render:function(c){d.innerHTML="";for(var b=-1,f=-1,e=0;8>e;e++){f+=1;b+=1;if(b>=c.getData().bars.length)break;var a;a=f;var k=document.createElement("div");k.classList.add("page");k.innerHTML='<div class="header"></div><div class="title XXX"></div><canvas class="music"></canvas><div class="footer"></div>'.replace("XXX",0===a?"":"hide");d.appendChild(k);a=k;a.querySelector("div.title").innerHTML=Locale.getTranslation(c.getData().descriptions);
a.querySelector("div.footer").innerHTML=Locale.getPrintFooter();a=new MusicViewer(a.querySelector("canvas.music"));a.setPiece(c);a.setFirstBar(b);a.display();b=a.getLastBar()}}}},Piece=function(){function d(c){function b(b){for(var a=0;a<d.bars.length;a++)if(d.bars[a].first<=b&&b<d.bars[a].first+d.bars[a].verticals.length)return d.bars[a];return null}var d=JSON.parse(c);return{getData:function(){return d},getBar:b,getNextBar:function(c){c=b(c);return b(c.first+c.verticals.length)},getTotalVerticals:function(){var b=
d.bars[d.bars.length-1];return b.first+b.verticals.length}}}return{createFromString:function(c){return new d(c)}}}();(function(){var d=function(){document.querySelector("div#printFooter").classList.remove("hidden");App.resize()},c=function(){document.querySelector("div#printFooter").classList.add("hidden");App.resize()};window.matchMedia&&window.matchMedia("print").addListener(function(b){b.matches?d():c()});window.onbeforeprint=d;window.onafterprint=c})();
var VFUtility=function(){function d(c){c=Note.getNoteDetail(c);return c.natural+c.accidentalASCII+"/"+c.octave}return{toVFKeySignature:function(c){c!==c.toUpperCase()&&(c=c.toUpperCase()+"m");return c=c.replace(Note.flat,"b").replace(Note.sharp,"#")},prepareStaveNote:function(c,b,f){for(var e,a,k,g=[],l=0;l<b.notes.length;l++)g.push(d(b.notes[l]));g=new Vex.Flow.StaveNote({keys:g,duration:b.duration});if("r"!==b.duration.substr(-1))for(l=0;l<b.notes.length;l++)a:{var m=c,h=g,n=l,p=f;k=h.keys[n];var y=
k.indexOf("/");e=k.substring(0,1);a=parseInt(k.substring(y+1));k=k.substring(1,y);y=e+a;a=!1;if(p.hasOwnProperty(y))if(p[y]==k)break a;else a=!0;p[y]=k;"bb"==k?h.addAccidental(n,new Vex.Flow.Accidental("bb")):"##"==k?h.addAccidental(n,new Vex.Flow.Accidental("##")):(e=Note.getDefaultAccidentalASCII(m,e),"#"==e?"#"==k?a&&h.addAccidental(n,new Vex.Flow.Accidental("#")):"b"==k?h.addAccidental(n,new Vex.Flow.Accidental("b")):h.addAccidental(n,new Vex.Flow.Accidental("n")):"b"==e?"#"==k?h.addAccidental(n,
new Vex.Flow.Accidental("#")):"b"==k?a&&h.addAccidental(n,new Vex.Flow.Accidental("b")):h.addAccidental(n,new Vex.Flow.Accidental("n")):"#"==k?h.addAccidental(n,new Vex.Flow.Accidental("#")):"b"==k?h.addAccidental(n,new Vex.Flow.Accidental("b")):a&&h.addAccidental(n,new Vex.Flow.Accidental("n")))}c=b.duration;"dd"==c.substring(c.length-2)?g.addDotToAll().addDotToAll():(b=b.duration,"d"==b.substring(b.length-1)&&g.addDotToAll());return g}}}(),ViewerPage=function(){function d(){b();for(var c=document.querySelectorAll("body > div#controls > div.control"),
d=0;d<c.length;d++){var e=c[d];0<=["pre","next","pdf"].indexOf(e.id)&&e.classList.remove("disabled")}document.querySelector("body > div#container > div#musicTitle").innerHTML=Locale.getTranslation(a.getData().descriptions);sessionStorage.lastPieceId=a.getData().id}function c(b){b=b.target.id;var c=a.getData();if("pdf"===b){LoadingIconManager.show();var d=document.querySelector("body > div#pdfRenderer");d.style.display="block";(new PDFRenderer(d)).render(a);(new PDFConverter(d,function(a){window.location=
a;d.style.display="none";LoadingIconManager.hide()})).convert(a)}else"pre"==b?window.location=window.location.pathname+"?p="+a.getData().id+"&b="+e.getFirstBarInPreviousPage(k):"next"==b&&(window.location=window.location.pathname+"?p="+a.getData().id+"&b="+(e.getLastBar()+1)%c.bars.length)}function b(){null!==a&&(e.setPiece(a),e.setFirstBar(k),e.display(),g.updateParams(document.querySelector("body > div#container > div#music").getBoundingClientRect(),e.getCurrentLayout(),a))}function f(){g.initialize();
e=new MusicViewer(document.querySelector("body > div#container > div#music"));for(var a=document.querySelectorAll("body > div#controls > div.control"),b=0;b<a.length;b++)a[b].addEventListener("click",c)}var e=null,a=null,k=0,g=function(){function a(a){if(null===v)return null;var b=a.clientX,c=a.clientY;"ontouchstart"in window&&(b=a.touches[0].clientX,c=a.touches[0].clientY);for(a=0;a<v.rows.length;a++)for(var d=0;d<v.rows[a].staves.length;d++){var e=v.rows[a].staves[d].left+g.left,f=e+v.rows[a].staves[d].width,
h=v.staveOffsetTop+160*a+g.top,k=h+160;if(e<b&&b<f&&h<c&&c<k)return{left:e,top:h,right:f,bottom:k,barIndex:v.rows[a].staves[d].barIndex}}return null}function b(a){null===a?f.style.display="none":(f.style.left=a.left+"px",f.style.top=a.top+"px",f.style.width=a.right-a.left+"px",f.style.height=a.bottom-a.top+"px",f.style.display="block")}function c(c){c=a(c);null!==c&&(u=!0,b(c))}function d(c){u&&(console.log("try to highlight"),c=a(c),b(c))}function e(b){u&&(u=!1,f.style.display="none",b=a(b),null!==
b&&(window.location=App.getPagePath(IndexPage)+"?p="+k.getData().id+"&v="+k.getData().bars[b.barIndex].first))}var f=null,g=null,k=null,v=null,u=!1;return{initialize:function(){var a="mousedown",b="mousemove",g="mouseup";"ontouchstart"in window&&(a="touchstart",b="touchmove",g="touchend");window.addEventListener(a,c);window.addEventListener(b,d);window.addEventListener(g,e);f=document.querySelector("body > div#staveOverlay")},updateParams:function(a,b,c){g=a;v=b;k=c}}}();return{initialize:function(b){f();
var c=b.p||"default";k=parseInt(b.b)||0;a=MusicStorageManager.getPiece(c);null!==a?d():(LoadingIconManager.show(),AJAX.GET(App.getPiecesPath()+c+".json",function(b){a=Piece.createFromString(b);MusicStorageManager.setPiece(a);d();LoadingIconManager.hide()}))},draw:b,getPath:function(){return"/viewer.html"}}}(),ViolinSimulator=function(){function d(){if(null!=c)return!0;if("AudioContext"in window)c=new AudioContext;else if("webkitAudioContext"in window)c=new webkitAudioContext;else return c=null,!1;
b=c.createGain();b.gain.value=0;b.connect(c.destination);return!0}var c=null,b=null,f=[];return{play:function(e){d();for(var a=0;a<e.length;a++){var k=c.createOscillator();k.frequency.value=e[a];var g=k,l=Math.PI,m=new Float32Array(12),h=new Float32Array(12),n=[.49,.995,.94,.425,.48,0,.365,.04,.085,0,.09,0],l=[0,0,l/2,0,l/2,0,l/2,0,l/2,0,l/2,0];m[0]=0;h[0]=0;for(var p=1;12>p;p++)m[p]=n[p]*n[0]*Math.cos(l[p]),h[p]=n[p]*n[0]*Math.sin(l[p]);m=c.createPeriodicWave(h,m);g.setPeriodicWave(m);k.connect(b);
k.start(0);f.push(k)}b.gain.linearRampToValueAtTime(0,c.currentTime);b.gain.linearRampToValueAtTime(.5,c.currentTime+.05)},stop:function(){d();b.gain.linearRampToValueAtTime(.5,c.currentTime);b.gain.linearRampToValueAtTime(0,c.currentTime+.05);setTimeout(function(){for(var c=0;c<f.length;c++){var a=f[c];a.stop(0);a.disconnect(b)}f=[]},50)},playAndStop:function(b,a,c){}}}(),App=function(){function d(){b.draw()}var c={},b=null;return{initialize:function(f){f=void 0===f?{}:f;Header.initialize();for(var e=
window.location.pathname,a=window.location.search,a=("?"===a[0]?a.substr(1):a).split("&"),k=0;k<a.length;k++){var g=a[k].split("=");f[decodeURIComponent(g[0])]=decodeURIComponent(g[1]||"")}f.lastPage=sessionStorage.lastPage||null;c=f;b=0===e.indexOf("/v1"+ViewerPage.getPath())?ViewerPage:0===e.indexOf("/v1"+CatalogPage.getPath())?CatalogPage:0===e.indexOf("/v1"+AboutPage.getPath())?AboutPage:IndexPage;Header.highlight(b);b.initialize(f);sessionStorage.setItem("lastPage",b.getPath());document.querySelector("body > div#container > div#printFooter").innerHTML=
Locale.getPrintFooter();window.addEventListener("resize",d)},getParams:function(){return c},getRootPath:function(){return"/v1"},getPagePath:function(b){return"/v1"+(void 0===b?null:b).getPath()},getPiecesPath:function(){return"/v1/pieces/"},resize:d}}();
/*
Vex Flow - A JavaScript library for rendering music notation.
Copyright (c) 2010 Mohit Muthanna Cheppudira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/



goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___68234 = arguments.length;
var i__5770__auto___68235 = (0);
while(true){
if((i__5770__auto___68235 < len__5769__auto___68234)){
args__5775__auto__.push((arguments[i__5770__auto___68235]));

var G__68236 = (i__5770__auto___68235 + (1));
i__5770__auto___68235 = G__68236;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq67783){
var G__67784 = cljs.core.first(seq67783);
var seq67783__$1 = cljs.core.next(seq67783);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67784,seq67783__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__67788 = cljs.core.seq(sources);
var chunk__67789 = null;
var count__67790 = (0);
var i__67791 = (0);
while(true){
if((i__67791 < count__67790)){
var map__67798 = chunk__67789.cljs$core$IIndexed$_nth$arity$2(null,i__67791);
var map__67798__$1 = cljs.core.__destructure_map(map__67798);
var src = map__67798__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67798__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67798__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67798__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67798__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e67799){var e_68237 = e67799;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_68237);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_68237.message)].join('')));
}

var G__68238 = seq__67788;
var G__68239 = chunk__67789;
var G__68240 = count__67790;
var G__68241 = (i__67791 + (1));
seq__67788 = G__68238;
chunk__67789 = G__68239;
count__67790 = G__68240;
i__67791 = G__68241;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67788);
if(temp__5804__auto__){
var seq__67788__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67788__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67788__$1);
var G__68242 = cljs.core.chunk_rest(seq__67788__$1);
var G__68243 = c__5568__auto__;
var G__68244 = cljs.core.count(c__5568__auto__);
var G__68245 = (0);
seq__67788 = G__68242;
chunk__67789 = G__68243;
count__67790 = G__68244;
i__67791 = G__68245;
continue;
} else {
var map__67800 = cljs.core.first(seq__67788__$1);
var map__67800__$1 = cljs.core.__destructure_map(map__67800);
var src = map__67800__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67800__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67800__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67800__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67800__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e67801){var e_68246 = e67801;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_68246);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_68246.message)].join('')));
}

var G__68247 = cljs.core.next(seq__67788__$1);
var G__68248 = null;
var G__68249 = (0);
var G__68250 = (0);
seq__67788 = G__68247;
chunk__67789 = G__68248;
count__67790 = G__68249;
i__67791 = G__68250;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__67804 = cljs.core.seq(js_requires);
var chunk__67805 = null;
var count__67806 = (0);
var i__67807 = (0);
while(true){
if((i__67807 < count__67806)){
var js_ns = chunk__67805.cljs$core$IIndexed$_nth$arity$2(null,i__67807);
var require_str_68253 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_68253);


var G__68255 = seq__67804;
var G__68256 = chunk__67805;
var G__68257 = count__67806;
var G__68258 = (i__67807 + (1));
seq__67804 = G__68255;
chunk__67805 = G__68256;
count__67806 = G__68257;
i__67807 = G__68258;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67804);
if(temp__5804__auto__){
var seq__67804__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67804__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67804__$1);
var G__68259 = cljs.core.chunk_rest(seq__67804__$1);
var G__68260 = c__5568__auto__;
var G__68261 = cljs.core.count(c__5568__auto__);
var G__68262 = (0);
seq__67804 = G__68259;
chunk__67805 = G__68260;
count__67806 = G__68261;
i__67807 = G__68262;
continue;
} else {
var js_ns = cljs.core.first(seq__67804__$1);
var require_str_68263 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_68263);


var G__68264 = cljs.core.next(seq__67804__$1);
var G__68265 = null;
var G__68266 = (0);
var G__68267 = (0);
seq__67804 = G__68264;
chunk__67805 = G__68265;
count__67806 = G__68266;
i__67807 = G__68267;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__67809){
var map__67810 = p__67809;
var map__67810__$1 = cljs.core.__destructure_map(map__67810);
var msg = map__67810__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67810__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67810__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67811(s__67812){
return (new cljs.core.LazySeq(null,(function (){
var s__67812__$1 = s__67812;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__67812__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__67817 = cljs.core.first(xs__6360__auto__);
var map__67817__$1 = cljs.core.__destructure_map(map__67817);
var src = map__67817__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67817__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67817__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__67812__$1,map__67817,map__67817__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__67810,map__67810__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67811_$_iter__67813(s__67814){
return (new cljs.core.LazySeq(null,((function (s__67812__$1,map__67817,map__67817__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__67810,map__67810__$1,msg,info,reload_info){
return (function (){
var s__67814__$1 = s__67814;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__67814__$1);
if(temp__5804__auto____$1){
var s__67814__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__67814__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__67814__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__67816 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__67815 = (0);
while(true){
if((i__67815 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__67815);
cljs.core.chunk_append(b__67816,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__68268 = (i__67815 + (1));
i__67815 = G__68268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67816),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67811_$_iter__67813(cljs.core.chunk_rest(s__67814__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67816),null);
}
} else {
var warning = cljs.core.first(s__67814__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67811_$_iter__67813(cljs.core.rest(s__67814__$2)));
}
} else {
return null;
}
break;
}
});})(s__67812__$1,map__67817,map__67817__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__67810,map__67810__$1,msg,info,reload_info))
,null,null));
});})(s__67812__$1,map__67817,map__67817__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__67810,map__67810__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67811(cljs.core.rest(s__67812__$1)));
} else {
var G__68269 = cljs.core.rest(s__67812__$1);
s__67812__$1 = G__68269;
continue;
}
} else {
var G__68270 = cljs.core.rest(s__67812__$1);
s__67812__$1 = G__68270;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__67818_68272 = cljs.core.seq(warnings);
var chunk__67819_68273 = null;
var count__67820_68274 = (0);
var i__67821_68275 = (0);
while(true){
if((i__67821_68275 < count__67820_68274)){
var map__67824_68278 = chunk__67819_68273.cljs$core$IIndexed$_nth$arity$2(null,i__67821_68275);
var map__67824_68279__$1 = cljs.core.__destructure_map(map__67824_68278);
var w_68280 = map__67824_68279__$1;
var msg_68281__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67824_68279__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_68282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67824_68279__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_68283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67824_68279__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_68284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67824_68279__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_68284)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_68282),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_68283),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_68281__$1)].join(''));


var G__68285 = seq__67818_68272;
var G__68286 = chunk__67819_68273;
var G__68287 = count__67820_68274;
var G__68288 = (i__67821_68275 + (1));
seq__67818_68272 = G__68285;
chunk__67819_68273 = G__68286;
count__67820_68274 = G__68287;
i__67821_68275 = G__68288;
continue;
} else {
var temp__5804__auto___68289 = cljs.core.seq(seq__67818_68272);
if(temp__5804__auto___68289){
var seq__67818_68290__$1 = temp__5804__auto___68289;
if(cljs.core.chunked_seq_QMARK_(seq__67818_68290__$1)){
var c__5568__auto___68291 = cljs.core.chunk_first(seq__67818_68290__$1);
var G__68292 = cljs.core.chunk_rest(seq__67818_68290__$1);
var G__68293 = c__5568__auto___68291;
var G__68294 = cljs.core.count(c__5568__auto___68291);
var G__68295 = (0);
seq__67818_68272 = G__68292;
chunk__67819_68273 = G__68293;
count__67820_68274 = G__68294;
i__67821_68275 = G__68295;
continue;
} else {
var map__67825_68297 = cljs.core.first(seq__67818_68290__$1);
var map__67825_68298__$1 = cljs.core.__destructure_map(map__67825_68297);
var w_68299 = map__67825_68298__$1;
var msg_68300__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67825_68298__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_68301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67825_68298__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_68302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67825_68298__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_68303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67825_68298__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_68303)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_68301),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_68302),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_68300__$1)].join(''));


var G__68304 = cljs.core.next(seq__67818_68290__$1);
var G__68305 = null;
var G__68306 = (0);
var G__68307 = (0);
seq__67818_68272 = G__68304;
chunk__67819_68273 = G__68305;
count__67820_68274 = G__68306;
i__67821_68275 = G__68307;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__67808_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__67808_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__67826){
var map__67827 = p__67826;
var map__67827__$1 = cljs.core.__destructure_map(map__67827);
var msg = map__67827__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67827__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67827__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__67828 = cljs.core.seq(updates);
var chunk__67830 = null;
var count__67831 = (0);
var i__67832 = (0);
while(true){
if((i__67832 < count__67831)){
var path = chunk__67830.cljs$core$IIndexed$_nth$arity$2(null,i__67832);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__68020_68313 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__68024_68314 = null;
var count__68025_68315 = (0);
var i__68026_68316 = (0);
while(true){
if((i__68026_68316 < count__68025_68315)){
var node_68317 = chunk__68024_68314.cljs$core$IIndexed$_nth$arity$2(null,i__68026_68316);
if(cljs.core.not(node_68317.shadow$old)){
var path_match_68318 = shadow.cljs.devtools.client.browser.match_paths(node_68317.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68318)){
var new_link_68319 = (function (){var G__68079 = node_68317.cloneNode(true);
G__68079.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68318),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68079;
})();
(node_68317.shadow$old = true);

(new_link_68319.onload = ((function (seq__68020_68313,chunk__68024_68314,count__68025_68315,i__68026_68316,seq__67828,chunk__67830,count__67831,i__67832,new_link_68319,path_match_68318,node_68317,path,map__67827,map__67827__$1,msg,updates,reload_info){
return (function (e){
var seq__68080_68320 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__68082_68321 = null;
var count__68083_68322 = (0);
var i__68084_68323 = (0);
while(true){
if((i__68084_68323 < count__68083_68322)){
var map__68088_68324 = chunk__68082_68321.cljs$core$IIndexed$_nth$arity$2(null,i__68084_68323);
var map__68088_68325__$1 = cljs.core.__destructure_map(map__68088_68324);
var task_68326 = map__68088_68325__$1;
var fn_str_68327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68088_68325__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68088_68325__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68330 = goog.getObjectByName(fn_str_68327,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68328)].join(''));

(fn_obj_68330.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68330.cljs$core$IFn$_invoke$arity$2(path,new_link_68319) : fn_obj_68330.call(null,path,new_link_68319));


var G__68332 = seq__68080_68320;
var G__68333 = chunk__68082_68321;
var G__68334 = count__68083_68322;
var G__68335 = (i__68084_68323 + (1));
seq__68080_68320 = G__68332;
chunk__68082_68321 = G__68333;
count__68083_68322 = G__68334;
i__68084_68323 = G__68335;
continue;
} else {
var temp__5804__auto___68337 = cljs.core.seq(seq__68080_68320);
if(temp__5804__auto___68337){
var seq__68080_68338__$1 = temp__5804__auto___68337;
if(cljs.core.chunked_seq_QMARK_(seq__68080_68338__$1)){
var c__5568__auto___68339 = cljs.core.chunk_first(seq__68080_68338__$1);
var G__68341 = cljs.core.chunk_rest(seq__68080_68338__$1);
var G__68342 = c__5568__auto___68339;
var G__68343 = cljs.core.count(c__5568__auto___68339);
var G__68344 = (0);
seq__68080_68320 = G__68341;
chunk__68082_68321 = G__68342;
count__68083_68322 = G__68343;
i__68084_68323 = G__68344;
continue;
} else {
var map__68089_68346 = cljs.core.first(seq__68080_68338__$1);
var map__68089_68347__$1 = cljs.core.__destructure_map(map__68089_68346);
var task_68348 = map__68089_68347__$1;
var fn_str_68349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68089_68347__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68089_68347__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68351 = goog.getObjectByName(fn_str_68349,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68350)].join(''));

(fn_obj_68351.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68351.cljs$core$IFn$_invoke$arity$2(path,new_link_68319) : fn_obj_68351.call(null,path,new_link_68319));


var G__68352 = cljs.core.next(seq__68080_68338__$1);
var G__68353 = null;
var G__68354 = (0);
var G__68355 = (0);
seq__68080_68320 = G__68352;
chunk__68082_68321 = G__68353;
count__68083_68322 = G__68354;
i__68084_68323 = G__68355;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_68317);
});})(seq__68020_68313,chunk__68024_68314,count__68025_68315,i__68026_68316,seq__67828,chunk__67830,count__67831,i__67832,new_link_68319,path_match_68318,node_68317,path,map__67827,map__67827__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68318], 0));

goog.dom.insertSiblingAfter(new_link_68319,node_68317);


var G__68356 = seq__68020_68313;
var G__68357 = chunk__68024_68314;
var G__68358 = count__68025_68315;
var G__68359 = (i__68026_68316 + (1));
seq__68020_68313 = G__68356;
chunk__68024_68314 = G__68357;
count__68025_68315 = G__68358;
i__68026_68316 = G__68359;
continue;
} else {
var G__68360 = seq__68020_68313;
var G__68361 = chunk__68024_68314;
var G__68362 = count__68025_68315;
var G__68363 = (i__68026_68316 + (1));
seq__68020_68313 = G__68360;
chunk__68024_68314 = G__68361;
count__68025_68315 = G__68362;
i__68026_68316 = G__68363;
continue;
}
} else {
var G__68364 = seq__68020_68313;
var G__68365 = chunk__68024_68314;
var G__68366 = count__68025_68315;
var G__68367 = (i__68026_68316 + (1));
seq__68020_68313 = G__68364;
chunk__68024_68314 = G__68365;
count__68025_68315 = G__68366;
i__68026_68316 = G__68367;
continue;
}
} else {
var temp__5804__auto___68368 = cljs.core.seq(seq__68020_68313);
if(temp__5804__auto___68368){
var seq__68020_68369__$1 = temp__5804__auto___68368;
if(cljs.core.chunked_seq_QMARK_(seq__68020_68369__$1)){
var c__5568__auto___68370 = cljs.core.chunk_first(seq__68020_68369__$1);
var G__68371 = cljs.core.chunk_rest(seq__68020_68369__$1);
var G__68372 = c__5568__auto___68370;
var G__68373 = cljs.core.count(c__5568__auto___68370);
var G__68374 = (0);
seq__68020_68313 = G__68371;
chunk__68024_68314 = G__68372;
count__68025_68315 = G__68373;
i__68026_68316 = G__68374;
continue;
} else {
var node_68375 = cljs.core.first(seq__68020_68369__$1);
if(cljs.core.not(node_68375.shadow$old)){
var path_match_68376 = shadow.cljs.devtools.client.browser.match_paths(node_68375.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68376)){
var new_link_68377 = (function (){var G__68091 = node_68375.cloneNode(true);
G__68091.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68376),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68091;
})();
(node_68375.shadow$old = true);

(new_link_68377.onload = ((function (seq__68020_68313,chunk__68024_68314,count__68025_68315,i__68026_68316,seq__67828,chunk__67830,count__67831,i__67832,new_link_68377,path_match_68376,node_68375,seq__68020_68369__$1,temp__5804__auto___68368,path,map__67827,map__67827__$1,msg,updates,reload_info){
return (function (e){
var seq__68095_68379 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__68097_68380 = null;
var count__68098_68381 = (0);
var i__68099_68382 = (0);
while(true){
if((i__68099_68382 < count__68098_68381)){
var map__68103_68383 = chunk__68097_68380.cljs$core$IIndexed$_nth$arity$2(null,i__68099_68382);
var map__68103_68384__$1 = cljs.core.__destructure_map(map__68103_68383);
var task_68385 = map__68103_68384__$1;
var fn_str_68386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68103_68384__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68103_68384__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68388 = goog.getObjectByName(fn_str_68386,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68387)].join(''));

(fn_obj_68388.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68388.cljs$core$IFn$_invoke$arity$2(path,new_link_68377) : fn_obj_68388.call(null,path,new_link_68377));


var G__68390 = seq__68095_68379;
var G__68391 = chunk__68097_68380;
var G__68392 = count__68098_68381;
var G__68393 = (i__68099_68382 + (1));
seq__68095_68379 = G__68390;
chunk__68097_68380 = G__68391;
count__68098_68381 = G__68392;
i__68099_68382 = G__68393;
continue;
} else {
var temp__5804__auto___68394__$1 = cljs.core.seq(seq__68095_68379);
if(temp__5804__auto___68394__$1){
var seq__68095_68395__$1 = temp__5804__auto___68394__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68095_68395__$1)){
var c__5568__auto___68396 = cljs.core.chunk_first(seq__68095_68395__$1);
var G__68397 = cljs.core.chunk_rest(seq__68095_68395__$1);
var G__68398 = c__5568__auto___68396;
var G__68399 = cljs.core.count(c__5568__auto___68396);
var G__68400 = (0);
seq__68095_68379 = G__68397;
chunk__68097_68380 = G__68398;
count__68098_68381 = G__68399;
i__68099_68382 = G__68400;
continue;
} else {
var map__68105_68401 = cljs.core.first(seq__68095_68395__$1);
var map__68105_68402__$1 = cljs.core.__destructure_map(map__68105_68401);
var task_68403 = map__68105_68402__$1;
var fn_str_68404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68105_68402__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68105_68402__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68406 = goog.getObjectByName(fn_str_68404,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68405)].join(''));

(fn_obj_68406.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68406.cljs$core$IFn$_invoke$arity$2(path,new_link_68377) : fn_obj_68406.call(null,path,new_link_68377));


var G__68407 = cljs.core.next(seq__68095_68395__$1);
var G__68408 = null;
var G__68409 = (0);
var G__68410 = (0);
seq__68095_68379 = G__68407;
chunk__68097_68380 = G__68408;
count__68098_68381 = G__68409;
i__68099_68382 = G__68410;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_68375);
});})(seq__68020_68313,chunk__68024_68314,count__68025_68315,i__68026_68316,seq__67828,chunk__67830,count__67831,i__67832,new_link_68377,path_match_68376,node_68375,seq__68020_68369__$1,temp__5804__auto___68368,path,map__67827,map__67827__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68376], 0));

goog.dom.insertSiblingAfter(new_link_68377,node_68375);


var G__68411 = cljs.core.next(seq__68020_68369__$1);
var G__68412 = null;
var G__68413 = (0);
var G__68414 = (0);
seq__68020_68313 = G__68411;
chunk__68024_68314 = G__68412;
count__68025_68315 = G__68413;
i__68026_68316 = G__68414;
continue;
} else {
var G__68415 = cljs.core.next(seq__68020_68369__$1);
var G__68416 = null;
var G__68417 = (0);
var G__68418 = (0);
seq__68020_68313 = G__68415;
chunk__68024_68314 = G__68416;
count__68025_68315 = G__68417;
i__68026_68316 = G__68418;
continue;
}
} else {
var G__68419 = cljs.core.next(seq__68020_68369__$1);
var G__68420 = null;
var G__68421 = (0);
var G__68422 = (0);
seq__68020_68313 = G__68419;
chunk__68024_68314 = G__68420;
count__68025_68315 = G__68421;
i__68026_68316 = G__68422;
continue;
}
}
} else {
}
}
break;
}


var G__68423 = seq__67828;
var G__68424 = chunk__67830;
var G__68425 = count__67831;
var G__68426 = (i__67832 + (1));
seq__67828 = G__68423;
chunk__67830 = G__68424;
count__67831 = G__68425;
i__67832 = G__68426;
continue;
} else {
var G__68427 = seq__67828;
var G__68428 = chunk__67830;
var G__68429 = count__67831;
var G__68430 = (i__67832 + (1));
seq__67828 = G__68427;
chunk__67830 = G__68428;
count__67831 = G__68429;
i__67832 = G__68430;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67828);
if(temp__5804__auto__){
var seq__67828__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67828__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67828__$1);
var G__68431 = cljs.core.chunk_rest(seq__67828__$1);
var G__68432 = c__5568__auto__;
var G__68433 = cljs.core.count(c__5568__auto__);
var G__68434 = (0);
seq__67828 = G__68431;
chunk__67830 = G__68432;
count__67831 = G__68433;
i__67832 = G__68434;
continue;
} else {
var path = cljs.core.first(seq__67828__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__68110_68435 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__68114_68436 = null;
var count__68115_68437 = (0);
var i__68116_68438 = (0);
while(true){
if((i__68116_68438 < count__68115_68437)){
var node_68439 = chunk__68114_68436.cljs$core$IIndexed$_nth$arity$2(null,i__68116_68438);
if(cljs.core.not(node_68439.shadow$old)){
var path_match_68440 = shadow.cljs.devtools.client.browser.match_paths(node_68439.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68440)){
var new_link_68441 = (function (){var G__68157 = node_68439.cloneNode(true);
G__68157.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68440),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68157;
})();
(node_68439.shadow$old = true);

(new_link_68441.onload = ((function (seq__68110_68435,chunk__68114_68436,count__68115_68437,i__68116_68438,seq__67828,chunk__67830,count__67831,i__67832,new_link_68441,path_match_68440,node_68439,path,seq__67828__$1,temp__5804__auto__,map__67827,map__67827__$1,msg,updates,reload_info){
return (function (e){
var seq__68158_68444 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__68160_68445 = null;
var count__68161_68446 = (0);
var i__68162_68447 = (0);
while(true){
if((i__68162_68447 < count__68161_68446)){
var map__68172_68448 = chunk__68160_68445.cljs$core$IIndexed$_nth$arity$2(null,i__68162_68447);
var map__68172_68449__$1 = cljs.core.__destructure_map(map__68172_68448);
var task_68450 = map__68172_68449__$1;
var fn_str_68451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68172_68449__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68172_68449__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68453 = goog.getObjectByName(fn_str_68451,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68452)].join(''));

(fn_obj_68453.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68453.cljs$core$IFn$_invoke$arity$2(path,new_link_68441) : fn_obj_68453.call(null,path,new_link_68441));


var G__68454 = seq__68158_68444;
var G__68455 = chunk__68160_68445;
var G__68456 = count__68161_68446;
var G__68457 = (i__68162_68447 + (1));
seq__68158_68444 = G__68454;
chunk__68160_68445 = G__68455;
count__68161_68446 = G__68456;
i__68162_68447 = G__68457;
continue;
} else {
var temp__5804__auto___68458__$1 = cljs.core.seq(seq__68158_68444);
if(temp__5804__auto___68458__$1){
var seq__68158_68459__$1 = temp__5804__auto___68458__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68158_68459__$1)){
var c__5568__auto___68460 = cljs.core.chunk_first(seq__68158_68459__$1);
var G__68461 = cljs.core.chunk_rest(seq__68158_68459__$1);
var G__68462 = c__5568__auto___68460;
var G__68463 = cljs.core.count(c__5568__auto___68460);
var G__68464 = (0);
seq__68158_68444 = G__68461;
chunk__68160_68445 = G__68462;
count__68161_68446 = G__68463;
i__68162_68447 = G__68464;
continue;
} else {
var map__68179_68465 = cljs.core.first(seq__68158_68459__$1);
var map__68179_68467__$1 = cljs.core.__destructure_map(map__68179_68465);
var task_68468 = map__68179_68467__$1;
var fn_str_68469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68179_68467__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68179_68467__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68471 = goog.getObjectByName(fn_str_68469,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68470)].join(''));

(fn_obj_68471.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68471.cljs$core$IFn$_invoke$arity$2(path,new_link_68441) : fn_obj_68471.call(null,path,new_link_68441));


var G__68472 = cljs.core.next(seq__68158_68459__$1);
var G__68473 = null;
var G__68474 = (0);
var G__68475 = (0);
seq__68158_68444 = G__68472;
chunk__68160_68445 = G__68473;
count__68161_68446 = G__68474;
i__68162_68447 = G__68475;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_68439);
});})(seq__68110_68435,chunk__68114_68436,count__68115_68437,i__68116_68438,seq__67828,chunk__67830,count__67831,i__67832,new_link_68441,path_match_68440,node_68439,path,seq__67828__$1,temp__5804__auto__,map__67827,map__67827__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68440], 0));

goog.dom.insertSiblingAfter(new_link_68441,node_68439);


var G__68476 = seq__68110_68435;
var G__68477 = chunk__68114_68436;
var G__68478 = count__68115_68437;
var G__68479 = (i__68116_68438 + (1));
seq__68110_68435 = G__68476;
chunk__68114_68436 = G__68477;
count__68115_68437 = G__68478;
i__68116_68438 = G__68479;
continue;
} else {
var G__68480 = seq__68110_68435;
var G__68481 = chunk__68114_68436;
var G__68482 = count__68115_68437;
var G__68483 = (i__68116_68438 + (1));
seq__68110_68435 = G__68480;
chunk__68114_68436 = G__68481;
count__68115_68437 = G__68482;
i__68116_68438 = G__68483;
continue;
}
} else {
var G__68484 = seq__68110_68435;
var G__68485 = chunk__68114_68436;
var G__68486 = count__68115_68437;
var G__68487 = (i__68116_68438 + (1));
seq__68110_68435 = G__68484;
chunk__68114_68436 = G__68485;
count__68115_68437 = G__68486;
i__68116_68438 = G__68487;
continue;
}
} else {
var temp__5804__auto___68489__$1 = cljs.core.seq(seq__68110_68435);
if(temp__5804__auto___68489__$1){
var seq__68110_68490__$1 = temp__5804__auto___68489__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68110_68490__$1)){
var c__5568__auto___68491 = cljs.core.chunk_first(seq__68110_68490__$1);
var G__68492 = cljs.core.chunk_rest(seq__68110_68490__$1);
var G__68493 = c__5568__auto___68491;
var G__68494 = cljs.core.count(c__5568__auto___68491);
var G__68495 = (0);
seq__68110_68435 = G__68492;
chunk__68114_68436 = G__68493;
count__68115_68437 = G__68494;
i__68116_68438 = G__68495;
continue;
} else {
var node_68496 = cljs.core.first(seq__68110_68490__$1);
if(cljs.core.not(node_68496.shadow$old)){
var path_match_68497 = shadow.cljs.devtools.client.browser.match_paths(node_68496.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68497)){
var new_link_68498 = (function (){var G__68181 = node_68496.cloneNode(true);
G__68181.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68497),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68181;
})();
(node_68496.shadow$old = true);

(new_link_68498.onload = ((function (seq__68110_68435,chunk__68114_68436,count__68115_68437,i__68116_68438,seq__67828,chunk__67830,count__67831,i__67832,new_link_68498,path_match_68497,node_68496,seq__68110_68490__$1,temp__5804__auto___68489__$1,path,seq__67828__$1,temp__5804__auto__,map__67827,map__67827__$1,msg,updates,reload_info){
return (function (e){
var seq__68182_68499 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__68184_68500 = null;
var count__68185_68501 = (0);
var i__68186_68502 = (0);
while(true){
if((i__68186_68502 < count__68185_68501)){
var map__68190_68503 = chunk__68184_68500.cljs$core$IIndexed$_nth$arity$2(null,i__68186_68502);
var map__68190_68504__$1 = cljs.core.__destructure_map(map__68190_68503);
var task_68505 = map__68190_68504__$1;
var fn_str_68506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68190_68504__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68190_68504__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68508 = goog.getObjectByName(fn_str_68506,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68507)].join(''));

(fn_obj_68508.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68508.cljs$core$IFn$_invoke$arity$2(path,new_link_68498) : fn_obj_68508.call(null,path,new_link_68498));


var G__68509 = seq__68182_68499;
var G__68510 = chunk__68184_68500;
var G__68511 = count__68185_68501;
var G__68512 = (i__68186_68502 + (1));
seq__68182_68499 = G__68509;
chunk__68184_68500 = G__68510;
count__68185_68501 = G__68511;
i__68186_68502 = G__68512;
continue;
} else {
var temp__5804__auto___68514__$2 = cljs.core.seq(seq__68182_68499);
if(temp__5804__auto___68514__$2){
var seq__68182_68516__$1 = temp__5804__auto___68514__$2;
if(cljs.core.chunked_seq_QMARK_(seq__68182_68516__$1)){
var c__5568__auto___68517 = cljs.core.chunk_first(seq__68182_68516__$1);
var G__68518 = cljs.core.chunk_rest(seq__68182_68516__$1);
var G__68519 = c__5568__auto___68517;
var G__68520 = cljs.core.count(c__5568__auto___68517);
var G__68521 = (0);
seq__68182_68499 = G__68518;
chunk__68184_68500 = G__68519;
count__68185_68501 = G__68520;
i__68186_68502 = G__68521;
continue;
} else {
var map__68194_68522 = cljs.core.first(seq__68182_68516__$1);
var map__68194_68523__$1 = cljs.core.__destructure_map(map__68194_68522);
var task_68524 = map__68194_68523__$1;
var fn_str_68525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68194_68523__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68194_68523__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68527 = goog.getObjectByName(fn_str_68525,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68526)].join(''));

(fn_obj_68527.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68527.cljs$core$IFn$_invoke$arity$2(path,new_link_68498) : fn_obj_68527.call(null,path,new_link_68498));


var G__68528 = cljs.core.next(seq__68182_68516__$1);
var G__68529 = null;
var G__68530 = (0);
var G__68531 = (0);
seq__68182_68499 = G__68528;
chunk__68184_68500 = G__68529;
count__68185_68501 = G__68530;
i__68186_68502 = G__68531;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_68496);
});})(seq__68110_68435,chunk__68114_68436,count__68115_68437,i__68116_68438,seq__67828,chunk__67830,count__67831,i__67832,new_link_68498,path_match_68497,node_68496,seq__68110_68490__$1,temp__5804__auto___68489__$1,path,seq__67828__$1,temp__5804__auto__,map__67827,map__67827__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68497], 0));

goog.dom.insertSiblingAfter(new_link_68498,node_68496);


var G__68532 = cljs.core.next(seq__68110_68490__$1);
var G__68533 = null;
var G__68534 = (0);
var G__68535 = (0);
seq__68110_68435 = G__68532;
chunk__68114_68436 = G__68533;
count__68115_68437 = G__68534;
i__68116_68438 = G__68535;
continue;
} else {
var G__68536 = cljs.core.next(seq__68110_68490__$1);
var G__68537 = null;
var G__68538 = (0);
var G__68539 = (0);
seq__68110_68435 = G__68536;
chunk__68114_68436 = G__68537;
count__68115_68437 = G__68538;
i__68116_68438 = G__68539;
continue;
}
} else {
var G__68540 = cljs.core.next(seq__68110_68490__$1);
var G__68541 = null;
var G__68542 = (0);
var G__68543 = (0);
seq__68110_68435 = G__68540;
chunk__68114_68436 = G__68541;
count__68115_68437 = G__68542;
i__68116_68438 = G__68543;
continue;
}
}
} else {
}
}
break;
}


var G__68544 = cljs.core.next(seq__67828__$1);
var G__68545 = null;
var G__68546 = (0);
var G__68547 = (0);
seq__67828 = G__68544;
chunk__67830 = G__68545;
count__67831 = G__68546;
i__67832 = G__68547;
continue;
} else {
var G__68548 = cljs.core.next(seq__67828__$1);
var G__68549 = null;
var G__68550 = (0);
var G__68551 = (0);
seq__67828 = G__68548;
chunk__67830 = G__68549;
count__67831 = G__68550;
i__67832 = G__68551;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__68198){
var map__68201 = p__68198;
var map__68201__$1 = cljs.core.__destructure_map(map__68201);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68201__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__68210){
var map__68211 = p__68210;
var map__68211__$1 = cljs.core.__destructure_map(map__68211);
var _ = map__68211__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68211__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__68212,done,error){
var map__68213 = p__68212;
var map__68213__$1 = cljs.core.__destructure_map(map__68213);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68213__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__68214,done,error){
var map__68215 = p__68214;
var map__68215__$1 = cljs.core.__destructure_map(map__68215);
var msg = map__68215__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68215__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68215__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68215__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__68216){
var map__68217 = p__68216;
var map__68217__$1 = cljs.core.__destructure_map(map__68217);
var src = map__68217__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68217__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__68218 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__68218) : done.call(null,G__68218));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__68219){
var map__68220 = p__68219;
var map__68220__$1 = cljs.core.__destructure_map(map__68220);
var msg__$1 = map__68220__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68220__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e68221){var ex = e68221;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__68222){
var map__68223 = p__68222;
var map__68223__$1 = cljs.core.__destructure_map(map__68223);
var env = map__68223__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68223__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__68228){
var map__68229 = p__68228;
var map__68229__$1 = cljs.core.__destructure_map(map__68229);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68229__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68229__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__68230){
var map__68231 = p__68230;
var map__68231__$1 = cljs.core.__destructure_map(map__68231);
var svc = map__68231__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68231__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

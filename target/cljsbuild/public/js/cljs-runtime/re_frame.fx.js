goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__57258 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__57259 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__57259);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___57375 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___57375)){
var new_db_57376 = temp__5804__auto___57375;
var fexpr__57263_57377 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__57263_57377.cljs$core$IFn$_invoke$arity$1 ? fexpr__57263_57377.cljs$core$IFn$_invoke$arity$1(new_db_57376) : fexpr__57263_57377.call(null,new_db_57376));
} else {
}

var seq__57264 = cljs.core.seq(effects_without_db);
var chunk__57265 = null;
var count__57266 = (0);
var i__57267 = (0);
while(true){
if((i__57267 < count__57266)){
var vec__57283 = chunk__57265.cljs$core$IIndexed$_nth$arity$2(null,i__57267);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57283,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57283,(1),null);
var temp__5802__auto___57378 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___57378)){
var effect_fn_57379 = temp__5802__auto___57378;
(effect_fn_57379.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57379.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57379.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57380 = seq__57264;
var G__57381 = chunk__57265;
var G__57382 = count__57266;
var G__57383 = (i__57267 + (1));
seq__57264 = G__57380;
chunk__57265 = G__57381;
count__57266 = G__57382;
i__57267 = G__57383;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57264);
if(temp__5804__auto__){
var seq__57264__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57264__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57264__$1);
var G__57384 = cljs.core.chunk_rest(seq__57264__$1);
var G__57385 = c__5568__auto__;
var G__57386 = cljs.core.count(c__5568__auto__);
var G__57387 = (0);
seq__57264 = G__57384;
chunk__57265 = G__57385;
count__57266 = G__57386;
i__57267 = G__57387;
continue;
} else {
var vec__57290 = cljs.core.first(seq__57264__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57290,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57290,(1),null);
var temp__5802__auto___57388 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___57388)){
var effect_fn_57389 = temp__5802__auto___57388;
(effect_fn_57389.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57389.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57389.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57390 = cljs.core.next(seq__57264__$1);
var G__57391 = null;
var G__57392 = (0);
var G__57393 = (0);
seq__57264 = G__57390;
chunk__57265 = G__57391;
count__57266 = G__57392;
i__57267 = G__57393;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__56987__auto___57394 = re_frame.interop.now();
var duration__56988__auto___57395 = (end__56987__auto___57394 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__56988__auto___57395,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__56987__auto___57394);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__57258);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___57398 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___57398)){
var new_db_57399 = temp__5804__auto___57398;
var fexpr__57295_57400 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__57295_57400.cljs$core$IFn$_invoke$arity$1 ? fexpr__57295_57400.cljs$core$IFn$_invoke$arity$1(new_db_57399) : fexpr__57295_57400.call(null,new_db_57399));
} else {
}

var seq__57296 = cljs.core.seq(effects_without_db);
var chunk__57297 = null;
var count__57298 = (0);
var i__57299 = (0);
while(true){
if((i__57299 < count__57298)){
var vec__57313 = chunk__57297.cljs$core$IIndexed$_nth$arity$2(null,i__57299);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57313,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57313,(1),null);
var temp__5802__auto___57402 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___57402)){
var effect_fn_57403 = temp__5802__auto___57402;
(effect_fn_57403.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57403.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57403.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57404 = seq__57296;
var G__57405 = chunk__57297;
var G__57406 = count__57298;
var G__57407 = (i__57299 + (1));
seq__57296 = G__57404;
chunk__57297 = G__57405;
count__57298 = G__57406;
i__57299 = G__57407;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57296);
if(temp__5804__auto__){
var seq__57296__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57296__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57296__$1);
var G__57408 = cljs.core.chunk_rest(seq__57296__$1);
var G__57409 = c__5568__auto__;
var G__57410 = cljs.core.count(c__5568__auto__);
var G__57411 = (0);
seq__57296 = G__57408;
chunk__57297 = G__57409;
count__57298 = G__57410;
i__57299 = G__57411;
continue;
} else {
var vec__57316 = cljs.core.first(seq__57296__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57316,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57316,(1),null);
var temp__5802__auto___57412 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___57412)){
var effect_fn_57413 = temp__5802__auto___57412;
(effect_fn_57413.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57413.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57413.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57414 = cljs.core.next(seq__57296__$1);
var G__57415 = null;
var G__57416 = (0);
var G__57417 = (0);
seq__57296 = G__57414;
chunk__57297 = G__57415;
count__57298 = G__57416;
i__57299 = G__57417;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__57319){
var map__57320 = p__57319;
var map__57320__$1 = cljs.core.__destructure_map(map__57320);
var effect = map__57320__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57320__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57320__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__57322 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__57323 = null;
var count__57324 = (0);
var i__57325 = (0);
while(true){
if((i__57325 < count__57324)){
var effect = chunk__57323.cljs$core$IIndexed$_nth$arity$2(null,i__57325);
re_frame.fx.dispatch_later(effect);


var G__57420 = seq__57322;
var G__57421 = chunk__57323;
var G__57422 = count__57324;
var G__57423 = (i__57325 + (1));
seq__57322 = G__57420;
chunk__57323 = G__57421;
count__57324 = G__57422;
i__57325 = G__57423;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57322);
if(temp__5804__auto__){
var seq__57322__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57322__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57322__$1);
var G__57425 = cljs.core.chunk_rest(seq__57322__$1);
var G__57426 = c__5568__auto__;
var G__57427 = cljs.core.count(c__5568__auto__);
var G__57428 = (0);
seq__57322 = G__57425;
chunk__57323 = G__57426;
count__57324 = G__57427;
i__57325 = G__57428;
continue;
} else {
var effect = cljs.core.first(seq__57322__$1);
re_frame.fx.dispatch_later(effect);


var G__57429 = cljs.core.next(seq__57322__$1);
var G__57430 = null;
var G__57431 = (0);
var G__57432 = (0);
seq__57322 = G__57429;
chunk__57323 = G__57430;
count__57324 = G__57431;
i__57325 = G__57432;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__57328 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__57329 = null;
var count__57330 = (0);
var i__57331 = (0);
while(true){
if((i__57331 < count__57330)){
var vec__57344 = chunk__57329.cljs$core$IIndexed$_nth$arity$2(null,i__57331);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57344,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57344,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___57433 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___57433)){
var effect_fn_57434 = temp__5802__auto___57433;
(effect_fn_57434.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57434.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57434.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__57441 = seq__57328;
var G__57442 = chunk__57329;
var G__57443 = count__57330;
var G__57444 = (i__57331 + (1));
seq__57328 = G__57441;
chunk__57329 = G__57442;
count__57330 = G__57443;
i__57331 = G__57444;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57328);
if(temp__5804__auto__){
var seq__57328__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57328__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57328__$1);
var G__57445 = cljs.core.chunk_rest(seq__57328__$1);
var G__57446 = c__5568__auto__;
var G__57447 = cljs.core.count(c__5568__auto__);
var G__57448 = (0);
seq__57328 = G__57445;
chunk__57329 = G__57446;
count__57330 = G__57447;
i__57331 = G__57448;
continue;
} else {
var vec__57351 = cljs.core.first(seq__57328__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57351,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57351,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___57449 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___57449)){
var effect_fn_57450 = temp__5802__auto___57449;
(effect_fn_57450.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57450.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57450.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__57451 = cljs.core.next(seq__57328__$1);
var G__57452 = null;
var G__57453 = (0);
var G__57454 = (0);
seq__57328 = G__57451;
chunk__57329 = G__57452;
count__57330 = G__57453;
i__57331 = G__57454;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__57362 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__57363 = null;
var count__57364 = (0);
var i__57365 = (0);
while(true){
if((i__57365 < count__57364)){
var event = chunk__57363.cljs$core$IIndexed$_nth$arity$2(null,i__57365);
re_frame.router.dispatch(event);


var G__57458 = seq__57362;
var G__57459 = chunk__57363;
var G__57460 = count__57364;
var G__57461 = (i__57365 + (1));
seq__57362 = G__57458;
chunk__57363 = G__57459;
count__57364 = G__57460;
i__57365 = G__57461;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57362);
if(temp__5804__auto__){
var seq__57362__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57362__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57362__$1);
var G__57462 = cljs.core.chunk_rest(seq__57362__$1);
var G__57463 = c__5568__auto__;
var G__57464 = cljs.core.count(c__5568__auto__);
var G__57465 = (0);
seq__57362 = G__57462;
chunk__57363 = G__57463;
count__57364 = G__57464;
i__57365 = G__57465;
continue;
} else {
var event = cljs.core.first(seq__57362__$1);
re_frame.router.dispatch(event);


var G__57466 = cljs.core.next(seq__57362__$1);
var G__57467 = null;
var G__57468 = (0);
var G__57469 = (0);
seq__57362 = G__57466;
chunk__57363 = G__57467;
count__57364 = G__57468;
i__57365 = G__57469;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__57366 = cljs.core.seq(value);
var chunk__57367 = null;
var count__57368 = (0);
var i__57369 = (0);
while(true){
if((i__57369 < count__57368)){
var event = chunk__57367.cljs$core$IIndexed$_nth$arity$2(null,i__57369);
clear_event(event);


var G__57470 = seq__57366;
var G__57471 = chunk__57367;
var G__57472 = count__57368;
var G__57473 = (i__57369 + (1));
seq__57366 = G__57470;
chunk__57367 = G__57471;
count__57368 = G__57472;
i__57369 = G__57473;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57366);
if(temp__5804__auto__){
var seq__57366__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57366__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57366__$1);
var G__57474 = cljs.core.chunk_rest(seq__57366__$1);
var G__57475 = c__5568__auto__;
var G__57476 = cljs.core.count(c__5568__auto__);
var G__57477 = (0);
seq__57366 = G__57474;
chunk__57367 = G__57475;
count__57368 = G__57476;
i__57369 = G__57477;
continue;
} else {
var event = cljs.core.first(seq__57366__$1);
clear_event(event);


var G__57478 = cljs.core.next(seq__57366__$1);
var G__57479 = null;
var G__57480 = (0);
var G__57481 = (0);
seq__57366 = G__57478;
chunk__57367 = G__57479;
count__57368 = G__57480;
i__57369 = G__57481;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map

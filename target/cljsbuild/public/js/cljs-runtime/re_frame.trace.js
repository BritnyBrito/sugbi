goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = true;
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__57007){
var map__57008 = p__57007;
var map__57008__$1 = cljs.core.__destructure_map(map__57008);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57008__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57008__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57008__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57008__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__57009_57036 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__57010_57037 = null;
var count__57011_57038 = (0);
var i__57012_57039 = (0);
while(true){
if((i__57012_57039 < count__57011_57038)){
var vec__57023_57040 = chunk__57010_57037.cljs$core$IIndexed$_nth$arity$2(null,i__57012_57039);
var k_57041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57023_57040,(0),null);
var cb_57042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57023_57040,(1),null);
try{var G__57027_57043 = cljs.core.deref(re_frame.trace.traces);
(cb_57042.cljs$core$IFn$_invoke$arity$1 ? cb_57042.cljs$core$IFn$_invoke$arity$1(G__57027_57043) : cb_57042.call(null,G__57027_57043));
}catch (e57026){var e_57044 = e57026;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_57041,"while storing",cljs.core.deref(re_frame.trace.traces),e_57044], 0));
}

var G__57045 = seq__57009_57036;
var G__57046 = chunk__57010_57037;
var G__57047 = count__57011_57038;
var G__57048 = (i__57012_57039 + (1));
seq__57009_57036 = G__57045;
chunk__57010_57037 = G__57046;
count__57011_57038 = G__57047;
i__57012_57039 = G__57048;
continue;
} else {
var temp__5804__auto___57049 = cljs.core.seq(seq__57009_57036);
if(temp__5804__auto___57049){
var seq__57009_57050__$1 = temp__5804__auto___57049;
if(cljs.core.chunked_seq_QMARK_(seq__57009_57050__$1)){
var c__5568__auto___57051 = cljs.core.chunk_first(seq__57009_57050__$1);
var G__57052 = cljs.core.chunk_rest(seq__57009_57050__$1);
var G__57053 = c__5568__auto___57051;
var G__57054 = cljs.core.count(c__5568__auto___57051);
var G__57055 = (0);
seq__57009_57036 = G__57052;
chunk__57010_57037 = G__57053;
count__57011_57038 = G__57054;
i__57012_57039 = G__57055;
continue;
} else {
var vec__57028_57057 = cljs.core.first(seq__57009_57050__$1);
var k_57058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57028_57057,(0),null);
var cb_57059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57028_57057,(1),null);
try{var G__57032_57060 = cljs.core.deref(re_frame.trace.traces);
(cb_57059.cljs$core$IFn$_invoke$arity$1 ? cb_57059.cljs$core$IFn$_invoke$arity$1(G__57032_57060) : cb_57059.call(null,G__57032_57060));
}catch (e57031){var e_57061 = e57031;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_57058,"while storing",cljs.core.deref(re_frame.trace.traces),e_57061], 0));
}

var G__57062 = cljs.core.next(seq__57009_57050__$1);
var G__57063 = null;
var G__57064 = (0);
var G__57065 = (0);
seq__57009_57036 = G__57062;
chunk__57010_57037 = G__57063;
count__57011_57038 = G__57064;
i__57012_57039 = G__57065;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map

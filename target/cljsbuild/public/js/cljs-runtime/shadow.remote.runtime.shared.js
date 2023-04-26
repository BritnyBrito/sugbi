goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__65863,res){
var map__65864 = p__65863;
var map__65864__$1 = cljs.core.__destructure_map(map__65864);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65864__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65864__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__65865 = res;
var G__65865__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65865,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__65865);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65865__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__65865__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__65867 = arguments.length;
switch (G__65867) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__65869,msg,handlers,timeout_after_ms){
var map__65870 = p__65869;
var map__65870__$1 = cljs.core.__destructure_map(map__65870);
var runtime = map__65870__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65870__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66047 = arguments.length;
var i__5770__auto___66048 = (0);
while(true){
if((i__5770__auto___66048 < len__5769__auto___66047)){
args__5775__auto__.push((arguments[i__5770__auto___66048]));

var G__66049 = (i__5770__auto___66048 + (1));
i__5770__auto___66048 = G__66049;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__65877,ev,args){
var map__65880 = p__65877;
var map__65880__$1 = cljs.core.__destructure_map(map__65880);
var runtime = map__65880__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65880__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__65881 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__65884 = null;
var count__65885 = (0);
var i__65886 = (0);
while(true){
if((i__65886 < count__65885)){
var ext = chunk__65884.cljs$core$IIndexed$_nth$arity$2(null,i__65886);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__66052 = seq__65881;
var G__66053 = chunk__65884;
var G__66054 = count__65885;
var G__66055 = (i__65886 + (1));
seq__65881 = G__66052;
chunk__65884 = G__66053;
count__65885 = G__66054;
i__65886 = G__66055;
continue;
} else {
var G__66056 = seq__65881;
var G__66057 = chunk__65884;
var G__66058 = count__65885;
var G__66059 = (i__65886 + (1));
seq__65881 = G__66056;
chunk__65884 = G__66057;
count__65885 = G__66058;
i__65886 = G__66059;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65881);
if(temp__5804__auto__){
var seq__65881__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65881__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__65881__$1);
var G__66060 = cljs.core.chunk_rest(seq__65881__$1);
var G__66061 = c__5568__auto__;
var G__66062 = cljs.core.count(c__5568__auto__);
var G__66063 = (0);
seq__65881 = G__66060;
chunk__65884 = G__66061;
count__65885 = G__66062;
i__65886 = G__66063;
continue;
} else {
var ext = cljs.core.first(seq__65881__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__66064 = cljs.core.next(seq__65881__$1);
var G__66065 = null;
var G__66066 = (0);
var G__66067 = (0);
seq__65881 = G__66064;
chunk__65884 = G__66065;
count__65885 = G__66066;
i__65886 = G__66067;
continue;
} else {
var G__66068 = cljs.core.next(seq__65881__$1);
var G__66069 = null;
var G__66070 = (0);
var G__66071 = (0);
seq__65881 = G__66068;
chunk__65884 = G__66069;
count__65885 = G__66070;
i__65886 = G__66071;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq65873){
var G__65874 = cljs.core.first(seq65873);
var seq65873__$1 = cljs.core.next(seq65873);
var G__65875 = cljs.core.first(seq65873__$1);
var seq65873__$2 = cljs.core.next(seq65873__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65874,G__65875,seq65873__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__65898,p__65899){
var map__65900 = p__65898;
var map__65900__$1 = cljs.core.__destructure_map(map__65900);
var runtime = map__65900__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65900__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__65901 = p__65899;
var map__65901__$1 = cljs.core.__destructure_map(map__65901);
var msg = map__65901__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65901__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__65903 = cljs.core.deref(state_ref);
var map__65903__$1 = cljs.core.__destructure_map(map__65903);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65903__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65903__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__65912){
var map__65913 = p__65912;
var map__65913__$1 = cljs.core.__destructure_map(map__65913);
var runtime = map__65913__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65913__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__65949,msg){
var map__65952 = p__65949;
var map__65952__$1 = cljs.core.__destructure_map(map__65952);
var runtime = map__65952__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65952__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__65959,key,p__65960){
var map__65961 = p__65959;
var map__65961__$1 = cljs.core.__destructure_map(map__65961);
var state = map__65961__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65961__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__65962 = p__65960;
var map__65962__$1 = cljs.core.__destructure_map(map__65962);
var spec = map__65962__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65962__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__65971,key,spec){
var map__65972 = p__65971;
var map__65972__$1 = cljs.core.__destructure_map(map__65972);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65972__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__65976_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__65976_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__65977_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__65977_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__65978_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__65978_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__65979_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__65979_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__65980_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__65980_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__65992,key){
var map__65993 = p__65992;
var map__65993__$1 = cljs.core.__destructure_map(map__65993);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65993__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__65999,msg){
var map__66000 = p__65999;
var map__66000__$1 = cljs.core.__destructure_map(map__66000);
var runtime = map__66000__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66000__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__66005,p__66006){
var map__66010 = p__66005;
var map__66010__$1 = cljs.core.__destructure_map(map__66010);
var runtime = map__66010__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66010__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__66011 = p__66006;
var map__66011__$1 = cljs.core.__destructure_map(map__66011);
var msg = map__66011__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__66017 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__66019 = null;
var count__66020 = (0);
var i__66021 = (0);
while(true){
if((i__66021 < count__66020)){
var map__66036 = chunk__66019.cljs$core$IIndexed$_nth$arity$2(null,i__66021);
var map__66036__$1 = cljs.core.__destructure_map(map__66036);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66036__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__66124 = seq__66017;
var G__66125 = chunk__66019;
var G__66126 = count__66020;
var G__66127 = (i__66021 + (1));
seq__66017 = G__66124;
chunk__66019 = G__66125;
count__66020 = G__66126;
i__66021 = G__66127;
continue;
} else {
var G__66128 = seq__66017;
var G__66129 = chunk__66019;
var G__66130 = count__66020;
var G__66131 = (i__66021 + (1));
seq__66017 = G__66128;
chunk__66019 = G__66129;
count__66020 = G__66130;
i__66021 = G__66131;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__66017);
if(temp__5804__auto__){
var seq__66017__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66017__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__66017__$1);
var G__66132 = cljs.core.chunk_rest(seq__66017__$1);
var G__66133 = c__5568__auto__;
var G__66134 = cljs.core.count(c__5568__auto__);
var G__66135 = (0);
seq__66017 = G__66132;
chunk__66019 = G__66133;
count__66020 = G__66134;
i__66021 = G__66135;
continue;
} else {
var map__66037 = cljs.core.first(seq__66017__$1);
var map__66037__$1 = cljs.core.__destructure_map(map__66037);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__66139 = cljs.core.next(seq__66017__$1);
var G__66140 = null;
var G__66141 = (0);
var G__66142 = (0);
seq__66017 = G__66139;
chunk__66019 = G__66140;
count__66020 = G__66141;
i__66021 = G__66142;
continue;
} else {
var G__66143 = cljs.core.next(seq__66017__$1);
var G__66144 = null;
var G__66145 = (0);
var G__66146 = (0);
seq__66017 = G__66143;
chunk__66019 = G__66144;
count__66020 = G__66145;
i__66021 = G__66146;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map

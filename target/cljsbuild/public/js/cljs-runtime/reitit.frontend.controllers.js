goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__69962,match){
var map__69963 = p__69962;
var map__69963__$1 = cljs.core.__destructure_map(map__69963);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69963__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69963__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69963__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__5043__auto__ = identity;
if(cljs.core.truth_(and__5043__auto__)){
return parameters;
} else {
return and__5043__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__69964(s__69965){
return (new cljs.core.LazySeq(null,(function (){
var s__69965__$1 = s__69965;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__69965__$1);
if(temp__5804__auto__){
var s__69965__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69965__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__69965__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__69967 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__69966 = (0);
while(true){
if((i__69966 < size__5522__auto__)){
var vec__69970 = cljs.core._nth(c__5521__auto__,i__69966);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69970,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69970,(1),null);
cljs.core.chunk_append(b__69967,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__69991 = (i__69966 + (1));
i__69966 = G__69991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69967),reitit$frontend$controllers$get_identity_$_iter__69964(cljs.core.chunk_rest(s__69965__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69967),null);
}
} else {
var vec__69973 = cljs.core.first(s__69965__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69973,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69973,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__69964(cljs.core.rest(s__69965__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
var G__69980 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__69980) : f.call(null,G__69980));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__69982_69992 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__69983_69993 = null;
var count__69984_69994 = (0);
var i__69985_69995 = (0);
while(true){
if((i__69985_69995 < count__69984_69994)){
var controller_69996 = chunk__69983_69993.cljs$core$IIndexed$_nth$arity$2(null,i__69985_69995);
reitit.frontend.controllers.apply_controller(controller_69996,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__69997 = seq__69982_69992;
var G__69998 = chunk__69983_69993;
var G__69999 = count__69984_69994;
var G__70000 = (i__69985_69995 + (1));
seq__69982_69992 = G__69997;
chunk__69983_69993 = G__69998;
count__69984_69994 = G__69999;
i__69985_69995 = G__70000;
continue;
} else {
var temp__5804__auto___70001 = cljs.core.seq(seq__69982_69992);
if(temp__5804__auto___70001){
var seq__69982_70002__$1 = temp__5804__auto___70001;
if(cljs.core.chunked_seq_QMARK_(seq__69982_70002__$1)){
var c__5568__auto___70003 = cljs.core.chunk_first(seq__69982_70002__$1);
var G__70004 = cljs.core.chunk_rest(seq__69982_70002__$1);
var G__70005 = c__5568__auto___70003;
var G__70006 = cljs.core.count(c__5568__auto___70003);
var G__70007 = (0);
seq__69982_69992 = G__70004;
chunk__69983_69993 = G__70005;
count__69984_69994 = G__70006;
i__69985_69995 = G__70007;
continue;
} else {
var controller_70008 = cljs.core.first(seq__69982_70002__$1);
reitit.frontend.controllers.apply_controller(controller_70008,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__70009 = cljs.core.next(seq__69982_70002__$1);
var G__70010 = null;
var G__70011 = (0);
var G__70012 = (0);
seq__69982_69992 = G__70009;
chunk__69983_69993 = G__70010;
count__69984_69994 = G__70011;
i__69985_69995 = G__70012;
continue;
}
} else {
}
}
break;
}

var seq__69986_70013 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__69987_70014 = null;
var count__69988_70015 = (0);
var i__69989_70016 = (0);
while(true){
if((i__69989_70016 < count__69988_70015)){
var controller_70017 = chunk__69987_70014.cljs$core$IIndexed$_nth$arity$2(null,i__69989_70016);
reitit.frontend.controllers.apply_controller(controller_70017,new cljs.core.Keyword(null,"start","start",-355208981));


var G__70018 = seq__69986_70013;
var G__70019 = chunk__69987_70014;
var G__70020 = count__69988_70015;
var G__70021 = (i__69989_70016 + (1));
seq__69986_70013 = G__70018;
chunk__69987_70014 = G__70019;
count__69988_70015 = G__70020;
i__69989_70016 = G__70021;
continue;
} else {
var temp__5804__auto___70022 = cljs.core.seq(seq__69986_70013);
if(temp__5804__auto___70022){
var seq__69986_70023__$1 = temp__5804__auto___70022;
if(cljs.core.chunked_seq_QMARK_(seq__69986_70023__$1)){
var c__5568__auto___70024 = cljs.core.chunk_first(seq__69986_70023__$1);
var G__70025 = cljs.core.chunk_rest(seq__69986_70023__$1);
var G__70026 = c__5568__auto___70024;
var G__70027 = cljs.core.count(c__5568__auto___70024);
var G__70028 = (0);
seq__69986_70013 = G__70025;
chunk__69987_70014 = G__70026;
count__69988_70015 = G__70027;
i__69989_70016 = G__70028;
continue;
} else {
var controller_70029 = cljs.core.first(seq__69986_70023__$1);
reitit.frontend.controllers.apply_controller(controller_70029,new cljs.core.Keyword(null,"start","start",-355208981));


var G__70030 = cljs.core.next(seq__69986_70023__$1);
var G__70031 = null;
var G__70032 = (0);
var G__70033 = (0);
seq__69986_70013 = G__70030;
chunk__69987_70014 = G__70031;
count__69988_70015 = G__70032;
i__69989_70016 = G__70033;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map

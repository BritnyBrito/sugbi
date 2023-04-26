goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__56350__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__56350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56351__i = 0, G__56351__a = new Array(arguments.length -  0);
while (G__56351__i < G__56351__a.length) {G__56351__a[G__56351__i] = arguments[G__56351__i + 0]; ++G__56351__i;}
  args = new cljs.core.IndexedSeq(G__56351__a,0,null);
} 
return G__56350__delegate.call(this,args);};
G__56350.cljs$lang$maxFixedArity = 0;
G__56350.cljs$lang$applyTo = (function (arglist__56352){
var args = cljs.core.seq(arglist__56352);
return G__56350__delegate(args);
});
G__56350.cljs$core$IFn$_invoke$arity$variadic = G__56350__delegate;
return G__56350;
})()
);

(o.error = (function() { 
var G__56353__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__56353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56354__i = 0, G__56354__a = new Array(arguments.length -  0);
while (G__56354__i < G__56354__a.length) {G__56354__a[G__56354__i] = arguments[G__56354__i + 0]; ++G__56354__i;}
  args = new cljs.core.IndexedSeq(G__56354__a,0,null);
} 
return G__56353__delegate.call(this,args);};
G__56353.cljs$lang$maxFixedArity = 0;
G__56353.cljs$lang$applyTo = (function (arglist__56355){
var args = cljs.core.seq(arglist__56355);
return G__56353__delegate(args);
});
G__56353.cljs$core$IFn$_invoke$arity$variadic = G__56353__delegate;
return G__56353;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map

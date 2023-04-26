goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__67106){
var map__67107 = p__67106;
var map__67107__$1 = cljs.core.__destructure_map(map__67107);
var m = map__67107__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67107__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67107__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__67111_67320 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__67112_67321 = null;
var count__67113_67322 = (0);
var i__67114_67323 = (0);
while(true){
if((i__67114_67323 < count__67113_67322)){
var f_67326 = chunk__67112_67321.cljs$core$IIndexed$_nth$arity$2(null,i__67114_67323);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_67326], 0));


var G__67329 = seq__67111_67320;
var G__67330 = chunk__67112_67321;
var G__67331 = count__67113_67322;
var G__67332 = (i__67114_67323 + (1));
seq__67111_67320 = G__67329;
chunk__67112_67321 = G__67330;
count__67113_67322 = G__67331;
i__67114_67323 = G__67332;
continue;
} else {
var temp__5804__auto___67333 = cljs.core.seq(seq__67111_67320);
if(temp__5804__auto___67333){
var seq__67111_67334__$1 = temp__5804__auto___67333;
if(cljs.core.chunked_seq_QMARK_(seq__67111_67334__$1)){
var c__5568__auto___67335 = cljs.core.chunk_first(seq__67111_67334__$1);
var G__67336 = cljs.core.chunk_rest(seq__67111_67334__$1);
var G__67337 = c__5568__auto___67335;
var G__67338 = cljs.core.count(c__5568__auto___67335);
var G__67339 = (0);
seq__67111_67320 = G__67336;
chunk__67112_67321 = G__67337;
count__67113_67322 = G__67338;
i__67114_67323 = G__67339;
continue;
} else {
var f_67340 = cljs.core.first(seq__67111_67334__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_67340], 0));


var G__67342 = cljs.core.next(seq__67111_67334__$1);
var G__67343 = null;
var G__67344 = (0);
var G__67345 = (0);
seq__67111_67320 = G__67342;
chunk__67112_67321 = G__67343;
count__67113_67322 = G__67344;
i__67114_67323 = G__67345;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_67346 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_67346], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_67346)))?cljs.core.second(arglists_67346):arglists_67346)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__67119_67347 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__67120_67348 = null;
var count__67121_67349 = (0);
var i__67122_67350 = (0);
while(true){
if((i__67122_67350 < count__67121_67349)){
var vec__67134_67351 = chunk__67120_67348.cljs$core$IIndexed$_nth$arity$2(null,i__67122_67350);
var name_67352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67134_67351,(0),null);
var map__67137_67353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67134_67351,(1),null);
var map__67137_67354__$1 = cljs.core.__destructure_map(map__67137_67353);
var doc_67355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67137_67354__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_67356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67137_67354__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_67352], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_67356], 0));

if(cljs.core.truth_(doc_67355)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_67355], 0));
} else {
}


var G__67358 = seq__67119_67347;
var G__67359 = chunk__67120_67348;
var G__67360 = count__67121_67349;
var G__67361 = (i__67122_67350 + (1));
seq__67119_67347 = G__67358;
chunk__67120_67348 = G__67359;
count__67121_67349 = G__67360;
i__67122_67350 = G__67361;
continue;
} else {
var temp__5804__auto___67362 = cljs.core.seq(seq__67119_67347);
if(temp__5804__auto___67362){
var seq__67119_67363__$1 = temp__5804__auto___67362;
if(cljs.core.chunked_seq_QMARK_(seq__67119_67363__$1)){
var c__5568__auto___67364 = cljs.core.chunk_first(seq__67119_67363__$1);
var G__67365 = cljs.core.chunk_rest(seq__67119_67363__$1);
var G__67366 = c__5568__auto___67364;
var G__67367 = cljs.core.count(c__5568__auto___67364);
var G__67368 = (0);
seq__67119_67347 = G__67365;
chunk__67120_67348 = G__67366;
count__67121_67349 = G__67367;
i__67122_67350 = G__67368;
continue;
} else {
var vec__67140_67369 = cljs.core.first(seq__67119_67363__$1);
var name_67370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67140_67369,(0),null);
var map__67143_67371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67140_67369,(1),null);
var map__67143_67372__$1 = cljs.core.__destructure_map(map__67143_67371);
var doc_67373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67143_67372__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_67374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67143_67372__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_67370], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_67374], 0));

if(cljs.core.truth_(doc_67373)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_67373], 0));
} else {
}


var G__67375 = cljs.core.next(seq__67119_67363__$1);
var G__67376 = null;
var G__67377 = (0);
var G__67378 = (0);
seq__67119_67347 = G__67375;
chunk__67120_67348 = G__67376;
count__67121_67349 = G__67377;
i__67122_67350 = G__67378;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__67144 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__67145 = null;
var count__67146 = (0);
var i__67147 = (0);
while(true){
if((i__67147 < count__67146)){
var role = chunk__67145.cljs$core$IIndexed$_nth$arity$2(null,i__67147);
var temp__5804__auto___67383__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___67383__$1)){
var spec_67384 = temp__5804__auto___67383__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_67384)], 0));
} else {
}


var G__67385 = seq__67144;
var G__67386 = chunk__67145;
var G__67387 = count__67146;
var G__67388 = (i__67147 + (1));
seq__67144 = G__67385;
chunk__67145 = G__67386;
count__67146 = G__67387;
i__67147 = G__67388;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__67144);
if(temp__5804__auto____$1){
var seq__67144__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__67144__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67144__$1);
var G__67389 = cljs.core.chunk_rest(seq__67144__$1);
var G__67390 = c__5568__auto__;
var G__67391 = cljs.core.count(c__5568__auto__);
var G__67392 = (0);
seq__67144 = G__67389;
chunk__67145 = G__67390;
count__67146 = G__67391;
i__67147 = G__67392;
continue;
} else {
var role = cljs.core.first(seq__67144__$1);
var temp__5804__auto___67393__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___67393__$2)){
var spec_67394 = temp__5804__auto___67393__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_67394)], 0));
} else {
}


var G__67395 = cljs.core.next(seq__67144__$1);
var G__67396 = null;
var G__67397 = (0);
var G__67398 = (0);
seq__67144 = G__67395;
chunk__67145 = G__67396;
count__67146 = G__67397;
i__67147 = G__67398;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__67399 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__67400 = cljs.core.ex_cause(t);
via = G__67399;
t = G__67400;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__67247 = datafied_throwable;
var map__67247__$1 = cljs.core.__destructure_map(map__67247);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67247__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67247__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67247__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__67248 = cljs.core.last(via);
var map__67248__$1 = cljs.core.__destructure_map(map__67248);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67248__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67248__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67248__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__67249 = data;
var map__67249__$1 = cljs.core.__destructure_map(map__67249);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67249__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67249__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67249__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__67250 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__67250__$1 = cljs.core.__destructure_map(map__67250);
var top_data = map__67250__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67250__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__67251 = phase;
var G__67251__$1 = (((G__67251 instanceof cljs.core.Keyword))?G__67251.fqn:null);
switch (G__67251__$1) {
case "read-source":
var map__67252 = data;
var map__67252__$1 = cljs.core.__destructure_map(map__67252);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67252__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67252__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__67254 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__67254__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67254,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__67254);
var G__67254__$2 = (cljs.core.truth_((function (){var fexpr__67255 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__67255.cljs$core$IFn$_invoke$arity$1 ? fexpr__67255.cljs$core$IFn$_invoke$arity$1(source) : fexpr__67255.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__67254__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__67254__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67254__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__67254__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__67257 = top_data;
var G__67257__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67257,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__67257);
var G__67257__$2 = (cljs.core.truth_((function (){var fexpr__67258 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__67258.cljs$core$IFn$_invoke$arity$1 ? fexpr__67258.cljs$core$IFn$_invoke$arity$1(source) : fexpr__67258.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__67257__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__67257__$1);
var G__67257__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67257__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__67257__$2);
var G__67257__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67257__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__67257__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67257__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__67257__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__67260 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67260,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67260,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67260,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67260,(3),null);
var G__67263 = top_data;
var G__67263__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67263,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__67263);
var G__67263__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67263__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__67263__$1);
var G__67263__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67263__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__67263__$2);
var G__67263__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67263__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__67263__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67263__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__67263__$4;
}

break;
case "execution":
var vec__67265 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67265,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67265,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67265,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67265,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__67245_SHARP_){
var or__5045__auto__ = (p1__67245_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__67268 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__67268.cljs$core$IFn$_invoke$arity$1 ? fexpr__67268.cljs$core$IFn$_invoke$arity$1(p1__67245_SHARP_) : fexpr__67268.call(null,p1__67245_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__67269 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__67269__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67269,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__67269);
var G__67269__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67269__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__67269__$1);
var G__67269__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67269__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__67269__$2);
var G__67269__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67269__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__67269__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67269__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__67269__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67251__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__67276){
var map__67277 = p__67276;
var map__67277__$1 = cljs.core.__destructure_map(map__67277);
var triage_data = map__67277__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67277__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67277__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67277__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67277__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67277__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67277__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67277__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67277__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__67282 = phase;
var G__67282__$1 = (((G__67282 instanceof cljs.core.Keyword))?G__67282.fqn:null);
switch (G__67282__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__67283 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__67284 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67285 = loc;
var G__67286 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__67287_67409 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__67288_67410 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__67289_67411 = true;
var _STAR_print_fn_STAR__temp_val__67290_67412 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__67289_67411);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__67290_67412);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67270_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__67270_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__67288_67410);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__67287_67409);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__67283,G__67284,G__67285,G__67286) : format.call(null,G__67283,G__67284,G__67285,G__67286));

break;
case "macroexpansion":
var G__67291 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__67292 = cause_type;
var G__67293 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67294 = loc;
var G__67295 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67291,G__67292,G__67293,G__67294,G__67295) : format.call(null,G__67291,G__67292,G__67293,G__67294,G__67295));

break;
case "compile-syntax-check":
var G__67296 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__67297 = cause_type;
var G__67298 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67299 = loc;
var G__67300 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67296,G__67297,G__67298,G__67299,G__67300) : format.call(null,G__67296,G__67297,G__67298,G__67299,G__67300));

break;
case "compilation":
var G__67301 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__67302 = cause_type;
var G__67303 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67304 = loc;
var G__67305 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67301,G__67302,G__67303,G__67304,G__67305) : format.call(null,G__67301,G__67302,G__67303,G__67304,G__67305));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__67306 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__67307 = symbol;
var G__67308 = loc;
var G__67309 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__67310_67416 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__67311_67417 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__67312_67418 = true;
var _STAR_print_fn_STAR__temp_val__67313_67419 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__67312_67418);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__67313_67419);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67273_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__67273_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__67311_67417);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__67310_67416);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__67306,G__67307,G__67308,G__67309) : format.call(null,G__67306,G__67307,G__67308,G__67309));
} else {
var G__67314 = "Execution error%s at %s(%s).\n%s\n";
var G__67315 = cause_type;
var G__67316 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67317 = loc;
var G__67318 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67314,G__67315,G__67316,G__67317,G__67318) : format.call(null,G__67314,G__67315,G__67316,G__67317,G__67318));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67282__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

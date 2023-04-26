goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_65327 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_65327(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_65328 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_65328(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__64754 = coll;
var G__64755 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__64754,G__64755) : shadow.dom.lazy_native_coll_seq.call(null,G__64754,G__64755));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__64782 = arguments.length;
switch (G__64782) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__64793 = arguments.length;
switch (G__64793) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__64808 = arguments.length;
switch (G__64808) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__64828 = arguments.length;
switch (G__64828) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__64849 = arguments.length;
switch (G__64849) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__64879 = arguments.length;
switch (G__64879) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e64889){if((e64889 instanceof Object)){
var e = e64889;
return console.log("didnt support attachEvent",el,e);
} else {
throw e64889;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__64910 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__64911 = null;
var count__64912 = (0);
var i__64913 = (0);
while(true){
if((i__64913 < count__64912)){
var el = chunk__64911.cljs$core$IIndexed$_nth$arity$2(null,i__64913);
var handler_65349__$1 = ((function (seq__64910,chunk__64911,count__64912,i__64913,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__64910,chunk__64911,count__64912,i__64913,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65349__$1);


var G__65353 = seq__64910;
var G__65354 = chunk__64911;
var G__65355 = count__64912;
var G__65356 = (i__64913 + (1));
seq__64910 = G__65353;
chunk__64911 = G__65354;
count__64912 = G__65355;
i__64913 = G__65356;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64910);
if(temp__5804__auto__){
var seq__64910__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64910__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__64910__$1);
var G__65357 = cljs.core.chunk_rest(seq__64910__$1);
var G__65358 = c__5568__auto__;
var G__65359 = cljs.core.count(c__5568__auto__);
var G__65360 = (0);
seq__64910 = G__65357;
chunk__64911 = G__65358;
count__64912 = G__65359;
i__64913 = G__65360;
continue;
} else {
var el = cljs.core.first(seq__64910__$1);
var handler_65361__$1 = ((function (seq__64910,chunk__64911,count__64912,i__64913,el,seq__64910__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__64910,chunk__64911,count__64912,i__64913,el,seq__64910__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65361__$1);


var G__65362 = cljs.core.next(seq__64910__$1);
var G__65363 = null;
var G__65364 = (0);
var G__65365 = (0);
seq__64910 = G__65362;
chunk__64911 = G__65363;
count__64912 = G__65364;
i__64913 = G__65365;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__64922 = arguments.length;
switch (G__64922) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__64927 = cljs.core.seq(events);
var chunk__64928 = null;
var count__64929 = (0);
var i__64930 = (0);
while(true){
if((i__64930 < count__64929)){
var vec__64940 = chunk__64928.cljs$core$IIndexed$_nth$arity$2(null,i__64930);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64940,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64940,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65371 = seq__64927;
var G__65372 = chunk__64928;
var G__65373 = count__64929;
var G__65374 = (i__64930 + (1));
seq__64927 = G__65371;
chunk__64928 = G__65372;
count__64929 = G__65373;
i__64930 = G__65374;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64927);
if(temp__5804__auto__){
var seq__64927__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64927__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__64927__$1);
var G__65379 = cljs.core.chunk_rest(seq__64927__$1);
var G__65380 = c__5568__auto__;
var G__65381 = cljs.core.count(c__5568__auto__);
var G__65382 = (0);
seq__64927 = G__65379;
chunk__64928 = G__65380;
count__64929 = G__65381;
i__64930 = G__65382;
continue;
} else {
var vec__64943 = cljs.core.first(seq__64927__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64943,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64943,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65383 = cljs.core.next(seq__64927__$1);
var G__65384 = null;
var G__65385 = (0);
var G__65386 = (0);
seq__64927 = G__65383;
chunk__64928 = G__65384;
count__64929 = G__65385;
i__64930 = G__65386;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__64946 = cljs.core.seq(styles);
var chunk__64947 = null;
var count__64948 = (0);
var i__64949 = (0);
while(true){
if((i__64949 < count__64948)){
var vec__64969 = chunk__64947.cljs$core$IIndexed$_nth$arity$2(null,i__64949);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64969,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64969,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65387 = seq__64946;
var G__65388 = chunk__64947;
var G__65389 = count__64948;
var G__65390 = (i__64949 + (1));
seq__64946 = G__65387;
chunk__64947 = G__65388;
count__64948 = G__65389;
i__64949 = G__65390;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64946);
if(temp__5804__auto__){
var seq__64946__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64946__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__64946__$1);
var G__65391 = cljs.core.chunk_rest(seq__64946__$1);
var G__65392 = c__5568__auto__;
var G__65393 = cljs.core.count(c__5568__auto__);
var G__65394 = (0);
seq__64946 = G__65391;
chunk__64947 = G__65392;
count__64948 = G__65393;
i__64949 = G__65394;
continue;
} else {
var vec__64972 = cljs.core.first(seq__64946__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64972,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64972,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65395 = cljs.core.next(seq__64946__$1);
var G__65396 = null;
var G__65397 = (0);
var G__65398 = (0);
seq__64946 = G__65395;
chunk__64947 = G__65396;
count__64948 = G__65397;
i__64949 = G__65398;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__64978_65399 = key;
var G__64978_65400__$1 = (((G__64978_65399 instanceof cljs.core.Keyword))?G__64978_65399.fqn:null);
switch (G__64978_65400__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_65405 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_65405,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_65405,"aria-");
}
})())){
el.setAttribute(ks_65405,value);
} else {
(el[ks_65405] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__64982){
var map__64983 = p__64982;
var map__64983__$1 = cljs.core.__destructure_map(map__64983);
var props = map__64983__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64983__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__64984 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64984,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64984,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64984,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__64987 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__64987,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__64987;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__64989 = arguments.length;
switch (G__64989) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__64990){
var vec__64991 = p__64990;
var seq__64992 = cljs.core.seq(vec__64991);
var first__64993 = cljs.core.first(seq__64992);
var seq__64992__$1 = cljs.core.next(seq__64992);
var nn = first__64993;
var first__64993__$1 = cljs.core.first(seq__64992__$1);
var seq__64992__$2 = cljs.core.next(seq__64992__$1);
var np = first__64993__$1;
var nc = seq__64992__$2;
var node = vec__64991;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__64994 = nn;
var G__64995 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__64994,G__64995) : create_fn.call(null,G__64994,G__64995));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__64996 = nn;
var G__64997 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__64996,G__64997) : create_fn.call(null,G__64996,G__64997));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__64998 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64998,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64998,(1),null);
var seq__65001_65413 = cljs.core.seq(node_children);
var chunk__65002_65414 = null;
var count__65003_65415 = (0);
var i__65004_65416 = (0);
while(true){
if((i__65004_65416 < count__65003_65415)){
var child_struct_65417 = chunk__65002_65414.cljs$core$IIndexed$_nth$arity$2(null,i__65004_65416);
var children_65418 = shadow.dom.dom_node(child_struct_65417);
if(cljs.core.seq_QMARK_(children_65418)){
var seq__65017_65419 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65418));
var chunk__65019_65420 = null;
var count__65020_65421 = (0);
var i__65021_65422 = (0);
while(true){
if((i__65021_65422 < count__65020_65421)){
var child_65423 = chunk__65019_65420.cljs$core$IIndexed$_nth$arity$2(null,i__65021_65422);
if(cljs.core.truth_(child_65423)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65423);


var G__65424 = seq__65017_65419;
var G__65425 = chunk__65019_65420;
var G__65426 = count__65020_65421;
var G__65427 = (i__65021_65422 + (1));
seq__65017_65419 = G__65424;
chunk__65019_65420 = G__65425;
count__65020_65421 = G__65426;
i__65021_65422 = G__65427;
continue;
} else {
var G__65428 = seq__65017_65419;
var G__65429 = chunk__65019_65420;
var G__65430 = count__65020_65421;
var G__65431 = (i__65021_65422 + (1));
seq__65017_65419 = G__65428;
chunk__65019_65420 = G__65429;
count__65020_65421 = G__65430;
i__65021_65422 = G__65431;
continue;
}
} else {
var temp__5804__auto___65432 = cljs.core.seq(seq__65017_65419);
if(temp__5804__auto___65432){
var seq__65017_65433__$1 = temp__5804__auto___65432;
if(cljs.core.chunked_seq_QMARK_(seq__65017_65433__$1)){
var c__5568__auto___65434 = cljs.core.chunk_first(seq__65017_65433__$1);
var G__65435 = cljs.core.chunk_rest(seq__65017_65433__$1);
var G__65436 = c__5568__auto___65434;
var G__65437 = cljs.core.count(c__5568__auto___65434);
var G__65438 = (0);
seq__65017_65419 = G__65435;
chunk__65019_65420 = G__65436;
count__65020_65421 = G__65437;
i__65021_65422 = G__65438;
continue;
} else {
var child_65439 = cljs.core.first(seq__65017_65433__$1);
if(cljs.core.truth_(child_65439)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65439);


var G__65440 = cljs.core.next(seq__65017_65433__$1);
var G__65441 = null;
var G__65442 = (0);
var G__65443 = (0);
seq__65017_65419 = G__65440;
chunk__65019_65420 = G__65441;
count__65020_65421 = G__65442;
i__65021_65422 = G__65443;
continue;
} else {
var G__65444 = cljs.core.next(seq__65017_65433__$1);
var G__65445 = null;
var G__65446 = (0);
var G__65447 = (0);
seq__65017_65419 = G__65444;
chunk__65019_65420 = G__65445;
count__65020_65421 = G__65446;
i__65021_65422 = G__65447;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65418);
}


var G__65448 = seq__65001_65413;
var G__65449 = chunk__65002_65414;
var G__65450 = count__65003_65415;
var G__65451 = (i__65004_65416 + (1));
seq__65001_65413 = G__65448;
chunk__65002_65414 = G__65449;
count__65003_65415 = G__65450;
i__65004_65416 = G__65451;
continue;
} else {
var temp__5804__auto___65452 = cljs.core.seq(seq__65001_65413);
if(temp__5804__auto___65452){
var seq__65001_65453__$1 = temp__5804__auto___65452;
if(cljs.core.chunked_seq_QMARK_(seq__65001_65453__$1)){
var c__5568__auto___65454 = cljs.core.chunk_first(seq__65001_65453__$1);
var G__65455 = cljs.core.chunk_rest(seq__65001_65453__$1);
var G__65456 = c__5568__auto___65454;
var G__65457 = cljs.core.count(c__5568__auto___65454);
var G__65458 = (0);
seq__65001_65413 = G__65455;
chunk__65002_65414 = G__65456;
count__65003_65415 = G__65457;
i__65004_65416 = G__65458;
continue;
} else {
var child_struct_65459 = cljs.core.first(seq__65001_65453__$1);
var children_65460 = shadow.dom.dom_node(child_struct_65459);
if(cljs.core.seq_QMARK_(children_65460)){
var seq__65023_65461 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65460));
var chunk__65025_65462 = null;
var count__65026_65463 = (0);
var i__65027_65464 = (0);
while(true){
if((i__65027_65464 < count__65026_65463)){
var child_65467 = chunk__65025_65462.cljs$core$IIndexed$_nth$arity$2(null,i__65027_65464);
if(cljs.core.truth_(child_65467)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65467);


var G__65468 = seq__65023_65461;
var G__65469 = chunk__65025_65462;
var G__65470 = count__65026_65463;
var G__65471 = (i__65027_65464 + (1));
seq__65023_65461 = G__65468;
chunk__65025_65462 = G__65469;
count__65026_65463 = G__65470;
i__65027_65464 = G__65471;
continue;
} else {
var G__65472 = seq__65023_65461;
var G__65473 = chunk__65025_65462;
var G__65474 = count__65026_65463;
var G__65475 = (i__65027_65464 + (1));
seq__65023_65461 = G__65472;
chunk__65025_65462 = G__65473;
count__65026_65463 = G__65474;
i__65027_65464 = G__65475;
continue;
}
} else {
var temp__5804__auto___65476__$1 = cljs.core.seq(seq__65023_65461);
if(temp__5804__auto___65476__$1){
var seq__65023_65477__$1 = temp__5804__auto___65476__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65023_65477__$1)){
var c__5568__auto___65478 = cljs.core.chunk_first(seq__65023_65477__$1);
var G__65479 = cljs.core.chunk_rest(seq__65023_65477__$1);
var G__65480 = c__5568__auto___65478;
var G__65481 = cljs.core.count(c__5568__auto___65478);
var G__65482 = (0);
seq__65023_65461 = G__65479;
chunk__65025_65462 = G__65480;
count__65026_65463 = G__65481;
i__65027_65464 = G__65482;
continue;
} else {
var child_65483 = cljs.core.first(seq__65023_65477__$1);
if(cljs.core.truth_(child_65483)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65483);


var G__65485 = cljs.core.next(seq__65023_65477__$1);
var G__65486 = null;
var G__65487 = (0);
var G__65488 = (0);
seq__65023_65461 = G__65485;
chunk__65025_65462 = G__65486;
count__65026_65463 = G__65487;
i__65027_65464 = G__65488;
continue;
} else {
var G__65489 = cljs.core.next(seq__65023_65477__$1);
var G__65490 = null;
var G__65491 = (0);
var G__65492 = (0);
seq__65023_65461 = G__65489;
chunk__65025_65462 = G__65490;
count__65026_65463 = G__65491;
i__65027_65464 = G__65492;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65460);
}


var G__65493 = cljs.core.next(seq__65001_65453__$1);
var G__65494 = null;
var G__65495 = (0);
var G__65496 = (0);
seq__65001_65413 = G__65493;
chunk__65002_65414 = G__65494;
count__65003_65415 = G__65495;
i__65004_65416 = G__65496;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__65030 = cljs.core.seq(node);
var chunk__65031 = null;
var count__65032 = (0);
var i__65033 = (0);
while(true){
if((i__65033 < count__65032)){
var n = chunk__65031.cljs$core$IIndexed$_nth$arity$2(null,i__65033);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__65498 = seq__65030;
var G__65499 = chunk__65031;
var G__65500 = count__65032;
var G__65501 = (i__65033 + (1));
seq__65030 = G__65498;
chunk__65031 = G__65499;
count__65032 = G__65500;
i__65033 = G__65501;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65030);
if(temp__5804__auto__){
var seq__65030__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65030__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__65030__$1);
var G__65502 = cljs.core.chunk_rest(seq__65030__$1);
var G__65503 = c__5568__auto__;
var G__65504 = cljs.core.count(c__5568__auto__);
var G__65505 = (0);
seq__65030 = G__65502;
chunk__65031 = G__65503;
count__65032 = G__65504;
i__65033 = G__65505;
continue;
} else {
var n = cljs.core.first(seq__65030__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__65506 = cljs.core.next(seq__65030__$1);
var G__65507 = null;
var G__65508 = (0);
var G__65509 = (0);
seq__65030 = G__65506;
chunk__65031 = G__65507;
count__65032 = G__65508;
i__65033 = G__65509;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__65035 = arguments.length;
switch (G__65035) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__65037 = arguments.length;
switch (G__65037) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__65043 = arguments.length;
switch (G__65043) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65520 = arguments.length;
var i__5770__auto___65521 = (0);
while(true){
if((i__5770__auto___65521 < len__5769__auto___65520)){
args__5775__auto__.push((arguments[i__5770__auto___65521]));

var G__65522 = (i__5770__auto___65521 + (1));
i__5770__auto___65521 = G__65522;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__65045_65523 = cljs.core.seq(nodes);
var chunk__65046_65524 = null;
var count__65047_65525 = (0);
var i__65048_65526 = (0);
while(true){
if((i__65048_65526 < count__65047_65525)){
var node_65527 = chunk__65046_65524.cljs$core$IIndexed$_nth$arity$2(null,i__65048_65526);
fragment.appendChild(shadow.dom._to_dom(node_65527));


var G__65528 = seq__65045_65523;
var G__65529 = chunk__65046_65524;
var G__65530 = count__65047_65525;
var G__65531 = (i__65048_65526 + (1));
seq__65045_65523 = G__65528;
chunk__65046_65524 = G__65529;
count__65047_65525 = G__65530;
i__65048_65526 = G__65531;
continue;
} else {
var temp__5804__auto___65532 = cljs.core.seq(seq__65045_65523);
if(temp__5804__auto___65532){
var seq__65045_65533__$1 = temp__5804__auto___65532;
if(cljs.core.chunked_seq_QMARK_(seq__65045_65533__$1)){
var c__5568__auto___65534 = cljs.core.chunk_first(seq__65045_65533__$1);
var G__65535 = cljs.core.chunk_rest(seq__65045_65533__$1);
var G__65536 = c__5568__auto___65534;
var G__65537 = cljs.core.count(c__5568__auto___65534);
var G__65538 = (0);
seq__65045_65523 = G__65535;
chunk__65046_65524 = G__65536;
count__65047_65525 = G__65537;
i__65048_65526 = G__65538;
continue;
} else {
var node_65539 = cljs.core.first(seq__65045_65533__$1);
fragment.appendChild(shadow.dom._to_dom(node_65539));


var G__65540 = cljs.core.next(seq__65045_65533__$1);
var G__65541 = null;
var G__65542 = (0);
var G__65543 = (0);
seq__65045_65523 = G__65540;
chunk__65046_65524 = G__65541;
count__65047_65525 = G__65542;
i__65048_65526 = G__65543;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq65044){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65044));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__65049_65547 = cljs.core.seq(scripts);
var chunk__65050_65548 = null;
var count__65051_65549 = (0);
var i__65052_65550 = (0);
while(true){
if((i__65052_65550 < count__65051_65549)){
var vec__65061_65551 = chunk__65050_65548.cljs$core$IIndexed$_nth$arity$2(null,i__65052_65550);
var script_tag_65552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65061_65551,(0),null);
var script_body_65553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65061_65551,(1),null);
eval(script_body_65553);


var G__65554 = seq__65049_65547;
var G__65555 = chunk__65050_65548;
var G__65556 = count__65051_65549;
var G__65557 = (i__65052_65550 + (1));
seq__65049_65547 = G__65554;
chunk__65050_65548 = G__65555;
count__65051_65549 = G__65556;
i__65052_65550 = G__65557;
continue;
} else {
var temp__5804__auto___65558 = cljs.core.seq(seq__65049_65547);
if(temp__5804__auto___65558){
var seq__65049_65559__$1 = temp__5804__auto___65558;
if(cljs.core.chunked_seq_QMARK_(seq__65049_65559__$1)){
var c__5568__auto___65560 = cljs.core.chunk_first(seq__65049_65559__$1);
var G__65561 = cljs.core.chunk_rest(seq__65049_65559__$1);
var G__65562 = c__5568__auto___65560;
var G__65563 = cljs.core.count(c__5568__auto___65560);
var G__65564 = (0);
seq__65049_65547 = G__65561;
chunk__65050_65548 = G__65562;
count__65051_65549 = G__65563;
i__65052_65550 = G__65564;
continue;
} else {
var vec__65064_65565 = cljs.core.first(seq__65049_65559__$1);
var script_tag_65566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65064_65565,(0),null);
var script_body_65567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65064_65565,(1),null);
eval(script_body_65567);


var G__65568 = cljs.core.next(seq__65049_65559__$1);
var G__65569 = null;
var G__65570 = (0);
var G__65571 = (0);
seq__65049_65547 = G__65568;
chunk__65050_65548 = G__65569;
count__65051_65549 = G__65570;
i__65052_65550 = G__65571;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__65067){
var vec__65068 = p__65067;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65068,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65068,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__65072 = arguments.length;
switch (G__65072) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__65073 = cljs.core.seq(style_keys);
var chunk__65074 = null;
var count__65075 = (0);
var i__65076 = (0);
while(true){
if((i__65076 < count__65075)){
var it = chunk__65074.cljs$core$IIndexed$_nth$arity$2(null,i__65076);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__65576 = seq__65073;
var G__65577 = chunk__65074;
var G__65578 = count__65075;
var G__65579 = (i__65076 + (1));
seq__65073 = G__65576;
chunk__65074 = G__65577;
count__65075 = G__65578;
i__65076 = G__65579;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65073);
if(temp__5804__auto__){
var seq__65073__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65073__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__65073__$1);
var G__65580 = cljs.core.chunk_rest(seq__65073__$1);
var G__65581 = c__5568__auto__;
var G__65582 = cljs.core.count(c__5568__auto__);
var G__65583 = (0);
seq__65073 = G__65580;
chunk__65074 = G__65581;
count__65075 = G__65582;
i__65076 = G__65583;
continue;
} else {
var it = cljs.core.first(seq__65073__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__65584 = cljs.core.next(seq__65073__$1);
var G__65585 = null;
var G__65586 = (0);
var G__65587 = (0);
seq__65073 = G__65584;
chunk__65074 = G__65585;
count__65075 = G__65586;
i__65076 = G__65587;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k65082,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__65090 = k65082;
var G__65090__$1 = (((G__65090 instanceof cljs.core.Keyword))?G__65090.fqn:null);
switch (G__65090__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65082,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__65091){
var vec__65092 = p__65091;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65092,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65092,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65081){
var self__ = this;
var G__65081__$1 = this;
return (new cljs.core.RecordIter((0),G__65081__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65083,other65084){
var self__ = this;
var this65083__$1 = this;
return (((!((other65084 == null)))) && ((((this65083__$1.constructor === other65084.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65083__$1.x,other65084.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65083__$1.y,other65084.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65083__$1.__extmap,other65084.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k65082){
var self__ = this;
var this__5350__auto____$1 = this;
var G__65099 = k65082;
var G__65099__$1 = (((G__65099 instanceof cljs.core.Keyword))?G__65099.fqn:null);
switch (G__65099__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65082);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__65081){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__65100 = cljs.core.keyword_identical_QMARK_;
var expr__65101 = k__5352__auto__;
if(cljs.core.truth_((pred__65100.cljs$core$IFn$_invoke$arity$2 ? pred__65100.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__65101) : pred__65100.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__65101)))){
return (new shadow.dom.Coordinate(G__65081,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65100.cljs$core$IFn$_invoke$arity$2 ? pred__65100.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__65101) : pred__65100.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__65101)))){
return (new shadow.dom.Coordinate(self__.x,G__65081,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__65081),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__65081){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__65081,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__65085){
var extmap__5385__auto__ = (function (){var G__65103 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65085,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__65085)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65103);
} else {
return G__65103;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__65085),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__65085),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k65105,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__65111 = k65105;
var G__65111__$1 = (((G__65111 instanceof cljs.core.Keyword))?G__65111.fqn:null);
switch (G__65111__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65105,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__65112){
var vec__65113 = p__65112;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65113,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65113,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65104){
var self__ = this;
var G__65104__$1 = this;
return (new cljs.core.RecordIter((0),G__65104__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65106,other65107){
var self__ = this;
var this65106__$1 = this;
return (((!((other65107 == null)))) && ((((this65106__$1.constructor === other65107.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65106__$1.w,other65107.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65106__$1.h,other65107.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65106__$1.__extmap,other65107.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k65105){
var self__ = this;
var this__5350__auto____$1 = this;
var G__65134 = k65105;
var G__65134__$1 = (((G__65134 instanceof cljs.core.Keyword))?G__65134.fqn:null);
switch (G__65134__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65105);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__65104){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__65135 = cljs.core.keyword_identical_QMARK_;
var expr__65136 = k__5352__auto__;
if(cljs.core.truth_((pred__65135.cljs$core$IFn$_invoke$arity$2 ? pred__65135.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__65136) : pred__65135.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__65136)))){
return (new shadow.dom.Size(G__65104,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65135.cljs$core$IFn$_invoke$arity$2 ? pred__65135.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__65136) : pred__65135.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__65136)))){
return (new shadow.dom.Size(self__.w,G__65104,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__65104),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__65104){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__65104,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__65108){
var extmap__5385__auto__ = (function (){var G__65143 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65108,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__65108)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65143);
} else {
return G__65143;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__65108),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__65108),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__65613 = (i + (1));
var G__65614 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__65613;
ret = G__65614;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65148){
var vec__65149 = p__65148;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65149,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65149,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__65153 = arguments.length;
switch (G__65153) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__65622 = ps;
var G__65623 = (i + (1));
el__$1 = G__65622;
i = G__65623;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__65178 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65178,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65178,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65178,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__65182_65632 = cljs.core.seq(props);
var chunk__65183_65633 = null;
var count__65184_65634 = (0);
var i__65185_65635 = (0);
while(true){
if((i__65185_65635 < count__65184_65634)){
var vec__65194_65636 = chunk__65183_65633.cljs$core$IIndexed$_nth$arity$2(null,i__65185_65635);
var k_65637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65194_65636,(0),null);
var v_65638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65194_65636,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_65637);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_65637),v_65638);


var G__65639 = seq__65182_65632;
var G__65640 = chunk__65183_65633;
var G__65641 = count__65184_65634;
var G__65642 = (i__65185_65635 + (1));
seq__65182_65632 = G__65639;
chunk__65183_65633 = G__65640;
count__65184_65634 = G__65641;
i__65185_65635 = G__65642;
continue;
} else {
var temp__5804__auto___65643 = cljs.core.seq(seq__65182_65632);
if(temp__5804__auto___65643){
var seq__65182_65644__$1 = temp__5804__auto___65643;
if(cljs.core.chunked_seq_QMARK_(seq__65182_65644__$1)){
var c__5568__auto___65645 = cljs.core.chunk_first(seq__65182_65644__$1);
var G__65646 = cljs.core.chunk_rest(seq__65182_65644__$1);
var G__65647 = c__5568__auto___65645;
var G__65648 = cljs.core.count(c__5568__auto___65645);
var G__65649 = (0);
seq__65182_65632 = G__65646;
chunk__65183_65633 = G__65647;
count__65184_65634 = G__65648;
i__65185_65635 = G__65649;
continue;
} else {
var vec__65206_65650 = cljs.core.first(seq__65182_65644__$1);
var k_65651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65206_65650,(0),null);
var v_65652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65206_65650,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_65651);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_65651),v_65652);


var G__65653 = cljs.core.next(seq__65182_65644__$1);
var G__65654 = null;
var G__65655 = (0);
var G__65656 = (0);
seq__65182_65632 = G__65653;
chunk__65183_65633 = G__65654;
count__65184_65634 = G__65655;
i__65185_65635 = G__65656;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__65233 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65233,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65233,(1),null);
var seq__65246_65657 = cljs.core.seq(node_children);
var chunk__65248_65658 = null;
var count__65249_65659 = (0);
var i__65250_65660 = (0);
while(true){
if((i__65250_65660 < count__65249_65659)){
var child_struct_65661 = chunk__65248_65658.cljs$core$IIndexed$_nth$arity$2(null,i__65250_65660);
if((!((child_struct_65661 == null)))){
if(typeof child_struct_65661 === 'string'){
var text_65662 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_65662),child_struct_65661].join(''));
} else {
var children_65663 = shadow.dom.svg_node(child_struct_65661);
if(cljs.core.seq_QMARK_(children_65663)){
var seq__65299_65664 = cljs.core.seq(children_65663);
var chunk__65301_65665 = null;
var count__65302_65666 = (0);
var i__65303_65667 = (0);
while(true){
if((i__65303_65667 < count__65302_65666)){
var child_65668 = chunk__65301_65665.cljs$core$IIndexed$_nth$arity$2(null,i__65303_65667);
if(cljs.core.truth_(child_65668)){
node.appendChild(child_65668);


var G__65669 = seq__65299_65664;
var G__65670 = chunk__65301_65665;
var G__65671 = count__65302_65666;
var G__65672 = (i__65303_65667 + (1));
seq__65299_65664 = G__65669;
chunk__65301_65665 = G__65670;
count__65302_65666 = G__65671;
i__65303_65667 = G__65672;
continue;
} else {
var G__65673 = seq__65299_65664;
var G__65674 = chunk__65301_65665;
var G__65675 = count__65302_65666;
var G__65676 = (i__65303_65667 + (1));
seq__65299_65664 = G__65673;
chunk__65301_65665 = G__65674;
count__65302_65666 = G__65675;
i__65303_65667 = G__65676;
continue;
}
} else {
var temp__5804__auto___65677 = cljs.core.seq(seq__65299_65664);
if(temp__5804__auto___65677){
var seq__65299_65678__$1 = temp__5804__auto___65677;
if(cljs.core.chunked_seq_QMARK_(seq__65299_65678__$1)){
var c__5568__auto___65679 = cljs.core.chunk_first(seq__65299_65678__$1);
var G__65680 = cljs.core.chunk_rest(seq__65299_65678__$1);
var G__65681 = c__5568__auto___65679;
var G__65682 = cljs.core.count(c__5568__auto___65679);
var G__65683 = (0);
seq__65299_65664 = G__65680;
chunk__65301_65665 = G__65681;
count__65302_65666 = G__65682;
i__65303_65667 = G__65683;
continue;
} else {
var child_65684 = cljs.core.first(seq__65299_65678__$1);
if(cljs.core.truth_(child_65684)){
node.appendChild(child_65684);


var G__65685 = cljs.core.next(seq__65299_65678__$1);
var G__65686 = null;
var G__65687 = (0);
var G__65688 = (0);
seq__65299_65664 = G__65685;
chunk__65301_65665 = G__65686;
count__65302_65666 = G__65687;
i__65303_65667 = G__65688;
continue;
} else {
var G__65689 = cljs.core.next(seq__65299_65678__$1);
var G__65690 = null;
var G__65691 = (0);
var G__65692 = (0);
seq__65299_65664 = G__65689;
chunk__65301_65665 = G__65690;
count__65302_65666 = G__65691;
i__65303_65667 = G__65692;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_65663);
}
}


var G__65693 = seq__65246_65657;
var G__65694 = chunk__65248_65658;
var G__65695 = count__65249_65659;
var G__65696 = (i__65250_65660 + (1));
seq__65246_65657 = G__65693;
chunk__65248_65658 = G__65694;
count__65249_65659 = G__65695;
i__65250_65660 = G__65696;
continue;
} else {
var G__65697 = seq__65246_65657;
var G__65698 = chunk__65248_65658;
var G__65699 = count__65249_65659;
var G__65700 = (i__65250_65660 + (1));
seq__65246_65657 = G__65697;
chunk__65248_65658 = G__65698;
count__65249_65659 = G__65699;
i__65250_65660 = G__65700;
continue;
}
} else {
var temp__5804__auto___65701 = cljs.core.seq(seq__65246_65657);
if(temp__5804__auto___65701){
var seq__65246_65702__$1 = temp__5804__auto___65701;
if(cljs.core.chunked_seq_QMARK_(seq__65246_65702__$1)){
var c__5568__auto___65703 = cljs.core.chunk_first(seq__65246_65702__$1);
var G__65705 = cljs.core.chunk_rest(seq__65246_65702__$1);
var G__65706 = c__5568__auto___65703;
var G__65707 = cljs.core.count(c__5568__auto___65703);
var G__65708 = (0);
seq__65246_65657 = G__65705;
chunk__65248_65658 = G__65706;
count__65249_65659 = G__65707;
i__65250_65660 = G__65708;
continue;
} else {
var child_struct_65709 = cljs.core.first(seq__65246_65702__$1);
if((!((child_struct_65709 == null)))){
if(typeof child_struct_65709 === 'string'){
var text_65710 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_65710),child_struct_65709].join(''));
} else {
var children_65711 = shadow.dom.svg_node(child_struct_65709);
if(cljs.core.seq_QMARK_(children_65711)){
var seq__65305_65712 = cljs.core.seq(children_65711);
var chunk__65307_65713 = null;
var count__65308_65714 = (0);
var i__65309_65715 = (0);
while(true){
if((i__65309_65715 < count__65308_65714)){
var child_65716 = chunk__65307_65713.cljs$core$IIndexed$_nth$arity$2(null,i__65309_65715);
if(cljs.core.truth_(child_65716)){
node.appendChild(child_65716);


var G__65717 = seq__65305_65712;
var G__65718 = chunk__65307_65713;
var G__65719 = count__65308_65714;
var G__65720 = (i__65309_65715 + (1));
seq__65305_65712 = G__65717;
chunk__65307_65713 = G__65718;
count__65308_65714 = G__65719;
i__65309_65715 = G__65720;
continue;
} else {
var G__65721 = seq__65305_65712;
var G__65722 = chunk__65307_65713;
var G__65723 = count__65308_65714;
var G__65724 = (i__65309_65715 + (1));
seq__65305_65712 = G__65721;
chunk__65307_65713 = G__65722;
count__65308_65714 = G__65723;
i__65309_65715 = G__65724;
continue;
}
} else {
var temp__5804__auto___65725__$1 = cljs.core.seq(seq__65305_65712);
if(temp__5804__auto___65725__$1){
var seq__65305_65726__$1 = temp__5804__auto___65725__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65305_65726__$1)){
var c__5568__auto___65727 = cljs.core.chunk_first(seq__65305_65726__$1);
var G__65728 = cljs.core.chunk_rest(seq__65305_65726__$1);
var G__65729 = c__5568__auto___65727;
var G__65730 = cljs.core.count(c__5568__auto___65727);
var G__65731 = (0);
seq__65305_65712 = G__65728;
chunk__65307_65713 = G__65729;
count__65308_65714 = G__65730;
i__65309_65715 = G__65731;
continue;
} else {
var child_65732 = cljs.core.first(seq__65305_65726__$1);
if(cljs.core.truth_(child_65732)){
node.appendChild(child_65732);


var G__65733 = cljs.core.next(seq__65305_65726__$1);
var G__65734 = null;
var G__65735 = (0);
var G__65736 = (0);
seq__65305_65712 = G__65733;
chunk__65307_65713 = G__65734;
count__65308_65714 = G__65735;
i__65309_65715 = G__65736;
continue;
} else {
var G__65737 = cljs.core.next(seq__65305_65726__$1);
var G__65738 = null;
var G__65739 = (0);
var G__65740 = (0);
seq__65305_65712 = G__65737;
chunk__65307_65713 = G__65738;
count__65308_65714 = G__65739;
i__65309_65715 = G__65740;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_65711);
}
}


var G__65741 = cljs.core.next(seq__65246_65702__$1);
var G__65742 = null;
var G__65743 = (0);
var G__65744 = (0);
seq__65246_65657 = G__65741;
chunk__65248_65658 = G__65742;
count__65249_65659 = G__65743;
i__65250_65660 = G__65744;
continue;
} else {
var G__65746 = cljs.core.next(seq__65246_65702__$1);
var G__65747 = null;
var G__65748 = (0);
var G__65749 = (0);
seq__65246_65657 = G__65746;
chunk__65248_65658 = G__65747;
count__65249_65659 = G__65748;
i__65250_65660 = G__65749;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65750 = arguments.length;
var i__5770__auto___65751 = (0);
while(true){
if((i__5770__auto___65751 < len__5769__auto___65750)){
args__5775__auto__.push((arguments[i__5770__auto___65751]));

var G__65752 = (i__5770__auto___65751 + (1));
i__5770__auto___65751 = G__65752;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq65311){
var G__65312 = cljs.core.first(seq65311);
var seq65311__$1 = cljs.core.next(seq65311);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65312,seq65311__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__65314 = arguments.length;
switch (G__65314) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__61425__auto___65754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_65319){
var state_val_65320 = (state_65319[(1)]);
if((state_val_65320 === (1))){
var state_65319__$1 = state_65319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65319__$1,(2),once_or_cleanup);
} else {
if((state_val_65320 === (2))){
var inst_65316 = (state_65319[(2)]);
var inst_65317 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_65319__$1 = (function (){var statearr_65321 = state_65319;
(statearr_65321[(7)] = inst_65316);

return statearr_65321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65319__$1,inst_65317);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__61340__auto__ = null;
var shadow$dom$state_machine__61340__auto____0 = (function (){
var statearr_65322 = [null,null,null,null,null,null,null,null];
(statearr_65322[(0)] = shadow$dom$state_machine__61340__auto__);

(statearr_65322[(1)] = (1));

return statearr_65322;
});
var shadow$dom$state_machine__61340__auto____1 = (function (state_65319){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_65319);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e65323){var ex__61343__auto__ = e65323;
var statearr_65324_65755 = state_65319;
(statearr_65324_65755[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_65319[(4)]))){
var statearr_65325_65756 = state_65319;
(statearr_65325_65756[(1)] = cljs.core.first((state_65319[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65757 = state_65319;
state_65319 = G__65757;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
shadow$dom$state_machine__61340__auto__ = function(state_65319){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__61340__auto____0.call(this);
case 1:
return shadow$dom$state_machine__61340__auto____1.call(this,state_65319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__61340__auto____0;
shadow$dom$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__61340__auto____1;
return shadow$dom$state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_65326 = f__61426__auto__();
(statearr_65326[(6)] = c__61425__auto___65754);

return statearr_65326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__61499 = arguments.length;
switch (G__61499) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61500 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61500 = (function (f,blockable,meta61501){
this.f = f;
this.blockable = blockable;
this.meta61501 = meta61501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61502,meta61501__$1){
var self__ = this;
var _61502__$1 = this;
return (new cljs.core.async.t_cljs$core$async61500(self__.f,self__.blockable,meta61501__$1));
}));

(cljs.core.async.t_cljs$core$async61500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61502){
var self__ = this;
var _61502__$1 = this;
return self__.meta61501;
}));

(cljs.core.async.t_cljs$core$async61500.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61500.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async61500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async61500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta61501","meta61501",2094047817,null)], null);
}));

(cljs.core.async.t_cljs$core$async61500.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61500");

(cljs.core.async.t_cljs$core$async61500.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async61500");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61500.
 */
cljs.core.async.__GT_t_cljs$core$async61500 = (function cljs$core$async$__GT_t_cljs$core$async61500(f__$1,blockable__$1,meta61501){
return (new cljs.core.async.t_cljs$core$async61500(f__$1,blockable__$1,meta61501));
});

}

return (new cljs.core.async.t_cljs$core$async61500(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__61509 = arguments.length;
switch (G__61509) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__61511 = arguments.length;
switch (G__61511) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__61517 = arguments.length;
switch (G__61517) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_63235 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_63235) : fn1.call(null,val_63235));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_63235) : fn1.call(null,val_63235));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__61522 = arguments.length;
switch (G__61522) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___63245 = n;
var x_63246 = (0);
while(true){
if((x_63246 < n__5636__auto___63245)){
(a[x_63246] = x_63246);

var G__63247 = (x_63246 + (1));
x_63246 = G__63247;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61533 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61533 = (function (flag,meta61534){
this.flag = flag;
this.meta61534 = meta61534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61535,meta61534__$1){
var self__ = this;
var _61535__$1 = this;
return (new cljs.core.async.t_cljs$core$async61533(self__.flag,meta61534__$1));
}));

(cljs.core.async.t_cljs$core$async61533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61535){
var self__ = this;
var _61535__$1 = this;
return self__.meta61534;
}));

(cljs.core.async.t_cljs$core$async61533.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61533.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async61533.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61533.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async61533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta61534","meta61534",-1361473232,null)], null);
}));

(cljs.core.async.t_cljs$core$async61533.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61533");

(cljs.core.async.t_cljs$core$async61533.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async61533");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61533.
 */
cljs.core.async.__GT_t_cljs$core$async61533 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async61533(flag__$1,meta61534){
return (new cljs.core.async.t_cljs$core$async61533(flag__$1,meta61534));
});

}

return (new cljs.core.async.t_cljs$core$async61533(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61545 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61545 = (function (flag,cb,meta61546){
this.flag = flag;
this.cb = cb;
this.meta61546 = meta61546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61547,meta61546__$1){
var self__ = this;
var _61547__$1 = this;
return (new cljs.core.async.t_cljs$core$async61545(self__.flag,self__.cb,meta61546__$1));
}));

(cljs.core.async.t_cljs$core$async61545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61547){
var self__ = this;
var _61547__$1 = this;
return self__.meta61546;
}));

(cljs.core.async.t_cljs$core$async61545.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async61545.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async61545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta61546","meta61546",505143962,null)], null);
}));

(cljs.core.async.t_cljs$core$async61545.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61545");

(cljs.core.async.t_cljs$core$async61545.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async61545");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61545.
 */
cljs.core.async.__GT_t_cljs$core$async61545 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async61545(flag__$1,cb__$1,meta61546){
return (new cljs.core.async.t_cljs$core$async61545(flag__$1,cb__$1,meta61546));
});

}

return (new cljs.core.async.t_cljs$core$async61545(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61556_SHARP_){
var G__61558 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61556_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__61558) : fret.call(null,G__61558));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61557_SHARP_){
var G__61559 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61557_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__61559) : fret.call(null,G__61559));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__63254 = (i + (1));
i = G__63254;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___63255 = arguments.length;
var i__5770__auto___63256 = (0);
while(true){
if((i__5770__auto___63256 < len__5769__auto___63255)){
args__5775__auto__.push((arguments[i__5770__auto___63256]));

var G__63257 = (i__5770__auto___63256 + (1));
i__5770__auto___63256 = G__63257;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__61566){
var map__61567 = p__61566;
var map__61567__$1 = cljs.core.__destructure_map(map__61567);
var opts = map__61567__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq61563){
var G__61564 = cljs.core.first(seq61563);
var seq61563__$1 = cljs.core.next(seq61563);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61564,seq61563__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__61574 = arguments.length;
switch (G__61574) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__61425__auto___63260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_61616){
var state_val_61617 = (state_61616[(1)]);
if((state_val_61617 === (7))){
var inst_61609 = (state_61616[(2)]);
var state_61616__$1 = state_61616;
var statearr_61621_63261 = state_61616__$1;
(statearr_61621_63261[(2)] = inst_61609);

(statearr_61621_63261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61617 === (1))){
var state_61616__$1 = state_61616;
var statearr_61622_63264 = state_61616__$1;
(statearr_61622_63264[(2)] = null);

(statearr_61622_63264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61617 === (4))){
var inst_61589 = (state_61616[(7)]);
var inst_61589__$1 = (state_61616[(2)]);
var inst_61593 = (inst_61589__$1 == null);
var state_61616__$1 = (function (){var statearr_61626 = state_61616;
(statearr_61626[(7)] = inst_61589__$1);

return statearr_61626;
})();
if(cljs.core.truth_(inst_61593)){
var statearr_61627_63265 = state_61616__$1;
(statearr_61627_63265[(1)] = (5));

} else {
var statearr_61628_63266 = state_61616__$1;
(statearr_61628_63266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61617 === (13))){
var state_61616__$1 = state_61616;
var statearr_61629_63267 = state_61616__$1;
(statearr_61629_63267[(2)] = null);

(statearr_61629_63267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61617 === (6))){
var inst_61589 = (state_61616[(7)]);
var state_61616__$1 = state_61616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61616__$1,(11),to,inst_61589);
} else {
if((state_val_61617 === (3))){
var inst_61611 = (state_61616[(2)]);
var state_61616__$1 = state_61616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61616__$1,inst_61611);
} else {
if((state_val_61617 === (12))){
var state_61616__$1 = state_61616;
var statearr_61630_63269 = state_61616__$1;
(statearr_61630_63269[(2)] = null);

(statearr_61630_63269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61617 === (2))){
var state_61616__$1 = state_61616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61616__$1,(4),from);
} else {
if((state_val_61617 === (11))){
var inst_61602 = (state_61616[(2)]);
var state_61616__$1 = state_61616;
if(cljs.core.truth_(inst_61602)){
var statearr_61631_63272 = state_61616__$1;
(statearr_61631_63272[(1)] = (12));

} else {
var statearr_61632_63275 = state_61616__$1;
(statearr_61632_63275[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61617 === (9))){
var state_61616__$1 = state_61616;
var statearr_61633_63281 = state_61616__$1;
(statearr_61633_63281[(2)] = null);

(statearr_61633_63281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61617 === (5))){
var state_61616__$1 = state_61616;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61634_63293 = state_61616__$1;
(statearr_61634_63293[(1)] = (8));

} else {
var statearr_61635_63294 = state_61616__$1;
(statearr_61635_63294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61617 === (14))){
var inst_61607 = (state_61616[(2)]);
var state_61616__$1 = state_61616;
var statearr_61636_63295 = state_61616__$1;
(statearr_61636_63295[(2)] = inst_61607);

(statearr_61636_63295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61617 === (10))){
var inst_61599 = (state_61616[(2)]);
var state_61616__$1 = state_61616;
var statearr_61637_63296 = state_61616__$1;
(statearr_61637_63296[(2)] = inst_61599);

(statearr_61637_63296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61617 === (8))){
var inst_61596 = cljs.core.async.close_BANG_(to);
var state_61616__$1 = state_61616;
var statearr_61638_63298 = state_61616__$1;
(statearr_61638_63298[(2)] = inst_61596);

(statearr_61638_63298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_61639 = [null,null,null,null,null,null,null,null];
(statearr_61639[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_61639[(1)] = (1));

return statearr_61639;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_61616){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61616);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e61640){var ex__61343__auto__ = e61640;
var statearr_61641_63299 = state_61616;
(statearr_61641_63299[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61616[(4)]))){
var statearr_61642_63300 = state_61616;
(statearr_61642_63300[(1)] = cljs.core.first((state_61616[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63302 = state_61616;
state_61616 = G__63302;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_61616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_61616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_61643 = f__61426__auto__();
(statearr_61643[(6)] = c__61425__auto___63260);

return statearr_61643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__61644){
var vec__61645 = p__61644;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61645,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61645,(1),null);
var job = vec__61645;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__61425__auto___63309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_61652){
var state_val_61653 = (state_61652[(1)]);
if((state_val_61653 === (1))){
var state_61652__$1 = state_61652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61652__$1,(2),res,v);
} else {
if((state_val_61653 === (2))){
var inst_61649 = (state_61652[(2)]);
var inst_61650 = cljs.core.async.close_BANG_(res);
var state_61652__$1 = (function (){var statearr_61654 = state_61652;
(statearr_61654[(7)] = inst_61649);

return statearr_61654;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61652__$1,inst_61650);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0 = (function (){
var statearr_61655 = [null,null,null,null,null,null,null,null];
(statearr_61655[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__);

(statearr_61655[(1)] = (1));

return statearr_61655;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1 = (function (state_61652){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61652);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e61656){var ex__61343__auto__ = e61656;
var statearr_61657_63313 = state_61652;
(statearr_61657_63313[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61652[(4)]))){
var statearr_61658_63314 = state_61652;
(statearr_61658_63314[(1)] = cljs.core.first((state_61652[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63316 = state_61652;
state_61652 = G__63316;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = function(state_61652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1.call(this,state_61652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_61659 = f__61426__auto__();
(statearr_61659[(6)] = c__61425__auto___63309);

return statearr_61659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__61660){
var vec__61661 = p__61660;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61661,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61661,(1),null);
var job = vec__61661;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___63322 = n;
var __63323 = (0);
while(true){
if((__63323 < n__5636__auto___63322)){
var G__61664_63324 = type;
var G__61664_63325__$1 = (((G__61664_63324 instanceof cljs.core.Keyword))?G__61664_63324.fqn:null);
switch (G__61664_63325__$1) {
case "compute":
var c__61425__auto___63327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__63323,c__61425__auto___63327,G__61664_63324,G__61664_63325__$1,n__5636__auto___63322,jobs,results,process__$1,async){
return (function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = ((function (__63323,c__61425__auto___63327,G__61664_63324,G__61664_63325__$1,n__5636__auto___63322,jobs,results,process__$1,async){
return (function (state_61677){
var state_val_61678 = (state_61677[(1)]);
if((state_val_61678 === (1))){
var state_61677__$1 = state_61677;
var statearr_61679_63329 = state_61677__$1;
(statearr_61679_63329[(2)] = null);

(statearr_61679_63329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61678 === (2))){
var state_61677__$1 = state_61677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61677__$1,(4),jobs);
} else {
if((state_val_61678 === (3))){
var inst_61675 = (state_61677[(2)]);
var state_61677__$1 = state_61677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61677__$1,inst_61675);
} else {
if((state_val_61678 === (4))){
var inst_61667 = (state_61677[(2)]);
var inst_61668 = process__$1(inst_61667);
var state_61677__$1 = state_61677;
if(cljs.core.truth_(inst_61668)){
var statearr_61680_63331 = state_61677__$1;
(statearr_61680_63331[(1)] = (5));

} else {
var statearr_61681_63332 = state_61677__$1;
(statearr_61681_63332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61678 === (5))){
var state_61677__$1 = state_61677;
var statearr_61682_63333 = state_61677__$1;
(statearr_61682_63333[(2)] = null);

(statearr_61682_63333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61678 === (6))){
var state_61677__$1 = state_61677;
var statearr_61683_63335 = state_61677__$1;
(statearr_61683_63335[(2)] = null);

(statearr_61683_63335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61678 === (7))){
var inst_61673 = (state_61677[(2)]);
var state_61677__$1 = state_61677;
var statearr_61684_63336 = state_61677__$1;
(statearr_61684_63336[(2)] = inst_61673);

(statearr_61684_63336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__63323,c__61425__auto___63327,G__61664_63324,G__61664_63325__$1,n__5636__auto___63322,jobs,results,process__$1,async))
;
return ((function (__63323,switch__61339__auto__,c__61425__auto___63327,G__61664_63324,G__61664_63325__$1,n__5636__auto___63322,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0 = (function (){
var statearr_61685 = [null,null,null,null,null,null,null];
(statearr_61685[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__);

(statearr_61685[(1)] = (1));

return statearr_61685;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1 = (function (state_61677){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61677);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e61686){var ex__61343__auto__ = e61686;
var statearr_61687_63338 = state_61677;
(statearr_61687_63338[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61677[(4)]))){
var statearr_61688_63339 = state_61677;
(statearr_61688_63339[(1)] = cljs.core.first((state_61677[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63340 = state_61677;
state_61677 = G__63340;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = function(state_61677){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1.call(this,state_61677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__;
})()
;})(__63323,switch__61339__auto__,c__61425__auto___63327,G__61664_63324,G__61664_63325__$1,n__5636__auto___63322,jobs,results,process__$1,async))
})();
var state__61427__auto__ = (function (){var statearr_61689 = f__61426__auto__();
(statearr_61689[(6)] = c__61425__auto___63327);

return statearr_61689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
});})(__63323,c__61425__auto___63327,G__61664_63324,G__61664_63325__$1,n__5636__auto___63322,jobs,results,process__$1,async))
);


break;
case "async":
var c__61425__auto___63344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__63323,c__61425__auto___63344,G__61664_63324,G__61664_63325__$1,n__5636__auto___63322,jobs,results,process__$1,async){
return (function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = ((function (__63323,c__61425__auto___63344,G__61664_63324,G__61664_63325__$1,n__5636__auto___63322,jobs,results,process__$1,async){
return (function (state_61702){
var state_val_61703 = (state_61702[(1)]);
if((state_val_61703 === (1))){
var state_61702__$1 = state_61702;
var statearr_61704_63345 = state_61702__$1;
(statearr_61704_63345[(2)] = null);

(statearr_61704_63345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61703 === (2))){
var state_61702__$1 = state_61702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61702__$1,(4),jobs);
} else {
if((state_val_61703 === (3))){
var inst_61700 = (state_61702[(2)]);
var state_61702__$1 = state_61702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61702__$1,inst_61700);
} else {
if((state_val_61703 === (4))){
var inst_61692 = (state_61702[(2)]);
var inst_61693 = async(inst_61692);
var state_61702__$1 = state_61702;
if(cljs.core.truth_(inst_61693)){
var statearr_61709_63346 = state_61702__$1;
(statearr_61709_63346[(1)] = (5));

} else {
var statearr_61710_63347 = state_61702__$1;
(statearr_61710_63347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61703 === (5))){
var state_61702__$1 = state_61702;
var statearr_61711_63348 = state_61702__$1;
(statearr_61711_63348[(2)] = null);

(statearr_61711_63348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61703 === (6))){
var state_61702__$1 = state_61702;
var statearr_61712_63349 = state_61702__$1;
(statearr_61712_63349[(2)] = null);

(statearr_61712_63349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61703 === (7))){
var inst_61698 = (state_61702[(2)]);
var state_61702__$1 = state_61702;
var statearr_61713_63350 = state_61702__$1;
(statearr_61713_63350[(2)] = inst_61698);

(statearr_61713_63350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__63323,c__61425__auto___63344,G__61664_63324,G__61664_63325__$1,n__5636__auto___63322,jobs,results,process__$1,async))
;
return ((function (__63323,switch__61339__auto__,c__61425__auto___63344,G__61664_63324,G__61664_63325__$1,n__5636__auto___63322,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0 = (function (){
var statearr_61714 = [null,null,null,null,null,null,null];
(statearr_61714[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__);

(statearr_61714[(1)] = (1));

return statearr_61714;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1 = (function (state_61702){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61702);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e61715){var ex__61343__auto__ = e61715;
var statearr_61716_63351 = state_61702;
(statearr_61716_63351[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61702[(4)]))){
var statearr_61717_63352 = state_61702;
(statearr_61717_63352[(1)] = cljs.core.first((state_61702[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63353 = state_61702;
state_61702 = G__63353;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = function(state_61702){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1.call(this,state_61702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__;
})()
;})(__63323,switch__61339__auto__,c__61425__auto___63344,G__61664_63324,G__61664_63325__$1,n__5636__auto___63322,jobs,results,process__$1,async))
})();
var state__61427__auto__ = (function (){var statearr_61718 = f__61426__auto__();
(statearr_61718[(6)] = c__61425__auto___63344);

return statearr_61718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
});})(__63323,c__61425__auto___63344,G__61664_63324,G__61664_63325__$1,n__5636__auto___63322,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61664_63325__$1)].join('')));

}

var G__63354 = (__63323 + (1));
__63323 = G__63354;
continue;
} else {
}
break;
}

var c__61425__auto___63355 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_61740){
var state_val_61741 = (state_61740[(1)]);
if((state_val_61741 === (7))){
var inst_61736 = (state_61740[(2)]);
var state_61740__$1 = state_61740;
var statearr_61742_63356 = state_61740__$1;
(statearr_61742_63356[(2)] = inst_61736);

(statearr_61742_63356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61741 === (1))){
var state_61740__$1 = state_61740;
var statearr_61743_63358 = state_61740__$1;
(statearr_61743_63358[(2)] = null);

(statearr_61743_63358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61741 === (4))){
var inst_61721 = (state_61740[(7)]);
var inst_61721__$1 = (state_61740[(2)]);
var inst_61722 = (inst_61721__$1 == null);
var state_61740__$1 = (function (){var statearr_61745 = state_61740;
(statearr_61745[(7)] = inst_61721__$1);

return statearr_61745;
})();
if(cljs.core.truth_(inst_61722)){
var statearr_61746_63360 = state_61740__$1;
(statearr_61746_63360[(1)] = (5));

} else {
var statearr_61747_63361 = state_61740__$1;
(statearr_61747_63361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61741 === (6))){
var inst_61721 = (state_61740[(7)]);
var inst_61726 = (state_61740[(8)]);
var inst_61726__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_61727 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61728 = [inst_61721,inst_61726__$1];
var inst_61729 = (new cljs.core.PersistentVector(null,2,(5),inst_61727,inst_61728,null));
var state_61740__$1 = (function (){var statearr_61749 = state_61740;
(statearr_61749[(8)] = inst_61726__$1);

return statearr_61749;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61740__$1,(8),jobs,inst_61729);
} else {
if((state_val_61741 === (3))){
var inst_61738 = (state_61740[(2)]);
var state_61740__$1 = state_61740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61740__$1,inst_61738);
} else {
if((state_val_61741 === (2))){
var state_61740__$1 = state_61740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61740__$1,(4),from);
} else {
if((state_val_61741 === (9))){
var inst_61733 = (state_61740[(2)]);
var state_61740__$1 = (function (){var statearr_61752 = state_61740;
(statearr_61752[(9)] = inst_61733);

return statearr_61752;
})();
var statearr_61753_63370 = state_61740__$1;
(statearr_61753_63370[(2)] = null);

(statearr_61753_63370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61741 === (5))){
var inst_61724 = cljs.core.async.close_BANG_(jobs);
var state_61740__$1 = state_61740;
var statearr_61754_63371 = state_61740__$1;
(statearr_61754_63371[(2)] = inst_61724);

(statearr_61754_63371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61741 === (8))){
var inst_61726 = (state_61740[(8)]);
var inst_61731 = (state_61740[(2)]);
var state_61740__$1 = (function (){var statearr_61755 = state_61740;
(statearr_61755[(10)] = inst_61731);

return statearr_61755;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61740__$1,(9),results,inst_61726);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0 = (function (){
var statearr_61756 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__);

(statearr_61756[(1)] = (1));

return statearr_61756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1 = (function (state_61740){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61740);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e61757){var ex__61343__auto__ = e61757;
var statearr_61758_63374 = state_61740;
(statearr_61758_63374[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61740[(4)]))){
var statearr_61759_63375 = state_61740;
(statearr_61759_63375[(1)] = cljs.core.first((state_61740[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63376 = state_61740;
state_61740 = G__63376;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = function(state_61740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1.call(this,state_61740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_61761 = f__61426__auto__();
(statearr_61761[(6)] = c__61425__auto___63355);

return statearr_61761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));


var c__61425__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_61800){
var state_val_61801 = (state_61800[(1)]);
if((state_val_61801 === (7))){
var inst_61796 = (state_61800[(2)]);
var state_61800__$1 = state_61800;
var statearr_61804_63381 = state_61800__$1;
(statearr_61804_63381[(2)] = inst_61796);

(statearr_61804_63381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61801 === (20))){
var state_61800__$1 = state_61800;
var statearr_61805_63382 = state_61800__$1;
(statearr_61805_63382[(2)] = null);

(statearr_61805_63382[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61801 === (1))){
var state_61800__$1 = state_61800;
var statearr_61808_63383 = state_61800__$1;
(statearr_61808_63383[(2)] = null);

(statearr_61808_63383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61801 === (4))){
var inst_61764 = (state_61800[(7)]);
var inst_61764__$1 = (state_61800[(2)]);
var inst_61766 = (inst_61764__$1 == null);
var state_61800__$1 = (function (){var statearr_61809 = state_61800;
(statearr_61809[(7)] = inst_61764__$1);

return statearr_61809;
})();
if(cljs.core.truth_(inst_61766)){
var statearr_61810_63384 = state_61800__$1;
(statearr_61810_63384[(1)] = (5));

} else {
var statearr_61811_63385 = state_61800__$1;
(statearr_61811_63385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61801 === (15))){
var inst_61778 = (state_61800[(8)]);
var state_61800__$1 = state_61800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61800__$1,(18),to,inst_61778);
} else {
if((state_val_61801 === (21))){
var inst_61791 = (state_61800[(2)]);
var state_61800__$1 = state_61800;
var statearr_61812_63392 = state_61800__$1;
(statearr_61812_63392[(2)] = inst_61791);

(statearr_61812_63392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61801 === (13))){
var inst_61793 = (state_61800[(2)]);
var state_61800__$1 = (function (){var statearr_61813 = state_61800;
(statearr_61813[(9)] = inst_61793);

return statearr_61813;
})();
var statearr_61814_63393 = state_61800__$1;
(statearr_61814_63393[(2)] = null);

(statearr_61814_63393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61801 === (6))){
var inst_61764 = (state_61800[(7)]);
var state_61800__$1 = state_61800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61800__$1,(11),inst_61764);
} else {
if((state_val_61801 === (17))){
var inst_61786 = (state_61800[(2)]);
var state_61800__$1 = state_61800;
if(cljs.core.truth_(inst_61786)){
var statearr_61817_63394 = state_61800__$1;
(statearr_61817_63394[(1)] = (19));

} else {
var statearr_61818_63395 = state_61800__$1;
(statearr_61818_63395[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61801 === (3))){
var inst_61798 = (state_61800[(2)]);
var state_61800__$1 = state_61800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61800__$1,inst_61798);
} else {
if((state_val_61801 === (12))){
var inst_61775 = (state_61800[(10)]);
var state_61800__$1 = state_61800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61800__$1,(14),inst_61775);
} else {
if((state_val_61801 === (2))){
var state_61800__$1 = state_61800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61800__$1,(4),results);
} else {
if((state_val_61801 === (19))){
var state_61800__$1 = state_61800;
var statearr_61819_63413 = state_61800__$1;
(statearr_61819_63413[(2)] = null);

(statearr_61819_63413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61801 === (11))){
var inst_61775 = (state_61800[(2)]);
var state_61800__$1 = (function (){var statearr_61820 = state_61800;
(statearr_61820[(10)] = inst_61775);

return statearr_61820;
})();
var statearr_61821_63421 = state_61800__$1;
(statearr_61821_63421[(2)] = null);

(statearr_61821_63421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61801 === (9))){
var state_61800__$1 = state_61800;
var statearr_61823_63425 = state_61800__$1;
(statearr_61823_63425[(2)] = null);

(statearr_61823_63425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61801 === (5))){
var state_61800__$1 = state_61800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61824_63429 = state_61800__$1;
(statearr_61824_63429[(1)] = (8));

} else {
var statearr_61825_63432 = state_61800__$1;
(statearr_61825_63432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61801 === (14))){
var inst_61780 = (state_61800[(11)]);
var inst_61778 = (state_61800[(8)]);
var inst_61778__$1 = (state_61800[(2)]);
var inst_61779 = (inst_61778__$1 == null);
var inst_61780__$1 = cljs.core.not(inst_61779);
var state_61800__$1 = (function (){var statearr_61827 = state_61800;
(statearr_61827[(11)] = inst_61780__$1);

(statearr_61827[(8)] = inst_61778__$1);

return statearr_61827;
})();
if(inst_61780__$1){
var statearr_61828_63452 = state_61800__$1;
(statearr_61828_63452[(1)] = (15));

} else {
var statearr_61829_63453 = state_61800__$1;
(statearr_61829_63453[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61801 === (16))){
var inst_61780 = (state_61800[(11)]);
var state_61800__$1 = state_61800;
var statearr_61830_63456 = state_61800__$1;
(statearr_61830_63456[(2)] = inst_61780);

(statearr_61830_63456[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61801 === (10))){
var inst_61772 = (state_61800[(2)]);
var state_61800__$1 = state_61800;
var statearr_61831_63457 = state_61800__$1;
(statearr_61831_63457[(2)] = inst_61772);

(statearr_61831_63457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61801 === (18))){
var inst_61783 = (state_61800[(2)]);
var state_61800__$1 = state_61800;
var statearr_61833_63458 = state_61800__$1;
(statearr_61833_63458[(2)] = inst_61783);

(statearr_61833_63458[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61801 === (8))){
var inst_61769 = cljs.core.async.close_BANG_(to);
var state_61800__$1 = state_61800;
var statearr_61835_63460 = state_61800__$1;
(statearr_61835_63460[(2)] = inst_61769);

(statearr_61835_63460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0 = (function (){
var statearr_61836 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61836[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__);

(statearr_61836[(1)] = (1));

return statearr_61836;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1 = (function (state_61800){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61800);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e61837){var ex__61343__auto__ = e61837;
var statearr_61838_63463 = state_61800;
(statearr_61838_63463[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61800[(4)]))){
var statearr_61839_63464 = state_61800;
(statearr_61839_63464[(1)] = cljs.core.first((state_61800[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63465 = state_61800;
state_61800 = G__63465;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__ = function(state_61800){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1.call(this,state_61800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_61841 = f__61426__auto__();
(statearr_61841[(6)] = c__61425__auto__);

return statearr_61841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));

return c__61425__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__61846 = arguments.length;
switch (G__61846) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__61849 = arguments.length;
switch (G__61849) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__61855 = arguments.length;
switch (G__61855) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__61425__auto___63475 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_61881){
var state_val_61882 = (state_61881[(1)]);
if((state_val_61882 === (7))){
var inst_61877 = (state_61881[(2)]);
var state_61881__$1 = state_61881;
var statearr_61883_63478 = state_61881__$1;
(statearr_61883_63478[(2)] = inst_61877);

(statearr_61883_63478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61882 === (1))){
var state_61881__$1 = state_61881;
var statearr_61884_63480 = state_61881__$1;
(statearr_61884_63480[(2)] = null);

(statearr_61884_63480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61882 === (4))){
var inst_61858 = (state_61881[(7)]);
var inst_61858__$1 = (state_61881[(2)]);
var inst_61859 = (inst_61858__$1 == null);
var state_61881__$1 = (function (){var statearr_61885 = state_61881;
(statearr_61885[(7)] = inst_61858__$1);

return statearr_61885;
})();
if(cljs.core.truth_(inst_61859)){
var statearr_61886_63482 = state_61881__$1;
(statearr_61886_63482[(1)] = (5));

} else {
var statearr_61887_63483 = state_61881__$1;
(statearr_61887_63483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61882 === (13))){
var state_61881__$1 = state_61881;
var statearr_61888_63485 = state_61881__$1;
(statearr_61888_63485[(2)] = null);

(statearr_61888_63485[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61882 === (6))){
var inst_61858 = (state_61881[(7)]);
var inst_61864 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_61858) : p.call(null,inst_61858));
var state_61881__$1 = state_61881;
if(cljs.core.truth_(inst_61864)){
var statearr_61889_63487 = state_61881__$1;
(statearr_61889_63487[(1)] = (9));

} else {
var statearr_61890_63488 = state_61881__$1;
(statearr_61890_63488[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61882 === (3))){
var inst_61879 = (state_61881[(2)]);
var state_61881__$1 = state_61881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61881__$1,inst_61879);
} else {
if((state_val_61882 === (12))){
var state_61881__$1 = state_61881;
var statearr_61891_63490 = state_61881__$1;
(statearr_61891_63490[(2)] = null);

(statearr_61891_63490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61882 === (2))){
var state_61881__$1 = state_61881;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61881__$1,(4),ch);
} else {
if((state_val_61882 === (11))){
var inst_61858 = (state_61881[(7)]);
var inst_61868 = (state_61881[(2)]);
var state_61881__$1 = state_61881;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61881__$1,(8),inst_61868,inst_61858);
} else {
if((state_val_61882 === (9))){
var state_61881__$1 = state_61881;
var statearr_61892_63492 = state_61881__$1;
(statearr_61892_63492[(2)] = tc);

(statearr_61892_63492[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61882 === (5))){
var inst_61861 = cljs.core.async.close_BANG_(tc);
var inst_61862 = cljs.core.async.close_BANG_(fc);
var state_61881__$1 = (function (){var statearr_61893 = state_61881;
(statearr_61893[(8)] = inst_61861);

return statearr_61893;
})();
var statearr_61894_63494 = state_61881__$1;
(statearr_61894_63494[(2)] = inst_61862);

(statearr_61894_63494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61882 === (14))){
var inst_61875 = (state_61881[(2)]);
var state_61881__$1 = state_61881;
var statearr_61895_63495 = state_61881__$1;
(statearr_61895_63495[(2)] = inst_61875);

(statearr_61895_63495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61882 === (10))){
var state_61881__$1 = state_61881;
var statearr_61899_63496 = state_61881__$1;
(statearr_61899_63496[(2)] = fc);

(statearr_61899_63496[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61882 === (8))){
var inst_61870 = (state_61881[(2)]);
var state_61881__$1 = state_61881;
if(cljs.core.truth_(inst_61870)){
var statearr_61900_63498 = state_61881__$1;
(statearr_61900_63498[(1)] = (12));

} else {
var statearr_61901_63500 = state_61881__$1;
(statearr_61901_63500[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_61903 = [null,null,null,null,null,null,null,null,null];
(statearr_61903[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_61903[(1)] = (1));

return statearr_61903;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_61881){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61881);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e61904){var ex__61343__auto__ = e61904;
var statearr_61905_63503 = state_61881;
(statearr_61905_63503[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61881[(4)]))){
var statearr_61906_63506 = state_61881;
(statearr_61906_63506[(1)] = cljs.core.first((state_61881[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63508 = state_61881;
state_61881 = G__63508;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_61881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_61881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_61907 = f__61426__auto__();
(statearr_61907[(6)] = c__61425__auto___63475);

return statearr_61907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__61425__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_61930){
var state_val_61931 = (state_61930[(1)]);
if((state_val_61931 === (7))){
var inst_61926 = (state_61930[(2)]);
var state_61930__$1 = state_61930;
var statearr_61935_63516 = state_61930__$1;
(statearr_61935_63516[(2)] = inst_61926);

(statearr_61935_63516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61931 === (1))){
var inst_61909 = init;
var inst_61910 = inst_61909;
var state_61930__$1 = (function (){var statearr_61939 = state_61930;
(statearr_61939[(7)] = inst_61910);

return statearr_61939;
})();
var statearr_61940_63517 = state_61930__$1;
(statearr_61940_63517[(2)] = null);

(statearr_61940_63517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61931 === (4))){
var inst_61913 = (state_61930[(8)]);
var inst_61913__$1 = (state_61930[(2)]);
var inst_61914 = (inst_61913__$1 == null);
var state_61930__$1 = (function (){var statearr_61941 = state_61930;
(statearr_61941[(8)] = inst_61913__$1);

return statearr_61941;
})();
if(cljs.core.truth_(inst_61914)){
var statearr_61942_63522 = state_61930__$1;
(statearr_61942_63522[(1)] = (5));

} else {
var statearr_61943_63523 = state_61930__$1;
(statearr_61943_63523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61931 === (6))){
var inst_61910 = (state_61930[(7)]);
var inst_61913 = (state_61930[(8)]);
var inst_61917 = (state_61930[(9)]);
var inst_61917__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_61910,inst_61913) : f.call(null,inst_61910,inst_61913));
var inst_61918 = cljs.core.reduced_QMARK_(inst_61917__$1);
var state_61930__$1 = (function (){var statearr_61944 = state_61930;
(statearr_61944[(9)] = inst_61917__$1);

return statearr_61944;
})();
if(inst_61918){
var statearr_61945_63524 = state_61930__$1;
(statearr_61945_63524[(1)] = (8));

} else {
var statearr_61946_63525 = state_61930__$1;
(statearr_61946_63525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61931 === (3))){
var inst_61928 = (state_61930[(2)]);
var state_61930__$1 = state_61930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61930__$1,inst_61928);
} else {
if((state_val_61931 === (2))){
var state_61930__$1 = state_61930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61930__$1,(4),ch);
} else {
if((state_val_61931 === (9))){
var inst_61917 = (state_61930[(9)]);
var inst_61910 = inst_61917;
var state_61930__$1 = (function (){var statearr_61947 = state_61930;
(statearr_61947[(7)] = inst_61910);

return statearr_61947;
})();
var statearr_61948_63529 = state_61930__$1;
(statearr_61948_63529[(2)] = null);

(statearr_61948_63529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61931 === (5))){
var inst_61910 = (state_61930[(7)]);
var state_61930__$1 = state_61930;
var statearr_61949_63530 = state_61930__$1;
(statearr_61949_63530[(2)] = inst_61910);

(statearr_61949_63530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61931 === (10))){
var inst_61924 = (state_61930[(2)]);
var state_61930__$1 = state_61930;
var statearr_61950_63535 = state_61930__$1;
(statearr_61950_63535[(2)] = inst_61924);

(statearr_61950_63535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61931 === (8))){
var inst_61917 = (state_61930[(9)]);
var inst_61920 = cljs.core.deref(inst_61917);
var state_61930__$1 = state_61930;
var statearr_61951_63536 = state_61930__$1;
(statearr_61951_63536[(2)] = inst_61920);

(statearr_61951_63536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__61340__auto__ = null;
var cljs$core$async$reduce_$_state_machine__61340__auto____0 = (function (){
var statearr_61952 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61952[(0)] = cljs$core$async$reduce_$_state_machine__61340__auto__);

(statearr_61952[(1)] = (1));

return statearr_61952;
});
var cljs$core$async$reduce_$_state_machine__61340__auto____1 = (function (state_61930){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61930);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e61953){var ex__61343__auto__ = e61953;
var statearr_61954_63545 = state_61930;
(statearr_61954_63545[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61930[(4)]))){
var statearr_61955_63546 = state_61930;
(statearr_61955_63546[(1)] = cljs.core.first((state_61930[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63547 = state_61930;
state_61930 = G__63547;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__61340__auto__ = function(state_61930){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__61340__auto____1.call(this,state_61930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__61340__auto____0;
cljs$core$async$reduce_$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__61340__auto____1;
return cljs$core$async$reduce_$_state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_61957 = f__61426__auto__();
(statearr_61957[(6)] = c__61425__auto__);

return statearr_61957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));

return c__61425__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__61425__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_61963){
var state_val_61964 = (state_61963[(1)]);
if((state_val_61964 === (1))){
var inst_61958 = cljs.core.async.reduce(f__$1,init,ch);
var state_61963__$1 = state_61963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61963__$1,(2),inst_61958);
} else {
if((state_val_61964 === (2))){
var inst_61960 = (state_61963[(2)]);
var inst_61961 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_61960) : f__$1.call(null,inst_61960));
var state_61963__$1 = state_61963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61963__$1,inst_61961);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__61340__auto__ = null;
var cljs$core$async$transduce_$_state_machine__61340__auto____0 = (function (){
var statearr_61965 = [null,null,null,null,null,null,null];
(statearr_61965[(0)] = cljs$core$async$transduce_$_state_machine__61340__auto__);

(statearr_61965[(1)] = (1));

return statearr_61965;
});
var cljs$core$async$transduce_$_state_machine__61340__auto____1 = (function (state_61963){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61963);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e61966){var ex__61343__auto__ = e61966;
var statearr_61967_63548 = state_61963;
(statearr_61967_63548[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61963[(4)]))){
var statearr_61968_63549 = state_61963;
(statearr_61968_63549[(1)] = cljs.core.first((state_61963[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63550 = state_61963;
state_61963 = G__63550;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__61340__auto__ = function(state_61963){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__61340__auto____1.call(this,state_61963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__61340__auto____0;
cljs$core$async$transduce_$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__61340__auto____1;
return cljs$core$async$transduce_$_state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_61971 = f__61426__auto__();
(statearr_61971[(6)] = c__61425__auto__);

return statearr_61971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));

return c__61425__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__61973 = arguments.length;
switch (G__61973) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__61425__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_61998){
var state_val_61999 = (state_61998[(1)]);
if((state_val_61999 === (7))){
var inst_61980 = (state_61998[(2)]);
var state_61998__$1 = state_61998;
var statearr_62000_63552 = state_61998__$1;
(statearr_62000_63552[(2)] = inst_61980);

(statearr_62000_63552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61999 === (1))){
var inst_61974 = cljs.core.seq(coll);
var inst_61975 = inst_61974;
var state_61998__$1 = (function (){var statearr_62002 = state_61998;
(statearr_62002[(7)] = inst_61975);

return statearr_62002;
})();
var statearr_62003_63553 = state_61998__$1;
(statearr_62003_63553[(2)] = null);

(statearr_62003_63553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61999 === (4))){
var inst_61975 = (state_61998[(7)]);
var inst_61978 = cljs.core.first(inst_61975);
var state_61998__$1 = state_61998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61998__$1,(7),ch,inst_61978);
} else {
if((state_val_61999 === (13))){
var inst_61992 = (state_61998[(2)]);
var state_61998__$1 = state_61998;
var statearr_62004_63555 = state_61998__$1;
(statearr_62004_63555[(2)] = inst_61992);

(statearr_62004_63555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61999 === (6))){
var inst_61983 = (state_61998[(2)]);
var state_61998__$1 = state_61998;
if(cljs.core.truth_(inst_61983)){
var statearr_62007_63556 = state_61998__$1;
(statearr_62007_63556[(1)] = (8));

} else {
var statearr_62008_63558 = state_61998__$1;
(statearr_62008_63558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61999 === (3))){
var inst_61996 = (state_61998[(2)]);
var state_61998__$1 = state_61998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61998__$1,inst_61996);
} else {
if((state_val_61999 === (12))){
var state_61998__$1 = state_61998;
var statearr_62009_63562 = state_61998__$1;
(statearr_62009_63562[(2)] = null);

(statearr_62009_63562[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61999 === (2))){
var inst_61975 = (state_61998[(7)]);
var state_61998__$1 = state_61998;
if(cljs.core.truth_(inst_61975)){
var statearr_62010_63565 = state_61998__$1;
(statearr_62010_63565[(1)] = (4));

} else {
var statearr_62011_63566 = state_61998__$1;
(statearr_62011_63566[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61999 === (11))){
var inst_61989 = cljs.core.async.close_BANG_(ch);
var state_61998__$1 = state_61998;
var statearr_62012_63568 = state_61998__$1;
(statearr_62012_63568[(2)] = inst_61989);

(statearr_62012_63568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61999 === (9))){
var state_61998__$1 = state_61998;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62013_63570 = state_61998__$1;
(statearr_62013_63570[(1)] = (11));

} else {
var statearr_62014_63571 = state_61998__$1;
(statearr_62014_63571[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61999 === (5))){
var inst_61975 = (state_61998[(7)]);
var state_61998__$1 = state_61998;
var statearr_62015_63572 = state_61998__$1;
(statearr_62015_63572[(2)] = inst_61975);

(statearr_62015_63572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61999 === (10))){
var inst_61994 = (state_61998[(2)]);
var state_61998__$1 = state_61998;
var statearr_62016_63573 = state_61998__$1;
(statearr_62016_63573[(2)] = inst_61994);

(statearr_62016_63573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61999 === (8))){
var inst_61975 = (state_61998[(7)]);
var inst_61985 = cljs.core.next(inst_61975);
var inst_61975__$1 = inst_61985;
var state_61998__$1 = (function (){var statearr_62020 = state_61998;
(statearr_62020[(7)] = inst_61975__$1);

return statearr_62020;
})();
var statearr_62021_63577 = state_61998__$1;
(statearr_62021_63577[(2)] = null);

(statearr_62021_63577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_62022 = [null,null,null,null,null,null,null,null];
(statearr_62022[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_62022[(1)] = (1));

return statearr_62022;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_61998){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_61998);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e62023){var ex__61343__auto__ = e62023;
var statearr_62024_63581 = state_61998;
(statearr_62024_63581[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_61998[(4)]))){
var statearr_62025_63582 = state_61998;
(statearr_62025_63582[(1)] = cljs.core.first((state_61998[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63586 = state_61998;
state_61998 = G__63586;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_61998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_61998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_62026 = f__61426__auto__();
(statearr_62026[(6)] = c__61425__auto__);

return statearr_62026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));

return c__61425__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__62028 = arguments.length;
switch (G__62028) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_63590 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_63590(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_63593 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_63593(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_63594 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_63594(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_63595 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_63595(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62029 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62029 = (function (ch,cs,meta62030){
this.ch = ch;
this.cs = cs;
this.meta62030 = meta62030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62031,meta62030__$1){
var self__ = this;
var _62031__$1 = this;
return (new cljs.core.async.t_cljs$core$async62029(self__.ch,self__.cs,meta62030__$1));
}));

(cljs.core.async.t_cljs$core$async62029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62031){
var self__ = this;
var _62031__$1 = this;
return self__.meta62030;
}));

(cljs.core.async.t_cljs$core$async62029.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62029.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async62029.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62029.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async62029.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async62029.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async62029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta62030","meta62030",938011323,null)], null);
}));

(cljs.core.async.t_cljs$core$async62029.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62029");

(cljs.core.async.t_cljs$core$async62029.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62029");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62029.
 */
cljs.core.async.__GT_t_cljs$core$async62029 = (function cljs$core$async$mult_$___GT_t_cljs$core$async62029(ch__$1,cs__$1,meta62030){
return (new cljs.core.async.t_cljs$core$async62029(ch__$1,cs__$1,meta62030));
});

}

return (new cljs.core.async.t_cljs$core$async62029(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__61425__auto___63600 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_62182){
var state_val_62183 = (state_62182[(1)]);
if((state_val_62183 === (7))){
var inst_62178 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
var statearr_62184_63601 = state_62182__$1;
(statearr_62184_63601[(2)] = inst_62178);

(statearr_62184_63601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (20))){
var inst_62069 = (state_62182[(7)]);
var inst_62081 = cljs.core.first(inst_62069);
var inst_62082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62081,(0),null);
var inst_62083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62081,(1),null);
var state_62182__$1 = (function (){var statearr_62185 = state_62182;
(statearr_62185[(8)] = inst_62082);

return statearr_62185;
})();
if(cljs.core.truth_(inst_62083)){
var statearr_62186_63608 = state_62182__$1;
(statearr_62186_63608[(1)] = (22));

} else {
var statearr_62187_63609 = state_62182__$1;
(statearr_62187_63609[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (27))){
var inst_62121 = (state_62182[(9)]);
var inst_62111 = (state_62182[(10)]);
var inst_62113 = (state_62182[(11)]);
var inst_62037 = (state_62182[(12)]);
var inst_62121__$1 = cljs.core._nth(inst_62111,inst_62113);
var inst_62122 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_62121__$1,inst_62037,done);
var state_62182__$1 = (function (){var statearr_62192 = state_62182;
(statearr_62192[(9)] = inst_62121__$1);

return statearr_62192;
})();
if(cljs.core.truth_(inst_62122)){
var statearr_62193_63610 = state_62182__$1;
(statearr_62193_63610[(1)] = (30));

} else {
var statearr_62195_63611 = state_62182__$1;
(statearr_62195_63611[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (1))){
var state_62182__$1 = state_62182;
var statearr_62196_63612 = state_62182__$1;
(statearr_62196_63612[(2)] = null);

(statearr_62196_63612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (24))){
var inst_62069 = (state_62182[(7)]);
var inst_62088 = (state_62182[(2)]);
var inst_62089 = cljs.core.next(inst_62069);
var inst_62046 = inst_62089;
var inst_62047 = null;
var inst_62048 = (0);
var inst_62049 = (0);
var state_62182__$1 = (function (){var statearr_62197 = state_62182;
(statearr_62197[(13)] = inst_62046);

(statearr_62197[(14)] = inst_62088);

(statearr_62197[(15)] = inst_62049);

(statearr_62197[(16)] = inst_62047);

(statearr_62197[(17)] = inst_62048);

return statearr_62197;
})();
var statearr_62198_63614 = state_62182__$1;
(statearr_62198_63614[(2)] = null);

(statearr_62198_63614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (39))){
var state_62182__$1 = state_62182;
var statearr_62202_63615 = state_62182__$1;
(statearr_62202_63615[(2)] = null);

(statearr_62202_63615[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (4))){
var inst_62037 = (state_62182[(12)]);
var inst_62037__$1 = (state_62182[(2)]);
var inst_62038 = (inst_62037__$1 == null);
var state_62182__$1 = (function (){var statearr_62204 = state_62182;
(statearr_62204[(12)] = inst_62037__$1);

return statearr_62204;
})();
if(cljs.core.truth_(inst_62038)){
var statearr_62206_63616 = state_62182__$1;
(statearr_62206_63616[(1)] = (5));

} else {
var statearr_62207_63617 = state_62182__$1;
(statearr_62207_63617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (15))){
var inst_62046 = (state_62182[(13)]);
var inst_62049 = (state_62182[(15)]);
var inst_62047 = (state_62182[(16)]);
var inst_62048 = (state_62182[(17)]);
var inst_62065 = (state_62182[(2)]);
var inst_62066 = (inst_62049 + (1));
var tmp62199 = inst_62046;
var tmp62200 = inst_62047;
var tmp62201 = inst_62048;
var inst_62046__$1 = tmp62199;
var inst_62047__$1 = tmp62200;
var inst_62048__$1 = tmp62201;
var inst_62049__$1 = inst_62066;
var state_62182__$1 = (function (){var statearr_62209 = state_62182;
(statearr_62209[(18)] = inst_62065);

(statearr_62209[(13)] = inst_62046__$1);

(statearr_62209[(15)] = inst_62049__$1);

(statearr_62209[(16)] = inst_62047__$1);

(statearr_62209[(17)] = inst_62048__$1);

return statearr_62209;
})();
var statearr_62210_63618 = state_62182__$1;
(statearr_62210_63618[(2)] = null);

(statearr_62210_63618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (21))){
var inst_62092 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
var statearr_62215_63619 = state_62182__$1;
(statearr_62215_63619[(2)] = inst_62092);

(statearr_62215_63619[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (31))){
var inst_62121 = (state_62182[(9)]);
var inst_62127 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_62121);
var state_62182__$1 = state_62182;
var statearr_62217_63620 = state_62182__$1;
(statearr_62217_63620[(2)] = inst_62127);

(statearr_62217_63620[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (32))){
var inst_62111 = (state_62182[(10)]);
var inst_62113 = (state_62182[(11)]);
var inst_62110 = (state_62182[(19)]);
var inst_62112 = (state_62182[(20)]);
var inst_62129 = (state_62182[(2)]);
var inst_62130 = (inst_62113 + (1));
var tmp62211 = inst_62111;
var tmp62212 = inst_62110;
var tmp62213 = inst_62112;
var inst_62110__$1 = tmp62212;
var inst_62111__$1 = tmp62211;
var inst_62112__$1 = tmp62213;
var inst_62113__$1 = inst_62130;
var state_62182__$1 = (function (){var statearr_62223 = state_62182;
(statearr_62223[(21)] = inst_62129);

(statearr_62223[(10)] = inst_62111__$1);

(statearr_62223[(11)] = inst_62113__$1);

(statearr_62223[(19)] = inst_62110__$1);

(statearr_62223[(20)] = inst_62112__$1);

return statearr_62223;
})();
var statearr_62224_63622 = state_62182__$1;
(statearr_62224_63622[(2)] = null);

(statearr_62224_63622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (40))){
var inst_62151 = (state_62182[(22)]);
var inst_62155 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_62151);
var state_62182__$1 = state_62182;
var statearr_62225_63625 = state_62182__$1;
(statearr_62225_63625[(2)] = inst_62155);

(statearr_62225_63625[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (33))){
var inst_62133 = (state_62182[(23)]);
var inst_62138 = cljs.core.chunked_seq_QMARK_(inst_62133);
var state_62182__$1 = state_62182;
if(inst_62138){
var statearr_62226_63627 = state_62182__$1;
(statearr_62226_63627[(1)] = (36));

} else {
var statearr_62227_63628 = state_62182__$1;
(statearr_62227_63628[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (13))){
var inst_62059 = (state_62182[(24)]);
var inst_62062 = cljs.core.async.close_BANG_(inst_62059);
var state_62182__$1 = state_62182;
var statearr_62228_63630 = state_62182__$1;
(statearr_62228_63630[(2)] = inst_62062);

(statearr_62228_63630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (22))){
var inst_62082 = (state_62182[(8)]);
var inst_62085 = cljs.core.async.close_BANG_(inst_62082);
var state_62182__$1 = state_62182;
var statearr_62229_63632 = state_62182__$1;
(statearr_62229_63632[(2)] = inst_62085);

(statearr_62229_63632[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (36))){
var inst_62133 = (state_62182[(23)]);
var inst_62140 = cljs.core.chunk_first(inst_62133);
var inst_62141 = cljs.core.chunk_rest(inst_62133);
var inst_62148 = cljs.core.count(inst_62140);
var inst_62110 = inst_62141;
var inst_62111 = inst_62140;
var inst_62112 = inst_62148;
var inst_62113 = (0);
var state_62182__$1 = (function (){var statearr_62231 = state_62182;
(statearr_62231[(10)] = inst_62111);

(statearr_62231[(11)] = inst_62113);

(statearr_62231[(19)] = inst_62110);

(statearr_62231[(20)] = inst_62112);

return statearr_62231;
})();
var statearr_62232_63634 = state_62182__$1;
(statearr_62232_63634[(2)] = null);

(statearr_62232_63634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (41))){
var inst_62133 = (state_62182[(23)]);
var inst_62157 = (state_62182[(2)]);
var inst_62158 = cljs.core.next(inst_62133);
var inst_62110 = inst_62158;
var inst_62111 = null;
var inst_62112 = (0);
var inst_62113 = (0);
var state_62182__$1 = (function (){var statearr_62233 = state_62182;
(statearr_62233[(25)] = inst_62157);

(statearr_62233[(10)] = inst_62111);

(statearr_62233[(11)] = inst_62113);

(statearr_62233[(19)] = inst_62110);

(statearr_62233[(20)] = inst_62112);

return statearr_62233;
})();
var statearr_62234_63637 = state_62182__$1;
(statearr_62234_63637[(2)] = null);

(statearr_62234_63637[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (43))){
var state_62182__$1 = state_62182;
var statearr_62235_63638 = state_62182__$1;
(statearr_62235_63638[(2)] = null);

(statearr_62235_63638[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (29))){
var inst_62166 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
var statearr_62236_63639 = state_62182__$1;
(statearr_62236_63639[(2)] = inst_62166);

(statearr_62236_63639[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (44))){
var inst_62175 = (state_62182[(2)]);
var state_62182__$1 = (function (){var statearr_62237 = state_62182;
(statearr_62237[(26)] = inst_62175);

return statearr_62237;
})();
var statearr_62239_63640 = state_62182__$1;
(statearr_62239_63640[(2)] = null);

(statearr_62239_63640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (6))){
var inst_62102 = (state_62182[(27)]);
var inst_62101 = cljs.core.deref(cs);
var inst_62102__$1 = cljs.core.keys(inst_62101);
var inst_62103 = cljs.core.count(inst_62102__$1);
var inst_62104 = cljs.core.reset_BANG_(dctr,inst_62103);
var inst_62109 = cljs.core.seq(inst_62102__$1);
var inst_62110 = inst_62109;
var inst_62111 = null;
var inst_62112 = (0);
var inst_62113 = (0);
var state_62182__$1 = (function (){var statearr_62246 = state_62182;
(statearr_62246[(10)] = inst_62111);

(statearr_62246[(27)] = inst_62102__$1);

(statearr_62246[(28)] = inst_62104);

(statearr_62246[(11)] = inst_62113);

(statearr_62246[(19)] = inst_62110);

(statearr_62246[(20)] = inst_62112);

return statearr_62246;
})();
var statearr_62249_63641 = state_62182__$1;
(statearr_62249_63641[(2)] = null);

(statearr_62249_63641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (28))){
var inst_62110 = (state_62182[(19)]);
var inst_62133 = (state_62182[(23)]);
var inst_62133__$1 = cljs.core.seq(inst_62110);
var state_62182__$1 = (function (){var statearr_62250 = state_62182;
(statearr_62250[(23)] = inst_62133__$1);

return statearr_62250;
})();
if(inst_62133__$1){
var statearr_62251_63642 = state_62182__$1;
(statearr_62251_63642[(1)] = (33));

} else {
var statearr_62252_63643 = state_62182__$1;
(statearr_62252_63643[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (25))){
var inst_62113 = (state_62182[(11)]);
var inst_62112 = (state_62182[(20)]);
var inst_62115 = (inst_62113 < inst_62112);
var inst_62116 = inst_62115;
var state_62182__$1 = state_62182;
if(cljs.core.truth_(inst_62116)){
var statearr_62255_63644 = state_62182__$1;
(statearr_62255_63644[(1)] = (27));

} else {
var statearr_62256_63647 = state_62182__$1;
(statearr_62256_63647[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (34))){
var state_62182__$1 = state_62182;
var statearr_62257_63649 = state_62182__$1;
(statearr_62257_63649[(2)] = null);

(statearr_62257_63649[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (17))){
var state_62182__$1 = state_62182;
var statearr_62258_63651 = state_62182__$1;
(statearr_62258_63651[(2)] = null);

(statearr_62258_63651[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (3))){
var inst_62180 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62182__$1,inst_62180);
} else {
if((state_val_62183 === (12))){
var inst_62097 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
var statearr_62261_63653 = state_62182__$1;
(statearr_62261_63653[(2)] = inst_62097);

(statearr_62261_63653[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (2))){
var state_62182__$1 = state_62182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62182__$1,(4),ch);
} else {
if((state_val_62183 === (23))){
var state_62182__$1 = state_62182;
var statearr_62262_63655 = state_62182__$1;
(statearr_62262_63655[(2)] = null);

(statearr_62262_63655[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (35))){
var inst_62164 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
var statearr_62265_63657 = state_62182__$1;
(statearr_62265_63657[(2)] = inst_62164);

(statearr_62265_63657[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (19))){
var inst_62069 = (state_62182[(7)]);
var inst_62073 = cljs.core.chunk_first(inst_62069);
var inst_62074 = cljs.core.chunk_rest(inst_62069);
var inst_62075 = cljs.core.count(inst_62073);
var inst_62046 = inst_62074;
var inst_62047 = inst_62073;
var inst_62048 = inst_62075;
var inst_62049 = (0);
var state_62182__$1 = (function (){var statearr_62266 = state_62182;
(statearr_62266[(13)] = inst_62046);

(statearr_62266[(15)] = inst_62049);

(statearr_62266[(16)] = inst_62047);

(statearr_62266[(17)] = inst_62048);

return statearr_62266;
})();
var statearr_62267_63661 = state_62182__$1;
(statearr_62267_63661[(2)] = null);

(statearr_62267_63661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (11))){
var inst_62046 = (state_62182[(13)]);
var inst_62069 = (state_62182[(7)]);
var inst_62069__$1 = cljs.core.seq(inst_62046);
var state_62182__$1 = (function (){var statearr_62268 = state_62182;
(statearr_62268[(7)] = inst_62069__$1);

return statearr_62268;
})();
if(inst_62069__$1){
var statearr_62273_63663 = state_62182__$1;
(statearr_62273_63663[(1)] = (16));

} else {
var statearr_62274_63664 = state_62182__$1;
(statearr_62274_63664[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (9))){
var inst_62099 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
var statearr_62275_63665 = state_62182__$1;
(statearr_62275_63665[(2)] = inst_62099);

(statearr_62275_63665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (5))){
var inst_62044 = cljs.core.deref(cs);
var inst_62045 = cljs.core.seq(inst_62044);
var inst_62046 = inst_62045;
var inst_62047 = null;
var inst_62048 = (0);
var inst_62049 = (0);
var state_62182__$1 = (function (){var statearr_62276 = state_62182;
(statearr_62276[(13)] = inst_62046);

(statearr_62276[(15)] = inst_62049);

(statearr_62276[(16)] = inst_62047);

(statearr_62276[(17)] = inst_62048);

return statearr_62276;
})();
var statearr_62277_63668 = state_62182__$1;
(statearr_62277_63668[(2)] = null);

(statearr_62277_63668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (14))){
var state_62182__$1 = state_62182;
var statearr_62278_63669 = state_62182__$1;
(statearr_62278_63669[(2)] = null);

(statearr_62278_63669[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (45))){
var inst_62172 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
var statearr_62279_63672 = state_62182__$1;
(statearr_62279_63672[(2)] = inst_62172);

(statearr_62279_63672[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (26))){
var inst_62102 = (state_62182[(27)]);
var inst_62168 = (state_62182[(2)]);
var inst_62169 = cljs.core.seq(inst_62102);
var state_62182__$1 = (function (){var statearr_62280 = state_62182;
(statearr_62280[(29)] = inst_62168);

return statearr_62280;
})();
if(inst_62169){
var statearr_62281_63674 = state_62182__$1;
(statearr_62281_63674[(1)] = (42));

} else {
var statearr_62282_63675 = state_62182__$1;
(statearr_62282_63675[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (16))){
var inst_62069 = (state_62182[(7)]);
var inst_62071 = cljs.core.chunked_seq_QMARK_(inst_62069);
var state_62182__$1 = state_62182;
if(inst_62071){
var statearr_62283_63676 = state_62182__$1;
(statearr_62283_63676[(1)] = (19));

} else {
var statearr_62284_63677 = state_62182__$1;
(statearr_62284_63677[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (38))){
var inst_62161 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
var statearr_62285_63678 = state_62182__$1;
(statearr_62285_63678[(2)] = inst_62161);

(statearr_62285_63678[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (30))){
var state_62182__$1 = state_62182;
var statearr_62286_63679 = state_62182__$1;
(statearr_62286_63679[(2)] = null);

(statearr_62286_63679[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (10))){
var inst_62049 = (state_62182[(15)]);
var inst_62047 = (state_62182[(16)]);
var inst_62058 = cljs.core._nth(inst_62047,inst_62049);
var inst_62059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62058,(0),null);
var inst_62060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62058,(1),null);
var state_62182__$1 = (function (){var statearr_62288 = state_62182;
(statearr_62288[(24)] = inst_62059);

return statearr_62288;
})();
if(cljs.core.truth_(inst_62060)){
var statearr_62289_63680 = state_62182__$1;
(statearr_62289_63680[(1)] = (13));

} else {
var statearr_62290_63681 = state_62182__$1;
(statearr_62290_63681[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (18))){
var inst_62095 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
var statearr_62291_63682 = state_62182__$1;
(statearr_62291_63682[(2)] = inst_62095);

(statearr_62291_63682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (42))){
var state_62182__$1 = state_62182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62182__$1,(45),dchan);
} else {
if((state_val_62183 === (37))){
var inst_62151 = (state_62182[(22)]);
var inst_62133 = (state_62182[(23)]);
var inst_62037 = (state_62182[(12)]);
var inst_62151__$1 = cljs.core.first(inst_62133);
var inst_62152 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_62151__$1,inst_62037,done);
var state_62182__$1 = (function (){var statearr_62294 = state_62182;
(statearr_62294[(22)] = inst_62151__$1);

return statearr_62294;
})();
if(cljs.core.truth_(inst_62152)){
var statearr_62295_63683 = state_62182__$1;
(statearr_62295_63683[(1)] = (39));

} else {
var statearr_62296_63684 = state_62182__$1;
(statearr_62296_63684[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (8))){
var inst_62049 = (state_62182[(15)]);
var inst_62048 = (state_62182[(17)]);
var inst_62052 = (inst_62049 < inst_62048);
var inst_62053 = inst_62052;
var state_62182__$1 = state_62182;
if(cljs.core.truth_(inst_62053)){
var statearr_62297_63685 = state_62182__$1;
(statearr_62297_63685[(1)] = (10));

} else {
var statearr_62298_63686 = state_62182__$1;
(statearr_62298_63686[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__61340__auto__ = null;
var cljs$core$async$mult_$_state_machine__61340__auto____0 = (function (){
var statearr_62300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62300[(0)] = cljs$core$async$mult_$_state_machine__61340__auto__);

(statearr_62300[(1)] = (1));

return statearr_62300;
});
var cljs$core$async$mult_$_state_machine__61340__auto____1 = (function (state_62182){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_62182);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e62301){var ex__61343__auto__ = e62301;
var statearr_62302_63687 = state_62182;
(statearr_62302_63687[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_62182[(4)]))){
var statearr_62305_63688 = state_62182;
(statearr_62305_63688[(1)] = cljs.core.first((state_62182[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63689 = state_62182;
state_62182 = G__63689;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__61340__auto__ = function(state_62182){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__61340__auto____1.call(this,state_62182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__61340__auto____0;
cljs$core$async$mult_$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__61340__auto____1;
return cljs$core$async$mult_$_state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_62306 = f__61426__auto__();
(statearr_62306[(6)] = c__61425__auto___63600);

return statearr_62306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__62308 = arguments.length;
switch (G__62308) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_63691 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_63691(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_63692 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_63692(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_63696 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_63696(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_63697 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_63697(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_63698 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_63698(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___63701 = arguments.length;
var i__5770__auto___63702 = (0);
while(true){
if((i__5770__auto___63702 < len__5769__auto___63701)){
args__5775__auto__.push((arguments[i__5770__auto___63702]));

var G__63703 = (i__5770__auto___63702 + (1));
i__5770__auto___63702 = G__63703;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__62333){
var map__62334 = p__62333;
var map__62334__$1 = cljs.core.__destructure_map(map__62334);
var opts = map__62334__$1;
var statearr_62335_63704 = state;
(statearr_62335_63704[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_62336_63705 = state;
(statearr_62336_63705[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_62337_63706 = state;
(statearr_62337_63706[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq62322){
var G__62323 = cljs.core.first(seq62322);
var seq62322__$1 = cljs.core.next(seq62322);
var G__62324 = cljs.core.first(seq62322__$1);
var seq62322__$2 = cljs.core.next(seq62322__$1);
var G__62325 = cljs.core.first(seq62322__$2);
var seq62322__$3 = cljs.core.next(seq62322__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62323,G__62324,G__62325,seq62322__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62344 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta62345){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta62345 = meta62345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62346,meta62345__$1){
var self__ = this;
var _62346__$1 = this;
return (new cljs.core.async.t_cljs$core$async62344(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta62345__$1));
}));

(cljs.core.async.t_cljs$core$async62344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62346){
var self__ = this;
var _62346__$1 = this;
return self__.meta62345;
}));

(cljs.core.async.t_cljs$core$async62344.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62344.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async62344.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62344.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62344.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62344.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62344.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62344.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta62345","meta62345",1619051289,null)], null);
}));

(cljs.core.async.t_cljs$core$async62344.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62344");

(cljs.core.async.t_cljs$core$async62344.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62344");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62344.
 */
cljs.core.async.__GT_t_cljs$core$async62344 = (function cljs$core$async$mix_$___GT_t_cljs$core$async62344(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62345){
return (new cljs.core.async.t_cljs$core$async62344(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62345));
});

}

return (new cljs.core.async.t_cljs$core$async62344(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__61425__auto___63714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_62424){
var state_val_62425 = (state_62424[(1)]);
if((state_val_62425 === (7))){
var inst_62384 = (state_62424[(2)]);
var state_62424__$1 = state_62424;
if(cljs.core.truth_(inst_62384)){
var statearr_62426_63715 = state_62424__$1;
(statearr_62426_63715[(1)] = (8));

} else {
var statearr_62427_63716 = state_62424__$1;
(statearr_62427_63716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (20))){
var inst_62377 = (state_62424[(7)]);
var state_62424__$1 = state_62424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62424__$1,(23),out,inst_62377);
} else {
if((state_val_62425 === (1))){
var inst_62360 = calc_state();
var inst_62361 = cljs.core.__destructure_map(inst_62360);
var inst_62362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62361,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62361,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62361,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_62365 = inst_62360;
var state_62424__$1 = (function (){var statearr_62428 = state_62424;
(statearr_62428[(8)] = inst_62362);

(statearr_62428[(9)] = inst_62364);

(statearr_62428[(10)] = inst_62365);

(statearr_62428[(11)] = inst_62363);

return statearr_62428;
})();
var statearr_62429_63717 = state_62424__$1;
(statearr_62429_63717[(2)] = null);

(statearr_62429_63717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (24))){
var inst_62368 = (state_62424[(12)]);
var inst_62365 = inst_62368;
var state_62424__$1 = (function (){var statearr_62430 = state_62424;
(statearr_62430[(10)] = inst_62365);

return statearr_62430;
})();
var statearr_62431_63718 = state_62424__$1;
(statearr_62431_63718[(2)] = null);

(statearr_62431_63718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (4))){
var inst_62379 = (state_62424[(13)]);
var inst_62377 = (state_62424[(7)]);
var inst_62376 = (state_62424[(2)]);
var inst_62377__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62376,(0),null);
var inst_62378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62376,(1),null);
var inst_62379__$1 = (inst_62377__$1 == null);
var state_62424__$1 = (function (){var statearr_62432 = state_62424;
(statearr_62432[(13)] = inst_62379__$1);

(statearr_62432[(14)] = inst_62378);

(statearr_62432[(7)] = inst_62377__$1);

return statearr_62432;
})();
if(cljs.core.truth_(inst_62379__$1)){
var statearr_62433_63719 = state_62424__$1;
(statearr_62433_63719[(1)] = (5));

} else {
var statearr_62434_63720 = state_62424__$1;
(statearr_62434_63720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (15))){
var inst_62369 = (state_62424[(15)]);
var inst_62398 = (state_62424[(16)]);
var inst_62398__$1 = cljs.core.empty_QMARK_(inst_62369);
var state_62424__$1 = (function (){var statearr_62435 = state_62424;
(statearr_62435[(16)] = inst_62398__$1);

return statearr_62435;
})();
if(inst_62398__$1){
var statearr_62436_63721 = state_62424__$1;
(statearr_62436_63721[(1)] = (17));

} else {
var statearr_62437_63722 = state_62424__$1;
(statearr_62437_63722[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (21))){
var inst_62368 = (state_62424[(12)]);
var inst_62365 = inst_62368;
var state_62424__$1 = (function (){var statearr_62438 = state_62424;
(statearr_62438[(10)] = inst_62365);

return statearr_62438;
})();
var statearr_62439_63726 = state_62424__$1;
(statearr_62439_63726[(2)] = null);

(statearr_62439_63726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (13))){
var inst_62391 = (state_62424[(2)]);
var inst_62392 = calc_state();
var inst_62365 = inst_62392;
var state_62424__$1 = (function (){var statearr_62440 = state_62424;
(statearr_62440[(17)] = inst_62391);

(statearr_62440[(10)] = inst_62365);

return statearr_62440;
})();
var statearr_62441_63729 = state_62424__$1;
(statearr_62441_63729[(2)] = null);

(statearr_62441_63729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (22))){
var inst_62418 = (state_62424[(2)]);
var state_62424__$1 = state_62424;
var statearr_62442_63730 = state_62424__$1;
(statearr_62442_63730[(2)] = inst_62418);

(statearr_62442_63730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (6))){
var inst_62378 = (state_62424[(14)]);
var inst_62382 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62378,change);
var state_62424__$1 = state_62424;
var statearr_62443_63732 = state_62424__$1;
(statearr_62443_63732[(2)] = inst_62382);

(statearr_62443_63732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (25))){
var state_62424__$1 = state_62424;
var statearr_62444_63733 = state_62424__$1;
(statearr_62444_63733[(2)] = null);

(statearr_62444_63733[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (17))){
var inst_62378 = (state_62424[(14)]);
var inst_62370 = (state_62424[(18)]);
var inst_62400 = (inst_62370.cljs$core$IFn$_invoke$arity$1 ? inst_62370.cljs$core$IFn$_invoke$arity$1(inst_62378) : inst_62370.call(null,inst_62378));
var inst_62401 = cljs.core.not(inst_62400);
var state_62424__$1 = state_62424;
var statearr_62445_63734 = state_62424__$1;
(statearr_62445_63734[(2)] = inst_62401);

(statearr_62445_63734[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (3))){
var inst_62422 = (state_62424[(2)]);
var state_62424__$1 = state_62424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62424__$1,inst_62422);
} else {
if((state_val_62425 === (12))){
var state_62424__$1 = state_62424;
var statearr_62446_63735 = state_62424__$1;
(statearr_62446_63735[(2)] = null);

(statearr_62446_63735[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (2))){
var inst_62368 = (state_62424[(12)]);
var inst_62365 = (state_62424[(10)]);
var inst_62368__$1 = cljs.core.__destructure_map(inst_62365);
var inst_62369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62368__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62368__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62368__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_62424__$1 = (function (){var statearr_62447 = state_62424;
(statearr_62447[(15)] = inst_62369);

(statearr_62447[(18)] = inst_62370);

(statearr_62447[(12)] = inst_62368__$1);

return statearr_62447;
})();
return cljs.core.async.ioc_alts_BANG_(state_62424__$1,(4),inst_62371);
} else {
if((state_val_62425 === (23))){
var inst_62409 = (state_62424[(2)]);
var state_62424__$1 = state_62424;
if(cljs.core.truth_(inst_62409)){
var statearr_62448_63741 = state_62424__$1;
(statearr_62448_63741[(1)] = (24));

} else {
var statearr_62449_63742 = state_62424__$1;
(statearr_62449_63742[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (19))){
var inst_62404 = (state_62424[(2)]);
var state_62424__$1 = state_62424;
var statearr_62450_63745 = state_62424__$1;
(statearr_62450_63745[(2)] = inst_62404);

(statearr_62450_63745[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (11))){
var inst_62378 = (state_62424[(14)]);
var inst_62388 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_62378);
var state_62424__$1 = state_62424;
var statearr_62451_63748 = state_62424__$1;
(statearr_62451_63748[(2)] = inst_62388);

(statearr_62451_63748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (9))){
var inst_62369 = (state_62424[(15)]);
var inst_62395 = (state_62424[(19)]);
var inst_62378 = (state_62424[(14)]);
var inst_62395__$1 = (inst_62369.cljs$core$IFn$_invoke$arity$1 ? inst_62369.cljs$core$IFn$_invoke$arity$1(inst_62378) : inst_62369.call(null,inst_62378));
var state_62424__$1 = (function (){var statearr_62452 = state_62424;
(statearr_62452[(19)] = inst_62395__$1);

return statearr_62452;
})();
if(cljs.core.truth_(inst_62395__$1)){
var statearr_62453_63749 = state_62424__$1;
(statearr_62453_63749[(1)] = (14));

} else {
var statearr_62454_63750 = state_62424__$1;
(statearr_62454_63750[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (5))){
var inst_62379 = (state_62424[(13)]);
var state_62424__$1 = state_62424;
var statearr_62455_63751 = state_62424__$1;
(statearr_62455_63751[(2)] = inst_62379);

(statearr_62455_63751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (14))){
var inst_62395 = (state_62424[(19)]);
var state_62424__$1 = state_62424;
var statearr_62456_63752 = state_62424__$1;
(statearr_62456_63752[(2)] = inst_62395);

(statearr_62456_63752[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (26))){
var inst_62414 = (state_62424[(2)]);
var state_62424__$1 = state_62424;
var statearr_62457_63753 = state_62424__$1;
(statearr_62457_63753[(2)] = inst_62414);

(statearr_62457_63753[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (16))){
var inst_62406 = (state_62424[(2)]);
var state_62424__$1 = state_62424;
if(cljs.core.truth_(inst_62406)){
var statearr_62458_63755 = state_62424__$1;
(statearr_62458_63755[(1)] = (20));

} else {
var statearr_62459_63756 = state_62424__$1;
(statearr_62459_63756[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (10))){
var inst_62420 = (state_62424[(2)]);
var state_62424__$1 = state_62424;
var statearr_62460_63757 = state_62424__$1;
(statearr_62460_63757[(2)] = inst_62420);

(statearr_62460_63757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (18))){
var inst_62398 = (state_62424[(16)]);
var state_62424__$1 = state_62424;
var statearr_62461_63758 = state_62424__$1;
(statearr_62461_63758[(2)] = inst_62398);

(statearr_62461_63758[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62425 === (8))){
var inst_62377 = (state_62424[(7)]);
var inst_62386 = (inst_62377 == null);
var state_62424__$1 = state_62424;
if(cljs.core.truth_(inst_62386)){
var statearr_62462_63759 = state_62424__$1;
(statearr_62462_63759[(1)] = (11));

} else {
var statearr_62463_63760 = state_62424__$1;
(statearr_62463_63760[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__61340__auto__ = null;
var cljs$core$async$mix_$_state_machine__61340__auto____0 = (function (){
var statearr_62464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62464[(0)] = cljs$core$async$mix_$_state_machine__61340__auto__);

(statearr_62464[(1)] = (1));

return statearr_62464;
});
var cljs$core$async$mix_$_state_machine__61340__auto____1 = (function (state_62424){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_62424);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e62465){var ex__61343__auto__ = e62465;
var statearr_62466_63761 = state_62424;
(statearr_62466_63761[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_62424[(4)]))){
var statearr_62467_63762 = state_62424;
(statearr_62467_63762[(1)] = cljs.core.first((state_62424[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63763 = state_62424;
state_62424 = G__63763;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__61340__auto__ = function(state_62424){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__61340__auto____1.call(this,state_62424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__61340__auto____0;
cljs$core$async$mix_$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__61340__auto____1;
return cljs$core$async$mix_$_state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_62468 = f__61426__auto__();
(statearr_62468[(6)] = c__61425__auto___63714);

return statearr_62468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_63768 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_63768(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_63770 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_63770(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_63771 = (function() {
var G__63772 = null;
var G__63772__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__63772__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__63772 = function(p,v){
switch(arguments.length){
case 1:
return G__63772__1.call(this,p);
case 2:
return G__63772__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__63772.cljs$core$IFn$_invoke$arity$1 = G__63772__1;
G__63772.cljs$core$IFn$_invoke$arity$2 = G__63772__2;
return G__63772;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__62470 = arguments.length;
switch (G__62470) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_63771(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_63771(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__62478 = arguments.length;
switch (G__62478) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__62476_SHARP_){
if(cljs.core.truth_((p1__62476_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__62476_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__62476_SHARP_.call(null,topic)))){
return p1__62476_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__62476_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62484 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62484 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta62485){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta62485 = meta62485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62486,meta62485__$1){
var self__ = this;
var _62486__$1 = this;
return (new cljs.core.async.t_cljs$core$async62484(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta62485__$1));
}));

(cljs.core.async.t_cljs$core$async62484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62486){
var self__ = this;
var _62486__$1 = this;
return self__.meta62485;
}));

(cljs.core.async.t_cljs$core$async62484.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62484.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async62484.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62484.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async62484.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async62484.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async62484.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async62484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta62485","meta62485",-492148432,null)], null);
}));

(cljs.core.async.t_cljs$core$async62484.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62484");

(cljs.core.async.t_cljs$core$async62484.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62484");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62484.
 */
cljs.core.async.__GT_t_cljs$core$async62484 = (function cljs$core$async$__GT_t_cljs$core$async62484(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta62485){
return (new cljs.core.async.t_cljs$core$async62484(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta62485));
});

}

return (new cljs.core.async.t_cljs$core$async62484(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__61425__auto___63777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_62562){
var state_val_62563 = (state_62562[(1)]);
if((state_val_62563 === (7))){
var inst_62558 = (state_62562[(2)]);
var state_62562__$1 = state_62562;
var statearr_62564_63778 = state_62562__$1;
(statearr_62564_63778[(2)] = inst_62558);

(statearr_62564_63778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (20))){
var state_62562__$1 = state_62562;
var statearr_62565_63779 = state_62562__$1;
(statearr_62565_63779[(2)] = null);

(statearr_62565_63779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (1))){
var state_62562__$1 = state_62562;
var statearr_62566_63780 = state_62562__$1;
(statearr_62566_63780[(2)] = null);

(statearr_62566_63780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (24))){
var inst_62541 = (state_62562[(7)]);
var inst_62550 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_62541);
var state_62562__$1 = state_62562;
var statearr_62567_63781 = state_62562__$1;
(statearr_62567_63781[(2)] = inst_62550);

(statearr_62567_63781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (4))){
var inst_62489 = (state_62562[(8)]);
var inst_62489__$1 = (state_62562[(2)]);
var inst_62490 = (inst_62489__$1 == null);
var state_62562__$1 = (function (){var statearr_62568 = state_62562;
(statearr_62568[(8)] = inst_62489__$1);

return statearr_62568;
})();
if(cljs.core.truth_(inst_62490)){
var statearr_62569_63782 = state_62562__$1;
(statearr_62569_63782[(1)] = (5));

} else {
var statearr_62570_63783 = state_62562__$1;
(statearr_62570_63783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (15))){
var inst_62532 = (state_62562[(2)]);
var state_62562__$1 = state_62562;
var statearr_62571_63784 = state_62562__$1;
(statearr_62571_63784[(2)] = inst_62532);

(statearr_62571_63784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (21))){
var inst_62555 = (state_62562[(2)]);
var state_62562__$1 = (function (){var statearr_62573 = state_62562;
(statearr_62573[(9)] = inst_62555);

return statearr_62573;
})();
var statearr_62574_63785 = state_62562__$1;
(statearr_62574_63785[(2)] = null);

(statearr_62574_63785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (13))){
var inst_62514 = (state_62562[(10)]);
var inst_62516 = cljs.core.chunked_seq_QMARK_(inst_62514);
var state_62562__$1 = state_62562;
if(inst_62516){
var statearr_62575_63786 = state_62562__$1;
(statearr_62575_63786[(1)] = (16));

} else {
var statearr_62576_63787 = state_62562__$1;
(statearr_62576_63787[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (22))){
var inst_62547 = (state_62562[(2)]);
var state_62562__$1 = state_62562;
if(cljs.core.truth_(inst_62547)){
var statearr_62577_63788 = state_62562__$1;
(statearr_62577_63788[(1)] = (23));

} else {
var statearr_62578_63789 = state_62562__$1;
(statearr_62578_63789[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (6))){
var inst_62541 = (state_62562[(7)]);
var inst_62489 = (state_62562[(8)]);
var inst_62543 = (state_62562[(11)]);
var inst_62541__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_62489) : topic_fn.call(null,inst_62489));
var inst_62542 = cljs.core.deref(mults);
var inst_62543__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62542,inst_62541__$1);
var state_62562__$1 = (function (){var statearr_62579 = state_62562;
(statearr_62579[(7)] = inst_62541__$1);

(statearr_62579[(11)] = inst_62543__$1);

return statearr_62579;
})();
if(cljs.core.truth_(inst_62543__$1)){
var statearr_62580_63790 = state_62562__$1;
(statearr_62580_63790[(1)] = (19));

} else {
var statearr_62581_63791 = state_62562__$1;
(statearr_62581_63791[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (25))){
var inst_62552 = (state_62562[(2)]);
var state_62562__$1 = state_62562;
var statearr_62582_63792 = state_62562__$1;
(statearr_62582_63792[(2)] = inst_62552);

(statearr_62582_63792[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (17))){
var inst_62514 = (state_62562[(10)]);
var inst_62523 = cljs.core.first(inst_62514);
var inst_62524 = cljs.core.async.muxch_STAR_(inst_62523);
var inst_62525 = cljs.core.async.close_BANG_(inst_62524);
var inst_62526 = cljs.core.next(inst_62514);
var inst_62499 = inst_62526;
var inst_62500 = null;
var inst_62501 = (0);
var inst_62502 = (0);
var state_62562__$1 = (function (){var statearr_62583 = state_62562;
(statearr_62583[(12)] = inst_62502);

(statearr_62583[(13)] = inst_62499);

(statearr_62583[(14)] = inst_62525);

(statearr_62583[(15)] = inst_62500);

(statearr_62583[(16)] = inst_62501);

return statearr_62583;
})();
var statearr_62584_63793 = state_62562__$1;
(statearr_62584_63793[(2)] = null);

(statearr_62584_63793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (3))){
var inst_62560 = (state_62562[(2)]);
var state_62562__$1 = state_62562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62562__$1,inst_62560);
} else {
if((state_val_62563 === (12))){
var inst_62534 = (state_62562[(2)]);
var state_62562__$1 = state_62562;
var statearr_62585_63794 = state_62562__$1;
(statearr_62585_63794[(2)] = inst_62534);

(statearr_62585_63794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (2))){
var state_62562__$1 = state_62562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62562__$1,(4),ch);
} else {
if((state_val_62563 === (23))){
var state_62562__$1 = state_62562;
var statearr_62586_63795 = state_62562__$1;
(statearr_62586_63795[(2)] = null);

(statearr_62586_63795[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (19))){
var inst_62489 = (state_62562[(8)]);
var inst_62543 = (state_62562[(11)]);
var inst_62545 = cljs.core.async.muxch_STAR_(inst_62543);
var state_62562__$1 = state_62562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62562__$1,(22),inst_62545,inst_62489);
} else {
if((state_val_62563 === (11))){
var inst_62499 = (state_62562[(13)]);
var inst_62514 = (state_62562[(10)]);
var inst_62514__$1 = cljs.core.seq(inst_62499);
var state_62562__$1 = (function (){var statearr_62587 = state_62562;
(statearr_62587[(10)] = inst_62514__$1);

return statearr_62587;
})();
if(inst_62514__$1){
var statearr_62588_63796 = state_62562__$1;
(statearr_62588_63796[(1)] = (13));

} else {
var statearr_62589_63797 = state_62562__$1;
(statearr_62589_63797[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (9))){
var inst_62536 = (state_62562[(2)]);
var state_62562__$1 = state_62562;
var statearr_62590_63798 = state_62562__$1;
(statearr_62590_63798[(2)] = inst_62536);

(statearr_62590_63798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (5))){
var inst_62496 = cljs.core.deref(mults);
var inst_62497 = cljs.core.vals(inst_62496);
var inst_62498 = cljs.core.seq(inst_62497);
var inst_62499 = inst_62498;
var inst_62500 = null;
var inst_62501 = (0);
var inst_62502 = (0);
var state_62562__$1 = (function (){var statearr_62595 = state_62562;
(statearr_62595[(12)] = inst_62502);

(statearr_62595[(13)] = inst_62499);

(statearr_62595[(15)] = inst_62500);

(statearr_62595[(16)] = inst_62501);

return statearr_62595;
})();
var statearr_62596_63799 = state_62562__$1;
(statearr_62596_63799[(2)] = null);

(statearr_62596_63799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (14))){
var state_62562__$1 = state_62562;
var statearr_62600_63800 = state_62562__$1;
(statearr_62600_63800[(2)] = null);

(statearr_62600_63800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (16))){
var inst_62514 = (state_62562[(10)]);
var inst_62518 = cljs.core.chunk_first(inst_62514);
var inst_62519 = cljs.core.chunk_rest(inst_62514);
var inst_62520 = cljs.core.count(inst_62518);
var inst_62499 = inst_62519;
var inst_62500 = inst_62518;
var inst_62501 = inst_62520;
var inst_62502 = (0);
var state_62562__$1 = (function (){var statearr_62601 = state_62562;
(statearr_62601[(12)] = inst_62502);

(statearr_62601[(13)] = inst_62499);

(statearr_62601[(15)] = inst_62500);

(statearr_62601[(16)] = inst_62501);

return statearr_62601;
})();
var statearr_62602_63801 = state_62562__$1;
(statearr_62602_63801[(2)] = null);

(statearr_62602_63801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (10))){
var inst_62502 = (state_62562[(12)]);
var inst_62499 = (state_62562[(13)]);
var inst_62500 = (state_62562[(15)]);
var inst_62501 = (state_62562[(16)]);
var inst_62508 = cljs.core._nth(inst_62500,inst_62502);
var inst_62509 = cljs.core.async.muxch_STAR_(inst_62508);
var inst_62510 = cljs.core.async.close_BANG_(inst_62509);
var inst_62511 = (inst_62502 + (1));
var tmp62597 = inst_62499;
var tmp62598 = inst_62500;
var tmp62599 = inst_62501;
var inst_62499__$1 = tmp62597;
var inst_62500__$1 = tmp62598;
var inst_62501__$1 = tmp62599;
var inst_62502__$1 = inst_62511;
var state_62562__$1 = (function (){var statearr_62606 = state_62562;
(statearr_62606[(12)] = inst_62502__$1);

(statearr_62606[(13)] = inst_62499__$1);

(statearr_62606[(15)] = inst_62500__$1);

(statearr_62606[(17)] = inst_62510);

(statearr_62606[(16)] = inst_62501__$1);

return statearr_62606;
})();
var statearr_62607_63802 = state_62562__$1;
(statearr_62607_63802[(2)] = null);

(statearr_62607_63802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (18))){
var inst_62529 = (state_62562[(2)]);
var state_62562__$1 = state_62562;
var statearr_62608_63803 = state_62562__$1;
(statearr_62608_63803[(2)] = inst_62529);

(statearr_62608_63803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62563 === (8))){
var inst_62502 = (state_62562[(12)]);
var inst_62501 = (state_62562[(16)]);
var inst_62504 = (inst_62502 < inst_62501);
var inst_62505 = inst_62504;
var state_62562__$1 = state_62562;
if(cljs.core.truth_(inst_62505)){
var statearr_62612_63804 = state_62562__$1;
(statearr_62612_63804[(1)] = (10));

} else {
var statearr_62613_63805 = state_62562__$1;
(statearr_62613_63805[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_62614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62614[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_62614[(1)] = (1));

return statearr_62614;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_62562){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_62562);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e62616){var ex__61343__auto__ = e62616;
var statearr_62617_63806 = state_62562;
(statearr_62617_63806[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_62562[(4)]))){
var statearr_62621_63807 = state_62562;
(statearr_62621_63807[(1)] = cljs.core.first((state_62562[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63808 = state_62562;
state_62562 = G__63808;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_62562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_62562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_62622 = f__61426__auto__();
(statearr_62622[(6)] = c__61425__auto___63777);

return statearr_62622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__62624 = arguments.length;
switch (G__62624) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__62627 = arguments.length;
switch (G__62627) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__62630 = arguments.length;
switch (G__62630) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__61425__auto___63817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_62674){
var state_val_62675 = (state_62674[(1)]);
if((state_val_62675 === (7))){
var state_62674__$1 = state_62674;
var statearr_62676_63818 = state_62674__$1;
(statearr_62676_63818[(2)] = null);

(statearr_62676_63818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (1))){
var state_62674__$1 = state_62674;
var statearr_62677_63825 = state_62674__$1;
(statearr_62677_63825[(2)] = null);

(statearr_62677_63825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (4))){
var inst_62633 = (state_62674[(7)]);
var inst_62634 = (state_62674[(8)]);
var inst_62636 = (inst_62634 < inst_62633);
var state_62674__$1 = state_62674;
if(cljs.core.truth_(inst_62636)){
var statearr_62678_63826 = state_62674__$1;
(statearr_62678_63826[(1)] = (6));

} else {
var statearr_62679_63827 = state_62674__$1;
(statearr_62679_63827[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (15))){
var inst_62660 = (state_62674[(9)]);
var inst_62665 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_62660);
var state_62674__$1 = state_62674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62674__$1,(17),out,inst_62665);
} else {
if((state_val_62675 === (13))){
var inst_62660 = (state_62674[(9)]);
var inst_62660__$1 = (state_62674[(2)]);
var inst_62661 = cljs.core.some(cljs.core.nil_QMARK_,inst_62660__$1);
var state_62674__$1 = (function (){var statearr_62680 = state_62674;
(statearr_62680[(9)] = inst_62660__$1);

return statearr_62680;
})();
if(cljs.core.truth_(inst_62661)){
var statearr_62681_63828 = state_62674__$1;
(statearr_62681_63828[(1)] = (14));

} else {
var statearr_62682_63829 = state_62674__$1;
(statearr_62682_63829[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (6))){
var state_62674__$1 = state_62674;
var statearr_62683_63830 = state_62674__$1;
(statearr_62683_63830[(2)] = null);

(statearr_62683_63830[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (17))){
var inst_62667 = (state_62674[(2)]);
var state_62674__$1 = (function (){var statearr_62685 = state_62674;
(statearr_62685[(10)] = inst_62667);

return statearr_62685;
})();
var statearr_62686_63837 = state_62674__$1;
(statearr_62686_63837[(2)] = null);

(statearr_62686_63837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (3))){
var inst_62672 = (state_62674[(2)]);
var state_62674__$1 = state_62674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62674__$1,inst_62672);
} else {
if((state_val_62675 === (12))){
var _ = (function (){var statearr_62687 = state_62674;
(statearr_62687[(4)] = cljs.core.rest((state_62674[(4)])));

return statearr_62687;
})();
var state_62674__$1 = state_62674;
var ex62684 = (state_62674__$1[(2)]);
var statearr_62688_63838 = state_62674__$1;
(statearr_62688_63838[(5)] = ex62684);


if((ex62684 instanceof Object)){
var statearr_62689_63839 = state_62674__$1;
(statearr_62689_63839[(1)] = (11));

(statearr_62689_63839[(5)] = null);

} else {
throw ex62684;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (2))){
var inst_62632 = cljs.core.reset_BANG_(dctr,cnt);
var inst_62633 = cnt;
var inst_62634 = (0);
var state_62674__$1 = (function (){var statearr_62690 = state_62674;
(statearr_62690[(11)] = inst_62632);

(statearr_62690[(7)] = inst_62633);

(statearr_62690[(8)] = inst_62634);

return statearr_62690;
})();
var statearr_62691_63840 = state_62674__$1;
(statearr_62691_63840[(2)] = null);

(statearr_62691_63840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (11))){
var inst_62639 = (state_62674[(2)]);
var inst_62640 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_62674__$1 = (function (){var statearr_62692 = state_62674;
(statearr_62692[(12)] = inst_62639);

return statearr_62692;
})();
var statearr_62693_63841 = state_62674__$1;
(statearr_62693_63841[(2)] = inst_62640);

(statearr_62693_63841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (9))){
var inst_62634 = (state_62674[(8)]);
var _ = (function (){var statearr_62694 = state_62674;
(statearr_62694[(4)] = cljs.core.cons((12),(state_62674[(4)])));

return statearr_62694;
})();
var inst_62646 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_62634) : chs__$1.call(null,inst_62634));
var inst_62647 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_62634) : done.call(null,inst_62634));
var inst_62648 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_62646,inst_62647);
var ___$1 = (function (){var statearr_62695 = state_62674;
(statearr_62695[(4)] = cljs.core.rest((state_62674[(4)])));

return statearr_62695;
})();
var state_62674__$1 = state_62674;
var statearr_62696_63842 = state_62674__$1;
(statearr_62696_63842[(2)] = inst_62648);

(statearr_62696_63842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (5))){
var inst_62658 = (state_62674[(2)]);
var state_62674__$1 = (function (){var statearr_62697 = state_62674;
(statearr_62697[(13)] = inst_62658);

return statearr_62697;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62674__$1,(13),dchan);
} else {
if((state_val_62675 === (14))){
var inst_62663 = cljs.core.async.close_BANG_(out);
var state_62674__$1 = state_62674;
var statearr_62698_63846 = state_62674__$1;
(statearr_62698_63846[(2)] = inst_62663);

(statearr_62698_63846[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (16))){
var inst_62670 = (state_62674[(2)]);
var state_62674__$1 = state_62674;
var statearr_62699_63850 = state_62674__$1;
(statearr_62699_63850[(2)] = inst_62670);

(statearr_62699_63850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (10))){
var inst_62634 = (state_62674[(8)]);
var inst_62651 = (state_62674[(2)]);
var inst_62652 = (inst_62634 + (1));
var inst_62634__$1 = inst_62652;
var state_62674__$1 = (function (){var statearr_62700 = state_62674;
(statearr_62700[(14)] = inst_62651);

(statearr_62700[(8)] = inst_62634__$1);

return statearr_62700;
})();
var statearr_62701_63851 = state_62674__$1;
(statearr_62701_63851[(2)] = null);

(statearr_62701_63851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62675 === (8))){
var inst_62656 = (state_62674[(2)]);
var state_62674__$1 = state_62674;
var statearr_62702_63852 = state_62674__$1;
(statearr_62702_63852[(2)] = inst_62656);

(statearr_62702_63852[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_62703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62703[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_62703[(1)] = (1));

return statearr_62703;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_62674){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_62674);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e62704){var ex__61343__auto__ = e62704;
var statearr_62705_63853 = state_62674;
(statearr_62705_63853[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_62674[(4)]))){
var statearr_62706_63854 = state_62674;
(statearr_62706_63854[(1)] = cljs.core.first((state_62674[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63855 = state_62674;
state_62674 = G__63855;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_62674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_62674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_62707 = f__61426__auto__();
(statearr_62707[(6)] = c__61425__auto___63817);

return statearr_62707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__62710 = arguments.length;
switch (G__62710) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61425__auto___63862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_62742){
var state_val_62743 = (state_62742[(1)]);
if((state_val_62743 === (7))){
var inst_62721 = (state_62742[(7)]);
var inst_62722 = (state_62742[(8)]);
var inst_62721__$1 = (state_62742[(2)]);
var inst_62722__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62721__$1,(0),null);
var inst_62723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62721__$1,(1),null);
var inst_62724 = (inst_62722__$1 == null);
var state_62742__$1 = (function (){var statearr_62744 = state_62742;
(statearr_62744[(7)] = inst_62721__$1);

(statearr_62744[(9)] = inst_62723);

(statearr_62744[(8)] = inst_62722__$1);

return statearr_62744;
})();
if(cljs.core.truth_(inst_62724)){
var statearr_62745_63864 = state_62742__$1;
(statearr_62745_63864[(1)] = (8));

} else {
var statearr_62746_63865 = state_62742__$1;
(statearr_62746_63865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62743 === (1))){
var inst_62711 = cljs.core.vec(chs);
var inst_62712 = inst_62711;
var state_62742__$1 = (function (){var statearr_62747 = state_62742;
(statearr_62747[(10)] = inst_62712);

return statearr_62747;
})();
var statearr_62748_63866 = state_62742__$1;
(statearr_62748_63866[(2)] = null);

(statearr_62748_63866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62743 === (4))){
var inst_62712 = (state_62742[(10)]);
var state_62742__$1 = state_62742;
return cljs.core.async.ioc_alts_BANG_(state_62742__$1,(7),inst_62712);
} else {
if((state_val_62743 === (6))){
var inst_62738 = (state_62742[(2)]);
var state_62742__$1 = state_62742;
var statearr_62749_63867 = state_62742__$1;
(statearr_62749_63867[(2)] = inst_62738);

(statearr_62749_63867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62743 === (3))){
var inst_62740 = (state_62742[(2)]);
var state_62742__$1 = state_62742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62742__$1,inst_62740);
} else {
if((state_val_62743 === (2))){
var inst_62712 = (state_62742[(10)]);
var inst_62714 = cljs.core.count(inst_62712);
var inst_62715 = (inst_62714 > (0));
var state_62742__$1 = state_62742;
if(cljs.core.truth_(inst_62715)){
var statearr_62751_63869 = state_62742__$1;
(statearr_62751_63869[(1)] = (4));

} else {
var statearr_62752_63870 = state_62742__$1;
(statearr_62752_63870[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62743 === (11))){
var inst_62712 = (state_62742[(10)]);
var inst_62731 = (state_62742[(2)]);
var tmp62750 = inst_62712;
var inst_62712__$1 = tmp62750;
var state_62742__$1 = (function (){var statearr_62753 = state_62742;
(statearr_62753[(10)] = inst_62712__$1);

(statearr_62753[(11)] = inst_62731);

return statearr_62753;
})();
var statearr_62754_63871 = state_62742__$1;
(statearr_62754_63871[(2)] = null);

(statearr_62754_63871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62743 === (9))){
var inst_62722 = (state_62742[(8)]);
var state_62742__$1 = state_62742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62742__$1,(11),out,inst_62722);
} else {
if((state_val_62743 === (5))){
var inst_62736 = cljs.core.async.close_BANG_(out);
var state_62742__$1 = state_62742;
var statearr_62755_63872 = state_62742__$1;
(statearr_62755_63872[(2)] = inst_62736);

(statearr_62755_63872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62743 === (10))){
var inst_62734 = (state_62742[(2)]);
var state_62742__$1 = state_62742;
var statearr_62756_63873 = state_62742__$1;
(statearr_62756_63873[(2)] = inst_62734);

(statearr_62756_63873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62743 === (8))){
var inst_62721 = (state_62742[(7)]);
var inst_62723 = (state_62742[(9)]);
var inst_62712 = (state_62742[(10)]);
var inst_62722 = (state_62742[(8)]);
var inst_62726 = (function (){var cs = inst_62712;
var vec__62717 = inst_62721;
var v = inst_62722;
var c = inst_62723;
return (function (p1__62708_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__62708_SHARP_);
});
})();
var inst_62727 = cljs.core.filterv(inst_62726,inst_62712);
var inst_62712__$1 = inst_62727;
var state_62742__$1 = (function (){var statearr_62757 = state_62742;
(statearr_62757[(10)] = inst_62712__$1);

return statearr_62757;
})();
var statearr_62758_63874 = state_62742__$1;
(statearr_62758_63874[(2)] = null);

(statearr_62758_63874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_62759 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62759[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_62759[(1)] = (1));

return statearr_62759;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_62742){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_62742);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e62760){var ex__61343__auto__ = e62760;
var statearr_62761_63877 = state_62742;
(statearr_62761_63877[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_62742[(4)]))){
var statearr_62762_63878 = state_62742;
(statearr_62762_63878[(1)] = cljs.core.first((state_62742[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63880 = state_62742;
state_62742 = G__63880;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_62742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_62742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_62763 = f__61426__auto__();
(statearr_62763[(6)] = c__61425__auto___63862);

return statearr_62763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__62765 = arguments.length;
switch (G__62765) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61425__auto___63882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_62789){
var state_val_62790 = (state_62789[(1)]);
if((state_val_62790 === (7))){
var inst_62771 = (state_62789[(7)]);
var inst_62771__$1 = (state_62789[(2)]);
var inst_62772 = (inst_62771__$1 == null);
var inst_62773 = cljs.core.not(inst_62772);
var state_62789__$1 = (function (){var statearr_62791 = state_62789;
(statearr_62791[(7)] = inst_62771__$1);

return statearr_62791;
})();
if(inst_62773){
var statearr_62792_63886 = state_62789__$1;
(statearr_62792_63886[(1)] = (8));

} else {
var statearr_62793_63887 = state_62789__$1;
(statearr_62793_63887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62790 === (1))){
var inst_62766 = (0);
var state_62789__$1 = (function (){var statearr_62794 = state_62789;
(statearr_62794[(8)] = inst_62766);

return statearr_62794;
})();
var statearr_62795_63888 = state_62789__$1;
(statearr_62795_63888[(2)] = null);

(statearr_62795_63888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62790 === (4))){
var state_62789__$1 = state_62789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62789__$1,(7),ch);
} else {
if((state_val_62790 === (6))){
var inst_62784 = (state_62789[(2)]);
var state_62789__$1 = state_62789;
var statearr_62796_63889 = state_62789__$1;
(statearr_62796_63889[(2)] = inst_62784);

(statearr_62796_63889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62790 === (3))){
var inst_62786 = (state_62789[(2)]);
var inst_62787 = cljs.core.async.close_BANG_(out);
var state_62789__$1 = (function (){var statearr_62797 = state_62789;
(statearr_62797[(9)] = inst_62786);

return statearr_62797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62789__$1,inst_62787);
} else {
if((state_val_62790 === (2))){
var inst_62766 = (state_62789[(8)]);
var inst_62768 = (inst_62766 < n);
var state_62789__$1 = state_62789;
if(cljs.core.truth_(inst_62768)){
var statearr_62798_63893 = state_62789__$1;
(statearr_62798_63893[(1)] = (4));

} else {
var statearr_62799_63894 = state_62789__$1;
(statearr_62799_63894[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62790 === (11))){
var inst_62766 = (state_62789[(8)]);
var inst_62776 = (state_62789[(2)]);
var inst_62777 = (inst_62766 + (1));
var inst_62766__$1 = inst_62777;
var state_62789__$1 = (function (){var statearr_62800 = state_62789;
(statearr_62800[(10)] = inst_62776);

(statearr_62800[(8)] = inst_62766__$1);

return statearr_62800;
})();
var statearr_62801_63896 = state_62789__$1;
(statearr_62801_63896[(2)] = null);

(statearr_62801_63896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62790 === (9))){
var state_62789__$1 = state_62789;
var statearr_62802_63897 = state_62789__$1;
(statearr_62802_63897[(2)] = null);

(statearr_62802_63897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62790 === (5))){
var state_62789__$1 = state_62789;
var statearr_62803_63898 = state_62789__$1;
(statearr_62803_63898[(2)] = null);

(statearr_62803_63898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62790 === (10))){
var inst_62781 = (state_62789[(2)]);
var state_62789__$1 = state_62789;
var statearr_62804_63899 = state_62789__$1;
(statearr_62804_63899[(2)] = inst_62781);

(statearr_62804_63899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62790 === (8))){
var inst_62771 = (state_62789[(7)]);
var state_62789__$1 = state_62789;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62789__$1,(11),out,inst_62771);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_62805 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62805[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_62805[(1)] = (1));

return statearr_62805;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_62789){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_62789);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e62806){var ex__61343__auto__ = e62806;
var statearr_62807_63900 = state_62789;
(statearr_62807_63900[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_62789[(4)]))){
var statearr_62808_63901 = state_62789;
(statearr_62808_63901[(1)] = cljs.core.first((state_62789[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63902 = state_62789;
state_62789 = G__63902;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_62789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_62789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_62809 = f__61426__auto__();
(statearr_62809[(6)] = c__61425__auto___63882);

return statearr_62809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62811 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62811 = (function (f,ch,meta62812){
this.f = f;
this.ch = ch;
this.meta62812 = meta62812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62813,meta62812__$1){
var self__ = this;
var _62813__$1 = this;
return (new cljs.core.async.t_cljs$core$async62811(self__.f,self__.ch,meta62812__$1));
}));

(cljs.core.async.t_cljs$core$async62811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62813){
var self__ = this;
var _62813__$1 = this;
return self__.meta62812;
}));

(cljs.core.async.t_cljs$core$async62811.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62811.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62811.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62811.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62811.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62814 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62814 = (function (f,ch,meta62812,_,fn1,meta62815){
this.f = f;
this.ch = ch;
this.meta62812 = meta62812;
this._ = _;
this.fn1 = fn1;
this.meta62815 = meta62815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62816,meta62815__$1){
var self__ = this;
var _62816__$1 = this;
return (new cljs.core.async.t_cljs$core$async62814(self__.f,self__.ch,self__.meta62812,self__._,self__.fn1,meta62815__$1));
}));

(cljs.core.async.t_cljs$core$async62814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62816){
var self__ = this;
var _62816__$1 = this;
return self__.meta62815;
}));

(cljs.core.async.t_cljs$core$async62814.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62814.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async62814.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62814.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__62810_SHARP_){
var G__62817 = (((p1__62810_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__62810_SHARP_) : self__.f.call(null,p1__62810_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__62817) : f1.call(null,G__62817));
});
}));

(cljs.core.async.t_cljs$core$async62814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62812","meta62812",-365824678,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async62811","cljs.core.async/t_cljs$core$async62811",1951766548,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta62815","meta62815",-895521370,null)], null);
}));

(cljs.core.async.t_cljs$core$async62814.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62814");

(cljs.core.async.t_cljs$core$async62814.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62814");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62814.
 */
cljs.core.async.__GT_t_cljs$core$async62814 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async62814(f__$1,ch__$1,meta62812__$1,___$2,fn1__$1,meta62815){
return (new cljs.core.async.t_cljs$core$async62814(f__$1,ch__$1,meta62812__$1,___$2,fn1__$1,meta62815));
});

}

return (new cljs.core.async.t_cljs$core$async62814(self__.f,self__.ch,self__.meta62812,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__62818 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__62818) : self__.f.call(null,G__62818));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async62811.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62811.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async62811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62812","meta62812",-365824678,null)], null);
}));

(cljs.core.async.t_cljs$core$async62811.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62811");

(cljs.core.async.t_cljs$core$async62811.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62811");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62811.
 */
cljs.core.async.__GT_t_cljs$core$async62811 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async62811(f__$1,ch__$1,meta62812){
return (new cljs.core.async.t_cljs$core$async62811(f__$1,ch__$1,meta62812));
});

}

return (new cljs.core.async.t_cljs$core$async62811(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62819 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62819 = (function (f,ch,meta62820){
this.f = f;
this.ch = ch;
this.meta62820 = meta62820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62821,meta62820__$1){
var self__ = this;
var _62821__$1 = this;
return (new cljs.core.async.t_cljs$core$async62819(self__.f,self__.ch,meta62820__$1));
}));

(cljs.core.async.t_cljs$core$async62819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62821){
var self__ = this;
var _62821__$1 = this;
return self__.meta62820;
}));

(cljs.core.async.t_cljs$core$async62819.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62819.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62819.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62819.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async62819.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62819.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async62819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62820","meta62820",-22158445,null)], null);
}));

(cljs.core.async.t_cljs$core$async62819.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62819");

(cljs.core.async.t_cljs$core$async62819.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62819");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62819.
 */
cljs.core.async.__GT_t_cljs$core$async62819 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async62819(f__$1,ch__$1,meta62820){
return (new cljs.core.async.t_cljs$core$async62819(f__$1,ch__$1,meta62820));
});

}

return (new cljs.core.async.t_cljs$core$async62819(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62822 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62822 = (function (p,ch,meta62823){
this.p = p;
this.ch = ch;
this.meta62823 = meta62823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62824,meta62823__$1){
var self__ = this;
var _62824__$1 = this;
return (new cljs.core.async.t_cljs$core$async62822(self__.p,self__.ch,meta62823__$1));
}));

(cljs.core.async.t_cljs$core$async62822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62824){
var self__ = this;
var _62824__$1 = this;
return self__.meta62823;
}));

(cljs.core.async.t_cljs$core$async62822.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62822.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62822.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62822.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62822.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async62822.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62822.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async62822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62823","meta62823",1349197468,null)], null);
}));

(cljs.core.async.t_cljs$core$async62822.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62822");

(cljs.core.async.t_cljs$core$async62822.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62822");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62822.
 */
cljs.core.async.__GT_t_cljs$core$async62822 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async62822(p__$1,ch__$1,meta62823){
return (new cljs.core.async.t_cljs$core$async62822(p__$1,ch__$1,meta62823));
});

}

return (new cljs.core.async.t_cljs$core$async62822(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__62827 = arguments.length;
switch (G__62827) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61425__auto___63924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_62850){
var state_val_62851 = (state_62850[(1)]);
if((state_val_62851 === (7))){
var inst_62846 = (state_62850[(2)]);
var state_62850__$1 = state_62850;
var statearr_62852_63925 = state_62850__$1;
(statearr_62852_63925[(2)] = inst_62846);

(statearr_62852_63925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62851 === (1))){
var state_62850__$1 = state_62850;
var statearr_62853_63926 = state_62850__$1;
(statearr_62853_63926[(2)] = null);

(statearr_62853_63926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62851 === (4))){
var inst_62832 = (state_62850[(7)]);
var inst_62832__$1 = (state_62850[(2)]);
var inst_62833 = (inst_62832__$1 == null);
var state_62850__$1 = (function (){var statearr_62856 = state_62850;
(statearr_62856[(7)] = inst_62832__$1);

return statearr_62856;
})();
if(cljs.core.truth_(inst_62833)){
var statearr_62857_63928 = state_62850__$1;
(statearr_62857_63928[(1)] = (5));

} else {
var statearr_62858_63929 = state_62850__$1;
(statearr_62858_63929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62851 === (6))){
var inst_62832 = (state_62850[(7)]);
var inst_62837 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_62832) : p.call(null,inst_62832));
var state_62850__$1 = state_62850;
if(cljs.core.truth_(inst_62837)){
var statearr_62859_63936 = state_62850__$1;
(statearr_62859_63936[(1)] = (8));

} else {
var statearr_62860_63937 = state_62850__$1;
(statearr_62860_63937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62851 === (3))){
var inst_62848 = (state_62850[(2)]);
var state_62850__$1 = state_62850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62850__$1,inst_62848);
} else {
if((state_val_62851 === (2))){
var state_62850__$1 = state_62850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62850__$1,(4),ch);
} else {
if((state_val_62851 === (11))){
var inst_62840 = (state_62850[(2)]);
var state_62850__$1 = state_62850;
var statearr_62861_63938 = state_62850__$1;
(statearr_62861_63938[(2)] = inst_62840);

(statearr_62861_63938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62851 === (9))){
var state_62850__$1 = state_62850;
var statearr_62863_63940 = state_62850__$1;
(statearr_62863_63940[(2)] = null);

(statearr_62863_63940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62851 === (5))){
var inst_62835 = cljs.core.async.close_BANG_(out);
var state_62850__$1 = state_62850;
var statearr_62865_63941 = state_62850__$1;
(statearr_62865_63941[(2)] = inst_62835);

(statearr_62865_63941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62851 === (10))){
var inst_62843 = (state_62850[(2)]);
var state_62850__$1 = (function (){var statearr_62866 = state_62850;
(statearr_62866[(8)] = inst_62843);

return statearr_62866;
})();
var statearr_62867_63942 = state_62850__$1;
(statearr_62867_63942[(2)] = null);

(statearr_62867_63942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62851 === (8))){
var inst_62832 = (state_62850[(7)]);
var state_62850__$1 = state_62850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62850__$1,(11),out,inst_62832);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_62868 = [null,null,null,null,null,null,null,null,null];
(statearr_62868[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_62868[(1)] = (1));

return statearr_62868;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_62850){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_62850);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e62869){var ex__61343__auto__ = e62869;
var statearr_62870_63944 = state_62850;
(statearr_62870_63944[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_62850[(4)]))){
var statearr_62871_63945 = state_62850;
(statearr_62871_63945[(1)] = cljs.core.first((state_62850[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63947 = state_62850;
state_62850 = G__63947;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_62850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_62850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_62872 = f__61426__auto__();
(statearr_62872[(6)] = c__61425__auto___63924);

return statearr_62872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__62874 = arguments.length;
switch (G__62874) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__61425__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_62939){
var state_val_62940 = (state_62939[(1)]);
if((state_val_62940 === (7))){
var inst_62934 = (state_62939[(2)]);
var state_62939__$1 = state_62939;
var statearr_62942_63950 = state_62939__$1;
(statearr_62942_63950[(2)] = inst_62934);

(statearr_62942_63950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (20))){
var inst_62903 = (state_62939[(7)]);
var inst_62915 = (state_62939[(2)]);
var inst_62916 = cljs.core.next(inst_62903);
var inst_62889 = inst_62916;
var inst_62890 = null;
var inst_62891 = (0);
var inst_62892 = (0);
var state_62939__$1 = (function (){var statearr_62944 = state_62939;
(statearr_62944[(8)] = inst_62889);

(statearr_62944[(9)] = inst_62891);

(statearr_62944[(10)] = inst_62890);

(statearr_62944[(11)] = inst_62915);

(statearr_62944[(12)] = inst_62892);

return statearr_62944;
})();
var statearr_62945_63951 = state_62939__$1;
(statearr_62945_63951[(2)] = null);

(statearr_62945_63951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (1))){
var state_62939__$1 = state_62939;
var statearr_62947_63952 = state_62939__$1;
(statearr_62947_63952[(2)] = null);

(statearr_62947_63952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (4))){
var inst_62878 = (state_62939[(13)]);
var inst_62878__$1 = (state_62939[(2)]);
var inst_62879 = (inst_62878__$1 == null);
var state_62939__$1 = (function (){var statearr_62948 = state_62939;
(statearr_62948[(13)] = inst_62878__$1);

return statearr_62948;
})();
if(cljs.core.truth_(inst_62879)){
var statearr_62950_63953 = state_62939__$1;
(statearr_62950_63953[(1)] = (5));

} else {
var statearr_62951_63954 = state_62939__$1;
(statearr_62951_63954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (15))){
var state_62939__$1 = state_62939;
var statearr_62955_63955 = state_62939__$1;
(statearr_62955_63955[(2)] = null);

(statearr_62955_63955[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (21))){
var state_62939__$1 = state_62939;
var statearr_62956_63956 = state_62939__$1;
(statearr_62956_63956[(2)] = null);

(statearr_62956_63956[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (13))){
var inst_62889 = (state_62939[(8)]);
var inst_62891 = (state_62939[(9)]);
var inst_62890 = (state_62939[(10)]);
var inst_62892 = (state_62939[(12)]);
var inst_62899 = (state_62939[(2)]);
var inst_62900 = (inst_62892 + (1));
var tmp62952 = inst_62889;
var tmp62953 = inst_62891;
var tmp62954 = inst_62890;
var inst_62889__$1 = tmp62952;
var inst_62890__$1 = tmp62954;
var inst_62891__$1 = tmp62953;
var inst_62892__$1 = inst_62900;
var state_62939__$1 = (function (){var statearr_62957 = state_62939;
(statearr_62957[(8)] = inst_62889__$1);

(statearr_62957[(9)] = inst_62891__$1);

(statearr_62957[(10)] = inst_62890__$1);

(statearr_62957[(12)] = inst_62892__$1);

(statearr_62957[(14)] = inst_62899);

return statearr_62957;
})();
var statearr_62958_63957 = state_62939__$1;
(statearr_62958_63957[(2)] = null);

(statearr_62958_63957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (22))){
var state_62939__$1 = state_62939;
var statearr_62959_63958 = state_62939__$1;
(statearr_62959_63958[(2)] = null);

(statearr_62959_63958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (6))){
var inst_62878 = (state_62939[(13)]);
var inst_62887 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_62878) : f.call(null,inst_62878));
var inst_62888 = cljs.core.seq(inst_62887);
var inst_62889 = inst_62888;
var inst_62890 = null;
var inst_62891 = (0);
var inst_62892 = (0);
var state_62939__$1 = (function (){var statearr_62960 = state_62939;
(statearr_62960[(8)] = inst_62889);

(statearr_62960[(9)] = inst_62891);

(statearr_62960[(10)] = inst_62890);

(statearr_62960[(12)] = inst_62892);

return statearr_62960;
})();
var statearr_62961_63959 = state_62939__$1;
(statearr_62961_63959[(2)] = null);

(statearr_62961_63959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (17))){
var inst_62903 = (state_62939[(7)]);
var inst_62907 = cljs.core.chunk_first(inst_62903);
var inst_62908 = cljs.core.chunk_rest(inst_62903);
var inst_62910 = cljs.core.count(inst_62907);
var inst_62889 = inst_62908;
var inst_62890 = inst_62907;
var inst_62891 = inst_62910;
var inst_62892 = (0);
var state_62939__$1 = (function (){var statearr_62962 = state_62939;
(statearr_62962[(8)] = inst_62889);

(statearr_62962[(9)] = inst_62891);

(statearr_62962[(10)] = inst_62890);

(statearr_62962[(12)] = inst_62892);

return statearr_62962;
})();
var statearr_62963_63960 = state_62939__$1;
(statearr_62963_63960[(2)] = null);

(statearr_62963_63960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (3))){
var inst_62936 = (state_62939[(2)]);
var state_62939__$1 = state_62939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62939__$1,inst_62936);
} else {
if((state_val_62940 === (12))){
var inst_62924 = (state_62939[(2)]);
var state_62939__$1 = state_62939;
var statearr_62964_63961 = state_62939__$1;
(statearr_62964_63961[(2)] = inst_62924);

(statearr_62964_63961[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (2))){
var state_62939__$1 = state_62939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62939__$1,(4),in$);
} else {
if((state_val_62940 === (23))){
var inst_62932 = (state_62939[(2)]);
var state_62939__$1 = state_62939;
var statearr_62965_63962 = state_62939__$1;
(statearr_62965_63962[(2)] = inst_62932);

(statearr_62965_63962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (19))){
var inst_62919 = (state_62939[(2)]);
var state_62939__$1 = state_62939;
var statearr_62966_63963 = state_62939__$1;
(statearr_62966_63963[(2)] = inst_62919);

(statearr_62966_63963[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (11))){
var inst_62889 = (state_62939[(8)]);
var inst_62903 = (state_62939[(7)]);
var inst_62903__$1 = cljs.core.seq(inst_62889);
var state_62939__$1 = (function (){var statearr_62967 = state_62939;
(statearr_62967[(7)] = inst_62903__$1);

return statearr_62967;
})();
if(inst_62903__$1){
var statearr_62968_63964 = state_62939__$1;
(statearr_62968_63964[(1)] = (14));

} else {
var statearr_62969_63965 = state_62939__$1;
(statearr_62969_63965[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (9))){
var inst_62926 = (state_62939[(2)]);
var inst_62927 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_62939__$1 = (function (){var statearr_62970 = state_62939;
(statearr_62970[(15)] = inst_62926);

return statearr_62970;
})();
if(cljs.core.truth_(inst_62927)){
var statearr_62971_63966 = state_62939__$1;
(statearr_62971_63966[(1)] = (21));

} else {
var statearr_62972_63967 = state_62939__$1;
(statearr_62972_63967[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (5))){
var inst_62881 = cljs.core.async.close_BANG_(out);
var state_62939__$1 = state_62939;
var statearr_62973_63968 = state_62939__$1;
(statearr_62973_63968[(2)] = inst_62881);

(statearr_62973_63968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (14))){
var inst_62903 = (state_62939[(7)]);
var inst_62905 = cljs.core.chunked_seq_QMARK_(inst_62903);
var state_62939__$1 = state_62939;
if(inst_62905){
var statearr_62974_63971 = state_62939__$1;
(statearr_62974_63971[(1)] = (17));

} else {
var statearr_62975_63972 = state_62939__$1;
(statearr_62975_63972[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (16))){
var inst_62922 = (state_62939[(2)]);
var state_62939__$1 = state_62939;
var statearr_62977_63979 = state_62939__$1;
(statearr_62977_63979[(2)] = inst_62922);

(statearr_62977_63979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (10))){
var inst_62890 = (state_62939[(10)]);
var inst_62892 = (state_62939[(12)]);
var inst_62897 = cljs.core._nth(inst_62890,inst_62892);
var state_62939__$1 = state_62939;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62939__$1,(13),out,inst_62897);
} else {
if((state_val_62940 === (18))){
var inst_62903 = (state_62939[(7)]);
var inst_62913 = cljs.core.first(inst_62903);
var state_62939__$1 = state_62939;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62939__$1,(20),out,inst_62913);
} else {
if((state_val_62940 === (8))){
var inst_62891 = (state_62939[(9)]);
var inst_62892 = (state_62939[(12)]);
var inst_62894 = (inst_62892 < inst_62891);
var inst_62895 = inst_62894;
var state_62939__$1 = state_62939;
if(cljs.core.truth_(inst_62895)){
var statearr_62979_63980 = state_62939__$1;
(statearr_62979_63980[(1)] = (10));

} else {
var statearr_62980_63981 = state_62939__$1;
(statearr_62980_63981[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__61340__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__61340__auto____0 = (function (){
var statearr_62982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62982[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__61340__auto__);

(statearr_62982[(1)] = (1));

return statearr_62982;
});
var cljs$core$async$mapcat_STAR__$_state_machine__61340__auto____1 = (function (state_62939){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_62939);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e62983){var ex__61343__auto__ = e62983;
var statearr_62984_63982 = state_62939;
(statearr_62984_63982[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_62939[(4)]))){
var statearr_62985_63983 = state_62939;
(statearr_62985_63983[(1)] = cljs.core.first((state_62939[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63984 = state_62939;
state_62939 = G__63984;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__61340__auto__ = function(state_62939){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__61340__auto____1.call(this,state_62939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__61340__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__61340__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_62988 = f__61426__auto__();
(statearr_62988[(6)] = c__61425__auto__);

return statearr_62988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));

return c__61425__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__62990 = arguments.length;
switch (G__62990) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__62992 = arguments.length;
switch (G__62992) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__62994 = arguments.length;
switch (G__62994) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61425__auto___64001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_63018){
var state_val_63019 = (state_63018[(1)]);
if((state_val_63019 === (7))){
var inst_63013 = (state_63018[(2)]);
var state_63018__$1 = state_63018;
var statearr_63020_64002 = state_63018__$1;
(statearr_63020_64002[(2)] = inst_63013);

(statearr_63020_64002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63019 === (1))){
var inst_62995 = null;
var state_63018__$1 = (function (){var statearr_63021 = state_63018;
(statearr_63021[(7)] = inst_62995);

return statearr_63021;
})();
var statearr_63022_64003 = state_63018__$1;
(statearr_63022_64003[(2)] = null);

(statearr_63022_64003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63019 === (4))){
var inst_62998 = (state_63018[(8)]);
var inst_62998__$1 = (state_63018[(2)]);
var inst_62999 = (inst_62998__$1 == null);
var inst_63000 = cljs.core.not(inst_62999);
var state_63018__$1 = (function (){var statearr_63023 = state_63018;
(statearr_63023[(8)] = inst_62998__$1);

return statearr_63023;
})();
if(inst_63000){
var statearr_63024_64004 = state_63018__$1;
(statearr_63024_64004[(1)] = (5));

} else {
var statearr_63025_64005 = state_63018__$1;
(statearr_63025_64005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63019 === (6))){
var state_63018__$1 = state_63018;
var statearr_63026_64006 = state_63018__$1;
(statearr_63026_64006[(2)] = null);

(statearr_63026_64006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63019 === (3))){
var inst_63015 = (state_63018[(2)]);
var inst_63016 = cljs.core.async.close_BANG_(out);
var state_63018__$1 = (function (){var statearr_63027 = state_63018;
(statearr_63027[(9)] = inst_63015);

return statearr_63027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63018__$1,inst_63016);
} else {
if((state_val_63019 === (2))){
var state_63018__$1 = state_63018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63018__$1,(4),ch);
} else {
if((state_val_63019 === (11))){
var inst_62998 = (state_63018[(8)]);
var inst_63007 = (state_63018[(2)]);
var inst_62995 = inst_62998;
var state_63018__$1 = (function (){var statearr_63028 = state_63018;
(statearr_63028[(10)] = inst_63007);

(statearr_63028[(7)] = inst_62995);

return statearr_63028;
})();
var statearr_63029_64007 = state_63018__$1;
(statearr_63029_64007[(2)] = null);

(statearr_63029_64007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63019 === (9))){
var inst_62998 = (state_63018[(8)]);
var state_63018__$1 = state_63018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63018__$1,(11),out,inst_62998);
} else {
if((state_val_63019 === (5))){
var inst_62995 = (state_63018[(7)]);
var inst_62998 = (state_63018[(8)]);
var inst_63002 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62998,inst_62995);
var state_63018__$1 = state_63018;
if(inst_63002){
var statearr_63031_64008 = state_63018__$1;
(statearr_63031_64008[(1)] = (8));

} else {
var statearr_63032_64009 = state_63018__$1;
(statearr_63032_64009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63019 === (10))){
var inst_63010 = (state_63018[(2)]);
var state_63018__$1 = state_63018;
var statearr_63033_64010 = state_63018__$1;
(statearr_63033_64010[(2)] = inst_63010);

(statearr_63033_64010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63019 === (8))){
var inst_62995 = (state_63018[(7)]);
var tmp63030 = inst_62995;
var inst_62995__$1 = tmp63030;
var state_63018__$1 = (function (){var statearr_63034 = state_63018;
(statearr_63034[(7)] = inst_62995__$1);

return statearr_63034;
})();
var statearr_63035_64011 = state_63018__$1;
(statearr_63035_64011[(2)] = null);

(statearr_63035_64011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_63036 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63036[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_63036[(1)] = (1));

return statearr_63036;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_63018){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_63018);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e63037){var ex__61343__auto__ = e63037;
var statearr_63038_64012 = state_63018;
(statearr_63038_64012[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_63018[(4)]))){
var statearr_63039_64013 = state_63018;
(statearr_63039_64013[(1)] = cljs.core.first((state_63018[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64014 = state_63018;
state_63018 = G__64014;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_63018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_63018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_63040 = f__61426__auto__();
(statearr_63040[(6)] = c__61425__auto___64001);

return statearr_63040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__63042 = arguments.length;
switch (G__63042) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61425__auto___64016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_63080){
var state_val_63081 = (state_63080[(1)]);
if((state_val_63081 === (7))){
var inst_63076 = (state_63080[(2)]);
var state_63080__$1 = state_63080;
var statearr_63082_64017 = state_63080__$1;
(statearr_63082_64017[(2)] = inst_63076);

(statearr_63082_64017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (1))){
var inst_63043 = (new Array(n));
var inst_63044 = inst_63043;
var inst_63045 = (0);
var state_63080__$1 = (function (){var statearr_63083 = state_63080;
(statearr_63083[(7)] = inst_63045);

(statearr_63083[(8)] = inst_63044);

return statearr_63083;
})();
var statearr_63084_64018 = state_63080__$1;
(statearr_63084_64018[(2)] = null);

(statearr_63084_64018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (4))){
var inst_63048 = (state_63080[(9)]);
var inst_63048__$1 = (state_63080[(2)]);
var inst_63049 = (inst_63048__$1 == null);
var inst_63050 = cljs.core.not(inst_63049);
var state_63080__$1 = (function (){var statearr_63085 = state_63080;
(statearr_63085[(9)] = inst_63048__$1);

return statearr_63085;
})();
if(inst_63050){
var statearr_63086_64019 = state_63080__$1;
(statearr_63086_64019[(1)] = (5));

} else {
var statearr_63087_64020 = state_63080__$1;
(statearr_63087_64020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (15))){
var inst_63070 = (state_63080[(2)]);
var state_63080__$1 = state_63080;
var statearr_63088_64021 = state_63080__$1;
(statearr_63088_64021[(2)] = inst_63070);

(statearr_63088_64021[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (13))){
var state_63080__$1 = state_63080;
var statearr_63089_64022 = state_63080__$1;
(statearr_63089_64022[(2)] = null);

(statearr_63089_64022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (6))){
var inst_63045 = (state_63080[(7)]);
var inst_63066 = (inst_63045 > (0));
var state_63080__$1 = state_63080;
if(cljs.core.truth_(inst_63066)){
var statearr_63090_64023 = state_63080__$1;
(statearr_63090_64023[(1)] = (12));

} else {
var statearr_63091_64024 = state_63080__$1;
(statearr_63091_64024[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (3))){
var inst_63078 = (state_63080[(2)]);
var state_63080__$1 = state_63080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63080__$1,inst_63078);
} else {
if((state_val_63081 === (12))){
var inst_63044 = (state_63080[(8)]);
var inst_63068 = cljs.core.vec(inst_63044);
var state_63080__$1 = state_63080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63080__$1,(15),out,inst_63068);
} else {
if((state_val_63081 === (2))){
var state_63080__$1 = state_63080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63080__$1,(4),ch);
} else {
if((state_val_63081 === (11))){
var inst_63060 = (state_63080[(2)]);
var inst_63061 = (new Array(n));
var inst_63044 = inst_63061;
var inst_63045 = (0);
var state_63080__$1 = (function (){var statearr_63092 = state_63080;
(statearr_63092[(10)] = inst_63060);

(statearr_63092[(7)] = inst_63045);

(statearr_63092[(8)] = inst_63044);

return statearr_63092;
})();
var statearr_63093_64026 = state_63080__$1;
(statearr_63093_64026[(2)] = null);

(statearr_63093_64026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (9))){
var inst_63044 = (state_63080[(8)]);
var inst_63058 = cljs.core.vec(inst_63044);
var state_63080__$1 = state_63080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63080__$1,(11),out,inst_63058);
} else {
if((state_val_63081 === (5))){
var inst_63053 = (state_63080[(11)]);
var inst_63045 = (state_63080[(7)]);
var inst_63044 = (state_63080[(8)]);
var inst_63048 = (state_63080[(9)]);
var inst_63052 = (inst_63044[inst_63045] = inst_63048);
var inst_63053__$1 = (inst_63045 + (1));
var inst_63054 = (inst_63053__$1 < n);
var state_63080__$1 = (function (){var statearr_63094 = state_63080;
(statearr_63094[(11)] = inst_63053__$1);

(statearr_63094[(12)] = inst_63052);

return statearr_63094;
})();
if(cljs.core.truth_(inst_63054)){
var statearr_63095_64027 = state_63080__$1;
(statearr_63095_64027[(1)] = (8));

} else {
var statearr_63096_64028 = state_63080__$1;
(statearr_63096_64028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (14))){
var inst_63073 = (state_63080[(2)]);
var inst_63074 = cljs.core.async.close_BANG_(out);
var state_63080__$1 = (function (){var statearr_63098 = state_63080;
(statearr_63098[(13)] = inst_63073);

return statearr_63098;
})();
var statearr_63099_64031 = state_63080__$1;
(statearr_63099_64031[(2)] = inst_63074);

(statearr_63099_64031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (10))){
var inst_63064 = (state_63080[(2)]);
var state_63080__$1 = state_63080;
var statearr_63100_64032 = state_63080__$1;
(statearr_63100_64032[(2)] = inst_63064);

(statearr_63100_64032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63081 === (8))){
var inst_63053 = (state_63080[(11)]);
var inst_63044 = (state_63080[(8)]);
var tmp63097 = inst_63044;
var inst_63044__$1 = tmp63097;
var inst_63045 = inst_63053;
var state_63080__$1 = (function (){var statearr_63101 = state_63080;
(statearr_63101[(7)] = inst_63045);

(statearr_63101[(8)] = inst_63044__$1);

return statearr_63101;
})();
var statearr_63102_64033 = state_63080__$1;
(statearr_63102_64033[(2)] = null);

(statearr_63102_64033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_63103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63103[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_63103[(1)] = (1));

return statearr_63103;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_63080){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_63080);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e63104){var ex__61343__auto__ = e63104;
var statearr_63105_64034 = state_63080;
(statearr_63105_64034[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_63080[(4)]))){
var statearr_63106_64035 = state_63080;
(statearr_63106_64035[(1)] = cljs.core.first((state_63080[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64038 = state_63080;
state_63080 = G__64038;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_63080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_63080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_63107 = f__61426__auto__();
(statearr_63107[(6)] = c__61425__auto___64016);

return statearr_63107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__63109 = arguments.length;
switch (G__63109) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61425__auto___64040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61426__auto__ = (function (){var switch__61339__auto__ = (function (state_63155){
var state_val_63156 = (state_63155[(1)]);
if((state_val_63156 === (7))){
var inst_63151 = (state_63155[(2)]);
var state_63155__$1 = state_63155;
var statearr_63157_64041 = state_63155__$1;
(statearr_63157_64041[(2)] = inst_63151);

(statearr_63157_64041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (1))){
var inst_63110 = [];
var inst_63111 = inst_63110;
var inst_63112 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_63155__$1 = (function (){var statearr_63158 = state_63155;
(statearr_63158[(7)] = inst_63112);

(statearr_63158[(8)] = inst_63111);

return statearr_63158;
})();
var statearr_63159_64042 = state_63155__$1;
(statearr_63159_64042[(2)] = null);

(statearr_63159_64042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (4))){
var inst_63115 = (state_63155[(9)]);
var inst_63115__$1 = (state_63155[(2)]);
var inst_63116 = (inst_63115__$1 == null);
var inst_63117 = cljs.core.not(inst_63116);
var state_63155__$1 = (function (){var statearr_63160 = state_63155;
(statearr_63160[(9)] = inst_63115__$1);

return statearr_63160;
})();
if(inst_63117){
var statearr_63161_64043 = state_63155__$1;
(statearr_63161_64043[(1)] = (5));

} else {
var statearr_63162_64044 = state_63155__$1;
(statearr_63162_64044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (15))){
var inst_63111 = (state_63155[(8)]);
var inst_63143 = cljs.core.vec(inst_63111);
var state_63155__$1 = state_63155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63155__$1,(18),out,inst_63143);
} else {
if((state_val_63156 === (13))){
var inst_63138 = (state_63155[(2)]);
var state_63155__$1 = state_63155;
var statearr_63163_64047 = state_63155__$1;
(statearr_63163_64047[(2)] = inst_63138);

(statearr_63163_64047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (6))){
var inst_63111 = (state_63155[(8)]);
var inst_63140 = inst_63111.length;
var inst_63141 = (inst_63140 > (0));
var state_63155__$1 = state_63155;
if(cljs.core.truth_(inst_63141)){
var statearr_63164_64053 = state_63155__$1;
(statearr_63164_64053[(1)] = (15));

} else {
var statearr_63165_64055 = state_63155__$1;
(statearr_63165_64055[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (17))){
var inst_63148 = (state_63155[(2)]);
var inst_63149 = cljs.core.async.close_BANG_(out);
var state_63155__$1 = (function (){var statearr_63166 = state_63155;
(statearr_63166[(10)] = inst_63148);

return statearr_63166;
})();
var statearr_63167_64056 = state_63155__$1;
(statearr_63167_64056[(2)] = inst_63149);

(statearr_63167_64056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (3))){
var inst_63153 = (state_63155[(2)]);
var state_63155__$1 = state_63155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63155__$1,inst_63153);
} else {
if((state_val_63156 === (12))){
var inst_63111 = (state_63155[(8)]);
var inst_63131 = cljs.core.vec(inst_63111);
var state_63155__$1 = state_63155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63155__$1,(14),out,inst_63131);
} else {
if((state_val_63156 === (2))){
var state_63155__$1 = state_63155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63155__$1,(4),ch);
} else {
if((state_val_63156 === (11))){
var inst_63119 = (state_63155[(11)]);
var inst_63111 = (state_63155[(8)]);
var inst_63115 = (state_63155[(9)]);
var inst_63128 = inst_63111.push(inst_63115);
var tmp63168 = inst_63111;
var inst_63111__$1 = tmp63168;
var inst_63112 = inst_63119;
var state_63155__$1 = (function (){var statearr_63169 = state_63155;
(statearr_63169[(7)] = inst_63112);

(statearr_63169[(12)] = inst_63128);

(statearr_63169[(8)] = inst_63111__$1);

return statearr_63169;
})();
var statearr_63170_64057 = state_63155__$1;
(statearr_63170_64057[(2)] = null);

(statearr_63170_64057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (9))){
var inst_63112 = (state_63155[(7)]);
var inst_63124 = cljs.core.keyword_identical_QMARK_(inst_63112,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_63155__$1 = state_63155;
var statearr_63171_64058 = state_63155__$1;
(statearr_63171_64058[(2)] = inst_63124);

(statearr_63171_64058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (5))){
var inst_63112 = (state_63155[(7)]);
var inst_63119 = (state_63155[(11)]);
var inst_63120 = (state_63155[(13)]);
var inst_63115 = (state_63155[(9)]);
var inst_63119__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_63115) : f.call(null,inst_63115));
var inst_63120__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63119__$1,inst_63112);
var state_63155__$1 = (function (){var statearr_63174 = state_63155;
(statearr_63174[(11)] = inst_63119__$1);

(statearr_63174[(13)] = inst_63120__$1);

return statearr_63174;
})();
if(inst_63120__$1){
var statearr_63175_64059 = state_63155__$1;
(statearr_63175_64059[(1)] = (8));

} else {
var statearr_63176_64060 = state_63155__$1;
(statearr_63176_64060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (14))){
var inst_63119 = (state_63155[(11)]);
var inst_63115 = (state_63155[(9)]);
var inst_63133 = (state_63155[(2)]);
var inst_63134 = [];
var inst_63135 = inst_63134.push(inst_63115);
var inst_63111 = inst_63134;
var inst_63112 = inst_63119;
var state_63155__$1 = (function (){var statearr_63177 = state_63155;
(statearr_63177[(7)] = inst_63112);

(statearr_63177[(8)] = inst_63111);

(statearr_63177[(14)] = inst_63133);

(statearr_63177[(15)] = inst_63135);

return statearr_63177;
})();
var statearr_63178_64061 = state_63155__$1;
(statearr_63178_64061[(2)] = null);

(statearr_63178_64061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (16))){
var state_63155__$1 = state_63155;
var statearr_63179_64062 = state_63155__$1;
(statearr_63179_64062[(2)] = null);

(statearr_63179_64062[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (10))){
var inst_63126 = (state_63155[(2)]);
var state_63155__$1 = state_63155;
if(cljs.core.truth_(inst_63126)){
var statearr_63180_64063 = state_63155__$1;
(statearr_63180_64063[(1)] = (11));

} else {
var statearr_63181_64064 = state_63155__$1;
(statearr_63181_64064[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (18))){
var inst_63145 = (state_63155[(2)]);
var state_63155__$1 = state_63155;
var statearr_63182_64065 = state_63155__$1;
(statearr_63182_64065[(2)] = inst_63145);

(statearr_63182_64065[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63156 === (8))){
var inst_63120 = (state_63155[(13)]);
var state_63155__$1 = state_63155;
var statearr_63183_64066 = state_63155__$1;
(statearr_63183_64066[(2)] = inst_63120);

(statearr_63183_64066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61340__auto__ = null;
var cljs$core$async$state_machine__61340__auto____0 = (function (){
var statearr_63184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63184[(0)] = cljs$core$async$state_machine__61340__auto__);

(statearr_63184[(1)] = (1));

return statearr_63184;
});
var cljs$core$async$state_machine__61340__auto____1 = (function (state_63155){
while(true){
var ret_value__61341__auto__ = (function (){try{while(true){
var result__61342__auto__ = switch__61339__auto__(state_63155);
if(cljs.core.keyword_identical_QMARK_(result__61342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61342__auto__;
}
break;
}
}catch (e63185){var ex__61343__auto__ = e63185;
var statearr_63186_64067 = state_63155;
(statearr_63186_64067[(2)] = ex__61343__auto__);


if(cljs.core.seq((state_63155[(4)]))){
var statearr_63187_64068 = state_63155;
(statearr_63187_64068[(1)] = cljs.core.first((state_63155[(4)])));

} else {
throw ex__61343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64069 = state_63155;
state_63155 = G__64069;
continue;
} else {
return ret_value__61341__auto__;
}
break;
}
});
cljs$core$async$state_machine__61340__auto__ = function(state_63155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61340__auto____1.call(this,state_63155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61340__auto____0;
cljs$core$async$state_machine__61340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61340__auto____1;
return cljs$core$async$state_machine__61340__auto__;
})()
})();
var state__61427__auto__ = (function (){var statearr_63188 = f__61426__auto__();
(statearr_63188[(6)] = c__61425__auto___64040);

return statearr_63188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61427__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

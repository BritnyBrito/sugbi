goog.provide('re_frisk.stat');
re_frisk.stat.assoc_map = (function re_frisk$stat$assoc_map(acc,key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cnt","cnt",283978798),(0),new cljs.core.Keyword(null,"ms","ms",-1152709733),(0)], null));
});
re_frisk.stat.get_re_frame_handlers = (function re_frisk$stat$get_re_frame_handlers(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fx","fx",-1237829572).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),new cljs.core.Keyword(null,"db","db",993250759)], 0)))),new cljs.core.Keyword(null,"cofx","cofx",2013202907),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cofx","cofx",2013202907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)),new cljs.core.Keyword(null,"db","db",993250759)))),new cljs.core.Keyword(null,"event","event",301435442),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)))),new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler))))], null);
});
re_frisk.stat.init_stat = (function re_frisk$stat$init_stat(re_frame_data){
if(cljs.core.empty_QMARK_(cljs.core.deref(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data)))){
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),re_frisk.stat.get_re_frame_handlers());
} else {
return null;
}
});
re_frisk.stat.update_trace_stat = (function re_frisk$stat$update_trace_stat(re_frame_data,traces){
var seq__64416 = cljs.core.seq(traces);
var chunk__64417 = null;
var count__64418 = (0);
var i__64419 = (0);
while(true){
if((i__64419 < count__64418)){
var map__64462 = chunk__64417.cljs$core$IIndexed$_nth$arity$2(null,i__64419);
var map__64462__$1 = cljs.core.__destructure_map(map__64462);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64462__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64462__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64462__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64462__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64462__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__64465_64542 = cljs.core.seq(cljs.core.keys(effects));
var chunk__64466_64543 = null;
var count__64467_64544 = (0);
var i__64468_64545 = (0);
while(true){
if((i__64468_64545 < count__64467_64544)){
var key_64546 = chunk__64466_64543.cljs$core$IIndexed$_nth$arity$2(null,i__64468_64545);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_64546,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__64547 = seq__64465_64542;
var G__64548 = chunk__64466_64543;
var G__64549 = count__64467_64544;
var G__64550 = (i__64468_64545 + (1));
seq__64465_64542 = G__64547;
chunk__64466_64543 = G__64548;
count__64467_64544 = G__64549;
i__64468_64545 = G__64550;
continue;
} else {
var temp__5804__auto___64551 = cljs.core.seq(seq__64465_64542);
if(temp__5804__auto___64551){
var seq__64465_64552__$1 = temp__5804__auto___64551;
if(cljs.core.chunked_seq_QMARK_(seq__64465_64552__$1)){
var c__5568__auto___64553 = cljs.core.chunk_first(seq__64465_64552__$1);
var G__64554 = cljs.core.chunk_rest(seq__64465_64552__$1);
var G__64555 = c__5568__auto___64553;
var G__64556 = cljs.core.count(c__5568__auto___64553);
var G__64557 = (0);
seq__64465_64542 = G__64554;
chunk__64466_64543 = G__64555;
count__64467_64544 = G__64556;
i__64468_64545 = G__64557;
continue;
} else {
var key_64558 = cljs.core.first(seq__64465_64552__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_64558,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__64559 = cljs.core.next(seq__64465_64552__$1);
var G__64560 = null;
var G__64561 = (0);
var G__64562 = (0);
seq__64465_64542 = G__64559;
chunk__64466_64543 = G__64560;
count__64467_64544 = G__64561;
i__64468_64545 = G__64562;
continue;
}
} else {
}
}
break;
}
} else {
}

if((cljs.core.count(coeffects) > (0))){
var seq__64471_64563 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__64472_64564 = null;
var count__64473_64565 = (0);
var i__64474_64566 = (0);
while(true){
if((i__64474_64566 < count__64473_64565)){
var key_64567 = chunk__64472_64564.cljs$core$IIndexed$_nth$arity$2(null,i__64474_64566);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_64567,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__64568 = seq__64471_64563;
var G__64569 = chunk__64472_64564;
var G__64570 = count__64473_64565;
var G__64571 = (i__64474_64566 + (1));
seq__64471_64563 = G__64568;
chunk__64472_64564 = G__64569;
count__64473_64565 = G__64570;
i__64474_64566 = G__64571;
continue;
} else {
var temp__5804__auto___64572 = cljs.core.seq(seq__64471_64563);
if(temp__5804__auto___64572){
var seq__64471_64573__$1 = temp__5804__auto___64572;
if(cljs.core.chunked_seq_QMARK_(seq__64471_64573__$1)){
var c__5568__auto___64574 = cljs.core.chunk_first(seq__64471_64573__$1);
var G__64575 = cljs.core.chunk_rest(seq__64471_64573__$1);
var G__64576 = c__5568__auto___64574;
var G__64577 = cljs.core.count(c__5568__auto___64574);
var G__64578 = (0);
seq__64471_64563 = G__64575;
chunk__64472_64564 = G__64576;
count__64473_64565 = G__64577;
i__64474_64566 = G__64578;
continue;
} else {
var key_64579 = cljs.core.first(seq__64471_64573__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_64579,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__64580 = cljs.core.next(seq__64471_64573__$1);
var G__64581 = null;
var G__64582 = (0);
var G__64583 = (0);
seq__64471_64563 = G__64580;
chunk__64472_64564 = G__64581;
count__64473_64565 = G__64582;
i__64474_64566 = G__64583;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

if(cljs.core.seq(subs)){
var seq__64479_64584 = cljs.core.seq(subs);
var chunk__64480_64585 = null;
var count__64481_64586 = (0);
var i__64482_64587 = (0);
while(true){
if((i__64482_64587 < count__64481_64586)){
var map__64509_64588 = chunk__64480_64585.cljs$core$IIndexed$_nth$arity$2(null,i__64482_64587);
var map__64509_64589__$1 = cljs.core.__destructure_map(map__64509_64588);
var op_type_64590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64509_64589__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_64591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64509_64589__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_64592__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64509_64589__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_64590,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_64591,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_64591,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_64592__$1], 0));
} else {
}


var G__64593 = seq__64479_64584;
var G__64594 = chunk__64480_64585;
var G__64595 = count__64481_64586;
var G__64596 = (i__64482_64587 + (1));
seq__64479_64584 = G__64593;
chunk__64480_64585 = G__64594;
count__64481_64586 = G__64595;
i__64482_64587 = G__64596;
continue;
} else {
var temp__5804__auto___64597 = cljs.core.seq(seq__64479_64584);
if(temp__5804__auto___64597){
var seq__64479_64598__$1 = temp__5804__auto___64597;
if(cljs.core.chunked_seq_QMARK_(seq__64479_64598__$1)){
var c__5568__auto___64599 = cljs.core.chunk_first(seq__64479_64598__$1);
var G__64600 = cljs.core.chunk_rest(seq__64479_64598__$1);
var G__64601 = c__5568__auto___64599;
var G__64602 = cljs.core.count(c__5568__auto___64599);
var G__64603 = (0);
seq__64479_64584 = G__64600;
chunk__64480_64585 = G__64601;
count__64481_64586 = G__64602;
i__64482_64587 = G__64603;
continue;
} else {
var map__64510_64604 = cljs.core.first(seq__64479_64598__$1);
var map__64510_64605__$1 = cljs.core.__destructure_map(map__64510_64604);
var op_type_64606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64510_64605__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_64607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64510_64605__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_64608__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64510_64605__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_64606,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_64607,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_64607,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_64608__$1], 0));
} else {
}


var G__64609 = cljs.core.next(seq__64479_64598__$1);
var G__64610 = null;
var G__64611 = (0);
var G__64612 = (0);
seq__64479_64584 = G__64609;
chunk__64480_64585 = G__64610;
count__64481_64586 = G__64611;
i__64482_64587 = G__64612;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__64613 = seq__64416;
var G__64614 = chunk__64417;
var G__64615 = count__64418;
var G__64616 = (i__64419 + (1));
seq__64416 = G__64613;
chunk__64417 = G__64614;
count__64418 = G__64615;
i__64419 = G__64616;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64416);
if(temp__5804__auto__){
var seq__64416__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64416__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__64416__$1);
var G__64617 = cljs.core.chunk_rest(seq__64416__$1);
var G__64618 = c__5568__auto__;
var G__64619 = cljs.core.count(c__5568__auto__);
var G__64620 = (0);
seq__64416 = G__64617;
chunk__64417 = G__64618;
count__64418 = G__64619;
i__64419 = G__64620;
continue;
} else {
var map__64511 = cljs.core.first(seq__64416__$1);
var map__64511__$1 = cljs.core.__destructure_map(map__64511);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64511__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64511__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64511__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64511__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64511__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__64512_64621 = cljs.core.seq(cljs.core.keys(effects));
var chunk__64513_64622 = null;
var count__64514_64623 = (0);
var i__64515_64624 = (0);
while(true){
if((i__64515_64624 < count__64514_64623)){
var key_64625 = chunk__64513_64622.cljs$core$IIndexed$_nth$arity$2(null,i__64515_64624);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_64625,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__64626 = seq__64512_64621;
var G__64627 = chunk__64513_64622;
var G__64628 = count__64514_64623;
var G__64629 = (i__64515_64624 + (1));
seq__64512_64621 = G__64626;
chunk__64513_64622 = G__64627;
count__64514_64623 = G__64628;
i__64515_64624 = G__64629;
continue;
} else {
var temp__5804__auto___64630__$1 = cljs.core.seq(seq__64512_64621);
if(temp__5804__auto___64630__$1){
var seq__64512_64631__$1 = temp__5804__auto___64630__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64512_64631__$1)){
var c__5568__auto___64632 = cljs.core.chunk_first(seq__64512_64631__$1);
var G__64633 = cljs.core.chunk_rest(seq__64512_64631__$1);
var G__64634 = c__5568__auto___64632;
var G__64635 = cljs.core.count(c__5568__auto___64632);
var G__64636 = (0);
seq__64512_64621 = G__64633;
chunk__64513_64622 = G__64634;
count__64514_64623 = G__64635;
i__64515_64624 = G__64636;
continue;
} else {
var key_64637 = cljs.core.first(seq__64512_64631__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_64637,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__64638 = cljs.core.next(seq__64512_64631__$1);
var G__64639 = null;
var G__64640 = (0);
var G__64641 = (0);
seq__64512_64621 = G__64638;
chunk__64513_64622 = G__64639;
count__64514_64623 = G__64640;
i__64515_64624 = G__64641;
continue;
}
} else {
}
}
break;
}
} else {
}

if((cljs.core.count(coeffects) > (0))){
var seq__64518_64642 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__64519_64643 = null;
var count__64520_64644 = (0);
var i__64521_64645 = (0);
while(true){
if((i__64521_64645 < count__64520_64644)){
var key_64646 = chunk__64519_64643.cljs$core$IIndexed$_nth$arity$2(null,i__64521_64645);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_64646,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__64647 = seq__64518_64642;
var G__64648 = chunk__64519_64643;
var G__64649 = count__64520_64644;
var G__64650 = (i__64521_64645 + (1));
seq__64518_64642 = G__64647;
chunk__64519_64643 = G__64648;
count__64520_64644 = G__64649;
i__64521_64645 = G__64650;
continue;
} else {
var temp__5804__auto___64653__$1 = cljs.core.seq(seq__64518_64642);
if(temp__5804__auto___64653__$1){
var seq__64518_64657__$1 = temp__5804__auto___64653__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64518_64657__$1)){
var c__5568__auto___64658 = cljs.core.chunk_first(seq__64518_64657__$1);
var G__64659 = cljs.core.chunk_rest(seq__64518_64657__$1);
var G__64660 = c__5568__auto___64658;
var G__64661 = cljs.core.count(c__5568__auto___64658);
var G__64662 = (0);
seq__64518_64642 = G__64659;
chunk__64519_64643 = G__64660;
count__64520_64644 = G__64661;
i__64521_64645 = G__64662;
continue;
} else {
var key_64663 = cljs.core.first(seq__64518_64657__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_64663,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__64664 = cljs.core.next(seq__64518_64657__$1);
var G__64665 = null;
var G__64666 = (0);
var G__64667 = (0);
seq__64518_64642 = G__64664;
chunk__64519_64643 = G__64665;
count__64520_64644 = G__64666;
i__64521_64645 = G__64667;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

if(cljs.core.seq(subs)){
var seq__64533_64668 = cljs.core.seq(subs);
var chunk__64534_64669 = null;
var count__64535_64670 = (0);
var i__64536_64671 = (0);
while(true){
if((i__64536_64671 < count__64535_64670)){
var map__64540_64672 = chunk__64534_64669.cljs$core$IIndexed$_nth$arity$2(null,i__64536_64671);
var map__64540_64673__$1 = cljs.core.__destructure_map(map__64540_64672);
var op_type_64674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64540_64673__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_64675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64540_64673__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_64676__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64540_64673__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_64674,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_64675,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_64675,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_64676__$1], 0));
} else {
}


var G__64677 = seq__64533_64668;
var G__64678 = chunk__64534_64669;
var G__64679 = count__64535_64670;
var G__64680 = (i__64536_64671 + (1));
seq__64533_64668 = G__64677;
chunk__64534_64669 = G__64678;
count__64535_64670 = G__64679;
i__64536_64671 = G__64680;
continue;
} else {
var temp__5804__auto___64681__$1 = cljs.core.seq(seq__64533_64668);
if(temp__5804__auto___64681__$1){
var seq__64533_64683__$1 = temp__5804__auto___64681__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64533_64683__$1)){
var c__5568__auto___64684 = cljs.core.chunk_first(seq__64533_64683__$1);
var G__64685 = cljs.core.chunk_rest(seq__64533_64683__$1);
var G__64686 = c__5568__auto___64684;
var G__64687 = cljs.core.count(c__5568__auto___64684);
var G__64688 = (0);
seq__64533_64668 = G__64685;
chunk__64534_64669 = G__64686;
count__64535_64670 = G__64687;
i__64536_64671 = G__64688;
continue;
} else {
var map__64541_64689 = cljs.core.first(seq__64533_64683__$1);
var map__64541_64690__$1 = cljs.core.__destructure_map(map__64541_64689);
var op_type_64691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64541_64690__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_64692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64541_64690__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_64693__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64541_64690__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_64691,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_64692,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_64692,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_64693__$1], 0));
} else {
}


var G__64694 = cljs.core.next(seq__64533_64683__$1);
var G__64695 = null;
var G__64696 = (0);
var G__64697 = (0);
seq__64533_64668 = G__64694;
chunk__64534_64669 = G__64695;
count__64535_64670 = G__64696;
i__64536_64671 = G__64697;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__64698 = cljs.core.next(seq__64416__$1);
var G__64699 = null;
var G__64700 = (0);
var G__64701 = (0);
seq__64416 = G__64698;
chunk__64417 = G__64699;
count__64418 = G__64700;
i__64419 = G__64701;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frisk.stat.update_event_stat = (function re_frisk$stat$update_event_stat(re_frame_data,event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);
});

//# sourceMappingURL=re_frisk.stat.js.map

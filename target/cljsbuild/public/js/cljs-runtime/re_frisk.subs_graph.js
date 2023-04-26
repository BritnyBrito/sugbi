goog.provide('re_frisk.subs_graph');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.network !== 'undefined')){
} else {
re_frisk.subs_graph.network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.reaction__GT_operation !== 'undefined')){
} else {
re_frisk.subs_graph.reaction__GT_operation = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.view__GT_reactions !== 'undefined')){
} else {
re_frisk.subs_graph.view__GT_reactions = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.vis !== 'undefined')){
} else {
re_frisk.subs_graph.vis = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.doc !== 'undefined')){
} else {
re_frisk.subs_graph.doc = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.nodes !== 'undefined')){
} else {
re_frisk.subs_graph.nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.edges !== 'undefined')){
} else {
re_frisk.subs_graph.edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.options !== 'undefined')){
} else {
re_frisk.subs_graph.options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"solver","solver",-744421825),"forceAtlas2Based",new cljs.core.Keyword(null,"maxVelocity","maxVelocity",1721643083),(30),new cljs.core.Keyword(null,"minVelocity","minVelocity",-32716928),(10),new cljs.core.Keyword(null,"stabilization","stabilization",-1209068026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"iterations","iterations",-1402710890),(30)], null)], null)], null));
}
re_frisk.subs_graph.init = (function re_frisk$subs_graph$init(win,document){
cljs.core.reset_BANG_(re_frisk.subs_graph.vis,win.vis);

return cljs.core.reset_BANG_(re_frisk.subs_graph.doc,document);
});
re_frisk.subs_graph.set_root_node = (function re_frisk$subs_graph$set_root_node(reaction){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction))){
return null;
} else {
var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"app-db",new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction,data);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction,"app-db");

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));
} else {
return null;
}
}
});
re_frisk.subs_graph.destroy = (function re_frisk$subs_graph$destroy(){
var temp__5804__auto__ = new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network));
if(cljs.core.truth_(temp__5804__auto__)){
var network_js = temp__5804__auto__;
network_js.destroy();

return cljs.core.reset_BANG_(re_frisk.subs_graph.network,null);
} else {
return null;
}
});
re_frisk.subs_graph.create = (function re_frisk$subs_graph$create(){
re_frisk.subs_graph.destroy();

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__5043__auto__;
}
})())){
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.nodes)))));
var edges_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.edges)))));
var data = ({"nodes": nodes_ds, "edges": edges_ds});
var temp__5804__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("global-subs-graph-container");
if(cljs.core.truth_(temp__5804__auto__)){
var container = temp__5804__auto__;
return cljs.core.reset_BANG_(re_frisk.subs_graph.network,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"network","network",2050004697),(new Network(container,data,re_frisk.subs_graph.options))], null));
} else {
return null;
}
} else {
return null;
}
});
re_frisk.subs_graph.update_subs = (function re_frisk$subs_graph$update_subs(traces){
var temp__5804__auto___58569 = new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135).cljs$core$IFn$_invoke$arity$1(cljs.core.first(traces));
if(cljs.core.truth_(temp__5804__auto___58569)){
var app_db_reaction_58570 = temp__5804__auto___58569;
re_frisk.subs_graph.set_root_node(app_db_reaction_58570);
} else {
}

var seq__58193_58571 = cljs.core.seq(traces);
var chunk__58194_58572 = null;
var count__58195_58573 = (0);
var i__58196_58574 = (0);
while(true){
if((i__58196_58574 < count__58195_58573)){
var map__58226_58575 = chunk__58194_58572.cljs$core$IIndexed$_nth$arity$2(null,i__58196_58574);
var map__58226_58576__$1 = cljs.core.__destructure_map(map__58226_58575);
var subs_58577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58226_58576__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__58227_58578 = cljs.core.seq(subs_58577);
var chunk__58228_58579 = null;
var count__58229_58580 = (0);
var i__58230_58581 = (0);
while(true){
if((i__58230_58581 < count__58229_58580)){
var map__58237_58583 = chunk__58228_58579.cljs$core$IIndexed$_nth$arity$2(null,i__58230_58581);
var map__58237_58584__$1 = cljs.core.__destructure_map(map__58237_58583);
var operation_58585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58237_58584__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_58586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58237_58584__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_58586)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_58586,operation_58585);
} else {
}


var G__58587 = seq__58227_58578;
var G__58588 = chunk__58228_58579;
var G__58589 = count__58229_58580;
var G__58590 = (i__58230_58581 + (1));
seq__58227_58578 = G__58587;
chunk__58228_58579 = G__58588;
count__58229_58580 = G__58589;
i__58230_58581 = G__58590;
continue;
} else {
var temp__5804__auto___58591 = cljs.core.seq(seq__58227_58578);
if(temp__5804__auto___58591){
var seq__58227_58592__$1 = temp__5804__auto___58591;
if(cljs.core.chunked_seq_QMARK_(seq__58227_58592__$1)){
var c__5568__auto___58593 = cljs.core.chunk_first(seq__58227_58592__$1);
var G__58594 = cljs.core.chunk_rest(seq__58227_58592__$1);
var G__58595 = c__5568__auto___58593;
var G__58596 = cljs.core.count(c__5568__auto___58593);
var G__58597 = (0);
seq__58227_58578 = G__58594;
chunk__58228_58579 = G__58595;
count__58229_58580 = G__58596;
i__58230_58581 = G__58597;
continue;
} else {
var map__58246_58598 = cljs.core.first(seq__58227_58592__$1);
var map__58246_58599__$1 = cljs.core.__destructure_map(map__58246_58598);
var operation_58600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58246_58599__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_58601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58246_58599__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_58601)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_58601,operation_58600);
} else {
}


var G__58602 = cljs.core.next(seq__58227_58592__$1);
var G__58603 = null;
var G__58604 = (0);
var G__58605 = (0);
seq__58227_58578 = G__58602;
chunk__58228_58579 = G__58603;
count__58229_58580 = G__58604;
i__58230_58581 = G__58605;
continue;
}
} else {
}
}
break;
}


var G__58606 = seq__58193_58571;
var G__58607 = chunk__58194_58572;
var G__58608 = count__58195_58573;
var G__58609 = (i__58196_58574 + (1));
seq__58193_58571 = G__58606;
chunk__58194_58572 = G__58607;
count__58195_58573 = G__58608;
i__58196_58574 = G__58609;
continue;
} else {
var temp__5804__auto___58610 = cljs.core.seq(seq__58193_58571);
if(temp__5804__auto___58610){
var seq__58193_58611__$1 = temp__5804__auto___58610;
if(cljs.core.chunked_seq_QMARK_(seq__58193_58611__$1)){
var c__5568__auto___58612 = cljs.core.chunk_first(seq__58193_58611__$1);
var G__58613 = cljs.core.chunk_rest(seq__58193_58611__$1);
var G__58614 = c__5568__auto___58612;
var G__58615 = cljs.core.count(c__5568__auto___58612);
var G__58616 = (0);
seq__58193_58571 = G__58613;
chunk__58194_58572 = G__58614;
count__58195_58573 = G__58615;
i__58196_58574 = G__58616;
continue;
} else {
var map__58251_58617 = cljs.core.first(seq__58193_58611__$1);
var map__58251_58618__$1 = cljs.core.__destructure_map(map__58251_58617);
var subs_58619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58251_58618__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__58252_58620 = cljs.core.seq(subs_58619);
var chunk__58253_58621 = null;
var count__58254_58622 = (0);
var i__58255_58623 = (0);
while(true){
if((i__58255_58623 < count__58254_58622)){
var map__58264_58624 = chunk__58253_58621.cljs$core$IIndexed$_nth$arity$2(null,i__58255_58623);
var map__58264_58625__$1 = cljs.core.__destructure_map(map__58264_58624);
var operation_58626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58264_58625__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_58627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58264_58625__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_58627)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_58627,operation_58626);
} else {
}


var G__58628 = seq__58252_58620;
var G__58629 = chunk__58253_58621;
var G__58630 = count__58254_58622;
var G__58631 = (i__58255_58623 + (1));
seq__58252_58620 = G__58628;
chunk__58253_58621 = G__58629;
count__58254_58622 = G__58630;
i__58255_58623 = G__58631;
continue;
} else {
var temp__5804__auto___58632__$1 = cljs.core.seq(seq__58252_58620);
if(temp__5804__auto___58632__$1){
var seq__58252_58633__$1 = temp__5804__auto___58632__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58252_58633__$1)){
var c__5568__auto___58634 = cljs.core.chunk_first(seq__58252_58633__$1);
var G__58635 = cljs.core.chunk_rest(seq__58252_58633__$1);
var G__58636 = c__5568__auto___58634;
var G__58637 = cljs.core.count(c__5568__auto___58634);
var G__58638 = (0);
seq__58252_58620 = G__58635;
chunk__58253_58621 = G__58636;
count__58254_58622 = G__58637;
i__58255_58623 = G__58638;
continue;
} else {
var map__58265_58639 = cljs.core.first(seq__58252_58633__$1);
var map__58265_58640__$1 = cljs.core.__destructure_map(map__58265_58639);
var operation_58641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58265_58640__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_58642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58265_58640__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_58642)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_58642,operation_58641);
} else {
}


var G__58643 = cljs.core.next(seq__58252_58633__$1);
var G__58644 = null;
var G__58645 = (0);
var G__58646 = (0);
seq__58252_58620 = G__58643;
chunk__58253_58621 = G__58644;
count__58254_58622 = G__58645;
i__58255_58623 = G__58646;
continue;
}
} else {
}
}
break;
}


var G__58647 = cljs.core.next(seq__58193_58611__$1);
var G__58648 = null;
var G__58649 = (0);
var G__58650 = (0);
seq__58193_58571 = G__58647;
chunk__58194_58572 = G__58648;
count__58195_58573 = G__58649;
i__58196_58574 = G__58650;
continue;
}
} else {
}
}
break;
}

var new_nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__58266_58651 = cljs.core.seq(traces);
var chunk__58267_58652 = null;
var count__58268_58653 = (0);
var i__58269_58654 = (0);
while(true){
if((i__58269_58654 < count__58268_58653)){
var map__58373_58655 = chunk__58267_58652.cljs$core$IIndexed$_nth$arity$2(null,i__58269_58654);
var map__58373_58656__$1 = cljs.core.__destructure_map(map__58373_58655);
var subs_58657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58373_58656__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__58374_58658 = cljs.core.seq(subs_58657);
var chunk__58375_58659 = null;
var count__58376_58660 = (0);
var i__58377_58661 = (0);
while(true){
if((i__58377_58661 < count__58376_58660)){
var map__58414_58662 = chunk__58375_58659.cljs$core$IIndexed$_nth$arity$2(null,i__58377_58661);
var map__58414_58663__$1 = cljs.core.__destructure_map(map__58414_58662);
var op_type_58664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58414_58663__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_58665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58414_58663__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_58666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58414_58663__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_58667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58414_58663__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58664,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58664,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5043__auto__){
return input_signals_58665;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_58666,input_signals_58665);
} else {
}

var operation_58668__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_58666);
if(cljs.core.truth_(reaction_58667)){
var temp__5802__auto___58669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_58668__$1);
if(cljs.core.truth_(temp__5802__auto___58669)){
var old_reaction_58670 = temp__5802__auto___58669;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58664,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_58670))){
var updated_node_58671 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_58670,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58664,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58664)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_58668__$1,updated_node_58671);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_58668__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_58668__$1,updated_node_58671);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_58671], null)));
}
} else {
}
} else {
}
} else {
var data_58672 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_58668__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_58668__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58664)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58664], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_58668__$1,data_58672);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_58668__$1,data_58672);
}
} else {
}

if(cljs.core.truth_(input_signals_58665)){
var seq__58421_58673 = cljs.core.seq(input_signals_58665);
var chunk__58422_58674 = null;
var count__58423_58675 = (0);
var i__58424_58676 = (0);
while(true){
if((i__58424_58676 < count__58423_58675)){
var input_reaction_58677 = chunk__58422_58674.cljs$core$IIndexed$_nth$arity$2(null,i__58424_58676);
var input_operation_58678 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_58677));
var reaction_path_58679 = [input_operation_58678,"-",operation_58668__$1].join('');
var temp__5802__auto___58680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_58679);
if(cljs.core.truth_(temp__5802__auto___58680)){
var old_edge_58681 = temp__5802__auto___58680;
var updated_edge_58682 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_58681,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58679,updated_edge_58682);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_58682], null)));
} else {
}
} else {
var data_58683 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_58679,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_58678,new cljs.core.Keyword(null,"to","to",192099007),operation_58668__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58679,data_58683);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_58683));
} else {
}
}


var G__58684 = seq__58421_58673;
var G__58685 = chunk__58422_58674;
var G__58686 = count__58423_58675;
var G__58687 = (i__58424_58676 + (1));
seq__58421_58673 = G__58684;
chunk__58422_58674 = G__58685;
count__58423_58675 = G__58686;
i__58424_58676 = G__58687;
continue;
} else {
var temp__5804__auto___58688 = cljs.core.seq(seq__58421_58673);
if(temp__5804__auto___58688){
var seq__58421_58689__$1 = temp__5804__auto___58688;
if(cljs.core.chunked_seq_QMARK_(seq__58421_58689__$1)){
var c__5568__auto___58690 = cljs.core.chunk_first(seq__58421_58689__$1);
var G__58691 = cljs.core.chunk_rest(seq__58421_58689__$1);
var G__58692 = c__5568__auto___58690;
var G__58693 = cljs.core.count(c__5568__auto___58690);
var G__58694 = (0);
seq__58421_58673 = G__58691;
chunk__58422_58674 = G__58692;
count__58423_58675 = G__58693;
i__58424_58676 = G__58694;
continue;
} else {
var input_reaction_58695 = cljs.core.first(seq__58421_58689__$1);
var input_operation_58696 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_58695));
var reaction_path_58697 = [input_operation_58696,"-",operation_58668__$1].join('');
var temp__5802__auto___58698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_58697);
if(cljs.core.truth_(temp__5802__auto___58698)){
var old_edge_58699 = temp__5802__auto___58698;
var updated_edge_58700 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_58699,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58697,updated_edge_58700);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_58700], null)));
} else {
}
} else {
var data_58701 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_58697,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_58696,new cljs.core.Keyword(null,"to","to",192099007),operation_58668__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58697,data_58701);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_58701));
} else {
}
}


var G__58702 = cljs.core.next(seq__58421_58689__$1);
var G__58703 = null;
var G__58704 = (0);
var G__58705 = (0);
seq__58421_58673 = G__58702;
chunk__58422_58674 = G__58703;
count__58423_58675 = G__58704;
i__58424_58676 = G__58705;
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


var G__58706 = seq__58374_58658;
var G__58707 = chunk__58375_58659;
var G__58708 = count__58376_58660;
var G__58709 = (i__58377_58661 + (1));
seq__58374_58658 = G__58706;
chunk__58375_58659 = G__58707;
count__58376_58660 = G__58708;
i__58377_58661 = G__58709;
continue;
} else {
var temp__5804__auto___58710 = cljs.core.seq(seq__58374_58658);
if(temp__5804__auto___58710){
var seq__58374_58711__$1 = temp__5804__auto___58710;
if(cljs.core.chunked_seq_QMARK_(seq__58374_58711__$1)){
var c__5568__auto___58712 = cljs.core.chunk_first(seq__58374_58711__$1);
var G__58713 = cljs.core.chunk_rest(seq__58374_58711__$1);
var G__58714 = c__5568__auto___58712;
var G__58715 = cljs.core.count(c__5568__auto___58712);
var G__58716 = (0);
seq__58374_58658 = G__58713;
chunk__58375_58659 = G__58714;
count__58376_58660 = G__58715;
i__58377_58661 = G__58716;
continue;
} else {
var map__58425_58717 = cljs.core.first(seq__58374_58711__$1);
var map__58425_58718__$1 = cljs.core.__destructure_map(map__58425_58717);
var op_type_58719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58425_58718__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_58720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58425_58718__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_58721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58425_58718__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_58722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58425_58718__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58719,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58719,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5043__auto__){
return input_signals_58720;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_58721,input_signals_58720);
} else {
}

var operation_58723__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_58721);
if(cljs.core.truth_(reaction_58722)){
var temp__5802__auto___58724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_58723__$1);
if(cljs.core.truth_(temp__5802__auto___58724)){
var old_reaction_58725 = temp__5802__auto___58724;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58719,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_58725))){
var updated_node_58726 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_58725,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58719,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58719)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_58723__$1,updated_node_58726);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_58723__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_58723__$1,updated_node_58726);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_58726], null)));
}
} else {
}
} else {
}
} else {
var data_58727 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_58723__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_58723__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58719)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58719], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_58723__$1,data_58727);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_58723__$1,data_58727);
}
} else {
}

if(cljs.core.truth_(input_signals_58720)){
var seq__58426_58728 = cljs.core.seq(input_signals_58720);
var chunk__58427_58729 = null;
var count__58428_58730 = (0);
var i__58429_58731 = (0);
while(true){
if((i__58429_58731 < count__58428_58730)){
var input_reaction_58732 = chunk__58427_58729.cljs$core$IIndexed$_nth$arity$2(null,i__58429_58731);
var input_operation_58733 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_58732));
var reaction_path_58734 = [input_operation_58733,"-",operation_58723__$1].join('');
var temp__5802__auto___58735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_58734);
if(cljs.core.truth_(temp__5802__auto___58735)){
var old_edge_58736 = temp__5802__auto___58735;
var updated_edge_58737 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_58736,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58734,updated_edge_58737);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_58737], null)));
} else {
}
} else {
var data_58738 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_58734,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_58733,new cljs.core.Keyword(null,"to","to",192099007),operation_58723__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58734,data_58738);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_58738));
} else {
}
}


var G__58739 = seq__58426_58728;
var G__58740 = chunk__58427_58729;
var G__58741 = count__58428_58730;
var G__58742 = (i__58429_58731 + (1));
seq__58426_58728 = G__58739;
chunk__58427_58729 = G__58740;
count__58428_58730 = G__58741;
i__58429_58731 = G__58742;
continue;
} else {
var temp__5804__auto___58743__$1 = cljs.core.seq(seq__58426_58728);
if(temp__5804__auto___58743__$1){
var seq__58426_58745__$1 = temp__5804__auto___58743__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58426_58745__$1)){
var c__5568__auto___58746 = cljs.core.chunk_first(seq__58426_58745__$1);
var G__58747 = cljs.core.chunk_rest(seq__58426_58745__$1);
var G__58748 = c__5568__auto___58746;
var G__58749 = cljs.core.count(c__5568__auto___58746);
var G__58750 = (0);
seq__58426_58728 = G__58747;
chunk__58427_58729 = G__58748;
count__58428_58730 = G__58749;
i__58429_58731 = G__58750;
continue;
} else {
var input_reaction_58751 = cljs.core.first(seq__58426_58745__$1);
var input_operation_58752 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_58751));
var reaction_path_58753 = [input_operation_58752,"-",operation_58723__$1].join('');
var temp__5802__auto___58755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_58753);
if(cljs.core.truth_(temp__5802__auto___58755)){
var old_edge_58756 = temp__5802__auto___58755;
var updated_edge_58757 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_58756,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58753,updated_edge_58757);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_58757], null)));
} else {
}
} else {
var data_58758 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_58753,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_58752,new cljs.core.Keyword(null,"to","to",192099007),operation_58723__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58753,data_58758);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_58758));
} else {
}
}


var G__58759 = cljs.core.next(seq__58426_58745__$1);
var G__58760 = null;
var G__58761 = (0);
var G__58762 = (0);
seq__58426_58728 = G__58759;
chunk__58427_58729 = G__58760;
count__58428_58730 = G__58761;
i__58429_58731 = G__58762;
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


var G__58765 = cljs.core.next(seq__58374_58711__$1);
var G__58766 = null;
var G__58767 = (0);
var G__58768 = (0);
seq__58374_58658 = G__58765;
chunk__58375_58659 = G__58766;
count__58376_58660 = G__58767;
i__58377_58661 = G__58768;
continue;
}
} else {
}
}
break;
}


var G__58769 = seq__58266_58651;
var G__58770 = chunk__58267_58652;
var G__58771 = count__58268_58653;
var G__58772 = (i__58269_58654 + (1));
seq__58266_58651 = G__58769;
chunk__58267_58652 = G__58770;
count__58268_58653 = G__58771;
i__58269_58654 = G__58772;
continue;
} else {
var temp__5804__auto___58773 = cljs.core.seq(seq__58266_58651);
if(temp__5804__auto___58773){
var seq__58266_58774__$1 = temp__5804__auto___58773;
if(cljs.core.chunked_seq_QMARK_(seq__58266_58774__$1)){
var c__5568__auto___58775 = cljs.core.chunk_first(seq__58266_58774__$1);
var G__58776 = cljs.core.chunk_rest(seq__58266_58774__$1);
var G__58777 = c__5568__auto___58775;
var G__58778 = cljs.core.count(c__5568__auto___58775);
var G__58779 = (0);
seq__58266_58651 = G__58776;
chunk__58267_58652 = G__58777;
count__58268_58653 = G__58778;
i__58269_58654 = G__58779;
continue;
} else {
var map__58430_58780 = cljs.core.first(seq__58266_58774__$1);
var map__58430_58781__$1 = cljs.core.__destructure_map(map__58430_58780);
var subs_58782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58430_58781__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__58431_58783 = cljs.core.seq(subs_58782);
var chunk__58432_58784 = null;
var count__58433_58785 = (0);
var i__58434_58786 = (0);
while(true){
if((i__58434_58786 < count__58433_58785)){
var map__58455_58787 = chunk__58432_58784.cljs$core$IIndexed$_nth$arity$2(null,i__58434_58786);
var map__58455_58788__$1 = cljs.core.__destructure_map(map__58455_58787);
var op_type_58789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58455_58788__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_58790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58455_58788__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_58791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58455_58788__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_58792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58455_58788__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58789,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58789,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5043__auto__){
return input_signals_58790;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_58791,input_signals_58790);
} else {
}

var operation_58793__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_58791);
if(cljs.core.truth_(reaction_58792)){
var temp__5802__auto___58794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_58793__$1);
if(cljs.core.truth_(temp__5802__auto___58794)){
var old_reaction_58795 = temp__5802__auto___58794;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58789,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_58795))){
var updated_node_58796 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_58795,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58789,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58789)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_58793__$1,updated_node_58796);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_58793__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_58793__$1,updated_node_58796);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_58796], null)));
}
} else {
}
} else {
}
} else {
var data_58797 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_58793__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_58793__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58789)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58789], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_58793__$1,data_58797);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_58793__$1,data_58797);
}
} else {
}

if(cljs.core.truth_(input_signals_58790)){
var seq__58459_58798 = cljs.core.seq(input_signals_58790);
var chunk__58460_58799 = null;
var count__58461_58800 = (0);
var i__58462_58801 = (0);
while(true){
if((i__58462_58801 < count__58461_58800)){
var input_reaction_58802 = chunk__58460_58799.cljs$core$IIndexed$_nth$arity$2(null,i__58462_58801);
var input_operation_58803 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_58802));
var reaction_path_58804 = [input_operation_58803,"-",operation_58793__$1].join('');
var temp__5802__auto___58805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_58804);
if(cljs.core.truth_(temp__5802__auto___58805)){
var old_edge_58806 = temp__5802__auto___58805;
var updated_edge_58807 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_58806,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58804,updated_edge_58807);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_58807], null)));
} else {
}
} else {
var data_58808 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_58804,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_58803,new cljs.core.Keyword(null,"to","to",192099007),operation_58793__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58804,data_58808);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_58808));
} else {
}
}


var G__58809 = seq__58459_58798;
var G__58810 = chunk__58460_58799;
var G__58811 = count__58461_58800;
var G__58812 = (i__58462_58801 + (1));
seq__58459_58798 = G__58809;
chunk__58460_58799 = G__58810;
count__58461_58800 = G__58811;
i__58462_58801 = G__58812;
continue;
} else {
var temp__5804__auto___58813__$1 = cljs.core.seq(seq__58459_58798);
if(temp__5804__auto___58813__$1){
var seq__58459_58814__$1 = temp__5804__auto___58813__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58459_58814__$1)){
var c__5568__auto___58817 = cljs.core.chunk_first(seq__58459_58814__$1);
var G__58818 = cljs.core.chunk_rest(seq__58459_58814__$1);
var G__58819 = c__5568__auto___58817;
var G__58820 = cljs.core.count(c__5568__auto___58817);
var G__58821 = (0);
seq__58459_58798 = G__58818;
chunk__58460_58799 = G__58819;
count__58461_58800 = G__58820;
i__58462_58801 = G__58821;
continue;
} else {
var input_reaction_58822 = cljs.core.first(seq__58459_58814__$1);
var input_operation_58823 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_58822));
var reaction_path_58824 = [input_operation_58823,"-",operation_58793__$1].join('');
var temp__5802__auto___58825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_58824);
if(cljs.core.truth_(temp__5802__auto___58825)){
var old_edge_58826 = temp__5802__auto___58825;
var updated_edge_58827 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_58826,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58824,updated_edge_58827);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_58827], null)));
} else {
}
} else {
var data_58828 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_58824,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_58823,new cljs.core.Keyword(null,"to","to",192099007),operation_58793__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58824,data_58828);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_58828));
} else {
}
}


var G__58829 = cljs.core.next(seq__58459_58814__$1);
var G__58830 = null;
var G__58831 = (0);
var G__58832 = (0);
seq__58459_58798 = G__58829;
chunk__58460_58799 = G__58830;
count__58461_58800 = G__58831;
i__58462_58801 = G__58832;
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


var G__58833 = seq__58431_58783;
var G__58834 = chunk__58432_58784;
var G__58835 = count__58433_58785;
var G__58836 = (i__58434_58786 + (1));
seq__58431_58783 = G__58833;
chunk__58432_58784 = G__58834;
count__58433_58785 = G__58835;
i__58434_58786 = G__58836;
continue;
} else {
var temp__5804__auto___58837__$1 = cljs.core.seq(seq__58431_58783);
if(temp__5804__auto___58837__$1){
var seq__58431_58838__$1 = temp__5804__auto___58837__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58431_58838__$1)){
var c__5568__auto___58839 = cljs.core.chunk_first(seq__58431_58838__$1);
var G__58840 = cljs.core.chunk_rest(seq__58431_58838__$1);
var G__58841 = c__5568__auto___58839;
var G__58842 = cljs.core.count(c__5568__auto___58839);
var G__58843 = (0);
seq__58431_58783 = G__58840;
chunk__58432_58784 = G__58841;
count__58433_58785 = G__58842;
i__58434_58786 = G__58843;
continue;
} else {
var map__58477_58844 = cljs.core.first(seq__58431_58838__$1);
var map__58477_58845__$1 = cljs.core.__destructure_map(map__58477_58844);
var op_type_58846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58477_58845__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_58847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58477_58845__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_58848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58477_58845__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_58849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58477_58845__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58846,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58846,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5043__auto__){
return input_signals_58847;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_58848,input_signals_58847);
} else {
}

var operation_58850__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_58848);
if(cljs.core.truth_(reaction_58849)){
var temp__5802__auto___58851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_58850__$1);
if(cljs.core.truth_(temp__5802__auto___58851)){
var old_reaction_58852 = temp__5802__auto___58851;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58846,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_58852))){
var updated_node_58853 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_58852,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58846,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58846)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_58850__$1,updated_node_58853);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_58850__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_58850__$1,updated_node_58853);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_58853], null)));
}
} else {
}
} else {
}
} else {
var data_58854 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_58850__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_58850__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58846)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58846], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_58850__$1,data_58854);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_58850__$1,data_58854);
}
} else {
}

if(cljs.core.truth_(input_signals_58847)){
var seq__58482_58855 = cljs.core.seq(input_signals_58847);
var chunk__58483_58856 = null;
var count__58484_58857 = (0);
var i__58485_58858 = (0);
while(true){
if((i__58485_58858 < count__58484_58857)){
var input_reaction_58859 = chunk__58483_58856.cljs$core$IIndexed$_nth$arity$2(null,i__58485_58858);
var input_operation_58860 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_58859));
var reaction_path_58861 = [input_operation_58860,"-",operation_58850__$1].join('');
var temp__5802__auto___58862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_58861);
if(cljs.core.truth_(temp__5802__auto___58862)){
var old_edge_58863 = temp__5802__auto___58862;
var updated_edge_58864 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_58863,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58861,updated_edge_58864);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_58864], null)));
} else {
}
} else {
var data_58865 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_58861,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_58860,new cljs.core.Keyword(null,"to","to",192099007),operation_58850__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58861,data_58865);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_58865));
} else {
}
}


var G__58869 = seq__58482_58855;
var G__58870 = chunk__58483_58856;
var G__58871 = count__58484_58857;
var G__58872 = (i__58485_58858 + (1));
seq__58482_58855 = G__58869;
chunk__58483_58856 = G__58870;
count__58484_58857 = G__58871;
i__58485_58858 = G__58872;
continue;
} else {
var temp__5804__auto___58873__$2 = cljs.core.seq(seq__58482_58855);
if(temp__5804__auto___58873__$2){
var seq__58482_58874__$1 = temp__5804__auto___58873__$2;
if(cljs.core.chunked_seq_QMARK_(seq__58482_58874__$1)){
var c__5568__auto___58875 = cljs.core.chunk_first(seq__58482_58874__$1);
var G__58876 = cljs.core.chunk_rest(seq__58482_58874__$1);
var G__58877 = c__5568__auto___58875;
var G__58878 = cljs.core.count(c__5568__auto___58875);
var G__58879 = (0);
seq__58482_58855 = G__58876;
chunk__58483_58856 = G__58877;
count__58484_58857 = G__58878;
i__58485_58858 = G__58879;
continue;
} else {
var input_reaction_58880 = cljs.core.first(seq__58482_58874__$1);
var input_operation_58881 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_58880));
var reaction_path_58882 = [input_operation_58881,"-",operation_58850__$1].join('');
var temp__5802__auto___58883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_58882);
if(cljs.core.truth_(temp__5802__auto___58883)){
var old_edge_58884 = temp__5802__auto___58883;
var updated_edge_58885 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_58884,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58882,updated_edge_58885);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_58885], null)));
} else {
}
} else {
var data_58886 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_58882,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_58881,new cljs.core.Keyword(null,"to","to",192099007),operation_58850__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_58882,data_58886);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_58886));
} else {
}
}


var G__58887 = cljs.core.next(seq__58482_58874__$1);
var G__58888 = null;
var G__58889 = (0);
var G__58890 = (0);
seq__58482_58855 = G__58887;
chunk__58483_58856 = G__58888;
count__58484_58857 = G__58889;
i__58485_58858 = G__58890;
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


var G__58891 = cljs.core.next(seq__58431_58838__$1);
var G__58892 = null;
var G__58893 = (0);
var G__58894 = (0);
seq__58431_58783 = G__58891;
chunk__58432_58784 = G__58892;
count__58433_58785 = G__58893;
i__58434_58786 = G__58894;
continue;
}
} else {
}
}
break;
}


var G__58895 = cljs.core.next(seq__58266_58774__$1);
var G__58896 = null;
var G__58897 = (0);
var G__58898 = (0);
seq__58266_58651 = G__58895;
chunk__58267_58652 = G__58896;
count__58268_58653 = G__58897;
i__58269_58654 = G__58898;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if((cljs.core.count(cljs.core.deref(new_nodes)) > (20))){
return re_frisk.subs_graph.create();
} else {
var seq__58500 = cljs.core.seq(cljs.core.vals(cljs.core.deref(new_nodes)));
var chunk__58501 = null;
var count__58502 = (0);
var i__58503 = (0);
while(true){
if((i__58503 < count__58502)){
var data = chunk__58501.cljs$core$IIndexed$_nth$arity$2(null,i__58503);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__58899 = seq__58500;
var G__58900 = chunk__58501;
var G__58901 = count__58502;
var G__58902 = (i__58503 + (1));
seq__58500 = G__58899;
chunk__58501 = G__58900;
count__58502 = G__58901;
i__58503 = G__58902;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58500);
if(temp__5804__auto__){
var seq__58500__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58500__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58500__$1);
var G__58903 = cljs.core.chunk_rest(seq__58500__$1);
var G__58904 = c__5568__auto__;
var G__58905 = cljs.core.count(c__5568__auto__);
var G__58906 = (0);
seq__58500 = G__58903;
chunk__58501 = G__58904;
count__58502 = G__58905;
i__58503 = G__58906;
continue;
} else {
var data = cljs.core.first(seq__58500__$1);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__58910 = cljs.core.next(seq__58500__$1);
var G__58911 = null;
var G__58912 = (0);
var G__58913 = (0);
seq__58500 = G__58910;
chunk__58501 = G__58911;
count__58502 = G__58912;
i__58503 = G__58913;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.event_network !== 'undefined')){
} else {
re_frisk.subs_graph.event_network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
re_frisk.subs_graph.create_event_subs = (function re_frisk$subs_graph$create_event_subs(p__58506){
var map__58507 = p__58506;
var map__58507__$1 = cljs.core.__destructure_map(map__58507);
var app_db_reaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58507__$1,new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58507__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.event_network))){
cljs.core.deref(re_frisk.subs_graph.event_network).destroy();

cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,null);
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__5043__auto__;
}
})())){
var temp__5804__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("event-subs-graph-container");
if(cljs.core.truth_(temp__5804__auto__)){
var container = temp__5804__auto__;
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([app_db_reaction,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),app_db_reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null)]));
var edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__58510_58914 = cljs.core.seq(subs);
var chunk__58511_58915 = null;
var count__58512_58916 = (0);
var i__58513_58917 = (0);
while(true){
if((i__58513_58917 < count__58512_58916)){
var map__58534_58918 = chunk__58511_58915.cljs$core$IIndexed$_nth$arity$2(null,i__58513_58917);
var map__58534_58919__$1 = cljs.core.__destructure_map(map__58534_58918);
var op_type_58920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58534_58919__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_58921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58534_58919__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_58922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58534_58919__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_58923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58534_58919__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5802__auto___58924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_58921);
if(cljs.core.truth_(temp__5802__auto___58924)){
var old_reaction_58925 = temp__5802__auto___58924;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58920,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_58925))){
var updated_node_58926 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_58925,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58920,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58920)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_58921,updated_node_58926);
} else {
}
} else {
var data_58927 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_58921,new cljs.core.Keyword(null,"label","label",1718410804),operation_58923,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58920)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58920], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_58921,data_58927);
}

if(cljs.core.truth_(input_signals_58922)){
var seq__58537_58928 = cljs.core.seq(input_signals_58922);
var chunk__58538_58929 = null;
var count__58539_58930 = (0);
var i__58540_58931 = (0);
while(true){
if((i__58540_58931 < count__58539_58930)){
var input_reaction_58932 = chunk__58538_58929.cljs$core$IIndexed$_nth$arity$2(null,i__58540_58931);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_58932),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_58921)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_58932),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_58921)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_58932,new cljs.core.Keyword(null,"to","to",192099007),reaction_58921], null));
}


var G__58935 = seq__58537_58928;
var G__58936 = chunk__58538_58929;
var G__58937 = count__58539_58930;
var G__58938 = (i__58540_58931 + (1));
seq__58537_58928 = G__58935;
chunk__58538_58929 = G__58936;
count__58539_58930 = G__58937;
i__58540_58931 = G__58938;
continue;
} else {
var temp__5804__auto___58939__$1 = cljs.core.seq(seq__58537_58928);
if(temp__5804__auto___58939__$1){
var seq__58537_58940__$1 = temp__5804__auto___58939__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58537_58940__$1)){
var c__5568__auto___58941 = cljs.core.chunk_first(seq__58537_58940__$1);
var G__58942 = cljs.core.chunk_rest(seq__58537_58940__$1);
var G__58943 = c__5568__auto___58941;
var G__58944 = cljs.core.count(c__5568__auto___58941);
var G__58945 = (0);
seq__58537_58928 = G__58942;
chunk__58538_58929 = G__58943;
count__58539_58930 = G__58944;
i__58540_58931 = G__58945;
continue;
} else {
var input_reaction_58946 = cljs.core.first(seq__58537_58940__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_58946),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_58921)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_58946),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_58921)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_58946,new cljs.core.Keyword(null,"to","to",192099007),reaction_58921], null));
}


var G__58947 = cljs.core.next(seq__58537_58940__$1);
var G__58948 = null;
var G__58949 = (0);
var G__58950 = (0);
seq__58537_58928 = G__58947;
chunk__58538_58929 = G__58948;
count__58539_58930 = G__58949;
i__58540_58931 = G__58950;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__58951 = seq__58510_58914;
var G__58952 = chunk__58511_58915;
var G__58953 = count__58512_58916;
var G__58954 = (i__58513_58917 + (1));
seq__58510_58914 = G__58951;
chunk__58511_58915 = G__58952;
count__58512_58916 = G__58953;
i__58513_58917 = G__58954;
continue;
} else {
var temp__5804__auto___58955__$1 = cljs.core.seq(seq__58510_58914);
if(temp__5804__auto___58955__$1){
var seq__58510_58956__$1 = temp__5804__auto___58955__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58510_58956__$1)){
var c__5568__auto___58957 = cljs.core.chunk_first(seq__58510_58956__$1);
var G__58958 = cljs.core.chunk_rest(seq__58510_58956__$1);
var G__58959 = c__5568__auto___58957;
var G__58960 = cljs.core.count(c__5568__auto___58957);
var G__58961 = (0);
seq__58510_58914 = G__58958;
chunk__58511_58915 = G__58959;
count__58512_58916 = G__58960;
i__58513_58917 = G__58961;
continue;
} else {
var map__58548_58962 = cljs.core.first(seq__58510_58956__$1);
var map__58548_58963__$1 = cljs.core.__destructure_map(map__58548_58962);
var op_type_58964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58548_58963__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_58965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58548_58963__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_58966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58548_58963__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_58967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58548_58963__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5802__auto___58968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_58965);
if(cljs.core.truth_(temp__5802__auto___58968)){
var old_reaction_58969 = temp__5802__auto___58968;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_58964,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_58969))){
var updated_node_58970 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_58969,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58964,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58964)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_58965,updated_node_58970);
} else {
}
} else {
var data_58971 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_58965,new cljs.core.Keyword(null,"label","label",1718410804),operation_58967,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_58964)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_58964], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_58965,data_58971);
}

if(cljs.core.truth_(input_signals_58966)){
var seq__58549_58972 = cljs.core.seq(input_signals_58966);
var chunk__58550_58973 = null;
var count__58551_58974 = (0);
var i__58552_58975 = (0);
while(true){
if((i__58552_58975 < count__58551_58974)){
var input_reaction_58976 = chunk__58550_58973.cljs$core$IIndexed$_nth$arity$2(null,i__58552_58975);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_58976),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_58965)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_58976),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_58965)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_58976,new cljs.core.Keyword(null,"to","to",192099007),reaction_58965], null));
}


var G__58977 = seq__58549_58972;
var G__58978 = chunk__58550_58973;
var G__58979 = count__58551_58974;
var G__58980 = (i__58552_58975 + (1));
seq__58549_58972 = G__58977;
chunk__58550_58973 = G__58978;
count__58551_58974 = G__58979;
i__58552_58975 = G__58980;
continue;
} else {
var temp__5804__auto___58981__$2 = cljs.core.seq(seq__58549_58972);
if(temp__5804__auto___58981__$2){
var seq__58549_58982__$1 = temp__5804__auto___58981__$2;
if(cljs.core.chunked_seq_QMARK_(seq__58549_58982__$1)){
var c__5568__auto___58983 = cljs.core.chunk_first(seq__58549_58982__$1);
var G__58984 = cljs.core.chunk_rest(seq__58549_58982__$1);
var G__58985 = c__5568__auto___58983;
var G__58986 = cljs.core.count(c__5568__auto___58983);
var G__58987 = (0);
seq__58549_58972 = G__58984;
chunk__58550_58973 = G__58985;
count__58551_58974 = G__58986;
i__58552_58975 = G__58987;
continue;
} else {
var input_reaction_58988 = cljs.core.first(seq__58549_58982__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_58988),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_58965)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_58988),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_58965)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_58988,new cljs.core.Keyword(null,"to","to",192099007),reaction_58965], null));
}


var G__58989 = cljs.core.next(seq__58549_58982__$1);
var G__58990 = null;
var G__58991 = (0);
var G__58992 = (0);
seq__58549_58972 = G__58989;
chunk__58550_58973 = G__58990;
count__58551_58974 = G__58991;
i__58552_58975 = G__58992;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__58993 = cljs.core.next(seq__58510_58956__$1);
var G__58994 = null;
var G__58995 = (0);
var G__58996 = (0);
seq__58510_58914 = G__58993;
chunk__58511_58915 = G__58994;
count__58512_58916 = G__58995;
i__58513_58917 = G__58996;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,(new Network(container,({"nodes": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(nodes))))), "edges": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(edges)))))}),re_frisk.subs_graph.options)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=re_frisk.subs_graph.js.map

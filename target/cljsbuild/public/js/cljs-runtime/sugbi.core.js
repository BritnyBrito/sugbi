goog.provide('sugbi.core');
sugbi.core.nav_link = (function sugbi$core$nav_link(uri,title,page){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),uri,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common","page-id","common/page-id",-1732721743)], null)))))?new cljs.core.Keyword(null,"is-active","is-active",-1424968720):null)], null),title], null);
});
sugbi.core.navbar = (function sugbi$core$navbar(){
var with_let70114 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70114","with-let70114",1176169025));
var temp__5808__auto___70117 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70117 == null)){
} else {
var c__56442__auto___70118 = temp__5808__auto___70117;
if((with_let70114.generation === c__56442__auto___70118.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70114.generation = c__56442__auto___70118.ratomGeneration);
}

var init70115 = (with_let70114.length === (0));
var expanded_QMARK_ = ((((init70115) || (cljs.core.not(with_let70114.hasOwnProperty((0))))))?(with_let70114[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let70114[(0)]));
var res70116 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.is-info>div.container","nav.navbar.is-info>div.container",1621679245),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-brand","div.navbar-brand",1304438848),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535)], null)], null),"sugbi"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.navbar-burger.burger","span.navbar-burger.burger",1784367377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-target","data-target",-113904678),new cljs.core.Keyword(null,"nav-menu","nav-menu",-1710804493),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
}),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?new cljs.core.Keyword(null,"is-active","is-active",-1424968720):null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#nav-menu.navbar-menu","div#nav-menu.navbar-menu",1772317719),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?new cljs.core.Keyword(null,"is-active","is-active",-1424968720):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-start","div.navbar-start",1801160723),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sugbi.core.nav_link,"#/","Home",new cljs.core.Keyword(null,"home","home",-74557309)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sugbi.core.nav_link,"#/about","About",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null)], null)], null);
return res70116;
});
sugbi.core.about_page = (function sugbi$core$about_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.section>div.container>div.content","section.section>div.container>div.content",-1570006034),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/warning_clojure.png"], null)], null)], null);
});
sugbi.core.home_page = (function sugbi$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.section>div.container>div.content","section.section>div.container>div.content",-1570006034),(function (){var temp__5804__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"docs","docs",-1974280502)], null)));
if(cljs.core.truth_(temp__5804__auto__)){
var docs = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),markdown.core.md__GT_html(docs)], null)], null)], null);
} else {
return null;
}
})()], null);
});
sugbi.core.page = (function sugbi$core$page(){
var temp__5802__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common","page","common/page",-2099452134)], null)));
if(cljs.core.truth_(temp__5802__auto__)){
var page = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sugbi.core.navbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null)], null);
} else {
return null;
}
});
sugbi.core.navigate_BANG_ = (function sugbi$core$navigate_BANG_(match,_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common","navigate","common/navigate",-1770818836),match], null));
});
sugbi.core.router = reitit.core.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Var(function(){return sugbi.core.home_page;},new cljs.core.Symbol("sugbi.core","home-page","sugbi.core/home-page",213530730,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sugbi.core","sugbi.core",-1205622146,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"sugbi/core.cljs",16,1,43,43,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(sugbi.core.home_page)?sugbi.core.home_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","init-home","page/init-home",-915420304)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Var(function(){return sugbi.core.about_page;},new cljs.core.Symbol("sugbi.core","about-page","sugbi.core/about-page",537891886,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sugbi.core","sugbi.core",-1205622146,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"sugbi/core.cljs",17,1,39,39,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(sugbi.core.about_page)?sugbi.core.about_page.cljs$lang$test:null)]))], null)], null)], null));
sugbi.core.start_router_BANG_ = (function sugbi$core$start_router_BANG_(){
return reitit.frontend.easy.start_BANG_(sugbi.core.router,sugbi.core.navigate_BANG_,cljs.core.PersistentArrayMap.EMPTY);
});
sugbi.core.mount_components = (function sugbi$core$mount_components(){
re_frame.core.clear_subscription_cache_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return sugbi.core.page;},new cljs.core.Symbol("sugbi.core","page","sugbi.core/page",1442860119,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sugbi.core","sugbi.core",-1205622146,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"sugbi/core.cljs",11,1,48,48,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(sugbi.core.page)?sugbi.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
sugbi.core.init_BANG_ = (function sugbi$core$init_BANG_(){
sugbi.core.start_router_BANG_();

sugbi.ajax.load_interceptors_BANG_();

return sugbi.core.mount_components();
});

//# sourceMappingURL=sugbi.core.js.map

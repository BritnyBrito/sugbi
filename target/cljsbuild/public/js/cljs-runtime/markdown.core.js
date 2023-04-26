goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__69078){
var map__69079 = p__69078;
var map__69079__$1 = cljs.core.__destructure_map(map__69079);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69079__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69079__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69079__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__69080 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__69081 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__69081);

try{var vec__69082 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__69085,transformer){
var vec__69086 = p__69085;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69086,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69086,(1),null);
var G__69089 = text;
var G__69090 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__69089,G__69090) : transformer.call(null,G__69089,G__69090));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__5045__auto__ = replacement_transformers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69082,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69082,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__69080);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69161 = arguments.length;
var i__5770__auto___69162 = (0);
while(true){
if((i__5770__auto___69162 < len__5769__auto___69161)){
args__5775__auto__.push((arguments[i__5770__auto___69162]));

var G__69163 = (i__5770__auto___69162 + (1));
i__5770__auto___69162 = G__69163;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq69091){
var G__69092 = cljs.core.first(seq69091);
var seq69091__$1 = cljs.core.next(seq69091);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69092,seq69091__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__69093_69164 = cljs.core.seq(lines);
var chunk__69094_69165 = null;
var count__69095_69166 = (0);
var i__69096_69167 = (0);
while(true){
if((i__69096_69167 < count__69095_69166)){
var line_69168 = chunk__69094_69165.cljs$core$IIndexed$_nth$arity$2(null,i__69096_69167);
markdown.links.parse_reference_link(line_69168,references);


var G__69169 = seq__69093_69164;
var G__69170 = chunk__69094_69165;
var G__69171 = count__69095_69166;
var G__69172 = (i__69096_69167 + (1));
seq__69093_69164 = G__69169;
chunk__69094_69165 = G__69170;
count__69095_69166 = G__69171;
i__69096_69167 = G__69172;
continue;
} else {
var temp__5804__auto___69173 = cljs.core.seq(seq__69093_69164);
if(temp__5804__auto___69173){
var seq__69093_69174__$1 = temp__5804__auto___69173;
if(cljs.core.chunked_seq_QMARK_(seq__69093_69174__$1)){
var c__5568__auto___69175 = cljs.core.chunk_first(seq__69093_69174__$1);
var G__69176 = cljs.core.chunk_rest(seq__69093_69174__$1);
var G__69177 = c__5568__auto___69175;
var G__69178 = cljs.core.count(c__5568__auto___69175);
var G__69179 = (0);
seq__69093_69164 = G__69176;
chunk__69094_69165 = G__69177;
count__69095_69166 = G__69178;
i__69096_69167 = G__69179;
continue;
} else {
var line_69180 = cljs.core.first(seq__69093_69174__$1);
markdown.links.parse_reference_link(line_69180,references);


var G__69181 = cljs.core.next(seq__69093_69174__$1);
var G__69182 = null;
var G__69183 = (0);
var G__69184 = (0);
seq__69093_69164 = G__69181;
chunk__69094_69165 = G__69182;
count__69095_69166 = G__69183;
i__69096_69167 = G__69184;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__69101_69185 = cljs.core.seq(lines);
var chunk__69102_69186 = null;
var count__69103_69187 = (0);
var i__69104_69188 = (0);
while(true){
if((i__69104_69188 < count__69103_69187)){
var line_69189 = chunk__69102_69186.cljs$core$IIndexed$_nth$arity$2(null,i__69104_69188);
markdown.links.parse_footnote_link(line_69189,footnotes);


var G__69190 = seq__69101_69185;
var G__69191 = chunk__69102_69186;
var G__69192 = count__69103_69187;
var G__69193 = (i__69104_69188 + (1));
seq__69101_69185 = G__69190;
chunk__69102_69186 = G__69191;
count__69103_69187 = G__69192;
i__69104_69188 = G__69193;
continue;
} else {
var temp__5804__auto___69194 = cljs.core.seq(seq__69101_69185);
if(temp__5804__auto___69194){
var seq__69101_69195__$1 = temp__5804__auto___69194;
if(cljs.core.chunked_seq_QMARK_(seq__69101_69195__$1)){
var c__5568__auto___69196 = cljs.core.chunk_first(seq__69101_69195__$1);
var G__69197 = cljs.core.chunk_rest(seq__69101_69195__$1);
var G__69198 = c__5568__auto___69196;
var G__69199 = cljs.core.count(c__5568__auto___69196);
var G__69200 = (0);
seq__69101_69185 = G__69197;
chunk__69102_69186 = G__69198;
count__69103_69187 = G__69199;
i__69104_69188 = G__69200;
continue;
} else {
var line_69201 = cljs.core.first(seq__69101_69195__$1);
markdown.links.parse_footnote_link(line_69201,footnotes);


var G__69202 = cljs.core.next(seq__69101_69195__$1);
var G__69203 = null;
var G__69204 = (0);
var G__69205 = (0);
seq__69101_69185 = G__69202;
chunk__69102_69186 = G__69203;
count__69103_69187 = G__69204;
i__69104_69188 = G__69205;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__69105 = markdown.transformers.parse_metadata_headers(lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69105,(0),null);
var num_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69105,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(num_lines,lines)], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__69117 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__69118 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__69119 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__69120 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__69119);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__69120);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__69139 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69139,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69139,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__69145_69206 = lines__$1;
var vec__69146_69207 = G__69145_69206;
var seq__69147_69208 = cljs.core.seq(vec__69146_69207);
var first__69148_69209 = cljs.core.first(seq__69147_69208);
var seq__69147_69210__$1 = cljs.core.next(seq__69147_69208);
var line_69211 = first__69148_69209;
var more_69212 = seq__69147_69210__$1;
var state_69213 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__69145_69217__$1 = G__69145_69206;
var state_69218__$1 = state_69213;
while(true){
var vec__69152_69219 = G__69145_69217__$1;
var seq__69153_69220 = cljs.core.seq(vec__69152_69219);
var first__69154_69221 = cljs.core.first(seq__69153_69220);
var seq__69153_69222__$1 = cljs.core.next(seq__69153_69220);
var line_69223__$1 = first__69154_69221;
var more_69224__$1 = seq__69153_69222__$1;
var state_69225__$2 = state_69218__$1;
var line_69226__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_69225__$2))?"":line_69223__$1);
var state_69227__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_69225__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_69225__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_69225__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_69225__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_69225__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_69224__$1))){
var G__69228 = more_69224__$1;
var G__69229 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_69226__$2,cljs.core.first(more_69224__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_69227__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_69226__$2.trim()));
G__69145_69217__$1 = G__69228;
state_69218__$1 = G__69229;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_69227__$3))),line_69226__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_69227__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__69118);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__69117);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69230 = arguments.length;
var i__5770__auto___69231 = (0);
while(true){
if((i__5770__auto___69231 < len__5769__auto___69230)){
args__5775__auto__.push((arguments[i__5770__auto___69231]));

var G__69232 = (i__5770__auto___69231 + (1));
i__5770__auto___69231 = G__69232;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq69155){
var G__69156 = cljs.core.first(seq69155);
var seq69155__$1 = cljs.core.next(seq69155);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69156,seq69155__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69233 = arguments.length;
var i__5770__auto___69234 = (0);
while(true){
if((i__5770__auto___69234 < len__5769__auto___69233)){
args__5775__auto__.push((arguments[i__5770__auto___69234]));

var G__69235 = (i__5770__auto___69234 + (1));
i__5770__auto___69234 = G__69235;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq69157){
var G__69158 = cljs.core.first(seq69157);
var seq69157__$1 = cljs.core.next(seq69157);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69158,seq69157__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69236 = arguments.length;
var i__5770__auto___69237 = (0);
while(true){
if((i__5770__auto___69237 < len__5769__auto___69236)){
args__5775__auto__.push((arguments[i__5770__auto___69237]));

var G__69238 = (i__5770__auto___69237 + (1));
i__5770__auto___69237 = G__69238;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq69159){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69159));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69239 = arguments.length;
var i__5770__auto___69240 = (0);
while(true){
if((i__5770__auto___69240 < len__5769__auto___69239)){
args__5775__auto__.push((arguments[i__5770__auto___69240]));

var G__69241 = (i__5770__auto___69240 + (1));
i__5770__auto___69240 = G__69241;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq69160){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69160));
}));


//# sourceMappingURL=markdown.core.js.map

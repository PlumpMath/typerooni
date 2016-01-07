// Compiled by ClojureScript 1.7.170 {}
goog.provide('typerooni.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('accountant.core');
goog.require('cljs.core.async');
if(typeof typerooni.core.words_10ff !== 'undefined'){
} else {
typerooni.core.words_10ff = cljs.core.PersistentVector.fromArray(["or","line","important","may","life","mountain","went","change","along","water","through","just","look","because","than","into","three","after","does","stop","get","eye","small","world","carry","play","all","really","before","don't","family","river","enough","another","came","number","why","might","write","must","other","air","something","even","own","children","in","keep","saw","kind","see","without","country","left","night","would","for","name","being","far","quickly","down","between","like","miss","to","very","which","who","seem","some","large","letter","food","got","never","feet","part","from","have","away","sound","same","those","take","great","make","no","said","day","mean","plant","she","book","quick","most","hard","way","where","long","and","say","follow","around","each","young","animal","he","land","been","do","car","place","together","Indian","will","sentence","group","point","different","white","can","page","them","thought","song","new","watch","oil","we","ask","two","not","any","boy","are","list","an","if","be","city","time","end","these","picture","show","out","tree","over","by","run","form","head","leave","house","you","start","right","his","that","hear","on","so","her","how","high","me","my","sea","study","help","is","move","your","face","what","read","it's","their","big","use","too","below","light","when","give","near","its","of","want","later","found","home","it","both","then","talk","earth","until","set","only","idea","men","quite","old","off","took","has","last","us","school","made","had","hand","second","tell","come","well","example","year","girl","much","every","walk","up","here","spell","need","there","next","answer","open","him","add","such","many","learn","was","people","as","with","mother","word","our","first","did","America","could","were","now","back","find","work","under","still","little","eat","father","also","state","thing","try","think","often","paper","turn","above","go","once","they","call","the","close","this","grow","one","while","sometimes","story","about","but","cut","at","few","question","began","almost","let","put","again","side","good","four","always","mile","soon","know","man","should","live","begin","more"], true);
}
if(typeof typerooni.core.words_aoeu !== 'undefined'){
} else {
typerooni.core.words_aoeu = cljs.core.PersistentVector.fromArray(["the","name","of","very","to","through","and","just","form","in","much","is","great","it","think","you","say","that","help","he","low","was","line","for","before","on","turn","are","cause","with","same","as","mean","differ","his","move","they","right","be","boy","at","old","one","too","have","does","this","tell","from","sentence","or","set","had","three","by","want","hot","air","but","well","some","also","what","play","there","small","we","end","can","put","out","home","other","read","were","hand","all","port","your","large","when","spell","up","add","use","even","word","land","how","here","said","must","an","big","each","high","she","such","which","follow","do","act","their","why","time","ask","if","men","will","change","way","went","about","light","many","kind","then","off","them","need","would","house","write","picture","like","try","so","us","these","again","her","animal","long","point","make","mother","thing","world","see","near","him","build","two","self","has","earth","look","father","more","head","day","stand","could","own","go","page","come","should","did","country","my","found","sound","answer","no","school","most","grow","number","study","who","still","over","learn","know","plant","water","cover","than","food","call","sun","first","four","people","thought","may","let","down","keep","side","eye","been","never","now","last","find","door","any","between","new","city","work","tree","part","cross","take","since","get","hard","place","start","made","might","live","story","where","saw","after","far","back","sea","little","draw","only","left","round","late","man","run","year","don't","came","while","show","press","every","close","good","night","me","real","give","life","our","few","under","stop","open","ten","seem","simple","together","several","next","vowel","white","toward","children","war","begin","lay","got","against","walk","pattern","example","slow","ease","center","paper","love","often","person","always","money","music","serve","those","appear","both","road","mark","map","book","science","letter","rule","until","govern","mile","pull","river","cold","car","notice","feet","voice","care","fall","second","power","group","town","carry","fine","took","certain","rain","fly","eat","unit","room","lead","friend","cry","began","dark","idea","machine","fish","note","mountain","wait","north","plan","once","figure","base","star","hear","box","horse","noun","cut","field","sure","rest","watch","correct","color","able","face","pound","wood","done","main","beauty","enough","drive","plain","stood","girl","contain","usual","front","young","teach","ready","week","above","final","ever","gave","red","green","list","oh","though","quick","feel","develop","talk","sleep","bird","warm","soon","free","body","minute","dog","strong","family","special","direct","mind","pose","behind","leave","clear","song","tail","measure","produce","state","fact","product","street","black","inch","short","lot","numeral","nothing","class","course","wind","stay","question","wheel","happen","full","complete","force","ship","blue","area","object","half","decide","rock","surface","order","deep","fire","moon","south","island","problem","foot","piece","yet","told","busy","knew","test","pass","record","farm","boat","top","common","whole","gold","king","possible","size","plane","heard","age","best","dry","hour","wonder","better","laugh","true","thousand","during","ago","hundred","ran","am","check","remember","game","step","shape","early","yes","hold","hot","west","miss","ground","brought","interest","heat","reach","snow","fast","bed","five","bring","sing","sit","listen","perhaps","six","fill","table","east","travel","weight","less","language","morning","among","speed","typing","mineral","seven","eight","nine","everything","something","standard","distant","paint"], true);
}
typerooni.core.keydown_input = cljs.core.async.chan.call(null);
typerooni.core.keypress_input = cljs.core.async.chan.call(null);
typerooni.core.words_rows_reducer = (function typerooni$core$words_rows_reducer(row_length,p__24535,word){
var vec__24537 = p__24535;
var full = cljs.core.nth.call(null,vec__24537,(0),null);
var pending = cljs.core.nth.call(null,vec__24537,(1),null);
var total_chars_of_word_and_pending = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.count.call(null,new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(word)),cljs.core.map.call(null,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"word","word",-420123725),pending)));
var adding_word_would_overflow_row = (total_chars_of_word_and_pending > row_length);
if(adding_word_would_overflow_row){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,full,pending),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [full,cljs.core.conj.call(null,pending,word)], null);
}
});
typerooni.core.words__GT_rows = (function typerooni$core$words__GT_rows(words){
return cljs.core.apply.call(null,cljs.core.conj,cljs.core.reduce.call(null,cljs.core.partial.call(null,typerooni.core.words_rows_reducer,(32)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),words));
});
typerooni.core.n_random_words = (function typerooni$core$n_random_words(n,wordlist){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.call(null,(function (i,w){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"word","word",-420123725),w,new cljs.core.Keyword(null,"correctness","correctness",-812991836),"",new cljs.core.Keyword(null,"id","id",-1388402092),i], null);
}),cljs.core.take.call(null,n,cljs.core.repeatedly.call(null,(function (){
return cljs.core.rand_nth.call(null,wordlist);
})))));
});
if(typeof typerooni.core.history !== 'undefined'){
} else {
typerooni.core.history = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
typerooni.core.history_json = (function typerooni$core$history_json(){
return cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,typerooni.core.history));
});
typerooni.core.initial_game_state = (function typerooni$core$initial_game_state(){
var target_words = typerooni.core.n_random_words.call(null,(500),typerooni.core.words_10ff);
var target_words_rows = typerooni.core.words__GT_rows.call(null,target_words);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"current-word","current-word",1786672226),new cljs.core.Keyword(null,"offset-row","offset-row",-526799742),new cljs.core.Keyword(null,"words-typed","words-typed",195043810),new cljs.core.Keyword(null,"start-time","start-time",814801386),new cljs.core.Keyword(null,"end-time","end-time",-1849817460),new cljs.core.Keyword(null,"current-word-timestamps","current-word-timestamps",352667404),new cljs.core.Keyword(null,"finished","finished",-1018867731),new cljs.core.Keyword(null,"target-words-rows","target-words-rows",2142765745),new cljs.core.Keyword(null,"time-left","time-left",1628563223),new cljs.core.Keyword(null,"target-words","target-words",2091902232),new cljs.core.Keyword(null,"current-word-backspace-used","current-word-backspace-used",-298907622),new cljs.core.Keyword(null,"offset-height","offset-height",-67411395)],[false,(0),(0),cljs.core.PersistentVector.EMPTY,(0),(60000),cljs.core.PersistentVector.EMPTY,false,target_words_rows,(60),target_words,false,(0)]);
});
typerooni.core.clear_input = (function typerooni$core$clear_input(input_field){
return input_field.value = "";
});
typerooni.core.reset_game_BANG_ = (function typerooni$core$reset_game_BANG_(state,input_field){
clearInterval(new cljs.core.Keyword(null,"timer-pid","timer-pid",-2069727691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));

cljs.core.reset_BANG_.call(null,state,typerooni.core.initial_game_state.call(null));

return typerooni.core.clear_input.call(null,input_field);
});
if(typeof typerooni.core.state !== 'undefined'){
} else {
typerooni.core.state = reagent.core.atom.call(null,typerooni.core.initial_game_state.call(null));
}
typerooni.core.home_page = (function typerooni$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to typerooni"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/abou"], null),"go to about page"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/test"], null),"take a test"], null)], null)], null);
});
typerooni.core.about_page = (function typerooni$core$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About typerooni"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"go to the home page"], null)], null)], null);
});
typerooni.core.wpm = (function typerooni$core$wpm(diff){
return ((12000) / diff);
});
typerooni.core.remove_most_recent_timestamp = (function typerooni$core$remove_most_recent_timestamp(state){
if(!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"current-word-timestamps","current-word-timestamps",352667404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-word-timestamps","current-word-timestamps",352667404)], null),cljs.core.pop);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-word-backspace-used","current-word-backspace-used",-298907622),true);
} else {
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-word-backspace-used","current-word-backspace-used",-298907622),false);
}
});
typerooni.core.reset_timestamps = (function typerooni$core$reset_timestamps(state){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-word-timestamps","current-word-timestamps",352667404),cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-word-backspace-used","current-word-backspace-used",-298907622),false);
});
typerooni.core.current_word_html = (function typerooni$core$current_word_html(state){
return document.querySelector([cljs.core.str("[data-word-id=\""),cljs.core.str(new cljs.core.Keyword(null,"current-word","current-word",1786672226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))),cljs.core.str("\"]")].join(''));
});
typerooni.core.is_correct = (function typerooni$core$is_correct(input,word){
return cljs.core._EQ_.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.butlast.call(null,input)),word);
});
typerooni.core.save_timestamps = (function typerooni$core$save_timestamps(input,state){
var times = cljs.core.conj.call(null,new cljs.core.Keyword(null,"current-word-timestamps","current-word-timestamps",352667404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"timeStamp","timeStamp",1425535532).cljs$core$IFn$_invoke$arity$1(input));
var time_diffs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (times){
return (function (p1__24539_SHARP_,p2__24538_SHARP_){
return (p2__24538_SHARP_ - p1__24539_SHARP_);
});})(times))
,times,cljs.core.rest.call(null,times)));
var word = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(input).value;
var correct = typerooni.core.is_correct.call(null,word,new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"target-words","target-words",2091902232).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"current-word","current-word",1786672226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))));
var backspace_used = new cljs.core.Keyword(null,"current-word-backspace-used","current-word-backspace-used",-298907622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var new_word = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"times","times",1671571467),time_diffs,new cljs.core.Keyword(null,"word","word",-420123725),word,new cljs.core.Keyword(null,"correct","correct",984806334),correct,new cljs.core.Keyword(null,"backspace-used","backspace-used",813289076),backspace_used], null);
var correctness = (cljs.core.truth_(correct)?"correct":"incorrect");
var new_target = cljs.core.assoc.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"target-words","target-words",2091902232).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"current-word","current-word",1786672226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))),new cljs.core.Keyword(null,"correctness","correctness",-812991836),correctness);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words-typed","words-typed",195043810)], null),cljs.core.conj,new_word);

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target-words","target-words",2091902232)], null),cljs.core.assoc,new cljs.core.Keyword(null,"current-word","current-word",1786672226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new_target);
});
typerooni.core.current_word_height = (function typerooni$core$current_word_height(state){
try{return typerooni.core.current_word_html.call(null,state).getBoundingClientRect().height;
}catch (e24541){var e = e24541;
return (0);
}});
typerooni.core.get_current_word_tag_top = (function typerooni$core$get_current_word_tag_top(state){
try{return typerooni.core.current_word_html.call(null,state).getBoundingClientRect().top;
}catch (e24543){var e = e24543;
return (0);
}});
typerooni.core.get_current_word_parent_tag_top = (function typerooni$core$get_current_word_parent_tag_top(state){
try{return typerooni.core.current_word_html.call(null,state).parentElement.parentElement.getBoundingClientRect().top;
}catch (e24545){var e = e24545;
return (0);
}});
typerooni.core.current_word_top = (function typerooni$core$current_word_top(state){
return (typerooni.core.get_current_word_tag_top.call(null,state) - typerooni.core.get_current_word_parent_tag_top.call(null,state));
});
typerooni.core.move_cursor = (function typerooni$core$move_cursor(state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-word","current-word",1786672226)], null),cljs.core.inc);

if(((typerooni.core.current_word_top.call(null,state) - (- new cljs.core.Keyword(null,"offset-height","offset-height",-67411395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) > (1.05 * typerooni.core.current_word_height.call(null,state)))){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset-row","offset-row",-526799742)], null),cljs.core.inc);
} else {
return null;
}
});
typerooni.core.save_word = (function typerooni$core$save_word(input,state){
var word_exists = !(clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(input).value));
if(word_exists){
typerooni.core.save_timestamps.call(null,input,state);

typerooni.core.reset_timestamps.call(null,state);

return typerooni.core.move_cursor.call(null,state);
} else {
return null;
}
});
typerooni.core.save_word_and_clear_input = (function typerooni$core$save_word_and_clear_input(input,state){
typerooni.core.save_word.call(null,input,state);

return typerooni.core.clear_input.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(input));
});
typerooni.core.save_most_recent_timestamp = (function typerooni$core$save_most_recent_timestamp(input,state){
var most_recent_timestamp = new cljs.core.Keyword(null,"timeStamp","timeStamp",1425535532).cljs$core$IFn$_invoke$arity$1(input);
var is_first_letter = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(input).value));
if(is_first_letter){
typerooni.core.reset_timestamps.call(null,state);
} else {
}

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-word-timestamps","current-word-timestamps",352667404)], null),cljs.core.conj,most_recent_timestamp);
});
typerooni.core.end_game_BANG_ = (function typerooni$core$end_game_BANG_(state){
if(cljs.core.truth_((function (){var and__19723__auto__ = new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
if(cljs.core.truth_(and__19723__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"finished","finished",-1018867731).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
} else {
return and__19723__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"running","running",1554969103),false,new cljs.core.Keyword(null,"finished","finished",-1018867731),true);

clearInterval(new cljs.core.Keyword(null,"timer-pid","timer-pid",-2069727691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));

return cljs.core.swap_BANG_.call(null,typerooni.core.history,cljs.core.conj,new cljs.core.Keyword(null,"words-typed","words-typed",195043810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
} else {
return null;
}
});
typerooni.core.game_over_QMARK_ = (function typerooni$core$game_over_QMARK_(state){
var and__19723__auto__ = new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
if(cljs.core.truth_(and__19723__auto__)){
return ((new Date()).getTime() > new cljs.core.Keyword(null,"end-time","end-time",-1849817460).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
} else {
return and__19723__auto__;
}
});
typerooni.core.check_if_game_over_and_update_timer = (function typerooni$core$check_if_game_over_and_update_timer(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
if(cljs.core.truth_((function (){var or__19735__auto__ = typerooni.core.game_over_QMARK_.call(null,state);
if(cljs.core.truth_(or__19735__auto__)){
return or__19735__auto__;
} else {
return new cljs.core.Keyword(null,"finished","finished",-1018867731).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
}
})())){
return typerooni.core.end_game_BANG_.call(null,state);
} else {
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-left","time-left",1628563223)], null),cljs.core.dec);
}
} else {
return null;
}
});
typerooni.core.consume_input = (function typerooni$core$consume_input(keydown_input,keypress_input,state){
var c__22239__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22239__auto__){
return (function (){
var f__22240__auto__ = (function (){var switch__22218__auto__ = ((function (c__22239__auto__){
return (function (state_24689){
var state_val_24690 = (state_24689[(1)]);
if((state_val_24690 === (7))){
var inst_24679 = (state_24689[(2)]);
var inst_24680 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24681 = [keydown_input,keypress_input];
var inst_24682 = (new cljs.core.PersistentVector(null,2,(5),inst_24680,inst_24681,null));
var state_24689__$1 = (function (){var statearr_24691 = state_24689;
(statearr_24691[(7)] = inst_24679);

return statearr_24691;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24689__$1,(17),inst_24682);
} else {
if((state_val_24690 === (1))){
var inst_24638 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24639 = [keydown_input,keypress_input];
var inst_24640 = (new cljs.core.PersistentVector(null,2,(5),inst_24638,inst_24639,null));
var state_24689__$1 = state_24689;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24689__$1,(2),inst_24640);
} else {
if((state_val_24690 === (4))){
var inst_24687 = (state_24689[(2)]);
var state_24689__$1 = state_24689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24689__$1,inst_24687);
} else {
if((state_val_24690 === (15))){
var state_24689__$1 = state_24689;
var statearr_24692_24720 = state_24689__$1;
(statearr_24692_24720[(2)] = null);

(statearr_24692_24720[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (13))){
var inst_24675 = (state_24689[(2)]);
var state_24689__$1 = state_24689;
var statearr_24693_24721 = state_24689__$1;
(statearr_24693_24721[(2)] = inst_24675);

(statearr_24693_24721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (6))){
var inst_24658 = (state_24689[(8)]);
var state_24689__$1 = state_24689;
if(cljs.core.truth_(inst_24658)){
var statearr_24694_24722 = state_24689__$1;
(statearr_24694_24722[(1)] = (8));

} else {
var statearr_24695_24723 = state_24689__$1;
(statearr_24695_24723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (17))){
var inst_24684 = (state_24689[(2)]);
var inst_24647 = inst_24684;
var state_24689__$1 = (function (){var statearr_24696 = state_24689;
(statearr_24696[(9)] = inst_24647);

return statearr_24696;
})();
var statearr_24697_24724 = state_24689__$1;
(statearr_24697_24724[(2)] = null);

(statearr_24697_24724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (3))){
var inst_24647 = (state_24689[(9)]);
var inst_24652 = (state_24689[(10)]);
var inst_24651 = cljs.core.nth.call(null,inst_24647,(0),null);
var inst_24652__$1 = cljs.core.nth.call(null,inst_24651,(0),null);
var inst_24653 = cljs.core.nth.call(null,inst_24651,(1),null);
var inst_24654 = cljs.core.nth.call(null,inst_24647,(1),null);
var inst_24655 = new cljs.core.Keyword(null,"which","which",-1255268941).cljs$core$IFn$_invoke$arity$1(inst_24652__$1);
var inst_24656 = cljs.core._EQ_.call(null,inst_24655,(8));
var inst_24657 = new cljs.core.Keyword(null,"which","which",-1255268941).cljs$core$IFn$_invoke$arity$1(inst_24652__$1);
var inst_24658 = cljs.core._EQ_.call(null,inst_24657,(32));
var inst_24659 = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(inst_24652__$1);
var state_24689__$1 = (function (){var statearr_24698 = state_24689;
(statearr_24698[(11)] = inst_24659);

(statearr_24698[(12)] = inst_24654);

(statearr_24698[(13)] = inst_24653);

(statearr_24698[(10)] = inst_24652__$1);

(statearr_24698[(8)] = inst_24658);

return statearr_24698;
})();
if(inst_24656){
var statearr_24699_24725 = state_24689__$1;
(statearr_24699_24725[(1)] = (5));

} else {
var statearr_24700_24726 = state_24689__$1;
(statearr_24700_24726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (12))){
var state_24689__$1 = state_24689;
var statearr_24701_24727 = state_24689__$1;
(statearr_24701_24727[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (2))){
var inst_24642 = (state_24689[(2)]);
var inst_24643 = cljs.core.nth.call(null,inst_24642,(0),null);
var inst_24644 = cljs.core.nth.call(null,inst_24643,(0),null);
var inst_24645 = cljs.core.nth.call(null,inst_24643,(1),null);
var inst_24646 = cljs.core.nth.call(null,inst_24642,(1),null);
var inst_24647 = inst_24642;
var state_24689__$1 = (function (){var statearr_24703 = state_24689;
(statearr_24703[(14)] = inst_24645);

(statearr_24703[(9)] = inst_24647);

(statearr_24703[(15)] = inst_24646);

(statearr_24703[(16)] = inst_24644);

return statearr_24703;
})();
var statearr_24704_24728 = state_24689__$1;
(statearr_24704_24728[(2)] = null);

(statearr_24704_24728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (11))){
var inst_24653 = (state_24689[(13)]);
var inst_24667 = typerooni.core.check_if_game_over_and_update_timer.call(null,inst_24653);
var state_24689__$1 = state_24689;
var statearr_24705_24729 = state_24689__$1;
(statearr_24705_24729[(2)] = inst_24667);

(statearr_24705_24729[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (9))){
var inst_24659 = (state_24689[(11)]);
var state_24689__$1 = state_24689;
if(cljs.core.truth_(inst_24659)){
var statearr_24706_24730 = state_24689__$1;
(statearr_24706_24730[(1)] = (11));

} else {
var statearr_24707_24731 = state_24689__$1;
(statearr_24707_24731[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (5))){
var inst_24653 = (state_24689[(13)]);
var inst_24661 = typerooni.core.remove_most_recent_timestamp.call(null,inst_24653);
var state_24689__$1 = state_24689;
var statearr_24708_24732 = state_24689__$1;
(statearr_24708_24732[(2)] = inst_24661);

(statearr_24708_24732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (14))){
var inst_24653 = (state_24689[(13)]);
var inst_24652 = (state_24689[(10)]);
var inst_24670 = typerooni.core.save_most_recent_timestamp.call(null,inst_24652,inst_24653);
var state_24689__$1 = state_24689;
var statearr_24709_24733 = state_24689__$1;
(statearr_24709_24733[(2)] = inst_24670);

(statearr_24709_24733[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (16))){
var inst_24673 = (state_24689[(2)]);
var state_24689__$1 = state_24689;
var statearr_24710_24734 = state_24689__$1;
(statearr_24710_24734[(2)] = inst_24673);

(statearr_24710_24734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (10))){
var inst_24677 = (state_24689[(2)]);
var state_24689__$1 = state_24689;
var statearr_24711_24735 = state_24689__$1;
(statearr_24711_24735[(2)] = inst_24677);

(statearr_24711_24735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24690 === (8))){
var inst_24653 = (state_24689[(13)]);
var inst_24652 = (state_24689[(10)]);
var inst_24664 = typerooni.core.save_word_and_clear_input.call(null,inst_24652,inst_24653);
var state_24689__$1 = state_24689;
var statearr_24712_24736 = state_24689__$1;
(statearr_24712_24736[(2)] = inst_24664);

(statearr_24712_24736[(1)] = (10));


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
});})(c__22239__auto__))
;
return ((function (switch__22218__auto__,c__22239__auto__){
return (function() {
var typerooni$core$consume_input_$_state_machine__22219__auto__ = null;
var typerooni$core$consume_input_$_state_machine__22219__auto____0 = (function (){
var statearr_24716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24716[(0)] = typerooni$core$consume_input_$_state_machine__22219__auto__);

(statearr_24716[(1)] = (1));

return statearr_24716;
});
var typerooni$core$consume_input_$_state_machine__22219__auto____1 = (function (state_24689){
while(true){
var ret_value__22220__auto__ = (function (){try{while(true){
var result__22221__auto__ = switch__22218__auto__.call(null,state_24689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22221__auto__;
}
break;
}
}catch (e24717){if((e24717 instanceof Object)){
var ex__22222__auto__ = e24717;
var statearr_24718_24737 = state_24689;
(statearr_24718_24737[(5)] = ex__22222__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24738 = state_24689;
state_24689 = G__24738;
continue;
} else {
return ret_value__22220__auto__;
}
break;
}
});
typerooni$core$consume_input_$_state_machine__22219__auto__ = function(state_24689){
switch(arguments.length){
case 0:
return typerooni$core$consume_input_$_state_machine__22219__auto____0.call(this);
case 1:
return typerooni$core$consume_input_$_state_machine__22219__auto____1.call(this,state_24689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
typerooni$core$consume_input_$_state_machine__22219__auto__.cljs$core$IFn$_invoke$arity$0 = typerooni$core$consume_input_$_state_machine__22219__auto____0;
typerooni$core$consume_input_$_state_machine__22219__auto__.cljs$core$IFn$_invoke$arity$1 = typerooni$core$consume_input_$_state_machine__22219__auto____1;
return typerooni$core$consume_input_$_state_machine__22219__auto__;
})()
;})(switch__22218__auto__,c__22239__auto__))
})();
var state__22241__auto__ = (function (){var statearr_24719 = f__22240__auto__.call(null);
(statearr_24719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22239__auto__);

return statearr_24719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22241__auto__);
});})(c__22239__auto__))
);

return c__22239__auto__;
});
cljs.core.swap_BANG_.call(null,typerooni.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),typerooni.core.consume_input.call(null,typerooni.core.keydown_input,typerooni.core.keypress_input,typerooni.core.state));
typerooni.core.event__GT_map = (function typerooni$core$event__GT_map(e){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"which","which",-1255268941),e.which,new cljs.core.Keyword(null,"timeStamp","timeStamp",1425535532),e.timeStamp,new cljs.core.Keyword(null,"target","target",253001721),e.target], null);
});
typerooni.core.start_game_BANG_ = (function typerooni$core$start_game_BANG_(state){
var start_time = (new Date()).getTime();
var end_time = (start_time + (60000));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"timer-pid","timer-pid",-2069727691),window.setInterval(((function (start_time,end_time){
return (function (){
var c__22239__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22239__auto__,start_time,end_time){
return (function (){
var f__22240__auto__ = (function (){var switch__22218__auto__ = ((function (c__22239__auto__,start_time,end_time){
return (function (state_24766){
var state_val_24767 = (state_24766[(1)]);
if((state_val_24767 === (1))){
var inst_24757 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24758 = [new cljs.core.Keyword(null,"timer","timer",-1266967739)];
var inst_24759 = [true];
var inst_24760 = cljs.core.PersistentHashMap.fromArrays(inst_24758,inst_24759);
var inst_24761 = [inst_24760,state];
var inst_24762 = (new cljs.core.PersistentVector(null,2,(5),inst_24757,inst_24761,null));
var state_24766__$1 = state_24766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24766__$1,(2),typerooni.core.keypress_input,inst_24762);
} else {
if((state_val_24767 === (2))){
var inst_24764 = (state_24766[(2)]);
var state_24766__$1 = state_24766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24766__$1,inst_24764);
} else {
return null;
}
}
});})(c__22239__auto__,start_time,end_time))
;
return ((function (switch__22218__auto__,c__22239__auto__,start_time,end_time){
return (function() {
var typerooni$core$start_game_BANG__$_state_machine__22219__auto__ = null;
var typerooni$core$start_game_BANG__$_state_machine__22219__auto____0 = (function (){
var statearr_24771 = [null,null,null,null,null,null,null];
(statearr_24771[(0)] = typerooni$core$start_game_BANG__$_state_machine__22219__auto__);

(statearr_24771[(1)] = (1));

return statearr_24771;
});
var typerooni$core$start_game_BANG__$_state_machine__22219__auto____1 = (function (state_24766){
while(true){
var ret_value__22220__auto__ = (function (){try{while(true){
var result__22221__auto__ = switch__22218__auto__.call(null,state_24766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22221__auto__;
}
break;
}
}catch (e24772){if((e24772 instanceof Object)){
var ex__22222__auto__ = e24772;
var statearr_24773_24775 = state_24766;
(statearr_24773_24775[(5)] = ex__22222__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24776 = state_24766;
state_24766 = G__24776;
continue;
} else {
return ret_value__22220__auto__;
}
break;
}
});
typerooni$core$start_game_BANG__$_state_machine__22219__auto__ = function(state_24766){
switch(arguments.length){
case 0:
return typerooni$core$start_game_BANG__$_state_machine__22219__auto____0.call(this);
case 1:
return typerooni$core$start_game_BANG__$_state_machine__22219__auto____1.call(this,state_24766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
typerooni$core$start_game_BANG__$_state_machine__22219__auto__.cljs$core$IFn$_invoke$arity$0 = typerooni$core$start_game_BANG__$_state_machine__22219__auto____0;
typerooni$core$start_game_BANG__$_state_machine__22219__auto__.cljs$core$IFn$_invoke$arity$1 = typerooni$core$start_game_BANG__$_state_machine__22219__auto____1;
return typerooni$core$start_game_BANG__$_state_machine__22219__auto__;
})()
;})(switch__22218__auto__,c__22239__auto__,start_time,end_time))
})();
var state__22241__auto__ = (function (){var statearr_24774 = f__22240__auto__.call(null);
(statearr_24774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22239__auto__);

return statearr_24774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22241__auto__);
});})(c__22239__auto__,start_time,end_time))
);

return c__22239__auto__;
});})(start_time,end_time))
,(1000)),new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time,new cljs.core.Keyword(null,"end-time","end-time",-1849817460),end_time,new cljs.core.Keyword(null,"running","running",1554969103),true,new cljs.core.Keyword(null,"started","started",585705024),true);
});
typerooni.core.keypress_func = (function typerooni$core$keypress_func(e,state){
var time_stamp = e.timeStamp;
var input = typerooni.core.event__GT_map.call(null,e);
var is_space = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"which","which",-1255268941).cljs$core$IFn$_invoke$arity$1(input),(32));
var game_has_not_started = cljs.core.not.call(null,new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
var game_has_ended = typerooni.core.game_over_QMARK_.call(null,state);
var game_is_over_and_new_word = (function (){var and__19723__auto__ = new cljs.core.Keyword(null,"finished","finished",-1018867731).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
if(cljs.core.truth_(and__19723__auto__)){
return is_space;
} else {
return and__19723__auto__;
}
})();
if(game_has_not_started){
typerooni.core.start_game_BANG_.call(null,state);
} else {
}

if(cljs.core.truth_(game_has_ended)){
typerooni.core.end_game_BANG_.call(null,state);
} else {
}

if(cljs.core.truth_(game_is_over_and_new_word)){
typerooni.core.clear_input.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(input));
} else {
}

if(cljs.core.truth_((function (){var and__19723__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"finised","finised",-95155445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
if(and__19723__auto__){
return new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
} else {
return and__19723__auto__;
}
})())){
var c__22239__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22239__auto__,time_stamp,input,is_space,game_has_not_started,game_has_ended,game_is_over_and_new_word){
return (function (){
var f__22240__auto__ = (function (){var switch__22218__auto__ = ((function (c__22239__auto__,time_stamp,input,is_space,game_has_not_started,game_has_ended,game_is_over_and_new_word){
return (function (state_24798){
var state_val_24799 = (state_24798[(1)]);
if((state_val_24799 === (1))){
var inst_24792 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24793 = [input,state];
var inst_24794 = (new cljs.core.PersistentVector(null,2,(5),inst_24792,inst_24793,null));
var state_24798__$1 = state_24798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24798__$1,(2),typerooni.core.keypress_input,inst_24794);
} else {
if((state_val_24799 === (2))){
var inst_24796 = (state_24798[(2)]);
var state_24798__$1 = state_24798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24798__$1,inst_24796);
} else {
return null;
}
}
});})(c__22239__auto__,time_stamp,input,is_space,game_has_not_started,game_has_ended,game_is_over_and_new_word))
;
return ((function (switch__22218__auto__,c__22239__auto__,time_stamp,input,is_space,game_has_not_started,game_has_ended,game_is_over_and_new_word){
return (function() {
var typerooni$core$keypress_func_$_state_machine__22219__auto__ = null;
var typerooni$core$keypress_func_$_state_machine__22219__auto____0 = (function (){
var statearr_24803 = [null,null,null,null,null,null,null];
(statearr_24803[(0)] = typerooni$core$keypress_func_$_state_machine__22219__auto__);

(statearr_24803[(1)] = (1));

return statearr_24803;
});
var typerooni$core$keypress_func_$_state_machine__22219__auto____1 = (function (state_24798){
while(true){
var ret_value__22220__auto__ = (function (){try{while(true){
var result__22221__auto__ = switch__22218__auto__.call(null,state_24798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22221__auto__;
}
break;
}
}catch (e24804){if((e24804 instanceof Object)){
var ex__22222__auto__ = e24804;
var statearr_24805_24807 = state_24798;
(statearr_24805_24807[(5)] = ex__22222__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24808 = state_24798;
state_24798 = G__24808;
continue;
} else {
return ret_value__22220__auto__;
}
break;
}
});
typerooni$core$keypress_func_$_state_machine__22219__auto__ = function(state_24798){
switch(arguments.length){
case 0:
return typerooni$core$keypress_func_$_state_machine__22219__auto____0.call(this);
case 1:
return typerooni$core$keypress_func_$_state_machine__22219__auto____1.call(this,state_24798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
typerooni$core$keypress_func_$_state_machine__22219__auto__.cljs$core$IFn$_invoke$arity$0 = typerooni$core$keypress_func_$_state_machine__22219__auto____0;
typerooni$core$keypress_func_$_state_machine__22219__auto__.cljs$core$IFn$_invoke$arity$1 = typerooni$core$keypress_func_$_state_machine__22219__auto____1;
return typerooni$core$keypress_func_$_state_machine__22219__auto__;
})()
;})(switch__22218__auto__,c__22239__auto__,time_stamp,input,is_space,game_has_not_started,game_has_ended,game_is_over_and_new_word))
})();
var state__22241__auto__ = (function (){var statearr_24806 = f__22240__auto__.call(null);
(statearr_24806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22239__auto__);

return statearr_24806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22241__auto__);
});})(c__22239__auto__,time_stamp,input,is_space,game_has_not_started,game_has_ended,game_is_over_and_new_word))
);

return c__22239__auto__;
} else {
return null;
}
});
typerooni.core.keydown_func = (function typerooni$core$keydown_func(e,state){
var key_pressed = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),e.which], null);
var is_backspace = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"which","which",-1255268941).cljs$core$IFn$_invoke$arity$1(key_pressed),(8));
var is_f5 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"which","which",-1255268941).cljs$core$IFn$_invoke$arity$1(key_pressed),(116));
var is_enter = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"which","which",-1255268941).cljs$core$IFn$_invoke$arity$1(key_pressed),(13));
if(is_backspace){
var c__22239__auto___24839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22239__auto___24839,key_pressed,is_backspace,is_f5,is_enter){
return (function (){
var f__22240__auto__ = (function (){var switch__22218__auto__ = ((function (c__22239__auto___24839,key_pressed,is_backspace,is_f5,is_enter){
return (function (state_24830){
var state_val_24831 = (state_24830[(1)]);
if((state_val_24831 === (1))){
var inst_24824 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24825 = [key_pressed,state];
var inst_24826 = (new cljs.core.PersistentVector(null,2,(5),inst_24824,inst_24825,null));
var state_24830__$1 = state_24830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24830__$1,(2),typerooni.core.keydown_input,inst_24826);
} else {
if((state_val_24831 === (2))){
var inst_24828 = (state_24830[(2)]);
var state_24830__$1 = state_24830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24830__$1,inst_24828);
} else {
return null;
}
}
});})(c__22239__auto___24839,key_pressed,is_backspace,is_f5,is_enter))
;
return ((function (switch__22218__auto__,c__22239__auto___24839,key_pressed,is_backspace,is_f5,is_enter){
return (function() {
var typerooni$core$keydown_func_$_state_machine__22219__auto__ = null;
var typerooni$core$keydown_func_$_state_machine__22219__auto____0 = (function (){
var statearr_24835 = [null,null,null,null,null,null,null];
(statearr_24835[(0)] = typerooni$core$keydown_func_$_state_machine__22219__auto__);

(statearr_24835[(1)] = (1));

return statearr_24835;
});
var typerooni$core$keydown_func_$_state_machine__22219__auto____1 = (function (state_24830){
while(true){
var ret_value__22220__auto__ = (function (){try{while(true){
var result__22221__auto__ = switch__22218__auto__.call(null,state_24830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22221__auto__;
}
break;
}
}catch (e24836){if((e24836 instanceof Object)){
var ex__22222__auto__ = e24836;
var statearr_24837_24840 = state_24830;
(statearr_24837_24840[(5)] = ex__22222__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24841 = state_24830;
state_24830 = G__24841;
continue;
} else {
return ret_value__22220__auto__;
}
break;
}
});
typerooni$core$keydown_func_$_state_machine__22219__auto__ = function(state_24830){
switch(arguments.length){
case 0:
return typerooni$core$keydown_func_$_state_machine__22219__auto____0.call(this);
case 1:
return typerooni$core$keydown_func_$_state_machine__22219__auto____1.call(this,state_24830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
typerooni$core$keydown_func_$_state_machine__22219__auto__.cljs$core$IFn$_invoke$arity$0 = typerooni$core$keydown_func_$_state_machine__22219__auto____0;
typerooni$core$keydown_func_$_state_machine__22219__auto__.cljs$core$IFn$_invoke$arity$1 = typerooni$core$keydown_func_$_state_machine__22219__auto____1;
return typerooni$core$keydown_func_$_state_machine__22219__auto__;
})()
;})(switch__22218__auto__,c__22239__auto___24839,key_pressed,is_backspace,is_f5,is_enter))
})();
var state__22241__auto__ = (function (){var statearr_24838 = f__22240__auto__.call(null);
(statearr_24838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22239__auto___24839);

return statearr_24838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22241__auto__);
});})(c__22239__auto___24839,key_pressed,is_backspace,is_f5,is_enter))
);

} else {
}

if(is_f5){
typerooni.core.reset_game_BANG_.call(null,state,e.target);
} else {
}

if((is_f5) || (is_enter)){
return e.preventDefault();
} else {
return null;
}
});
typerooni.core.get_input_field_html = (function typerooni$core$get_input_field_html(){
return document.getElementById("typing-test-input");
});
typerooni.core.indexed_span = (function typerooni$core$indexed_span(i,word,state){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-word-id","data-word-id",-1290772095),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(word),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("target-word"),cljs.core.str(" "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(word),new cljs.core.Keyword(null,"current-word","current-word",1786672226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))?"current":null)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"correctness","correctness",-812991836).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target-words","target-words",2091902232).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)).call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(word))))].join('')], null),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(word)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
});
typerooni.core.word_view = (function typerooni$core$word_view(target,state){
return cljs.core.map_indexed.call(null,(function (i,word){
return typerooni.core.indexed_span.call(null,i,word,state);
}),target);
});
typerooni.core.row__GT_div = (function typerooni$core$row__GT_div(i,row,state){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1877104959),"both"], null)], null),cljs.core.doall.call(null,typerooni.core.word_view.call(null,row,state))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
});
typerooni.core.typing_run_view = (function typerooni$core$typing_run_view(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"target-word-view",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"finished","finished",-1018867731).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?"game-over":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"target-words",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"offset-height","offset-height",-67411395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null)], null),(function (){var word_rows = cljs.core.take.call(null,(3),cljs.core.drop.call(null,new cljs.core.Keyword(null,"offset-row","offset-row",-526799742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"target-words-rows","target-words-rows",2142765745).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
var words = cljs.core.mapcat.call(null,cljs.core.identity,word_rows);
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (word_rows,words){
return (function (i,row){
return typerooni.core.row__GT_div.call(null,i,row,state);
});})(word_rows,words))
,word_rows));
})()], null)], null);
});
typerooni.core.typing_run_input = (function typerooni$core$typing_run_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"600px",new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#typing-test-input","input#typing-test-input",-1555133574),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"onKeyPress","onKeyPress",1548576017),new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),new cljs.core.Keyword(null,"autoCorrect","autoCorrect",448626584),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),new cljs.core.Keyword(null,"autoCapitalize","autoCapitalize",438011742)],["autoFocus","off","text",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"30px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"4px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px"], null),(function (e){
return typerooni.core.keypress_func.call(null,e,typerooni.core.state);
}),"false","off",(function (e){
return typerooni.core.keydown_func.call(null,e,typerooni.core.state);
}),"off"])], null)], null);
});
typerooni.core.word__GT_wpm = (function typerooni$core$word__GT_wpm(i,word){
var count = cljs.core.count.call(null,new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(word));
var sum = cljs.core.reduce.call(null,cljs.core._PLUS_,new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(word));
var timings = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(word);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(word),Math.round(((12000) / (sum / count))),timings,i], null);
});
typerooni.core.show_stats = (function typerooni$core$show_stats(word,timings){
return console.log([cljs.core.str(timings)].join(''));
});
typerooni.core.analysis = (function typerooni$core$analysis(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Word"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"WPM"], null)], null),(function (){var iter__20507__auto__ = (function typerooni$core$analysis_$_iter__24850(s__24851){
return (new cljs.core.LazySeq(null,(function (){
var s__24851__$1 = s__24851;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24851__$1);
if(temp__4425__auto__){
var s__24851__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24851__$2)){
var c__20505__auto__ = cljs.core.chunk_first.call(null,s__24851__$2);
var size__20506__auto__ = cljs.core.count.call(null,c__20505__auto__);
var b__24853 = cljs.core.chunk_buffer.call(null,size__20506__auto__);
if((function (){var i__24852 = (0);
while(true){
if((i__24852 < size__20506__auto__)){
var vec__24856 = cljs.core._nth.call(null,c__20505__auto__,i__24852);
var word = cljs.core.nth.call(null,vec__24856,(0),null);
var wpm = cljs.core.nth.call(null,vec__24856,(1),null);
var timings = cljs.core.nth.call(null,vec__24856,(2),null);
var key = cljs.core.nth.call(null,vec__24856,(3),null);
cljs.core.chunk_append.call(null,b__24853,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str(timings)].join('')], null),word], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),wpm], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__24858 = (i__24852 + (1));
i__24852 = G__24858;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24853),typerooni$core$analysis_$_iter__24850.call(null,cljs.core.chunk_rest.call(null,s__24851__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24853),null);
}
} else {
var vec__24857 = cljs.core.first.call(null,s__24851__$2);
var word = cljs.core.nth.call(null,vec__24857,(0),null);
var wpm = cljs.core.nth.call(null,vec__24857,(1),null);
var timings = cljs.core.nth.call(null,vec__24857,(2),null);
var key = cljs.core.nth.call(null,vec__24857,(3),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str(timings)].join('')], null),word], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),wpm], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),typerooni$core$analysis_$_iter__24850.call(null,cljs.core.rest.call(null,s__24851__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20507__auto__.call(null,cljs.core.take.call(null,(10),cljs.core.reverse.call(null,cljs.core.map_indexed.call(null,typerooni.core.word__GT_wpm,new cljs.core.Keyword(null,"words-typed","words-typed",195043810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))));
})()], null)], null);
});
typerooni.core.view_state = (function typerooni$core$view_state(){
return [cljs.core.str(cljs.core.dissoc.call(null,cljs.core.deref.call(null,typerooni.core.state),new cljs.core.Keyword(null,"target-words","target-words",2091902232)))].join('');
});
typerooni.core.game_timer = (function typerooni$core$game_timer(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"finished","finished",-1018867731).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return (0);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return (60);
} else {
return (((new cljs.core.Keyword(null,"end-time","end-time",-1849817460).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)) - (new Date()).getTime()) / (1000)) | (0));

}
}
});
typerooni.core.typing_run_timer = (function typerooni$core$typing_run_timer(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null),(function (){var timer = typerooni.core.game_timer.call(null,state);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"game-timer"], null),((cljs.core._EQ_.call(null,(60),timer))?"1:00":(((((9) < timer)) && ((timer < (60))))?[cljs.core.str("0:"),cljs.core.str(timer)].join(''):[cljs.core.str("0:0"),cljs.core.str(timer)].join('')
))], null);
})()], null);
});
typerooni.core.word__GT_wordlets_with_times = (function typerooni$core$word__GT_wordlets_with_times(w){
return cljs.core.partition.call(null,(2),(2),cljs.core.interleave.call(null,cljs.core.map.call(null,(function (p1__24859_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__24859_SHARP_);
}),cljs.core.partition.call(null,(2),(1),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(w))),cljs.core.map.call(null,(function (t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(w)], null);
}),new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(w))));
});
typerooni.core.wordlet_reducer = (function typerooni$core$wordlet_reducer(acc,p__24860){
var vec__24862 = p__24860;
var wordlet = cljs.core.nth.call(null,vec__24862,(0),null);
var timing = cljs.core.nth.call(null,vec__24862,(1),null);
return cljs.core.assoc.call(null,acc,wordlet,cljs.core.conj.call(null,(cljs.core.truth_(acc.call(null,wordlet))?acc.call(null,wordlet):cljs.core.PersistentVector.EMPTY),timing));
});
typerooni.core.wordlet_averages = (function typerooni$core$wordlet_averages(p__24863){
var vec__24865 = p__24863;
var wordlet = cljs.core.nth.call(null,vec__24865,(0),null);
var time_stamp = cljs.core.nth.call(null,vec__24865,(1),null);
var timings = cljs.core.map.call(null,cljs.core.first,time_stamp);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wordlet,((cljs.core.reduce.call(null,cljs.core._PLUS_,timings) / cljs.core.count.call(null,timings)) | (0)),time_stamp], null);
});
typerooni.core.sorted_wordlets = (function typerooni$core$sorted_wordlets(words){
return cljs.core.map_indexed.call(null,(function (i,w){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,i], null);
}),cljs.core.sort_by.call(null,cljs.core.second,cljs.core._LT_,cljs.core.map.call(null,typerooni.core.wordlet_averages,cljs.core.reduce.call(null,typerooni.core.wordlet_reducer,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,typerooni.core.word__GT_wordlets_with_times,cljs.core.filter.call(null,new cljs.core.Keyword(null,"correct","correct",984806334),cljs.core.remove.call(null,new cljs.core.Keyword(null,"backspace-used","backspace-used",813289076),words)))))));
});
typerooni.core.stats = (function typerooni$core$stats(state){
var total_words = cljs.core.count.call(null,new cljs.core.Keyword(null,"words-typed","words-typed",195043810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
var total_correct_words = cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"correct","correct",984806334),new cljs.core.Keyword(null,"words-typed","words-typed",195043810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
var total_incorrect_words = cljs.core.count.call(null,cljs.core.remove.call(null,new cljs.core.Keyword(null,"correct","correct",984806334),new cljs.core.Keyword(null,"words-typed","words-typed",195043810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
var total_number_of_characters = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"word","word",-420123725),cljs.core.filter.call(null,new cljs.core.Keyword(null,"correct","correct",984806334),new cljs.core.Keyword(null,"words-typed","words-typed",195043810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))));
var total_words_wpm = (total_number_of_characters / (5));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"games-analysis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"games-analysis-total-words"], null),[cljs.core.str("total words: "),cljs.core.str(total_words)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"games-analysis-correct-words"], null),[cljs.core.str("correct words: "),cljs.core.str(total_correct_words)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"games-analysis-incorrect-words"], null),[cljs.core.str("incorrect words: "),cljs.core.str(total_incorrect_words)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"games-analysis-wpm"], null),[cljs.core.str("wpm: "),cljs.core.str(total_words_wpm)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"games-analysis-wordlets"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Wordlet"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"70"], null)], null),"wpm ratio"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"equivalent wpm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"average ms"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Timings"], null),(function (){var iter__20507__auto__ = ((function (total_words,total_correct_words,total_incorrect_words,total_number_of_characters,total_words_wpm){
return (function typerooni$core$stats_$_iter__24878(s__24879){
return (new cljs.core.LazySeq(null,((function (total_words,total_correct_words,total_incorrect_words,total_number_of_characters,total_words_wpm){
return (function (){
var s__24879__$1 = s__24879;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24879__$1);
if(temp__4425__auto__){
var s__24879__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24879__$2)){
var c__20505__auto__ = cljs.core.chunk_first.call(null,s__24879__$2);
var size__20506__auto__ = cljs.core.count.call(null,c__20505__auto__);
var b__24881 = cljs.core.chunk_buffer.call(null,size__20506__auto__);
if((function (){var i__24880 = (0);
while(true){
if((i__24880 < size__20506__auto__)){
var vec__24886 = cljs.core._nth.call(null,c__20505__auto__,i__24880);
var vec__24887 = cljs.core.nth.call(null,vec__24886,(0),null);
var wordlet = cljs.core.nth.call(null,vec__24887,(0),null);
var average = cljs.core.nth.call(null,vec__24887,(1),null);
var timings = cljs.core.nth.call(null,vec__24887,(2),null);
var key = cljs.core.nth.call(null,vec__24886,(1),null);
cljs.core.chunk_append.call(null,b__24881,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),wordlet], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((12000) / average) / total_words_wpm).toFixed((2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((12000) / average) | (0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),average], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(timings)].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__24890 = (i__24880 + (1));
i__24880 = G__24890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24881),typerooni$core$stats_$_iter__24878.call(null,cljs.core.chunk_rest.call(null,s__24879__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24881),null);
}
} else {
var vec__24888 = cljs.core.first.call(null,s__24879__$2);
var vec__24889 = cljs.core.nth.call(null,vec__24888,(0),null);
var wordlet = cljs.core.nth.call(null,vec__24889,(0),null);
var average = cljs.core.nth.call(null,vec__24889,(1),null);
var timings = cljs.core.nth.call(null,vec__24889,(2),null);
var key = cljs.core.nth.call(null,vec__24888,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),wordlet], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((12000) / average) / total_words_wpm).toFixed((2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((12000) / average) | (0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),average], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(timings)].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),typerooni$core$stats_$_iter__24878.call(null,cljs.core.rest.call(null,s__24879__$2)));
}
} else {
return null;
}
break;
}
});})(total_words,total_correct_words,total_incorrect_words,total_number_of_characters,total_words_wpm))
,null,null));
});})(total_words,total_correct_words,total_incorrect_words,total_number_of_characters,total_words_wpm))
;
return iter__20507__auto__.call(null,typerooni.core.sorted_wordlets.call(null,cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.deref.call(null,typerooni.core.history))));
})()], null)], null)], null)], null)], null);
});
typerooni.core.test_page = (function typerooni$core$test_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"800px"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em",new cljs.core.Keyword(null,"width","width",-384071477),"800px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"This is a single run!"], null),typerooni.core.typing_run_view.call(null,typerooni.core.state),typerooni.core.typing_run_input.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [typerooni.core.typing_run_timer,typerooni.core.state], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"10px"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){
return typerooni.core.reset_game_BANG_.call(null,typerooni.core.state,typerooni.core.get_input_field_html.call(null));
})], null),"reset"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"finished","finished",-1018867731).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,typerooni.core.state)))?typerooni.core.stats.call(null,typerooni.core.state):null)], null)], null);
});
typerooni.core.current_page = (function typerooni$core$current_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"800px"], null)], null),typerooni.core.test_page.call(null)], null);
});
var action__22293__auto___24894 = (function (params__22294__auto__){
if(cljs.core.map_QMARK_.call(null,params__22294__auto__)){
var map__24891 = params__22294__auto__;
var map__24891__$1 = ((((!((map__24891 == null)))?((((map__24891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24891):map__24891);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return typerooni.core.home_page;},new cljs.core.Symbol("typerooni.core","home-page","typerooni.core/home-page",-1962258813,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"typerooni.core","typerooni.core",2024657914,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/typerooni/core.cljs",16,1,147,147,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(typerooni.core.home_page)?typerooni.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22294__auto__)){
var vec__24893 = params__22294__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return typerooni.core.home_page;},new cljs.core.Symbol("typerooni.core","home-page","typerooni.core/home-page",-1962258813,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"typerooni.core","typerooni.core",2024657914,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/typerooni/core.cljs",16,1,147,147,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(typerooni.core.home_page)?typerooni.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__22293__auto___24894);

var action__22293__auto___24898 = (function (params__22294__auto__){
if(cljs.core.map_QMARK_.call(null,params__22294__auto__)){
var map__24895 = params__22294__auto__;
var map__24895__$1 = ((((!((map__24895 == null)))?((((map__24895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24895):map__24895);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return typerooni.core.about_page;},new cljs.core.Symbol("typerooni.core","about-page","typerooni.core/about-page",-1124138057,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"typerooni.core","typerooni.core",2024657914,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/typerooni/core.cljs",17,1,152,152,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(typerooni.core.about_page)?typerooni.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22294__auto__)){
var vec__24897 = params__22294__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return typerooni.core.about_page;},new cljs.core.Symbol("typerooni.core","about-page","typerooni.core/about-page",-1124138057,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"typerooni.core","typerooni.core",2024657914,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/typerooni/core.cljs",17,1,152,152,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(typerooni.core.about_page)?typerooni.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__22293__auto___24898);

var action__22293__auto___24902 = (function (params__22294__auto__){
if(cljs.core.map_QMARK_.call(null,params__22294__auto__)){
var map__24899 = params__22294__auto__;
var map__24899__$1 = ((((!((map__24899 == null)))?((((map__24899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24899):map__24899);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return typerooni.core.test_page;},new cljs.core.Symbol("typerooni.core","test-page","typerooni.core/test-page",-1723674783,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"typerooni.core","typerooni.core",2024657914,null),new cljs.core.Symbol(null,"test-page","test-page",-619820853,null),"src/cljs/typerooni/core.cljs",16,1,472,472,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(typerooni.core.test_page)?typerooni.core.test_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22294__auto__)){
var vec__24901 = params__22294__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return typerooni.core.test_page;},new cljs.core.Symbol("typerooni.core","test-page","typerooni.core/test-page",-1723674783,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"typerooni.core","typerooni.core",2024657914,null),new cljs.core.Symbol(null,"test-page","test-page",-619820853,null),"src/cljs/typerooni/core.cljs",16,1,472,472,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(typerooni.core.test_page)?typerooni.core.test_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/test",action__22293__auto___24902);

typerooni.core.mount_root = (function typerooni$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [typerooni.core.current_page], null),document.getElementById("app"));
});
typerooni.core.init_BANG_ = (function typerooni$core$init_BANG_(){
accountant.core.configure_navigation_BANG_.call(null);

accountant.core.dispatch_current_BANG_.call(null);

return typerooni.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c512b"],{"3e14":function(e,t,n){"use strict";n.r(t),n.d(t,"conf",function(){return x}),n.d(t,"language",function(){return $});var s="keyword",o="keyword",c="keyword",d="meta.separator",p="comment",a="keyword",r="string",i="variable.source",m="delimiter.html",l="attribute.name.html",k="string.html";function b(e){return"tag"}var x={comments:{blockComment:["\x3c!--","--\x3e"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">",notIn:["string"]}],surroundingPairs:[{open:"(",close:")"},{open:"[",close:"]"},{open:"`",close:"`"}],folding:{markers:{start:new RegExp("^\\s*\x3c!--\\s*#?region\\b.*--\x3e"),end:new RegExp("^\\s*\x3c!--\\s*#?endregion\\b.*--\x3e")}}},$={defaultToken:"",tokenPostfix:".md",control:/[\\`*_\[\]{}()#+\-\.!]/,noncontrol:/[^\\`*_\[\]{}()#+\-\.!]/,escapes:/\\(?:@control)/,jsescapes:/\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,empty:["area","base","basefont","br","col","frame","hr","img","input","isindex","link","meta","param"],tokenizer:{root:[[/^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/,["white",s,o,o]],[/^\s*(=+|\-+)\s*$/,c],[/^\s*((\*[ ]?)+)\s*$/,d],[/^\s*>+/,p],[/^\s*([\*\-+:]|\d+\.)\s/,a],[/^(\t|[ ]{4})[^ ].*$/,r],[/^\s*~~~\s*((?:\w|[\/\-#])+)?\s*$/,{token:r,next:"@codeblock"}],[/^\s*```\s*((?:\w|[\/\-#])+)\s*$/,{token:r,next:"@codeblockgh",nextEmbedded:"$1"}],[/^\s*```\s*$/,{token:r,next:"@codeblock"}],{include:"@linecontent"}],codeblock:[[/^\s*~~~\s*$/,{token:r,next:"@pop"}],[/^\s*```\s*$/,{token:r,next:"@pop"}],[/.*$/,i]],codeblockgh:[[/```\s*$/,{token:i,next:"@pop",nextEmbedded:"@pop"}],[/[^`]+/,i]],linecontent:[[/&\w+;/,"string.escape"],[/@escapes/,"escape"],[/\b__([^\\_]|@escapes|_(?!_))+__\b/,"strong"],[/\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/,"strong"],[/\b_[^_]+_\b/,"emphasis"],[/\*([^\\*]|@escapes)+\*/,"emphasis"],[/`([^\\`]|@escapes)+`/,"variable"],[/\{[^}]+\}/,"string.target"],[/(!?\[)((?:[^\]\\]|@escapes)*)(\]\([^\)]+\))/,["string.link","","string.link"]],[/(!?\[)((?:[^\]\\]|@escapes)*)(\])/,"string.link"],{include:"html"}],html:[[/<(\w+)\/>/,b("$1")],[/<(\w+)/,{cases:{"@empty":{token:b("$1"),next:"@tag.$1"},"@default":{token:b("$1"),next:"@tag.$1"}}}],[/<\/(\w+)\s*>/,{token:b("$1")}],[/<!--/,"comment","@comment"]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,"comment","@pop"],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]],tag:[[/[ \t\r\n]+/,"white"],[/(type)(\s*=\s*)(")([^"]+)(")/,[l,m,k,{token:k,switchTo:"@tag.$S2.$4"},k]],[/(type)(\s*=\s*)(')([^']+)(')/,[l,m,k,{token:k,switchTo:"@tag.$S2.$4"},k]],[/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/,[l,m,k]],[/\w+/,l],[/\/>/,b("$S2"),"@pop"],[/>/,{cases:{"$S2==style":{token:b("$S2"),switchTo:"embeddedStyle",nextEmbedded:"text/css"},"$S2==script":{cases:{$S3:{token:b("$S2"),switchTo:"embeddedScript",nextEmbedded:"$S3"},"@default":{token:b("$S2"),switchTo:"embeddedScript",nextEmbedded:"text/javascript"}}},"@default":{token:b("$S2"),next:"@pop"}}}]],embeddedStyle:[[/[^<]+/,""],[/<\/style\s*>/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/</,""]],embeddedScript:[[/[^<]+/,""],[/<\/script\s*>/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/</,""]]}}}}]);
//# sourceMappingURL=chunk-2d0c512b.20eae590.js.map
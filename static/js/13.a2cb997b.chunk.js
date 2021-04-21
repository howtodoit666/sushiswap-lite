(this.webpackJsonp=this.webpackJsonp||[]).push([[13],{1211:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(23),o=n(41),c=n(64),s=n(81);t.a=function(e){var t=Object(c.a)(),n=Object(o.a)(),a=n.textDark,i=n.textLight,u=n.placeholder;return r.a.createElement(s.a,{style:{fontSize:l.d?28:20,marginBottom:l.g.normal,color:e.disabled?u:e.amount?a:i}},e.disabled?t("n/a"):e.amount?e.amount+" "+(e.suffix||""):t("fetching"))}},1212:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(64),o=n(321);t.a=function(e){var t=e.symbol,n=Object(l.a)();return r.a.createElement(o.a,{title:t?n("insufficient-",{symbol:t}):n("insufficient-balance"),disabled:!0})}},1219:function(e,t,n){"use strict";var a=n(3),r=n.n(a),l=n(21),o=n.n(l),c=n(0),s=n.n(c),i=n(5),u=n(23),d=n(56),m=n(64),b=n(321);t.a=function(e){var t,n=Object(m.a)(),a=Object(c.useContext)(d.b).approveToken,l=Object(c.useState)(!1),p=o()(l,2),f=p[0],k=p[1],O=Object(c.useCallback)((function(){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.token){n.next=19;break}return e.onError({}),k(!0),n.prev=3,n.next=6,r.a.awrap(a(e.token.address,e.spender));case 6:if(!(t=n.sent)){n.next=11;break}return n.next=10,r.a.awrap(t.wait());case 10:e.onSuccess();case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),e.onError(n.t0);case 16:return n.prev=16,k(!1),n.finish(16);case 19:case"end":return n.stop()}}),null,null,[[3,13,16,19]],Promise)}),[e.token]);return e.hidden?s.a.createElement(i.a,null):s.a.createElement(b.a,{title:n("approve-",{symbol:(null==(t=e.token)?void 0:t.symbol)||""}),onPress:O,loading:f,containerStyle:{marginBottom:u.g.tiny}})}},1225:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(5),o=n(23),c=n(41),s=n(410),i=n(321),u=n(81);t.a=function(e){var t=Object(c.a)().textLight,n=(0,Object(s.a)().border)({color:e.color}),a=e.color||t;return r.a.createElement(l.a,{style:[e.clear?{}:n,e.style]},r.a.createElement(u.a,{note:!0,style:{color:a}},e.text),e.buttonText&&e.onPressButton&&r.a.createElement(i.a,{title:e.buttonText,type:"clear",size:"small",fontWeight:"bold",onPress:e.onPressButton,titleStyle:{color:a},buttonStyle:{paddingHorizontal:0,paddingVertical:0},style:{alignSelf:"flex-end",marginTop:o.g.tiny}}))}},1227:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(0),r=n.n(a),l=n(240),o=n(5),c=n(23),s=n(41),i=n(24),u=n(1215),d=n(1220),m=n(88),b=n(1208),p=n(1222),f=n(1209),k=n(1218),O=n(81),y=n(1210),j=function(e){var t=e.state,n=e.emptyText,o=e.Item,c=Object(a.useCallback)((function(e){var n=e.item;return r.a.createElement(o,{key:n.symbol,token:n,selected:!1,onSelectToken:t.setSelectedLPToken})}),[t.setSelectedLPToken]),s=t.lpTokens.sort((function(e,t){var n=e.multiplier||0,a=t.multiplier||0;return n===a?(t.apy||0)-(e.apy||0):a-n}));return t.loading?r.a.createElement(p.a,null):0===s.length?r.a.createElement(g,{text:n}):r.a.createElement(l.a,{keyExtractor:function(e){return e.symbol},data:s,renderItem:c})},g=function(e){var t=e.text;return r.a.createElement(o.a,{style:{margin:c.g.normal}},r.a.createElement(O.a,{disabled:!0,style:{textAlign:"center",width:"100%"}},t))},v=function(e){var t=Object(s.a)().textMedium,n=Object(i.d)(e.token.balance,e.token.decimals,6),l=Object(a.useCallback)((function(){e.onSelectToken(e.token)}),[e.onSelectToken,e.token]);return r.a.createElement(f.a,{selected:e.selected,onPress:l,containerStyle:{marginBottom:b.a}},r.a.createElement(m.a,{style:{alignItems:"center"}},r.a.createElement(y.a,{token:e.token.tokenA,small:!0,replaceWETH:!0}),r.a.createElement(y.a,{token:e.token.tokenB,small:!0,replaceWETH:!0,style:{marginLeft:4}}),r.a.createElement(O.a,{medium:!0,caption:!0,style:{marginLeft:c.g.tiny}},e.token.tokenA.symbol,"-",e.token.tokenB.symbol),r.a.createElement(o.a,{style:{flex:1,marginLeft:c.g.tiny}},r.a.createElement(O.a,{caption:!0,light:!0,style:{textAlign:"right",color:t}},n)),e.selected?r.a.createElement(u.a,null):r.a.createElement(k.a,null)))};t.b=function(e){return r.a.createElement(o.a,{style:e.style},r.a.createElement(d.a,{title:e.title,expanded:!e.state.selectedLPToken,onExpand:function(){return e.state.setSelectedLPToken()}},r.a.createElement(j,{state:e.state,emptyText:e.emptyText,Item:e.Item})),e.state.selectedLPToken&&r.a.createElement(e.Item,{token:e.state.selectedLPToken,selected:!0,onSelectToken:function(){return e.state.setSelectedLPToken()}}))}},1229:function(e,t,n){"use strict";var a=n(11),r=n.n(a),l=n(3),o=n.n(l),c=n(21),s=n.n(c),i=n(0),u=n(139),d=n.n(u),m=n(56),b=n(322),p=n(1233),f=n(416),k=n(1234);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=!1;t.a=function(e){var t=Object(k.a)(),n=Object(i.useContext)(m.b),a=n.provider,r=n.address,l=n.tokens,c=Object(i.useState)(0),u=s()(c,2),O=u[0],g=u[1],v=Object(i.useState)(!0),P=s()(v,2),T=P[0],E=P[1],x=Object(i.useState)([]),L=s()(x,2),w=L[0],h=L[1],S=Object(i.useState)(),A=s()(S,2),C=A[0],D=A[1],B=Object(i.useState)(!1),I=s()(B,2),F=I[0],R=I[1],W=Object(i.useState)(),q=s()(W,2),H=q[0],M=q[1],V=Object(i.useState)(""),z=s()(V,2),Y=z[0],G=z[1],J=Object(f.a)().getPair,N=function(){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r&&a&&l.length>0)||j){n.next=11;break}return n.prev=1,j=!0,n.next=5,o.a.awrap("my-pools"===e?Object(b.d)(r,l,a):"pools"===e?Object(b.f)(r,l,a):"my-lp-tokens"===e?Object(b.b)(r,l,a):Object(b.e)(r,l,a));case 5:(t=n.sent)&&h(t);case 7:return n.prev=7,j=!1,E(!1),n.finish(7);case 11:case"end":return n.stop()}}),null,null,[[1,,7,11]],Promise)};return Object(i.useEffect)((function(){C||G("")}),[C]),d()((function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(E(!0),M(void 0),!C||!a){e.next=18;break}return e.prev=3,e.t0=M,e.next=7,o.a.awrap(J(C.tokenA,C.tokenB,a));case 7:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 11:e.prev=11,e.t2=e.catch(3);case 13:return e.prev=13,E(!1),e.finish(13);case 16:e.next=19;break;case 18:E(!1);case 19:case"end":return e.stop()}}),null,null,[[3,11,13,16]],Promise)}),[C,a]),Object(p.a)((function(t){return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r||!("pools"===e||l.length>0)){n.next=4;break}return t||E(!0),n.next=4,o.a.awrap(N());case 4:case"end":return n.stop()}}),null,null,null,Promise)}),(function(){return"updateLPTokens()"}),[l.length,r,O],0),y(y({},t),{},{fromToken:t.fromToken||(null==C?void 0:C.tokenA),toToken:t.toToken||(null==C?void 0:C.tokenB),updateLPTokens:N,loading:t.loading||T,lastTimeRefreshed:O,updateLastTimeRefreshed:function(){g(Date.now())},lpTokens:w,selectedLPToken:C,setSelectedLPToken:D,selectedLPTokenAllowed:F,setSelectedLPTokenAllowed:R,pair:H,amount:Y,setAmount:G})}},1246:function(e,t,n){"use strict";var a=n(11),r=n.n(a),l=n(3),o=n.n(l),c=n(21),s=n.n(c),i=n(0),u=n(35),d=n(33),m=n(139),b=n.n(m),p=n(61),f=n(56),k=n(24),O=n(1229),y=n(100),j=function(){return{deposit:Object(i.useCallback)((function(e,t,n){var a,r,l;return o.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return a=Object(k.g)("MasterChef",p.b,n),c.next=3,o.a.awrap(a.estimateGas.deposit(e,t));case 3:return r=c.sent,c.next=6,o.a.awrap(a.deposit(e,t,{gasLimit:r.mul(120).div(100)}));case 6:return l=c.sent,c.abrupt("return",Object(y.a)(l,"MasterChef.deposit()",e,t.toString()));case 8:case"end":return c.stop()}}),null,null,null,Promise)}),[]),withdraw:Object(i.useCallback)((function(e,t,n){var a,r,l;return o.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return a=Object(k.g)("MasterChef",p.b,n),c.next=3,o.a.awrap(a.estimateGas.withdraw(e,t));case 3:return r=c.sent,c.next=6,o.a.awrap(a.withdraw(e,t,{gasLimit:r.mul(120).div(100)}));case 6:return l=c.sent,c.abrupt("return",Object(y.a)(l,"MasterChef.withdraw()",e,t.toString()));case 8:case"end":return c.stop()}}),null,null,null,Promise)}),[])}};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(O.a)(e?"my-pools":"pools"),n=Object(i.useContext)(f.b),a=n.signer,r=n.getTokenAllowance,l=j(),c=l.deposit,m=l.withdraw,y=Object(i.useState)(!1),g=s()(y,2),P=g[0],T=g[1],E=Object(i.useState)(!1),x=s()(E,2),L=x[0],w=x[1],h=Object(i.useState)(!1),S=s()(h,2),A=S[0],C=S[1];Object(i.useEffect)((function(){T(!1),w(!1),C(!1),t.setFromAmount(""),t.setToAmount("")}),[t.selectedLPToken]),b()((function(){var e,n;return o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(!a||!t.selectedLPToken){l.next=12;break}return T(!0),t.setSelectedLPTokenAllowed(!1),l.prev=3,e=d.ethers.BigNumber.from(2).pow(96).sub(1),l.next=7,o.a.awrap(r(t.selectedLPToken.address,p.b));case 7:n=l.sent,t.setSelectedLPTokenAllowed(d.ethers.BigNumber.from(n).gte(e));case 9:return l.prev=9,T(!1),l.finish(9);case 12:case"end":return l.stop()}}),null,null,[[3,,9,12]],Promise)}),[a,t.selectedLPToken]),b()((function(){if(t.pair&&t.selectedLPToken&&t.selectedLPToken.totalSupply&&t.selectedLPToken.amountDeposited){var e=Object(k.b)(t.selectedLPToken),n=Object(k.b)(t.selectedLPToken.tokenA),a=Object(k.b)(t.selectedLPToken.tokenB),r=new u.j(e,t.selectedLPToken.totalSupply.toString()),l=new u.j(e,t.selectedLPToken.amountDeposited.toString()),o=t.pair.involvesToken(n)?t.pair.getLiquidityValue(n,r,l):null;t.setFromAmount((null==o?void 0:o.toFixed())||"");var c=t.pair.involvesToken(n)?t.pair.getLiquidityValue(a,r,l):null;t.setToAmount((null==c?void 0:c.toFixed())||"")}}),[t.pair,t.selectedLPToken]);var D=Object(i.useCallback)((function(){var e,n,r;return o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(!((null==(e=t.selectedLPToken)?void 0:e.id)&&t.amount&&a)){l.next=15;break}return w(!0),l.prev=2,n=Object(k.l)(t.amount,t.selectedLPToken.decimals),l.next=6,o.a.awrap(c(t.selectedLPToken.id,n,a));case 6:return r=l.sent,l.next=9,o.a.awrap(r.wait());case 9:return t.setSelectedLPToken(void 0),l.next=12,o.a.awrap(t.updateLastTimeRefreshed());case 12:return l.prev=12,w(!1),l.finish(12);case 15:case"end":return l.stop()}}),null,null,[[2,,12,15]],Promise)}),[t.selectedLPToken,t.amount,a]),B=Object(i.useCallback)((function(){var e,n,r;return o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(!((null==(e=t.selectedLPToken)?void 0:e.id)&&t.amount&&a)){l.next=15;break}return C(!0),l.prev=2,n=Object(k.l)(t.amount,t.selectedLPToken.decimals),l.next=6,o.a.awrap(m(t.selectedLPToken.id,n,a));case 6:return r=l.sent,l.next=9,o.a.awrap(r.wait());case 9:return t.setSelectedLPToken(void 0),l.next=12,o.a.awrap(t.updateLastTimeRefreshed());case 12:return l.prev=12,C(!1),l.finish(12);case 15:case"end":return l.stop()}}),null,null,[[2,,12,15]],Promise)}),[t.selectedLPToken,t.amount,a]);return v(v({},t),{},{loading:t.loading||P,onDeposit:D,depositing:L,onWithdraw:B,withdrawing:A})}},1385:function(e,t,n){"use strict";n.r(t);var a=n(21),r=n.n(a),l=n(0),o=n.n(l),c=n(12),s=n(5),i=n(139),u=n.n(i),d=n(1211),m=n(1219),b=n(414),p=n(1213),f=n(321),k=n(1214),O=n(1215),y=n(411),j=n(412),g=n(1216),v=n(1221),P=n(88),T=n(1207),E=n(1217),x=n(1212),L=n(1208),w=n(1227),h=n(1223),S=n(1225),A=n(1209),C=n(1218),D=n(81),B=n(413),I=n(1224),F=n(1210),R=n(417),W=n(418),q=n(61),H=n(23),M=n(56),V=n(41),z=n(1246),Y=n(156),G=n(64),J=n(24),N=n(415),Z=function(){var e=Object(l.useContext)(M.b).chainId,t=Object(G.a)(),n=Object(z.a)(!1);return 1!==e?o.a.createElement(k.a,null):o.a.createElement(s.a,{style:{marginTop:H.g.large}},o.a.createElement(w.b,{state:n,title:t("active-farms"),emptyText:t("unable-to-load-farms"),Item:U}),o.a.createElement(p.a,null),o.a.createElement(K,{state:n}),o.a.createElement(X,{state:n}),o.a.createElement(S.a,{text:t("sushi-vested-notice"),clear:!0,style:{marginTop:H.g.normal}}))},U=function(e){var t=e.token.apy||0,n=e.token.multiplier||0,a=Object(l.useCallback)((function(){e.onSelectToken(e.token)}),[e.onSelectToken,e.token]);return o.a.createElement(A.a,{selected:e.selected,onPress:a,containerStyle:{marginBottom:L.a}},o.a.createElement(P.a,{style:{alignItems:"center"}},o.a.createElement(F.a,{token:e.token.tokenA,small:!0,replaceWETH:!0}),o.a.createElement(F.a,{token:e.token.tokenB,small:!0,replaceWETH:!0,style:{marginLeft:4}}),o.a.createElement(D.a,{medium:!0,caption:!0,style:{marginLeft:H.g.tiny}},e.token.tokenA.symbol,"-",e.token.tokenB.symbol),o.a.createElement(s.a,{style:{flex:1,alignItems:"flex-end",marginRight:4}},o.a.createElement(D.a,{note:!0},n>1?"\u2728":"",n.toFixed(2)||"1.00","x APY"),o.a.createElement(D.a,{caption:H.d,medium:!0},Object(J.e)(t),"%")),e.selected?o.a.createElement(O.a,null):o.a.createElement(C.a,null)))},K=function(e){var t=e.state,n=Object(G.a)();return t.selectedLPToken?o.a.createElement(s.a,null,o.a.createElement(T.a,{text:t.selectedLPToken.symbol+" "+n("amount")}),t.selectedLPToken.balance.isZero()?o.a.createElement(Q,{state:t}):o.a.createElement(I.a,{token:t.selectedLPToken,amount:t.amount,onAmountChanged:t.setAmount,autoFocus:H.d})):o.a.createElement(T.a,{text:n("amount"),disabled:!0})},Q=function(e){var t=e.state,n=Object(G.a)(),a=Object(V.a)().green,r=Object(Y.a)("/liquidity","Liquidity");return o.a.createElement(o.a.Fragment,null,o.a.createElement(S.a,{color:a,text:n("tokens-needed-for-farming-notice",{symbol:t.selectedLPToken.symbol})}),o.a.createElement(f.a,{color:a,title:n("add-liquidity"),containerStyle:{marginTop:H.g.normal},onPress:r}))},X=function(e){var t,n,a,r,l=e.state,c=Object(G.a)(),s=Object(J.j)(l.amount)||!(null==(t=l.selectedLPToken)?void 0:t.sushiRewardedPerYear),i=s?0:Object(J.l)(l.amount).mul(l.selectedLPToken.sushiRewardedPerYear).div(Object(J.n)(18));return o.a.createElement(E.a,null,o.a.createElement(d.a,{amount:Object(J.d)(i,18,8),suffix:c("sushi-per-year"),disabled:s}),o.a.createElement(h.a,{label:c("my-balance"),text:Object(J.d)((null==(n=l.selectedLPToken)?void 0:n.balance)||0),disabled:!l.selectedLPToken}),o.a.createElement(h.a,{label:c("total-value-locked"),text:Object(J.f)((null==(a=l.selectedLPToken)?void 0:a.totalValueUSD)||0),disabled:!l.selectedLPToken}),o.a.createElement(h.a,{label:c("annual-percentage-yield"),text:Object(J.e)((null==(r=l.selectedLPToken)?void 0:r.apy)||0),suffix:"%",disabled:!l.selectedLPToken}),o.a.createElement($,{state:l}))},$=function(e){var t=e.state,n=Object(l.useState)({}),a=r()(n,2),c=a[0],i=a[1];u()((function(){return i({})}),[t.selectedLPToken]);var d=!t.selectedLPTokenAllowed,b=d||Object(J.j)(t.amount);return o.a.createElement(s.a,{style:{marginTop:H.g.normal}},!t.selectedLPToken||t.selectedLPToken.balance.isZero()?o.a.createElement(_,{state:t,onError:i,disabled:!0}):Object(J.l)(t.amount,t.selectedLPToken.decimals).gt(t.selectedLPToken.balance)?o.a.createElement(x.a,{symbol:t.selectedLPToken.symbol}):t.loading?o.a.createElement(v.a,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{token:t.selectedLPToken,spender:q.b,onSuccess:function(){return t.setSelectedLPTokenAllowed(!0)},onError:i,hidden:Object(J.j)(t.amount)||!d}),o.a.createElement(_,{state:t,onError:i,disabled:b})),c.message&&4001!==c.code&&o.a.createElement(g.a,{error:c}))},_=function(e){var t=e.state,n=e.onError,a=e.disabled,r=Object(G.a)(),c=Object(l.useCallback)((function(){n({}),t.onDeposit().catch(n)}),[t.onDeposit,n]);return o.a.createElement(f.a,{title:r("deposit"),disabled:a,loading:t.depositing,onPress:c})};t.default=function(){var e=Object(G.a)();return o.a.createElement(N.a,null,o.a.createElement(y.a,null,o.a.createElement(b.a,null),o.a.createElement(j.a,null,o.a.createElement(B.a,{text:e("plant-lp-tokens")}),o.a.createElement(D.a,{light:!0},e("plant-lp-tokens-desc")),o.a.createElement(Z,null)),"web"===c.a.OS&&o.a.createElement(R.a,null)),o.a.createElement(W.a,null))}}}]);
//# sourceMappingURL=13.a2cb997b.chunk.js.map
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[458],{256:function(n,e,t){t.d(e,{Ai:function(){return u},Hx:function(){return d},Tg:function(){return o},Y5:function(){return p},uV:function(){return x}});var r=t(861),a=t(757),i=t.n(a),c=t(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var s="4707371d53aa0467b337f4fda109b465",o=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("trending/movie/day?api_key=".concat(s,"&page=",1));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("search/movie?",{params:{api_key:s,query:"".concat(e)}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(e,"?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(e,"/credits?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.ZP.get("movie/".concat(e,"/reviews?api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Page not found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},458:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,a,i,c,s,o,u,p,x,d=t(861),f=t(885),h=t(757),l=t.n(h),m=t(791),v=t(689),g=t(256),w=t(596),Z=t(168),b=t(731),j=t(444),k=j.ZP.section(r||(r=(0,Z.Z)(["\nmargin-top: 20px;\nbox-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n@media screen and (min-width: 768px){\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n"]))),y=j.ZP.img(a||(a=(0,Z.Z)(["\nmax-width: 500px;\nheight: 550px;\n@media screen and (max-width: 768px){\n  margin: auto;\n}\n"]))),P=j.ZP.div(i||(i=(0,Z.Z)(["\npadding: 20px 10px;\n"]))),_=j.ZP.h2(c||(c=(0,Z.Z)(["\nfont-size: 40px;\nfont-weight: 700;\n"]))),S=j.ZP.h3(s||(s=(0,Z.Z)(["\nfont-size: 32px;\nfont-weight: 600;\nmargin-bottom: 20px;\n"]))),z=j.ZP.p(o||(o=(0,Z.Z)(["\nfont-size: 24px;\nmargin-bottom: 20px;\n"]))),U=j.ZP.h3(u||(u=(0,Z.Z)(["\nfont-size: 26px;\nfont-weight: 500;\nmargin-bottom: 20px;\n"]))),A=j.ZP.li(p||(p=(0,Z.Z)(["\nwidth: 30px;\nmargin-bottom: 20px;\n"]))),C=(0,j.ZP)(b.rU)(x||(x=(0,Z.Z)(["\npadding-left: 20px;\nfont-size: 26px;\n"]))),Y=t(479),E=t(184),F=function(){var n,e,t=(0,v.UO)().movieId,r=(0,m.useState)([]),a=(0,f.Z)(r,2),i=a[0],c=a[1],s=(0,m.useState)([]),o=(0,f.Z)(s,2),u=o[0],p=o[1],x=(0,m.useState)(""),h=(0,f.Z)(x,2),Z=h[0],b=h[1],j=null!==(n=null===(e=(0,v.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";(0,m.useEffect)((function(){function n(){return(n=(0,d.Z)(l().mark((function n(){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.Y5)(t).then((function(n){c(n),p(n.genres),b(n.poster_path)}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),w.Am.error("Something went wrong! Please try again!");case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]);var F=u&&u.map((function(n){return n.name})).join(", "),G=i.original_title,H=i.overview,I=i.vote_average,O=i.release_date;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(C,{to:j,children:"Go back"}),(0,E.jsxs)(k,{children:[(0,E.jsx)(y,{src:Z?"https://image.tmdb.org/t/p/w500/".concat(Z):"http://m.mooeraudio.com/public/img/no-img.svg",alt:G}),(0,E.jsxs)(P,{children:[(0,E.jsxs)(_,{children:[G," (",new Date(O).getFullYear(),")"]}),(0,E.jsxs)(z,{children:["User Score: ",Math.ceil(10*Number(I)),"%"]}),(0,E.jsx)(S,{children:"Overview"}),(0,E.jsx)(z,{children:H}),(0,E.jsx)(S,{children:"Genres"}),(0,E.jsx)(z,{children:F})]})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)(U,{children:"Additional information"}),(0,E.jsxs)("ul",{children:[(0,E.jsx)(A,{children:(0,E.jsx)(C,{to:"cast",children:"Cast"})}),(0,E.jsx)(A,{children:(0,E.jsx)(C,{to:"reviews",children:"Reviews"})})]}),(0,E.jsx)(m.Suspense,{fallback:(0,E.jsx)(Y.g,{}),children:(0,E.jsx)(v.j3,{})})]}),(0,E.jsx)(w.Ix,{})]})}}}]);
//# sourceMappingURL=458.767746a6.chunk.js.map
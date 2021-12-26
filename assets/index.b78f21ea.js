import{j as o,a as e,G as C,T as R,I as z,S as B,M as H,L as Y,r as p,F as D,E as J,Y as $,P as F,t as K,l as V,b as q,h as Q,s as N,e as L,c as U,R as X,d as Z}from"./vendor.511ba5c5.js";const ee=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function c(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=c(r);fetch(r.href,i)}};ee();var te=()=>o("div",{className:"fire",children:[o("div",{className:"firework",id:"firework1",children:[e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"})]}),o("div",{className:"firework",id:"firework2",children:[e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"})]}),o("div",{className:"firework",id:"firework3",children:[e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"}),e("div",{className:"explosion"})]})]});const ie={github:{icon:e(C,{}),url:""},twitter:{icon:e(R,{}),url:""},instagram:{icon:e(z,{}),url:""},send:{icon:e(B,{}),url:"https://t.me/wiwium"},mail:{icon:e(H,{}),url:""},linkedin:{icon:e(Y,{}),url:""}},ae=()=>e("div",{className:"socials",children:Object.entries(ie).map(([a,l])=>e("a",{href:l.url,target:"_blank",rel:"noopener noreferrer",className:"icon "+a,children:l.icon},a))}),oe=()=>e("div",{className:"hero-container",children:o("div",{className:"hero",children:[o("div",{className:"front",children:[e("h1",{children:"Ketan Chaudhari"}),e("p",{children:"Full stack developer"})]}),e("div",{className:"back",children:e("h1",{children:"merry christmas "})}),e(te,{})]})});const re=()=>o("div",{className:"about",children:[e("h1",{children:"About Me"}),e("p",{children:"Hello! My name is Ketan and I \u2764 to build things for web."}),o("div",{className:"work-experience",children:[e("h5",{children:"Work Experience: "}),o("p",{children:["I am currently working in TCS since Aug. 2020, Some of my contributions in TCS:"," "]}),o("div",{className:"work-experience-points",children:[o("div",{children:[e("span",{children:"\u25B9"}),"Architected and Developed Containerized, Scalable Web Application in spring boot and deployed on AWS ECS."]}),o("div",{children:[e("span",{children:"\u25B9"}),"Experienced in DevOps building production grade CI/CD pipelines."]}),o("div",{children:[e("span",{children:"\u25B9"}),"Created and Deployed Automated Workflows and System Monitoring using AWS lambda."]}),o("div",{children:[e("span",{children:"\u25B9"}),"In Spring boot Created a secure single-sign-on system for client application using Azure Ad and SAML."]})]})]}),o("div",{className:"achievements",children:[e("h5",{children:"Achievements:"}),e("a",{className:"underline",target:"_blank",rel:"noopener noreferrer",href:"www.youtube.com",children:"Google Certified Associate Android Developer"}),o("p",{children:["Contributed to open-source projects like"," ",e("a",{className:"underline",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/knadh/indexed-cache",children:"Indexed-cache by zerodha"}),","," ",e("a",{className:"underline",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/typescript-exercises/typescript-exercises",children:"Typescript-exercises"})]})]})]}),ne={root:null,rootMargin:"0px 0px 0px 0px",threshold:0},se=a=>{const[l,c]=p.exports.useState(!1);return p.exports.useEffect(()=>{a.current&&new IntersectionObserver((r,i)=>{r.forEach(d=>{d.isIntersecting&&(c(!0),i.unobserve(a.current))})},ne).observe(a.current)},[a]),l},le={GitHub:{icon:e(C,{})},LiveDemo:{icon:e(J,{})},Youtube:{icon:e($,{})},PlayStore:{icon:e(F,{})}},ce=({project:a})=>{const l=p.exports.useRef(null),c=se(l);return e("div",{className:"project",ref:l,children:c&&o(D,{children:[o("div",{className:"project-content fadeInDownAnimation",style:{"--animation-delay":"0.5s"},children:[e("h2",{children:a.header}),e("div",{className:"proj-description",children:a.description.map(s=>e("p",{children:s},s))}),e("ul",{className:"proj-tech-stack",children:a.techStack.map(s=>e("li",{children:s},s))}),e("div",{className:"project-links",children:a.links.map(s=>e("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"icon",children:le[s.label].icon},s.label))})]}),e("div",{className:"project-img fadeInDownAnimation",children:e("img",{src:a.img,alt:""})})]})})},G=700,w=G/9,S=window.innerWidth,j=18e3,m=Math.min(Math.max(j/S,15),40);console.log("dx: ",m);console.log("window-width ",S);console.log("value / window-width  ",j/S);const f={top:m,right:0,bottom:w,left:m+40},I=m/1.5;console.log("font-size: ",I);const de=K().nodeSize([m,w]),A=V().x(a=>a.y).y(a=>a.x),pe="\u0915\u0947\u0924\u0928",he="01020000",me=()=>{const a=p.exports.useRef(),l=p.exports.useRef(),c=p.exports.useRef();return p.exports.useEffect(()=>{async function s(){const r=await q("/portfolio/data.json");console.log(r);const i=Q(r,n=>n.c);console.log(i),i.x0=w/2,i.y0=0,i.descendants().forEach((n,u)=>{n.id=u,n._children=n.children,n.children=he.startsWith(n.data.i)?n.children:null});const d=N(a.current).style("font","10px sans-serif").style("user-select","none"),W=N(l.current).attr("fill","none").attr("stroke","var(--slate)").attr("stroke-opacity",.4).attr("stroke-width",1.5),E=N(c.current).attr("pointer-events","all");function T(n){const u=L&&L.altKey?2500:250;console.log(u);const M=i.descendants().reverse(),O=i.links();de(i);let v=i,b=i;i.eachBefore(t=>{t.x<v.x&&(v=t),t.x>b.x&&(b=t)});const P=b.x-v.x+f.top+f.bottom,g=d.transition().duration(u).attr("viewBox",[-f.left,v.x-f.top,G,P]).tween("resize",window.ResizeObserver?null:()=>()=>d.dispatch("toggle")),x=E.selectAll("g").data(M,t=>t.id),y=x.enter().append("g").attr("transform",t=>`translate(${n.y0},${n.x0})`).attr("cursor",t=>t._children?"pointer":"default").attr("fill-opacity",0).attr("stroke-opacity",0).on("click",t=>{t.children=t.children?null:t._children,T(t)});y.append("circle").attr("r",2.5).attr("fill",t=>t._children?"transparent":"var(--light-slate)").attr("stroke",t=>t._children?"var(--green)":null).attr("stroke-width",1),y.append("text").attr("dy","0.31em").attr("font-size",I).attr("x",t=>t._children?-6:6).attr("text-anchor",t=>t._children?"end":"start").text(t=>t.data.v).attr("fill",t=>t.data.v===pe?"var(--white)":t._children?"var(--green)":"var(--lightest-slate)"),x.merge(y).transition(g).attr("transform",t=>`translate(${t.y},${t.x})`).attr("fill-opacity",1).attr("stroke-opacity",1),x.exit().transition(g).remove().attr("transform",t=>`translate(${n.y},${n.x})`).attr("fill-opacity",0).attr("stroke-opacity",0);const k=W.selectAll("path").data(O,t=>t.target.id),_=k.enter().append("path").attr("d",t=>{const h={x:n.x0,y:n.y0};return A({source:h,target:h})});k.merge(_).transition(g).attr("d",A),k.exit().transition(g).remove().attr("d",t=>{const h={x:n.x,y:n.y};return A({source:h,target:h})}),i.eachBefore(t=>{t.x0=t.x,t.y0=t.y})}T(i)}s()},[]),e("div",{className:"family-tree",children:o("svg",{ref:a,children:[e("g",{ref:l}),e("g",{ref:c})]})})},ue=[{order:1,header:"Covid-19 India",description:["A clone of covid19india.org in Typescript.","Learn how covid19india.org is architected. and how to implement common patterns like dark-mode, multi-language support, data-fetching and lazy-loading etc."],techStack:["ReactJs","Typescript","React-Spring","i18next","sass","D3.js","eslint","esbuild","Suspense"],links:[{label:"GitHub",url:""},{label:"LiveDemo",url:"https://covid19india.org/"}],img:"/portfolio/img/covid-19-india.png"},{order:2,header:"Emoji Rain",description:["Interactive Emoji rain with WebSockets in react and AWS lambda","Created backend with Infrastructure as a code using AWS CDK","Used this project as a example to host a hands-on session on getting started with AWS"],techStack:["AWS CDK","Github Actions","AWS Lambda","API Gateway","DynamoDB","WebSocket"],links:[{label:"GitHub",url:""},{label:"LiveDemo",url:"https://covid19india.org/"},{label:"Youtube",url:"https://covid19india.org/"}],img:"/portfolio/img/emoji-rain.gif"},{order:3,header:"ytLiveChatBot",description:["Youtube live-stream chat-bot","ytLiveChatBot is a golang library for cli base applications that makes it easy to read and write live-chat on/from one or more youtube live streams simultaneously using youtube api and Google Oauth"],techStack:["Oauth","Golang","Go-routines","Youtube API"],links:[{label:"GitHub",url:""},{label:"LiveDemo",url:"https://covid19india.org/"},{label:"Youtube",url:"https://covid19india.org/"}],img:"/portfolio/img/ytchatbot.png"},{order:4,header:"jwt-auth-server",description:["A simple JWT auth server","Created a JWT auth server template using recommended best practices and design patterns, to get started with your project quickly","The template features secure access-token and refresh-token generation and validation, TypeORM with postgres, Apollo GraphQL and TypeGraphQL for schema entity mapping"],techStack:["TypeScript","JWT","Apollo-GraphQL","TypeORM","Postgres","Type-graphql"],links:[{label:"GitHub",url:""},{label:"LiveDemo",url:"https://covid19india.org/"},{label:"Youtube",url:"https://covid19india.org/"}],img:"/portfolio/img/jwt-auth.png"},{header:"Tic Tac Toe",description:["A Android App of Single Player/Multiplayer Tic Tac Toe using min-max algorithm","Created an unbeatable Single player Tic-Tac-Toe game as a college project and deployed it on PlayStore"],techStack:["Java","Min-max algorithm","Android Studio","PlayStore"],links:[{label:"GitHub",url:""},{label:"PlayStore",url:"https://covid19india.org/"}],img:"/portfolio/img/tic-tac-toe.png"},{header:"Butterfly: Way Through Sky",description:["A 2D Android Game in Java using Game Loop","Created a 2D Android Game like 'flappy bird' as a College project and deployed it on Google Play Store."],techStack:["Java","Game loop","Android Studio","PlayStore","Graphics Design"],links:[{label:"GitHub",url:""},{label:"LiveDemo",url:"https://covid19india.org/"},{label:"Youtube",url:"https://covid19india.org/"}],img:"/portfolio/img/butterfly.png"},{header:"Chrome Extension: Remove DOM Events",description:["Created A Chrome Extension that removes DOM events from the page","Some websites have DOM events that can be used to track user activity and track user behavior, for example a site might track if you change the tab or click on a link. This extension removes these events from the page."],techStack:["Javascript","Chrome Extension"],links:[{label:"GitHub",url:""}],img:"/portfolio/img/remove-dom-events.png"}];function ve(){return o(D,{children:[e(U,{snowflakeCount:50,style:{height:"300vh",zIndex:1e3}}),o("div",{className:"app",children:[o("div",{className:"hero-about-container",children:[o("div",{className:"info-header",children:[e(oe,{}),e("hr",{}),e(ae,{}),e("hr",{})]}),e(re,{})]}),e(me,{}),o("div",{className:"projects",id:"projects",children:[e("h1",{children:"Some of my Projects"}),ue.reverse().map(a=>e(ce,{project:a},a.header))]})]})]})}X.render(e(Z.StrictMode,{children:e(ve,{})}),document.getElementById("root"));

import{j as e,c as a,bk as t,bl as r,b1 as l,m as s,bs as i,A as n}from"./index-B2PVNfyW.js";import{f as o}from"./vlc-PJu95i3N.js";import{P as c}from"./ArtPlayer-D4HStKtz.js";import"./_commonjs-dynamic-modules-BHR_E30J.js";const d=a=>e.jsx("svg",{viewBox:"0 0 24 24",width:"1.5rem",height:"1.5rem",...a,children:e.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-1.306-6.154l4.72-2.787c.781-.462.781-1.656 0-2.118l-4.72-2.787C9.934 7.706 9 8.29 9 9.214v5.573c0 .923.934 1.507 1.694 1.059",clipRule:"evenodd"})}),m=["default","4:3","16:9"],u=a.forwardRef((({videoName:t,videoUrl:r,style:l={},...s})=>{const i=a.useRef(null);return a.useEffect((()=>(i.current&&r&&(i.current.switchUrl(r),i.current.title=t),()=>{i.current&&(i.current.video.pause(),i.current.video.removeAttribute("src"),i.current.video.load())})),[r]),e.jsx("div",{className:"relative",children:e.jsx(c,{...s,style:l,option:{container:"",url:"",volume:.6,muted:!1,autoplay:!0,pip:!0,autoSize:!1,autoMini:!0,screenshot:!0,setting:!0,flip:!0,playbackRate:!0,aspectRatio:!0,fullscreen:!0,fullscreenWeb:!0,mutex:!0,backdrop:!0,hotkey:!0,playsInline:!0,autoPlayback:!0,airplay:!0,lock:!0,fastForward:!0,autoOrientation:!0,moreVideoAttr:{playsInline:!0}},getInstance:e=>{i.current=e,e.hotkey.add(65,(a=>{e.aspectRatio=m[(m.findIndex((a=>a===e.aspectRatio))+1)%m.length]}))}})})})),p=t("/_authenticated/watch/$id/$name"),x=a.memo((()=>{const{id:a,name:t}=p.useParams(),{data:n}=r(i),c=l(a,t,null==n?void 0:n.hash);return e.jsxs("div",{className:"relative mx-auto mt-4 max-w-4xl",children:[e.jsx(u,{className:"aspect-[16/9]",videoName:t,videoUrl:c}),e.jsx("div",{className:"flex relative flex-col mt-4 gap-4",children:e.jsxs("div",{className:"grid grid-cols-6 gap-x-2",children:[e.jsx("h1",{className:"text-base sm:text-xl  mr-auto font-medium col-span-full md:col-span-5 break-all",children:t}),e.jsxs("div",{className:"inline-flex gap-2 relative col-span-full md:col-span-1",children:[e.jsx(s,{as:"a",isIconOnly:!0,variant:"text",rel:"noopener noreferrer",href:`potplayer://${c}`,children:e.jsx(d,{})}),e.jsx(s,{as:"a",isIconOnly:!0,variant:"text",rel:"noopener noreferrer",href:`vlc://${c}`,children:e.jsx(o,{})})]})]})})]})}));x.displayName="VideoSoloPreview";const v=n("/_authenticated/watch/$id/$name")({component:x});export{v as Route};

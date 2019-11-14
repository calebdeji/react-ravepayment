(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"fjs/":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("aD51");var a=n("SAVP"),r=n("TjRS");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/api-reference.mdx"}});var c={_frontmatter:o},i=r.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(i,b({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"api"},"API"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"react-ravepayment")," exports the following methods:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"/reference/api#useRavePayment"}),Object(a.b)("inlineCode",{parentName:"a"},"useRavePayment"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"/reference/api#RaveProvider"}),Object(a.b)("inlineCode",{parentName:"a"},"RaveProvider"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"/reference/api#RavePaymentContext"}),Object(a.b)("inlineCode",{parentName:"a"},"RavePaymentContext"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"/reference/api#RavePayment"}),Object(a.b)("inlineCode",{parentName:"a"},"RavePayment"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"/reference/api#RavePaymentButton"}),Object(a.b)("inlineCode",{parentName:"a"},"RavePaymentButton")))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"useravepayment"},Object(a.b)("inlineCode",{parentName:"h2"},"useRavePayment")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-js"}),"function useRavePayment(\n  options: RaveProps\n): {initializePayment: (onSuccess?: Function, onClose?: Function) => void}\n")),Object(a.b)("p",null,"Create an instance of `rave-payment and attached the rave payment script to the page."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"useRavePayment")," function accepts the following arguments:"),Object(a.b)("h3",{id:"options-raveprops"},Object(a.b)("inlineCode",{parentName:"h3"},"options")," RaveProps"),Object(a.b)("p",null,"An options object use to create the instance of the rave payment. See the\n",Object(a.b)("a",b({parentName:"p"},{href:"/parameters#options"}),Object(a.b)("inlineCode",{parentName:"a"},"useRavePayment")," Options")," section for more details."),Object(a.b)("h3",{id:"initializepayment"},Object(a.b)("inlineCode",{parentName:"h3"},"initializePayment")),Object(a.b)("p",null,"Function to trigger the payment process. The function can be called with any component that accept ",Object(a.b)("inlineCode",{parentName:"p"},"onClick")," handler, it accepts two parameters which are optional and are function."),Object(a.b)("h2",{id:"raveprovider"},Object(a.b)("inlineCode",{parentName:"h2"},"RaveProvider")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-js"}),"<RaveProvider {...options}>...</RaveProvider>\n")),Object(a.b)("p",null,"A react component to create a provider wrapper for rave payment which expose API to use from its child component. The componnt accepts the ",Object(a.b)("a",b({parentName:"p"},{href:"/parameters#options"}),"Options"),"` as props and React component as children. Other props include:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Props"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Default"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"onSuccess"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Function"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Empty")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"onClose"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Function"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Empty")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"children"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"ReactComponent"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Empty")))),Object(a.b)("h2",{id:"ravepaymentcontxnt"},Object(a.b)("inlineCode",{parentName:"h2"},"RavePaymentContxnt")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-js"}),"<RavePaymentContext.Consumer>\n  {({initializePayment, onSuccess, onClose}) => ...}\n</RavePaymentContext.Consumer>\nor\n\nconst { initializePayment } = useContext(RavePaymentContext)\n")),Object(a.b)("p",null,"The context allows you to extends rave provider ",Object(a.b)("inlineCode",{parentName:"p"},"initializePayment")," in a child component. NOTE: The context must be used in a component that has ",Object(a.b)("inlineCode",{parentName:"p"},"RaveProvider")," parent in the scope."),Object(a.b)("h2",{id:"ravepayment"},Object(a.b)("inlineCode",{parentName:"h2"},"RavePayment")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-js"}),"<RavePayment {...options}>\n  {({initializePayment, onSuccess, onClose}) => ...}\n</RavePayment>\n")),Object(a.b)("p",null,"A react render props component to create a provider wrapper for rave payment which expose API to use from its child component. The componnt accepts the ",Object(a.b)("a",b({parentName:"p"},{href:"/parameters#options"}),"Options"),"` as props and React component as children. Other props include:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Props"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Default"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"onSuccess"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Function"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Empty")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"onClose"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Function"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Empty")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"children"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"ReactComponent"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Empty")))),Object(a.b)("h2",{id:"ravepaymentbutton"},Object(a.b)("inlineCode",{parentName:"h2"},"RavePaymentButton")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-js"}),"<RavePaymentButton onClick={() => initializePayment()}>Pay 2000</RavePaymentButton>\n")),Object(a.b)("p",null,"A customizable react button component you can use to create trigger the rave payment. This component is to be used with the ",Object(a.b)("inlineCode",{parentName:"p"},"RaveProvider")," because it uses the ",Object(a.b)("inlineCode",{parentName:"p"},"RavePaymentContext")," exposed by the provider. It accpets all button props."))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/api-reference.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-api-reference-mdx-8be601c56978a2895bf8.js.map
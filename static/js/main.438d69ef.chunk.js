(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{83:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i(29),r=i.n(a),o=i(17),c=i(13),s=i(6),l=i(0);const d=s.b.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
  }
`;function m(e){let{heading:t="Col Heading",links:i=[{type:"Link",title:"Home",path:"/home"},{type:"Link",title:"About",path:"/about"}]}=e;return Object(l.jsxs)(d,{children:[Object(l.jsx)("h2",{className:"heading",children:t}),Object(l.jsx)("ul",{children:i.map(((e,t)=>Object(l.jsx)("li",{children:"Link"===e.type?Object(l.jsx)(o.b,{to:e.path,children:e.title}):Object(l.jsx)("a",{href:e.path,target:"_blank",rel:"noreferrer",children:e.title})},t)))})]})}const p=s.b.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;function j(e){let{children:t}=e;return Object(l.jsx)(p,{className:"para",children:Object(l.jsx)("p",{children:t})})}const b=s.b.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;function h(){return Object(l.jsxs)(b,{children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"footer__col1",children:[Object(l.jsx)("h1",{className:"footer__col1__title",children:"Harsh Thakkar"}),Object(l.jsx)(j,{children:"I am a web Developer. I did my B.E in Information Technology from Aditya Silver Oak Institute Of Technology,Ahmedabad,Gujarat. I am currently working as a MERN stack developer."})]}),Object(l.jsx)("div",{className:"footer__col2",children:Object(l.jsx)(m,{heading:"Important Links",links:[{title:"Home",path:"/",type:"Link"},{type:"Link",title:"About",path:"/about"},{type:"Link",title:"Projects",path:"/projects"},{type:"Link",title:"Contact",path:"/contact"}]})}),Object(l.jsx)("div",{className:"footer__col3",children:Object(l.jsx)(m,{heading:"Contact Info",links:[{title:"+91 9099466250",path:"tel:+91 9099466250"},{title:"harshfullstackdevelopment@gmail.com",path:"mailto:harshfullstackdevelopment@gmail.com"}]})}),Object(l.jsx)("div",{className:"footer__col4",children:Object(l.jsx)(m,{heading:"social Links",links:[{title:"Linkedin",path:"http://linkedin.com"},{title:"Instagram",path:"http://instagram.com"}]})})]}),Object(l.jsx)("div",{className:"copyright",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(j,{children:"Made with \u2764\ufe0f by Harsh Thakkar"})})})]})}var x=i(16);const g=s.b.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;function u(){const[e,t]=Object(n.useState)(!1);return Object(l.jsxs)(g,{children:[Object(l.jsx)("div",{className:"mobile-menu-icon",onClick:()=>t(!e),role:"button",onKeyDown:()=>t(!e),tabIndex:0,children:Object(l.jsx)(x.g,{})}),Object(l.jsxs)("ul",{className:e?"navItems":"navItems hide-item",children:[Object(l.jsx)("div",{className:"closeNavIcon",onClick:()=>t(!e),role:"button",onKeyDown:()=>t(!e),tabIndex:0,children:Object(l.jsx)(x.c,{})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.c,{to:"/",exact:!0,onClick:()=>t(!e),role:"button",onKeyDown:()=>t(!e),tabIndex:0,children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.c,{to:"/about",onClick:()=>t(!e),role:"button",onKeyDown:()=>t(!e),tabIndex:0,children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.c,{to:"/skills",onClick:()=>t(!e),role:"button",onKeyDown:()=>t(!e),tabIndex:0,children:"Skills"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.c,{to:"/projects",onClick:()=>t(!e),role:"button",onKeyDown:()=>t(!e),tabIndex:0,children:"Projects"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.c,{to:"/certificates",onClick:()=>t(!e),role:"button",onKeyDown:()=>t(!e),tabIndex:0,children:"Certificates"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.c,{to:"/contact",onClick:()=>t(!e),role:"button",onKeyDown:()=>t(!e),tabIndex:0,children:"Contact"})})]})]})}function f(){const{pathname:e}=Object(c.f)();return Object(n.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null}const O=s.b.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${e=>e.outline?"transperant":"var(--gray-1)"};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${e=>e.outline?"var(--gary-1)":"black"};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;function _(e){let{btnText:t="test",btnLink:i="test",outline:n=!1}=e;return Object(l.jsx)(O,{outline:n,className:"button-wrapper",children:Object(l.jsx)(o.b,{className:"button",to:i,children:t})})}var v=i.p+"static/media/giphy.32a62a58.webp";const y=s.b.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 3rem;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;function k(e){let{title:t="Title",items:i=["HTML","CSS"]}=e;return Object(l.jsxs)(y,{children:[Object(l.jsx)("h1",{className:"title",children:t}),Object(l.jsx)("div",{className:"items",children:i.map(((e,t)=>Object(l.jsx)("div",{className:"item",children:Object(l.jsx)(j,{children:e})},t)))})]})}const w=s.b.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;function A(){return Object(l.jsx)(w,{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"contactBanner__wrapper",children:[Object(l.jsx)(j,{children:"What\u2019s Next?"}),Object(l.jsx)("h3",{className:"contactBanner__heading",children:"Get In Touch"}),Object(l.jsx)(j,{children:"my inbox is always open. Whether you have a question or just want to say hi, Contact me now!"}),Object(l.jsx)(_,{btnText:"Contact Now",btnLink:"/contact"})]})})})}const N=s.b.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;function I(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(N,{children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"top-section",children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsxs)("p",{className:"about__subheading",children:["Hi, I am ",Object(l.jsx)("span",{children:"Harsh Thakkar"})]}),Object(l.jsx)("h2",{className:"about__heading",children:"Web developer"}),Object(l.jsx)("div",{className:"about__info",children:Object(l.jsxs)(j,{children:["I am a web Developer. I did my B.E in Information Technology from Aditya Silver Oak Institute Of Technology,Ahmedabad,Gujarat. I am currently working as a MERN stack developer.",Object(l.jsx)("br",{})," ",Object(l.jsx)("br",{}),"Coding is also an art for me. I love it and I also love to create things that can be usefull to others. I find it really interesting and I enjoyed the process a lot.",Object(l.jsx)("br",{})]})}),Object(l.jsx)(_,{btnText:"Download CV",btnLink:"#"})]}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)("img",{src:v,alt:"me"})})]}),Object(l.jsxs)("div",{className:"about__info__items",children:[Object(l.jsxs)("div",{className:"about__info__item",children:[Object(l.jsx)("h1",{className:"about__info__heading",children:"Education"}),Object(l.jsx)(k,{title:"School",items:["Lord Krishna School Of Science,Sidhpur"]}),Object(l.jsx)(k,{title:"Graduation",items:["BE in IT from Aditya Silver Oak Institue Of Technology,Ahmedabad"]})]}),Object(l.jsxs)("div",{className:"about__info__item",children:[Object(l.jsx)("h1",{className:"about__info__heading",children:"My Skills"}),Object(l.jsx)(k,{title:"FrontEnd",items:["HTML","CSS","JavaScript","REACT"]}),Object(l.jsx)(k,{title:"BackEnd,DB",items:["Node","Express","MongoDB","Socket.io"]})]})]})]}),Object(l.jsx)(A,{})]})})}s.b.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;const S=s.b.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
`;function L(e){let{icon:t=Object(l.jsx)(x.h,{}),text:i="I need text "}=e;return Object(l.jsxs)(S,{children:[Object(l.jsx)("div",{className:"icon",children:t}),Object(l.jsx)("div",{className:"info",children:Object(l.jsx)(j,{children:i})})]})}const z=s.b.div`
  text-align: center;
  p {
    font-family: 'RobotoMono Regular';
    font-size: 2rem;
  }
  h2 {
    font-family: 'Montserrat Bold';
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;function M(e){let{subheading:t="Need Subheading",heading:i="need heading"}=e;return Object(l.jsxs)(z,{className:"section-title",children:[Object(l.jsx)("p",{children:t}),Object(l.jsx)("h2",{children:i})]})}const B=s.b.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: center;
    position: relative;
  }
  // .contactSection__wrapper::after {
  //   position: absolute;
  //   content: '';
  //   width: 2px;
  //   height: 50%;
  //   background-color: var(--gray-1);
  //   left: 50%;
  //   top: 30%;
  //   transform: translate(-50%, -50%);
  // }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
      justify-content: center;
    }
    // .contactSection__wrapper::after {
    //   display: none;
    // }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;function T(){return Object(l.jsx)(B,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(M,{heading:"contact",subheading:"get in touch"}),Object(l.jsx)("div",{className:"contactSection__wrapper",children:Object(l.jsxs)("div",{className:"left",children:[Object(l.jsx)(L,{icon:Object(l.jsx)(x.f,{}),text:"+91 9099466250"}),Object(l.jsx)(L,{icon:Object(l.jsx)(x.e,{}),text:"harshfullstackdevelopment@gmail.com"})]})})]})})}function D(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(T,{})})}const R=s.b.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;function C(){return Object(l.jsx)(R,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"aboutSection__left",children:[Object(l.jsx)(M,{subheading:"Let me introduce myself",heading:"About Me"}),Object(l.jsx)(j,{children:"I am a web Developer. I did my B.E in Information Technology from Aditya Silver Oak Institute Of Technology,Ahmedabad,Gujarat. I am currently working as a MERN stack developer."}),Object(l.jsxs)("div",{className:"aboutSection__buttons",children:[Object(l.jsx)(_,{btnText:"Works",btnLink:"/projects"}),Object(l.jsx)(_,{btnText:"Read More",btnLink:"/about",outline:!0})]})]}),Object(l.jsx)("div",{className:"aboutSection__right",children:Object(l.jsx)("img",{className:"aboutImg",src:v,alt:"Img"})})]})})}var W=i(106);const J=s.b.div`
  text-align: center;
  .servicesItem__icon {
    display: inline-block;
    transform: translateZ(0);
    box-shadow: 0 0 1px transparent;
    max-height: 90px !important;
    max-width: 80px !important;
    padding: 0.25rem !important;
    background-color: #100f0f !important;
    border: 1px solid #100f0f !important;
    border-radius: 0.25rem !important;
    transition: all 0.2s ease-in-out !important;
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
  .contain {
    box-sizing: border-box;
    margin-bottom: 10px;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    /* display: flex; */
    width: 33%;
    display: inline-table;
  }
`;function q(e){let{icon:t=Object(l.jsx)(x.d,{}),title:i="skill"}=e;return Object(l.jsx)(W.a,{item:!0,className:"contain",xs:3,children:Object(l.jsxs)(J,{className:"servicesItem",children:[Object(l.jsx)("img",{className:"servicesItem__icon",src:t,alt:"Img"}),Object(l.jsx)("div",{className:"servicesItem__title",children:i})]})})}var E=i.p+"static/media/html.c77fed67.jpg",H=i.p+"static/media/css.9a088dd1.png",F=i.p+"static/media/bootstrap.31308e1f.png",K=i.p+"static/media/javascript.26cc380e.png",Q=i.p+"static/media/jquery.1f545492.png",X=i.p+"static/media/ts.8fe41361.png",V=i.p+"static/media/react.6bcffb56.png",Z=i.p+"static/media/redux.a21365a6.jpg",G=i.p+"static/media/node.fa9823ea.png",P="data:image/png;base64,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",Y=i.p+"static/media/mongodb.e1a46719.png",U=i.p+"static/media/gitlab.675eef43.png";const $=s.b.div`
  .services__allItems {
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
    width: 100%;
    margin: auto;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;function ee(){return Object(l.jsx)($,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(M,{subheading:"What I love to do!",heading:"MY SKILLS"}),Object(l.jsxs)("div",{className:"services__allItems",children:[Object(l.jsx)(q,{icon:E,title:"HTML 5"}),Object(l.jsx)(q,{icon:H,title:"CSS 3"}),Object(l.jsx)(q,{icon:F,title:"Bootstrap"}),Object(l.jsx)(q,{icon:K,title:"JavaScript"}),Object(l.jsx)(q,{icon:Q,title:"JQuery"}),Object(l.jsx)(q,{icon:X,title:"TypeScript"}),Object(l.jsx)(q,{icon:V,title:"ReactJS"}),Object(l.jsx)(q,{icon:Z,title:"Redux"}),Object(l.jsx)(q,{icon:G,title:"NodeJS"}),Object(l.jsx)(q,{icon:P,title:"ExpressJS"}),Object(l.jsx)(q,{icon:Y,title:"MongoDB"}),Object(l.jsx)(q,{icon:U,title:"Gitlab"})]})]})})}var te=i(107),ie=i(101),ne=i(105),ae=i(100),re=i.p+"static/media/projectImg.771236e1.png";const oe=s.b.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;function ce(e){let{img:t=re,title:i="Project Name",Links:n="/projects",desc:a="Lorem Ipsum is simply dummy text of the printing and typesetting industry."}=e;return Object(l.jsxs)(oe,{children:[Object(l.jsx)("a",{href:n,className:"projectItem__img",children:Object(l.jsx)("img",{src:t,alt:"project img",path:n})}),Object(l.jsxs)("div",{className:"projectItem__info",children:[Object(l.jsx)("a",{href:n,children:Object(l.jsx)("h3",{className:"projectItem__title",children:i})}),Object(l.jsx)("p",{className:"projectItem__desc",children:a})]})]})}i(82);var se=i(108),le=i.p+"static/media/utracker.b6001c97.jpg",de=i.p+"static/media/Capture blog.0b2e7861.png";i.p,i.p,i.p;var me=[{id:Object(se.a)(),name:"E-Commerce",desc:"An application to manage items,categories from Admin Dashboard and user can see and place the order I have added Stripe and paypal payment gateway with testing key.",img:le,Links:"https://github.com/harsh599599/prac-projects"},{id:Object(se.a)(),name:"Create of Blog",desc:"An application in which you can write your blog,you can update and delete blog.",img:de,Links:"https://createyourblog-harshthakkar.netlify.app"},{id:Object(se.a)(),name:"E-Commerce",desc:"An application to manage items,categories from Admin Dashboard and user can see and place the order I have added Stripe and paypal payment gateway with testing key.",img:le,Links:"https://github.com/harsh599599/prac-projects"}];ne.a.use([ae.a]);const pe=s.b.div`
  padding: 10rem 0;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;function je(){return Object(l.jsx)(pe,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(M,{subheading:"some of my recent works",heading:"Projects"}),Object(l.jsx)("div",{className:"projects__allItems",children:Object(l.jsx)(te.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3}},children:me.map(((e,t)=>{if(!(t>=5))return Object(l.jsx)(ie.a,{children:Object(l.jsx)(ce,{title:e.name,img:e.img,Links:e.Links,desc:e.desc})},e.id)}))})})]})})}var be=i(102),he=i(109);var xe=[{id:1,name:"Full Stack MERN Bootcamp",org:"LearnCodeOnline",desc:"https://i.postimg.cc/fWvssTgV/0001.jpg"},{id:2,name:"Responsive web Design",org:"freecodecamp",desc:"https://i.postimg.cc/vZjDJFQS/freecodecamp-RWD.png"},{id:3,name:"JavaScript for Web Designer",org:"Linkedin",desc:"https://i.postimg.cc/dQfkMbmM/Linked-In-Learning-Certificate-3.png"},{id:4,name:"Controlling CSS with JavaScript",org:"Linkedin",desc:"https://i.postimg.cc/2ynV76q4/1650005041607.png"},{id:5,name:"JavaScript The Tricky Bits",org:"Linkedin",desc:"https://i.postimg.cc/vBFyLv5N/Linked-In-Learning-Certificate-1.png"},{id:6,name:"HTML5: GeoLocation",org:"Linkedin",desc:"https://i.postimg.cc/rmJH0GjW/1647498597033.png"},{id:7,name:"HTML5: Structure,Syntax,and Semantics",org:"Linkedin",desc:"https://i.postimg.cc/g28NLqkJ/1647427241689.png"},{id:8,name:"Learning the JavaScript Language",org:"Linkedin",desc:"https://i.postimg.cc/Vk8HRHhM/1649772345962.png"},{id:9,name:"JavaScript Essential Training",org:"Linkedin",desc:"https://i.postimg.cc/7ZHnbvcB/1649156347931.png"}];const ge=s.b.div`
  overflow-x: hidden;
  padding: 10rem 0;
  text-align: center;
  .testimonial__wrapper {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
  }
  .testimonial__info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
  }
  .testimonial__desc {
    .para {
      text-align: center;
    }
  }
  .testimonial__name {
    margin-top: 4rem;
    font-family: 'Montserrat Bold';
    font-size: 2.2rem;
  }
  .testimonial__title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
    z-index: 1;
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: transform, opacity;
    z-index: 1;
  }
  .fade-exit {
    transform: scale(1);
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 200ms ease-in;
    transition-property: transform, opacity;
  }
`;function ue(){const[e,t]=Object(n.useState)(0),i=xe[e];function a(){t(e>=xe.length-1?0:e=>e+1)}function r(){t(0===e?xe.length-1:e=>e-1)}return Object(l.jsx)(ge,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(M,{subheading:"see my certifications so far!",heading:"Certificates \ud83c\udfc6"}),Object(l.jsx)("div",{className:"testimonial__wrapper",children:Object(l.jsx)(be.a,{component:null,children:Object(l.jsx)(he.a,{timeout:300,classNames:"fade",children:Object(l.jsxs)("div",{className:"testimonial__info",children:[Object(l.jsx)("div",{className:"testimonial__desc",children:Object(l.jsx)("img",{src:i.desc,alt:""})}),Object(l.jsx)("h2",{className:"testimonial__name",children:i.name}),Object(l.jsx)("p",{className:"testimonial__title",children:i.org})]})},i.id)})}),Object(l.jsxs)("div",{className:"arrows",children:[Object(l.jsx)("div",{className:"prev",onClick:r,role:"button",tabIndex:0,onKeyDown:r,children:Object(l.jsx)(x.a,{})}),Object(l.jsx)("div",{className:"next",onClick:a,role:"button",tabIndex:0,onKeyDown:a,children:Object(l.jsx)(x.b,{})})]})]})})}var fe=i(103),Oe=i(104),_e=i.p+"static/media/Ry6p.6bf8eb64.gif",ve=(i.p,i.p+"static/media/scroll-down-arrow.b013ca45.svg");const ye=s.b.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 730px;
    margin: 0 auto;
  }
  .hero__info {
    margin-top: -20rem;
  }
  .hero__social {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 550px;
    width: 50px;
  }
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 350px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;

          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;function ke(){return Object(l.jsx)(ye,{children:Object(l.jsx)("div",{className:"hero",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("h1",{className:"hero__heading",children:[Object(l.jsx)("span",{children:"Hi, my name is"}),Object(l.jsx)("span",{className:"hero__name",children:"Harsh Thakkar"}),Object(l.jsx)(j,{children:"MERN Stack Developer"})]}),Object(l.jsx)("div",{className:"hero__img",children:Object(l.jsx)("img",{src:_e,alt:""})}),Object(l.jsx)("div",{className:"hero__info",children:Object(l.jsx)(_,{btnText:"SEE MY WORKS",btnLink:"/projects"})}),Object(l.jsx)("div",{className:"hero__social",children:Object(l.jsx)("div",{className:"hero__social__text",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"http://isntagram.com/harsh___thakkar19_",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(fe.a,{})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"http://www.linkedin.com/in/harsh-thakkar-4b7ab5140",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(Oe.a,{})})})]})})}),Object(l.jsxs)("div",{className:"hero__scrollDown",children:[Object(l.jsx)("p",{children:"Scroll"}),Object(l.jsx)("img",{src:ve,alt:"ScrollDown Arrow"})]})]})})})}function we(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(ke,{}),Object(l.jsx)(C,{}),Object(l.jsx)(ee,{}),Object(l.jsx)(je,{}),Object(l.jsx)(ue,{}),Object(l.jsx)(A,{})]})}const Ae=s.b.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;

    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;function Ne(){const[e,t]=Object(n.useState)(""),[i,a]=Object(n.useState)(me);Object(n.useEffect)((()=>{""!==e&&a((()=>me.filter((t=>t.name.toLowerCase().match(e.toLowerCase())))))}),[e]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(Ae,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(M,{heading:"Projects",subheading:"some of my recent works"}),Object(l.jsx)("div",{className:"projects__searchBar",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"text",value:e,onChange:e=>{e.preventDefault(),t(e.target.value),!e.target.value.length>0&&a(me)},placeholder:"Project Name"}),Object(l.jsx)(x.i,{className:"searchIcon"})]})}),Object(l.jsx)("div",{className:"projects__allItems",children:i.map((e=>Object(l.jsx)(ce,{title:e.name,desc:e.desc,img:e.img},e.id)))})]})})})}function Ie(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(ue,{})})}const Se=s.b.div`
  padding: 10rem 0;
  .services__allItems {
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
    width: 100%;
    margin: auto;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;function Le(){return Object(l.jsx)(Se,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(M,{subheading:"What I love to do!",heading:"MY SKILLS"}),Object(l.jsxs)("div",{className:"services__allItems",children:[Object(l.jsx)(q,{icon:E,title:"HTML 5"}),Object(l.jsx)(q,{icon:H,title:"CSS 3"}),Object(l.jsx)(q,{icon:F,title:"Bootstrap"}),Object(l.jsx)(q,{icon:K,title:"JavaScript"}),Object(l.jsx)(q,{icon:Q,title:"JQuery"}),Object(l.jsx)(q,{icon:X,title:"TypeScript"}),Object(l.jsx)(q,{icon:V,title:"ReactJS"}),Object(l.jsx)(q,{icon:Z,title:"Redux"}),Object(l.jsx)(q,{icon:G,title:"NodeJS"}),Object(l.jsx)(q,{icon:P,title:"ExpressJS"}),Object(l.jsx)(q,{icon:Y,title:"MongoDB"}),Object(l.jsx)(q,{icon:U,title:"Gitlab"})]})]})})}function ze(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(f,{}),Object(l.jsxs)(c.c,{children:[Object(l.jsx)(c.a,{path:"/about",children:Object(l.jsx)(I,{})}),Object(l.jsx)(c.a,{path:"/skills",children:Object(l.jsx)(Le,{})}),Object(l.jsx)(c.a,{path:"/contact",children:Object(l.jsx)(D,{})}),Object(l.jsx)(c.a,{path:"/projects",children:Object(l.jsx)(Ne,{})}),Object(l.jsx)(c.a,{path:"/certificates",children:Object(l.jsx)(Ie,{})}),Object(l.jsx)(c.a,{path:"/",children:Object(l.jsx)(we,{})})]}),Object(l.jsx)(h,{})]})})}var Me=s.a`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #000000;
    --gray-1: white;
    --deep-dark: #8892B0;
    --gray-2: white;
    --white : #00FDFD;
    --black: black;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`,Be=i.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Te=i.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",De=i.p+"static/media/Montserrat-Bold.079ca05d.ttf";var Re=s.a`
  @font-face {
    font-family: 'RobotoMono Regular';
    src: url(${Be});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${Te});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${De});
    font-style: normal;
  }
  html{
    font-family: 'RobotoMono Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'RobotoMono Regular';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat SemiBold'
  }

`;r.a.render(Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Me,{}),Object(l.jsx)(Re,{}),Object(l.jsx)(ze,{})]}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.438d69ef.chunk.js.map
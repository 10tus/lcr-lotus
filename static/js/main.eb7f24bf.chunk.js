(this["webpackJsonpocr-web"]=this["webpackJsonpocr-web"]||[]).push([[0],{24:function(e,t,c){},48:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(15),r=c.n(n),o=(c(48),c(49),c(39)),l=c(3),i=c(11),d=c(0),j=function(){return Object(d.jsx)("div",{className:"jumbotron jumbotron-fluid mt-5",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"display-4",children:"Lotto Checker"}),Object(d.jsx)("p",{className:"lead",children:"Want to take your lotto checking to the next NEXT level?"}),Object(d.jsx)(i.Link,{className:"btn btn-outline-success btn-lg",to:"services",smooth:!0,duration:500,spy:!0,exact:"true",activeClass:"active",offset:-80,children:"Try it Now!"})]})})},h=c(16),b=c(83),u=c(84),m=function(){var e=Object(a.useState)(!0),t=Object(h.a)(e,2),c=t[0],s=t[1];return Object(d.jsx)("nav",{className:" navbar fixed-top navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand soc",style:{fontSize:"1.5rem"},onClick:i.animateScroll.scrollToTop,children:"LCR"}),Object(d.jsx)("button",{className:"navbar-toggler float-right",type:"button",onClick:function(){return s(!c)},children:c?Object(d.jsx)(b.a,{color:"white",size:25}):Object(d.jsx)(u.a,{color:"white",size:25})}),Object(d.jsx)("div",{className:(c?"":"show")+" collapse navbar-collapse",children:Object(d.jsxs)("ul",{className:"navbar-nav  ",children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.Link,{className:"nav-link  ",to:"about",smooth:!0,duration:500,spy:!0,exact:"true",activeClass:"active",offset:-90,children:"About"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.Link,{className:"nav-link ",to:"services",smooth:!0,duration:500,spy:!0,exact:"true",activeClass:"active",offset:-80,children:"Checker"})})]})})]})})},p=(c(24),function(){return Object(d.jsxs)("div",{className:"container mt-4",id:"about",children:[Object(d.jsx)("h4",{className:"text-center",children:"Check your lotto tickets instantly!"}),Object(d.jsxs)("p",{className:"text-center lead",children:["This tool is powered by Optical Character Recognition.",Object(d.jsx)("br",{})," Created with the purpose of helping Filipinos to reduce time on checking lotto tickets."]}),Object(d.jsxs)("div",{className:"card-deck mb-3  text-center",children:[Object(d.jsx)("div",{className:"col-lg",children:Object(d.jsxs)("div",{className:"card mb-4 box-shadow ",children:[Object(d.jsx)("div",{className:"card-header",children:Object(d.jsx)("h4",{className:"my-0 font-weight-normal",children:"Free"})}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsx)("p",{className:"card-text p-3 lead",children:"No absurd fees, but you have the option to donate for our services if you like!"})})]})}),Object(d.jsx)("div",{className:"col-lg",children:Object(d.jsxs)("div",{className:"card mb-4 box-shadow ",children:[Object(d.jsx)("div",{className:"card-header",children:Object(d.jsx)("h4",{className:"my-0 font-weight-normal",children:"Simple"})}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsx)("p",{className:"card-text lead p-3",children:"No complex instructions, just take a picture and you're done!"})})]})}),Object(d.jsx)("div",{className:"col-lg",children:Object(d.jsxs)("div",{className:"card mb-4 box-shadow ",children:[Object(d.jsx)("div",{className:"card-header",children:Object(d.jsx)("h4",{className:"my-0 font-weight-normal",children:"Efficient"})}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsx)("p",{className:"card-text p-3 lead",children:"We'll get you your winning numbers with an acceptable degree of accuracy!"})})]})})]}),Object(d.jsx)("p",{className:" text-center text-muted",children:"*We are not affiliated with the PCSO, this is merely a tool used for checking PCSO lotto tickets. You must be at least 18 years old to buy a lotto ticket or claim your winnings as stated by PCSO lotto rule. Lastly, we are NOT responsible for your actions.*"})]})}),x=c(12),O=c.n(x),f=c(25),g=c(35),v=c(36),N=c(42),y=c(41),w=c(37),k=c.n(w),C=(c(61),function(e){var t=e.resJson,c=Object(a.useState)(null),n=Object(h.a)(c,2),r=n[0],o=n[1];Object(a.useEffect)((function(){document.getElementById("user-nums-ocr").value=j(t.ocr),o(j(t.yourwin))}),[t.ocr,t.yourwin]);var l=function(){return Object(d.jsx)(s.a.Fragment,{children:Object(d.jsxs)("p",{className:"h6",children:[Object(d.jsx)("span",{className:" badge badge-danger",children:"Error:"})," Could not find winning numbers for lotto ",t.type," with date ",t.date,". Please try changing lotto type or the draw date."]})})},i=function(){return Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{className:"h6 pt-1",children:"Winning Numbers:"})," ",t.win," (In any order)"]})},j=function(e){var t="";return e.forEach((function(e){0===e.length&&(t+="None"),e.forEach((function(c,a){a+1===e.length?t+=c.toString():t+=c.toString()+"-"})),t+="\n"})),t};return Object(d.jsxs)("form",{className:"container",children:["404"===t.win?Object(d.jsx)(l,{}):Object(d.jsx)(i,{}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("p",{className:"col-md ",children:[Object(d.jsx)("span",{className:"h6",children:"Lotto Type:"})," ",t.type]}),Object(d.jsxs)("p",{className:"col-md",children:[Object(d.jsx)("span",{className:"h6",children:"Draw Date:"})," ",t.date]})]}),Object(d.jsxs)("div",{className:"form-row ",children:[Object(d.jsxs)("div",{className:"form-group col-md",children:[Object(d.jsx)("h6",{children:"Your Numbers"}),Object(d.jsx)("textarea",{className:"form-control",id:"user-nums-ocr",rows:"6",cols:"50"})]}),Object(d.jsxs)("div",{className:"form-group col-md",children:[Object(d.jsx)("h6",{children:"Your Winning Numbers"}),Object(d.jsx)("textarea",{readOnly:!0,className:"form-control",id:"user-nums-correct",rows:"6",cols:"50",value:r||j(t.yourwin)})]})]}),Object(d.jsxs)("p",{className:"h6",children:[Object(d.jsx)("span",{className:" badge badge-warning",children:"Notice:"})," If there are any incorrect numbers identified, please manually input your lotto numbers seperated by (-) in the text box provided and click the Recheck button or by changing the crop of the image and click the Analyze button."]}),Object(d.jsx)("button",{type:"button",className:"btn btn-outline-primary mr-1 col-md-2 mb-3 mt-2",onClick:function(){return function(e,t){var c=e.split("\n"),a=t.split("-").map(Number),s=[];c.forEach((function(e){var t=e.split("-").map(Number),c=[];t.some((function(e){a.includes(e)&&c.push(e)})),s.push(c)})),o(j(s))}(document.getElementById("user-nums-ocr").value.trim(),t.win)},children:"Recheck"})]})}),S=c(38),L=c.n(S),F=function(){return Object(d.jsxs)("div",{className:"container mb-4",style:{marginTop:"20px"},id:"services",children:[Object(d.jsx)("h4",{className:"text-center",children:"How to Use"}),Object(d.jsx)("p",{className:"text-center lead",children:"Follow this quick tutorial below to learn more."}),Object(d.jsx)("div",{style:{position:"relative",paddingTop:"40%"},children:Object(d.jsx)(L.a,{controls:!0,style:{position:"absolute",top:"0",left:"0"},url:"https://youtu.be/8YW_xtmHiCI",width:"100%",height:"100%"})})]})},T=function(e){Object(N.a)(c,e);var t=Object(y.a)(c);function c(){var e;Object(g.a)(this,c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={src:null,crop:"",typeL:["6-42","6-45","6-49","6-55","6-58"],getDate:null,typeVal:"6-42",croppedImageUrl:null,currBlob:null,resultObj:null,alert:!1,loading:!1},e.convertToBase64=function(e){return new Promise((function(t,c){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){var e=a.result.toString().replace(/^data:(.*,)?/,"");e.length%4>0&&(e+="=".repeat(4-e.length%4)),t(e)},a.onerror=function(e){c(e)}}))},e.onSelectFile=function(t){if(t.target.files&&t.target.files.length>0){var c=new FileReader;c.addEventListener("load",(function(){e.setState({src:c.result}),e.setState({currBlob:t.target.files[0]})})),c.readAsDataURL(t.target.files[0]),e.setState({croppedImageUrl:null}),e.setState({currBlob:null}),e.setState({crop:""}),e.setState({resultObj:null})}},e.onImageLoaded=function(t){e.imageRef=t},e.onCropComplete=function(t){e.makeClientCrop(t)},e.onCropChange=function(t){e.setState({crop:t})},e.formatDate=function(t){var c=new Date(t),a=t.split("-"),s=["january","february","march","april","may","june","july","august","september","october","november","december"][c.getMonth()],n="".concat(s,"-").concat(parseInt(a[2]),"-").concat(a[0]);e.setState({getDate:n})},e.triggerAlert=function(t){e.setState({alert:t})},e.onSubmitClicked=function(){var t=Object(f.a)(O.a.mark((function t(c){var a,s,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a="https://lcr-lotusdevs.herokuapp.com/api",!e.state.getDate){t.next=12;break}return e.setState({loading:!0}),c.preventDefault(),e.triggerAlert(!1),t.next=7,e.convertToBase64(e.state.currBlob);case 7:s=t.sent,n={test1:e.state.typeVal,test2:e.state.getDate,test3:s},fetch(a,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){return e.getJsonObj(t)})).catch((function(t){e.failedLoad(t)})),t.next=13;break;case 12:e.triggerAlert(!0);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(v.a)(c,[{key:"makeClientCrop",value:function(){var e=Object(f.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.imageRef&&t.width&&t.height)){e.next=5;break}return e.next=3,this.getCroppedImg(this.imageRef,t,"newFile.jpeg");case 3:c=e.sent,this.setState({croppedImageUrl:c});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"failedLoad",value:function(e){alert("Error the page took too long to load!\nPlease try again.\n"+e),this.setState({loading:!1})}},{key:"getJsonObj",value:function(e){this.setState({resultObj:e,loading:!1})}},{key:"getCroppedImg",value:function(e,t,c){var a=this,s=document.createElement("canvas"),n=e.naturalWidth/e.width,r=e.naturalHeight/e.height;return s.width=t.width,s.height=t.height,s.getContext("2d").drawImage(e,t.x*n,t.y*r,t.width*n,t.height*r,0,0,t.width,t.height),new Promise((function(e,t){s.toBlob((function(t){t&&(t.name=c,window.URL.revokeObjectURL(a.fileUrl),a.fileUrl=window.URL.createObjectURL(t),a.setState({currBlob:t}),e(a.fileUrl))}),"image/jpeg")}))}},{key:"render",value:function(){var e=this,t=this.state,c=t.crop,a=t.croppedImageUrl,n=t.src,r=t.typeL,o=t.resultObj,l=t.alert,i=t.loading;return Object(d.jsxs)("div",{id:"services",children:[Object(d.jsx)(F,{}),Object(d.jsxs)("form",{className:"container ",autoComplete:"off",children:[Object(d.jsxs)("div",{className:"form-row",children:[Object(d.jsxs)("div",{className:"form-group col-md-2",children:[Object(d.jsx)("label",{htmlFor:"lotto-type",className:"col-form-label",children:"Lotto Type"}),Object(d.jsx)("select",{id:"lotto-type",className:"form-control",onChange:function(t){e.setState({typeVal:t.target.value})},children:r.map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)}))})]}),Object(d.jsxs)("div",{className:"form-group col-md-3",children:[Object(d.jsx)("label",{htmlFor:"lotto-date",className:"col-form-label",children:"Draw Date"}),Object(d.jsx)("input",{className:"form-control",type:"date",onChange:function(t){return e.formatDate(t.target.value)},id:"lotto-date"}),l&&Object(d.jsxs)("div",{className:"alert alert-danger alert-dismissible fade show",children:[Object(d.jsx)("strong",{children:"Required!"})," field must not be empty.",Object(d.jsx)("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){return e.triggerAlert(!1)},children:Object(d.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})]})]}),Object(d.jsx)("div",{className:"form-row",children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsxs)("label",{className:"h6",htmlFor:"img-upload",children:[Object(d.jsx)("span",{className:" badge badge-info",children:"Tip:"})," Upload image of lotto ticket"]}),Object(d.jsx)("input",{type:"file",accept:"image/*",onChange:function(t){return e.onSelectFile(t)},className:"form-control-file",id:"img-upload"}),n&&Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsx)(k.a,{src:n,crop:c,ruleOfThirds:!0,onImageLoaded:this.onImageLoaded,onComplete:this.onCropComplete,onChange:this.onCropChange}),Object(d.jsxs)("p",{className:"h6",children:[Object(d.jsx)("span",{className:" badge badge-info",children:"Tip:"})," Crop only the section where the lotto numbers are found. And please use clear image to make OCR accurate."]}),a&&Object(d.jsx)("img",{className:"row p-3",alt:"Crop",style:{maxWidth:"100%"},src:a}),Object(d.jsx)("button",{type:"button",className:"btn btn-outline-primary mr-1 col-md-2",onClick:function(t){return e.onSubmitClicked(t)},children:"Analyze"})]})]})})]}),i?Object(d.jsx)("div",{className:"container d-flex justify-content-center spin mt-4 mb-4"}):null,o&&Object(d.jsx)(C,{resJson:o})]})}}]),c}(a.Component),I=c(85),R=c(86),D=c(87),U=c(88),B=c.p+"static/media/B1.1a243142.svg",E=function(){return Object(d.jsxs)("footer",{className:"bg-light text-center text-lg-start",style:{marginTop:"50px"},children:[Object(d.jsx)("hr",{style:{width:"90%"}}),Object(d.jsx)("section",{className:"mb-1 col-md",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-md",children:[Object(d.jsx)("img",{src:B,alt:"logo",height:"35",width:"35"}),Object(d.jsx)("p",{className:"mb-1",children:"This web tool is developed using:"}),Object(d.jsx)("p",{className:"",children:"React.JS and Flask"})]}),Object(d.jsxs)("div",{className:"col-md",children:[Object(d.jsx)("p",{className:"lead mb-2",children:"Social Media Links"}),Object(d.jsx)("a",{href:"https://www.facebook.com/johnnyplusplus",className:"p-3 soc socFb ",children:Object(d.jsx)(I.a,{size:25})}),Object(d.jsx)("a",{href:"https://www.youtube.com/channel/UCGLli1v5KhVhIEotaaQrHbA",className:" p-3 soc socYot",children:Object(d.jsx)(R.a,{size:25})}),Object(d.jsx)("a",{href:"https://github.com/10tus",className:" p-3 soc socGit",children:Object(d.jsx)(D.a,{size:25})})]}),Object(d.jsxs)("div",{className:"col-md ",children:[Object(d.jsx)("p",{className:"lead mb-2",children:"Support"}),Object(d.jsxs)("div",{className:"pb-4",children:[Object(d.jsx)(U.a,{color:"#6D696A",size:25}),Object(d.jsx)("a",{href:" https://ko-fi.com/lotusdevs",className:"m-4  ",children:"ko-fi.com/lotusdevs"})]})]})]})}),Object(d.jsx)("div",{className:"p-3 bg-dark",children:Object(d.jsx)("span",{className:"text-light",children:"\xa9 2021 Copyright: LotusDevsByJohnny"})})]})},A=function(){return Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsx)(m,{}),Object(d.jsx)(j,{}),Object(d.jsx)(p,{}),Object(d.jsx)(T,{}),Object(d.jsx)(E,{})]})},P=function(){return Object(d.jsxs)("div",{style:{position:"absolute",top:"50%",left:"50%",marginRight:"-50%",transform:"translate(-50%, -50%)"},children:[Object(d.jsx)("h1",{children:"404 Page Not Found!"}),Object(d.jsx)("p",{className:"lead",children:"go back to reality ples? Nothing to see here"})]})};var z=function(){return Object(d.jsx)(o.a,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:A}),Object(d.jsx)(l.a,{component:P})]})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,89)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root")),J()}},[[82,1,2]]]);
//# sourceMappingURL=main.eb7f24bf.chunk.js.map
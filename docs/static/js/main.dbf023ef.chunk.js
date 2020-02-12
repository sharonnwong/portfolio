(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t.p+"static/media/profilepic.8267322a.jpg"},13:function(e,a,t){e.exports=t(45)},19:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),i=t.n(r),c=(t(19),t(1)),s=t(2),o=t(4),m=t(3),u=t(5),p=t(6),d=t.n(p),h=t(10),E=t.n(h),f={name:"Sharon Wong",role:"UX Designer and Inclusive Designer",linkedinId:"sharon-wong19",skypeid:"Your skypeid",roleDescription:"I am a student in the Human Centered Design & Engineering Department at the University of Washington.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/sharon-wong19",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/",className:"fa fa-github"},{name:"skype",url:"http://skype.com",className:"fa fa-skype"}],aboutme:"I am working toward my B.S. in Human Centered Design and Engineering, and am currently seeking a UX Design intern position or HCI research opportunity.",address:"Seattle, Washington",education:[{UniversityName:"University of Washington",specialization:"Human Centered Design & Engineering (HCDE): Human Computer Interaction",MonthOfPassing:"June",YearOfPassing:"2019",Achievements:"Interdisciplinary Honors Program"}],work:[{CompanyName:"UW HCDE",specialization:"Course Assistant",MonthOfLeaving:"Mar",YearOfLeaving:"2020",Achievements:"Some Achievements"},{CompanyName:"First Code Academy",specialization:"Coding Instructor",MonthOfLeaving:"Sep",YearOfLeaving:"2019",Achievements:"Some Achievements"}],skillsDescription:"My skills:",skills:[{skillname:"Reactjs",level:90},{skillname:"HTML5",level:70},{skillname:"CSS",level:80}],portfolio:[{name:"project1",description:"mobileapp",imgurl:"images/portfolio/phone.jpg",title:"Phone App",githubLink:"https://github.com/Evanfeenstra/chatter",fullDescription:"this is a longer description about this app this is a longer description about this app this is a longer description about this app this is a longer description about this app this is a longer description about this app this is a longer description about this app this is a longer description about this app "},{name:"asdfasdfasf",description:"mobileapp",imgurl:"images/portfolio/weatherer.png",title:"Something",githubLink:"https://github.com",fullDescription:"this is a longer description about this app"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/chatter.jpg",title:"Hello",githubLink:"https://github.com",fullDescription:"this is a longer description about this app"}]},v=["home","about","resume","portfolio","contact"],b=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={showMobileMenu:!1},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state.showMobileMenu,t=a?"nav":"nav hider";return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("div",{className:"mobile-btn",onClick:function(){return e.setState({showMobileMenu:!a})}}),l.a.createElement("ul",{id:"nav",className:t},l.a.createElement(E.a,{items:v,currentClassName:"current"},v.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement(d.a,{href:"#".concat(e)},(t=e).charAt(0).toUpperCase()+t.slice(1)));var t})))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},f.name),l.a.createElement("h3",null,"I am a ",f.role,".\xa0",f.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},f.socialLinks&&f.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement(d.a,{href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component);var g=t(11),k=t.n(g),N=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:k.a,alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,f.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,f.name),l.a.createElement("br",null),l.a.createElement("span",null,f.address),l.a.createElement("br",null),l.a.createElement("span",null,f.website)))))))}}]),a}(n.Component),w=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},f.education&&f.education.map(function(e,a){return l.a.createElement("div",{key:a,className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},f.work&&f.work.map(function(e,a){return l.a.createElement("div",{key:a,className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,f.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},f.skills&&f.skills.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase()),style:{width:"".concat(e.level,"%")}}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),y=t(12),O=t.n(y),j=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={modal:{}},t.closeModal=function(){t.setState({modal:{}})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state.modal;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Work."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-thirds s-bgrid-thirds cf"},f.portfolio&&f.portfolio.map(function(a,t){return l.a.createElement("div",{key:t,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("div",{onClick:function(){return e.setState({modal:a})},style:{cursor:"pointer"}},l.a.createElement("img",{src:"".concat(a.imgurl),className:"item-img",alt:"img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,a.name),l.a.createElement("p",null,a.description))))))})))),l.a.createElement(O.a,{visible:a&&a.name,width:"600",minHeight:"400",effect:"fadeInUp",onClickAway:function(){return e.closeModal()}},l.a.createElement("div",{className:"portfolio-modal"},l.a.createElement("div",null,l.a.createElement("h1",null,a.title),l.a.createElement("p",null,a.fullDescription),l.a.createElement("a",{href:a.githubLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-github"}),"\xa0 Github Repository")),l.a.createElement("button",{onClick:function(){return e.closeModal()}},"Close"))))}}]),a}(n.Component),C=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead",style:{color:"white"}},"Feel free to contact me for any work or suggestions below"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Linked in:\xa0",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/".concat(f.linkedinId)},f.linkedinId))))))}}]),a}(n.Component),M=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},f.socialLinks&&f.socialLinks.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement(d.a,{title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),D=(t(44),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b,null),l.a.createElement(N,null),l.a.createElement(w,null),l.a.createElement(j,null),l.a.createElement(C,null),l.a.createElement(M,null))}}]),a}(n.Component));i.a.render(l.a.createElement(D,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.dbf023ef.chunk.js.map
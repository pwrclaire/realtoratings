(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){var a={"./avatar-1.png":31,"./avatar-2.png":32,"./avatar-3.png":33};function r(e){var t=l(e);return n(t)}function l(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=l,e.exports=r,r.id=102},114:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(36),s=n.n(l),i=n(120),c=n(7),o=n(8),u=n(10),m=n(9),d=n(11),p=n(14),g=n(5),f=n(121),v=n(119),h=n(53);function b(){var e=Object(h.a)(["\n  {\n    questions {\n      type\n      question\n      order\n    }\n  }\n"]);return b=function(){return e},e}function E(){var e=Object(h.a)(["\n  mutation AddComment($text: String!, $knowledge: Int!, $responsiveness: Int!, $interest: Int!, $professionalism: Int!, $realtorId: ID!, $dateCreated: String!) {\n    addComment(text: $text, knowledge: $knowledge, responsiveness: $responsiveness, interest: $interest, professionalism: $professionalism, realtorId: $realtorId, dateCreated: $dateCreated) {\n      text\n      knowledge\n      responsiveness\n      interest\n      professionalism\n      dateCreated\n    }\n  }\n"]);return E=function(){return e},e}function y(){var e=Object(h.a)(["\n  mutation UpdateRealtor($id: ID!, $text: String!) {\n    updateRealtor(id:$id, text: $text ) {\n     name\n    }\n  }\n"]);return y=function(){return e},e}function O(){var e=Object(h.a)(["\n  mutation Deleterealtor($id: ID!) {\n    deleterealtor(id:$id) {\n      name\n    }\n  }\n"]);return O=function(){return e},e}function j(){var e=Object(h.a)(["\n{\n  companies {\n    name\n    id\n  }\n}\n"]);return j=function(){return e},e}function w(){var e=Object(h.a)(["\n  query($id: ID) {\n    company(id:$id) {\n      name\n    }\n  }\n"]);return w=function(){return e},e}function N(){var e=Object(h.a)(["\n  query($id: ID){\n    realtor(id:$id) {\n      id\n      name\n      companyId {\n        name\n      }\n      comments {\n        id\n        text\n        knowledge\n        responsiveness\n        interest\n        professionalism\n        dateCreated\n        starTotal\n        realtor {\n          name\n          id\n        }\n      }\n    }\n  }\n"]);return N=function(){return e},e}function C(){var e=Object(h.a)(["\n  mutation AddRealtor($name: String!, $company: String!, $comments: String!) {\n    addRealtor(name: $name, company: $company, comments: $comments) {\n      name\n      companyId\n      comments {\n        text\n        id\n      }\n      id\n    }\n  }\n"]);return C=function(){return e},e}function S(){var e=Object(h.a)(["\n  {\n    comments {\n      text\n      knowledge\n      responsiveness\n      interest\n      professionalism\n      id\n      realtor {\n        name\n        id\n      }\n    }\n  }\n"]);return S=function(){return e},e}function k(){var e=Object(h.a)(["\n  {\n    realtors {\n      name\n      companyId {\n        name\n      }\n      id\n      comments {\n        text\n        knowledge\n        responsiveness\n        interest\n        professionalism\n        id\n        dateCreated\n        starTotal\n      }\n    }\n  }\n"]);return k=function(){return e},e}var R=Object(p.b)(k()),x=Object(p.b)(S()),$=(Object(p.b)(C()),Object(p.b)(N())),q=Object(p.b)(w()),D=(Object(p.b)(j()),Object(p.b)(O())),P=(Object(p.b)(y()),Object(p.b)(E())),I=Object(p.b)(b()),A=n(118),M=(n(80),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).dynamicSort=function(e){var t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),function(n,a){return(n[e]<a[e]?-1:n[e]>a[e]?1:0)*t}},a.fetchRealtors=function(){var e=a.props.getrealtorsQuery;if(e.loading)return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"indeterminate"})));a.setState({realtors:e.realtors.sort(a.dynamicSort(a.state.sortBy))})},a.handleClick=function(e){e.preventDefault(),a.setState({currentPage:Number(e.target.id)})},a.handleChangeSort=function(e){a.setState({sortBy:e.target.value})},a.togglePage=function(e){var t=a.state.realtors.length/a.state.perPage;1===a.state.currentPage&&a.setState({disableLeft:"disabled"}),a.currentPage>=t&&a.setState({disableRight:"disabled"}),a.setState(function(t){return{currentPage:"left"===e?t.currentPage-1:t.currentPage+1}})},a.displayrealtors=function(){if(a.state.realtors){for(var e=a.state.realtors,t=a.state,l=t.currentPage,s=t.perPage,i=l*s,c=i-s,o=e.slice(c,i).map(function(e){var t,a=e.comments,l=a.length,s=(a.map(function(e){return e.knowledge}).reduce(function(e,t){return e+t},0)+a.map(function(e){return e.responsiveness}).reduce(function(e,t){return e+t},0)+a.map(function(e){return e.interest}).reduce(function(e,t){return e+t},0)+a.map(function(e){return e.professionalism}).reduce(function(e,t){return e+t},0))/(4*l);return t="5bec83306723f504184cc8cb"===e.id?n(31):"5bec833f6723f504184cc8cd"===e.id?n(32):"5bec83876723f504184cc8d5"===e.id?n(33):n(48),r.a.createElement("div",{className:"card",key:e.id},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"col s1"},r.a.createElement("img",{src:t,alt:"avatar",width:"50px"})),r.a.createElement("div",{className:"col s11"},r.a.createElement("h5",null,r.a.createElement(A.a,{to:"/realtor/".concat(e.id)},e.name)),r.a.createElement("p",null,"Company: ",e.companyId.map(function(e){return e.name})),r.a.createElement("p",null,"Overall Rating ",isNaN(s)?"No Ratings Yet":s.toFixed(2)))))}),u=[],m=1;m<=Math.ceil(e.length/s);m++)u.push(m);var d=u.map(function(e){var t=e===l?"waves-effect active":"waves-effect";return r.a.createElement("li",{className:t,key:e,id:e,onClick:a.handleClick},e)});return r.a.createElement("div",null,r.a.createElement("ul",null,o),r.a.createElement("ul",{className:"pagination"},d))}},a.state={selected:null,currentPage:1,sortBy:"name",star:0,perPage:6,realtors:[],disableLeft:"",disableRight:""},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){0===this.state.realtors.length&&this.fetchRealtors()}},{key:"componentDidMount",value:function(){0===this.state.realtors.length&&this.fetchRealtors()}},{key:"render",value:function(){return r.a.createElement("div",{id:"realtor-list"},r.a.createElement("div",null,r.a.createElement("span",{className:"row"},r.a.createElement("h5",{className:"col3"},"Realtors"))),r.a.createElement("ul",null,this.displayrealtors()))}}]),t}(a.Component)),H=Object(g.compose)(Object(g.graphql)(R,{name:"getrealtorsQuery"}),Object(g.graphql)(D,{name:"deleterealtorMutation"}),Object(g.graphql)(x,{name:"getcommentsQuery"}))(M),Q=n(25),F=n(61),U=n(54),B=n.n(U),T=n(62),J=n.n(T),K=n(63),V=n.n(K),L=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={rating:{knowledge:0,responsiveness:0,interest:0,professionalism:0},comment:""},n.changeRating=function(e,t){n.setState({rating:Object(F.a)({},n.state.rating,Object(Q.a)({},t,e))})},n.submitRating=function(e){0!==(n.state.rating.knowledge&&n.state.rating.responsiveness&&n.state.rating.interest&&n.state.rating.professionalism)?n.state.comment.length<9?alert("At least 10 characters for comments are required!"):(n.props.addCommentMutation({variables:{text:n.state.comment,knowledge:n.state.rating.knowledge,responsiveness:n.state.rating.responsiveness,interest:n.state.rating.interest,professionalism:n.state.rating.professionalism,realtorId:n.props.id,dateCreated:V()()}}),n.setState({rating:{knowledge:0,responsiveness:0,interest:0,professionalism:0}}),n.refs.comment.value="",window.location.reload()):alert("Please fill in the stars!")},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillUpdate",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("span",{className:"section"},r.a.createElement("h6",null,"How would you rate ",this.props.name,"?")),r.a.createElement("span",{className:"section",id:"rating"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{"data-tip":"How well did they know the market/neighbourhood?"},"Knowledge"),r.a.createElement(B.a,{rating:this.state.rating.knowledge,starRatedColor:"red",changeRating:this.changeRating,numberOfStars:5,name:"knowledge",starHoverColor:"green",starDimension:"33px",starSpacing:"5"})),r.a.createElement("li",null,r.a.createElement("span",{"data-tip":"How responsive were they in answering your requets"},"Responsiveness"),r.a.createElement(B.a,{rating:this.state.rating.responsiveness,starRatedColor:"red",changeRating:this.changeRating,numberOfStars:5,name:"responsiveness",starHoverColor:"green",starDimension:"33px",starSpacing:"5"})),r.a.createElement("li",null,r.a.createElement("span",{"data-tip":"Did they always look out for your best interest?"},"Putting your interest first"),r.a.createElement(B.a,{rating:this.state.rating.interest,starRatedColor:"red",changeRating:this.changeRating,numberOfStars:5,name:"interest",starHoverColor:"green",starDimension:"33px",starSpacing:"5"})),r.a.createElement("li",null,r.a.createElement("span",{"data-tip":"Did they take care of you even after your transaction was completed?"},"Professionalism"),r.a.createElement(B.a,{rating:this.state.rating.professionalism,starRatedColor:"red",changeRating:this.changeRating,numberOfStars:5,name:"professionalism",starHoverColor:"green",starDimension:"33px",starSpacing:"5"}))),r.a.createElement("p",null,"Comments:"),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("textarea",{className:"materialize-textarea",ref:"comment",onChange:function(t){return e.setState({comment:t.target.value})}})),r.a.createElement("button",{className:"btn",onClick:function(){return e.submitRating()}},"Add rating")),r.a.createElement(J.a,null))}}]),t}(a.Component),W=Object(g.compose)(Object(g.graphql)(P,{name:"addCommentMutation"}),Object(g.graphql)($,{name:"getrealtorQuery"}))(L),Y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={open:!1,questions:[],sort:""},a.componentDidMount=function(){a.displayrealtorDetail()},a.fetchCount=function(){var e=a.props.data.realtor;if(e){var t=e.comments.length,n=(e.comments.map(function(e){return e.knowledge}).reduce(function(e,t){return e+t},0)+e.comments.map(function(e){return e.responsiveness}).reduce(function(e,t){return e+t},0)+e.comments.map(function(e){return e.interest}).reduce(function(e,t){return e+t},0)+e.comments.map(function(e){return e.professionalism}).reduce(function(e,t){return e+t},0))/(4*t);return r.a.createElement("div",null,r.a.createElement("h6",null,t," ",t>1?"Reviews":"Review"),r.a.createElement("h6",null,"Overall Rating: ",isNaN(n)?"No ratings yet":n.toFixed(2)))}},a.fetchRating=function(){var e=a.props.data.realtor;if(e)return e.comments.sort(a.dynamicSort(a.state.sort)).map(function(e){return r.a.createElement("div",{className:"col s12",key:e.id},r.a.createElement("div",{className:" card-panel"},r.a.createElement("div",{className:"card-title col s6"},r.a.createElement("h6",null,e.text)),r.a.createElement("div",{className:"card-content col s6"},r.a.createElement("ul",null,r.a.createElement("li",null,"Knowledge: ",r.a.createElement("b",null,e.knowledge)),r.a.createElement("li",null,"Putting your interest first: ",r.a.createElement("b",null,e.interest)),r.a.createElement("li",null,"Professionalism: ",r.a.createElement("b",null,e.professionalism)),r.a.createElement("li",null,"Responding to your requests: ",r.a.createElement("b",null,e.responsiveness))))))})},a.displayrealtorDetail=function(){var e,t=a.props.data.realtor;return t?(e="5bec83306723f504184cc8cb"===t.id?n(31):"5bec833f6723f504184cc8cd"===t.id?n(32):"5bec83876723f504184cc8d5"===t.id?n(33):n(48),console.log(e),r.a.createElement("div",null,r.a.createElement("h4",null,t.name),r.a.createElement("h6",null,"Company: ",t.companyId.map(function(e){return e.name})),r.a.createElement("img",{src:e,width:"100px",alt:"avatar"}),a.fetchCount(),r.a.createElement("br",null),r.a.createElement(W,{name:t.name,id:t.id,reload:a.reloadComments}),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},t.comments.length>0?r.a.createElement("div",{className:"row"},r.a.createElement("h5",{className:"col s8"},"User Ratings"),r.a.createElement("div",{className:"right-align"},r.a.createElement("div",{className:"col s4"},r.a.createElement("h6",null,"Sort By:"),r.a.createElement("a",{className:"waves-effect waves-light btn-small",onClick:function(){return a.setState({sort:"dateCreated"})}}," Recent "),r.a.createElement("a",{className:"waves-effect waves-light btn-small",onClick:function(){return a.setState({sort:"starTotal"})}}," Rating ")))):""))):r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"indeterminate"})))},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){this.displayrealtorDetail()}},{key:"dynamicSort",value:function(e){var t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),e.includes("dateCreated"),function(n,a){return(n[e]>a[e]?-1:n[e]<a[e]?1:0)*t}}},{key:"render",value:function(){return r.a.createElement("div",{id:"realtor-details"},this.displayrealtorDetail(),this.fetchRating())}}]),t}(a.Component),_=Object(g.compose)(Object(g.graphql)($,{options:function(e){return{variables:{id:e.match.params.id}}}}),Object(g.graphql)(q,{name:"getCompanyQuery"}),Object(g.graphql)(I,{name:"getQuestions"}))(Y),z=function(){return r.a.createElement(f.a,null,r.a.createElement(v.a,{exact:!0,path:"/realtor",component:H}),r.a.createElement(v.a,{path:"/realtor/:id",component:_}))},G=function(e){var t=e.realtor,a=e.img,l=e.identity;return r.a.createElement("div",{className:"col s12 m4"},r.a.createElement(A.a,{to:"/realtor/".concat(l)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:n(102)("./avatar-".concat(a,".png")),alt:""}),r.a.createElement("span",{className:"card-title"}),r.a.createElement("div",{className:"card-content"},r.a.createElement("h5",null,t))))))},X=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("h4",{className:"title"},"Featured Agents"),r.a.createElement(G,{realtor:"David J. Yuen",identity:"5bec83306723f504184cc8cb",img:1}),r.a.createElement(G,{realtor:"Carolyn Hough",identity:"5bec833f6723f504184cc8cd",img:2}),r.a.createElement(G,{realtor:"Ken Harris",identity:"5bec83876723f504184cc8d5",img:3})))}}]),t}(a.Component),Z=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={news:""},n.fetchNews=function(){var e=(new Date).toJSON().slice(0,10).replace(/-/g,"-");console.log(e),fetch("https://newsapi.org/v2/everything?q=Real Estate Market&from="+e+"sortBy=popularity&apiKey=b07149fc1f174e04b0bcfaddf3327b33").then(function(e){return e.json()}).then(function(e){"ok"===e.status&&n.setState({news:e})})},n.displayArticles=function(){var e=n.state.news.articles;if(e)return r.a.createElement("div",null,r.a.createElement("div",null,e.map(function(e){return r.a.createElement("p",{key:e.url},e.source.name," ",r.a.createElement("br",null),r.a.createElement("a",{href:e.url},e.title))})),r.a.createElement("p",null,"-Powered by ",r.a.createElement("a",{href:"https://newsapi.org/"},"newsapi.org")))},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchNews()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",{className:"title"},"World Market"),this.displayArticles())}}]),t}(a.Component),ee=n(65),te=n.n(ee),ne=n(122);function ae(e){return r.a.createElement("span",null,e.name)}var re=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).getSuggestionValue=function(e){return e.name},n.onSuggestionsFetchRequested=function(e){var t=e.value;n.setState({suggestions:n.getSuggestions(t)})},n.onSuggestionsClearRequested=function(){n.setState({suggestions:[]})},n.onSuggestionSelected=function(e,t){var a=t.suggestion;n.props.history.push("/realtor/".concat(a.id))},n.onChange=function(e,t){var a=t.newValue;n.setState({value:"undefined"!==typeof a?a:""})},n.state={name:"",suggestions:[],value:"",id:""},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"getSuggestions",value:function(e){var t=e.trim().replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),n=this.props.getrealtorsQuery.realtors;if(""===t)return[];var a=new RegExp("^"+t,"i");return n.filter(function(e){return a.test(e.name)})}},{key:"render",value:function(){var e=this.state,t=e.value,n=e.suggestions,a={placeholder:"Search",value:t,onChange:this.onChange};return this.props.getcommentsQuery.loading?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"indeterminate"}))):r.a.createElement("form",{id:"add-realtor"},r.a.createElement("div",{className:"input-field"},r.a.createElement(te.a,{suggestions:n,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:this.getSuggestionValue,renderSuggestion:ae,inputProps:a,onSuggestionSelected:this.onSuggestionSelected})))}}]),t}(a.Component),le=Object(ne.a)(Object(g.compose)(Object(g.graphql)(x,{name:"getcommentsQuery"}),Object(g.graphql)(R,{name:"getrealtorsQuery"}))(re)),se=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(le,null),r.a.createElement("br",null),r.a.createElement(X,null),r.a.createElement("br",null),r.a.createElement(Z,null))}}]),t}(a.Component),ie=function(){return r.a.createElement("main",{className:"container",id:"main",style:{position:"relative",minHeight:"70vh"}},r.a.createElement(f.a,null,r.a.createElement(v.a,{exact:!0,path:"/",component:se}),r.a.createElement(v.a,{path:"/realtor",component:z})))},ce=function(e){e.props;return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper teal"},r.a.createElement("a",{href:"/",className:"brand-logo center hide-on-small-only"},"Rate My Realtor.com"),r.a.createElement("a",{href:"/",className:"brand-logo center hide-on-med-and-up"},"RMR.com"),r.a.createElement("ul",{id:"nav-mobile",className:"right"},r.a.createElement("li",null,r.a.createElement(A.a,{to:"/realtor"},"Realtors")))))};var oe=function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{height:"100px",marginTop:"70px",backgroundColor:"grey"}},r.a.createElement("p",{style:{textAlign:"center",paddingTop:"30px",color:"white"}},"Copyright 2019 | ",r.a.createElement("a",{href:"http://clairepeng.ca"},"Claire Peng"))))},ue=new p.a({uri:"/graphql"}),me=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(g.ApolloProvider,{client:ue},r.a.createElement("div",null,r.a.createElement(ce,null),r.a.createElement(ie,null),r.a.createElement(oe,{style:{bottom:"0px",position:"absolute",width:"100%"}})))}}]),t}(a.Component);s.a.render(r.a.createElement(i.a,null,r.a.createElement(me,null)),document.getElementById("root"))},31:function(e,t,n){e.exports=n.p+"static/media/avatar-1.ee91b3b2.png"},32:function(e,t,n){e.exports=n.p+"static/media/avatar-2.99387d0d.png"},33:function(e,t,n){e.exports=n.p+"static/media/avatar-3.16fc26fd.png"},48:function(e,t,n){e.exports=n.p+"static/media/avatar.cccd078e.png"},68:function(e,t,n){e.exports=n(114)},80:function(e,t,n){}},[[68,2,1]]]);
//# sourceMappingURL=main.5c24ef8c.chunk.js.map
(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(14),a(1)),i=a(2),s=a(4),h=a(3),u=a(5),m=(a(7),function(e){var t=e.robo,a=e.handleclick;return r.a.createElement("article",{onClick:function(){return a(t)},id:t.id,className:"  bg-green ml3 mb2 br3 pa4 grow "},r.a.createElement("div",{className:"tc"},r.a.createElement("img",{src:"http://robohash.org/id=".concat(t.id,"/100+100"),className:"br-100 h4 w4 dib ba b--black-05 pa2",title:"Photo of a kitty staring at you"}),r.a.createElement("h2",{className:"f3 mb1"},t.username),r.a.createElement("h3",{className:"f5 fw4 white mt0"},"".concat(t.name)),r.a.createElement("h3",{className:"f5 fw4 white mt0"},"".concat(t.email))))}),d=function(e){var t=e.robots,a=function(e){console.log("clicked by ".concat(e.username)),alert("clicked by ".concat(e.username))};return r.a.createElement("div",{className:" flex flex-wrap justify-center mt2 "},t.map((function(e,t){return r.a.createElement(m,{handleclick:a,key:t,robo:e})})))},f=function(e){var t=e.value,a=e.onChange;return r.a.createElement("div",{className:"pa2 mt0"},r.a.createElement("input",{id:"name",value:t,onChange:a,placeholder:"search ",className:" pa2 ba b--green bg-lightest-blue w-50",type:"text","aria-describedby":"name-desc"}))},b=(a(15),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid grey",height:"500px"}},e.children)}),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={haserror:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({haserror:!0})}},{key:"render",value:function(){return this.state.haserror.haserror?r.a.createElement("h1",null,"OOPS something wrong"):this.props.children}}]),t}(r.a.Component),p=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){var a=t.target.value;a.length>0?e.setState({searchfield:a}):e.setState({searchfield:""})},e.state={robots:[],searchfield:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("in did mount"),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchfield,n=t.filter((function(e){return e.username.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("div",{className:" bg-light-green "},r.a.createElement("h1",{className:" pa4 mt0 f1 "}," Robo Friends"),r.a.createElement(f,{onChange:this.handleChange})),r.a.createElement(b,null,r.a.createElement(g,null,r.a.createElement(d,{robots:n})))):r.a.createElement("h1",null,"Loading...")}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.32c8d049.chunk.js.map
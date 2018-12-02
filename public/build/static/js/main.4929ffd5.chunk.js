(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(27)},19:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(13),c=a.n(r),l=(a(19),a(1)),i=a.n(l),m=a(8),o=a(2),u=a(3),v=a(6),d=a(4),h=a(7),p=a(5),f=a.n(p),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(v.a)(this,Object(d.a)(t).call(this,e))).state={list:null,show:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/streamers/all");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({list:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.list,n=t.show;return a?s.a.createElement("div",null,s.a.createElement("div",{className:"header"},s.a.createElement("h5",{className:"ml-2 mt-2"},"Catalog ",s.a.createElement("small",null,Object.keys(this.state.list).length)),s.a.createElement("span",{className:"showmore ml-2",onClick:function(){return e.setState({show:!n})}},n?"Show less":"Show more")),s.a.createElement("div",{className:"actuallist"},this.renderStreams())):null}},{key:"renderStreams",value:function(){var e=this.state,t=e.list,a=e.show;return t.map(function(e,t){var n="https://s3.us-east-2.amazonaws.com/fetchappbucket/images/".concat(e.name,".jpg");if(a||!(t>=6))return s.a.createElement("div",{className:"streamer",key:f()(),onClick:function(){var t="https://www.youtube.com/channel/".concat(e.channelId);window.open(t,"_blank").focus()}},s.a.createElement("div",{className:"substreamer"},s.a.createElement("img",{src:n,alt:"streamimage",className:"ml-2"}),s.a.createElement("div",{className:"streamname ml-2 "},s.a.createElement("span",null,e.name))))})}}]),t}(n.Component),b=function(e){var t=e.theme?"darkTheme":"whiteTheme",a=e.live?Object.values(e.live).reduce(function(e,t){return e+=+t.viewers},0):"0";return console.log(a),s.a.createElement("nav",{className:"navbar navbar-expand-lg ".concat(t)},s.a.createElement("span",{className:"navbar-brand"},"FetcherApp ",s.a.createElement("i",{className:"fa fa-toggle-on ml-2",onClick:function(){return e.toggle()}})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},s.a.createElement("span",{className:"navbar-text"},"Total Viewers: ".concat(a))))},k=function(e){var t,a=e.theme?"darkTheme":"whiteTheme";if(!e.live)return null;t=e.live[Object.keys(e.live)[0]],e.onStream?t=e.live[e.onStream]:t&&t.vidId||(t=e.live[Object.keys(e.live)[0]]);var n=t.vidId,r="https://www.youtube.com/embed/".concat(n,"?autoplay=1&amp;showinfo=0&amp;modestbranding=1&amp;enablejsapi=1&amp"),c=window.location.hostname,l="https://www.youtube.com/live_chat?v=".concat(n,"&embed_domain=").concat(c),i=t.viewers;return s.a.createElement("div",{className:"contentmain",style:e.theme?{backgroundColor:"black"}:{backgroundColor:"#D6D6D6"}},s.a.createElement("div",{className:"videoparent"},s.a.createElement("div",{className:"videonav ".concat(a)},s.a.createElement("div",{className:"marginnav"},s.a.createElement("span",null,s.a.createElement("i",{className:"fa fa-thumbs-up"})," ",t.stats.likeCount),s.a.createElement("span",null,s.a.createElement("i",{className:"fa fa-thumbs-down ml-4"})," ",t.stats.dislikeCount))),s.a.createElement("div",{className:"margincontent ".concat(a)},s.a.createElement("div",{className:"actualvideo"},s.a.createElement("iframe",{src:r,frameBorder:"0"})),s.a.createElement("div",{className:"topcontent"},s.a.createElement("div",{className:"videocontent mt-2"},s.a.createElement("h4",{className:"ml-2"},t.title),s.a.createElement("span",null,s.a.createElement("i",{style:{color:"red"},className:"fa fa-circle mr-2"}),i," Viewers")),s.a.createElement("div",{className:"body ml-2 mb-2"},s.a.createElement("p",null,t.description))))),s.a.createElement("div",{className:"chatter"},s.a.createElement("iframe",{src:l,frameBorder:"0"})))},w=a(9),y=a.n(w),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(v.a)(this,Object(d.a)(t).call(this,e))).state={updater:[]},a.styles={card:{color:"white"}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){var n=this;if(e.active!==this.props.active){var s=this.props.active,r=Object.values(e.active).map(function(e){return e.name}),c=Object.values(s).map(function(e){return e.name}),l=y.a.difference(c,r);this.setState({updater:l}),setTimeout(function(){n.setState({nowLive:[]})},8e3)}}},{key:"render",value:function(){var e=this.state.updater;return!e&&!e.length>0?s.a.createElement("div",{className:"notify",style:this.styles.card}):s.a.createElement("div",{className:"notify act",style:this.styles.card},this.updateStream())}},{key:"updateStream",value:function(){var e=this;return this.state.updater.map(function(t){return s.a.createElement("div",{key:f()(),className:"flexme",style:e.styles.card},s.a.createElement("span",null,t,s.a.createElement("br",null)," is online!"))})}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(v.a)(this,Object(d.a)(t).call(this,e))).toggleTheme=function(){localStorage.setItem("dark",JSON.stringify(!a.state.dark)),a.setState({dark:!a.state.dark})},a.state={live:null,stream:null,dark:!0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(i.a.mark(function e(){var t,a,n,s,r=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"boolean"===typeof(t=JSON.parse(localStorage.getItem("dark")))&&this.setState({dark:t}),e.next=4,fetch("/streamers/live");case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,s=y.a.mapKeys(n,"channelId"),this.setState({live:s}),this.checker=setInterval(Object(m.a)(i.a.mark(function e(){var t,a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/streamers/live");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=y.a.mapKeys(a,"channelId"),r.setState({live:n});case 8:case"end":return e.stop()}},e,this)})),35e3);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t){var a=this.state.dark;if(a!==t.dark){var n=a?"#404040":"#D6D6D6";document.documentElement.style.setProperty("--streamhover",n)}}},{key:"render",value:function(){var e=this.state.live;if(!e)return null;var t=this.state.dark?"darkTheme":"whiteTheme";return s.a.createElement("div",null,s.a.createElement(b,{toggle:this.toggleTheme,theme:this.state.dark,live:e}),s.a.createElement("div",{className:"maindiv ".concat(t)},s.a.createElement("div",{className:"navigator"},s.a.createElement("div",{className:"streamlist active"},s.a.createElement("h5",{className:"online ml-2"},"Online ",s.a.createElement("small",null,Object.keys(this.state.live).length)),s.a.createElement("div",{className:"actuallist"},this.renderStreams()),s.a.createElement(E,{theme:this.state.dark}))),s.a.createElement(k,{onStream:this.state.stream,live:this.state.live,theme:this.state.dark}),s.a.createElement(N,{active:this.state.live})))}},{key:"renderStreams",value:function(){var e=this,t=this.state.live;return Object.values(t).map(function(t){var a="https://s3.us-east-2.amazonaws.com/fetchappbucket/images/".concat(t.name,".jpg"),n=t.viewers;return s.a.createElement("div",{className:"streamer",key:f()(),onClick:function(){return e.setState({stream:t.channelId})}},s.a.createElement("div",{className:"substreamer"},s.a.createElement("img",{src:a,alt:"streamimage",className:"ml-2"}),s.a.createElement("div",{className:"streamname ml-2 "},s.a.createElement("span",null,t.name),s.a.createElement("span",null,s.a.createElement("small",null,"is Playing IRL"))),s.a.createElement("span",{className:"marginme"},s.a.createElement("small",null,n," viewers"))))})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement("div",null,s.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.4929ffd5.chunk.js.map
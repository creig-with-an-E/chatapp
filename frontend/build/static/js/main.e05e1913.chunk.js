(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(66)},63:function(e,t){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(33),r=a.n(o),c=a(35),i=a(2),m=a(3),l=a(6),u=a(4),d=a(1),h=a(5),b=function(e){return s.a.createElement("div",{className:"message"},s.a.createElement("div",{className:"message-username"},e.username),s.a.createElement("div",{className:"message-text"},e.text))},g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).messages=a.props.messageData,a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"message-list"},this.messages.map(function(e,t){return s.a.createElement(b,{key:t,text:e.text,username:e.username})}))}}]),t}(n.Component),p=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={roomName:""},e.submitHandle=function(t){t.preventDefault(),e.props.addRoom(e.state.roomName),e.setState({roomName:""})},e.changeHandle=function(t){e.setState({roomName:t.target.value})},e.submitHandle=e.submitHandle.bind(Object(d.a)(e)),e.changeHandle=e.changeHandle.bind(Object(d.a)(e)),e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"new-room-form"},s.a.createElement("form",{onSubmit:this.submitHandle},s.a.createElement("input",{onChange:this.changeHandle,value:this.state.roomName,type:"text",placeholder:"NewRoomForm",required:!0}),s.a.createElement("button",{id:"create-room-btn",type:"submit"},"+")))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),a=Object(l.a)(this,Object(u.a)(t).call(this,e)),console.log(a.props.roomList),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"rooms-list"},s.a.createElement("ul",null,s.a.createElement("h3",null,"Your Rooms"),this.props.roomList.map(function(e,t){return console.log(e),s.a.createElement("li",{key:t,className:"room"},s.a.createElement("a",{href:"# ".concat(e)}," # ",e))})))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({message:e.target.value}),console.log(a.state.message)},a.handleSubmit=function(e){e.preventDefault(),a.props.sendMessage(a.state.message),a.setState({message:""})},a.state={message:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"send-message-form",onSubmit:this.handleSubmit},s.a.createElement("input",{onChange:this.handleChange,value:this.state.message,placeholder:"Type message here and hit ENTER",type:"text"}))}}]),t}(n.Component),j=a(34),O=a.n(j),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={messages:[],roomList:["main room"]},a.updateMessages=function(e){var t=[];(t=a.state.messages).push({username:e.username,text:e.message}),a.setState({messages:t})},a.sendMessageHandle=a.sendMessage.bind(Object(d.a)(a)),a.addRoomHandle=a.addRoom.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.socket=O.a.connect("localhost:3030"),this.socket.on("connect",function(){return console.log("connected")}),this.socket.on("new_message",function(t){e.updateMessages(t)})}},{key:"sendMessage",value:function(e){this.socket.emit("new_message",{message:e})}},{key:"addRoom",value:function(e){var t=Object(c.a)(this.state.roomList);t.push(e),this.setState({roomList:t})}},{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement(f,{roomList:this.state.roomList}),s.a.createElement(g,{messageData:this.state.messages}),s.a.createElement(v,{sendMessage:this.sendMessageHandle}),s.a.createElement(p,{addRoom:this.addRoomHandle}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.e05e1913.chunk.js.map
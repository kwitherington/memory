(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,image:"https://i.pinimg.com/originals/45/24/31/4524312c929e86ab8ab23f5ccfd60bff.jpg",count:0},{id:2,image:"https://www.welt.de/img/kultur/mobile101203326/9082502617-ci102l-w1024/jay-15-BM-Kultur-New-York-jpg.jpg",count:0},{id:3,image:"http://memberdata.s3.amazonaws.com/hi/hitsdd/photos/hitsdd_photo_gal__photo_644194552.png",count:0},{id:4,image:"https://i.scdn.co/image/a12d8543e28d71d9f1e7f5f363c1a6c73316f9e6",count:0},{id:5,image:"http://cache.umusic.com/_sites/kendricklamar.com/images/og.jpg",count:0},{id:6,image:"https://carwad.net/sites/default/files/lil-wayne-png-transparent-images-149312-3799203.png",count:0},{id:7,image:"https://media.wmagazine.com/photos/5897821f9c179ac02d4ba41a/master/pass/853C1190.jpg",count:0},{id:8,image:"https://2.bp.blogspot.com/-AKa4oXg0fIo/WMRc6qRN6mI/AAAAAAABRD0/W23UXNcGgLcjsjD0Tjs5oWwqpfCQfpBUACLcB/s1600/chance-2.jpg",count:0},{id:9,image:"https://www.cpr.org/sites/default/files/images/ka-main_childish-gambino-2018-6e72bfc693.jpg",count:0},{id:10,image:"https://pixel.nymag.com/imgs/daily/vulture/2018/09/05/mac-miller/04-mac-miller-2.w570.h712.jpg",count:0},{id:11,image:"https://i1.sndcdn.com/artworks-000207405204-lrzfpc-t500x500.jpg",count:0},{id:12,image:"https://www.ebony.com/wp-content/uploads/2018/02/snoopp.png",count:0}]},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(3),o=a.n(c),s=(a(15),a(4)),r=a(5),l=a(7),m=a(6),d=a(8),g={height:"275px",width:"275px",float:"left"},h={height:"100%",overflow:"hidden",textAlign:"center",backgroundSize:"100%"},u={display:"block",margin:"auto",paddingTop:"30px",width:"75%"},p=function(e){return i.a.createElement("div",{style:g,onClick:function(){return e.cardClicked(e.id)}},i.a.createElement("div",{style:h},i.a.createElement("img",{style:u,alt:e.name,src:e.image})))},f={backgroundColor:"#282c34",minHeight:"20vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#F3F3F3",fontSize:"2rem"},w={textAlign:"center",width:"33.3%"},b={color:"#282c34",textAlign:"center",margin:"5px"},k=function(e){return i.a.createElement("div",null,i.a.createElement("table",{style:f},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{style:w},e.children),i.a.createElement("td",{style:w},e.message),i.a.createElement("td",{style:w},"Score: ",e.score," Highscore: ",e.highscore)))),i.a.createElement("h4",{style:b},"Click on an image to earn points, but don't click the same image twice!"))},y=a(1),j=(a(16),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={cards:y,score:0,highscore:0,message:"Click an Image to Begin"},a.newGame=function(){a.setState({score:0}),a.state.cards.forEach(function(e){e.count=0})},a.cardClicked=function(e){a.state.cards.find(function(t,n){return t.id===e?0===y[n].count?(y[n].count=y[n].count+1,a.setState({score:a.state.score+1,message:"Correct!"},function(){this.state.score>this.state.highscore&&(this.setState({highscore:this.state.score}),12===this.state.score&&this.setState({message:"You Win!"}))}),a.state.cards.sort(function(){return Math.random()-.5}),!0):(a.setState({message:"You Lose!"}),a.newGame(),!1):null})},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,{score:this.state.score,highscore:this.state.highscore,message:this.state.message},"MEMORY"),i.a.createElement("div",{className:"container"},this.state.cards.map(function(t){return i.a.createElement(p,{cardClicked:e.cardClicked,id:t.id,key:t.id,image:t.image})})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.7f187dbb.chunk.js.map
(this["webpackJsonpreact-boilerplate"]=this["webpackJsonpreact-boilerplate"]||[]).push([[0],[,,,,,,,,function(e,a,t){"use strict";var n=t(1),r=t(45),c="production"===t.n(r)()().REACT_APP_ENVIRONMENT?{apiAddress:"https://node-go-api.herokuapp.com/api/v1",endpoint:"https://play-node-go.herokuapp.com",authAddress:"https://node-go-api.herokuapp.com/auth",socketAddress:"https://node-go-api.herokuapp.com"}:{apiAddress:"http://localhost:8000/api/v1",authAddress:"http://localhost:8000/auth",endpoint:"http://localhost:3000",socketAddress:"http://localhost:8000"};a.a=Object(n.a)({},c)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(118)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a),t.d(a,"launch",(function(){return s}));var n=t(46),r=t.n(n),c=t(8),s=function(e,a){var t=r()("".concat(c.a.socketAddress,"/").concat(e));return t.on("connected",(function(){a({type:"SOCKET",message:"CONNECTED",body:{nsp:t.nsp}})})),t.on("connect_error",(function(e){a({type:"ERR",message:"SOCKET_ERROR",body:{socketError:e}})})),t.on("error",(function(e){a({type:"ERR",message:"SOCKET_ERROR",body:{socketError:e}})})),t.on("room_connected",(function(e){a({type:"ROOMS",message:"CONNECT_ROOM",body:e})})),t.on("new_user",(function(e){console.log("new_user received"),a({type:"ROOMS",message:"NEW_USER",body:e})})),t.on("game_connected",(function(e){console.log(e),console.log("game_connected received"),a({type:"GAMES",message:"UPDATE_BOARD",body:e})})),t.on("update_board",(function(e){console.log(e),console.log("update_board received"),a({type:"GAMES",message:"UPDATE_BOARD",body:e.board})})),t}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,a){},,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(42),s=t.n(c),o=(t(53),t(2)),i=t.n(o),l=t(6),m=t(4),u=t(11),p=(t(55),t(56),t(57),function(){return r.a.createElement(r.a.Fragment,null,"Logo")}),d=function(e){return r.a.createElement("div",{className:"NavBar","data-testid":"NavBar"},r.a.createElement(m.b,{to:"/home"},r.a.createElement("div",{className:"NavBar__logo"},r.a.createElement(p,null))),r.a.createElement(m.b,{to:"/home"},r.a.createElement("div",{className:"NavBar__menu-item NavBar__home"},r.a.createElement("p",null,"Find a Game"))),r.a.createElement(m.b,{to:"/news"},r.a.createElement("div",{className:"NavBar__menu-item NavBar__news"},r.a.createElement("p",null,"News"))),r.a.createElement(m.b,{to:"/account"},r.a.createElement("div",{className:"NavBar__menu-item NavBar__acount"},e.user?e.user.username:r.a.createElement(r.a.Fragment,null))))},_=(t(62),function(){return r.a.createElement("nav",null)}),E=t(1),f=(t(63),t(8)),b=f.a.authAddress,h="".concat(b,"/signup"),g="".concat(b,"/login"),v=new Headers;v.append("Content-Type","application/json"),v.append("Accept","application/json"),v.append("Sec-Fetch-Site","cross-site");var y=function(e){var a;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(fetch(g,{method:"POST",credentials:"include",body:JSON.stringify(e),headers:v}).then((function(e){return e.text()})).then((function(e){return JSON.parse(e)})).catch((function(e){return e})));case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}))},N=function(e){var a;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(fetch(h,{method:"POST",credentials:"include",body:JSON.stringify(e),headers:v}).then((function(e){return e.text()})).then((function(e){return JSON.parse(e)})).catch((function(e){return e})));case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}))},O=(t(64),function(e){var a=e.error;return r.a.createElement("span",{className:"error error--form","data-testid":"FormError"},a)}),w=function(e){var a,t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],o=c[1],m=Object(n.useState)(""),u=Object(l.a)(m,2),p=u[0],d=u[1],_={type:"ERR",message:"AUTH_ERROR"},f=function(){var a,t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(y({username:s,password:p}));case 2:if(!(a=n.sent).errors){n.next=6;break}return t=a.errors,n.abrupt("return",e.dispatch(Object(E.a)({},_,{body:{authError:t}})));case 6:return n.abrupt("return",e.dispatch({type:"AUTH",message:"LOGIN",body:a}));case 7:case"end":return n.stop()}}))},b=function(a){var t;a.preventDefault(),t=f,p.length<8?e.dispatch(Object(E.a)({},_,{body:{authError:"This password is invalid"}})):/^[\w\d_.-]+$/.test(s)?t():e.dispatch(Object(E.a)({},_,{body:{authError:"This username is invalid"}}))};return r.a.createElement("div",{className:"Login","data-testid":"Login"},(a=e.state.errors)?a.auth?r.a.createElement(O,{error:a.auth}):void 0:r.a.createElement(r.a.Fragment,null),r.a.createElement("form",{className:"Login__form","data-testid":"Login__form",onSubmit:function(e){return b(e)}},r.a.createElement("label",{className:"form__label form__label--username",htmlFor:"username-input"},"Username:"),r.a.createElement("input",{name:"username",id:"username-input",className:"form__input form__input--username",type:"text",onChange:function(e){return o(e.target.value)},default:"username"}),r.a.createElement("label",{className:"form__label form__label--password",htmlFor:"password-input"},"Password:"),r.a.createElement("input",{name:"password",id:"password-input",className:"form__input form__input--password",type:"password",onChange:function(e){return d(e.target.value)},default:""}),r.a.createElement("input",{className:"form__submit",type:"submit",value:"Login!"})))},k=(t(65),function(e){var a,t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],o=c[1],m=Object(n.useState)(""),u=Object(l.a)(m,2),p=u[0],d=u[1],_=Object(n.useState)(""),f=Object(l.a)(_,2),b=f[0],h=f[1],g=Object(n.useState)(""),v=Object(l.a)(g,2),y=v[0],w=v[1],k={type:"ERR",message:"AUTH_ERROR"},R=function(){var a,t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(N({username:s,email:p,password:b,confirmPassword:y}));case 2:if(!(a=n.sent).errors){n.next=6;break}return t=a.errors[0].auth,n.abrupt("return",e.dispatch(Object(E.a)({},k,{body:{authError:t}})));case 6:return n.abrupt("return",e.dispatch({type:"AUTH",message:"SIGNUP",body:a}));case 7:case"end":return n.stop()}}))},S=function(a){var t;a.preventDefault(),t=R,b!==y?e.dispatch(Object(E.a)({},k,{body:{authError:"Password fields must be the same"}})):b.length<8?e.dispatch(Object(E.a)({},k,{body:{authError:"Password must be at least 8 characters"}})):/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p)?/^[\w\d_.-]+$/.test(s)?t():e.dispatch(Object(E.a)({},k,{body:{authError:"Username can only contain letters, numbers, '_', '.', or '-'"}})):e.dispatch(Object(E.a)({},k,{body:{authError:"Please enter a valid email"}}))};return r.a.createElement("div",{className:"Signup","data-testid":"Signup"},(a=e.state.errors)?a.auth?r.a.createElement(O,{error:a.auth}):void 0:r.a.createElement(r.a.Fragment,null),r.a.createElement("form",{className:"Signup__form","data-testid":"Signup__form",onSubmit:function(e){return S(e)}},r.a.createElement("label",{className:"form__label form__label--username",htmlFor:"username-input"},"Username:"),r.a.createElement("input",{className:"form__input form__input--username",default:"username",id:"username-input",name:"username",onChange:function(e){return o(e.target.value)},type:"text"}),r.a.createElement("label",{className:"form__label form__label--email",htmlFor:"email-input"},"Email:"),r.a.createElement("input",{className:"form__input form__input--email",default:"email",id:"email-input",name:"email",onChange:function(e){return d(e.target.value)},type:"text"}),r.a.createElement("label",{className:"form__label form__label--password",htmlFor:"password-input"},"Password:"),r.a.createElement("input",{className:"form__input form__input--password",default:"",id:"password-input",name:"password",onChange:function(e){return h(e.target.value)},type:"password"}),r.a.createElement("label",{className:"form__label form__label--password",htmlFor:"confirmPassword-input"},"Confirm password:"),r.a.createElement("input",{className:"form__input form__input--password",name:"confirmPassword",id:"confirmPassword-input",type:"password",onChange:function(e){return w(e.target.value)},default:""}),r.a.createElement("input",{className:"form__submit",type:"submit",value:"Create Account!"})))}),R=function(e){var a=Object(n.useState)("login"),t=Object(l.a)(a,2),c=t[0],s=t[1],o=e.state,i=e.dispatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav__section nav__section--auth",onClick:function(){s("login")}},r.a.createElement("p",{className:"nav__section__label"},"Login"),"login"===c?r.a.createElement(w,{dispatch:i,state:o}):r.a.createElement(r.a.Fragment,null)),r.a.createElement("div",{className:"nav__section nav__section--auth",onClick:function(){s("signup")}},r.a.createElement("p",{className:"nav__section__label"},"Signup"),"signup"===c?r.a.createElement(k,{dispatch:i,state:o}):r.a.createElement(r.a.Fragment,null)))},S=(t(66),function(){return r.a.createElement("div",{className:"nav__section"},r.a.createElement("p",{className:"nav__section__label"},"New Room"))}),j=(t(67),function(){return r.a.createElement("div",{className:"nav__section"},r.a.createElement("p",{className:"nav__section__label"},"Find Room"))}),G=(t(68),function(){return r.a.createElement("div",{className:"nav__section"},r.a.createElement("p",{className:"nav__section__label"},"Library"))}),T=function(e){var a=e.state,t=e.dispatch,n=r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement(S,null),r.a.createElement(G,null)),c=r.a.createElement(R,{state:a,dispatch:t});return r.a.createElement("nav",null,a.user.username?n:c)},B=function(){return r.a.createElement("nav",null)},A=(t(69),function(){return r.a.createElement("div",{className:"nav__section"},r.a.createElement("p",{className:"nav__section__label"},"Find Game"))}),C=(t(70),function(){return r.a.createElement("div",{className:"nav__section"},r.a.createElement("p",{className:"nav__section__label"},"New Game"))}),M=(t(71),function(){return r.a.createElement("div",{className:"nav__section"},r.a.createElement("p",{className:"nav__section__label"},"Room Archive"))}),x=function(e){var a=e.state,t=e.dispatch;return r.a.createElement("nav",null,r.a.createElement("h3",null,a.currentRoom.name),a.errors.joinGame?r.a.createElement(R,{state:a,dispatch:t}):r.a.createElement(r.a.Fragment,null),r.a.createElement(A,null),r.a.createElement(C,null),r.a.createElement(M,null))},F=function(e){var a=e.page,t=e.state,n=e.dispatch;return r.a.createElement("aside",{className:"Sidebar","data-testid":"Sidebar"},function(){switch(a){case"account":return r.a.createElement(_,{state:t,dispatch:n});case"home":return r.a.createElement(T,{state:t,dispatch:n});case"news":return r.a.createElement(B,{state:t,dispatch:n});case"room":return r.a.createElement(x,{state:t,dispatch:n});default:return r.a.createElement(r.a.Fragment,null)}}())},W=(t(72),function(){return r.a.createElement("div",{className:"Account","data-testid":"Account"},r.a.createElement("p",null,"Account"))}),U=f.a.apiAddress,P="".concat(U,"/games"),I=new Headers;I.append("Content-Type","application/json"),I.append("Accept","application/json"),I.append("Sec-Fetch-Site","cross-site");var J=function(e){var a;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(fetch("".concat(P,"/").concat(e),{method:"GET",credentials:"include",headers:I}).then((function(e){return e.text()})).then((function(e){return JSON.parse(e)})).then((function(e){return delete Object.assign(e.game,{applicationVersion:e.game.application_version}).application_version,delete Object.assign(e.game,{boardSize:e.game.board_size}).board_size,delete Object.assign(e.game,{playerBlack:e.game.player_black}).player_black,delete Object.assign(e.game,{playerBlackRank:e.game.player_black_rank}).player_black_rank,delete Object.assign(e.game,{playerWhite:e.game.player_white}).player_white,delete Object.assign(e.game,{playerWhiteRank:e.game.player_white_rank}).player_white_rank,delete Object.assign(e.game,{capturesWhite:e.game.captures_white}).captures_white,delete Object.assign(e.game,{capturesBlack:e.game.captures_black}).captures_black,delete Object.assign(e.game,{mainTime:e.game.main_time}).main_time,delete Object.assign(e.game,{timePeriod:e.game.time_period}).time_period,delete Object.assign(e.game,{periodLength:e.game.period_length}).period_length,delete Object.assign(e.game,{overtimePeriod:e.game.overtime_period}).overtime_period,delete Object.assign(e.game,{overtimeLength:e.game.overtime_length}).overtime_length,delete Object.assign(e.game,{winType:e.game.win_type}).win_type,e})).catch((function(e){return e})));case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}))},L=(t(73),t(74),t(75),function(e){var a=e.posX,t=e.posY,n=e.user,c=e.game,s=e.dispatch,o=e.pointData,i=c.turn>0?"black":"white";return r.a.createElement("div",{className:"board__point ".concat(1===a?"board__point--top":a===c.boardSize?"board__point--bottom":""," ").concat(1===t?"board__point--left":t===c.boardSize?"board__point--right":""),onClick:function(e){return function(e){var r={type:"SOCKET",message:"MAKE_MOVE",body:{user:n,game:c,room:c.room,board:{},move:{player:i,pos:{x:a,y:t}}}};s(r)}()}},r.a.createElement("div",{className:"board__point__stone","data-stone":1===o?"black":-1===o?"white":"none"},r.a.createElement("div",{className:"board__point__dot","data-dot":function(){if("l"===o)return c.turn}()})))}),D=function(e){var a=e.game,t=e.user,n=e.dispatch,c=e.board,s="Game__board--size-".concat(a.boardSize);return r.a.createElement("div",{className:"Game__board ".concat(s)},a.id?function(a){for(var s=0,o=[];s<a*a;){var i=Math.floor(s/a)+1,l=s%a+1;console.log(c["".concat(i,"-").concat(l)]),o.push(r.a.createElement(L,Object.assign({key:"".concat(i,"-").concat(l),posX:i,posY:l,pointData:c["".concat(i,"-").concat(l)],dispatch:n,user:t},e))),s++}return o}(a.boardSize):r.a.createElement(r.a.Fragment,null))},z=(t(76),function(e){var a={stones:"black",username:"Name",captures:0};return r.a.createElement("div",{className:"player-container player-container--".concat(a.stones)},r.a.createElement("div",{className:"player-container__bowl player-container__bowl--".concat(a.stones)},r.a.createElement("p",null,"Pass?")),r.a.createElement("div",{className:"player-container__name-space player-container__name-space--".concat(a.stones)},r.a.createElement("h4",null,a?a.username:"Waiting for player"),r.a.createElement("div",{className:"player-container__caps-space player-container__caps-space__".concat(a.stones)},r.a.createElement("p",{className:"player-container__resign-message player-container__resign-message--".concat(a.stones)},"Resign?"),r.a.createElement("p",{className:"player-container__caps-counter player-container__caps-counter--".concat(a.stones)},a?a.captures:"Captures go here"))))}),H=function(e){var a=e.state,t=e.dispatch,c=parseInt(Object(u.f)().id)||0;return Object(n.useEffect)((function(){!function(){var e,a;i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(J(c));case 2:if(!(e=n.sent)){n.next=6;break}return a={type:"GAMES",message:"SET_ACTIVE",body:e},n.abrupt("return",t(a));case 6:case"end":return n.stop()}}))}()}),[c,t]),Object(n.useEffect)((function(){!function(){var e=a.active.game,n=a.user;t({type:"SOCKET",message:"CONNECT_GAME",body:{game:e,user:n,dispatch:t}})}()}),[a.active,t,a.user]),r.a.createElement("div",{className:"Game","data-testid":"Game"},r.a.createElement("div",{className:"Game__meta-container"},r.a.createElement("span",{className:"Game__socket-flag"},a.socket?"\u2713":" \u20e0"),r.a.createElement(p,null),r.a.createElement("p",null,"Timer"),r.a.createElement("p",null,"? Game Tree")),r.a.createElement("div",{className:"Game__board-container"},r.a.createElement(z,null),r.a.createElement(D,{dispatch:t,game:a.active.game,record:a.active.record,user:a.user,board:a.board}),r.a.createElement(z,null)),r.a.createElement("div",{className:"Game__message-container"},r.a.createElement("p",null,"Messages"),r.a.createElement("p",null,"Message Form")))},K=(t(77),f.a.apiAddress),V="".concat(K,"/rooms"),X=new Headers;X.append("Content-Type","application/json"),X.append("Accept","application/json"),X.append("Sec-Fetch-Site","cross-site");var $=function(){var e;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(fetch(V,{method:"GET",credentials:"include",headers:X}).then((function(e){return e.text()})).then((function(e){return JSON.parse(e)})).catch((function(e){return e})));case 2:return e=a.sent,a.abrupt("return",e);case 4:case"end":return a.stop()}}))},q=function(e){var a;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(fetch("".concat(V,"/").concat(e),{method:"GET",credentials:"include",headers:X}).then((function(e){return e.text()})).then((function(e){return JSON.parse(e)})).then((function(e){return e.games=e.roomGames.map((function(e){return delete Object.assign(e,{boardSize:e.board_size}).board_size,delete Object.assign(e,{playerBlack:e.player_black}).player_black,delete Object.assign(e,{playerBlackRank:e.player_black_rank}).player_black_rank,delete Object.assign(e,{playerWhite:e.player_white}).player_white,delete Object.assign(e,{playerWhiteRank:e.player_white_rank}).player_white_rank,delete Object.assign(e,{winType:e.win_type}).win_type,e})),e})).catch((function(e){return e})));case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}))},Q=(t(78),function(e){var a=e.room;return r.a.createElement("div",{className:"RoomButton","data-testid":"RoomButton"},r.a.createElement("h4",{className:"RoomButton__room-name"},a.name),r.a.createElement(m.b,{to:"/rooms/".concat(a.id)},"Join Room"))}),Y=(t(79),function(){return r.a.createElement("div",{className:"Loading"},r.a.createElement("div",{className:"point",id:"a-1"}),r.a.createElement("div",{className:"point",id:"a-2"}),r.a.createElement("div",{className:"point",id:"a-3"}),r.a.createElement("div",{className:"point",id:"a-4"}),r.a.createElement("div",{className:"point",id:"b-1"}),r.a.createElement("div",{className:"point",id:"b-2"}),r.a.createElement("div",{className:"point",id:"b-3"}),r.a.createElement("div",{className:"point",id:"b-4"}),r.a.createElement("div",{className:"point",id:"c-1"}),r.a.createElement("div",{className:"point",id:"c-2"}),r.a.createElement("div",{className:"point",id:"c-3"}),r.a.createElement("div",{className:"point",id:"c-4"}),r.a.createElement("div",{className:"point",id:"d-1"}),r.a.createElement("div",{className:"point",id:"d-2"}),r.a.createElement("div",{className:"point",id:"d-3"}),r.a.createElement("div",{className:"point",id:"d-4"}))}),Z=function(e){var a=e.state||{},t=e.dispatch;return Object(n.useEffect)((function(){!function(){var e,a;i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap($());case 2:if(!(e=n.sent)){n.next=6;break}return a={type:"ROOMS",message:"SET_ROOMS",body:e.rooms},n.abrupt("return",t(a));case 6:case"end":return n.stop()}}))}()}),[t]),r.a.createElement("div",{className:"Home","data-testid":"Home"},function(){var e=a.rooms||[];return e.length?e.map((function(e){return r.a.createElement(Q,{key:"room-".concat(e.id),room:e})})):r.a.createElement(Y,null)}())},ee=(t(80),function(){return r.a.createElement("div",{className:"News","data-testid":"News"},r.a.createElement("p",null,"News"))}),ae=(t(81),t(82),function(e){var a=e.game,t=e.dispatch,n=e.user;return r.a.createElement("div",{className:"GameButton","data-testid":"GameButton"},a.open?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:function(){return function(){console.log("request to Join Game ".concat(a.id,"!"));var e={type:"GAMES",message:"JOIN_REQUEST",body:{id:a.id}};t(e)}()}},"Request to Join Game"),r.a.createElement("div",{className:"GameButton__player-data GameButton__player-data--black"},r.a.createElement("span",{className:"GameButton__player-data__name GameButton__player-data__name--black"},a.playerBlack),r.a.createElement("span",{className:"GameButton__player-data__rank GameButton__player-data__rank--black"},a.playerBlackRank))):function(){var e=a.winType?"Study Game":n?"Rejoin Game":"Watch Game";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"GameButton__seat GameButton__seat--black"}),r.a.createElement("div",{className:"GameButton__table"},r.a.createElement("div",{className:"GameButton__table__meta"},r.a.createElement("div",{className:"GameButton__player-data GameButton__player-data--black"},r.a.createElement("span",{className:"GameButton__player-data__name GameButton__player-data__name--black"},a.playerBlack),r.a.createElement("span",{className:"GameButton__player-data__rank GameButton__player-data__rank"},a.playerBlackRank)),r.a.createElement(m.b,{className:"GameButton__link",to:"/games/".concat(a.id)},e),r.a.createElement("div",{className:"GameButton__player-data GameButton__player-data--white"},r.a.createElement("span",{className:"GameButton__player-data__name GameButton__player-data__name--white"},a.playerWhite),r.a.createElement("span",{className:"GameButton__player-data__rank GameButton__player-data__rank--white"},a.playerWhiteRank))),r.a.createElement("div",{className:"GameButton__table__image"},r.a.createElement("div",{className:"table__player-area table__player-area--black"},r.a.createElement("div",{className:"table__player-bowl table__player-bowl--black"})),r.a.createElement("div",{className:"table__game-board"},r.a.createElement("div",{className:"table__game-board--grid"})),r.a.createElement("div",{className:"table__player-area table__player-area--white"},r.a.createElement("div",{className:"table__player-bowl table__player-bowl--white"})))),r.a.createElement("div",{className:"GameButton__seat GameButton__seat--white"}))}())}),te=(t(83),function(e){var a=e.message;return r.a.createElement("div",{className:"Message","data-testid":"Message"},r.a.createElement("p",null,a.content),r.a.createElement("p",null,a.username),r.a.createElement("p",null,a.admin?"admin":r.a.createElement(r.a.Fragment,null)))}),ne=(t(84),function(e){var a=e.error;return r.a.createElement("span",{className:"error error--action","data-testid":"ActionError"},a)}),re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"This Feature is in Development :)"))},ce=function(e){var a=e.state,t=e.dispatch,c=parseInt(Object(u.f)().id)||0;Object(n.useEffect)((function(){!function(){var e,a;i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(q(c));case 2:if(!(e=n.sent)){n.next=6;break}return a={type:"ROOMS",message:"JOIN_ROOM",body:e},n.abrupt("return",t(a));case 6:case"end":return n.stop()}}))}()}),[c,t]),Object(n.useEffect)((function(){!function(){var e={type:"SOCKET",message:"CONNECT_ROOM",body:{user:a.user,room:c,dispatch:t}};t(e)}()}),[c,a.user,t]);return r.a.createElement("div",{className:"Room","data-testid":"Room"},r.a.createElement("div",{className:"Room__heading"},a.errors.joinGame?r.a.createElement(ne,{error:a.errors.joinGame}):r.a.createElement(r.a.Fragment,null)),r.a.createElement("div",{className:"Room__game-container"},function(){var e=a.games||[];return e.length?e.map((function(e){return r.a.createElement(ae,{key:"game-".concat(e.id),game:e,dispatch:t,user:e.playerBlack===a.user.username||e.playerWhite===a.user.username})})):r.a.createElement(Y,null)}()),r.a.createElement("div",{className:"Room__message-container"},function(){var e=a.messages||[];return e.length?e.map((function(e,a){return r.a.createElement(te,{key:"message-".concat(a),message:e})})):r.a.createElement(Y,null)}(),r.a.createElement(re,null)))},se=function(e){var a=e.state,t=e.page,n=e.dispatch,c=function(){switch(t){case"account":return r.a.createElement(W,{state:a,dispatch:n});case"game":return r.a.createElement(H,{state:a,dispatch:n});case"home":return r.a.createElement(Z,{state:a,dispatch:n});case"news":return r.a.createElement(ee,{state:a,dispatch:n});case"room":return r.a.createElement(ce,{state:a,dispatch:n});default:return r.a.createElement(r.a.Fragment,null)}};return r.a.createElement(r.a.Fragment,null,"game"===t?c():r.a.createElement("div",{className:"main-wrapper","data-testid":"main-wrapper"},r.a.createElement(d,{state:a}),r.a.createElement("div",{className:"content-wrapper"},r.a.createElement(F,{page:t,state:a,dispatch:n}),r.a.createElement("main",null,c()))))},oe=function(){return{active:{game:{id:0,room:0,mainTime:"",timePeriod:0,periodLength:0,overtime:"",overtimePeriod:0,overtimeLength:0,application:"",applicationVersion:"",open:!1,description:null,event:null,round:null,name:null,winType:null,capturesBlack:null,capturesWhite:null,score:null,boardSize:0,komi:0,handicap:0,playerBlack:"",playerBlackRank:"",playerWhite:"",playerWhiteRank:""},record:[]},board:{},connect:{location:"",type:""},currentRoom:{description:"",id:0,language:"",name:""},errors:{},games:[{boardSize:0,handicap:0,id:0,komi:0,open:!1,playerBlack:"",playerBlackRank:"",playerWhite:"",playerWhiteRank:"",winType:null}],joinGame:{},messages:[{admin:!1,content:"",username:""}],socket:{connected:!1,nsp:""},user:{username:"",email:"",id:0}}};function ie(e,a){var t=a.body;return Object(E.a)({},e,{user:t})}var le=function(e,a){switch(a.message){case"AUTH_ERROR":return function(e,a){var t=a.body.authError;return Object(E.a)({},e,{errors:{auth:t}})}(e,a);case"JOIN_ROOM_ERROR":return function(e,a){var t=a.body.joinRoomError;return Object(E.a)({},e,{errors:{joinRoom:t}})}(e,a);case"JOIN_GAME_ERROR":return function(e,a){var t=a.body.joinGameError;return Object(E.a)({},e,{errors:{joinGame:t}})}(e,a);default:return e}};var me=function(e,a){switch(a.message){case"SET_ROOMS":var t=a.body;return Object(E.a)({},e,{rooms:t});case"SET_CURRENT":var n=a.body;return Object(E.a)({},e,{currentRoom:n});case"JOIN_ROOM":var r=function(e,a){if(a.body.messages.length){var t=a.body.messages;return fe(e,{type:"MESSAGES",message:"SET_MESSAGES",body:t})}return e}(function(e,a){var t=a.body.currentRoom;return fe(e,{type:"ROOMS",message:"SET_CURRENT",body:t})}(e,a),a);return a.body.roomGames?function(e,a){if(a.body.roomGames.length){var t=a.body.roomGames;return fe(e,{type:"GAMES",message:"SET_GAMES",body:t})}return e}(r,a):function(e,a){return fe(e,{type:"ERR",message:"JOIN_ROOM_ERROR",body:{joinRoomError:"Game room has no games"}})}(e);case"NEW_USER":return a.data,e;default:return e}};var ue=t(47),pe=function(e,a){switch(a.message){case"SET_GAMES":var t=function(e){return Object(ue.a)(e.body).map((function(e){return e.playerBlackRank&&(e.playerBlackRank=de(e.playerBlackRank)),e.playerWhiteRank&&(e.playerWhiteRank=de(e.playerWhiteRank)),e}))}(a);return Object(E.a)({},e,{games:t});case"JOIN_REQUEST":if(!Object.entries(e.user).length){return fe(e,{type:"ERR",message:"JOIN_GAME_ERROR",body:{joinGameError:"user not logged in"}})}var n=a.body;return Object(E.a)({},e,{joinGame:n});case"UPDATE_BOARD":return console.log(a.body),Object(E.a)({},e,{board:a.body});case"SET_ACTIVE":return Object(E.a)({},e,{active:a.body});default:return e}};function de(e){switch(e[0]){case"D":case"K":return"".concat(e.slice(1)).concat(e[0].toLowerCase());case"U":return"?"}}var _e=t(85),Ee=function(e,a){switch(a.message){case"CONNECTED":return console.log(a.body.nsp),Object(E.a)({},e,{connect:{type:"home",location:a.body.nsp}});case"LAUNCH":var t=a.body,n=t.nsp,r=t.dispatch,c=_e.launch(n,r);return Object(E.a)({},e,{socket:c});case"CONNECT_ROOM":var s=a.body,o=s.user,i=s.room,l=s.dispatch,m=e.socket;m.nsp||(m=_e.launch("",l)),m.nsp!=="/".concat(i)&&(m.emit("connect_room",{user:o,room:i}),m.close());var u=_e.launch(i,l);return Object(E.a)({},e,{socket:u});case"CONNECT_GAME":return function(e,a){var t,n=a.body,r=n.user,c=n.game,s=n.dispatch,o=e.socket;if(!o.nsp||o.nsp!=="/".concat(c.room)){var i={type:"SOCKET",message:"CONNECT_ROOM",body:{user:r,room:c.room,dispatch:s}};t=fe(e,i)}t||(t=Object(E.a)({},e));return t.socket.emit("connect_game",{user:r,game:c}),Object(E.a)({},t)}(e,a);case"MAKE_MOVE":return function(e,a){var t=a.body,n=(t.user,t.game,t.room,t.board,t.move,e.socket);return console.log(a),n.emit("make_move",Object(E.a)({},a.body)),e}(e,a);default:return e}};var fe=function(e,a){var t=function(e){return Object(E.a)({},e,{errors:{}})}(Object(E.a)({},e));switch(a.type){case"INIT":return{active:{game:{id:0,room:0,mainTime:"",timePeriod:0,periodLength:0,overtime:"",overtimePeriod:0,overtimeLength:0,application:"",applicationVersion:"",open:!1,description:null,event:null,round:null,name:null,winType:null,capturesBlack:null,capturesWhite:null,score:null,boardSize:0,komi:0,handicap:0,playerBlack:"",playerBlackRank:"",playerWhite:"",playerWhiteRank:""},record:[]},board:{},connect:{location:"",type:""},currentRoom:{description:"",id:0,language:"",name:""},errors:{},games:[{boardSize:0,handicap:0,id:0,komi:0,open:!1,playerBlack:"",playerBlackRank:"",playerWhite:"",playerWhiteRank:"",winType:null}],joinGame:{},messages:[{admin:!1,content:"",username:""}],socket:{connected:!1,nsp:""},user:{username:"",email:"",id:0}};case"AUTH":return function(e,a){switch(a.message){case"LOGIN":case"SIGNUP":return ie(e,a);case"LOGOUT":default:return e}}(t,a);case"GAMES":return pe(t,a);case"INDEX":return function(e,a){switch(a.message){case"SET_USER":var t=a.body;return Object(E.a)({},e,{user:t});default:return e}}(t,a);case"MESSAGES":return function(e,a){switch(a.message){case"SET_MESSAGES":var t=a.body;return Object(E.a)({},e,{messages:t});default:return e}}(t,a);case"ROOMS":return me(t,a);case"SOCKET":return Ee(t,a);case"ERR":return le(t,a);default:return e}};var be=f.a.apiAddress,he=new Headers;he.append("Content-Type","application/json"),he.append("Accept","application/json"),he.append("Sec-Fetch-Site","cross-site");var ge=function(){var e;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(fetch(be,{method:"GET",credentials:"include",headers:he}).then((function(e){return e.text()})).then((function(e){return JSON.parse(e)})).catch((function(e){return e})));case 2:return e=a.sent,a.abrupt("return",e);case 4:case"end":return a.stop()}}))};t(117);var ve=function(){var e=Object(n.useReducer)(fe,{},oe),a=Object(l.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){!function(){var e;i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(ge());case 2:(e=a.sent)&&c({type:"INDEX",message:"SET_USER",body:e});case 4:case"end":return a.stop()}}))}()}),[]),Object(n.useEffect)((function(){t.connect.type||c({type:"SOCKET",message:"LAUNCH",body:{nsp:"",dispatch:c}})}),[t.connect]),r.a.createElement(m.a,null,r.a.createElement("div",{"data-testid":"App",className:"App"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/account"},r.a.createElement(se,{page:"account",state:t,dispatch:c})),r.a.createElement(u.a,{path:"/rooms/:id"},r.a.createElement(se,{page:"room",state:t,dispatch:c})),r.a.createElement(u.a,{path:"/games/:id"},r.a.createElement(se,{page:"game",state:t,dispatch:c})),r.a.createElement(u.a,{path:"/news"},r.a.createElement(se,{page:"news",state:t,dispatch:c})),r.a.createElement(u.a,{path:"/home"},r.a.createElement(se,{page:"home",state:t,dispatch:c})),r.a.createElement(u.a,{path:"/"},t.user.username?r.a.createElement(se,{page:"home",state:t,dispatch:c}):r.a.createElement(se,{page:"news",state:t,dispatch:c}))),r.a.createElement("p",{className:"App__socket-flag"},t.connect.type?"\u2713":" \u20e0")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[48,1,2]]]);
//# sourceMappingURL=main.164728a0.chunk.js.map
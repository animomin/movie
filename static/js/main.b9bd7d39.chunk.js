(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(12),i=a.n(r),o=a(2),c=a.n(o),m=a(13),l=a(14),u=a(17),v=a(15),d=a(18),p=a(16),y=a.n(p);a(43);var g=function(e){var t=e.year,a=e.title,n=e.summary,r=e.poster,i=e.genres;return console.log(i),s.a.createElement("div",{className:"movie"},s.a.createElement("img",{src:r,alt:a,title:a}),s.a.createElement("div",{className:"movie__data"},s.a.createElement("h3",{className:"movie__title"},a),s.a.createElement("h5",{className:"movie__year"},t),s.a.createElement("span",{className:"movie__genre"},i.join(",")),s.a.createElement("p",{className:"movie__summary"},n.slice(0,150),"...")))},_=(a(44),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(s)))).state={isLoading:!0,movies:[]},a.getMovies=function(){var e,t;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.awrap(y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"));case 2:e=n.sent,t=e.data.data.movies,a.setState({movies:t,isLoading:!1});case 5:case"end":return n.stop()}}))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return s.a.createElement("section",{className:"container"},t?s.a.createElement("div",{className:"loader"},s.a.createElement("span",{className:"loader__text"},"Loading...")):s.a.createElement("div",{className:"movies"},a.map((function(e){return s.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(s.a.Component));i.a.render(s.a.createElement(_,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b9bd7d39.chunk.js.map
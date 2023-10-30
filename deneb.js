import "https://cdnjs.cloudflare.com/ajax/libs/split.js/1.6.5/split.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.6/underscore-min.js";


export function getStyle(){
  var temp =`
@import url(https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css);
  
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
  outline:none;
}
body{
  padding:4rem;
  width:100vw;
  height:100vh;
  background:whitesmoke;
  display:flex;
}
.gutter {
    background-color: #eee;
}
.gutter.gutter-vertical {
    cursor: row-resize;
}

#app{
  display:flex;
  width:100%;
}
#left,#right{
  background:white;
  width:100%;
  height:100%;
  border:1px solid #ddd;
}
#right{
  display:flex;
  flex-direction:column;
}
#top{
  border-bottom:1px solid #ddd;
}
#left{
  height:100%;
  overflow-y:scroll;
}
#top,#bottom{
  height:50%;
  overflow-y:scroll;
}

#top-wrap,#bottom-wrap{
  height:200vh;
}

::-webkit-scrollbar{
  background:#eee;
  width:6px; 
}
::-webkit-scrollbar-thumb {
  background: #aaa;
  border-radius:6px;
}
[contenteditable]{
  padding:1rem;
  line-height:1.15;
}
  `  
  var el=document.createElement('style');
  el.innerHTML= temp;
  document.head.append(el);
}

export function getHTML(){
  var temp =`
  <div id="left">
    <div id="left-wrap">#left-wrap</div>
  </div>
  <div id="right">
    <div id="top">
      <div id="top-wrap" contenteditable="plaintext-only">#top-wrap</div>
    </div>
    <div id="bottom">
      <div id="bottom-wrap">#bottom-wrap</div>
    </div>
  </div>
  `
  var el=document.createElement('div');
  el.id="app"
  el.innerHTML= temp;
  document.body.append(el);  
}

function deneb(){
  const g=d=>document.getElementById(d)
  getStyle()
  getHTML()
  
  Split(['#top', '#bottom'], {
     direction: 'vertical',
 })
  
  return {$left:g('left-wrap'),
          $top:g('top-wrap'),
          $bottom:g('bottom-wrap')}
}

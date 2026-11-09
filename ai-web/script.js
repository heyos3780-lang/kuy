const themes=[
 {a:'#6c2bff',b:'#3d7bff',p:'#ff6fb5'},
 {a:'#e63e9c',b:'#ff8a4c',p:'#ffd36b'},
 {a:'#1e88ff',b:'#00d2ff',p:'#8f7bff'},
 {a:'#00b37a',b:'#4fd1ff',p:'#b6f06b'},
 {a:'#ff7a1a',b:'#ff3d6e',p:'#ffd36b'}];
let i=0;
function setTheme(n){
  i=n;const t=themes[n],s=document.documentElement.style;
  s.setProperty('--a',t.a);s.setProperty('--a2',t.b);s.setProperty('--pink',t.p);
  try{localStorage.setItem('theme',n)}catch(e){}
  const o=document.querySelector('.orb');
  if(o){o.classList.remove('pop');void o.offsetWidth;o.classList.add('pop')}
}
try{const s=parseInt(localStorage.getItem('theme'));if(s>=0&&s<themes.length)setTheme(s)}catch(e){}
document.querySelectorAll('[data-t]').forEach(b=>{b.style.background=themes[b.dataset.t].a;b.onclick=()=>setTheme(+b.dataset.t)});
document.querySelectorAll('[data-cycle]').forEach(b=>b.onclick=()=>setTheme((i+1)%themes.length));
const page=document.body.dataset.page;
document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('on',a.dataset.p===page));
// เอาเมาส์ไปชี้ (hover) ที่ปุ่ม สวอตช์สี หรือลูกบอล แล้วเปลี่ยนสีทันที
document.querySelectorAll('.btn,.card,.step').forEach(el=>el.addEventListener('mouseenter',()=>setTheme((i+1)%themes.length)));
document.querySelectorAll('[data-t]').forEach(b=>b.addEventListener('mouseenter',()=>setTheme(+b.dataset.t)));
const orb=document.querySelector('.orb');
if(orb)orb.addEventListener('mouseenter',()=>setTheme((i+1)%themes.length));

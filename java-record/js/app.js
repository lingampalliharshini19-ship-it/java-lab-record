const RC=['#d64545','#e0701f','#c98a0b','#2f9e6b','#1a9aa5','#2f74c9','#4f56c7','#8250c9','#b94aa3','#d6456f','#0f8f6e'];
const $=s=>document.querySelector(s),app=$('#app');
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const store={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const tips=["Every Java program starts execution from the main() method.","String is immutable; StringBuffer is mutable.","An interface can extend another interface, but a class implements it.","finally always runs, whether or not an exception occurs.","Use equals() to compare string content, not ==.","Protected members are visible in the same package and in subclasses."];
// theme
function setTheme(d){document.body.classList.toggle('dark',d);$('#theme').textContent=d?'☀️':'🌙';store.set('dark',d)}
$('#theme').onclick=()=>setTheme(!document.body.classList.contains('dark'));
setTheme(store.get('dark',false));
// week buttons
$('#weeks').innerHTML='<a href="#home">🏠 Home</a>'+WEEKS.map(w=>`<a href="#w${w.n}" data-w="${w.n}" style="--wc:${RC[w.n-1]}">Week ${w.n}</a>`).join('');
function home(){
 app.innerHTML=`<section class="hero"><div><span class="tag">Java Programming · Lab Record</span>
 <h1>Welcome to My Java Record</h1><p>A complete collection of my Java programming lab work: every week, every program, with the question, source code and command-prompt output. Pick a week to begin.</p>
 <div class="stats"><div class="card"><span class="num">${WEEKS.length}</span><p>Total Weeks</p></div><div class="card"><span class="num">${WEEKS.reduce((a,w)=>a+w.p.length,0)}</span><p>Total Programs</p></div></div>
 <div class="card" style="margin-top:12px"><b>💡 Java tip of the day</b><p>${tips[new Date().getDate()%tips.length]}</p></div></div>
 <aside class="profile"><img src="assets/profile.png" alt="L.Harshini"><h2>L.Harshini</h2><div class="roll">26EU02910</div>
 <ul><li><span>Year</span>IInd Year</li><li><span>Branch</span>AIML</li><li><span>Section</span>B</li><li><span>Subject</span>Java Programming</li></ul></aside></section>
 <h2 class="sec">Choose a week</h2><div class="grid">${WEEKS.map(w=>`<a class="card wk" style="--wc:${RC[w.n-1]}" href="#w${w.n}"><span class="tag">Week ${w.n}</span><h3>${w.t}</h3><p>${w.p.length?w.p.length+' program(s) available':'Overview'}</p></a>`).join('')}</div>`;
}
function week(n){
 const w=WEEKS.find(x=>x.n==n);if(!w)return home();
 app.innerHTML=`<h2 style="margin-bottom:4px">Week ${w.n} · ${w.t}</h2><p style="color:var(--mut)">${w.d}</p>
 ${w.html||''}${w.p.length?`<div class="grid">${w.p.map((p,i)=>`<a class="card" href="#w${n}-${i+1}"><span class="tag">Program ${i+1}</span><h3>${p.t}</h3></a>`).join('')}</div>`:(w.html?'':'<div class="card">Programs for this week will be added soon.</div>')}`;
}
function prog(n,i){
 const w=WEEKS.find(x=>x.n==n),p=w&&w.p[i-1];if(!p)return home();
 const pr=w.p[i-2],nx=w.p[i];
 const lines=p.o.split('\n').map(l=>l.startsWith('>')?`<span class="p">C:\\Java&gt;</span> <span class="c">${esc(l.slice(2))}</span>`:esc(l)).join('\n');
 app.innerHTML=`<a class="btn" href="#w${n}">← Week ${n}</a>
 <h2 style="margin-bottom:0">Program ${i}: ${p.t}</h2><span class="tag">Week ${n}</span>
 <h2 class="sec">❓ Question</h2><div class="q">${esc(p.q)}</div>
${p.a?`<h2 class="sec">🎯 Aim</h2><div class="q">${esc(p.a)}</div>`:''}
 <h2 class="sec">💻 Code</h2><div class="code"><div class="bar2"><span>Main.java</span><button id="cp">Copy</button></div><pre>${esc(p.c)}</pre></div>
 <h2 class="sec">🖥️ Output</h2><div class="term"><div class="bar2"><span>Command Prompt</span><button id="run">▶ Run</button></div><pre id="out">${lines}</pre></div>
${p.n?`<div class="q"><b>Note:</b> ${esc(p.n)}</div>`:''}${p.s?`<h2 class="sec">📁 Save as</h2><div class="q"><b>${esc(p.s)}</b></div><h2 class="sec">▶ How to run</h2><div class="code"><pre>${esc(p.h)}</pre></div>`:''}
 <div class="pn">${pr?`<a class="card" href="#w${n}-${i-1}"><small>← Previous</small><b>${pr.t}</b></a>`:'<span></span>'}${nx?`<a class="card r" href="#w${n}-${i+1}"><small>Next →</small><b>${nx.t}</b></a>`:''}</div>`;
 $('#cp').onclick=e=>{navigator.clipboard&&navigator.clipboard.writeText(p.c);e.target.textContent='Copied!';setTimeout(()=>e.target.textContent='Copy',1200)};
 $('#run').onclick=()=>{const o=$('#out');o.innerHTML='';let k=0;const t=setInterval(()=>{k++;o.innerHTML=lines.split('\n').slice(0,k).join('\n');if(k>=lines.split('\n').length)clearInterval(t)},350)};
}
function route(){
 const h=location.hash.slice(1)||'home',m=h.match(/^w(\d+)(?:-(\d+))?$/);
 document.querySelectorAll('#weeks a').forEach(a=>a.classList.toggle('on',m&&a.dataset.w==m[1]));
 m?app.style.setProperty('--ac',RC[+m[1]-1]):app.style.removeProperty('--ac');
 m?(m[2]?prog(+m[1],+m[2]):week(+m[1])):home();scrollTo(0,0);
}
addEventListener('hashchange',route);route();
// search
const q=$('#q'),res=$('#res');
q.oninput=()=>{const v=q.value.toLowerCase().trim();if(!v){res.style.display='none';return}
 const hits=[];WEEKS.forEach(w=>w.p.forEach((p,i)=>{if((p.t+p.q).toLowerCase().includes(v))hits.push(`<a href="#w${w.n}-${i+1}">Week ${w.n} · ${p.t}</a>`)}));
 res.innerHTML=hits.join('')||'<a>No results</a>';res.style.display='block'};
res.onclick=()=>{res.style.display='none';q.value=''};
// shortcuts: / search, arrows prev/next program, scroll-top
addEventListener('keydown',e=>{
 if(e.key==='/'&&document.activeElement!==q){e.preventDefault();q.focus();return}
 const m=location.hash.match(/^#w(\d+)-(\d+)$/);if(!m||document.activeElement===q)return;
 const n=+m[1],i=+m[2];
 if(e.key==='ArrowRight'&&WEEKS.find(w=>w.n==n).p[i])location.hash=`w${n}-${i+1}`;
 if(e.key==='ArrowLeft'&&i>1)location.hash=`w${n}-${i-1}`});
const up=$('#up');addEventListener('scroll',()=>up.style.display=scrollY>300?'block':'none');up.onclick=()=>scrollTo(0,0);

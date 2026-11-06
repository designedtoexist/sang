const P=[["Obsidian Gate","08090D","12141B","181B24","E6E8EE","D4B477"],["Observatory Blue","0A1019","101827","1B2A40","E3E8EF","77A9C4"],["Amber Dusk","0F111A","181B24","2A2F3F","ECE7DF","C98763"],["Cosmic Violet","0C0B18","171428","2E2850","E6E4F0","9A8EC4"],["Deep Cosmos","0A1018","141C2A","263650","E5E9F0","77A9C4"],["Journal Amber","140E0B","241914","3D2B21","F0E6D8","C98763"],["Mist Silver","0C0E14","181B24","2D3140","ECEEF3","B8BBC8"],["Antique Gold","0B0A08","1C1810","3A301C","F3EDE0","D4B477"],["Signal Ice","080D12","10202B","1B3A4C","E3EEF3","77A9C4"],["Final Horizon","0A0A10","141527","2A2840","EAE8F2","D4B477"]];
const rgb=h=>[0,2,4].map(i=>parseInt(h.substr(i,2),16)),PR=P.map(r=>r.slice(1).map(rgb)),mix=(a,b,t)=>a.map((v,i)=>Math.round(v+(b[i]-v)*t));
const N=(n,f)=>Array.from({length:n},(_,i)=>f(i+1)),pad=n=>String(n).padStart(2,'0'),$=id=>document.getElementById(id),rd=Math.random;
// ✎ EDIT YOUR CONTENT HERE — img: photo (file path or data URI) · url: live project link
/* ✎ Designed to Exist website — paste the real link here */
const DTE_PAGE='dte.html',DTE_SITE='https://designedtoexist.vercel.app/';
const DTE_GH='https://github.com/designedtoexist',DTE_IG='https://www.instagram.com/designed_toexist/';
const SITES=[['Designed to Exist','https://designed-to-exist.netlify.app/'],['Night Market','https://night-market-dte.vercel.app/'],['Small Weather','https://small-weather-mu.vercel.app/'],['Morrow & Moss','https://morrow-and-moss.netlify.app/']];
const dte=(c,t)=>`<a class="${c}" href="${DTE_PAGE}">${t}</a>`;
const DATA={
 edu:[{"t": "RMK College of Engineering and Technology", "m": "2023 — 2027 · B.E. CSE – Cyber Security"}, {"t": "Maharishi Vidya Mandir", "m": "Higher Secondary · 12th Grade"}, {"t": "Maharishi Vidya Mandir", "m": "Secondary · 10th Grade"}],
 skills:[{"t": "C", "m": "Languages"}, {"t": "C++", "m": "Languages"}, {"t": "Java", "m": "Languages"}, {"t": "JavaScript", "m": "Languages"}, {"t": "SQL", "m": "Languages"}, {"t": "HTML5", "m": "Web"}, {"t": "CSS3", "m": "Web"}, {"t": "JavaScript", "m": "Web"}, {"t": "React", "m": "Web"}, {"t": "Tailwind CSS", "m": "Web"}, {"t": "Three.js / WebGL", "m": "Web"}, {"t": "Network Traffic Analysis (Wireshark/PCAP)", "m": "Security"}, {"t": "Web App Security", "m": "Security"}, {"t": "Threat Intelligence", "m": "Security"}, {"t": "Risk Scoring", "m": "Security"}, {"t": "Secure Code Review", "m": "Security"}, {"t": "Git & GitHub", "m": "Tools"}, {"t": "Kali Linux", "m": "Tools"}, {"t": "Nmap", "m": "Tools"}, {"t": "Wireshark", "m": "Tools"}, {"t": "Burp Suite", "m": "Tools"}],
 proj:[{"t": "Crypsia", "m": "Blockchain · Project", "d": "End-to-end supply chain traceability platform tracking product lifecycles. Improves consumer trust and provides complete supply chain visibility.", "tags": ["React 18", "TypeScript", "Vite", "Tailwind CSS"], "url": "https://crypsia.vercel.app/", "img": "images/projects/crypsia.webp"}, {"t": "VulneraX", "m": "Cybersecurity · Project", "d": "Unified vulnerability intelligence platform that ingests findings from multiple scanners, deduplicates and filters noise, enriches results with threat intelligence, and generates prioritized, ticket-ready risk scores.", "tags": ["Vulnerability Intelligence", "Threat Intelligence", "Risk Scoring"], "url": "https://vulnerax-cys.vercel.app/", "img": ""}, {"t": "EduRelief", "m": "EdTech · Project", "d": "A platform connecting students with counselors and crowdfunding opportunities. Enhances student well-being and enables community-driven financial assistance.", "tags": ["React 18", "TypeScript", "Supabase", "PostgreSQL"], "url": "https://edurelief-six.vercel.app/", "img": "images/projects/edurelief.webp"}, {"t": "BharatScripts", "m": "Accessibility · Project", "d": "Transliteration platform converting Indian-language text to Roman script via OCR. Improves accessibility and navigation across multilingual regions.", "tags": ["React 18", "TypeScript", "Tesseract.js", "Web Speech API"], "url": "https://bharatscripts-transl-zkjt.bolt.host/", "img": "images/projects/bharatscripts.webp"}],
 cert:[{"t": "ACP", "m": "Issued 2026 · APISEC University", "d": "Certificate issued by APISEC University."}, {"t": "Cloud Computing and Distributed Systems", "m": "Issued 2024 · NPTEL", "d": "Certificate issued by NPTEL."}, {"t": "Ethical Hacking Essentials", "m": "Issued 2025 · EC-Council", "d": "Certificate issued by EC-Council."}, {"t": "Introduction to Internet of Things", "m": "Issued 2025 · NPTEL", "d": "Certificate issued by NPTEL."}, {"t": "Principles of Management", "m": "Issued 2026 · NPTEL", "d": "Certificate issued by NPTEL."}],
 ach:[{"t": "Digital Detective", "m": "Symposium · SRM Easwari Engineering College", "d": "", "p": "1st", "pl": "1st Place"}, {"t": "Forensic Hunt", "m": "Symposium · Dr. MGR Educational and Research Institute", "d": "", "p": "1st", "pl": "1st Place"}, {"t": "Stellar Metaverse", "m": "Symposium · Meenakshi Sundararajan Engineering College", "d": "", "p": "1st", "pl": "1st Place"}, {"t": "PEC Hacks 3.0", "m": "Hackathon · Panimalar Engineering College", "d": "", "p": "Finalist", "pl": "Finalist"}, {"t": "TN Police Cyber Hackathon 2025", "m": "Hackathon · Tamil Nadu Police Department", "d": "", "p": "Finalist", "pl": "Finalist"}, {"t": "Tackle The Code", "m": "Symposium · St. Joseph’s College of Engineering", "d": "", "p": "3rd", "pl": "3rd Place"}, {"t": "Cyber Innovators Hackathon", "m": "Hackathon · RMKCET", "d": "", "p": "3rd", "pl": "3rd Prize"}],
 part:[{"t": "Hero Campus Challenge Season 10", "m": "Hackathon", "d": "AI Product Hackathon (Product Space)", "img": "images/participations/hero-campus-challenge-certificate.webp"}, {"t": "NeuroHACK", "m": "Shaastra, IIT Madras", "d": "NeuroHACK — Shaastra, IIT Madras", "img": "images/participations/neurohack-certificate.webp"}, {"t": "National Level Hackathon 360°", "m": "2.0", "d": "National Level Hackathon 360° — 2.0", "img": "images/participations/hackathon-360-certificate.webp"}, {"t": "Technocrats Hackathon 2025", "m": "Finalist · 2025", "d": "Technocrats Hackathon 2025 — Finalist", "img": "images/participations/technocrats-hackathon-certificate.webp"}, {"t": "HP Power Lab 2.0 - Round 2", "m": "HPCL", "d": "HP Power Lab 2.0 — Round 2", "img": "images/participations/hp-power-lab-certificate.webp"}, {"t": "HP Power Lab 2.0 - Round 1", "m": "HPCL", "d": "Online Assessment – HPCL", "img": "images/participations/hp-power-lab-r1-certificate.webp"}, {"t": "Hack to the Future", "m": "12hr Hackathon", "d": "Easwari Engineering College, SRM Group", "img": "images/participations/hack-to-future-certificate.webp"}, {"t": "Tutedude's Web Dev Hackathon", "m": "48hr Hackathon", "d": "48hr online Web Development Hackathon", "img": "images/participations/tutedude-certificate.webp"}, {"t": "CodeClash: The August Arena", "m": "Coding Competition", "d": "Let's Code", "img": "images/participations/codeclash-certificate.webp"}, {"t": "Adobe India Hackathon", "m": "Round 1", "d": "Online MCQ + Coding", "img": "images/participations/adobe-hackathon-certificate.webp"}, {"t": "GDG Solution Challenge India", "m": "Google × Hack2skill", "d": "GDG on Campus Solution Challenge India", "img": "images/participations/gdg-solution-challenge-certificate.webp"}, {"t": "Build Smarter ML with Cloud", "m": "Saras AI Institute", "d": "Build Smarter ML with Cloud", "img": "images/participations/saras-ai-certificate.webp"}, {"t": "Full-Stack Web Development", "m": "YHills Edutech", "d": "Full-Stack Web Development", "img": "images/participations/yhills-certificate.webp"}, {"t": "Think Like a Designer (UI/UX)", "m": "IIT Gandhinagar", "d": "IIT Gandhinagar via Unstop", "img": "images/participations/think-like-designer-certificate.webp"}, {"t": "ASTHRA 2k25", "m": "Event · 2025", "d": "Meenakshi Sundararajan Engineering College", "img": "images/participations/asthra-2k25-certificate.webp"}, {"t": "COGNEBULA'25", "m": "Event · 2025", "d": "Velammal Engineering College", "img": "images/participations/cognebula-25-certificate.webp"}, {"t": "Web Development Hackathon", "m": "CODTECH IT Solutions", "d": "Web Development Hackathon", "img": "images/participations/codtech-certificate.webp"}, {"t": "INMATRIX24", "m": "Event · 2024", "d": "Velammal Institute of Technology", "img": "images/participations/inmatrix-certificate.webp"}, {"t": "PEC Hacks 3.0", "m": "Hackathon", "d": "Panimalar Engineering College", "img": "images/participations/pec-hacks-certificate.webp"}] };
const SO=['Singularity','Tetrahedron','Cube','Octahedron','Icosahedron','Dodecahedron','Merkaba','Torus','Phyllotaxis','Flower of Life'];
const W=[
["The Arrival","Sangamithra S S","Frontend Developer · Cyber Security · Freelance Web Designer at Designed to Exist.",'hero'],
["The Observer","A quiet observatory, an enormous universe","Cybersecurity student and frontend developer building secure, modern, user-friendly web experiences. Beyond the classroom, I freelance as a web designer under Designed to Exist.",''],
["The Origin","A journey across floating milestones","Each platform is a milestone: the schools, degrees and lessons that shaped how you think.",'edu'],
["The Constellation","Skills, linked by starlight","Four clusters: Frontend Development, Programming, Cybersecurity, and Tools & Technologies. No percentages, only craft.",'skills'],
["The Worlds Built","Every project is its own world","Four live worlds, each one a working product you can open and explore.",'proj'],
["The Studio","Designed to Exist","Beyond the classroom I freelance as a web designer under Designed to Exist, shaping creative digital portfolios and GitHub profiles. Every website we have shipped lives on its own page.",'dte'],
["The Archive","A gallery of collected artifacts","Certifications, collected along the way.",'cert'],
["The Hall of Achievements","Milestones, set in gold","Moments of recognition, listed as they happened.",'ach'],
["The Signals","Transmissions from events and stages","Events, hackathons and stages received as signals, kept separate from achievements.",'part'],
["The Transmission","Let’s create something meaningful.","The journey doesn’t end here. — Sangamithra S S · Frontend Developer · Cyber Security · Freelance Web Designer",'contact']];
// ui
const dots=$('dots');W.forEach((w,i)=>dots.insertAdjacentHTML('beforeend',`<button data-n="${w[0]}" aria-label="${w[0]}"></button>`));
const db=[...dots.children],H=()=>document.documentElement.scrollHeight-innerHeight;
db.forEach((b,i)=>b.onclick=()=>tgt=i/9*H());
let cix=0;const cd=$('cd'),wr=(t,m)=>m=='c'?t.split(' ').map(x=>`<span class="wd">${[...x].map(c=>`<span class="w" style="--i:${cix++}">${c}</span>`).join('')}</span>`).join(' '):t.split(' ').map(x=>m=='m'?`<span class="mk"><span class="w">${x}</span></span>`:`<span class="w">${x}</span>`).join(' ');let pend=-2,shown=-1,wds=[],lis=[],dn=false,act=-1,md=null;
const SH={proj:1};
const phF=(o,j)=>`<div class="ph" style="--a:${j*47}deg">${o.img?`<img src="${o.img}" alt="${o.t}">`:'<span>Your photo here</span>'}</div>`;
const bwF=o=>`<div class="bw"><div class="br"><i></i><i></i><i></i><u>${o.url?o.url.replace(/^https?:\/\//,''):o.t.toLowerCase().replace(/[^a-z0-9-]+/g,'')+'.com'}</u></div><div class="vp">${o.url?`<iframe title="${o.t}" tabindex="-1" data-src="${o.url}" referrerpolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>`:o.img?`<img src="${o.img}" alt="${o.t}">`:'<span>Live preview<br>appears here</span>'}</div></div>`;
function card(i){cix=0;const w=W[i],k=w[3],it=DATA[k],sw=SH[k];cd.className='l'+i+(i==0?' hero':'')+(sw?' sw':'');
 let x=`<h2 aria-label="${w[1]}">${wr(w[1],i==0||i==9?'c':'m')}</h2>`+(sw?'':`<p>${wr(w[2])}</p>`);
 if(k=='hero')x+=`<div class="st">${[[4,'Sites Designed'],[4,'Live Projects'],['20+','Participations'],[7,'Achievements']].map(a=>`<div data-n="${a[0]}">${a[0]}<span>${a[1]}</span></div>`).join('')}</div>`;
 else if(k=='contact')x+=`<div class="ct2"><div class="cc"><small class="k">Personal</small><h3>Reach me</h3><a class="mail" href="mailto:sangamithrass2006.sm@gmail.com">sangamithrass2006.sm@gmail.com</a><div class="lk"><button class="btn" data-copy="sangamithrass2006.sm@gmail.com">Copy email</button><a class="btn" href="https://www.linkedin.com/in/sangamithra-s-s-2013ab298" target="_blank" rel="noopener">LinkedIn</a><a class="btn" href="https://github.com/Sangamithra-s-s" target="_blank" rel="noopener">GitHub</a></div></div><div class="cc cd2"><small class="k">Freelance</small><h3>Designed to Exist</h3><p>Creative digital portfolios and GitHub profile design.</p><div class="lk"><a class="btn" href="${DTE_IG}" target="_blank" rel="noopener">Instagram</a><a class="btn" href="${DTE_GH}" target="_blank" rel="noopener">GitHub</a><a class="btn" href="${DTE_SITE}" target="_blank" rel="noopener">Website ↗</a></div></div></div>`;
 else if(k=='dte')x+=`<div class="tg dts"><span>Digital portfolios</span><span>GitHub profile design</span><span>4 sites shipped</span></div><div class="lk dtl">${dte('btn dtb','See the work →')}<a class="btn" href="${DTE_SITE}" target="_blank" rel="noopener">Visit website ↗</a></div>`;
 else if(k=='cert')x+=`<div class="cg dense">${it.map((o,j)=>{const y=(o.m.match(/\d{4}/)||[''])[0],is=o.m.split('·').pop().trim();return `<div class="cc3" data-j="${j}"><em>${y}</em><h3>${o.t}</h3><small>${is}</small></div>`}).join('')}</div>`;
 else if(k=='ach')x+=`<div class="ag dense">${it.map((o,j)=>`<div class="ar" data-j="${j}" data-p="${o.p}"><b>${o.p}</b><div><h3>${o.t}</h3><small>${o.m}</small></div></div>`).join('')}</div>`;
 else if(k=='part')x+=`<div class="pv" id="pv"><div class="ph"><span>${TC?'Tap':'Hover'} a dot to reveal</span></div></div>`;
 else if(sw)x+=`<div class="md">${it.map((o,j)=>`<div class="sl" data-j="${j}">${k=='proj'?bwF(o):phF(o,j)}</div>`).join('')}</div><div class="cp">${it.map((o,j)=>`<div data-j="${j}"><small>${o.m}</small><h3>${o.t}</h3><p>${o.d}</p>${k=='proj'?`<div class="tg">${(o.tags||[]).map(t=>`<span>${t}</span>`).join('')}${o.url?`<a href="${o.url}" target="_blank" rel="noopener">Open live site</a>`:''}</div>`:''}</div>`).join('')}</div>`;
 else if(k=='skills')x+=cons(it);
 else if(it)x+=`<ul class="ix${it.length>8?' dense':''}">${it.map((o,j)=>`<li data-j="${j}" title="${o.m}"><b>${pad(j+1)}</b><span>${o.t}<em>${o.m}</em></span></li>`).join('')}</ul>`;
 cd.innerHTML=x}
function cons(it){const G=[];it.forEach(o=>{let g=G.find(x=>x.m==o.m);if(!g)G.push(g={m:o.m,s:[]});g.s.push(o.t)});
 return `<div class="sg dense">${G.map((g,i)=>`<div class="sc" data-j="${i}"><div class="sh"><em>${pad(i+1)}</em><h3>${g.m.replace(' and ',' &amp; ')}</h3></div><ul>${g.s.map(t=>`<li>${t}</li>`).join('')}</ul></div>`).join('')}</div>`}
function fit(){cd.querySelectorAll('.vp iframe').forEach(fr=>{const v=fr.parentNode,sc=v.clientWidth/1280;fr.style.width='1280px';fr.style.height=v.clientHeight/sc+'px';fr.style.transform=`scale(${sc})`})}
function setup(){HL=[];const nn=Math.max(-1,...[...cd.querySelectorAll('[data-j]')].map(e=>+e.dataset.j))+1;lis=N(nn,j=>[...cd.querySelectorAll(`[data-j="${j-1}"]`)]);dn=!!cd.querySelector('.dense');act=-1;md=cd.querySelector('.md,.cn,.sg');fit();
 cd.querySelectorAll('.fs button').forEach(b=>b.onclick=()=>{const q=.22+.56*(+b.dataset.j+.5)/lis.length;tgt=Math.min(H(),Math.max(0,(shown+q*.84-.42)/9*H()))})}
addEventListener('resize',fit);
// panel, keyboard, copy
const pn=$('pn'),ts=$('ts');let tt,lastF=null;
function openPn(k,title){lastF=document.activeElement;$('pt').textContent=title;$('pg').innerHTML=DATA[k].map((o,j)=>`<article class="it">${o.img?`<img src="${o.img}" alt="${o.t}" loading="lazy">`:''}<small>${pad(j+1)} · ${o.m}</small><h4>${o.t}</h4><p>${o.d||''}</p>${o.url?`<p><a class="mail" style="font-size:15px;margin:8px 0 0" href="${o.url}" target="_blank" rel="noopener">Open live site</a></p>`:''}</article>`).join('');pn.classList.add('on');document.body.classList.add('lock');pn.scrollTop=0;$('px').focus();[...$('pg').children].forEach((e,i)=>e.style.animationDelay=Math.min(i,14)*55+'ms')}
function closePn(){pn.classList.remove('on');document.body.classList.remove('lock');lastF&&lastF.focus&&lastF.focus()}
$('px').onclick=closePn;
function openMenu(){lastF=document.activeElement;$('pt').textContent='Realms';$('pg').innerHTML=W.map((w,i)=>`<button class="it" data-go="${i}"><small>${pad(i)} / 09</small><h4>${w[0]}</h4><p>${w[1]}</p></button>`).join('');pn.classList.add('on');document.body.classList.add('lock');pn.scrollTop=0;$('px').focus();[...$('pg').children].forEach((e,i)=>e.style.animationDelay=Math.min(i,14)*55+'ms')}
$('mn').onclick=openMenu;$('lg').onclick=()=>tgt=0;
pn.addEventListener('click',e=>{const g=e.target.closest('[data-go]');if(g){closePn();tgt=+g.dataset.go/9*H()}});
const GL='▮▯░▒01#/<>*';
function decode(el){if(RM)return;const t=el.dataset.t||(el.dataset.t=el.textContent);let f=0;clearInterval(el._i);el._i=setInterval(()=>{f++;el.textContent=[...t].map((c,k)=>c===' '||k<f/1.5?c:GL[Math.random()*GL.length|0]).join('');if(f>t.length*1.5+2){clearInterval(el._i);el.textContent=t}},35)}
let actx,mg,snOn=false,mus=null;const sb=$('snd');
/* Luxury ambient score: warm pad + soft felt-piano/harp plucks, D major (Dmaj9 - Bm9 - Gmaj9 - A6/9), long hall reverb. Fully synthesised, no files. */
const mtof=m=>440*Math.pow(2,(m-69)/12),CHD=[[38,[50,57,61,64,66]],[47,[54,57,61,62,66]],[43,[50,54,57,59,62]],[45,[52,54,59,61,64]]],PENT=[62,64,66,69,71,74,76,78,81,83],BAR=8;
function mkIR(c,sec){const n=c.sampleRate*sec|0,b=c.createBuffer(2,n,c.sampleRate);for(let ch=0;ch<2;ch++){const d=b.getChannelData(ch);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,2.8)}return b}
function pluck(m,v,t){if(!actx||!mus)return;const o=actx.createOscillator(),o2=actx.createOscillator(),g=actx.createGain(),g2=actx.createGain(),lp=actx.createBiquadFilter();
 o.type='sine';o2.type='triangle';o.frequency.value=mtof(m);o2.frequency.value=mtof(m)*2;g2.gain.value=.14;lp.type='lowpass';lp.frequency.value=2000;
 g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.014);g.gain.exponentialRampToValueAtTime(.0001,t+3.6);
 o.connect(g);o2.connect(g2);g2.connect(g);g.connect(lp);lp.connect(mus.bus);o.start(t);o2.start(t);o.stop(t+3.7);o2.stop(t+3.7)}
function padChord(ci,t){const c=CHD[ci];c[1].forEach(m=>[-5,5].forEach(dt=>{const o=actx.createOscillator(),g=actx.createGain();o.type='sine';o.frequency.value=mtof(m);o.detune.value=dt;
  g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.011,t+3);g.gain.setValueAtTime(.011,t+BAR-.4);g.gain.linearRampToValueAtTime(0,t+BAR+3);o.connect(g);g.connect(mus.pad);o.start(t);o.stop(t+BAR+3.1)}));
 const b=actx.createOscillator(),bg=actx.createGain();b.type='sine';b.frequency.value=mtof(c[0]);bg.gain.setValueAtTime(0,t);bg.gain.linearRampToValueAtTime(.05,t+2.5);bg.gain.setValueAtTime(.05,t+BAR-.4);bg.gain.linearRampToValueAtTime(0,t+BAR+2.5);b.connect(bg);bg.connect(mus.pad);b.start(t);b.stop(t+BAR+2.6)}
function musTick(){if(!mus||!mus.on)return;const now=actx.currentTime;
 while(mus.nc<now+1.5){padChord(mus.ci%4,mus.nc);mus.ci++;mus.nc+=BAR}
 while(mus.nn<now+1.5){const ci=Math.floor((mus.nn-mus.t0)/BAR)%4,tones=[];CHD[ci][1].forEach(m=>{for(let k=-12;k<=24;k+=12){const x=m+k;if(x>=64&&x<=81)tones.push(x)}});tones.sort((x,y)=>x-y);
  let i=Math.floor(Math.random()*tones.length);if(tones[i]===mus.last)i=(i+1)%tones.length;mus.last=tones[i];
  const arp=Math.random()<.3;pluck(tones[i],.05+Math.random()*.03,mus.nn);
  if(arp){pluck(tones[Math.min(tones.length-1,i+1)],.04,mus.nn+.34);pluck(tones[Math.min(tones.length-1,i+2)],.036,mus.nn+.68)}
  mus.nn+=(arp?2.6:1.2)+Math.random()*2.2}}
function musStart(){if(!mus){const bus=actx.createGain(),pad=actx.createBiquadFilter(),dry=actx.createGain(),wet=actx.createGain(),cv=actx.createConvolver(),hp=actx.createBiquadFilter();
  pad.type='lowpass';pad.frequency.value=1100;pad.connect(bus);cv.buffer=mkIR(actx,4.5);dry.gain.value=.7;wet.gain.value=.6;hp.type='highpass';hp.frequency.value=55;
  bus.connect(dry);bus.connect(cv);cv.connect(wet);dry.connect(hp);wet.connect(hp);hp.connect(mg);mus={bus,pad,on:0,ci:0,nc:0,nn:0,t0:0,last:0,iv:0}}
 if(mus.on)return;mus.on=1;mus.t0=mus.nc=actx.currentTime+.15;mus.nn=mus.t0+1.6;mus.ci=0;musTick();mus.iv=setInterval(musTick,300)}
function musStop(){if(!mus||!mus.on)return;mus.on=0;clearInterval(mus.iv)}
sb.onclick=()=>{if(!actx){const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;actx=new AC();mg=actx.createGain();mg.gain.value=0;mg.connect(actx.destination)}
 snOn=!snOn;actx.resume&&actx.resume();if(snOn){musStart();mg.gain.setTargetAtTime(.55,actx.currentTime,1.2)}else{mg.gain.setTargetAtTime(0,actx.currentTime,.4);setTimeout(()=>{if(!snOn)musStop()},1800)}
 sb.textContent='Sound '+(snOn?'on':'off');sb.setAttribute('aria-pressed',snOn)};
function toast(m){ts.textContent=m;ts.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>ts.classList.remove('on'),1800)}
cd.addEventListener('click',e=>{const g=e.target.closest('[data-go]');if(g)tgt=+g.dataset.go/9*H();const a=e.target.closest('[data-all]'),c=e.target.closest('[data-copy]');
 if(a)openPn(a.dataset.all,a.dataset.title);
 if(c){const v=c.dataset.copy;(navigator.clipboard?navigator.clipboard.writeText(v):Promise.reject()).then(()=>toast('Email copied'),()=>toast(v))}});
addEventListener('keydown',e=>{if(e.key==='Escape'&&pn.classList.contains('on')){closePn();return}
 if(!go||pn.classList.contains('on')||e.altKey||e.ctrlKey||e.metaKey||/^(INPUT|TEXTAREA)$/.test(e.target.tagName))return;
 const nx=['ArrowDown','PageDown','ArrowRight'],pv=['ArrowUp','PageUp','ArrowLeft'];let i=cur;
 if(nx.includes(e.key))i++;else if(pv.includes(e.key))i--;else if(e.key==='Home')i=0;else if(e.key==='End')i=9;else return;
 e.preventDefault();tgt=cl(i,0,9)/9*H()});
const rc=new THREE.Raycaster(),pm=new THREE.Vector2(9,9),cv=$('gl'),hits=[];let pu=false,selP=-1;
function showP(j){const o=DATA.part[j],pv=$('pv');if(!pv)return;selP=j;pv.innerHTML=phF(o,j)+`<div class="pc"><small>${pad(j+1)} · ${o.m}</small><h3>${o.t}</h3><p>${o.d}</p></div>`;pv.classList.remove('rv');void pv.offsetWidth;pv.classList.add('rv')}
['pointermove','pointerdown'].forEach(ev=>addEventListener(ev,e=>{pm.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1);pu=!!(e.target.closest&&e.target.closest('#cd,#ctl,#pn,#dots,header,#ld'))}));
// scene
const R=new THREE.WebGLRenderer({canvas:$('gl'),antialias:true});R.setPixelRatio(Math.min(devicePixelRatio,innerWidth<800?1.5:2));
const scn=new THREE.Scene(),cam=new THREE.PerspectiveCamera(55,1,.1,300);scn.fog=new THREE.FogExp2(0x08090d,.007);
const amb=new THREE.AmbientLight(0xffffff,.28),pl=new THREE.PointLight(0xffffff,1.4,70);scn.add(amb,pl);
const cc=document.createElement('canvas');cc.width=cc.height=64;const cx=cc.getContext('2d'),gr=cx.createRadialGradient(32,32,0,32,32,32);gr.addColorStop(0,'#fff');gr.addColorStop(.3,'rgba(255,255,255,.4)');gr.addColorStop(1,'rgba(255,255,255,0)');cx.fillStyle=gr;cx.fillRect(0,0,64,64);const tex=new THREE.CanvasTexture(cc);
const pts=N(10,i=>new THREE.Vector3(Math.sin(i*1.7)*6,Math.cos(i*1.3)*3.5,-(i-1)*55));
const curve=new THREE.CatmullRomCurve3(pts,false,'catmullrom',.5);
const V=THREE.Vector3,wp=[],worlds=[],U=[];
const NR=innerWidth<800,TC=matchMedia('(hover:none)').matches;let lastTap=0,lastCy=0,tch=0;addEventListener('touchstart',()=>{tch=1;tgt=cs=scrollY},{passive:true});['touchend','touchcancel'].forEach(v=>addEventListener(v,()=>{tch=0;tgt=cs=scrollY},{passive:true}));
const SD=[0,6.5,-6.5,-6.5,6.5,-6.5,-6.5,6.5,6.5,0],SY=[.6,.4,.4,0,.4,.4,0,.4,.4,0];if(NR)for(let k=0;k<10;k++){SD[k]=0;SY[k]+=1.4}
const GS=[()=>new THREE.SphereGeometry(1.9,22,16),()=>new THREE.TetrahedronGeometry(2.5),()=>new THREE.BoxGeometry(2.6,2.6,2.6),()=>new THREE.OctahedronGeometry(2.5),()=>new THREE.IcosahedronGeometry(2.3),()=>new THREE.DodecahedronGeometry(2.3),()=>new THREE.TetrahedronGeometry(2.3),()=>new THREE.TorusGeometry(1.8,.7,20,48),()=>new THREE.SphereGeometry(1.6,16,12),()=>new THREE.IcosahedronGeometry(1.3)];
const MA=[],rimM=A=>new THREE.ShaderMaterial({uniforms:{c:{value:A}},vertexShader:'varying vec3 n,v;void main(){n=normalize(normalMatrix*normal);vec4 p=modelViewMatrix*vec4(position,1.);v=-normalize(p.xyz);gl_Position=projectionMatrix*p;}',fragmentShader:'uniform vec3 c;varying vec3 n,v;void main(){float f=pow(1.-abs(dot(normalize(n),normalize(v))),2.4);gl_FragColor=vec4(c*(.3+f*1.7),f*.9);}',transparent:true,blending:THREE.AdditiveBlending,depthWrite:false});
function build(i){const A=new THREE.Color('#'+P[i][5]),S=new THREE.Color('#'+P[i][3]),g=new THREE.Group(),geo=GS[i](),bm=()=>new THREE.MeshBasicMaterial({color:A});
 const ph=()=>{const m=new THREE.MeshPhongMaterial({color:S,specular:A.clone().multiplyScalar(.5),shininess:80,flatShading:true,transparent:true,opacity:.92});MA.push([m,A,i]);return m},wf=o=>new THREE.MeshBasicMaterial({color:A,wireframe:true,transparent:true,opacity:o});
 const solid=ge=>{const m=new THREE.Mesh(ge,ph());m.add(new THREE.LineSegments(new THREE.EdgesGeometry(ge),new THREE.LineBasicMaterial({color:A,transparent:true,opacity:.6})));const r=new THREE.Mesh(ge,rimM(A));r.scale.setScalar(1.04);r.renderOrder=2;m.add(r);return m};
 let core;
 if(i==6){core=new THREE.Group();const a=solid(geo),b=solid(geo);b.rotation.x=Math.PI;core.add(a,b)}
 else if(i==8){core=new THREE.Group();const sg=new THREE.SphereGeometry(.14,10,8),mt=new THREE.MeshBasicMaterial({color:A,transparent:true,opacity:.4}),hg=new THREE.SphereGeometry(.32*(NR?2.2:1),6,4),hm=new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false});for(let k=1;k<200;k++){const r=.27*Math.sqrt(k),a=k*2.39996,j=k%8==0?k/8-1:-1,isP=j>=0&&j<DATA.part.length,m=new THREE.Mesh(sg,isP?new THREE.MeshBasicMaterial({color:A}):mt);m.position.set(r*Math.cos(a),r*Math.sin(a),0);const b=(.5+r*.15)*(isP?1.7:1);m.scale.setScalar(b);core.add(m);if(isP){const h=new THREE.Mesh(hg,hm);h.position.copy(m.position);h.userData={j,m,b,A};core.add(h);hits.push(h)}}}
 else if(i==9){core=new THREE.Group();const tg=new THREE.TorusGeometry(1.2,.025,8,80),mt=bm();[[0,0],...N(6,k=>[Math.cos(k*1.0472)*1.2,Math.sin(k*1.0472)*1.2])].forEach(p=>{const m=new THREE.Mesh(tg,mt);m.position.set(p[0],p[1],0);core.add(m)});core.add(new THREE.Mesh(new THREE.TorusGeometry(2.4,.05,8,100),mt))}
 else core=solid(geo);
 const inner=new THREE.Mesh(geo,wf(.28)),shell=new THREE.Mesh(geo,wf(.1)),ring=new THREE.Mesh(new THREE.TorusGeometry(3.6,.015,8,140),bm()),sat=new THREE.Mesh(new THREE.SphereGeometry(.17,12,10),bm());sat.position.x=3.6;ring.add(sat);ring.rotation.x=1.2;
 const dq=new Float32Array(420);for(let k=0;k<140;k++){const d=new V(rd()-.5,rd()-.5,rd()-.5).normalize().multiplyScalar(3.2+rd()*2.2);dq.set([d.x,d.y,d.z],k*3)}const dg=new THREE.BufferGeometry();dg.setAttribute('position',new THREE.BufferAttribute(dq,3));
 const dust=new THREE.Points(dg,new THREE.PointsMaterial({color:A,size:.08,opacity:.55,map:tex,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));
 const au=new THREE.Sprite(new THREE.SpriteMaterial({map:tex,color:A,transparent:true,opacity:.14,blending:THREE.AdditiveBlending,depthWrite:false}));au.scale.setScalar(18);
 ring.material.transparent=true;ring.material.opacity=.45;g.add(core,inner,shell,dust,au);g.userData={core,inner,shell,ring,dust,au};
 const c=pts[i],side=i%2?-1:1;g.position.set(c.x+SD[i],c.y+SY[i],c.z-9);wp[i]=g.position.clone();scn.add(g);worlds[i]=g}
for(let i=0;i<10;i++)build(i);
const gm=new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.4,blending:THREE.AdditiveBlending,depthWrite:false}),gg=new THREE.TorusGeometry(5.5,.03,6,72);
for(let k=0;k<0;k++){const u=(k+.5)/110,w=u*9;if(Math.abs(w-Math.round(w))<.24)continue;const c=curve.getPoint(u),m=new THREE.Mesh(gg,gm);m.position.copy(c);m.lookAt(c.clone().add(curve.getTangent(u)));scn.add(m)}
// stars
const NS=innerWidth<800?1600:3600,sp=new Float32Array(NS*3);for(let i=0;i<NS;i++){const c=curve.getPoint(rd()),d=new V(rd()-.5,rd()-.5,rd()-.5).normalize().multiplyScalar(5+rd()*45);sp.set([c.x+d.x,c.y+d.y,c.z+d.z],i*3)}
const sg=new THREE.BufferGeometry();sg.setAttribute('position',new THREE.BufferAttribute(sp,3));const sm=new THREE.PointsMaterial({size:.3,map:tex,transparent:true,opacity:.5,blending:THREE.AdditiveBlending,depthWrite:false,color:0xffffff});scn.add(new THREE.Points(sg,sm));
const pl2=new THREE.PointLight(0xffffff,2.4,30);scn.add(pl2);const NB=[];for(let i=0;i<16;i++){const u=i/15,c=curve.getPoint(u),sp=new THREE.Sprite(new THREE.SpriteMaterial({map:tex,color:new THREE.Color('#'+P[Math.round(u*9)][5]),transparent:true,opacity:.07+rd()*.05,blending:THREE.AdditiveBlending,depthWrite:false,fog:false}));sp.position.copy(c).add(new V(rd()-.5,rd()-.5,rd()-.5).normalize().multiplyScalar(18+rd()*16));sp.scale.setScalar(50+rd()*50);sp.userData={b:sp.position.clone(),p:rd()*6};NB.push(sp);scn.add(sp)}
const PXR=R.getPixelRatio(),RT=new (R.capabilities.isWebGL2?THREE.WebGLMultisampleRenderTarget:THREE.WebGLRenderTarget)(4,4),DR=Array.from({length:16},()=>new THREE.Vector4()),DI=Array.from({length:16},()=>({x:0,y:0,r:0,a:1,T:1,vx:0,vy:0})),
 PQ=new THREE.ShaderMaterial({uniforms:{t:{value:RT.texture},D:{value:DR},A:{value:1},T:{value:0}},vertexShader:'varying vec2 u;void main(){u=uv;gl_Position=vec4(position.xy,0.,1.);}',fragmentShader:`uniform sampler2D t;uniform vec4 D[16];uniform float A,T;varying vec2 u;
void main(){vec2 p=u;float rim=0.,hi=0.,cr=0.,gl=0.;
 for(int i=0;i<16;i++){vec4 d=D[i];if(d.w>.001){vec2 q=(p-d.xy)*vec2(A,1.);float r=d.z,l=length(q)/r;l*=1.+.05*sin(atan(q.y,q.x)*4.+T*2.+float(i));
  if(l<1.){float m=mix(1.,.38+.62*l*l,d.w);p=d.xy+(p-d.xy)*m;rim+=smoothstep(.62,.98,l)*d.w;gl+=(1.-l)*d.w;hi+=smoothstep(.3,.0,length(q/r-vec2(-.34,.36)))*d.w;cr+=smoothstep(.55,.95,l)*smoothstep(.2,.8,dot(normalize(q),vec2(.72,-.69)))*d.w;}
  else if(l<1.5){float k=smoothstep(1.5,1.,l)*d.w;p+=normalize(q)/vec2(A,1.)*r*.12*k;rim+=smoothstep(1.,1.08,l)*smoothstep(1.2,1.08,l)*d.w*.6;}}}
 vec3 c=texture2D(t,p).rgb;c*=1.-clamp(rim,0.,1.)*.55;c+=vec3(.9,.8,1.)*(hi*.55+cr*.5+gl*.05);gl_FragColor=vec4(c,1.);}`,depthTest:false,depthWrite:false}),PS=new THREE.Scene(),PC=new THREE.OrthographicCamera(-1,1,1,-1,0,1);PS.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),PQ));
let nd=0,ldt=performance.now(),ldx=-1,ldy=0;
const addDrop=(x,y,r,vx,vy,life)=>{return;const d=DI[nd++%16];d.x=x/innerWidth;d.y=1-y/innerHeight;d.r=r/innerHeight;d.vx=vx/innerWidth;d.vy=-vy/innerHeight;d.T=life;d.a=0};
const stepDrops=now=>{const dt=Math.min((now-ldt)/1000,.05);ldt=now;let on=0;DI.forEach((d,i)=>{if(d.a>=1){DR[i].w=0;return}d.a+=dt/d.T;d.x+=d.vx*dt;d.y+=(d.vy-.012)*dt;d.vx*=.97;d.vy*=.97;DR[i].set(d.x,d.y,d.r*(.55+.45*Math.min(1,d.a*4)),Math.sin(Math.min(d.a*5,1)*1.5708)*Math.pow(1-d.a,.7));on=1});PQ.uniforms.A.value=innerWidth/innerHeight;PQ.uniforms.T.value=now*.001;return on};
addEventListener('pointermove',e=>{if(!go||e.pointerType==='touch')return;if(ldx<0){ldx=e.clientX;ldy=e.clientY;return}const dx=e.clientX-ldx,dy=e.clientY-ldy;if(Math.hypot(dx,dy)>38){addDrop(e.clientX,e.clientY,18+rd()*30,dx*.25,dy*.25,2.2+rd()*1.8);ldx=e.clientX;ldy=e.clientY}});
addEventListener('pointerdown',e=>{if(!go)return;addDrop(e.clientX,e.clientY,64+rd()*20,0,0,2.8);for(let k=0;k<4;k++){const a=rd()*6.283,v=60+rd()*70;addDrop(e.clientX+Math.cos(a)*50,e.clientY+Math.sin(a)*50,16+rd()*14,Math.cos(a)*v,Math.sin(a)*v,1.6+rd())}});
const size=()=>{R.setSize(innerWidth,innerHeight);RT.setSize(innerWidth*PXR,innerHeight*PXR);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()};size();addEventListener('resize',size);
let mx=0,my=0,s=0,intro=0,go=false,cur=-1,swapT,tgt=0,cs=0;
let RSP=null;try{const v=sessionStorage.getItem('pf_pos'),nt=(performance.getEntriesByType('navigation')[0]||{}).type;if(v!==null&&(location.hash=='#resume'||nt=='back_forward'))RSP=Math.min(1,Math.max(0,+v||0));if(location.hash=='#resume')history.replaceState(null,'',location.pathname+location.search)}catch(e){}
window.__rsp=RSP;window.__rsf=()=>{if(RSP!=null){tgt=cs=RSP*H();scrollTo(0,cs)}};window.__rsf();
addEventListener('pagehide',()=>{try{sessionStorage.setItem('pf_pos',(scrollY/Math.max(1,H())).toFixed(4))}catch(e){}});
addEventListener('wheel',e=>{if(!go||$('pn').classList.contains('on'))return;e.preventDefault();tgt=Math.min(H(),Math.max(0,tgt+(e.deltaMode==1?e.deltaY*16:e.deltaY)*.35))},{passive:false});
addEventListener('scroll',()=>{if(Math.abs(scrollY-cs)>3){cs=tgt=scrollY}});
addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,ss=x=>x*x*(3-2*x),cl=(x,a,b)=>Math.min(b,Math.max(a,x));
const root=document.documentElement.style,col=new THREE.Color();
const FM=['zero dimensions · the first point','4 faces · fire','6 faces · earth','8 faces · air','20 faces · water','12 faces · aether','two tetrahedra · one spark','a form that feeds itself','the golden angle · 137.5°','seven circles · everything repeats'],F=[261.6,293.7,329.6,392,440,523.3,587.3,659.3,784,880];
const pr=$('pr');let heroT=0;const GG='ABCDEFGHJKLMNOPRSTUVWXYZ';
function he(w,k,now){const t=cl((now-heroT-500-k*65)/520,0,1);if(w.parentNode.className=='wd'){const c=w.dataset.c||(w.dataset.c=w.textContent),v=t>0&&t<1?GG[Math.random()*GG.length|0]:c;if(w.textContent!==v)w.textContent=v}return t}
function cnt(){cd.querySelectorAll('.st div').forEach(d=>{const s=d.dataset.n,v=parseInt(s),x=s.replace(/\d+/,''),tx=d.firstChild,t0=performance.now()+2000,st=now=>{const k=cl((now-t0)/1400,0,1);tx.nodeValue=Math.round(v*(1-Math.pow(1-k,3)))+x;k<1&&requestAnimationFrame(st)};if(RM)return;tx.nodeValue=0+x;requestAnimationFrame(st)})}
let ACC=[198,166,107],pmv=0,HL=[],fxv=0,PL=0,wh=null,vyT=0,qx=innerWidth/2,qy=innerHeight/2,pxl=qx,pyl=qy;
function chime(k,g=.05){if(!actx||!snOn||!mus||!mus.on||g<.05)return;pluck(PENT[k%10],.045,actx.currentTime+.03)}
function onRealm(n){window.fxw&&fxw(n);pr.classList.remove('go');void pr.offsetWidth;pr.classList.add('go');chime(n);navigator.vibrate&&navigator.vibrate(10)}
function hlc(){HL=[...cd.querySelectorAll('h2 .w')].map(el=>{el.style.left=el.style.top='0px';const r=el.getBoundingClientRect();return{el,x:r.left+r.width/2,y:r.top+r.height/2,ox:0,oy:0}})}addEventListener('resize',()=>HL.length&&hlc());
function fx(){PL*=.93;pxl+=(qx-pxl)*.2;pyl+=(qy-pyl)*.2;
}
addEventListener('pointermove',e=>{qx=e.clientX;qy=e.clientY;pmv=1});
addEventListener('pointerdown',e=>{lastTap=performance.now();if(!go||(e.target.closest&&e.target.closest('a,button,#pn,#ld')))return});
function frame(now){requestAnimationFrame(frame);fx();const t=now*.001;if(TC&&tch){tgt=cs=scrollY}else if(Math.abs(tgt-cs)>.3){cs+=(tgt-cs)*(RM?.5:TC?.09:.045);scrollTo(0,cs)}const p=cl(cs/Math.max(1,H()),0,1);
 const v=Math.abs(p-s);fxv=v;s+=(p-s)*.035;if(go)intro+=(1-intro)*.02;
 const f=s*9,n=Math.round(f),d=f-n,i0=Math.min(Math.floor(f),8),e=ss(f-i0),A=PR[i0],B=PR[i0+1],c=k=>mix(A[k],B[k],e),bg=c(0),tx=c(3),ac=c(4);
 col.setRGB(bg[0]/255,bg[1]/255,bg[2]/255);R.setClearColor(col);scn.fog.color.copy(col);
 ACC=ac;root.setProperty('--ac',`rgb(${ac})`);root.setProperty('--acr',ac.join());root.setProperty('--txr',tx.join());root.setProperty('--tx',`rgb(${tx})`);root.setProperty('--bgr',bg.join());root.setProperty('--p',s);
 pl.color.setRGB(ac[0]/255,ac[1]/255,ac[2]/255);gm.color.copy(pl.color);sm.color.setRGB(.4+ac[0]/900,.4+ac[1]/900,.4+ac[2]/900);sm.size=.3+Math.min(v*35,1.2);
 const fm=n+Math.sign(d)*Math.pow(Math.abs(d)*2,1.8)/2,u=cl(fm/9,0,1),pos=curve.getPoint(u),ah=curve.getPoint(Math.min(1,u+.02)),nr=ss(cl(1-Math.abs(d)*1.6,0,1));
 cam.position.copy(pos).lerp(wp[n],.2*nr);cam.position.x+=Math.sin(t*.35)*.35;cam.position.y+=Math.cos(t*.28)*.25;cam.position.z+=(1-intro)*70;
 cam.lookAt(ah.clone().lerp(wp[n],nr*.6));cam.rotation.z+=Math.sin(f*2.2)*.07+Math.sin(t*.2)*.01;
 cam.fov=55+Math.min(v*600,34)+(1-intro)*20;cam.updateProjectionMatrix();pl.position.copy(cam.position).add(new V(0,2,2));
 worlds.forEach((g,i)=>{const di=f-i,a=ss(cl(1-Math.abs(di)*2.2,0,1)),q=g.userData,sl=i>=8?.3:1;
  i==8?q.core.rotation.set(0,0,0):q.core.rotation.set(i>=8?.55:f*.5+t*.05,di*5*sl+t*.12,0);q.core.scale.setScalar((.55+.45*a)*(i==8&&NR?.5:1)*(1+.03*Math.sin(t*1.3+i)));
  i==8?q.inner.rotation.set(0,0,0):q.inner.rotation.set(di*2,-di*7-t*.2,0);q.inner.scale.setScalar(.12+.2*a);
  q.shell.rotation.y=i==8?0:di*2.5;q.shell.scale.setScalar(1.1+.7*a);q.shell.material.opacity=.03+.1*a;
  q.ring.rotation.z=di*6+t*.3;q.ring.scale.setScalar(.6+.5*a);q.dust.rotation.y=t*.05+di*2;q.au.material.opacity=.1+.1*a+.03*Math.sin(t*1.6+i);g.scale.setScalar(.8+.2*a+(i===n?PL*.25:0))});
 if(n!==cur){cur=n;if(go)onRealm(n);db.forEach((b,k)=>{b.classList.toggle('on',k===n);b.setAttribute('aria-current',k===n?'true':'false')});{const a=$('wn'),b=$('no');a.textContent=a.dataset.t=W[n][0];b.textContent=b.dataset.t=pad(n)+' / 09';decode(a);decode(b)}}
 const on=Math.abs(d)<.42&&go;
 if(TC&&n==8&&on&&shown===8&&cd.classList.contains('on')&&now-lastTap>6000&&now-lastCy>2200){lastCy=now;showP((selP+1)%DATA.part.length)}
 if(n==8&&on&&shown===8&&cd.classList.contains('on')&&!pu&&(!TC||now-lastTap<6000)){rc.setFromCamera(pm,cam);const h=rc.intersectObjects(hits,false)[0];cv.style.cursor=h?'pointer':'';if(h&&h.object.userData.j!==selP)showP(h.object.userData.j)}else if(cv.style.cursor)cv.style.cursor='';
 hits.forEach(h=>{const u=h.userData,sel=u.j===selP,m=u.m;m.scale.setScalar(m.scale.x+(u.b*(sel?2.4:1)-m.scale.x)*.15);m.material.color.set(sel?0xffffff:u.A)});
 if(on&&shown!==n&&pend!==n){pend=n;cd.classList.remove('on');clearTimeout(swapT);swapT=setTimeout(()=>{card(n);if(n==0){heroT=RM?-1e9:performance.now();cnt()}wds=[...cd.querySelectorAll('.w')];shown=n;setup();selP=-1;cd.querySelectorAll('.k,.cp small').forEach(decode);requestAnimationFrame(()=>cd.classList.add('on'))},shown===-1?400:250)}
 if(!on){cd.classList.remove('on');clearTimeout(swapT);pend=-2;if(Math.abs(d)>.42)shown=-1}
 const qq=(d+.42)/.84,m=wds.length;wds.forEach((w,k)=>w.style.setProperty('--o',Math.min(n==0?he(w,k,now):cl((qq-.03-k/m*(n==9?.2:.36))*7,0,1),cl((1-qq)*7,0,1))));
 if(lis.length){const a=Math.floor(cl((qq-.22)/.56,0,.999)*lis.length);if(a!==act){act=a;lis.forEach((g,j)=>g.forEach(l=>{l.classList.toggle('on',dn?j<=a:j===a);l.classList.toggle('dn',!dn&&j<a)}));const fr=cd.querySelector(`.sl[data-j="${a}"] iframe`);if(fr&&!fr.src&&fr.dataset.src)fr.src=fr.dataset.src}}
 if(n==0&&shown===0&&!RM&&cd.classList.contains('hero')&&cd.classList.contains('on')&&now-heroT>2400){if(!cd.classList.contains('nm')){cd.classList.add('nm');hlc()}}

 
 MA.forEach(([m,A,k])=>m.emissive.copy(A).multiplyScalar(.05+.05*Math.sin(t*1.4+k)));NB.forEach(q=>{const u=q.userData;q.position.set(u.b.x+Math.sin(t*.05+u.p)*3,u.b.y+Math.cos(t*.04+u.p)*3,u.b.z)});pl2.color.copy(pl.color);pl2.position.set(wp[n].x+Math.sin(t*.7)*6,wp[n].y+3+Math.cos(t*.5)*2,wp[n].z+Math.cos(t*.7)*6);
 R.render(scn,cam)}
requestAnimationFrame(frame);
(()=>{const ld=$('ld'),cv=$('lgx');
 let done=0,dead=0,t0=0,shift=0,tgt=0,lastN=0,loaded=document.readyState==='complete';addEventListener('load',()=>loaded=true);
 const sm=(a,b,v)=>{v=cl((v-a)/(b-a),0,1);return v*v*v*(v*(v*6-15)+10)},mix=(a,b,k)=>a+(b-a)*k,GATE=8.5,FIN=10.4;
 const boom=()=>{};
 let R2=null,sc2,cam2,U2,mesh;
 const GTEX=new THREE.DataTexture(new Uint8Array([255,255,255,255]),1,1,THREE.RGBAFormat);GTEX.needsUpdate=true;let maskOK=0,glyP=[.5,.5,.5,.5];
 const NP=48,SPATH=[];for(let i=0;i<NP;i++)SPATH.push(new THREE.Vector3());
 const setPath=a=>{for(let i=0;i<NP;i++)SPATH[i].set(a[i][0],a[i][1],a[i][2])};
 /* fallback S (used until / unless the real glyph can be traced) */
 (()=>{const a=[],r=.25,D=Math.PI/180;for(let i=0;i<NP;i++){const t=i/(NP-1),T=245+295;let d=t*T,x,y;if(d<245){const th=(25+d)*D;x=r*Math.cos(th);y=.25+r*Math.sin(th)}else{const th=(90-(d-245))*D;x=r*Math.cos(th);y=-.25+r*Math.sin(th)}a.push([x*1.15+.12*y,y,.075])}setPath(a)})();
 /* trace the real Fraunces italic "S" (same face as the hero title) into a centre-line + stroke width */
 const traceS=()=>{try{
  const FW=300,FH=380,cv0=document.createElement('canvas');cv0.width=FW;cv0.height=FH;
  const g=cv0.getContext('2d',{willReadFrequently:true});g.fillStyle='#000';g.fillRect(0,0,FW,FH);g.fillStyle='#fff';
  g.font='italic 300 300px Fraunces,Georgia,serif';g.textAlign='center';g.textBaseline='alphabetic';g.fillText('S',FW/2,FH*.78);
  const id=g.getImageData(0,0,FW,FH).data,src=new Uint8Array(FW*FH);
  let x0=1e9,x1=-1,y0=1e9,y1=-1;
  for(let y=1;y<FH-1;y++)for(let x=1;x<FW-1;x++){if(id[(y*FW+x)*4]>127){src[y*FW+x]=1;if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y}}
  if(y1-y0<80)throw 0;
  const sk=src.slice();
  /* Zhang-Suen thinning */
  let ch=1;
  while(ch){ch=0;for(let pass=0;pass<2;pass++){const del=[];
   for(let y=1;y<FH-1;y++)for(let x=1;x<FW-1;x++){const i=y*FW+x;if(!sk[i])continue;
    const p2=sk[i-FW],p3=sk[i-FW+1],p4=sk[i+1],p5=sk[i+FW+1],p6=sk[i+FW],p7=sk[i+FW-1],p8=sk[i-1],p9=sk[i-FW-1];
    const B=p2+p3+p4+p5+p6+p7+p8+p9;if(B<2||B>6)continue;
    const A=(p2===0&&p3===1?1:0)+(p3===0&&p4===1?1:0)+(p4===0&&p5===1?1:0)+(p5===0&&p6===1?1:0)+(p6===0&&p7===1?1:0)+(p7===0&&p8===1?1:0)+(p8===0&&p9===1?1:0)+(p9===0&&p2===1?1:0);
    if(A!==1)continue;
    if(pass===0){if(p2*p4*p6!==0||p4*p6*p8!==0)continue}else{if(p2*p4*p8!==0||p2*p6*p8!==0)continue}
    del.push(i)}
   if(del.length){ch=1;for(const i of del)sk[i]=0}}}
  /* longest path through the skeleton = the S spine (ignores tiny spurs) */
  let first=-1;for(let i=0;i<sk.length;i++)if(sk[i]){first=i;break}
  if(first<0)throw 0;
  const bfs=s0=>{const dist=new Int32Array(FW*FH).fill(-1),par=new Int32Array(FW*FH).fill(-1),q=[s0];dist[s0]=0;let far=s0;
   for(let h=0;h<q.length;h++){const c=q[h];if(dist[c]>dist[far])far=c;const cx=c%FW,cy=(c/FW)|0;
    for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){if(!dx&&!dy)continue;const nx=cx+dx,ny=cy+dy;if(nx<0||ny<0||nx>=FW||ny>=FH)continue;const n=ny*FW+nx;if(sk[n]&&dist[n]<0){dist[n]=dist[c]+1;par[n]=c;q.push(n)}}}
   return{far,par}};
  const endA=bfs(first).far,pr=bfs(endA);let pts=[];
  for(let c=pr.far;c>=0;c=pr.par[c])pts.push([c%FW,(c/FW)|0]);
  if(pts.length<(y1-y0)*1.4)throw 0;
  if(pts[0][1]>pts[pts.length-1][1])pts.reverse();
  const smoothPts=(a,k,n)=>{for(let it=0;it<n;it++){const b=[];for(let i=0;i<a.length;i++){let sx=0,sy=0,c=0;for(let j=-k;j<=k;j++){const m=Math.min(a.length-1,Math.max(0,i+j));sx+=a[m][0];sy+=a[m][1];c++}b.push([sx/c,sy/c])}a=b}return a};
  pts=smoothPts(pts,6,4);
  const dBg=(x,y)=>{let best=1e9;const R=48,xi=Math.round(x),yi=Math.round(y);for(let dy=-R;dy<=R;dy++)for(let dx=-R;dx<=R;dx++){const d2=dx*dx+dy*dy;if(d2>=best)continue;const nx=xi+dx,ny=yi+dy;if(nx<0||ny<0||nx>=FW||ny>=FH||!src[ny*FW+nx])best=d2}return Math.sqrt(best)};
  /* skeleton stops short of the terminals: extend both ends along their tangent */
  const ext=(a,end)=>{const n=a.length,e=end?a[n-1]:a[0],r=end?a[n-1-8]:a[8];let tx=e[0]-r[0],ty=e[1]-r[1];const l=Math.hypot(tx,ty)||1;tx/=l;ty/=l;const L=dBg(e[0],e[1])*1.5+4;const np=[e[0]+tx*L,e[1]+ty*L];end?a.push(np):a.unshift(np)};
  ext(pts,0);ext(pts,1);
  const cum=[0];for(let i=1;i<pts.length;i++)cum.push(cum[i-1]+Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]));
  const tot=cum[cum.length-1],out=[];let j=0;
  for(let i=0;i<NP;i++){const t=i/(NP-1)*tot;while(j<cum.length-2&&cum[j+1]<t)j++;const u=(t-cum[j])/Math.max(1e-6,cum[j+1]-cum[j]);out.push([pts[j][0]+(pts[j+1][0]-pts[j][0])*u,pts[j][1]+(pts[j+1][1]-pts[j][1])*u])}
  const inG=(x,y)=>{const xi=Math.round(x),yi=Math.round(y);return xi>=0&&yi>=0&&xi<FW&&yi<FH&&src[yi*FW+xi]===1};
  let hw=out.map((p,i)=>{const a=out[Math.max(0,i-1)],b=out[Math.min(NP-1,i+1)];let tx=b[0]-a[0],ty=b[1]-a[1];const l=Math.hypot(tx,ty)||1;tx/=l;ty/=l;
   let m=0;for(const sg of[1,-1]){let t=0;while(t<70&&inG(p[0]-ty*sg*t,p[1]+tx*sg*t))t++;if(t>m)m=t}
   return Math.max(m*1.12+2,dBg(p[0],p[1])*1.1)});
  hw=hw.map((_,i)=>{let s=0,c=0;for(let k=-1;k<=1;k++){const m=Math.min(NP-1,Math.max(0,i+k));s+=hw[m];c++}return s/c});
  const cx=(x0+x1)/2,cy=(y0+y1)/2,Hn=y1-y0;
  setPath(out.map((p,i)=>[(p[0]-cx)/Hn,-(p[1]-cy)/Hn,Math.max(.03,hw[i]/Hn)]));
  /* high-res mask of the exact glyph; the ribbon is clipped to it at the end */
  const MS=512,mc=document.createElement('canvas');mc.width=MS;mc.height=MS;const mg=mc.getContext('2d',{willReadFrequently:true});
  mg.fillStyle='#000';mg.fillRect(0,0,MS,MS);mg.fillStyle='#fff';mg.font='italic 300 440px Fraunces,Georgia,serif';mg.textAlign='center';mg.textBaseline='alphabetic';mg.fillText('S',MS/2,MS*.8);
  const md=mg.getImageData(0,0,MS,MS).data;let mx0=1e9,mx1=-1,my0=1e9,my1=-1;
  for(let y=0;y<MS;y++)for(let x=0;x<MS;x++)if(md[(y*MS+x)*4]>127){if(x<mx0)mx0=x;if(x>mx1)mx1=x;if(y<my0)my0=y;if(y>my1)my1=y}
  if(my1-my0<150)throw 0;
  const Hm=my1-my0,mcx=(mx0+mx1)/2,mcy=(my0+my1)/2;
  const tx=new THREE.CanvasTexture(mc);tx.generateMipmaps=false;tx.minFilter=THREE.LinearFilter;tx.magFilter=THREE.LinearFilter;tx.needsUpdate=true;
  U2.uGly.value=tx;U2.uGlyP.value.set(mcx/MS,Hm/MS,1-mcy/MS,Hm/MS);maskOK=1
 }catch(e){/* keep fallback S */}};
 try{Promise.race([document.fonts.load('italic 300 120px Fraunces','S'),new Promise(r=>setTimeout(r,2500))]).then(()=>setTimeout(traceS,0))}catch(e){setTimeout(traceS,0)}

 const start=()=>{if(done)return;done=1;ld.classList.add('bl');boom();setTimeout(()=>{go=true;pr.classList.add('go');document.body.classList.remove('lock');window.__rsf&&window.__rsf()},RM?50:450);setTimeout(()=>ld.classList.add('off'),RM?80:1700);setTimeout(()=>{dead=1;if(R2){mesh.geometry.dispose();mesh.material.dispose();R2.dispose()}},3200)};
 if(RM){setTimeout(start,500);return}
 try{R2=new THREE.WebGLRenderer({canvas:cv,antialias:true,powerPreference:'high-performance'});R2.setClearColor(0x08090D,1)}catch(e){R2=null}
 if(!R2){setTimeout(start,1400);return}
 sc2=new THREE.Scene();cam2=new THREE.PerspectiveCamera(35,1,.1,60);
 U2={uM:{value:0},uW:{value:0},uTw:{value:0},uLit:{value:0},uLock:{value:0},uGly:{value:GTEX},uGlyP:{value:new THREE.Vector4(.5,.5,.5,.5)},uHs:{value:3},uSheet:{value:new THREE.Vector2(12,8)},uS:{value:SPATH},uRip:{value:.5},uT:{value:0},uRot:{value:0},uOn:{value:0},uFull:{value:0},uStripX:{value:-3.1},uStripW:{value:.03},uStripAmt:{value:1},uBeamX:{value:-9},uBeamOn:{value:0}};
 mesh=new THREE.Mesh(new THREE.PlaneBufferGeometry(1,1,360,90),new THREE.ShaderMaterial({uniforms:U2,side:THREE.DoubleSide,vertexShader:`uniform float uM,uW,uRip,uT,uTw,uHs;uniform vec2 uSheet;uniform vec3 uS[48];varying vec3 vP,vN;
const float TAU=6.28318530718,PI=3.14159265359;
vec3 spt(int i){if(i<0)i=0;if(i>47)i=47;return uS[i];}
vec3 pathAt(float s){float f=clamp(s,0.,1.)*47.;float fi=min(floor(f),46.);float t=f-fi;int i=int(fi);
 vec3 p0=spt(i-1),p1=spt(i),p2=spt(i+1),p3=spt(i+2);float t2=t*t,t3=t2*t;
 return .5*((2.*p1)+(-p0+p2)*t+(2.*p0-5.*p1+4.*p2-p3)*t2+(-p0+3.*p1-3.*p2+p3)*t3);}
float eF(float s){return smoothstep(0.,1.,clamp(uM*1.45-.9*abs(s-.5),0.,1.));}
vec2 cen(float s){return mix(vec2((s-.5)*uSheet.x,0.),pathAt(s).xy*uHs,eF(s));}
vec3 P(float s,float v){
 float e=eF(s);
 vec2 c=cen(s);vec2 d=cen(s+.003)-cen(s-.003);vec2 T=d/max(length(d),1e-5);vec2 Nn=vec2(-T.y,T.x);
 float hwS=pathAt(s).z*uHs;
 float hw=mix(mix(uSheet.y*.5,.15*uHs,uW),hwS,e);
 float th=uTw*(s-.5)*TAU*1.5;
 vec3 w=cos(th)*vec3(Nn,0.)+sin(th)*vec3(0.,0.,1.);
 vec3 n=normalize(cross(vec3(T,0.),w));
 vec3 p=vec3(c,0.)+w*(v-.5)*2.*hw;
 float cb=1.-pow(abs(2.*v-1.),2.);
 vec2 fp=vec2((s-.5)*uSheet.x,(v-.5)*uSheet.y);
 float r=sin(fp.x*1.15+fp.y*.35+uT*.35)*.55+sin(fp.x*2.1-fp.y*.6-uT*.28)*.3+sin(fp.x*.55+fp.y*1.3+uT*.2)*.25;
 float rip=uRip*r*(1.-.6*uW);
 p+=n*(rip+e*(hwS*.55*cb+.05*uHs*sin(s*TAU*3.+uT*.7)));
 return p;
}
void main(){float s=uv.x,v=uv.y;vec3 p=P(s,v);float sd=clamp(s,.004,.994),vd=clamp(v,.002,.996);
 vec3 pc=P(sd,vd),ps=P(sd+.003,vd),pv=P(sd,vd+.003);
 vN=normalize(cross(ps-pc,pv-pc));vP=p;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}`,fragmentShader:`precision highp float;uniform sampler2D uGly;uniform vec4 uGlyP;uniform float uHs,uLock,uLit,uT,uRot,uOn,uFull,uStripX,uStripW,uStripAmt,uBeamX,uBeamOn;varying vec3 vP,vN;
const vec3 G=vec3(.93,.78,.50);
vec3 env(vec3 r){float a=atan(r.z,r.x)+uRot,e=r.y;
 float top=smoothstep(.35,.9,e)*(.6+.4*sin(a*2.));
 float s1=pow(max(cos(a-.6),0.),60.)*smoothstep(-.5,.1,e)*smoothstep(1.,.5,e);
 float s2=pow(max(cos(a-2.7),0.),90.)*smoothstep(-.6,.2,e)*smoothstep(1.,.3,e);
 float h=exp(-pow((e+.1)/.22,2.))*.25;
 return G*(top*.5+s1*1.4+s2*1.1+h*.45+.05*(.5+.5*e))+vec3(.012,.012,.016);}
void main(){
 vec3 N=normalize(vN),V=normalize(cameraPosition-vP);if(dot(N,V)<0.)N=-N;
 float nv=clamp(dot(N,V),0.,1.);vec3 R=reflect(-V,N);float F=.35+.65*pow(1.-nv,4.);
 vec3 col=env(R)*F*vec3(.95,.9,.85)+pow(1.-nv,3.)*vec3(.5,.4,.25)*.12;
 vec3 Ld=normalize(vec3(-.5,.7,.9));float df=max(dot(N,Ld),0.);vec3 Hh=normalize(Ld+V);float spc=pow(max(dot(N,Hh),0.),36.);
 float sw=.5+.5*sin(vP.y*2.4-vP.x*1.1-uT*1.3);
 col+=uLit*(G*(.16+.42*df+.22*pow(1.-nv,2.))+vec3(1.,.9,.7)*(spc*.8+pow(sw,8.)*.22*df));
 float st=smoothstep(uStripW,uStripW*.15,abs(vP.x-uStripX))*uOn;
 col*=max(st,uFull);
 col+=G*st*uStripAmt*(.25+.75*pow(1.-nv,2.))*.5;
 float dx=vP.x-uBeamX;float k=smoothstep(-1.7,-.1,dx);
 float nz=.5+.5*sin(vP.x*9.+vP.y*7.)*sin(vP.z*8.+vP.y*5.);
 float k2=smoothstep(0.,1.,k+(nz-.5)*.55*sin(k*3.14159));
 col*=mix(1.,k2,uBeamOn);
 col+=vec3(.0194,.0219,.0319)*(1.-mix(1.,k2,uBeamOn));
 col+=G*(exp(-dx*dx/.004)*1.2*(.5+F)+exp(-dx*dx/.35)*.18*(.3+F))*uBeamOn;
 vec2 gu=vec2(uGlyP.x+(vP.x/uHs)*uGlyP.y,uGlyP.z+(vP.y/uHs)*uGlyP.w);
 float gm=smoothstep(.38,.62,texture2D(uGly,gu).r);
 col=mix(vec3(.0194,.0219,.0319),col,mix(1.,gm,uLock));
 gl_FragColor=vec4(col*1.6,1.);}`}));mesh.frustumCulled=false;sc2.add(mesh);
 const rs=()=>{R2.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<800?1.5:1.75));R2.setSize(innerWidth,innerHeight,false);cam2.aspect=innerWidth/innerHeight;cam2.updateProjectionMatrix()};addEventListener('resize',rs);rs();
 const skip=()=>{if(!done&&(performance.now()-t0)/1000+tgt<GATE)tgt=GATE-(performance.now()-t0)/1000};
 if(window.__rsp!=null)tgt=GATE;
 addEventListener('pointerdown',skip);addEventListener('keydown',e=>{if(e.key==='Escape'||e.key===' '||e.key==='Enter')skip()});
 const loop=now=>{if(dead)return;requestAnimationFrame(loop);
  if(!t0){t0=now;lastN=now}const raw=(now-t0)/1000,dt=Math.min((now-lastN)/1000,.1);lastN=now;
  shift+=(tgt-shift)*Math.min(1,dt*3);
  const tl=Math.min(raw+shift,loaded?FIN+.6:GATE);
  if(!done&&tl>=FIN)start();
  const a=sm(1.8,5.4,tl),mo=sm(6.0,7.9,tl),nw=sm(4.7,6.0,tl),full=sm(2.8,4.6,tl);
  U2.uM.value=mo;U2.uW.value=nw;U2.uTw.value=sm(5.4,6.4,tl)*(1-sm(6.8,7.9,tl));U2.uLit.value=sm(5.0,6.6,tl);U2.uLock.value=maskOK?sm(7.3,8.3,tl):0;U2.uRip.value=.5-.26*sm(2.3,5.6,tl)-.19*sm(5.6,8.2,tl);U2.uT.value=raw;U2.uRot.value=raw*.1+mo*.8;
  U2.uOn.value=sm(.2,1.1,tl);U2.uFull.value=full;U2.uStripX.value=-3.1+.55*sm(0,2.6,tl);U2.uStripW.value=.03+.3*sm(0,2.4,tl)+14*sm(2.3,4.4,tl);U2.uStripAmt.value=1-full;
  U2.uBeamX.value=-3.8+8.6*sm(GATE,10.5,tl);U2.uBeamOn.value=sm(GATE-.1,GATE+.4,tl);
  const asp=innerWidth/innerHeight,dm=cl(1.35/asp,1,2.3),phi=.42*Math.sin(raw*.3)*(1-mo)+.1*Math.sin(raw*.35)*mo,rad=mix(8.6,7.2,sm(5,8,tl))*dm,yy=(.35+Math.sin(raw*.4)*.08)*(1-mo);
  const visH=2*8.6*dm*Math.tan(17.5*Math.PI/180);U2.uSheet.value.set(visH*asp*1.7,visH*1.7);U2.uHs.value=3*Math.min(dm,1.55);
  cam2.position.set(mix(-2.2,Math.sin(phi)*rad,a),mix(.3,yy,a),mix(2,Math.cos(phi)*rad,a));
  cam2.lookAt(mix(-2.7,0,a),0,0);
  ld.style.setProperty('--lp',(tl/FIN).toFixed(3));
  R2.render(sc2,cam2)};
 requestAnimationFrame(loop)})();
(()=>{const c=$('fx'),g=c.getContext('2d'),WV=[],MT=[],TW=Math.PI*2;let w,h,nx=performance.now()+4000;
 const sz=()=>{const d=Math.min(devicePixelRatio||1,2);w=innerWidth;h=innerHeight;c.width=w*d;c.height=h*d;g.setTransform(d,0,0,d,0,0)};sz();addEventListener('resize',sz);
 const pg=(n,x,y,r,a)=>{g.moveTo(x+Math.cos(a)*r,y+Math.sin(a)*r);for(let i=1;i<=n;i++)g.lineTo(x+Math.cos(a+i*TW/n)*r,y+Math.sin(a+i*TW/n)*r)};
 window.fxw=n=>WV.push({s:[0,3,4,3,6,5,6,0,0,6][n],t:performance.now()});
 const loop=now=>{requestAnimationFrame(loop);g.clearRect(0,0,w,h);g.globalCompositeOperation='lighter';const A=ACC.join();
  for(let i=WV.length-1;i>=0;i--){const q=WV[i],k=(now-q.t)/1500;if(k>1){WV.splice(i,1);continue}const r=(k*k*.4+k*.6)*Math.max(w,h)*.8+10;g.strokeStyle=`rgba(${A},${(1-k)*.45})`;g.lineWidth=1.5;g.beginPath();q.s?pg(q.s,w/2,h/2,r,-Math.PI/2+k*.6):g.arc(w/2,h/2,r,0,TW);g.stroke()}
  if(go&&!RM&&!document.hidden&&now>nx){nx=now+5000+rd()*8000;MT.push({x:w*(.25+rd()*.75),y:-30,a:2.2+rd()*.4,t:now})}
  for(let i=MT.length-1;i>=0;i--){const q=MT[i],k=(now-q.t)/1000;if(k>1.2){MT.splice(i,1);continue}const d=k*900,ux=Math.cos(q.a),uy=Math.sin(q.a),px=q.x+ux*d,py=q.y+uy*d,L=Math.min(d,200),gl=g.createLinearGradient(px,py,px-ux*L,py-uy*L);gl.addColorStop(0,`rgba(255,244,214,${1-k/1.2})`);gl.addColorStop(1,'rgba(255,244,214,0)');g.strokeStyle=gl;g.lineWidth=1.4;g.beginPath();g.moveTo(px,py);g.lineTo(px-ux*L,py-uy*L);g.stroke()}};
 requestAnimationFrame(loop)})();
(()=>{if(!TC)return;let y0=0,t0=0,b0=0,base=0,drag=0;
addEventListener('touchstart',e=>{if(!go||pn.classList.contains('on')||e.touches.length>1)return;y0=e.touches[0].clientY;t0=performance.now();base=tgt;b0=Math.round(cl(tgt/H(),0,1)*9);drag=1},{passive:true});
addEventListener('touchmove',e=>{if(!drag)return;const dy=y0-e.touches[0].clientY;tgt=cl(base+dy*(H()/9)/(innerHeight*.5),0,H());e.cancelable&&e.preventDefault()},{passive:false});
addEventListener('touchend',e=>{if(!drag)return;drag=0;const dy=y0-e.changedTouches[0].clientY,v=dy/Math.max(1,performance.now()-t0);let i=b0;if(Math.abs(v)>.3||Math.abs(dy)>60)i=b0+(dy>0?1:-1);tgt=cl(i,0,9)/9*H()});
addEventListener('touchcancel',()=>{drag=0})})();

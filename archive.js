if (!cosmic) {
const bi=(en,zh)=>`<span data-en="${en.replaceAll('"','&quot;')}" data-zh="${zh.replaceAll('"','&quot;')}">${en}</span>`;
const cap=(en,zh)=>`<p class="eyebrow">${bi(en,zh)}</p>`;
const heading=(en,zh)=>`<h2>${bi(en,zh)}</h2>`;
const pic=(file,en,zh,cls='')=>`<figure class="${cls}">${photo(file,en)}<figcaption>${bi(en,zh)}</figcaption></figure>`;
document.querySelector('nav').innerHTML=[['about','About','关于'],['research','Research','科研'],['photography','Photography','摄影'],['resume','Resume','履历'],['notes','Notes','笔记'],['contact','Contact','联系']].map(([id,en,zh])=>`<a href="#${id}">${bi(en,zh)}</a>`).join('');
document.querySelector('header').insertAdjacentHTML('beforeend','<button class="language-toggle" type="button" aria-label="切换到中文">EN <span>/</span> 中</button>');
document.querySelector('.intro>.eyebrow').innerHTML=bi('Personal archive / Vol. 01 — 2026','个人档案 / 第一卷 — 2026');
document.querySelector('.intro-note').innerHTML=bi('a life, in collected fragments.','把日子，收集成碎片。');
document.querySelector('.hero-baseline').innerHTML=`<span>${bi('Qingdao · Shanghai · Seoul · Northampton','青岛 · 上海 · 首尔 · 北汉普顿')}</span><span>${bi('Neuroscience / Computer Science','神经科学 / 计算机科学')}</span><a href="#intro">${bi('Start with a hello ↓','从一句你好开始 ↓')}</a>`;
const intro=`<section id="intro" class="section location-intro">${cap('01 / Introduction','01 / 初次见面')}<div class="location-copy">${heading('From Qingdao & Shanghai, looking outward.','来自青岛与上海，向外看。')}<p>${bi("I'm Hannah (Zihan) Zhang — born in Qingdao, at home in Shanghai, and a student at Smith College in Northampton, Massachusetts.",'我是 Hannah（张梓涵），出生于青岛，在上海生活，目前就读于美国马萨诸塞州北汉普顿的 Smith College。')}</p><p>${bi('I move between wet lab biology, computation, and visual culture. A camera often comes along.','我在生物湿实验、计算与视觉文化之间探索，也常常带着相机。')}</p><div class="location-route">QINGDAO <span>→</span> SHANGHAI <span>→</span> SEOUL <span>→</span> NORTHAMPTON</div></div><div class="location-photos">${pic('boston','A fragment of Boston','波士顿的一页','city-one')}${pic('photograph/Seoul-540','Seoul, after the rain','首尔，雨后','city-two')}</div></section>`;
document.querySelector('.editorial-hero').insertAdjacentHTML('afterend',intro);
// Preserve the portrait and its accessible reveal; give the section a fuller daily rhythm.
document.querySelector('.about-copy').innerHTML=`${cap('02 / Ways of paying attention','02 / 关于我与日常')}${heading('Quiet work. A restless imagination.','安静地工作，任想象漫游。')}<p>${bi('I like following a question far enough to understand its edges. My practice moves between careful experiments, code, and images.','我喜欢把一个问题推敲到底。细致的实验、代码与影像，构成了我的工作方式。')}</p><p>${bi('In the lab: zebrafish, HCR, confocal microscopy, and data privacy. Outside it: film photography, erhu, coffee, and science fiction.','在实验室里：斑马鱼、HCR、共聚焦显微镜与数据隐私。实验室之外：胶片摄影、二胡、咖啡与科幻故事。')}</p><a class="text-link" href="#resume">${bi('Follow the thread','看看我的经历')} <span>↗</span></a>`;
document.querySelector('#about').insertAdjacentHTML('beforeend',`<div class="daily-notes"><article>${cap('By day','白天')}<h3>${bi('Make the question precise.','把问题问得更准确。')}</h3><p>${bi('Design an experiment. Look closely at a tissue section. Work through the data. Help students find their way around the lab.','设计实验，观察切片，梳理数据，也帮助同学熟悉实验室。')}</p></article><article>${cap('After hours','夜晚')}<h3>${bi('Leave room to wander.','为漫游留一点空间。')}</h3><p>${bi('Practice erhu. Collect film frames. Wait for the clouds to clear. Recharge in solitude, with a story or a cup of coffee.','练二胡，收集胶片画面，等云散开。独处时，故事与咖啡让我慢慢充电。')}</p></article><article>${cap('A working principle','做事的方法')}<h3>${bi('Stay with the details.','耐心留在细节里。')}</h3><p>${bi('Python, R, and MATLAB for patterns; a notebook and a camera for everything that will not fit into a table.','用 Python、R 和 MATLAB 寻找规律；用笔记本和相机记录装不进表格的东西。')}</p></article></div>`);
document.querySelector('#research .eyebrow').innerHTML=bi('03 / Research & projects','03 / 科研与项目');
// Fold the project exploration into the research archive rather than repeating a separate gallery.
document.querySelector('#projects').remove();
document.querySelector('#research').insertAdjacentHTML('beforeend',`<div class="archive-research"><article>${cap('Barresi Lab / Developmental biology','Barresi Lab / 发育生物学')}<h3>${bi('Radial glia & Metrn/MetrnL','放射状胶质细胞与 Metrn/MetrnL')}</h3><p>${bi('Studying the effects of metrn/metrn-like knockdown on zebrafish spinal cord development through HCR, immunostaining, and confocal microscopy.','使用 HCR、免疫染色和共聚焦显微镜，研究 metrn/metrn-like 敲低对斑马鱼脊髓发育的影响。')}</p></article><article>${cap('Data Infrastructure Lab / Privacy','Data Infrastructure Lab / 数据隐私')}<h3>${bi('What happens beneath an interface?','界面之下，发生了什么？')}</h3><p>${bi('Android reverse engineering to examine embedded app logic and data privacy vulnerabilities, with a collaborative paper in progress.','通过 Android 逆向工程分析应用内嵌逻辑与数据隐私漏洞，并参与合作论文撰写。')}</p></article><article>${cap('MnemoLab / Ongoing exploration','MnemoLab / 持续探索')}<h3>${bi('Memory, people, technology.','记忆、人与技术。')}</h3><p>${bi('An evolving space for my interests in neuroscience and HCI. How might technology attend more closely to the ways people remember?','这是神经科学与 HCI 兴趣交汇的一处空间：技术能否更细致地理解人们记忆的方式？')}</p></article></div>`);
const gallery=[['astronomy/star-trails','01 / Nightwatch','01 / 夜观','Stars taking their time.','星星慢慢走过。','wide'],['film-contact-sheet','02 / Contact sheet','02 / 接触印样','A few frames worth keeping.','想要留下的几格。','tall'],['photograph/Seoul-540','03 / Seoul','03 / 首尔','The city between moments.','城市的间隙。','tall'],['astronomy/moon under telescope','04 / Through the telescope','04 / 望远镜里','A familiar, distant neighbour.','熟悉而遥远的邻居。','moon-frame'],['erhu/groupphoto2','05 / Erhu','05 / 二胡','Listening, together.','一起倾听。','wide'],['snow','06 / Personal collage','06 / 私人拼贴','Fragments, rearranged.','重新排列的碎片。','tall']];
const photography=`<section id="photography" class="section photography"><div class="section-heading">${cap('04 / Photography','04 / 摄影')}${heading('Another way of keeping a record.','另一种记录方式。')}<p>${bi('Film, night skies, city walks, and the people in between. Photographs from my own archive.','胶片、夜空、城市散步，以及其间的人。来自我的私人影像档案。')}</p></div><div class="photo-editorial">${gallery.map(([file,en,zh,title,cn,cls])=>`<figure class="gallery-frame ${cls}"><a href="assets/${encodeURI(file)}.webp" target="_blank" rel="noopener" aria-label="${en}">${photo(file,title)}</a><figcaption><span>${bi(en,zh)}</span><p>${bi(title,cn)}</p></figcaption></figure>`).join('')}</div></section>`;
const entries=[['2025.11 —','Barresi Lab · Smith College','Research Assistant','科研助理','Zebrafish spinal cord development; HCR, immunostaining, confocal imaging.','斑马鱼脊髓发育；HCR、免疫染色与共聚焦成像。'],['2026.01 —','Data Infrastructure Lab · Smith College','Research Assistant','科研助理','Android reverse engineering and data privacy research.','Android 逆向工程与数据隐私研究。'],['2026.05 — 06','SURF · Smith College','Research Fellow','暑期研究员','Metrn/MetrnL muscle development, image analysis with Fiji and R.','Metrn/MetrnL 与肌肉发育；使用 Fiji 和 R 分析图像。'],['2026.07','Sungkyunkwan University','Summer Research Project','暑期科研项目','EEG signals, consumer preference, and computational analysis.','EEG 信号、消费者偏好与计算分析。'],['2026.01 —','BIO 133 · Smith College','Teaching Assistant','课程助教','Preparing laboratory materials and supporting undergraduate experiments.','准备实验材料，协助本科生实验课程。'],['2026.02 —','International Student Organization','Publicity Team Leader','宣传团队负责人','Posters, interviews, and visual communication for campus events.','校园活动海报、采访与视觉传播。']];
const resume=`<section id="resume" class="section resume-archive"><div class="section-heading">${cap('05 / Resume','05 / 履历')}${heading('A path, still unfolding.','仍在展开的路径。')}</div><div class="cv-layout"><aside><h3>${bi('Education','教育背景')}</h3><p class="cv-date">2025.09 —</p><h4>Smith College</h4><p>${bi('Neuroscience & Computer Science','神经科学与计算机科学')}<br>Northampton, MA</p><p class="cv-date">2022 — 2025</p><h4>${bi('Southwest Weiyu High School','上海市西南位育中学')}</h4><p>Shanghai</p><a class="text-link" href="resume.pdf" target="_blank" rel="noopener">${bi('Full resume · PDF','完整简历 · PDF')} ↗</a></aside><div class="cv-entries">${entries.map(([date,place,en,zh,desc,cn])=>`<article><span class="cv-date">${date}</span><div><h3>${bi(en,zh)}</h3><p class="cv-place">${place}</p><p>${bi(desc,cn)}</p></div></article>`).join('')}</div></div><div class="skill-line"><span>${bi('Tools of the practice','常用工具')}</span><p>Python / R / MATLAB / Fiji / HCR / Confocal / Git / Photoshop / Film</p></div></section>`;
const notes=`<section id="notes" class="section notes-archive"><div class="section-heading">${cap('06 / Notes to self','06 / 写给自己')}${heading('Not everything belongs in a resume.','有些事，不必写进简历。')}<p>${bi('Small thoughts, left in the margins.','一些留在页边的小小念头。')}</p></div><div class="margin-notes"><blockquote>${bi('I notice the room before I speak in it.','开口之前，我会先留意这个房间。')}<span>01 — ${bi('On noticing','关于观察')}</span></blockquote><blockquote>${bi('Rest is not regression.','休息，不是退步。')}<span>02 — ${bi('A reminder','一个提醒')}</span></blockquote><blockquote>${bi('I keep score quietly, mostly with myself.','我安静地衡量自己，大多时候只和自己比较。')}<span>03 — ${bi('On becoming','关于成长')}</span></blockquote></div><div class="notes-index">${[['Seeing an embryo through HCR','用 HCR 看清胚胎发育的瞬间'],['The patience I learned from erhu','二胡教会我的耐心'],['Lab life, through an introvert’s eyes','一个内向者眼中的实验室生活']].map(([en,zh],i)=>`<div><span>0${i+1}</span><p>${bi(en,zh)}</p><span>${bi('Forthcoming','待写')}</span></div>`).join('')}</div></section>`;
document.querySelector('main').insertAdjacentHTML('beforeend',photography+resume+notes);
document.querySelector('footer>.eyebrow').innerHTML=bi('07 / Keep in touch','07 / 保持联系');
// The deeper world stays provisional: retain the hero peek, let the rest be an editorial archive.
document.querySelectorAll('.contact-star').forEach(el=>el.remove());
document.querySelector('.collage .world-caption').innerHTML=bi('a little room for imagination.','给想象留一点空间。');

// Concrete labels and content; personal notes stay in Notes.
document.querySelector('.wordmark').innerHTML='<span class="brand-oyster" aria-hidden="true">🦪</span><span class="sr-only">Hannah Zhang</span>';document.querySelector('.wordmark').setAttribute('aria-label','Hannah Zhang');
document.querySelectorAll('.intro-note,.top-note,.bottom-note,.collage-star,.about-photo>.hand,.world-caption,.daily-notes').forEach(el=>el.remove());
document.querySelector('.portrait figcaption').innerHTML=bi('Boston','波士顿');
document.querySelector('.fish figcaption').innerHTML=bi('Zebrafish · 70 hpf','斑马鱼 · 70 hpf');
document.querySelector('.location-copy h2').innerHTML=bi('Hannah / Zihan Zhang','Hannah / 张梓涵');
document.querySelectorAll('.location-copy>p')[1].remove();
document.querySelector('.location-intro>.eyebrow').innerHTML=bi('01 / Intro','01 / 介绍');
document.querySelector('.location-route').remove();
document.querySelector('.about-copy').innerHTML=`${cap('03 / About','03 / 关于')}${heading('About','关于')}<p>${bi('I study neuroscience and computer science at Smith College. My work includes zebrafish development, EEG analysis, and data privacy.','我在 Smith College 学习神经科学与计算机科学，研究涉及斑马鱼发育、EEG 分析与数据隐私。')}</p><p>${bi('Outside the lab: film photography, erhu, astronomy, coffee, and science fiction.','实验室之外：胶片摄影、二胡、天文、咖啡与科幻。')}</p>`;
const simpleHeading=(id,num,en,zh)=>{const section=document.querySelector(id),head=section.querySelector('.section-heading');head.innerHTML=cap(num+' / '+en,num+' / '+zh)+heading(en,zh);};
simpleHeading('#resume','02','Resume','履历');
simpleHeading('#research','04','Research','科研');
simpleHeading('#photography','05','Photography','摄影');
simpleHeading('#notes','06','Notes','笔记');
document.querySelector('#intro').after(document.querySelector('#resume'));
document.querySelector('.footer-bottom>div').insertAdjacentHTML('beforeend','<a href="https://www.linkedin.com/in/hannah-zhang-655392383/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>');
const cards=document.querySelectorAll('.research-card');
cards[0].querySelector('h3').innerHTML=bi('Zebrafish muscle development','斑马鱼肌肉发育');
cards[0].querySelector('p').innerHTML=bi('Metrn / MetrnL, immunostaining, and muscle-fibre image analysis with Fiji and R.','研究 Metrn / MetrnL，进行免疫染色，并使用 Fiji 与 R 分析肌纤维图像。');
cards[1].querySelector('h3').innerHTML=bi('EEG & consumer preference','EEG 与消费者偏好');
cards[1].querySelector('p').innerHTML=bi('EEG preprocessing, statistical analysis, and logistic regression in Python.','使用 Python 进行 EEG 预处理、统计分析与逻辑回归。');
const extra=document.querySelectorAll('.archive-research article');
extra[1].querySelector('h3').innerHTML=bi('Android & data privacy','Android 与数据隐私');
extra[2].querySelector('h3').textContent='MnemoLab';
extra[2].querySelector('p').innerHTML=bi('An ongoing project at the intersection of memory and HCI.','围绕记忆与 HCI 的持续探索项目。');
document.querySelectorAll('.gallery-frame figcaption p').forEach(el=>el.remove());
document.querySelectorAll('.cv-entries article>div>p:last-child').forEach(el=>el.remove());
document.querySelector('.skill-line').remove();
document.querySelector('footer h2').innerHTML=bi('Contact','联系');
document.querySelector('.footer-bottom>span:last-child').textContent='© 2026 Hannah Zhang';
document.querySelector('nav').innerHTML=[['resume','Resume','履历'],['about','About','关于'],['research','Research','科研'],['photography','Photography','摄影'],['notes','Notes','笔记'],['contact','Contact','联系']].map(([id,en,zh])=>`<a href="#${id}">${bi(en,zh)}</a>`).join('');
// Photography shares the same reveal interaction as the hero and research.
document.querySelectorAll('.gallery-frame>a').forEach((el,i)=>{
 el.classList.add('gallery-reveal');
 const inner=['film-contact-sheet','astronomy/star-trails','snow','lab/immuno on sections','photograph/Seoul-540','astronomy/field-trip-sky'][i];
 el.insertAdjacentHTML('beforeend',`<div class="gallery-inner" aria-hidden="true">${photo(inner,'')}</div>`);
 const button=document.createElement('button');button.type='button';button.className='gallery-toggle';button.setAttribute('aria-pressed','false');button.innerHTML=bi('Inner world','内层');el.parentElement.append(button);
 el.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=el.getBoundingClientRect();el.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');el.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%');el.classList.add('peek')});
 el.addEventListener('pointerleave',()=>el.classList.remove('peek'));
 button.addEventListener('click',()=>{const open=el.classList.toggle('open');button.setAttribute('aria-pressed',String(open))});
});


// Consolidate the profile and distinguish projects from the chronological CV.
document.querySelector('.location-intro>.eyebrow').innerHTML=bi('01 / About','01 / 关于');
document.querySelector('.location-copy').insertAdjacentHTML('beforeend',`<p>${bi('Neuroscience & computer science at Smith College. Outside the lab: film photography, erhu, coffee, and science fiction.','在 Smith College 学习神经科学与计算机科学。实验室之外：胶片摄影、二胡、咖啡与科幻。')}</p><p class="personal-hand">film, coffee & a little curiosity ☕ 📷</p>`);
document.querySelector('#intro').id='about-profile';
document.querySelector('#about').remove();
document.querySelector('#about-profile').id='about';
document.querySelectorAll('a[href="#intro"]').forEach(a=>a.href='#about');
document.querySelector('.collage').insertAdjacentHTML('afterbegin','<span class="personal-hand hello-note">Hi, I’m Hannah! 🦪</span>');

document.querySelector('#research .section-heading>.eyebrow').innerHTML=bi('03 / Selected projects','03 / 项目');
document.querySelector('#photography .section-heading>.eyebrow').innerHTML=bi('04 / Photography','04 / 摄影');
document.querySelectorAll('.archive-research article').forEach((el,i)=>{if(i<2)el.remove()});
document.querySelectorAll('.research-card .card-meta').forEach(el=>el.remove());
const researchArchive=document.querySelector('.archive-research');
researchArchive.insertAdjacentHTML('beforeend',`<article><p class="eyebrow">${bi('Xiaoyan / Serious game · In development','《小岩》/ 严肃游戏 · 开发中')}</p><h3>${bi('Xiaoyan — a two-player Alzheimer’s care game','《小岩》——阿尔茨海默症双人照护游戏')}</h3><p>${bi('A patient completes everyday cognitive tasks while a family member provides graduated prompts. Recognition, cooking, sound, and photo-restoration tasks turn care into cooperation without treating memory as a pass-or-fail test.','患者完成认人、做饭、辨认声音与修复照片等生活化认知任务，家属提供分级提示。游戏把照护设计成合作，不把记忆简化成对错测试。')}</p></article>`);
document.querySelector('#research .research-card:first-child p').innerHTML=bi('Microscopy → image analysis → muscle-fibre measurements. Methods and results in the paper below.','显微成像 → 图像分析 → 肌纤维量化。方法与结果见下方论文。');
document.querySelector('#research .research-card:nth-child(2) p').innerHTML=bi('EEG signals → preprocessing → logistic regression. Analysis and findings in the presentation.','EEG 信号 → 预处理 → 逻辑回归。分析过程与结果见报告。');
document.querySelector('#notes').innerHTML=`<div class="section-heading">${cap('05 / Leave a note','05 / 留言')}${heading('Leave a note 💬','留句话吧 💬')}</div><div class="tally-wrap"><iframe data-tally-src="https://tally.so/embed/kdPPd6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" src="https://tally.so/embed/kdPPd6?alignLeft=1&hideTitle=1&transparentBackground=1" loading="lazy" width="100%" height="560" frameborder="0" marginheight="0" marginwidth="0" title="Leave a note for Hannah"></iframe><p class="tally-fallback">${bi('If the form does not load, open it in a new tab.','如果表单没有显示，可以在新标签页中打开。')} <a href="https://tally.so/r/kdPPd6" target="_blank" rel="noopener noreferrer">${bi('Open form ↗','打开表单 ↗')}</a></p></div>`;
document.querySelector('nav a[href="#notes"]')?.remove();

const notePanel=document.querySelector('#notes');
const tallyPanel=notePanel.querySelector('.tally-wrap');
tallyPanel.insertAdjacentHTML('beforebegin',`<div class="contact-note-head"><p class="eyebrow">${bi('Leave a note','留句话吧')}</p><h3>${bi('Leave a note 💬','留句话吧 💬')}</h3></div>`);
document.querySelector('footer .email').insertAdjacentElement('afterend',tallyPanel.previousElementSibling);
document.querySelector('footer .contact-note-head').insertAdjacentElement('afterend',tallyPanel);
notePanel.remove();
document.querySelector('footer>.eyebrow').innerHTML=bi('05 / Contact','05 / 联系');
document.querySelector('footer .email').insertAdjacentHTML('beforebegin',`<p class="contact-name">Hannah (Zihan) Zhang <span>· 张梓涵</span></p>`);

// Categorized photography shelves. Add another item to a category array to extend it.
const photoCategories=[
 {en:'Life',zh:'日常',items:[['life/boston-life','Boston','波士顿'],['life/new-york','New York','纽约'],['life/hainan','Hainan','海南'],['life/coffee','Coffee break','咖啡时间'],['film-contact-sheet','Contact sheet','接触印样'],['photograph/hangzhou-evening','Hangzhou evening','杭州晚会'],['photograph/qingdao','Qingdao','青岛'],['photograph/qingdao-sea','Qingdao coast','青岛海边'],['photograph/traffic-long-exposure','Traffic study','车辆慢门'],['photograph/crowd-long-exposure','Crowd study','人群慢门'],['photograph/hangzhou-goldfish','Goldfish','杭州金鱼'],['photograph/hangzhou-west-lake','West Lake','杭州西湖'],['photograph/Seoul-540','Seoul','首尔'],['erhu/groupphoto2','Erhu ensemble','二胡合奏'],['erhu/groupphoto1','After rehearsal','排练之后']]},
 {en:'Lab',zh:'实验室',items:[['lab/celebrting collaboration','Celebrating Collaborations','合作时刻'],['lab/immunostaining','Immunostaining','免疫染色'],['lab/immuno on sections','Tissue sections','组织切片'],['lab/whiteboard','Lab whiteboard','实验室白板']]},
 {en:'Astronomy',zh:'天文',items:[['astronomy/star-trails','Star trails','星轨'],['astronomy/moon under telescope','Moon through a telescope','望远镜里的月亮'],['astronomy/astrophotography','Telescope setup','架好望远镜'],['astronomy/field-trip-sky','Field trip sky','野外星空']]}
];
const photoSection=document.querySelector('#photography');
photoSection.querySelector('.photo-editorial').outerHTML=`<div class="photo-shelves">${photoCategories.map((category,ci)=>`<section class="photo-shelf"><div class="shelf-head"><h3>${bi(category.en,category.zh)}</h3><div><button type="button" class="shelf-arrow prev" aria-label="Previous">←</button><button type="button" class="shelf-arrow next" aria-label="Next">→</button></div></div><div class="shelf-track">${category.items.map(([file,en,zh],i)=>`<figure><a href="assets/${encodeURI(file)}.webp" target="_blank" rel="noopener">${photo(file,en)}</a><figcaption><span>${String(i+1).padStart(2,'0')}</span>${bi(en,zh)}</figcaption></figure>`).join('')}</div></section>`).join('')}</div>`;
photoSection.querySelectorAll('.photo-shelf').forEach(shelf=>{const track=shelf.querySelector('.shelf-track');shelf.querySelector('.prev').addEventListener('click',()=>track.scrollBy({left:-track.clientWidth*.75,behavior:'smooth'}));shelf.querySelector('.next').addEventListener('click',()=>track.scrollBy({left:track.clientWidth*.75,behavior:'smooth'}));});

// A small cursor aperture, with no page-wide visual change.
document.body.classList.add('cursor-world');
document.querySelector('.fish figcaption')?.remove();
document.querySelectorAll('.reveal-toggle,.gallery-toggle').forEach(el=>el.remove());
const collage=document.querySelector('.collage');
collage.querySelector('.hidden-world')?.remove();
const colorLayer=document.createElement('div');colorLayer.className='color-collage-layer';colorLayer.setAttribute('aria-hidden','true');colorLayer.innerHTML=[...collage.querySelectorAll(':scope > .piece')].map(el=>el.outerHTML).join('');collage.append(colorLayer);
collage.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=collage.getBoundingClientRect();colorLayer.style.setProperty('--photo-x',(e.clientX-r.left)+'px');colorLayer.style.setProperty('--photo-y',(e.clientY-r.top)+'px');collage.classList.add('color-peek')});collage.addEventListener('pointerleave',()=>collage.classList.remove('color-peek'));
const heroIntro=document.querySelector('.editorial-hero .intro');
const heroPage=document.querySelector('.editorial-hero');
heroPage.insertAdjacentHTML('beforeend',`<div class="hero-text-world" aria-hidden="true"><div class="hero-text-stars"></div><article class="inner-poem"><header><p class="poem-number">51</p><div><h2><em>Song of Myself, 51</em></h2><p class="poem-byline"><a href="https://poets.org/poet/walt-whitman" target="_blank" rel="noopener noreferrer">Walt Whitman</a> <span>1819–1892</span></p></div></header><div class="poem-lines"><p>The past and present wilt—I have fill’d them, emptied them.<br>And proceed to fill my next fold of the future.</p><p>Listener up there! what have you to confide to me?<br>Look in my face while I snuff the sidle of evening,<br><span>(Talk honestly, no one else hears you, and I stay only a minute longer.)</span></p><p>Do I contradict myself?<br>Very well then I contradict myself,<br><span>(I am large, I contain multitudes.)</span></p><p>I concentrate toward them that are nigh, I wait on the door-slab.</p><p>Who has done his day’s work? who will soonest be through with his supper?<br>Who wishes to walk with me?</p><p>Will you speak before I am gone? will you prove already too late?</p></div></article><button type="button" class="leave-hero-world">${bi('Return to surface','回到表面')} ×</button></div>`);
heroIntro.insertAdjacentHTML('beforeend',`<button type="button" class="enter-hero-world">${bi('Enter inner world','进入内层')} <span>↗</span></button>`);
heroIntro.addEventListener('pointermove',e=>{if(e.pointerType==='touch'||heroPage.classList.contains('hero-world-open'))return;const blocked=e.target.closest('h1,p,a,button,.eyebrow,.personal-hand');if(blocked){heroPage.classList.remove('hero-text-peek');return}const r=heroPage.getBoundingClientRect();heroPage.style.setProperty('--hero-x',(e.clientX-r.left)+'px');heroPage.style.setProperty('--hero-y',(e.clientY-r.top)+'px');heroPage.classList.add('hero-text-peek')});heroIntro.addEventListener('pointerleave',()=>{if(!heroPage.classList.contains('hero-world-open'))heroPage.classList.remove('hero-text-peek')});
const enterHero=heroIntro.querySelector('.enter-hero-world'),leaveHero=heroPage.querySelector('.leave-hero-world');
function openHeroWorld(){heroPage.classList.add('hero-world-open','hero-text-peek');heroPage.querySelector('.hero-text-world').setAttribute('aria-hidden','false');leaveHero.focus()}
function closeHeroWorld(){heroPage.classList.remove('hero-world-open','hero-text-peek');heroPage.querySelector('.hero-text-world').setAttribute('aria-hidden','true');enterHero.focus()}
enterHero.addEventListener('click',openHeroWorld);leaveHero.addEventListener('click',closeHeroWorld);document.addEventListener('keydown',e=>{if(e.key==='Escape'&&heroPage.classList.contains('hero-world-open'))closeHeroWorld()});
const translations={
'Skip to content':'跳到正文','neuroscience':'神经科学','computation':'计算','human experience':'人的体验','Explore my work':'探索我的研究','Hello, I\'m Hannah!':'你好，我是梓涵！','Boston, a little while ago.':'波士顿，不久前。','tiny lives, big questions':'小小生命，大大问题','a few pieces of my world ↗':'我的世界，几枚碎片 ↗','Peek underneath':'看看内层','Back to the surface':'回到表层','questions are better together.':'一起探索，问题更有意思。','Small subjects.':'微小的对象，','Big questions.':'广阔的问题。','From living systems to human signals.':'从生命系统，到人的信号。','A selection of research in progress.':'一些正在进行的研究。','Read research ↗':'阅读研究 ↗','Read presentation ↗':'阅读报告 ↗','01 — Developmental biology':'01 — 发育生物学','02 — Neuroscience & computation':'02 — 神经科学与计算','How does a body':'一个身体，','find its form?':'如何形成？','Before a choice,':'在选择之前，','there is a signal.':'信号已经出现。','Investigating Metrn / MetrnL and zebrafish development. Immunostaining, microscopy, and image analysis bring the details of muscle organization into view.':'研究 Metrn / MetrnL 与斑马鱼发育。通过免疫染色、显微成像与图像分析，观察肌肉组织的细节。','Exploring EEG signals and consumer preference through preprocessing, statistical analysis, and logistic regression.':'通过信号预处理、统计分析与逻辑回归，探索 EEG 信号与消费者偏好。','Zebrafish muscle research':'斑马鱼肌肉发育研究','EEG research presentation':'EEG 科研报告','Something on':'有什么，','your':'想和我','mind?':'聊聊？','Resume ↗':'简历 ↗','Back to top ↑':'回到顶部 ↑','Made of curiosity. © 2026':'因好奇而生。© 2026'
};
const textRecords=[];
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:n=>!n.parentElement.closest('[data-en],script,style')&&n.textContent.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT});
let node;while(node=walker.nextNode()){let raw=node.textContent,key=raw.trim();if(translations[key])textRecords.push({node,en:raw,zh:raw.replace(key,translations[key])});}
let locale='en';try{locale=localStorage.getItem('hannah-language')==='zh'?'zh':'en'}catch{}
function setLanguage(lang){locale=lang;document.documentElement.lang=lang==='zh'?'zh-CN':'en';document.querySelectorAll('[data-en]').forEach(el=>el.textContent=el.dataset[lang]);textRecords.forEach(r=>r.node.textContent=r[lang]);document.querySelector('.language-toggle').innerHTML=lang==='en'?'EN <span>/</span> 中':'中 <span>/</span> EN';document.querySelector('.language-toggle').setAttribute('aria-label',lang==='en'?'切换到中文':'Switch to English');document.title=lang==='en'?'Hannah Zhang — Personal Archive':'张梓涵 — 个人档案';document.querySelectorAll('.reveal-toggle:not([data-backdrop-button])').forEach(b=>b.innerHTML=(b.getAttribute('aria-pressed')==='true'?(lang==='zh'?'回到表层':'Back to the surface'):(lang==='zh'?'看看内层':'Peek underneath'))+' <span>↗</span>');try{localStorage.setItem('hannah-language',lang)}catch{}}
document.querySelector('.language-toggle').addEventListener('click',()=>setLanguage(locale==='en'?'zh':'en'));
document.querySelectorAll('.reveal-toggle').forEach(b=>b.addEventListener('click',()=>setLanguage(locale)));
setLanguage(locale);
}

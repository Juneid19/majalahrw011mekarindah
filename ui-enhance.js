(function(){
try {
var style=document.createElement('style');
style.textContent='.arsip-s{max-width:180px}.ld-btn{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);color:#aaa;padding:.6rem 1.2rem;border-radius:.75rem;cursor:pointer;font-size:.75rem;text-align:center;transition:all .3s;margin-top:1rem}.ld-btn:hover{background:rgba(255,255,255,.1);color:#fff}.md-img{width:100%;height:200px;background:#111;border-radius:1.2rem 1.2rem 0 0;overflow:hidden;margin-bottom:1rem}.md-img img{width:100%;height:100%;object-fit:cover}header,button,div{-webkit-backdrop-filter:none!important;backdrop-filter:none!important}#galeriTrack{will-change:transform}.slide-item{contain:layout style paint}img:not([src*="data:"]){background:var(--bg,#111)}#sec-3 [style*="line-height"]{white-space:pre-line!important;max-height:none!important;overflow:visible!important;-webkit-line-clamp:unset!important}#sec-0{background:#000!important}#sec-0 *{color:#fff!important}body.light #sec-0,body.light #sec-0 *{color:#fff!important;background:#000!important}@keyframes cldFadeIn{0%{opacity:0}100%{opacity:1}}.cld-iframe{animation:cldFadeIn 1.5s ease-out forwards}';
document.head.appendChild(style);

function popMo(id,arr){try{var s=document.getElementById(id);if(!s)return;var m={};arr.forEach(function(x){if(x.date||x.tgl){var p=(x.date||x.tgl).split('-');m[p[0]+'-'+p[1]]=1;}});var ms=Object.keys(m).sort().reverse();var b=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];ms.forEach(function(k){var p=k.split('-');var o=document.createElement('option');o.value=k;o.textContent=b[parseInt(p[1])-1]+' '+p[0];s.appendChild(o);});}catch(e){}}

function turboLazyImages(){try{document.querySelectorAll('img:not([loading]):not([src*="data:"])').forEach(function(img){var rect=img.getBoundingClientRect();if(rect.top>window.innerHeight||rect.bottom<0){img.loading='lazy';}});}catch(e){}}

/* === JOKER CARD 1: GOOGLE DRIVE === */
function fixDriveVideos(){
    try {
        document.querySelectorAll('img[src*="drive.google.com"]').forEach(function(img){
            var url = img.src;
            var id = '';
            var match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
            if(match) { id = match[1]; }
            else {
                match = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
                if(match) { id = match[1]; }
            }
            
            if(id) {
                var driveUrl = 'https://drive.google.com/file/d/' + id + '/view';
                var wrapper = document.createElement('a');
                wrapper.href = driveUrl;
                wrapper.target = '_blank';
                wrapper.rel = 'noopener noreferrer';
                wrapper.style.cssText = 'display:flex;align-items:center;justify-content:center;width:100%;height:200px;background:#111;border-radius:1.2rem 1.2rem 0 0;overflow:hidden;margin-bottom:1rem;text-decoration:none;position:relative;';
                wrapper.innerHTML = '<div style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);"><div style="width:60px;height:60px;background:rgba(255,255,255,0.9);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(0,0,0,0.3)"><svg width="24" height="24" viewBox="0 0 24 24" fill="#000"><path d="M8 5v14l11-7z"/></svg></div><p style="color:#fff;margin-top:12px;font-size:.8rem;font-weight:500">Putar Video</p></div>';
                img.parentNode.replaceChild(wrapper, img);
            }
        });
    } catch(e){}
}

/* === JOKER CARD 2: CLOUDINARY + KOMPRES OTOMATIS 720p === */
function fixCloudinaryEmbeds(){
    try {
        document.querySelectorAll('img[src*="player.cloudinary.com"]').forEach(function(img){
            var url = img.src;
            
            // Baca URL yang dipaste user
            var urlObj = new URL(url);
            var cloudName = urlObj.searchParams.get('cloud_name') || '';
            var publicId = urlObj.searchParams.get('public_id') || '';
            
            if(publicId) {
                // Sihir kompres: w_720 (720p) & q_50 (kualitas 50%)
                // Kalau masih berat, ganti w_720 jadi w_480
                var newUrl = 'https://player.cloudinary.com/embed/?cloud_name=' + cloudName + '&public_id=' + publicId + '&transformation[]=q_50:w_720';
                
                var iframe = document.createElement('iframe');
                iframe.src = newUrl;
                iframe.className = 'cld-iframe';
                iframe.style.cssText = 'width:100%;aspect-ratio:16/9;border:none;border-radius:1rem;background:#000;box-shadow:0 0 20px rgba(0,0,0,.3);';
                iframe.allow = 'autoplay; fullscreen; encrypted-media; picture-in-picture';
                iframe.allowFullscreen = true;
                img.parentNode.replaceChild(iframe, img);
            }
        });
    } catch(e){}
}

var coverCctv=null;
function stabilizeCover(){
    var cover=document.getElementById('sec-0');
    if(!cover)return;
    cover.style.setProperty('opacity','1','important');
    cover.style.setProperty('transform','none','important');
    cover.style.setProperty('animation','none','important');
    cover.style.setProperty('filter','none','important');
    cover.style.setProperty('visibility','visible','important');
    if(!coverCctv||coverCctv.disconnected){
        coverCctv=new MutationObserver(function(){
            cover.style.setProperty('opacity','1','important');
            cover.style.setProperty('transform','none','important');
            cover.style.setProperty('animation','none','important');
        });
        coverCctv.observe(cover,{attributes:true,attributeFilter:['style','class']});
    }
}

/* === MADING (GAMBAR NORMAL, DRIVE, CLOUDINARY) === */
function safeMdg(){try{var w=document.querySelector('#sec-6 div[style*="flex-direction:column"]');if(!w)return;if(!document.getElementById('arsipMd')){var d=document.createElement('div');d.style.marginBottom='1.5rem';d.innerHTML='<select id="arsipMd" class="fi arsip-s" onchange="window._fMd(this.value)"><option value="">Semua Bulan</option></select>';w.parentNode.insertBefore(d,w);popMo('arsipMd',D_M);}var cards=w.querySelectorAll('.mading-card');cards.forEach(function(cd,idx){if(cd.querySelector('.md-img'))return;var m=D_M[D_M.length-1-idx];if(m&&m.gambar){var d=document.createElement('div');d.className='md-img';if(m.gambar.indexOf('drive.google.com')!==-1){d.innerHTML='<a href="'+m.gambar+'" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;justify-content:center;width:100%;height:200px;background:#111;text-decoration:none;position:relative;"><div style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);"><div style="width:60px;height:60px;background:rgba(255,255,255,0.9);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(0,0,0,0.3)"><svg width="24" height="24" viewBox="0 0 24 24" fill="#000"><path d="M8 5v14l11-7z"/></svg></div><p style="color:#fff;margin-top:12px;font-size:.8rem;font-weight:500">Putar Video</p></div></a>';}else if(m.gambar.indexOf('player.cloudinary.com')!==-1){d.innerHTML='<iframe src="'+m.gambar+'" class="cld-iframe" style="width:100%;height:200px;border:none;border-radius:1.2rem 1.2rem 0 0;background:#000;" allow="autoplay; fullscreen" allowfullscreen></iframe>';}else{d.innerHTML='<img src="'+m.gambar+'" loading="lazy" onerror="this.parentNode.style.display=\'none\'">';}cd.prepend(d);}});var btn=w.querySelector('.ld-btn');if(btn)btn.remove();if(cards.length>3){for(var i=3;i<cards.length;i++){cards[i].style.display='none';cards[i].classList.add('md-h');}var nb=document.createElement('div');nb.className='ld-btn';nb.textContent='Tampilkan Arsip Lainnya ('+(cards.length-3)+')';nb.onclick=function(){document.querySelectorAll('.md-h').forEach(function(x){x.style.display='block';});nb.remove();};w.appendChild(nb);}else{document.querySelectorAll('.md-h').forEach(function(x){x.style.display='block';});}}catch(e){}}

function safeAct(){try{var w=document.querySelector('#sec-3 .an[style*="margin-bottom:1.5rem"]');if(!w)return;if(!document.getElementById('arsipAct')){var d=document.createElement('div');d.style.marginTop='.5rem';d.style.marginBottom='1.5rem';d.innerHTML='<select id="arsipAct" class="fi arsip-s" onchange="window._fAc(this.value)"><option value="">Semua Bulan</option></select>';w.style.marginBottom='0';w.parentNode.insertBefore(d,w.nextSibling);popMo('arsipAct',D_A);}}catch(e){}}

function safeAdm(){try{var o=document.getElementById('md_oleh');if(!o||document.getElementById('md_gambar'))return;var d=document.createElement('div');d.innerHTML='<label class="lb">URL Gambar / Video</label><input id="md_gambar" class="fi" placeholder="https://drive.google.com/... ATAU https://player.cloudinary.com/...">';o.parentNode.parentNode.insertBefore(d,o.parentNode);var b=document.querySelector('#as-mading .bs');if(b&&!b.dataset.ok){b.dataset.ok='1';b.removeAttribute('onclick');b.addEventListener('click',function(e){e.stopImmediatePropagation();pSv();},true);}}catch(e){}}

window._fMd=function(v){try{var cards=document.querySelectorAll('#sec-6 .mading-card');cards.forEach(function(x){x.style.display='block';x.classList.remove('md-h');});var btn=document.querySelector('#sec-6 .ld-btn');if(btn)btn.remove();if(!v){safeMdg();return;}cards.forEach(function(cd,idx){var m=D_M[D_M.length-1-idx];if(m&&m.tgl){var p=m.tgl.split('-');if((p[0]+'-'+p[1])!==v)cd.style.display='none';}});}catch(e){}};

window._fAc=function(v){try{if(window._curCat!==undefined)window._curCat='';var catBtns=document.querySelectorAll('#catBar .cfb');if(catBtns.length){catBtns.forEach(function(b){b.classList.remove('on');});catBtns[0].classList.add('on');}if(!v){if(window.renderActGrid)window.renderActGrid('');return;}var f=D_A.filter(function(a){if(!a.date)return false;var p=a.date.split('-');return(p[0]+'-'+p[1])===v;});if(window.renderActGrid)window.renderActGrid(f);}catch(e){}};

function pSv(){try{var id=document.getElementById('md_id').value;var obj={id:id||'md_'+Date.now(),gambar:document.getElementById('md_gambar')?document.getElementById('md_gambar').value.trim():'',judul:document.getElementById('md_judul').value.trim(),isi:document.getElementById('md_isi').value.trim(),oleh:document.getElementById('md_oleh').value.trim(),tgl:new Date().toISOString().split('T')[0]};if(!obj.judul||!obj.isi){toast('Judul dan Isi wajib diisi',1);return;}if(id){var idx=D_M.findIndex(function(x){return x.id==id;});if(idx>-1)D_M[idx]=obj;}else{D_M.push(obj);}document.getElementById('md_judul').value='';document.getElementById('md_isi').value='';document.getElementById('md_id').value='';if(document.getElementById('md_gambar'))document.getElementById('md_gambar').value='';saveAll();renderMdList();toast('Pengumuman disimpan');}catch(e){toast('Gagal: '+e.message,1);}}

function forcePeraturan(){
    try {
        var mading=document.getElementById('sec-6');
        if(!mading)return; 
        if(!document.getElementById('sec-peraturan')){
            var secDiv=document.createElement('div');secDiv.className='sec-div';
            var sec=document.createElement('section');sec.className='sec sec-pad';sec.id='sec-peraturan';sec.style.background='#0a0a0a';
            sec.innerHTML='<div style="max-width:60rem;margin:0 auto"><p class="pi an" style="margin-bottom:.5rem;color:#fff">Dokumen Resmi</p><div class="oh an" style="margin-bottom:2rem"></div><h2 class="font-space an" style="font-size:1.5rem;font-weight:700;letter-spacing:-.02em;margin-bottom:1.5rem;color:#fff">Peraturan RW-011 Desa Mekarmukti</h2><div class="an map-wrap" style="height:80vh;min-height:500px"><iframe src="/flipbook-offline.html" loading="lazy" style="width:100%;height:100%;border:0;background:#fff;border-radius:1.1rem"></iframe></div><p class="an" style="text-align:center;margin-top:1rem;font-size:.7rem;color:#666">Geser atau klik halaman untuk membalik</p></div>';
            var nextEl=mading.nextSibling;mading.parentNode.insertBefore(secDiv,nextEl);mading.parentNode.insertBefore(sec,nextEl);
        }
        var peraturan=document.getElementById('sec-peraturan');
        var pElem=peraturan.querySelector('p.pi');var hElem=peraturan.querySelector('h2');
        if(pElem)pElem.style.setProperty('color','#ffffff','important');
        if(hElem)hElem.style.setProperty('color','#ffffff','important');
        peraturan.style.setProperty('background','#0a0a0a','important');
    } catch(e){}
}

function initGaleriCaption(){
    var wrap=document.getElementById('galeriWrap');
    if(!wrap||document.getElementById('custom-caption-wrap'))return;
    if(!document.getElementById('custom-caption-style')){
        var st=document.createElement('style');st.id='custom-caption-style';
        st.textContent='.slide-item>div[style*="linear-gradient"]{display:none!important}';
        document.head.appendChild(st);
    }
    var captionWrap=document.createElement('div');captionWrap.id='custom-caption-wrap';
    captionWrap.style.cssText='text-align:center;padding:.8rem 1rem;font-size:.85rem;color:var(--tc,#eee);min-height:2.5rem;display:flex;align-items:center;justify-content:center;background:var(--bg,#111);border-radius:0 0 1.2rem 1.2rem;border:1px solid rgba(255,255,255,.08);border-top:none;margin:0 auto;max-width:800px;width:100%;';
    wrap.parentNode.insertBefore(captionWrap,wrap.nextSibling);
    function updateCaption(){
        var track=document.getElementById('galeriTrack');if(!track||!captionWrap)return;
        var transform=track.style.transform||'';var match=transform.match(/translateX\(-?(\d+)%\)/);
        if(match){var percent=parseInt(match[1]);var index=Math.round(percent/100);var captions=track.querySelectorAll('.slide-item>div[style*="linear-gradient"]');captionWrap.textContent=(captions[index]&&captions[index].textContent)?captions[index].textContent.trim():'';}
        else{var caps=track.querySelectorAll('.slide-item>div[style*="linear-gradient"]');captionWrap.textContent=(caps[0]&&caps[0].textContent)?caps[0].textContent.trim():'';}
    }
    updateCaption();
    var track=document.getElementById('galeriTrack');
    if(track){new MutationObserver(updateCaption).observe(track,{attributes:true,attributeFilter:['style']});}
}

function watchMagV(target){
    new MutationObserver(function(){
        stabilizeCover();forcePeraturan();initGaleriCaption();safeMdg();safeAct();turboLazyImages();fixDriveVideos();fixCloudinaryEmbeds();
    }).observe(target,{childList:true,subtree:false});
}

var mv=document.getElementById('magV');
if(mv){watchMagV(mv);}else{var tempCctv=new MutationObserver(function(){if(document.getElementById('magV')){this.disconnect();watchMagV(document.getElementById('magV'));}}).observe(document.body,{childList:true,subtree:true});}

if(typeof render==='function'){var _origRender=render;render=function(){try{_origRender();}catch(e){}};}

var aO=new MutationObserver(function(){safeAdm();});
setTimeout(function(){var a=document.getElementById('adP');if(a)aO.observe(a,{childList:true,subtree:true});},1500);

} catch(e) { console.error('[UI] FATAL:', e); }
})();

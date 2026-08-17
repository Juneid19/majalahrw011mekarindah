// Paksa layar loading hilang segera setelah script jalan
document.getElementById('loadingScreen').style.display = 'none';
// Paksa layar loading hilang segera setelah script jalan
document.getElementById('loadingScreen').style.display = 'none';

// Paksa layar loading hilang segera setelah script jalan
document.getElementById('loadingScreen').style.display = 'none';

/* ===== FUNGSI SCROLL NAVIGASI ===== */
function scrollSec(idx){
    var target = document.getElementById('sec-' + idx);
    if(target){
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        var items = document.querySelectorAll('.mn-item');
        items.forEach(function(item, i){
            if(i === idx){
                item.classList.add('on');
            } else {
                item.classList.remove('on');
            }
        });
    }
}
var catCf={keamanan:{l:'Keamanan',c:'#ef4444'},pertamanan:{l:'Pertamanan',c:'#22c55e'},haribesar:{l:'Hari Besar',c:'#f43f5e'},sosial:{l:'Sosial Warga',c:'#3b82f6'},pkk:{l:'PKK',c:'#a855f7'},olahraga:{l:'Olahraga',c:'#f97316'},hukum:{l:'Hukum',c:'#6366f1'},ekonomi:{l:'Ekonomi',c:'#f59e0b'},kesehatan:{l:'Kesehatan',c:'#10b981'},sampah:{l:'Sampah',c:'#14b8a6'},komunikasi:{l:'Komunikasi',c:'#06b6d4'},dewanwarga:{l:'Dewan Warga',c:'#8b5cf6'}};
var sK=['keamanan','pertamanan','haribesar','sosial','pkk','olahraga','hukum','ekonomi','kesehatan','sampah','komunikasi','dewanwarga'];
var sL=['Keamanan','Pertamanan','Hari Besar','Sosial Warga','PKK','Olahraga','Hukum','Ekonomi','Kesehatan','Sampah','Komunikasi','Dewan Warga'];
var secN=['Cover','Sambutan','Struktur','Kegiatan','Keuangan','Profil','Mading','Galeri','Aduan'];
var D_S={namaRw:'RW 011',alamat:'',edisi:'Edisi Perdana',tanggal:'',deskripsi:'',logo:'',wa:'',ig:'',email:'',map:'',wa_group:'',tg_group:''};
var D_K={foto:'',nama:'',jabatan:'Ketua RW 011',periode:'',ttd:''};
var D_SB='',D_ST={wakil:'',sek:'',ben:'',s:[],r:[],fotoWakil:'',fotoSek:'',fotoBen:'',fotoR:[],fotoS:[]};
var D_A=[],D_T={color:'purple',rt:'6',pg:'14',sk:'11',kk:'0'};
var D_F={saldoAwal:0,masuk:[],keluar:[]},D_M=[],D_G=[],D_SL=[],D_AD=[];
var _slTimer = null; // <-- FIX: tambahkan ini

if(typeof EXT_DATA!=='undefined'){try{if(EXT_DATA.s)Object.keys(EXT_DATA.s).forEach(function(k){D_S[k]=EXT_DATA.s[k];});if(EXT_DATA.k)Object.keys(EXT_DATA.k).forEach(function(k){D_K[k]=EXT_DATA.k[k];});if(EXT_DATA.sb!==undefined)D_SB=EXT_DATA.sb;if(EXT_DATA.st)Object.keys(EXT_DATA.st).forEach(function(k){D_ST[k]=EXT_DATA.st[k];});if(EXT_DATA.a)D_A=EXT_DATA.a;if(EXT_DATA.t)Object.keys(EXT_DATA.t).forEach(function(k){D_T[k]=EXT_DATA.t[k];});if(EXT_DATA.f)Object.keys(EXT_DATA.f).forEach(function(k){D_F[k]=EXT_DATA.f[k];});if(EXT_DATA.mading)D_M=EXT_DATA.mading;if(EXT_DATA.galeri)D_G=EXT_DATA.galeri;if(EXT_DATA.slideshow)D_SL=EXT_DATA.slideshow;}catch(e){}}
try{var _a=localStorage.getItem('rw_aduan');if(_a)D_AD=JSON.parse(_a);}catch(e){}
if(!Array.isArray(D_A))D_A=[];if(!Array.isArray(D_ST.s))D_ST.s=[];if(!Array.isArray(D_ST.r))D_ST.r=[];if(!Array.isArray(D_ST.fotoR))D_ST.fotoR=[];if(!Array.isArray(D_F.masuk))D_F.masuk=[];if(!Array.isArray(D_F.keluar))D_F.keluar=[];if(!Array.isArray(D_M))D_M=[];if(!Array.isArray(D_G))D_G=[];if(!Array.isArray(D_SL))D_SL=[];if(!Array.isArray(D_AD))D_AD=[];
if(D_T.color&&D_T.color!=='purple')document.documentElement.setAttribute('data-theme',D_T.color);

function fmt(n){return'Rp '+Number(n).toLocaleString('id-ID')}
function fmtD(d){if(!d)return'-';var p=d.split('-'),b=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Dec'];return parseInt(p[2])+' '+b[parseInt(p[1])-1]+' '+p[0]}
function esc(s){if(!s)return'';return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function trm(s){if(!s)return'';return s.replace(/\n{3,}/g,'\n\n').trim();}
function pfp(u,n,sz){sz=sz||64;var c=n?n.charAt(0).toUpperCase():'?';if(u&&String(u).indexOf('http')===0)return'<div style="width:'+sz+'px;height:'+sz+'px;border-radius:50%;overflow:hidden;border:2px solid var(--ct);flex-shrink:0"><img src="'+esc(u)+'" style="width:100%;height:100%;object-fit:cover" onerror="this.parentNode.innerHTML=\'<div style=&quot;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--cg);font-size:'+(sz/3)+'px;font-weight:600;color:var(--cc)&quot;>'+c+'</div>\'"></div>';return'<div style="width:'+sz+'px;height:'+sz+'px;border-radius:50%;background:var(--cg);border:2px solid var(--ct);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:'+(sz/3)+'px;font-weight:600;color:var(--cc)">'+c+'</div>';}
function ctIc(ic,lb,lk){return'<a href="'+esc(lk)+'" target="_blank" rel="noopener" class="ct-icon"><div class="ct-ic"><iconify-icon icon="'+ic+'" width="22" style="color:var(--cc)"></iconify-icon></div><span style="font-size:.7rem;color:#999">'+esc(lb)+'</span></a>';}
var _tt;function toast(m,e){var el=document.getElementById('toastEl'),mg=document.getElementById('toastMsg');if(!el||!mg)return;mg.textContent=m;el.className='te show'+(e?' err-t':'');clearTimeout(_tt);_tt=setTimeout(function(){el.className='te';},3000);}
function initPage(){try{render();}catch(e){}var c=document.getElementById('sec-0');if(c)c.scrollIntoView({behavior:'instant',block:'start'});setupObs();try{var qrEl=document.getElementById('qrcodeCover');if(qrEl&&qrEl.innerHTML===''){new QRCode(qrEl,{text:window.location.href,width:76,height:76,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.M});}}catch(e){}try{if(typeof _slTimer!=='undefined')clearInterval(_slTimer);var slides=document.querySelectorAll('.sl-slide');if(slides.length>1){var cur=0;_slTimer=setInterval(function(){slides[cur].style.opacity='0';cur=(cur+1)%slides.length;slides[cur].style.opacity='1';},4000);}}catch(e){}try{renderActGrid('');}catch(e){}setTimeout(function(){try{startAutoSlide();}catch(e){}},300);}
    var c=document.getElementById('sec-0');
    if(c)c.scrollIntoView({behavior:'instant',block:'start'});
    setupObs();
    try{var qrEl=document.getElementById('qrcodeCover');if(qrEl&&qrEl.innerHTML===''){new QRCode(qrEl,{text:window.location.href,width:76,height:76,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.M});}}catch(e){}
    try{if(typeof _slTimer!=='undefined')clearInterval(_slTimer);var slides=document.querySelectorAll('.sl-slide');if(slides.length>1){var cur=0;_slTimer=setInterval(function(){slides[cur].style.opacity='0';cur=(cur+1)%slides.length;slides[cur].style.opacity='1';},4000);}}catch(e){}

 
    // --- TAMBAHAN AGAR GALERI AUTO JALAN ---
    try{ startAutoSlide(); }catch(e){}
    // ----------------------------------------

function getEmbed(url,type){if(!url||!type)return'';var id='',m;if(type==='youtube'){m=url.match(/[?&]v=([^&#]+)/);if(m)id=m[1];if(!id){m=url.match(/youtu\.be\/([^?&#]+)/);if(m)id=m[1];}if(!id){m=url.match(/youtube\.com\/shorts\/([^?&#]+)/);if(m)id=m[1];}if(!id){m=url.match(/youtube\.com\/embed\/([^?&#]+)/);if(m)id=m[1];}if(id)return'https://www.youtube.com/embed/'+id+'?rel=0';}if(type==='tiktok'){m=url.match(/tiktok\.com\/@[^\/]+\/video\/(\d+)/);if(m)id=m[1];if(!id){m=url.match(/tiktok\.com\/(\d+)/);if(m)id=m[1];}if(id)return'https://www.tiktok.com/embed/v2/'+id;}if(type==='instagram'){m=url.match(/instagram\.com\/(p|reel)\/([^\/]+)/);if(m)return'https://www.instagram.com/'+m[1]+'/'+m[2]+'/embed/';}return'';}
function getMediaIcon(type){if(type==='youtube')return'<iconify-icon icon="simple-icons:youtube" width="14" style="color:#f00"></iconify-icon>';if(type==='tiktok')return'<iconify-icon icon="simple-icons:tiktok" width="14" style="color:#fff"></iconify-icon>';if(type==='instagram')return'<iconify-icon icon="simple-icons:instagram" width="14" style="color:#e4405f"></iconify-icon>';return'';}
function showSyncStatus(c){
  // Fitur Live/Offline dihilangkan
}
function buildAdmin(){
    var ms=[['settings','solar:settings-linear','Pengaturan'],['ketua','solar:user-linear','Data Ketua'],['sambutan','solar:document-text-linear','Sambutan'],['struktur','solar:users-group-rounded-linear','Struktur'],['kegiatan','solar:gallery-linear','Kegiatan'],['keuangan','solar:wallet-linear','Keuangan'],['mading','solar:notebook-linear','Mading'],['galeri','solar:gallery-bold-duotone','Galeri Foto'],['aduan','solar:chat-round-dots-linear','Aduan Warga'],['tampilan','solar:palette-linear','Tampilan']];
    var h='<div style="display:flex;flex-direction:column;height:100%">';
    
    // HEADER STICKY (Garis 3 + Judul + Logout)
    h+='<header style="position:sticky;top:0;z-index:50;background:rgba(5,5,5,.98);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,.05);padding:.75rem 1rem;display:flex;align-items:center;justify-content:space-between;flex-shrink:0">';
    h+='<div style="display:flex;align-items:center;gap:.75rem">';
    h+='<button onclick="toggleAdmMenu()" style="background:none;border:none;color:#fff;cursor:pointer;padding:.25rem;display:flex;flex-direction:column;gap:4px"><span style="display:block;width:20px;height:2px;background:#fff;border-radius:2px;transition:all .3s"></span><span style="display:block;width:14px;height:2px;background:#fff;border-radius:2px;transition:all .3s"></span><span style="display:block;width:20px;height:2px;background:#fff;border-radius:2px;transition:all .3s"></span></button>';
    h+='<div style="display:flex;align-items:center;gap:.5rem"><div style="width:26px;height:26px;border-radius:.5rem;background:linear-gradient(135deg,#7c3aed,#2563eb);display:flex;align-items:center;justify-content:center"><iconify-icon icon="solar:settings-bold-duotone" width="13" class="text-white"></iconify-icon></div><span style="font-size:.85rem;font-weight:600">Admin</span></div>';
    h+='</div>';
    h+='<button onclick="doLogout()" style="padding:.4rem .8rem;border-radius:.5rem;font-size:.6rem;font-weight:600;color:#f87171;background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.15);cursor:pointer">Logout</button>';
    h+='</header>';
    
    // DROPDOWN MENU SLIDE DARI KIRI
    h+='<div id="admOverlay" style="display:none;position:fixed;inset:0;z-index:40;background:rgba(0,0,0,.6)" onclick="toggleAdmMenu()"></div>';
    h+='<nav id="admMenu" style="position:fixed;top:0;left:0;bottom:0;width:260px;z-index:45;background:#0a0a0a;border-right:1px solid rgba(255,255,255,.05);transform:translateX(-100%);transition:transform .3s ease;overflow-y:auto;padding:1.5rem 1rem 1rem 1rem">';
    h+='<div style="display:flex;align-items:center;gap:.5rem;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid rgba(255,255,255,.05)"><div style="width:28px;height:28px;border-radius:.5rem;background:linear-gradient(135deg,#7c3aed,#2563eb);display:flex;align-items:center;justify-content:center"><iconify-icon icon="solar:settings-bold-duotone" width="14" class="text-white"></iconify-icon></div><div><p style="font-size:.82rem;font-weight:600">Menu Admin</p><p style="font-size:.6rem;color:#777">RW 011</p></div></div>';
    h+='<div style="display:flex;flex-direction:column;gap:.25rem" id="sideNav">';
    for(var i=0;i<ms.length;i++)h+='<div class="sl'+(i===0?' on':'')+'" onclick="sSec(\''+ms[i][0]+'\',this)"><iconify-icon icon="'+ms[i][1]+'" width="15"></iconify-icon>'+ms[i][2]+'</div>';
    h+='</div></nav>';
    
    // MAIN CONTENT (100% PENUH LAYAR)
    h+='<main style="flex:1;overflow-y:auto;padding:1.5rem" id="adMain">';
    
h+='<div class="asec" id="as-settings"><div class="sc"><h2 style="font-size:1.05rem;font-weight:600;margin-bottom:1.1rem">Pengaturan Umum</h2><div class="fi-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:.9rem"><div style="grid-column:span 2"><label class="lb">URL Logo</label><input id="s_logo" class="fi"></div><div><label class="lb">Nama RW</label><input id="s_namaRw" class="fi"></div><div><label class="lb">Kel/Kecamatan</label><input id="s_alamat" class="fi"></div><div><label class="lb">Edisi</label><input id="s_edisi" class="fi"></div><div><label class="lb">Bulan/Tahun</label><input id="s_tanggal" class="fi"></div><div style="grid-column:span 2"><label class="lb">Deskripsi</label><textarea id="s_deskripsi" class="fi"></textarea></div></div></div><div style="margin-top:1.5rem;padding-top:1.2rem;border-top:1px solid rgba(255,255,255,.06)"><div class="fi-grid" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:.8rem"><div><label class="lb">WhatsApp/Link</label><input id="s_wa" class="fi"></div><div><label class="lb">Instagram</label><input id="s_ig" class="fi"></div><div><label class="lb">Email</label><input id="s_email" class="fi"></div></div></div><div style="margin-top:1.5rem;padding-top:1.2rem;border-top:1px solid rgba(255,255,255,.06)"><div class="fi-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:.8rem"><div><label class="lb">Link Grup WhatsApp</label><input id="s_wa_group" class="fi" placeholder="https://chat.whatsapp.com/..."></div><div><label class="lb">Link Grup Telegram</label><input id="s_tg_group" class="fi" placeholder="https://t.me/nama_grup"></div></div></div><div style="margin-top:1.5rem;padding-top:1.2rem;border-top:1px solid rgba(255,255,255,.06)"><label class="lb">Maps Embed</label><textarea id="s_map" class="fi" style="min-height:60px;font-size:.72rem;font-family:Geist Mono,monospace"></textarea></div><div style="margin-top:1.5rem;padding-top:1.2rem;border-top:1px solid rgba(255,255,255,.06)"><label class="lb" style="margin-bottom:.5rem;display:block">Slideshow Cover</label><p style="font-size:.65rem;color:#666;margin-bottom:.8rem">Tambahkan beberapa gambar untuk background cover yang berganti otomatis.</p><div style="display:grid;grid-template-columns:1fr auto;gap:.8rem;margin-bottom:.8rem"><input id="sl_url" class="fi" placeholder="URL Gambar..."><button class="bs" onclick="svSl()" style="white-space:nowrap">+ Tambah</button></div><div id="slList" style="display:grid;grid-template-columns:repeat(4,1fr);gap:.5rem"></div></div><div style="margin-top:1.3rem"><button class="bs" onclick="svSet()">Simpan</button></div></div>';
h+='<div class="asec" id="as-ketua" style="display:none"><div class="sc"><h2 style="font-size:1.05rem;font-weight:600;margin-bottom:1.1rem">Data Ketua</h2><div class="fi-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:.9rem"><div style="grid-column:span 2"><label class="lb">URL Foto</label><input id="k_foto" class="fi"></div><div><label class="lb">Nama</label><input id="k_nama" class="fi"></div><div><label class="lb">Jabatan</label><input id="k_jabatan" class="fi"></div><div><label class="lb">Periode</label><input id="k_periode" class="fi"></div><div><label class="lb">Tanda Tangan</label><input id="k_ttd" class="fi"></div></div><div style="margin-top:1.3rem"><button class="bs" onclick="svKet()">Simpan</button></div></div></div>';
h+='<div class="asec" id="as-sambutan" style="display:none"><div class="sc"><h2 style="font-size:1.05rem;font-weight:600;margin-bottom:1.1rem">Kata Sambutan</h2><textarea id="sb_teks" class="fi" style="min-height:220px"></textarea><div style="margin-top:1.3rem"><button class="bs" onclick="svSb()">Simpan</button></div></div></div>';
h+='<div class="asec" id="as-struktur" style="display:none"><div class="sc" style="margin-bottom:.8rem"><h2 style="font-size:1.05rem;font-weight:600;margin-bottom:1.1rem">Pengurus Inti</h2><div class="fi-grid" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:.8rem"><div><label class="lb">Sekretariat</label><input id="st_wakil" class="fi"><label class="lb" style="margin-top:.5rem">Foto</label><input id="st_fw" class="fi"></div><div><label class="lb">Sekretaris</label><input id="st_sek" class="fi"><label class="lb" style="margin-top:.5rem">Foto</label><input id="st_fse" class="fi"></div><div><label class="lb">Bendahara</label><input id="st_ben" class="fi"><label class="lb" style="margin-top:.5rem">Foto</label><input id="st_fbe" class="fi"></div></div></div><div class="sc" style="margin-bottom:.8rem"><h2 style="font-size:1.05rem;font-weight:600;margin-bottom:1rem">Koordinator Seksi</h2><div class="fi-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:.8rem">';for(i=0;i<12;i++)h+='<div><label class="lb">'+sL[i]+'</label><input id="st_s'+(i+1)+'" class="fi"><label class="lb" style="margin-top:.4rem">Foto</label><input id="st_fs'+(i+1)+'" class="fi"></div>';h+='</div></div><div class="sc"><h2 style="font-size:1.05rem;font-weight:600;margin-bottom:1rem">Ketua RT</h2><div class="fi-grid" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:.7rem">';for(i=0;i<6;i++)h+='<div><label class="lb">RT 00'+(i+1)+'</label><input id="st_r'+(i+1)+'" class="fi"><label class="lb" style="margin-top:.4rem">Foto</label><input id="st_fr'+(i+1)+'" class="fi"></div>';h+='</div></div><div style="margin-top:1.3rem"><button class="bs" onclick="svStr()">Simpan</button></div></div>';
h+='<div class="asec" id="as-kegiatan" style="display:none"><div class="sc" style="margin-bottom:.8rem"><h2 style="font-size:1.05rem;font-weight:600;margin-bottom:1.1rem">Tambah Kegiatan</h2><input type="hidden" id="ae_id" value=""><div class="fi-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:.8rem"><div style="grid-column:span 2"><label class="lb">Judul *</label><input id="ae_title" class="fi"></div><div style="grid-column:span 2"><label class="lb">Deskripsi *</label><textarea id="ae_desc" class="fi"></textarea></div><div><label class="lb">Kategori *</label><select id="ae_cat" class="fi"><option value="">Pilih...</option>';for(i=0;i<sK.length;i++)h+='<option value="'+sK[i]+'">'+sL[i]+'</option>';h+='</select></div><div><label class="lb">Tanggal *</label><input type="date" id="ae_date" class="fi"></div><div><label class="lb">Ukuran</label><select id="ae_size" class="fi"><option value="normal">Normal</option><option value="large">Besar</option></select></div><div><label class="lb">Tipe Media</label><select id="ae_mediaType" class="fi" onchange="toggleMediaField()"><option value="foto">Foto / Gambar</option><option value="youtube">YouTube</option><option value="tiktok">TikTok</option><option value="instagram">Instagram Reels</option></select></div><div id="ae_mediaWrap" style="grid-column:span 2"><label class="lb" id="ae_mediaLbl">URL Gambar</label><input id="ae_media" class="fi" placeholder="https://..."></div></div><div style="margin-top:1rem;display:flex;gap:.6rem"><button class="bs" onclick="svAct()">Simpan</button><button class="bd" onclick="rsAF()" style="padding:.6rem 1.3rem">Reset</button></div></div><div class="sc"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.8rem"><h2 style="font-size:1.05rem;font-weight:600">Daftar</h2><span style="font-size:.65rem;color:#777;font-family:Geist Mono,monospace" id="actCnt">0</span></div><div id="actList"><p style="text-align:center;color:#666;padding:1.5rem 0">Kosong</p></div></div></div>';
h+='<div class="asec" id="as-keuangan" style="display:none"><div class="sc" style="margin-bottom:.8rem"><h2 style="font-size:1.05rem;font-weight:600;margin-bottom:1rem">Saldo Awal</h2><div class="fi-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:.8rem"><div><label class="lb">Rp</label><input type="number" id="fe_sawal" class="fi"></div><div style="display:flex;align-items:flex-end"><button class="bs" onclick="svSal()">Simpan</button></div></div></div><div class="sc" style="margin-bottom:.8rem"><h2 style="font-size:1.05rem;font-weight:600;margin-bottom:1rem">Pemasukan</h2><div class="fi-grid" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:.8rem"><div><label class="lb">Keterangan *</label><input id="fe_mk" class="fi"></div><div><label class="lb">Jumlah *</label><input type="number" id="fe_jm" class="fi"></div><div><label class="lb">Tanggal *</label><input type="date" id="fe_tgl" class="fi"></div><div><label class="lb">Kategori</label><select id="fe_kat_m" class="fi"><option>Iuran Warga</option><option>Bantuan Pemerintah</option><option>Sumbangan</option><option>Lain-lain</option></select></div><div><label class="lb">Catatan</label><input id="fe_ctt" class="fi"></div></div><div style="margin-top:1rem"><button class="bs" onclick="svMas()">+ Pemasukan</button></div></div><div class="sc" style="margin-bottom:.8rem"><h2 style="font-size:1.05rem;font-weight:600;margin-bottom:1rem">Pengeluaran</h2><div class="fi-grid" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:.8rem"><div><label class="lb">Keterangan *</label><input id="fe_kk" class="fi"></div><div><label class="lb">Jumlah *</label><input type="number" id="fe_jk" class="fi"></div><div><label class="lb">Tanggal *</label><input type="date" id="fe_tk" class="fi"></div><div><label class="lb">Kategori</label><select id="fe_kat_k" class="fi"><option>Operasional</option><option>Keamanan</option><option>Kegiatan</option><option>Rapat</option><option>Lingkungan</option><option>Kesehatan</option><option>Publikasi</option><option>Lain-lain</option></select></div><div><label class="lb">Catatan</label><input id="fe_ctk" class="fi"></div></div><div style="margin-top:1rem"><button class="bd" onclick="svKel()" style="padding:.6rem 1.3rem">+ Pengeluaran</button></div></div><div class="sc"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.8rem"><h2 style="font-size:1.05rem;font-weight:600">Transaksi</h2><span style="font-size:.65rem;color:#777;font-family:Geist Mono,monospace" id="finCnt">0</span></div><div id="finList"><p style="text-align:center;color:#666;padding:1.5rem 0">Kosong</p></div></div></div>';
h+='<div class="asec" id="as-mading" style="display:none"><div class="sc" style="margin-bottom:.8rem"><h2 style="font-size:1.05rem;font-weight:600;margin-bottom:1.1rem">Tambah Pengumuman</h2><input type="hidden" id="md_id" value=""><div class="fi-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:.8rem"><div style="grid-column:span 2"><label class="lb">Judul *</label><input id="md_judul" class="fi"></div><div style="grid-column:span 2"><label class="lb">Isi *</label><textarea id="md_isi" class="fi" style="min-height:120px"></textarea></div><div><label class="lb">Oleh</label><input id="md_oleh" class="fi" value="Admin RW 011"></div><div style="display:flex;align-items:flex-end"><button class="bs" onclick="svMading()">Simpan</button></div></div></div><div class="sc"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.8rem"><h2 style="font-size:1.05rem;font-weight:600">Pengumuman</h2><span style="font-size:.65rem;color:#777;font-family:Geist Mono,monospace" id="mdCnt">0</span></div><div id="mdList"><p style="text-align:center;color:#666;padding:1.5rem 0">Kosong</p></div></div></div>';
h+='<div class="asec" id="as-galeri" style="display:none"><div class="sc" style="margin-bottom:.8rem"><h2 style="font-size:1.05rem;font-weight:600;margin-bottom:1.1rem">Tambah Foto</h2><div class="fi-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:.8rem"><div style="grid-column:span 2"><label class="lb">URL Foto *</label><input id="gl_url" class="fi" placeholder="https://..."></div><div style="grid-column:span 2"><label class="lb">Caption</label><input id="gl_cap" class="fi" placeholder="Deskripsi singkat (opsional)"></div></div><div style="margin-top:1rem"><button class="bs" onclick="svGal()">Tambah Foto</button></div></div><div class="sc"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.8rem"><h2 style="font-size:1.05rem;font-weight:600">Daftar Foto</h2><span style="font-size:.65rem;color:#777;font-family:Geist Mono,monospace" id="glCnt">0</span></div><div id="glList" style="display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem"><p style="grid-column:span 3;text-align:center;color:#666;padding:1.5rem 0">Kosong</p></div></div></div>';
h+='<div class="asec" id="as-aduan" style="display:none"><div class="sc"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.8rem"><h2 style="font-size:1.05rem;font-weight:600">Aduan Masuk</h2><div style="display:flex;align-items:center;gap:.5rem"><span id="adSyncBadge" style="font-size:.55rem;padding:.15rem .4rem;border-radius:9999px;background:rgba(34,197,94,.1);color:#4ade80;border:1px solid rgba(34,197,94,.2);display:none">LIVE</span><span style="font-size:.65rem;color:#777;font-family:Geist Mono,monospace" id="adCnt">0</span></div></div><div id="adList"><p style="text-align:center;color:#666;padding:1.5rem 0">Menghubungkan ke database...</p></div></div></div>';

    h+='</main></div>'; // Tutup main dan container utama
    document.getElementById('adP').innerHTML=h;
    loadAduanFromDB();
}

// Fungsi untuk buka/tutup menu garis 3
function toggleAdmMenu(){
  var m=document.getElementById('admMenu');
  var o=document.getElementById('admOverlay');
  var isOpen=m.style.transform==='translateX(0px)';
  m.style.transform=isOpen?'translateX(-100%)':'translateX(0px)';
  o.style.display=isOpen?'none':'block';
}


function rCover(){
    var h='<section class="sec sec-cover" id="sec-0" style="'+(D_SL.length>0?'background:transparent !important;':'')+'"><div style="position:relative;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden">';
    if(D_SL.length>0){h+='<div id="slideshow" style="position:absolute;inset:0;z-index:0">';for(var i=0;i<D_SL.length;i++){h+='<div class="sl-slide" style="position:absolute;inset:0;background:url(\''+esc(D_SL[i])+'\') center/contain no-repeat;background-color:#000;opacity:'+(i===0?'1':'0')+';transition:opacity 1.5s ease-in-out"></div>';}h+='</div><div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.5) 0%,rgba(0,0,0,.7) 100%);z-index:1"></div>';}
    h+='<div style="text-align:center;padding:2rem;max-width:40rem;margin:0 auto;position:relative;z-index:2">';
    if(D_S.logo&&D_S.logo.indexOf('http')===0)h+='<div class="logo-ring pga an a1" style="width:140px;height:140px;border-radius:50%;margin:0 auto 2rem;display:flex;align-items:center;justify-content:center"><img src="'+esc(D_S.logo)+'" style="width:120px;height:120px;border-radius:50%;object-fit:cover"></div>';
    h+='<p class="pi an a2" style="margin-bottom:.6rem;text-shadow:0 2px 8px rgba(0,0,0,0.8)">'+esc(D_S.edisi)+'</p>';
    h+='<h1 class="font-space sht an a3 cover-title" style="font-size:clamp(2.5rem,7vw,4.5rem);font-weight:700;letter-spacing:-.03em;line-height:1.1;margin-bottom:.8rem;text-shadow:0 4px 12px rgba(0,0,0,0.8)">'+esc(D_S.namaRw)+'</h1>';
    h+='<p class="an a4" style="font-size:.95rem;color:#f0f0f0;font-weight:500;margin-bottom:.3rem;text-shadow:0 4px 12px rgba(0,0,0,0.9)">'+esc(D_S.alamat)+'</p>';
    h+='<p class="an a5" style="font-size:.88rem;color:#e0e0e0;font-weight:400;margin-bottom:2rem;text-shadow:0 4px 12px rgba(0,0,0,0.9)">'+esc(D_S.tanggal)+'</p>';
    h+='<p class="an a5" style="font-size:.95rem;max-width:28rem;margin:0 auto 2.5rem;line-height:1.7;text-shadow:0 1px 6px rgba(0,0,0,0.5)">'+esc(D_S.deskripsi)+'</p>';
    h+='<div class="an a6" style="display:flex;gap:2rem;justify-content:center;flex-wrap:wrap">';
    var wl=D_S.wa&&D_S.wa.indexOf('http')===0?D_S.wa:'https://wa.me/'+D_S.wa;h+=ctIc('solar:phone-bold-duotone','WhatsApp',wl);if(D_S.ig)h+=ctIc('solar:gallery-minimalistic-bold-duotone','Instagram',D_S.ig);if(D_S.email)h+=ctIc('solar:letter-bold-duotone','Email','mailto:'+D_S.email);
    h+='</div><div class="an a7" style="margin-top:3rem;display:flex;flex-direction:column;align-items:center;gap:.4rem"><iconify-icon icon="solar:alt-arrow-down-linear" width="20" style="color:#555;animation:pg 2s ease-in-out infinite"></iconify-icon><span style="font-size:.6rem;color:#444;letter-spacing:.15em;text-transform:uppercase">Scroll</span></div><div style="margin-top:2.5rem;display:flex;flex-direction:column;align-items:center;gap:.5rem;opacity:.85"><div id="qrcodeCover" style="background:#fff;padding:6px;border-radius:8px"></div><span style="font-size:.55rem;color:#555;letter-spacing:.1em;text-transform:uppercase">Scan untuk bagikan</span></div></div></div></section>';return h;}

function rSambutan(){var h='<div class="sec-div"></div><section class="sec sec-pad" id="sec-1"><div style="max-width:52rem;margin:0 auto"><p class="pi an" style="margin-bottom:.5rem">Kata Sambutan</p><div class="oh an" style="margin-bottom:2rem"></div><div class="sb-grid" style="display:grid;grid-template-columns:180px 1fr;gap:2.5rem;align-items:start"><div class="an" style="text-align:center">'+pfp(D_K.foto,D_K.nama,120)+'</div><div><h2 class="font-space an samb-name" style="font-size:1.4rem;font-weight:600;margin-bottom:.15rem">'+esc(D_K.nama)+'</h2><p class="an" style="font-size:.78rem;color:var(--cc);margin-bottom:.2rem">'+esc(D_K.jabatan)+'</p><p class="an" style="font-size:.72rem;color:#777;margin-bottom:1.5rem">Periode '+esc(D_K.periode)+'</p><div class="an" style="position:relative;padding-left:1rem"><span class="qm">\u201C</span><div style="font-size:.88rem;line-height:1.85;white-space:pre-line">'+esc(trm(D_SB))+'</div></div><div class="an" style="margin-top:1.5rem;text-align:right"><p style="font-style:italic;color:#999;font-size:.82rem">'+esc(D_K.ttd)+'</p><div class="gold-line" style="width:140px;margin-left:auto;margin-top:.3rem"></div></div></div></div></div></section>';return h;}

function rStruktur(){
    var h='<div class="sec-div"></div><section class="sec sec-pad" id="sec-2"><div style="max-width:56rem;margin:0 auto"><p class="pi an" style="margin-bottom:.5rem">Struktur Organisasi</p><div class="oh an" style="margin-bottom:2rem"></div><div class="st-grid3 an" style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;justify-items:center;margin-bottom:3rem">';
    var it=[{n:D_K.nama,j:D_K.jabatan,f:D_K.foto},{n:D_ST.wakil,j:'Sekretariat',f:D_ST.fotoWakil},{n:D_ST.sek,j:'Sekretaris',f:D_ST.fotoSek},{n:D_ST.ben,j:'Bendahara',f:D_ST.fotoBen}];
    for(var i=0;i<it.length;i++){
        h+='<div style="text-align:center"><div style="margin-bottom:.7rem">'+pfp(it[i].f,it[i].n,72)+'</div><p style="font-size:.82rem;font-weight:600;margin-bottom:.15rem">'+esc(it[i].n)+'</p><p style="font-size:.65rem;color:var(--cc);letter-spacing:.05em;text-transform:uppercase">'+esc(it[i].j)+'</p></div>';
    }
    h+='</div>';
    h+='<h3 class="font-space an" style="font-size:1rem;font-weight:600;margin-bottom:1.2rem">Koordinator Seksi</h3>';
    h+='<div class="an" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.2rem;justify-items:center;margin-bottom:3rem">';
    for(i=0;i<sK.length;i++){
        var fs=D_ST.fotoS&&D_ST.fotoS[i]?D_ST.fotoS[i]:'';
        h+='<div style="text-align:center"><div style="margin-bottom:.5rem">'+pfp(fs,D_ST.s[i],56)+'</div><p style="font-size:.78rem;font-weight:500;margin-bottom:.1rem">'+esc(D_ST.s[i]||'-')+'</p><p style="font-size:.6rem;color:var(--cc)">'+sL[i]+'</p></div>';
    }
    h+='</div>';
    h+='<h3 class="font-space an" style="font-size:1rem;font-weight:600;margin-bottom:1.2rem">Ketua RT</h3>';
    h+='<div class="an" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:1.2rem;justify-items:center">';
    for(i=0;i<D_ST.r.length;i++){
        var fn=D_ST.fotoR&&D_ST.fotoR[i]?D_ST.fotoR[i]:'';
        h+='<div style="text-align:center"><div style="margin-bottom:.5rem">'+pfp(fn,D_ST.r[i],60)+'</div><p style="font-size:.78rem;font-weight:500;margin-bottom:.1rem">'+esc(D_ST.r[i])+'</p><p style="font-size:.6rem;color:var(--cc)">RT 00'+(i+1)+'</p></div>';
    }
    h+='</div></div></section>';
    return h;
}


function rKegiatan(){
    var h='<div class="sec-div"></div><section class="sec sec-pad" id="sec-3"><div style="max-width:56rem;margin:0 auto"><p class="pi an" style="margin-bottom:.5rem">Kegiatan</p><div class="oh an" style="margin-bottom:1.5rem"></div>';
    // --- INI BAGIAN SEARCH YANG SUDAH BENAR ---
    h+='<div class="an" style="margin-bottom:1.5rem"><input id="searchAct" class="fi" placeholder="Cari kegiatan..." oninput="doSearch(this.value)" style="max-width:320px"></div>';
    h+='<div class="fs an" style="display:flex;gap:.5rem;margin-bottom:2rem;padding-bottom:.5rem" id="catBar"><button class="cfb on" onclick="filtCat(\'\')">Semua</button>';
    for(var i=0;i<sK.length;i++)h+='<button class="cfb" onclick="filtCat(\''+sK[i]+'\')">'+catCf[sK[i]].l+'</button>';
    h+='</div><div class="mg-grid" id="actGrid" style="display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem"></div></div></section>';return h;
}

function rKeuangan(){
    var h='<div class="sec-div"></div><section class="sec sec-pad" id="sec-4"><div style="max-width:56rem;margin:0 auto"><p class="pi an" style="margin-bottom:.5rem">Laporan Keuangan</p><div class="oh an" style="margin-bottom:2rem"></div>';
    var tM=0,tK=0,i;
    for(i=0;i<D_F.masuk.length;i++)tM+=Number(D_F.masuk[i].jml)||0;
    for(i=0;i<D_F.keluar.length;i++)tK+=Number(D_F.keluar[i].jml)||0;
    var sA=D_F.saldoAwal+tM-tK;
    
    // --- RINGKASAN SALDO (SELALU TAMPIL) ---
    h+='<div class="fin-top-grid an" style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-bottom:2rem">';
    h+='<div class="fin-card"><p style="font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:#999;margin-bottom:.3rem">Saldo Awal</p><p class="fin-saldo fin-awal" style="font-size:1.8rem;font-weight:700;font-family:Space Grotesk">'+fmt(D_F.saldoAwal)+'</p></div>';
    h+='<div class="fin-card"><p style="font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:#999;margin-bottom:.3rem">Pemasukan</p><p class="fin-saldo fin-masuk" style="font-size:1.8rem;font-weight:700;font-family:Space Grotesk">+'+fmt(tM)+'</p></div>';
    h+='<div class="fin-card"><p style="font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:#999;margin-bottom:.3rem">Pengeluaran</p><p class="fin-saldo fin-keluar" style="font-size:1.8rem;font-weight:700;font-family:Space Grotesk">-'+fmt(tK)+'</p></div>';
    h+='<div class="fin-card gold-top"><p style="font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:#999;margin-bottom:.3rem">Saldo Akhir</p><p class="fin-saldo fin-akhir" style="font-size:1.8rem;font-weight:700;font-family:Space Grotesk">'+fmt(sA)+'</p></div>';
    h+='</div>';
    
    // --- DROP-DOWN PEMASUKAN ---
    h+='<div class="an" style="margin-top:1rem">';
    h+='<div onclick="toggleFinMasuk()" style="display:flex;justify-content:space-between;align-items:center;padding:.8rem 1rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:.75rem;cursor:pointer;transition:all .3s;margin-bottom:.5rem">';
    h+='<span style="font-size:.85rem;font-weight:500;color:#4ade80">📈 Detail Pemasukan</span>';
    h+='<span id="finMasukIcon" style="font-size:.7rem;color:#888">▶ Klik untuk lihat</span>';
    h+='</div>';
    h+='<div id="finMasukWrap" style="display:none;overflow:hidden;transition:all .4s ease;border:1px solid rgba(255,255,255,.04);border-radius:.75rem;padding:.5rem;margin-top:.2rem">';
    h+='<div class="an fs"><table class="fin-tbl"><thead><tr><th>Tanggal</th><th>Keterangan</th><th>Kategori</th><th class="num">Jumlah</th></tr></thead><tbody>';
    for(i=0;i<D_F.masuk.length;i++){var t=D_F.masuk[i];h+='<tr><td>'+fmtD(t.tgl)+'</td><td>'+esc(t.ket)+'</td><td style="color:#888">'+esc(t.kat)+'</td><td class="num fin-masuk">+'+fmt(t.jml)+'</td></tr>';}
    if(!D_F.masuk.length)h+='<tr><td colspan="4" style="text-align:center;color:#555;padding:2rem">Tidak ada pemasukan</td></tr>';
    h+='</tbody></table></div></div></div>';
    
    // --- DROP-DOWN PENGELUARAN ---
    h+='<div class="an" style="margin-top:1rem">';
    h+='<div onclick="toggleFinKeluar()" style="display:flex;justify-content:space-between;align-items:center;padding:.8rem 1rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:.75rem;cursor:pointer;transition:all .3s;margin-bottom:.5rem">';
    h+='<span style="font-size:.85rem;font-weight:500;color:#f87171">📉 Detail Pengeluaran</span>';
    h+='<span id="finKeluarIcon" style="font-size:.7rem;color:#888">▶ Klik untuk lihat</span>';
    h+='</div>';
    h+='<div id="finKeluarWrap" style="display:none;overflow:hidden;transition:all .4s ease;border:1px solid rgba(255,255,255,.04);border-radius:.75rem;padding:.5rem;margin-top:.2rem">';
    h+='<div class="an fs"><table class="fin-tbl"><thead><tr><th>Tanggal</th><th>Keterangan</th><th>Kategori</th><th class="num">Jumlah</th></tr></thead><tbody>';
    for(i=0;i<D_F.keluar.length;i++){var t2=D_F.keluar[i];h+='<tr><td>'+fmtD(t2.tgl)+'</td><td>'+esc(t2.ket)+'</td><td style="color:#888">'+esc(t2.kat)+'</td><td class="num fin-keluar">-'+fmt(t2.jml)+'</td></tr>';}
    if(!D_F.keluar.length)h+='<tr><td colspan="4" style="text-align:center;color:#555;padding:2rem">Tidak ada pengeluaran</td></tr>';
    h+='</tbody></table></div></div></div>';
    
    // --- GRAFIK (TETAP TAMPIL) ---
    var mx=Math.max(tM,tK,1);
    h+='<div class="an" style="margin-top:2rem"><div style="margin-bottom:.6rem"><div style="display:flex;justify-content:space-between;font-size:.65rem;margin-bottom:.3rem"><span style="color:#4ade80">Pemasukan</span><span class="fin-masuk">'+fmt(tM)+'</span></div><div class="bar-track"><div class="bar-fill" style="width:'+(tM/mx*100)+'%;background:linear-gradient(90deg,#059669,#10b981)"></div></div></div><div><div style="display:flex;justify-content:space-between;font-size:.65rem;margin-bottom:.3rem"><span style="color:#f87171">Pengeluaran</span><span class="fin-keluar">'+fmt(tK)+'</span></div><div class="bar-track"><div class="bar-fill" style="width:'+(tK/mx*100)+'%;background:linear-gradient(90deg,#dc2626,#ef4444)"></div></div></div></div>';
    h+='</div></section>';return h;
}
function rProfil(){var h='<div class="sec-div"></div><section class="sec sec-pad" id="sec-5"><div style="max-width:52rem;margin:0 auto"><p class="pi an" style="margin-bottom:.5rem">Profil & Lokasi</p><div class="oh an" style="margin-bottom:2rem"></div><div class="profil-grid an" style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:start;margin-bottom:3rem"><div style="text-align:center">'+pfp(D_K.foto,D_K.nama,140)+'<h2 class="font-space profil-title" style="font-size:1.8rem;font-weight:700;margin-top:1rem;letter-spacing:-.02em">'+esc(D_K.nama)+'</h2><p style="color:var(--cc);font-size:.82rem;margin-top:.2rem">'+esc(D_K.jabatan)+'</p><p style="color:#777;font-size:.75rem;margin-top:.2rem">Periode '+esc(D_K.periode)+'</p></div><div class="profil-stats" style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem">';var sts=[{v:D_T.rt,l:'RT',i:'solar:buildings-2-bold-duotone'},{v:D_T.pg,l:'Pengurus',i:'solar:users-group-rounded-bold-duotone'},{v:D_T.sk,l:'Seksi',i:'solar:widget-bold-duotone'},{v:D_T.kk,l:'KK',i:'solar:home-smile-bold-duotone'}];for(var i=0;i<sts.length;i++){var s=sts[i];h+='<div class="sc" style="text-align:center"><iconify-icon icon="'+s.i+'" width="28" style="color:var(--cc);margin-bottom:.5rem"></iconify-icon><p class="stat-num" data-target="'+esc(s.v)+'">0</p><p style="font-size:.65rem;color:#777;text-transform:uppercase;letter-spacing:.1em">'+s.l+'</p></div>';}h+='</div></div>';if(D_S.map&&D_S.map.indexOf('iframe')!==-1)h+='<div class="map-wrap an"><div style="position:relative;z-index:2">'+D_S.map+'</div></div>';h+='</div></section>';return h;}

function rGaleri(){
    var h='<div class="sec-div"></div><section class="sec sec-pad" id="sec-7"><div style="max-width:56rem;margin:0 auto"><p class="pi an" style="margin-bottom:.5rem">Galeri Foto</p><div class="oh an" style="margin-bottom:2rem"></div>';
    if(!D_G.length){
        h+='<div class="an" style="text-align:center;padding:3rem 1rem;color:#555"><iconify-icon icon="solar:gallery-bold-duotone" width="48" style="opacity:.3;display:block;margin:0 auto 1rem"></iconify-icon><p style="font-size:.85rem">Belum ada foto</p></div>';
    } else {
        // --- SLIDE SHOW DENGAN ANIMASI GESER KIRI-KANAN ---
        h+='<div id="galeriWrap" class="an" style="position:relative;width:100%;max-width:800px;margin:0 auto;border-radius:1.2rem;overflow:hidden;border:1px solid rgba(255,255,255,.08);box-shadow:0 0 30px rgba(168,85,247,.06)">';
        
        // Wadah slide (transform akan menggeser wadah ini)
        h+='<div id="galeriTrack" style="display:flex;width:100%;transition:transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);">';
        
        // Masukkan semua gambar ke dalam track
        for(var i=0; i<D_G.length; i++){
            var g = D_G[i];
            h+='<div class="slide-item" style="flex:0 0 100%;width:100%;aspect-ratio:16/9;background:#0a0a0a;position:relative;overflow:hidden;">';
            h+='<img src="'+esc(g.url)+'" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy" onerror="this.parentNode.innerHTML=\'<div style=&quot;display:flex;align-items:center;justify-content:center;height:100%;color:#555;font-size:.9rem&quot;>Gagal memuat gambar</div>\'">';
            if(g.caption){
                h+='<div style="position:absolute;bottom:0;left:0;right:0;padding:1.5rem 1rem;background:linear-gradient(transparent,rgba(0,0,0,.8));color:#eee;font-size:.9rem;text-align:center;font-weight:400;">'+esc(g.caption)+'</div>';
            }
			// Tambahkan tombol like
h+='<button class="like-btn" onclick="toggleLike('+i+')" id="like_'+i+'"><iconify-icon icon="solar:heart-linear" width="20" style="color:currentColor"></iconify-icon></button>';
            h+='</div>';
        }
        h+='</div>'; // Tutup galeriTrack
        
        // Tombol Navigasi
        h+='<button onclick="prevSlide()" style="position:absolute;top:50%;left:1rem;transform:translateY(-50%);background:rgba(0,0,0,.5);border:none;color:#fff;font-size:1.8rem;padding:.5rem .8rem;border-radius:50%;cursor:pointer;z-index:2;backdrop-filter:blur(4px);transition:all .3s;">‹</button>';
        h+='<button onclick="nextSlide()" style="position:absolute;top:50%;right:1rem;transform:translateY(-50%);background:rgba(0,0,0,.5);border:none;color:#fff;font-size:1.8rem;padding:.5rem .8rem;border-radius:50%;cursor:pointer;z-index:2;backdrop-filter:blur(4px);transition:all .3s;">›</button>';
        
        // Indikator Titik
        h+='<div id="slideDots" style="position:absolute;bottom:1rem;left:50%;transform:translateX(-50%);display:flex;gap:.5rem;z-index:2;background:rgba(0,0,0,.5);padding:.3rem .8rem;border-radius:9999px;backdrop-filter:blur(4px);">';
        for(var j=0; j<D_G.length; j++){
            h+='<span class="dot '+(j===0?'active':'')+'" onclick="goToSlide('+j+')" style="width:8px;height:8px;border-radius:50%;background:'+(j===0?'#fff':'rgba(255,255,255,.3)')+';cursor:pointer;transition:background .3s;"></span>';
        }
        h+='</div>';
        h+='</div>'; // Tutup galeriWrap
        // --- AKHIR SLIDE ANIMASI ---
    }
    h+='</div></section>';
    return h;
}

function rMading(){var h='<div class="sec-div"></div><section class="sec sec-pad" id="sec-6"><div style="max-width:52rem;margin:0 auto"><p class="pi an" style="margin-bottom:.5rem">Mading Digital</p><div class="oh an" style="margin-bottom:.5rem"></div><p class="an" style="font-size:.82rem;color:#777;margin-bottom:2rem">Pengumuman terkini dari pengurus RW 011</p>';if(!D_M.length){h+='<div class="an" style="text-align:center;padding:3rem 1rem;color:#555"><iconify-icon icon="solar:notebook-bold-duotone" width="48" style="opacity:.3;display:block;margin:0 auto 1rem"></iconify-icon><p style="font-size:.85rem">Belum ada pengumuman</p></div>';}else{h+='<div style="display:flex;flex-direction:column;gap:1rem">';for(var i=D_M.length-1;i>=0;i--){var m=D_M[i];h+='<div class="mading-card an"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:.7rem"><h3 style="font-size:1rem;font-weight:600;color:#fff;flex:1;padding-right:1rem">'+esc(m.judul)+'</h3><span style="font-size:.6rem;color:#666;font-family:Geist Mono,monospace;white-space:nowrap">'+fmtD(m.tgl)+'</span></div><p style="font-size:.85rem;color:#bbb;line-height:1.75;white-space:pre-line">'+esc(trm(m.isi))+'</p><div style="margin-top:.8rem;padding-top:.7rem;border-top:1px solid rgba(255,255,255,.05);display:flex;align-items:center;gap:.4rem"><iconify-icon icon="solar:user-circle-linear" width="14" style="color:#666"></iconify-icon><span style="font-size:.7rem;color:#777">'+esc(m.oleh||'Admin')+'</span></div></div>';}h+='</div>';}h+='</div></section>';return h;}

function rAduan(){
    var h='<div class="sec-div"></div><section class="sec sec-pad" id="sec-8"><div style="max-width:48rem;margin:0 auto"><p class="pi an" style="margin-bottom:.5rem">Aduan Warga</p><div class="oh an" style="margin-bottom:.5rem"></div><p class="an" style="font-size:.9rem;color:#bbb;margin-bottom:2rem">Sampaikan keluhan atau masukan Anda dengan jelas</p><div class="sc an"><div class="fi-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:.8rem">';
	h+='<div><label class="lb" style="font-size:.75rem;font-weight:500;margin-bottom:.5rem">Nama (Opsional)</label><input id="ad_nama" class="fi" style="font-size:.9rem;padding:.8rem 1rem" placeholder="Anonim"></div>';
    h+='<div><label class="lb" style="font-size:.75rem;font-weight:500;margin-bottom:.5rem">Asal RT <span style="color:#ef4444">*</span></label><select id="ad_rt" class="fi" style="font-size:.9rem;padding:.8rem 1rem"><option value="">Pilih RT...</option>';
    var rc=parseInt(D_T.rt)||6;for(var i=1;i<=rc;i++)h+='<option value="RT 00'+i+'">RT 00'+i+'</option>';
    h+='</select></div>';
    h+='<div style="grid-column:span 2"><label class="lb" style="font-size:.75rem;font-weight:500;margin-bottom:.5rem">Isi Aduan <span style="color:#ef4444">*</span></label><textarea id="ad_isi" class="fi" style="min-height:130px;font-size:.9rem;padding:.8rem 1rem;font-family:inherit" placeholder="Tuliskan aduan Anda dengan detail..."></textarea></div>';
    h+='</div><div style="margin-top:1.2rem;display:flex;align-items:center;gap:1rem"><button class="bs" onclick="kirimAduan()" style="padding:.8rem 2rem;font-size:.8rem">Kirim Aduan</button><span id="adStatus" style="font-size:.85rem;color:#4ade80;display:none;font-weight:500">✓ Terkirim</span></div></div>';
    h+='<div style="margin-top:2rem;padding:1rem;border-radius:.75rem;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08)"><p style="font-size:.8rem;color:#999;line-height:1.6"><iconify-icon icon="solar:info-circle-linear" width="16" style="vertical-align:middle;margin-right:.3rem;color:var(--cc)"></iconify-icon>Aduan akan ditindaklanjuti pengurus sesuai prioritas. Data Anda dirahasiakan.</p></div></div></section>';
    return h;
}

function render(){if(_obs){_obs.disconnect();_obs=null;}document.documentElement.scrollTop=0;document.body.scrollTop=0;var p=[];try{p.push(rCover());}catch(e){}try{p.push(rSambutan());}catch(e){}try{p.push(rStruktur());}catch(e){}try{p.push(rKegiatan());}catch(e){}try{p.push(rKeuangan());}catch(e){}try{p.push(rProfil());}catch(e){}try{p.push(rMading());}catch(e){}try{p.push(rGaleri());}catch(e){}try{p.push(rAduan());}catch(e){}document.getElementById('magV').innerHTML=p.join('');try{renderAct();}catch(e){}setTimeout(function(){var c=document.getElementById('sec-0');if(c)c.scrollIntoView({behavior:'instant',block:'start'});setupObs();try{var qrEl=document.getElementById('qrcodeCover');if(qrEl&&qrEl.innerHTML===''){new QRCode(qrEl,{text:window.location.href,width:76,height:76,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.M});}}catch(e){}try{if(typeof _slTimer!=='undefined')clearInterval(_slTimer);var slides=document.querySelectorAll('.sl-slide');if(slides.length>1){var cur=0;_slTimer=setInterval(function(){slides[cur].style.opacity='0';cur=(cur+1)%slides.length;slides[cur].style.opacity='1';},4000);}}catch(e){}},100);}

var _cc='',_sq='';
function filtCat(c){_cc=c;document.querySelectorAll('#catBar .cfb').forEach(function(b){b.classList.remove('on');if((c===''&&b.textContent==='Semua')||b.textContent===catCf[c].l)b.classList.add('on');});renderAct();}
function doSearch(v){_sq=v.toLowerCase().trim();renderAct();}

function renderAct(){
var g=document.getElementById('actGrid');if(!g)return;
var list=_cc?D_A.filter(function(a){return a.category===_cc;}):D_A.slice();
if(_sq){list=list.filter(function(a){return(a.title||'').toLowerCase().indexOf(_sq)!==-1||(a.description||'').toLowerCase().indexOf(_sq)!==-1;});}
list.sort(function(a,b){return b.date.localeCompare(a.date);});
if(!list.length){g.innerHTML='<p style="grid-column:span 2;text-align:center;color:#555;padding:3rem">'+(_sq?'Tidak ditemukan':'Kosong')+'</p>';return;}
var h='';
for(var i=0;i<list.length;i++){
var a=list[i],cf=catCf[a.category]||{l:a.category,c:'#888'};
var mt=a.mediaType||'foto',isVideo=mt!=='foto';
h+='<div class="ac an" style="animation-delay:'+(i*.08)+'s;'+(a.size==='large'?'grid-column:span 2;':'')+'">';
if(isVideo&&a.image){
var embedUrl=getEmbed(a.image,mt),thumbUrl='';
if(mt==='youtube'){var ym=a.image.match(/[?&]v=([^&#]+)/);if(!ym){ym=a.image.match(/youtu\.be\/([^?&#]+)/);}if(!ym){ym=a.image.match(/youtube\.com\/shorts\/([^?&#]+)/);}if(!ym){ym=a.image.match(/youtube\.com\/embed\/([^?&#]+)/);}if(ym){thumbUrl='https://img.youtube.com/vi/'+ym[1]+'/hqdefault.jpg';}}
if(embedUrl){
h+='<div class="vid-lazy" data-embed="'+embedUrl+'" style="width:100%;height:240px;background:#0a0a0a;overflow:hidden;position:relative;cursor:pointer">';
if(thumbUrl){h+='<img src="'+thumbUrl+'" style="width:100%;height:100%;object-fit:cover;opacity:.6" loading="lazy">';}
h+='<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.4rem">';
var pC=mt==='youtube'?'#f00':mt==='tiktok'?'#00f2ea':'#e4405f';
h+='<div style="width:52px;height:52px;border-radius:50%;background:rgba(0,0,0,.6);border:2px solid '+pC+';display:flex;align-items:center;justify-content:center"><iconify-icon icon="solar:play-bold" width="20" style="color:'+pC+';margin-left:2px"></iconify-icon></div>';
var mTL=mt==='youtube'?'YouTube':mt==='tiktok'?'TikTok':'Instagram';
h+='<span style="font-size:.6rem;color:#999;letter-spacing:.1em;text-transform:uppercase">'+mTL+'</span>';
h+='</div></div>';
}else{h+='<div style="width:100%;height:240px;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.5rem"><iconify-icon icon="solar:play-circle-bold-duotone" width="48" style="color:#444"></iconify-icon><a href="'+esc(a.image)+'" target="_blank" style="color:var(--cc);font-size:.75rem">Tonton di sini →</a></div>';}
}else{
var img=a.image&&a.image.indexOf('http')===0?a.image:'https://picsum.photos/seed/'+a.id+'/600/400.jpg';
h+='<div style="aspect-ratio:16/10;overflow:hidden;background:#111"><img src="'+img+'" style="width:100%;height:100%;object-fit:cover" onclick="openLb(\''+img+'\')" onerror="this.style.display=\'none\'"></div>';
}
h+='<div style="padding:1.2rem">';
h+='<div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.6rem;flex-wrap:wrap">';
h+='<span style="font-size:.55rem;letter-spacing:.1em;text-transform:uppercase;padding:.2rem .5rem;border-radius:9999px;background:'+cf.c+'22;color:'+cf.c+';border:1px solid '+cf.c+'33;font-weight:600">'+cf.l+'</span>';
if(isVideo){var mTL2=mt==='youtube'?'YouTube':mt==='tiktok'?'TikTok':'Instagram';h+='<span style="display:inline-flex;align-items:center;gap:.3rem;font-size:.55rem;letter-spacing:.1em;text-transform:uppercase;padding:.2rem .5rem;border-radius:9999px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);font-weight:600">'+getMediaIcon(mt)+' '+mTL2+'</span>';}
h+='<span style="font-size:.6rem;color:#666;font-family:Geist Mono,monospace">'+fmtD(a.date)+'</span>';
h+='</div>';
h+='<h3 style="font-size:.95rem;font-weight:600;color:#fff;margin-bottom:.4rem;line-height:1.3">'+esc(a.title)+'</h3>';
h+='<p style="font-size:.78rem;color:#999;line-height:1.6">'+esc(trm(a.description))+'</p>';
h+='</div></div>';
}
g.innerHTML=h;
initLazyVideo();
}

function initLazyVideo(){
var vids=document.querySelectorAll('.vid-lazy');if(!vids.length)return;
var obs=new IntersectionObserver(function(entries){
entries.forEach(function(entry){
if(entry.isIntersecting){
var el=entry.target,url=el.getAttribute('data-embed');
if(url){el.innerHTML='<iframe src="'+url+'" style="width:100%;height:100%;border:0;position:absolute;top:0;left:0" allow="autoplay;encrypted-media" allowfullscreen></iframe>';el.style.position='relative';}
obs.unobserve(el);
}
});
},{rootMargin:'200px'});
vids.forEach(function(v){obs.observe(v);});
}

function animNum(){var els=document.querySelectorAll('.stat-num[data-target]');els.forEach(function(el){var target=parseInt(el.getAttribute('data-target'))||0;if(isNaN(target)||target<=0){el.textContent=target||'0';return;}var start=0,dur=1200,step=Math.ceil(target/(dur/16));function tick(){start+=step;if(start>=target){el.textContent=target;return;}el.textContent=start;requestAnimationFrame(tick);}tick();});}

var _obs=null;
function setupObs(){
var els=document.querySelectorAll('.an');
if(!els.length)return;
_obs=new IntersectionObserver(function(entries){
entries.forEach(function(entry){
if(entry.isIntersecting){
entry.target.classList.add('av');
if(entry.target.querySelector('.stat-num'))animNum();
_obs.unobserve(entry.target);
}
});
},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
els.forEach(function(el){_obs.observe(el);});
}

/* ===== ADUAN ===== */

function kirimAduan(){
var n=document.getElementById('ad_nama').value.trim();
var r=document.getElementById('ad_rt').value;
var isi=trm(document.getElementById('ad_isi').value);
if(!n||!r||!isi){toast('Lengkapi semua field',1);return;}
var adData={
  id:'ad'+Date.now(),
  nama:n,
  rt:r,
  isi:isi,
  tgl:new Date().toISOString().slice(0,10),
  status:'baru',
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
};
D_AD.push(adData);
try{localStorage.setItem('rw_aduan',JSON.stringify(D_AD));}catch(e){}
try{
  db.collection('magazine').doc('data').collection('aduan').doc(adData.id).set(adData)
  .then(function(){toast('Aduan terkirim ke database!');})
  .catch(function(err){toast('Gagal kirim: '+err.message,1);});
}catch(e){toast('Aduan tersimpan lokal',1);}
document.getElementById('ad_nama').value='';
document.getElementById('ad_rt').value='';
document.getElementById('ad_isi').value='';
var st=document.getElementById('adStatus');
if(st){st.style.display='inline';setTimeout(function(){st.style.display='none';},4000);}
}

function fwdAduan(type,id){
  var a=null;
  for(var i=0;i<D_AD.length;i++){if(D_AD[i].id===id){a=D_AD[i];break;}}
  if(!a)return;
  var txt='[ADUAN WARGA RW 011]\n\nNama: '+a.nama+'\nRT: '+a.rt+'\nTanggal: '+fmtD(a.tgl)+'\nStatus: '+(a.status||'Baru')+'\n\n'+a.isi;
  if(type==='wa'){
    var ph=D_S.wa?D_S.wa.replace(/[^0-9]/g,''):'';
    var url=ph?'https://wa.me/'+ph+'?text='+encodeURIComponent(txt):'https://wa.me/?text='+encodeURIComponent(txt);
    window.open(url,'_blank');
  }else if(type==='tg'){
    var tgLink=D_S.tg_group||'';
    if(tgLink&&tgLink.indexOf('http')===0){
      window.open(tgLink,'_blank');
      try{navigator.clipboard.writeText(txt);toast('Teks aduan disalin ke clipboard');}catch(e){}
    }else{
      try{navigator.clipboard.writeText(txt);toast('Teks aduan disalin ke clipboard. Paste ke grup Telegram.');}catch(e){toast('Copy manual teks aduan dari console');console.log(txt);}
    }
  }
}

function hapusAduan(id){
  if(!confirm('Hapus aduan ini?'))return;
  D_AD=D_AD.filter(function(a){return a.id!==id;});
  try{localStorage.setItem('rw_aduan',JSON.stringify(D_AD));}catch(e){}
  try{db.collection('magazine').doc('data').collection('aduan').doc(id).delete().catch(function(){});}catch(e){}
  renderAdminAduan();
  toast('Aduan dihapus');
}

function updateAduanStatus(id,status){
  for(var i=0;i<D_AD.length;i++){
    if(D_AD[i].id===id){D_AD[i].status=status;break;}
  }
  try{localStorage.setItem('rw_aduan',JSON.stringify(D_AD));}catch(e){}
  try{db.collection('magazine').doc('data').collection('aduan').doc(id).update({status:status}).catch(function(){});}catch(e){}
  renderAdminAduan();
  toast('Status diupdate: '+status);
}

/* ===== ADMIN: RENDER ADUAN (TANPA WA & TELEGRAM) ===== */
function renderAdminAduan(){
  var container=document.getElementById('adList');
  var cntEl=document.getElementById('adCnt');
  if(!container)return;
  if(cntEl)cntEl.textContent=D_AD.length;
  if(!D_AD.length){
    container.innerHTML='<p style="text-align:center;color:#666;padding:2rem 0">Belum ada aduan masuk.</p>';
    return;
  }
  var sorted=D_AD.slice().sort(function(a,b){return(b.tgl||'').localeCompare(a.tgl||'');});
  var h='<div style="display:flex;flex-direction:column;gap:.8rem">';
  for(var i=0;i<sorted.length;i++){
    var a=sorted[i];
    var sc=a.status==='diproses'?'#f59e0b':a.status==='selesai'?'#22c55e':'#ef4444';
    var sl=a.status==='diproses'?'Diproses':a.status==='selesai'?'Selesai':'Baru';
    h+='<div style="padding:1rem;border-radius:.75rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);border-left:3px solid '+sc+'">';
    h+='<div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:.6rem">';
    h+='<div><span style="font-size:.85rem;font-weight:600;color:#fff">'+esc(a.nama)+'</span> <span style="font-size:.7rem;color:#777">'+esc(a.rt)+'</span></div>';
    h+='<div style="display:flex;align-items:center;gap:.5rem"><span style="font-size:.55rem;padding:.15rem .5rem;border-radius:9999px;background:'+sc+'22;color:'+sc+';border:1px solid '+sc+'33;font-weight:600;letter-spacing:.05em;text-transform:uppercase">'+sl+'</span><span style="font-size:.6rem;color:#555;font-family:Geist Mono,monospace">'+fmtD(a.tgl)+'</span></div>';
    h+='</div>';
    h+='<p style="font-size:.82rem;color:#bbb;line-height:1.7;white-space:pre-line;margin-bottom:.8rem">'+esc(trm(a.isi))+'</p>';
    h+='<div style="display:flex;gap:.4rem;flex-wrap:wrap">';
    h+='<button onclick="updateAduanStatus(\''+a.id+'\',\'diproses\')" style="padding:.3rem .6rem;border-radius:.5rem;font-size:.6rem;background:rgba(245,158,11,.1);color:#f59e0b;border:1px solid rgba(245,158,11,.2);cursor:pointer">Diproses</button>';
    h+='<button onclick="updateAduanStatus(\''+a.id+'\',\'selesai\')" style="padding:.3rem .6rem;border-radius:.5rem;font-size:.6rem;background:rgba(34,197,94,.1);color:#22c55e;border:1px solid rgba(34,197,94,.2);cursor:pointer">Selesai</button>';
    h+='<button onclick="hapusAduan(\''+a.id+'\')" style="padding:.3rem .6rem;border-radius:.5rem;font-size:.6rem;background:rgba(239,68,68,.08);color:#f87171;border:1px solid rgba(239,68,68,.15);cursor:pointer;margin-left:auto">Hapus</button>';
    h+='</div></div>';
  }
  h+='</div>';
  container.innerHTML=h;
}

/* ===== REALTIME LISTENER ===== */
var _aduanUnsub=null;
function loadAduanFromDB(){
  if(_aduanUnsub){_aduanUnsub();}
  try{
    _aduanUnsub=db.collection('magazine').doc('data').collection('aduan')
    .orderBy('timestamp','desc')
    .onSnapshot(function(snapshot){
      var badge=document.getElementById('adSyncBadge');
      if(badge)badge.style.display='inline';
      showSyncStatus(true);
      snapshot.docChanges().forEach(function(change){
        var d=change.doc.data();
        if(change.type==='added'){
          var exists=D_AD.some(function(a){return a.id===d.id;});
          if(!exists){D_AD.push(d);}
        }else if(change.type==='modified'){
          for(var i=0;i<D_AD.length;i++){
            if(D_AD[i].id===d.id){D_AD[i]=d;break;}
          }
        }else if(change.type==='removed'){
          D_AD=D_AD.filter(function(a){return a.id!==d.id;});
        }
      });
      try{localStorage.setItem('rw_aduan',JSON.stringify(D_AD));}catch(e){}
      renderAdminAduan();
    },function(err){
      console.error('Aduan listener error:',err);
      showSyncStatus(false);
      renderAdminAduan();
    });
  }catch(e){
    console.warn('loadAduanFromDB fallback:',e);
    renderAdminAduan();
  }
}

/* ===== ADMIN: NAVIGASI SEKSI ===== */
function sSec(id,el){
  document.querySelectorAll('.asec').forEach(function(s){s.style.display='none';});
  var target=document.getElementById('as-'+id);
  if(target)target.style.display='block';
  document.querySelectorAll('.sl').forEach(function(s){s.classList.remove('on');});
  if(el)el.classList.add('on');
  var sel=document.getElementById('mNav');
  if(sel)sel.value=id;
  if(id==='settings')popSet();
  if(id==='ketua')popKet();
  if(id==='sambutan')popSb();
  if(id==='struktur')popStr();
  if(id==='kegiatan')popAct();
  if(id==='keuangan')popFin();
  if(id==='mading')popMd();
  if(id==='galeri')popGl();
  if(id==='aduan'){loadAduanFromDB();}
  if(id==='tampilan')popTampilan();
}

function popSet(){
  var f=function(iid,val){var el=document.getElementById(iid);if(el)el.value=val||'';};
  f('s_logo',D_S.logo);f('s_namaRw',D_S.namaRw);f('s_alamat',D_S.alamat);f('s_edisi',D_S.edisi);f('s_tanggal',D_S.tanggal);f('s_deskripsi',D_S.deskripsi);
  f('s_wa',D_S.wa);f('s_ig',D_S.ig);f('s_email',D_S.email);f('s_map',D_S.map);f('s_wa_group',D_S.wa_group);f('s_tg_group',D_S.tg_group);
  // Di dalam popSet(), ganti bagian slList:
var slC = document.getElementById('slList');
if(slC) {
    var h = '';
    // Gunakan D_SL langsung (tidak perlu localStorage)
    for(var i=0; i<D_SL.length; i++) {
        h += '<div style="position:relative;border-radius:.5rem;overflow:hidden;aspect-ratio:16/10;background:#111">';
        h += '<img src="'+esc(D_SL[i])+'" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display=\'none\'">';
        h += '<button onclick="rmSl('+i+')" style="position:absolute;top:.3rem;right:.3rem;width:20px;height:20px;border-radius:50%;background:rgba(0,0,0,.7);border:none;color:#f87171;font-size:.7rem;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button>';
        h += '</div>';
    }
    slC.innerHTML = h;
}
function popKet(){var f=function(iid,val){var el=document.getElementById(iid);if(el)el.value=val||'';};f('k_foto',D_K.foto);f('k_nama',D_K.nama);f('k_jabatan',D_K.jabatan);f('k_periode',D_K.periode);f('k_ttd',D_K.ttd);}
function popSb(){var el=document.getElementById('sb_teks');if(el)el.value=D_SB||'';}
function popStr(){var f=function(iid,val){var el=document.getElementById(iid);if(el)el.value=val||'';};f('st_wakil',D_ST.wakil);f('st_fw',D_ST.fotoWakil);f('st_sek',D_ST.sek);f('st_fse',D_ST.fotoSek);f('st_ben',D_ST.ben);f('st_fbe',D_ST.fotoBen);for(var i=0;i<12;i++){f('st_s'+(i+1),D_ST.s[i]||'');f('st_fs'+(i+1),D_ST.fotoS&&D_ST.fotoS[i]?D_ST.fotoS[i]:'');}for(i=0;i<6;i++){f('st_r'+(i+1),D_ST.r[i]||'');f('st_fr'+(i+1),D_ST.fotoR&&D_ST.fotoR[i]?D_ST.fotoR[i]:'');}}
function popAct(){renderAdminAct();}
function popFin(){
    document.getElementById('fe_sawal').value=D_F.saldoAwal||0;
    renderAdminFin();
    // Tambahkan tombol cetak PDF di bawah form input saldo
    var parent = document.getElementById('fe_sawal').parentNode.parentNode;
    if(parent) {
        parent.innerHTML += '<div style="margin-top:1.2rem;display:flex;gap:.8rem;flex-wrap:wrap">' +
            '<button onclick="cetakKeuanganPDF()" style="padding:.6rem 1.5rem;border-radius:.75rem;font-size:.7rem;background:rgba(99,102,241,.1);color:#818cf8;border:1px solid rgba(99,102,241,.2);cursor:pointer;transition:all .3s">📄 Cetak Laporan PDF</button>' +
            '</div>';
    }
}
function popMd(){renderAdminMd();}
function popGl(){renderAdminGl();}
function popTampilan(){var el=document.getElementById('tp_color');if(el)el.value=D_T.color||'purple';var f=function(iid,val){var e=document.getElementById(iid);if(e)e.value=val||'';};f('tp_rt',D_T.rt);f('tp_pg',D_T.pg);f('tp_sk',D_T.sk);f('tp_kk',D_T.kk);}

/* ===== ADMIN: RENDER LIST ===== */
function renderAdminAct(){
  var el=document.getElementById('actList'),cnt=document.getElementById('actCnt');
  if(cnt)cnt.textContent=D_A.length;
  if(!el)return;
  if(!D_A.length){el.innerHTML='<p style="text-align:center;color:#666;padding:1.5rem 0">Kosong</p>';return;}
  var h='';
  for(var i=0;i<D_A.length;i++){
    var a=D_A[i],cf=catCf[a.category]||{l:a.category,c:'#888'};
    h+='<div style="display:flex;align-items:center;gap:.8rem;padding:.7rem;border-radius:.6rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.04);margin-bottom:.5rem">';
    if(a.image&&a.image.indexOf('http')===0)h+='<div style="width:48px;height:36px;border-radius:.3rem;overflow:hidden;flex-shrink:0;background:#111"><img src="'+esc(a.image)+'" style="width:100%;height:100%;object-fit:cover"></div>';
    h+='<div style="flex:1;min-width:0"><p style="font-size:.78rem;font-weight:500;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+esc(a.title)+'</p><p style="font-size:.6rem;color:#666"><span style="color:'+cf.c+'">'+cf.l+'</span> · '+fmtD(a.date)+'</p></div>';
    h+='<button onclick="editAct('+i+')" style="padding:.3rem .5rem;border-radius:.4rem;font-size:.6rem;background:rgba(99,102,241,.1);color:#818cf8;border:1px solid rgba(99,102,241,.2);cursor:pointer">Edit</button>';
    h+='<button onclick="delAct('+i+')" style="padding:.3rem .5rem;border-radius:.4rem;font-size:.6rem;background:rgba(239,68,68,.08);color:#f87171;border:1px solid rgba(239,68,68,.15);cursor:pointer">×</button>';
    h+='</div>';
  }
  el.innerHTML=h;
}

function renderAdminFin(){
  var el=document.getElementById('finList'),cnt=document.getElementById('finCnt');
  var total=D_F.masuk.length+D_F.keluar.length;
  if(cnt)cnt.textContent=total;
  if(!el)return;
  if(!total){el.innerHTML='<p style="text-align:center;color:#666;padding:1.5rem 0">Kosong</p>';return;}
  var all=[];
  for(var i=0;i<D_F.masuk.length;i++){var t=D_F.masuk[i];all.push({tgl:t.tgl,ket:t.ket,kat:t.kat||'',jml:t.jml,tp:'m'});}
  for(i=0;i<D_F.keluar.length;i++){var t2=D_F.keluar[i];all.push({tgl:t2.tgl,ket:t2.ket,kat:t2.kat||'',jml:t2.jml,tp:'k'});}
  all.sort(function(a,b){return b.tgl.localeCompare(a.tgl);});
  var h='';
  for(i=0;i<all.length;i++){
    var tx=all[i],cl=tx.tp==='m'?'color:#4ade80':'color:#f87171',sg=tx.tp==='m'?'+':'-';
    var idx=tx.tp==='m'?D_F.masuk.indexOf(D_F.masuk.filter(function(x){return x.tgl===tx.tgl&&x.ket===tx.ket&&x.jml===tx.jml;})[0]):D_F.keluar.indexOf(D_F.keluar.filter(function(x){return x.tgl===tx.tgl&&x.ket===tx.ket&&x.jml===tx.jml;})[0]);
    h+='<div style="display:flex;align-items:center;gap:.8rem;padding:.5rem .7rem;border-radius:.5rem;background:rgba(255,255,255,.015);border:1px solid rgba(255,255,255,.03);margin-bottom:.4rem">';
    h+='<div style="flex:1;min-width:0"><p style="font-size:.75rem;color:#ddd;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+esc(tx.ket)+'</p><p style="font-size:.58rem;color:#666">'+fmtD(tx.tgl)+(tx.kat?' · '+esc(tx.kat):'')+'</p></div>';
    h+='<span style="font-size:.78rem;font-weight:600;font-family:Geist Mono,monospace;'+cl+'">'+sg+fmt(tx.jml)+'</span>';
    h+='<button onclick="delFin(\''+tx.tp+'\','+idx+')" style="padding:.2rem .4rem;border-radius:.3rem;font-size:.6rem;background:rgba(239,68,68,.08);color:#f87171;border:1px solid rgba(239,68,68,.15);cursor:pointer">×</button>';
    h+='</div>';
  }
  el.innerHTML=h;
}

function renderAdminMd(){
  var el=document.getElementById('mdList'),cnt=document.getElementById('mdCnt');
  if(cnt)cnt.textContent=D_M.length;
  if(!el)return;
  if(!D_M.length){el.innerHTML='<p style="text-align:center;color:#666;padding:1.5rem 0">Kosong</p>';return;}
  var h='';
  for(var i=D_M.length-1;i>=0;i--){
    var m=D_M[i];
    h+='<div style="padding:.8rem;border-radius:.6rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.04);margin-bottom:.5rem">';
    h+='<div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:.4rem"><p style="font-size:.82rem;font-weight:500;color:#fff;flex:1">'+esc(m.judul)+'</p><span style="font-size:.58rem;color:#555;font-family:Geist Mono,monospace">'+fmtD(m.tgl)+'</span></div>';
    h+='<p style="font-size:.72rem;color:#999;line-height:1.6;white-space:pre-line;margin-bottom:.5rem;max-height:60px;overflow:hidden">'+esc(trm(m.isi))+'</p>';
    h+='<div style="display:flex;gap:.4rem"><button onclick="editMd('+i+')" style="padding:.2rem .5rem;border-radius:.4rem;font-size:.6rem;background:rgba(99,102,241,.1);color:#818cf8;border:1px solid rgba(99,102,241,.2);cursor:pointer">Edit</button><button onclick="delMd('+i+')" style="padding:.2rem .5rem;border-radius:.4rem;font-size:.6rem;background:rgba(239,68,68,.08);color:#f87171;border:1px solid rgba(239,68,68,.15);cursor:pointer">Hapus</button></div>';
    h+='</div>';
  }
  el.innerHTML=h;
}

function renderAdminGl(){
  var el=document.getElementById('glList'),cnt=document.getElementById('glCnt');
  if(cnt)cnt.textContent=D_G.length;
  if(!el)return;
  if(!D_G.length){el.innerHTML='<p style="grid-column:span 3;text-align:center;color:#666;padding:1.5rem 0">Kosong</p>';return;}
  var h='';
  for(var i=0;i<D_G.length;i++){
    h+='<div style="position:relative;border-radius:.5rem;overflow:hidden;aspect-ratio:1;background:#111"><img src="'+esc(D_G[i].url)+'" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display=\'none\'"><button onclick="delGal('+i+')" style="position:absolute;top:.3rem;right:.3rem;width:22px;height:22px;border-radius:50%;background:rgba(0,0,0,.7);border:none;color:#f87171;font-size:.8rem;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button>'+(D_G[i].caption?'<div style="position:absolute;bottom:0;left:0;right:0;padding:.3rem;background:linear-gradient(transparent,rgba(0,0,0,.7));font-size:.55rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+esc(D_G[i].caption)+'</div>':'')+'</div>';
  }
  el.innerHTML=h;
}

/* ===== ADMIN: SAVE FUNCTIONS ===== */
function svSet(){
  var g=function(iid){var el=document.getElementById(iid);return el?el.value.trim():'';};
  D_S.logo=g('s_logo');D_S.namaRw=g('s_namaRw');D_S.alamat=g('s_alamat');D_S.edisi=g('s_edisi');D_S.tanggal=g('s_tanggal');D_S.deskripsi=g('s_deskripsi');
  D_S.wa=g('s_wa');D_S.ig=g('s_ig');D_S.email=g('s_email');D_S.map=g('s_map');D_S.wa_group=g('s_wa_group');D_S.tg_group=g('s_tg_group');
  saveToFirebase();toast('Pengaturan disimpan');
}
function svKet(){
  var g=function(iid){var el=document.getElementById(iid);return el?el.value.trim():'';};
  D_K.foto=g('k_foto');D_K.nama=g('k_nama');D_K.jabatan=g('k_jabatan');D_K.periode=g('k_periode');D_K.ttd=g('k_ttd');
  saveToFirebase();toast('Data Ketua disimpan');
}
function svSb(){
  var el=document.getElementById('sb_teks');
  D_SB=el?el.value:'';
  saveToFirebase();toast('Sambutan disimpan');
}
function svStr(){
  var g=function(iid){var el=document.getElementById(iid);return el?el.value.trim():'';};
  D_ST.wakil=g('st_wakil');D_ST.fotoWakil=g('st_fw');D_ST.sek=g('st_sek');D_ST.fotoSek=g('st_fse');D_ST.ben=g('st_ben');D_ST.fotoBen=g('st_fbe');
  D_ST.s=[];D_ST.fotoS=[];for(var i=1;i<=12;i++){D_ST.s.push(g('st_s'+i));D_ST.fotoS.push(g('st_fs'+i));}
  D_ST.r=[];D_ST.fotoR=[];for(i=1;i<=6;i++){D_ST.r.push(g('st_r'+i));D_ST.fotoR.push(g('st_fr'+i));}
  saveToFirebase();toast('Struktur disimpan');
}
function svAct(){
  var g=function(iid){var el=document.getElementById(iid);return el?el.value.trim():'';};
  var title=g('ae_title'),desc=g('ae_desc'),cat=g('ae_cat'),date=g('ae_date'),size=g('ae_size'),mt=g('ae_mediaType'),media=g('ae_media'),editId=g('ae_id');
  if(!title||!desc||!cat||!date){toast('Lengkapi field bertanda *',1);return;}
  if(editId){
    for(var i=0;i<D_A.length;i++){if(D_A[i].id===editId){D_A[i].title=title;D_A[i].description=desc;D_A[i].category=cat;D_A[i].date=date;D_A[i].size=size;D_A[i].mediaType=mt;D_A[i].image=media;break;}}
    toast('Kegiatan diupdate');
  }else{
    D_A.push({id:'ac'+Date.now(),title:title,description:desc,category:cat,date:date,size:size,mediaType:mt,image:media});
    toast('Kegiatan ditambahkan');
  }
  rsAF();saveToFirebase();renderAdminAct();
}
function rsAF(){
  var ids=['ae_id','ae_title','ae_desc','ae_cat','ae_date','ae_media'];
  ids.forEach(function(iid){var el=document.getElementById(iid);if(el)el.value='';});
  var sz=document.getElementById('ae_size');if(sz)sz.value='normal';
  var mt=document.getElementById('ae_mediaType');if(mt)mt.value='foto';
  toggleMediaField();
}
function editAct(idx){
  var a=D_A[idx];if(!a)return;
  var s=function(iid,val){var el=document.getElementById(iid);if(el)el.value=val||'';};
  s('ae_id',a.id);s('ae_title',a.title);s('ae_desc',a.description);s('ae_cat',a.category);s('ae_date',a.date);s('ae_size',a.size||'normal');s('ae_mediaType',a.mediaType||'foto');s('ae_media',a.image);
  toggleMediaField();
  window.scrollTo({top:0,behavior:'smooth'});
}
function delAct(idx){if(!confirm('Hapus kegiatan ini?'))return;D_A.splice(idx,1);saveToFirebase();renderAdminAct();toast('Dihapus');}

function svSal(){D_F.saldoAwal=Number(document.getElementById('fe_sawal').value)||0;saveToFirebase();toast('Saldo awal disimpan');}
function svMas(){
  var g=function(iid){var el=document.getElementById(iid);return el?el.value.trim():'';};
  var ket=g('fe_mk'),jml=g('fe_jm'),tgl=g('fe_tgl'),kat=g('fe_kat_m'),ctt=g('fe_ctt');
  if(!ket||!jml||!tgl){toast('Lengkapi field bertanda *',1);return;}
  D_F.masuk.push({ket:ket,jml:Number(jml),tgl:tgl,kat:kat,ctt:ctt});
  document.getElementById('fe_mk').value='';document.getElementById('fe_jm').value='';document.getElementById('fe_tgl').value='';document.getElementById('fe_ctt').value='';
  saveToFirebase();renderAdminFin();toast('Pemasukan ditambahkan');
}
function svKel(){
  var g=function(iid){var el=document.getElementById(iid);return el?el.value.trim():'';};
  var ket=g('fe_kk'),jml=g('fe_jk'),tgl=g('fe_tk'),kat=g('fe_kat_k'),ctt=g('fe_ctk');
  if(!ket||!jml||!tgl){toast('Lengkapi field bertanda *',1);return;}
  D_F.keluar.push({ket:ket,jml:Number(jml),tgl:tgl,kat:kat,ctt:ctt});
  document.getElementById('fe_kk').value='';document.getElementById('fe_jk').value='';document.getElementById('fe_tk').value='';document.getElementById('fe_ctk').value='';
  saveToFirebase();renderAdminFin();toast('Pengeluaran ditambahkan');
}
function delFin(tp,idx){
  if(!confirm('Hapus transaksi ini?'))return;
  if(tp==='m')D_F.masuk.splice(idx,1);else D_F.keluar.splice(idx,1);
  saveToFirebase();renderAdminFin();toast('Dihapus');
}

function svMading(){
  var g=function(iid){var el=document.getElementById(iid);return el?el.value.trim():'';};
  var judul=g('md_judul'),isi=g('md_isi'),oleh=g('md_oleh'),editId=g('md_id');
  if(!judul||!isi){toast('Lengkapi field bertanda *',1);return;}
  if(editId){
    for(var i=0;i<D_M.length;i++){if(D_M[i].id===editId){D_M[i].judul=judul;D_M[i].isi=isi;D_M[i].oleh=oleh;break;}}
    toast('Pengumuman diupdate');
  }else{
    D_M.push({id:'md'+Date.now(),judul:judul,isi:isi,oleh:oleh||'Admin RW 011',tgl:new Date().toISOString().slice(0,10)});
    toast('Pengumuman ditambahkan');
  }
  document.getElementById('md_judul').value='';document.getElementById('md_isi').value='';document.getElementById('md_id').value='';
  saveToFirebase();renderAdminMd();
}
function editMd(idx){
  var m=D_M[idx];if(!m)return;
  var s=function(iid,val){var el=document.getElementById(iid);if(el)el.value=val||'';};
  s('md_id',m.id);s('md_judul',m.judul);s('md_isi',m.isi);s('md_oleh',m.oleh);
  window.scrollTo({top:0,behavior:'smooth'});
}
function delMd(idx){if(!confirm('Hapus pengumuman ini?'))return;D_M.splice(idx,1);saveToFirebase();renderAdminMd();toast('Dihapus');}

function svGal(){
  var url=document.getElementById('gl_url').value.trim();
  var cap=document.getElementById('gl_cap').value.trim();
  if(!url){toast('URL foto wajib diisi',1);return;}
  D_G.push({url:url,caption:cap});
  document.getElementById('gl_url').value='';document.getElementById('gl_cap').value='';
  saveToFirebase();renderAdminGl();toast('Foto ditambahkan');
}
function delGal(idx){if(!confirm('Hapus foto ini?'))return;D_G.splice(idx,1);saveToFirebase();renderAdminGl();toast('Dihapus');}

function svSl(){
  var url=document.getElementById('sl_url').value.trim();
  if(!url){toast('URL gambar wajib diisi',1);return;}
  D_SL.push(url);document.getElementById('sl_url').value='';
  saveToFirebase();popSet();toast('Slideshow ditambahkan');
}
function rmSl(idx){if(!confirm('Hapus gambar ini?'))return;D_SL.splice(idx,1);saveToFirebase();popSet();toast('Dihapus');}

/* ===== FIREBASE SYNC ===== */
function saveToFirebase(){
  try{
    var payload={s:D_S,k:D_K,sb:D_SB,st:D_ST,a:D_A,t:D_T,f:D_F,mading:D_M,galeri:D_G,slideshow:D_SL};
    db.collection('magazine').doc('data').set(payload,{merge:true}).catch(function(err){console.error('Save error:',err);});
  }catch(e){}
}

/* ===== MUAT SEMUA DATA DARI FIRESTORE (CLOUD) ===== */
function loadFromFirebase() {
    try {
        db.collection('magazine').doc('data').get().then(function(doc) {
            if(!doc.exists) {
                // Jika belum ada data di cloud, pakai data default
                render();
                return;
            }
            
            var d = doc.data();
            
            // Isi data dari cloud ke variabel global
            if(d.s) Object.keys(d.s).forEach(function(k){ D_S[k] = d.s[k]; });
            if(d.k) Object.keys(d.k).forEach(function(k){ D_K[k] = d.k[k]; });
            if(d.sb !== undefined) D_SB = d.sb;
            if(d.st) Object.keys(d.st).forEach(function(k){ D_ST[k] = d.st[k]; });
            if(d.a) D_A = d.a;
            if(d.t) Object.keys(d.t).forEach(function(k){ D_T[k] = d.t[k]; });
            if(d.f) Object.keys(d.f).forEach(function(k){ D_F[k] = d.f[k]; });
            if(d.mading) D_M = d.mading;
            if(d.galeri) D_G = d.galeri;
            if(d.slideshow) D_SL = d.slideshow; // SLIDE COVER DARI CLOUD
            
            // Tampilkan halaman dengan data yang sudah dimuat
            showSyncStatus(true);
            render();
            
            console.log('✅ Data berhasil dimuat dari cloud!');
            
        }).catch(function(err) {
            console.error('❌ Gagal memuat dari cloud:', err);
            showSyncStatus(false);
            render(); // Tetap render meskipun gagal
        });
    } catch(e) {
        console.warn('Load error:', e);
        render();
    }
}

/* ===== EXPORT ===== */
function expData(){
  var data='var EXT_DATA='+JSON.stringify({s:D_S,k:D_K,sb:D_SB,st:D_ST,a:D_A,t:D_T,f:D_F,mading:D_M,galeri:D_G,slideshow:D_SL},null,2)+';';
  var blob=new Blob([data],{type:'application/javascript'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a');a.href=url;a.download='data.js';a.click();
  URL.revokeObjectURL(url);
  toast('data.js berhasil di-export!');
}

/* ===== AUTH ===== */
function doLogout(){
  if(confirm('Logout dari panel admin?')){
    try{firebase.auth().signOut();}catch(e){}
    window.location.href=window.location.pathname;
  }
}

/* ===== LIGHTBOX ===== */
function openLb(src){
  var lb=document.getElementById('lb');if(!lb)return;
  lb.innerHTML='<div style="position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.95);display:flex;align-items:center;justify-content:center;cursor:zoom-out;padding:2rem" onclick="closeLb()"><img src="'+esc(src)+'" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:.5rem"></div>';
  lb.style.display='block';
}
function closeLb(){var lb=document.getElementById('lb');if(lb){lb.innerHTML='';lb.style.display='none';}}

// --- BAGIAN PENUTUP YANG SUDAH DIPERBAIKI ---
// Tampilkan halaman duluan, jangan nunggu Firebase
// Tampilkan halaman duluan, jangan nunggu Firebase
setTimeout(function(){
    try{ 
        render(); 
        // Restore status like saat halaman dimuat
        try{ restoreLikes(); }catch(e){} 
    }catch(e){}
}, 100);

// Ambil data dari Firebase di belakang layar
try{
    if(typeof coverSlideTimer !== 'undefined') clearInterval(coverSlideTimer);
    var slides = document.querySelectorAll('.sl-slide');
    if(slides.length > 1){
        var cur = 0;
        coverSlideTimer = setInterval(function(){
            slides[cur].style.opacity = '0';
            cur = (cur + 1) % slides.length;
            slides[cur].style.opacity = '1';
        }, 4000);
    }
}catch(e){}

/* ===== LIKE GALERI ===== */
function toggleLike(idx) {
    var likes = JSON.parse(localStorage.getItem('galeri_likes') || '{}');
    var key = 'gal_' + idx;
    if(likes[key]) {
        delete likes[key];
        var el = document.getElementById('like_'+idx);
        if(el) el.classList.remove('liked');
        toast('💔 Batal suka');
    } else {
        likes[key] = true;
        var el = document.getElementById('like_'+idx);
        if(el) el.classList.add('liked');
        toast('❤️ Disukai');
    }
    localStorage.setItem('galeri_likes', JSON.stringify(likes));
}

function restoreLikes() {
    var likes = JSON.parse(localStorage.getItem('galeri_likes') || '{}');
    for(var key in likes) {
        if(likes[key]) {
            var el = document.getElementById(key);
            if(el) el.classList.add('liked');
        }
    }
}

/* ===== CETAK KEUANGAN PDF ===== */
function cetakKeuanganPDF() {
    var el = document.getElementById('finList');
    if(!el) {
        toast('Tidak ada data keuangan untuk dicetak', 1);
        return;
    }
    toast('Membuat PDF...');
    var container = el.closest('.sc') || el.parentNode;
    if(!container) container = el;
    
    html2canvas(container, {
        scale: 2,
        backgroundColor: '#0a0a0a',
        useCORS: true,
        logging: false
    }).then(function(canvas) {
        var imgData = canvas.toDataURL('image/jpeg', 0.9);
        var { jsPDF } = window.jspdf;
        var pdf = new jsPDF('p', 'mm', 'a4');
        var imgWidth = 190;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        pdf.addImage(imgData, 'JPEG', 10, 10, imgWidth, imgHeight);
        pdf.save('laporan_keuangan_RW011.pdf');
        toast('PDF berhasil dicetak!');
    }).catch(function(err) {
        console.error(err);
        toast('Gagal mencetak PDF: ' + err.message, 1);
    });
}
/* ===== MODE GELAP/TERANG (TOMBOL DI POJOK KANAN) ===== */
function toggleTheme() {
    var html = document.documentElement;
    var icon = document.getElementById('themeIcon');
    var current = html.getAttribute('data-theme');
    
    if(current === 'light') {
        html.removeAttribute('data-theme');
        localStorage.setItem('rw_theme', 'dark');
        if(icon) icon.setAttribute('icon', 'solar:moon-bold-duotone');
        document.getElementById('themeToggle').style.background = 'rgba(255,255,255,0.08)';
        document.getElementById('themeToggle').style.borderColor = 'rgba(255,255,255,0.12)';
        document.getElementById('themeToggle').style.color = '#fff';
    } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('rw_theme', 'light');
        if(icon) icon.setAttribute('icon', 'solar:sun-bold-duotone');
        document.getElementById('themeToggle').style.background = 'rgba(0,0,0,0.08)';
        document.getElementById('themeToggle').style.borderColor = 'rgba(0,0,0,0.12)';
        document.getElementById('themeToggle').style.color = '#1a1a1a';
    }
/* ===== FUNGSI SHARE (BAGIKAN) ===== */
function doShare() {
    var url = window.location.href;
    var title = document.title || 'Majalah Digital RW 011';
    var text = 'Yuk baca Majalah Digital RW 011!';
    
    // Cek apakah browser di HP (ada fitur share native)
    if(navigator.share) {
        navigator.share({
            title: title,
            text: text,
            url: url
        }).catch(function(err) {
            console.log('Share dibatalkan atau gagal:', err);
        });
    } else {
        // Khusus PC/Laptop: Copy link ke clipboard dengan cara manual (100% berhasil)
        copyToClipboard(url);
    }
}

// Fungsi copy manual yang stabil
function copyToClipboard(text) {
    // Buat elemen textarea sementara
    var dummy = document.createElement('textarea');
    dummy.value = text;
    dummy.style.position = 'fixed';
    dummy.style.top = '-9999px';
    dummy.style.left = '-9999px';
    document.body.appendChild(dummy);
    
    // Pilih dan copy
    dummy.select();
    dummy.setSelectionRange(0, 99999); // Untuk mobile
    
    try {
        var success = document.execCommand('copy');
        if(success) {
            toast('Link berhasil disalin ke clipboard! Bagikan ke teman.');
        } else {
            toast('Gagal menyalin. Silakan copy manual: ' + text, 1);
        }
    } catch(e) {
        toast('Gagal menyalin. Silakan copy manual: ' + text, 1);
    }
    
    // Bersihkan
    document.body.removeChild(dummy);
}

// Fallback manual (jika clipboard gagal)
function fallbackShare(url) {
    var dummy = document.createElement('textarea');
    dummy.value = url;
    document.body.appendChild(dummy);
    dummy.select();
    try {
        document.execCommand('copy');
        toast('Link berhasil disalin!');
    } catch(e) {
        toast('Gagal menyalin. Silakan copy manual: ' + url, 1);
    }
    document.body.removeChild(dummy);
}
}

// Cek tema tersimpan saat halaman dimuat
(function() {
    var theme = localStorage.getItem('rw_theme');
    if(theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        var icon = document.getElementById('themeIcon');
        if(icon) icon.setAttribute('icon', 'solar:sun-bold-duotone');
        document.getElementById('themeToggle').style.background = 'rgba(0,0,0,0.08)';
        document.getElementById('themeToggle').style.borderColor = 'rgba(0,0,0,0.12)';
        document.getElementById('themeToggle').style.color = '#1a1a1a';
    }
})();
/* ===== FUNGSI LOGIN ===== */
function doLogin() {
    var email = document.getElementById('logEmail').value.trim();
    var pass = document.getElementById('logPass').value.trim();
    var errEl = document.getElementById('logErr');
    
    if(!email || !pass) {
        if(errEl) { errEl.textContent = 'Email dan password wajib diisi!'; errEl.style.display = 'block'; }
        return;
    }
    
    var btn = document.getElementById('btnLogin');
    if(btn) btn.textContent = 'Memproses...';
    
    firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(function(userCredential) {
            if(errEl) errEl.style.display = 'none';
            toast('Login berhasil!');
            document.getElementById('pwMod').classList.remove('open'); // Tutup modal login
            document.getElementById('adP').style.transform = 'translateX(0)'; // Buka panel admin
            buildAdmin(); // Tampilkan menu admin
        })
        .catch(function(error) {
            if(errEl) { errEl.textContent = 'Gagal: ' + error.message; errEl.style.display = 'block'; }
            if(btn) btn.textContent = 'Masuk';
            toast('Login gagal: ' + error.message, 1);
        });
}

function clPw() {
    document.getElementById('pwMod').classList.remove('open');
    var errEl = document.getElementById('logErr');
    if(errEl) { errEl.style.display = 'none'; errEl.textContent = ''; }
    var btn = document.getElementById('btnLogin');
    if(btn) btn.textContent = 'Masuk';
}
/* ===== FUNGSI BUKA ADMIN ===== */
function tryAd(){
    // Cek apakah user sudah login
    var user = firebase.auth().currentUser;
    
    if(user){
        // Jika sudah login, langsung buka panel admin
        document.getElementById('adP').style.transform = 'translateX(0)';
        buildAdmin(); // Render panel admin
    } else {
        // Jika belum login, tampilkan form login
        document.getElementById('pwMod').classList.add('open');
    }
}

// Fungsi untuk menutup modal login
function clPw() {
    document.getElementById('pwMod').classList.remove('open');
    var errEl = document.getElementById('logErr');
    if(errEl) { errEl.style.display = 'none'; errEl.textContent = ''; }
    var btn = document.getElementById('btnLogin');
    if(btn) btn.textContent = 'Masuk';
}
/* ===== FUNGSI SLIDE GALERI (ANIMASI GESER) ===== */
var slideIndex = 0;
var slideTimer = null;

function updateSlide() {
    var track = document.getElementById('galeriTrack');
    var dots = document.querySelectorAll('#slideDots .dot');
    if(!track) return;
    var totalSlides = track.children.length;
    if(totalSlides === 0) return;
    
    // Hitung persentase geseran (misal index 1 berarti -100%, index 2 -200%)
    var offset = -slideIndex * 100;
    track.style.transform = 'translateX(' + offset + '%)';
    
    // Update titik indikator
    dots.forEach(function(d, i){
        d.style.background = (i === slideIndex) ? '#fff' : 'rgba(255,255,255,.3)';
    });
}
/* ===== GALERI SLIDE (AUTO, TIDAK BENTROK DENGAN COVER) ===== */
var gSlideIndex = 0;
var gSlideTimer = null;

function gUpdateSlide() {
    var track = document.getElementById('galeriTrack');
    var dots = document.querySelectorAll('#slideDots .dot');
    if(!track) return;
    var totalSlides = track.children.length;
    if(totalSlides === 0) return;
    var offset = -gSlideIndex * 100;
    track.style.transform = 'translateX(' + offset + '%)';
    dots.forEach(function(d, i){
        d.style.background = (i === gSlideIndex) ? '#fff' : 'rgba(255,255,255,.3)';
    });
}

function gStartAutoSlide() {
    if(gSlideTimer) clearInterval(gSlideTimer);
    gSlideTimer = setInterval(function(){
        var track = document.getElementById('galeriTrack');
        if(!track) return;
        gSlideIndex = (gSlideIndex + 1) % track.children.length;
        gUpdateSlide();
    }, 4000); // 4000 = 4 detik. Ganti 10000 kalau mau 10 detik
}

// Fungsi navigasi kiri/kanan untuk galeri (tetap pakai nama lama biar tombolnya gak error)
function nextSlide() {
    clearInterval(gSlideTimer);
    var track = document.getElementById('galeriTrack');
    if(!track) return;
    gSlideIndex = (gSlideIndex + 1) % track.children.length;
    gUpdateSlide();
    gStartAutoSlide();
}

function prevSlide() {
    clearInterval(gSlideTimer);
    var track = document.getElementById('galeriTrack');
    if(!track) return;
    gSlideIndex = (gSlideIndex - 1 + track.children.length) % track.children.length;
    gUpdateSlide();
    gStartAutoSlide();
}

function goToSlide(n) {
    clearInterval(gSlideTimer);
    var track = document.getElementById('galeriTrack');
    if(!track) return;
    gSlideIndex = n;
    gUpdateSlide();
    gStartAutoSlide();
}
/* ===== MODE GELAP/TERANG ===== */
function toggleTheme() {
    var html = document.documentElement;
    if(html.getAttribute('data-theme') === 'light') {
        html.removeAttribute('data-theme');
        localStorage.setItem('rw_theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('rw_theme', 'light');
    }
}

// Saat halaman dimuat, cek tema tersimpan
(function() {
    var theme = localStorage.getItem('rw_theme');
    if(theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})();

/* ===== TOGGLE PEMASUKAN & PENGELUARAN ===== */
function toggleFinMasuk() {
    var wrap = document.getElementById('finMasukWrap');
    var icon = document.getElementById('finMasukIcon');
    if(!wrap) return;
    if(wrap.style.display === 'none') {
        wrap.style.display = 'block';
        if(icon) icon.innerHTML = '▼ Klik untuk tutup';
    } else {
        wrap.style.display = 'none';
        if(icon) icon.innerHTML = '▶ Klik untuk lihat';
    }
}
function toggleFinKeluar() {
    var wrap = document.getElementById('finKeluarWrap');
    var icon = document.getElementById('finKeluarIcon');
    if(!wrap) return;
    if(wrap.style.display === 'none') {
        wrap.style.display = 'block';
        if(icon) icon.innerHTML = '▼ Klik untuk tutup';
    } else {
        wrap.style.display = 'none';
        if(icon) icon.innerHTML = '▶ Klik untuk lihat';
    }
}


function rCover(){
    var h='<section class="sec sec-cover" id="sec-0" style="'+(D_SL.length>0?'background:transparent !important;':'')+'"><div style="position:relative;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden">';
    if(D_SL.length>0){h+='<div id="slideshow" style="position:absolute;inset:0;z-index:0">';for(var i=0;i<D_SL.length;i++){h+='<div class="sl-slide" style="position:absolute;inset:0;background:url(\''+esc(D_SL[i])+'\') center/contain no-repeat;background-color:#000;opacity:'+(i===0?'1':'0')+';transition:opacity 1.5s ease-in-out"></div>';}h+='</div><div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.5) 0%,rgba(0,0,0,.7) 100%);z-index:1"></div>';}
    h+='<div style="text-align:center;padding:2rem;max-width:40rem;margin:0 auto;position:relative;z-index:2">';
    if(D_S.logo&&D_S.logo.indexOf('http')===0)h+='<div class="logo-ring pga an a1" style="width:140px;height:140px;border-radius:50%;margin:0 auto 2rem;display:flex;align-items:center;justify-content:center"><img src="'+esc(D_S.logo)+'" style="width:120px;height:120px;border-radius:50%;object-fit:cover"></div>';
    h+='<p class="pi an a2" style="margin-bottom:.6rem;text-shadow:0 2px 8px rgba(0,0,0,0.8)">'+esc(D_S.edisi)+'</p>';
    h+='<h1 class="font-space an a3 cover-title" style="font-size:clamp(2.5rem,7vw,4.5rem);font-weight:700;letter-spacing:-.03em;line-height:1.1;margin-bottom:.8rem;color:#D4AF37;text-shadow:0 4px 20px rgba(0,0,0,0.9)">'+esc(D_S.namaRw)+'</h1>';
    h+='<p class="an a4" style="font-size:.95rem;color:#f0f0f0;font-weight:500;margin-bottom:.3rem;text-shadow:0 4px 12px rgba(0,0,0,0.9)">'+esc(D_S.alamat)+'</p>';
    h+='<p class="an a5" style="font-size:.88rem;color:#e0e0e0;font-weight:400;margin-bottom:2rem;text-shadow:0 4px 12px rgba(0,0,0,0.9)">'+esc(D_S.tanggal)+'</p>';
    h+='<p class="an a5" style="font-size:.95rem;max-width:28rem;margin:0 auto 2.5rem;line-height:1.7;text-shadow:0 1px 6px rgba(0,0,0,0.5)">'+esc(D_S.deskripsi)+'</p>';
    h+='<div class="an a6" style="display:flex;gap:2rem;justify-content:center;flex-wrap:wrap">';
    var wl=D_S.wa&&D_S.wa.indexOf('http')===0?D_S.wa:'https://wa.me/'+D_S.wa;h+=ctIc('solar:phone-bold-duotone','WhatsApp',wl);if(D_S.ig)h+=ctIc('solar:gallery-minimalistic-bold-duotone','Instagram',D_S.ig);if(D_S.email)h+=ctIc('solar:letter-bold-duotone','Email','mailto:'+D_S.email);
    h+='</div><div class="an a7" style="margin-top:3rem;display:flex;flex-direction:column;align-items:center;gap:.4rem"><iconify-icon icon="solar:alt-arrow-down-linear" width="20" style="color:#555;animation:pg 2s ease-in-out infinite"></iconify-icon><span style="font-size:.6rem;color:#444;letter-spacing:.15em;text-transform:uppercase">Scroll</span></div><div style="margin-top:2.5rem;display:flex;flex-direction:column;align-items:center;gap:.5rem;opacity:.85"><div id="qrcodeCover" style="background:#fff;padding:6px;border-radius:8px"></div><span style="font-size:.55rem;color:#555;letter-spacing:.1em;text-transform:uppercase">Scan untuk bagikan</span></div></div></div></section>';return h;}

function rSambutan(){var h='<div class="sec-div"></div><section class="sec sec-pad" id="sec-1"><div style="max-width:52rem;margin:0 auto"><p class="pi an" style="margin-bottom:.5rem">Kata Sambutan</p><div class="oh an" style="margin-bottom:2rem"></div><div class="sb-grid" style="display:grid;grid-template-columns:180px 1fr;gap:2.5rem;align-items:start"><div class="an" style="text-align:center">'+pfp(D_K.foto,D_K.nama,120)+'</div><div><h2 class="font-space an samb-name" style="font-size:1.4rem;font-weight:600;margin-bottom:.15rem">'+esc(D_K.nama)+'</h2><p class="an" style="font-size:.78rem;color:var(--cc);margin-bottom:.2rem">'+esc(D_K.jabatan)+'</p><p class="an" style="font-size:.72rem;color:#777;margin-bottom:1.5rem">Periode '+esc(D_K.periode)+'</p><div class="an" style="position:relative;padding-left:1rem"><span class="qm">\u201C</span><div style="font-size:.88rem;line-height:1.85;white-space:pre-line">'+esc(trm(D_SB))+'</div></div><div class="an" style="margin-top:1.5rem;text-align:right"><p style="font-style:italic;color:#999;font-size:.82rem">'+esc(D_K.ttd)+'</p><div class="gold-line" style="width:140px;margin-left:auto;margin-top:.3rem"></div></div></div></div></div></section>';return h;}

function rStruktur(){
    var h='<div class="sec-div"></div><section class="sec sec-pad" id="sec-2"><div style="max-width:56rem;margin:0 auto"><p class="pi an" style="margin-bottom:.5rem">Struktur Organisasi</p><div class="oh an" style="margin-bottom:2rem"></div><div class="st-grid3 an" style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;justify-items:center;margin-bottom:3rem">';
    var it=[{n:D_K.nama,j:D_K.jabatan,f:D_K.foto},{n:D_ST.wakil,j:'Sekretariat',f:D_ST.fotoWakil},{n:D_ST.sek,j:'Sekretaris',f:D_ST.fotoSek},{n:D_ST.ben,j:'Bendahara',f:D_ST.fotoBen}];
    for(var i=0;i<it.length;i++){
        h+='<div style="text-align:center"><div style="margin-bottom:.7rem">'+pfp(it[i].f,it[i].n,72)+'</div><p style="font-size:.82rem;font-weight:600;margin-bottom:.15rem">'+esc(it[i].n)+'</p><p style="font-size:.65rem;color:var(--cc);letter-spacing:.05em;text-transform:uppercase">'+esc(it[i].j)+'</p></div>';
    }
    h+='</div>';
    h+='<h3 class="font-space an" style="font-size:1rem;font-weight:600;margin-bottom:1.2rem">Koordinator Seksi</h3>';
    h+='<div class="an" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.2rem;justify-items:center;margin-bottom:3rem">';
    for(i=0;i<sK.length;i++){
        var fs=D_ST.fotoS&&D_ST.fotoS[i]?D_ST.fotoS[i]:'';
        h+='<div style="text-align:center"><div style="margin-bottom:.5rem">'+pfp(fs,D_ST.s[i],56)+'</div><p style="font-size:.78rem;font-weight:500;margin-bottom:.1rem">'+esc(D_ST.s[i]||'-')+'</p><p style="font-size:.6rem;color:var(--cc)">'+sL[i]+'</p></div>';
    }
    h+='</div>';
    h+='<h3 class="font-space an" style="font-size:1rem;font-weight:600;margin-bottom:1.2rem">Ketua RT</h3>';
    h+='<div class="an" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:1.2rem;justify-items:center">';
    for(i=0;i<D_ST.r.length;i++){
        var fn=D_ST.fotoR&&D_ST.fotoR[i]?D_ST.fotoR[i]:'';
        h+='<div style="text-align:center"><div style="margin-bottom:.5rem">'+pfp(fn,D_ST.r[i],60)+'</div><p style="font-size:.78rem;font-weight:500;margin-bottom:.1rem">'+esc(D_ST.r[i])+'</p><p style="font-size:.6rem;color:var(--cc)">RT 00'+(i+1)+'</p></div>';
    }
    h+='</div></div></section>';
    return h;
}

function rKegiatan(){
    var h='<div class="sec-div"></div><section class="sec sec-pad" id="sec-3"><div style="max-width:56rem;margin:0 auto"><p class="pi an" style="margin-bottom:.5rem">Kegiatan</p><div class="oh an" style="margin-bottom:1.5rem"></div>';
    // --- INI BAGIAN SEARCH YANG SUDAH BENAR ---
    h+='<div class="an" style="margin-bottom:1.5rem"><input id="searchAct" class="fi" placeholder="Cari kegiatan..." oninput="doSearch(this.value)" style="max-width:320px"></div>';
    h+='<div class="fs an" style="display:flex;gap:.5rem;margin-bottom:2rem;padding-bottom:.5rem" id="catBar"><button class="cfb on" onclick="filtCat(\'\')">Semua</button>';
    for(var i=0;i<sK.length;i++)h+='<button class="cfb" onclick="filtCat(\''+sK[i]+'\')">'+catCf[sK[i]].l+'</button>';
    h+='</div><div class="mg-grid" id="actGrid" style="display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem"></div></div></section>';return h;
}

function rKeuangan(){
    var h='<div class="sec-div"></div><section class="sec sec-pad" id="sec-4"><div style="max-width:56rem;margin:0 auto"><p class="pi an" style="margin-bottom:.5rem">Laporan Keuangan</p><div class="oh an" style="margin-bottom:2rem"></div>';
    var tM=0,tK=0,i;
    for(i=0;i<D_F.masuk.length;i++)tM+=Number(D_F.masuk[i].jml)||0;
    for(i=0;i<D_F.keluar.length;i++)tK+=Number(D_F.keluar[i].jml)||0;
    var sA=D_F.saldoAwal+tM-tK;
    
    // --- RINGKASAN SALDO (SELALU TAMPIL) ---
    h+='<div class="fin-top-grid an" style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-bottom:2rem">';
    h+='<div class="fin-card"><p style="font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:#999;margin-bottom:.3rem">Saldo Awal</p><p class="fin-saldo fin-awal" style="font-size:1.8rem;font-weight:700;font-family:Space Grotesk">'+fmt(D_F.saldoAwal)+'</p></div>';
    h+='<div class="fin-card"><p style="font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:#999;margin-bottom:.3rem">Pemasukan</p><p class="fin-saldo fin-masuk" style="font-size:1.8rem;font-weight:700;font-family:Space Grotesk">+'+fmt(tM)+'</p></div>';
    h+='<div class="fin-card"><p style="font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:#999;margin-bottom:.3rem">Pengeluaran</p><p class="fin-saldo fin-keluar" style="font-size:1.8rem;font-weight:700;font-family:Space Grotesk">-'+fmt(tK)+'</p></div>';
    h+='<div class="fin-card gold-top"><p style="font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:#999;margin-bottom:.3rem">Saldo Akhir</p><p class="fin-saldo fin-akhir" style="font-size:1.8rem;font-weight:700;font-family:Space Grotesk">'+fmt(sA)+'</p></div>';
    h+='</div>';
    
    // --- DROP-DOWN PEMASUKAN ---
    h+='<div class="an" style="margin-top:1rem">';
    h+='<div onclick="toggleFinMasuk()" style="display:flex;justify-content:space-between;align-items:center;padding:.8rem 1rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:.75rem;cursor:pointer;transition:all .3s;margin-bottom:.5rem">';
    h+='<span style="font-size:.85rem;font-weight:500;color:#4ade80">📈 Detail Pemasukan</span>';
    h+='<span id="finMasukIcon" style="font-size:.7rem;color:#888">▶ Klik untuk lihat</span>';
    h+='</div>';
    h+='<div id="finMasukWrap" style="display:none;overflow:hidden;transition:all .4s ease;border:1px solid rgba(255,255,255,.04);border-radius:.75rem;padding:.5rem;margin-top:.2rem">';
    h+='<div class="an fs"><table class="fin-tbl"><thead><tr><th>Tanggal</th><th>Keterangan</th><th>Kategori</th><th class="num">Jumlah</th></tr></thead><tbody>';
    for(i=0;i<D_F.masuk.length;i++){var t=D_F.masuk[i];h+='<tr><td>'+fmtD(t.tgl)+'</td><td>'+esc(t.ket)+'</td><td style="color:#888">'+esc(t.kat)+'</td><td class="num fin-masuk">+'+fmt(t.jml)+'</td></tr>';}
    if(!D_F.masuk.length)h+='<tr><td colspan="4" style="text-align:center;color:#555;padding:2rem">Tidak ada pemasukan</td></tr>';
    h+='</tbody></table></div></div></div>';
    
    // --- DROP-DOWN PENGELUARAN ---
    h+='<div class="an" style="margin-top:1rem">';
    h+='<div onclick="toggleFinKeluar()" style="display:flex;justify-content:space-between;align-items:center;padding:.8rem 1rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:.75rem;cursor:pointer;transition:all .3s;margin-bottom:.5rem">';
    h+='<span style="font-size:.85rem;font-weight:500;color:#f87171">📉 Detail Pengeluaran</span>';
    h+='<span id="finKeluarIcon" style="font-size:.7rem;color:#888">▶ Klik untuk lihat</span>';
    h+='</div>';
    h+='<div id="finKeluarWrap" style="display:none;overflow:hidden;transition:all .4s ease;border:1px solid rgba(255,255,255,.04);border-radius:.75rem;padding:.5rem;margin-top:.2rem">';
    h+='<div class="an fs"><table class="fin-tbl"><thead><tr><th>Tanggal</th><th>Keterangan</th><th>Kategori</th><th class="num">Jumlah</th></tr></thead><tbody>';
    for(i=0;i<D_F.keluar.length;i++){var t2=D_F.keluar[i];h+='<tr><td>'+fmtD(t2.tgl)+'</td><td>'+esc(t2.ket)+'</td><td style="color:#888">'+esc(t2.kat)+'</td><td class="num fin-keluar">-'+fmt(t2.jml)+'</td></tr>';}
    if(!D_F.keluar.length)h+='<tr><td colspan="4" style="text-align:center;color:#555;padding:2rem">Tidak ada pengeluaran</td></tr>';
    h+='</tbody></table></div></div></div>';
    
    // --- GRAFIK (TETAP TAMPIL) ---
    var mx=Math.max(tM,tK,1);
    h+='<div class="an" style="margin-top:2rem"><div style="margin-bottom:.6rem"><div style="display:flex;justify-content:space-between;font-size:.65rem;margin-bottom:.3rem"><span style="color:#4ade80">Pemasukan</span><span class="fin-masuk">'+fmt(tM)+'</span></div><div class="bar-track"><div class="bar-fill" style="width:'+(tM/mx*100)+'%;background:linear-gradient(90deg,#059669,#10b981)"></div></div></div><div><div style="display:flex;justify-content:space-between;font-size:.65rem;margin-bottom:.3rem"><span style="color:#f87171">Pengeluaran</span><span class="fin-keluar">'+fmt(tK)+'</span></div><div class="bar-track"><div class="bar-fill" style="width:'+(tK/mx*100)+'%;background:linear-gradient(90deg,#dc2626,#ef4444)"></div></div></div></div>';
    h+='</div></section>';return h;
}
function rProfil(){var h='<div class="sec-div"></div><section class="sec sec-pad" id="sec-5"><div style="max-width:52rem;margin:0 auto"><p class="pi an" style="margin-bottom:.5rem">Profil & Lokasi</p><div class="oh an" style="margin-bottom:2rem"></div><div class="profil-grid an" style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:start;margin-bottom:3rem"><div style="text-align:center">'+pfp(D_K.foto,D_K.nama,140)+'<h2 class="font-space profil-title" style="font-size:1.8rem;font-weight:700;margin-top:1rem;letter-spacing:-.02em">'+esc(D_K.nama)+'</h2><p style="color:var(--cc);font-size:.82rem;margin-top:.2rem">'+esc(D_K.jabatan)+'</p><p style="color:#777;font-size:.75rem;margin-top:.2rem">Periode '+esc(D_K.periode)+'</p></div><div class="profil-stats" style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem">';var sts=[{v:D_T.rt,l:'RT',i:'solar:buildings-2-bold-duotone'},{v:D_T.pg,l:'Pengurus',i:'solar:users-group-rounded-bold-duotone'},{v:D_T.sk,l:'Seksi',i:'solar:widget-bold-duotone'},{v:D_T.kk,l:'KK',i:'solar:home-smile-bold-duotone'}];for(var i=0;i<sts.length;i++){var s=sts[i];h+='<div class="sc" style="text-align:center"><iconify-icon icon="'+s.i+'" width="28" style="color:var(--cc);margin-bottom:.5rem"></iconify-icon><p class="stat-num" data-target="'+esc(s.v)+'">0</p><p style="font-size:.65rem;color:#777;text-transform:uppercase;letter-spacing:.1em">'+s.l+'</p></div>';}h+='</div></div>';if(D_S.map&&D_S.map.indexOf('iframe')!==-1)h+='<div class="map-wrap an"><div style="position:relative;z-index:2">'+D_S.map+'</div></div>';h+='</div></section>';return h;}

function rGaleri(){
    var h='<div class="sec-div"></div><section class="sec sec-pad" id="sec-7"><div style="max-width:56rem;margin:0 auto"><p class="pi an" style="margin-bottom:.5rem">Galeri Foto</p><div class="oh an" style="margin-bottom:2rem"></div>';
    if(!D_G.length){
        h+='<div class="an" style="text-align:center;padding:3rem 1rem;color:#555"><iconify-icon icon="solar:gallery-bold-duotone" width="48" style="opacity:.3;display:block;margin:0 auto 1rem"></iconify-icon><p style="font-size:.85rem">Belum ada foto</p></div>';
    } else {
        // --- SLIDE SHOW DENGAN ANIMASI GESER KIRI-KANAN ---
        h+='<div id="galeriWrap" class="an" style="position:relative;width:100%;max-width:800px;margin:0 auto;border-radius:1.2rem;overflow:hidden;border:1px solid rgba(255,255,255,.08);box-shadow:0 0 30px rgba(168,85,247,.06)">';
        
        // Wadah slide (transform akan menggeser wadah ini)
        h+='<div id="galeriTrack" style="display:flex;width:100%;transition:transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);">';
        
        // Masukkan semua gambar ke dalam track
        for(var i=0; i<D_G.length; i++){
            var g = D_G[i];
            h+='<div class="slide-item" style="flex:0 0 100%;width:100%;aspect-ratio:16/9;background:#0a0a0a;position:relative;overflow:hidden;">';
            h+='<img src="'+esc(g.url)+'" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy" onerror="this.parentNode.innerHTML=\'<div style=&quot;display:flex;align-items:center;justify-content:center;height:100%;color:#555;font-size:.9rem&quot;>Gagal memuat gambar</div>\'">';
            if(g.caption){
                h+='<div style="position:absolute;bottom:0;left:0;right:0;padding:1.5rem 1rem;background:linear-gradient(transparent,rgba(0,0,0,.8));color:#eee;font-size:.9rem;text-align:center;font-weight:400;">'+esc(g.caption)+'</div>';
            }
			// Tambahkan tombol like
h+='<button class="like-btn" onclick="toggleLike('+i+')" id="like_'+i+'"><iconify-icon icon="solar:heart-linear" width="20" style="color:currentColor"></iconify-icon></button>';
            h+='</div>';
        }
        h+='</div>'; // Tutup galeriTrack
        
        // Tombol Navigasi
        h+='<button onclick="prevSlide()" style="position:absolute;top:50%;left:1rem;transform:translateY(-50%);background:rgba(0,0,0,.5);border:none;color:#fff;font-size:1.8rem;padding:.5rem .8rem;border-radius:50%;cursor:pointer;z-index:2;backdrop-filter:blur(4px);transition:all .3s;">‹</button>';
        h+='<button onclick="nextSlide()" style="position:absolute;top:50%;right:1rem;transform:translateY(-50%);background:rgba(0,0,0,.5);border:none;color:#fff;font-size:1.8rem;padding:.5rem .8rem;border-radius:50%;cursor:pointer;z-index:2;backdrop-filter:blur(4px);transition:all .3s;">›</button>';
        
        // Indikator Titik
        h+='<div id="slideDots" style="position:absolute;bottom:1rem;left:50%;transform:translateX(-50%);display:flex;gap:.5rem;z-index:2;background:rgba(0,0,0,.5);padding:.3rem .8rem;border-radius:9999px;backdrop-filter:blur(4px);">';
        for(var j=0; j<D_G.length; j++){
            h+='<span class="dot '+(j===0?'active':'')+'" onclick="goToSlide('+j+')" style="width:8px;height:8px;border-radius:50%;background:'+(j===0?'#fff':'rgba(255,255,255,.3)')+';cursor:pointer;transition:background .3s;"></span>';
        }
        h+='</div>';
        h+='</div>'; // Tutup galeriWrap
        // --- AKHIR SLIDE ANIMASI ---
    }
    h+='</div></section>';
	setTimeout(function(){ gStartAutoSlide(); }, 500); // Jalankan galeri otomatis saat halaman dimuat
    return h;
}


function rMading(){var h='<div class="sec-div"></div><section class="sec sec-pad" id="sec-6"><div style="max-width:52rem;margin:0 auto"><p class="pi an" style="margin-bottom:.5rem">Mading Digital</p><div class="oh an" style="margin-bottom:.5rem"></div><p class="an" style="font-size:.82rem;color:#777;margin-bottom:2rem">Pengumuman terkini dari pengurus RW 011</p>';if(!D_M.length){h+='<div class="an" style="text-align:center;padding:3rem 1rem;color:#555"><iconify-icon icon="solar:notebook-bold-duotone" width="48" style="opacity:.3;display:block;margin:0 auto 1rem"></iconify-icon><p style="font-size:.85rem">Belum ada pengumuman</p></div>';}else{h+='<div style="display:flex;flex-direction:column;gap:1rem">';for(var i=D_M.length-1;i>=0;i--){var m=D_M[i];h+='<div class="mading-card an"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:.7rem"><h3 style="font-size:1rem;font-weight:600;color:#fff;flex:1;padding-right:1rem">'+esc(m.judul)+'</h3><span style="font-size:.6rem;color:#666;font-family:Geist Mono,monospace;white-space:nowrap">'+fmtD(m.tgl)+'</span></div><p style="font-size:.85rem;color:#bbb;line-height:1.75;white-space:pre-line">'+esc(trm(m.isi))+'</p><div style="margin-top:.8rem;padding-top:.7rem;border-top:1px solid rgba(255,255,255,.05);display:flex;align-items:center;gap:.4rem"><iconify-icon icon="solar:user-circle-linear" width="14" style="color:#666"></iconify-icon><span style="font-size:.7rem;color:#777">'+esc(m.oleh||'Admin')+'</span></div></div>';}h+='</div>';}h+='</div></section>';return h;}

function render(){if(_obs){_obs.disconnect();_obs=null;}document.documentElement.scrollTop=0;document.body.scrollTop=0;var p=[];try{p.push(rCover());}catch(e){}try{p.push(rSambutan());}catch(e){}try{p.push(rStruktur());}catch(e){}try{p.push(rKegiatan());}catch(e){}try{p.push(rKeuangan());}catch(e){}try{p.push(rProfil());}catch(e){}try{p.push(rMading());}catch(e){}try{p.push(rGaleri());}catch(e){}try{p.push(rAduan());}catch(e){}document.getElementById('magV').innerHTML=p.join('');try{renderAct();}catch(e){}setTimeout(function(){var c=document.getElementById('sec-0');if(c)c.scrollIntoView({behavior:'instant',block:'start'});setupObs();try{var qrEl=document.getElementById('qrcodeCover');if(qrEl&&qrEl.innerHTML===''){new QRCode(qrEl,{text:window.location.href,width:76,height:76,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.M});}}catch(e){}try{if(typeof _slTimer!=='undefined')clearInterval(_slTimer);var slides=document.querySelectorAll('.sl-slide');if(slides.length>1){var cur=0;_slTimer=setInterval(function(){slides[cur].style.opacity='0';cur=(cur+1)%slides.length;slides[cur].style.opacity='1';},4000);}}catch(e){}},100);}

var _cc='',_sq='';
function filtCat(c){_cc=c;document.querySelectorAll('#catBar .cfb').forEach(function(b){b.classList.remove('on');if((c===''&&b.textContent==='Semua')||b.textContent===catCf[c].l)b.classList.add('on');});renderAct();}
function doSearch(v){_sq=v.toLowerCase().trim();renderAct();}

function renderAct(){
var g=document.getElementById('actGrid');if(!g)return;
var list=_cc?D_A.filter(function(a){return a.category===_cc;}):D_A.slice();
if(_sq){list=list.filter(function(a){return(a.title||'').toLowerCase().indexOf(_sq)!==-1||(a.description||'').toLowerCase().indexOf(_sq)!==-1;});}
list.sort(function(a,b){return b.date.localeCompare(a.date);});
if(!list.length){g.innerHTML='<p style="grid-column:span 2;text-align:center;color:#555;padding:3rem">'+(_sq?'Tidak ditemukan':'Kosong')+'</p>';return;}
var h='';
for(var i=0;i<list.length;i++){
var a=list[i],cf=catCf[a.category]||{l:a.category,c:'#888'};
var mt=a.mediaType||'foto',isVideo=mt!=='foto';
h+='<div class="ac an" style="animation-delay:'+(i*.08)+'s;'+(a.size==='large'?'grid-column:span 2;':'')+'">';
if(isVideo&&a.image){
var embedUrl=getEmbed(a.image,mt),thumbUrl='';
if(mt==='youtube'){var ym=a.image.match(/[?&]v=([^&#]+)/);if(!ym){ym=a.image.match(/youtu\.be\/([^?&#]+)/);}if(!ym){ym=a.image.match(/youtube\.com\/shorts\/([^?&#]+)/);}if(!ym){ym=a.image.match(/youtube\.com\/embed\/([^?&#]+)/);}if(ym){thumbUrl='https://img.youtube.com/vi/'+ym[1]+'/hqdefault.jpg';}}
if(embedUrl){
h+='<div class="vid-lazy" data-embed="'+embedUrl+'" style="width:100%;height:240px;background:#0a0a0a;overflow:hidden;position:relative;cursor:pointer">';
if(thumbUrl){h+='<img src="'+thumbUrl+'" style="width:100%;height:100%;object-fit:cover;opacity:.6" loading="lazy">';}
h+='<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.4rem">';
var pC=mt==='youtube'?'#f00':mt==='tiktok'?'#00f2ea':'#e4405f';
h+='<div style="width:52px;height:52px;border-radius:50%;background:rgba(0,0,0,.6);border:2px solid '+pC+';display:flex;align-items:center;justify-content:center"><iconify-icon icon="solar:play-bold" width="20" style="color:'+pC+';margin-left:2px"></iconify-icon></div>';
var mTL=mt==='youtube'?'YouTube':mt==='tiktok'?'TikTok':'Instagram';
h+='<span style="font-size:.6rem;color:#999;letter-spacing:.1em;text-transform:uppercase">'+mTL+'</span>';
h+='</div></div>';
}else{h+='<div style="width:100%;height:240px;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.5rem"><iconify-icon icon="solar:play-circle-bold-duotone" width="48" style="color:#444"></iconify-icon><a href="'+esc(a.image)+'" target="_blank" style="color:var(--cc);font-size:.75rem">Tonton di sini →</a></div>';}
}else{
var img=a.image&&a.image.indexOf('http')===0?a.image:'https://picsum.photos/seed/'+a.id+'/600/400.jpg';
h+='<div style="aspect-ratio:16/10;overflow:hidden;background:#111"><img src="'+img+'" style="width:100%;height:100%;object-fit:cover" onclick="openLb(\''+img+'\')" onerror="this.style.display=\'none\'"></div>';
}
h+='<div style="padding:1.2rem">';
h+='<div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.6rem;flex-wrap:wrap">';
h+='<span style="font-size:.55rem;letter-spacing:.1em;text-transform:uppercase;padding:.2rem .5rem;border-radius:9999px;background:'+cf.c+'22;color:'+cf.c+';border:1px solid '+cf.c+'33;font-weight:600">'+cf.l+'</span>';
if(isVideo){var mTL2=mt==='youtube'?'YouTube':mt==='tiktok'?'TikTok':'Instagram';h+='<span style="display:inline-flex;align-items:center;gap:.3rem;font-size:.55rem;letter-spacing:.1em;text-transform:uppercase;padding:.2rem .5rem;border-radius:9999px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);font-weight:600">'+getMediaIcon(mt)+' '+mTL2+'</span>';}
h+='<span style="font-size:.6rem;color:#666;font-family:Geist Mono,monospace">'+fmtD(a.date)+'</span>';
h+='</div>';
h+='<h3 style="font-size:.95rem;font-weight:600;color:#fff;margin-bottom:.4rem;line-height:1.3">'+esc(a.title)+'</h3>';
h+='<p style="font-size:.78rem;color:#999;line-height:1.6">'+esc(trm(a.description))+'</p>';
h+='</div></div>';
}
g.innerHTML=h;
initLazyVideo();
}

function initLazyVideo(){
var vids=document.querySelectorAll('.vid-lazy');if(!vids.length)return;
var obs=new IntersectionObserver(function(entries){
entries.forEach(function(entry){
if(entry.isIntersecting){
var el=entry.target,url=el.getAttribute('data-embed');
if(url){el.innerHTML='<iframe src="'+url+'" style="width:100%;height:100%;border:0;position:absolute;top:0;left:0" allow="autoplay;encrypted-media" allowfullscreen></iframe>';el.style.position='relative';}
obs.unobserve(el);
}
});
},{rootMargin:'200px'});
vids.forEach(function(v){obs.observe(v);});
}

function animNum(){var els=document.querySelectorAll('.stat-num[data-target]');els.forEach(function(el){var target=parseInt(el.getAttribute('data-target'))||0;if(isNaN(target)||target<=0){el.textContent=target||'0';return;}var start=0,dur=1200,step=Math.ceil(target/(dur/16));function tick(){start+=step;if(start>=target){el.textContent=target;return;}el.textContent=start;requestAnimationFrame(tick);}tick();});}

var _obs=null;
function setupObs(){
var els=document.querySelectorAll('.an');
if(!els.length)return;
_obs=new IntersectionObserver(function(entries){
entries.forEach(function(entry){
if(entry.isIntersecting){
entry.target.classList.add('av');
if(entry.target.querySelector('.stat-num'))animNum();
_obs.unobserve(entry.target);
}
});
},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
els.forEach(function(el){_obs.observe(el);});
}

/* ===== ADUAN ===== */

function kirimAduan(){
var n=document.getElementById('ad_nama').value.trim();
var r=document.getElementById('ad_rt').value;
var isi=trm(document.getElementById('ad_isi').value);
if(!n||!r||!isi){toast('Lengkapi semua field',1);return;}
var adData={
  id:'ad'+Date.now(),
  nama:n,
  rt:r,
  isi:isi,
  tgl:new Date().toISOString().slice(0,10),
  status:'baru',
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
};
D_AD.push(adData);
try{localStorage.setItem('rw_aduan',JSON.stringify(D_AD));}catch(e){}
try{
  db.collection('magazine').doc('data').collection('aduan').doc(adData.id).set(adData)
  .then(function(){toast('Aduan terkirim ke database!');})
  .catch(function(err){toast('Gagal kirim: '+err.message,1);});
}catch(e){toast('Aduan tersimpan lokal',1);}
document.getElementById('ad_nama').value='';
document.getElementById('ad_rt').value='';
document.getElementById('ad_isi').value='';
var st=document.getElementById('adStatus');
if(st){st.style.display='inline';setTimeout(function(){st.style.display='none';},4000);}
}

function fwdAduan(type,id){
  var a=null;
  for(var i=0;i<D_AD.length;i++){if(D_AD[i].id===id){a=D_AD[i];break;}}
  if(!a)return;
  var txt='[ADUAN WARGA RW 011]\n\nNama: '+a.nama+'\nRT: '+a.rt+'\nTanggal: '+fmtD(a.tgl)+'\nStatus: '+(a.status||'Baru')+'\n\n'+a.isi;
  if(type==='wa'){
    var ph=D_S.wa?D_S.wa.replace(/[^0-9]/g,''):'';
    var url=ph?'https://wa.me/'+ph+'?text='+encodeURIComponent(txt):'https://wa.me/?text='+encodeURIComponent(txt);
    window.open(url,'_blank');
  }else if(type==='tg'){
    var tgLink=D_S.tg_group||'';
    if(tgLink&&tgLink.indexOf('http')===0){
      window.open(tgLink,'_blank');
      try{navigator.clipboard.writeText(txt);toast('Teks aduan disalin ke clipboard');}catch(e){}
    }else{
      try{navigator.clipboard.writeText(txt);toast('Teks aduan disalin ke clipboard. Paste ke grup Telegram.');}catch(e){toast('Copy manual teks aduan dari console');console.log(txt);}
    }
  }
}

function hapusAduan(id){
  if(!confirm('Hapus aduan ini?'))return;
  D_AD=D_AD.filter(function(a){return a.id!==id;});
  try{localStorage.setItem('rw_aduan',JSON.stringify(D_AD));}catch(e){}
  try{db.collection('magazine').doc('data').collection('aduan').doc(id).delete().catch(function(){});}catch(e){}
  renderAdminAduan();
  toast('Aduan dihapus');
}

function updateAduanStatus(id,status){
  for(var i=0;i<D_AD.length;i++){
    if(D_AD[i].id===id){D_AD[i].status=status;break;}
  }
  try{localStorage.setItem('rw_aduan',JSON.stringify(D_AD));}catch(e){}
  try{db.collection('magazine').doc('data').collection('aduan').doc(id).update({status:status}).catch(function(){});}catch(e){}
  renderAdminAduan();
  toast('Status diupdate: '+status);
}

/* ===== ADMIN: RENDER ADUAN (TANPA WA & TELEGRAM) ===== */
function renderAdminAduan(){
  var container=document.getElementById('adList');
  var cntEl=document.getElementById('adCnt');
  if(!container)return;
  if(cntEl)cntEl.textContent=D_AD.length;
  if(!D_AD.length){
    container.innerHTML='<p style="text-align:center;color:#666;padding:2rem 0">Belum ada aduan masuk.</p>';
    return;
  }
  var sorted=D_AD.slice().sort(function(a,b){return(b.tgl||'').localeCompare(a.tgl||'');});
  var h='<div style="display:flex;flex-direction:column;gap:.8rem">';
  for(var i=0;i<sorted.length;i++){
    var a=sorted[i];
    var sc=a.status==='diproses'?'#f59e0b':a.status==='selesai'?'#22c55e':'#ef4444';
    var sl=a.status==='diproses'?'Diproses':a.status==='selesai'?'Selesai':'Baru';
    h+='<div style="padding:1rem;border-radius:.75rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);border-left:3px solid '+sc+'">';
    h+='<div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:.6rem">';
    h+='<div><span style="font-size:.85rem;font-weight:600;color:#fff">'+esc(a.nama)+'</span> <span style="font-size:.7rem;color:#777">'+esc(a.rt)+'</span></div>';
    h+='<div style="display:flex;align-items:center;gap:.5rem"><span style="font-size:.55rem;padding:.15rem .5rem;border-radius:9999px;background:'+sc+'22;color:'+sc+';border:1px solid '+sc+'33;font-weight:600;letter-spacing:.05em;text-transform:uppercase">'+sl+'</span><span style="font-size:.6rem;color:#555;font-family:Geist Mono,monospace">'+fmtD(a.tgl)+'</span></div>';
    h+='</div>';
    h+='<p style="font-size:.82rem;color:#bbb;line-height:1.7;white-space:pre-line;margin-bottom:.8rem">'+esc(trm(a.isi))+'</p>';
    h+='<div style="display:flex;gap:.4rem;flex-wrap:wrap">';
    h+='<button onclick="updateAduanStatus(\''+a.id+'\',\'diproses\')" style="padding:.3rem .6rem;border-radius:.5rem;font-size:.6rem;background:rgba(245,158,11,.1);color:#f59e0b;border:1px solid rgba(245,158,11,.2);cursor:pointer">Diproses</button>';
    h+='<button onclick="updateAduanStatus(\''+a.id+'\',\'selesai\')" style="padding:.3rem .6rem;border-radius:.5rem;font-size:.6rem;background:rgba(34,197,94,.1);color:#22c55e;border:1px solid rgba(34,197,94,.2);cursor:pointer">Selesai</button>';
    h+='<button onclick="hapusAduan(\''+a.id+'\')" style="padding:.3rem .6rem;border-radius:.5rem;font-size:.6rem;background:rgba(239,68,68,.08);color:#f87171;border:1px solid rgba(239,68,68,.15);cursor:pointer;margin-left:auto">Hapus</button>';
    h+='</div></div>';
  }
  h+='</div>';
  container.innerHTML=h;
}

/* ===== REALTIME LISTENER ===== */
var _aduanUnsub=null;
function loadAduanFromDB(){
  if(_aduanUnsub){_aduanUnsub();}
  try{
    _aduanUnsub=db.collection('magazine').doc('data').collection('aduan')
    .orderBy('timestamp','desc')
    .onSnapshot(function(snapshot){
      var badge=document.getElementById('adSyncBadge');
      if(badge)badge.style.display='inline';
      showSyncStatus(true);
      snapshot.docChanges().forEach(function(change){
        var d=change.doc.data();
        if(change.type==='added'){
          var exists=D_AD.some(function(a){return a.id===d.id;});
          if(!exists){D_AD.push(d);}
        }else if(change.type==='modified'){
          for(var i=0;i<D_AD.length;i++){
            if(D_AD[i].id===d.id){D_AD[i]=d;break;}
          }
        }else if(change.type==='removed'){
          D_AD=D_AD.filter(function(a){return a.id!==d.id;});
        }
      });
      try{localStorage.setItem('rw_aduan',JSON.stringify(D_AD));}catch(e){}
      renderAdminAduan();
    },function(err){
      console.error('Aduan listener error:',err);
      showSyncStatus(false);
      renderAdminAduan();
    });
  }catch(e){
    console.warn('loadAduanFromDB fallback:',e);
    renderAdminAduan();
  }
}

/* ===== ADMIN: NAVIGASI SEKSI ===== */
function sSec(id,el){
  // TAMBAHKAN 2 BARIS INI DI PALING ATAS:
  var m=document.getElementById('admMenu');
  if(m&&m.style.transform==='translateX(0px)')toggleAdmMenu();

  document.querySelectorAll('.asec').forEach(function(s){s.style.display='none';});
  // ... lanjutan kode sSec yang lama	
  document.querySelectorAll('.asec').forEach(function(s){s.style.display='none';});
  var target=document.getElementById('as-'+id);
  if(target)target.style.display='block';
  document.querySelectorAll('.sl').forEach(function(s){s.classList.remove('on');});
  if(el)el.classList.add('on');
  var sel=document.getElementById('mNav');
  if(sel)sel.value=id;
  if(id==='settings')popSet();
  if(id==='ketua')popKet();
  if(id==='sambutan')popSb();
  if(id==='struktur')popStr();
  if(id==='kegiatan')popAct();
  if(id==='keuangan')popFin();
  if(id==='mading')popMd();
  if(id==='galeri')popGl();
  if(id==='aduan'){loadAduanFromDB();}
  if(id==='tampilan')popTampilan();
}

function popSet(){
  var f=function(iid,val){var el=document.getElementById(iid);if(el)el.value=val||'';};
  f('s_logo',D_S.logo);f('s_namaRw',D_S.namaRw);f('s_alamat',D_S.alamat);f('s_edisi',D_S.edisi);f('s_tanggal',D_S.tanggal);f('s_deskripsi',D_S.deskripsi);
  f('s_wa',D_S.wa);f('s_ig',D_S.ig);f('s_email',D_S.email);f('s_map',D_S.map);f('s_wa_group',D_S.wa_group);f('s_tg_group',D_S.tg_group);
  var slC=document.getElementById('slList');if(slC){var h='';for(var i=0;i<D_SL.length;i++){h+='<div style="position:relative;border-radius:.5rem;overflow:hidden;aspect-ratio:16/10;background:#111"><img src="'+esc(D_SL[i])+'" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display=\'none\'"><button onclick="rmSl('+i+')" style="position:absolute;top:.3rem;right:.3rem;width:20px;height:20px;border-radius:50%;background:rgba(0,0,0,.7);border:none;color:#f87171;font-size:.7rem;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button></div>';}slC.innerHTML=h;}
}
function popKet(){var f=function(iid,val){var el=document.getElementById(iid);if(el)el.value=val||'';};f('k_foto',D_K.foto);f('k_nama',D_K.nama);f('k_jabatan',D_K.jabatan);f('k_periode',D_K.periode);f('k_ttd',D_K.ttd);}
function popSb(){var el=document.getElementById('sb_teks');if(el)el.value=D_SB||'';}
function popStr(){var f=function(iid,val){var el=document.getElementById(iid);if(el)el.value=val||'';};f('st_wakil',D_ST.wakil);f('st_fw',D_ST.fotoWakil);f('st_sek',D_ST.sek);f('st_fse',D_ST.fotoSek);f('st_ben',D_ST.ben);f('st_fbe',D_ST.fotoBen);for(var i=0;i<12;i++){f('st_s'+(i+1),D_ST.s[i]||'');f('st_fs'+(i+1),D_ST.fotoS&&D_ST.fotoS[i]?D_ST.fotoS[i]:'');}for(i=0;i<6;i++){f('st_r'+(i+1),D_ST.r[i]||'');f('st_fr'+(i+1),D_ST.fotoR&&D_ST.fotoR[i]?D_ST.fotoR[i]:'');}}
function popAct(){renderAdminAct();}
function popFin(){
    document.getElementById('fe_sawal').value=D_F.saldoAwal||0;
    renderAdminFin();
    // Tambahkan tombol cetak PDF di bawah form input saldo
    var parent = document.getElementById('fe_sawal').parentNode.parentNode;
    if(parent) {
        parent.innerHTML += '<div style="margin-top:1.2rem;display:flex;gap:.8rem;flex-wrap:wrap">' +
            '<button onclick="cetakKeuanganPDF()" style="padding:.6rem 1.5rem;border-radius:.75rem;font-size:.7rem;background:rgba(99,102,241,.1);color:#818cf8;border:1px solid rgba(99,102,241,.2);cursor:pointer;transition:all .3s">📄 Cetak Laporan PDF</button>' +
            '</div>';
    }
}
function popMd(){renderAdminMd();}
function popGl(){renderAdminGl();}
function popTampilan(){var el=document.getElementById('tp_color');if(el)el.value=D_T.color||'purple';var f=function(iid,val){var e=document.getElementById(iid);if(e)e.value=val||'';};f('tp_rt',D_T.rt);f('tp_pg',D_T.pg);f('tp_sk',D_T.sk);f('tp_kk',D_T.kk);}

/* ===== ADMIN: RENDER LIST ===== */
function renderAdminAct(){
  var el=document.getElementById('actList'),cnt=document.getElementById('actCnt');
  if(cnt)cnt.textContent=D_A.length;
  if(!el)return;
  if(!D_A.length){el.innerHTML='<p style="text-align:center;color:#666;padding:1.5rem 0">Kosong</p>';return;}
  var h='';
  for(var i=0;i<D_A.length;i++){
    var a=D_A[i],cf=catCf[a.category]||{l:a.category,c:'#888'};
    h+='<div style="display:flex;align-items:center;gap:.8rem;padding:.7rem;border-radius:.6rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.04);margin-bottom:.5rem">';
    if(a.image&&a.image.indexOf('http')===0)h+='<div style="width:48px;height:36px;border-radius:.3rem;overflow:hidden;flex-shrink:0;background:#111"><img src="'+esc(a.image)+'" style="width:100%;height:100%;object-fit:cover"></div>';
    h+='<div style="flex:1;min-width:0"><p style="font-size:.78rem;font-weight:500;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+esc(a.title)+'</p><p style="font-size:.6rem;color:#666"><span style="color:'+cf.c+'">'+cf.l+'</span> · '+fmtD(a.date)+'</p></div>';
    h+='<button onclick="editAct('+i+')" style="padding:.3rem .5rem;border-radius:.4rem;font-size:.6rem;background:rgba(99,102,241,.1);color:#818cf8;border:1px solid rgba(99,102,241,.2);cursor:pointer">Edit</button>';
    h+='<button onclick="delAct('+i+')" style="padding:.3rem .5rem;border-radius:.4rem;font-size:.6rem;background:rgba(239,68,68,.08);color:#f87171;border:1px solid rgba(239,68,68,.15);cursor:pointer">×</button>';
    h+='</div>';
  }
  el.innerHTML=h;
}

function renderAdminFin(){
  var el=document.getElementById('finList'),cnt=document.getElementById('finCnt');
  var total=D_F.masuk.length+D_F.keluar.length;
  if(cnt)cnt.textContent=total;
  if(!el)return;
  if(!total){el.innerHTML='<p style="text-align:center;color:#666;padding:1.5rem 0">Kosong</p>';return;}
  var all=[];
  for(var i=0;i<D_F.masuk.length;i++){var t=D_F.masuk[i];all.push({tgl:t.tgl,ket:t.ket,kat:t.kat||'',jml:t.jml,tp:'m'});}
  for(i=0;i<D_F.keluar.length;i++){var t2=D_F.keluar[i];all.push({tgl:t2.tgl,ket:t2.ket,kat:t2.kat||'',jml:t2.jml,tp:'k'});}
  all.sort(function(a,b){return b.tgl.localeCompare(a.tgl);});
  var h='';
  for(i=0;i<all.length;i++){
    var tx=all[i],cl=tx.tp==='m'?'color:#4ade80':'color:#f87171',sg=tx.tp==='m'?'+':'-';
    var idx=tx.tp==='m'?D_F.masuk.indexOf(D_F.masuk.filter(function(x){return x.tgl===tx.tgl&&x.ket===tx.ket&&x.jml===tx.jml;})[0]):D_F.keluar.indexOf(D_F.keluar.filter(function(x){return x.tgl===tx.tgl&&x.ket===tx.ket&&x.jml===tx.jml;})[0]);
    h+='<div style="display:flex;align-items:center;gap:.8rem;padding:.5rem .7rem;border-radius:.5rem;background:rgba(255,255,255,.015);border:1px solid rgba(255,255,255,.03);margin-bottom:.4rem">';
    h+='<div style="flex:1;min-width:0"><p style="font-size:.75rem;color:#ddd;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+esc(tx.ket)+'</p><p style="font-size:.58rem;color:#666">'+fmtD(tx.tgl)+(tx.kat?' · '+esc(tx.kat):'')+'</p></div>';
    h+='<span style="font-size:.78rem;font-weight:600;font-family:Geist Mono,monospace;'+cl+'">'+sg+fmt(tx.jml)+'</span>';
    h+='<button onclick="delFin(\''+tx.tp+'\','+idx+')" style="padding:.2rem .4rem;border-radius:.3rem;font-size:.6rem;background:rgba(239,68,68,.08);color:#f87171;border:1px solid rgba(239,68,68,.15);cursor:pointer">×</button>';
    h+='</div>';
  }
  el.innerHTML=h;
}

function renderAdminMd(){
  var el=document.getElementById('mdList'),cnt=document.getElementById('mdCnt');
  if(cnt)cnt.textContent=D_M.length;
  if(!el)return;
  if(!D_M.length){el.innerHTML='<p style="text-align:center;color:#666;padding:1.5rem 0">Kosong</p>';return;}
  var h='';
  for(var i=D_M.length-1;i>=0;i--){
    var m=D_M[i];
    h+='<div style="padding:.8rem;border-radius:.6rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.04);margin-bottom:.5rem">';
    h+='<div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:.4rem"><p style="font-size:.82rem;font-weight:500;color:#fff;flex:1">'+esc(m.judul)+'</p><span style="font-size:.58rem;color:#555;font-family:Geist Mono,monospace">'+fmtD(m.tgl)+'</span></div>';
    h+='<p style="font-size:.72rem;color:#999;line-height:1.6;white-space:pre-line;margin-bottom:.5rem;max-height:60px;overflow:hidden">'+esc(trm(m.isi))+'</p>';
    h+='<div style="display:flex;gap:.4rem"><button onclick="editMd('+i+')" style="padding:.2rem .5rem;border-radius:.4rem;font-size:.6rem;background:rgba(99,102,241,.1);color:#818cf8;border:1px solid rgba(99,102,241,.2);cursor:pointer">Edit</button><button onclick="delMd('+i+')" style="padding:.2rem .5rem;border-radius:.4rem;font-size:.6rem;background:rgba(239,68,68,.08);color:#f87171;border:1px solid rgba(239,68,68,.15);cursor:pointer">Hapus</button></div>';
    h+='</div>';
  }
  el.innerHTML=h;
}

function renderAdminGl(){
  var el=document.getElementById('glList'),cnt=document.getElementById('glCnt');
  if(cnt)cnt.textContent=D_G.length;
  if(!el)return;
  if(!D_G.length){el.innerHTML='<p style="grid-column:span 3;text-align:center;color:#666;padding:1.5rem 0">Kosong</p>';return;}
  var h='';
  for(var i=0;i<D_G.length;i++){
    h+='<div style="position:relative;border-radius:.5rem;overflow:hidden;aspect-ratio:1;background:#111"><img src="'+esc(D_G[i].url)+'" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display=\'none\'"><button onclick="delGal('+i+')" style="position:absolute;top:.3rem;right:.3rem;width:22px;height:22px;border-radius:50%;background:rgba(0,0,0,.7);border:none;color:#f87171;font-size:.8rem;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button>'+(D_G[i].caption?'<div style="position:absolute;bottom:0;left:0;right:0;padding:.3rem;background:linear-gradient(transparent,rgba(0,0,0,.7));font-size:.55rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+esc(D_G[i].caption)+'</div>':'')+'</div>';
  }
  el.innerHTML=h;
}

/* ===== ADMIN: SAVE FUNCTIONS ===== */
function svSet(){
  var g=function(iid){var el=document.getElementById(iid);return el?el.value.trim():'';};
  D_S.logo=g('s_logo');D_S.namaRw=g('s_namaRw');D_S.alamat=g('s_alamat');D_S.edisi=g('s_edisi');D_S.tanggal=g('s_tanggal');D_S.deskripsi=g('s_deskripsi');
  D_S.wa=g('s_wa');D_S.ig=g('s_ig');D_S.email=g('s_email');D_S.map=g('s_map');D_S.wa_group=g('s_wa_group');D_S.tg_group=g('s_tg_group');
  saveToFirebase();toast('Pengaturan disimpan');
}
function svKet(){
  var g=function(iid){var el=document.getElementById(iid);return el?el.value.trim():'';};
  D_K.foto=g('k_foto');D_K.nama=g('k_nama');D_K.jabatan=g('k_jabatan');D_K.periode=g('k_periode');D_K.ttd=g('k_ttd');
  saveToFirebase();toast('Data Ketua disimpan');
}
function svSb(){
  var el=document.getElementById('sb_teks');
  D_SB=el?el.value:'';
  saveToFirebase();toast('Sambutan disimpan');
}
function svStr(){
  var g=function(iid){var el=document.getElementById(iid);return el?el.value.trim():'';};
  D_ST.wakil=g('st_wakil');D_ST.fotoWakil=g('st_fw');D_ST.sek=g('st_sek');D_ST.fotoSek=g('st_fse');D_ST.ben=g('st_ben');D_ST.fotoBen=g('st_fbe');
  D_ST.s=[];D_ST.fotoS=[];for(var i=1;i<=12;i++){D_ST.s.push(g('st_s'+i));D_ST.fotoS.push(g('st_fs'+i));}
  D_ST.r=[];D_ST.fotoR=[];for(i=1;i<=6;i++){D_ST.r.push(g('st_r'+i));D_ST.fotoR.push(g('st_fr'+i));}
  saveToFirebase();toast('Struktur disimpan');
}
function svAct(){
  var g=function(iid){var el=document.getElementById(iid);return el?el.value.trim():'';};
  var title=g('ae_title'),desc=g('ae_desc'),cat=g('ae_cat'),date=g('ae_date'),size=g('ae_size'),mt=g('ae_mediaType'),media=g('ae_media'),editId=g('ae_id');
  if(!title||!desc||!cat||!date){toast('Lengkapi field bertanda *',1);return;}
  if(editId){
    for(var i=0;i<D_A.length;i++){if(D_A[i].id===editId){D_A[i].title=title;D_A[i].description=desc;D_A[i].category=cat;D_A[i].date=date;D_A[i].size=size;D_A[i].mediaType=mt;D_A[i].image=media;break;}}
    toast('Kegiatan diupdate');
  }else{
    D_A.push({id:'ac'+Date.now(),title:title,description:desc,category:cat,date:date,size:size,mediaType:mt,image:media});
    toast('Kegiatan ditambahkan');
  }
  rsAF();saveToFirebase();renderAdminAct();
}
function rsAF(){
  var ids=['ae_id','ae_title','ae_desc','ae_cat','ae_date','ae_media'];
  ids.forEach(function(iid){var el=document.getElementById(iid);if(el)el.value='';});
  var sz=document.getElementById('ae_size');if(sz)sz.value='normal';
  var mt=document.getElementById('ae_mediaType');if(mt)mt.value='foto';
  toggleMediaField();
}
function editAct(idx){
  var a=D_A[idx];if(!a)return;
  var s=function(iid,val){var el=document.getElementById(iid);if(el)el.value=val||'';};
  s('ae_id',a.id);s('ae_title',a.title);s('ae_desc',a.description);s('ae_cat',a.category);s('ae_date',a.date);s('ae_size',a.size||'normal');s('ae_mediaType',a.mediaType||'foto');s('ae_media',a.image);
  toggleMediaField();
  window.scrollTo({top:0,behavior:'smooth'});
}
function delAct(idx){if(!confirm('Hapus kegiatan ini?'))return;D_A.splice(idx,1);saveToFirebase();renderAdminAct();toast('Dihapus');}

function svSal(){D_F.saldoAwal=Number(document.getElementById('fe_sawal').value)||0;saveToFirebase();toast('Saldo awal disimpan');}
function svMas(){
  var g=function(iid){var el=document.getElementById(iid);return el?el.value.trim():'';};
  var ket=g('fe_mk'),jml=g('fe_jm'),tgl=g('fe_tgl'),kat=g('fe_kat_m'),ctt=g('fe_ctt');
  if(!ket||!jml||!tgl){toast('Lengkapi field bertanda *',1);return;}
  D_F.masuk.push({ket:ket,jml:Number(jml),tgl:tgl,kat:kat,ctt:ctt});
  document.getElementById('fe_mk').value='';document.getElementById('fe_jm').value='';document.getElementById('fe_tgl').value='';document.getElementById('fe_ctt').value='';
  saveToFirebase();renderAdminFin();toast('Pemasukan ditambahkan');
}
function svKel(){
  var g=function(iid){var el=document.getElementById(iid);return el?el.value.trim():'';};
  var ket=g('fe_kk'),jml=g('fe_jk'),tgl=g('fe_tk'),kat=g('fe_kat_k'),ctt=g('fe_ctk');
  if(!ket||!jml||!tgl){toast('Lengkapi field bertanda *',1);return;}
  D_F.keluar.push({ket:ket,jml:Number(jml),tgl:tgl,kat:kat,ctt:ctt});
  document.getElementById('fe_kk').value='';document.getElementById('fe_jk').value='';document.getElementById('fe_tk').value='';document.getElementById('fe_ctk').value='';
  saveToFirebase();renderAdminFin();toast('Pengeluaran ditambahkan');
}
function delFin(tp,idx){
  if(!confirm('Hapus transaksi ini?'))return;
  if(tp==='m')D_F.masuk.splice(idx,1);else D_F.keluar.splice(idx,1);
  saveToFirebase();renderAdminFin();toast('Dihapus');
}

function svMading(){
  var g=function(iid){var el=document.getElementById(iid);return el?el.value.trim():'';};
  var judul=g('md_judul'),isi=g('md_isi'),oleh=g('md_oleh'),editId=g('md_id');
  if(!judul||!isi){toast('Lengkapi field bertanda *',1);return;}
  if(editId){
    for(var i=0;i<D_M.length;i++){if(D_M[i].id===editId){D_M[i].judul=judul;D_M[i].isi=isi;D_M[i].oleh=oleh;break;}}
    toast('Pengumuman diupdate');
  }else{
    D_M.push({id:'md'+Date.now(),judul:judul,isi:isi,oleh:oleh||'Admin RW 011',tgl:new Date().toISOString().slice(0,10)});
    toast('Pengumuman ditambahkan');
  }
  document.getElementById('md_judul').value='';document.getElementById('md_isi').value='';document.getElementById('md_id').value='';
  saveToFirebase();renderAdminMd();
}
function editMd(idx){
  var m=D_M[idx];if(!m)return;
  var s=function(iid,val){var el=document.getElementById(iid);if(el)el.value=val||'';};
  s('md_id',m.id);s('md_judul',m.judul);s('md_isi',m.isi);s('md_oleh',m.oleh);
  window.scrollTo({top:0,behavior:'smooth'});
}
function delMd(idx){if(!confirm('Hapus pengumuman ini?'))return;D_M.splice(idx,1);saveToFirebase();renderAdminMd();toast('Dihapus');}

function svGal(){
  var url=document.getElementById('gl_url').value.trim();
  var cap=document.getElementById('gl_cap').value.trim();
  if(!url){toast('URL foto wajib diisi',1);return;}
  D_G.push({url:url,caption:cap});
  document.getElementById('gl_url').value='';document.getElementById('gl_cap').value='';
  saveToFirebase();renderAdminGl();toast('Foto ditambahkan');
}
function delGal(idx){if(!confirm('Hapus foto ini?'))return;D_G.splice(idx,1);saveToFirebase();renderAdminGl();toast('Dihapus');}

function svSl(){
  var url=document.getElementById('sl_url').value.trim();
  if(!url){toast('URL gambar wajib diisi',1);return;}
  D_SL.push(url);document.getElementById('sl_url').value='';
  saveToFirebase();popSet();toast('Slideshow ditambahkan');
}
function rmSl(idx){if(!confirm('Hapus gambar ini?'))return;D_SL.splice(idx,1);saveToFirebase();popSet();toast('Dihapus');}

/* ===== FIREBASE SYNC ===== */
/* ===== SIMPAN SEMUA DATA KE FIRESTORE (CLOUD) ===== */
function saveToFirebase() {
    try {
        // Gabungkan semua data ke dalam satu objek
        var payload = {
            s: D_S,          // Pengaturan umum (nama RW, logo, wa_group, dll)
            k: D_K,          // Data ketua
            sb: D_SB,        // Sambutan
            st: D_ST,        // Struktur
            a: D_A,          // Kegiatan
            t: D_T,          // Tampilan (warna, rt, pg, dll)
            f: D_F,          // Keuangan
            mading: D_M,     // Mading
            galeri: D_G,     // Galeri
            slideshow: D_SL  // Slide Cover (yang selama ini di localStorage)
        };
        
        // Simpan ke Firebase Firestore (cloud)
        db.collection('magazine').doc('data').set(payload, { merge: true })
            .then(function() {
                console.log('✅ Semua data berhasil disimpan ke cloud!');
            })
            .catch(function(err) {
                console.error('❌ Gagal simpan ke cloud:', err);
            });
    } catch(e) {
        console.warn('Save error:', e);
    }
}

/* ===== EXPORT ===== */
function expData(){
  var data='var EXT_DATA='+JSON.stringify({s:D_S,k:D_K,sb:D_SB,st:D_ST,a:D_A,t:D_T,f:D_F,mading:D_M,galeri:D_G,slideshow:D_SL},null,2)+';';
  var blob=new Blob([data],{type:'application/javascript'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a');a.href=url;a.download='data.js';a.click();
  URL.revokeObjectURL(url);
  toast('data.js berhasil di-export!');
}

/* ===== AUTH ===== */
function doLogout(){
  if(confirm('Logout dari panel admin?')){
    try{firebase.auth().signOut();}catch(e){}
    window.location.href=window.location.pathname;
  }
}

/* ===== LIGHTBOX ===== */
function openLb(src){
  var lb=document.getElementById('lb');if(!lb)return;
  lb.innerHTML='<div style="position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.95);display:flex;align-items:center;justify-content:center;cursor:zoom-out;padding:2rem" onclick="closeLb()"><img src="'+esc(src)+'" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:.5rem"></div>';
  lb.style.display='block';
}
function closeLb(){var lb=document.getElementById('lb');if(lb){lb.innerHTML='';lb.style.display='none';}}

// --- BAGIAN PENUTUP YANG SUDAH DIPERBAIKI ---
// Tampilkan halaman duluan, jangan nunggu Firebase
// Tampilkan halaman duluan, jangan nunggu Firebase
setTimeout(function(){
    try{ 
        render(); 
        // Restore status like saat halaman dimuat
        try{ restoreLikes(); }catch(e){} 
    }catch(e){}
}, 100);

// Ambil data dari Firebase di belakang layar
try{
    if(typeof db!=='undefined' && db){
        setTimeout(function(){ loadFromFirebase(); }, 500);
    }
}catch(e){}

/* ===== LIKE GALERI ===== */
function toggleLike(idx) {
    var likes = JSON.parse(localStorage.getItem('galeri_likes') || '{}');
    var key = 'gal_' + idx;
    if(likes[key]) {
        delete likes[key];
        var el = document.getElementById('like_'+idx);
        if(el) el.classList.remove('liked');
        toast('💔 Batal suka');
    } else {
        likes[key] = true;
        var el = document.getElementById('like_'+idx);
        if(el) el.classList.add('liked');
        toast('❤️ Disukai');
    }
    localStorage.setItem('galeri_likes', JSON.stringify(likes));
}

function restoreLikes() {
    var likes = JSON.parse(localStorage.getItem('galeri_likes') || '{}');
    for(var key in likes) {
        if(likes[key]) {
            var el = document.getElementById(key);
            if(el) el.classList.add('liked');
        }
    }
}

/* ===== CETAK KEUANGAN PDF ===== */
function cetakKeuanganPDF() {
    var el = document.getElementById('finList');
    if(!el) {
        toast('Tidak ada data keuangan untuk dicetak', 1);
        return;
    }
    toast('Membuat PDF...');
    var container = el.closest('.sc') || el.parentNode;
    if(!container) container = el;
    
    html2canvas(container, {
        scale: 2,
        backgroundColor: '#0a0a0a',
        useCORS: true,
        logging: false
    }).then(function(canvas) {
        var imgData = canvas.toDataURL('image/jpeg', 0.9);
        var { jsPDF } = window.jspdf;
        var pdf = new jsPDF('p', 'mm', 'a4');
        var imgWidth = 190;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        pdf.addImage(imgData, 'JPEG', 10, 10, imgWidth, imgHeight);
        pdf.save('laporan_keuangan_RW011.pdf');
        toast('PDF berhasil dicetak!');
    }).catch(function(err) {
        console.error(err);
        toast('Gagal mencetak PDF: ' + err.message, 1);
    });
}

/* ===== MODE GELAP/TERANG ===== */
function toggleTheme() {
    var html = document.documentElement;
    var icon = document.getElementById('themeIcon');
    var current = html.getAttribute('data-theme');
    
    if(current === 'light') {
        html.removeAttribute('data-theme');
        localStorage.setItem('rw_theme', 'dark');
        if(icon) icon.setAttribute('icon', 'solar:moon-bold-duotone');
    } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('rw_theme', 'light');
        if(icon) icon.setAttribute('icon', 'solar:sun-bold-duotone');
    }
}

(function() {
    var theme = localStorage.getItem('rw_theme');
    if(theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        var icon = document.getElementById('themeIcon');
        if(icon) icon.setAttribute('icon', 'solar:sun-bold-duotone');
    }
})();

/* ===== FUNGSI SHARE (BAGIKAN) ===== */
function doShare() {
    var url = window.location.href;
    var title = document.title || 'Majalah Digital RW 011';
    var text = 'Yuk baca Majalah Digital RW 011!';
    
    if(navigator.share) {
        navigator.share({
            title: title,
            text: text,
            url: url
        }).catch(function(err) {
            console.log('Share dibatalkan atau gagal:', err);
        });
    } else {
        copyToClipboard(url);
    }
}

function copyToClipboard(text) {
    var dummy = document.createElement('textarea');
    dummy.value = text;
    dummy.style.position = 'fixed';
    dummy.style.top = '-9999px';
    dummy.style.left = '-9999px';
    document.body.appendChild(dummy);
    dummy.select();
    dummy.setSelectionRange(0, 99999);
    try {
        var success = document.execCommand('copy');
        if(success) {
            toast('Link berhasil disalin ke clipboard! Bagikan ke teman.');
        } else {
            toast('Gagal menyalin. Silakan copy manual: ' + text, 1);
        }
    } catch(e) {
        toast('Gagal menyalin. Silakan copy manual: ' + text, 1);
    }
    document.body.removeChild(dummy);
}

function fallbackShare(url) {
    var dummy = document.createElement('textarea');
    dummy.value = url;
    document.body.appendChild(dummy);
    dummy.select();
    try {
        document.execCommand('copy');
        toast('Link berhasil disalin!');
    } catch(e) {
        toast('Gagal menyalin. Silakan copy manual: ' + url, 1);
    }
    document.body.removeChild(dummy);
}

/* ===== FUNGSI LOGIN ===== */
function doLogin() {
    var email = document.getElementById('logEmail').value.trim();
    var pass = document.getElementById('logPass').value.trim();
    var errEl = document.getElementById('logErr');
    
    if(!email || !pass) {
        if(errEl) { errEl.textContent = 'Email dan password wajib diisi!'; errEl.style.display = 'block'; }
        return;
    }
    
    var btn = document.getElementById('btnLogin');
    if(btn) btn.textContent = 'Memproses...';
    
    firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(function(userCredential) {
            if(errEl) errEl.style.display = 'none';
            toast('Login berhasil!');
            document.getElementById('pwMod').classList.remove('open');
            document.getElementById('adP').style.transform = 'translateX(0)';
            buildAdmin();
        })
        .catch(function(error) {
            if(errEl) { errEl.textContent = 'Gagal: ' + error.message; errEl.style.display = 'block'; }
            if(btn) btn.textContent = 'Masuk';
            toast('Login gagal: ' + error.message, 1);
        });
}

function clPw() {
    document.getElementById('pwMod').classList.remove('open');
    var errEl = document.getElementById('logErr');
    if(errEl) { errEl.style.display = 'none'; errEl.textContent = ''; }
    var btn = document.getElementById('btnLogin');
    if(btn) btn.textContent = 'Masuk';
}

/* ===== FUNGSI BUKA ADMIN ===== */
function tryAd(){
    var user = firebase.auth().currentUser;
    if(user){
        document.getElementById('adP').style.transform = 'translateX(0)';
        buildAdmin();
    } else {
        document.getElementById('pwMod').classList.add('open');
    }
}

/* ===== TOGGLE SIDEBAR HP ===== */
function toggleAdminSidebar() {
    var sidebar = document.getElementById('adminSidebar');
    var overlay = document.querySelector('.sidebar-overlay');
    if(sidebar) {
        sidebar.classList.toggle('open');
        if(overlay) overlay.classList.toggle('open');
    }
}

/* ===== TOGGLE PEMASUKAN & PENGELUARAN ===== */
function toggleFinMasuk() {
    var wrap = document.getElementById('finMasukWrap');
    var icon = document.getElementById('finMasukIcon');
    if(!wrap) return;
    if(wrap.style.display === 'none') {
        wrap.style.display = 'block';
        if(icon) icon.innerHTML = '▼ Klik untuk tutup';
    } else {
        wrap.style.display = 'none';
        if(icon) icon.innerHTML = '▶ Klik untuk lihat';
    }
}
function toggleFinKeluar() {
    var wrap = document.getElementById('finKeluarWrap');
    var icon = document.getElementById('finKeluarIcon');
    if(!wrap) return;
    if(wrap.style.display === 'none') {
        wrap.style.display = 'block';
        if(icon) icon.innerHTML = '▼ Klik untuk tutup';
    } else {
        wrap.style.display = 'none';
        if(icon) icon.innerHTML = '▶ Klik untuk lihat';
    }
}
}
function loadFromFirebase(){
    db.collection('majalah').doc('data').get().then(function(doc){
        if(doc.exists){
            var d=doc.data();
            if(d.s)Object.keys(d.s).forEach(function(k){D_S[k]=d.s[k];});
            if(d.k)Object.keys(d.k).forEach(function(k){D_K[k]=d.k[k];});
            if(d.sb!==undefined)D_SB=d.sb;
            if(d.st)Object.keys(d.st).forEach(function(k){D_ST[k]=d.st[k];});
            if(d.a)D_A=d.a;
            if(d.t)Object.keys(d.t).forEach(function(k){D_T[k]=d.t[k];});
            if(d.f)Object.keys(d.f).forEach(function(k){D_F[k]=d.f[k];});
            if(d.mading)D_M=d.mading;
            if(d.galeri)D_G=d.galeri;
            if(d.slideshow)D_SL=d.slideshow;
            render();
            try{renderActGrid('');}catch(e){}
            setTimeout(function(){ try{startAutoSlide();}catch(e){} }, 300); // TAMBAHKAN INI
        }
    }).catch(function(e){ console.log('Gagal load firebase:', e); });
}
function tryAd(){
    var u=firebase.auth().currentUser;
    if(u){openAdm();}else{
        document.getElementById('pwMod').classList.add('open');
        document.getElementById('logEmail').value='';
        document.getElementById('logPass').value='';
        document.getElementById('logErr').style.display='none';
    }
}
function clPw(){document.getElementById('pwMod').classList.remove('open');}
function doLogin(){
    var e=document.getElementById('logEmail').value.trim(),p=document.getElementById('logPass').value.trim();
    if(!e||!p){document.getElementById('logErr').textContent='Email dan password wajib diisi';document.getElementById('logErr').style.display='block';return;}
    var b=document.getElementById('btnLogin');b.disabled=true;b.innerHTML='<span class="spinner"></span>';document.getElementById('logErr').style.display='none';
    firebase.auth().signInWithEmailAndPassword(e,p).then(function(){clPw();toast('Login Berhasil');openAdm();}).catch(function(err){document.getElementById('logErr').textContent=err.message;document.getElementById('logErr').style.display='block';b.disabled=false;b.innerHTML='Masuk';});
}
function doLogout(){if(confirm('Yakin ingin logout?')){firebase.auth().signOut().then(function(){closeAdm();toast('Logout Berhasil');});}}
function openAdm(){
    buildAdmin();
    document.getElementById('adP').style.transform='translateX(0)'; 
    document.getElementById('mBtn').style.display='none'; 
    document.getElementById('mBtn').style.opacity='0'; 
    document.getElementById('themeToggle').style.display='none'; //BARU: Sembunyikan tombol tema
    try{loadAdmData();}catch(e){}
}
function closeAdm(){
    document.getElementById('adP').style.transform='translateX(-100%)'; 
    document.getElementById('mBtn').style.display='flex'; 
    document.getElementById('themeToggle').style.display='flex'; //BARU: Tampilkan kembali tombol tema
    setTimeout(function(){document.getElementById('mBtn').style.opacity='1';},100);
}
function loadAdmData(){
    try{
        if(document.getElementById('s_logo'))document.getElementById('s_logo').value=D_S.logo||'';
        if(document.getElementById('s_namaRw'))document.getElementById('s_namaRw').value=D_S.namaRw||'';
        if(document.getElementById('s_alamat'))document.getElementById('s_alamat').value=D_S.alamat||'';
        if(document.getElementById('s_edisi'))document.getElementById('s_edisi').value=D_S.edisi||'';
        if(document.getElementById('s_tanggal'))document.getElementById('s_tanggal').value=D_S.tanggal||'';
        if(document.getElementById('s_deskripsi'))document.getElementById('s_deskripsi').value=D_S.deskripsi||'';
        if(document.getElementById('s_wa'))document.getElementById('s_wa').value=D_S.wa||'';
        if(document.getElementById('s_ig'))document.getElementById('s_ig').value=D_S.ig||'';
        if(document.getElementById('s_email'))document.getElementById('s_email').value=D_S.email||'';
        if(document.getElementById('s_map'))document.getElementById('s_map').value=D_S.map||'';
        if(document.getElementById('s_wa_group'))document.getElementById('s_wa_group').value=D_S.wa_group||'';
        if(document.getElementById('s_tg_group'))document.getElementById('s_tg_group').value=D_S.tg_group||'';
        if(document.getElementById('k_foto'))document.getElementById('k_foto').value=D_K.foto||'';
        if(document.getElementById('k_nama'))document.getElementById('k_nama').value=D_K.nama||'';
        if(document.getElementById('k_jabatan'))document.getElementById('k_jabatan').value=D_K.jabatan||'';
        if(document.getElementById('k_periode'))document.getElementById('k_periode').value=D_K.periode||'';
        if(document.getElementById('k_ttd'))document.getElementById('k_ttd').value=D_K.ttd||'';
        if(document.getElementById('sb_teks'))document.getElementById('sb_teks').value=D_SB||'';
        if(document.getElementById('fe_sawal'))document.getElementById('fe_sawal').value=D_F.saldoAwal||0;
        try{renderSlList();}catch(e){}
        try{renderActList();}catch(e){}
        try{renderFinList();}catch(e){}
        try{renderMdList();}catch(e){}
        try{renderGlList();}catch(e){}
    }catch(e){}
}
function popKet(){
    try{
        if(document.getElementById('k_foto'))document.getElementById('k_foto').value=D_K.foto||'';
        if(document.getElementById('k_nama'))document.getElementById('k_nama').value=D_K.nama||'';
        if(document.getElementById('k_jabatan'))document.getElementById('k_jabatan').value=D_K.jabatan||'';
        if(document.getElementById('k_periode'))document.getElementById('k_periode').value=D_K.periode||'';
        if(document.getElementById('k_ttd'))document.getElementById('k_ttd').value=D_K.ttd||'';
    }catch(e){}
}
function popFin(){
    try{
        if(document.getElementById('fe_sawal'))document.getElementById('fe_sawal').value=D_F.saldoAwal||0;
    }catch(e){}
}
function popMd(){
    try{
        if(document.getElementById('md_oleh'))document.getElementById('md_oleh').value='Admin RW 011';
    }catch(e){}
}
function sSec(id, el){
    try{
        // Tutup sidebar otomatis setelah diklik
        try{toggleAdmMenu();}catch(e){}
        
        document.querySelectorAll('.asec').forEach(function(s){s.style.display='none';});
        document.querySelectorAll('#sideNav .sl').forEach(function(s){s.classList.remove('on');});
        var t=document.getElementById('as-'+id);if(t)t.style.display='block';
        if(el)el.classList.add('on');
        if(id==='ketua')popKet();
        if(id==='struktur')popStr();
        if(id==='kegiatan'){popAct();renderActList();}
        if(id==='keuangan'){popFin();renderFinList();}
        if(id==='mading'){popMd();renderMdList();}
        if(id==='galeri'){renderGlList();}
    }catch(e){}
}

function toggleMediaField(){
    try{
        var t=document.getElementById('ae_mediaType').value;
        var lbl=document.getElementById('ae_mediaLbl');
        var inp=document.getElementById('ae_media');
        if(t==='foto'){lbl.textContent='URL Gambar';inp.placeholder='https://...';}
        else if(t==='youtube'){lbl.textContent='URL YouTube';inp.placeholder='https://youtube.com/watch?v=...';}
        else if(t==='tiktok'){lbl.textContent='URL TikTok';inp.placeholder='https://tiktok.com/@.../video/...';}
        else if(t==='instagram'){lbl.textContent='URL Instagram';inp.placeholder='https://instagram.com/p/...';}
    }catch(e){}
}

function saveAll(){
    try{
        var data={s:D_S,k:D_K,sb:D_SB,st:D_ST,a:D_A,t:D_T,f:D_F,mading:D_M,galeri:D_G,slideshow:D_SL};
        localStorage.setItem('rw_data',JSON.stringify(data));
        try{if(typeof db!=='undefined'&&db&&firebase.auth().currentUser){db.collection('majalah').doc('data').set(data,{merge:true});}}catch(e){}
    }catch(e){}
}

function svSet(){
    try{
        D_S.logo=document.getElementById('s_logo').value.trim();D_S.namaRw=document.getElementById('s_namaRw').value.trim();D_S.alamat=document.getElementById('s_alamat').value.trim();D_S.edisi=document.getElementById('s_edisi').value.trim();D_S.tanggal=document.getElementById('s_tanggal').value.trim();D_S.deskripsi=document.getElementById('s_deskripsi').value.trim();D_S.wa=document.getElementById('s_wa').value.trim();D_S.ig=document.getElementById('s_ig').value.trim();D_S.email=document.getElementById('s_email').value.trim();D_S.map=document.getElementById('s_map').value.trim();D_S.wa_group=document.getElementById('s_wa_group').value.trim();D_S.tg_group=document.getElementById('s_tg_group').value.trim();
        saveAll();toast('Pengaturan disimpan');
    }catch(e){toast('Gagal: '+e.message,1);}
}

function svKet(){
    try{
        D_K.foto=document.getElementById('k_foto').value.trim();D_K.nama=document.getElementById('k_nama').value.trim();D_K.jabatan=document.getElementById('k_jabatan').value.trim();D_K.periode=document.getElementById('k_periode').value.trim();D_K.ttd=document.getElementById('k_ttd').value.trim();
        saveAll();toast('Data Ketua disimpan');
    }catch(e){toast('Gagal: '+e.message,1);}
}

function svSb(){try{D_SB=document.getElementById('sb_teks').value;saveAll();toast('Sambutan disimpan');}catch(e){toast('Gagal: '+e.message,1);}}
function svSal(){try{D_F.saldoAwal=Number(document.getElementById('fe_sawal').value)||0;saveAll();toast('Saldo awal disimpan');}catch(e){toast('Gagal: '+e.message,1);}}

function svMas(){
    try{
        var ket=document.getElementById('fe_mk').value.trim(),jml=Number(document.getElementById('fe_jm').value),tgl=document.getElementById('fe_tgl').value,kat=document.getElementById('fe_kat_m').value,ctt=document.getElementById('fe_ctt').value.trim();
        if(!ket||!jml||!tgl){toast('Keterangan, Jumlah, dan Tanggal wajib diisi',1);return;}
        D_F.masuk.push({ket:ket,jml:jml,tgl:tgl,kat:kat,ctt:ctt,id:'m_'+Date.now()});
        document.getElementById('fe_mk').value='';document.getElementById('fe_jm').value='';document.getElementById('fe_tgl').value='';document.getElementById('fe_ctt').value='';
        saveAll();renderFinList();toast('Pemasukan ditambahkan');
    }catch(e){toast('Gagal: '+e.message,1);}
}

function svKel(){
    try{
        var ket=document.getElementById('fe_kk').value.trim(),jml=Number(document.getElementById('fe_jk').value),tgl=document.getElementById('fe_tk').value,kat=document.getElementById('fe_kat_k').value,ctt=document.getElementById('fe_ctk').value.trim();
        if(!ket||!jml||!tgl){toast('Keterangan, Jumlah, dan Tanggal wajib diisi',1);return;}
        D_F.keluar.push({ket:ket,jml:jml,tgl:tgl,kat:kat,ctt:ctt,id:'k_'+Date.now()});
        document.getElementById('fe_kk').value='';document.getElementById('fe_jk').value='';document.getElementById('fe_tk').value='';document.getElementById('fe_ctk').value='';
        saveAll();renderFinList();toast('Pengeluaran ditambahkan');
    }catch(e){toast('Gagal: '+e.message,1);}
}

function svSl(){
    try{
        var url=document.getElementById('sl_url').value.trim();
        if(!url){toast('URL gambar wajib diisi',1);return;}
        D_SL.push(url);document.getElementById('sl_url').value='';
        saveAll();renderSlList();toast('Slideshow ditambahkan');
    }catch(e){toast('Gagal: '+e.message,1);}
}

function svMading(){
    try{
        var id=document.getElementById('md_id').value;
        var obj={id:id||'md_'+Date.now(),judul:document.getElementById('md_judul').value.trim(),isi:document.getElementById('md_isi').value.trim(),oleh:document.getElementById('md_oleh').value.trim(),tgl:new Date().toISOString().split('T')[0]};
        if(!obj.judul||!obj.isi){toast('Judul dan Isi wajib diisi',1);return;}
        if(id){var idx=D_M.findIndex(function(x){return x.id==id;});if(idx>-1)D_M[idx]=obj;}else{D_M.push(obj);}
        document.getElementById('md_judul').value='';document.getElementById('md_isi').value='';document.getElementById('md_id').value='';
        saveAll();renderMdList();toast('Pengumuman disimpan');
    }catch(e){toast('Gagal: '+e.message,1);}
}

function popStr(){
    try{
        if(document.getElementById('st_wakil'))document.getElementById('st_wakil').value=D_ST.wakil||'';
        if(document.getElementById('st_sek'))document.getElementById('st_sek').value=D_ST.sek||'';
        if(document.getElementById('st_ben'))document.getElementById('st_ben').value=D_ST.ben||'';
        if(document.getElementById('st_fw'))document.getElementById('st_fw').value=D_ST.fotoWakil||'';
        if(document.getElementById('st_fse'))document.getElementById('st_fse').value=D_ST.fotoSek||'';
        if(document.getElementById('st_fbe'))document.getElementById('st_fbe').value=D_ST.fotoBen||'';
        for(var i=0;i<12;i++){var sEl=document.getElementById('st_s'+(i+1));if(sEl)sEl.value=D_ST.s[i]||'';var fsEl=document.getElementById('st_fs'+(i+1));if(fsEl)fsEl.value=(D_ST.fotoS&&D_ST.fotoS[i])?D_ST.fotoS[i]:'';}
        for(var j=0;j<6;j++){var rEl=document.getElementById('st_r'+(j+1));var frEl=document.getElementById('st_fr'+(j+1));if(rEl)rEl.value=D_ST.r[j]||'';if(frEl)frEl.value=(D_ST.fotoR&&D_ST.fotoR[j])?D_ST.fotoR[j]:'';}
    }catch(e){}
}

function svStr(){
    try{
        D_ST.wakil=document.getElementById('st_wakil').value.trim();D_ST.sek=document.getElementById('st_sek').value.trim();D_ST.ben=document.getElementById('st_ben').value.trim();D_ST.fotoWakil=document.getElementById('st_fw').value.trim();D_ST.fotoSek=document.getElementById('st_fse').value.trim();D_ST.fotoBen=document.getElementById('st_fbe').value.trim();
        D_ST.s=[];D_ST.fotoS=[];for(var i=0;i<12;i++){var sEl=document.getElementById('st_s'+(i+1));D_ST.s.push(sEl?sEl.value.trim():'');var fsEl=document.getElementById('st_fs'+(i+1));D_ST.fotoS.push(fsEl?fsEl.value.trim():'');}
        D_ST.r=[];D_ST.fotoR=[];for(var j=0;j<6;j++){var rEl=document.getElementById('st_r'+(j+1));var frEl=document.getElementById('st_fr'+(j+1));D_ST.r.push(rEl?rEl.value.trim():'');D_ST.fotoR.push(frEl?frEl.value.trim():'');}
        saveAll();toast('Struktur disimpan');
    }catch(e){toast('Gagal: '+e.message,1);}
}

function popAct(id){
    try{rsAF();if(!id)return;var a=D_A.find(function(x){return x.id==id;});if(!a)return;document.getElementById('ae_id').value=a.id;document.getElementById('ae_title').value=a.title||'';document.getElementById('ae_desc').value=a.desc||'';document.getElementById('ae_cat').value=a.cat||'';document.getElementById('ae_date').value=a.date||'';document.getElementById('ae_size').value=a.size||'normal';document.getElementById('ae_mediaType').value=a.mediaType||'foto';toggleMediaField();document.getElementById('ae_media').value=a.media||'';}catch(e){}
}

function rsAF(){try{document.getElementById('ae_id').value='';document.getElementById('ae_title').value='';document.getElementById('ae_desc').value='';document.getElementById('ae_cat').value='';document.getElementById('ae_date').value='';document.getElementById('ae_size').value='normal';document.getElementById('ae_mediaType').value='foto';toggleMediaField();document.getElementById('ae_media').value='';}catch(e){}}

function svAct(){
    try{
        var id=document.getElementById('ae_id').value;
        var obj={id:id||'act_'+Date.now(),title:document.getElementById('ae_title').value.trim(),desc:document.getElementById('ae_desc').value.trim(),cat:document.getElementById('ae_cat').value,date:document.getElementById('ae_date').value,size:document.getElementById('ae_size').value,mediaType:document.getElementById('ae_mediaType').value,media:document.getElementById('ae_media').value.trim()};
        if(!obj.title||!obj.cat||!obj.date){toast('Judul, Kategori, dan Tanggal wajib diisi',1);return;}
        if(id){var idx=D_A.findIndex(function(x){return x.id==id;});if(idx>-1)D_A[idx]=obj;}else{D_A.push(obj);}
        saveAll();renderActList();rsAF();toast('Kegiatan disimpan');
    }catch(e){toast('Gagal: '+e.message,1);}
}

function svGal(){
    try{
        var url=document.getElementById('gl_url').value.trim();
        if(!url){toast('URL foto wajib diisi',1);return;}
        var cap=document.getElementById('gl_cap').value.trim();
        D_G.push({url:url,caption:cap,id:'gal_'+Date.now()});
        document.getElementById('gl_url').value='';document.getElementById('gl_cap').value='';
        saveAll();renderGlList();toast('Foto ditambahkan');
    }catch(e){toast('Gagal: '+e.message,1);}
}

function renderSlList(){
    try{
        var c=document.getElementById('slList');if(!c)return;var h='';
        for(var i=0;i<D_SL.length;i++){h+='<div style="position:relative;border-radius:.5rem;overflow:hidden;border:1px solid rgba(255,255,255,.08);aspect-ratio:16/9"><img src="'+esc(D_SL[i])+'" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display=\'none\'"><button onclick="delSl('+i+')" style="position:absolute;top:4px;right:4px;background:rgba(0,0,0,.7);border:none;color:#f87171;cursor:pointer;width:24px;height:24px;border-radius:50%;font-size:12px">✕</button></div>';}
        c.innerHTML=h||'<p style="color:#555;font-size:.8rem;grid-column:span 4">Kosong</p>';
    }catch(e){}
}
function delSl(i){try{D_SL.splice(i,1);saveAll();renderSlList();toast('Slideshow dihapus');}catch(e){}}

function renderActList(){
    try{
        var c=document.getElementById('actList'),cnt=document.getElementById('actCnt');if(!c)return;if(cnt)cnt.textContent=D_A.length;
        if(!D_A.length){c.innerHTML='<p style="text-align:center;color:#666;padding:1.5rem 0">Kosong</p>';return;}
        var h='';for(var i=D_A.length-1;i>=0;i--){var a=D_A[i];h+='<div style="display:flex;align-items:center;justify-content:space-between;padding:.6rem 0;border-bottom:1px solid rgba(255,255,255,.04)"><div style="flex:1;min-width:0"><p style="font-size:.82rem;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+esc(a.title)+'</p><p style="font-size:.65rem;color:#777">'+(catCf[a.cat]?catCf[a.cat].l:a.cat)+' • '+fmtD(a.date)+'</p></div><div style="display:flex;gap:.4rem;flex-shrink:0"><button class="be" onclick="popAct(\''+a.id+'\')">Edit</button><button class="bd" onclick="delAct(\''+a.id+'\')">Hapus</button></div></div>';}
        c.innerHTML=h;
    }catch(e){}
}
function delAct(id){try{D_A=D_A.filter(function(x){return x.id!==id;});saveAll();renderActList();toast('Kegiatan dihapus');}catch(e){}}

function renderFinList(){
    try{
        var c=document.getElementById('finList'),cnt=document.getElementById('finCnt');if(!c)return;
        var all=[];
        for(var i=0;i<D_F.masuk.length;i++){var m=D_F.masuk[i];all.push({tgl:m.tgl,ket:m.ket,jml:m.jml,tipe:'masuk',idx:i});}
        for(var j=0;j<D_F.keluar.length;j++){var k=D_F.keluar[j];all.push({tgl:k.tgl,ket:k.ket,jml:k.jml,tipe:'keluar',idx:j});}
        all.sort(function(a,b){return a.tgl>b.tgl?-1:1;});
        if(cnt)cnt.textContent=all.length;
        if(!all.length){c.innerHTML='<p style="text-align:center;color:#666;padding:1.5rem 0">Kosong</p>';return;}
        var h='';
        for(var x=0;x<all.length;x++){
            var t=all[x];
            h+='<div style="display:flex;align-items:center;justify-content:space-between;padding:.6rem 0;border-bottom:1px solid rgba(255,255,255,.04)"><div style="flex:1"><p style="font-size:.82rem">'+esc(t.ket)+'</p><p style="font-size:.65rem;color:#777">'+fmtD(t.tgl)+'</p></div><p style="font-size:.82rem;font-weight:600;font-family:Geist Mono,monospace;color:'+(t.tipe==='masuk'?'#4ade80':'#f87171')+'">'+(t.tipe==='masuk'?'+':'-')+fmt(t.jml)+'</p><button class="bd" style="margin-left:.5rem" onclick="delFin(\''+t.tipe+'\','+t.idx+')">✕</button></div>';
        }
        c.innerHTML=h;
    }catch(e){}
}
function delFin(tipe,idx){
    try{
        if(tipe==='masuk')D_F.masuk.splice(idx,1);
        else D_F.keluar.splice(idx,1);
        saveAll();renderFinList();toast('Transaksi dihapus');
    }catch(e){toast('Gagal menghapus',1);}
}

function renderMdList(){
    try{
        var c=document.getElementById('mdList'),cnt=document.getElementById('mdCnt');if(!c)return;if(cnt)cnt.textContent=D_M.length;
        if(!D_M.length){c.innerHTML='<p style="text-align:center;color:#666;padding:1.5rem 0">Kosong</p>';return;}
        var h='';for(var i=D_M.length-1;i>=0;i--){var m=D_M[i];h+='<div style="padding:.8rem 0;border-bottom:1px solid rgba(255,255,255,.04)"><div style="display:flex;justify-content:space-between;align-items:start"><div><p style="font-size:.85rem;font-weight:500">'+esc(m.judul)+'</p><p style="font-size:.65rem;color:#777;margin-top:.2rem">'+esc(m.oleh)+' • '+fmtD(m.tgl)+'</p></div><div style="display:flex;gap:.4rem"><button class="be" onclick="editMd(\''+m.id+'\')">Edit</button><button class="bd" onclick="delMd(\''+m.id+'\')">Hapus</button></div></div><p style="font-size:.75rem;color:#aaa;margin-top:.4rem;line-height:1.5;max-height:60px;overflow:hidden">'+esc(m.isi)+'</p></div>';}
        c.innerHTML=h;
    }catch(e){}
}
function editMd(id){try{var m=D_M.find(function(x){return x.id==id;});if(!m)return;document.getElementById('md_id').value=m.id;document.getElementById('md_judul').value=m.judul;document.getElementById('md_isi').value=m.isi;document.getElementById('md_oleh').value=m.oleh;}catch(e){}}
function delMd(id){try{D_M=D_M.filter(function(x){return x.id!==id;});saveAll();renderMdList();toast('Pengumuman dihapus');}catch(e){}}

function renderGlList(){
    try{
        var c=document.getElementById('glList'),cnt=document.getElementById('glCnt');if(!c)return;if(cnt)cnt.textContent=D_G.length;
        if(!D_G.length){c.innerHTML='<p style="grid-column:span 3;text-align:center;color:#666;padding:1.5rem 0">Kosong</p>';return;}
        var h='';for(var i=0;i<D_G.length;i++){var g=D_G[i];h+='<div style="position:relative;border-radius:.5rem;overflow:hidden;border:1px solid rgba(255,255,255,.08);aspect-ratio:1"><img src="'+esc(g.url)+'" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display=\'none\'"><button onclick="delGl(\''+g.id+'\')" style="position:absolute;top:4px;right:4px;background:rgba(0,0,0,.7);border:none;color:#f87171;cursor:pointer;width:24px;height:24px;border-radius:50%;font-size:12px">✕</button></div>';}
        c.innerHTML=h;
    }catch(e){}
}
function delGl(id){try{D_G=D_G.filter(function(x){return x.id!==id;});saveAll();renderGlList();toast('Foto dihapus');}catch(e){}}
function popGl(){}
function toggleFinMasuk(){
    var w=document.getElementById('finMasukWrap');
    var i=document.getElementById('finMasukIcon');
    if(!w)return;
    if(w.style.display==='none'||!w.style.display){
        w.style.display='block';
        if(i)i.textContent='▼ Klik untuk tutup';
    }else{
        w.style.display='none';
        if(i)i.textContent='▶ Klik untuk lihat';
    }
}
function toggleFinKeluar(){
    var w=document.getElementById('finKeluarWrap');
    var i=document.getElementById('finKeluarIcon');
    if(!w)return;
    if(w.style.display==='none'||!w.style.display){
        w.style.display='block';
        if(i)i.textContent='▼ Klik untuk tutup';
    }else{
        w.style.display='none';
        if(i)i.textContent='▶ Klik untuk lihat';
    }
}
var _galTimer=null;var _galCur=0;
function goToSlide(idx){
    var total=D_G.length;if(!total)return;
    if(idx<0)idx=total-1;if(idx>=total)idx=0;
    _galCur=idx;
    var track=document.getElementById('galeriTrack');
    if(track)track.style.transform='translateX(-'+(_galCur*100)+'%)';
    var dots=document.querySelectorAll('#slideDots .dot');
    for(var i=0;i<dots.length;i++){dots[i].style.background=(i===_galCur)?'#fff':'rgba(255,255,255,.3)';}
}
function nextSlide(){goToSlide(_galCur+1);}
function prevSlide(){goToSlide(_galCur-1);}
function startAutoSlide(){
    if(_galTimer)clearInterval(_galTimer);
    if(D_G.length<=1)return;
    _galTimer=setInterval(function(){nextSlide();},4000);
}
/* ===== MODE GELAP/TERANG ===== */
function toggleTheme() {
    var html = document.documentElement;
    var icon = document.getElementById('themeIcon');
    var current = html.getAttribute('data-theme');
    
    if(current === 'light') {
        html.removeAttribute('data-theme');
        localStorage.setItem('rw_theme', 'dark');
        if(icon) icon.setAttribute('icon', 'solar:moon-bold-duotone');
        document.getElementById('themeToggle').style.background = 'rgba(255,255,255,0.08)';
        document.getElementById('themeToggle').style.borderColor = 'rgba(255,255,255,0.12)';
        document.getElementById('themeToggle').style.color = '#fff';
    } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('rw_theme', 'light');
        if(icon) icon.setAttribute('icon', 'solar:sun-bold-duotone');
        document.getElementById('themeToggle').style.background = 'rgba(0,0,0,0.08)';
        document.getElementById('themeToggle').style.borderColor = 'rgba(0,0,0,0.12)';
        document.getElementById('themeToggle').style.color = '#1a1a1a';
    }
}

// Cek tema tersimpan saat halaman dimuat
(function() {
    var theme = localStorage.getItem('rw_theme');
    if(theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        var icon = document.getElementById('themeIcon');
        if(icon) icon.setAttribute('icon', 'solar:sun-bold-duotone');
        document.getElementById('themeToggle').style.background = 'rgba(0,0,0,0.08)';
        document.getElementById('themeToggle').style.borderColor = 'rgba(0,0,0,0.12)';
        document.getElementById('themeToggle').style.color = '#1a1a1a';
    }
})();
var _curCat='';
function renderActGrid(cat){
    var g=document.getElementById('actGrid');if(!g)return;
    var h='',data=D_A;
    if(cat)data=data.filter(function(a){return a.cat===cat;});
    data.sort(function(a,b){return a.date>b.date?-1:1;});
    if(!data.length){g.innerHTML='<div style="grid-column:span 2;text-align:center;padding:3rem 1rem;color:#555"><p>Belum ada kegiatan</p></div>';return;}
    for(var i=0;i<data.length;i++){
        var a=data[i],cf=catCf[a.cat]||{l:a.cat,c:'#888'},isL=a.size==='large',sp=isL?'span2':'';
        h+='<div class="ac an '+sp+'">';
        if(a.mediaType==='foto'&&a.media){h+='<div style="position:relative;aspect-ratio:16/9;background:#111;overflow:hidden;border-radius:1.1rem 1.1rem 0 0"><img src="'+esc(a.media)+'" style="width:100%;height:100%;object-fit:cover" loading="lazy" onerror="this.parentNode.innerHTML=\'<div style=&quot;display:flex;align-items:center;justify-content:center;height:100%;color:#555&quot;>Gagal memuat</div>\'"></div>';}
        else if(a.mediaType&&a.mediaType!=='foto'&&a.media){var emb=getEmbed(a.media,a.mediaType);if(emb){h+='<div style="position:relative;aspect-ratio:16/9;background:#000;overflow:hidden;border-radius:1.1rem 1.1rem 0 0"><iframe src="'+emb+'" style="width:100%;height:100%;border:0" allow="autoplay;encrypted-media" allowfullscreen loading="lazy"></iframe></div>';}else{h+='<div style="aspect-ratio:16/9;background:#111;border-radius:1.1rem 1.1rem 0 0;display:flex;align-items:center;justify-content:center;color:#555">Link media tidak valid</div>';}}
        else{h+='<div style="aspect-ratio:16/9;background:#111;border-radius:1.1rem 1.1rem 0 0;display:flex;align-items:center;justify-content:center;color:#555">Tidak ada media</div>';}
        h+='<div style="padding:1.2rem 1.2rem 1.5rem"><div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.6rem">'+getMediaIcon(a.mediaType)+'<span style="font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:'+cf.c+'">'+cf.l+'</span></div>';
        h+='<h3 style="font-family:Space Grotesk;font-size:1.1rem;font-weight:600;margin-bottom:.5rem;color:#fff">'+esc(a.title)+'</h3>';
        h+='<p style="font-size:.8rem;color:#aaa;line-height:1.6;margin-bottom:.8rem;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden">'+esc(a.desc)+'</p>';
        h+='<div style="display:flex;align-items:center;justify-content:space-between"><span style="font-size:.7rem;color:#666;font-family:Geist Mono,monospace">'+fmtD(a.date)+'</span>';
        if(a.mediaType&&a.mediaType!=='foto'&&a.media)h+='<a href="'+esc(a.media)+'" target="_blank" rel="noopener" style="font-size:.7rem;color:var(--cc);text-decoration:none">Buka Link ↗</a>';
        h+='</div></div></div>';
    }
    g.innerHTML=h;
}
function filtCat(c){
    _curCat=c;
    document.querySelectorAll('#catBar .cfb').forEach(function(b){b.classList.remove('on');});
    if(!c){document.querySelector('#catBar .cfb').classList.add('on');}else{var btns=document.querySelectorAll('#catBar .cfb');for(var i=0;i<btns.length;i++){if(btns[i].textContent.trim()===(catCf[c]?catCf[c].l:c)){btns[i].classList.add('on');break;}}}
    renderActGrid(c);
}
function doSearch(q){
    var g=document.getElementById('actGrid');if(!g)return;
    q=q.toLowerCase();var h='',data=D_A.filter(function(a){return a.title.toLowerCase().indexOf(q)!==-1||a.desc.toLowerCase().indexOf(q)!==-1||(catCf[a.cat]&&catCf[a.cat].l.toLowerCase().indexOf(q)!==-1);});
    if(!data.length){g.innerHTML='<div style="grid-column:span 2;text-align:center;padding:3rem 1rem;color:#555"><p>Tidak ditemukan</p></div>';return;}
    for(var i=0;i<data.length;i++){
        var a=data[i],cf=catCf[a.cat]||{l:a.cat,c:'#888'},isL=a.size==='large',sp=isL?'span2':'';
        h+='<div class="ac an '+sp+'">';
        if(a.mediaType==='foto'&&a.media){h+='<div style="position:relative;aspect-ratio:16/9;background:#111;overflow:hidden;border-radius:1.1rem 1.1rem 0 0"><img src="'+esc(a.media)+'" style="width:100%;height:100%;object-fit:cover" loading="lazy"></div>';}
        else if(a.mediaType&&a.mediaType!=='foto'&&a.media){var emb=getEmbed(a.media,a.mediaType);if(emb){h+='<div style="position:relative;aspect-ratio:16/9;background:#000;overflow:hidden;border-radius:1.1rem 1.1rem 0 0"><iframe src="'+emb+'" style="width:100%;height:100%;border:0" allow="autoplay;encrypted-media" allowfullscreen loading="lazy"></iframe></div>';}}
        h+='<div style="padding:1.2rem 1.2rem 1.5rem"><div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.6rem">'+getMediaIcon(a.mediaType)+'<span style="font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:'+cf.c+'">'+cf.l+'</span></div>';
        h+='<h3 style="font-family:Space Grotesk;font-size:1.1rem;font-weight:600;margin-bottom:.5rem;color:#fff">'+esc(a.title)+'</h3>';
        h+='<p style="font-size:.8rem;color:#aaa;line-height:1.6;margin-bottom:.8rem;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden">'+esc(a.desc)+'</p>';
        h+='<span style="font-size:.7rem;color:#666;font-family:Geist Mono,monospace">'+fmtD(a.date)+'</span></div></div>';
    }
    g.innerHTML=h;
}

function loadAduanFromDB(){
    var c=document.getElementById('adList');if(!c)return;
    try{
        if(typeof db!=='undefined'&&db){
            c.innerHTML='<p style="text-align:center;color:#666;padding:1.5rem 0">Menghubungkan ke database...</p>';
            db.collection('aduan').orderBy('timestamp','desc').onSnapshot(function(snap){
                D_AD=[];snap.forEach(function(doc){var d=doc.data();d.id=doc.id;D_AD.push(d);});
                renderAdList();
            },function(err){console.log('Err aduan:',err);c.innerHTML='<p style="text-align:center;color:#f87171;padding:1.5rem 0">Gagal memuat aduan</p>';});
        }else{renderAdList();}
    }catch(e){renderAdList();}
}

function renderAdList(){
    var c=document.getElementById('adList'),cnt=document.getElementById('adCnt');if(!c)return;
    if(cnt)cnt.textContent=D_AD.length;
    if(!D_AD.length){c.innerHTML='<p style="text-align:center;color:#666;padding:1.5rem 0">Belum ada aduan</p>';return;}
    var h='';
    for(var i=0;i<D_AD.length;i++){
        var a=D_AD[i];
        var stC='baru',stT='Baru';
        if(a.status==='proses'){stC='proses';stT='Diproses';}
        if(a.status==='selesai'){stC='selesai';stT='Selesai';}
        h+='<div class="aduan-card" style="margin-bottom:.8rem">';
        h+='<div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:.5rem"><div><p style="font-size:.85rem;font-weight:500">'+esc(a.nama||'Anonim')+'</p><p style="font-size:.65rem;color:#777">'+esc(a.tgl||'-')+'</p></div><span class="badge badge-'+stC+'">'+stT+'</span></div>';
        h+='<p style="font-size:.8rem;line-height:1.6;margin-bottom:.8rem">'+esc(a.pesan)+'</p>';
        h+='<div style="display:flex;gap:.4rem">';
        if(a.status!=='proses')h+='<button class="be" onclick="updAdSt(\''+a.id+'\',\'proses\')">Proses</button>';
        if(a.status!=='selesai')h+='<button class="be" style="color:#4ade80;border-color:rgba(34,197,94,.2);background:rgba(34,197,94,.08)" onclick="updAdSt(\''+a.id+'\',\'selesai\')">Selesai</button>';
        h+='<button class="bd" onclick="delAd(\''+a.id+'\')">Hapus</button>';
        h+='</div></div>';
    }
    c.innerHTML=h;
}

function updAdSt(id,st){
    try{if(typeof db!=='undefined'&&db){db.collection('aduan').doc(id).update({status:st});}}catch(e){}
}

function delAd(id){
    if(!confirm('Hapus aduan ini?'))return;
    try{if(typeof db!=='undefined'&&db){db.collection('aduan').doc(id).delete();}}catch(e){}
}

function kirimAduan(){
    try{
        var rt=document.getElementById('ad_rt');
        var isi=document.getElementById('ad_isi');
        var statusSpan=document.getElementById('adStatus');
        
        if(!rt||!isi){toast('Form aduan tidak ditemukan',1);return;}
        
        var rtVal=rt.value.trim(),isiVal=isi.value.trim();
        if(!rtVal||!isiVal){toast('Asal RT dan Isi Aduan wajib diisi',1);return;}
        
        var submitBtn=document.querySelector('#sec-8 .bs');
        if(submitBtn){submitBtn.disabled=true;submitBtn.innerHTML='<span class="spinner"></span> Mengirim...';}
        
        var obj={rt:rtVal,pesan:isiVal,status:'baru',tgl:new Date().toLocaleDateString('id-ID'),timestamp:firebase.firestore.FieldValue.serverTimestamp()};
        
        if(typeof db!=='undefined'&&db){
            db.collection('aduan').add(obj).then(function(){
                toast('Aduan berhasil dikirim');
                rt.value='';isi.value='';
                if(statusSpan){statusSpan.style.display='inline';setTimeout(function(){statusSpan.style.display='none';},3000);}
                if(submitBtn){submitBtn.disabled=false;submitBtn.innerHTML='Kirim Aduan';}
            }).catch(function(err){
                toast('Gagal mengirim: '+err.message,1);
                if(submitBtn){submitBtn.disabled=false;submitBtn.innerHTML='Kirim Aduan';}
            });
        }else{
            toast('Database tidak tersedia',1);
            if(submitBtn){submitBtn.disabled=false;submitBtn.innerHTML='Kirim Aduan';}
        }
    }catch(e){toast('Error: '+e.message,1);}
}
// --- BAGIAN PENUTUP ---
setTimeout(function(){
    try{ 
        render(); 
        try{ restoreLikes(); }catch(e){} 
    }catch(e){}
}, 100);

try{
    if(typeof db!=='undefined' && db){
        setTimeout(function(){ if(typeof loadFromFirebase==='function') loadFromFirebase(); }, 500);
    }
}catch(e){}

setTimeout(function(){ initPage(); }, 1000);

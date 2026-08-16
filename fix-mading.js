const fs = require('fs');
let c = fs.readFileSync('app.js', 'utf8');

// 1. Tambahkan gambar di tampilan mading
c = c.replace(
    "h+='<div class=\"mading-card an\"><div style=\"display:flex;justify-content:space-between;align-items:start;margin-bottom:.7rem\"><h3",
    "h+='<div class=\"mading-card an\">if(m.gambar){h+='<div style=\"width:100%;height:200px;background:#111;border-radius:1rem 1rem 0 0;overflow:hidden;margin-bottom:1rem\"><img src=\"'+esc(m.gambar)+'\" style=\"width:100%;height:100%;object-fit:cover\" loading=\"lazy\"></div>';}h+='<div style=\"display:flex;justify-content:space-between;align-items:start;margin-bottom:.7rem\"><h3"
);

// 2. Tambah input gambar di form admin
c = c.replace(
    "<div><label class=\"lb\">Oleh</label><input id=\"md_oleh\" class=\"fi\" value=\"Admin RW 011\"></div>",
    "<div><label class=\"lb\">URL Gambar</label><input id=\"md_gambar\" class=\"fi\" placeholder=\"https://...\"></div><div><label class=\"lb\">Oleh</label><input id=\"md_oleh\" class=\"fi\" value=\"Admin RW 011\"></div>"
);

// 3. Tambah perintah simpan gambar
c = c.replace(
    "var obj={id:id||'md_'+Date.now(),judul",
    "var obj={id:id||'md_'+Date.now(),gambar:document.getElementById('md_gambar').value.trim(),judul"
);

// 4. Tambah perintah load gambar saat edit
c = c.replace(
    "document.getElementById('md_oleh').value=m.oleh;",
    "document.getElementById('md_gambar').value=m.gambar||'';document.getElementById('md_oleh').value=m.oleh;"
);

fs.writeFileSync('app.js', c);
console.log("Mading fix berhasil!");

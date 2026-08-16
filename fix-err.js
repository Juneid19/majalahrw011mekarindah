const fs = require('fs');
let c = fs.readFileSync('app.js', 'utf8');
c = c.replace(
  "h+='<div class=\"mading-card an\">if(m.gambar){h+='<div style=\"display:flex;justify-content:space-between;align-items:start;margin-bottom:.7rem\"><h3",
  "h+='<div class=\"mading-card an\">';if(m.gambar){h+='<div style=\"width:100%;height:200px;background:#111;border-radius:1rem 1rem 0 0;overflow:hidden;margin-bottom:1rem\"><img src=\"'+esc(m.gambar)+'\" style=\"width:100%;height:100%;object-fit:cover\" loading=\"lazy\"></div>';}h+='<div style=\"display:flex;justify-content:space-between;align-items:start;margin-bottom:.7rem\"><h3"
);
fs.writeFileSync('app.js', c);
console.log("Error fixed!");

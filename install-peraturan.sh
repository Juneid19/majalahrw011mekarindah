#!/bin/bash
cd ~/majalah-rw011

echo "=== Cek struktur ==="
ls -la js/ 2>/dev/null || echo "Folder js/ tidak ada"
ls -la *.js 2>/dev/null || echo "Tidak ada js di root"

echo ""
echo "=== Cek index.html ==="
grep -n "script" index.html | tail -10

echo ""
echo "=== Cek variabel yang dibutuhkan ==="
grep -l "D_M" *.js js/*.js 2>/dev/null || echo "D_M TIDAK DITEMUKAN"
grep -l "D_A" *.js js/*.js 2>/dev/null || echo "D_A TIDAK DITEMUKAN"
grep -l "saveAll" *.js js/*.js 2>/dev/null || echo "saveAll TIDAK DITEMUKAN"
grep -l "renderMdList" *.js js/*.js 2>/dev/null || echo "renderMdList TIDAK DITEMUKAN"
grep -l "magV" *.html *.js js/*.js 2>/dev/null || echo "magV TIDAK DITEMUKAN"

echo ""
echo "=== Selesai ==="

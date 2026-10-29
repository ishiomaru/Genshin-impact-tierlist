import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
let marked;
try { ({marked}=await import('marked')); }
catch { ({marked}=await import(pathToFileURL(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES+'/marked/lib/marked.esm.js'))); }
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const data=JSON.parse(fs.readFileSync(path.join(root,'experiment/data.json'),'utf8'));
const md=fs.readFileSync(path.join(root,'source/report.md'),'utf8');
const renderer=new marked.Renderer();
renderer.html=({text})=>esc(text);
let headingIndex=0;
const headings=[];
renderer.heading=function({tokens,depth,text}){
  const id='src-'+(++headingIndex);
  if(depth<=2)headings.push({id,text});
  return `<h${depth} id="${id}">${this.parser.parseInline(tokens)}</h${depth}>`;
};
const defaultTable=renderer.table.bind(renderer);
renderer.table=function(token){return `<div class="table-scroll" tabindex="0" role="region" aria-label="原文の表">${defaultTable(token)}</div>`};
const original=marked.parse(md,{renderer});
for(const r of data.records)r.html=marked.parse(r.raw,{renderer:new marked.Renderer()});
const template=fs.readFileSync(path.join(root,'experiment/template.html'),'utf8');
const html=template.replace('/*__DATA__*/',JSON.stringify(data).replace(/</g,'\\u003c'))
 .replace('<!--__ORIGINAL__-->',original)
 .replace('<!--__TOC__-->',headings.map(h=>`<a href="#${h.id}">${esc(h.text)}</a>`).join(''));
fs.writeFileSync(path.join(root,'experiment/prototype.html'),html);
console.log(JSON.stringify({output:'experiment/prototype.html',bytes:Buffer.byteLength(html),headings:headingIndex,records:data.records.length}));

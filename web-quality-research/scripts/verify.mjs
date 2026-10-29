// Test the representation pilot, not the effectiveness of a production method.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath,pathToFileURL} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
let playwright;
try{playwright=await import('playwright')}catch{playwright=await import(pathToFileURL(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES+'/playwright/index.mjs'))}
const opts={headless:true};
if(process.env.BROWSER_EXECUTABLE)opts.executablePath=process.env.BROWSER_EXECUTABLE;
if(process.env.QA_CHROMIUM_MODULE){const m=await import(pathToFileURL(process.env.QA_CHROMIUM_MODULE));opts.args=m.default.args;}
const browser=await playwright.chromium.launch(opts);
const base=process.env.BASE_URL||'http://127.0.0.1:8765';
const result={kind:'representation-feasibility-pilot',browser:browser.version(),platform:process.platform,
  executed_at_utc:new Date().toISOString(),checks:[],screenshots:'Temporary QA only; excluded from deliverables',limitations:['Not a Codex CLI generation experiment','No human preference or comprehension study','No field performance, Safari or screen-reader test']};
const shotDir=process.env.QA_SCREENSHOTS||path.join(root,'../qa-screenshots');fs.mkdirSync(shotDir,{recursive:true});
let fontCss='';
if(process.env.QA_FONT_ROOT){
  for(const family of ['noto-sans-jp','noto-serif-jp']){
    const dir=path.join(process.env.QA_FONT_ROOT,family);
    let css=fs.readFileSync(path.join(dir,'400.css'),'utf8');
    css=css.replace(/url\(\.\/files\/([^)]*\.woff)\) format\('woff'\)/g,'').replace(/,\s*;/g,';');
    css=css.replace(/url\(\.\/files\/([^)]*\.woff2)\)/g,(_,f)=>'url(data:font/woff2;base64,'+fs.readFileSync(path.join(dir,'files',f)).toString('base64')+')');
    fontCss+=css;
  }
  fontCss+=':root{--sans:"Noto Sans JP",sans-serif;--display:"Noto Serif JP",serif}';
}
const check=(name,detail=true)=>result.checks.push({name,pass:true,detail});
const allErrors=[];
let axePath=process.env.AXE_PATH;
if(!axePath){try{axePath=fileURLToPath(import.meta.resolve('axe-core/axe.min.js'));}catch{}}
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
 page.on('pageerror',e=>allErrors.push(String(e)));
 for(const width of [1440,768,390]){
  for(const view of ['read','explore','story']){
   await page.setViewportSize({width,height:1000});
   await page.goto(base+'/experiment/prototype.html?view='+view);
   if(fontCss)await page.addStyleTag({content:fontCss});
   await page.evaluate(()=>document.fonts.ready);
   const bounds=await page.evaluate(()=>({viewport:innerWidth,document:document.documentElement.scrollWidth}));
   assert(bounds.document<=bounds.viewport+1,JSON.stringify({view,width,bounds}));check(`${view}/${width}: no page-wide horizontal overflow`,bounds);
   assert.equal(await page.locator('.original h4').count(),77);check(`${view}/${width}: full original 77 detail headings retained`);
   assert.equal(await page.locator('.variants [aria-current]').getAttribute('data-view'),view);
   if(axePath){await page.addScriptTag({path:axePath});const violations=await page.evaluate(async()=>{const r=await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa','wcag22aa']}});return r.violations.map(v=>({id:v.id,impact:v.impact,count:v.nodes.length}));});result.checks.push({name:`${view}/${width}: axe selected WCAG rules`,pass:violations.length===0,detail:violations});}
   await page.screenshot({path:path.join(shotDir,`${view}-${width}.png`)});
   if(view==='explore'){
    await page.locator('#search').fill('ヌヴィレット');assert.equal(await page.locator('#records .record').count(),1);check(`explore/${width}: search finds one record`);
    const trigger=page.getByRole('button',{name:'ヌヴィレットの評価根拠',exact:true});await trigger.click();assert(await page.locator('#detail-dialog').isVisible());assert((await page.locator('#detail-body').innerText()).includes('モード点'));await page.keyboard.press('Escape');assert(!await page.locator('#detail-dialog').isVisible());assert(await trigger.evaluate(el=>el===document.activeElement));check(`explore/${width}: dialog opens, Escape closes, focus returns`);
    await page.locator('#search').fill('存在しない対象');assert.equal(await page.locator('#records .record').count(),0);assert((await page.locator('#records').innerText()).includes('該当'));await page.locator('#reset').click();
    await page.locator('#tier').selectOption('SS');assert.equal(await page.locator('#records .record').count(),5);await page.locator('#reset').click();
    await page.locator('#group').selectOption('派生');assert.equal(await page.locator('#records .record').count(),24);await page.locator('#reset').click();
    await page.locator('#confidence').selectOption('低');assert.equal(await page.locator('#records .record').count(),18);await page.locator('#reset').click();check(`explore/${width}: empty state, reset, tier/group/confidence filters`);
    for(const name of ['サンドローネ','ヌヴィレット','ネフェル'])await page.getByRole('button',{name:name+'を比較',exact:true}).click();
    assert.equal(await page.locator('.compare-item').count(),3);await page.getByRole('button',{name:'ヴェスナを比較',exact:true}).click();assert.equal(await page.locator('.compare-item').count(),3);assert((await page.locator('#selection-status').innerText()).includes('3件まで'));check(`explore/${width}: compare three and reject fourth`);
    await page.locator('#compare-panel').scrollIntoViewIfNeeded();await page.screenshot({path:path.join(shotDir,`compare-${width}.png`)});await page.locator('#clear-compare').click();assert.equal(await page.locator('.compare-item').count(),0);
   }
   if(view==='story'){
    for(const [label,count] of [['螺旋重視',10],['幽境重視',14],['シアター重視',28]]){await page.getByRole('button',{name:label,exact:true}).click();assert((await page.locator('#changed-count').innerText()).includes(`${count} / 77`));}
    const nv=page.locator('.shift-row').filter({has:page.getByRole('button',{name:'ヌヴィレットの評価根拠',exact:true})});assert.equal(await nv.locator('.current-band').innerText(),'SS');
    const nf=page.locator('.shift-row').filter({has:page.getByRole('button',{name:'ネフェルの評価根拠',exact:true})});assert.equal(await nf.locator('.current-band').innerText(),'A');check(`story/${width}: 4 profiles and two diagnostic cases`);
    await page.locator('.change-figure').scrollIntoViewIfNeeded();await page.screenshot({path:path.join(shotDir,`story-active-${width}.png`)});
   }
   if(view!=='read'){await page.locator('.topbar a').click();assert(await page.locator('#original-disclosure').getAttribute('open')!==null);check(`${view}/${width}: source disclosure link`);}
  }
 }
 const nojs=await browser.newPage({javaScriptEnabled:false});await nojs.goto(base+'/experiment/prototype.html');assert.equal(await nojs.locator('.original h4').count(),77);check('No JavaScript: original remains readable');await nojs.close();
 assert.equal(allErrors.length,0);check('No uncaught browser JavaScript errors');
}catch(e){result.checks.push({name:'Execution error',pass:false,detail:String(e)});process.exitCode=1;}
finally{await browser.close();result.passed=result.checks.filter(x=>x.pass).length;result.failed=result.checks.filter(x=>!x.pass).length;result.axe_ran=Boolean(axePath);fs.writeFileSync(path.join(root,'evidence/browser-audit.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));if(result.failed)process.exitCode=1;}

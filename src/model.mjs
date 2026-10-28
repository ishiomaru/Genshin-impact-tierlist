export const tiers=['SS','S','A','B','C','D'];
export const presets=[{name:'基準',weights:[45,35,20]},{name:'螺旋重視',weights:[60,30,10]},{name:'幽境重視',weights:[30,60,10]},{name:'シアター重視',weights:[30,20,50]}];
export function weighted(scores,weights){return Math.round(scores.reduce((s,n,i)=>s+n*weights[i]/100,0)*1000)/1000;}
export function tierOf(code){return code>=4.4?'SS':code>=3.8?'S':code>=3.2?'A':code>=2.6?'B':code>=2?'C':'D';}

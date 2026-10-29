#!/usr/bin/env python3
"""Optional source-refresh helper. Runtime uses checked-in local images, no external calls."""
from pathlib import Path
import urllib.request, json, concurrent.futures
ROOT=Path(__file__).resolve().parents[1]
api='https://genshin-db-api.vercel.app/api/v5/characters?query=names&matchCategories=true&verboseCategories=true&resultLanguage=Japanese'
metadata=json.load(urllib.request.urlopen(api,timeout=40))
names=[r['name'] for r in json.loads((ROOT/'src/data/research.json').read_text())['records']]
by_name={r['name']:r for r in metadata}
def fetch(name):
    char=by_name['空' if name.startswith('主人公・') else name]
    image=char['images']['filename_icon']
    path=ROOT/'public/assets'/f'{image}.png'
    url=char['images'].get('mihoyo_icon',f'https://enka.network/ui/{image}.png')
    if not path.exists():
        candidates=[url,char['images'].get('hoyowiki_icon'),f'https://enka.network/ui/{image}.png']
        for candidate in candidates:
            if not candidate:continue
            try:
                req=urllib.request.Request(candidate,headers={'User-Agent':'Mozilla/5.0'})
                path.write_bytes(urllib.request.urlopen(req,timeout=20).read());url=candidate;break
            except Exception:continue
    if not path.exists():
        print(f'No verified image available: {name}; using textual fallback.')
        return name,dict(rarity=char['rarity'])
    return name,dict(portrait=f'/assets/{image}.png',rarity=char['rarity'],assetUrl=url)
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
    assets=dict(pool.map(fetch,names))
(ROOT/'src/data/identities.json').write_text(json.dumps([r['name'] for r in metadata],ensure_ascii=False,indent=2)+'\n')
(ROOT/'src/data/assets.json').write_text(json.dumps(assets,ensure_ascii=False,indent=2)+'\n')
hero=ROOT/'public/assets/neuvillette-splash.png'
if not hero.exists() and not hero.with_suffix('.webp').exists():
    req=urllib.request.Request('https://enka.network/ui/UI_Gacha_AvatarImg_Neuvillette.png',headers={'User-Agent':'Mozilla/5.0'})
    hero.write_bytes(urllib.request.urlopen(req,timeout=40).read())
print(f'Prepared {len(assets)} portrait mappings and hero splash.')

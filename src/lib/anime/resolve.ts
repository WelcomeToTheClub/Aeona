import fetch from "node-fetch"
export default {

    get: async function (params:string) {
        if(params == 'baka') {
            
            return fetch(`https://nekos.life/api/v2/img/baka`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'blush') {
            return fetch(`https://api.waifu.pics/sfw/blush`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'dance') {
            return fetch(`https://api.waifu.pics/sfw/dance`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'cuddle') {
            return fetch(`https://nekos.life/api/v2/img/cuddle`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'bite') {
            return fetch(`https://api.waifu.pics/sfw/bite`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'slap') {
            return fetch(`https://nekos.life/api/v2/img/slap`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'wink') {
            return fetch(`https://api.waifu.pics/sfw/wink`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'bonk') {
            return fetch(`https://api.waifu.pics/sfw/bonk`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'bully') {
            return fetch(`https://nekos.life/api/v2/img/bully`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'hug') {
            return fetch(`https://api.waifu.pics/sfw/hug`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'kiss') {
            return fetch(`https://api.waifu.pics/sfw/kiss`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'pat') {
            return fetch(`https://api.waifu.pics/sfw/pat`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'wallpaper') {
            return fetch(`https://akaneko-api.herokuapp.com/api/wallpapers`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'happy') {
            return fetch(`https://api.waifu.pics/sfw/happy`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'kill') {
            return fetch(`https://api.waifu.pics/sfw/kill`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'highfive') {
            return fetch(`https://api.waifu.pics/sfw/highfive`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'wave') {
            return fetch(`https://api.waifu.pics/sfw/wave`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'cry') {
            return fetch(`https://api.waifu.pics/sfw/cry`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'smile') {
            return fetch(`https://api.waifu.pics/sfw/smile`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'punch') {
            return fetch(`https://neko-love.xyz/api/v1/punch`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'kick') {
            return fetch(`https://api.waifu.pics/sfw/kick`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'poke') {
            return fetch(`https://nekos.life/api/v2/img/poke`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'goodnight') {
            return fetch(`https://api.deltaa.me/goodnight`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'zerotwo') {
            return fetch(`https://api.deltaa.me/zerotwo`)
            .then(res => res.json())
            .then(json => { return json.url })
        }
        if(params == 'confused') {
            return fetch(`https://anime-reactions.uzairashraf.dev/api/reactions/random?category=confused`)
            .then(res => res.json())
            .then(json => { return json.reaction })
        }
        if(params == 'sad') {
            return fetch(`https://anime-reactions.uzairashraf.dev/api/reactions/random?category=sad`)
            .then(res => res.json())
            .then(json => { return json.reaction })
        }
        if(params == 'thinking') {
            return fetch(`https://anime-reactions.uzairashraf.dev/api/reactions/random?category=thinking`)
            .then(res => res.json())
            .then(json => { return json.reaction })
        }
        if(params == 'yeah') {
            return fetch(`https://anime-reactions.uzairashraf.dev/api/reactions/random?category=yes`)
            .then(res => res.json())
            .then(json => { return json.reaction })
        }
        if(params == 'yeet') {
            return fetch(`https://api.waifu.pics/sfw/yeet`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'stare') {
            return fetch(`https://nekoapi.vanillank2006.repl.co/api/action/stare`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'bored') {
            return fetch(`https://nekoapi.vanillank2006.repl.co/api/reaction/bored`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'scream') {
            return fetch(`https://nekoapi.vanillank2006.repl.co/api/reaction/scream`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'nervous') {
            return fetch(`https://nekoapi.vanillank2006.repl.co/api/reaction/nervous`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
    }
}
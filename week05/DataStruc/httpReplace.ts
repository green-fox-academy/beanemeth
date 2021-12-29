'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
console.log(url.replace("bots", "odds"))

let replaceString2: string = "odds";

let replaced22: string = url.replace("bots", replaceString2)


let b = ":";

let finalRepairedURL = [replaced22.slice(0, 5), b, replaced22.slice(5)].join('');
console.log(finalRepairedURL);
//Developing a Web Crawler here that finds out the links that have a particular keyword after filtering out the links of the Webpage..

let a = document.links;
let str = "javascript";
Array.from(a).forEach(function(element){
    if(element.href.includes(str)){
    console.log(element.href);
    }
})

let a = document.links;
let str = "python";
Array.from(a).forEach(function(element){
    if(element.href.includes(str)){
    console.log(element.href);
    }
})

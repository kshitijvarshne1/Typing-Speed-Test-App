const setOfWords=[
    "The ability of science and technology to improve human life is known to us",
    "Not that one had anything to do with the other, but the technology of surrogacy would have been inconceivable back then",
    "Technology brings about economic wealth through improved production, facilitation of trade, and promoting the division of labor.",
    "This work entitles Beckmann to be regarded as the founder of scientific technology, a term which he was the first to use in 1772.",
    "We only have people doing this work because we have not yet developed the technology to get machines to do it."
];

const msg = document.getElementById('msg');
const  typeWords= document.getElementById('mywords');
const btn = document.getElementById('btn')
typeWords.disabled= true;

let startTime, endTime;

const playGame=()=>{
    let randomNumber= Math.floor(Math.random()*setOfWords.length)
    msg.innerText= setOfWords[randomNumber];
    let date = new Date();
    startTime= date.getTime();
    btn.innerText='Done';
}
const wordCounter=(str)=>{
    let response = str.split(" ").length;
    return response;
}
const endPlay=()=>{
    let data = new Date();
    endTime= data.getTime();
    let totalTime = (endTime- startTime)/1000;
    let totalStr= typeWords.value;
    let wordCount= wordCounter(totalStr);
    console.log(wordCount);
    let speed= Math.round((wordCount/totalTime)*60);
    let finalMsg= " You typed total at "+speed+" words pe minute";
    msg.innerText=finalMsg;
}

btn.addEventListener('click', function (){
    if(this.innerText=='Start'){
        typeWords.disabled= false;
        playGame();
    }else if(this.innerText='Done'){
        typeWords.value="";
        typeWords.disabled= true;
        btn.innerText='Start'
        endPlay();
    }

})
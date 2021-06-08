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

let startTime, endTime;

playGame=()=>{
    let randomNumber= Math.floor(Math.random()*setOfWords.length)
    msg.innerText= setOfWords[randomNumber];
}

btn.addEventListener('click', function (){
    if(this.innerText=='Start'){
        typeWords.disabled= false;
        playGame();
    }

})
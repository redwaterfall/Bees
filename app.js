let beeFacts = ["Eating honey makes you smarter! It has an antioxidant that improves brain functions.",
                "Only female bees can sting. Male bees don’t have stingers.",
                "The Honey Bee is the only insect that makes food man can eat.",
                "Each Honey Bee from the same hive has their own specific color identification.",
                "Honey bees communicate through a series of dance moves"]
window.addEventListener('DOMContentLoaded',()=>{
    const video = document.querySelector('#bees-video');
    const text = document.querySelector('#bee-text');
    const videDuration = 18;


        window.addEventListener('scroll',()=>{
            let totalHeight = parseInt(document.documentElement.scrollHeight-document.documentElement.offsetHeight);
            let pros = window.pageYOffset/totalHeight;
            
            video.currentTime = videDuration * pros ;
            changeText(pros*100,text)
        })
})

function changeText(prosent,text){
    if(prosent < 10){
        text.style.opacity = "0"
    }
    if(prosent > 10 && prosent < 20){
        text.innerHTML = beeFacts[0]
        text.style.transition = "2s ease"
        text.style.opacity = "1"
    }
    if(prosent > 20 && prosent < 30){

        text.style.opacity = "0"
    }
    if(prosent > 30 && prosent < 40){
        text.innerHTML = beeFacts[1]
        text.style.transition = "2s ease"
        text.style.opacity = "1"
    }
    if(prosent > 40 && prosent < 50){
        text.style.opacity = "0"
    }
    if(prosent > 50 && prosent < 60){
        text.innerHTML = beeFacts[2]
        text.style.transition = "2s ease"
        text.style.opacity = "1"
    }
    if(prosent > 60 && prosent < 70){
        text.style.opacity = "0"
    }
    if(prosent > 70 && prosent < 80){
        text.innerHTML = beeFacts[3]
        text.style.transition = "2s ease"
        text.style.opacity = "1"
    }
    if(prosent > 80 && prosent < 90){
        text.style.opacity = "0"
    }
    if(prosent > 90 && prosent < 100){
        text.innerHTML = beeFacts[4]
        text.style.transition = "2s ease"
        text.style.opacity = "1"
    }
}
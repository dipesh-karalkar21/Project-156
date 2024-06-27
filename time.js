AFRAME.registerComponent("timer",{
    init:function(){
        var game = "on"
        setInterval(function(){
            if(game == "on"){
                var min = document.querySelector("#min")
                var sec = document.querySelector("#sec")
                var minValue = parseInt(min.getAttribute("text").value)
                var secValue = parseInt(sec.getAttribute("text").value)
                
                if(secValue == 0){
                    secValue = 59
                    minValue -= 1
                }
                else{
                    secValue -= 1
                }
                if(minValue == 0 && secValue == 0){
                    game = "over"
                    document.querySelector("#gameOver").setAttribute("visible",true)
                    document.querySelector("#terrain").setAttribute("animation",{
                        property : "none"
                    })
                }
                min.setAttribute("text",{value:minValue})
                if(secValue >= 10){
                    sec.setAttribute("text",{value:secValue})
                } 
                else{
                    sec.setAttribute("text",{value:`0${secValue}`})
                }            
            }
        },1000)
    },
})
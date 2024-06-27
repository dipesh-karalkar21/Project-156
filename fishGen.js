AFRAME.registerComponent("fishgen",{
    init:function(){
        var X = [];
        var Z = []
        for(var i = 1 ; i<=5 ; i++){
            
            var x = parseInt(Math.random()*(3.5 - (-3.5)) + (-3.5))
            var z = parseInt(Math.random()*(0 - (-3.5)) + (-3.5))

            if(X.includes(x) && Z.includes(z)){
                i--;
            }
            else{
                X.push(x)
                Z.push(z)
                var fish = document.createElement("a-entity")
                fish.setAttribute("gltf-model","#fish")
                
                var y = (Math.random()*(1.7 - 1.2) + 1.2)
                console.log(x + " " + y +" "+ z)

                fish.setAttribute("id",`fish_${i}`)

                fish.setAttribute("position",{
                    x: x,
                    y: y,
                    z: z
                })

                fish.setAttribute("scale",{
                    x: 1,
                    y: 1,
                    z: 1
                })

                fish.setAttribute("static-body",{
                    shape : "sphere",
                    sphereRadius : 0.2
                })
                
                var coin = document.createElement("a-entity")

                coin.setAttribute("geometry",{
                    primitive : "cylinder",
                    radius : "0.05",
                    height : "0.005"
                })

                coin.setAttribute("material",{
                    src : "./coin.png",
                    color : "yellow"
                })

                coin.setAttribute("position",{
                    x: x,
                    y: y - 0.125,
                    z: z
                })

                coin.setAttribute("rotation",{
                    x:90,
                    y:0,
                    z:0
                })

                coin.setAttribute("static-body",
                    {
                        shape : "sphere",
                        sphereRadius : 0.2
                    }
                )

                coin.setAttribute("id",`coin_${i}`)

                coin.setAttribute("animation",{
                    property : "rotation",
                    to : "90 0 360",
                    loop : "true",
                    easing : "linear",
                    dur : "10000"
                })

                fish.addEventListener("collide",function(e){
                    var id = e.detail.body.el.id
                    if(id === "diver"){
                        console.log("fish collision")
                    }
                })

                coin.addEventListener("collide",function(e){
                    var id = e.detail.body.el.id
                    var Tid = e.detail.target.el.id
                    if(id === "diver"){
                        var coinValue = document.querySelector("#coin")
                        var scoreValue = document.querySelector("#score")
                        var coin = coinValue.getAttribute("text").value
                        var score = scoreValue.getAttribute("text").value
                        coin = parseInt(coin) - 1
                        document.querySelector("#coin").setAttribute("text",{value : parseInt(coin)})
                        document.querySelector("#score").setAttribute("text",{value : parseInt(score)+1})
                        if(parseInt(coin) == 0 ){
                            document.querySelector("#youWon").setAttribute("visible",true)
                            document.querySelector("#terrain").setAttribute("animation",{
                                property : "none"
                            })
                        }
                        var c = document.querySelector(`#${Tid}`)
                        c.setAttribute("visible",false)
                        console.log("coin collision")
                    }
                })

                var scene = document.querySelector("#terrain")

                scene.appendChild(coin)
                scene.appendChild(fish)
            }
        }
    }
})

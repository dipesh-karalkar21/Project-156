AFRAME.registerComponent("wsad",{
    schema: {
        keyDown : {type : "number" , default : 0},
        horiStatus : {type : "string" , default : "none"}
    },
    init:function(){
        window.addEventListener("keydown", (e) => {
            this.data.keyDown = 1
            rotation = this.el.getAttribute("rotation")
            rotation2 = document.querySelector("#diver").getAttribute("rotation")
            position = document.querySelector("#diver").getAttribute("position")
            position2 = document.querySelector("#look").getAttribute("position")
            if (e.key === "ArrowRight" || e.key == "d") {
                
                if(rotation2.z < 10 || rotation2.y > 170){
                    rotation2.z += 0.5
                    rotation2.y -= 0.5
                    document.querySelector("#diver").setAttribute("rotation",rotation2)
                }
                rotation.y = rotation.y + 1
                this.el.setAttribute("rotation",rotation)
            }
            else if (e.key === "ArrowLeft" || e.key == "a") {
                if(rotation2.y < 190 || rotation2.z > -10){
                    rotation2.y += 0.5
                    rotation2.z -= 0.5
                    document.querySelector("#diver").setAttribute("rotation",rotation2)
                }
                rotation.y = rotation.y - 1
                this.el.setAttribute("rotation",rotation)
            }
            else if (e.key === "ArrowDown" || e.key == "s") {
                if(rotation2.x < 20){
                    rotation2.x += 0.5
                    document.querySelector("#diver").setAttribute("rotation",rotation2)
                }
                position.y = position.y - 0.005
                document.querySelector("#diver").setAttribute("position",position)
                position2.y = position2.y - 0.005
                document.querySelector("#look").setAttribute("position",position2)
            }
            else if (e.key === "ArrowUp" || e.key == "w") {
                if(rotation2.x > -15){
                    rotation2.x -= 0.5
                    document.querySelector("#diver").setAttribute("rotation",rotation2)
                }
                position.y = position.y + 0.005
                document.querySelector("#diver").setAttribute("position",position)
                position2.y = position2.y + 0.005
                document.querySelector("#look").setAttribute("position",position2)
            }
        });
    },
    tick:function(){
            rotation = document.querySelector("#diver").getAttribute("rotation")
            if(rotation.x > 0){
                rotation.x -= 0.25
                document.querySelector("#diver").setAttribute("rotation",rotation)
            }
            if(rotation.x < 0){
                rotation.x += 0.25
                document.querySelector("#diver").setAttribute("rotation",rotation)
            }
            if(rotation.y > 180){
                rotation.y -= 0.25
                document.querySelector("#diver").setAttribute("rotation",rotation)
            }
            if(rotation.y < 180){
                rotation.y += 0.25
                document.querySelector("#diver").setAttribute("rotation",rotation)
            }
            if(rotation.z > 0){
                rotation.z -= 0.25
                document.querySelector("#diver").setAttribute("rotation",rotation)
            }
            if(rotation.z < 0){
                rotation.z += 0.25
                document.querySelector("#diver").setAttribute("rotation",rotation)
            }
        }

})
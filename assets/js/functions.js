let listenerFunction = {
    h2Click: function(event) {
        /*console.log(this);
        if (this.style.color && this.style.color === "red") {
            this.style.color = "green"
            this.style.fontSize = "16px"
            
        } else {  this.Style.color = "red"
      }*/
       let element = event.target
       if(element.style.color && element.style.color === "red"){
        element.style.color = "green"
       } else {
        element.style.color = "green"
       }
        console.log(event.target);
        console.log("click detected");
    },
    bgSectionManage: function(event) {
        let element = event.target
        if (element.style.backgroundColor && element.style.backgroundColor === "red") {
            element.style.backgroundColor = "green"
        } else {
            element.style.backgroundColor = "red"
        }
    }
}

let setupListeners = () => {
    let h2 = document.querySelector("section#html h2")
    h2.addEventListener("click", listenerFunction.h2Click)
}

// cibler les sections

let sections = document.getElementsByClassName("section")
for (let index = 0; index < sections.length; index++) {
  const section = sections[index];
  section.addEventListener("click", listenerFunction.bgSectionManage)
    }




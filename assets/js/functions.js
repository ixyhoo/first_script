let listenerFunction = {
    h2Click: () => {
        console.log(this);
        console.log("click")
    }
}

let setupListeners = () => {
    let h2 = document.querySelector("section#html h2")
    h2.addEventListener("click", listenerFunction.h2Click)
}




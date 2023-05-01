let listenerFunction = {
    h2DblClick: () => {
        window.alert("fly!")
        console.log("click")
    }
}

let setupListeners = () => {
    let h2 = document.querySelector("section#html h2")
    h2.addEventListener("dblclick", listenerFunction.h2DblClick)
}


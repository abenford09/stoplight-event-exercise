(function() {
    'use strict';

    // YOUR CODE HERE
    var goButton = document.getElementById('goButton')
    var slowButton = document.getElementById('slowButton')
    var stopButton = document.getElementById('stopButton')
    var goLight = document.getElementById('goLight')
    var slowLight = document.getElementById('slowLight')
    var stopLight = document.getElementById('stopLight')

    stopButton.addEventListener("click", function() {
        if (stopLight.classList.contains("stop")) {
            stopLight.classList.remove("stop")
            console.log("Bulb Off")
        } else { stopLight.classList.add("stop") }
        console.log('Bulb On')
    })
    goButton.addEventListener("click", function() {
        if (goLight.classList.contains("go")) {
            goLight.classList.remove("go")
            console.log("Bulb Off")
        } else { goLight.classList.add("go") }
        console.log('Bulb On')
    })
    slowButton.addEventListener("click", function() {
        if (slowLight.classList.contains("slow")) {
            slowLight.classList.remove("slow")
            console.log("Bulb Off")
        } else { slowLight.classList.add("slow") }
        console.log('Bulb On')
    })

    var buttonsssss = document.getElementsByClassName('button')
    for (var i = 0; i < buttonsssss.length; i++) {
        var current = buttonsssss[i]
        current.addEventListener("mouseenter", function() {
            console.log("Enter")
        })
        current.addEventListener("mouseleave", function() {
            console.log("Leave")
        })
    }
})()
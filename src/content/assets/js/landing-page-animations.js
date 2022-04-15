
ICONS = []


document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World")
    

    
    generate_calendar_icon();
    //generate_calendar_icon();
    generate_clock_icon();
    //generate_clock_icon();
});


function generate_calendar_icon() {

    // your function code here
    x_pos = Math.floor((Math.random()*70) + 10)
    cal = create_calendar(x_pos)
    document.getElementById('animation-container').appendChild(cal)
    
    ICONS.push(cal)
    setTimeout(() => {
        val =  ICONS.shift()
        console.log(val)

        document.getElementById(val.id).remove()
    }, 10000)

    setTimeout(generate_calendar_icon, Math.floor(Math.random()*300)+200);
}


function generate_clock_icon() {

    // your function code here
    x_pos = Math.floor((Math.random()*70) + 10)
    clock = create_clock(x_pos)
    document.getElementById('animation-container').appendChild(clock)
    
    ICONS.push(clock)
    setTimeout(() => {
        val =  ICONS.shift()
        console.log(val)

        document.getElementById(val.id).remove()
    }, 10000)

    setTimeout(generate_clock_icon, Math.floor(Math.random()*300)+200);
}



function create_clock(x_pos){
    rv = document.createElement("img")
    rv.style.position = 'absolute'
    rv.style.width = '3em'

   
    rv.style.left = x_pos + "%"

    rv.src = "./assets/img/white_clock.svg"

    rv.classList.add("slide-bottom")

    id =  Math.floor(Math.random()*1000)
    rv.id = id + "y"

   
    return rv
}


function create_calendar(x_pos){

    rv = document.createElement("img")
    rv.style.position = 'absolute'
    rv.style.height = '3em'
    
    rv.style.left = x_pos + "%"

    rv.src = "./assets/img/white_calander.svg"

    rv.classList.add("slide-bottom")
   
    id =  Math.floor(Math.random()*1000)
    rv.id = id + "x"

    return rv
}
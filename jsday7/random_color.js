let colorcode = "#"
const changeColor = () => {
    let box = document.getElementsByClassName("box")[0]

    colorGen()

    box.style.backgroundColor = colorcode

    console.log(colorcode);
}

const colorGen =() => {
    let codes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
    colorcode = "#"
    for (let i=0; i<6; i++) {
        let randNo = Math.floor(Math.random() * 16)
        colorcode += codes[randNo]
    }

}   

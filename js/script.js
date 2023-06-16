const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
let parentDOM = document.getElementById("parent")
let testTarget = parentDOM.getElementsByClassName("proposes__item")
let arr = [...testTarget]
let currentPosition = 0
let nextPosition = 1

nextButton.addEventListener('click', function () {
     if (arr[currentPosition] === arr[arr.length-1]){
        arr[arr.length-1].classList.remove('active')
         arr[0].classList.add('active')
         currentPosition = 0
         nextPosition = 1
     }
     else{
         arr[currentPosition].classList.remove('active')
         arr[nextPosition].classList.add('active')
         currentPosition += 1
         nextPosition += 1

     }
    }
)

prevButton.addEventListener('click', function () {
        if (arr[currentPosition] === arr[0]){
            arr[0].classList.remove('active')
            arr[arr.length-1].classList.add('active')
            currentPosition = 3
            nextPosition = 2
        }
        else{
            arr[currentPosition].classList.remove('active')
            arr[nextPosition].classList.add('active')
            currentPosition -= 1
            nextPosition -= 1

        }
    }
)
console.log(arr)
console.log(testTarget)
/*prevButton.addEventListener('click', () =>{
    if(currentPosition>0){
        currentPosition -= 1
    }
    else{
        currentPosition = arr.length-1;
        currentPosition.classList.add('active')

    }
})
nextButton.addEventListener('click', () =>{
    if(currentPosition<arr.length-1){
        currentPosition += 1
    }
    else{

        currentPosition = 0;
    }

})*/

/*nextButton.addEventListener('click', function () {
    for (let i = 0;i<arr.length;i++){
        if(currentPosition === 4){
           arr[arr.length-1].classList.add('active')
           arr[arr.length-1].classList.remove('active')
            currentPosition = 0;
       }
       else{
           arr[currentPosition].classList.add('active')
           arr[i].classList.remove('active')

       }
        console.log(arr[i])
    }
        currentPosition += 1
}
)*/
/*nextButton.addEventListener('click', function () {
        if(currentPosition < 4){
           arr[currentPosition.value].classList.add('active')
            arr[currentPosition].classList.remove('active')
            currentPosition += 1
       }
       else{
           arr[1].classList.add('active')
            arr[currentPosition-1].classList.remove('active')
            currentPosition = 1
       }
        console.log(arr[i])
    }
)*/
/*nextButton.addEventListener('click', function () {
        for (let i = 0;i<arr.length;i++) {
    if(arr[nextPosition].classList.contains('active') === false){
        arr[nextPosition].classList.add('active')
        arr[currentPosition].classList.remove('active')

    }
    else if(arr[currentPosition] === arr[arr.length-1]){
        arr[0].classList.add('active')
        arr[3].classList.remove('active')
        currentPosition= 0
        nextPosition = 1
    }

}
        currentPosition += 1
        nextPosition += 1
}
)*/

firstFor: for (let num = 0; num<2; num++){
    for (let size = 0; size<3; size++){
        if(size == 2){
            break firstFor
        }
        console.log(size)
    }
}
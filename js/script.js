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

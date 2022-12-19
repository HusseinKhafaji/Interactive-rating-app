const submitBtn = document.querySelector('.submit')
const ratingBox = document.querySelector('.rating-box')
const thankYouBox = document.querySelector('.thank-you-box')
const ratingBtns = document.querySelector('.rating-buttons')
const errorMessage = document.querySelector('.error-message')


ratingBtns.addEventListener('click', ratingBtn => {
    
    ratingBtn.target.dataset.clicked = "active"
    let ratingNum = ratingBtn.target.value
   
    if (ratingNum >= 1) {
        errorMessage.classList.remove('show')
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault()
            errorMessage.classList.remove('show')
            ratingBox.classList.remove('active')
            thankYouBox.classList.add('active')
            document.querySelector('.rating-result').innerText = ratingNum
        })
    }
})


submitBtn.addEventListener('click', () =>{
    if (ratingBtns.dataset !== 'active') {
        errorMessage.classList.add('show')
    }
})

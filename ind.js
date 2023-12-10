var questions=document.querySelectorAll('.question')
questions.forEach(function(question){
    const btn=question.querySelector('.btn')
    btn.addEventListener('click',function(){
        questions.forEach(function(item){
            if(item!==question){
                item.classList.remove('active')
            }
        })
        question.classList.toggle('active')

    })

})















// //this is alternate method but the other ans won't close if we open one answer
// const btns=document.querySelectorAll('.btn')
// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         var ques=e.currentTarget.parentElement.parentElement
//         ques.classList.toggle('active')
//     })
// })
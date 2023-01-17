$(function(){
    let images = $(".image-carousel-img")
    images.hide()
    let min=0
    let max=2
    let curr=0

    let timer = 5000

    images.eq(curr).show()

    let automatic = setInterval(slideRight, timer);

    $("#left-button").click(() => {
        clearInterval(automatic)
        images.eq(curr).hide()
        if(curr-1 < min){
            images.eq(max).show()
        }
        else{
            images.eq(curr-1).show()
        }
        curr--
        if(curr < min){
            curr = max
        }
        automatic = setInterval(slideRight, timer);
    })

    $("#right-button").click(() => {
        clearInterval(automatic)
        images.eq(curr).hide()
        if(curr+1 > max){
            images.eq(min).show()
        }
        else{
            images.eq(curr+1).show()
        }
        curr++
        if(curr > max){
            curr = min
        }
        automatic = setInterval(slideRight, timer);
    })

    function slideRight(){
        images.eq(curr).hide()
        if(curr+1 > max){
            images.eq(min).show()
        }
        else{
            images.eq(curr+1).show()
        }
        curr++
        if(curr > max){
            curr = min
        }
    }
})
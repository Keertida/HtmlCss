// $ - (factory function it means jquery else we can give jQuery)
// this function should start running only after the html and css file gets ready completely
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    })
})

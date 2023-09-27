/*
    @DEIVIDX_OFC
*/

$(function(){
    $('.menu-mobile').click(function(){
        var el = $(this).parent().find('ul');
        if(el.is(':visible') == false){
        el.fadeIn();
        }else{
            el.fadeOut();
        }
    }) 

    
})

/*
    @DEIVIDX_OFC
*/
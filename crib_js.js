//Соответствие url ссылке -> добавление ссылке класса active ( на какой странице)

var pathname = window.location.pathname;
    if(pathname.length >1){
        $('#ma-mobilemenu li a[href$="' + pathname + '"]').parents('li').addClass('active');
    }else{
        $('#ma-mobilemenu li.home').addClass('active');
    }

//если url co /  -> а в ссылке без href="main.htmp"
 var pathname = window.location.pathname;
    $('.nav li a').each(function () {
        var attr = $(this).attr('href');
        var entry = pathname.indexOf(attr);
        if (entry>0){
            $(this).parents('li').addClass('active');
        }
    });

//Slik

$('.slider-nav').slick({
       slidesToShow: 8,
       slidesToScroll: 1,
       // asNavFor: '.slider',
       prevArrow:"<img class='a-left control-c prev slick-prev' src='/image/data/new/product_img/slider_arrow_down.png'>",
       nextArrow:"<img class='a-right control-c next slick-next' src='/image/data/new/product_img/slider_arrow_up.png'>",
       focusOnSelect: true,
       vertical: true,
       responsive: [
           {
               breakpoint: 1200,
               settings: {vertical: false, slidesToShow: 3}
           }
       ]
   });


//Each

 $('.product_kit .product_in_kit').each(function () {
        var product_kit_title = $(this).find('.buttonrow__kit .checkbox div.name');
        var product_kit_link = $(this).find('.product_kit_link ');
        product_kit_title.insertBefore(product_kit_link);

        var button_count = $(this).find('.button_count');
        var kit_checkbox =$(this).find('.buttonrow__kit .checkbox');
        button_count.insertBefore(kit_checkbox);
     
     
// add ')'  -> a)hdhhd; b)jdjsdhjl....
     
      var letters = "abcdefghijklmnopqrstuvwxyz";
    $.each($(".legal .legal_letters > li"), function(i) {
        $(this).attr("mark", letters[i] + ")");
    });

    })

//change img -> arrow_up
    $('#topcontrol img').attr('src', '/image/data/new/main/arrow_up.png').load(function(){
        this.width;
    });

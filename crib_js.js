Соответствие url ссылке -> добавление ссылке класса active ( на какой странице)

var pathname = window.location.pathname;
    if(pathname.length >1){
        $('#ma-mobilemenu li a[href$="' + pathname + '"]').parents('li').addClass('active');
    }else{
        $('#ma-mobilemenu li.home').addClass('active');
    }
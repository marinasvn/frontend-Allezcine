// slider

$(document).ready(function() {
    let carousel = $("#slider ul");
    let carouselChild = carousel.find('li');
    let count = 0;
    let itemWidth = carouselChild.first().width(true);
    let lastItem;
    
    for(i=0; i<=carouselChild.length; i++) {
        
        carousel.animate({
            marginLeft : '-='+itemWidth
        },2500, function() {
            lastItem = carousel.find('li:first');
            lastItem.remove().appendTo(carousel);
            carousel.css('margin-left',0);
        });
    }

});


$(document).ready(function() {
    $('#plusFilms').click(function() {
        $('#movies div:nth-child(n+13)').css('display','block');
        $('#plusFilms').css('display','none');
        $('#moinsFilms').css('display','block');
    });
    
    $('#moinsFilms').click(function() {
        $('#movies div:nth-child(n+13)').css('display','none');
        $('#plusFilms').css('display','block');
        $('#moinsFilms').css('display','none');
    });
    
    $('#plusSeries').click(function() {
        $('#series div:nth-child(n+13)').css('display','block');
        $('#plusSeries').css('display','none');
        $('#moinsSeries').css('display','block');
    });
    
    $('#moinsSeries').click(function() {
        $('#series div:nth-child(n+13)').css('display','none');
        $('#plusSeries').css('display','block');
        $('#moinsSeries').css('display','none');
    });
});




$(document).ready(function () {

    var $container = $('#movies');
    /*$container.isotope({itemSelector : 'div'});*/

    $("#filter-all").click(function() { 
        $container.isotope({ filter: '.all' });
        $("*[id^='filter']").removeClass('active');
        $("#filter-all").addClass('active');
    });
    $("#filter-actions").click(function() {  
        $container.isotope({ filter: '.actions' });
        $("*[id^='filter']").removeClass('active');
        $("#filter-actions").addClass('active');
    });
    $("#filter-policiers").click(function() {  
        $container.isotope({ filter: '.policiers' });
        $("*[id^='filter']").removeClass('active');
        $("#filter-policiers").addClass('active');
    });

});

$(document).ready(function () {

    var $container = $('#series');
    /*$container.isotope({itemSelector : 'div'});*/

    $("#filter-all-2").click(function() { $container.isotope({ filter: '.all' });});
    $("#filter-actions-2").click(function() {  $container.isotope({ filter: '.actions' });});
    $("#filter-policiers-2").click(function() {  $container.isotope({ filter: '.policiers' });});

});


// modal on load
$(window).on('load',function(){
    $("#modalLoad").css('display','block');
    $("#modalLoad #blur a").click(function() {
        $("#modalLoad").css('display','none');
    });
});


// Login modal

$(document).ready(function() {
    $("#close").click(function() {
        $("#new-account").css('display','block');
        $("#signIn").css('display','block');
        $("#signUp").css('display','none');
        $("label[for='conditions']").css('display','none');
        $("#newPass").css('display','none');
        $("#login").css('display','block');
        $("#pass").css('display','block');
        $("label[for='connect']").css('display','flex');
        $("#email").css('display','none');
    });
    
    $("#new-account").click(function() {
        $(this).css('display','none');
        $("#signIn").css('display','none');
        $("#signUp").css('display','block');
        $("label[for='conditions']").css('display','flex');
    });
    
    $("#forgot").click(function() {
        $(this).css('display','none');
        $("#email").css('display','block');
        $("#newPass").css('display','block');
        $("#login").css('display','none');
        $("#pass").css('display','none');
        $("label[for='conditions']").css('display','none');
        $("label[for='connect']").css('display','none');
        $("#signIn").css('display','none');
        $("#signUp").css('display','none');
        $("#new-account").css('display','none');
    });
});






















































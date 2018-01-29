// BTN VERS LE HAUT

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $("#cRetour").addClass('cVisible');
        $("#cRetour").removeClass('cInvisible');
    } else {
        $("#cRetour").addClass('cInvisible');
        $("#cRetour").removeClass('cVisible');
    }
  });
});

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


// SHOP

$(document).ready(function() {
    /*function trailer(title, src) {
        this.title = title;
        this.src = src;
    }*/
    
    var affiche = [
        {
            title: 'Lego Batman',
            src: "assets/img/batman.jpg",
            date: 2017,
            genre: "comedie",
            price: 8.99,
            url: "https://www.youtube.com/embed/9mznUFqFy74",
            about: "bla1"
        },
        {
            title: 'Hostel',
            src: "assets/img/hostel.jpg",
            date: 2005,
            genre: "thriller",
            price: 5.99,
            url: "https://www.youtube.com/embed/cVBdQiUHhZI",
            about: "bla2"
        },
        {
            title: 'Inception',
            src: "assets/img/inception.jpg",
            date: 2010,
            genre: "scifi",
            price: 6.99,
            url: "https://www.youtube.com/embed/CPTIgILtna8",
            about: "bla3"
        },
        {
            title: 'Intouchables',
            src: "assets/img/intouchables.jpg",
            date: 2011,
            genre: "comedie",
            price: 5.99,
            url: "https://www.youtube.com/embed/cXu2MhWYUuE",
            about: "bla4"
        },
        {
            title: 'Le patient anglais',
            src: "assets/img/patient.jpg",
            date: 1996,
            genre: "dramatique",
            price: 3.99,
            url: "https://www.youtube.com/embed/FguRZAv_LS4",
            about: "bla5"
        },
        {
            title: 'Seven',
            src: "assets/img/seven.jpg",
            date: 1995,
            genre: "thriller",
            price: 3.99,
            url: "https://www.youtube.com/embed/BdWja7bkV7E",
            about: "bla6"
        },
        {
            title: 'Shutter Island',
            src: "assets/img/shutter.jpg",
            date: 2010,
            genre: "thriller",
            price: 5.99,
            url: "https://www.youtube.com/embed/5iaYLCiq5RM",
            about: "bla7"
        },
        {
            title: 'Star-Wars V',
            src: "assets/img/star.jpg",
            date: 1980,
            genre: "scifi",
            price: 5.99,
            url: "https://www.youtube.com/embed/Z7B0vfamFTE>",
            about: "bla8"
        }

    ];
    
    //Shop movie generation pictures
       var k = affiche.sort(function(a, b){return 0.5 - Math.random()});
    
    $(".affiche").html(function(){

        
       for( var i=0 ; i < affiche.length; i++) {
                  
            $(".affiche").append("<div class='block-gris'><img src="+k[i].src+"><div class='description row'><p class='col-lg-12'>"+k[i].title+"</p><p>"+k[i].date+"</p><p>"+k[i].price+"</p></div></div>");
        }
 
    });
    $("#trailer").html(function() {
        $("#trailer").append("<iframe width='615' height='400' src='"+k[0].url+"' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe><div class='info'><h4 id='filmName'>"+k[0].title+"</h4><p><span>Story Line :</span>"+k[0].about+"</p><br/><p><span>Release on :</span>"+k[0].date+"</p><br/><p><span>Genres :</span>"+k[0].genre+"</p><br/><p><span>Price :</span>"+k[0].price+"</p></div>"
        );
    });
    
    
    
    //Shop clic image generation trailer
    $(".block-gris img").click(function(){
                for (i=0 ; i < affiche.length; i++) {
                    if ($(this).attr("src") == k[i].src) {
                        $("#trailer").html(" ");
                        $("#trailer").append("<iframe width='615' height='400' src='"+k[i].url+"' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe><div class='info'><h4 id='filmName'>"+k[i].title+"</h4><p><span>Story Line :</span>"+k[i].about+"</p><br/><p><span>Release on :</span>"+k[i].date+"</p><br/><p><span>Genres :</span>"+k[i].genre+"</p><br/><p><span>Price :</span>"+k[i].price+"</p></div>"
                        );
                    }
                    
                }
    });
    
});



















































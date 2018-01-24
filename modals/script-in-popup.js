$(window).on('load',function(){
    $("#modalLoad").css('display','block');
    $("#modalLoad #blur a").click(function() {
        $("#modalLoad").css('display','none');
    });
});


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



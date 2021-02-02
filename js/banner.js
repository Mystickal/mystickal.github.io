$(document).ready(function(){    
    //Variables
    var profPic = $("#main-img");
    var profText = $(".main-text");
    var profContainer = $(".image-container");
    var linkedInLink = $(".linkedin");
    var aptitude1_AI = $("#ai-apt");
    var defaultText = "Hello, I'm Edbert.";
    var aptitudeDiv = $(".aptitude");
    
    var aptitudeText1 = $("#apt-text1");
    var info1 = $("#info");

    //INIT
    profText.hide();
    aptitude1_AI.hide();
    aptitudeText1.hide();
    aptitudeDiv.hide();
    $("#placeholder").hide();
    info1.hide();
    var infoDisplayed = false;

    //If profile picture is clicked then display info
    profPic.click(function(){
        if(infoDisplayed == false){
            profContainer.animate({top: "25%", height: "200px", width: "200px"});
            profPic.animate({height: "200px", width:"200px"});
            profText.fadeIn("fast");
            $("#placeholder").show();
            $(".tuts").hide();
            $(".loading").animate({opacity: "10%"});
            infoDisplayed = true;
        } else {
            profContainer.animate({top: "50%", height: "300px", width: "300px"});
            profPic.animate({height: "300px", width:"300px"});
            profText.fadeOut("fast");
            $("#placeholder").hide();
            aptitude1_AI.hide();
            aptitudeDiv.hide();
            $(".loading").animate({opacity: "100%"});
            infoDisplayed = false;
        }
    });

    aptitudeText1.hover(function(){
        aptitudeText1.animate({top:"59%"});
        info1.fadeIn("fast");
    },
    function(){
        info1.fadeOut("fast");
        aptitudeText1.animate({top: "60%"});
    });

    linkedInLink.hover(function(){
        linkedInLink.data('defaultText', linkedInLink.text());
        linkedInLink.text("See my LinkedIn Profile.");
    },
    function(){
        linkedInLink.text(linkedInLink.data('defaultText'));
    });

    $(window).scroll(function(){
        var scrollDist = ($(window).scrollTop());

        var text1 = defaultText;
        var text2 = "I'm an undergraduate student in China."
        var text3 = "I study Computer Science with interest in"

        if(infoDisplayed=true){
            if(scrollDist < 200){
                linkedInLink.changeText(text1);
            } else 
            if (scrollDist > 200 && scrollDist < 600){
                linkedInLink.changeText(text2);
            } else
            if (scrollDist > 600 && scrollDist < 900){
                linkedInLink.changeText(text3);
                aptitude1_AI.fadeOut();
                aptitudeText1.fadeOut();
                aptitudeDiv.fadeOut();
            }
            if (scrollDist > 900){
                linkedInLink.fadeOut("fast");
                aptitudeDiv.fadeIn(); 
                aptitude1_AI.fadeIn(1000);
                aptitudeText1.fadeIn(2000);
            }
        }
    });

    //Function Declarations
        $.fn.changeText = function(text){
            if($(this).text() !== text){
                $(this).fadeOut("fast", function(){
                    $(this).text(text);
                    $(this).fadeIn("fast");
                    return $(this);
                });
            } else {
                $(this).text(text);
                return $(this);
            }
        };
});
jQuery(document).ready(function(){
    $fc = $("#footer-content");
    $fheight = $fc.height();
    $fc.height(0);
    $(".toggle-footer").click(function(){
        //$("#footer-content").slideToggle("slow");
        if ( $fc.hasClass("up") ){
            $fc.stop().animate({height:0},400);
            $fc.removeClass("up");
            document.getElementById("arrowicon").className = "glyphicon glyphicon-menu-up";
            //document.getElementById("arrowicon").className += " glyphicon-menu-up";


        }
        else {
            $fc.stop().animate({height:$fheight},400);
            $fc.addClass("up");
            document.getElementById("arrowicon").className = "glyphicon glyphicon-menu-down";
          //  document.getElementById("arrowicon").className += " glyphicon-menu-down";
        }



        return false;
    });
});

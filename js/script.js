jQuery(document).ready(function(){
    $fc = $("#footer-content");
    $fheight = $fc.height();
    $fc.height("42px");
    $(".toggle-footer").click(function(){
        //$("#footer-content").slideToggle("slow");
        if ( $fc.hasClass("up") ){
            $fc.stop().animate({height:"42px"},400);
            $fc.removeClass("up");
            document.getElementById("arrowicon").className = "octicon octicon-triangle-up";
            // document.getElementById("arrowicon").className += " glyphicon-menu-up";


        }
        else {
            $fc.stop().animate({height:$fheight},400);
            $fc.addClass("up");
            document.getElementById("arrowicon").className = "octicon octicon-triangle-down";
            // document.getElementById("arrowicon").className += " glyphicon-menu-down";
        }
        return false;
    });
});

$(document).ready(function(){
    let currentImageIndex = 1;
    const totalImages = 3;

// animation of images
    setInterval(function(){
        $(".about-img-container").removeClass("active").css("visibility", "hidden");

        //updating the image index so that it would show the next image

        if(currentImageIndex === 1)
        {
            $("#about-img-2").addClass("active").css("visibility", "visible");
            currentImageIndex = 2;
        }
        else if(currentImageIndex === 2)
        {
            $("#about-img-3").addClass("active").css("visibility", "visible");
            currentImageIndex = 3;
        }
        else
        {
            $("#about-img-1").addClass("active").css("visibility", "visible");
            currentImageIndex = 1;
        }
    }, 3000); //for every 3000 milliseconds or 3 seconds
});

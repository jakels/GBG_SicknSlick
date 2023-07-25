var carouselIndex = 0;

var writeDOM_createCarousel = `
<div class="col-md-5 order-md-1">
    <div id="c` + carouselIndex + `" class="carousel slide mb-0" data-bs-ride="carousel" data-bs-theme="light" data-bs-interval="40000">
        <div class="carousel-indicators">
        <button type="button" data-bs-target="#c` + carouselIndex + `" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#c` + carouselIndex + `" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#c` + carouselIndex + `" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="[image1]"> 
        </div>
        <div class="carousel-item">
            <img src="[image2]"> 
        </div>
        <div class="carousel-item">
            <img src="[image3]"> 
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#c` + carouselIndex + `" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#c` + carouselIndex + `" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>
`;

function CreateCarousel(image1, image2, image3, domElementID){
    var copyString = writeDOM_createCarousel;
    copyString = copyString.replace("[image1]", image1);
    copyString = copyString.replace("[image2]", image2);
    copyString = copyString.replace("[image3]", image3);

    document.getElementById(domElementID).innerHTML += copyString;
    carouselIndex += 1;
}
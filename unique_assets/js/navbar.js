var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);


var writeDOM = `

<header data-bs-theme="dark">
    <nav class="navbar navbar-expand-md fixed-top" style="background-color: rgb(20, 18, 18);">
        <div class="container-fluid">
            <img src="/unique_assets/images/site_media/logo_sicknslick_text_truthful.png" style="height: 40px; margin-right: 25px;">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse" style="margin-bottom: 5px;">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                    <a class="nav-link [active page insert index.html]" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link [active page insert gallery.html]" aria-current="page" href="gallery.html">Gallery</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link [active page insert pressreleases.html]" aria-current="page" href="pressreleases.html">Press Releases</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link [active page insert contactus.html]" aria-current="page" href="contactus.html">Contact Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link [active page insert links.html]" aria-current="page" href="links.html">Links</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>


`;

writeDOM = writeDOM.replace("[active page insert " + filename + "]", "active");
writeDOM = writeDOM.replace("[active page insert index.html]", "");
writeDOM = writeDOM.replace("[active page insert gallery.html]", "");
writeDOM = writeDOM.replace("[active page insert pressreleases.html]", "");
writeDOM = writeDOM.replace("[active page insert contactus.html]", "");
writeDOM = writeDOM.replace("[active page insert links.html]", "");

console.log(writeDOM);

document.write(writeDOM);
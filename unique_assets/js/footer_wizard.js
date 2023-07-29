// This javascript file writes the footer as the page is loading

var writeDOM_footerWizard = `

<footer class="container">
    <p class="float-end"><a href="#">Back to top</a></p>
    <p>&copy; 1998 - <span id="fillYear"></span> SicknSlick LTD &middot; Website Developed & Designed by GreyBird Group (assigned developer <a href='https://github.com/jakels'>@jakels</a>)</p>
    <script>document.getElementById("fillYear").innerHTML = new Date().getFullYear();</script>
</footer>

`;

document.write(writeDOM_footerWizard);
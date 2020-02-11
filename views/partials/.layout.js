
module.exports = ({ content })=>{
  return `
  
  
<!DOCTYPE html>
<head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--Bootstrap Css-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
         <!--Google Font-->
         <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
         <!--Custom Css file-->
         <link rel="stylesheet" type="text/css" href="../main.css">
         <!--Material Icon -->

</head>
<body class="m3-3 mt-5 pt-5 px-2">
        <nav id="mainNavbar" class="navbar navbar-expand-lg navbar-light fixed-top">
                <a class="navbar-brand pl-lg-5 NameHigh" href="/">Hk Photography</a>
                    
        
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link mx-lg-4" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link mx-lg-4" href="/contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link py-0" href="#">
                <img class="Logoimg" src="./facebook-logo.png ">
                </img>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link py-0" href="#">
              <img class="Logoimg" src="./instagram-png.png ">
                </img>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link py-0" href="#">
              <img class="Logoimg" src="./twitter.png ">
                </img>
              </a>
            </li>
          </ul>
        </div>
        
      </nav>
       ${content}
      <div id="Footer" class ="row d-flex justify-content-around mt-5 pt-4 pb-4">
        <div class="col-md-4 px-5">
        <ul class="Types">
            <li class="Highlight border-bottom pb-2">Expertise</li>
            <li>Meternity</li>
            <li>Marriage</li>
            <li>Ring Ceremony</li>
            <li>Pets</li>
            <li>Destination Shoot</li>
            <li>Babies</li>
            <li>Adult Shoot</li>
        </ul>
        </div>
        <div class="col-md-4 px-5">
            <ul class="Social">
                <li class="Highlight border-bottom pb-2">Social</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Linkedin</li>
                <li>Google</li>
                
            </ul>
        </div>
        <div class="col-md-4 px-5">
            <ul class="Contactfooter">
                <li class="Highlight border-bottom pb-2">Contact</li>
                <li>Email</li>
                <li>Phone</li>
                <li>About</li>
                <li>Timings</li>
                <li>Extras</li>
            </ul>
        </div>
    </div>
    
<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>        
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script>
    $(function () {
    $(document).scroll(function(){
      var $nav = $("#mainNavbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });
  </script>  
    </body>

</html>
`
    }
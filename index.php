<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>website</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="header">
        <h1>Monster Hunter Rise</h1>
        <p>Time to hunt some monsters!!</p>
        <div class="searchbox">
            <input id="search" type="text" placeholder="Search..">
            <button type="submit" ><i class="fa fa-search"></i></button>
            <button class="loginbtn" onclick="document.getElementById('id01').style.display='block'">Login</button>
        </div>

        <div class="login">
          <div id="id01" class="modal">
            <span onclick="document.getElementById('id01').style.display='none'"class="close" title="Close Modal">&times;</span>

            <form class="modal-content animate" action="/action_page.php">
              <div class="imgcontainer">
                <img src="https://www.nicepng.com/png/full/967-9673967_monster-hunter-felyne-palico-app-icon-cartoon.png" alt="Avatar" class="avatar">
              </div>

              <script>
                // get modal
                var modal = document.getElementById('id01');
                
                // close when click outside
                window.onclick = function(event) {
                  if (event.target == modal) {
                    modal.style.display = "none";
                  }
                }
              </script>

              <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required>
        
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>
        
                <button type="submit" class="submit">Login</button>
                <label class="rmb">
                  <input type="checkbox" checked="checked" name="remember" > Remember me
                </label>
              </div>

              <div class="container" style="background-color:#f1f1f1">
                <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
              </div>
            </form>
          </div>
        </div>
        
        <div class="nav">
            <a href="">Home</a>
            <a href="">Gameplay and tips</a>
            <a href="">About</a>
            <a href="">Gallery</a>
            <a href="">Forum</a>
        </div>
    </div>
    <br>
    <div class="slideshow-container">
      
      <div class="mySlides fade">
        <div class="card mb-3 firstcard"style="max-width: 4000px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://product.hstatic.net/1000190106/product/api_cdn.gametv.vn-fedc7a70fe2c1f14f215c66eb1349f10_fec626abd1564560bd7a29239901d470.jpg" class="img-fluid rounded-start" alt="fatty">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Shrine Forest Ruins</h5>
                <br>
                <p class="card-text">Hunt a fatty in this swampy region! </p>
                <p>Description - Tetranadon - </p>
                <p>Tetranadon are known to swallow large amounts of gravel, which causes their belly to inflate to enormous proportions. In their bloated state, Tetranadon become very sluggish, yet their attacks become more powerful, capable of shattering earth with a stomp. The Tetranadon's attacks in this state can be described as "sumo-like". Surprisingly, they are capable of jumping high in the air even when their belly is inflated, creating a massive quake when they land. They can be knocked out of the bloated state by receiving enough damage, which leaves them vulnerable for several seconds. They can also spit water globules from their mouth and lift up a boulder when bloated.</p>
                <h6 class="card-text"><a href="">Discover More</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mySlides fade">
        <div class="card mb-3 secondcard"style="max-width: 4000px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://www.siliconera.com/wp-content/uploads/2021/08/E9MV6C6WUAQo_Iz-710x400.jpg" class="img-fluid rounded-start" alt="Kushala">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Sandy Plains</h5>
                <br>
                <p class="card-text">Let's go hunt an Elder Dragon in the desert </p>
                <p>Description - Kushala Daora -</p>
                <p>Kushala Daora, like the majority of Elder Dragons, has simplicity in its physical attacks and uses claw swipes, tail whips and charges. It instead has the ability to manipulate strong winds. This is used in a variety of ways such as a wind barrier around its body, blasts of wind from its mouth, and creating miniature tornadoes. At their strongest, they are capable of summoning violent storms. These storms are very powerful and can destroy entire forests, villages and even cities.</p>
                <h6 class="card-text"><a href="">Discover More</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mySlides fade">
        <div class="card mb-3 thirdcard"style="max-width: 4000px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://i.ytimg.com/vi/V2ICpgzGLpk/maxresdefault.jpg" class="img-fluid rounded-start" alt="Lava caverns">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Exploration</h5>
                <br>
                <p class="card-text">Try out the exploration mode with random big monsters </p>
                <p>Description - Lava Caverns - </p>
                <p>The Lava Caverns is a location first introduced in Monster Hunter Rise.
                  This large cave system is divided into a searing hot area with flowing lava, and a nice cool area with beautifully pure water. It would be a wonderfully mystical environment if it wasn't teeming with monsters...</p>
                <h6 class="card-text"><a href="">Discover More</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
      
      </div>
      <br>
      
      <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span> 
        <span class="dot" onclick="currentSlide(2)"></span> 
        <span class="dot" onclick="currentSlide(3)"></span> 
      </div>
      
      <script>
        var slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }
        </script>
    
    <div class="card mb-3 midcard" >
      <div class="card-body">
        <div class="row">
          <div class="column">
            <h4 class="card-title">Check our Gallery</h4>
            <br>
            <p>Enjoy images and videos taken and uploaded on here by our fellow hunters!</p>
            <p>Feel free to upload your own gamplay and image on this site to expand our community!</p>
          </div>
          <div class="column">
            <section class="">
              <section class="row g-0">
                <div class="col-lg-4 col-md-12 mb-lg-0">
                  <div class="bg-image hover-overlay ripple shadow-1-strong rounded p-2" data-ripple-color="light">
                    <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/03/Monster-Hunter-Rise-Photo-Mode.jpg" class="img-fluid rounded-start" alt="doggo">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.2);"></div>
                  </a>
                  </div>
                </div>

                <div class="col-lg-4 col-md-12 mb-lg-0">
                  <div class="bg-image hover-overlay ripple shadow-1-strong rounded p-2" data-ripple-color="light">
                    <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/05/Monster-Hunter-Rise-Every-New-Monster.jpg" class="img-fluid rounded-start" alt="valstrax">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.2);"></div>
                  </a>
                  </div>
                </div>
                
                <div class="col-lg-4 col-md-12 mb-lg-0">
                  <div class="bg-image hover-overlay ripple shadow-1-strong rounded p-2" data-ripple-color="light">
                    <img src="https://static2.srcdn.com/wordpress/wp-content/uploads/2021/04/Monster-Hunter-Rise-Cats.webp-.jpg" class="img-fluid rounded-start" alt="friends">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.2);"></div>
                  </a>
                  </div>
                </div>
              </section>
            </section>

            <section class="">
              
              <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModal1Label" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="ratio ratio-16x9">
                      <iframe src="https://www.youtube.com/embed/zIogoDvlGCM" title="youtube video" allowfullscreen></iframe>
                    </div>
                    <div class="text-center py-3" >
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="ratio ratio-16x9">
                      <iframe src="https://www.youtube.com/embed/CDr5i03uC74" title="youtube video" allowfullscreen></iframe>
                    </div>
                    <div class="text-center py-3" >
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModal3Label" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="ratio ratio-16x9">
                      <iframe src="https://www.youtube.com/embed/KytVY8coF1U" title="youtube video" allowfullscreen></iframe>
                    </div>
                    <div class="text-center py-3" >
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </section>
            <br>
            <h5 class="card-text text-center" ><a href="">VIEW OUR IMAGE AND VIDEO GALLERY HERE</a></h5>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3 lowcard">
      <div class="card-body">
        <div class="row">
          <div class="col-4">
            <h4 class="card-title">From the Forum</h4>
            <br>
            <h5>Contributors</h5>
            <ul>
              <li>Dang Khang</li>
              <li>Bona Do</li>
            </ul>
            <p>June 15th 2021</p>
            <br>
            <p>Ocean Vista Beach Villa, Mui Ne, Phan Thiet City</p>
          </div>
          <div class="col-4">
            <h4 class="card-title">Other Web Links</h4>
            <br>
            <ul>
              <li><a href="">Pawsome</a></li>
              <li><a href="">Melynx</a></li>
              <li><a href="">Pawprint</a></li>
              <li><a href="">Barrel Felyne</a></li>
              <li><a href="">Bombs</a></li>
            </ul>
          </div>
          <div class="col-4">
            <h4 class="card-title">About Author</h4>
            <br>
            <div class="row g-0">
              <div class="col-md-4 pg-2">
                <img src="RandomPalico.png" class="img-fluid rounded-start" alt="Palico">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Bonny Do</h5>
                  <p class="card-text">Some random palico</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    

    

    <footer class="footer">
      <p>Author: Bonny Do<br>
      <a href="mailto:BonnyDo@MHR.com.vn">BonnyDo@MHR.com.vn</a></p>
    </footer>
</body>
</html>

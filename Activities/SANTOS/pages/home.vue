<template>
    <div class="container">
        <!-- Logo -->
        <div type="flex" justify="center" align="middle">
            <img src="/joseLogoLight.png" alt="Jose Santos Logo" class="headerLogo">
        </div>
        <!-- Navigation Bar -->
            <nav class="navbar">
                    <ul type="flex" justify="center" align="middle">
                        <li>
                            <a href="#home" class="child bounce">HOME</a>
                        </li>
                        <li>
                            <a href="" class="child bounce">ABOUT</a>
                        </li>
                        <li>
                            <a href="" class="child bounce">SKILLS</a>
                        </li>
                        <li>
                            <a href="" class="child bounce">PORTFOLIO</a>
                        </li>
                        <li>
                            <a href="" class="child bounce">CONTACTS</a>
                        </li>
                    </ul>
            </nav>

        <div id="home">
            <a-row :gutter="16" type="flex" justify="center" align="middle" style="height: 100vh;">
            <a-col :xs="48" :sm="24" :md="16" :lg="12" justify="center" align="middle">
                <h1 class="titleName">
                    Jose Antonio Santos
                </h1>
                <p>
                    Graphic Designer | UI/UX Designer | Web Developer
                </p>
            </a-col>
            <a-col :xs="48" :sm="24" :md="16" :lg="12">
                <img src="/joseSantosBanner.png" alt="Hero" class="hero"/>
            </a-col>
        </a-row>
        </div>

        <button id="return-to-top" title="Return to Top">&#8679;</button>
        <script>
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("return-to-top").style.display = "block";
            } else {
                document.getElementById("return-to-top").style.display = "none";
            }
        }

        document.getElementById("return-to-top").onclick = function() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        };
    </script>
    
    </div>

  
</template>

<style> 

@import url('https://fonts.googleapis.com/css?family=Montserrat:400');

#return-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    z-index: 9999;
}

#return-to-top:hover {
    background-color: #555;
}



.headerLogo {
    width: 4%;
    height: auto;
    margin: 1%;
}
.hero {
  width: 100%; 
  height: auto; 
}

body {
  background-color: #0d0d0d; 
  color: #FFFFFF;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.titleName {
    color: #FFFFFF;
    font-size: 40px;
    font-weight: bold;
}

.navbar {
    background-color: #0d0d0d;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.navbar ul li {
  display: inline;
}

.navbar ul li a {
  display: inline-block;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 1%;
  font-size: large;
  color: #fff;
  text-decoration: none;
}

@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-50px); }
  100% { transform: translateY(0); }
}

.child {
    animation-duration: 1s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
}
.bounce:hover {
    animation-name: bounce;
    animation-timing-function: ease;
    font-weight: bolder;
}
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

.navbar ul li.right-align {
  float: right; /* Right-align the list items */
}

</style>





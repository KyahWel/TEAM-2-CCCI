<template>
    <div>
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
                            <a href="#about" class="child bounce">ABOUT</a>
                        </li>
                        <li>
                            <a href="#skills" class="child bounce">SKILLS</a>
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
            <a-col :xs="46" :sm="22" :md="14" :lg="10" justify="center" align="middle" class="title">
                <h1 class="titleName">
                    Jose Antonio Santos
                </h1>
                <p>
                    Graphic Designer | UI/UX Designer | Web Developer
                </p>
                <div class="socials">
                    <ul type="flex" justify="center" align="middle">
                        <li>
                            <a href="https://www.facebook.com/joseeeantoniosantos" target="_blank"><img src="/fb.webp" alt="Facebook" width="30px" /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/josesnts__/" target="_blank"><img src="/ig.webp" alt="Instagram" width="30px" /></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jose-antonio-santos-83079128a/" target="_blank"><img src="linkedIn.webp" alt="LinkedIn" width="30px" /></a>
                        </li>
                        <li>
                            <a href="https://github.com/josesnts" target="_blank"><img src="/github.png" alt="GitHub" width="30px" /></a>
                        </li>
                    </ul>
                </div>
            </a-col>
            <a-col :xs="50" :sm="26" :md="18" :lg="14">
                <img src="/joseSantosBanner.png" alt="Hero" class="hero"/>
            </a-col>
        </a-row>
        </div>

        <div id="about" class="about">
            <a-row :gutter="16" type="flex" justify="center" align="middle">
                <a-col :xs="44" :sm="20" :md="12" :lg="8" justify="center" align="middle" class="title">
                    <img src="/joseAbout.png" alt="About Image" class="aboutImage"/>
                </a-col>
                <a-col :xs="52" :sm="28" :md="20" :lg="16">
                    <h1 class="aboutText"><b>ABOUT ME</b></h1>
                    <p class="aboutText">Greetings! I'm Jose Antonio Santos, a preson with creative aspirations that aims to make waves in the world of design. With a passion for visual storytelling and a keen eye for detail, I am currently carving out a niche for myself as both a freelance graphic designer and an aspiring UI/UX designer and web developer.</p>
                    
                    <h1 class="aboutText"><b>EXPERIENCES</b></h1>
                    
                    <a-timeline class="aboutText">
                        <a-timeline-item color="gray">
                            <p><img src="web-design.png" alt="" width="30px"> <b>  Freelance Graphic Designer [ JAGE Digital Solutions ]</b></p>
                            <p><i>February 2021 - August 2021 </i></p>
                        </a-timeline-item>

                        <a-timeline-item color="gray">
                            <p><img src="comments.png" alt="" width="30px"> <b>  Customer Support Specialist [ Bill Gosling Outsourcing ]</b></p>
                            <p><i>November 2023 - March 2024</i></p>
                        </a-timeline-item>

                        <a-timeline-item color="green">
                            <p><img src="sack-dollar.png" alt="" width="30px"><b>  Collections Agent [ Bill Gosling Outsourcing ]</b></p>
                            <p><i>March 2024 - Present</i></p>
                        </a-timeline-item>

                        <a-timeline-item color="green">
                            <p><img src="computer.png" alt="" width="30px"><b>  Website Developer Intern [ Centralized Cloud Computing International Inc. ]</b></p>
                            <p><i>March 2024 - Present</i></p>
                        </a-timeline-item>
                    </a-timeline>
                </a-col>
            </a-row>
            <div>
                <h1 type="flex" justify="center" align="middle" class="headers"><b>EDUCATIONAL ATTAINMENT</b></h1>

                <a-row  type="flex" justify="center" align="middle">
                    <a-col :xs="17" :sm="12" :md="5.5" :lg="4" justify="center" align="middle" class="classColumn">
                        <a href="https://www.ayalafoundation.org/program/centex/" target="_blank"><img src="centex.png" height="100px" class="schoolImage"/></a>
                        <h3 class="headers" justify="center" align="middle">
                            <b>
                                PRIMARY EDUCATION
                            </b>
                        </h3>
                    </a-col>
                    <a-col :xs="17" :sm="12" :md="5.5" :lg="4" justify="center" align="middle" class="classColumn">
                        <a href="https://www.smcl.edu.ph/" target="_blank"><img src="smcl.png" height="100px" class="schoolImage"/></a>
                        <h3 class="headers">
                            <b>
                                JUNIOR SECONDARY EDUCATION
                            </b>
                        </h3>
                    </a-col>
                    <a-col :xs="17" :sm="12" :md="5.5" :lg="4" justify="center" align="middle" class="classColumn">
                        <a href="https://www.ama.edu.ph/" target="_blank"><img src="ama.png" height="100px" class="schoolImage"/></a>
                        <h3 class="headers">
                            <b>
                                SENIOR SECONDARY EDUCATION
                            </b>
                        </h3>
                    </a-col>
                    <a-col :xs="17" :sm="12" :md="5.5" :lg="4" justify="center" align="middle" class="classColumn">
                        <a href="https://www.tup.edu.ph/" target="_blank"><img src="tup.png" height="100px" class="schoolImage" /></a>
                        <h3 class="headers">
                            <b>
                                TERTIARY EDUCATION
                            </b>
                        </h3>
                    </a-col>
                </a-row>
            </div>
        </div>

        <div id="skills" class="skills">
            <h1 type="flex" justify="center" align="middle" class="headers"><b>SKILLS</b></h1>
            <a-row  type="flex" justify="center" align="middle">
                    <a-col :xs="11" :sm="8" :md="3" :lg="2" justify="center" align="middle" class="skillImage">
                        <img src="html.png" alt="" height="100px">
                    </a-col>
                    <a-col :xs="11" :sm="8" :md="3" :lg="2" justify="center" align="middle" class="skillImage">
                        <img src="css.png" alt="" height="100px">
                    </a-col>
                    <a-col :xs="11" :sm="8" :md="3" :lg="2" justify="center" align="middle" class="skillImage">
                        <img src="js.png" alt="" height="100px">
                    </a-col>
                    <a-col :xs="11" :sm="8" :md="3" :lg="2" justify="center" align="middle" class="skillImage">
                        <img src="mysql.png" alt="" height="100px">
                    </a-col>
                    <a-col :xs="11" :sm="8" :md="3" :lg="2" justify="center" align="middle" class="skillImage">
                        <img src="bootstrap.png" alt="" height="100px">
                    </a-col>
                    <a-col :xs="11" :sm="8" :md="3" :lg="2" justify="center" align="middle" class="skillImage">
                        <img src="swift.png" alt="" height="100px">
                    </a-col>
            </a-row>

            <a-row  type="flex" justify="center" align="middle">
                    <a-col :xs="11" :sm="8" :md="3" :lg="2" justify="center" align="middle" class="skillImage">
                        <img src="figma.png" alt="" height="100px">
                    </a-col>
                    <a-col :xs="11" :sm="8" :md="3" :lg="2" justify="center" align="middle" class="skillImage">
                        <img src="photoshop.png" alt="" height="100px">
                    </a-col>
                    <a-col :xs="11" :sm="8" :md="3" :lg="2" justify="center" align="middle" class="skillImage">
                        <img src="illustrator.png" alt="" height="100px">
                    </a-col>
                    <a-col :xs="11" :sm="8" :md="3" :lg="2" justify="center" align="middle" class="skillImage">
                        <img src="animate.png" alt="" height="100px">
                    </a-col>
                    <a-col :xs="11" :sm="8" :md="3" :lg="2" justify="center" align="middle" class="skillImage">
                        <img src="premiere.png" alt="" height="100px">
                    </a-col>
                    <a-col :xs="11" :sm="8" :md="3" :lg="2" justify="center" align="middle" class="skillImage">
                        <img src="canva.png" alt="" height="100px">
                    </a-col>
            </a-row>
        </div>

        <div id="portfolio" class="portfolio">

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
    width: 70px;
    height: auto;
    margin: 1%;
    transition: transform .5s ease-in-out;
   -moz-transition: transform .5s ease-in-out;
   -webkit-transition: transform .5s ease-in-out;
}

.headerLogo:hover {
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}

.hero {
  width: 100%; 
  height: auto; 
  animation-name: hero;
  -webkit-animation-name: hero;
  animation-duration: 1s;
  -webkit-animation-duration: 1s;
  animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: ease-in-out;
  visibility: visible !important;
  animation-iteration-count: 1;
}

@keyframes hero {
  0% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(0%);
  }
}

@-webkit-keyframes hero {
    0% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(0%);
  }
}

.title {
  animation-name: title;
  -webkit-animation-name: title;
  animation-duration: 1s;
  -webkit-animation-duration: 1s;
  animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: ease-in-out;
  visibility: visible !important;
  animation-iteration-count: 1;
}

@keyframes title {
  0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(0%);
  }
}

@-webkit-keyframes title {
    0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(0%);
  }
}

body {
  background-color: #0d0d0d; 
  color: #FFFFFF;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  overflow-x: hidden;
}

.titleName {
    color: #FFFFFF;
    font-size: 40px;
    font-weight: bold;
    margin: 0;
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

.socials ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.socials ul li {
  display: inline;
}

.socials ul li a {
  display: inline-block;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 1%;
  font-size: large;
  color: #fff;
  text-decoration: none;
}

/* About */

.about{
    padding-top: 5%;
}

.aboutImage{
    width: 75%;
    height: auto;
    margin-bottom: 5%;
}

.aboutText{
    color: #FFFFFF;
    padding: 0 5% 0 5%;
    text-align: justify;
}

.headers{
    color: #FFFFFF;
    font-weight: bolder;
}

.schoolImage{
    margin: 10%;
    transition: transform .5s ease-in-out;
   -moz-transition: transform .5s ease-in-out;
   -webkit-transition: transform .5s ease-in-out;
}

.schoolImage:hover {
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}

.classColumn{
    margin: 3%;
}

/* Skills */
.skills{
    padding-top: 5%;
}

.skillImage{
    margin: 3%;
    transition: transform .5s ease-in-out;
   -moz-transition: transform .5s ease-in-out;
   -webkit-transition: transform .5s ease-in-out;
}

.skillImage:hover {
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}
</style>





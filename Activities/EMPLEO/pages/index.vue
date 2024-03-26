<template>
  <div class="container">
    <header>
      <h3 class="logo"> 
        <img src="/headerlogo.png" class="logoimg"/>
      </h3>

      <nav class="navbar">
      <ul type="flex" justify="center" allign="middle">
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
      </nav>

    </header>

    <div class="bgimage1" id="home" justify="center" align="middle" type="flex">
      <h2 class="title1"></h2>
        <a-row :gutter="16" type="flex" justify="center" align="middle" >
          <a-col :xs="46" :sm="22" :md="14" :lg="10" justify="center" align="middle" class="title">
           <a-carousel autoplay class="carousel" justify="center" align="middle" type="flex">
            <a-carousel-slide>
            <img src="/pic2.jpg" height="500px" width="350px"/>
            </a-carousel-slide>
            <a-carousel-slide>
            <img src="/pic3.jpeg" height="500px" width="350px"/>
            </a-carousel-slide>
           </a-carousel>
          </a-col>

      <a-col :xs="46" :sm="22" :md="14" :lg="10" justify="center" align="middle" >
        <img src="titlelogo.png"/>
      </a-col>
      </a-row>

      <div class="socials" id="contact">
                    <ul type="flex" justify="center" align="middle">
                        <li>
                            <a href="https://www.facebook.com/jaie.empleo/" target="_blank"><img src="icons/fb.webp" alt="Facebook" width="30px" /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/allthelovejai_/" target="_blank"><img src="icons/ig.webp" alt="Instagram" width="30px" /></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jairlyn-empleo-881517242/" target="_blank"><img src="icons/linkedIn.webp" alt="LinkedIn" width="30px" /></a>
                        </li>
                        <li>
                            <a href="https://github.com/jempleo" target="_blank"><img src="icons/github.png" alt="GitHub" width="30px" /></a>
                        </li>
                    </ul>
                </div>
      <p class="maintext">Welcome to my portfolio Im a 22 year old student of TUP Manila taking BS Information Technology residing in Las Pinas City.</p>

    </div>
 
   <div class="about" id="about"  justify="center" align="middle" style="height: 35vh;">
    <a-dropdown >
    <a class="ant-dropdown-link" @click.prevent >
      <a-button type="primary" class="aboutbtn">Education</a-button>
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;">Tertiary: Technological University of the Philippines S.Y 2024</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">Secondary- SHS: St Francis of Assisi College S.Y 2020</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">Secondary- JHS: CAA National High School S.Y 2018 </a>
        </a-menu-item>
      </a-menu> 
    </template>
  </a-dropdown> 

  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      <a-button type="primary" class="aboutbtn">Work Experience</a-button>
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;">PSR II - Conifer Health Solutions <br> Taguig, 2023 - Present</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">Client Partner - Access Healthcare <br> Taguig, 2022 - 2023</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">Scheduler - SIPMD <br> Paranaque, 2021 - 2021</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>

  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      <a-button type="primary" class="aboutbtn">Reference</a-button>
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;">Kensley Magallanes (Lead - Access Healthcare) <br> Contact: +63 998 556 9778</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">Tim Torre (Lead - Access Healthcare) <br> Contact: +63 915 476 4673</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">Karl Robinson Gonzales (Trainer - Conifer Health Solutions) <br> Contact: +63 915 826 9940</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>

   </div>

  <div class="skills">  
    <h2 class="skillstitle" >SKILLS</h2>
    <p class="skillsdesc"> while hard skills are essential for performing specific job tasks, soft skills are equally vital for effective collaboration, communication, and overall success in the workplace. Combining both sets of skills can lead to well-rounded professionals who are adaptable, communicative, and capable of navigating various challenges in their careers.</p>
    
    <a-row  type="flex" justify="center" align="middle">
                    <a-col :xs="6" :sm="5" :md="5" :lg="2" justify="center" align="middle" class="skillImage">
                        <img src="canvalogo.jfif" alt="" height="100px">
                    </a-col>
                    <a-col :xs="6" :sm="5" :md="5" :lg="2" justify="center" align="middle" class="skillImage">
                        <img src="figmalogo.png" alt="" height="100px">
                    </a-col>
                    <a-col :xs="6" :sm="5" :md="5" :lg="2" justify="center" align="middle" class="skillImage">
                        <img src="filmoralogo.png" alt="" height="100px">
                    </a-col>
                    <a-col :xs="6" :sm="5" :md="5" :lg="2" justify="center" align="middle" class="skillImage">
                        <img src="csslogo.png" alt="" height="100px">
                    </a-col>
                    <a-col :xs="6" :sm="5" :md="5" :lg="2" justify="center" align="middle" class="skillImage">
                        <img src="bootstraplogo.png" alt="" height="100px">
                    </a-col>
                    <a-col :xs="6" :sm="5" :md="5" :lg="2" justify="center" align="middle" class="skillImage">
                        <img src="mysqllogo.png" alt="" height="100px">
                    </a-col>
            </a-row>
  </div>

   <div class="contact" align="middle" justify="center">
    <img src="headerlogo.png" width="20%" >
    <h3> Jairlyn Empleo | 2024 </h3>
    <p> Contact Me </p>


   </div>
  </div>
</template>

<script>
export default {
  components: {
    //logo
  }
}
</script>

<style>
.skillImage {
  margin: 10%;
}
.skillsdesc {
  font-weight: bolder;
}
.skillstitle {
  font-weight: bolder;
  font-size: 45px;
}
.skills {
  padding: 15%;

}
.aboutbtn {
  margin: 5%;
  margin-top: 5%;
  padding-bottom: 5%;
  padding: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  
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
  filter: drop-shadow(2px 2px 4px #000000);
}

.container {
  background-color: #E4C7ED;
} 
.title2 {
  font-size: 100px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: #D4B22C;
  text-shadow: 2px 2px 4px #000000;
} 
.title1 {
  font-size: 20px;
  padding-top: 5%;
}
.maintext{
  margin-top: 2%;
  font-weight: bolder;
}
.logoimg {
  width: 5%;
  height: auto;
}

.logo {
  text-align: right;
}
.carousel {
  width: 100%;
  margin: 0 auto;

}

.text1 {
  color: white;
}
.bgimage3{
  width: 60%;
  height: auto;
  margin-left: 0;
}
.bgimage2 {
  width: 85%;
  height: auto;
}
.about {
  
  color: white;
}
.bgimage1 {
  background-image: url('/homecover.jfif');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  
}
.navbar ul{
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 500%;
  justify-content: center;
  margin-top: 15%;
}

.navbar ul li {
  display: inline;
  margin-left: 2%;
  margin-right: 2%;
  width: 500%;

}

.navbar ul li a {
  display: inline-block;
  font-weight: bolder;
  font-size: large;
  color: black;
  text-decoration: none;

}

.navbar ul li a:hover {
  background-color: aquamarine;
  color:black;
}

.navbar ul li.right-allign {
  float: right; 
}

.navbar {
  position: fixed;
  z-index: 1000;

  top: 0;
} 
</style>

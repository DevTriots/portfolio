
import Dhanno from "./media/Dhanno.jpeg";
import Pussy from "./media/pussy.jpeg";
import Sandeep from "./media/Sandeep.jpeg";

const About = () => {
  return (
    <>
      <div id="aboutpush">
        <div className="mainline" id="centerAbout">
          <h2 style={{color: '#c3073f'}}>About Us</h2>
          <p>
            Meet our dynamic team of three passionate developers with a rich
            background in multinational corporations (MNCs) and a proven track
            record of delivering successful projects for diverse clients.
            Drawing on our extensive expertise, we specialize in a comprehensive
            array of technologies to bring your visions to life.
            <br />
            <br />
            Our skill set spans the entire web development stack, including
            proficiency in HTML, CSS, JavaScript, Node.js, React.js, Express.js,
            MongoDB, and Postgres. With a keen eye for design and user
            experience, we excel in crafting visually appealing and intuitively
            functional interfaces.
            <br />
            <br />
            Beyond the web, we are well-versed in Java and Spring Boot for
            robust backend development, coupled with SQL for efficient database
            management. Our commitment to collaboration and version control is
            evident in our adept use of Git and GitHub.
            <br />
            <br />
            With a combined wealth of experience from MNCs, we bring a
            disciplined and structured approach to project management, ensuring
            timely delivery and exceeding client expectations. Whether it's
            creating sleek user interfaces or building scalable backend
            solutions, our team is geared to tackle diverse challenges.
          </p>

          <div class="container">
            <h4>About Developers</h4>
            <div class="row">
                <div class="col-md-12">
                    <div class="main-timeline9">
                        <div class="timeline">
                            <div class="timeline-content">
                                <div class="circle"><span><img src={Pussy}></img></span></div>
                                <div class="content">
                                    <span class="year">Pushpendra Pal</span>
                                    <h4 class="title">Fullstack Developer</h4>
                                    <p class="description">
                                    Hi, I'm Pushpendra, and I hold a Bachelor's degree in Computer Science. My expertise covers a wide range of programming languages and technologies, including React, C, C++, JavaScript, HTML, CSS, MongoDB, Node.js, and Express.js. I am particularly enthusiastic about full-stack development, where I can leverage my skills in both front-end and back-end technologies.
                                    </p>
                                </div>
                                    <div class="icon"><span></span></div>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-content">
                                <div class="circle"><span><img src={Dhanno}></img></span></div>
                                <div class="content">
                                    <span class="year">Dhananjay Meshram</span>
                                    <h4 class="title">Fullstack Developer</h4>
                                    <p class="description">
                                    Hello, I'm Dhananjay, a computer science graduate with a BTech degree, currently working as a Fullstack Developer. My expertise lies in both backend and frontend development. As a Fullstack Developer, I have hands-on experience with a diverse set of technologies, including C, C++, Java, JavaScript, TypeScript, Python, HTML, CSS, React, SQL, Node.js, Express.js, Angular, and more. This extensive skill set enables me to navigate through various project requirements and deliver comprehensive solutions
                                    </p>
                                </div>
                                    <div class="icon"><span></span></div>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-content">
                                <div class="circle"><span><img src={Sandeep}></img></span></div>
                                <div class="content">
                                    <span class="year">Sandeep Shiven</span>
                                    <h4 class="title">Backend Developer</h4>
                                    <p class="description">
                                    Hello, I'm a Computer Science graduate with a BTech degree and currently employed as a Specialist Programmer at Infosys. My primary focus is on backend development, where I excel in creating robust and efficient server-side solutions. However, I am versatile and can seamlessly transition to frontend development when the need arises.In terms of programming languages and technologies, my toolkit includes C, C++, Java, JavaScript, TypeScript, Python, HTML, CSS, React, SQL, Node.js, Express.js, Angular, Git and more.
                                    </p>
                                </div>
                                    <div class="icon"><span></span></div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
          
        </div>
      </div>
    </>
  );
};

export default About;

<template>
  <div class="main-container">
    <div class="container-one">
      <div class="profile">
        <header>
          <h1>Welcome to My Portfolio</h1>
        </header>
            <p>A dedicated mother of three, I'm pursuing a Bachelor's in Computer Science to provide a bright future for my family. My passion for technology, coupled with my
          entrepreneurial spirit, drives me towards a career in IT that offers flexibility. Having lived in Oregon, Arizona, and Nebraska, I bring a diverse perspective to my 
          professional journey. 
          Beyond my academic pursuits, I've cultivated a rich tapestry of interests. My hobbies include painting, reading, candle making, embroidery, crochet, and hiking with my four dogs. 
          Additionally, I've established side businesses in cake decorating and handmade embroidery, showcasing my creativity and entrepreneurial skills.
          As I strive to balance my professional and personal life, I'm seeking an IT role that allows me to pursue both my career goals and my passions. My diverse experiences, 
          combined with my strong work ethic and dedication to lifelong learning, make me a valuable asset to any team.
            </p>
          <a href="" target="_blank" rel="noopener">My Resume</a>.
      </div>
    </div>
  </div>
    <div class="container-two">
      <section id="skills">
        <h2>My Skills in IT</h2>
        <ul>
          <li>Technical Troubleshooting: Hardware & software diagnosis, problem-solving.</li>
          <li>Operating Systems: Windows, macOS, Linux proficiency.</li>
          <li>Networking Fundamentals: Basic network configuration, troubleshooting.</li>
          <li>Customer Service: Effective communication, problem resolution.</li>
          <li>Software Applications: Office suite, database management, help desk tools.</li>
          <li>Security Awareness: Basic security practices, password management.</li>
          <li>Remote Support: Tools & techniques for remote assistance.</li>
          <li>Documentation: Clear & concise documentation of issues & solutions.</li>
          <li>Programming: Proficiency in specific languages (e.g., Python, Java, C++).</li>
          <li>Networking: Understanding of networking protocols (e.g., TCP/IP, HTTP).</li>
        </ul>
      </section>
    </div>
    <div class="Social-links"></div>
      <h3>Credentials</h3>
        <a href="">
          <div class="links">
           <ul>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Github</a></li>
            <li><a href="www.linkedin.com/in/mrsperlaruano93" target="_blank" rel="noopener">Linkedin</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
          </ul>
          </div>
        </a>
    <h3>My Projects</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">Vue Calculator</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">Vue Note Taker</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">Vue Grocery List</a></li>
    </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.img{
  height: 20px;
}


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #3E91DA;
}

.main-container{
  display: flex;
  flex-direction: row;
  background-color: #cecece;
}

.container-one{
  background-color: coral;
  width: 40%
}

</style>

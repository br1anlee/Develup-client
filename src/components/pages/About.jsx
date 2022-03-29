import "../layout/About.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Contact() {
  return (
    <>
      <div className="main-title">
        <h1>Welcome to DevelUp!</h1>
        <h5>
          A fullstack application that allow users to create flash cards and organize them by
          categories. <strong>It's time to DevelUp!</strong>
        </h5>
      </div>

      <h4 className="team-title">Meet the jamelCase 🐫 Team!</h4>
      <main className="cards team-title">
        <article className="card">
          <img src="images/jamel.jpg" alt="Photo of Jamel" />
          <div className="text">
            <h3>Jamel Scott Fadel</h3>
            <p>Doesn't ever starve</p>
            <a href="https://github.com/Jamelscott" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jamelfadel/" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </article>
        <article className="card">
          <img src="images/sol.jpg" alt="Photo of Sol" />
          <div className="text">
            <h3>Sol Youn</h3>
            <p>
              Trying hard to find the Lost Arks
            </p>
            <a href="https://github.com/Luflos" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sol-youn/" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </article>
        <article className="card">
          <img src="images/gabe.jpg" alt="Photo of Gabe" />
          <div className="text">
            <h3>Gabe Guevara</h3>
            <p>Loves coding, family and lots of prayer they all stay together.</p>
            <a href="https://github.com/gitgabrielguevara" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-guevara-fullstack/" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </article>
        <article className="card">
          <img src="images/brian.jpg" alt="Photo of Brian" />
          <div className="text">
            <h3>Brian Lee</h3>
            <p>
              Needs to get gud
            </p>
            <a href="https://github.com/br1anlee" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/brianjoonmolee/" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </article>
      </main>
    </>
  )
}

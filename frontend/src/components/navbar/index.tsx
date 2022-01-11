import { ReactComponent as GithubIcon } from '../../assets/img/Vector.svg'
import './styles.css'
function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DsMovie</h1>
          <a href="https://github.com/Rbotin" target="_blank" rel="noreferrer">
            <div className="dsmovie-icon">
              <GithubIcon className="icon" />
              <p className="dsmovie-contact-link">/Rbotini</p>

            </div>


          </a>

        </div>
      </nav>
    </header>
  )
}
export default Navbar
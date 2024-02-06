
import { Link } from "react-router-dom";
import logoImage from "./media/devTroits_logo.jpg";
const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const handleMenuToggle = () => {
  //   setIsMenuOpen(!isMenuOpen);
    
  // };
  return (
          <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
            <div class="container-fluid">
              <Link class="navbar-brand" to="/home"><img src={logoImage} alt="" className="logoImage"/>
                DevTriots</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation" >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className= " offcanvas offcanvas-end text-bg-dark" 
             
              tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div class="offcanvas-header justify-content-end">
                
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
            </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" >
                  <li class="nav-item">
                    <div className="link-cover">
                      <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                    </div>
                  
                  </li>
                  <li class="nav-item">
                    <div className="link-cover">
                      <Link className="nav-link" aria-current="page" to="/About">About</Link>
                    </div>
                  
                  </li>
                  <li class="nav-item">
                    <div className="link-cover">
                      <Link className="nav-link" aria-current="page" to="/project">Project</Link>
                    </div>
                  
                  </li>
                  
                  <li class="nav-item">
                    <div className="link-cover">
                      <Link className="nav-link " aria-current="page" to="/skill">Skill</Link>
                    </div>
                  
                  </li>
              </ul>
              
            </div>
          </div>
        </div>
      </nav>

  );
};

export default Navbar;

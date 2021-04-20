import {Li1, Li2} from './navlinks';
import toggleSidebar from "../events/toggleEvent";


const navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button onClick={toggleSidebar} id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>


            <ul className="navbar-nav ml-auto">
                <Li1 />
                <div class="topbar-divider d-none d-sm-block"></div>
                <Li2 />
            </ul>
                
        </nav>
    );
}

export default navbar;
const sidebarN = () => {
    const [lists, setList] = useState([
        {title: "INTERFACE", component: [
            {title: "Components", active: false, icon: "cog",
            submenu: [
                {subtitle: "Custom Component", 
                subSubmenu: [
                    {name: "Buttons", href: ""},
                    {name: "Cards", href: ""}
                ]}
            ]},
            {title: "Utilities", active: false, icon: "wrench",
            submenu: [
                {subtitle: "Custom Component", 
                subSubmenu: [
                    {name: "Buttons", href: ""},
                    {name: "Cards", href: ""}
                ]}
            ]}
        ]},
        {title: "ADDONS", component: [
            {title: "Pages", active: true, icon: "folder",
            submenu: [
                {subtitle: "Login Screen", subSubmenu: []},
                {subtitle: "Other Pages", subSubmenu: []}
            ]},
            {title: "Charts", active: false, icon: "area", submenu: []},
            {title: "Tables", active: false, icon: "table", submenu: []}
        ]}
    ]);

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a>
            </li>

            <hr className="sidebar-divider" />

            {lists.map(item => (    
                <>
                {if(item.title){
                    <div className="sidebar-heading">
                        {item.title}
                    </div>

                }}

                <li className="nav-item active">
                    <a className="nav-link" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true"
                        aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                    <div id="collapsePages" className="collapse show" aria-labelledby="headingPages"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <a className="collapse-item" href="login.html">Login</a>
                            <a className="collapse-item" href="register.html">Register</a>
                            <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                            <div className="collapse-divider"></div>
                            <h6 className="collapse-header">Other Pages:</h6>
                            <a className="collapse-item" href="404.html">404 Page</a>
                            <a className="collapse-item active" href="blank.html">Blank Page</a>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="charts.html">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span>
                    </a>
                </li>
                
                <hr className="sidebar-divider"/>
                </>

            ))}

            <hr className="sidebar-divider d-none d-md-block" />

            
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" onClick={toggleSidebar}></button>
            </div>

        </ul>
    );
}
 
export default sidebarN;
import { NavLink } from "react-router-dom";
import './Sidebar.css'

const routes = [
    {
        path: "/",
        name: "Dashboard",
        icon: "Assets/dashboard.svg",
    },
    {
        path: "/worldwide",
        name: "wordwide",
        icon: "/Assets/worldwide.svg",
    },
    {
        path: "/users",
        name: "Users",
        icon: '/Assets/Users.svg',
    },
    {
        path: "/setup",
        name: "Setup",
        icon: "/Assets/setup.svg",
    },
    {
        path: "/email",
        name: "Email",
        icon: '/Assets/email.svg',
    },

    {
        path: "/report",
        name: "Report",
        icon: "/Assets/report.svg",
    },
];




const Sidebar = () => {

    return (
        <div className="main-container">
            <div className="sidebar">
                <div className="top-section">
                    <section className="routes">
                        {
                            routes.map((item, index) => {
                                return (
                                    <NavLink to={item.path} key={index}
                                        className="link"
                                        activeClassName="active"                                    >
                                        <img src={item.icon} alt={item.name} className="sidebar_image" />
                                    </NavLink>
                                )
                            }
                            )
                        }
                    </section>
                </div>
            </div>


        </div>
    )
}

export default Sidebar
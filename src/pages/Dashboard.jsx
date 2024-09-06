import './css/DashBoard.css'
import Minimenu from './mini_menu/Minimenu'

const Dashboard = () => {
    const icon = "Assets/arrow-point-to-down.svg"
    return (
        <div className="Dashboard">
            <div className="mini_header">
                <Minimenu icon={icon} dashboard="Dashboard" />
            </div>
            <div className="mini_header_mobile">
                <Minimenu icon={icon} dashboard="Dashboard" />
            </div>
            <div className="Form_Dashboard">
                gvfdhgfh
            </div>
        </div>
    )
}

export default Dashboard
import Minimenu from "./mini_menu/Minimenu"


const Setup = () => {
    const icon = "Assets/arrowdownload.svg"
    return (
        <div className="Dashboard">
            <div className="">
                <Minimenu icon={icon} dashboard="Setup" />
            </div>
            <div className="Form_Dashboard">
                Setup
            </div>
        </div>
    )
}

export default Setup
import Minimenu from "./mini_menu/Minimenu"


const Reports = () => {
    const icon = "Assets/arrowdownload.svg"
    return (
        <div className="Dashboard">
            <div className="">
                <Minimenu icon={icon} dashboard="Reports" />
            </div>
            <div className="Form_Dashboard">
                <div className="">

                </div>
            </div>
        </div>
    )
}

export default Reports
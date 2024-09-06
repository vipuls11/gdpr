import Minimenu from "./mini_menu/Minimenu"



const Users = () => {
    const icon = "Assets/arrowdownload.svg"
    return (
        <div className="Dashboard">
            <div className="">
                <Minimenu icon={icon} dashboard="Users" />
            </div>
            <div className="Form_Dashboard">
                Users
            </div>
        </div>
    )
}

export default Users
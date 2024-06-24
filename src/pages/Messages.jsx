import { useState } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

const Messages = () => {
    const [password, setPassword] = useState(true)

    const onclickpasswordhandler = () => {
        setPassword(!password);
    }
    return (
        <div>
            <h1 className="">Message</h1>
            <form action="">
                <label for="" className=""></label>
                <div className="" style={{ display: 'flex', alignItems: 'center', border: '2px solid black', padding: "2px 15px" }}>

                    <input type={password ? 'password' : 'text'} placeholder="password" style={{ fontSize: '18px', border: 'none', padding: "8px 0px", outline: 'none' }} />
                    <div>{password ? (<FaEyeSlash onClick={onclickpasswordhandler} style={{ fontSize: '28px', fontWeight: 'bold' }} />) : (<FaRegEye onClick={onclickpasswordhandler} style={{ fontSize: '28px', fontWeight: 'bold' }} />)}</div>             </div>
            </form>
        </div>
    )
}

export default Messages
import { NavLink } from "react-router-dom"
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa"
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, color, motion } from "framer-motion";

const routes = [
    {
        path: "/",
        name: "Dashboard",
        icon: <FaHome />,
    },
    {
        path: "/users",
        name: "Users",
        icon: <FaUser />,
    },
    {
        path: "/messages",
        name: "Messages",
        icon: <MdMessage />,
    },
    {
        path: "/analytics",
        name: "Analytics",
        icon: <BiAnalyse />,
    },
    {
        path: "/file-manager",
        name: "File Manager",
        icon: <AiTwotoneFileExclamation />,
        subRoutes: [
            {
                path: "/settings/profile",
                name: "Profile ",
                icon: <FaUser />,
            },
            {
                path: "/settings/2fa",
                name: "2FA",
                icon: <FaLock />,
            },
            {
                path: "/settings/billing",
                name: "Billing",
                icon: <FaMoneyBill />,
            },
        ],
    },
    {
        path: "/order",
        name: "Order",
        icon: <BsCartCheck />,
    },
    {
        path: "/setting",
        name: "Settings",
        icon: <BiCog />,
        exact: true,
        subRoutes: [
            {
                path: "/settings/profile",
                name: "Profile ",
                icon: <FaUser />,
            },
            {
                path: "/settings/2fa",
                name: "2FA",
                icon: <FaLock />,
            },
            {
                path: "/settings/billing",
                name: "Billing",
                icon: <FaMoneyBill />,
            },
        ],
    },
    {
        path: "/saved",
        name: "Saved",
        icon: <AiFillHeart />,
    },
];




const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            transition: {
                duration: 0.2,
            },
        },
    };

    const ShowAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            }
        }
    }
    return (
        <div className="main-container">
            <motion.div animate={{
                width: isOpen ? "200px" : "45px",
                transition: {
                    duration: 0.5,
                    type: "spring",
                    damping: 10,
                }
            }} className="sidebar">
                <div className="top-section">
                    <div className="" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 10px' }}>
                        <div className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                        <AnimatePresence>
                            {
                                isOpen && (

                                    <motion.h1 variants={ShowAnimation} initial="hidden" animate="show" exit="hidden" className="logo">
                                        Av infotech
                                    </motion.h1>

                                )}
                        </AnimatePresence>


                    </div>
                    <div className="search">
                        <div className="search_icon">
                            <BiSearch />
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.input variants={inputAnimation} initial="hidden" animate="show" exit="hidden" type="text" style={{ color: 'black', }}
                                    placeholder="Search..." />
                            )}
                        </AnimatePresence>
                    </div>
                    <section className="routes">
                        {
                            routes.map((item, index) => {
                                return (
                                    <NavLink to={item.path} key={index}
                                        className="link"
                                        activeClassName="active"
                                    >
                                        <div className="icon">{item.icon}</div>
                                        <AnimatePresence>
                                            {
                                                isOpen && (
                                                    <motion.div variants={ShowAnimation}
                                                        animate="show"
                                                        initial="hidden"
                                                        className="Link_text"
                                                    >
                                                        {item.name}
                                                    </motion.div>
                                                )
                                            }
                                        </AnimatePresence>
                                    </NavLink>
                                )
                            }
                            )
                        }
                    </section>
                </div>
            </motion.div>


        </div>
    )
}

export default Sidebar
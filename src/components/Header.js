import React, { useState, useEffect, useRef } from 'react'
import { Drawer, Space, Button } from 'antd'
import { NavLink, Link, useNavigate, useActionData } from "react-router-dom"
import { login } from '../Api/Auth'




const Header = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login")
    }

    const hasLogin = localStorage.getItem('token');



    console.log(hasLogin);

    const headerRef = useRef(null)
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shadow-sm')
            } else {
                headerRef.current.classList.remove('shadow-sm')
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc()
        return window.removeEventListener('scroll', stickyHeaderFunc)
    })
    return (
        <>
            <header className='header sticky-top' ref={headerRef}>
                <div className='container'>
                    <div className='row pt-1'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='logo col-lg-6 col-md-5 col-sm-5'>
                                <img className='' style={{ width: "60px" }} src='https://i.pinimg.com/236x/69/9c/16/699c16f1a51b2493f9c26f0d6bb01796.jpg' alt='logo'>
                                </img>
                            </div>
                            <div className='col-lg-4 navbar-reponsive'>
                                <nav className="navbar navbar-expand-lg">
                                    <div className="container-fluid">
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" aria-current="page" to={"/"}>Home</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to={"/about"}>About</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to={"/tours"}>Tours</NavLink>
                                                </li>

                                            </ul>

                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className='col-lg-2 col-md-5 col-sm-5'>
                                <Space align='center' className='gap-3'>
                                    {
                                        hasLogin ? <Link to={"/"} onClick={handleLogout} className='header-btn__register'>Log out</Link> :
                                            <>
                                                <Link to={"/login"} className='header-btn__login'>Log in</Link>
                                                <Link to={'/register'} className='header-btn__register'>Register</Link>
                                            </>
                                    }

                                </Space>

                            </div>
                            <button className='btn header-btn__menu' onClick={showDrawer}>
                                <i className="fa-solid fa-bars"></i>
                            </button>

                            <Drawer
                                closable={false}
                                width={200}

                                title="Basic Drawer" placement="right" onClose={onClose} open={open}>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Drawer>
                        </div>
                    </div></div>

            </header>


        </>
    )
}

export default Header
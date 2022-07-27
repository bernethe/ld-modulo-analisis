import React from 'react';
import { RiUserFill } from 'react-icons/ri';
import { AiFillFileText } from 'react-icons/ai';
import LogoLD from '../UI/LogoLD';
import '../../SCSS/header.scss';

const Header = () => {

    return <header className='container-fluid main-header'>
                <div className="row">
                    <div className="col-5 col-sm-1">
                        <LogoLD fill='#fff' />
                    </div>
                    <div className="col-7 col-sm-9">
                        <nav className="main-header-sub-menu">
                            <ul>
                                <li>
                                    <a href='/panel'><AiFillFileText /> LD Crédito</a>
                                    <ul>
                                        <li><a href='/analisis-credito'>Análisis de Crédito</a></li>
                                        <li><a href='#/'>Gestión Análisis</a></li>
                                        <li><a href='#/'>Gestión de Vistas</a></li>
                                        <li><a href='/cliente'>Cliente</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-5 col-sm-2">
                        <div>
                            <RiUserFill /> LogicalData
                        </div>
                    </div>
                </div>
            </header>;
};

export default Header;

import React, { Component } from 'react';

class Header extends Component {
    //const { t } = useTranslation();

    render() {
        return (
            <header className="navbar navbar-sticky navbar-expand-lg">
                <div className="container position-relative">
                    <a className="navbar-brand" href="/">
                        <img className="navbar-brand-regular" src={this.props.imageData} alt="brand-logo" />
                        <img className="navbar-brand-sticky" src="/img/logo.png" alt="sticky brand-logo" />
                    </a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-inner">
                        {/*  Mobile Menu Toggler */}
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <nav>
                            <ul className="navbar-nav" id="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    About
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
                                        <li>
                                            <a className="dropdown-item font-weight-normal" href="/theme-one">Introduction</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item font-weight-normal" href="/theme-three">Vision</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item font-weight-normal" href="/theme-four">History</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item font-weight-normal" href="/theme-five">Address</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Product
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle font-weight-normal" href="/#" data-toggle="dropdown">Dental</a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                       <a className="dropdown-item font-weight-normal" href="/pricing">Align Studio</a>
                                                </li>
                                                <li>
                                                       <a className="dropdown-item font-weight-normal" href="/download-page">Appliance Creator<span className="badge badge-pill badge-secondary ml-2">Coming soon</span></a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item font-weight-normal" href="/subscribe-page">LaonCeph</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle font-weight-normal" href="/#" data-toggle="dropdown">Medical</a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                       <a className="dropdown-item font-weight-normal" href="/pricing">Laon Sleep<span className="badge badge-pill badge-secondary ml-2">Coming soon</span></a>
                                                </li>
                                                {/* <li>
                                                       <a className="dropdown-item" href="/download-page">Laon Cardio<span className="badge badge-pill badge-secondary ml-2">Coming soon</span></a>
                                                </li> */}
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pages
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <a className="dropdown-item font-weight-normal" href="/">News</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item font-weight-normal" href="/theme-two">IR</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Careers
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <a className="dropdown-item font-weight-normal" href="/">We are Hiring</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Contact
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <a className="dropdown-item font-weight-normal" href="/">Company Profile</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item font-weight-normal" href="/">Contact us</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Blog
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <a className="dropdown-item font-weight-normal" href="/">AI Research</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <label class="btn btn-secondary">
                            <button type="radio" name="options" id="option1" autocomplete="off" checked> KR </button>
                        </label>
                        <label class="btn btn-secondary">
                            <bytton type="radio" name="options" id="option2" autocomplete="off"> EN </bytton>
                        </label>
                    </div> */}
                </div>
        </header>
        );
    }
}
export default Header;
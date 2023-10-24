import Logo from '../../assets/logos/Logo/BrainFlix-logo.svg'
import Search from '../../assets/icons/Icons/search.svg'
import Image from '../../assets/images/Images/Mohan-muruge.jpg'
import UploadIcon from '../../assets/icons/Icons/upload.svg'
import { Link } from 'react-router-dom';

import './Header.scss'

const Header = () => {
    return (
        <>
            <header>
                <div className="header">
                    <nav className='header__nav'>
                        <div className="header__top">
                            <Link to="/"><img 
                                className='header__logo'
                                src= { Logo } 
                                alt="BrainFlix Logo" 
                            /></Link>
                            <form className='header__form' action="">
                                <img className='header__icon' src={ Search } alt="Search Icon" />
                                <input className='header__input' type="text" name="input" id="input" placeholder='Search'/>
                                <img className='header__image' src={ Image } alt="Header Image" />
                            </form>
                        </div>
                        <div className="header__bottom">
                            <div className="header__bottom--container">
                                <img className='header__upload' src={ UploadIcon } alt="Upload Icon" />
                                <Link to="upload/:uploadId"><button className='header__button'>UPLOAD</button></Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
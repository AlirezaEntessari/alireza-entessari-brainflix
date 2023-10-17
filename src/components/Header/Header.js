import Logo from '../../assets/logos/Logo/BrainFlix-logo.svg'
import Search from '../../assets/icons/Icons/search.svg'
import Image from '../../assets/images/Images/Mohan-muruge.jpg'
import UploadIcon from '../../assets/icons/Icons/upload.svg'

import './Header.scss'

function Header() {
    return (
        <>
            <header>
                <div className="header">
                    <nav className='header__nav'>
                        <div className="header__top">
                            <img 
                                className='header__logo'
                                src= { Logo } 
                                alt="BrainFlix Logo" 
                            />
                            <form className='header__form' action="">
                                <img className='header__icon' src={ Search } alt="Search Icon" />
                                <input className='header__input' type="text" name="input" id="input" placeholder='Search'/>
                                <img className='header__image' src={ Image } alt="Header Image" />
                            </form>
                        </div>
                        <div className="header__bottom">
                            <img src={UploadIcon} alt="Upload Icon" />
                            <button className='header__button'>UPLOAD</button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
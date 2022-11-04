import './Header.css'
import CTA from './CTA'
import mintra from '../../assets/Mintra.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
     <header>
      <div className="container header_container">
        <h5>Mintra Domundee</h5>
        <h5 className='text-light'>Junior Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={mintra} alt='me'/>
        </div>

        <a href='#contact' className='scroll__down'>Keep Reading</a>
      </div>
     </header>
    )
  }

export default Header
import { FooterStyle } from "./style";
import mplogo from '../../../media/mplogo.png';
import fblogo from '../../../media/fblogo.png';
import twlogo from '../../../media/twlogo.png';
import iglogo from '../../../media/iglogo.png';
import inlogo from '../../../media/inlogo.png';

const Footer = () => {
    return (
            <FooterStyle>
                        <div className='con-footer0'>
                            <div className='con-footer'>
                                    <p>@ 2022 Derechos reservados</p>

                                <div className='con-footer2'>
                                    <img src={mplogo} alt="" />
                                </div >

                                <div className='con-footer3'>
                                    <div className="footer-logo">
                                        <img src={fblogo} alt="" />
                                    </div>

                                    <div className="footer-logo">
                                        <img src={twlogo} alt="" />
                                    </div>

                                    <div className="footer-logo">
                                        <img src={iglogo} alt="" />
                                    </div>

                                    <div className="footer-logo">
                                        <img src={inlogo} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
            </FooterStyle>
    )
}

export default Footer;
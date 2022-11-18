import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RegisterLoginStyle } from "./style";
import preciopng from '../media/preciopng.png';
import Footer from "../Component/General/Footer/Footer";
import { useContext } from "react";
import { TodoContext } from "../Context/Context";

const LoRi = () => {
    const {todoState} = useContext(TodoContext);
    const {widthPhone} = todoState;
    let location = useLocation();
    const navigate = useNavigate();

    console.log(location)
    return (
        <>
            <RegisterLoginStyle>
                    <section className='con'>
                        <div className='img-rl'></div>

                        <div className='con1'>
                            <div className='con11'>
                                <figure className='con1-figure'>    
                                    <img src="" alt="" />
                                </figure>

                                {location.pathname !== "/register-commerce" && (
                                <button
                                    className="btn-cs"
                                    onClick={() => {
                                        console.log('bt')
                                        navigate('/register-commerce')
                                            }}
                                    >Crear tienda</button>)
                                }
                            </div>
                            
                            <div className='con12'>
                                {!widthPhone ? <div className='con123'>
                                    <div className="con124">
                                        <h2>
                                            Todo lo que buscas en el día
                                        </h2>

                                        <h3>
                                            Encuentre el producto de tu kiosko favorito
                                        </h3>
                                    </div>
                                </div>
                                : null    
                                }

                                <div className='con124-form'>
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='con0'>
                        <div className='con01'>
                            <div className='con011'>
                                <div className="con011-card">
                                    <div className='-card-img'>
                                        <img src={preciopng} alt="" />
                                    </div>
                                    <div className='con-text'>
                                            <h4 className='-con-text1'>
                                                Los mejores precios
                                            </h4>
                                            <h5 className='-con-text2'>
                                                Precios muy accesible para todas las gentess
                                            </h5>
                                    </div>
                                    
                                </div>
                                <div className="con011-card">
                                    <div className='-card-img'>
                                        <img src={preciopng} alt="" />
                                    </div>
                                    <div className='con-text'>
                                            <h4 className='-con-text1'>
                                                Los mejores precios
                                            </h4>
                                            <h5 className='-con-text2'>
                                                Precios muy accesible para todas las gentess
                                            </h5>
                                    </div>
                                    
                                </div>
                                <div className="con011-card">
                                    <div className='-card-img'>
                                        <img src={preciopng} alt="" />
                                    </div>
                                    <div className='con-text'>
                                            <h4 className='-con-text1'>
                                                Los mejores precios
                                            </h4>
                                            <h5 className='-con-text2'>
                                                Precios muy accesible para todas las gentess
                                            </h5>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
            </RegisterLoginStyle>
            <Footer />
        </>
    )
}

export default LoRi;
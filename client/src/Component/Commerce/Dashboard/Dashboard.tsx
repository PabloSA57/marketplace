import { DashboardStyle } from './style';

const Dashboard = () => {
    return (
            <DashboardStyle>
                <div className='con'>
                    <div className='con1'>
                        <div className='con11'>
                            <span className='con111'>Hola Pablo!!</span>
                            <span className='con112'>Bienvenido a tu panel de control</span>
                        </div>
                    </div>

                    <div className='con2'>
                        <div className='con21'>
                            <div>
                                <span>Actividades</span>
                            </div>

                            <div className='con22'>
                                <div className="card-acti">
                                    <div className='c-icon'>
                                        P
                                    </div>

                                    <div>
                                        <span>Ventas</span>
                                        <span>100</span>
                                    </div>
                                    
                                </div>

                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                {//Lista de productos 
                }
                    <div className='con3'>
                        <div className='con11'>
                            <div>
                                <span>Productos mas vendidos</span>
                            </div>
                            <div className='con22'>
                                <div>
                                    <div className='card-product'>
                                        <div className='cp-img'>
                                            <img src="" alt="" />
                                        </div>
                                        <div>
                                            <span>nombre</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardStyle>
    )
}


export default Dashboard;
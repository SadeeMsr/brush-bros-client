import React, { useEffect, useState } from 'react';
import ServiceData from './ServiceData'


const ManageServicesForm = () => {

    const [services, setServices] = useState([]);

    const contentHeading={
        serviceTittle:"Service Name",
        serviceDetail:"Service Details",
        price:"Price(TK)",
        Action:"Action"
    }

    const deleteProduct = (id) => {

        const newServices = services.filter(pd => pd._id !== id);
        setServices(newServices);

        fetch(`https://fierce-sea-48580.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }

    useEffect(() => {
        fetch('https://fierce-sea-48580.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="container">
            <div className="mt-4">
                <h4>Manage products</h4>
            </div>

            <div className='mt-5 shadow' style={{ backgroundColor: 'white' }}>
                <div style={{ backgroundColor: 'rgb(228, 228, 228)', marginTop: '20px' }}>

                    <ServiceData item={contentHeading}></ServiceData>

                </div>
                <div>
                    {
                        services.map(pd => <ServiceData item={pd} deleteProduct={deleteProduct} key={pd._id}></ServiceData> )
                    }
                </div>
            </div>

        </div>
    );
};

export default ManageServicesForm;
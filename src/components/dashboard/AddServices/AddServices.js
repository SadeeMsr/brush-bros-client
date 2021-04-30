import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import AddServicesForm from './AddServicesForm';

const AddServices = () => {
    return (
        <section>
            <div  className="row" style={{backgroundColor:'rgb(214, 235, 235)',height:'100vh'}}>
                <div className="col-md-3 col-12 bg-primary">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 col-12">
                    <AddServicesForm></AddServicesForm>
                </div>
            </div>
        </section>
    );
};

export default AddServices;
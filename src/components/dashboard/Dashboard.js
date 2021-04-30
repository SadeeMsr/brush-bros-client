import React from 'react';
import Sidebar from './sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section>
            <div  className="row">
                <div className="col-md-3 col-12 bg-primary">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 col-12">
                    <h1>booking</h1>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
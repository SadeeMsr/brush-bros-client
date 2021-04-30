import React from 'react';
import { MdDelete } from 'react-icons/md';

const ServiceData = (props) => {

    const { serviceTittle,price,serviceDetail, Action, _id } = props.item;

    return (

        <div className="row d-flex flex-row mt-3">

            <div className="d-flex align-items-center ms-3" style={{ width: '200px', height: "60px" }}>
                <h6>{serviceTittle}</h6>
            </div>
            <div className="d-flex align-items-center " style={{ width: "250px" }}>
                <h6 style={{color: serviceDetail.length>20? 'grey':'black'}}>{serviceDetail}</h6>
            </div>

            <div className="d-flex align-items-center " style={{ width: "120px" }}>
                <h6>{price}</h6>
            </div>

            <div className="d-flex align-items-center  ms-auto" style={{ width: "150px" }}>
                {
                    Action ? <h6>Action</h6> : <MdDelete onClick={() =>props.deleteProduct(_id)} style={{ fontSize: "30px", color: "red", cursor: "pointer" }} />
                }

            </div> 

        </div>

    );
};

export default ServiceData;
import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { FaCameraRetro } from 'react-icons/fa';
import axios from 'axios';








const AddServicesForm = () => {


    const[newServices,setNewServices] = useState({});
    const [imageURL, setIMageURL] = useState(null);


    const ServicesData = {serviceTittle: newServices.serviceTittle, imageURL:imageURL,serviceDetail: newServices.serviceDetail, price: newServices.price};

    const uploadImage = event => {
        const imageData = new FormData();
        imageData.set('key', '66a3801866bf5157d7b81c81c7fef10e');
        imageData.append('image', event.target.files[0]);
    
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
          setIMageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
    
      }

    const handleBlur = (e) =>{
        const newServicesInfo = {...newServices};
        newServicesInfo[e.target.name] = e.target.value;
         setNewServices(newServicesInfo);
    }



    const handleAddServices = () => {
         
        fetch('https://fierce-sea-48580.herokuapp.com/addServices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ServicesData)
        })
        .then(res=>{
            console.log(res);
        })
    }


    return (
        <div className="container">
            <div className="mt-4">
                <h4><b>ADD SERVICES</b></h4>
            </div>

            <div className='mt-5 shadow p-4 rounded' style={{ backgroundColor: 'white' }}>
                <div className="row">
                    <div className="col pt-1 ms-3" style={{ height: '80px' }}>
                        <h6>Services Name</h6>
                        <input type="text" name="serviceTittle" onBlur={handleBlur}  />
                    </div>
                    <div className="col pt-1" style={{ height: '80px' }}>
                        <h6>Price(TK)</h6>
                        <input type="number" name="price" onBlur={handleBlur} />
                    </div>
                </div>
                <div className="row">
                    <div className="col pt-1 ms-3" style={{ height: '80px' }}>
                        <h6>Service Detail</h6>
                        <input type="text" className="h-75" name="serviceDetail" onBlur={handleBlur} />
                    </div>
                    <div className="col" style={{ height: '80px' }}>
                        <input type="file" accept="image/*" id="icon-button-file" name="image" multiple onChange={uploadImage}/>               
                        <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <FaCameraRetro />
                        </IconButton>
                        </label>

                </div>
            </div>
           
        </div>
            <div className="d-flex justify-content-end mt-2">
                <button className="btn btn-success" onClick={handleAddServices}>Save</button>
            </div>
        </div >
    );
};

export default AddServicesForm;
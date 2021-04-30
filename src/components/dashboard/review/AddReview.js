import React, { useState} from 'react';




const AddReview = () => {

    const[newReview,setNewReview] = useState({});
    //const [imageURL, setIMageURL] = useState(null);


    const ReviewData = {personName: newReview.personName,designation: newReview.designation, review: newReview.review};


    const handleBlur = (e) =>{
        const newReviewInfo = {...newReview};
        newReviewInfo[e.target.name] = e.target.value;
         setNewReview(newReviewInfo);
    }



    const handleAddReview = () => {
         
        fetch('https://fierce-sea-48580.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ReviewData)
        })
        .then(res=>{
            console.log(res);
        })
    }


    return (
        <div className="container">
            <div className="mt-4">
                <h4><b>ADD REVIEW</b></h4>
            </div>

            <div className='mt-5 shadow p-4 rounded' style={{ backgroundColor: 'white' }}>
                <div className="row">
                    <div className="col pt-1 ms-3" style={{ height: '80px' }}>
                        <h6>Your Name</h6>
                        <input type="text" name="personName" onBlur={handleBlur}  />
                    </div>
                    <div className="col pt-1" style={{ height: '80px' }}>
                        <h6>Job</h6>
                        <input type="text" name="designation" onBlur={handleBlur} />
                    </div>
                </div>
                <div className="row">
                    <div className="col pt-1 ms-3" style={{ height: '80px' }}>
                        <h6>Review</h6>
                        <input type="text" name="review" className='h-75' onBlur={handleBlur} />
                    </div>
            </div>
           
        </div>
            <div className="d-flex justify-content-end mt-2">
                <button className="btn btn-success" onClick={handleAddReview}>Save</button>
            </div>
        </div >
    );
};

export default AddReview;
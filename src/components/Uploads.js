import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../Context/UserContext';

function Upload(props) {
    const { img } = props
    const [image, setImage] = useState(null);
    const { uploadContext } = useContext(UserContext);

    return (
        <>

            <div style={{ height: "210px" }}>
                {img && <img id='imgUpload' className='w-100 rounded-2' style={{ height: "210px" }} src={img} />}
                {image && <img id='imgUpload' className='w-100 rounded-2' style={{ height: "210px" }} src={URL.createObjectURL(image)} />}
            </div>
            <input id='inputFile' type="file" className='w-100'
                onChange={(event) => {
                    setImage(event.target.files[0])
                    uploadContext(event.target.files[0])
                }}

            />

        </>
    );
}
export default Upload;
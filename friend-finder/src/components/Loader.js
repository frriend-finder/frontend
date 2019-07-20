import React from 'react';
import Loader from 'react-loader-spinner';


const LoaderComponent = props => {

    return (
        <div className="loading-spinner-wrapper"><Loader type="ThreeDots" color="#F19F4D" height={300} width={200} /></div>
    )

}

export default LoaderComponent;
import React, { Component } from 'react';
import Previews from './Previews';

class ImageSection extends Component{
    render(){
        return(
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="image-section">
                    <Previews />
                </div>
            </div>
        );
    }
}

export default ImageSection;
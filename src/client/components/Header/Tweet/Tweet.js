import React from 'react';

function Tweet(){
    return(
        <div className="d-flex justify-content-center align-items-center">
            <i className="fa fa-twitter"></i>
            <button type="button" className="btn btn-link">Share</button>
        </div>
    );
}

export default Tweet;
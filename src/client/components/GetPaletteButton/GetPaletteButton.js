import React from 'react';

const GetPaletteButton = () => {
    return(
       <div>
            <div className="text-center my-4">
                <button type="button" class="get-palette-btn btn btn-primary">Get your Palette</button>
            </div>
            <div className="d-flex justify-content-center align-items-center my-4">
                <div className="mx-5">
                    <button type="button" class="upload-btn btn btn-primary">Upload New Image</button>
                </div>
                <div className="mx-5">
                    <button type="button" class="download-btn btn btn-primary">Download Palette</button>
                </div>
            </div>
       </div>
    );
}

export default GetPaletteButton;
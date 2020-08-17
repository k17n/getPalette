import React from 'react';

const GetPaletteButton = () => {
    return(
       <div>
            <div id="getPaletteBtnContainer" className="d-flex flex-column flex-sm-row justify-content-center align-items-center my-4">
                <button type="button" className="get-palette-btn btn btn-primary mx-5 my-3">Get your Palette</button>
            </div>
            {/* <div id="actionBtnContainer" className="d-flex flex-column flex-sm-row justify-content-center align-items-center my-4">
                <button type="button" class="upload-btn btn btn-primary mx-5 my-3">Upload New Image</button>
                <button type="button" class="download-btn btn btn-primary mx-5 my-3">Download Palette</button>
            </div> */}
       </div>
    );
}

export default GetPaletteButton;
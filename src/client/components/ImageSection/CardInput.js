import React from 'react'

const CardInput = ({onInputChange, onButtonSubmit, imageURL}) => {
    return (
        <div>
            <span className="or">OR</span>
            <input 
                className="url" 
                type = "text" 
                placeholder="Paste the Image URL here" 
                onChange={onInputChange}           
            />
            <button 
                type="submit" 
                className="dummySubmit"
                onClick={onButtonSubmit}
                >
                Submit
            </button>
            <div>
                <img alt="" src={imageURL} />
            </div>
        </div>
    )
}

export default CardInput;

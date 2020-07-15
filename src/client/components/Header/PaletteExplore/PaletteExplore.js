import React from 'react'

function PaletteExplore() {
    
    const handleFeature = () => {
        alert('woh! I am too interested in this Upcoming feature');
    }

    return(
        <div>
            <button 
                type="button" 
                className="btn btn-link"
                onClick={handleFeature}
                >
                    Explore Palette
            </button>
        </div>
    );
}

export default PaletteExplore;
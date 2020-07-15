import React, { Component } from 'react';
import PaletteExplore from '../Header/PaletteExplore/PaletteExplore';
import Logo from '../Header/Logo/Logo';
import Tweet from '../Header/Tweet/Tweet';

class Header extends Component{
    render(){
        return(
            <div className="row">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <PaletteExplore />
                    <Logo />
                    <Tweet />
                </div>
            </div>
        );
    }
}

export default Header;
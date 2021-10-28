import React from "react";
import './NavBar.css';

function NavBar(props){
    const {backColorChange, textColorChange, changeTheDisplay } = props;
    return(

        <nav className="nav-bar-menu">
            <div className="color-input-btn">
                <input type="color" name="color" id="color" onChange={(event) => backColorChange(event)}/>
                <br />
                <label htmlFor="color">Change Background Color</label>
            </div>
            <div className="color-input-btn">
                <input type="color" name="color" id="color" onChange={(event) => textColorChange(event)}/>
                <br />
                <label htmlFor="color">Change Text Color</label>
            </div>
            <button type="button" onClick={() => changeTheDisplay('posts')} >Show Posts</button>
            <button type="button" onClick={() => changeTheDisplay('users')}>Show Users</button>
        </nav>

    )

}

export default NavBar;
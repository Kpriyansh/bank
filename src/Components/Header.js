import React from 'react';
import './Header.css'
import Typed from 'react-typed'

const Header = (props) => {

    return (
        <div id="header">
            <div className="home">
                <div className="main-info">
                    {<h1 style={{fontSize:'25px'}}>Hello {props.username},
                    </h1>
                    }
                    <h1 id="bank-h" style={{fontSize:'30px'}}><Typed strings={["Welcome to India Bank"]} typeSpeed={40} /></h1>
                   
                </div>
            </div>
        </div>
    )
}
export default Header;
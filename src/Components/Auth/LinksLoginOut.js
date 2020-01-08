import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class LinksLoginOut extends Component {
    render() {
        return (
            <div className="LinksOut">
               <ul>
                 <li><button className="btn btn-dark NowyK"><Link to="/signin">Zaloguj się!</Link></button></li>
                 <li><button className="btn btn-danger NowyK"><Link to="/signup">Zarejstruj</Link></button></li> 
               </ul> 
            </div>
        )
    }
}

export default LinksLoginOut

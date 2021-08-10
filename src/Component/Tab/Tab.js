import React from 'react';
import './Tab.css' 
import { Link } from 'react-router-dom';

export default function Tab(props) {
    return(
        <div>
        <nav id="menu">
            <ul id="menu-closed">
                {props.categories.map(category => (
                    <li key={category.id}>
                        <Link to={`/${category.name.toLowerCase()}`}>
                            <p>{category.name}</p>
                        </Link>
                    </li>
                ))}
                <li><a href="#menu-closed">&#215; Close menu</a></li>
                <li><a href="#menu">&#9776; Menu</a></li>
            </ul>
        </nav>

        </div>
    )
}
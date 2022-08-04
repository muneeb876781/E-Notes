import React, { useState } from 'react';
import './index.css';

function Card(props) {

    return (
        <>
            <div className="cards">
                <div className="card">
                    <img className="imgsrc" src={props.img_src} alt='my img' />
                    <div className="info">
                        <p className='org_info'>{props.org_name}</p>
                        <h3 className='ser_name'>{props.ser_name}</h3>
                        <a href={props.button} target='_blank'>
                            <button>WATCH</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
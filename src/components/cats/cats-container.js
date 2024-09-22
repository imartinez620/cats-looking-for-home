import React, { Component } from 'react';
import CatItem from './cat-item';

export default class CatsContainer extends Component {
    constructor() {
        super();
        console.log("Esto es una prueba");

    }

    render () {
        return (
            <div>
                Los gatos van aquí
                <CatItem />
            </div>
        );

    }
}
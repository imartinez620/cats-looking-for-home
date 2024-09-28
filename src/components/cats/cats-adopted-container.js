import React, { Component } from 'react';
import CatItem from './cat-item';

export default class CatsAdopted extends Component {
    constructor() {
        super();

    }

    render () {
        return (
            <div>
                Los gatos adoptados van aquí
                <CatItem />
            </div>
        );

    }
}
import React, { Component } from 'react';
import CatItem from './cat-item';

export default class MyCatsContainer extends Component {
    constructor() {
        super();

    }

    render () {
        return (
            <div>
                Los gatos mios van aquí
                <CatItem />
            </div>
        );

    }
}
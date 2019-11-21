import React, { Component } from 'react';
import LoadData from '../../data/home.json';
import HomeHeaderList from './HomeHeaderList';
import CategoriesType from './CategoriesType'


class HomeData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: LoadData
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.data.map((rowdata) =>
                    <React.Fragment>
                        <HomeHeaderList data={rowdata.Banners} />
                        <CategoriesType data={rowdata.Categories} />
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}

export default HomeData;
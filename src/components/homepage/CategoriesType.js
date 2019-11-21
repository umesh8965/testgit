import React, { Component } from 'react';
import CategoryList from './CategoryList';

class CategoriesType extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.state.data.map((rowdata) =>
                    <React.Fragment>
                        <CategoryList data={rowdata} />
                    </React.Fragment>
                )}
            </React.Fragment>
        )
    }
}

export default CategoriesType;
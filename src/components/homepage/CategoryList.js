import React, { Component } from 'react';


class CategoryList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }

    }

    render() {
        return (
                <section id="concerts" className="block background-block" alt={this.state.data.Id}>
                    <div className="container">
                        <div className="concert">
                            <div className="section-wrap">
                                <div className="sec-col">
                                    <h1 className="section-heading"><span>{this.state.data.Category}</span></h1>
                                </div>
                                <div className="sec-col">
                                    <a href={`/UAE/${this.state.data.Category}`} className="btn btn-outline">View All</a>
                                </div>
                            </div>
                            <div className="concert-wrap">
                                <div className="row">
                                    {this.state.data.Items.map((rowdata, i) =>
                                        <div className="nopad-r col-sm-4">
                                            <div className="concert-box">
                                                <p className="price">{rowdata.Currency} {rowdata.MinimumPrice}</p>
                                                <div className="grid-bg-wrap">
                                                    <a
                                                        href={`http://www.meraticket.com/${rowdata.DetailUrl}`}>
                                                        <div className="concert-img grid-bg">
                                                            <img src={rowdata.FeatureImage} alt={rowdata.AltDisplay} className="visible-xs" />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="details">
                                                    <div className="day-money-wrap ">
                                                        <p className="day-time">
                                                            <span className="date" content="2019-08-15T22:00">
                                                                <span className="day">{rowdata.DisplayStartDate.split(',')[0]}</span>
                                                                <span className="date">{rowdata.DisplayStartDate.split(' ')[1]}</span>
                                                                <span className="month">{rowdata.DisplayStartDate.split(' ')[2]}</span>
                                                                <span className="time">{rowdata.DisplayStartTime}</span>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="concert-details">
                                                        <a href={`http://www.meraticket.com/${rowdata.DetailUrl}`}
                                                            className="concert-name">{rowdata.Name}</a>
                                                        <p className="venue">{rowdata.VenueName}</p>
                                                        <a href={`http://www.meraticket.com/${rowdata.DetailUrl}`}
                                                            data-id="84" className="btn btn-primary"><i
                                                                className="flaticon-concert-ticket"></i>&nbsp;Book Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}

export default CategoryList;
import React from 'react';

const HomeHeader = (props) => {
        return(
            <div className="item">
                <a href={`https://www.meraticket.com/${props.DisplayDetailUrl}`}>
                    <img src={`${props.SideImage}`}></img>
                </a>
                <div className="banner-caption light">
                    <div className="container">
                        <div id="banner-slider" className="caption-wrap">
                            <div className="event-details light">
                                <h4>
                                    <a href="#" className="event-title">
                                        {props.Name}
                                        <span className="day" content="2019-08-15T22:00"><i className="flaticon-calendar"></i>&nbsp;{props.DisplayStartDate}</span>
                                        <span className="location"><i className="flaticon-map-marker"></i>&nbsp;{props.VenueName}</span>
                                    </a>
                                </h4>
                            </div>
                            <div className="book-now">
                                <a href={`https://www.meraticket.com/${props.DisplayDetailUrl}`} className="btn-primary btn">More Info&nbsp;<i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>                        
            </div>
        )
}

export default HomeHeader;
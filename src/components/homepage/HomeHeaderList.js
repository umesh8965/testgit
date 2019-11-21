import React, {Component} from 'react';
import HomeHeader from './HomeHeader';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    items: 1,
    nav: true,
    loop: true,
    autoplay: true
};

class HomeHeaderList extends Component{
    constructor(props){
        super(props)
        this.state = {             
           data: props.data
        }
    }
   
    render(){
        return(            
            <React.Fragment>                        
                <OwlCarousel className="owl-theme" {...options}>
                        {this.state.data.map((rowdata) => 
                            <HomeHeader key={rowdata.id} 
                            Name={rowdata.Name}
                            SideImage={rowdata.SideImage}
                            DisplayStartDate={rowdata.DisplayStartDate}
                            VenueName={rowdata.VenueName}
                            DisplayDetailUrl={rowdata.DisplayDetailUrl}  />   
                        )}
                </OwlCarousel>
            </React.Fragment>
         
        )
    }
}


export default HomeHeaderList;
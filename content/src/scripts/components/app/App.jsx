import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    constructor(props){
        console.log("ala constructor pagina");
        super(props);
    }

    componentDidMount(){
        document.addEventListener('click', () => {
            this.props.dispatch({
                type: 'ADD_COUNT'
            });
        });

        console.log("ala in pagina", this.props.opacity);
        // document.addEventListener('mouseup', () => {
        //     this.props.dispatch({
        //         type: 'CHANGE_OPACITY_RANGE'
        //     });
        // });
        // console.log("ala in pagina 2");
    }

    setShade(value){
    return(
        console.log("inta in setShadeee", value),
            document.getElementById("take_care_wrapper").style.opacity = value/100
    )
    };

    render(){
        this.setShade(this.props.opacity);
        return(
            <div>
                Count: {this.props.count}
                Opacity: {this.props.opacity}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        count: state.count,
        opacity: state.opacity
    };
};

export default connect(mapStateToProps)(App);
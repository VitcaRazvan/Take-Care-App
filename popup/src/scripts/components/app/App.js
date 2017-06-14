/**
 * Created by Vitca Razvan on 6/13/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    constructor(props){
        console.log("ala constructor popup");
        super(props);
    }

    componentDidMount(){
        var rangeInput= document.getElementById("opacity_range");
        rangeInput.addEventListener('mouseup', () => {

            var x = document.getElementById("opacity_range").value;
            document.getElementById("opacity_status").innerHTML = x;
            console.log("ala in popup", x);


            this.props.dispatch({
                type: 'CHANGE_OPACITY_RANGE',
                value: document.getElementById("opacity_range").value
            });

        });
        var yellowInput= document.getElementById("yellow_range");
        yellowInput.addEventListener('mouseup', () => {
            var x = document.getElementById("yellow_range").value;
            document.getElementById("yellow_status").innerHTML = x;

            this.props.dispatch({
                type: 'CHANGE_YELLOW_RANGE',
                value: document.getElementById("yellow_range").value
            });
        })


    }
    render(){
        return(
            <div>
                <input type="range" id="opacity_range" min="0" max="70" step="1"></input>
                <span id="opacity_status">Opacity:{this.props.opacityRange}</span>
                <br></br>

                <input type="range" id="yellow_range" min="0" max="70" step="1"></input>
                <span id="yellow_status">Opacity:{this.props.opacityRange}</span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        opacityRange: state.opacityRange
    };
};

export default connect(mapStateToProps)(App);
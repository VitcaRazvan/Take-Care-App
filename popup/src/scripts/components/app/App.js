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
        var opacityInput= document.getElementById("opacity_range");
        opacityInput.addEventListener('mouseup', () => {

            var opacityValue = document.getElementById("opacity_range").value;
            document.getElementById("opacity_status").innerHTML = "Opacity: " + opacityValue;
            console.log("ala in popup", opacityValue);


            this.props.dispatch({
                type: 'CHANGE_OPACITY_RANGE',
                value: document.getElementById("opacity_range").value
            });

        });
        var yellowInput= document.getElementById("yellow_range");
        yellowInput.addEventListener('mouseup', () => {
            var yellowValue = document.getElementById("yellow_range").value;
            document.getElementById("yellow_status").innerHTML = "Yellow:" + yellowValue;

            this.props.dispatch({
                type: 'CHANGE_YELLOW_RANGE',
                value: document.getElementById("yellow_range").value
            });
        });

        var rangeListener = document.getElementById("range_sliders");
        console.log("range listener ", rangeListener, " vs opacity range ", opacityInput);
        rangeListener.addEventListener('mouseup', this.handleClick.bind(this) );

    }

    handleClick(event){
        if (event.target && event.target.nodeName == "INPUT"){
            console.log("INTRA IN IFFF");
            this.disableRange();
        }
    }

    disableRange(){
        var opacityValue = document.getElementById("opacity_range").value;
        var yellowValue = document.getElementById("yellow_range").value;
        //console.log("intra in disableslider cu val:", opacityValue, yellowValue," si  slider cu ", slider);

        if(opacityValue == 0){
            document.getElementById("yellow_range").disabled = false;
        }else {
            document.getElementById("yellow_range").disabled = true;
        }
        if (yellowValue == 0){
            document.getElementById("opacity_range").disabled = false;
        }else {
            document.getElementById("opacity_range").disabled = true;

        }
        //   if ()  {
        //     document.getElementById("opacity_range").disabled = false;
        //     document.getElementById("yellow_range").disabled = false;
        // }
    }

    render(){
        return(
            <div id="range_sliders">
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
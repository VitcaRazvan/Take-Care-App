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
        var rangeInput= document.getElementById("myRange");
        rangeInput.addEventListener('mouseup', () => {
            this.props.dispatch({
                type: 'CHANGE_OPACITY_RANGE'
            });
        })

        console.log("ala in popup");
        // var x = document.getElementById("myRange").value;
        // document.getElementById("opacity_status").innerHTML = x;
    }
    render(){
        return(
            <div>
                <input type="range" id="myRange" min="0" max="90" step="1"></input>
                <span id="opacity_status">Opacity:{this.props.opacityRange}</span>
                <br></br>
                Clickkk Count: {this.props.count}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        statistics: getStatistics(
            state.count,
            state.opacityRange
        )
    };
};

export default connect(mapStateToProps)(App);
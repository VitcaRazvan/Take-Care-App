/**
 * Created by Vitca Razvan on 6/13/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Popup extends Component {
    constructor(props){
        console.log("ala constructor popup");
        super(props);
        this.state ={
            savedChanges: false
        }
        //this.setInitialShade();
    }

    componentDidMount(){

        document.addEventListener('click', () =>{

        });
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

    // setInitialShade(){
    //     this.props.dispatch({
    //         type: 'CHANGE_OPACITY_RANGE',
    //         value: this.props.opacityValue
    //     });
    // }
    handleClick(event){
        if (event.target && event.target.nodeName == "INPUT" && event.target.type == "range"){
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
    saveData(){
        var opacityValue = document.getElementById("opacity_range").value;
        chrome.storage.sync.set({'opacityValueChrome': opacityValue}, () =>{
            alert("Success! data: "+ document.getElementById("opacity_range").value + " saved")

        })
        this.setState({savedChanges: true});
    }
    getData(){
        return(this.props.opacityValue);
    }

    cancelSaving(){

    }
    render(){

        // var opacityValue = this.state.opacityRange;
        // console.log("IN RENER VAL LA OPACITY: " ,opacityValue);
        //TODO: fac funtie care face disalbe chiar la inceput daca amandoua slideurile nu is pe 0

        return(
            <div id="popup_wrapper">
                <div id="range_sliders">
                    <input type="range" id="opacity_range" min="0" max="70" step="1" defaultValue={this.props.opacityValue}></input>
                    <p id="opacity_status">Opacity:{this.props.opacityRange}</p>
                    <br></br>

                    <input type="range" id="yellow_range" min="0" max="70" step="1" defaultValue="0"></input>
                    <p id="yellow_status">Yellow:{this.props.opacityRange}</p>
                </div>
                <div id="popup_buttons">
                    <input type="button" id="save_data" value="Save Data" onClick={this.saveData} style={{marginRight: 10+'px'}}/>

                    <input type="button" id="get_data" value="Cancel" onClick={this.cancelSaving}/>
                </div>
            </div>
        );
    }

    component(){
        if(this.state.savedChanges == false){
            alert("Save changes in order to keep them!")
            this.props.dispatch({
                type: 'CHANGE_OPACITY_RANGE',
                value: this.props.opacityValue
            });
        }
    }
}

const mapStateToProps = (state) => {
    return {
        opacityRange: state.opacityRange
    };
};

export default connect(mapStateToProps)(Popup);
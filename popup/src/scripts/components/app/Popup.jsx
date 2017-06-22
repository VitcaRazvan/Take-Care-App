/**
 * Created by Vitca Razvan on 6/13/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../../../../styles/popup.css'
class Popup extends Component {
    constructor(props){
        console.log("ala constructor popup");
        super(props);
    }

    componentDidMount(){

        // document.addEventListener('click', () =>{
        //
        // });
        var blackInput= document.getElementById("black_range");
        blackInput.addEventListener('mouseup', () => {

            var blackValue = document.getElementById("black_range").value;
            document.getElementById("black_status").innerHTML = blackValue;
            console.log("ala in popup", blackValue);


            this.props.dispatch({
                type: 'CHANGE_BLACK_RANGE',
                value: document.getElementById("black_range").value,
                color: 'black',
                toggledOpacity: true
            });

        });
        var yellowInput= document.getElementById("yellow_range");
        yellowInput.addEventListener('mouseup', () => {
            var yellowValue = document.getElementById("yellow_range").value;
            document.getElementById("yellow_status").innerHTML = yellowValue;

            this.props.dispatch({
                type: 'CHANGE_YELLOW_RANGE',
                value: document.getElementById("yellow_range").value,
                color: 'yellow'
            });
        });

        var rangeListener = document.getElementById("range_sliders");
        console.log("range listener ", rangeListener, " vs black range ", blackInput);
        rangeListener.addEventListener('mouseup', this.handleClick.bind(this) );

        this.disableRange(this.props.blackValue, this.props.yellowValue);
    }

    // setInitialShade(){
    //     this.props.dispatch({
    //         type: 'CHANGE_OPACITY_RANGE',
    //         value: this.props.opacityValue
    //     });
    // }
    handleClick(event){
        var blackValue = document.getElementById("black_range").value;
        var yellowValue = document.getElementById("yellow_range").value;
        if (event.target && event.target.nodeName == "INPUT" && event.target.type == "range"){
            console.log("INTRA IN IFFF");
            this.disableRange(blackValue, yellowValue);
        }
    }

    disableRange(blackValue, yellowValue){

        //console.log("intra in disableslider cu val:", blackValue, yellowValue," si  slider cu ", slider);

        if(blackValue == 0){
            document.getElementById("yellow_range").disabled = false;
        }else {
            document.getElementById("yellow_range").disabled = true;
        }
        if (yellowValue == 0){
            document.getElementById("black_range").disabled = false;
        }else {
            document.getElementById("black_range").disabled = true;

        }

    }
    saveData(){
        var blackValue = document.getElementById("black_range").value;
        var yellowValue = document.getElementById("yellow_range").value;

        chrome.storage.sync.set({'blackValueChrome': blackValue, 'yellowValueChrome': yellowValue}, () =>{
            alert("Success! data: "+ blackValue + " and "+ yellowValue + " saved")

        });

        document.getElementById("cancel").disabled = true;
        //this.setState({savedChanges: true});
    }
    getData(){
        return(this.props.blackValue);
    }

    Cancel(){
        var blackValue = this.props.blackValue;
        var yellowValue = this.props.yellowValue;

        // chrome.storage.sync.set({'blackValueChrome': blackValue, 'yellowValueChrome': yellowValue}, () =>{
        //     alert("Success! data: "+ blackValue + " and "+ yellowValue + " saved")
        //
        // })
        console.log("BLACK " + blackValue + " YELLOW "+yellowValue);
        this.props.dispatch({
            type: 'CHANGE_BLACK_RANGE',
            value: blackValue,
            color: 'black',
            toggledOpacity: true
        });

        this.props.dispatch({
            type: 'CHANGE_YELLOW_RANGE',
            value: yellowValue,
            color: 'yellow'
        });

        var daddy = window.self;
        daddy.opener = window.self;
        daddy.close();
    }
    render(){

        return(
            <div id="popup_wrapper">
                <div id="range_sliders">
                    <div id="black_container">
                        <input type="range" id="black_range" min="0" max="70" step="1" defaultValue={this.props.blackValue}></input>
                        <p id="black_status">{this.props.blackValue}</p>
                    </div>
                    <br></br>
                    <div id="yellow_container">
                        <input type="range" id="yellow_range" min="0" max="30" step="1" defaultValue={this.props.yellowValue}></input>
                        <p id="yellow_status">{this.props.yellowValue}</p>
                    </div>
                </div>
                <div id="popup_buttons">
                    <input type="button" id="save_data" value="Save Data" onClick={this.saveData} style={{marginRight: 5+'px'}}/>

                    <input type="button" id="cancel" value="Cancel" onClick={this.Cancel.bind(this)}/>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        blackRange: state.blackRange,
        yellowRange: state.yellowRange
    };
};

export default connect(mapStateToProps)(Popup);
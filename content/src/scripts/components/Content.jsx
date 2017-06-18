import React, {Component} from 'react';
import {connect} from 'react-redux';

class Content extends Component {
    constructor(props){
        console.log("ala constructor pagina");
        super(props);
        this.state = {
            isFirstRun : true
        }

    }

    componentDidMount(){
        document.addEventListener('click', () => {
            this.props.dispatch({
                type: 'ADD_COUNT'
            });
        });

        console.log("ala in pagina", this.props.opacity);

        //this.setShade();
    }

    setShade(){
        console.log("inta in setShadeee in componenta cu opacity: "+this.props.opacity.value + " si yellow " +this.props.yellow.value);
        console.log("inta in setShadeee in componenta cu opacity: "+this.props.opacityValue + " si yellow " +this.props.yellowValue + " CHROME");

        // if(this.props.opacity == 0){
        //     console.log("inta 1 i if");
        //     this.setState({isFirstRun : false});
        //     return(document.getElementById("take_care_wrapper").style.opacity = this.props.opacityValueChrome/100);
        //
        // }else{
        if (this.props.yellow.value == undefined && this.props.opacity.value == undefined ){
            if(this.props.yellowValue != 0){
                console.log("11");
                document.getElementById("take_care_wrapper").style.backgroundColor = "yellow";
                document.getElementById("take_care_wrapper").style.opacity = this.props.yellowValue/100;
            }else{
                console.log("22");
                document.getElementById("take_care_wrapper").style.backgroundColor = "black";
                document.getElementById("take_care_wrapper").style.opacity = this.props.opacityValue/100;
            }
        }else if (this.props.yellow.value == undefined || this.props.yellow.value == 0){
            console.log("33");
            document.getElementById("take_care_wrapper").style.backgroundColor = this.props.opacity.color;
            document.getElementById("take_care_wrapper").style.opacity = this.props.opacity.value/100;
        }else {
            console.log("44");
            document.getElementById("take_care_wrapper").style.backgroundColor = this.props.yellow.color;
            document.getElementById("take_care_wrapper").style.opacity = this.props.yellow.value/100;
        }



    };


    render(){

        console.log("RENDER IN COMPONENTA");
        this.setShade();
        return(
            <div>
                {/*Count: {this.props.count}*/}
                Opacity: {this.props.opacity.value}
                Yellow: {this.props.yellow.value}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        count: state.count,
        opacity: state.opacity,
        yellow: state.yellow
    };
};

export default connect(mapStateToProps)(Content);
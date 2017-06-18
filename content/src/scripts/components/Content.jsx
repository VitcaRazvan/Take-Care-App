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
        console.log("inta in setShadeee in componenta");
        // if(this.props.opacity == 0){
        //     console.log("inta 1 i if");
        //     this.setState({isFirstRun : false});
        //     return(document.getElementById("take_care_wrapper").style.opacity = this.props.opacityValueChrome/100);
        //
        // }else{
            console.log("inta 2 i if");
            return(document.getElementById("take_care_wrapper").style.opacity = this.props.opacity/100);
        //}

    };


    render(){
        console.log("RENDER IN COMPONENTA");
        this.setShade();
        return(
            <div>
                {/*Count: {this.props.count}*/}
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

export default connect(mapStateToProps)(Content);
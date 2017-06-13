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
        console.log("ala in pagina");
    }
    render(){
        return(
            <div>
                Count: {this.props.count}
                Opacity: {this.props.opacityRange}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
        opacityRange: state.opacityRange
    };
};

export default connect(mapStateToProps)(App);
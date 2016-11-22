var React = require('react');
var ReactDOM = require('react-dom');

class Gallery extends React.Component {
    constructor(){
        super();
        this.state = {
            pictures : [
                "http://lorempixel.com/200/200/sports",
                "http://lorempixel.com/200/200/city",
                "http://lorempixel.com/200/200/people",
                "http://lorempixel.com/200/200/transport",
                "http://lorempixel.com/200/200/food"
                ]
        }
    }
    PictureFrame(i){
        return (
            <PictureFrame value={this.state.pictures[i]}/>
            );
    
    }
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">{this.PictureFrame(0)}
                </div>
                <div className="col-md-3">{this.PictureFrame(1)}
                </div>
                <div className="col-md-3">{this.PictureFrame(2)}
                </div>
                <div className="col-md-3">{this.PictureFrame(3)}
                </div>
                <div className="col-md-3">{this.PictureFrame(4)}
                </div>
            </div>
        </div>
            );
        
    }
}
class PictureFrame extends React.Component {
    render(){
        return(
            <div className="well">
            <img src={this.props.value} />
            </div>
            );
    }
    
}

ReactDOM.render(<Gallery />, document.getElementById('app'));
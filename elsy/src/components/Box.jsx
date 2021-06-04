
import React from "react";


class Box extends React.Component {
    render() {

        let type = 1;

        if (this.props.icon === "directions_walk") {
            type = 1000;

        }

        if (this.props.unit === "L") {
            return (

                <div className="box col-sm-3 col-6 " >

                    <span className="material-icons" style={{ color: this.props.color, fontSize: 100 }} >{this.props.icon}</span>
                    <p>{this.props.value}
                        {this.props.unit}</p>

                </div >
            )

        }
        else {
            return (

                <div className="box col-sm-3 col-6 " >

                    <span className="material-icons" style={{ color: this.props.color, fontSize: 100 }} >{this.props.icon}</span>
                    <p>{this.props.value}
                        {this.props.unit}</p>

                    <div>
                        <input type="range" id="volume" name="volume" min={this.props.min} max={this.props.max} onChange={this.props.onChange} step={type}></input>

                    </div>

                </div >
            )

        }





    }
}



export default Box

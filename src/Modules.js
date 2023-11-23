import React  from "react";
class Modules extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <ul>
                    <li>{this.props.nom}</li>
                    <li>{this.props.coefficient}</li>
                    <li>{this.props.category}</li>
                </ul>
            </div>

        )
    }
}
export default Modules
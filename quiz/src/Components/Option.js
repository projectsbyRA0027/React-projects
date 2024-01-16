import { Component } from "react";

class Options extends Component{
    render(){
        const {options,selectedOption,onOptionChange} = this.props;

        return(
            <div className="options">
                {options.map((Option,index)=>(
                    <div key={index} className="form-check">
                        <input type="radio"
                               name="option"
                               value={Option}
                               checked={selectedOption === Option}
                               onChange={onOptionChange}
                               className="form-check-input"
                        />
                     <label className="form-check-input">{Option}</label>
                    </div>
                ))}

            </div>
        );
    }
}

export default Options;
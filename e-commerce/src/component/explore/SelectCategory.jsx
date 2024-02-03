import React,{useState} from "react";
import "./SelectCategory.css";

function SelectCategory({ checkBoxState,handleCheckBox}){
    const [isOpen,setIsopen] = useState(false);

    function handleCategoryClick(){
        setIsopen(!isOpen);
    }

    return(
        <div className="select-category_conatiner">
            <h4 onClick={handleCategoryClick}>Category</h4>
            <div className={isOpen ? "open" : ""}>
                <span className="category-option">
                    <input type="checkbox"
                    id="category-men"
                    name="men"
                    checked={checkBoxState.men}
                    onChange={handleCheckBox} 
                    />
                    <label htmlFor="category-men">Men</label>
                </span>
                <span className="category-option">
                    <input type="checkbox"
                    id="category-women"
                    name="women"
                    checked={checkBoxState.women}
                    onChange={handleCheckBox} 
                    />
                    <label htmlFor="category-women">Women</label>
                </span>
            </div>
        </div>
    );
}

export default SelectCategory;
import { useState } from "react";
import ReactSlider from "react-slider";
    
const Slider = () => {
    const [currentValue, setCurentValue] = useState(0);
  return (
    <ReactSlider
        className="customSlider"
        trackClassName="customSlider-track"
        thumbClassName="customSlider-thumb"
        marks={20}
        min={0}
        max={100}
        markClassName="customSlider-mark"
        defaultValue={0}
        value={currentValue}
        onChange={(value) => setCurentValue(value)}
        
        renderMark={(props) => {
            if(props.key < currentValue) {
                props.className = "customSlider-mark customSlider-mark-before";
            }
            else if (props.key === currentValue) {
                props.className = "customSlider-mark customSlider-mark-active";
            }
            return <span {...props} />
        }}
     />
  );
};

export default Slider;
import { useState } from "react";
import "../css/switch.css";

const SwitchButton = (props) => {
    const [selected, setSelected] = useState(false);

    const onSelect = () => {
        setSelected(!selected);
    }

    const cName = selected ? "wrapper selected" : "wrapper";

    return (
        <div className={cName} onClick={onSelect}>
            <p>Switch button</p>
        </div>
    )
}

export default SwitchButton;
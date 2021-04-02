import React, { useEffect, useState } from 'react';

// const CheckedIcon = () => <>🌜</>;
// const UncheckedIcon = () => <>🌞</>;

const ToggleButton = (props) => {
    const { defaultChecked, onChange, disabled, className } = props;
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (defaultChecked) {
            setToggle(defaultChecked);
        }
    }, [defaultChecked]);
    
    // const getIcon = (type) => {
    //     const { icons } = props;
    //     if ( ! icons ) {
    //         return null;
    //     }

    //     return icons[type] === undefined ?
    //         ToggleButton.defaultProps.icons[type] :
    //         icons[type];
    // }

    const triggerToggle = () => {
        if ( disabled ) {
            return;
        }
    
        setToggle(!toggle);
    
        if ( typeof onChange === 'function' ) {
            onChange(!toggle);
        }
    }
    // const toggleClasses = classNames('wrg-toggle', {
    //     'wrg-toggle--checked': toggle,
    //     'wrg-toggle--disabled': disabled
    // }, className);

    return(
        <div onChange={triggerToggle} className={`wrg-toggle ${toggle ? 'wrg-toggle--checked' : ''}`}>
            <div className="wrg-toggle">
                <div className="wrg-toggle-container">
                    <div className="wrg-toggle-check">
                        <span>🌜</span>
                    </div>
                    <div className="wrg-toggle-uncheck">
                        <span>🌞</span>
                    </div>
                </div>
                <div className="wrg-toggle-circle"></div>
                <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
            </div>
        </div>
    )
}



export default ToggleButton;
import React from 'react';
import Option from './Option';

const Options = (props) => (
        <div>
            <button onClick={props.handleRemoveAll} >Remove all</button>
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleRemove={props.handleRemove}
                    />
                ))
            }
        </div>
    )

export default Options;
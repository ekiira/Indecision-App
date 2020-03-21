import React from 'react';
import Option from './Option';

const Options = (props) => (
        <div>
            <div className="widget-header">
                <h3 
                    className="widget-header__title"
                >
                    Your Options
                </h3>
                <button 
                    className="button button--link"
                    onClick={props.handleRemoveAll} 
                >
                    Remove all
                </button>
            </div>
            { !props.hasOptions && <p className="widget__message">Please add options to get started!</p> }
            {
                props.options.map((option, index) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        count={index + 1}
                        handleRemove={props.handleRemove}
                    />
                ))
            }
        </div>
    )

export default Options;
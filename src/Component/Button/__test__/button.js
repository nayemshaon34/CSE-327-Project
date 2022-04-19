import React from 'react';
import reactDom from "react-dom";
import './button.css';
function Button({ label }) {
    return <div data-testid="button" className="button-style">{label}</div>
}

export default Button;
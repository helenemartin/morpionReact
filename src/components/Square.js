import React from 'react';

const style = {
    background: 'beige',
    border: '2px solid coral',
    fontsize: '30px',
    cursor: 'pointer',
    outline: 'none',
}

const Square= ({value, onClick}) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
)

export default Square;
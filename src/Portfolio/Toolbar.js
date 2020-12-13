import React from 'react'

function Toolbar(props) {
    const {filter, selected} = props;

    const OnClickItem = () => {
        props.onChangeFilter(props.filter);
    }

    return (
            <input className={filter === selected ? 'toolitemselect' : 'toolitem'} type='button' value={filter} onClick={OnClickItem}/>
    )
}


export default Toolbar;
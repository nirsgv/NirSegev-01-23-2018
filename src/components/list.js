import React from 'react';
import PropTypes from 'prop-types';


function List({baseClassName, children, addClass, ...rest}) {
    const childrenArr = [].concat(children);
    return (
        <nav className={`${addClass} ${baseClassName}__wrap`}>
            <ul className={`${baseClassName}__list`}>
                {Array.isArray(childrenArr) && childrenArr.map((item, index) => item ? <li className={`${baseClassName}__item`} key={index} {...rest}>{item}</li> : null)}
            </ul>
        </nav>
    )
}

List.defaultProps = {
    baseClassName: 'list',
};

List.propTypes = {
    baseClassName: PropTypes.string,
    children: PropTypes.node,
};


export default List;
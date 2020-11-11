import React from 'react';
import PropTypes from 'prop-types';

import { HyperLink, Span } from './Link.elements';

const Link = ({active, children, onClick}) => {

    if (active) {
        return <Span>{children}</Span>;
    }

    return (
        <HyperLink 
            href="/"
            onClick={e => {
                e.preventDefault();
                onClick();
        }}>
            {children}
        </HyperLink>
    )
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Link;

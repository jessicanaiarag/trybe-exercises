import React from 'react';


class Header extends React.Component {

    render() {
        const { title } = this.props;
        const { subtitle } = this.props;
        return (
            <header>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </header>
        )
    }
}

export default Header;
import React from 'react';
import '../Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="fixed-header">
                <div class="container">NMS - Monitoring</div>
            </div>
        )
    }
}

export default Header;
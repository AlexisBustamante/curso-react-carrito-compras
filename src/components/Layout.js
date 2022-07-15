import { Component } from 'react';

const syltes = {
    layout: {
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        width: '100%'
    }
}

class Layout extends Component {
    render() {
        return (
            <div style={syltes.layout}>
                <div style={syltes.container}>
                    {this.props.children}
                </div>

            </div>
        )
    }
}
export default Layout
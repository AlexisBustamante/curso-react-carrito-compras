import { Component } from "react";

const styles = {
    bubbleAlert: {
        backgroundColor: '#e9725A',
        color: '#fff',
        borderRadius: '15px',
        padding: '2px 10px',
        fontSize: '0.9rem',
        width: '20px',

    }
}

class BubbleAlert extends Component {

    render() {
        return (
            <span style={styles.bubbleAlert}>5</span>
        )
    }
}

export default BubbleAlert
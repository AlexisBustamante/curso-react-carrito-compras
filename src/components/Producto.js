import { Component } from "react";
import Button from './Button'
const styles = {
    producto: {
        border: 'solid 2px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '30%',
        padding: '10px 15px'
    },
    imagen: {
        width: '100%'
    }
}

class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props
        return (
            <div style={styles.producto}>
                <img style={styles.imagen} alt={producto.name} src={producto.img}
                />
                <h5>{producto.name}</h5>
                <p>${producto.price}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Lo quiero!
                </Button>
            </div>
        )
    }
}
export default Producto;
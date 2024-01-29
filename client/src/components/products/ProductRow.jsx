import React from 'react'

export default function ProductRow({ product }) {

    const style = product ? undefined : { color: 'red' }

    // Condition pour afficher le lien vers apple.com si le nom du produit est "Apple"
    const link = product && product.name.toLowerCase() === 'apple' ? (
        <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
            {product.name}
        </a>
    ) : (
        product.name
    );

    return (
        <tr>
            {/* <td style={style} >{product.name}</td> */}
            <td style={style} >{link}</td>
            <td>{product.price}</td>
        </tr>
    )
}

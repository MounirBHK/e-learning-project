import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'
import './ProductTable.scss'

const formatRows = (products) => {
    const rows = []
    let lastCategory = null
    for (const product of products) {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    key={product.category}
                    name={product.category}
                />
            )
        }
        lastCategory = product.category
        rows.push(
            <ProductRow
                product={product}
                key={product.name}
            />
        )
    }
    return rows
}

export default function ProductTable({ products }) {

    let formattedRows = formatRows(products);

    return (
        <table className='table'>
            <thead >
                <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                </tr>
            </thead>
            <tbody >
                {formattedRows}
            </tbody>

        </table>
    )
}

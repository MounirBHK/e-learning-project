import React from 'react'
import Input from '../forms/Input'
import Checkbox from '../forms/Checkbox'
import './SearchBar.scss'


export default function SearchBar({ search, setSearch, showStockedOnly, setShowStockedOnly }) {

    return (
        <div className='searchBar-container'>
            <Input
                placeholder='Effectuez une recherche...'
                value={search}
                onChange={setSearch}
            />
            <Checkbox
                id='stocked'
                label="N'afficher que les produits en stock..."
                checked={showStockedOnly}
                onChange={setShowStockedOnly}
            />
        </div>
    )
}
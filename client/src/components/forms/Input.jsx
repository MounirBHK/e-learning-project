import React from 'react'

export default function Input({ placeholder, value, onChange }) {

    return (
        <div>
            <label htmlFor="input">Recherche </label>
            <input
                id="input"
                type="text"
                className='form-control'
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}


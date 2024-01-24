import React from 'react'

export default function Checkbox({ checked, onChange, label }) {

    return (
        <div>
            <input
                type="checkbox"
                id='inputCheck'
                name='inputCheck'
                className='form-check-input'
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />

            <label
                className='form-check-label'
                htmlFor='inputCheck'
            >
                {label}
            </label>
        </div>
    )
}

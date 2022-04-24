import React from 'react'

export const CardsList = ({cardNumber}) => {
    console.log(cardNumber)
    return (
        <div className='app-container'>
            <h2 className='header'>CARDS LIST</h2>
            <table >
                <thead>
                    <tr>
                        <th>CARD NUMBER</th>
                        <th>CARDHOLDER NAME</th>
                        <th>VALID THRU</th>
                        <th>CCV</th>
                        <th>VENDOR</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                    <td>CARD NUMBER</td>
                    <td>CARD NUMBER</td>
                    <td>CARD NUMBER</td>
                    <td>CARD NUMBER</td>
                    <td>CARD NUMBER</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

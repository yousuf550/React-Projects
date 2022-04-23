import React from 'react'
import { useState } from 'react';

export const AddCard = () => {
    const [Cards, setCards] = useState([{}])
    const [addFormData, setAddFormData] = useState({
        cardNumber: "",
        cardName: "",
        valid: "",
        ccv: "",
        vendor: ""
    })

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
     
    };
  
    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newCard = {
            cardNumber: addFormData.cardNumber,
            cardName: addFormData.cardName,
            valid: addFormData.valid,
            ccv: addFormData.ccv,
            vendor: addFormData.vendor,
        };

        const newCards = [...Cards,newCard];
        setCards(newCards);
    };
    return (
        <>
            <div className="container">
                <form className='card-form' onSubmit={handleAddFormSubmit} >
                    <div className="card-group">
                        <label htmlFor="cardnumber">CARD NUMBER</label>
                        <input placeholder='0000 0000 0000 0000' type="text" id="cardnumber" className="card-control" name="cardNumber" onChange={handleAddFormChange} />
                    </div>
                    <div className="card-group">
                        <label htmlFor="holdername">CARDHOLDER NAME</label>
                        <input placeholder='FIRSTNAME LASTNAME' type="text" id="holdername" className="card-control" name="cardName" onChange={handleAddFormChange} />
                    </div>
                    <div className="card-group">
                        <label htmlFor="validthru">VALID THRU</label>
                        <input placeholder='01/25' type="text" id="validthru" className="card-control" name="valid" onChange={handleAddFormChange} />
                    </div>
                    <div className="card-group">
                        <label htmlFor="validthru">CCV</label>
                        <input placeholder='123' type="text" id="validthru" className="card-control" name="ccv" onChange={handleAddFormChange} />
                    </div>
                    <div className="card-group">
                        <label htmlFor="vendor">VENDOR</label>
                        <select id="vendor" name="vendor" onChange={handleAddFormChange} >
                            <option value="" disabled selected>Select Vendor</option>
                            <option value="BITCOIN INC">BITCOIN INC</option>
                            <option value="NINJA BANK">NINJA BANK</option>
                            <option value="BLOCK CHAIN INC">BLOCK CHAIN INC</option>
                            <option value="EVIL CORP">EVIL CORP</option>
                        </select>
                    </div>
                    <div className="card-group">
                        <button type='submit' className="add-card-btn">ADD A NEW CARD</button>
                    </div>
                </form>
            </div>


            {/* Cards List */}
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
                        {Cards.map((data, ind) => (
                                <tr key={ind}>
                                    <td>{data.cardNumber}</td>
                                    <td>{data.cardName}</td>
                                    <td>{data.valid}</td>
                                    <td>{data.ccv}</td>
                                    <td>{data.vendor}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </>



    )
}

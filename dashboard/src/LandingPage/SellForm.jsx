import React from 'react';
import { useState } from 'react';
import axios from 'axios'

function SellForm({ setSellAction,stock }) {
    const [quntity, setQunatity] = useState(0)
    async function handleSubmit(event) {
        event.preventDefault();
        console.log(quntity)
        let response = await axios.post("http://localhost:8080/watchlist/Sell",{stock,quntity}).catch((err) => { console.log(err) });
        //console.log(response)
        if (response.data.success) {
            setQunatity(0)
            setSellAction(false)
            alert("successful")
        } else {
            alert(response.data.message);
        }
    }
    return (
        <>
            <div className="box text-end mt-1">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="quantity" >Qnt</label>
                    <input className='mx-1' type="number" value={quntity} onChange={(event) => setQunatity(event.target.value)} style={{ width: "15%", borderRadius: "5%" }} />
                    <button type="submit" style={{ border: "none", backgroundColor: "blue", borderRadius: "50%" }}>ok</button>
                </form>
            </div>

        </>
    );
}

export default SellForm;
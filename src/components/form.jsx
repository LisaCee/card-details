// import '../styles/style.css';
import '../styles/form.css';

import {useState} from "react";

export function CardForm() {
	const [cardData, setCardData] = useState( {
		'name'      : '',
		'cardNumber': '',
		'expMonth'  : '',
		'expYear'   : '',
		'cvc'       : ''
	} );

	function handleUpdate( e ) {
		setCardData( {
			...cardData,
			[e.target.name]: e.target.value
		} )
	}

	function handleSubmit( e ) {
		console.log( cardData );
		e.preventDefault();
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					Cardholder Name
					<input type="text" placeholder="e.g. Jane Appleseed" name="name" value={cardData.name} onChange={handleUpdate}></input>
				</label>
			</div>
			<div>
				<label>
					Card Number
					<input type="number" placeholder="e.g. 1234 5678 9123 0000" name="cardNumber" value={cardData.cardNumber} onChange={handleUpdate}></input>
				</label>
			</div>
			<div className="fields-small">
				<fieldset id="expDate">
					<legend>
						Exp. Date (mm/yy)
					</legend>
					<label>Month
						<input type="number" placeholder="MM" name="expMonth" value={cardData.expMonth} onChange={handleUpdate}></input>
					</label>
					<label>Year
						<input type="number" placeholder="YY" name="expYear" value={cardData.expYear} onChange={handleUpdate}></input>
					</label>
				</fieldset>
				<label>
					CVC
					<input type="number" placeholder="e.g. 123" name="cvc" value={cardData.cvc} onChange={handleUpdate}></input>
				</label>
			</div>

			<button type="submit">Confirm</button>

		</form>
	)
}

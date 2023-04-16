// import '../styles/style.css';
import '../styles/form.css';

export function CardForm( { cardData, onChange, onSubmit } ) {

	return (
		<form onSubmit={onSubmit}>
			<div>
				<label>
					Cardholder Name
					<input type="text" placeholder="e.g. Jane Appleseed" name="name" value={cardData.name} onChange={onChange} required/>
				</label>
			</div>
			<div>
				<label>
					Card Number
					<input type="text" placeholder="e.g. 1234 5678 9123 0000" name="cardNumber" value={cardData.cardNumber} onChange={onChange} required/>
				</label>
			</div>
			<div className="fields-small">
				<fieldset id="expDate">
					<legend>
						{'Exp. Date (mm/yy)'.toUpperCase()}
					</legend>
					<label>Month
						<input type="number" placeholder="MM" name="expMonth" min="01" max="12" value={cardData.expMonth} onChange={onChange} required/>
					</label>
					<label>Year
						<input type="number" placeholder="YY" name="expYear" min="2023" value={cardData.expYear} onChange={onChange} required/>
					</label>
				</fieldset>
				<label>
					CVC
					<input type="number" placeholder="e.g. 123" name="cvc" value={cardData.cvc} onChange={onChange} required/>
				</label>
			</div>

			<button type="submit">Confirm</button>

		</form>
	)
}

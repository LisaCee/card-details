// import '../styles/style.css';
import '../styles/form.css';

export function CardForm( { cardData, onChange, onSubmit } ) {

	return (
		<form onSubmit={onSubmit}>
			<div>
				<label>
					Cardholder Name
					<input type="text" placeholder="e.g. Jane Appleseed" name="name" value={cardData.name} onChange={onChange}></input>
				</label>
			</div>
			<div>
				<label>
					Card Number
					<input type="number" placeholder="e.g. 1234 5678 9123 0000" name="cardNumber" value={cardData.cardNumber} onChange={onChange}></input>
				</label>
			</div>
			<div className="fields-small">
				<fieldset id="expDate">
					<legend>
						Exp. Date (mm/yy)
					</legend>
					<label>Month
						<input type="number" placeholder="MM" name="expMonth" value={cardData.expMonth} onChange={onChange}></input>
					</label>
					<label>Year
						<input type="number" placeholder="YY" name="expYear" value={cardData.expYear} onChange={onChange}></input>
					</label>
				</fieldset>
				<label>
					CVC
					<input type="number" placeholder="e.g. 123" name="cvc" value={cardData.cvc} onChange={onChange}></input>
				</label>
			</div>

			<button type="submit">Confirm</button>

		</form>
	)
}

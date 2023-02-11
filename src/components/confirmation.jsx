export function Confirmation( { onClick } ) {

	return (
		<div>
			<h2>Thank you!</h2>
			<p>We've added your card details</p>
			<button onClick={onClick}>Continue</button>
		</div>
	)
}

// on continue, go back to form and reset card input

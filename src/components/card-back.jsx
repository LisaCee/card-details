export function CardBack( { cardData } ) {
	return (
		<div className="cardBack">
			<div className="cvc">{cardData.cvc}</div>
		</div>
	)
}

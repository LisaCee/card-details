export function CardBack( { cardData } ) {
	return (
		<div className="cardBack">
			<div className="cvc">{cardData.cvc ? cardData.cvc : cardData.placeholders.cvc}</div>
		</div>
	)
}

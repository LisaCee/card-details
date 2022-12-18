import '../styles/cardFront.css';

export function CardFront( { cardData } ) {
	return (
		<div className="cardFront">
			<div className="cardLogo"></div>
			<div className="cardNumber">{cardData.cardNumber}</div>
			<div className="cardHolder">{cardData.name}</div>
			<div className="expiration">{cardData.expMonth}/{cardData.expYear}</div>
		</div>
	)
}

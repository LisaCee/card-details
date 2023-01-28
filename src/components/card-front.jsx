import '../styles/card.css';

export function CardFront( { cardData } ) {
	return (
		<div className="cardFront">
			<div className="cardLogo"></div>
			<div className="cardNumber">{cardData.cardNumber}</div>
			<div className="row">
				<div className="cardHolder">{cardData.name !== '' ? cardData.name : cardData.placeholder}</div>
				<div className="expiration">{cardData.expMonth}/{cardData.expYear}</div>
			</div>
		</div>
	)
}

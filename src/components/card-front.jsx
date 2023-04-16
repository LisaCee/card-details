import '../styles/card.css';

export function CardFront( { cardData } ) {
	return (
		<div className="cardFront">
			<div className="cardLogo"></div>
			<div className="cardNumber">{cardData.cardNumber ? cardData.cardNumber : cardData.placeholders.cardNumber}</div>
			<div className="row">
				<div className="cardHolder">{cardData.name ? cardData.name : cardData.placeholders.name}</div>
				<div className="expiration">{cardData.expMonth ? cardData.expMonth : cardData.placeholders.expMonth}/{cardData.expYear ? cardData.expYear : cardData.placeholders.expYear}</div>
			</div>
		</div>
	)
}

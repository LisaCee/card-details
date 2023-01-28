import {CardFront} from "./card-front";
import {CardBack} from './card-back'

export function Card( { cardData } ) {
	return (
		<>
			<div className="card">
				<CardFront cardData={cardData}/>
				<CardBack cardData={cardData}/>
			</div>
		</>
	)
}

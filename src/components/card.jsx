import {CardFront} from "./card-front";
import {CardBack} from './card-back'

export function Card( { cardData } ) {
	return (
		<>
			<CardFront cardData={cardData}/>
			<CardBack/>
		</>
	)
}

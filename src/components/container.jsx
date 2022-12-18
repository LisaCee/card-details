import {CardForm} from "./form";
import {Card} from './card';
import {useState} from "react";

import '../styles/container.css';

export function Container() {
	const [cardData, setCardData] = useState( {
		'name'      : '',
		'cardNumber': '',
		'expMonth'  : '',
		'expYear'   : '',
		'cvc'       : ''
	} );
	console.log( cardData );

	function handleUpdate( e ) {
		setCardData( {
			...cardData,
			[e.target.name]: e.target.value
		} )
	}

	function handleSubmit( e ) {
		console.log( cardData );
		e.preventDefault();
	}

	return (
		<div className="container">
			<div className="flexContainer">
				<Card cardData={cardData}/>
				<CardForm cardData={cardData} onChange={handleUpdate} onSubmit={handleSubmit}/>
			</div>
		</div>
	)
}

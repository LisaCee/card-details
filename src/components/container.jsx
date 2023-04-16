import {CardForm} from "./form";
import {Card} from './card';
import {Confirmation} from "./confirmation";
import {useState} from "react";

import '../styles/container.css';

export function Container() {
	const [cardData, setCardData] = useState( {
		'name'      : '',
		'cardNumber': '',
		'expMonth'  : '',
		'expYear'   : '',
		'cvc'       : '',
		placeholders: {
			'name'      : 'Jane Appleseed',
			'cardNumber': '0000000000000000',
			'expMonth'  : '00',
			'expYear'   : '00',
			'cvc'       : '000'
		}
	} );
	const [submitted, hasSubmitted] = useState( false );

	function handleUpdate( e ) {
		setCardData( {
			...cardData,
			[e.target.name]: e.target.value
		} )
	}

	function handleSubmit( e ) {
		e.preventDefault();
		hasSubmitted( true );
	}

	function resetForm( e ) {
		e.preventDefault();
		hasSubmitted( false );
		setCardData( {
			'name'           : '',
			'placeholderName': 'Jane Appleseed',
			'cardNumber'     : '',
			'expMonth'       : '',
			'expYear'        : '',
			'cvc'            : ''
		} )
	}

	return (
		<div className="container">
			<div className="flexContainer">
				<Card cardData={cardData}/>
				{!submitted ?
					(<CardForm
						cardData={cardData}
						onChange={handleUpdate}
						onSubmit={handleSubmit}/>)
					: (<Confirmation onClick={resetForm}/>)}
			</div>
		</div>
	)
}

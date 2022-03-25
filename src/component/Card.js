import React, { useState } from 'react';
import axios from 'axios';

const url = 'https://api.adviceslip.com/advice';

const Card = () => {
	const [id, setId] = useState(1);
	const [advice, setAdvice] = useState('Advice goes here');

	const fetchAdvice = async () => {
		try {
			const { data } = await axios(url);
			const { id, advice } = data.slip;
			setId(id);
			setAdvice(advice);
		} catch (error) {
			console.log(error.response);
		}
	};
	fetchAdvice();

	return (
		<section>
			<div className='card'>
				<h1 className='card-header'>Advice # {id}</h1>
				<p className='card-body'>"{advice}"</p>
				<div className='separator'>
          
        </div>
				<button className='btn' onClick={fetchAdvice}>
					random button
				</button>
			</div>
		</section>
	);
};

export default Card;

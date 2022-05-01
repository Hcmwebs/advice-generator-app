import React, { useEffect, useState } from 'react'
import axios from 'axios'
import patternMobile from '../images/pattern-divider-mobile.svg'
import patternDesktop from '../images/pattern-divider-desktop.svg'

const url = 'https://api.adviceslip.com/advice'

const Card = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [id, setId] = useState(1)
	const [advice, setAdvice] = useState('Advice goes here')

	const fetchAdvice = async () => {
		setIsLoading(true)
		try {
			const { data } = await axios(url)
			const { id, advice } = data.slip

			setId(id)
			setAdvice(advice)
			setIsLoading(false)
		} catch (error) {
			setIsLoading(false)
			console.log(error.response)
		}
	}

	useEffect(() => {
		fetchAdvice()
	}, [])

	return (

				<main>
					<div className='card'>
						<h1 className='card-header'>Advice #{id}</h1>
						<q className='card-body'>{advice}</q>
						<picture>
							<source srcSet={patternDesktop} media='(max-width: 1440px)' />
							<source srcSet={patternMobile} media='(max-width: 375px)' />
							<img
								src={patternMobile}
								alt='pattern divider mobile'
								className='img'
							/>
						</picture>
						<button
							className={`${isLoading ? 'btn active' : 'btn'}`}
							onClick={fetchAdvice}
							aria-label='fetch advice'>
							<svg
								className='icon-dice'
								width='24'
								height='24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z'
									fill='#202733'
								/>
							</svg>
						</button>
					</div>
				</main>

	)
}

export default Card

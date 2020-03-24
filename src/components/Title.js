import React from 'react'

// export pure functional component 
export const Title = ({ children }) => (
	<h1 className="title">{children}</h1>
)

// import { Title } from 'components/title'
// <Title>Search Movies<Title/>
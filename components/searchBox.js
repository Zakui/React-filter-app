import React from 'react'

class SearchBox extends React.Component {
	render() {
		const {changeHandle} = this.props
		return (
			<div>
				<input onChange={changeHandle} type="text" palceholder="recherche" className="searchBox"/>
			</div>
		)
	}
}

export default SearchBox
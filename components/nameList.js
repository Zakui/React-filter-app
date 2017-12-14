import React from 'react'

class NameList extends React.Component {
	render() {
		const {names} = this.props
		return (
			<div>
				<ul>
					{names.map((n, k) =>
						<li key={k}>{n.name}</li>
					)}
				</ul>
			</div>
		)
	}
}

export default NameList
import React from 'react'
import SearchBox from './searchBox'
import NameList from './nameList'

// const names = ['jules', 'abou', 'aly', 'ousmane']

class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	names: [],
	    	data: []
	   	}
	   	this.changeHandle = this.changeHandle.bind(this)
	}
	componentWillMount() {
	    fetch("../data/name.json")
	    .then(res => res.json())
	    .then(
	        (result) => {
	          this.setState({
				data: result,
				names: result
			})	
	      	},
	        (error) => {
	          console.log('error '+ error)
	        }
	    )
  	}
	changeHandle(e) {
		if (e.target.value == '') {
			return this.setState({
				data: this.state.names
			})
		}
		return this.setState({
			data: this.state.names.filter(n => n.name.toLowerCase().includes(e.target.value.toLowerCase()))
		})
	}
	render() {
		return (
			<div className="container">
				<div>
					<h1>React Search!</h1>
					<p>Here is a list of Reggae artists rendered from a JSON object</p>
				</div>
				<SearchBox changeHandle={this.changeHandle}/>
				<NameList names={this.state.data}/>
			</div>
		)
	}
}

export default App
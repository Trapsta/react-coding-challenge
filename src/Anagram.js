import React from "react";

class Anagram extends React.Component {
	render() {
		return (
			<div className="anagram">
				<form onSubmit={this.onSubmit}>
					<input type="text" placeholder="word 1" />
					<br />
					<input type="text" placeholder="word 1" />
					<br />

					<button>Check Anagram</button>
				</form>

				<p>ANAGRAM TEST: "This is not an anagram"</p>
			</div>
		);
	}
}

export default Anagram;

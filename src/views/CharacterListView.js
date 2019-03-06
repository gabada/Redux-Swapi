import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchData } from '../actions';

class CharacterListView extends React.Component {

  componentDidMount() {
    this.props.fetchData();
  }
  
  render() {
    console.log(this.props.characters);
    if (this.props.fetching) {
      return (
        <p>LOADING!!!!</p>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching
})


// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetchData
  }
)(CharacterListView);

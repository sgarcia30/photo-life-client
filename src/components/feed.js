import React from 'react';
import { connect } from 'react-redux';
import { getEntries } from '../actions/entryActions.js';

export class Feed extends React.Component {
  componentDidMount() {
    this.props.dispatch(getEntries())
  }

  render() {
    const entries = this.props.entry.map((entry, index) => {
      return (
        <li key={index} className="entry">
          <img src="{entry.photo}" alt="entry"/>
          <p>{entry.caption}</p>
        </li>
    )})
    return (
        <div className="feed">
          <ul>
            {entries}
          </ul>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  entry: state.entry,
});

export default connect(mapStateToProps)(Feed);

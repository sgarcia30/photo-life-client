import React from 'react';
import { connect } from 'react-redux';

function Feed(props) {
  const entries = props.entry.map((entry, index) => {
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

const mapStateToProps = state => ({
  entry: state.entry,
});

export default connect(mapStateToProps)(Feed);

import React from 'react';
import { connect } from 'react-redux';
import './detail-card.css';

// DetailCard component
function DetailCard(props) {
  // Map through cards from the state and inject into JSX
    const cards = props.card.map((card, index) => (
      <div key={index} className="card">
        <h2>{card.title}</h2>
        <p>{card.cardInfo}</p>
      </div>
    ))
    // render the DetailCard component
    return (
        <div className="appDetails">
          <div className='background-color'>
            {cards}
          </div>
        </div>
    );
};

//Set up mapStateToProps for card
const mapStateToProps = state => ({
  card: state.Reducer.card
});

// Connect DetailCard to the store
export default connect(mapStateToProps)(DetailCard);

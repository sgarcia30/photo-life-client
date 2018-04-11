import React from 'react';
import { connect } from 'react-redux';

function DetailCard(props) {
  console.log(props)
    const cards = props.card.map((card, index) => (
      <div key={index} className="card">
        <h2>{card.title}</h2>
        <p>{card.cardInfo}</p>
      </div>
    ))
    return (
        <div className="appDetails">
          {cards}
        </div>
    );
};

const mapStateToProps = state => ({
  card: state.card
});

export default connect(mapStateToProps)(DetailCard);

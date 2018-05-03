import React from 'react';
import { connect } from 'react-redux';
import './detail-card.css';

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
          <div className='background-color'>
            {cards}
          </div>
        </div>
    );
};

const mapStateToProps = state => ({
  card: state.card
});

export default connect(mapStateToProps)(DetailCard);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchReservations } from "../../actions/reservationActions";
import Card from 'react-bootstrap/Card';

class UserReservations extends Component (
  componentWillMount() {
    this.props.fetchReservations();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newReservation) {
      this.props.reservations.unshift(nextProps.newReservation);
    }
  };

  render() {
    const postReservations = this.props.map(post => (
      <div key={reservation.id}>
        <Card>
          <Card.Header as="h5">
            {reservation.description}
          </Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-danger">Cancel Reservation</button>
            </div>
          </Card.Body>
        </Card>
      </div>
    ));
    return (
      <div>
        <div className="reservations-container">
          <div className="reservation">
            <h1>My Reservations</h1>
            {postReservations}
          </div>
        </div>
      </div>
    );
  }
}

UserReservations.propTypes = {
  fetchReservations: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newReservation: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchReservations })(UserReservations);

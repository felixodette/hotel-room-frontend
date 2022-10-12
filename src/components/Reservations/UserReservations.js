import React from 'react';
import Card from 'react-bootstrap/Card';

const UserReservations = () => (
  <>
    <h1 className="text-center m-4">Reservations</h1>
    <div className="reservations-container">
      <div className="reservation">
        <Card>
          <Card.Header as="h5">
            Reservation
          </Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-danger">Cancel Reservation</button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  </>
);

export default UserReservations;

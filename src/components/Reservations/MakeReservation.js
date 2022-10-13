import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Form, FormGroup, Input, Label } from 'reactstrap';

const MakeReservation = ({ hasLabel }) => {
  const dispatch = useDispatch()

  // State
  const [contact, setContact] = useState({
    group: '',
  })

  // Submit Handler
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(createContact(contact))
  };

  // Change Handler
  const handleChange = e => {
    setContact({...contact, [e.target.name]: e.target.value})
  };

  // bringing in our state from redux
  const groups = useSelector((state) => state.groups)


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div>
          <FormGroup>
            <Label>
              Choose Group/List</Label>
            <Select
              name="group"
              options={groups}
              getOptionlabel={({title}) => title}
              getOptionValue={({_id}) => _id }
              onChange={() => {}}
              isMulti
            />
          </FormGroup>
        </div>
      </Form>
    </>
  );
};

MakeReservation.propTypes = {

  hasLabel: PropTypes.bool
};

MakeReservation.defaultProps = {
  layout: 'basic',
  hasLabel: false
};

export default MakeReservation;

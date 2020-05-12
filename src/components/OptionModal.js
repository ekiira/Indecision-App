/* eslint-disable react/prop-types */

import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({ selectedOption, handleModal }) => (
  <Modal
    isOpen={!!selectedOption}
    onRequestClose={handleModal}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
    ariaHideApp={false}
  >
    <h3 className="modal__title">Selected Option </h3>
    {selectedOption && <p className="modal__body">{selectedOption}</p>}
    <button className="button" onClick={handleModal} type="submit">Okay</button>
  </Modal>
);

export default OptionModal;

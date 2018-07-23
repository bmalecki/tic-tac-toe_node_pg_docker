import React from 'react';
import PropTypes from 'prop-types';
import BoardMessage from './BoardMessage';
import GAME_STATUS from '../../constants/gameStatus';

const NewGameScreen = ({ gameStatus, roomid }) => {
  const beforeStartScreen = gameStatus === GAME_STATUS.NEW && (
    <BoardMessage text={`Waiting for NEW opponent in room ${roomid}`} />
  );

  return beforeStartScreen;
};

NewGameScreen.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  player1: PropTypes.string,
  player2: PropTypes.string
};

export default NewGameScreen;

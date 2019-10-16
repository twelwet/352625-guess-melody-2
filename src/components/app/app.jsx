import React from "react";
import PropTypes from 'prop-types';
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  const {gameTime, errorsCount} = props;

  return <WelcomeScreen
    time={gameTime}
    errorsCount={errorsCount}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number,
  errorsCount: PropTypes.number,
};

export default App;

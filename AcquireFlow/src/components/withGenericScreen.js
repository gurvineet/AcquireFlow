// src/components/withGenericScreen.js

import React from 'react';
import BaseScreen from './BaseScreen';

const withGenericScreen = (WrappedComponent, screenData, additionalComponents, useOpenAi, useRedux) => {
  return (props) => {
    const openAiProps = useOpenAi ? useOpenAi() : {};
    const reduxProps = useRedux ? useRedux() : {};

    const additionalProps = {
      ...openAiProps,
      ...reduxProps,
    };

    return (
      <>
        <BaseScreen title={screenData.title} description={screenData.description} />
        <WrappedComponent {...props} {...additionalProps} />
        {Object.values(additionalComponents || {}).map((Component, index) => (
          <Component key={index} {...props} {...additionalProps} />
        ))}
      </>
    );
  };
};

export default withGenericScreen;
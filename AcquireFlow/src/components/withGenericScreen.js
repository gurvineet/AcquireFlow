// src/components/withGenericScreen.js

import React from 'react';
import BaseScreen from './BaseScreen';

const withGenericScreen = (WrappedComponent, screenData, additionalComponents, useOpenAi, useRedux) => {
  const WithGenericScreen = (props) => {
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

  return WithGenericScreen;
};

export default withGenericScreen;
/*
BaseScreen and withGenericScreen two components work together to create a generic screen structure with the BaseScreen component, 
which is then enhanced with additional functionality from the plugins using the withGenericScreen 
Higher-Order Component (HOC). The HOC takes the plugin data, OpenAI integration, Redux integration, 
and any additional components provided by the plugin and passes them as props to the wrapped component..
*/
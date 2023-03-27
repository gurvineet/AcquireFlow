import React from 'react';
import { connect } from 'react-redux';
import { useOpenAi } from '../openai/OpenAiUtility';

const withGenericScreen = (
  WrappedComponent,
  screenData,
  additionalComponents = {},
  useOpenAi = () => {},
  useRedux = () => {}
) => {
  const ScreenComponent = (props) => {
    const openAi = useOpenAi();
    const { username, onUpdateUsername } = useRedux();

    const additionalComponentsProps = Object.entries(
      additionalComponents
    ).reduce(
      (acc, [componentName, component]) => ({
        ...acc,
        [componentName]: React.createElement(component, {
          ...props,
          ...openAi,
          ...{ username, onUpdateUsername },
        }),
      }),
      {}
    );

    return React.createElement(WrappedComponent, {
      ...props,
      ...screenData,
      ...openAi,
      ...{ username, onUpdateUsername },
      ...additionalComponentsProps,
    });
  };

  const mapStateToProps = (state) => ({
    username: state.user.username,
  });

  const mapDispatchToProps = {
    onUpdateUsername: (name) => ({
      type: 'SET_USERNAME',
      payload: { name },
    }),
  };

  return connect(mapStateToProps, mapDispatchToProps)(ScreenComponent);
};

export default withGenericScreen;
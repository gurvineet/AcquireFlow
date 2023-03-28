// src/plugins/welcomePlugin.js

import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../redux/actions";
import { suggestWelcomeMessage } from "../openai/OpenAiUtility";

export default {
  screenName: "Welcome",
  screenData: {
    title: "Welcome to AcquireFlow",
    description: "Let's get started on your journey to success!",
  },
  additionalComponents: {
    // Add custom components for the welcome screen here, if needed
  },
  useOpenAi: () => {
    // Define how the plugin interacts with OpenAI
    const getWelcomeMessage = async (userInput) => {
      const welcomeMessage = await suggestWelcomeMessage(userInput);
      return welcomeMessage;
    };

    return { getWelcomeMessage };
  },
  useRedux: () => {
    // Define how the plugin interacts with Redux
    const username = useSelector((state) => state.username);
    const dispatch = useDispatch();

    const onUpdateUsername = (name) => {
      dispatch(setUsername(name));
    };

    return { username, onUpdateUsername };
  },
};
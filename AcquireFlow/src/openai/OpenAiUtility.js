// src/openai/OpenAiUtility.js
import OpenAI from 'openai'; // Assume you're using the 'openai' package

const openai = new OpenAI('your_api_key');

const generateText = async (prompt, options = {}) => {
  const defaultOptions = {
    model: 'text-davinci-002',
    maxTokens: 50,
    n: 1,
    temperature: 0.7,
  };

  const requestOptions = {
    ...defaultOptions,
    ...options,
    prompt,
  };

  const response = await openai.Completion.create(requestOptions);
  return response.choices[0].text.trim();
};

export const suggestInitialGoals = async (userInput) => {
  const prompt = `Given the user's interests: ${userInput}, suggest some initial goals for them to pursue:`;
  const suggestions = await generateText(prompt);
  return suggestions.split('\n');
};

export const suggestTasksForGoal = async (goal) => {
  const prompt = `Suggest tasks to help the user achieve the goal: ${goal}`;
  const suggestions = await generateText(prompt);
  return suggestions.split('\n');
};

export const provideGuidanceForTask = async (task) => {
  const prompt = `Provide guidance and tips for completing the task: ${task}`;
  const guidance = await generateText(prompt);
  return guidance;
};

// Add other functions for different scenarios

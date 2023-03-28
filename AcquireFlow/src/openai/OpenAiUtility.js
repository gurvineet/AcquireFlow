// src/openai/OpenAiUtility.js
import axios from 'axios';
const apiKey = process.env.OPENAI_API_KEY;

export const suggestGoals = async (existingGoals) => {

  const prompt = `Given the following existing goals:\n- ${existingGoals.join('\n- ')}\n\n Suggest new goals:`;
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        "model": "text-davinci-003",
        "prompt": prompt,
        "max_tokens": 20,
        "temperature": 0.7,
        "top_p": 5,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    print(response.data)
    const suggestions = response.data.choices.map((choice) => choice.text.trim());
    print(suggestions)
    return suggestions;
  } catch (error) {
    print(error)
    console.error('Error getting goal suggestions:', error);
    throw error;
  }
};

export const suggestTasks = async (goal, existingTasks) => {
  const prompt = `Given the goal "${goal}" and the following existing tasks:\n- ${existingTasks.join('\n- ')}\n\nSuggest new tasks:`;
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        "model": "text-davinci-003",
        "prompt": prompt,
        "max_tokens": 50,
        "temperature": 0
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const suggestions = response.data.choices.map((choice) => choice.text.trim());
    return suggestions;
  } catch (error) {
    console.error('Error getting task suggestions:', error);
    throw error;
  }
};


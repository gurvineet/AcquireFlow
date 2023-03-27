import { welcomePlugin } from './plugins/welcomePlugin';
import { taskPlugin } from './plugins/taskPlugin';
import { goalPlugin } from './plugins/goalPlugin';

// ... Import other plugins if required

export const screenDataMap = {
  WelcomeScreen: {
    data: {
      title: 'Welcome to AcquireFlow',
      content: 'Discover and track your personalized journey...',
    },
    plugins: { welcomePlugin },
  },
  TaskScreen: {
    data: {
      title: 'Task Screen',
      content: 'Complete tasks to achieve your goals...',
    },
    plugins: { taskPlugin },
  },
  GoalScreen: {
    data: {
      title: 'Goal Screen',
      content: 'Set and track your personal goals...',
    },
    plugins: { goalPlugin },
  },
  // ... Add other screens' data and plugins
};
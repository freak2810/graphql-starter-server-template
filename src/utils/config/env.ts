import { config } from 'dotenv';

config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || '4000',
  DATABASE_URL: process.env.DATABASE_URL!,
};

/**
 * Validates the environment variables and throws an error if any are missing.
 */
export const validateEnv = () => {
  const envVariables = Object.keys(env);

  envVariables.forEach((envVariable) => {
    // @ts-expect-error
    if (env[envVariable]) throw new Error(`Environment variable ${envVariable} is missing!`);
  });
};

export const testMongoConfig = {
  Memory: true,
  IP: '127.0.0.1',
  Port: '27017',
  Database: 'test',
};

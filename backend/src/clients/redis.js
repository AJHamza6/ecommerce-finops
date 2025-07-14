import Redis from 'ioredis';

// pick up connection info from env vars, fall back to the service-name 'redis'
const redis = new Redis(
  process.env.REDIS_URL ||
    {
      host: process.env.REDIS_HOST || 'redis',
      port: process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : 6379,
    },
);

export default redis;

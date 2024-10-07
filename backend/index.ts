// Existing imports
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

// Get all movies from the database
app.get('/api/movies', async (req: Request, res: Response) => {
  try {
    const movies = await prisma.movie.findMany();
    res.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

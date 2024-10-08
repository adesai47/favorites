import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

// Enable CORS for frontend communication
app.use(cors({
  origin: 'http://localhost:5173'  // or 'http://localhost:5173' if using Vite
}));

app.use(bodyParser.json());

/**
 * GET /api/movies
 * Fetch all movies or search by title
 */
app.get('/api/movies', async (req: Request, res: Response) => {
  try {
    const { search } = req.query;

    // If search query is provided, filter movies by title
    const movies = await prisma.movie.findMany({
      where: {
        title: {
          contains: search ? String(search) : '',
          mode: 'insensitive',
        },
      },
    });

    // Respond with the list of movies
    res.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

/**
 * GET /api/movie/:id
 * Fetch movie details by ID
 */
app.get('/api/movie/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    // Fetch movie details by ID
    const movie = await prisma.movie.findUnique({
      where: { id: Number(id) },
    });

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    // Respond with the movie details
    res.json(movie);
  } catch (error) {
    console.error('Error fetching movie details:', error);
    res.status(500).json({ error: 'Failed to fetch movie details' });
  }
});

/**
 * POST /api/favorites
 * Add movie to user's favorites
 */
app.post('/api/favorites', async (req: Request, res: Response) => {
  const { movieId, userId } = req.body;

  try {
    const favorite = await prisma.favorite.create({
      data: {
        movieId,
        userId,
      },
    });

    res.json(favorite);
  } catch (error) {
    console.error('Error adding movie to favorites:', error);
    res.status(500).json({ error: 'Failed to add movie to favorites' });
  }
});

/**
 * GET /api/favorites
 * Fetch all favorite movies for a user
 */
app.get('/api/favorites', async (req: Request, res: Response) => {
  const { userId } = req.query;

  try {
    const favorites = await prisma.favorite.findMany({
      where: {
        userId: Number(userId),
      },
      include: {
        movie: true,  // Include the related movie data
      },
    });

    // Respond with the list of favorite movies
    res.json(favorites.map((favorite) => favorite.movie));
  } catch (error) {
    console.error('Error fetching favorite movies:', error);
    res.status(500).json({ error: 'Failed to fetch favorite movies' });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

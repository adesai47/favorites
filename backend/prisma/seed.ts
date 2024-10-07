import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const movies = [
  {
    title: "The Matrix",
    description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
    posterUrl: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
    releaseDate: new Date("1999-03-31"),
  },
  {
    title: "The Avengers",
    description: "Earth's mightiest heroes must come together to stop Loki and his alien army from enslaving humanity.",
    posterUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    releaseDate: new Date("2012-05-04"),
  },
  {
    title: "Interstellar",
    description: "A group of astronauts travel through a wormhole in search of a new habitable planet for humanity.",
    posterUrl: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
    releaseDate: new Date("2014-11-07"),
  },
  {
    title: "The Dark Knight",
    description: "Batman faces off against the Joker, a criminal mastermind wreaking havoc on Gotham City.",
    posterUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
    releaseDate: new Date("2008-07-18"),
  },
  {
    title: "Pulp Fiction",
    description: "The lives of several criminals intertwine in a series of incidents in this neo-noir crime drama.",
    posterUrl: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
    releaseDate: new Date("1994-10-14"),
  },
  {
    title: "Fight Club",
    description: "An insomniac office worker and a soap salesman form an underground fight club that spirals out of control.",
    posterUrl: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
    releaseDate: new Date("1999-10-15"),
  },
  {
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterUrl: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
    releaseDate: new Date("1994-09-22"),
  },
  {
    title: "Forrest Gump",
    description: "The story of a slow-witted man who has inadvertently been present at many of the most significant moments in history.",
    posterUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    releaseDate: new Date("1994-07-06"),
  },
  {
    title: "Gladiator",
    description: "A former Roman general sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    posterUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    releaseDate: new Date("2000-05-05"),
  },
  {
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
    posterUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    releaseDate: new Date("1972-03-24"),
  }
];

async function main() {
  console.log("Start seeding...");

  for (const movie of movies) {
    await prisma.movie.create({
      data: movie,
    });
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
import cors from 'cors';

const corsOptions = {
  origin: 'https://front-books-azure.vercel.app', // L'URL de ton front
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Méthodes autorisées
  credentials: true,  // Si tu veux que les cookies ou les headers d'authentification soient envoyés
};

app.use(cors(corsOptions));

// Données des livres (votre JSON ici)
const books = [
  {
    "id": 12345,
    "title": "Le Maître et Marguerite",
    "slug": "le-maitre-et-marguerite",
    "image": "https://images.epagine.fr/136/9782221221136_1_75.jpg",
    "author": "Mikhaïl Boulgakov",
    "difficulty": "Difficile",
    "description": "Un roman qui mélange fantastique, réalisme et satire. L'histoire explore la présence du Diable dans la Moscou stalinienne, où des événements surnaturels bouleversent la ville. Le Maître et Marguerite, deux personnages principaux, symbolisent l'amour, la rédemption et la lutte contre le totalitarisme.",
    "genres": [
      "Roman",
      "Fantasy",
      "Historique"
    ],
    "avis": "Un chef-d'œuvre complexe et fascinant, mêlant critique sociale et réflexion sur le bien et le mal. Un classique de la littérature russe qui captive par sa richesse symbolique."
  },
  {
    "id": 8965,
    "title": "1984",
    "slug": "1984",
    "image": "https://cdn.kobo.com/book-images/c9472126-7f96-402d-ba57-5ba4c0f4b238/1200/1200/False/nineteen-eighty-four-1984-george.jpg",
    "author": "George Orwell",
    "difficulty": "Moyen",
    "description": "Un roman dystopique où l'État totalitaire surveille et manipule ses citoyens. Winston Smith, le personnage principal, se rebelle contre un régime oppressif, mais découvre que la lutte pour la liberté est bien plus compliquée qu'il ne l'imaginait.",
    "genres": [
      "Science-fiction",
      "Dystopie",
      "Politique"
    ],
    "avis": "Une œuvre intemporelle qui interroge sur les dangers du totalitarisme et de la surveillance. Son impact sur la pensée politique moderne est indéniable."
  },
  {
    "id": 7689,
    "title": "Le Meilleur des Mondes",
    "slug": "le-meilleur-des-mondes",
    "image": "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/d0/1d/15/1383888/1507-1/tsp20250121074844/Le-meilleur-des-mondes.jpg",
    "author": "Aldous Huxley",
    "difficulty": "Moyen",
    "description": "Un roman dystopique visionnaire qui décrit un futur où la société est parfaitement régulée, mais au prix de la liberté individuelle et de l'émotion. La pensée critique est éliminée au profit de la consommation de masse et du confort matériel.",
    "genres": [
      "Science-fiction",
      "Dystopie",
      "Sociologie"
    ],
    "avis": "Un roman d'anticipation qui soulève des questions cruciales sur l'humanité et l'impact des technologies sur la société. Pertinent encore aujourd'hui."
  },
  {
    "id": 8956,
    "title": "Hamlet",
    "slug": "hamlet",
    "image": "https://m.media-amazon.com/images/I/71vZ7kcv-8L._UF1000,1000_QL80_.jpg",
    "author": "William Shakespeare",
    "difficulty": "Difficile",
    "description": "La célèbre tragédie de Shakespeare où le prince Hamlet cherche à venger la mort de son père, tué par son oncle. Un chef-d'œuvre sur la vengeance, la folie et les dilemmes moraux.",
    "genres": [
      "Théâtre",
      "Drame",
      "Classique"
    ],
    "avis": "Une œuvre incontournable de la littérature, où la complexité psychologique des personnages et les thèmes universels résonnent toujours puissamment."
  },
  {
    "id": 7123,
    "title": "Silo",
    "slug": "silo",
    "image": "https://m.media-amazon.com/images/I/71yI-sy+--L._AC_UF1000,1000_QL80_.jpg",
    "author": "Hugh Howey",
    "difficulty": "Moyen",
    "description": "Dans un futur post-apocalyptique, les derniers survivants de l'humanité vivent dans un silo souterrain gigantesque. Le roman suit l’histoire de personnages qui remettent en question la vérité sur leur monde enfermé.",
    "genres": [
      "Science-fiction",
      "Dystopie",
      "Thriller"
    ],
    "avis": "Un roman captivant et intelligent qui explore les thèmes de la société, de l'autorité et de la quête de la vérité. Une lecture immersive et palpitante."
  },
  {
    "id": 3412,
    "title": "Les Robots",
    "slug": "les-robots",
    "image": "https://cdn.cultura.com/cdn-cgi/image/width=830/media/pim/2_metadata-image-37190733.jpeg",
    "author": "Isaac Asimov",
    "difficulty": "Facile",
    "description": "Une série de nouvelles qui explore les lois de la robotique et les relations entre les humains et les intelligences artificielles. Asimov pose des questions éthiques sur la technologie et la place des machines dans la société.",
    "genres": [
      "Science-fiction",
      "Technologie",
      "Philosophie"
    ],
    "avis": "Un recueil fascinant qui pose des questions intemporelles sur l'intelligence artificielle et la moralité. Asimov reste une figure majeure de la science-fiction."
  }
];


// Route pour obtenir tous les livres
app.get('/', (req, res) => {
  res.json(books);
});

// Démarre le serveur
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
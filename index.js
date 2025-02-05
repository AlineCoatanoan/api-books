const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();

// Middleware pour ajouter les en-têtes CORS manuellement
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Autorise toutes les origines
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Cache-Control', 'no-store');
  next();
});


// Données des livres (votre JSON ici)
const books = [
  {
    "id": 12345,
    "title": "Le Maître et Marguerite",
    "slug": "le-maitre-et-marguerite",
    "thumbnail": "/images/maitre.jpg",
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
    "thumbnail": "/images/1984.jpg",
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
    "thumbnail": "/images/monde.jpg",
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
    "thumbnail": "/images/hamlet.jpg",
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
    "thumbnail": "/images/silo.jpg",
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
    "thumbnail": "/images/robots.jpg",
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


// Route principale pour récupérer la liste des livres
app.get('/', (req, res) => {
  res.json(books);
});


// Démarrer le serveur
module.exports = app;

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

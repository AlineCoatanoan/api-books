const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
 // Utilise le port attribué par Vercel ou 3000 en local

// Middleware pour ajouter les en-têtes CORS manuellement
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://front-books-aline.vercel.app'); // Remplace par l'URL de ton frontend
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Méthodes autorisées
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // En-têtes autorisés
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // Pour les cookies ou les sessions
  res.setHeader('Cache-Control', 'no-store'); // Désactiver le cache
  next();
});

// Servir les fichiers statiques (images)
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Données des livres (votre JSON ici)
const books = [
  {
    "id": 12345,
    "title": "Le Maître et Marguerite",
    "slug": "le-maitre-et-marguerite",
    "thumbnail": "maitre.jpg",
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
    "thumbnail": "1984.jpg",
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
    "thumbnail": "monde.jpg",
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
    "thumbnail": "hamlet.jpg",
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
    "thumbnail": "silo.jpg",
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
    "thumbnail": "robots.jpg",
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
app.listen(port, () => {
  console.log(`Server is running on https://api-books-ashy.vercel.app`);
});

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Exemple de données de livres
const books = [
  { id: 1, title: "1984", author: "George Orwell", description: "Un roman dystopique...", year: 1949 },
  { id: 2, title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", description: "Un conte poétique...", year: 1943 },
  { id: 3, title: "Harry Potter à l'école des sorciers", author: "J.K. Rowling", description: "Un jeune sorcier découvre...", year: 1997 },
];

// Endpoint pour récupérer tous les livres
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Endpoint pour récupérer un livre spécifique
app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: "Livre non trouvé" });
  res.json(book);
});

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur API lancé sur http://localhost:${PORT}`);
});

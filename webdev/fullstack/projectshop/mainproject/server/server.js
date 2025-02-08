const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const db = new sqlite3.Database('../../database/sellnegrs.db');
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут для получения всех пользователей
app.get('/sellnegr', (req, res) => {
    db.all('SELECT * FROM sellnegr', (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows); // Отправляем данные в формате JSON
    });
});

// Маршрут для добавления пользователя
app.post('/sellnegr', (req, res) => {
    const { name, age } = req.body; // Получаем данные из запроса
    db.run('INSERT INTO users (negr_name, negr_post, negr_history, negr_price) VALUES (?, ?, ?, ?)', [negr_name, negr_post, negr_history, negr_price], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ nerg_id: this.lastID }); // Отправляем ID нового пользователя
    });
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
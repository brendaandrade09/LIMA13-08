require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mariadb = require("mariadb");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

app.post("/cadastrar", async (req, res) => {
    const { produto } = req.body;
    if (!produto) {
        return res.status(400).json({ erro: "O campo produtos é obrigatório!!" });
    }
    let conn;
    try {
        conn = await pool.getConnection();
        const result = await conn.query(
            'insert into produtos(produto) values(?)', [produto]
        );
        res.status(201).json({
            mensagem: "Produto cadastrado com sucesso!!",
            id_inserido: result.insertId.toString()
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: "Erro interno no servidor." });
    } finally {
        if (conn) conn.release();
    }
});


const PORTA = process.env.PORT || 3000;
app.listen(PORTA, () => {
    console.log(`Servidor iniciado com sucesso!`);
    console.log(`http://localhost:${PORTA}`);
})
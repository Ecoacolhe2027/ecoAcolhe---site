const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/index");
});

router.get("/cadastro", (req, res) => {
    res.render("pages/cadastro");
});

router.get("/login", (req, res) => {
    res.render("pages/login");
});

router.get("/home", (req, res) => {
    res.render("pages/home");
});

router.get("/dashboard", (req, res) => {
    res.render("pages/dashboard");
});

router.get("/pontos", (req, res) => {
    res.render("pages/pontos");
});

router.get("/pedidos", (req, res) => {
    res.render("pages/pedidos");
});

router.get("/perfil", (req, res) => {
    res.render("pages/perfilCliente");
});

router.get("/termos", (req, res) => {
    res.render("pages/termos");
});



module.exports = router;
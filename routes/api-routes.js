const express = require("express");
const router = express.Router();
const db = require("../models");
console.log(db);
router.get("/all", (req, res) => {
    //Todo is the name of the table created in the todo models file
    db.Todo.findAll().then((todos) => res.send(todos)).catch((err) => res.send(err));
});

router.get("/find/:id", (req, res) => {
    db.Todo.findAll({
        where: {
            id: req.params.id,
        },
    }).then((todos) => res.send(todos))
        .catch((err) => res.send(err));

});

router.post("/new", (req, res) => {

    db.Todo.create(
        {
            text: req.body.text,
        })
        .then((todo) => res.send(todo))
        .catch((err) => res.send(err));
});

router.delete("/delete/:id", (req, res) => {
    db.Todo.destroy({
        where: {
            id: req.params.id,
        },
    }).then(() => res.send({ msg: "success" }))
        .catch((err) => res.send(err));

});

router.patch("/update", (req, res) => {
    db.Todo.update({ text: req.body.text }, { where: { id: req.body.id } })
        .then((updatetodo) => res.send(updatetodo))
        .catch((err) => res.send(err));
});
module.exports = router;
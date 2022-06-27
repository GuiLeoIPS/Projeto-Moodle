var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const alunoRouter = require("./routes/alunoRoutes");
const disciplinaRouter = require("./routes/disciplinaRoutes");
const revisaoRouter = require("./routes/revisaoRoutes");
const pesquisarByDisRouter = require("./routes/pesquisarBydisciplina");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use("/api/aluno", alunoRouter);
app.use("/api/disciplina", disciplinaRouter);
app.use("/api/revisao", revisaoRouter);
app.use("/api/pesquisarDisciplina", pesquisarByDisRouter);

    

app.listen(8000)


module.exports = app;

module.exports = function (app) {
    app.get('/pagamentos', function (require, response) {
        console.log('Recebida requesicao de teste na porta 3000');
        response.send('OK.');
    });
}


// array
var lista = ['item um', 'item dois', 'item tres'];

// object
var objeto = {
    'nome': 'Gabriel',
    'email': 'l31rb4g@gmail.com',
    'filhos': ['Antonio', 'Davi'],
    'endereco': {
        'rua': 'Ipiranga',
        'numero': 104
    }
};

var noticias = [
    {'id_noticia': 1, 'titulo': 'Chove no Rio'},
    {'id_noticia': 2, 'titulo': 'Flamengo campeao'},
    'isso nao e um objeto'
];

function somatorio(numero, numero2){
    alert(numero);
    alert(numero2)
}

// JSON = JavaScript Object Notation

var Lightbox = {
    'versao': '1.0',
    'alerta': function(){
        alert('PLIN');
    },
    'init': function(texto, cor){
        var container = $('<div>');
        container.attr({
            'id': 'minha_lightbox',
            'class': 'lightbox'
        });

        var fundo = $('<div>');
        fundo.attr('class', 'fundo');
        fundo.appendTo(container);

        var box = $('<div>');
        box.attr('class', 'conteudo');
        box.text(texto);
        box.css('background', cor);
        box.appendTo(container);

        var btn_fechar = $('<a>');
        btn_fechar.attr('class', 'fechar');
        btn_fechar.text('X');
        btn_fechar.click(function(){
            container.hide();
        });
        btn_fechar.appendTo(box);

        container.appendTo($('body'));
    }
};

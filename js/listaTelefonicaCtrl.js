angular.module("listaTelefonica", ["ngMessages"]);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $filter) {
    $scope.app = "Lista Telefonica";



    $scope.contatos = [{
        nome: "Pedro",
        telefone: "99999-8777",
        data: new Date(),
        operadora: {
            nome: "Oi",
            codigo: 14,
            categoria: "Celular"
        }
    }, {
        nome: "Ana",
        telefone: "99889-8467",
        data: new Date(),
        operadora: {
            nome: "Vivo",
            codigo: 15,
            categoria: "Celular"
        }
    }, {
        nome: "Maria",
        telefone: "99799-8557",
        data: new Date(),
        operadora: {
            nome: "Tim",
            codigo: 41,
            categoria: "Celular"
        }
    }];



    $scope.operadoras = [{
        nome: "Oi",
        codigo: 14,
        categoria: "Celular"
    }, {
        nome: "Vivo",
        codigo: 15,
        categoria: "Celular"
    }, {
        nome: "Tim",
        codigo: 41,
        categoria: "Celular"
    }, {
        nome: "GVT",
        codigo: 25,
        categoria: "Fixo"
    }, {
        nome: "Embratel",
        codigo: 21,
        categoria: "Fixo"
    }];

    $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    }



    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };



    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };



    $scope.ordernarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
});
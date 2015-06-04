function Cliente() {
    this.id;
	this.nome;
	this.cnpj;
	this.email;
	this.endereco;
	this.fone;
	this.cep;
	this.cidade;
	this.inscricaoEstadual;
	this.representanteCPF;
	//this.representanteDtNascimento = new Date();
	this.representanteFone;
	this.representanteRG;
	this.representante;
}

function Cidade() {
    this.id;
	this.nome;
}

function ItemVenda(){
	this.desconto;
	this.servico = new ServicoVenda();
	this.quantidade;
	this.venda = new Venda();
	this.cobravel;
	this.ordem = new Ordem();
	this.valorTotal;
}

function ServicoVenda(){
	this.id;
	this.nome;
}

function Ordem(){
	this.id;
	this.nome;
}

function Venda(){
	this.cliente = new Cliente();
	this.data;
	this.status;
	this.formaPagamento;
	this.informacoes;
	this.tpLayout;
	this.valorTotal;
	this.desconto;
	this.dataEntrada;
}

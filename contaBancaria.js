class ContaBancaria {
  constructor(saldo = 0) {
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }
}

const minhaConta = new ContaBancaria(100);
minhaConta.sacar(150);

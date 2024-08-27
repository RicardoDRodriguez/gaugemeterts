class Participante {
    sala: string;
    id: number;
    sequencia: number;
    nome: string;
    avatar: string;
    entradaNaSala: number;
    tempoDeFala: number;
    fatorRiquezaAbsoluta: number;
    tempoPresenca: number;
    fatorTempoPresenca: number;
    fatorAcumuladoPresenca: number;
    populacaoAcumulada: number;
    percentualAcumuloFala: number;
    proporcaoAcumuladaPopulacao: number;
    fatorAcumuladoCurvaLorenz: number;
  
    constructor(
      sala: string,
      id: number,
      sequencia: number,
      nome: string,
      avatar: string,
      entradaNaSala: number,
      tempoDeFala: number,
      tempoPresenca: number
    ) {
      this.sala = sala;
      this.id = id;
      this.sequencia = sequencia;
      this.nome = nome;
      this.avatar = avatar;
      this.entradaNaSala = entradaNaSala;
      this.tempoDeFala = tempoDeFala;
      this.fatorRiquezaAbsoluta = 0.0;
      this.tempoPresenca = tempoPresenca;
      this.fatorTempoPresenca = 0.0;
      this.fatorAcumuladoPresenca = 0.0;
      this.populacaoAcumulada = 0.0;
      this.percentualAcumuloFala = 0.0;
      this.proporcaoAcumuladaPopulacao = 0.0;
      this.fatorAcumuladoCurvaLorenz = 0.0;
    }
  }
  
  export default Participante;
  
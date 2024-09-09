const animaisValidos = ['LEAO','LEOPARDO','CROCODILO','MACACO','GAZELA','HIPOPOTAMO'];

class RecintosZoo {

    constructor() {
        this.recintos = [
            {
                id: 1,
                bioma: ['SAVANA'],
                tamanho: 10,
                animais: ['MACACO','MACACO','MACACO']
            },
            {
                id: 2,
                bioma: ['FLORESTA'],
                tamanho: 5,
                animais: []
            },
            {
                id: 3,
                bioma: ['SAVANA', 'RIO'],
                tamanho: 7,
                animais: ['GAZELA']
            },
            {
                id: 4,
                bioma: ['RIO'],
                tamanho: 8,
                animais: []
            },
            {
                id: 5,
                bioma: ['SAVANA'],
                tamanho: 9,
                animais: ['LEAO']
            }
        ];
    }

    analisaRecintos(nomeAnimal, quantidade) {
        
        if (!animaisValidos.includes(nomeAnimal)) {
            return {
                erro: 'Animal inválido',
                recintosViaveis: null
            };
        } else if (quantidade == 0) {
            return {
                erro: 'Quantidade inválida',
                recintosViaveis: null
            }
        } else {

            const animal = new Animal(nomeAnimal);
            
            return this.checarEspaco(this.recintos, animal, quantidade);

        }
    }

    checarEspaco(recintos, animal, quantidade) {
        let check = 0;
        recintos.forEach(e => {
            for (let i in e.bioma) {
                if (animal.bioma.includes(e.bioma[i])) {
                    let tamanhoEstimado = animal.tamanho * quantidade + e.animais.length;
                    if (tamanhoEstimado > e.tamanho) {
                        check = {
                            erro: 'Não há recinto viável',
                            recintosViaveis: null
                        }
                        break;
                    }
                }
            }
        });
        return check;
    }

}

class Animal {
    constructor(especie) {
        if (especie == 'LEAO') {
            this.especie = especie;
            this.tamanho = 3;
            this.bioma = ['SAVANA'];
        } else if (especie == 'LEOPARDO') {
            this.especie = especie;
            this.tamanho = 2;
            this.bioma = ['SAVANA'];
        } else if (especie == 'CROCODILO') {
            this.especie = especie;
            this.tamanho = 3;
            this.bioma = ['RIO'];
        } else if (especie == 'MACACO') {
            this.especie = especie;
            this.tamanho = 1;
            this.bioma = ['SAVANA','FLORESTA'];
        } else if (especie == 'GAZELA') {
            this.especie = especie;
            this.tamanho = 2;
            this.bioma = ['SAVANA'];
        } else if (especie == 'HIPOPOTAMO') {
            this.especie = especie;
            this.tamanho = 4;
            this.bioma = ['SAVANA','RIO'];
        }
    }
}

export { RecintosZoo as RecintosZoo };

// let resultado = new RecintosZoo().analisaRecintos('MACACO', 10)

// console.log(resultado);
import { Animal } from "./animal.js";
import { animaisValidos, animaisCarnivoros } from "./utils.js";

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
                animais: ['GAZELA', 'GAZELA']
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
                animais: ['LEAO','LEAO','LEAO']
            }
        ];
    }

    analisaRecintos(nomeAnimal, quantidade) {
        
        if (!animaisValidos.includes(nomeAnimal)) {
            return {
                erro: 'Animal inválido',
                recintosViaveis: null
            }
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
        let check = null;
        let recintosViaveis = [];

        recintos.forEach((e, i) => {
            let tamanhoEstimado = 0;
            for (let j in e.bioma) {
                if (animal.bioma.includes(e.bioma[j])) {
                    tamanhoEstimado = animal.tamanho * quantidade + e.animais.length;
                    if (!e.animais.includes(animal.especie) && e.animais.length > 0) {
                        tamanhoEstimado ++;
                    }
                    break;
                }
            }
            if (tamanhoEstimado <= e.tamanho && tamanhoEstimado > 0) {
                if (animal.carnivoro) {
                    if (e.animais.includes(animal.especie) || e.animais.length == 0) {
                        recintosViaveis.push(`Recinto ${e.id} (espaço livre: ${e.tamanho - tamanhoEstimado} total: ${e.tamanho})`); 
                    } 
                } else {
                    let recintoValido = true;
                    for (let l in animaisCarnivoros) {
                        if (e.animais.includes(animaisCarnivoros[l])) {
                            recintoValido = false;
                        }
                    }
                    if (animal.especie == 'MACACO' && e.animais.length == 0 && quantidade == 1) {
                        recintoValido = false;
                    }
                    if (animal.especie == 'HIPOPOTAMO') {
                        if (e.animais.length > 0 && !e.animais.includes(animal.especie)) {
                            recintoValido = false
                            
                            if (e.bioma.includes('SAVANA') && e.bioma.includes('RIO')) {
                                recintoValido = true;
                            }
                        }
                    }
                    if (recintoValido) {
                        recintosViaveis.push(`Recinto ${e.id} (espaço livre: ${e.tamanho - tamanhoEstimado} total: ${e.tamanho})`); 
                    }
                }
            } 
        });

        if (recintosViaveis.length == 0) {
            check = {
                erro: 'Não há recinto viável',
                recintosViaveis: null
            }
        } else {
            check = {
                recintosViaveis: recintosViaveis,
                erro: null
            }
        }
        return check;
    }

}

export { RecintosZoo as RecintosZoo };

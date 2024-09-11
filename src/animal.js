export class Animal {
    constructor(especie) {
        if (especie == 'LEAO') {
            this.especie = especie;
            this.tamanho = 3;
            this.bioma = ['SAVANA'];
            this.carnivoro = true;
        } else if (especie == 'LEOPARDO') {
            this.especie = especie;
            this.tamanho = 2;
            this.bioma = ['SAVANA'];
            this.carnivoro = true;
        } else if (especie == 'CROCODILO') {
            this.especie = especie;
            this.tamanho = 3;
            this.bioma = ['RIO'];
            this.carnivoro = true;
        } else if (especie == 'MACACO') {
            this.especie = especie;
            this.tamanho = 1;
            this.bioma = ['SAVANA','FLORESTA'];
            this.carnivoro = false;
        } else if (especie == 'GAZELA') {
            this.especie = especie;
            this.tamanho = 2;
            this.bioma = ['SAVANA'];
            this.carnivoro = false;
        } else if (especie == 'HIPOPOTAMO') {
            this.especie = especie;
            this.tamanho = 4;
            this.bioma = ['SAVANA','RIO'];
            this.carnivoro = false;
        }
    }
}
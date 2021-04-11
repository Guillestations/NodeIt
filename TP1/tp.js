/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. El valor obtenido se retornará al terminar la función. Si se no se recibe un string retornará -1.
*/
function contarVocales(texto) {
  let contador = 0;
  let vocales = ['a','e','i','o','u','A','E','I','O','U'];
  for(let i = 0; i< texto.length; i++){
    if(vocales.indexOf(texto[i]) >= 0){
      contador ++;
    }
    else {
      contador = -1;
    }
  }
  return contador;
}
console.log(contarVocales('1 a234'));

/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  const url= 'https://github.com/Guillestations/NodeIt.git';
  
  return url;
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/
const crearClase = () => class Retorno {
  constructor(texto){
    this.texto = (typeof (texto) === 'string'? texto : -1);
    Retorno.contadorInstancias = (Retorno.contadorInstancias || 0 ) +1;
  }
    
  contadorPalabras(){
    if(typeof(this.texto) === 'string'){
      const palabras = this.texto.trim().split(' ');
      let contador = palabras.filter(x => x === ' ');
      return contador.length+1;
    }else{
      return -1
    }
  }
  hayNumeros(){
    if(typeof(this.texto) === 'string'){
      const regex = /\'0-9'/g;
      const number = this.texto.match(regex);
      return (number !== null)? true: false;
    }
      
  }
  return 
}

module.exports = {
  contarVocales,
  urlRepo,
  crearClase
};

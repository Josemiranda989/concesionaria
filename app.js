const autos = require("./lista-de-autos");

let concesionaria = {
  autos: autos,
   buscarAuto: function(patente) {
     for(let i = 0; i < autos.length; i++){
         if(autos[i].patente == patente){
            return autos[i]
         }
      }
      return null;
   },
   venderAuto:function(patente) {
      const auto = this.buscarAuto(patente);
      if(auto){
         auto.vendido = true
      }
   },
   autosParaLaVenta: function() {
/*       return autos.filter(auto => auto.vendido == false) */
         return this.autos.filter(function(auto){
            return auto.vendido == false
         })
   },
   autosNuevos: function(){
      let autosVenta = this.autosParaLaVenta();
/*       return autosVenta.filter(auto => auto.km <100) */
         return autosVenta.filter(function(auto){
            return auto.km < 100
         })
   },
   listaDeVentas: function(){
        let precios = [];
        for(let i = 0; i < this.autos.length; i++){
           if(this.autos[i].vendido == true){
              precios.push(this.autos[i].precio)
           }
        }
        return precios;
   },
   totalDeVentas: function(){
/*       let resultado = this.listaDeVentas().reduce((a,b) =>
	a + b, 0)
   return resultado} */
   let resultado = this.listaDeVentas().reduce(function(a,b) {
      return a + b }, 0)
      return resultado
      },
   puedeComprar: function (auto, persona){

      if ( (auto.precio <= persona.capacidadDePagoTotal) && (auto.precio / auto.cuotas) <= persona.capacidadDePagoEnCuotas ) {
         return true
      } else return false
   },
   autosQuePuedeComprar: function (persona) {
      let puedeComprar = []

 this.autosParaLaVenta().forEach((item) => {
    if (this.puedeComprar(item,persona) == true) {
       puedeComprar.push(item)
    }
 })
   return puedeComprar
},
}

console.log(concesionaria.buscarAuto("APL123"))
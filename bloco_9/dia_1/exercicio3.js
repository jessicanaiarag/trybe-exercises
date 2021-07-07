const getPlanet = () => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers"
      },
    };
    return mars;
  };

  setTimeout(() => console.log("Returned planet: ", getPlanet()), 4000);
  
  // imprime Marte depois de 4 segundos

  //A função getPlanet abaixo imprime o planeta Marte de forma síncrona. 
  //Modifique getPlanet , de forma que Marte seja impresso assincronamente, 
  //depois de 4 segundos.
let plan001 = [
    {
      nombre: "plan001",
      capital: 150000,
      plazo: 30,
      tasa: 0.15
    },
  ];
  let plan002 = [
    {
      nombre: "plan002",
      capital: 300000,
      plazo: 180,
      tasa: 0.10
    },
  ];
  let plan003 = [
    {
      nombre: "plan003",
      capital: 485000,
      plazo: 60,
      tasa: 0.23
    },
  ];
  function calcularInteres(plan) {
    return (plan.capital * plan.plazo * plan.tasa) / 100;
  }
  function añadirCampoInteres(planes) {
    return planes.map((plan) => {
      plan.interes = calcularInteres(plan);
      return plan;
    });
  }
  

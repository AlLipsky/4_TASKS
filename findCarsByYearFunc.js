const INVENTORY = [
  {
    brand: "Škoda",
    models: [
      {
        name: "Fabia",
        years: [2011, 2012, 2013],
      },
      {
        name: "Kamiq",
        years: [2019, 2020, 2021],
      },
    ],
  },
  {
    brand: "Toyota",
    models: [
      {
        name: "Corolla",
        years: [2011, 2013],
      },
      {
        name: "Prius",
        years: [2019, 2020, 2021],
      },
    ],
  },
  {
    brand: "Nissan",
    models: [
      { name: "Micra", years: [2011] },
      { name: "GTR", years: [2019] },
    ],
  },
];
const findCarsByYear = (year) =>
  INVENTORY.map((car) =>
    car.models.map((model) =>
      model.years.filter((currentYear) => {
        if (currentYear == year) {
          console.log(`${car.brand} ${model.name} ${currentYear}`);
        }
        return;
      })
    )
  );
findCarsByYear(2019); // "Škoda Kamiq 2019","Toyota Prius 2019","Nissan GTR 2019"

import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";
import useHttp from "../../hooks/use-http";
import { useState } from "react";
import { useEffect } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const { isLoading, error, sendRequest: getMeals } = useHttp();

  useEffect(() => {
    const transformMeals = (mealsObj) => {
      const loadedMeals = [];

      for (const mealKey in mealsObj) {
        loadedMeals.push({
          id: mealKey,
          name: mealsObj[mealKey].name,
          description: mealsObj[mealKey].description,
          price: mealsObj[mealKey].price
        });
      }

      setMeals(loadedMeals);
    };
    getMeals(
      { url: "https://max-movies-4185a-default-rtdb.firebaseio.com/Meals.json" },
      transformMeals
    );

  }, [getMeals]);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      title={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

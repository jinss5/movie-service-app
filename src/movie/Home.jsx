import React from "react";
import axios from "axios"; //utilized axios instead of fetch
import Card from "./components/Card";
import "./Home.css";

//below is practice done over JSX and PROPS
//JSX is basically just html inside of javascript
/*
import PropTypes from "prop-types";
const foodILike = [ // list of objects from API
  {
    id: 1,
    name: "a",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAEMCAMAAABJKixYAAAAgVBMVEX///8AAADFxcXp6elvb296enr8/PzJycmoqKjt7e3k5ORsbGxycnLh4eGhoaHCwsLx8fGYmJiOjo7S0tKysrK7u7tgYGDOzs41NTVmZmYXFxdFRUVOTk7Y2NiIiIiRkZE9PT2kpKSAgIAfHx8tLS1YWFhCQkIoKCgbGxsPDw83NzdN+CLAAAAH+0lEQVR4nO1d2UIbORCc4QgQyEHIBQmJnRCyyf9/4K4BLz6mSi2pj3noerUslzUaqau71RqGRCKRSCQSs8ftxTHDaTQ/ivORI5ofw4sC9/FNNEOC9yXyH6MZEixK5Me30RQhXhW5j6+jOUJ8K5P/Gc0Rosx9HG+jSQK8kZA/jmYJ8EtCfqZL/VsR9/FDNM9JvJaR/xrNcxI/ZeTHw2iiE7gVch+/RzOdwLGU/BxfWTH38VM01T0UbbJnnEdz3cMXOfnxRTTZHRxWcB/nJqi+15D/HM12BzXcx/FVNN0tnNSR/xbNdwvXdeRntdQXhfcu5iTET2vJ/4pmvIG7WvIzEuJim+wZ8xHiPxDFO/gi/xPN+X/A8b08gB/NRYh/gAwP8f+aixD/igjeMys/mvUjziC/98NwxT6cAS4hv5Xpe4M+/BLN+wGQ3vXqU/zX5iDE8cQ4WX2MJ9UchPgFZPf4OZZYsbxXwDbZk92Lxe1JLHPK7Ulx4H93Hct8IMGQu3ULHGSLFuIvIbPluskn2CRaiONgyLPRC5vckY49AIltyI13sFGsEMdW44YbHk+tH3HM/8NHyGuz1V9RK2/gYMiWxYslbmSYBAdDtrQGXuojhfhvROpmux2eXXFCHAvvy+2G+L2+nO7ZAVgmne20hA1vJjv2AKS0JzTwXnYVQXxgNtmexMMT7CKC+cAs9X2LC77aQdYZDoZMBJ3wohojxHEwZEJl4O3s3p/5wIIhU61xVsVLb+IDC4a8m2qO3WqTzY2BBdK0oVv3oGyB7RUQ68M7mr8Qx5YiEHfYv+MvxD9DLsjWgp41d+sMZyHCvE/s+FuirxgBBkNwoA87/n57Mh/a1g5sTviGSfCqTTQ1NuR8hTjeL8kgklCzH3M2fWm6Ld7XPIU4XjiorMMWhWe+Il6yd/XfNuDXCt/TBN4sCyOIHX9+QhwHQwrKAjv+/vgwp6tGSdNhx5+XEMfr9VHpq9icK35VCfeQQTHdk2R6+whxPHEFew12/PkIcbxkCAQdPt2wsOb9ADzwEind9+1eYKepKNcT29IeQhzPWlFwj6R0WTOn64VMzWHH34Ex9WFYwt8WnvvDjj/7g4N44ISJnt2Prh0KUxYLGWshjl1HYimHJaT1wUE88HIRrdFHC1RGTeHpNQFmIdbk12ItY7rUk5MhNToOq0hLIY6Fd5WCVuqmEnjgq4ZM6QHWAecsVU5W7PizE+LYaVQZTcVC0kyIE+FdedxPrycxyMmQ2q7wM7Q6OIiDIdWZteRclY0QJyUZ6hUc7stGiOPMjUV9Z1jF/9Xm/QA8WA3JneQxWuQrkpIMLdMUv0AWBwexhmiKoyouXWUQ9dYknEl/+gcHSUmGtg6xC0VfiOOSDI1zlLxD2kKcCIhW7YZ71D44iIMhzeFr7PjTFuIGw0S8KLpCnJRkaJ+g2H+le3AQB0M6hJv6AjYNEgzpkMxkqdcU4tiM6hojvGlrHhzE3LuyabELS/HgIJEOfeFT3K/ewUG8k3fqZVLQR4c5fbE6B4js21r5ikv8E71T8w/sWUuI45IM3UnM2PGnJMTJNt4tlonjT+fgIDagFEYHO/50Kvhg7gp5tMRo0hDiZCdRCJwSx5+GEMfBEJW1mNTT7e8cZyHq+CjI7t0vxMlipuMdwv33HxzE24jSOWJisfYKcRIMUZLJxPHX+wvkfdJyUGDHX2cFH7KSqR1lJY6/PoOb7CGnZ4cqOCPzpk+I4yROH/TYH4L61LbosfwE9alt0SPEo7n3qB1RfWpbtOtMWX1qW7RyF9antkWrEBfWp7ZFq+CR1qe2RdtS31AL0QJtQlxen9oUbZZ3NOs1WjRPRX1qW7TkK9bUp7ZFPfeq+tS2qA+TVNWntkW97IlmvIlawVlZn9oWtfmKtfWpTVFZwae6PrUt6oR4dX1qW9TFHOvrU9uixjpjNtnJgRFOiGKuEeIkGGJYg4mIn0VFN2zgjZivQGSnPO2UBENMD0aQ35UfHCTBENvbEhQGjQRDjA8DEZ+0dLqSYIhxtTpilEjzFXEwxLw8AXnmMuuMBEPM62eTNVp2cPAId7AwZT7Q3VGUAslsMvtCwmTKStYKJrztK0cRAScR4uSyToeKqiSPULDUs2CIRwkdHBsU/DwLhjhwH5b458v5p4S7y91nzK9eOjjIgiE+NfaIYVXaInEWolfJK7LaFRIh2UNzKjbG9hkuxFkwxKvMG/G68Ao+OKXdr+oSe+2YEGfC2+9aEEKCCXEWDPGrA0tYLMjXCHfHiwpJhjEZQmaTeRbEJKYl1tAsGOJZipSkncHNhgVDXG8yZsYhSkRlwRDfitlkxUZCnHB3rlXO9srp+cuCIc6lg5nnaDpfkQVDvO+2JEvHpBCnwRBn7nTRnrKxWDDE/ZI/NpJTZIh4DLjVoU5X0CxEd+7UtNwX4sTRFlLentDZ3zDZwEdc+8QM3F0hzoIhIRduMXfvrhBnWYgxF9ESQjuijm1pjgWPN8G8X9sVfEgwJOpGTiZJt91fuLJY3F2oLDNy005kwivsakI2GzYDBbgkg0cJTACmjTYq+FCbLO6ydFyvYHProVmIYdypqfgsxEkwJOyyqqGQRb5uxEIpZkXRJGA753o2M09D6J2KzGZZx8cYd9tEiRIYs0chTk+GxN7yTuLZT9bZ5fkRRODrusLVNWR2Ppf75xOJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEn34F/mGYa0IHZ15AAAAAElFTkSuQmCC",
    rating: 3
  },
  {
    id: 2,
    name: "b",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/RomanB-01.png",
    rating: 4
}]

function Food({ name, picture, rating }) {
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5</h4>
    <img src={picture} alt={name} />
  </div>
  );
}

Food.propTypes = { //used for debugging
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => ( //map function makes implementation to every element in the list
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}*/

class Home extends React.Component {
    //below is practice done over "state"
    /*
    constructor(props) {
      super(props);
      console.log("hello");
    }

    //state is an object where I put dynamic data of my component
    state = {
      count: 0
    };

    //everytime I call setState, react is going to re-render with the new state
    add = () => {
      this.setState(current => ({ count: current.count + 1 }));
    };
    minus = () => {
      this.setState({ count: this.state.count - 1 });
    };
    componentDidMount() {
      console.log("component rendered");
    }
    componentDidUpdate() {
      console.log("i just updated");
    }
    componentWillUnmount(){
      console.log("goodbye");
    }

    //react is going to automatically execute the render method function of your class component
    render() {
      console.log("i am rendering");
      return (
        <div>
          <h1>The number is: {this.state.count}</h1>
          <button onClick={this.add}>add</button>
          <button onClick={this.minus}>minus</button>
        </div>
      );
    }
    export default App;
    */

    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async () => {
        const { //using brackets, {}, you basically open up the object and take what is inside.
            data: {
                data: { movies }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
        /* this an alternative method of writing using ES6
        const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json"); //beacuse axios.get() takes time to complete added async & await
        console.log(movies.data.data.movies);                                        //fetched YTS proxy API
        */
        this.setState({ movies, isLoading: false });
    }
    componentDidMount() {
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
            /* comment written to better understand the code below
            <div>
                {isLoading ? "Loading.."
                : movies.map((movie) => {
                    return <Card        // Card 함수 사용
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        title={movie.title}
                        summary={movie.summary}
                        poster={movie.medium_cover_image}
                    />;
                })}
            </div>
            Conditional (ternary) operator / 삼항 조건 연산자
            for { A ? (B) : (C) }
            if A is true, B is called and when A is false, C is called.
            therefore for the below code, when the page is loading, the text, Loading appears
            and when the page finishes loading, the movie card section appears
            */
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map(movie => (
                            <Card
                                key={movie.id} //to fix error: Warning: Each child in a list should have a unique "key" prop.
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />  //passing information to Card component
                                //have given the movie component a prop, (key, id, year title, ...), with value, {movie.id}
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default Home;
import { Oval } from "react-loader-spinner";

function ratingGame(user, arithmeticMeanRating, _id) {
  const { rating } = user.games.find(item => item._id === _id);

  const value = arithmeticMeanRating(rating);

  const total = rating.length;

  return { value, total };
}

function loadingSpinner(loading) {
  switch (true) {
    case loading.spinner === true:
      return <Oval height={25} width={20} color="#006400" />;

    case loading.spinner === false:
      return <ion-icon name="checkmark-sharp"></ion-icon>;

    default:
      return;
  }
}

function disabledRating(loading) {
  if (loading.value === false) return false;

  return true;
}

export { ratingGame, loadingSpinner, disabledRating };

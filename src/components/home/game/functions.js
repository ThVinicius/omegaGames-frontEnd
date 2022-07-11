import { ThreeDots } from "react-loader-spinner";

function verifyGame(user, _id, addCart) {
  const findPurchases = user.purchases.some(item => _id === item._id);

  if (findPurchases) {
    return <h5>Comprado</h5>;
  }

  const findCart = user.cart.some(item => _id === item._id);

  if (findCart) {
    return <h6>Aguardando compra</h6>;
  }

  return <button onClick={addCart}>Adicionar ao carrinho</button>;
}

// function spinner(loading) {
//   if (loading.value === false) return "Adicionar ao carrinho";

//   return <ThreeDots color="#FFFFFF" height={20} width={99} />;
// }

export { verifyGame };

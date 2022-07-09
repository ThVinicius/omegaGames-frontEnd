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

export { verifyGame };

function status(request, response) {
  response.status(200).json({ caminho_verdade_vida: "Jesus!" });
}

export default status;

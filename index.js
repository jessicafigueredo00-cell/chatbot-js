function responder(msg) {
  if (msg === "oi") {
    return "Olá! Como posso ajudar?";
  } else if (msg === "horario") {
    return "Atendemos das 9h às 18h";
  } else {
    return "Não entendi sua mensagem";
  }
}

console.log(responder("oi"));
console.log(responder("horario"));

function validatePIN (pin) {
  return (/^[0-9]+$/.test(pin) && (pin.length === 4 || pin.length === 6))

}
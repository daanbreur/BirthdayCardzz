function ParameterException( message ) {
  this.name = 'ParameterException'
  this.message = message;
}

class Settings {
  constructor ( obj ) {
    if (!obj) this.settings = {};
    else this.settings = obj;
  }

  get getFireworks() {
    return this.settings.fireworks;
  }

  get getConfetti() {
    return this.settings.confetti;
  }

  get ( ...keys ) {
    if (keys.length < 2 || typeof keys == undefined) { throw new ParameterException('MissingRequiredParameter'); };
    return this.settings[keys[0]][keys[1]];
  }

}
class Screen {
  constructor() {
    this._draw();
    this._randomizeCharacter(2000);
    this._randomizeBody(3000);
    this._randomizeWheels(4000);
    this._randomizeGlider(5000);
  }

  _draw() {
    this._drawCharacterBubble();
    this._drawCharacterTitleText();
    this._drawCharacterValueText();
    this._drawBodyTitleText();
    this._drawBodyValueText();
    this._drawWheelsTitleText();
    this._drawWheelsValueText();
    this._drawGliderTitleText();
    this._drawGliderValueText();
  }

  _drawCharacterBubble() {
    this.characterBubble = SVG.new("circle")
      .setAttribute("cx", "50%")
      .setAttribute("cy", "19%")
      .setAttribute("r", 70)
      .setAttribute("fill", COLORS.WHITE);
  }

  _drawCharacterTitleText() {
    this.characterTitleText = SVG.new("text")
      .setAttribute("dominant-baseline", "middle")
      .setAttribute("text-anchor", "middle")
      .setAttribute("x", "50%")
      .setAttribute("y", "35%")
      .setAttribute("style", TEXT_FONT)
      .setAttribute("font-size", TITLE_TEXT_SIZE)
      .setTextContent("Character");
  }

  _drawCharacterValueText() {
    this.characterValueText = SVG.new("text")
      .setAttribute("dominant-baseline", "middle")
      .setAttribute("text-anchor", "middle")
      .setAttribute("x", "50%")
      .setAttribute("y", "40%")
      .setAttribute("style", TEXT_FONT)
      .setAttribute("font-size", VALUE_TEXT_SIZE)
  }

  _drawBodyTitleText() {
    this.bodyTitleText = SVG.new("text")
      .setAttribute("dominant-baseline", "middle")
      .setAttribute("text-anchor", "middle")
      .setAttribute("x", "50%")
      .setAttribute("y", "50%")
      .setAttribute("style", TEXT_FONT)
      .setAttribute("font-size", TITLE_TEXT_SIZE)
      .setTextContent("Body");
  }

  _drawBodyValueText() {
    this.bodyValueText = SVG.new("text")
      .setAttribute("dominant-baseline", "middle")
      .setAttribute("text-anchor", "middle")
      .setAttribute("x", "50%")
      .setAttribute("y", "55%")
      .setAttribute("style", TEXT_FONT)
      .setAttribute("font-size", VALUE_TEXT_SIZE)
  }

  _drawWheelsTitleText() {
    this.wheelsTitleText = SVG.new("text")
      .setAttribute("dominant-baseline", "middle")
      .setAttribute("text-anchor", "middle")
      .setAttribute("x", "50%")
      .setAttribute("y", "65%")
      .setAttribute("style", TEXT_FONT)
      .setAttribute("font-size", TITLE_TEXT_SIZE)
      .setTextContent("Wheels");
  }

  _drawWheelsValueText() {
    this.wheelsValueText = SVG.new("text")
      .setAttribute("dominant-baseline", "middle")
      .setAttribute("text-anchor", "middle")
      .setAttribute("x", "50%")
      .setAttribute("y", "70%")
      .setAttribute("style", TEXT_FONT)
      .setAttribute("font-size", VALUE_TEXT_SIZE)
  }

  _drawGliderTitleText() {
    this.gliderTitleText = SVG.new("text")
      .setAttribute("dominant-baseline", "middle")
      .setAttribute("text-anchor", "middle")
      .setAttribute("x", "50%")
      .setAttribute("y", "80%")
      .setAttribute("style", TEXT_FONT)
      .setAttribute("font-size", TITLE_TEXT_SIZE)
      .setTextContent("Glider");
  }

  _drawGliderValueText() {
    this.gliderValueText = SVG.new("text")
      .setAttribute("dominant-baseline", "middle")
      .setAttribute("text-anchor", "middle")
      .setAttribute("x", "50%")
      .setAttribute("y", "85%")
      .setAttribute("style", TEXT_FONT)
      .setAttribute("font-size", VALUE_TEXT_SIZE)
  }

  _randomizeCharacter(time) {
    const interval = setInterval(() => {
      this._setRandomCharacter();
    }, FRAME_DELAY);
    sleep(time).then(() => {
      clearInterval(interval);
    });
  }

  _randomizeBody(time) {
    const interval = setInterval(() => {
      this._setRandomBody();
    }, FRAME_DELAY);
    sleep(time).then(() => {
      clearInterval(interval);
    });
  }

  _randomizeWheels(time) {
    const interval = setInterval(() => {
      this._setRandomWheels();
    }, FRAME_DELAY);
    sleep(time).then(() => {
      clearInterval(interval);
    });
  }

  _randomizeGlider(time) {
    const interval = setInterval(() => {
      this._setRandomGlider();
    }, FRAME_DELAY);
    sleep(time).then(() => {
      clearInterval(interval);
    });
  }

  _setRandomCharacter() {
    const character = getRandomElementFromArray(getCharacters());
    this.characterBubble.setAttribute("fill", character.color);
    this.characterValueText.setTextContent(character.name);
  }

  _setRandomBody() {
    const body = getRandomElementFromArray(getBodies());
    this.bodyValueText.setTextContent(body);
  }

  _setRandomWheels() {
    const wheels = getRandomElementFromArray(getWheels());
    this.wheelsValueText.setTextContent(wheels);
  }

  _setRandomGlider() {
    const glider = getRandomElementFromArray(getGliders());
    this.gliderValueText.setTextContent(glider);
  }
}

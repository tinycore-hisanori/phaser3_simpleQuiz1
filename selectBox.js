class selectBox {
  constructor(that, posX, posY, w, h) {
    this.currentThis = that;
    this.background_ = this.currentThis.add.rectangle(
      posX,
      posY,
      w,
      h,
      0x6666ff
    );
    this.background_.setFillStyle(0x8844aa, 128);
    this.background_.visible = false;
    this.posX_ = posX;
    this.posY_ = posY;
    this.width_ = w;
    this.height_ = h;
    this.txtChices = new Array();
  }

  show(arr, func) {
    this.txtChices.splice(0);
    var oneLineH = this.height_ / arr.length + 5;

    for (var nLoop = 0; nLoop < arr.length; nLoop++) {
      this.txtChices[nLoop] = this.currentThis.add
        .text(
          10 + this.posX_ - this.width_ / 2,
          10 + this.posY_ - this.height_ / 2 + nLoop * oneLineH,
          arr[nLoop]
        )
        .setFontSize("28px")
        .setColor("#ffffff")
        .setStroke("#ffffff", 2)
        .setPadding(0, 4, 0, 0);
      this.txtChices[nLoop].visible = true;
      this.txtChices[nLoop].setInteractive();
      this.txtChices[nLoop].on("pointerdown", function () {
        func(this.text);
      });
      this.txtChices[nLoop].on("pointerover", function (pointer) {
        this.setColor("#FF0000");
        this.setStroke("#FF0000", 4);
      });
      this.txtChices[nLoop].on("pointerout", function (pointer) {
        this.setColor("#ffffff");
        this.setStroke("#ffffff", 2);
      });
    }
    this.background_.visible = true;
  }
  hide() {
    for (var nLoop = 0; nLoop < this.txtChices.length; nLoop++) {
      this.txtChices[nLoop].visible = false;
      this.txtChices[nLoop].destroy();
    }
    this.txtChices.splice(0);
    this.background_.visible = false;
  }
}

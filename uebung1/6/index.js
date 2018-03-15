function circle (id, color, x, y, radius) {
    var el = document.getElementById(id);
    this.ctx = el.getContext("2d");
    this.color = color;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.strokeStyle = 'black';
    this.ctx.stroke();
}

function arc (id, x, y, width) {
    var el = document.getElementById(id);
    this.ctx = el.getContext("2d");
    this.x = x;
    this.y = y;
    this.width = width;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.width, 0, Math.PI, false);
    this.ctx.stroke();
}

circle('draw', 'yellow', 100, 100, 70);
circle('draw', 'black', 75, 75, 10);
circle('draw', 'black', 125, 75, 10);
arc('draw', 100, 100, 50);

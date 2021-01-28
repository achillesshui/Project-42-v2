class Umbrella {
    constructor() {
        var options = {
            isStatic: true,
            restitution: 0.5
        }
        this.manIMG = loadImage("walking_1.png");
        this.body = Matter.Bodies.circle(200, 550, 120, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.manIMG, pos.x, pos.y, 350,350);
    }
}
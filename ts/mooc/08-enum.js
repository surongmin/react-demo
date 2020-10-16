var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 5] = "Left";
    Direction[Direction["Right"] = 6] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction[0]);
console.log(0 /* Up */);
console.log(Direction1[0]);

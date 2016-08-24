function Strong(position)
{
    var strongSpeed = 3;
    var strongHealth = 150;
    var mArguments = [ position, strongSpeed, strongHealth ];
    Zombie.apply(this, mArguments);
    this.picture.find(".zombie").addClass("strong");
}
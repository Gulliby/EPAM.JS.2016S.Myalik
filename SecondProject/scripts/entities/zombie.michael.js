function Michael(position)
{
    var michaelSpeed = 6;
    var mArguments = [ position, michaelSpeed ];
    Zombie.apply(this, mArguments);
    this.picture.find(".zombie").addClass("michael");
}
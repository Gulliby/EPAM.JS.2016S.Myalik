function Michael(position)
{
    var michaelSpeed = 4;
    var mArguments = [ position, michaelSpeed ];
    Zombie.apply(this, mArguments);
    this.picture.addClass("michael");

    this.speedy = function()
    {
        this.speed = 6;
    }
}
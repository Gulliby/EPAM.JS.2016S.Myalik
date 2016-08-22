function Strong(position)
{
    var strongSpeed = 2;
    var mArguments = [ position, strongSpeed ];
    Zombie.apply(this, mArguments);
    this.picture.addClass("strong");

    this.healthy = function()
    {
        this.health = 150;
    }

    this.speedy = function()
    {
        this.speed = 3;
    }
}
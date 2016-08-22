function Zombie(position, speed) 
{
    this.picture = $("<div/>").addClass("zombie");
    this.position = position;
    this.health = 0;
    this.speed = 0;
    

    this.healthy = function()
    {
        this.health = 50;
    }
    
    this.speedy = function()
    {
        this.speed = 2;
    }

    this.move = function(time) 
    {
        this.position = parseInt(this.picture.css("right")) + this.picture.width();
        this.picture.animate({ right: "+=" + this.speed,}, time);
    }

    this.die = function() 
    {
        this.picture.remove();
    }

    this.create = function(line) 
    {
        this.healthy();
        this.speedy();
        this.picture.css("right", this.position);
        $(line).append(this.picture);
    }
}
function Zombie(position, speed, health) 
{
    var baseSpeed = 2;
    var baseHealth = 50; 
    this.position = position;
    this.health = this.maxHealth = health != undefined ? health : baseHealth;
    this.maxSpeed = this.speed = speed;
    this.picture = createImage(this.maxHealth);

    this.move = function(time) 
    {
        this.position = parseInt(this.picture.css("right")) + this.picture.width();
        this.picture.animate({ right: "+=" + this.speed,}, time);
    }

    this.die = function() 
    {
        this.picture.remove();
    }

    this.slow = function()
    {
        this.speed = baseSpeed;
    }

    this.regulare = function()
    {
        this.speed = this.maxSpeed;
    }

    this.damage = function(damage)
    {
        this.health = this.health - damage;

        if (this.health <= 0)
        {
            return false;
        }
        else
        {
            var hpWidth = (this.health / this.maxHealth) * 100;
            this.picture.find(".hp-line").css("width",hpWidth+"%");
            this.picture.find("p").text(this.health);
            return true;
        }
    }

    this.create = function(line) 
    {     
        this.picture.css("right", this.position);
        $(line).append(this.picture);
    }

    function createImage(maxHealth)
    {
        var image = $("<div/>").addClass("zombie-depot"); 
        var healthBar = $("<div/>").addClass("hp-bar"); 
        var healthline = $("<div/>").addClass("hp-line");
        var zombie = $("<div/>").addClass("zombie");
        var text = $("<p/>").text(maxHealth);

        healthline.append(text);
        healthBar.append(healthline);

        image.append(healthBar);
        image.append(zombie);
        
        return image;
    }
}
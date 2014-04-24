var can = document.getElementById('map');
var ctx = can.getContext('2d');

var ship = document.getElementById("pirateship");
var isShipPresent = false;
var shipx;
var shipy;
var posx = document.getElementById('posx');
var posy = document.getElementById('posy');

var direction;
var difference;
var north = document.getElementById('north');
var south;
var east;
var west;



/*
ctx.moveTo(50,0);
ctx.lineTo(50,500);
ctx.stroke();
*/

for(var i = 0; i < 1820; i+=20)
{
    ctx.moveTo(i,0);
    ctx.lineTo(i,800);
    ctx.stroke();
}

for(var i = 0; i < 820; i+=20)
{
    ctx.moveTo(0,i);
    ctx.lineTo(1800,i);
    ctx.stroke();
}

if(isShipPresent === false)
{
    placeShip();
}

function placeShip()
{
    shipx = Math.floor((Math.random()*1780)+1);
    shipy = Math.floor((Math.random()*780)+1);
    
    ctx.drawImage(ship, shipx, shipy);
    ctx.strokeRect(shipx,shipy,20,20);
    isShipPresent = true;
}

posx.innerHTML = shipx;
posy.innerHTML = shipy;

north.onClick = function moveNorth()
{
    if(shipx + 20 < 1780)
            {
                ctx.drawImage(ship, shipx, shipy);
            }
    
}

/*
function moveShip(direction)
{
    switch (direction)
    {
        case north:
            if(shipx + 20 < 1780)
            {
                ctx.clearRect(shipx,shipy,20,20);
                ctx.drawImage(ship, shipx, shipy);
                ctx.strokeRect(shipx,shipy,20,20);
            }
            
            else
            {
               difference = shipx + 20 - 1780;
               shipx = 1 + difference;
               ctx.x = shipx;
               ctx.y = shipy;
            }
            console.log("button is clicked")
            break;
            
        case South:
            if(shipx + 20 < 1780)
            {
                shipx += 20;
            }
            
            else
            {
               difference = shipx + 20 - 1780;
               shipx = 1 + difference;
            }
            break;
            
        case east:
            if(shipx + 20 < 1780)
            {
                shipx += 20;
            }
            
            else
            {
               difference = shipx + 20 - 1780;
               shipx = 1 + difference;
            }
            break;
            
        case west:
            if(shipx + 20 < 1780)
            {
                shipx += 20;
            }
            
            else
            {
               difference = shipx + 20 - 1780;
               shipx = 1 + difference;
            }
            break;
            
    }
    
}
*/

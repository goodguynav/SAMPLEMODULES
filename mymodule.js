

function Area(length,width){
return length*width;
}

function Perimeter(length,width){
    return (length+width)*2;
}

module.exports = {
    computeArea: Area,
    computePerimeter: Perimeter 
};
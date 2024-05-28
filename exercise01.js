function createRect(width, height) {
    return {
        getWidth,
        getHeight,
        getArea
    }
    function getWidth() {
        return width
    }
    function getHeight() {
        return height
    }
    function getArea(){
       return width*height
    }
}
let myRect = createRect(5, 4)

console.log(myRect.getArea());
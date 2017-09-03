let imageDatas = require('json-loader!../images.json');
imageDatas = (function generateImageURL(imageDatasArr) {
    imageDatasArr.forEach(function (val, index) {
        let singleImageData = require('../images/' + val.name);
        imageDatasArr[index].singleImageData = singleImageData;
    });
    return imageDatasArr
})(imageDatas);     

export default imageDatas;

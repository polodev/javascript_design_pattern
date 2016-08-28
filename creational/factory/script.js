//here function name actually will be the file name in require js
//mediaFactory here is a basic object normally those think class/function
function Video () {
  var video = function(attributes) {
    this.length = attributes.length || 0;
    this.name = attributes.name || "";
  }
  return video;
}

function Image () {
  var image = function(attributes) {
    this.height = attributes.height || 0;
    this.width = attributes.width || 0;
  }
  return image;
}

var mediaFactory = {
   mediaType : {
    Video : Video(),
    Image : Image()
  },
  createMedia : function (type, attributes) {
    var MediaType = this.mediaType[type];
    return new MediaType(attributes);
  }
  
}

var myVideo = mediaFactory.createMedia('Video', {
  name : 'my video',
  length : 4.5
})
var myImage = mediaFactory.createMedia('Image', {
  width : 500,
  height : 300
})

console.log("myImage, myVideo", myImage, myVideo);





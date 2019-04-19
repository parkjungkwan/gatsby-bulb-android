var bulb = bulb||{};

bulb=(()=>{
  let init=()=>{

  };
  let onCreate=()=>{
    setContentView();
    $('#myImage').click(()=>{
        changeImage();
    });
  };
  let setContentView=()=>{
    let view = '<img id="myImage" src="https://www.w3schools.com/js/pic_bulboff.gif" width="100" height="180">'
               +'<p>Click the light bulb to turn on/off the light.</p>';
     $('body').html(view);
  };
  let changeImage=()=>{
        var image = $('#myImage');
        let bulboff = "https://www.w3schools.com/js/pic_bulboff.gif";
        let bulbon = "https://www.w3schools.com/js/pic_bulbon.gif";
        //정규표현식을 가서 .gif 앞에 있는 한 단어를 셀렉 후
        if (image.attr("src")===bulbon) {
          image.attr('src', bulboff);
        } else {
          image.attr('src', bulbon);
        }
      };
  return {init:init, onCreate: onCreate};
})();
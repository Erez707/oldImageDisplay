var file_input = document.getElementById('file_input');
var display_area = document.getElementById('display_area');


function displayImage() {
    //displays single image
    if (file_input) {
        file_input.onchange = show_image_tif;                            //change type of image that can be displayed
        // invisible_file_input.onchange = project_file_add_local;
        file_input.click();
    }
}

// function show_image_dcm() {
//         var canvas = document.getElementById('image_canvas');
//         // canvas.width = display_area.innerWidth;
//         // canvas.height = display_area.innerHeight;
//         imageCanvas = canvas.getContext('2d');

//         var imageDicom = new Image();
//         imageDicom.src="C:/Users/e_sha/Pictures/Saved Pictures/wp3161403.jpg";
//         imageDicom.addEventListener("load", function(){canvas.drawImage(imageDicom,0,0)});
// }


function show_image_tif() { //doesn't close previous image/// need to fix!
    var files = this.files, fileReader;

    for (var i = 0; i < files.length; i++) {
        fileReader = new FileReader();
        fileReader.onload = handlerTif;
        fileReader.readAsArrayBuffer(files[i]);            // convert selected file
    }

    function handlerTif() {                                // file is now ArrayBuffer:
        var tiff = new Tiff({buffer: this.result});        // parse and convert
        var canvas = tiff.toCanvas();                      // convert to canvas
        display_area.appendChild(canvas); // show canvas with content
    }
    
}

function toggleLeftSideBar() {
    document.getElementById("leftSideBar").classList.toggle('active');
    document.getElementById("toggle_button").classList.toggle('active');
}

// var image = document.createElement('img');
// image.src = file_input; 
// document.body.appendChild(image);

//################################# THEME DARK/LIGHT #############################################
// rgba(31, 97, 136, 0.356)  rgba(31, 97, 136, 0.466)

function toggleTheme() {
    document.getElementById('body').classList.toggle('light');
    document.getElementById('topMenuBar').classList.toggle('light');
    document.getElementById('logo').classList.toggle('light');

    document.getElementById('span1').classList.toggle('light');
    document.getElementById('span2').classList.toggle('light');
    document.getElementById('span3').classList.toggle('light');
    document.getElementById('open').classList.toggle('light');
    document.getElementById('save').classList.toggle('light');
    document.getElementById('zoom_in').classList.toggle('light');
    document.getElementById('zoom_out').classList.toggle('light');
    document.getElementById('reset_zoom').classList.toggle('light');
    document.getElementById('grid').classList.toggle('light');
    document.getElementById('image_color').classList.toggle('light');
    document.getElementById("theme").classList.toggle('light');

    document.getElementById('prediction_results').classList.toggle('light');
    document.getElementById('healthyp').classList.toggle('light');
    document.getElementById('cancerp').classList.toggle('light');
    document.getElementById('percent1').classList.toggle('light');
    document.getElementById('percent2').classList.toggle('light');
    document.getElementById('footer').classList.toggle('light');
}


//######################### ZOOM IN and ZOOM OUT EFFECTS #########################################
// var _dmia_settings = {};
// _dmia_settings.ui  = {};
// var DMIA_IMAGE_GRID_IMG_HEIGHT_CHANGE      = 20; // in percent
// var _dmia_image_grid_page_last_index         = -1;
// _dmia_settings.ui.image_grid.img_height          = 80;  // in pixel

function zoomIn() {
    var canvas = document.getElementById("display_area");
    var ctx = canvas.getContext("2d");
    ctx.scale(2, 2);
    display_area.appendChild(ctx); // show canvas with content

}

function zoomOut() {
   
}

// function image_grid_image_size_increase() {
//     var new_img_height = _dmia_settings.ui.image_grid.img_height + DMIA_IMAGE_GRID_IMG_HEIGHT_CHANGE;
//     _dmia_settings.ui.image_grid.img_height = new_img_height;
  
//     _dmia_image_grid_page_last_index = null;
//     image_grid_update();
//   }
  
//   function image_grid_image_size_decrease() {
//     var new_img_height = _dmia_settings.ui.image_grid.img_height - DMIA_IMAGE_GRID_IMG_HEIGHT_CHANGE;
//     if ( new_img_height > 1 ) {
//       _dmia_settings.ui.image_grid.img_height = new_img_height;
//       _dmia_image_grid_page_last_index = null;
//       image_grid_update();
//     }
//   }
  
//   function image_grid_image_size_reset() {
//     var new_img_height = _dmia_settings.ui.image_grid.img_height;
//     if ( new_img_height > 1 ) {
//       _dmia_settings.ui.image_grid.img_height = new_img_height;
//       _dmia_image_grid_page_last_index = null;
//       image_grid_update();
//     }
//   }
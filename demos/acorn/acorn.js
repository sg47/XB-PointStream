var ps;

var size = 500;
var zoomed = 0;

function zoom(amt){
  zoomed += amt * 2;
  size += amt * 10;

  if(ps.mouseX < 25 && ps.mouseY < 25){ 
    ps.resize(size, size);
    ps.background([0,0,0,1]);
  }
}

function render() {

  // transform point cloud
  ps.translate(0,0,zoomed);
  
  // redraw
  ps.clear();
  ps.render();
  
  window.status = Math.floor(ps.frameRate);
}

function start(){
  ps = new PointStream();
  
  ps.setup(document.getElementById('canvas'), render);
  ps.background([0,0,0,1]);

  ps.onMouseScroll = zoom;
  
  ps.loadFile({path:"acorn.asc", autoCenter: true});
}

// window.addEventListener("load", function () { 
//     const canvas = document.querySelector("canvas"); 
//   })
//   window.addEventListener("load", function () { 
//     const canvas = document.querySelector("canvas"); 
const ctx = canvas.getContext("2d"); 
//   })
//   window.addEventListener("load", function () { 
//     const canvas = document.querySelector("canvas"); 
//     const ctx = canvas.getContext("2d"); 
//     canvas.height = window.innerHeight; 
//     canvas.width = window.innerWidth; 
//   })
//   window.addEventListener("load", function () { 
//     const canvas = document.querySelector("canvas");  const ctx = canvas.getContext("2d");  
//       canvas.height = window.innerHeight; 
//       canvas.width = window.innerWidth; 
//       ctx.fillStyle = "blue"; 
//       ctx.fillRect(50, 50, 200,200); 
//       ctx.fillStyle = "red"; 
//       ctx.fillRect(60, 60, 200,200); 
//       ctx.fillStyle = "yellow"; 
//       ctx.fillRect(70, 70, 200,200); 
//     })  
let painting = false; 
 
  function startPosition() { 
    painting = true; 
  }; 
 
  function finishedPosition() { 
    painting = false; 
  };
window.addEventListener("load", function () { 
    const canvas = document.querySelector("canvas"); 
    const ctx = canvas.getContext("2d"); 
    canvas.height = window.innerHeight; 
    canvas.width = window.innerWidth; 
  })
  canvas.addEventListener("mousedown", startPosition); 
canvas.addEventListener("mouseup", finishedPosition);

function startPosition() { 
    painting = true; 
    console.log("im painting") 
  }; 
 
  function finishedPosition() { 
    painting = false; 
    console.log("im done painting") 
  };
  function draw() { 
}; 
canvas.addEventListener("mousemove", draw);
function draw(e) { 
    if(!painting) return; 
    console.log(e); 
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  };
  ctx.beginPath(); 
ctx.moveTo(e.clientX, e.clientY)
function finishedPosition() { 
    painting = false; 
    ctx.beginPath() 
  };
  function startPosition(e) { 
    painting = true; 
    console.log("im painting"); 
    draw(e); 
  };

const scene = document.querySelector('a-scene')

const balloons = ["#balloon", "#balloon1", "#balloon4", "#balloon5"]

const getPosNegRandomInt = (max) => {
  let pos = Math.random() > 0.5 ? true : false;
  num = Math.floor(Math.random() * max);
  let final = pos ? num : num * -1;
  return final;
}

const getRandomInt = (max) => {
  num = Math.floor(Math.random() * max);
  return num
}

const createBalloon = (xStart, zStart) => {
  let newBalloon = document.createElement("a-entity")
  newBalloon.setAttribute('position', `${xStart} 2.1 ${zStart}`)
  newBalloon.setAttribute('gltf-model', "#balloon")
  // let xEnd =
  // let zEnd =
  newBalloon.setAttribute('animation__up', `property:position; to:${xStart} 80 ${zStart}; dur: 30000; dir: alternate; loop: true; startEvents: click`)
  newBalloon.setAttribute('animation__turn', `property:rotation; to:0 360 0; loop:true; dur:100000; startEvents: click`)
  scene.append(newBalloon);
}

// createBalloon(20, 40);
// createBalloon(30, 10);
// createBalloon(-60, 70);

for(let i = 0; i < 10 ; i++){
  console.log("creating balloon")
  createBalloon(getPosNegRandomInt(100),getPosNegRandomInt(100))
}
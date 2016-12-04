function setup() {
  
}

var mic, recorder, soundFile;

var state = 0; // mousePress will increment from Record, to Stop, to Play

function setup() {
  createCanvas(400,400);
//    background(200);
//   fill(0);
  text('Enable mic and click the mouse to begin recording', 20, 20);

  // create an audio in
  mic = new p5.AudioIn();

  // users must manually enable their browser microphone for recording to work properly!
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // create an empty sound file that we will use to playback the recording
  soundFile = new p5.SoundFile();
}

function draw() {
  background(0,0,0,0);
 


  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  // fill(127);
  // stroke(0);

  // // Draw an ellipse with height based on volume
  // var h = map(vol, 0, 1, height, 0);
  // ellipse(width/2, h - 25, 50, 50);
}

function record(){
      recorder.record(soundFile);
      console.log('Recording now! Click to stop.');
      // state++;
}

function stop(){
      recorder.stop(soundFile);
      console.log('Recording stopped. Click to play & save');
      // state++;
    }

function save(){
    soundFile.play(); // play the result!
    // saveSound(soundFile, 'js/mySound.wav');

}

// function mousePressed() {
//   // use the '.enabled' boolean to make sure user enabled the mic (otherwise we'd record silence)
//   if (state === 0 && mic.enabled) {

//     // Tell recorder to record to a p5.SoundFile which we will use for playback
    

//     // recorder.record(soundFile);

//     // background(255,0,0);
//     // console.log('Recording now! Click to stop.', 20, 20);
//     // state++;
//   }

//   else if (state === 1) {
//     recorder.stop(); // stop recorder, and send the result to soundFile

//     background(0,255,0);
//     text('Recording stopped. Click to play & save', 20, 20);
//     state++;
//   }

//   else if (state === 2) {
//     soundFile.play(); // play the result!
//     saveSound(soundFile, 'js/mySound.wav'); // save file
//     state++;
//   }
// }

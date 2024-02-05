import { nowInSec, SkyWayAuthToken, SkyWayContext, SkyWayRoom, SkyWayStreamFactory, uuidV4 } from '@skyway-sdk/room';

const gUMBtn = document.getElementById('gum-btn');
const effectBtn = document.getElementById('effect-btn');
const audioE = document.getElementById('audio-e');
const startBGMBtn = document.getElementById('start-bgm-btn');

(async () => {

  gUMBtn.addEventListener('click', async () => {
    const audio = await SkyWayStreamFactory.createMicrophoneAudioStream();
    const stream = new MediaStream([audio.track]);

    /*
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    }).catch(console.error);
    */

    /*
    audioE.srcObject = stream;
    audioE.playsInLine = true;
    audioE.play().catch(console.error);
    */

    effectBtn.addEventListener('click', async () => {
      console.log('Pushing Effect Button');
      const audioCtx = new AudioContext();
      const source = audioCtx.createMediaStreamSource(stream);

      const GainNode = audioCtx.createGain();
      GainNode.gain.value = 0.1;
      source.connect(GainNode);

      GainNode.connect(audioCtx.destination);

    });
  });


})();

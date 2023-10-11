
import React from 'react'
import {Helmet} from "react-helmet";
import * as THREE from 'three';

import JeelizThreeHelper from './JeelizTHreeHelper';
import JeelizThreeGlassesCreator from './JeelizThreeGlassesCreator'
import JEELIZFACEFILTER from './JeelizFaceFilter'
import JeelizResizer from './JeelizResizer'

function combine() {

    let THREECAMERA = null;

    function detect_callback(faceIndex, isDetected) {
        if (isDetected) {
          console.log('INFO in detect_callback(): DETECTED');
        } else {
          console.log('INFO in detect_callback(): LOST');
        }
      }

      
function init_threeScene(spec) {
    const threeStuffs = JeelizThreeHelper.init(spec, detect_callback);
  
    
    threeStuffs.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    threeStuffs.renderer.outputEncoding = THREE.sRGBEncoding;
  
    
    const r = JeelizThreeGlassesCreator({
      envMapURL: "envMap.jpg",
      frameMeshURL: "models3D/glassesFramesBranchesBent.json",
      lensesMeshURL: "models3D/glassesLenses.json",
      occluderURL: "models3D/face.json"
    });
  
    
    const dy = 0.07;
  
   
    r.occluder.rotation.set(0.3, 0, 0);
    r.occluder.position.set(0, 0.03 + dy,-0.04);
    r.occluder.scale.multiplyScalar(0.0084);
    threeStuffs.faceObject.add(r.occluder);
    
   
    const threeGlasses = r.glasses;
  
    threeGlasses.position.set(0, dy, 0.4);
    threeGlasses.scale.multiplyScalar(0.006);
    threeStuffs.faceObject.add(threeGlasses);
  
    
  
    
    THREECAMERA = JeelizThreeHelper.create_camera();
  } 

  function main(){
    JeelizResizer.size_canvas({
      canvasId: 'jeeFaceFilterCanvas',
      callback: function(isError, bestVideoSettings){
        init_faceFilter(bestVideoSettings);
      }
    })
  }

  function init_faceFilter(videoSettings){
    JEELIZFACEFILTER.init({
      followZRot: true,
      canvasId: 'jeeFaceFilterCanvas',
      NNCPath: '../../../neuralNets/', 
      maxFacesDetected: 1,
      callbackReady: function(errCode, spec){
        if (errCode){
        console.log('AN ERROR HAPPENS. ERR =', errCode);
        return;
        }
  
        console.log('INFO: JEELIZFACEFILTER IS READY');
        init_threeScene(spec);
      },
  
      
      callbackTrack: function(detectState){
        JeelizThreeHelper.render(detectState, THREECAMERA);
      }
    }); 
  }
  
  
  window.addEventListener('load', main);
  return (
    <div>
      <Helmet>
  <meta charSet='utf-8'/>
  <meta http-equiv="content-language" content="en-EN" />
  <title>JEELIZ FACEFILTER: GLASSES VTO DEMO</title>
  <script src="../../../dist/jeelizFaceFilter.js"></script>

  {/* <script src="https://threejs.org/build/three.js"></script> */}
     
    <script src="../../../libs/three/v112/three.js"></script>

    
    {/* <script src="../../../helpers/JeelizThreeHelper.js"></script> */}

   
    <script src="../../../helpers/JeelizResizer.js"></script>

    
    {/* <script src="./JeelizThreeGlassesCreator.js"></script> */}
   
    <script src="./main.js"></script>

    
    <script src="../../appearance/widget.js"></script>

    <link rel="stylesheet" href="../../appearance/style.css" type="text/css" />

    
      </Helmet>
  <body>
    <canvas width="600" height="600" id='jeeFaceFilterCanvas'></canvas>
  </body>
    </div>
  )
}

export default combine



import * as THREE from './three.module.js';
import {GLTFLoader} from "./GLTFLoader.js";
import {OrbitControls} from "./OrbitControls.js";
import Stats from './stats.module.js';

// Colores 
var colors= [];
function renovarColores(){
    var color_hep= new THREE.MeshLambertMaterial({color: 0xa8adb5});
    var color_vein= new THREE.MeshLambertMaterial({color: 0xff0000});
    //var color_cv = new THREE.MeshLambertMaterial({color: 0x0000ff});
    //var color_pv = new THREE.MeshLambertMaterial({color: 0xff0000});
    //var color_bc= new THREE.MeshLambertMaterial({color: 0x00ff00});
    var color_sinu= new THREE.MeshLambertMaterial({color: 0xe600ff});
    var color_f480= new THREE.MeshLambertMaterial({color: 0x00f7ff});
    var color_desmin= new THREE.MeshLambertMaterial({color: 0xff2f00});
    var color_nuclei= new THREE.MeshLambertMaterial({color: 0x7d7c7a});
    var colors=[color_hep,color_vein,color_f480,color_desmin,color_sinu, color_nuclei];
    return colors;
}
colors= renovarColores();

// Cambio de colores
function nuevos_colores(){
    var newColors = [];
    newColors[0]= parseInt(document.getElementById("hep").value.replace('#','0x'),16);
    newColors[1]= parseInt(document.getElementById("vein").value.replace('#','0x'),16);
    newColors[2]= parseInt(document.getElementById("f480").value.replace('#','0x'),16);
    newColors[3]= parseInt(document.getElementById("desmin").value.replace('#','0x'),16);
    newColors[4]= parseInt(document.getElementById("sinu").value.replace('#','0x'),16);
    newColors[5]= parseInt(document.getElementById("nuclei").value.replace('#','0x'),16);
    return newColors;
}

function actualizar_colores(newColors){
    for ( let i = 0; i < colors.length; ++ i ){
        colors[i].color.set(newColors[i]);
    }
}

// Cambio opacidad
function cambioTransparencia(colors,sliders){
    for( let i = 0; i < colors.length; ++ i ){
        colors[i].opacity = sliders[i].value;
    }
}

var sliders_trans = [
    document.getElementById("transHep"),
    document.getElementById("transVein"),
    document.getElementById("transF480"),
    document.getElementById("transDesmin"),
    document.getElementById("transSinu"),
    document.getElementById("transNuclei"),
];

// PLANTILLA DE COLORES
// MANTENER EL ORDEN DE LOS ARCHIVOS Y COLORES EN ESTA SECUENCIA

// 0 hepatocitos
// 1 venas
// 2 sinusoides
// 3 f480
// 4 desmin
// 5 nucleos



/*
var color_hep= new THREE.MeshStandardMaterial({color: 0xa8adb5});
var color_vein= new THREE.MeshStandardMaterial({color: 0xff0000});
var color_cv = new THREE.MeshStandardMaterial({color: 0x0000ff});
var color_pv = new THREE.MeshStandardMaterial({color: 0xff0000});
var color_bc= new THREE.MeshStandardMaterial({color: 0x00ff00});
var color_sinu= new THREE.MeshStandardMaterial({color: 0xe600ff});
var color_f480= new THREE.MeshStandardMaterial({color: 0x00f7ff});
var color_desmin= new THREE.MeshStandardMaterial({color: 0xff2f00});
var color_nuclei= new THREE.MeshStandardMaterial({color: 0x7d7c7a});

var colors=[color_hep,color_vein,color_sinu,color_f480,color_desmin, color_nuclei];
*/
//  Declaracion de importador de gltf

var loader = new GLTFLoader();

//  PLANTILLA PARA AGREGAR NUEVAS RUTAS DE ARCHIVOS
/*
// copiar este formato para integrar nuevos modelos al visualizador
// asegurarse de que los slash sean de este tipo " / " o no cargará correctamente la carpeta

var model_pathList_sN = [
    './IngresarRutadeArchivoAqui',
    './IngresarRutadeArchivoAqui',
    './IngresarRutadeArchivoAqui',
    './IngresarRutadeArchivoAqui',
    './IngresarRutadeArchivoAqui',
    './IngresarRutadeArchivoAqui'
];


*/


var model_pathList_s1 = [
    './modelos/s1/WebReady_20190729_if_140401_04_id_npc_wbns_cells.glb',
    './modelos/s1/WebReady_20190729_if_140401_04_id_npc_wbns_dapi+pha.glb',
    './modelos/s1/WebReady_20190729_if_140401_04_id_npc_wbns_desmin.glb',
    './modelos/s1/WebReady_20190729_if_140401_04_id_npc_wbns_f480.glb',
    './modelos/s1/WebReady_20190729_if_140401_04_id_npc_wbns_flk1.glb',
    './modelos/s1/WebReady_20190729_if_140401_04_id_npc_wbns_nuclei.glb'
];

var model_pathList_s2 = [
    './modelos/s2/WebReady_20190729_if_140401_06_id_npc_2019_08_07__14_47_32_cells.glb',
    './modelos/s2/WebReady_20190729_if_140401_06_id_npc_2019_08_07__14_47_32_dapi+pha.glb',
    './modelos/s2/WebReady_20190729_if_140401_06_id_npc_2019_08_07__14_47_32_desmin.glb',
    './modelos/s2/WebReady_20190729_if_140401_06_id_npc_2019_08_07__14_47_32_f480.glb',
    './modelos/s2/WebReady_20190729_if_140401_06_id_npc_2019_08_07__14_47_32_flk-1.glb',
    './modelos/s2/WebReady_20190729_if_140401_06_id_npc_2019_08_07__14_47_32_nuclei.glb'
];

var model_pathList_s3 =[
    './modelos/s3/WebReady_if_151214_npc_130927_02 wbns_cells.glb',
    './modelos/s3/WebReady_if_151214_npc_130927_02 wbns_dapi+pha.glb',
    './modelos/s3/WebReady_if_151214_npc_130927_02 wbns_desmin.glb',
    './modelos/s3/WebReady_if_151214_npc_130927_02 wbns_f480.glb',
    './modelos/s3/WebReady_if_151214_npc_130927_02 wbns_flk1.glb',
    './modelos/s3/WebReady_if_151214_npc_130927_02 wbns_nuclei.glb'
];

var model_pathList_s4 = [
    './modelos/s4/WebReady_if_160720_130916_02_npc_st1_wbns_cells.glb',
    './modelos/s4/WebReady_if_160720_130916_02_npc_st1_wbns_dapi+pha.glb',
    './modelos/s4/WebReady_if_160720_130916_02_npc_st1_wbns_desmina.glb',
    './modelos/s4/WebReady_if_160720_130916_02_npc_st1_wbns_f480.glb',
    './modelos/s4/WebReady_if_160720_130916_02_npc_st1_wbns_flk-1.glb',
    './modelos/s4/WebReady_if_160720_130916_02_npc_st1_wbns_nuclei.glb'
];

var models = [];
function CargaMallados(modelos,colores){
    for ( let i = 0; i < modelos.length; ++ i ){
        loader.load(modelos[i], function(gltf){
            models[i]= gltf.scene;
            models[i].scale.set(0.5,0.5,0.5);
            models[i].position.x=0;
            models[i].position.y=0;
            models[i].position.z=0;
            scene.add(models[i]);
            models[i].traverse( ( obj ) => {

            if ( obj.isMesh ) {
                obj.material = colores[i];
                obj.material.format = THREE.RGBAFormat;
                obj.material.transparent = true;
                obj.material.opacity = 1; 
                obj.material._alphaTest= 0.3; 
            }});
        })
    }
}

// Declaracion de escena
var scene = new THREE.Scene();

// Declaracion de renderizador
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor( 0xffffff, 0);
renderer.setPixelRatio( window.devicePixelRatio * 0.7 );
document.body.appendChild(renderer.domElement);

//  Declaracion de camara
var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1200);
camera.position.x = 400;
camera.position.y = 400;
camera.position.z = 400;
camera.lookAt(new THREE.Vector3(0, 0, 0));
const aspectRatio = window.innerWidth / window.innerHeight;

//  Declaracion de Controls, permite interactuar con la camara
var controls = new OrbitControls(camera, renderer.domElement);

function borrarMallas(){
    for(let i=0;i<models.length;++i){
        scene.remove(models[i]);
        removeMallas(models[i]);
        colors=renovarColores();
        renderer.dispose();   
    }
}

function removeMallas(obj){
    if(obj.children.length>0){
        for(let i=0;i<obj.children.length;i++){
            removeMallas(obj.children[i])
        }
    }
    if(obj.isMesh){
        obj.geometry.dispose();
        obj.material.dispose();
    }
    if(obj.parent){
        obj.parent.remove(obj);
    }
}

//  Declaracion de estadisticas de rendimiento
var stats = Stats();
document.body.appendChild(stats.dom);

//  Luces
// se requieren para poder observar los modelos en el espacio de renderizado

var luz = new THREE.HemisphereLight(1);
luz.position.set(-2000, -2000, -2000);
scene.add(luz);

//  Ajuste cambio de tamaño de ventana
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    camera.aspect = aspectRatio;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}

// Funciones para botones
function sujeto1(){
    borrarMallas();
    CargaMallados(model_pathList_s1,colors);
}

function sujeto2(){
    borrarMallas();
    CargaMallados(model_pathList_s2,colors);
}

function sujeto3(){
    borrarMallas();
    CargaMallados(model_pathList_s3,colors);
}
function sujeto4(){
    borrarMallas();
    CargaMallados(model_pathList_s4,colors);
}

// funciones barra lateral

function offbarras(){
    document.getElementById("datosHep").style.width = "0px";
    document.getElementById("datosVenas").style.width = "0px";
    document.getElementById("datosSinu").style.width = "0px";
    document.getElementById("datosEst").style.width = "0px";
    document.getElementById("datosKup").style.width = "0px";
    document.getElementById("datosNuc").style.width = "0px";
}
// abre la barra lateral por X cantidad de pixeles
function barraHep() {
    if(document.getElementById("datosHep").style.width=="0px"){
        document.getElementById("datosHep").style.width = "240px";
        document.getElementById("datosVenas").style.width = "0px";
        document.getElementById("datosSinu").style.width = "0px";
        document.getElementById("datosEst").style.width = "0px";
        document.getElementById("datosKup").style.width = "0px";
        document.getElementById("datosNuc").style.width = "0px";
    }
    else{
        offbarras();
    }
}

function barraVenas() {
    if(document.getElementById("datosVenas").style.width=="0px"){
        document.getElementById("datosVenas").style.width = "240px";
        document.getElementById("datosHep").style.width = "0px";
        document.getElementById("datosSinu").style.width = "0px";
        document.getElementById("datosEst").style.width = "0px";
        document.getElementById("datosKup").style.width = "0px";
        document.getElementById("datosNuc").style.width = "0px";
    }
    else{
        offbarras();
    }
}

function barraSinu() {
    if(document.getElementById("datosSinu").style.width=="0px"){
        document.getElementById("datosSinu").style.width = "240px";
        document.getElementById("datosHep").style.width = "0px";
        document.getElementById("datosEst").style.width = "0px";
        document.getElementById("datosKup").style.width = "0px";
        document.getElementById("datosNuc").style.width = "0px";
        document.getElementById("datosVenas").style.width = "0px";
    }
    else{
        offbarras();
    }
}

function barraEst() {
    if(document.getElementById("datosEst").style.width=="0px"){
        document.getElementById("datosEst").style.width = "240px";
        document.getElementById("datosHep").style.width = "0px";
        document.getElementById("datosSinu").style.width = "0px";
        document.getElementById("datosKup").style.width = "0px";
        document.getElementById("datosNuc").style.width = "0px";
        document.getElementById("datosVenas").style.width = "0px";
    }
    else{
        offbarras();
    }
}

function barraKup() {
    if(document.getElementById("datosKup").style.width=="0px"){
        document.getElementById("datosKup").style.width = "240px";
        document.getElementById("datosHep").style.width = "0px";
        document.getElementById("datosSinu").style.width = "0px";
        document.getElementById("datosNuc").style.width = "0px";
        document.getElementById("datosVenas").style.width = "0px";
        document.getElementById("datosEst").style.width = "0px";
    }
    else{
        offbarras();
    }
}

function barraNuc() {
    if(document.getElementById("datosNuc").style.width=="0px"){
        document.getElementById("datosNuc").style.width = "240px";
        document.getElementById("datosHep").style.width = "0px";
        document.getElementById("datosSinu").style.width = "0px";
        document.getElementById("datosKup").style.width = "0px";
        document.getElementById("datosVenas").style.width = "0px";
        document.getElementById("datosEst").style.width = "0px";
    }
    else{
        offbarras();
    }
}



const bdataHep= document.getElementById("cambioHep").addEventListener('click',barraHep);
const bdataVein= document.getElementById("cambioVenas").addEventListener('click',barraVenas);
const bdataSinu= document.getElementById("cambioSinu").addEventListener('click',barraSinu);
const bdataKup= document.getElementById("cambioKup").addEventListener('click',barraKup);
const bdataEst= document.getElementById("cambioEst").addEventListener('click',barraEst);
const bdataNuc= document.getElementById("cambioNuc").addEventListener('click',barraNuc);

// PLANTILLA PARA AGREGAR NUEVOS BOTONES
// const botonCerrarbarra= document.getElementById("cambioTexto").addEventListener('click',closeNav);

// Botones
const botonS1= document.getElementById("suj1").addEventListener('click', sujeto1);
const botonS2= document.getElementById("suj2").addEventListener('click', sujeto2);
const botonS3= document.getElementById("suj3").addEventListener('click', sujeto3);
const botonS4= document.getElementById("suj4").addEventListener('click', sujeto4);

// Loop de animacion de renderizado, incluye actualizacion de control de camara 
// stats de rendimiento
// cambio de color y transparencia
CargaMallados(model_pathList_s1,colors);
function animate() {
    actualizar_colores(nuevos_colores());
    cambioTransparencia(colors,sliders_trans);
    requestAnimationFrame(animate);
    controls.update();  //   actualiza la posicion de la camara segun inputs
    render();   //    renderiza la escena
    stats.update(); //  actualiza datos de performance
}

function render() {
    
    renderer.render(scene, camera);
}

animate();

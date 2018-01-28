let nombre=[4];
let num=0;
let accion;
document.getElementById("boton").onclick=function(){
    accion=document.getElementById("txt_accion").value
    nombre[0]=document.getElementById("txt_nombre1").value
    nombre[1]=document.getElementById("txt_nombre2").value
    nombre[2]=document.getElementById("txt_nombre3").value
    nombre[3]=document.getElementById("txt_nombre4").value


    for(i=0;i<4;i++){
        if(nombre[i]!=""){
            num++
        }else{
            if(nombre[i+1]!=""){
                nombre[i]=nombre[i+1]
                nombre[i+1]=""
                num++
            }
        }
    }
    num=num-1
let numero=0;
    for(i=0;i<7;i++){
        numero=Math.round(Math.random()*num);
    }

    document.getElementById("texto").innerHTML = "Tiene que "+accion+" "+nombre[numero];

    num=0;

}


/*
document.getElementById("boton").onclick=function(){

    let cadena=document.getElementById("txt_correo").value
    nombre=document.getElementById("txt_nom").value
    apellido=document.getElementById("txt_ape").value
    correo=document.getElementById("txt_correo").value
    contr=document.getElementById("txt_contr").value
    if(correo.indexOf('@')==-1){
        alert("No ingreso el correo correctamente")
    }else if(nombre!="" && apellido!="" && correo!="" && contr!="" && correo.indexOf('.')!=-1){
        alert("Registrado correctamente")
    }else{
        alert("No ingreso todos los datos")
    }
}*/


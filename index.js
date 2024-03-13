export function fixConsoleLinks(pathToProject){

 console.defaultError = console.error.bind(console);
 console.error = function(){
  console.defaultError.apply(console, fixArgs(arguments));
 } 

 function fixArgs(args){
  return Array.from(args).map(arg=>{
   if(typeof arg === "string"){
    return arg.replace(/http:\/\/localhost:\d+\/([^ \n\r\t]*)/g, `vscode://file/${pathToProject}/$1`);
   }
  })
 }
}







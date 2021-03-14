export const ErrorHandler=(code:any):string=>{
  let massage:string=`Код ошибки:${code}; `;
  if(code===0){massage=massage+"Нет ответа от сервера"}
  return massage
}
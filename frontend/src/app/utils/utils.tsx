import React from "react";

export const htmlDecode=(input:string)=>{
  var e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}
  export const  Sanitized =(props:any)=> {
    
    return(<div dangerouslySetInnerHTML={{__html :props.html}} />)
  }

   
  export const renderHTML = (rawHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

  export const stripHTML = (html:string) =>{
    return html.replace( /(<([^>]+)>)/ig, '');
 }
 
export const decodeEntities = (()=>{
  const element = document.createElement('div');

  const decodeHTMLEntities =(str:any) =>{
    if(str && typeof str === 'string') {
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }

    return str;
  }

  return decodeHTMLEntities;
})();
  
(()=>{"use strict";const e=document.querySelectorAll("[data-number]"),t=document.querySelectorAll("[data-operation]"),r=document.querySelector("[data-equals]"),n=document.querySelector("[data-delete]"),a=document.querySelector("[data-all-clear]"),i=document.querySelector("[data-plusminus-sign]"),s=document.querySelector("[data-previous-operand]"),p=document.querySelector("[data-current-operand]"),d=document.querySelector("[data-theme-toggle]"),c=new class{constructor(e,t){this.previousOperandTextElement=e,this.currentOperandTextElement=t,this.clear()}clear(){this.currentOperand="",this.previousOperand="",this.operation=void 0}delete(){this.currentOperand=this.currentOperand.toString().slice(0,-1)}appendNumber(e){"."===e&&this.currentOperand.includes(".")||(this.currentOperand=this.currentOperand.toString()+e.toString())}appendSign(){""!==this.currentOperand&&(this.currentOperand=-1*parseFloat(this.currentOperand))}chooseOperation(e){""!==this.currentOperand&&(""!==this.previousOperand&&this.compute(),this.operation=e,this.previousOperand=this.currentOperand,this.currentOperand="")}compute(){let e;const t=parseFloat(this.previousOperand),r=parseFloat(this.currentOperand);if(!isNaN(t)&&!isNaN(r)){switch(this.operation){case"+":e=t+r;break;case"-":e=t-r;break;case"/":e=t/r;break;case"*":e=t*r;break;default:return}this.currentOperand=e,this.operation=void 0,this.previousOperand=""}}getDisplayNumber(e){const t=e.toString(),r=parseFloat(t.split(".")[0]),n=t.split(".")[1];let a;return a=isNaN(r)?"":r.toLocaleString("en",{maximumFractionDigits:0}),null!=n?`${a}.${n}`:a}updateDisplay(){this.currentOperandTextElement.innerText=this.getDisplayNumber(this.currentOperand),null!=this.operation?this.previousOperandTextElement.innerText=`${this.getDisplayNumber(this.previousOperand)} ${this.operation}`:this.previousOperandTextElement.innerText=""}}(s,p);e.forEach((e=>{e.addEventListener("click",(()=>{c.appendNumber(e.innerText),c.updateDisplay()}))})),t.forEach((e=>{e.addEventListener("click",(()=>{c.chooseOperation(e.innerText),c.updateDisplay()}))})),r.addEventListener("click",(()=>{c.compute(),c.updateDisplay()})),i.addEventListener("click",(()=>{c.appendSign(),c.updateDisplay()})),a.addEventListener("click",(()=>{c.clear(),c.updateDisplay()})),n.addEventListener("click",(()=>{c.delete(),c.updateDisplay()})),d.addEventListener("click",(()=>{document.body.classList.toggle("light-mode")}))})();
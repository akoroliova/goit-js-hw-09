import"./assets/styles-70b5fa0f.js";const e=document.querySelector("form.feedback-form");e.addEventListener("input",n);function n(t){const o=t.target;if(o.tagName==="input"||o.tagName==="textarea"){const a=e.elements.email.value.trim(),s=e.elements.message.value.trim(),l={};l.email=a,l.message=s,localStorage.setItem("feedback-form-state",JSON.stringify(l)),console.log('This is "localStorage" DURING input: '),console.log(localStorage)}}console.log('This is "localStorage" AFTER input: ');console.log(localStorage);e.addEventListener("submit",r);function r(t){t.preventDefault();const o=e.elements.email.value,a=e.elements.message.value;if(o===""||a==="")return alert("All form fields must be filled in");t.target.tagName==="button"&&(e.reset(),console.log('This is "localStorage" after form reset: '),console.log(localStorage),localStorage.clear(),console.log('This is "localStorage" after localStorage clear: '),console.log(localStorage))}
//# sourceMappingURL=commonHelpers2.js.map

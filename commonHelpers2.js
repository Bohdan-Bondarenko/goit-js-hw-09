import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */function s(){return`
      <form class="feedback-form" autocomplete="off">
        <label>
          Email
          <input type="email" name="email" autofocus />
        </label>
        <label>
          Message
          <textarea name="message" rows="8"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    `}const i=document.getElementById("form-container");i.innerHTML=s();const a=document.querySelector(".feedback-form"),m="feedback-form-state";a.addEventListener("input",u);a.addEventListener("submit",f);let l=r();function u(t){let e=r();const{email:o,message:n}=a.elements;e={email:o.value.trim(),message:n.value.trim()},localStorage.setItem(m,JSON.stringify(e))}function r(){return JSON.parse(localStorage.getItem(m))||{}}function c(){const{email:t,message:e}=a.elements;l&&(t.value=l.email||"",e.value=l.message||"")}function f(t){t.preventDefault();const{email:e,message:o}=a.elements;if(e.value.trim()===""||o.value.trim()==="")return alert("Please fill in all the fields!");console.log({email:e.value,message:o.value}),localStorage.removeItem(m),t.currentTarget.reset(),l={}}c();
//# sourceMappingURL=commonHelpers2.js.map

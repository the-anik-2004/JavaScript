const span=document.querySelector("span");
window.addEventListener("keydown",(e)=>{
    span.innerHTML=`
    <table border="1">
    
    <tr>
        <td>Key</td>
        <td>KeyCode</td>
        <td>Code</td>
    </tr>
    <tr>
        <td>${e.key===" "?"space":e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    </table>
    `
})
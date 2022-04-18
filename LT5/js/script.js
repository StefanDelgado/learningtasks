function Diospeech(obj) {
    if (obj.id === 'Dio1') {
        const myElement = document.getElementById('KonoDioDa');
            myElement.style.display = "block";
    } else if (obj.id === 'Dio2'){
         const myElement = document.getElementById('WRY');
            myElement.style.display = "block";       
    } else if (obj.id === 'Dio3'){
         const myElement = document.getElementById('ZaWarudo');
            myElement.style.display = "block";       
    }
}

function hideid(obj) {
    if (obj.id === 'Dio1') {
        const myElement = document.getElementById('KonoDioDa');
            myElement.style.display = "none";
    } else if (obj.id === 'Dio2') {
        const myElement = document.getElementById('WRY');
            myElement.style.display = "none";
    } else if (obj.id === 'Dio3') {
        const myElement = document.getElementById('ZaWarudo');
            myElement.style.display = "none";
    }
}
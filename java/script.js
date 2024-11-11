var sites = [
    '/basic/el-208.html',
    '/basic/ls-100ts.html',
    '/basic/ti-503sv.html',
    '/basic/ti-1450.html',
    '/basic/ti-1706sv.html',
    '/basic/ti-1850.html',
    '/basic/ti-2550.html',
    '/basic/ti-5029.html',
    '/basic/ti-7140.html',
    '/scientific/hp-12c.html',
    '/scientific/hp-20s.html',
    '/scientific/hp-35s.html',
    '/scientific/sharp-el-w516x.html',
    '/scientific/ti-30xa.html',
    '/scientific/ti-30xiib.html',
    '/scientific/ti-30xiis.html',
    '/scientific/ti-36x-pro.html',
    '/scientific/ti-55-ii.html',
    '/scientific/ti-68.html',
    '/scientific/ti-2550.html',
    '/scientific/ti-ba-35.html',
    '/scientific/ti-ba-ii-plus.html',
    '/scientific/ti-ba-ii-professional.html',
    '/scientific/ti-business-analyst-ii.html',
    '/graphing/casio-7400g-plus.html',
    '/graphing/casio-classpad-300+.html',
    '/graphing/ti-73-explorer.html',
    '/graphing/ti-81.html',
    '/graphing/ti-82.html',
    '/graphing/ti-83-parcus.html',
    '/graphing/ti-83-plus.html',
    '/graphing/ti-83-plus-ultraviolet.html',
    '/graphing/ti-84-plus-silver-edition.html',
    '/graphing/ti-84-plus-ce.html',
    '/graphing/ti-85.html',
    '/graphing/ti-86.html',
    '/graphing/ti-89.html',
    '/graphing/ti-89-titanium.html',
    '/graphing/ti-92.html',
    '/graphing/ti-nspire.html',
    '/graphing/ti-nspire-cas.html',
    '/graphing/ti-nspire-cx-cas.html',
    '/graphing/ti-nspire-cx-ii-cas.html',
    '/graphing/ti-voyage-200.html',
    
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}

const images = [
    'img-calc/Casio 7400G PLUS.JPG',
    'img-calc/Casio Classpad 300+.JPG',
    'img-calc/HP 12C.JPG',
    'img-calc/HP 20S.JPG',
    'img-calc/HP 35S.JPG',
    'img-calc/SHARP EL W516X.JPG',
    'img-calc/TI-30Xa.JPG',
    'img-calc/TI-30XIIS Blue.JPG',
    'img-calc/TI-30XIIS Pink.JPG',
    'img-calc/TI-34.JPG',
    'img-calc/TI-68.JPG',
    'img-calc/TI-73 Explorer.JPG',
    'img-calc/TI-81.JPG',
    'img-calc/TI-82 Parcus.JPG',
    'img-calc/TI-82 Stats-fr.JPG',
    'img-calc/TI-82 Updated.JPG',
    'img-calc/TI-82.JPG',
    'img-calc/TI-83 Parcus.JPG',
    'img-calc/TI-83 Plus Ultraviolet.JPG',
    'img-calc/TI-83 Plus.jpeg',
    'img-calc/TI-84 Plus Silver Edition.JPG',
    'img-calc/TI-85.JPG',
    'img-calc/TI-86.JPG',
    'img-calc/TI-89 Titanium.JPG',
    'img-calc/TI-89.JPG',
    'img-calc/TI-92.JPG',
    'img-calc/TI-BA II Plus.JPG',
    'img-calc/TI-BA II Professional.JPG',
    'img-calc/TI-Nspire CAS Clickpad.JPG',
    'img-calc/TI-Nspire CX II CAS.jpeg',
    'img-calc/TI-Voyage 200.JPG'
];

function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement = document.querySelector('#random-image-container img');

    if (imgElement) {
        // Update the src of the existing image
        imgElement.src = images[randomIndex];
    } else {
        // Create a new img element and add it to the container
        const newImgElement = document.createElement('img');
        newImgElement.src = images[randomIndex];
        newImgElement.classList.add('random-calc');
        newImgElement.alt = "Random Calc image";
        document.getElementById('random-image-container').appendChild(newImgElement);
    }
}

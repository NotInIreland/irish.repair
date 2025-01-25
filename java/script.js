var sites = [
    '/scientific/hp-35s.html',
    '/graphing/ti-83-plus.html'
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}

const images = [
    'img-calc/Casio 7400G PLUS.JPG',
    'img-calc/Casio Classpad 300+.JPG',
    'img-calc/HP 12C.JPG',
    'img-calc/Casio fx-350HC.JPG',
    'img-calc/TI-30XIIS Red.JPG',
    'img-calc/TI-30XIIS Pink.JPG',
    'img-calc/TI-35.JPG',
    'img-calc/TI Buisness Analyst-II.JPG',
    'img-calc/HP 20S.JPG',
    'img-calc/TI-1450.JPG',
    'img-calc/TI-30Xa SE.JPG',
    'img-ccalc/Casio fx-300ES.JPG',
    'img-calc/Casio fx-115ES Plus.JPG',
    'img-calc/TI-Nspire CX CAS.JPG',
    'img-calc/TI-85.JPG',
    'img-calc/TI-83 Plus.JPG',
    'img-calc/TI-89.JPG',
    'img-calc/TI-82 Stats-fr.JPG',
    'img-calc/TI-55-II.JPG',
    'img-calc/TI-30 SLR.JPG',
    'img-calc/TI-7140.JPG',
    'img-calc/Sharp EL-506G.JPG',
    'img-calc/TI-84 Plus CE.JPG',
    'img-calc/TI-Nspire CX II CAS.jpeg',
    'img-calc/HP 35S.JPG',
    'img-calc/TI-Voyage 200.JPG',
    'img-calc/TI-92.JPG',
    'img-calc/TI-81.JPG',
    'img-calc/TI-73 Explorer.JPG',
    'img-calc/TI-84 Plus Silver Edition.JPG',
    'img-calc/TI-83 Plus Ultraviolet.JPG',
    'img-calc/TI-Nspire CAS Clickpad.JPG',
    'img-calc/TI-86.JPG',
    'img-calc/TI-82 Parcus.JPG',
    'img-calc/TI-82 Updated.JPG',
    'img-calc/TI-82.JPG',
    'img-calc/TI-83 Parcus.JPG',
    'img-calc/TI-68.JPG',
    'img-calc/TI-30Xa.JPG',
    'img-calc/TI-34.JPG',
    'img-calc/TI-BA II Professional.JPG',
    'img-calc/SHARP EL W516X.JPG',
    'img-calc/TI-89 Titanium.JPG',
    'img-calc/Casio Classpad 300+.JPG',
    'img-calc/Casio 7400G PLUS.JPG',
    'img-calc/TI-Nspire.JPG',
    'img-calc/ATC-139.JPG',
    'img-calc/TI-36X Pro.JPG',
    'img-calc/TI-2550.JPG',
    'img-calc/EL-208.JPG',
    'img-calc/TI-1850.JPG',
    'img-calc/TI-503sv 00.JPG',
    'img-calc/TI-503sv.JPG',
    'img-calc/TI-1706SV.JPG',
    'img-calc/ti-30xiib 97.JPG',
    'img-calc/TI-30XIIB White.JPG',
    'img-calc/TI-30XIIB Lime.JPG',
    'img-calc/TI-32 Explorer Plus.JPG',
    'img-calc/BA-35 89.JPG',
    'img-calc/Clickpad.JPG',
    'img-calc/84 Keypad.JPG',
    'img-calc/fx-300MS.JPG',
    'img-calc/fx-300ES Plus.JPG',
    'img-calc/TI-34 Multiview.JPG',
    'img-calc/TI-BAII Plus 1990.JPG',
    'img-calc/EL-531X.JPG',
    'img-calc/TI-36X Solar.JPG',
    'img-calc/fx-300ES Plus Pink.JPG',
    'img-calc/TI-30XIIS Pinker.JPG',
    'img-calc/fx-260 Solar.JPG',
    'img-calc/TI-30XIIS Green.JPG',
    'img-calc/TI-34 v1.JPG',
    'img-calc/TI-36X Solar 1990.JPG',
    'img-calc/fx-160.JPG',
    'img-calc/TI-30XIIB Blue.JPG',
    'img-calc/missing.png',
    'img-calc/Canon LS-100TS.JPG',
    'img-calc/HP 12C.JPG',
    'img-calc/TI-30XIIS Blue.JPG',
    'img-calc/TI-BA II Plus.JPG',
    'img-calc/TI-30Xa Solar SE.JPG',
    'img-calc/TI-34 II.JPG',
    'img-calc/TI-35X.JPG'
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

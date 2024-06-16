var sites = [
    '/scientific/hp-35s.html',
    '/graphing/ti-83-plus.html',
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}
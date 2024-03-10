const telebeler = [
    {
        fin: "5434AC8",
        name: "Sadiq",
        surname: "Nuriyev",
        isStudent: true
    },
    {
        fin: "4855BC8",
        name: "Kenan",
        surname: "Babayev",
        isStudent: false
    },
    {
        fin: "5315BC8",
        name: "Amin",
        surname: "Quliyev",
        isStudent: true
    }
];

// document.querySelector("tbody").innerText = `<tr>
// <th scope="row">5447BD3</th>
// <td>Tahir</td>
// <td>Esgerov</td>
// <td>Telebe tehsil alir</td>
// </tr>`



// document.querySelector("tbody").innerHtml = `<tr>
// <th scope="row">5447BD3</th>
// <td>Tahir</td>
// <td>Esgerov</td>
// <td>Telebe tehsil alir</td>
// </tr>`


for( let i=0; i<telebeler.length; i++) {
    document.querySelector("tbody").innerHTML += `<tr>
<th scope="row">${telebeler[i].fin}</th>
<td>${telebeler[i].surname}</td>
<td>${telebeler[i].name}</td>
<td>${telebeler[i].isStudent ? "Telebe tehsil alir" : "Telebe mezundur"}</td>
<td> <i class="bi bi-pencil-square"></i> </td>
<td> <i class="bi bi-trash3"></i> </td>
</tr>`
}


let yas = 13
if(yas < 13) {
    alert("Bakalavriat seviyyesi ucun uygun deyil")
}
// else if(yas == 13) {
//     alert( "Buraxilish imtahanina daxil  olsun")
// }
else {
    alert("Bakalavriat seviyyesi ucun uygundur")
}

yas < 13 ?  alert("Bakalavriat seviyyesi ucun uygun deyil") : alert("Bakalavriat seviyyesi ucun uygundur")
const cardDiv = $('.cards-div')
//const pagingUl = $('.pagination')
var num;

$(document).ready(() => {
   fillPageWithCards(1)
   paging(num,1);
})


function fillPageWithCards(pageNum) {    
    $.ajax({
        url: "https://rickandmortyapi.com/api/character/?page=" + pageNum,
        method: "GET",
    }).done(function (response) {
        cardDiv.html("");
        if (response.length == 0) {
            errorElement.text("No results");
            return;
        }
        else {      
        response.results.forEach(function (item) {
            var card = $(`<div class='col-3 mt-5' >
                            <div class= 'card card-show'>
                                <img src='${item.image}'>
                                <div class='card-body'>
                                    <h5 class='card-title' onclick="showCharacterInfo('${item.id}')" > ${item.name}</h5>
                                    <button class="likeBtn">Like</button>
                                </div>
                            </div>
                        </div>`);
            cardDiv.append(card);            
        });  
        num = response.info.pages;   
    }
    }).fail (function () {
        errorElement.text("Network error")
        errorElement.toggle();
    });
}

//==== pagination section ========

const pagingUl = document.querySelector(".pagination ul");
let pagingLi;

const paging = (totalNumOfPages, currentPage) => {
    fillPageWithCards(currentPage);
    pagingLi = "";
    let beforeCurrentPage = currentPage - 1;
    let afterCurrentPage = currentPage + 1;
    if (beforeCurrentPage <= 0) {
        beforeCurrentPage = 1;
    }
    else if (afterCurrentPage >= totalNumOfPages) {
        afterCurrentPage <= totalNumOfPages;
    }

    pagingLi += `<li class="prev" onclick="paging(${totalNumOfPages}, ${currentPage - 1})">Prev</li>`

    for (let pageNumber = beforeCurrentPage; pageNumber <= afterCurrentPage; pageNumber++) {
        if (currentPage === pageNumber) {
            activeLi = "active"
        }
        else {
            activeLi = "";
        }
        pagingLi += `<li class="number ${activeLi}" onclick="paging(${totalNumOfPages}, ${pageNumber})">${pageNumber}</li>`
    }

    pagingLi += `<li class="next" onclick="paging(${totalNumOfPages}, ${currentPage + 1})">Next</li>`;

    pagingUl.innerHTML = pagingLi;
}

// character details

const url1 = "https://rickandmortyapi.com/api/character/"

const showCharacterInfo = (id) => {
    $.ajax({
        url:`${url1}${id}`,
        method:"GET",
    }).done((response) => {
        $(".pagination").attr("class", "disabled");
        cardDiv.html("");

        let info = `
        <div class="backButton">
            <a href="http://127.0.0.1:5500/Web_Application/rickAndMorty/index.html">Back to List</a>
            <br><br>
        </div>
        <div class="col-4">
            <img src="${response.image}">
        </div>
        <div class="col-6 imgOpacity">
            <h2>Name: ${response.name}</h2>
            <h2>Status:${response.status} </h2>
            <h2>Species:${response.species} </h2>
            <h2>Type: ${response.type}</h2>
            <h2>Gender:${response.gender} </h2>
            <h2>Origin:${response.origin.name} </h2>
            <h2>Location: ${response.location.name}</h2>
            <h2>Episode: </h2>
            <h2>${response.url} </h2>
        </div>`;
        cardDiv.append(info);
    }).fail(() => {
        alert('Network error');
    });
};


// function goBack() {
//   window.history.back();
// };

/* <button onclick="goBack()">Go Back</button> */



// let likeBtn = document.querySelector(".likeBtn");
// console.log(likeBtn);


// likeBtn.onclick = function () {
//     likeBtn.classList.toggle("likedBtn");
// };

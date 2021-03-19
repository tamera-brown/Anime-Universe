
const getMangas=function(){
    $.get(
        "https://api.jikan.moe/v3/search/manga?order_by=title&limit=16",
        function(data, testState,jqXHR ){

            console.log(data);
            console.log(testState);
            console.log(jqXHR);

            let allbodyTags=document.getElementsByTagName('body');
            let bodyTag= allbodyTags[0];
            let mangaDivTag=document.createElement('div');
            mangaDivTag.className="mangacard";
            bodyTag.appendChild(mangaDivTag);
           

            for(let i=0;i<data.results.length;i++){
                let card= document.createElement('div');
                card.className="flip-card";
                mangaDivTag.appendChild(card);
                let inner=document.createElement('div');
                inner.className="flip-card-inner";
                card.appendChild(inner);
                let front=document.createElement('div');
                front.className="flip-card-front";
                inner.appendChild(front);

               let mangaImg=document.createElement('img');
                mangaImg.id="Manga " + i + " image";
                mangaImg.className="card-img";
                mangaImg.setAttribute("src",`${data.results[i].image_url}`);
                mangaImg.setAttribute('alt','Manga');
                mangaImg.style.width="300px";
                mangaImg.style.height="400px";
                front.appendChild(mangaImg);

                let back=document.createElement('flip-card-back');
                inner.appendChild(back);

                let mangaHeader=document.createElement('h4');
                mangaHeader.id="Manga "+ i + " header";
                mangaHeader.className="card-title";
                mangaHeader.innerHTML=`${data.results[i].title}`;
                back.appendChild(mangaHeader);
                
                
                let mangaDesc=document.createElement('article');
                mangaDesc.id="Manga " + i + " description";
                mangaDesc.className="card-text";
                mangaDesc.innerHTML=`${data.results[i].synopsis}`;
                back.appendChild(mangaDesc);
                back.appendChild(document.createElement('br'));

                let mangaChapters=document.createElement('p');
                mangaChapters.id="Manga " + i + " chapters";
                mangaChapters.className="card-text";
                mangaChapters.innerHTML="Chapters: " + `${data.results[i].chapters}`;
                back.appendChild(mangaChapters);

                let mangaVolumes=document.createElement('p');
                mangaVolumes.id="Manga " + i + " volumes";
                mangaVolumes.className="card-text";
                mangaVolumes.innerHTML="Volumes: " + `${data.results[i].volumes}`;
                back.appendChild(mangaVolumes);

                let mangaScore=document.createElement('p');
                mangaScore.id="Manga " + i + " score";
                mangaScore.className="card-text";
                mangaScore.innerHTML="Score: " + `${data.results[i].score}`;
                back.appendChild(mangaScore);

 
            
            }
            
            
           
        }
    );
   
    }

const SearchManga=function(){

const Genre=document.getElementById('Genre').value;


    $.get(`https://api.jikan.moe/v3/search/manga?genre=${Genre}limit=16`,
    function(data,testState,jqXHR){

           console.log(data);
           console.log(testState);
           console.log(jqXHR);
    
        for(let i=0;i<data.results.length;i++){
          let animeHeader=document.getElementById('Manga ' + i + ' header');
    
        animeHeader.innerHTML=`${data.results[i].title}`;
        let animeImg=document.getElementById('Manga ' + i + ' image');
        animeImg.setAttribute("src",`${data.results[i].image_url}`);
        let animeDesc=document.getElementById('Manga ' + i + ' description');
        animeDesc.innerHTML=`${data.results[i].synopsis}`;
        let  mangaChapters=document.getElementById("Manga " + i + " chapters");
        mangaChapters.innerHTML="Chapters: " + `${data.results[i].chapters}`;
       let mangaVolumes=document.getElementById("Manga " + i + " volumes");
        mangaVolumes.innerHTML="Volumes: " + `${data.results[i].volumes}`;
        let mangaScore=document.getElementById("Manga " + i + " score");
        mangaScore.innerHTML="Score: " + `${data.results[i].score}`;


        }
            
    }
    )

    
}
getMangas();
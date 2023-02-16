    const kopisUrl = "../kopis-trans.json";
    const searchTab=document.querySelector('.search');
    const resultImg=document.querySelectorAll('.search-result .card img');
    const resultDate=document.querySelectorAll('.search-result .date');
    const resultTitle=document.querySelectorAll('.search-result .title');
    console.log(resultTitle);
    let kopisData;

    get_data();
        async function get_data() {
        const response = await fetch(kopisUrl);
            kopisData = await response.json();
            mainSearch(kopisData);
            return kopisData;
        }
    
    function mainSearch(kopisData){
        kopisData.total.forEach((g)=>{
            let dataGenre = g.genre;

        searchTab.addEventListener('click',function(e){
            let searchGenre = e.target.getAttribute('data-genre');

            if(searchGenre==dataGenre){
                for(k=0;k<6;k++){
                    console.log(g.sub[k].title);
                    resultImg[k].setAttribute('src',g.sub[k].img)
                    resultDate[k].innerText = `${g.sub[k].std}`
                    resultTitle[k].innerText = `${g.sub[k].title}`

                }
            };

      

        });   

    })
};


        




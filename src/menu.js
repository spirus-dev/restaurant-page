export default function RenderMenu(e){
    const content=document.querySelector('#content');
    const main=document.querySelector('.main');
    content.removeChild(main);

    const newMain=document.createElement('div');
    newMain.classList.add('main');

    const heading=document.createElement('div');
    heading.classList.add('heading');
    heading.innerHTML='Menu';
    newMain.appendChild(heading);

    const menuGrid=document.createElement('div');
    menuGrid.classList.add('menuGrid');

    const menuCardData=['Veg Momos','Paneer Momos','Cheese Momos','Kurkure Momos', 'Peri Peri Momos','Tandoori Momos', 'Gravy Momos', 'Momos House Special'];
    
    for(let i=0;i<8;i++){
        const menuCard=document.createElement('div');
        menuCard.classList.add('menuCard');
        
        const menuCardImage=document.createElement('div');
        menuCardImage.classList.add('menuCardImage');
        
        const img=document.createElement('img');
        img.src='./assets/momos.png';

        menuCardImage.appendChild(img);
        menuCard.appendChild(menuCardImage);

        const menuCardName=document.createElement('div');
        menuCardName.classList.add('menuCardName');
        menuCardName.innerHTML=menuCardData[i];
        menuCard.appendChild(menuCardName)

        menuGrid.appendChild(menuCard);
    }
    newMain.appendChild(menuGrid);
    content.appendChild(newMain);
};
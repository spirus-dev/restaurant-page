export default function initialPageLoad(){
    const content=document.querySelector('#content');
    
    const nav=document.createElement('div');
    nav.classList.add('nav');
    
    const logo=document.createElement('div');
    logo.classList.add('logo');
    logo.innerHTML='Momos House';
    nav.appendChild(logo);
    
    const navItems=document.createElement('ul');
    navItems.classList.add('navItems');
    const listItems=['About','Menu','Contact'];
    for(let i=0;i<3;i++){
        const navItem=document.createElement('li');
        navItem.innerHTML=listItems[i];
        navItems.appendChild(navItem);
    }
    nav.appendChild(navItems);
    content.appendChild(nav);

    const main=document.createElement('div');
    main.classList.add('main');

    const heading=document.createElement('div');
    heading.classList.add('heading');
    heading.innerHTML='About';
    main.appendChild(heading);

    const photo=document.createElement('div');
    photo.classList.add('photo');

    const img=document.createElement('img');
    img.src='../assets/momos.png';
    photo.appendChild(img);
    main.appendChild(photo);

    const info=document.createElement('div');
    info.classList.add('info');
    info.innerHTML='Momos House is a cozy little shop that specializes in serving mouth-watering momos, a popular dumpling dish that originates from Nepal and Tibet. Located in a bustling neighborhood, the aroma of steaming momos can be smelt from a distance, luring passersby to come in and try the delicious food.<br><br>The momos are made fresh daily using high-quality ingredients and authentic spices to ensure that each bite is bursting with flavor. Customers can choose from different levels of spiciness, from mild to extra spicy, depending on their preference.<br><br>Overall, Momos House is a go-to destination for momo lovers looking for a tasty and authentic experience. Whether you are grabbing a quick lunch or meeting friends for a snack, Momos House promises a memorable dining experience that will leave you craving for more.'

    main.appendChild(info);
    content.appendChild(main);
};

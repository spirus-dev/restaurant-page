export default function RenderContact(e){
    const content=document.querySelector('#content');
    const main=document.querySelector('.main');
    content.removeChild(main);

    const newMain=document.createElement('div');
    newMain.classList.add('main');

    const heading=document.createElement('div');
    heading.classList.add('heading');
    heading.innerHTML='Contact';
    newMain.appendChild(heading);

    const contactData=[
        {
            asset:'./assets/map-marker.svg',
            content:'Near Takhatmal English High School, In front of Srijan Hospital, Sai Nagar, Amravati, 444607'
        },
        {
            asset:'./assets/phone.svg',
            content:'+91 1234567890'
        },
        {
            asset:'./assets/email.svg',
            content:'momoshouse@gmail.com'
        },
        {
            asset:'./assets/web.svg',
            content:'www.momoshouse.com'
        }
    ]
    const contactCard=document.createElement('div');
    contactCard.classList.add('contactCard');;
    contactData.forEach(element=>{
        const row=document.createElement('div')
        row.classList.add('contactRow');

        const rowIcon=document.createElement('img');
        rowIcon.classList.add('rowIcon');
        rowIcon.src=element.asset;
        row.appendChild(rowIcon);

        const rowContent=document.createElement('div');
        rowContent.classList.add('rowContent');
        rowContent.innerHTML=element.content;
        row.appendChild(rowContent);

        contactCard.appendChild(row);
    });
    
    

    newMain.appendChild(contactCard);

    content.appendChild(newMain);
}
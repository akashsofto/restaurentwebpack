export const appendContact = () => {
    const paraEl = document.createElement('p');
    const titleBoxEl = document.createElement('h3');
    const contactBoxContainerEl = document.createElement('div');
    const titleContactEl = document.createElement('h2');
    const titleContaierEl = document.createElement('div');
    const gridContactContainer = document.createElement('div');

    paraEl.innerHTML = 'Monday - Sunday <br> 10am - 11pm <br> Mohali, Softobiz <br> Akash.kumar@softobiz.com'
    titleBoxEl.innerHTML = 'OUR CONTACT:';
    contactBoxContainerEl.classList = 'contact-cell-info';
    titleContactEl.innerHTML = 'It\'s tea <br> time';
    titleContaierEl.classList = 'contact-cell-title';
    gridContactContainer.classList = 'grid-container-contact'

    contactBoxContainerEl.appendChild(titleBoxEl);
    contactBoxContainerEl.appendChild(paraEl);
    titleContaierEl.appendChild(titleContactEl);
    gridContactContainer.appendChild(titleContaierEl);
    gridContactContainer.appendChild(contactBoxContainerEl);
   

    return gridContactContainer;

}




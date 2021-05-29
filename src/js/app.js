export default class App {

    constructor(input, form, result, url){
        this.input = input;
        this.form = form;
        this.result = result;
        this.url = url;
    }

    async ajax(){
        try{
            const response = await fetch(this.url + this.input.value);
            
            if(response.ok){

                let responseJson = await response.json();
                
                this.createCard(responseJson);

            } 
        } catch(error){
            //console.log(error)
            const msgError = document.createElement("p");
            msgError.classList.add("error");
            msgError.innerHTML = `Dsl <i class="far fa-frown"></i> , une erreur s'est produite <br>${error}`;
            this.form.appendChild(msgError);
            setTimeout(()=>{
                msgError.remove();
            }, 4500);

        }
    }

    createCard(data){
        
        const defaultVar = "NC";
        
        const card = `
        <div id="card">
            <picture>
                <source srcset="${data.avatar_url}">
                <img src="${data.avatar_url}" alt=${data.name}>
            </picture>
            <hr>
            <h2>${data.name ? data.name : defaultVar}</h2>
            <p><span class="bold">Followers</span> : <span id="follower">${data.followers ? data.followers : defaultVar}</span></p>
            <p><span class="bold">Repos</span> : <span id="repository">${data.public_repos ? data.public_repos : defaultVar}</span></p>
            <p><span id="job">${data.bio ? data.bio : defaultVar}</span></p>
            <a href="https://github.com/${data.login}" title="Visiter le profil de ${data.name}" target="_blank" class="bold">Aller sur le profil</a>
        </div>
        `;

        this.result.innerHTML = card;
    }
  
}
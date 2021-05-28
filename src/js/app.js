export default class App {

    constructor(input, form, source, img, name, follower, repo, job, button, url){
        this.input = input;
        this.form = form;
        this.source = source;
        this.img = img;
        this.name = name;
        this.follower = follower;
        this.repo = repo;
        this.job = job;
        this.button = button;
        this.url = url;
    }

    async ajax(){
        try{
            const response = await fetch(this.url + this.input.value);
            if(response.ok){
                let responseJson = await response.json();
                
                this.name.innerHTML = responseJson.name;
                this.source.srcset = responseJson.avatar_url;
                this.img.src = responseJson.avatar_url;
                this.img.setAttribute("alt", responseJson.name);
                this.follower.innerHTML = responseJson.followers;
                this.repo.innerHTML = responseJson.public_repos;
                this.job.innerHTML = responseJson.bio;
                
                this.button.disabled = false;

                this.button.addEventListener("click", () => {
                    window.location.href=`https://github.com/${responseJson.login}`;
                })
            } 
        } catch(error){
            //console.log(error)
            const msgError = document.createElement("p");
            msgError.classList.add("error");
            msgError.innerHTML = `Dsl <i class="far fa-frown"></i> , une erreur s'est produite <br>${error}`;
            this.form.appendChild(msgError);

        }
    }
  
}
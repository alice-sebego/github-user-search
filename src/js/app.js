export default class App {

    constructor(input, source, img, name, follower, repo, job, url){
        this.input = input;
        this.source = source;
        this.img = img;
        this.name = name;
        this.follower = follower;
        this.repo = repo;
        this.job = job;
        this.url = url;
    }

    get user(){
        return this.input.value;
    }

    async ajax(){
        try{
            const response = await fetch(this.url + this.user);
            if(response.ok){
                let responseJson = response.json();
                this.name.innerHTML = responseJson.name;
                this.source.srcset = responseJson.avatar_url;
                this.img.src = responseJson.avatar_url;
                this.img.setAttribute("alt", responseJson.name);
                this.follower.innerHTML = responseJson.followers;
                this.repo.innerHTML = responseJson.public_repos;
                this.job.innerHTML = responseJson.bio;
            } 
        } catch(error){
            console.log(error)

        }
    }

   
}
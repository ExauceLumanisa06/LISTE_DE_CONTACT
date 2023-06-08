let link 
let image
const loadfile = function name(event) {
    image=document.getElementById('output');
    image.src=URL.createObjectURL(event.target.files[0]);  
    image.style.display="block"
    link=URL.createObjectURL(event.target.files[0]);
};

const form = document.querySelector("form");
form.addEventListener("submit", function name(event) {

    event.preventDefault()
        let prenom = document.querySelector("#prenom").value;
        let nom = document.querySelector("#nom").value;
        let groupe = document.querySelector("#group").value;
        let bio = document.querySelector("#bio").value;
        if ((prenom.length<= 3)||(nom.length<= 3)) {
             alert("Le caractere doit depasser 3 caracteres")
        }
        else{
            const contains= document.querySelector("#contains")
            contains.classList.add("positionnement")
            const second_contains=document.createElement("div")
            second_contains.classList.add("positionnement_second")

            //const div_contact=document.createElement("div")
           const div_identite= document.createElement("div")
        div_identite.classList.add("style_div_identite")
         const div_remove = document.createElement("div")

            const parent_imqge = document.createElement("div")
            parent_imqge.classList.add("parent-output")
            const image_contact = document.createElement("img")
            image_contact.classList.add("output")
            image_contact.src=link
            parent_imqge.appendChild(image_contact) 
           // div_contact.appendChild(parent_imqge)

            const div_nomprenom =document.createElement("div")
            div_nomprenom.classList.add("style_nom_prenom")
            let prenom_contact = document.createElement("div")
            prenom_contact.textContent=prenom
            div_nomprenom.appendChild(prenom_contact)
            let nom_contact = document.createElement("div")
            nom_contact.classList.add("style_nom_contact")
            nom_contact.textContent=nom
            div_nomprenom.appendChild(nom_contact)
            div_identite.appendChild(div_nomprenom)


            let p_bio = document.createElement("p")
            p_bio.textContent=bio
            div_identite.appendChild(p_bio)


            const image_remove= document.createElement("img")
            image_remove.classList.add("style_croix_remove")
            image_remove.src="croix.png"
            div_remove.appendChild(image_remove)


            
            // attachement 

            second_contains.appendChild(parent_imqge)
            second_contains.appendChild(div_identite)
            second_contains.appendChild(div_remove)

            // attachement au dom

            contains.appendChild(second_contains)

            // delete contact
            image_remove.addEventListener("click", ()=>{
                second_contains.remove()
           
            })


        }






    
})
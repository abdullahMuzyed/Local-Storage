



let lis = document.querySelectorAll("ul li");
let experiment = document.querySelector('.experiment');
lis.forEach((li)=>{
    li.addEventListener('click',(e)=>{
       // console.log(e.target.dataset.color); // or:li.dataset.color 

        // ******* Note : here => (li == e.target == e.currentTarget) ******* //

       //Remove Active class from all lis
        lis.forEach((li)=>{
            li.classList.remove('active');
        });
       // Add active class to current element
       e.currentTarget.classList.add('active'); // i.classList.add('active')
       // add current color to local storage 
       window.localStorage.setItem('color',e.currentTarget.dataset.color) ;

       //change div background color 
       experiment.style.backgroundColor = e.currentTarget.dataset.color; // => window.localStorage.getItem('color')

    });
});

if(window.localStorage.getItem('color')){ 

    // If there is a color in localStorage
    experiment.style.backgroundColor = window.localStorage.getItem('color');
    //Remove Active class from all lis
    lis.forEach((li)=>{
        li.classList.remove('active');
    });

    //add active class to curent color
    document.querySelector(`[data-color="${window.localStorage.getItem('color')}"]`).classList.add('active');
} 

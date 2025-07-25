var arr =[
     {
   image:"https://images.unsplash.com/photo-1751320805634-87f40045bced?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    song:"monica",
    details: "cooli"

    },
     {
   image:"https://images.unsplash.com/photo-1650977105715-66c63b5996c2?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    song:" kuberaa",
    details: "kuberaa"

    },
     {
   image:"https://images.unsplash.com/photo-1749308887577-bde830c7dd4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    song:"war",
    details: "war2"

    },
     {
   image:"https://images.unsplash.com/photo-1750755072927-4221f5018635?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    song:"hridayam lopala",
    details: "album"

    },
     {
   image:"https://images.unsplash.com/photo-1749587452511-d615311b854d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMXw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
    song:"new",
    details: "album"

    },
    {
   image:"https://images.unsplash.com/photo-1751320805634-87f40045bced?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    song:"coolie",
    details: "album"

    },
     {
   image:"https://images.unsplash.com/photo-1650977105715-66c63b5996c2?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    song:"rrr",
    details: "album"

    },
     {
   image:"https://images.unsplash.com/photo-1749308887577-bde830c7dd4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    song:"war",
    details: "album"

    },
     {
   image:"https://images.unsplash.com/photo-1750755072927-4221f5018635?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    song:"monica ",
    details: "album"

    },
     {
   image:"https://images.unsplash.com/photo-1749587452511-d615311b854d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMXw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
    song:"new",
    details: "album"

    }
  
]

var sum=``
arr.forEach(function(elm){
    sum=sum+` 
             <div class="row-card">
                <div id="image-id">
                    <div class="imgg">
                        <img src=" ${elm.image}" alt="image">
                    </div>
                     <h6>${elm.song}</h6>
                     <p>${elm.details} </p>
                </div>
            </div>
        
    
    `

  })

    var body=document.querySelector('.row')
    body.innerHTML=sum


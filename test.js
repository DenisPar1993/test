

const data = import('./test.json',{assert:{type:'json'}})
const cardItem= document.querySelector('.card-wrap')
console.log(cardItem)
data.then(res=>{
    res.default.forEach(item=>{
        let pat=document.createElement('div')
        pat.classList.add('card')
        pat.innerHTML=`
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div >${item.breed}</div>  
        `
        cardItem.appendChild(pat)
        console.log(pat)
    })
})
function main(){
    const boxEl = document.querySelector('.box')
    boxEl.addEventListener('click', function(){
        const gifts = ['coal', 'that semi-colon you forgot', 'no errors on the first try'];
        const giftSelector = Math.floor(Math.random()*gifts.length);
        const randomGift = gifts[giftSelector];
        // console.log(giftSelector);
        alert(`It's ${randomGift}. Merry Christmas ya filthy animal!`);
    })
    console.log(boxEl)
}
main();
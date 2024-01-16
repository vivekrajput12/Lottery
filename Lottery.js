
var attempt = 0;
const lottery = []
function run(){
    if(attempt == 0){
const entered  = parseInt(document.getElementById('input').value)
        document.querySelector('.btn1').innerText = 'Try Again';
        
        lottery.push(entered)
        // function generateRandomNumbers() {
        
            for (let i = 0; i < 9; i++) {
                const randomNumber = Math.floor(Math.random() * 100); 
                lottery.push(randomNumber);
            }
        
            console.log("Generated Random Numbers:", lottery);
            for (let i = lottery.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [lottery[i], lottery[j]] = [lottery[j], lottery[i]];
            }
        
            console.log("Shuffled Lottery Numbers:", lottery);
        // }
        if(lottery[attempt]==entered){
            alert('you won')
        }else{
            alert('you lose')
        }
        attempt++;
    }else{
        if(attempt>9){
            alert('game over');
            attempt = 0;
            const erase = document.getElementById('input');
            erase.value='';
            document.querySelector('.btn1').innerText = 'Play Again';

            return;
        }
    const entered  = parseInt(document.getElementById('input').value)

        if(lottery[attempt]==entered){
            alert('you won')
        }else{
            alert('you lose')
        }
        attempt++;
    }
}
// generateRandomNumbers();
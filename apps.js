window.addEventListener('DOMContentLoaded', function () {

    let dicebtn = document.getElementById('dicebtn');
    let rollbtn = document.getElementById('rollbtn');
    let sumbtn = document.getElementById('sumbtn');

    const container = document.createElement('main');
    container.className = 'container';
    let diceArr = [];

    document.body.appendChild(container);

    let counter = 1;
    let result = 0;

    class Die {
        constructor(value) {
            this.value = value;
            this.div = document.createElement('div');
            //this.value = document.createTextNode(counter);
            this.div.className = 'square';
            this.div.id = counter;
            this.roll();
            this.div.addEventListener("dblclick", () => {
                container.removeChild(this.div);
                let index = diceArr.indexOf(this)
                diceArr.splice(index, 1)
            });
            container.appendChild(this.div);
            console.log(this);
            this.div.style.display = "flex";
            this.div.style.justifyContent = 'center';
            this.div.style.alignItems = 'center'
            this.div.style.color = 'black';
            diceArr.push(this);
        }

        roll() {
            let randomNum = (Math.floor(Math.random() * 6) + 1);
            this.value = randomNum
            this.div.innerHTML = this.value
        }
    }


    dicebtn.addEventListener('click', function () {
        new Die()
        counter++;
    })

    rollbtn.addEventListener('click', () => {
        diceArr.forEach(die => {
            die.roll();
        });
    })

    sumbtn.addEventListener('click', () => {
        let total = 0;
        for (let i = 0; i < diceArr.length; i++) {
            total += diceArr[i].value;
        }
        alert(total);
    });

});

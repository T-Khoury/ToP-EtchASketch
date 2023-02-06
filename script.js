
        
        const grid = document.querySelector('#grid');

        function createGrid(width) {

            grid.style.gridTemplateColumns = `repeat(${width}, auto)`;


            for (let i = 0; i < (width **2); i++) {
                const div = document.createElement('div');
                div.classList.add('cell')
                grid.appendChild(div);
            }
        }


        function randomColor() {
            let rValue = Math.floor(Math.random() * 256);
            let gValue = Math.floor(Math.random() * 256);
            let bValue = Math.floor(Math.random() * 256);
            this.style.backgroundColor = `rgb(${rValue},${gValue},${bValue})`;
        }

        function blackColor() {
            this.style.backgroundColor = 'black';
        }

        
        function paintColor() {
            const cell = document.querySelectorAll('.cell');
            cell.forEach((cell) => {
                cell.addEventListener('mouseenter', randomColor)
            })
        }
        
        function paintBlack() {
            const cell = document.querySelectorAll('.cell');
            cell.forEach((cell) => {
                cell.addEventListener('mouseenter', blackColor);
            })
        }


        function eraseGrid () {
            const cell = document.querySelectorAll('.cell');
            cell.forEach((cell) => {
                grid.removeChild(cell);
            })
        }

        function resetGrid () {
            eraseGrid();
            createGrid(slider.value);
        }



        const slider = document.querySelector('#slider');
        slider.addEventListener('input', () => {
            eraseGrid();
            createGrid(slider.value);
            paintBlack();
        });

        const randomColorButton = document.querySelector('#random');
        randomColorButton.addEventListener('click', () => {
            resetGrid();
            paintColor();
        });

        const blackButton = document.querySelector('#black');
        blackButton.addEventListener('click', () => {
            resetGrid();
            paintBlack();
        });

        const shadeButton = document.querySelector('#shade');
        shade.addEventListener('click', () => {
            resetGrid();
            const cell = document.querySelectorAll('.cell');
            cell.forEach((cell) => {
                cell.addEventListener('mouseenter', () => {
                    if (!(cell.getAttribute('id'))) {
                        cell.setAttribute('id', '100')
                    }
                    else {
                        let blackValue = parseInt(cell.id);
                        blackValue -= 10;
                        cell.setAttribute('id', `${blackValue}`);
                        if (blackValue >= 0) {
                            cell.style.backgroundColor = `hsl(0, 0%, ${blackValue}%)`;
                        };
                    }
                })
            })

        })
        

        createGrid(16);
        paintBlack();
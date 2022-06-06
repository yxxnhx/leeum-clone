const gnb = document.querySelector('.gnb');
const mainList = document.querySelectorAll('.dep1');
const main = document.querySelectorAll('.dep1>li');
const subList = document.querySelectorAll('.dep2');
const sub = document.querySelectorAll('.dep2 li');

main.forEach((ele) => {
    ele.addEventListener('click', e => {
        console.log(e.target)
        let isOn = e.target.classList.contains('on');
        if(isOn) {
            console.log(e.target)
            e.target.classList.remove('on');    
            e.target.childNodes.forEach((ele) => {
                if(ele.className === 'dep2') {
                    ele.style.display = 'none';
                }
            })    
        } else {
            main.forEach((ele) => {
                ele.classList.remove('on');
            })
            // sub.classList.add('on');
            subList.forEach((ele) => {
                ele.classList.remove('on');
            })
            let index = e.target.dataset.index;
            subList[index].classList.add('on');
            // console.log(index)
            // subList.classList.add('on');
    
            // // sub.forEach((ele) => {
            // //     ele.style.display = 'none';
            // // })
    
            // // let index = e.target.dataset.index;
            // // console.log(index)
            // .classList.add('on');
        }
    })
})


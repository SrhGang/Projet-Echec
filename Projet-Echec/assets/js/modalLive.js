const  ModalViews = document.querySelectorAll('.descp-modal'),
    ModalBtns = document.querySelectorAll('.btn-read'),
    ModalCloses = document.querySelectorAll('.close-card');
            
    let Info = function (modalClick) {
        ModalViews[modalClick].classList.add('show-info');
    }
            
    ModalBtns.forEach((modalBtn, i) => {
        modalBtn.addEventListener('click', () =>{
            Info(i)
        })
    })
            
    ModalCloses.forEach((modalClose, i) => {
        modalClose.addEventListener('click', () =>{
            ModalViews.forEach((modalView) =>{
                modalView.classList.remove('show-info');
            })
        })
    })
    
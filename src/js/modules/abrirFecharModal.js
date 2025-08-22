
export default function abrirModal(){
    const modal = document.getElementById('janela-modal')
    const btnHeader = document.querySelector('.btn-header');

    btnHeader.addEventListener('click', abrirModal =>{
        modal.classList.add('abrir')  

    });
    

   /*  fechar quando clicar fora e no botão x  */ 
        modal.addEventListener('click', (e) =>{
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
            modal.classList.remove('abrir')  
            
             
        }
    })
} 




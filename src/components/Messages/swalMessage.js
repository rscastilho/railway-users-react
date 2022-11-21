
import Swal from 'sweetalert2';

const swalMessage = (title, text, icon)=>{
    Swal.fire({
                   title: text,
                   text: title,
                   icon: icon,
                   confirmButtonColor:'orange',
                   confirmButtonText:' According! ' , 
                   imageUrl: 'https://unsplash.it/400/200',  
                   imageWidth: 400,
                   imageHeight: 200,
                   imageAlt: 'Custom image',
                //    showCancelButton: true,
                //    showDenyButton: true,
                //    denyButtonText: 'Cancelar',
                //    buttonsStyling:true, 
                   footer: '*Imagem carregando como testes apenas para didática'
               })

}

export default swalMessage


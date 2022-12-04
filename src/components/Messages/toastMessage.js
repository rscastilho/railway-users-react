import { Toast } from './ToastFormat';

const toatMessage = (icone, text) => {
    Toast.fire({
        icon: icone,
        text: text,
    });
};

export default toatMessage;

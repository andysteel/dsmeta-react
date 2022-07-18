import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import { toast } from 'react-toastify';
import './styles.css';

type ButtonProps = {
    id: number;
};

const handleClick = (id: number) => {
    axios.get(`${BASE_URL}/sales/${id}/notification`)
    .then(response => toast.info('Solicitação de SMS enviada com sucesso.'))
}

const NotificationButton = ({ id }: ButtonProps) => {
    return (
        <div 
            className="dsmeta-red-btn"
            onClick={() => handleClick(id)}
        >
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;
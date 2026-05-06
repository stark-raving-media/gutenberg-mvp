import { useNavigate } from 'react-router-dom'
import { APIKeyForm } from '../utils.jsx'

export function Home()
{
    //const { apiKey } = useContext(APIKeyContext);
    const navigate = useNavigate();

    // function handleSubmit()
    // {
    //     navigate('/settings');
    // }

    // TODO: Catch invalid key
    return (
        <div>
            <h1>Gutenberg MVP</h1>
            <APIKeyForm onSubmit={() => navigate('/settings')} />
        </div>
    );
}
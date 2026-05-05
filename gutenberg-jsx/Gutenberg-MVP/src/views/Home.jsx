//import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
//import { APIKeyContext } from '../context.js'
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
            {/* {!apiKey
                ? <APIKeyForm onSubmit={handleSubmit} />
                : <p>Key connected. <button onClick={() => navigate('/settings')}>Continue</button></p>
            } */}
            <APIKeyForm onSubmit={() => navigate('/settings')} />
        </div>
    );
}
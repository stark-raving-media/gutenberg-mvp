import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { APIKeyForm } from '../utils.jsx'
import { APIKeyContext } from '../context.js';

export function Home()
{
    const { apiKey } = useContext(APIKeyContext);
    const navigate = useNavigate();

    // Random tagline logic
    const taglines = [
        "Literary characters. Impossible missions. Someone's going to break canon.",
        "The books are alive. So is the danger.",
        "History's greatest characters. History's worst situations.",
        "Send Beowulf. Send Scheherazade. See what happens.",
        "The library is on fire. Figuratively. Mostly.",
        "Public domain heroes. Private agendas."
    ];

    const [tagline] = useState(() => taglines[Math.floor(Math.random() * taglines.length)]);

    const intro = "The Gutenberg Engine is a tactical narrative game powered by AI. You command a team of literary characters from public domain classics — Jean Valjean, Scheherazade, Sherlock Holmes — and send them on missions inside other books.";

    const intro2 = "Each round, you choose how your team acts. The AI narrates what happens. The story is different every time.";

    const howToPlay = [
        "Enter your Anthropic API key to begin",
        "Choose a Scenario and pick your team in Settings",
        "Each round, select one of three actions — or write your own",
        "Complete your objectives before the situation collapses"
    ];

    const credits = "Concept by Glen Helton & Claire Hassig · Coding by Claire Hassig · Story Powered by Anthropic Claude";

    // TODO: Catch invalid key
    // return (
    //     <div>
    //         <h1>Gutenberg MVP</h1>
    //         <div className="home-tagline">{tagline}</div>
    //         <APIKeyForm onSubmit={() => navigate('/settings')} />
    //     </div>
    // );
    return (
        <div className="home">
            <h1 className="home-title">The Gutenberg Engine</h1>
            <p className="home-tagline">{tagline}</p>
            <div className="home-intro">
                <p>{intro}</p>
                <br/ >
                <p>{intro2}</p>
            </div>
            <div className="home-how-to">
                <h2>How to Play</h2>
                <ol>
                    {howToPlay.map((step, index) =>
                        <li key={index}>{step}</li>
                    )}
                </ol>
            </div>
            <div className="home-api">
                {!apiKey
                    ? <APIKeyForm onSubmit={() => navigate('/settings')} />
                    : <button className="start-btn" onClick={() => navigate('/settings')}>Continue to Settings</button>
                }
            </div>
            <p className="home-credits">{credits}</p>
        </div>
    );
}
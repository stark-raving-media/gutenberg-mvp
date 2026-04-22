import { Scenario } from '../scenario.js';
import { Situation } from '../situation.js';
import { startingActors } from './actors';

// Test Scenarios
export const testScenarios = 
{
    theYellowBeetle: new Scenario
    (
        1,
        "The Yellow Beetle",
        undefined,
        "The characters must escape 1976 San Francisco in the midst of an unlikely natural disaster. They've stolen a faded yellow VW Beetle from the docks, and if they find Renald, they intend to nab him off the street. The cops are closing in and the city is falling apart around them. Renald is somewhere in the Haight — he doesn't know they're coming and he doesn't know about the disaster yet. The Beetle has a quarter tank of gas.",
        "San Francisco, 1976. Late afternoon. The sky is the color of a bruise — purples and greens that don't belong together. The bay is pulling back from the shoreline in a way that makes no geological sense, exposing a quarter mile of wet black mud and the ribs of old ships. Somewhere south of Market, buildings are sinking — not collapsing, sinking, as if the ground underneath has become negotiable. The air smells like salt and ozone and hot transmission fluid. The yellow Beetle idles at a red light on Embarcadero, engine ticking, wipers going even though it isn't raining. Traffic is starting to panic. The light is not going to change.",
        [
            new Situation // prevSituation
            (
                0,
                "The characters have just hotwired the Beetle at Pier 31. The owner — a dockworker on shift — won't notice for hours, but the hot-wire job was ugly and a passing meter maid saw them pull out. She's on her radio now. The disaster hasn't hit full force yet — people are uneasy but not fleeing. That window is closing.",
                0
            ),
            new Situation // currSituation
            (
                1,
                "The characters are idling at the intersection of Embarcadero and Broadway. The light is dead. Cross traffic is gridlocked. To the west, the Haight is maybe twenty minutes in clear traffic — but traffic is not clear and getting worse. A police cruiser is parked two blocks north, officers out of the car, staring at the retreating bay. They haven't been dispatched yet. The ground shudders. A fire hydrant three cars ahead fractures and sends a column of water forty feet into the air. People are starting to run.",
                65
            )
        ],
        1,
        "Get Renald off the street and out of San Francisco before the city becomes impassable. Renald is in the Haight — the characters need to find him, convince or compel him into the Beetle, and reach a viable exit route (Golden Gate or south on 101). Scoring: percentage-based. 0% = never found Renald. 50% = found him but still trapped in the city. 100% = Renald secured and clear of San Francisco.",
        "Don't get caught. The meter maid's call is working its way through dispatch. If the characters draw additional police attention — running lights, collisions, conspicuous driving — the net tightens. Scoring: boolean. Pass = escaped without arrest or vehicle seizure. Fail = detained, cornered, or the Beetle is impounded.",
        [
            "The Beetle has a quarter tank of gas. Every major detour or extended idling burns fuel. If the tank hits empty, the scenario shifts to on foot.",
            "San Francisco is deteriorating. Each round, the disaster escalates — routes that were open may close, structures may fail, crowds may block streets.",
            "Renald does not know the characters are coming. His cooperation is not guaranteed.",
            "The characters may attempt to contact Renald by other means (payphone, sending someone ahead) but he may not be reachable."
        ], // rules
        [
            "Renald is not at his apartment. He's at a record store on Haight Street called The Vinyl Mortuary. The characters don't know this yet.",
            "The disaster is not an earthquake. The bay is draining because something underneath the city is waking up. The GM should not name it. The ground is becoming soft. Asphalt is buckling in concentric rings radiating from a point near Dolores Park.",
            "If the characters take the direct route through downtown, they will hit a sinkhole at Van Ness that swallows two lanes. If they take the Panhandle, they arrive faster but drive directly past a police staging area.",
            "Renald will cooperate if he sees the sky. He knows what that color means. If approached indoors, he will argue and waste time.",
            "If the police catch up, they aren't interested in a stolen Beetle — they're trying to commandeer vehicles for evacuation. This could become an unexpected complication or an unexpected alliance."
        ], // hidden rules
        [startingActors.inspectorJavert, startingActors.professorMoriarty]
    ),
    theAlexiExtraction: new Scenario
    (
        2,
        "The Alexi Extraction",
        undefined,
        "A minor character from a forgotten novel about the Battle of Austerlitz — introduced in chapter 38, fated to die in chapter 42 — has learned of his death and contracted with the fleeing travelers from chapter 39 for a magical trinket that he believes will tear a warp in the marginalia and let him escape into a pastoral romance. Once activated, the trinket serves as a beacon. The characters have been contracted to prevent Alexi from crossing over, because a successful breach will send ripples across the literary metaverse — characters in adjacent texts will feel the seam open, immune systems will flare, and the structural integrity of both novels will degrade. Meanwhile, a Bookburner named Lisele Kade intends to exploit the breach at the moment the two worlds touch, holding it open long enough to bring an extraction team through and loot both novels clean.",
        "The margins of chapter 40, *The Forgotten Guns of Austerlitz*. December 2nd, 1805 — but the date is soft. The battlefield is half-rendered: cannon smoke drifts through sentences that haven't finished being written. To the east, the Pratzen Heights are sharp and historical, infantry advancing in formation, the prose dense and confident. To the west, the text is thinning. Between the paragraphs, wildflowers are pushing through — lavender, cornflower blue — colors that don't belong in a war novel. The air smells like gunpowder and fresh-cut hay simultaneously. Somewhere in the margins, a shepherd's pipe is playing a melody that no character in this book would know. The breach hasn't opened yet, but the two novels are already aware of each other. The page is sweating.",
        [
            new Situation // prevSituation
            (
                0,
                "The characters arrived in the text via a Lamplighter contact who dropped them at the chapter 37 / chapter 38 boundary. They've located Alexi's unit — a ragged artillery company positioned on the left flank — but Alexi himself slipped away from his post twenty minutes ago. His commanding officer assumes he's deserted, which in this novel means a firing squad if caught. The travelers from chapter 39 have already broken camp and are moving west, toward the thinning text. Kade has not been sighted yet, but a Lamplighter warning flagged her presence within the literary web — she's in an adjacent node and closing.",
                0
            ),
            new Situation // currSituation
            (
                1,
                "Alexi is moving on foot through the smoke between chapters 39 and 40, following the gypsy trail toward the western margin where the text is weakest. He's carrying the trinket — a brass compass with no needle that hums when pointed toward the breach point. The wildflowers are thicker now, growing through the frozen mud of the battlefield, and the pastoral romance on the other side is pressing against the margin like a face against glass. The characters can see Alexi's trail — boot prints in mud that transitions from battlefield clay to soft meadow soil mid-stride. To the east, a cavalry charge is developing that will sweep through this area in approximately three rounds. To the west, the margin is luminous and thin. Kade's extraction team has been spotted — three figures moving parallel to the margin, staying just inside the pastoral romance, waiting for the breach.",
                55
            )
        ],
        1,
        "Prevent Alexi from activating the trinket and crossing the marginalia breach. If the breach opens, close it before Kade's team can exploit it. Scoring: percentage-based. 0% = Alexi crosses and Kade holds the breach open for full extraction. 50% = breach opens but is sealed before Kade gets through. 100% = Alexi is stopped before the breach opens, trinket secured or neutralized.",
        "Preserve the structural integrity of both texts. The forgotten Austerlitz novel and the pastoral romance are both degrading from proximity — wildflowers in a war zone, cavalry sounds in a love story. Every round the margin stays thin, both novels lose coherence. Scoring: percentage-based. 0% = both texts suffer permanent narrative damage. 50% = one text recovers fully. 100% = both texts restored to pre-breach condition.",
        [
            "Alexi is a desperate man with a soldier's training. He will not come willingly. He has seen chapter 42 and he knows what's waiting for him.",
            "The trinket activates on contact with the thinnest point of the margin. Alexi doesn't need to understand how it works — he just needs to get close enough.",
            "Kade's extraction team is inside the pastoral romance. They cannot cross until the breach opens. Once it opens, they move fast.",
            "The cavalry charge from the east is a narrative event — it is part of the novel and cannot be stopped. It will sweep through the area. Characters caught in its path must deal with it.",
            "The immune systems of both texts are agitated. Vibe checks may trigger without warning. Characters who don't fit either genre will draw attention."
        ], // rules
        [
            "Alexi's trinket doesn't do what he thinks it does. It doesn't create a clean passage — it tears both texts simultaneously. If activated, both novels begin hemorrhaging characters and objects across the breach. The pastoral romance will flood with soldiers; the war novel will fill with shepherds and lovers. The cascade damage is real.",
            "Kade knows this. She's counting on the chaos. Her extraction team isn't here for Alexi — they're here for a specific Artifact that exists in the pastoral romance: a golden lyre that, according to Lamplighter intelligence, can rewrite the ending of any text it's played in. Alexi is a useful idiot.",
            "The travelers from chapter 39 are not what they appear. They are Marginalia — watchers from the annotation layer who sold Alexi the trinket knowing exactly what it would do. Their motive is unclear. They may be testing the margin's resilience, or they may be working with Kade, or they may have their own agenda entirely.",
            "If the characters attempt to reason with Alexi, he will listen — but only if they can offer him an alternative to dying in chapter 42. 'Go back to your death' is not a compelling argument. A creative solution (hiding him in the margins, smuggling him to another text, negotiating with the novel's immune system) might work.",
            "The cavalry charge contains a named character — Colonel Devaux — who is important to the novel's plot. If Devaux is killed or displaced during the chaos, the Austerlitz novel begins to unravel from chapter 40 forward."
        ], // hidden rules
        [startingActors.liseleKade, startingActors.alexiVolkov]
    ),
    ThirteenHundredYards: new Scenario
    (
        3,
        "Thirteen Hundred Yards",
        undefined,
        "The characters are walking along THE SHORE — a strange liminal place between worlds, where the sand is the color of old paper and the tide brings in fragments of sentences instead of shells. A man calling himself Sancho Panza approaches, worried. His travelling companion woke in the middle of the night and set off toward foggy lights in the dim mist further up the shore. Sancho warns the characters that his friend is prone to trouble and spectacle, but if they can retrieve him before he reaches the lights, Sancho will be in their debt. Dunwich is a mere 1300 yards up the beach. It should take no time at all.",
        "THE SHORE. No time. No date. The sand stretches in both directions without curvature, as if the beach were a page laid flat. The tide is out — far out — and the exposed seabed glistens with a faint iridescence, like oil on water or ink not yet dry. Behind the characters, the mist is warm and smells of hay and wine — Sancho's world bleeding into the margins. Ahead, the mist is cold. The fog thickens northward into something vertical, almost architectural. Thirteen hundred yards up the beach, lights pulse in the murk — not fire, not electricity, something slower and more deliberate, like bioluminescence or thought made visible. The sand underfoot transitions gradually: closest to Sancho it's golden and warm; further north it darkens to grey, then to a granular black that crunches like ash. Footprints lead north — large, confident, widely spaced. The stride of a tall man in a hurry. A broken lance tip is half-buried in the sand about two hundred yards out.",
        [
            new Situation // prevSituation
            (
                0,
                "Sancho woke to find his companion's bedroll empty and cold. He followed the footprints to the edge of the warm mist, saw the lights in the distance, and turned back — not from cowardice but from a lifetime of knowing that following his master into the unknown without reinforcements makes things worse. He encountered the characters on the shore and made his appeal. He's offered what he has: a wineskin, a short sword that has never been sharpened, and a debt of honor. He will not go further north himself. He says the cold hurts his bones, but his eyes say something else.",
                0
            ),
            new Situation // currSituation
            (
                1,
                "The characters are standing at the transition point — warm sand behind, cold sand ahead. The footprints continue north into the darkening mist. The lights at the 1300-yard mark have begun to move — slowly, laterally, as if pacing. A sound carries from that direction: not wind, not waves, something between a hum and a chant, pitched too low for comfort. The broken lance tip gleams faintly. Approximately 400 yards ahead, the footprints change — the stride shortens, as if the walker slowed or began to hesitate. Then they lengthen again, decisively. He saw something and chose to continue. The shore narrows slightly ahead where the dark rocks jut from the waterline. Beyond the rocks, Dunwich.",
                70
            )
        ],
        1,
        "Retrieve Sancho's companion before he reaches Dunwich and causes an incident. The companion is Don Quixote, though the characters may not know this yet — Sancho will only say 'my master' and 'the knight.' Quixote is approximately 900 yards ahead, moving with purpose toward the lights. Scoring: percentage-based. 0% = Quixote reaches Dunwich and engages with whatever is there. 50% = characters reach Quixote but cannot extract him. 100% = Quixote retrieved and returned south of the transition point.",
        "Do not disturb Dunwich. Whatever is generating the lights is aware of the shore but has not yet focused on it. Loud confrontation, combat, or dramatic displays near the 1300-yard mark risk drawing attention from something that should be left alone. Scoring: boolean. Pass = Dunwich remains undisturbed. Fail = something in Dunwich notices and responds.",
        [
            "THE SHORE is liminal space. It does not belong to any single text. Characters from different novels can coexist here, but the further north the characters walk, the more the ambient genre shifts from picaresque warmth to cosmic horror. Characters with low WIS may not notice the shift. Characters with high WIS will feel it in their teeth.",
            "Don Quixote cannot be reasoned with through logic. He interprets everything through his chivalric framework. The lights are an enchantment. The cold is a trial. The dark sand is a cursed kingdom. He is not wrong exactly — he is wrong in a way that might accidentally be right.",
            "Movement on the shore is measured in narrative beats, not turns. 'Walking 400 yards' takes one beat in clear conditions. Fog, obstacles, confrontation, or hesitation cost additional beats.",
            "Sancho will not cross the transition point. He can be called on for information about Quixote's habits, weaknesses, and triggers, but he stays in the warm sand."
        ], // rules
        [
            "Quixote has already seen the lights and decided they are a castle under enchantment. He intends to challenge whatever sorcerer holds it. He has fashioned a visor from driftwood and seaweed. He is singing.",
            "The lights at 1300 yards are not from Dunwich proper. They are from the threshold of Dunwich — the point where Lovecraft's text begins to render on the shore. The lights are a vibe check — the immune system of *The Dunwich Horror* scanning the approaching entity. Quixote is, impossibly, passing. His absolute conviction that he belongs everywhere is reading as native confidence to the immune system. This is extremely dangerous — if he enters the text, Dunwich will integrate him, and a 17th-century Spanish knight errant loose inside a Lovecraft story will cause cascading narrative damage.",
            "The sound the characters hear is Wilbur Whateley reciting from the Necronomicon on the other side of the threshold. It is not directed at them. It is a nightly ritual. But the recitation has a gravitational quality — characters with INT above 16 will find themselves wanting to listen, to understand the pattern. This is not magical compulsion. It is curiosity, which is worse.",
            "If the characters make noise near the threshold, Whateley will stop reciting. The silence that follows is more dangerous than the chanting. In the silence, the thing on Sentinel Hill may turn its attention outward.",
            "There is a shortcut. The dark rocks at the 800-yard mark contain a tidal cave that connects to the margin between Cervantes and Lovecraft. A character who enters the cave emerges 100 yards behind Quixote — but inside the cave, the genre is neither picaresque nor horror. It is something older. The walls are covered in text that predates both novels. Reading it costs something the character won't notice until later."
        ], // hidden rules
        [startingActors.donQuixote, startingActors.wilburWhateley]
    )
}
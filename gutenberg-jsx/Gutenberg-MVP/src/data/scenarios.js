import { Scenario } from '../scenario.js';
import { Situation } from '../situation.js';
import { startingActors } from './actors';



// Test Scenarios OLD
// export const testScenarios = 
// {
//     theYellowBeetle: new Scenario
//     (
//         1,
//         "The Yellow Beetle",
//         undefined,
//         "The characters must escape 1976 San Francisco in the midst of an unlikely natural disaster. They've stolen a faded yellow VW Beetle from the docks, and if they find Renald, they intend to nab him off the street. The cops are closing in and the city is falling apart around them. Renald is somewhere in the Haight — he doesn't know they're coming and he doesn't know about the disaster yet. The Beetle has a quarter tank of gas.",
//         "San Francisco, 1976. Late afternoon. The sky is the color of a bruise — purples and greens that don't belong together. The bay is pulling back from the shoreline in a way that makes no geological sense, exposing a quarter mile of wet black mud and the ribs of old ships. Somewhere south of Market, buildings are sinking — not collapsing, sinking, as if the ground underneath has become negotiable. The air smells like salt and ozone and hot transmission fluid. The yellow Beetle idles at a red light on Embarcadero, engine ticking, wipers going even though it isn't raining. Traffic is starting to panic. The light is not going to change.",
//         [
//             new Situation // prevSituation
//             (
//                 0,
//                 "The characters have just hotwired the Beetle at Pier 31. The owner — a dockworker on shift — won't notice for hours, but the hot-wire job was ugly and a passing meter maid saw them pull out. She's on her radio now. The disaster hasn't hit full force yet — people are uneasy but not fleeing. That window is closing.",
//                 0
//             ),
//             new Situation // currSituation
//             (
//                 1,
//                 "The characters are idling at the intersection of Embarcadero and Broadway. The light is dead. Cross traffic is gridlocked. To the west, the Haight is maybe twenty minutes in clear traffic — but traffic is not clear and getting worse. A police cruiser is parked two blocks north, officers out of the car, staring at the retreating bay. They haven't been dispatched yet. The ground shudders. A fire hydrant three cars ahead fractures and sends a column of water forty feet into the air. People are starting to run.",
//                 65
//             )
//         ],
//         1,
//         "Get Renald off the street and out of San Francisco before the city becomes impassable. Renald is in the Haight — the characters need to find him, convince or compel him into the Beetle, and reach a viable exit route (Golden Gate or south on 101). Scoring: percentage-based. 0% = never found Renald. 50% = found him but still trapped in the city. 100% = Renald secured and clear of San Francisco.",
//         "Don't get caught. The meter maid's call is working its way through dispatch. If the characters draw additional police attention — running lights, collisions, conspicuous driving — the net tightens. Scoring: boolean. Pass = escaped without arrest or vehicle seizure. Fail = detained, cornered, or the Beetle is impounded.",
//         [
//             "The Beetle has a quarter tank of gas. Every major detour or extended idling burns fuel. If the tank hits empty, the scenario shifts to on foot.",
//             "San Francisco is deteriorating. Each round, the disaster escalates — routes that were open may close, structures may fail, crowds may block streets.",
//             "Renald does not know the characters are coming. His cooperation is not guaranteed.",
//             "The characters may attempt to contact Renald by other means (payphone, sending someone ahead) but he may not be reachable."
//         ], // rules
//         [
//             "Renald is not at his apartment. He's at a record store on Haight Street called The Vinyl Mortuary. The characters don't know this yet.",
//             "The disaster is not an earthquake. The bay is draining because something underneath the city is waking up. The GM should not name it. The ground is becoming soft. Asphalt is buckling in concentric rings radiating from a point near Dolores Park.",
//             "If the characters take the direct route through downtown, they will hit a sinkhole at Van Ness that swallows two lanes. If they take the Panhandle, they arrive faster but drive directly past a police staging area.",
//             "Renald will cooperate if he sees the sky. He knows what that color means. If approached indoors, he will argue and waste time.",
//             "If the police catch up, they aren't interested in a stolen Beetle — they're trying to commandeer vehicles for evacuation. This could become an unexpected complication or an unexpected alliance."
//         ], // hidden rules
//         [startingActors.inspectorJavert, startingActors.professorMoriarty]
//     ),
//     theAlexiExtraction: new Scenario
//     (
//         2,
//         "The Alexi Extraction",
//         undefined,
//         "A minor character from a forgotten novel about the Battle of Austerlitz — introduced in chapter 38, fated to die in chapter 42 — has learned of his death and contracted with the fleeing travelers from chapter 39 for a magical trinket that he believes will tear a warp in the marginalia and let him escape into a pastoral romance. Once activated, the trinket serves as a beacon. The characters have been contracted to prevent Alexi from crossing over, because a successful breach will send ripples across the literary metaverse — characters in adjacent texts will feel the seam open, immune systems will flare, and the structural integrity of both novels will degrade. Meanwhile, a Bookburner named Lisele Kade intends to exploit the breach at the moment the two worlds touch, holding it open long enough to bring an extraction team through and loot both novels clean.",
//         "The margins of chapter 40, *The Forgotten Guns of Austerlitz*. December 2nd, 1805 — but the date is soft. The battlefield is half-rendered: cannon smoke drifts through sentences that haven't finished being written. To the east, the Pratzen Heights are sharp and historical, infantry advancing in formation, the prose dense and confident. To the west, the text is thinning. Between the paragraphs, wildflowers are pushing through — lavender, cornflower blue — colors that don't belong in a war novel. The air smells like gunpowder and fresh-cut hay simultaneously. Somewhere in the margins, a shepherd's pipe is playing a melody that no character in this book would know. The breach hasn't opened yet, but the two novels are already aware of each other. The page is sweating.",
//         [
//             new Situation // prevSituation
//             (
//                 0,
//                 "The characters arrived in the text via a Lamplighter contact who dropped them at the chapter 37 / chapter 38 boundary. They've located Alexi's unit — a ragged artillery company positioned on the left flank — but Alexi himself slipped away from his post twenty minutes ago. His commanding officer assumes he's deserted, which in this novel means a firing squad if caught. The travelers from chapter 39 have already broken camp and are moving west, toward the thinning text. Kade has not been sighted yet, but a Lamplighter warning flagged her presence within the literary web — she's in an adjacent node and closing.",
//                 0
//             ),
//             new Situation // currSituation
//             (
//                 1,
//                 "Alexi is moving on foot through the smoke between chapters 39 and 40, following the gypsy trail toward the western margin where the text is weakest. He's carrying the trinket — a brass compass with no needle that hums when pointed toward the breach point. The wildflowers are thicker now, growing through the frozen mud of the battlefield, and the pastoral romance on the other side is pressing against the margin like a face against glass. The characters can see Alexi's trail — boot prints in mud that transitions from battlefield clay to soft meadow soil mid-stride. To the east, a cavalry charge is developing that will sweep through this area in approximately three rounds. To the west, the margin is luminous and thin. Kade's extraction team has been spotted — three figures moving parallel to the margin, staying just inside the pastoral romance, waiting for the breach.",
//                 55
//             )
//         ],
//         1,
//         "Prevent Alexi from activating the trinket and crossing the marginalia breach. If the breach opens, close it before Kade's team can exploit it. Scoring: percentage-based. 0% = Alexi crosses and Kade holds the breach open for full extraction. 50% = breach opens but is sealed before Kade gets through. 100% = Alexi is stopped before the breach opens, trinket secured or neutralized.",
//         "Preserve the structural integrity of both texts. The forgotten Austerlitz novel and the pastoral romance are both degrading from proximity — wildflowers in a war zone, cavalry sounds in a love story. Every round the margin stays thin, both novels lose coherence. Scoring: percentage-based. 0% = both texts suffer permanent narrative damage. 50% = one text recovers fully. 100% = both texts restored to pre-breach condition.",
//         [
//             "Alexi is a desperate man with a soldier's training. He will not come willingly. He has seen chapter 42 and he knows what's waiting for him.",
//             "The trinket activates on contact with the thinnest point of the margin. Alexi doesn't need to understand how it works — he just needs to get close enough.",
//             "Kade's extraction team is inside the pastoral romance. They cannot cross until the breach opens. Once it opens, they move fast.",
//             "The cavalry charge from the east is a narrative event — it is part of the novel and cannot be stopped. It will sweep through the area. Characters caught in its path must deal with it.",
//             "The immune systems of both texts are agitated. Vibe checks may trigger without warning. Characters who don't fit either genre will draw attention."
//         ], // rules
//         [
//             "Alexi's trinket doesn't do what he thinks it does. It doesn't create a clean passage — it tears both texts simultaneously. If activated, both novels begin hemorrhaging characters and objects across the breach. The pastoral romance will flood with soldiers; the war novel will fill with shepherds and lovers. The cascade damage is real.",
//             "Kade knows this. She's counting on the chaos. Her extraction team isn't here for Alexi — they're here for a specific Artifact that exists in the pastoral romance: a golden lyre that, according to Lamplighter intelligence, can rewrite the ending of any text it's played in. Alexi is a useful idiot.",
//             "The travelers from chapter 39 are not what they appear. They are Marginalia — watchers from the annotation layer who sold Alexi the trinket knowing exactly what it would do. Their motive is unclear. They may be testing the margin's resilience, or they may be working with Kade, or they may have their own agenda entirely.",
//             "If the characters attempt to reason with Alexi, he will listen — but only if they can offer him an alternative to dying in chapter 42. 'Go back to your death' is not a compelling argument. A creative solution (hiding him in the margins, smuggling him to another text, negotiating with the novel's immune system) might work.",
//             "The cavalry charge contains a named character — Colonel Devaux — who is important to the novel's plot. If Devaux is killed or displaced during the chaos, the Austerlitz novel begins to unravel from chapter 40 forward."
//         ], // hidden rules
//         [startingActors.liseleKade, startingActors.alexiVolkov]
//     ),
//     ThirteenHundredYards: new Scenario
//     (
//         3,
//         "Thirteen Hundred Yards",
//         undefined,
//         "The characters are walking along THE SHORE — a strange liminal place between worlds, where the sand is the color of old paper and the tide brings in fragments of sentences instead of shells. A man calling himself Sancho Panza approaches, worried. His travelling companion woke in the middle of the night and set off toward foggy lights in the dim mist further up the shore. Sancho warns the characters that his friend is prone to trouble and spectacle, but if they can retrieve him before he reaches the lights, Sancho will be in their debt. Dunwich is a mere 1300 yards up the beach. It should take no time at all.",
//         "THE SHORE. No time. No date. The sand stretches in both directions without curvature, as if the beach were a page laid flat. The tide is out — far out — and the exposed seabed glistens with a faint iridescence, like oil on water or ink not yet dry. Behind the characters, the mist is warm and smells of hay and wine — Sancho's world bleeding into the margins. Ahead, the mist is cold. The fog thickens northward into something vertical, almost architectural. Thirteen hundred yards up the beach, lights pulse in the murk — not fire, not electricity, something slower and more deliberate, like bioluminescence or thought made visible. The sand underfoot transitions gradually: closest to Sancho it's golden and warm; further north it darkens to grey, then to a granular black that crunches like ash. Footprints lead north — large, confident, widely spaced. The stride of a tall man in a hurry. A broken lance tip is half-buried in the sand about two hundred yards out.",
//         [
//             new Situation // prevSituation
//             (
//                 0,
//                 "Sancho woke to find his companion's bedroll empty and cold. He followed the footprints to the edge of the warm mist, saw the lights in the distance, and turned back — not from cowardice but from a lifetime of knowing that following his master into the unknown without reinforcements makes things worse. He encountered the characters on the shore and made his appeal. He's offered what he has: a wineskin, a short sword that has never been sharpened, and a debt of honor. He will not go further north himself. He says the cold hurts his bones, but his eyes say something else.",
//                 0
//             ),
//             new Situation // currSituation
//             (
//                 1,
//                 "The characters are standing at the transition point — warm sand behind, cold sand ahead. The footprints continue north into the darkening mist. The lights at the 1300-yard mark have begun to move — slowly, laterally, as if pacing. A sound carries from that direction: not wind, not waves, something between a hum and a chant, pitched too low for comfort. The broken lance tip gleams faintly. Approximately 400 yards ahead, the footprints change — the stride shortens, as if the walker slowed or began to hesitate. Then they lengthen again, decisively. He saw something and chose to continue. The shore narrows slightly ahead where the dark rocks jut from the waterline. Beyond the rocks, Dunwich.",
//                 70
//             )
//         ],
//         1,
//         "Retrieve Sancho's companion before he reaches Dunwich and causes an incident. The companion is Don Quixote, though the characters may not know this yet — Sancho will only say 'my master' and 'the knight.' Quixote is approximately 900 yards ahead, moving with purpose toward the lights. Scoring: percentage-based. 0% = Quixote reaches Dunwich and engages with whatever is there. 50% = characters reach Quixote but cannot extract him. 100% = Quixote retrieved and returned south of the transition point.",
//         "Do not disturb Dunwich. Whatever is generating the lights is aware of the shore but has not yet focused on it. Loud confrontation, combat, or dramatic displays near the 1300-yard mark risk drawing attention from something that should be left alone. Scoring: boolean. Pass = Dunwich remains undisturbed. Fail = something in Dunwich notices and responds.",
//         [
//             "THE SHORE is liminal space. It does not belong to any single text. Characters from different novels can coexist here, but the further north the characters walk, the more the ambient genre shifts from picaresque warmth to cosmic horror. Characters with low WIS may not notice the shift. Characters with high WIS will feel it in their teeth.",
//             "Don Quixote cannot be reasoned with through logic. He interprets everything through his chivalric framework. The lights are an enchantment. The cold is a trial. The dark sand is a cursed kingdom. He is not wrong exactly — he is wrong in a way that might accidentally be right.",
//             "Movement on the shore is measured in narrative beats, not turns. 'Walking 400 yards' takes one beat in clear conditions. Fog, obstacles, confrontation, or hesitation cost additional beats.",
//             "Sancho will not cross the transition point. He can be called on for information about Quixote's habits, weaknesses, and triggers, but he stays in the warm sand."
//         ], // rules
//         [
//             "Quixote has already seen the lights and decided they are a castle under enchantment. He intends to challenge whatever sorcerer holds it. He has fashioned a visor from driftwood and seaweed. He is singing.",
//             "The lights at 1300 yards are not from Dunwich proper. They are from the threshold of Dunwich — the point where Lovecraft's text begins to render on the shore. The lights are a vibe check — the immune system of *The Dunwich Horror* scanning the approaching entity. Quixote is, impossibly, passing. His absolute conviction that he belongs everywhere is reading as native confidence to the immune system. This is extremely dangerous — if he enters the text, Dunwich will integrate him, and a 17th-century Spanish knight errant loose inside a Lovecraft story will cause cascading narrative damage.",
//             "The sound the characters hear is Wilbur Whateley reciting from the Necronomicon on the other side of the threshold. It is not directed at them. It is a nightly ritual. But the recitation has a gravitational quality — characters with INT above 16 will find themselves wanting to listen, to understand the pattern. This is not magical compulsion. It is curiosity, which is worse.",
//             "If the characters make noise near the threshold, Whateley will stop reciting. The silence that follows is more dangerous than the chanting. In the silence, the thing on Sentinel Hill may turn its attention outward.",
//             "There is a shortcut. The dark rocks at the 800-yard mark contain a tidal cave that connects to the margin between Cervantes and Lovecraft. A character who enters the cave emerges 100 yards behind Quixote — but inside the cave, the genre is neither picaresque nor horror. It is something older. The walls are covered in text that predates both novels. Reading it costs something the character won't notice until later."
//         ], // hidden rules
//         [startingActors.donQuixote, startingActors.wilburWhateley]
//     )
// }


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
            "The characters may attempt to contact Renald by other means (payphone, sending someone ahead) but he may not be reachable."
        ], // rules
        [
            "Renald does not know the characters are coming. His cooperation is not guaranteed.",
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
            "The trinket activates on contact with the thinnest point of the margin. Alexi doesn't need to understand how it works — he just needs to get close enough.",
            "Kade's extraction team is inside the pastoral romance. They cannot cross until the breach opens. Once it opens, they move fast.",
            "The cavalry charge from the east is a narrative event — it is part of the novel and cannot be stopped. It will sweep through the area. Characters caught in its path must deal with it.",
            "The immune systems of both texts are agitated. Vibe checks may trigger without warning. Characters who don't fit either genre will draw attention."
        ], // rules
        [
            "Alexi is a desperate man with a soldier's training. He will not come willingly. He has seen chapter 42 and he knows what's waiting for him.",
            "Alexi's trinket doesn't do what he thinks it does. It doesn't create a clean passage — it tears both texts simultaneously. If activated, both novels begin hemorrhaging characters and objects across the breach. The pastoral romance will flood with soldiers; the war novel will fill with shepherds and lovers. The cascade damage is real.",
            "Kade knows this. She's counting on the chaos. Her extraction team isn't here for Alexi — they're here for a specific Artifact that exists in the pastoral romance: a golden lyre that, according to Lamplighter intelligence, can rewrite the ending of any text it's played in. Alexi is a useful idiot.",
            "The travelers from chapter 39 are not what they appear. They are Marginalia — watchers from the annotation layer who sold Alexi the trinket knowing exactly what it would do. Their motive is unclear. They may be testing the margin's resilience, or they may be working with Kade, or they may have their own agenda entirely.",
            "If the characters attempt to reason with Alexi, he will listen — but only if they can offer him an alternative to dying in chapter 42. 'Go back to your death' is not a compelling argument. A creative solution (hiding him in the margins, smuggling him to another text, negotiating with the novel's immune system) might work.",
            "The cavalry charge contains a named character — Colonel Devaux — who is important to the novel's plot. If Devaux is killed or displaced during the chaos, the Austerlitz novel begins to unravel from chapter 40 forward."
        ], // hidden rules
        [startingActors.liseleKade, startingActors.alexiVolkov]
    ),

    thirteenHundredYards: new Scenario
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
            "Movement on the shore is measured in narrative beats, not turns. 'Walking 400 yards' takes one beat in clear conditions. Fog, obstacles, confrontation, or hesitation cost additional beats."
        ], // rules
        [
            "Don Quixote cannot be reasoned with through logic. He interprets everything through his chivalric framework. The lights are an enchantment. The cold is a trial. The dark sand is a cursed kingdom. He is not wrong exactly — he is wrong in a way that might accidentally be right.",
            "Sancho will not cross the transition point. He can be called on for information about Quixote's habits, weaknesses, and triggers, but he stays in the warm sand.",
            "Quixote has already seen the lights and decided they are a castle under enchantment. He intends to challenge whatever sorcerer holds it. He has fashioned a visor from driftwood and seaweed. He is singing.",
            "The lights at 1300 yards are not from Dunwich proper. They are from the threshold of Dunwich — the point where Lovecraft's text begins to render on the shore. The lights are a vibe check — the immune system of *The Dunwich Horror* scanning the approaching entity. Quixote is, impossibly, passing. His absolute conviction that he belongs everywhere is reading as native confidence to the immune system. This is extremely dangerous — if he enters the text, Dunwich will integrate him, and a 17th-century Spanish knight errant loose inside a Lovecraft story will cause cascading narrative damage.",
            "The sound the characters hear is Wilbur Whateley reciting from the Necronomicon on the other side of the threshold. It is not directed at them. It is a nightly ritual. But the recitation has a gravitational quality — characters with INT above 16 will find themselves wanting to listen, to understand the pattern. This is not magical compulsion. It is curiosity, which is worse.",
            "If the characters make noise near the threshold, Whateley will stop reciting. The silence that follows is more dangerous than the chanting. In the silence, the thing on Sentinel Hill may turn its attention outward.",
            "There is a shortcut. The dark rocks at the 800-yard mark contain a tidal cave that connects to the margin between Cervantes and Lovecraft. A character who enters the cave emerges 100 yards behind Quixote — but inside the cave, the genre is neither picaresque nor horror. It is something older. The walls are covered in text that predates both novels. Reading it costs something the character won't notice until later."
        ], // hidden rules
        [startingActors.donQuixote, startingActors.wilburWhateley]
    ),

    rippedFromTheHeadlines: new Scenario
    (
        4,
        "Ripped from the Headlines",
        undefined,
        "The Newsmen need to be rid of Disgraced Dame Etiquette, and they need a small-time fugitive the Romance Syndicate happens to be holding. They have arranged a quiet swap at Crossroads Station — the Dame for the fugitive — at the seam between newspaper-noir and pastoral-romance territory. The Romance Syndicate has also asked for cash on top of the trade; the team carries a trunk of $100,000 and is encouraged to spend as little of it as possible. The team escorts the Dame south on the 12:00 train, completes the swap with the Sunset Appreciation Club at the platform, and returns north with the fugitive and whatever cash survives the haggling. An old Newsmen editor named Holcomb travels as chaperone. He has never exchanged prisoners before and is grateful the team is here — he doesn't fancy his odds against Mrs. Wexler, who is reportedly very high society and somewhat intimidating. The journey is three hours; the swap window is twenty minutes. Both parties have agreed to come unarmed by treaty. Keep it quiet.",
        "A private compartment on the 12:00 southbound to Crossroads. Six leather seats, a fold-down table, brass fittings, a window onto rolling fields. The hour is just past one. Disgraced Dame Etiquette sits across from the team in matching handcuffs, hands folded, knees together, studying the window. Holcomb — Newsmen editor, three decades on the crime beat — sits in the corner with the evening edition open, smoking. He has a flask. Beside the team's bench, a steel-banded trunk: heavy, locked, $100,000 in marked bills inside. The carriage smells of leather, tobacco, and the Dame's lavender water. The ride is three hours, and the only available action until Crossroads is to talk, observe, and decide what is true.",
        [
            new Situation // prevSituation
            (
                0,
                "The Newsmen briefed the team in a back office the night before. Disgraced Dame Etiquette has been in their custody for nine days; her column has been quietly suspended; her newspaper wants her gone. A Lamplighter courier arrived this morning with the Sunset Appreciation Club's signal — they're coming, they have the asset, they want it quiet, they want cash. The team boarded the southbound at noon with the Dame, the trunk, an old Newsmen editor named Holcomb as chaperone, and the Newsmen's blessing. No tail noticed. The matron of the Sunset Appreciation Club is named in the brief only as 'Mrs. Wexler.' No one at the Newsmen has seen her face before. Holcomb has admitted, ruefully, that he is not sure how to negotiate with someone reportedly very high society and is glad the team is along.",
                0
            ),
            new Situation // currSituation
            (
                1,
                "Half an hour out of the city. The carriage has settled. The Dame is studying the window. Holcomb has lit his second cigarette and turned a page of his paper. The trunk sits at the team's feet. The team has time to talk, observe, ask. Holcomb answers direct questions but admits he doesn't know much about the Dame's specific trouble — the Newsmen kept it close. The Dame will speak only if spoken to, and only briefly. The next stop is Crossroads, two and a half hours away.",
                55
            )
        ],
        1,
        "Complete the prisoner exchange at Crossroads Station and return north with the contracted fugitive. Tiered scoring: percentage-based. 0% = the swap fails, the team's prisoner escapes, the fugitive escapes, or any party dies. 50% = swap completes with complications (visible commotion, lost prisoner during transition, third-party escape into the bodice-ripper). 75% = clean swap per contract, fugitive secured. 100% = clean swap AND prevention of any unforeseen reunification, escape, or third-party action. The 100% tier is reserved for teams who recognize and counter the deeper game in play.",
        "Keep it quiet, and keep the cash. Two pressures, both scored: anomalies on the platform reduce the score (drawn weapons, gunfire, surviving witnesses), and money spent from the trunk reduces it as well. Scoring: percentage-based, starting at 100. Witnesses cost more than dollars; both add up.",
        [
            "The journey to Crossroads is three hours by southbound rail. Combat is not available in the carriage. Observation, conversation, and inference are the only available moves until the platform.",
            "The team has a trunk containing $100,000 in marked bills. The Newsmen have authorized its use to grease the swap if Mrs. Wexler asks for cash on top of the trade. Spend as little as possible. Whatever returns north of Crossroads goes back to the Newsmen.",
            "On the platform, combat is permitted but extremely costly. The Sunset Appreciation Club is well-armed under their parasols and dresses. Civilians arrive on the next train in two hours.",
            "The platform exchange is choreographed. The matron signals first, the team responds, prisoners are walked to the center of the bridge, swapped, and parties retreat south and north respectively. Cash, if any, is handed over at the center.",
            "Each party brings one prisoner. Hooded fugitives are permitted by treaty; identification is not required at the swap.",
            "The south end of the platform is a literary seam. Crossing the seam takes a character into the bodice-ripper text proper."
        ], // rules
        [
            "Holcomb's behavior: answers direct questions, volunteers nothing. Has never exchanged prisoners before and says so. Has a flask and an evening paper. Worries Mrs. Wexler may be too high society for him to negotiate with and is grateful the team is here. Will evade questions about why Disgraced Dame Etiquette was disgraced — the Newsmen kept that close, and he claims not to know.",
            "Disgraced Dame Etiquette's surface behavior: speaks only if spoken to. Asked directly about her disgrace, she will tell the team herself: she punched the winning horse at the derby square in the face, on account of the way he was lookin' at her, all lecherous. The story has been in the columns for a week.",
            "Disgraced Dame Etiquette is Bonnie Parker. She has been waiting weeks for this moment. Slip-ups available during the carriage phase, deployable as the LLM judges based on what the team is paying attention to:",
            "  - The derby story itself is a slip. When she tells it, the country drawl in 'cuz of the way he was lookin' at her, all lecherous' is not how a syndicated society columnist would phrase it. A high-WIS character notices the seam.",
            "  - She swears under her breath when the train lurches.",
            "  - She recognizes Holcomb's brand of cigarette (Camel) and asks for one without thinking.",
            "  - Her hands fold wrong: calluses on the trigger fingers, no powder marks where a society columnist would have powder marks.",
            "  - She slips into a soft Texas drawl when surprised by a name in Holcomb's paper.",
            "  - She knows train timetables better than her cover requires; she names a small-town station the train passes without looking.",
            "  - She will, casually, ask the team about the cash. How much. What bills. How locked. She is subtly steering them toward generosity with Mrs. Wexler — she has a personal stake in the trunk leaving the platform full. A high-WIS character may notice the pattern across multiple questions.",
            "  - She holds her sandwich left-handed; she hums a song no society lady would know.",
            "The hooded fugitive at the platform is Clyde Barrow. He is not as bound as he appears — the Sunset matron has prepared his cuffs to release on a verbal cue. He will move on Bonnie's signal.",
            "The Sunset Appreciation Club is Clyde's gang in feathered hats. Each lady carries: a pistol in the lining of her parasol, a knife sewn into her sash, and a flask of something flammable in her purse. Mrs. Wexler is the gang's underboss, calm and dangerous; she will not draw first, but she will draw.",
            "The Club's name is itself a wink — the duo's stated ambition has always been to ride off into the sunset together. The gang chose the cover for the joke. The LLM may use this connection as flavor.",
            "Mrs. Wexler's consultation tell: during the platform negotiation, she will appear to confer quietly with her hooded prisoner before answering the team's offers. She frames it as 'checking with my charge.' The consultation is too frequent and too genuine — Clyde is calling the shots through her. A high-WIS character notices after the second consultation; a careful one notices on the first.",
            "Mrs. Wexler will demand cash on top of the prisoner trade. She is haggling for the gang's operating capital. She can be negotiated down — each round of haggling deepens the consultation tell. Teams who notice the tell early can negotiate from a position of suspicion and reduce the cash outlay significantly.",
            "Both prisoners can communicate by small signals — a hummed bar, a tap, a glance. They will recognize each other across the platform within seconds and begin coordinating. Reunification is their objective.",
            "The actual Romance Syndicate has no idea any of this is happening. If they learn afterward, they will be furious that their identity was used and will pursue the team or the gang or both in a future scenario. Future-mission seed.",
            "If the duo escape into the bodice-ripper, they vanish into a text where they cannot be touched without a follow-up extraction scenario. They will, however, leave a calling card at Crossroads Station — a torn newspaper page with a hand-drawn heart in the margin — addressed to the team. Bonnie writes the note. Clyde signs it.",
            "Reunion aura: when Bonnie and Clyde are within ten feet of each other, their individual auras combine into 'Folk Legend.' Bystanders freeze, opposition hesitates, the team feels the gravity of being inside a story they will tell their grandchildren. The combined aura is itself a soft escape mechanic — anyone who hesitates loses a round of action.",
            "Knowledge transfer: anything the team figures out during the carriage phase carries forward as advantage on the platform. Each Bonnie slip-up identified gives the team a +1 modifier on the round when she signals Clyde. Each Wexler consultation tell noticed gives the team a discount on the cash haggling — up to a 50% reduction in cash spent if the team enters the negotiation already suspicious. The carriage and the early platform reward patient play."
        ], // hidden rules
        [startingActors.bonnieParker, startingActors.clydeBarrow]
    ),

    theDetectivesWake: new Scenario
    (
        5,
        "The Detective's Wake",
        undefined,
        "Detective Beatty was found in his office on Sunday evening, throat cut. The case has been quietly handled by the local force — too quietly. The Lamplighters suspect Beatty had been onto something that got him killed, and the wrong people are now closing the file. Tonight is his wake at the Black Dog, his favorite tavern, where his friends and rivals are gathering to drink to him. The team's contract: identify the killer by last call without disrupting the grief, without drawing weapons, without making the wake a scene. Last call is at midnight. The wake breaks up after.",
        "The Black Dog tavern, eight in the evening, oil lamps low. The taproom is full of mourners — perhaps thirty in the front room, more in the snug. Beatty's hat hangs on a peg by the door, untouched. His chair at the corner table is empty, drink poured into it. The widow — Mrs. Beatty — sits at the bar, sober, watching the room with eyes that have not blinked in an hour. Father Halloran is moving from group to group, offering condolences in a voice trained for grief. Behind the bar, the publican has stopped charging for drinks. The body is upstairs, washed and laid out, but no one has gone up since the priest's first blessing.",
        [
            new Situation // prevSituation
            (
                0,
                "The team was briefed at noon by a Lamplighter named Whitcomb in a back room of the courthouse. They were given a list of likely attendees — Beatty's apprentice, his old partner, his wife, the priest, the rival inspector, the publican, three regulars. Whitcomb said the answer was somewhere on that list. He couldn't say more — he'd been told, by someone he trusted, that pressing harder would end the same way Beatty had. The team accepted the contract, took the cards, and arrived at the Black Dog as mourners.",
                0
            ),
            new Situation // currSituation
            (
                1,
                "The team has settled in. Drinks have been pressed into their hands. Mrs. Beatty has glanced at them once. Father Halloran has not yet approached. The publican — who knows everyone in this room — is washing glasses with the kind of attention a man pays when he wants to overhear. The taproom is loud enough to mask quiet conversation but not loud enough to mask a raised voice. The clock above the bar reads 8:14. Last call is at midnight.",
                55
            )
        ],
        1,
        "Identify Beatty's killer correctly by last call (midnight). Tiered scoring: percentage-based. 0% = wrong identification, or no identification by last call, or any party dies. 50% = correct identification but accompanied by visible commotion (a fistfight, a confession scene, a chase). 75% = quiet correct identification — the team knows, the killer doesn't yet know they know. 100% = quiet correct identification AND the team has gathered enough corroboration to pass to the Lamplighters for action. The 100% tier requires evidence, not just suspicion.",
        "Don't disrupt the grief. Mourners are mourning. The wake is sacred space in this town, and a wake gone wrong becomes a feud that lasts generations. Scoring: percentage-based, starting at 100. Lose points for: drawn weapons, raised voices, accusations made publicly, anyone weeping at the team's hands, the body upstairs being disturbed.",
        [
            "Combat is forbidden. Any drawn weapon ends the scenario.",
            "Last call is at midnight. After that, the wake disperses and the killer leaves with the rest. The team has roughly four in-tavern hours.",
            "The team can question, observe, eavesdrop, and search the house with care. Mrs. Beatty's grief grants the team a certain freedom to move; abuse of it costs.",
            "Each suspect's card includes their name, relationship to Beatty, and last known whereabouts on Sunday. The cards are accurate as far as the Lamplighters know.",
            "The body is upstairs. It can be examined, but going upstairs at any time other than to pay respects will be noticed.",
            "Father Halloran is hearing confessions in the snug. Anything said to him there is sealed by the seal of confession; his observations of the room are his own."
        ], // rules
        [
            "The killer is Father Halloran. Beatty had been investigating a network of clergy who profited from confession secrets, and Halloran was at the center of it. He met Beatty at the office on Sunday under the pretext of friendly conversation, killed him, took the casefile, and walked out the back. He has been at the wake all evening playing the grieving friend.",
            "Halloran's behavior: calm, charismatic, weeping at the appropriate moments. He moves from mourner to mourner with a measured cadence and never lingers more than four minutes anywhere. He will engage the team if approached and will be friendly. Pressed about Sunday evening, he gives an alibi that is solid (a parishioner he was visiting). The alibi is checkable but the parishioner is dying and will agree with whatever Halloran says. A team that finds another way to break the alibi (a witness who saw him near Beatty's office, the casefile in his rectory, a confession he is forced into in his own snug) can land the identification.",
            "Mrs. Beatty's behavior: sharp, watchful, grief-mad. She has not spoken to anyone tonight beyond a nod. She is solving the case herself in real time and is closing on the same answer the team is. If the team does not identify Halloran by 11:30, she will, and she will act on it — a knife from the bar, a quiet word in the snug. Her violence will solve the case but ruin the secondary objective. The team can collaborate with her if they read her well.",
            "Tom Reilly's behavior: Beatty's apprentice, twenty-two, devastated. He drinks more than he should and wants to talk. He knows Beatty's routine, his notebook code, and the address of the rectory key drop. He does not know who the killer is but he has noticed that Father Halloran's hands had no soil on them at this morning's burial blessing — a meticulous priest's hands always being unusually clean would also describe a man who had washed off blood. He hasn't put it together. The team can.",
            "The publican's behavior: knows everyone, says nothing unless asked directly and politely. He saw Halloran enter the tavern at 7:15 with no walking stick — Halloran always carries one — and he found a walking stick in the alley the next morning. He has not connected it to Beatty's death. He will share both observations with the right pressure (sympathy, a story about his own losses, a generous coin).",
            "Inspector Donovan's behavior: the rival inspector at the wake has already begun closing the case. He is the one Whitcomb was warned about. He believes (correctly) that Beatty was murdered, but is being pressured by his superiors to write it up as a self-inflicted accident. Donovan will not actively obstruct the team but will not help them either; he is mourning his own complicity.",
            "The casefile Beatty was working on is not at his office (the local force took it) and not at his home (the killer took it). It is in Father Halloran's rectory, in the priest's own desk, behind the second drawer. A team with a key, a lockpick, or a willing apprentice (Tom Reilly knows the key drop) can recover it.",
            "If the team identifies Halloran but lacks evidence, they have a choice: pass the suspicion to the Lamplighters and accept a 75% main-objective score, or stay and find the evidence and risk Mrs. Beatty solving it first. Risk-reward.",
            "The body upstairs has a bruise on the left wrist that suggests defensive resistance. A team that asks to pay respects and looks carefully will see it. Halloran is right-handed. The bruise pattern argues for an attacker who came from the right.",
            "Last-call mechanic: at 11:00 PM, situation pressure begins to climb sharply. At 11:30, Mrs. Beatty acts unless the team has reached or passed her. At midnight, the wake ends. Each in-tavern hour passes in roughly two rounds of resolution at the LLM's pacing."
        ], // hidden rules
        [startingActors.fatherHalloran, startingActors.mrsBeatty]
    ),

    theStormShelter: new Scenario
    (
        6,
        "The Storm Shelter",
        undefined,
        "A roadside diner on the plains. The sky to the west has gone the color of a bruise and the storm sirens have started up in the next county. The diner's storm cellar holds twelve. The diner contains fifteen people. The storm hits in approximately twenty minutes. The team's contract — vague and verbal, from a Lamplighter who passed through this morning — is to keep an envelope safe. The envelope is in the cook's apron and the cook does not know it is there. Whoever planted it intends to retrieve it from the shelter. The team's job: ensure the envelope and its planted intent stay separated. The shelter is the only safe place tonight.",
        "Kessler's Diner, Highway 81, late afternoon in summer. Eight booths, six counter stools, fluorescent light, a jukebox with a broken record. The west window shows a sky that does not belong to this hour — green at the horizon, black above. The diner's people: Mae the cook, fifty, apron pockets full of receipts and one envelope she doesn't know about; Doris the waitress, twenty; Caudill, a state trooper passing through; Vine, a traveling salesman; two truckers who are not on speaking terms (Ray Linsky and Pete Gomez); Mrs. Sigourney, an elderly woman with a parrot named Dauphin; the Aldrichs, a young couple — clearly newlywed, clearly lying about something; and Crockett, a man in a black suit with a steel briefcase. With the team, that makes more than twelve. The shelter holds twelve. The sirens are getting louder. Mae is calculating who fits and who doesn't and her math is honest.",
        [
            new Situation // prevSituation
            (
                0,
                "The team arrived at Kessler's around 4:30 for coffee, having been in the area on a different errand. The Lamplighter contact who briefed them an hour ago was deliberate but vague — an envelope, a diner, a storm, a planter who would arrive separately, a need to keep the two apart through the night. He could not say what the envelope contained or who the planter was. He said the team would know when. He paid in advance.",
                0
            ),
            new Situation // currSituation
            (
                1,
                "The sirens have just begun. The lights have flickered once. Mae has stopped wiping down the counter and is staring at the west window. Caudill has put his coffee down and stood up. Ray Linsky has glanced at Pete Gomez for the first time tonight and looked away. The Aldrichs are holding hands too hard. Crockett has not moved. Doris is doing the math under her breath. Twenty minutes — maybe less. The shelter door is by the kitchen. Mae has the key on her belt.",
                55
            )
        ],
        1,
        "Ensure the envelope in Mae's apron and the planter who intends to retrieve it remain separated through the storm. Tiered scoring: percentage-based. 0% = the planter retrieves the envelope OR Mae is killed OR the envelope is lost. 50% = the envelope survives but the planter learns the team is interested in it. 75% = clean separation through the storm — planter cannot retrieve, envelope intact. 100% = clean separation AND the team identifies the planter and recovers the envelope into their own custody before the storm passes.",
        "Get everyone into the shelter who needs to be. The shelter holds twelve. There are fifteen plus the team. Choices about who fits and who does not are part of the scenario. Scoring: percentage-based, starting at 100. Lose points for each civilian who dies in the storm because they did not make it into the shelter.",
        [
            "The storm hits in approximately twenty minutes. Once it hits, leaving the shelter is fatal until it passes (approximately three hours).",
            "The shelter door is in the kitchen. Mae has the key. Mae will open the shelter at her own judgment, not before — she has seen storms before and is good at them.",
            "Combat in the diner is loud and visible. Combat in the shelter is intimate and inescapable.",
            "The team can talk to anyone, observe anyone, search subtly. Mae's apron is on Mae and she is moving between counter and kitchen.",
            "The shelter, once closed, will not be reopened until the storm passes. There are no second chances on who got in.",
            "The envelope is in Mae's apron pocket but Mae does not know it is there. She has not patted that pocket since lunch. Asking Mae to check her pockets without explanation will not work."
        ], // rules
        [
            "The planter is Crockett, the man in the black suit with the briefcase. He is a federal courier of a different kind than he appears, and the envelope contains something he will not say aloud — likely names, likely a witness list. He planted it on Mae at lunch (brushed past her at the counter) because he was being followed and needed it off his person; he intends to retrieve it tonight in the shelter when proximity is forced.",
            "Crockett's behavior: calm, patient, very good at small talk in a way that gives him cover. He will not approach Mae directly until the shelter is closed. He will note the team's interest in him quickly — he is professionally observant — and adjust. If he believes the team is hostile, he will switch from retrieval to extraction (kill Mae, take the envelope) at the earliest viable beat.",
            "Mae's behavior: a fifty-year-old plains woman who has run this diner for twenty years. She is calm in storms because she has seen them before. She will choose who goes into the shelter based on who is most likely to die in the diner — children first, elderly second, drunks third. She will not understand requests to seat people in particular places without explanation. She is not stupid; she is busy.",
            "Ray Linsky's behavior: a trucker recently out of prison. He and Pete Gomez (the other trucker) have a history involving a woman, a fight, and a charge that did not stick. Ray is volatile and looking for a reason; the storm will provide one. If Ray is in the shelter and Pete is in the shelter, they will have an incident in the first hour.",
            "Pete Gomez's behavior: also a trucker, also out of prison (different state), also involved in the woman from the previous note. He blames Ray for the years he served. He is the steadier of the two but will not back down.",
            "The Aldrichs' behavior: running. The young couple are not who their licenses say they are; they killed someone in another state two weeks ago in what the local papers will later call self-defense. They are not the planter and not the courier; they are simply hiding in a diner during a storm. They will lie about their identities consistently and convincingly, but a high-WIS character can read the tension. They are not a threat to the team unless cornered.",
            "Caudill's behavior: honest, by-the-book, tired. He has noticed Crockett's briefcase and has not yet decided whether to ask about it. Pressed by the team toward Crockett, he will press Crockett. Pressed by Crockett, he will not press the team. He will go into the shelter and do his job there.",
            "Mrs. Sigourney's parrot, Dauphin, is preternaturally observant and will say things the bird should not know. 'Mae's pocket' is one of them. Whether the parrot says it tonight is the LLM's call based on pacing.",
            "Doris's behavior: twenty and in love with Caudill. She has been since he stopped here a month ago. She is not the courier or the planter; she is a kid with a crush. She will help the team if asked nicely.",
            "Triage math: with three excluded from twelve seats, the question is who is left out. Mae will exclude based on storm-survival logic. The team can advocate for or against specific exclusions, but will be heard only if their reasoning is plausible. Excluded persons may die in the diner if the storm is severe enough, which it is.",
            "Closed-shelter dynamics: in the shelter, the team is in close contact with everyone for three hours. Crockett's retrieval window opens. Ray and Pete will fight unless something else dominates the room. The team's task in the shelter is to keep Crockett and Mae apart, manage the Linsky/Gomez incident, and stay watchful — without combat, since combat in a closed cellar with civilians is a final-objective failure.",
            "The envelope: if recovered, it should not be opened. Opening it changes the scenario in ways the briefing did not authorize. The Lamplighters will not punish the team for opening it but will not reward it either. The contents are: a witness list of names Crockett's people are protecting from a different faction. Future-mission seed."
        ], // hidden rules
        [startingActors.crockett, startingActors.rayLinsky]
    )
}

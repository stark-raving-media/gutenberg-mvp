// Create Scenario class
export class Scenario
{
    constructor
    (
        id,
        scenarioName,
        scenarioDesc, // Scenario prompt
        scene, // current description
        situations = [],
        currSituation, // int (Situation id)
        mainObj, // main objective desc
        secObj, // secondary obj desc
        rules = [], // array of rule desc
        hiddenRules = [], // array of rule desc
        opposition = [] // array of Actors
    )
    {
        this.id = id,
        this.scenarioName = scenarioName,
        this.scenarioDesc = scenarioDesc,
        this.scene = scene,
        this.situations = situations,
        this.currSituation = currSituation,
        this.mainObj = mainObj,
        this.secObj = secObj,
        this.rules = rules,
        this.hiddenRules = hiddenRules,
        this.opposition = opposition
    }
}
// Situation Obj
// id (number)
// description
// score
import newDrop from './actions/newDrop'
import initial from './actions/initial'
import finalAction from './actions/final-action'


export const routes = [
    {   
        path: 'initial', 
        text: /hi|hello|Hi|Hello/, 
        action: initial
        childRoutes: [
            { 
                path: 'drops', 
                payload: 'new-drop', 
                action: newDrop
            },
        ],        
    },

    // end of actions 
    { path: 'end-of-flow', payload: 'return', action: finalAction },
]

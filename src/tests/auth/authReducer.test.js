import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";
describe('Test with authReducer', () => {




    test('should return a default state', () => {

        const state = authReducer({logged: false}, {});

        expect(state).toEqual({logged:false});
      


    });

    test('should authenticate and put the user name', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'oliver'
            }
        }

        const state = authReducer({logged: false}, action);

        expect(state).toEqual({logged:true, name:'oliver'});


       
    });

    test('should delete the user name and logged in false', () => {

        const action = {
            type: types.logout
           
        }

        const state = authReducer({logged: true, name: 'Oliver'}, action);

        expect(state).toEqual({logged:false});

        
    })




})

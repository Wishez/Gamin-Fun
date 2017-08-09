 import expect from 'expect'; 
import deepFreeze from 'deep-freeze';
import dataBySite, { initState } from './../reducers/dataBySite.js';
import { register } from './../actions/accountActions.js';
export const testSuccesRegister = () => {
    const action = register('minecraft', true, 'Вы успешно прошли регистрацию');
    const stateAfter = {
    	...initState,
    	minecraft: {
    		...initState['minecraft'],
    		registered: true,
    		registerMessage: 'Вы успешно прошли регистрацию'
    	}
    };
    deepFreeze(initState);
    deepFreeze(action);

    expect(
    	dataBySite(initState, action)
    ).toEqual(stateAfter);
    console.log('testSuccesRegister states are equal');
};

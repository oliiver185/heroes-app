import { mount } from "enzyme"
import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../components/login/loginScreen"
import '@testing-library/jest-dom';
import React from 'react';
import { types } from "../../../types/types";


describe('Pruebas en <LoginScreen/>', () => {


    const historyMock = {

        replace: jest.fn()

    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false

        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen history={historyMock} />
        </AuthContext.Provider>
    );


    test('should show correctly', () => {




        expect(wrapper).toMatchSnapshot();

    });


    test('should login and navegate', () => {

      const handleClick = wrapper.find('button').prop('onClick');
    // wrapper.find('button').simulate('click');

    handleClick();

      expect(wrapper.find('button').exists()).toBe(true);
      expect(contextValue.dispatch).toHaveBeenCalledWith({
          type: types.login,
          payload:{
              name: 'Oli'
          }
      });

      expect(historyMock.replace).toHaveBeenCalledWith('/');

      localStorage.setItem('lastPath', '/dc');
      handleClick();

      expect(historyMock.replace).toHaveBeenCalledWith('/dc');

    });


    test('should ', () => {
        
    })
    



})

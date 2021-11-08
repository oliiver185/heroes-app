import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/Searchscreen';


describe('Pruebas en <SearchScreen/>', () => {

      const wrapper = mount(
          <MemoryRouter initialEntries={['/search']}>
              <Route path="/search" component={SearchScreen}/>
          </MemoryRouter>
      )


    test('should show default values', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a Hero');
    });
    

    test('should show batman and input with the query value', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('batman');
            expect(wrapper).toMatchSnapshot();



    });

    test('should show an error if the hero does not exist', () => {
        

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );

        expect(wrapper.find('.alert-danger').exists()).toBe(true)
        expect(wrapper.find('.alert-danger').text().trim()).toBe('There is no a hero with batman123')
            expect(wrapper).toMatchSnapshot();

    });


    test('should call push of of history ', () => {

       const history ={
           push: jest.fn()
       };

       const wrapper = mount(
                <MemoryRouter initialEntries={['/search?q=batman123']}>
                    <Route 
                        path="/search" 
                         component={() => <SearchScreen history={history}/> }           
                    />
                </MemoryRouter>

            );
       
       
        wrapper.find('input').simulate('change', {
            target: {
                name:  'serchText',
                value: 'batman'
            } 
        })

        wrapper.find('form').prop('onSubmit')(
            {
                preventDefault(){}
            }
        )
        
        expect(history.push).toHaveBeenCalled();
        

        
        

        
    })
    
    
    
    
})

import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router-dom"
import { HeroScreen } from "../../../components/heros/HeroScreen"


describe('test in <HeroScreen/>', () => {



    const historyMock = {
    lenght: 10,
         push: jest.fn(),
         goBack: jest.fn()
    }
    
    
    test('should show redirect component if there are no arguments in the URL ', () => {
        const wrapper = mount(
            
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={historyMock}/>
            </MemoryRouter>
                /* initialentries va a ser un objeto con el url y los elementos que necesito enviarle  */
        );
        

        expect(wrapper.find('Redirect').exists()).toBe(true);
    })

    test('should should show a hero if the parameter exists ', () => {

        const wrapper = mount(
            
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
               <Route
                path="/hero/:heroId" 
                component={HeroScreen}/>
            </MemoryRouter>


        
                
        );
        
        expect(wrapper.find('.row').exists()).toBe(true);
    });

    test('should return to the last window with PUSH', () => {
        


        const historyMock = {
            length: 1,
             push: jest.fn(),
             goBack: jest.fn()
        }

        const wrapper = mount(
            
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
               <Route
                path="/hero/:heroId" 
                component={() => <HeroScreen history={historyMock} /> }
                />
            </MemoryRouter>         
        );


            wrapper.find('button').prop('onClick')();
        // expect(wrapper.find('button').exists()).toBe(true);
        
        expect(historyMock.push).toHaveBeenCalledWith('/');
        expect(historyMock.goBack).toHaveBeenCalledTimes(0);



        
        
    })


    test('should return to the last screen ', () => {
        
        const wrapper = mount(
            
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
               <Route
                path="/hero/:heroId" 
                component={() => <HeroScreen history={historyMock} /> }
                />
            </MemoryRouter>         
        );


            wrapper.find('button').prop('onClick')();
        // expect(wrapper.find('button').exists()).toBe(true);
        
        expect(historyMock.goBack).toHaveBeenCalledTimes(1);
        expect(historyMock.push).toHaveBeenCalledTimes(0);
    })
    

    test('should return redirect if the hero does not exist ', () => {
        
        const wrapper = mount(
            
            <MemoryRouter initialEntries={['/hero/marvel-spider654654']}>
               <Route
                path="/hero/:heroId" 
                component={() => <HeroScreen history={historyMock} /> }
                />
            </MemoryRouter>         
        );


        expect(wrapper.text()).toBe('');

            // wrapper.find('button').prop('onClick')();
        // expect(wrapper.find('button').exists()).toBe(true);
        
        // expect(historyMock.goBack).toHaveBeenCalledTimes(1);
        // expect(historyMock.push).toHaveBeenCalledTimes(0);
    })
    
    
    
    
})

import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { PrivateRoute } from "../../routers/PrivateRoute"



describe('Tests with <PrivateRoute/>', () => {

    const props = {
        location:{
            pathname: '/marvel'
        }
    }


    Storage.prototype.setItem =jest.fn();

    test('should show the component if is authenticated and saved it on localstorage ', () => {
       
{/* Memoryrouter es un higher order component para hacer pruebas de router con ciertas  */}
//    shallow no me va a funcionar cuando se trabaja con estos hihgher components entonces debemos usar mount

    // const wrapper = shallow(
        const wrapper = mount(   
       <MemoryRouter> 

       
            <PrivateRoute
            isAuthenticated={true}
            component={()=> <span>listo!</span>}
            {...props}
            />
            </MemoryRouter>
        );

        console.log(wrapper.html());
        expect(wrapper.find('span').exists()).toBe(true);
         expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');   
        
    });


    test('should locked the component if is not authenticated', () => {
        
        const wrapper = mount(   
            <MemoryRouter> 
     
            
                 <PrivateRoute
                 isAuthenticated={false}
                 component={()=> <span>listo!</span>}
                 {...props}
                 />
                 </MemoryRouter>
             );


             expect(wrapper.find('span').exists()).toBe(false);
         expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel'); 


    })
    


    
})

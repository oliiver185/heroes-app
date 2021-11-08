import { mount } from "enzyme"
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { AuthContext } from "../../auth/AuthContext";
import { MemoryRouter } from "react-router-dom";
describe('Pruebas with <DasboardRoutes/> ', () => {
    
    const props = {
        location:{
            pathname: '/marvel'
        }
    }

    const contextValue ={
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'oli'
        }
    }

    test('should show correctly', () => {
        

        const wrapper = mount(
            
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter> 
                
                <DashboardRoutes 
               isAuthenticated={true}
               component={()=> <span>listo!</span>}
               {...props}
                />
            </MemoryRouter>
            </AuthContext.Provider>

        )
        

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('oli');
    });

    
})

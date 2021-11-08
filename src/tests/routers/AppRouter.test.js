import { mount, shallow } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter";

describe('Tests in <AppRouter/>', () => {
    
    
    const contextValue ={
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
    test('should show login if is not athenticated', () => {
        


        const wrapper = mount(
            
            <AuthContext.Provider value={contextValue}>

                <AppRouter/>
            </AuthContext.Provider>
        );


        expect(wrapper).toMatchSnapshot();

        console.log(wrapper.html());

    });
    

    test('should show marvel component if is authenticated', () => {
        
        const contextValue ={
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'oli'
            }
        }

        const wrapper = mount(
            
            <AuthContext.Provider value={contextValue}>

                <AppRouter/>
            </AuthContext.Provider>
        );


        // expect(wrapper).toMatchSnapshot();

        // console.log(wrapper.html());

        expect(wrapper.find('.navbar').exists()).toBe(true);

    });
    


});

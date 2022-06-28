import { shallowMount } from '@vue/test-utils';
import Counter from '@/pages/Counter.vue';

describe('Counter component tests', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount( Counter );
    })
    
    test('Should match snapshot', () => {
        expect ( wrapper.html() ).toMatchSnapshot();
    });

    test('When "+1" is clicked, counter must go up one number', async() => {

        const btn_addOne = wrapper.find('[data-test-id="addOne"]')
        await btn_addOne.trigger('click');
        
        const counter = wrapper.find('span').text();

        expect ( counter ).toBe( '1' );
    });

    test('Should restart the counter to 0', async() => {

        const btn_addOne = wrapper.find('[data-test-id="addOne"]')
        await btn_addOne.trigger('click');
        await btn_addOne.trigger('click');

        const btn_restart = wrapper.find('[data-test-id="restart"]')
        await btn_restart.trigger('click');
        
        const counter = wrapper.find('span').text();

        expect (counter).toBe( '0' );
    });
})

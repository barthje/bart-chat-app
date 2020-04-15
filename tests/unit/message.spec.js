import { createLocalVue, mount } from '@vue/test-utils';
import Message from '../../src/components/Message';
import date from '../../src/filter/date';

describe('Message.vue', () => {
  it('shows the message properties', () => {
    const localVue = createLocalVue();

    localVue.filter('date', date);

    const message = {
      name: 'Test user',
      message: 'Test message',
      datetime: '2020-03-11T12:40:38'
    };
    const wrapper = mount(Message, {
      localVue,
      propsData: { message }
    });

    const nameToTest = wrapper.find('[data-testid="name"]');
    const datetimeToTest = wrapper.find('[data-testid="datetime"]');

    expect(nameToTest.element.innerHTML).toContain(message.name);
    expect(datetimeToTest.element.innerHTML).toContain(date(message.datetime));
  });
});

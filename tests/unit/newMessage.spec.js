import { mount } from '@vue/test-utils';
import NewMessage from '../../src/components/NewMessage';
import messageService from '../../src/services/message';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('NewMessage.vue', () => {
  it('posts the message', () => {
    const currentDate = new Date();
    global.Date = jest.fn(() => currentDate);
    messageService.post = jest.fn();

    const message = {
      name: 'Test user',
      message: 'Test message',
      datetime: currentDate
    };

    const wrapper = mount(NewMessage, {
      propsData: { name: message.name }
    });

    const input = wrapper.find('[data-testid="message-input"]');
    input.setValue(message.message);

    wrapper.find('form').trigger('submit');

    expect(messageService.post).toBeCalledWith(message);
    expect(wrapper.vm.$data.message).toBe('');
  });
});

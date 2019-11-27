import Mail from '../lib/Mail';

export default {
  key: 'NotificationMail',
  options: {
    priority: 2
  },
  async handle({ data }) {
    const { user } = data;
    //const { user: { name, email } } = data;

    await Mail.sendMail({
      from: 'Teste2 <teste2@teste2.com.br>',
      to: `${user.name} <${user.email}>`,
      //to: `${ name } <${ email }>`,
      subject: 'Notification - pay your bills',
      html: 'C.R.E.A.M'
    });
  }
}
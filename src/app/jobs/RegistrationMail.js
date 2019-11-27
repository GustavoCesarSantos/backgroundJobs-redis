import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  options: {
    priority: 1
  },
  async handle({ data }) {
    const { user } = data;
    //const { user: { name, email } } = data;

    await Mail.sendMail({
      from: 'Teste1 <teste1@teste1.com.br>',
      to: `${user.name} <${user.email}>`,
      //to: `${ name } <${ email }>`,
      subject: 'Cadastro de usuário',
      html: 'Teste teste teste teste :D'
    });
  }
}
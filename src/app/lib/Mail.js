import nodemailer from 'nodemailer';

import MailConfig from '../../config/Mail';

export default nodemailer.createTransport(MailConfig);
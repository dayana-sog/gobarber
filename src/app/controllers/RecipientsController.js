import * as Yup from 'yup';
import Recipients from '../models/Recipients';

class RecipientsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      rua: Yup.string().required(),
      numero_casa: Yup.string().required(),
      complemento: Yup.string(),
      cidade: Yup.string().required(),
      estado: Yup.string().required(),
      cep: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const recipientsExists = await Recipients.findOne({
      where: { nome: req.body.nome },
    });

    if (recipientsExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const newRecipient = await Recipients.create(req.body);

    return res.json({
      message: 'Registered successfully',
      data: { newRecipient },
    });
  }

  async index(req, res) {
    const showAllRec = await Recipients.findAll();

    return res.json(showAllRec);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string(),
      rua: Yup.string(),
      numero_casa: Yup.number(),
      complemento: Yup.string(),
      estado: Yup.string(),
      cidade: Yup.string(),
      cep: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Validation fails' });
    }

    const recipient = await Recipients.findByPk(req.params.id);

    if (!recipient) {
      return res.status(400).json({
        message: 'Recipient not found.',
      });
    }

    const recipientUpdated = await Recipients.update(req.body);

    return res.json({
      message: 'Updated successfully!',
      data: recipientUpdated,
    });
  }
}

export default new RecipientsController();

import 'dotenv/config';

import Queue from './lib/Queue';

// Para rodar a fila em um servidor diferente do core da aplicação.
Queue.processQueue();

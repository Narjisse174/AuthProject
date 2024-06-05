import { sign } from 'jsonwebtoken';

async function login(request, reply) {
 
  const { username, password } = request.body;
  if (username === 'narjisse' && password === 'password') {
  
    const token = sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

   
    return { token };
  } else {
    
    reply.status(401).send({ message: 'Identifiants invalides' });
  }
}

async function signup(request, reply) {

  const { username } = request.body;
  const token = sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return { token };
}

export default { login, signup };

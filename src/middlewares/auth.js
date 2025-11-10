const adminAuth = (req, res, next) => {
  console.log('Admin auth is getting checked...');
  const token = 'xyz';
  const isAutherizedUser = token === 'xyz';
  if (!isAutherizedUser) {
    res.status(401).send('Unautherized User');
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log('User auth is getting checked...');
  const token = 'xyz';
  const isAutherizedUser = token === 'xyz';
  if (!isAutherizedUser) {
    res.status(401).send('Unautherized User');
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};

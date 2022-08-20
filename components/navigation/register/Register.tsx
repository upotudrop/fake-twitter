import styles from './Register.module.css';
import Button from '@mui/material/Button';
export interface IRegister {}

const Register: React.FC<IRegister> = () => {
  return (
    <section className={styles.container}>
      <h1>Welcome to fake twitter!</h1>
      <div className={styles.break}></div>
      <p>If you haven't created an account yet, you can register here</p>
      <div className={styles.break}></div>
      <Button variant="contained" style={{backgroundColor: '#12adc1', marginBottom: 10}}>
        Register Here
      </Button>
    </section>
  );
};

export default Register;
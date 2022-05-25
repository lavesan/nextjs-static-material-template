import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    // <div className={styles.container}>
    //   <main className={styles.main}>
    //     Corpo
    //   </main>

    //   <footer className={styles.footer}>
    //     Rodapé
    //   </footer>
    // </div>
    <Container maxWidth='lg'>
      <Box
        sx={{
          my: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' color='primary'>
          Material UI v5 with Next.js in TypeScript
        </Typography>
        <p style={{ color: 'red' }}>Teste</p>
        <Typography component='h2' color='secondary'>
          Boilerplate for building faster.
        </Typography>
      </Box>
    </Container>
  )
}

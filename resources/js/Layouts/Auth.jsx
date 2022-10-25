function Auth({ children }) {
  return (
    <main className='main-content'>
      <div className='container min-vh-100 d-flex align-content-center justify-content-center'>
        <div className='row w-100 justify-content-center align-items-center'>
          <div className='col-xl-4 col-lg-5 col-md-7 d-flex flex-column'>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Auth;

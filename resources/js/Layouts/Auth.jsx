function Auth({ children }) {
  return (
    <main className='main-content'>
      <section>
        <div className='page-header min-vh-100'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto'>
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Auth;

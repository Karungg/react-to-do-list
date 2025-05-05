const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-7xl p-4 gap-4 flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="w-full sm:w-1/2 flex justify-center items-center p-4 rounded-lg text-center">
          <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl">
            To do list
          </h1>
        </div>
        <div className="w-full sm:w-1/2 p-4 rounded-lg">
          <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl">
            {children}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Layout;
